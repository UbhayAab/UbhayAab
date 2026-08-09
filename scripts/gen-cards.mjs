#!/usr/bin/env node
// Project cards. Narrative comes from data/projects.json, every number comes
// from data/stats.json. Splitting it that way means a card can go stale in its
// prose but never in its facts.
//
// Sized 428x176 so two sit side by side in a 50%/50% README table and stay
// legible when GitHub reflows to one column on mobile.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { THEMES, mono, measureMono, rect, svgDoc, n, fmt } from './lib/kit.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const S = JSON.parse(readFileSync(join(ROOT, 'data', 'stats.json'), 'utf8'));
const P = JSON.parse(readFileSync(join(ROOT, 'data', 'projects.json'), 'utf8'));

// Vertical budget: header 31 / title 62 / desc 86,101,116 / rule 132 /
// chips 142-158 / metric 180 / sub 194 / bar 196.
// The chips used to sit at metric-24, which put them straight on top of the
// third description line. They get their own row now.
const W = 428;
const H = 208;

const byName = new Map(S.topRepos.map((r) => [r.name, r]));
const maxCommits = Math.max(...S.topRepos.map((r) => r.commits), 1);

/** Every metric is computed from live repo data, never hand-entered. */
function metric(kind, r, cfg) {
  const ageDays = Math.max(1, Math.floor((Date.now() - new Date(r.createdAt)) / 86400000));
  switch (kind) {
    case 'cpp-bytes': {
      const cpp = S.languages.find((l) => l.name === 'C++');
      const cuda = S.languages.find((l) => l.name === 'Cuda');
      const total = (cpp?.bytes || 0) + (cuda?.bytes || 0);
      return { big: fmt.bytes(total), small: 'of C++ and CUDA tracked' };
    }
    case 'live':
      return { big: 'in production', small: cfg.live || r.url.replace('https://github.com/', '') };
    case 'size':
      return { big: fmt.bytes(r.diskKB * 1024), small: `${r.commits} commits, ${ageDays} days old` };
    case 'velocity':
      return { big: `${(r.commits / ageDays).toFixed(1)}/day`, small: `${r.commits} commits in ${ageDays} days` };
    default:
      return { big: `${r.commits}`, small: 'commits' };
  }
}

const relative = (iso) => {
  const d = Math.floor((Date.now() - new Date(iso)) / 86400000);
  if (d <= 0) return 'pushed today';
  if (d === 1) return 'pushed yesterday';
  if (d < 31) return `pushed ${d}d ago`;
  return `pushed ${Math.round(d / 30.44)}mo ago`;
};

function card(cfg, theme) {
  const T = THEMES[theme];
  const r = byName.get(cfg.repo);
  if (!r) throw new Error(`projects.json references a repo that does not exist: ${cfg.repo}`);
  const uid = `c${cfg.repo.replace(/[^a-z0-9]/gi, '')}${theme[0]}`;
  const p = [];
  const m = metric(cfg.metric, r, cfg);

  p.push(rect(0, 0, W, H, 14, T.panel));
  p.push(`<rect x="0.75" y="0.75" width="${W - 1.5}" height="${H - 1.5}" rx="13.25" fill="none" stroke="${T.line}" stroke-width="1.5"/>`);
  // accent spine, grows on load
  p.push(`<rect x="0" y="14" width="3" height="${H - 28}" rx="1.5" fill="${r.languageColor || T.accent}" class="spine" style="transform-origin:0 ${H / 2}px"/>`);

  // header
  p.push(`<circle cx="24" cy="27" r="4.5" fill="${r.languageColor || T.dim}"/>`);
  p.push(mono({ x: 35, y: 31, size: 11, fill: T.dim, text: r.name }));
  const tag = r.isPrivate ? 'PRIVATE' : 'PUBLIC';
  const tagW = measureMono(tag, 8.5, 1.2) + 16;
  p.push(rect(W - 20 - tagW, 19, tagW, 16, 8, r.isPrivate ? T.panel2 : 'none',
    ` stroke="${r.isPrivate ? T.line : T.good}" stroke-width="1"`));
  p.push(mono({ x: W - 20 - tagW / 2, y: 30, size: 8.5, fill: r.isPrivate ? T.faint : T.good, text: tag, anchor: 'middle', letter: 1.2, pin: false }));

  // title
  p.push(mono({ x: 24, y: 62, size: 17, fill: T.text, text: cfg.title, letter: -0.3 }));

  // description
  cfg.lines.forEach((ln, i) => {
    p.push(mono({ x: 24, y: 86 + i * 15, size: 10, fill: T.dim, text: ln }));
  });

  // divider
  p.push(`<path d="M24,132 H${W - 24}" stroke="${T.lineSoft}"/>`);

  // stack chips, own row
  let sx = 24;
  cfg.stack.forEach((s) => {
    const cwid = measureMono(s, 8.5) + 14;
    p.push(rect(sx, 142, cwid, 16, 8, T.panel2));
    p.push(mono({ x: sx + cwid / 2, y: 153.5, size: 8.5, fill: T.dim, text: s, anchor: 'middle', pin: false }));
    sx += cwid + 6;
  });

  // headline metric. Font size steps down for long qualitative values like
  // "in production" so they never run into the right-hand column.
  const my = 176;
  const msize = m.big.length > 9 ? 15 : 19;
  p.push(mono({ x: 24, y: my, size: msize, fill: T.accent, text: m.big, letter: -0.4 }));
  p.push(mono({ x: 24, y: my + 15, size: 9.5, fill: T.faint, text: m.small }));

  // commit bar, relative to his most-committed repo
  const barW = (W - 48) * (r.commits / maxCommits);
  p.push(rect(24, H - 9, W - 48, 3, 1.5, T.lineSoft));
  p.push(`<g clip-path="url(#${uid}b)"><rect x="24" y="${H - 9}" width="${n(Math.max(2, barW))}" height="3" rx="1.5" fill="${r.languageColor || T.accent}" opacity="0.9"/></g>`);
  p.push(mono({ x: W - 24, y: my, size: 10.5, fill: T.dim, anchor: 'end', text: `${r.commits} commits` }));
  p.push(mono({ x: W - 24, y: my + 15, size: 9.5, fill: T.faint, anchor: 'end', text: relative(r.pushedAt) }));

  const defs = `<clipPath id="${uid}b"><rect x="24" y="${H - 12}" width="${n(W - 48)}" height="9" class="barclip"/></clipPath>`;
  const css = `
.spine{animation:spine .6s cubic-bezier(.4,0,.2,1) .1s backwards}
@keyframes spine{from{transform:scaleY(0)}}
.barclip{animation:bar .9s cubic-bezier(.4,0,.2,1) .35s backwards}
@keyframes bar{from{width:0}}`;

  return svgDoc({
    w: W, h: H,
    title: `${cfg.title} (${r.name})`,
    desc: `${cfg.title}. ${cfg.lines.join(' ')} ${m.big} ${m.small}. `
      + `${r.isPrivate ? 'Private repository' : 'Public repository'}, ${r.commits} commits, ${relative(r.pushedAt)}.`,
    css, defs, body: p.join('\n'),
  });
}

// A repo missing from stats.json means the token could not see it, not that
// the config is wrong. Warn and leave the existing card in place rather than
// failing the whole build and leaving the README half rendered.
let written = 0;
for (const cfg of P.featured) {
  if (!byName.has(cfg.repo)) {
    console.warn(`skip card-${cfg.repo}: not in stats.json, keeping the committed asset`);
    continue;
  }
  for (const theme of ['dark', 'light']) {
    writeFileSync(join(ROOT, 'assets', `card-${cfg.repo}-${theme}.svg`), card(cfg, theme));
  }
  written += 1;
  console.log(`card-${cfg.repo}-*.svg`);
}
console.log(`cards: ${written}/${P.featured.length} regenerated`);
