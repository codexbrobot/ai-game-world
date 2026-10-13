// The narration script: every paragraph of DM text the game can show, and what the narrator says for it.
//
//   node quest/tools/voice/script.cjs     # writes quest/voice/script.json, and lists what still needs words
//
// Where the paragraphs come from:
//   the story's scenes      js/story.js, every branch walked by explore.cjs
//   say() and modal() boxes in js/game.js and js/battle.js, read from the source: every variant of the text
//                           (both sides of each ?:), with each name as ⟪N⟫ and anything else that changes
//                           as ⟪?⟫
//   the homes               the HOMES and NOT_HOME tables in js/game.js
//   the Warden's speech     the boss story in js/battle.js, with and without risen guards
//   the Broken table        brokenText() in js/battle.js, run for every outcome
//
// What the narrator says is the paragraph itself, unless quest/voice/spoken.json says otherwise. It has to for
// any paragraph with a wretch's name in it, or a number that changes, or ⟪?⟫: those are listed when missing.
// spoken.json also holds patterns (regular expressions over the plain paragraph) for boxes too varied to list.
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');
const acorn = require('acorn');
const walk = require('acorn-walk');
const { loadStory, explore } = require('./explore.cjs');

const QUEST = path.join(__dirname, '..', '..');
const OUT = path.join(QUEST, 'voice', 'script.json');
const SPOKEN = path.join(QUEST, 'voice', 'spoken.json');

function loadVoice() {
  const ctx = {};
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(QUEST, 'js/voice.js'), 'utf8'), ctx);
  return ctx.Q.Voice;
}
const V = loadVoice();
const read = (f) => fs.readFileSync(path.join(QUEST, f), 'utf8');
const parse = (f) => acorn.parse(read(f), { ecmaVersion: 'latest', locations: true });

// ---------- every variant of an expression's text ----------
const NAMEY = /\bshort\(|\.name\b|dm\.name\(/;
function variants(node, src) {
  const cap = (list) => list.slice(0, 256);
  const product = (parts) => parts.reduce((acc, p) => cap(acc.flatMap((a) => p.map((b) => a + b))), ['']);
  switch (node.type) {
    case 'Literal': return [String(node.value)];
    case 'TemplateLiteral': {
      const parts = [];
      node.quasis.forEach((q, i) => { parts.push([q.value.cooked]); if (node.expressions[i]) parts.push(variants(node.expressions[i], src)); });
      return product(parts);
    }
    case 'ConditionalExpression': return cap([...variants(node.consequent, src), ...variants(node.alternate, src)]);
    case 'LogicalExpression': return cap([...variants(node.right, src), '']);
    case 'BinaryExpression': return node.operator === '+' ? product([variants(node.left, src), variants(node.right, src)]) : ['⟪?⟫'];
    default: return [NAMEY.test(src.slice(node.start, node.end)) ? '⟪N⟫' : '⟪?⟫'];
  }
}

function calleeName(c) {
  if (c.type === 'Identifier') return c.name;
  if (c.type === 'MemberExpression' && c.property.type === 'Identifier') return `${c.object.name || '?'}.${c.property.name}`;
  return '';
}

// paragraphs of a DM text (blank lines) or of a modal's <p>s (but not the small print)
const paragraphsOfText = (t) => t.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
const paragraphsOfHtml = (h) => [...h.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => m[1].trim());

async function collect() {
  const items = [];
  const add = (raw, group, src, floor = 'skarnvik') => items.push({ raw, group, src, floor });

  // the story
  for (const b of await explore(loadStory())) for (const p of paragraphsOfText(b.text)) add(p, b.scene, `story:${b.scene}`, b.floor);

  // say() and the Stranger's modals in js/game.js; the DM's boxes in battle
  const SAY_ARG = { say: 1, dmSays: 2, 'B.say': 1 };
  for (const f of ['js/game.js', 'js/battle.js']) {
    const src = read(f);
    walk.simple(parse(f), {
      CallExpression(node) {
        const name = calleeName(node.callee);
        const line = node.loc.start.line;
        if (name in SAY_ARG && node.arguments[SAY_ARG[name]]) {
          const title = node.arguments[SAY_ARG[name] - 1];
          const group = f === 'js/battle.js' ? 'battle' : (title && title.type === 'Literal' ? title.value : 'game').toLowerCase().replace(/[^a-z]+/g, '-');
          for (const v of variants(node.arguments[SAY_ARG[name]], src)) for (const p of paragraphsOfText(v)) add(p, group, `${f}:${line}`, f === 'js/battle.js' ? 'gaol' : 'skarnvik');
        }
        if (name === 'modal' && node.arguments[0] && node.arguments[0].value === 'The Stranger') {
          for (const v of variants(node.arguments[1], src)) for (const p of paragraphsOfHtml(v)) add(p, 'stranger', `${f}:${line}`);
        }
      },
    });
  }

  // the homes: waking up in one, sleeping in one, and the ones that aren't yours
  walk.simple(parse('js/game.js'), {
    VariableDeclarator(node) {
      if (!node.id || !['HOMES', 'NOT_HOME'].includes(node.id.name)) return;
      walk.simple(node.init, { Literal(l) { if (typeof l.value === 'string' && l.value.split(' ').length > 4) add(l.value, 'homes', `js/game.js:${l.loc.start.line}`); } });
    },
  });

  // the Warden's speech, with no guards, one and several to raise
  const bsrc = read('js/battle.js');
  walk.simple(parse('js/battle.js'), {
    Property(node) {
      if (node.key.name !== 'story' || node.value.type !== 'ArrowFunctionExpression') return;
      const fn = vm.runInNewContext(`(${bsrc.slice(node.value.start, node.value.end)})`);
      for (const fallen of [[], [{}], [{}, {}]]) for (const p of paragraphsOfText(fn(fallen))) add(p, 'battle', `js/battle.js:${node.loc.start.line}`, 'gaol');
    },
  });

  // the Broken table: brokenText() for every outcome, in a fight and out of one
  const start = bsrc.indexOf('  function brokenText(');
  const end = bsrc.indexOf('\n  }\n', start) + 4;
  const ABILITY = bsrc.match(/const ABILITY_NAME = (\{[^}]+\});/)[1];
  for (const fight of [true, false]) {
    const ctx = { Q: { HOUR_STEPS: 17 }, short: () => '⟪N⟫', inFight: () => fight };
    vm.createContext(ctx);
    vm.runInContext(`const ABILITY_NAME = ${ABILITY};\n${bsrc.slice(start, end)}`, ctx);
    const outcomes = [];
    for (const r of [1, 2, 3]) {
      if (r === 1) outcomes.push({ r, kind: 'out', rounds: 2, hp: 3 });
      if (r === 2) {
        outcomes.push({ r, r6: 6, kind: 'eye', ability: 'presence', rounds: 2, hp: 3 });
        for (const limb of ['left arm', 'right leg']) for (const severed of [false, true]) {
          outcomes.push({ r, r6: severed ? 5 : 2, kind: 'limb', limb, severed, ability: limb.endsWith('arm') ? 'strength' : 'agility', rounds: 2, hp: 3 });
        }
      }
      if (r === 3) for (const hours of [1, 2]) outcomes.push({ r, kind: 'bleed', hours });
    }
    for (const b of outcomes) for (const over of [null, { before: 3, dmg: 5 }]) {
      for (const p of paragraphsOfText(ctx.brokenText({}, b, over))) add(p, 'battle', 'js/battle.js:brokenText', 'gaol');
    }
  }
  return items;
}

const words = (t) => t.replace(/⟪[^⟫]*⟫/g, ' ').split(/\s+/).filter((w) => /\p{L}/u.test(w));
const idOf = (say) => crypto.createHash('sha1').update(say).digest('hex').slice(0, 10);
// for the narrator: no tags, no stand-ins
const spokenOf = (raw) => raw.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

async function main() {
  const spoken = fs.existsSync(SPOKEN) ? JSON.parse(fs.readFileSync(SPOKEN, 'utf8')) : { say: {}, patterns: [] };
  const items = await collect();
  // one line per key; a key whose raw text varies (a number that changes) can't be read as it stands
  const byKey = new Map();
  for (const it of items) {
    const plain = V.plain(it.raw.replace(/⟪N⟫/g, '⟪n⟫'));
    if (words(plain).length < 2) continue; // a list of gear, a name on its own
    const re = spoken.patterns.find((p) => new RegExp(p.re, 'u').test(plain));
    if (re) { re.hits = (re.hits || 0) + 1; continue; }
    const key = V.keyOf(plain);
    if (!byKey.has(key)) byKey.set(key, { key, raws: new Set(), group: it.group, floor: it.floor, src: it.src, wild: /⟪\?⟫/.test(plain) });
    byKey.get(key).raws.add(it.raw);
  }
  const lines = [];
  const missing = [];
  for (const e of byKey.values()) {
    const needs = e.wild || /⟪n⟫/.test(e.key) || e.raws.size > 1;
    let say = spoken.say[e.key];
    if (say === undefined && !needs) say = spokenOf([...e.raws][0]);
    if (say === undefined) { missing.push(e); continue; }
    if (say === '') continue; // deliberately silent
    const line = { id: idOf(say), group: e.group, floor: e.floor, say, src: e.src };
    if (e.wild) line.re = `^${e.key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/⟪\\\?⟫/g, '.+?')}$`;
    else line.key = e.key;
    lines.push(line);
  }
  for (const p of spoken.patterns) {
    if (!p.hits) console.error(`pattern never matched: ${p.re}`);
    lines.push({ id: idOf(p.say), group: p.group || 'battle', floor: 'gaol', say: p.say, re: p.re, src: 'spoken.json' });
  }
  const unused = Object.keys(spoken.say).filter((k) => !byKey.has(k));
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  // in the order they're heard: the Gaol, then the city, then below it
  const ORDER = ['gaol', 'skarnvik', 'undercroft', 'hollow'];
  lines.sort((a, b) => ORDER.indexOf(a.floor) - ORDER.indexOf(b.floor));
  fs.writeFileSync(OUT, JSON.stringify(lines, null, 1) + '\n');
  const chars = [...new Map(lines.map((l) => [l.id, l.say])).values()].reduce((n, s) => n + s.length, 0);
  console.log(`${lines.length} lines, ${new Set(lines.map((l) => l.id)).size} recordings, ${chars} characters to record`);
  if (unused.length) console.error(`\nspoken.json has ${unused.length} entries for paragraphs that no longer exist:\n${unused.map((k) => `  ${k.slice(0, 100)}`).join('\n')}`);
  if (missing.length) {
    console.error(`\n${missing.length} paragraphs need words in spoken.json ("say": { key: words }):`);
    for (const m of missing) console.error(JSON.stringify(m.key) + `  // ${m.src}${m.raws.size > 1 ? `, ${m.raws.size} versions` : ''}`);
    process.exitCode = 1;
  }
}

main();
