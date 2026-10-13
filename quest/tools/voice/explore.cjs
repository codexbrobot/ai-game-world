// Every DM box the story can show: runs each scene in js/story.js against a stand-in DM that records what
// it says, and walks every branch (each choice, each test passed or failed, each flag set or not, each hour,
// each nature of the black font) so that no box goes unrecorded.
//
// A wretch's name stands in as ⟪N⟫ (js/voice.js puts the same token in for the party's names when it matches
// a box to its recording). The people of the Gaol are real: each of the four the wretches might have known
// across the corridor, and each of the four who might still be alive down there, as js/game.js picks them.
//
// Exported for build.cjs; run alone it prints a count.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..', '..');
const MAX_RUNS = 6000; // per scene
const MAX_SAYS = 10; // per run

class Stop extends Error {}

function loadStory() {
  const ctx = { console };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/story.js'), 'utf8'), ctx, { filename: 'story.js' });
  return ctx.Q;
}

// Who the Gaol remembers, from nameTheGaol() in js/game.js: [name, 'she' or 'he', what they were like], and
// the names of the one still alive.
function gaolPeople() {
  const src = fs.readFileSync(path.join(ROOT, 'js/game.js'), 'utf8');
  const fn = src.slice(src.indexOf('function nameTheGaol'), src.indexOf('S.flags.livingName'));
  const knew = [...fn.matchAll(/\['([^']+)', '(she|he)', '([^']+)'\]/g)].map((m) => m.slice(1, 4));
  const line = src.slice(src.indexOf('S.flags.livingName'), src.indexOf('\n', src.indexOf('S.flags.livingName')));
  const living = [...line.matchAll(/'([^']+)'/g)].map((m) => m[1]);
  if (knew.length < 2 || living.length < 2) throw new Error('nameTheGaol() has changed shape: update gaolPeople()');
  return { knew, living };
}

async function explore(Q) {
  const people = gaolPeople();
  const boxes = [];
  const seen = new Set();
  for (const scene of Q.SCENES) {
    for (const first of [true, false]) {
      // the odometer: decisions made at each branch point of a run, and how many options each had
      let path = [];
      let runs = 0;
      for (;;) {
        const took = [];
        let at = 0;
        const choose = (n) => {
          if (n <= 1) return 0;
          const i = at < path.length ? path[at] : 0;
          took.push({ i, n });
          at += 1;
          return i;
        };
        const pick = (list) => list[choose(list.length)];
        const flags = {};
        const party = pick([2, 1]) === 2 ? 2 : 1;
        const gaol = pick([true, false]);
        const mk = (k) => ({ name: `⟪N⟫ ${k}`, hp: 4, maxHp: 10, strength: 1, agility: 1, presence: 1, toughness: 1, omens: 1, gaol, bleeding: false });
        const pcs = party === 2 ? [mk('a'), mk('b')] : [mk('a')];
        let font = null;
        let says = 0;
        const said = new Set(); // a box shown twice in one run is a loop (the black font can be drunk from for ever)
        const dm = {
          get party() { return pcs; },
          get font() {
            if (!font) {
              const nature = pick(['saint', 'comet', 'lye']);
              font = { nature, uses: Q.FONT_NATURES[nature].uses, known: pick([false, true]), searched: pick([false, true]) };
            }
            return font;
          },
          get silverLeft() { return pick([0, 99]); },
          get hour() { return pick(['dawn', 'day', 'dusk', 'night']); },
          get deadSlot() { return pick([false, true]); },
          async say(title, text, choices) {
            if (++says > MAX_SAYS) throw new Stop();
            const key = `${title}\u0000${text}`;
            if (said.has(key)) throw new Stop();
            said.add(key);
            if (!seen.has(key)) { seen.add(key); boxes.push({ scene: scene.id, floor: scene.floor, title, text }); }
            const open = (choices || []).map((c, n) => (c.disabled ? -1 : n)).filter((n) => n >= 0);
            return open.length ? open[choose(open.length)] : 0;
          },
          name: () => '⟪N⟫',
          d: (n) => pick([1, n]),
          best: () => pcs[0],
          async test() { return pick([true, false]); },
          flag(name, value) {
            if (arguments.length > 1) { flags[name] = value; return value; }
            if (!(name in flags)) {
              if (/^known(Name|She|What)$/.test(name)) [flags.knownName, flags.knownShe, flags.knownWhat] = pick(people.knew);
              else if (name === 'livingName') flags.livingName = pick(people.living);
              else if (name === 'freed') flags.freed = pick([undefined, dm.flag('livingName')]);
              else flags[name] = pick([undefined, true]);
            }
            return flags[name];
          },
          recruit: () => mk('r'),
          restoreGear: () => ['⟪GEAR⟫'], // who got what back: a list, not narration
        };
        // everything else the DM does changes the world, not the words
        const quiet = new Proxy(dm, { get: (t, k) => (k in t ? t[k] : () => undefined) });
        try { await scene.run(quiet, first); } catch (e) { if (!(e instanceof Stop)) throw e; }
        runs += 1;
        // the next run: advance the odometer from the last branch point that has options left
        path = took.map((t) => t.i);
        const ns = took.map((t) => t.n);
        let k = path.length - 1;
        while (k >= 0 && path[k] + 1 >= ns[k]) k -= 1;
        if (k < 0 || runs >= MAX_RUNS) {
          if (runs >= MAX_RUNS) console.error(`scene ${scene.id}: stopped at ${MAX_RUNS} runs`);
          break;
        }
        path = path.slice(0, k).concat(path[k] + 1);
      }
    }
  }
  return boxes;
}

module.exports = { loadStory, explore };

if (require.main === module) {
  explore(loadStory()).then((boxes) => console.log(`${boxes.length} boxes`));
}
