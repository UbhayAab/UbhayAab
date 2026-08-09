// Shared design kit for every generated SVG in this repo.
// Hard rules enforced here so no generator can violate them:
//   - no external references of any kind (img-loaded SVG blocks them anyway)
//   - every animation sits behind a prefers-reduced-motion gate
//   - resting state is the DEFAULT, animation runs *from* a hidden state,
//     so reduced-motion users see finished art rather than a blank box
//   - every card paints its own opaque background, so a theme mismatch
//     (Firefox always resolves the light branch inside <img>) degrades to
//     "light card on a dark page" instead of "invisible text"

export const THEMES = {
  dark: {
    id: 'dark',
    bg: '#06070B',
    panel: '#0B0D13',
    panel2: '#101420',
    line: '#1B2130',
    lineSoft: '#141926',
    text: '#EDF0F7',
    dim: '#7C8699',
    faint: '#3C4457',
    accent: '#FF7A18',
    accent2: '#4D7CFE',
    good: '#38D9A9',
    grid: '#0F131D',
    shadow: '#000000',
  },
  light: {
    id: 'light',
    bg: '#FBFBFD',
    panel: '#FFFFFF',
    panel2: '#F3F4F8',
    line: '#DDE1EA',
    lineSoft: '#EAEDF3',
    text: '#0C0E14',
    dim: '#5B6474',
    faint: '#AAB2C0',
    accent: '#E2620A',
    accent2: '#2F5CE0',
    good: '#0E9F71',
    grid: '#F0F2F7',
    shadow: '#8892A6',
  },
};

// A monospace stack that resolves on every platform without shipping a font.
// textLength + lengthAdjust="spacing" pins the width so per-platform metric
// differences move letter-spacing, never layout.
export const MONO = "ui-monospace,'SF Mono','Cascadia Mono','JetBrains Mono','Fira Code',Menlo,Consolas,monospace";
export const SANS = "system-ui,-apple-system,'Segoe UI',Inter,Roboto,'Helvetica Neue',Arial,sans-serif";

// Advance width of one character as a fraction of font-size, for the common
// monospace faces above. Used to pre-size textLength so nothing overflows.
export const CH = 0.6;

export const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// Round to 3dp and hard-fail on non-finite values. A NaN in an SVG attribute
// produces a well-formed file that renders as empty space with no error
// anywhere, which is the single nastiest failure mode in this whole project.
export const n = (v) => {
  if (!Number.isFinite(v)) throw new Error(`non-finite number reached SVG output: ${v}`);
  return Math.round(v * 1000) / 1000;
};

/**
 * Monospace text with a pinned advance width.
 * @param {object} o
 */
export function mono(o) {
  const {
    x, y, size = 12, fill, text, weight = 400, anchor = 'start',
    opacity = 1, cls = '', letter = 0, pin = true, style = '',
  } = o;
  const t = String(text);
  const width = t.length * size * CH + letter * Math.max(0, t.length - 1);
  const pinAttr = pin && t.length > 1
    ? ` textLength="${n(width)}" lengthAdjust="spacing"`
    : '';
  return `<text x="${n(x)}" y="${n(y)}" font-family="${MONO}" font-size="${n(size)}"`
    + ` font-weight="${weight}" fill="${fill}" text-anchor="${anchor}"`
    + (opacity !== 1 ? ` opacity="${n(opacity)}"` : '')
    + (cls ? ` class="${cls}"` : '')
    + (letter ? ` letter-spacing="${n(letter)}"` : '')
    + (style ? ` style="${style}"` : '')
    + `${pinAttr}>${esc(t)}</text>`;
}

export function measureMono(text, size, letter = 0) {
  return String(text).length * size * CH + letter * Math.max(0, String(text).length - 1);
}

/**
 * The UBHAY wordmark, hand-authored as stroked geometric paths.
 * Zero font dependency, and pathLength="100" normalises every glyph so the
 * draw-on animation can use a single dasharray for all of them.
 */
const GLYPHS = {
  U: ['M0,0 V50 C0,70 14,84 31,84 C48,84 62,70 62,50 V0'],
  B: [
    'M0,0 V84',
    'M0,0 H36 C50,0 57,8 57,20 C57,32 50,40 36,40 H0',
    'M0,40 H38 C53,40 62,49 62,62 C62,75 53,84 38,84 H0',
  ],
  H: ['M0,0 V84', 'M62,0 V84', 'M0,44 H62'],
  A: ['M0,84 L31,0 L62,84', 'M12,56 H50'],
  Y: ['M0,0 L31,44 L62,0', 'M31,44 V84'],
};

/**
 * @param {object} o
 * @returns {{markup:string,width:number,height:number,strokes:number}}
 */
export function wordmark(o) {
  const { x, y, scale = 1, stroke, weight = 9, gap = 18, word = 'UBHAY', delay = 0.12, animate = true } = o;
  const unitW = 62;
  let cursor = 0;
  let idx = 0;
  const parts = [];
  for (const ch of word) {
    const paths = GLYPHS[ch];
    if (!paths) throw new Error(`no glyph authored for "${ch}"`);
    for (const d of paths) {
      parts.push(
        `<path d="${d}" pathLength="100" transform="translate(${n(cursor)},0)"`
        + ` class="wm"${animate ? ` style="animation-delay:${n(delay * idx)}s"` : ''}/>`
      );
    }
    idx += 1;
    cursor += unitW + gap;
  }
  const width = cursor - gap;
  return {
    markup:
      `<g transform="translate(${n(x)},${n(y)}) scale(${n(scale)})" fill="none" stroke="${stroke}"`
      + ` stroke-width="${n(weight)}" stroke-linecap="round" stroke-linejoin="round">`
      + parts.join('')
      + `</g>`,
    width: width * scale,
    height: 84 * scale,
    strokes: parts.length,
  };
}

/** Rounded rect helper. */
export const rect = (x, y, w, h, r, fill, extra = '') =>
  `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" rx="${n(r)}" fill="${fill}"${extra}/>`;

/**
 * Wraps the document. Every generator must route through this so the
 * reduced-motion gate and the no-external-refs guarantee are structural.
 */
export function svgDoc({ w, h, title, desc, css, body, defs = '' }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n(w)} ${n(h)}" width="${n(w)}" height="${n(h)}" role="img" aria-labelledby="t d" preserveAspectRatio="xMidYMid meet">
<title id="t">${esc(title)}</title><desc id="d">${esc(desc)}</desc>
<defs>${defs}</defs>
<style>
${css}
@media (prefers-reduced-motion: reduce){*{animation:none!important;transition:none!important}}
</style>
${body}
</svg>
`;
}

/** Human formatting used across every card so numbers read consistently. */
export const fmt = {
  int: (v) => Number(v).toLocaleString('en-US'),
  compact: (v) => {
    const x = Number(v);
    if (x >= 1e9) return (x / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
    if (x >= 1e6) return (x / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (x >= 1e3) return (x / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
    return String(x);
  },
  bytes: (v) => {
    const u = ['B', 'KB', 'MB', 'GB'];
    let x = Number(v), i = 0;
    while (x >= 1024 && i < u.length - 1) { x /= 1024; i += 1; }
    return `${x < 10 ? x.toFixed(1) : Math.round(x)} ${u[i]}`;
  },
  pct: (v, d = 1) => `${Number(v).toFixed(d)}%`,
};

/** Deterministic RNG so regenerating with identical data yields an identical file. */
export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}
