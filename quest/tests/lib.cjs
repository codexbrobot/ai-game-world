// What every browser test shares: a page set up for testing (phone-sized, step movement, fast dice, no
// tutorial hint), and small helpers for the DM's boxes, teleporting, fighting and checking results.
'use strict';

const DIR = { N: -Math.PI / 2, E: 0, S: Math.PI / 2, W: Math.PI };

function makeT(page, base, report) {
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | ')));
  page.on('console', (m) => { if (m.type() === 'error' && !/ERR_|fonts|favicon|404/.test(m.text())) errors.push('console: ' + m.text()); });
  const t = {
    page, errors, DIR,
    // run code in the page
    S: (fn, arg) => page.evaluate(fn, arg),
    wait: (ms) => page.waitForTimeout(ms),
    // a result: passes or fails the test, with what was seen
    check(ok, label, seen) { report(!!ok, label, seen); return !!ok; },
    log: (...a) => report(null, a.join(' ')),

    async open(opts = {}) {
      await page.goto(base + '/index.html');
      await page.evaluate((move) => { localStorage.clear(); localStorage.setItem('quest-borg-move', move); }, opts.move || 'grid');
      await page.reload();
      await page.waitForTimeout(500);
      await page.addStyleTag({ content: '#hint{display:none!important}' });
      await page.evaluate((speed) => { Q.speed = speed; }, opts.speed === undefined ? 0.2 : opts.speed);
    },
    // a new run, past the two waking boxes, standing in the Gaol cell
    async newGame() {
      await page.click('#btnNew'); await page.waitForTimeout(200);
      await page.click('#btnAccept');
      for (let i = 0; i < 2; i++) { await t.waitModal(); await (await page.$('#modalButtons button')).click(); await page.waitForTimeout(300); }
    },
    // the same run, as if the two had already escaped into Skarnvik (by day, all the town's scenes seen)
    async escaped(extra = {}) {
      await page.evaluate((extra) => {
        const s = Q.debug();
        s.escaped = true;
        s.silver = extra.silver || 60;
        s.clock = { phase: extra.hour || 'day', left: 999, spawned: true };
        s.party.forEach((p) => { p.hp = p.maxHp = extra.hp || 40; p.stash = null; if (extra.omens !== undefined) p.omens = extra.omens; });
        s.scenes = Object.fromEntries(Q.SCENES.map((x) => [x.id, x.floor === 'gaol' || x.floor === 'undercroft' || (extra.townSeen !== false && x.floor === 'skarnvik')]));
      }, extra);
    },
    floors: () => page.evaluate(() => Object.fromEntries(Q.FLOORS.map((f, i) => [f.id, i]))),
    // stand on a cell of a floor, facing N/E/S/W
    async tp(floor, x, y, dir, settle = 700) {
      await page.evaluate(([id, x, y, a]) => Q.debugEnter(Q.FLOORS.findIndex((f) => f.id === id), { x: (x + 0.5) * 2, z: (y + 0.5) * 2, a }), [floor, x, y, DIR[dir] !== undefined ? DIR[dir] : dir]);
      await page.waitForTimeout(settle);
    },
    where: () => page.evaluate(() => { const p = Q.debugWorld().mapPose(); return [Math.round(p.x), Math.round(p.y)]; }),
    place: () => page.textContent('#hudPlace'),
    facing: () => page.evaluate(() => { const f = document.getElementById('facing'); return f.hidden ? null : f.firstChild.textContent; }),
    // a step (grid movement takes a moment)
    async step(key = 'w', ms = 2600) { await page.keyboard.press(key); await page.waitForTimeout(ms); },

    // the DM's box (or any modal)
    title: () => page.evaluate(() => !document.getElementById('modal').hidden && document.getElementById('modalTitle').textContent),
    body: async () => (await page.textContent('#modalBody')).replace(/\s+/g, ' ').trim(),
    async waitModal(ms = 8000) {
      for (let i = 0; i < ms; i += 120) { const m = await t.title(); if (m) return m; await page.waitForTimeout(120); }
      return null;
    },
    // press the button whose label matches (waits for it a little)
    async choose(re, ms = 6000) {
      for (let i = 0; i < ms; i += 100) {
        for (const b of await page.$$('#modalButtons button')) {
          if (re.test(await b.textContent()) && !(await b.isDisabled())) { await b.click(); await page.waitForTimeout(300); return true; }
        }
        await page.waitForTimeout(100);
      }
      t.check(false, `a button ${re} in “${await t.title()}”`, (await t.body()).slice(0, 100));
      return false;
    },
    async closeAll() {
      for (let i = 0; i < 8 && await t.title(); i++) {
        const bs = await page.$$('#modalButtons button');
        await bs[bs.length - 1].click();
        await page.waitForTimeout(250);
      }
    },
    // walk into what's ahead, and wait for what it says
    async bump() { await page.keyboard.press('w'); return t.waitModal(); },
    // fight until the battle ends, taking the first option each time; DM boxes on the way are answered
    // with their first button and remembered. Returns { result, boxes }.
    async fight(ms = 150000) {
      const boxes = [];
      let seen = false;
      for (let i = 0; i < ms; i += 80) {
        const st = await page.evaluate(() => ({ battle: document.body.classList.contains('in-battle'), menu: !document.getElementById('commands').hidden,
          modal: !document.getElementById('modal').hidden, foe: document.body.classList.contains('targeting-foe'), pc: document.body.classList.contains('targeting-pc') }));
        if (st.battle) seen = true;
        if (st.modal && st.battle) {
          boxes.push(`${await t.title()}: ${await t.body()}`);
          const b = await page.$('#modalButtons button'); if (b) await b.click();
          await page.waitForTimeout(250);
          continue;
        }
        if (!st.battle && seen) return { result: st.modal ? await t.title() : 'over', boxes };
        if (!st.battle && i > 8000) return { result: 'no battle', boxes };
        if (st.menu) {
          const sel = st.foe ? '.foe-card:not(:disabled)' : st.pc ? '.pc-card:not(:disabled)' : '#commands .cmd:not(:disabled)';
          const o = await page.$$(sel);
          if (o.length) await o[0].click().catch(() => {});
        }
        await page.waitForTimeout(80);
      }
      return { result: 'timeout', boxes };
    },
    // the run's state
    party: () => page.evaluate(() => Q.debug().party.map((p) => ({ name: p.name, first: p.name.split(' ')[0], cls: p.cls || null, hp: p.hp, maxHp: p.maxHp, dead: !!p.dead,
      strength: p.strength, agility: p.agility, presence: p.presence, toughness: p.toughness, omens: p.omens, bleeding: !!p.bleeding, haem: p.haem ? p.haem.left : null, out: p.out || 0 }))),
    flags: () => page.evaluate(() => Q.debug().flags),
    lastLog: (n = 1) => page.evaluate((n) => Q.debug().log.slice(-n).map((l) => l.html.replace(/<[^>]+>/g, '')).join(' / '), n),
    shot: (name) => (t.shots ? page.screenshot({ path: `${t.shots}/${name}.png` }) : Promise.resolve()),
  };
  return t;
}

module.exports = { makeT, DIR };
