// The sound effects from quest/voice/sfx.json: finds the finished ones in this session (like clips.cjs does
// for the narration), downloads them, and packs them for the game.
//
//   node quest/tools/voice/sfx.cjs
//
// assets/sfx/monsters.webm   every monster's takes end to end (trimmed to 3 s at most, levelled), cut back out
//                            by offset and length
// assets/sfx/<place>.webm    one seamless loop per place
// js/sfx-data.js             Q.SFX: where each of them is
//
// The downloads are kept in quest/voice/clips/sfx/ (not in git), so this can run again after the links expire.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync, spawnSync } = require('child_process');
const { recordings, flat } = require('./clips.cjs');

const QUEST = path.join(__dirname, '..', '..');
const LIST = JSON.parse(fs.readFileSync(path.join(QUEST, 'voice', 'sfx.json'), 'utf8'));
const CACHE = path.join(QUEST, 'voice', 'clips', 'sfx');
const OUT = path.join(QUEST, 'assets', 'sfx');
const DATA = path.join(QUEST, 'js', 'sfx-data.js');
const TAKES = 2;

const wanted = new Map();
for (const [kind, prompt] of Object.entries(LIST.monsters)) wanted.set(flat(prompt), ['monster', kind]);
for (const [place, prompt] of Object.entries(LIST.ambience)) wanted.set(flat(prompt), ['ambience', place]);

// the takes of each sound, in the order they were made
const takes = new Map();
for (const m of recordings()) {
  const w = wanted.get(flat(m.prompt));
  if (!w) continue;
  const key = w.join(':');
  if (!takes.has(key)) takes.set(key, new Map());
  takes.get(key).set(m.generation_id, m);
}

fs.mkdirSync(CACHE, { recursive: true });
fs.mkdirSync(OUT, { recursive: true });
const run = (args) => execFileSync('ffmpeg', ['-v', 'error', '-y', ...args]);
function master(name, m) {
  const f = path.join(CACHE, `${name}.mp3`);
  if (!fs.existsSync(f)) {
    try { execFileSync('curl', ['-sSf', '-o', f, m.url]); } catch (e) { return null; }
  }
  return f;
}

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sfx-'));
const missing = [];
// monsters: silence off both ends, no longer than 3 s (fading out), all about as loud, mono Opus
const parts = [];
const monsters = {};
let at = 0;
for (const kind of Object.keys(LIST.monsters)) {
  const list = [...(takes.get(`monster:${kind}`) || new Map()).values()].slice(0, TAKES);
  monsters[kind] = [];
  list.forEach((m, n) => {
    const src = master(`${kind}-${n + 1}`, m);
    if (!src) { missing.push(`${kind} take ${n + 1} (link expired)`); return; }
    const out = path.join(tmp, `${kind}-${n}.webm`);
    const trim = 'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.02,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse';
    // level by average loudness (too short for loudnorm), a limiter catching the peaks that pushes up
    const cut = `${trim},atrim=0:3,afade=t=out:st=2.8:d=0.2`;
    const meter = spawnSync('ffmpeg', ['-i', src, '-af', `${cut},volumedetect`, '-f', 'null', '-']).stderr.toString();
    const mean = +(meter.match(/mean_volume: (-?[\d.]+)/) || [0, -22])[1];
    run(['-i', src, '-af', `${cut},volume=${(-22 - mean).toFixed(1)}dB,alimiter=limit=0.89:level=disabled`, '-ar', '48000', '-ac', '1', '-c:a', 'libopus', '-b:a', '32k', out]);
    const buf = fs.readFileSync(out);
    monsters[kind].push([at, buf.length]);
    parts.push(buf);
    at += buf.length;
  });
  if (!list.length) missing.push(`${kind} (not made yet)`);
}
fs.writeFileSync(path.join(OUT, 'monsters.webm'), Buffer.concat(parts));

// the places: the whole loop as it came, stereo Opus
const ambience = {};
for (const place of Object.keys(LIST.ambience)) {
  const m = [...(takes.get(`ambience:${place}`) || new Map()).values()].pop();
  if (!m) { missing.push(`${place} loop (not made yet)`); continue; }
  const src = master(`amb-${place}`, m);
  if (!src) { missing.push(`${place} loop (link expired)`); continue; }
  run(['-i', src, '-af', 'loudnorm=I=-24:TP=-3:LRA=11', '-ar', '48000', '-ac', '2', '-c:a', 'libopus', '-b:a', '40k', path.join(OUT, `${place}.webm`)]);
  ambience[place] = place;
}
fs.rmSync(tmp, { recursive: true, force: true });

fs.writeFileSync(DATA, `// Written by quest/tools/voice/sfx.cjs from quest/voice/sfx.json: the recorded sounds, and where they are.
'use strict';
var Q = window.Q || (window.Q = {});
Q.SFX = ${JSON.stringify({ monsters, ambience })};
`);
const size = fs.readdirSync(OUT).reduce((n, f) => n + fs.statSync(path.join(OUT, f)).size, 0);
console.log(`${Object.values(monsters).flat().length} monster takes, ${Object.keys(ambience).length} loops, ${(size / 1024).toFixed(0)} KB in assets/sfx/`);
if (missing.length) { console.error(`missing: ${missing.join(', ')}`); process.exitCode = 1; }
