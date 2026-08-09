#!/usr/bin/env node
// The hero card. One self-contained SVG per theme, no external references,
// no embedded font, no third-party service.
//
// Two deliberate departures from every flagship "dashboard" profile README:
//  1. viewBox, not a fixed 985px width. Roughly half of GitHub traffic is
//     mobile and every fixed-pixel hero out there is unreadable there.
//  2. the card paints its own opaque background. Firefox always resolves the
//     light branch of <picture> inside an <img>-loaded SVG, and GitHub's theme
//     toggle does not affect prefers-color-scheme at all, so a mismatch is
//     guaranteed for some readers. Painting our own ground turns that from
//     "invisible text" into "a light card on a dark page".
//
// Every number on this card comes from data/stats.json. Nothing is invented.

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { THEMES, MONO, mono, measureMono, wordmark, rect, svgDoc, esc, n, fmt } from './lib/kit.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const S = JSON.parse(readFileSync(join(ROOT, 'data', 'stats.json'), 'utf8'));

const W = 880;
const H = 340;
const PAD = 56;
const RIGHT = W - PAD;

const stamp = (iso, tz) =>
  new Intl.DateTimeFormat('en-GB', {
    timeZone: tz, year: 'numeric', month: 'short', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hour12: false,
  }).format(new Date(iso)).replace(',', '');

function build(theme) {
  const T = THEMES[theme];
  const parts = [];
  const uid = `h${theme[0]}`;

  // ---- ground ------------------------------------------------------------
  parts.push(rect(0, 0, W, H, 20, T.bg));
  parts.push(`<rect x="0.75" y="0.75" width="${W - 1.5}" height="${H - 1.5}" rx="19.25" fill="none" stroke="${T.line}" stroke-width="1.5"/>`);
  parts.push(`<rect x="0" y="0" width="${W}" height="${H}" rx="20" fill="url(#${uid}dots)"/>`);
  parts.push(`<ellipse cx="250" cy="120" rx="330" ry="150" fill="url(#${uid}glow)" class="glow"/>`);

  // ---- title bar ---------------------------------------------------------
  const dots = [T.faint, T.faint, T.accent];
  dots.forEach((c, i) => parts.push(`<circle cx="${28 + i * 18}" cy="26" r="5" fill="${c}"${i === 2 ? ' class="pulse"' : ''}/>`));
  parts.push(mono({ x: 88, y: 30.5, size: 12.5, fill: T.dim, text: 'ubhay@rtx5060:~/github' }));
  parts.push(mono({
    x: RIGHT, y: 30.5, size: 12.5, fill: T.faint, anchor: 'end',
    text: `${S.repos.total} repos · ${S.repos.public} public · ${S.repos.private} private`,
  }));
  parts.push(`<path d="M0,48 H${W}" stroke="${T.lineSoft}" stroke-width="1"/>`);
  parts.push(`<rect x="0" y="46" width="${W}" height="2" fill="${T.accent}" class="scan"/>`);

  // ---- wordmark ----------------------------------------------------------
  const wm = wordmark({ x: PAD, y: 80, scale: 1.05, stroke: T.text, weight: 8.5, gap: 17 });
  parts.push(wm.markup);

  // ---- tagline -----------------------------------------------------------
  const line1 = 'builds local-first systems on one 8 GB card';
  // Sized to clear the clock panel at x=548 with a 16px gutter. Widen this and
  // it slides underneath the panel, which is exactly what it did the first time.
  const line2 = 'llama.cpp internals, Supabase products, Electron tools, ad automation';
  const t1w = measureMono(line1, 14) + 16;
  parts.push(`<g clip-path="url(#${uid}type)">`);
  parts.push(mono({ x: PAD, y: 202, size: 14, fill: T.accent, text: '>' }));
  parts.push(mono({ x: PAD + 16, y: 202, size: 14, fill: T.text, text: line1 }));
  parts.push(`</g>`);
  parts.push(`<rect x="${n(PAD + 16 + measureMono(line1, 14) + 3)}" y="191" width="8" height="15" fill="${T.accent}" class="caret"/>`);
  parts.push(mono({ x: PAD, y: 224, size: 11, fill: T.dim, text: line2, cls: 'fade2' }));

  // ---- commit clock (real hour histogram) --------------------------------
  const px = 548, py = 72, pw = 276, ph = 176;
  parts.push(rect(px, py, pw, ph, 12, T.panel2));
  parts.push(`<rect x="${px + 0.5}" y="${py + 0.5}" width="${pw - 1}" height="${ph - 1}" rx="11.5" fill="none" stroke="${T.line}"/>`);
  parts.push(mono({ x: px + 16, y: py + 24, size: 9.5, fill: T.dim, text: 'COMMIT CLOCK', letter: 1.6 }));
  parts.push(mono({ x: px + pw - 16, y: py + 24, size: 9.5, fill: T.faint, anchor: 'end', text: `${S.rhythm.sampled} commits` }));

  const bh = S.rhythm.byHour;
  const bmax = Math.max(1, ...bh);
  // Vertical budget inside the panel (py=72, ph=176, bottom=248):
  //   header 96 / bars 112-180 / axis 195 / rule 208 / text 224 / text 240
  // Raising the baseline is what stops the axis labels colliding with the text.
  const chartX = px + 16, chartW = pw - 32, base = py + 108, maxBar = 68;
  const gap = 2;
  const bw = (chartW - gap * 23) / 24;
  const peakHour = bh.indexOf(bmax);
  bh.forEach((v, h) => {
    const bhh = Math.max(2, (v / bmax) * maxBar);
    const x = chartX + h * (bw + gap);
    const isPeak = h === peakHour;
    parts.push(
      `<rect x="${n(x)}" y="${n(base - bhh)}" width="${n(bw)}" height="${n(bhh)}" rx="1.5"`
      + ` fill="${isPeak ? T.accent : T.accent2}" opacity="${isPeak ? 1 : 0.55}"`
      + ` class="bar" style="animation-delay:${n(0.9 + h * 0.022)}s;transform-origin:${n(x + bw / 2)}px ${n(base)}px"/>`
    );
  });
  parts.push(`<path d="M${chartX},${base + 0.5} H${chartX + chartW}" stroke="${T.line}"/>`);
  [[0, '00'], [6, '06'], [12, '12'], [18, '18'], [23, '23']].forEach(([h, label]) => {
    parts.push(mono({ x: chartX + h * (bw + gap) + bw / 2, y: base + 15, size: 8.5, fill: T.faint, text: label, anchor: 'middle', pin: false }));
  });
  const nightPct = (S.rhythm.nightShare * 100).toFixed(0);
  const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  parts.push(`<path d="M${px + 16},${py + ph - 40} H${px + pw - 16}" stroke="${T.line}"/>`);
  parts.push(mono({ x: px + 16, y: py + ph - 24, size: 10.5, fill: T.text, text: `busiest hour  ${String(peakHour).padStart(2, '0')}:00 IST` }));
  parts.push(mono({
    x: px + 16, y: py + ph - 8, size: 10.5, fill: T.dim,
    text: `${nightPct}% at night, peak ${WD[S.rhythm.peak.weekday]} ${String(S.rhythm.peak.hour).padStart(2, '0')}:00`,
  }));

  // ---- language ribbon ---------------------------------------------------
  const ribY = 268, ribH = 13, ribW = RIGHT - PAD;
  const langs = S.languages.slice(0, 9);
  const shown = langs.reduce((a, l) => a + l.pct, 0);
  parts.push(`<g clip-path="url(#${uid}wipe)">`);
  let cx = PAD;
  langs.forEach((l) => {
    const segW = (l.pct / 100) * ribW;
    parts.push(`<rect x="${n(cx)}" y="${ribY}" width="${n(Math.max(0, segW - 1.5))}" height="${ribH}" rx="3" fill="${l.color || T.dim}"/>`);
    cx += segW;
  });
  if (shown < 100) {
    parts.push(`<rect x="${n(cx)}" y="${ribY}" width="${n(Math.max(0, PAD + ribW - cx))}" height="${ribH}" rx="3" fill="${T.faint}" opacity="0.5"/>`);
  }
  parts.push(`</g>`);

  let lx = PAD;
  langs.slice(0, 5).forEach((l) => {
    parts.push(`<circle cx="${n(lx + 4)}" cy="${ribY + 33}" r="4" fill="${l.color || T.dim}"/>`);
    const label = `${l.name} ${l.pct.toFixed(1)}%`;
    parts.push(mono({ x: lx + 14, y: ribY + 37, size: 10.5, fill: T.dim, text: label }));
    lx += 14 + measureMono(label, 10.5) + 22;
  });
  parts.push(mono({
    x: RIGHT, y: ribY + 37, size: 10.5, fill: T.faint, anchor: 'end',
    text: `${S.languages.length} languages / ${fmt.bytes(S.languageTotalBytes)}`,
  }));

  // ---- provenance --------------------------------------------------------
  const prov = `generated ${stamp(S.generatedAt, S.tz)} IST · ${S.graphqlCost} graphql points · `
    + `${fmt.int(S.repos.totalCommits)} commits · last push ${S.latestCommit ? S.latestCommit.ago + ' to ' + S.latestCommit.repo : 'unknown'}`;
  parts.push(mono({ x: PAD, y: 322, size: 9.5, fill: T.faint, text: prov }));

  // ---- defs --------------------------------------------------------------
  const defs = `
<pattern id="${uid}dots" width="22" height="22" patternUnits="userSpaceOnUse">
  <circle cx="1" cy="1" r="1" fill="${T.grid}"/>
</pattern>
<radialGradient id="${uid}glow">
  <stop offset="0%" stop-color="${T.accent}" stop-opacity="${theme === 'dark' ? 0.13 : 0.09}"/>
  <stop offset="100%" stop-color="${T.accent}" stop-opacity="0"/>
</radialGradient>
<clipPath id="${uid}type"><rect x="${PAD}" y="186" width="${n(t1w)}" height="24" class="typerect"/></clipPath>
<clipPath id="${uid}wipe"><rect x="${PAD}" y="${ribY}" width="${n(ribW)}" height="${ribH}" class="wiperect"/></clipPath>`;

  // Resting state is the default everywhere below. Each animation runs FROM a
  // hidden state using fill-mode backwards, so killing animation shows the
  // finished card rather than an empty box.
  const css = `
.wm{stroke-dasharray:100;stroke-dashoffset:0;animation:draw 1.05s cubic-bezier(.6,0,.3,1) backwards,ink .5s ease 1.05s backwards}
@keyframes draw{from{stroke-dashoffset:100}}
@keyframes ink{from{stroke:${T.accent}}}
.caret{animation:blink 1.05s steps(1,end) infinite}
@keyframes blink{50%{opacity:0}}
.typerect{animation:type 1.5s steps(${line1.length + 2},end) .55s backwards}
@keyframes type{from{width:0}}
.fade2{animation:rise .7s ease 1.7s backwards}
@keyframes rise{from{opacity:0;transform:translateY(6px)}}
.wiperect{animation:wipe 1.1s cubic-bezier(.4,0,.2,1) 1.5s backwards}
@keyframes wipe{from{width:0}}
.bar{animation:grow .5s cubic-bezier(.3,1.3,.5,1) backwards}
@keyframes grow{from{transform:scaleY(0)}}
.scan{opacity:0;animation:sweep 2.4s ease-out .2s}
@keyframes sweep{0%{opacity:.9;transform:translateY(0)}70%{opacity:.25}100%{opacity:0;transform:translateY(272px)}}
.pulse{animation:beat 3.4s ease-in-out infinite}
@keyframes beat{0%,100%{opacity:1}50%{opacity:.35}}
.glow{animation:breathe 9s ease-in-out infinite}
@keyframes breathe{0%,100%{opacity:1}50%{opacity:.62}}`;

  const desc = `${S.profile.login} on GitHub. ${S.repos.total} repositories, ${S.repos.public} public. `
    + `${fmt.int(S.repos.totalCommits)} commits. Top languages ${S.languages.slice(0, 3).map((l) => `${l.name} ${l.pct.toFixed(0)}%`).join(', ')}. `
    + `${nightPct} percent of commits land between 11pm and 6am.`;

  return svgDoc({ w: W, h: H, title: 'Ubhay - builds local-first systems on one 8 GB card', desc, css, defs, body: parts.join('\n') });
}

for (const theme of ['dark', 'light']) {
  const out = join(ROOT, 'assets', `hero-${theme}.svg`);
  const svg = build(theme);
  writeFileSync(out, svg);
  console.log(`hero-${theme}.svg  ${(svg.length / 1024).toFixed(1)} KB`);
}
