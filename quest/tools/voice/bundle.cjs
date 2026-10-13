// Packs the narration into a few dozen small files the game fetches as it needs them, and writes the index
// the game matches paragraphs against.
//
//   node quest/tools/voice/bundle.cjs
//
// assets/voice/<group>.webm   the recordings of one scene (or one kind of box), end to end: each is a whole
//                             WebM file of its own, cut back out by offset and length
// js/voice-data.js            Q.VOICE: what each paragraph sounds like and where its recording is
// quest/voice/bundled.json    the same offsets, for the tools (so a bundle can be unpacked and rebuilt)
//
// A recording comes from quest/voice/clips/<id>.webm if it is there, else from the bundle it was already in.
// Lines nobody has recorded yet are left out; the game stays quiet for them.
const fs = require('fs');
const path = require('path');

const QUEST = path.join(__dirname, '..', '..');
const SCRIPT = path.join(QUEST, 'voice', 'script.json');
const CLIPS = path.join(QUEST, 'voice', 'clips');
const BUNDLED = path.join(QUEST, 'voice', 'bundled.json');
const OUT_DIR = path.join(QUEST, 'assets', 'voice');
const DATA = path.join(QUEST, 'js', 'voice-data.js');

const script = JSON.parse(fs.readFileSync(SCRIPT, 'utf8'));
const old = fs.existsSync(BUNDLED) ? JSON.parse(fs.readFileSync(BUNDLED, 'utf8')) : {};

function clip(id) {
  const f = path.join(CLIPS, `${id}.webm`);
  if (fs.existsSync(f)) return fs.readFileSync(f);
  const o = old[id];
  if (!o) return null;
  const b = path.join(OUT_DIR, `${o[0]}.webm`);
  if (!fs.existsSync(b)) return null;
  return fs.readFileSync(b).subarray(o[1], o[1] + o[2]);
}

// one bundle per group, recordings in script order, each once
const groups = new Map();
for (const l of script) {
  if (!groups.has(l.group)) groups.set(l.group, []);
  if (!groups.get(l.group).includes(l.id)) groups.get(l.group).push(l.id);
}
// read every recording before any bundle is rewritten (they may be coming out of the old bundles)
const audio = new Map();
for (const ids of groups.values()) for (const id of ids) { const a = clip(id); if (a) audio.set(id, a); }

fs.mkdirSync(OUT_DIR, { recursive: true });
const bundled = {};
const names = [];
let bytes = 0;
for (const [group, ids] of groups) {
  const parts = [];
  let at = 0;
  for (const id of ids) {
    const a = audio.get(id);
    if (!a) continue;
    bundled[id] = [group, at, a.length];
    parts.push(a);
    at += a.length;
  }
  const file = path.join(OUT_DIR, `${group}.webm`);
  if (!parts.length) { if (fs.existsSync(file)) fs.rmSync(file); continue; }
  fs.writeFileSync(file, Buffer.concat(parts));
  names.push(group);
  bytes += at;
}
// bundles for groups that no longer exist
for (const f of fs.readdirSync(OUT_DIR)) if (f.endsWith('.webm') && !groups.has(f.slice(0, -5))) fs.rmSync(path.join(OUT_DIR, f));

// the index: exact keys and patterns, each pointing at a recording [bundle number, offset, length]
const clipIx = new Map();
const clips = [];
const lines = { keys: {}, patterns: [] };
for (const l of script) {
  const b = bundled[l.id];
  if (!b) continue;
  if (!clipIx.has(l.id)) { clipIx.set(l.id, clips.length); clips.push([names.indexOf(b[0]), b[1], b[2]]); }
  if (l.key) lines.keys[l.key] = clipIx.get(l.id);
  else lines.patterns.push([l.re, clipIx.get(l.id)]);
}
fs.writeFileSync(BUNDLED, JSON.stringify(bundled, null, 0).replace(/\],"/g, '],\n"') + '\n');
fs.writeFileSync(DATA, `// Written by quest/tools/voice/bundle.cjs from quest/voice/script.json: what the DM says, and where.
'use strict';
var Q = window.Q || (window.Q = {});
Q.VOICE = ${JSON.stringify({ bundles: names, clips, keys: lines.keys, patterns: lines.patterns })};
`);
const recorded = new Set(script.filter((l) => bundled[l.id]).map((l) => l.id)).size;
const total = new Set(script.map((l) => l.id)).size;
console.log(`${recorded} of ${total} recordings in ${names.length} bundles, ${(bytes / 1024 / 1024).toFixed(1)} MB; ${path.relative(QUEST, DATA)} ${(fs.statSync(DATA).size / 1024).toFixed(0)} KB`);
