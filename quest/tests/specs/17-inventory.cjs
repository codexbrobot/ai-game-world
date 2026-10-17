// The pack. What a wretch carries besides the weapon in hand and the armor worn: anything found, bought or
// handed over asks who takes it and goes in their pack; nothing replaces what you hold unless you say so, so
// nothing is lost (the Widow's Blade no longer throws the warhammer away). A pack item can be wielded or worn
// (what was in use goes in the pack), given to the other wretch, dropped, or sold to Thrumm for half. A
// wretch carries Strength + 8 things (at least 4); over that they're encumbered (DR +2 on Strength and
// Agility tests), and a pack can't hold more than twice that.
module.exports = {
  name: 'Inventory: the pack, who takes it, and how much you can carry',
  async run(t) {
    const { S, check, choose, waitModal, page } = t;
    const names = () => S(() => Q.debug().party.map((p) => p.name.split(' ')[0]));
    await t.open();
    await t.newGame();
    await t.escaped();

    // the rules of carrying
    const rules = await S(() => {
      const pc = { strength: 0, weapon: { name: 'Sword', die: 6 }, armor: { name: 'Rags', tier: 0 }, relic: null, pack: [] };
      const out = { cap: Q.capacityOf(pc), carried: Q.carried(pc) };
      pc.armor = { name: 'Boiled leather', tier: 1 }; pc.relic = 'x';
      out.worn = Q.carried(pc);
      pc.pack = Array.from({ length: 6 }, () => ({ kind: 'weapon', name: 'Knife', die: 4 }));
      out.over = Q.encumbered(pc); out.dr = Q.drOf(pc, 12, 'agility'); out.drPres = Q.drOf(pc, 12, 'presence'); out.full = Q.packFull(pc);
      pc.strength = -3; out.low = Q.capacityOf(pc);
      return out;
    });
    check(rules.cap === 8 && rules.carried === 1 && rules.worn === 3, 'a wretch carries Strength + 8: a weapon, armor (not rags) and a relic count', rules);
    check(rules.over && rules.dr === 14 && rules.drPres === 12, 'over that, DR +2 on Strength and Agility tests, but not on others', rules);
    check(rules.low === 5 && !rules.full, 'at least 4 (five at Strength −3 here); the pack holds up to twice', rules);

    // the Widow's Blade turns up with warhammers already in hand: who takes it, and nothing is lost
    await S(() => { const s = Q.debug(); s.party.forEach((p) => { p.weapon = { name: 'Warhammer', die: 6 }; p.armor = { name: 'Boiled leather', tier: 1 }; p.strength = 1; p.pack = []; }); Q.debugOffer('widow'); });
    check(/takes it/.test(await page.textContent('#modalButtons')) && (await waitModal()) === 'The uncollected sack', 'a strange thing found: the DM asks who takes it');
    const first = (await names())[1];
    await choose(new RegExp(`${first} takes it`));
    check(await waitModal() === 'In the pack' && /Use it now, or keep it/.test(await t.body()), 'then: use it now, or keep it in the pack');
    await choose(/Keep it in the pack/);
    await t.closeAll();
    let pack = await S(() => Q.debug().party.map((p) => ({ w: p.weapon.name, pack: p.pack.map((x) => x.name || x.key) })));
    check(pack[1].w === 'Warhammer' && pack[1].pack.length === 1 && /widow/i.test(pack[1].pack[0]), 'it went in the pack: the Warhammer is still in hand', pack);

    // wield it from the sheet: the Warhammer goes in the pack, and can come back
    await S(() => document.querySelector('.chip[data-sheet="1"]').click());
    await waitModal();
    check(/Carried/.test(await t.body()) && /Widow/.test(await t.body()), 'the character sheet shows what they carry');
    await S(() => document.querySelector('[data-pack="use"]').click());
    await waitModal(); // Now you know
    check(/Widow/.test(await t.body()), 'wielding it tells you what it does (and writes the Codex)');
    await choose(/So be it/);
    await waitModal(); // the sheet again
    pack = await S(() => Q.debug().party.map((p) => ({ w: p.weapon.name, pack: p.pack.map((x) => x.name || x.key) })));
    check(/Widow/.test(pack[1].w) && pack[1].pack.includes('Warhammer'), 'wielded: the Warhammer is in the pack, not lost', pack);
    await S(() => document.querySelector('[data-pack="use"]').click());
    await waitModal();
    pack = await S(() => Q.debug().party.map((p) => ({ w: p.weapon.name, pack: p.pack.map((x) => x.name || x.key) })));
    check(pack[1].w === 'Warhammer' && pack[1].pack.some((k) => /widow/i.test(k)), 'changed their mind: the Warhammer back in hand, the blade in the pack', pack);
    await t.closeAll();

    // give it to the other wretch
    await S(() => document.querySelector('.chip[data-sheet="1"]').click());
    await waitModal();
    await S(() => document.querySelector('[data-pack="give"]').click());
    await waitModal();
    pack = await S(() => Q.debug().party.map((p) => p.pack.length));
    check(pack[0] === 1 && pack[1] === 0, 'given to the other wretch', pack);
    await t.closeAll();

    // too much: encumbered, and it shows
    await S(() => { const s = Q.debug(); const p = s.party[0]; p.strength = 0; p.pack = Array.from({ length: 7 }, (_, i) => ({ kind: 'weapon', name: `Knife ${i}`, die: 4 })); Q.debugRefresh(); });
    check(await S(() => Q.encumbered(Q.debug().party[0])) && await S(() => !!document.querySelector('.chip .enc')), 'carrying too much: encumbered, and the HUD says so');
    await S(() => document.querySelector('.chip[data-sheet="0"]').click());
    await waitModal();
    check(/Encumbered/.test(await t.body()), 'the sheet says what it costs');
    await t.closeAll();

    // a full pack can't take more
    await S(() => { const p = Q.debug().party[0]; p.pack = Array.from({ length: 16 }, (_, i) => ({ kind: 'weapon', name: `Knife ${i}`, die: 4 })); Q.debugOffer('hook'); });
    await waitModal();
    const btn = await S(() => [...document.querySelectorAll('#modalButtons button')].map((b) => [b.textContent, b.disabled]));
    check(btn.some(([x, d]) => /takes it/.test(x) && d) && btn.some(([x, d]) => /takes it/.test(x) && !d), 'a full pack can’t take it; the other wretch can', btn);
    await choose(/Leave it/);
    await t.closeAll();

    // Thrumm buys spares at half
    await S(() => { const s = Q.debug(); s.party.forEach((p) => { p.pack = []; }); s.party[1].pack = [{ kind: 'weapon', name: 'Sword', die: 6 }]; s.silver = 10; });
    await t.tp('skarnvik', 17, 17, 'N');
    await S(() => Q.debugShop());
    await waitModal();
    check(/Sell Sword/.test(await t.body()), 'Thrumm offers to buy a spare');
    const before = await S(() => Q.debug().silver);
    await S(() => document.querySelector('.shoprow.sell').click());
    await waitModal();
    const after = await S(() => ({ silver: Q.debug().silver, left: Q.debug().party[1].pack.length }));
    check(after.silver === before + 15 && after.left === 0, 'sold for half its price (30s: 15s)', { before, after });
    await t.closeAll();

    // the evidence room: the blade in hand stays; their own weapon goes in the pack, never lost
    await S(() => { const s = Q.debug(); const p = s.party[0]; Q.wield(p, 'hook'); p.stash = { weapon: { name: 'Sword', die: 6 }, armor: { name: 'Boiled leather', tier: 1 }, silver: 20 }; p.pack = []; p.armor = { name: 'Rags', tier: 0 }; });
    const room = await S(() => { const lines = Q.debugRestoreGear(); const p = Q.debug().party[0]; return { lines: lines.join(' '), w: p.weapon.name, pack: p.pack.map((x) => x.name), armor: p.armor.name }; });
    check(room.w === 'Gutting Hook' && room.pack.includes('Sword') && room.armor === 'Boiled leather', 'the evidence room: what they hold stays, their own weapon goes in the pack', room);
  },
};
