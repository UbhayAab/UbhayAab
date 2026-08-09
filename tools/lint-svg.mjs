#!/usr/bin/env node
// Hard gate in front of the commit step.
//
// The bug this exists to catch: SVG silently ignores an unparseable numeric
// attribute. A single NaN produces a well-formed file that renders as empty
// space, with no error in the browser console and no error in the workflow log.
// You find out when someone tells you your profile is blank.
//
// Everything checked here has actually broken a profile README for somebody.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'assets');
const MAX_KB = 120;

const RULES = [
  {
    id: 'poisoned-number',
    // Word-bounded so a legitimate "null" inside <desc> prose is not a false
    // positive, while width="NaN" is caught.
    test: (s) => {
      const m = s.match(/="[^"]*\b(NaN|undefined|Infinity)\b[^"]*"/g);
      return m ? `attribute contains ${m.slice(0, 3).join(', ')}` : null;
    },
  },
  {
    id: 'external-reference',
    // An <img>-loaded SVG runs in secure static mode and will not fetch these
    // anyway, so any that appear are a silently broken visual.
    test: (s) => {
      const bad = [...s.matchAll(/(?:href|xlink:href|src)\s*=\s*"(?!#|data:)([^"]+)"/g)].map((m) => m[1]);
      const urls = [...s.matchAll(/url\((?!#)([^)]*)\)/g)].map((m) => m[1]);
      const all = [...bad, ...urls].filter((u) => !u.startsWith('data:'));
      return all.length ? `references ${all.slice(0, 3).join(', ')}` : null;
    },
  },
  {
    id: 'script-tag',
    test: (s) => (/<script|on[a-z]+\s*=\s*"/i.test(s) ? 'contains a script or inline handler' : null),
  },
  {
    id: 'missing-viewbox',
    test: (s) => (/<svg[^>]*viewBox=/.test(s) ? null : 'no viewBox, so it cannot scale on mobile'),
  },
  {
    id: 'missing-reduced-motion',
    test: (s) => (
      s.includes('prefers-reduced-motion')
        ? null
        : 'no prefers-reduced-motion gate (animated SVG is not wrapped in GitHub\'s image player, so it ignores the setting unless we honour it)'
    ),
  },
  {
    id: 'missing-a11y-text',
    test: (s) => (/<title[^>]*>[^<]{4,}/.test(s) && /<desc[^>]*>[^<]{10,}/.test(s) ? null : 'missing a real <title> or <desc>'),
  },
  {
    id: 'unbalanced-xml',
    test: (s) => {
      // Cheap well-formedness proxy: tag stack must unwind exactly.
      const stack = [];
      const re = /<(\/?)([a-zA-Z][\w:-]*)((?:"[^"]*"|'[^']*'|[^>"'])*?)(\/?)>/g;
      let m;
      while ((m = re.exec(s))) {
        const [, close, name, , self] = m;
        if (self === '/') continue;
        if (close === '/') {
          if (stack.pop() !== name) return `tag mismatch near </${name}>`;
        } else {
          stack.push(name);
        }
      }
      return stack.length ? `unclosed tag <${stack[stack.length - 1]}>` : null;
    },
  },
  {
    id: 'duplicate-ids',
    // Two elements sharing an id inside one document silently breaks whichever
    // url(#id) reference resolves second.
    test: (s) => {
      const ids = [...s.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
      const dupes = ids.filter((v, i) => ids.indexOf(v) !== i);
      return dupes.length ? `duplicate id ${[...new Set(dupes)].join(', ')}` : null;
    },
  },
];

let failures = 0;
let checked = 0;
const files = readdirSync(DIR).filter((f) => f.endsWith('.svg')).sort();

if (files.length === 0) {
  console.error('lint: no SVGs in assets/, the generators did not run');
  process.exit(1);
}

for (const f of files) {
  const path = join(DIR, f);
  const s = readFileSync(path, 'utf8');
  const kb = statSync(path).size / 1024;
  checked += 1;
  const problems = [];
  for (const rule of RULES) {
    const why = rule.test(s);
    if (why) problems.push(`${rule.id}: ${why}`);
  }
  if (kb > MAX_KB) problems.push(`oversize: ${kb.toFixed(0)} KB exceeds the ${MAX_KB} KB budget`);
  if (problems.length) {
    failures += 1;
    console.error(`FAIL ${f}`);
    for (const p of problems) console.error(`     ${p}`);
  } else {
    console.log(`ok   ${basename(f).padEnd(34)} ${kb.toFixed(1).padStart(6)} KB`);
  }
}

console.log(`\nlint: ${checked - failures}/${checked} assets passed`);
if (failures) process.exit(1);
