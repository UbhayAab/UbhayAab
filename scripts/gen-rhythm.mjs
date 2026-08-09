#!/usr/bin/env node
// The 7x24 commit rhythm heatmap.
//
// This deliberately replaces the two things every profile README ships: the
// 53x7 contribution calendar and the snake that eats it. Both are on tens of
// thousands of profiles and neither tells you anything. A weekday-by-hour grid
// built from real committedDate values says something specific and true about
// how one person actually works, and essentially nobody ships it.
//
// Hours are bucketed in Asia/Kolkata via Intl, not UTC, so the picture is his
// day rather than a timezone artefact.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { THEMES, mono, measureMono, rect, svgDoc, n } from './lib/kit.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const S = JSON.parse(readFileSync(join(ROOT, 'data', 'stats.json'), 'utf8'));

// Vertical budget: header 56 / hour axis 78 / grid 92-270 / legend 292-304 /
// insight 330. H must stay above 330 + descender + margin or the legend and
// the insight sentence land on top of each other.
const W = 880;
const H = 346;
const PAD = 56;
const RIGHT = W - PAD;
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const hex = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
const mix = (a, b, t) => {
  const [r1, g1, b1] = hex(a);
  const [r2, g2, b2] = hex(b);
  const ch = (x, y) => Math.round(x + (y - x) * Math.max(0, Math.min(1, t)));
  return `#${[ch(r1, r2), ch(g1, g2), ch(b1, b2)].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
};

function build(theme) {
  const T = THEMES[theme];
  const p = [];
  const uid = `r${theme[0]}`;
  const cells = S.rhythm.cells;
  const max = Math.max(1, S.rhythm.max);

  p.push(rect(0, 0, W, H, 20, T.bg));
  p.push(`<rect x="0.75" y="0.75" width="${W - 1.5}" height="${H - 1.5}" rx="19.25" fill="none" stroke="${T.line}" stroke-width="1.5"/>`);

  // header
  p.push(mono({ x: PAD, y: 40, size: 13, fill: T.text, text: 'WHEN THE COMMITS LAND', letter: 2.4 }));
  p.push(mono({
    x: RIGHT, y: 40, size: 11, fill: T.faint, anchor: 'end',
    text: `${S.rhythm.sampled} timestamps · ${S.rhythm.tz}`,
  }));
  p.push(`<path d="M${PAD},56 H${RIGHT}" stroke="${T.lineSoft}"/>`);

  // geometry
  const gx = PAD + 34;          // leave a gutter for the weekday labels
  const gy = 92;
  const gap = 4;
  const cw = (RIGHT - gx - 23 * gap) / 24;
  const chh = 22;

  // hour axis
  for (let h = 0; h < 24; h += 3) {
    p.push(mono({
      x: gx + h * (cw + gap) + cw / 2, y: 78, size: 9.5, fill: T.faint,
      text: String(h).padStart(2, '0'), anchor: 'middle', pin: false,
    }));
  }

  // grid
  let filled = 0;
  for (let d = 0; d < 7; d += 1) {
    const y = gy + d * (chh + gap);
    p.push(mono({ x: PAD, y: y + chh / 2 + 3.5, size: 10, fill: T.dim, text: DAYS[d] }));
    for (let h = 0; h < 24; h += 1) {
      const v = cells[d][h];
      const t = v === 0 ? 0 : 0.22 + 0.78 * Math.sqrt(v / max);
      const fill = v === 0 ? T.panel2 : mix(T.accent2, T.accent, Math.sqrt(v / max));
      if (v > 0) filled += 1;
      const x = gx + h * (cw + gap);
      p.push(
        `<rect x="${n(x)}" y="${n(y)}" width="${n(cw)}" height="${chh}" rx="4" fill="${fill}"`
        + (v === 0 ? '' : ` opacity="${n(t)}"`)
        + ` class="c" style="animation-delay:${n((d * 24 + h) * 0.0055)}s;transform-origin:${n(x + cw / 2)}px ${n(y + chh / 2)}px">`
        + `<title>${DAYS[d]} ${String(h).padStart(2, '0')}:00 · ${v} commit${v === 1 ? '' : 's'}</title></rect>`
      );
    }
  }

  // legend
  const ly = gy + 7 * (chh + gap) + 18;
  p.push(mono({ x: PAD, y: ly + 9, size: 9.5, fill: T.faint, text: 'quiet' }));
  let lx = PAD + measureMono('quiet', 9.5) + 10;
  for (let i = 0; i <= 4; i += 1) {
    const t = i / 4;
    p.push(rect(lx, ly, 20, 12, 3, i === 0 ? T.panel2 : mix(T.accent2, T.accent, t), i === 0 ? '' : ` opacity="${n(0.22 + 0.78 * t)}"`));
    lx += 24;
  }
  p.push(mono({ x: lx + 2, y: ly + 9, size: 9.5, fill: T.faint, text: `busy (${max} commits)` }));

  const peak = S.rhythm.peak;
  p.push(mono({
    x: RIGHT, y: ly + 9, size: 9.5, fill: T.dim, anchor: 'end',
    text: `${filled} of 168 slots used`,
  }));

  // the sentence that makes the picture mean something
  const night = (S.rhythm.nightShare * 100).toFixed(0);
  const weekend = (() => {
    let we = 0, all = 0;
    for (let d = 0; d < 7; d += 1) for (let h = 0; h < 24; h += 1) {
      all += cells[d][h];
      if (d === 0 || d === 6) we += cells[d][h];
    }
    return all ? Math.round((100 * we) / all) : 0;
  })();
  p.push(mono({
    x: PAD, y: H - 16, size: 11, fill: T.dim,
    text: `busiest slot ${DAYS[peak.weekday]} ${String(peak.hour).padStart(2, '0')}:00 with ${peak.count} commits`
      + ` · ${night}% land 23:00-06:00 · ${weekend}% on weekends`,
  }));

  const css = `
.c{animation:pop .42s cubic-bezier(.34,1.5,.5,1) backwards}
@keyframes pop{from{transform:scale(.2);opacity:0}}`;

  return svgDoc({
    w: W, h: H,
    title: 'Commit rhythm: weekday by hour',
    desc: `A 7 by 24 heatmap of ${S.rhythm.sampled} real commit timestamps in ${S.rhythm.tz}. `
      + `Busiest slot is ${DAYS[peak.weekday]} at ${peak.hour}:00 with ${peak.count} commits. `
      + `${night} percent of commits land between 11pm and 6am, ${weekend} percent on weekends.`,
    css, body: p.join('\n'),
  });
}

for (const theme of ['dark', 'light']) {
  const svg = build(theme);
  writeFileSync(join(ROOT, 'assets', `rhythm-${theme}.svg`), svg);
  console.log(`rhythm-${theme}.svg  ${(svg.length / 1024).toFixed(1)} KB`);
}
