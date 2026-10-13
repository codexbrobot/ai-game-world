// A foe that falls stays gone while the fight goes on (its fade used to replay, flashing it back up).
module.exports = {
  name: 'Battle: fallen foes stay gone',
  async run(t) {
    const { S, check } = t;
    await t.open({ speed: 0.3 });
    await t.newGame();
    await S(() => {
      const s = Q.debug();
      s.party.forEach((p) => { p.hp = p.maxHp = 80; p.omens = 0; p.strength = 3; });
      Q.defend = () => ({ kind: 'dodge', r: 15, dr: 12, total: 15, ok: true, fumble: false, crit: false });
      const ix = Q.FLOORS.findIndex((f) => f.id === 'undercroft');
      const g = s.floors[ix].groups.find((g) => g.alive && g.members.some((m) => m.key === 'c'));
      s.scenes.undercroft = true;
      Q.debugEnter(ix, { x: g.x + 1.0, z: g.z, a: Math.PI });
    });
    // once its fade has run (slow software rendering can stretch it), it must never show again
    let diedAt = 0, faded = false, highest = 0, samples = 0;
    for (let i = 0; i < 120000; i += 60) {
      const st = await S(() => {
        const c = document.querySelector('.foe-card[data-i="1"]');
        return { battle: document.body.classList.contains('in-battle'), menu: !document.getElementById('commands').hidden, foe: document.body.classList.contains('targeting-foe'),
          modal: !document.getElementById('modal').hidden, ratsDead: !!(c && c.disabled), op: c ? +getComputedStyle(c).opacity : -1, cls: c ? c.className : '' };
      });
      if (st.modal) { const b = await t.page.$('#modalButtons button'); if (b) await b.click(); continue; }
      if (!st.battle && i > 5000) break;
      if (st.ratsDead && !diedAt) { diedAt = Date.now(); await S(() => Q.debug().party.forEach((p) => { p.strength = -3; })); }
      if (diedAt && !faded && st.op === 0) faded = true;
      else if (faded) { samples++; if (st.op > highest) t.log(`seen again ${Date.now() - diedAt}ms after it fell: opacity ${st.op} (${st.cls})`); highest = Math.max(highest, st.op); }
      if (diedAt && Date.now() - diedAt > 12000) break;
      if (st.menu) {
        const pick = st.foe ? (diedAt ? '.foe-card[data-i="0"]:not(:disabled)' : '.foe-card[data-i="1"]:not(:disabled)') : '#commands .cmd:not(:disabled)';
        const o = await t.page.$(pick) || await t.page.$(st.foe ? '.foe-card:not(:disabled)' : '#commands .cmd:not(:disabled)');
        if (o) await o.click().catch(() => {});
      }
      await t.wait(60);
    }
    check(diedAt && faded && samples > 20, 'the rats fall (or flee) first, fade out, and the fight goes on', { faded, samples });
    check(highest === 0, 'their card never shows again while the cultist fights on', { highest });
  },
};
