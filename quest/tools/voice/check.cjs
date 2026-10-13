// Does every paragraph the game can show find its recording? Runs the game's own matching (Q.Voice.find in
// js/voice.js, over the index in js/voice-data.js) on every paragraph script.cjs collects, with real names in
// place of the stand-ins, and checks each lands on the recording the script gave it.
//
//   node quest/tools/voice/check.cjs
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { collect } = require('./script.cjs');

const QUEST = path.join(__dirname, '..', '..');
const script = JSON.parse(fs.readFileSync(path.join(QUEST, 'voice', 'script.json'), 'utf8'));
const spoken = JSON.parse(fs.readFileSync(path.join(QUEST, 'voice', 'spoken.json'), 'utf8'));
const bundled = JSON.parse(fs.readFileSync(path.join(QUEST, 'voice', 'bundled.json'), 'utf8'));

// the game's matching, as the browser has it
const ctx = { document: {} };
ctx.window = ctx;
vm.createContext(ctx);
for (const f of ['js/voice.js', 'js/voice-data.js']) vm.runInContext(fs.readFileSync(path.join(QUEST, f), 'utf8'), ctx);
const V = ctx.Q.Voice;
const data = ctx.Q.VOICE;
const idAt = new Map(Object.entries(bundled).map(([id, [group, off]]) => [`${group}:${off}`, id]));
const idOf = (ix) => { const [b, off] = data.clips[ix]; return idAt.get(`${data.bundles[b]}:${off}`); };

// what the script says each paragraph should get (as script.cjs decides it)
const words = (t) => t.replace(/⟪[^⟫]*⟫/g, ' ').split(/\s+/).filter((w) => /\p{L}/u.test(w));
const byKey = new Map(script.filter((l) => l.key).map((l) => [l.key, l.id]));
const byRe = script.filter((l) => l.re).map((l) => [new RegExp(l.re, 'u'), l.id]);
function expected(raw) {
  const plain = V.plain(raw.replace(/⟪N⟫/g, '⟪n⟫'));
  if (words(plain).length < 2) return undefined;
  const p = spoken.patterns.find((x) => new RegExp(x.re, 'u').test(plain));
  if (p) return script.find((l) => l.re === p.re).id;
  const key = V.keyOf(plain);
  if (spoken.say[key] === '') return null; // deliberately silent
  if (byKey.has(key)) return byKey.get(key);
  const re = byRe.find(([r]) => r.test(key));
  return re ? re[1] : null;
}

// two wretches, as the game names them; the explorer calls them "⟪N⟫ a" and "⟪N⟫ b", or just ⟪N⟫
const PARTY = [['Agnes Brack', 'Agnes'], ['Hagar the Cruel', 'Hagar']];
const names = PARTY.flat();
const realise = (raw, n) => raw.replace(/⟪N⟫ ([ab])\b/g, (m, k) => PARTY[k === 'a' ? 0 : 1][0])
  .replace(/⟪N⟫/g, PARTY[n % 2][1]).replace(/⟪\?⟫/g, '7').replace(/⟪GEAR⟫/g, 'a rusty knife');

(async () => {
  const items = await collect();
  let ok = 0, silent = 0;
  const bad = [];
  items.forEach((it, n) => {
    const want = expected(it.raw);
    if (want === undefined) return;
    const text = realise(it.raw, n);
    const ix = V.find(text, names);
    const got = ix >= 0 ? idOf(ix) : null;
    if (want === null && got === null) { silent += 1; return; }
    if (got === want) { ok += 1; return; }
    bad.push({ src: it.src, text: text.slice(0, 120), want, got });
  });
  const uniq = [...new Map(bad.map((b) => [b.text, b])).values()];
  console.log(`${ok} paragraphs find their recording, ${silent} are silent on purpose, ${uniq.length} don't`);
  for (const b of uniq.slice(0, 30)) console.log(`  ${b.src}: wants ${b.want}, gets ${b.got}\n    ${b.text}`);
  if (uniq.length) process.exitCode = 1;
})();
