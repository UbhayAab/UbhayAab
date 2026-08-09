#!/usr/bin/env node
// THE DRAFT: guess which token the model ranks first.
//
// Every puzzle is a real next-token distribution pulled from a model running
// locally on the machine this profile describes. The probabilities are not
// illustrative and they are not invented; they come back from the runtime with
// the logprobs the sampler would actually see.
//
// The design constraint that shaped this: a README cannot run a model. Rather
// than put a GGUF inside a GitHub Action and hope the download, the cache and
// the cold start all behave every six hours, the distributions are computed
// once here, committed as data, and rendered as pre-collapsed <details>. The
// game then has no runtime at all, exactly like the tic-tac-toe, and cannot
// break, rate limit, or go stale in a way that misleads.
//
// Run locally with Ollama up:  node scripts/gen-draft.mjs

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const HOST = process.env.OLLAMA_HOST || 'http://127.0.0.1:11434';
const MODEL = process.env.DRAFT_MODEL || 'llama3.1:8b';

// Prefixes chosen so the answer is not obvious. Anything the model is more
// than 90% sure about gets dropped below, because a puzzle nobody can lose is
// not a puzzle.
const PREFIXES = [
  'The KV cache grows linearly with the',
  'Quantising a model to 4 bits mostly costs you',
  'The hardest part of porting a model to llama.cpp is the',
  'Row level security in Postgres is enforced by the',
  'Electron applications are criticised mainly for their',
  'A tokenizer splits text into pieces that are usually smaller than',
  'When a model does not fit in VRAM, the runtime will',
  'The best way to debug a slow query is to read the',
  'Most scrapers fail in production because of',
  'An 8 GB graphics card can comfortably run a model with about',
  'The difference between a fork and a thread is',
  'Amazon advertising campaigns waste most of their budget on',
  'Writing a compiler is easier than writing a',
  'The reason floating point addition is not associative is',
  'A good commit message explains the',
  'Attention is quadratic in the length of the',
  'The first thing to check when a GPU is idle is the',
  'Static site generators became popular because they',
  'The biggest risk in a database migration is',
  'Most performance problems turn out to be',
  'A cache is only useful when the access pattern is',
  'The reason JavaScript has two equality operators is',
  'Per-layer embeddings let a model store capacity without',
  'The correct number of retries for a network call is',
  'Documentation rots faster than code because',
  'A benchmark that cannot be reproduced is just',
  'The hardest bug I ever found turned out to be a',
  'Rate limiting protects the server more than it protects the',
  'Every distributed system eventually reinvents',
  'The point of a type system is to make certain states',
];

async function chat(prefix) {
  const res = await fetch(`${HOST}/v1/chat/completions`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: 'system', content: 'Continue the user\'s text naturally. Reply with the continuation only, no preamble, no quotes.' },
        { role: 'user', content: prefix },
      ],
      max_tokens: 1,
      temperature: 0,
      logprobs: true,
      top_logprobs: 5,
    }),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  const j = await res.json();
  const entry = j.choices?.[0]?.logprobs?.content?.[0];
  if (!entry?.top_logprobs?.length) throw new Error('no logprobs in response');
  return entry.top_logprobs.map((t) => ({ token: t.token, logprob: t.logprob, p: Math.exp(t.logprob) }));
}

const isControl = (t) => /<\|/.test(t) || t === '' || /^[�]/.test(t);

async function main() {
  console.log(`drafting ${PREFIXES.length} puzzles from ${MODEL}\n`);
  const puzzles = [];
  let dropped = 0;

  for (const prefix of PREFIXES) {
    let cands;
    try {
      cands = await chat(prefix);
    } catch (e) {
      console.log(`  skip  ${prefix.slice(0, 44)}...  ${e.message.slice(0, 60)}`);
      dropped += 1;
      continue;
    }
    if (cands.some((c) => isControl(c.token))) { dropped += 1; console.log(`  skip  control token in candidates`); continue; }

    // Renormalise over the visible top five so the displayed percentages add
    // up. The raw values are kept so nothing is lost.
    const mass = cands.reduce((a, c) => a + c.p, 0);
    const norm = cands.map((c) => ({ ...c, pNorm: c.p / mass }));

    // Drop the gimmes. Entropy over the top five is the honest measure of how
    // hard the puzzle is, so it doubles as the difficulty label.
    const H = -norm.reduce((a, c) => a + c.pNorm * Math.log2(c.pNorm || 1e-12), 0);
    if (norm[0].pNorm > 0.9) { dropped += 1; console.log(`  easy  "${prefix.slice(0, 40)}" -> ${(norm[0].pNorm * 100).toFixed(0)}% ${JSON.stringify(norm[0].token)}`); continue; }

    puzzles.push({
      prefix,
      candidates: norm,
      topP: norm[0].pNorm,
      entropy: H,
      maxEntropy: Math.log2(5),
      difficulty: H > 1.9 ? 'hard' : H > 1.3 ? 'medium' : 'easy',
    });
    console.log(`  ok    "${prefix.slice(0, 40)}" -> ${JSON.stringify(norm[0].token)} ${(norm[0].pNorm * 100).toFixed(0)}%  H=${H.toFixed(2)}`);
  }

  // Shuffled deterministically so the daily rotation is not alphabetical.
  puzzles.sort((a, b) => (a.prefix.length * 31 % 97) - (b.prefix.length * 31 % 97));

  const out = {
    generatedAt: new Date().toISOString(),
    model: MODEL,
    host: 'RTX 5060 Laptop, 8 GB VRAM',
    method: 'Ollama /v1/chat/completions, temperature 0, max_tokens 1, top_logprobs 5. '
      + 'Probabilities are renormalised over the visible top five. The distribution is conditioned on the '
      + 'chat template, so it is the model\'s first reply token rather than a raw prose continuation.',
    count: puzzles.length,
    dropped,
    medianEntropy: puzzles.length
      ? Number(puzzles.map((p) => p.entropy).sort((a, b) => a - b)[Math.floor(puzzles.length / 2)].toFixed(3))
      : 0,
    puzzles,
  };

  mkdirSync(join(ROOT, 'game'), { recursive: true });
  writeFileSync(join(ROOT, 'game', 'draft.json'), JSON.stringify(out, null, 2) + '\n');
  console.log(`\ngame/draft.json  ${puzzles.length} puzzles kept, ${dropped} dropped, median entropy ${out.medianEntropy} of ${Math.log2(5).toFixed(2)} bits`);
}

main().catch((e) => { console.error(e); process.exit(1); });
