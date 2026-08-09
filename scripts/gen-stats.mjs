#!/usr/bin/env node
// Pulls everything the README needs in a handful of GraphQL calls and writes
// data/stats.json. Every other generator reads that file and nothing else, so
// the SVGs are reproducible offline and the numbers can never disagree
// between two cards.
//
// Also appends one line to data/history.jsonl per run. GitHub does not expose
// historical follower/star counts (stargazers.starredAt errors on real repos,
// and the Events API is capped at ~90 days), so accumulating it ourselves is
// the only way to ever plot it. Worthless on day one, unique after a month.

import { writeFileSync, appendFileSync, readFileSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LOGIN = process.env.PROFILE_LOGIN || 'UbhayAab';
const TZ = process.env.PROFILE_TZ || 'Asia/Kolkata';

function token() {
  const fromEnv = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if (fromEnv) return fromEnv;
  // Local runs: borrow the CLI's token rather than asking for another PAT.
  for (const bin of ['gh', 'C:\\Program Files\\GitHub CLI\\gh.exe']) {
    try { return execFileSync(bin, ['auth', 'token'], { encoding: 'utf8' }).trim(); } catch { /* next */ }
  }
  throw new Error('no token: set GH_TOKEN or authenticate the gh CLI');
}

const TOKEN = token();

async function gql(query, variables = {}) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        authorization: `bearer ${TOKEN}`,
        'content-type': 'application/json',
        'user-agent': `${LOGIN}-profile-generator`,
      },
      body: JSON.stringify({ query, variables }),
    });
    if (res.status === 502 || res.status === 503 || res.status === 429) {
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
      continue;
    }
    const json = await res.json();
    if (json.errors) throw new Error(`graphql: ${JSON.stringify(json.errors).slice(0, 400)}`);
    return json.data;
  }
  throw new Error('graphql: retries exhausted');
}

const PROFILE_Q = `query($login:String!){
  rateLimit{ cost remaining }
  user(login:$login){
    login name avatarUrl createdAt bio
    followers{ totalCount } following{ totalCount }
    repositories(first:100, ownerAffiliations:OWNER, orderBy:{field:PUSHED_AT, direction:DESC}){
      totalCount
      nodes{
        name description url isPrivate isFork isArchived stargazerCount forkCount
        createdAt pushedAt diskUsage homepageUrl
        primaryLanguage{ name color }
        languages(first:10, orderBy:{field:SIZE, direction:DESC}){ totalSize edges{ size node{ name color } } }
        defaultBranchRef{ name target{ ... on Commit { history{ totalCount } } } }
        repositoryTopics(first:8){ nodes{ topic{ name } } }
      }
    }
    contributionsCollection{
      totalCommitContributions totalPullRequestContributions totalIssueContributions
      totalRepositoryContributions restrictedContributionsCount
      contributionCalendar{ totalContributions weeks{ contributionDays{ date contributionCount weekday } } }
    }
  }
}`;

// Commit timestamps are the one thing the contribution calendar will not give
// us (it is day-resolution only). Fetching real committedDate values is what
// makes the 7x24 rhythm heatmap possible.
function historyQuery(names) {
  const fields = names.map((name, i) => `
    r${i}: repository(owner:$login, name:${JSON.stringify(name)}){
      name
      defaultBranchRef{ target{ ... on Commit {
        history(first:100){ nodes{ committedDate messageHeadline oid } }
      } } }
    }`).join('\n');
  return `query($login:String!){ rateLimit{ cost } ${fields} }`;
}

const isoDay = (d) => d.toISOString().slice(0, 10);

function streaks(days) {
  let longest = 0, current = 0, run = 0;
  for (const d of days) {
    if (d.contributionCount > 0) { run += 1; longest = Math.max(longest, run); }
    else run = 0;
  }
  // Current streak walks backwards, tolerating an empty today (the day is not over).
  for (let i = days.length - 1; i >= 0; i -= 1) {
    if (days[i].contributionCount > 0) current += 1;
    else if (i === days.length - 1) continue;
    else break;
  }
  return { longest, current };
}

function relativeTime(iso) {
  const secs = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  if (secs < 90) return 'just now';
  if (secs < 3600) return `${Math.round(secs / 60)} minutes ago`;
  if (secs < 86400) return `${Math.round(secs / 3600)} hours ago`;
  const days = Math.round(secs / 86400);
  if (days < 31) return `${days} day${days === 1 ? '' : 's'} ago`;
  const months = Math.round(days / 30.44);
  if (months < 24) return `${months} month${months === 1 ? '' : 's'} ago`;
  return `${Math.round(months / 12)} years ago`;
}

const partsInTz = (iso) => {
  const f = new Intl.DateTimeFormat('en-US', {
    timeZone: TZ, weekday: 'short', hour: 'numeric', hour12: false,
  }).formatToParts(new Date(iso));
  const get = (t) => f.find((p) => p.type === t)?.value;
  const wd = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  let hour = Number(get('hour'));
  if (hour === 24) hour = 0; // hour12:false emits 24 for midnight in some ICU builds
  return { weekday: wd, hour };
};

async function main() {
  const started = Date.now();
  const data = await gql(PROFILE_Q, { login: LOGIN });
  const u = data.user;
  let cost = data.rateLimit.cost;

  const repos = u.repositories.nodes.filter((r) => !r.isFork);
  const withBranch = repos.filter((r) => r.defaultBranchRef?.target);

  // Batch the history queries: 8 repos per request keeps each one well inside
  // the node limit and the query-budget rules introduced in 2026.
  const commits = [];
  for (let i = 0; i < withBranch.length; i += 8) {
    const batch = withBranch.slice(i, i + 8);
    const res = await gql(historyQuery(batch.map((r) => r.name)), { login: LOGIN });
    cost += res.rateLimit.cost;
    for (const key of Object.keys(res)) {
      if (key === 'rateLimit' || !res[key]) continue;
      const repoName = res[key].name;
      for (const c of res[key].defaultBranchRef?.target?.history?.nodes ?? []) {
        commits.push({ repo: repoName, date: c.committedDate, msg: c.messageHeadline, oid: c.oid.slice(0, 7) });
      }
    }
  }
  commits.sort((a, b) => new Date(b.date) - new Date(a.date));

  // 7 rows (weekday) x 24 cols (hour), in his real timezone.
  const cells = Array.from({ length: 7 }, () => new Array(24).fill(0));
  for (const c of commits) {
    const { weekday, hour } = partsInTz(c.date);
    if (weekday >= 0 && hour >= 0 && hour < 24) cells[weekday][hour] += 1;
  }
  let peak = { weekday: 0, hour: 0, count: 0 };
  let maxCell = 0;
  for (let d = 0; d < 7; d += 1) {
    for (let h = 0; h < 24; h += 1) {
      maxCell = Math.max(maxCell, cells[d][h]);
      if (cells[d][h] > peak.count) peak = { weekday: d, hour: h, count: cells[d][h] };
    }
  }
  const byHour = new Array(24).fill(0);
  for (let d = 0; d < 7; d += 1) for (let h = 0; h < 24; h += 1) byHour[h] += cells[d][h];
  const nightCommits = commits.length
    ? byHour.slice(0, 6).reduce((a, b) => a + b, 0) + byHour[23]
    : 0;

  // Languages, aggregated across every repo including private ones.
  const langMap = new Map();
  for (const r of repos) {
    for (const e of r.languages?.edges ?? []) {
      const cur = langMap.get(e.node.name) || { name: e.node.name, color: e.node.color, bytes: 0, repos: 0 };
      cur.bytes += e.size;
      cur.repos += 1;
      langMap.set(e.node.name, cur);
    }
  }
  const totalBytes = [...langMap.values()].reduce((a, b) => a + b.bytes, 0) || 1;
  const languages = [...langMap.values()]
    .map((l) => ({ ...l, pct: (100 * l.bytes) / totalBytes }))
    .sort((a, b) => b.bytes - a.bytes);

  const cal = u.contributionsCollection.contributionCalendar;
  const days = cal.weeks.flatMap((w) => w.contributionDays);
  const st = streaks(days);

  const totalCommits = withBranch.reduce((a, r) => a + (r.defaultBranchRef.target.history.totalCount || 0), 0);
  const latest = commits[0];

  const stats = {
    generatedAt: new Date().toISOString(),
    generatedBy: 'scripts/gen-stats.mjs',
    graphqlCost: cost,
    runId: Number(process.env.GITHUB_RUN_NUMBER || 0),
    tz: TZ,
    profile: {
      login: u.login,
      name: u.name,
      createdAt: u.createdAt,
      accountAgeDays: Math.floor((Date.now() - new Date(u.createdAt)) / 86400000),
      followers: u.followers.totalCount,
      following: u.following.totalCount,
    },
    repos: {
      total: repos.length,
      public: repos.filter((r) => !r.isPrivate).length,
      private: repos.filter((r) => r.isPrivate).length,
      stars: repos.reduce((a, r) => a + r.stargazerCount, 0),
      diskKB: repos.reduce((a, r) => a + (r.diskUsage || 0), 0),
      totalCommits,
    },
    contributions: {
      lastYear: cal.totalContributions,
      commits: u.contributionsCollection.totalCommitContributions,
      repositoriesCreated: u.contributionsCollection.totalRepositoryContributions,
      activeDays: days.filter((d) => d.contributionCount > 0).length,
      trackedDays: days.length,
      busiestDay: days.reduce((a, b) => (b.contributionCount > a.contributionCount ? b : a), days[0]),
      longestStreak: st.longest,
      currentStreak: st.current,
    },
    languages,
    languageTotalBytes: totalBytes,
    rhythm: {
      cells,
      max: maxCell,
      sampled: commits.length,
      tz: TZ,
      peak,
      byHour,
      nightShare: commits.length ? nightCommits / commits.length : 0,
    },
    topRepos: repos
      .map((r) => ({
        name: r.name,
        url: r.url,
        description: r.description,
        isPrivate: r.isPrivate,
        stars: r.stargazerCount,
        diskKB: r.diskUsage,
        pushedAt: r.pushedAt,
        createdAt: r.createdAt,
        language: r.primaryLanguage?.name || null,
        languageColor: r.primaryLanguage?.color || null,
        commits: r.defaultBranchRef?.target?.history?.totalCount || 0,
        topics: r.repositoryTopics.nodes.map((t) => t.topic.name),
      }))
      .sort((a, b) => b.commits - a.commits),
    latestCommit: latest
      ? { repo: latest.repo, message: latest.msg, at: latest.date, ago: relativeTime(latest.date), oid: latest.oid }
      : null,
    recentCommits: commits.slice(0, 12).map((c) => ({
      repo: c.repo, message: c.msg, at: c.date, ago: relativeTime(c.date), oid: c.oid,
    })),
    calendar: days.map((d) => ({ date: d.date, count: d.contributionCount })),
    elapsedMs: Date.now() - started,
  };

  mkdirSync(join(ROOT, 'data'), { recursive: true });
  writeFileSync(join(ROOT, 'data', 'stats.json'), JSON.stringify(stats, null, 2) + '\n');

  // One compact line per run, appended forever. This is the dataset GitHub
  // will not sell you: real follower/star/contribution history at 6h resolution.
  const histPath = join(ROOT, 'data', 'history.jsonl');
  const today = isoDay(new Date());
  const line = JSON.stringify({
    t: stats.generatedAt,
    d: today,
    followers: stats.profile.followers,
    stars: stats.repos.stars,
    repos: stats.repos.total,
    commits: stats.repos.totalCommits,
    contrib: stats.contributions.lastYear,
    streak: stats.contributions.currentStreak,
    kb: stats.repos.diskKB,
    langs: Object.fromEntries(languages.slice(0, 8).map((l) => [l.name, l.bytes])),
  });
  const prev = existsSync(histPath) ? readFileSync(histPath, 'utf8').trimEnd().split('\n').filter(Boolean) : [];
  const lastLine = prev.length ? JSON.parse(prev[prev.length - 1]) : null;
  // Skip a duplicate only if literally nothing moved, so the file stays honest
  // without growing four identical rows a day.
  const moved = !lastLine
    || lastLine.followers !== stats.profile.followers
    || lastLine.stars !== stats.repos.stars
    || lastLine.commits !== stats.repos.totalCommits
    || lastLine.contrib !== stats.contributions.lastYear
    || lastLine.d !== today;
  if (moved) appendFileSync(histPath, line + '\n');

  console.log(
    `stats: ${stats.repos.total} repos, ${stats.repos.totalCommits} commits, `
    + `${commits.length} timestamps sampled, ${languages.length} languages, `
    + `graphql cost ${cost}, ${stats.elapsedMs}ms${moved ? ', history appended' : ', history unchanged'}`
  );
}

main().catch((e) => { console.error(e); process.exit(1); });
