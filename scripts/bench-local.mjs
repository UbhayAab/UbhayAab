#!/usr/bin/env node
// Measures real generation throughput for every model installed locally, on
// the actual machine, and writes data/bench.json.
//
// This exists because the README makes claims about running models on an 8 GB
// card. Every one of those numbers has to come from a run that actually
// happened, including the runs that go badly. The interesting result here is
// the cliff: models that fit in VRAM versus models that spill to CPU.
//
// Ollama reports eval_count and eval_duration per request, so tokens/sec is
// measured rather than estimated. Prompt processing is reported separately
// because conflating the two is how people accidentally publish flattering
// numbers.

import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Records what hardware was actually used, rather than what was available.
// This run found the two disagreeing, which is the whole reason it is captured.
function gpuInfo() {
  for (const bin of ['nvidia-smi', 'C:\\Windows\\System32\\nvidia-smi.exe']) {
    try {
      const out = execFileSync(bin, [
        '--query-gpu=name,memory.total,driver_version',
        '--format=csv,noheader,nounits',
      ], { encoding: 'utf8' }).trim().split('\n')[0];
      const [name, totalMiB, driver] = out.split(',').map((s) => s.trim());
      return { present: true, name, vramGB: Number((Number(totalMiB) / 1024).toFixed(1)), driver };
    } catch { /* try next */ }
  }
  return { present: false };
}

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const HOST = process.env.OLLAMA_HOST || 'http://127.0.0.1:11434';
const PROMPT = 'Explain what a KV cache is in transformer inference, and why it grows with context length.';
const N_PREDICT = Number(process.env.BENCH_TOKENS || 160);
const RUNS = Number(process.env.BENCH_RUNS || 2);

const ns2s = (v) => v / 1e9;

async function api(path, body) {
  const res = await fetch(`${HOST}${path}`, {
    method: body ? 'POST' : 'GET',
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`${path} -> ${res.status}`);
  return res.json();
}

// How much of the model actually landed in VRAM. This is the measurement that
// matters and it is not knowable from the file size: /api/ps reports the real
// split once a model is resident, so partial CPU offload shows up as a number
// instead of a guess.
async function residency(model) {
  try {
    const ps = await api('/api/ps');
    const m = (ps.models || []).find((x) => x.name === model || x.model === model);
    if (!m || !m.size) return null;
    return { total: m.size, vram: m.size_vram || 0, fraction: (m.size_vram || 0) / m.size };
  } catch { return null; }
}

async function one(model) {
  const t0 = Date.now();
  const r = await api('/api/generate', {
    model,
    prompt: PROMPT,
    stream: false,
    options: { num_predict: N_PREDICT, temperature: 0 },
  });
  return {
    wallMs: Date.now() - t0,
    loadS: ns2s(r.load_duration || 0),
    promptTokens: r.prompt_eval_count || 0,
    promptTps: r.prompt_eval_duration ? (r.prompt_eval_count / ns2s(r.prompt_eval_duration)) : null,
    evalTokens: r.eval_count || 0,
    evalTps: r.eval_duration ? (r.eval_count / ns2s(r.eval_duration)) : null,
    totalS: ns2s(r.total_duration || 0),
  };
}

async function main() {
  const tags = await api('/api/tags');
  const models = tags.models
    .filter((m) => !/embed/i.test(m.name))
    .sort((a, b) => a.size - b.size);

  console.log(`benchmarking ${models.length} models, ${RUNS} runs each, ${N_PREDICT} tokens\n`);
  const results = [];

  for (const m of models) {
    const sizeGB = m.size / 1e9;
    process.stdout.write(`${m.name.padEnd(26)} ${sizeGB.toFixed(1)} GB  `);
    const runs = [];
    let error = null;
    let res = null;
    for (let i = 0; i < RUNS; i += 1) {
      try {
        runs.push(await one(m.name));
        if (!res) res = await residency(m.name);
        process.stdout.write('.');
      } catch (e) {
        error = String(e.message || e);
        process.stdout.write('x');
        break;
      }
    }
    // Warm number only: run 0 pays the model load, and quoting a cold run as
    // throughput would be dishonest in the flattering direction for small
    // models and the unflattering direction for large ones.
    const warm = runs.slice(1).length ? runs.slice(1) : runs;
    const tps = warm.map((r) => r.evalTps).filter(Boolean);
    const rec = {
      model: m.name,
      family: m.details?.family || null,
      params: m.details?.parameter_size || null,
      quant: m.details?.quantization_level || null,
      sizeBytes: m.size,
      sizeGB: Number(sizeGB.toFixed(2)),
      // Measured, not inferred from the file size. A model can be large on
      // disk and still sit entirely in VRAM, and vice versa once the KV cache
      // is accounted for.
      residentGB: res ? Number((res.total / 1e9).toFixed(2)) : null,
      vramGB: res ? Number((res.vram / 1e9).toFixed(2)) : null,
      gpuFraction: res ? Number(res.fraction.toFixed(3)) : null,
      fullyOnGpu: res ? res.fraction > 0.995 : null,
      runs: runs.length,
      coldLoadS: runs[0] ? Number(runs[0].loadS.toFixed(2)) : null,
      genTps: tps.length ? Number((tps.reduce((a, b) => a + b, 0) / tps.length).toFixed(2)) : null,
      promptTps: warm[0]?.promptTps ? Number(warm[0].promptTps.toFixed(1)) : null,
      tokensGenerated: warm[0]?.evalTokens || 0,
      error,
    };
    results.push(rec);
    console.log(
      `  ${rec.genTps ? rec.genTps.toFixed(1) + ' tok/s' : 'FAILED'}`
      + `${rec.gpuFraction !== null ? `  gpu ${(rec.gpuFraction * 100).toFixed(0)}%` : ''}`
      + `${error ? '  ' + error : ''}`
    );
  }

  const ok = results.filter((r) => r.genTps);
  const onGpu = ok.filter((r) => r.fullyOnGpu === true);
  const offload = ok.filter((r) => r.fullyOnGpu === false);
  const med = (xs) => (xs.length ? Number(xs.map((r) => r.genTps).sort((a, b) => a - b)[Math.floor(xs.length / 2)].toFixed(1)) : null);

  const gpu = gpuInfo();
  const anyOnGpu = ok.some((r) => (r.gpuFraction || 0) > 0);
  const device = anyOnGpu ? 'gpu' : 'cpu';

  const out = {
    measuredAt: new Date().toISOString(),
    host: gpu.present
      ? `${gpu.name}, ${gpu.vramGB} GB VRAM, driver ${gpu.driver}`
      : 'no NVIDIA GPU detected',
    // The distinction that turned out to matter: a GPU being present is not the
    // same as a GPU being used. Every model in this run reported size_vram = 0.
    device,
    gpu,
    gpuUsed: anyOnGpu,
    method: `ollama /api/generate, temperature 0, num_predict ${N_PREDICT}, ${RUNS} runs per model, `
      + 'first run discarded as cold. VRAM residency read back from /api/ps after load, not inferred from file size.'
      + (anyOnGpu ? '' : ' Every model reported zero bytes resident in VRAM, so these are CPU numbers.'),
    prompt: PROMPT,
    results,
    summary: {
      modelsTested: results.length,
      fastest: ok.length ? ok.reduce((a, b) => (b.genTps > a.genTps ? b : a)).model : null,
      fastestTps: ok.length ? ok.reduce((a, b) => (b.genTps > a.genTps ? b : a)).genTps : null,
      slowest: ok.length ? ok.reduce((a, b) => (b.genTps < a.genTps ? b : a)).model : null,
      slowestTps: ok.length ? ok.reduce((a, b) => (b.genTps < a.genTps ? b : a)).genTps : null,
      onGpuMedianTps: med(onGpu),
      offloadMedianTps: med(offload),
    },
  };
  if (out.summary.onGpuMedianTps && out.summary.offloadMedianTps) {
    out.summary.offloadPenalty = Number((out.summary.onGpuMedianTps / out.summary.offloadMedianTps).toFixed(1));
  }
  // The finding this whole exercise produced: file size does not predict
  // throughput. Compute it rather than asserting it.
  const bySize = [...ok].sort((a, b) => a.sizeGB - b.sizeGB);
  const bySpeed = [...ok].sort((a, b) => b.genTps - a.genTps);
  out.summary.sizeRankEqualsSpeedRank = bySize.map((r) => r.model).join() === bySpeed.map((r) => r.model).join();

  writeFileSync(join(ROOT, 'data', 'bench.json'), JSON.stringify(out, null, 2) + '\n');
  console.log(`\nwrote data/bench.json`);
  console.log(`fastest ${out.summary.fastest} at ${out.summary.fastestTps} tok/s, slowest ${out.summary.slowest} at ${out.summary.slowestTps}`);
  if (out.summary.offloadPenalty) {
    console.log(`fully on GPU ${out.summary.onGpuMedianTps} tok/s vs partial offload ${out.summary.offloadMedianTps} tok/s (${out.summary.offloadPenalty}x)`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
