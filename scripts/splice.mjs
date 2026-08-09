#!/usr/bin/env node
// Fills the <!-- BEGIN:X --> / <!-- END:X --> regions of README.tpl.md and
// writes README.md.
//
// The template is the source of truth for prose and structure; this file owns
// everything that changes on its own. Editing README.md directly is pointless,
// the next run overwrites it.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(ROOT, p), 'utf8');
const S = JSON.parse(read('data/stats.json'));
const P = JSON.parse(read('data/projects.json'));
const BENCH = existsSync(join(ROOT, 'data/bench.json')) ? JSON.parse(read('data/bench.json')) : null;
const DRAFT = existsSync(join(ROOT, 'game/state.json')) ? JSON.parse(read('game/state.json')) : null;

const int = (v) => Number(v).toLocaleString('en-US');
const bytes = (v) => {
  const u = ['B', 'KB', 'MB', 'GB'];
  let x = Number(v), i = 0;
  while (x >= 1024 && i < u.length - 1) { x /= 1024; i += 1; }
  return `${x < 10 ? x.toFixed(1) : Math.round(x)} ${u[i]}`;
};
const stamp = (iso) => new Intl.DateTimeFormat('en-GB', {
  timeZone: S.tz, year: 'numeric', month: 'short', day: '2-digit',
  hour: '2-digit', minute: '2-digit', hour12: false,
}).format(new Date(iso)).replace(',', '');

// ---------------------------------------------------------------- prose ----
// Numbers land harder in a sentence than in a badge row, they cannot 503, and
// a screen reader can actually read them.
const top3 = S.languages.slice(0, 3).map((l) => `${l.name} ${l.pct.toFixed(0)}%`).join(', ');
const night = (S.rhythm.nightShare * 100).toFixed(0);
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const prose = `${int(S.repos.total)} repositories, ${S.repos.public} of them public, ${int(S.repos.totalCommits)} commits between them.
Mostly ${top3}, across ${S.languages.length} languages and ${bytes(S.languageTotalBytes)} of tracked source.
${S.contributions.activeDays} active days in the last year, longest run ${S.contributions.longestStreak}.
${night}% of commits land between 23:00 and 06:00, and the single busiest hour of the week is
${DAYS[S.rhythm.peak.weekday]} at ${String(S.rhythm.peak.hour).padStart(2, '0')}:00.
${S.latestCommit ? `Last push ${S.latestCommit.ago} to [\`${S.latestCommit.repo}\`](https://github.com/${S.profile.login}/${S.latestCommit.repo}) &mdash; \`${S.latestCommit.message.replace(/[|`]/g, '').slice(0, 72)}\`.` : ''}`
  .replace(/&mdash;/g, '-');

// ---------------------------------------------------------------- cards ----
// valign="top" is mandatory. Without it, unequal cells centre themselves and
// the grid looks broken on any row where one card is taller.
const cardCell = (cfg) => {
  const r = S.topRepos.find((x) => x.name === cfg.repo);
  const alt = `${cfg.title}: ${cfg.lines.join(' ')}`.replace(/"/g, '');
  return `<td width="50%" valign="top">
<a href="${r.url}">
<picture>
<source media="(prefers-color-scheme: dark)" srcset="./assets/card-${cfg.repo}-dark.svg">
<source media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" srcset="./assets/card-${cfg.repo}-light.svg">
<img alt="${alt}" src="./assets/card-${cfg.repo}-light.svg" width="100%">
</picture>
</a>
</td>`;
};

const rows = [];
for (let i = 0; i < P.featured.length; i += 2) {
  rows.push(`<tr>\n${P.featured.slice(i, i + 2).map(cardCell).join('\n')}\n</tr>`);
}
const privateCount = P.featured.filter((c) => S.topRepos.find((r) => r.name === c.repo)?.isPrivate).length;
const cards = `<table width="100%">
${rows.join('\n')}
</table>

${privateCount ? `${privateCount} of these four are private repositories. The links are real; they will 404 unless you have access.\n` : ''}`;

// ---------------------------------------------------------------- bench ----
let bench = '';
if (BENCH) {
  const ok = BENCH.results.filter((r) => r.genTps);
  const rowsB = BENCH.results.map((r) => {
    const gpu = r.gpuFraction === null || r.gpuFraction === undefined
      ? '-'
      : r.fullyOnGpu ? '100%' : `**${(r.gpuFraction * 100).toFixed(0)}%**`;
    return `| \`${r.model}\` | ${r.params || '-'} | ${r.quant || '-'} | ${r.sizeGB} GB | ${gpu} | ${r.genTps ? `**${r.genTps}**` : 'failed'} | ${r.promptTps ? r.promptTps.toFixed(0) : '-'} |`;
  }).join('\n');
  const s = BENCH.summary;

  // The headline finding, computed rather than asserted: find the largest
  // model that still beats a smaller one, which is the whole point.
  let inversion = null;
  for (const fast of [...ok].sort((a, b) => b.genTps - a.genTps)) {
    const slowerButSmaller = ok.find((r) => r.sizeGB < fast.sizeGB && r.genTps < fast.genTps);
    if (slowerButSmaller) { inversion = { fast, slow: slowerButSmaller }; break; }
  }

  bench = `<details>
<summary><b>What actually runs on an 8 GB card, measured</b></summary>

Every number below came off the laptop this profile is maintained on, today.
Nothing is quoted from a spec sheet and nothing is estimated.

**Method.** ${BENCH.method} Generation throughput and prompt throughput are
reported separately, because averaging them together is how people accidentally
publish flattering numbers.

| Model | Params | Quant | On disk | In VRAM | Generation tok/s | Prompt tok/s |
|---|---|---|---|---|---|---|
${rowsB}

${inversion
      ? `**The finding: file size does not predict throughput.** \`${inversion.fast.model}\` is
**${(inversion.fast.sizeGB - inversion.slow.sizeGB).toFixed(1)} GB larger on disk** than \`${inversion.slow.model}\`
and still generates **${(inversion.fast.genTps / inversion.slow.genTps).toFixed(1)}x faster**
(${inversion.fast.genTps} vs ${inversion.slow.genTps} tok/s).

Bytes on disk are parameters plus embeddings. Throughput is set by how many of
those parameters have to be touched per token, which is a much smaller number
when a model keeps most of its capacity in per-layer embeddings rather than in
the dense stack. That gap is the entire argument for the
[Gemma 4 PLE port](#work): an architecture that decouples stored capacity from
per-token compute is worth more on a small card than any quantisation trick
applied to a dense model.`
      : `Not enough spread in these results to draw a conclusion about size versus speed.`}

${BENCH.gpuUsed === false && BENCH.gpu?.present
      ? `**The result I did not go looking for.** Every model in this run reported
\`size_vram = 0\`. The ${BENCH.gpu.name} is sitting right there with ${BENCH.gpu.vramGB} GB
and driver ${BENCH.gpu.driver}, and the runtime logged \`offloaded 0/43 layers to GPU\`
with an empty \`GPULayers:[]\`.

So the table above is CPU throughput on a machine with a perfectly good unused GPU in it.
The obvious move was to publish these as GPU numbers and never mention it. They are labelled
as what they are instead, because a page that only reports its wins is a brochure.

The likely cause is a runtime built against a CUDA version with no kernels for this card's
compute capability, which is a normal thing to hit on a new architecture and a normal thing
to fix by updating the runtime. It is being fixed. The numbers here will be re-measured and
this paragraph will change, which is the point of generating the page from a script rather
than typing it.`
      : ''}

${s.offloadPenalty
      ? `Separately, the offload penalty: models fully resident in VRAM run at a median **${s.onGpuMedianTps} tok/s**, models that spill to system RAM at **${s.offloadMedianTps} tok/s**, a **${s.offloadPenalty}x** difference.`
      : ''}

Measured ${stamp(BENCH.measuredAt)} IST on ${BENCH.host}. Raw output including
every run: [\`data/bench.json\`](./data/bench.json).
Reproduce with [\`scripts/bench-local.mjs\`](./scripts/bench-local.mjs).

</details>`;
}

// ---------------------------------------------------------------- draft ----
let draft = '';
if (DRAFT && DRAFT.active) {
  const g = DRAFT;
  const links = g.candidates.map((c, i) => {
    const title = encodeURIComponent(`draft|${g.gameId}|${g.step}|${i}`);
    const body = encodeURIComponent(
      'Press Submit. You do not need to change anything above.\n\n'
      + 'A GitHub Action will play your token, ask the model for the next five candidates, '
      + 'redraw the board and close this issue. It takes about 40 seconds.'
    );
    const label = JSON.stringify(c.token).slice(1, -1).replace(/\|/g, '');
    return `[\`${label}\`<br>${(c.p * 100).toFixed(1)}%](https://github.com/${S.profile.login}/${S.profile.login}/issues/new?title=${title}&body=${body})`;
  });
  draft = `## The Draft

<a name="the-draft"></a>

The internet is performing greedy decoding by committee, one token at a time,
against a real language model running inside a GitHub Action.

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/draft-${g.step}-dark.svg">
    <source media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" srcset="./assets/draft-${g.step}-light.svg">
    <img alt="The passage so far: ${g.text.replace(/"/g, '').slice(0, 200)}" src="./assets/draft-${g.step}-light.svg" width="880">
  </picture>
</p>

**Pick the next token.** Click one, then press Submit on the issue that opens.
You do not have to type anything.

| ${g.candidates.map((_, i) => `rank ${i + 1}`).join(' | ')} |
|${g.candidates.map(() => '---').join('|')}|
| ${links.join(' | ')} |

The model's own choice is rank 1. Every time the crowd picks something else it
adds **surprisal debt**, measured in nats: \`sum(-log p(crowd)) - sum(-log p(greedy))\`.
Current debt is **${g.debt.toFixed(2)} nats** over ${g.step} tokens. Lower is
more predictable. Higher is more interesting.

Takes about 40 seconds per move. Moves queue, so a burst is fine.

`;
}

// ---------------------------------------------------------------- repos ----
const repoRows = S.topRepos
  .filter((r) => r.commits > 0)
  .map((r) => {
    const name = r.isPrivate ? `\`${r.name}\` <sub>private</sub>` : `[\`${r.name}\`](${r.url})`;
    const desc = (r.description || '').replace(/\|/g, '/').slice(0, 84);
    return `| ${name} | ${r.language || '-'} | ${int(r.commits)} | ${bytes(r.diskKB * 1024)} | ${r.pushedAt.slice(0, 10)} | ${desc} |`;
  }).join('\n');

const repos = `<details>
<summary><b>Every repository, ${S.repos.total} of them</b></summary>

Sorted by commits. Private ones are listed because leaving them out makes the
work look thinner than it is; their links are omitted rather than dangled.

| Repo | Language | Commits | Size | Last push | |
|---|---|---|---|---|---|
${repoRows}

</details>`;

// --------------------------------------------------------------- footer ----
// A visible generation stamp. Every live card in the wild silently lies about
// how fresh it is; saying so out loud turns the discipline into content, and
// guarantees the file changes on every run, which keeps the 60-day
// scheduled-workflow clock resetting on real content rather than a keepalive hack.
const footer = `---

<p align="center">
<sub>
Generated ${stamp(S.generatedAt)} IST from ${S.graphqlCost} GraphQL points in ${(S.elapsedMs / 1000).toFixed(1)}s.
Run #${S.runId || 'local'}. Rebuilds every 6 hours and on every push.
<br>
Every image on this page is generated by <a href="./scripts">a script in this repo</a> and committed as a file.
Nothing is fetched from a third-party image service, so nothing here can break when one of them goes down.
<br>
Machine-readable: <a href="./data/stats.json">stats.json</a> &middot; <a href="./data/history.jsonl">history.jsonl</a> &middot; <a href="./data/bench.json">bench.json</a>
</sub>
</p>`;

// ---------------------------------------------------------------- splice ----
const REGIONS = { PROSE: prose, CARDS: cards, DRAFT: draft, BENCH: bench, REPOS: repos, FOOTER: footer };

let out = read('README.tpl.md');
for (const [key, value] of Object.entries(REGIONS)) {
  const re = new RegExp(`<!-- BEGIN:${key} -->[\\s\\S]*?<!-- END:${key} -->`);
  if (!re.test(out)) throw new Error(`README.tpl.md is missing the ${key} region`);
  out = out.replace(re, `<!-- BEGIN:${key} -->\n${value}\n<!-- END:${key} -->`);
}

// Collapse the blank space left behind by an empty region so the rendered page
// does not grow a gap where the draft game will eventually live.
out = out.replace(/\n{3,}/g, '\n\n');

writeFileSync(join(ROOT, 'README.md'), out);
const kb = Buffer.byteLength(out) / 1024;
console.log(`README.md  ${kb.toFixed(1)} KB  (${Object.entries(REGIONS).filter(([, v]) => v).map(([k]) => k).join(', ')})`);
if (kb > 60) {
  console.error('README is over 60 KB of markdown, which is well past where this should live');
  process.exit(1);
}
