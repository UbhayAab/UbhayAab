#!/usr/bin/env node
// Renders game/draft.json into:
//   play/draft.md   the full archive, every puzzle
//   game/today.md   one puzzle, spliced into the README by splice.mjs
//
// Options are displayed in a stable shuffled order rather than by probability,
// because listing them ranked would put the answer first every time.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const D = JSON.parse(readFileSync(join(ROOT, 'game', 'draft.json'), 'utf8'));

const show = (t) => t.replace(/ /g, '\u00b7').replace(/\n/g, '\\n').replace(/`/g, "'");
const pct = (p) => `${(p * 100).toFixed(1)}%`;
// Surprisal in bits: how many bits of information this token carries.
const bits = (p) => (-Math.log2(Math.max(p, 1e-12))).toFixed(2);

const hash = (s) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i += 1) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
};

function renderPuzzle(p, index, { heading = true } = {}) {
  const order = p.candidates
    .map((c, i) => ({ c, i, k: hash(p.prefix + c.token) }))
    .sort((a, b) => a.k - b.k);

  const lines = [];
  if (heading) lines.push(`### ${index}. ${p.difficulty} &nbsp;<sub>${p.entropy.toFixed(2)} bits of entropy</sub>`, '');
  lines.push(`> ${p.prefix} **___**`, '');
  lines.push('Which token does the model rank first? Open one to find out.', '');

  for (const { c, i } of order) {
    const right = i === 0;
    lines.push(`<details><summary><code>${show(c.token)}</code></summary>`);
    lines.push('');
    lines.push(
      right
        ? `**Correct.** The model's top token, at **${pct(c.pNorm)}** of the visible mass, carrying ${bits(c.pNorm)} bits.`
        : `**No.** \`${show(c.token)}\` is rank ${i + 1} at ${pct(c.pNorm)}. `
          + `The model wanted \`${show(p.candidates[0].token)}\` at ${pct(p.candidates[0].pNorm)}.`
    );
    lines.push('');
    lines.push('| rank | token | probability | surprisal |');
    lines.push('|---|---|---|---|');
    p.candidates.forEach((cc, r) => {
      lines.push(`| ${r + 1} | \`${show(cc.token)}\` | ${pct(cc.pNorm)} | ${bits(cc.pNorm)} bits |`);
    });
    lines.push('');
    lines.push('</details>');
    lines.push('');
  }
  return lines.join('\n');
}

// Daily rotation. Uses the date so the README puzzle changes once a day
// without anything having to run a model.
const dayIndex = Math.floor(Date.now() / 86400000) % D.puzzles.length;
const today = D.puzzles[dayIndex];

const todayMd = `## The Draft

<a name="the-draft"></a>

A real next-token distribution from \`${D.model}\`, measured on the machine described above.
No model runs to serve this page: the probabilities were computed once and committed, so the
game has no runtime at all.

${renderPuzzle(today, dayIndex + 1, { heading: false })}
Today's puzzle carries **${today.entropy.toFixed(2)} bits** of entropy out of a possible
${Math.log2(5).toFixed(2)}, which is the polite way of saying the model is not confident either.
A new one appears every day.

**[All ${D.puzzles.length} puzzles](./play/draft.md)** if one is not enough.
`;

const archive = `# The Draft

${D.puzzles.length} real next-token distributions from \`${D.model}\`, running locally on
${D.host}. Guess which token the model ranks first, then open it.

**Method.** ${D.method}

Nothing here runs at read time. The distributions were computed once by
[\`scripts/gen-draft.mjs\`](../scripts/gen-draft.mjs) and committed, which is why this works
with no server, no GitHub Action and no JavaScript. Median entropy across the set is
**${D.medianEntropy} bits** of a possible ${Math.log2(5).toFixed(2)}, so a coin flip does
better here than intuition usually does.

Generated ${D.generatedAt.slice(0, 16).replace('T', ' ')} UTC.

---

${D.puzzles.map((p, i) => renderPuzzle(p, i + 1)).join('\n---\n\n')}

---

[Back to the profile](https://github.com/UbhayAab) &middot; [Raw data](../game/draft.json)
`;

mkdirSync(join(ROOT, 'play'), { recursive: true });
writeFileSync(join(ROOT, 'game', 'today.md'), todayMd);
writeFileSync(join(ROOT, 'play', 'draft.md'), archive);
console.log(
  `game/today.md   puzzle ${dayIndex + 1}/${D.puzzles.length} (${today.difficulty}, ${today.entropy.toFixed(2)} bits)\n`
  + `play/draft.md   ${(Buffer.byteLength(archive) / 1024).toFixed(0)} KB, ${D.puzzles.length} puzzles`
);
