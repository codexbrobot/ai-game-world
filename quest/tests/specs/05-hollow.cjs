// Saint Agne: the Stranger's next chapter, the bell-ringers' door (the gravedigger's key), the Hollow end to
// end (the bell, Haskel's book, the camp, a cart, the overseer, the saint's three choices, the tunnel), back
// up the stair, and the Stranger again.
module.exports = {
  name: 'Saint Agne’s Hollow',
  async run(t) {
    const { S, check, choose, waitModal } = t;
    await t.open();
    await t.newGame();
    await t.escaped({ silver: 60, omens: 1, hp: 60, townSeen: false });
    await S(() => { const s = Q.debug(); s.metStranger = true; s.flags.deepStair = true; s.party.forEach((p) => { p.strength = 6; }); });

    // the Stranger: what the water does, then the rest of it
    await t.tp('skarnvik', 20, 14, 'N');
    await t.bump();
    await choose(/Take the silver/);
    check(await waitModal() === 'The Stranger' && /Saint Agne/.test(await t.body()) && (await t.flags()).seekAgne, 'the Stranger tells you about Saint Agne');
    check(/bell-ringers’ way/.test(await t.lastLog()), 'and the goal points you to the bell-ringers’ way', await t.lastLog());
    await t.closeAll();

    // the door, locked; the gravedigger's key
    await t.tp('skarnvik', 11, 2, 'N');
    check(await t.facing() === 'A little door in the hill' && await t.bump() === 'A little door in the hill', 'a little door in the hill, behind the graves');
    await choose(/Leave it/);
    await t.closeAll();
    await t.tp('skarnvik', 8, 7, 'N');
    await t.bump();
    await choose(/bell-ringers’ door/);
    await choose(/Pay him/);
    check((await t.flags()).bellKey, 'the gravedigger digs up Brother Osric’s key for 10s');
    await t.closeAll();
    await t.tp('skarnvik', 11, 2, 'N');
    await t.bump();
    await choose(/Unlock it/);
    await choose(/Go down/);
    const below = await waitModal(8000);
    check(below === 'The bell-ringers’ stair' && await S(() => Q.debug().floors[Q.debug().floorIx].id) === 'hollow' && await t.place() === 'The Bell-Ringers’ Way', 'down the stair into Saint Agne’s Hollow', below);
    await t.closeAll();

    // the bell chamber and the bell
    await t.tp('hollow', 8, 2, 'E');
    await t.page.keyboard.press('w');
    check(await waitModal() === 'The bell chamber', 'the bell chamber');
    await t.closeAll();
    await t.tp('hollow', 12, 5, 'N');
    await t.step();
    check(await t.bump() === 'The bell-ringers’ bell', 'the fallen bell');
    const o0 = (await t.party()).map((p) => p.omens);
    await choose(/Ring it/);
    await waitModal();
    const rung = (await t.flags()).bellRung;
    const o1 = (await t.party()).map((p) => p.omens);
    check(rung ? o1.every((v, i) => v === o0[i] + 1) : /won’t swing/.test(await t.body()), rung ? 'ringing it: something below sings back, +1 Omen each' : 'the clapper won’t swing this time (a failed roll)');
    await t.closeAll();

    // Brother Haskel's book
    await t.tp('hollow', 16, 2, 'E');
    await t.page.keyboard.press('w');
    check(await waitModal() === 'A bell-ringer’s cell', 'the last bell-ringer’s cell');
    await choose(/Read the book/);
    check((await t.flags()).sevenSaints && /Seven saints/.test(await t.body()), 'his book: seven saints, one under each hill');
    await t.closeAll();

    // the camp, and a cart
    await S(() => { for (const g of Q.debug().floors.find((f) => f.id === 'hollow').groups) if (!g.dormant) g.alive = false; });
    await t.tp('hollow', 8, 11, 'S');
    await t.page.keyboard.press('w');
    check(await waitModal() === 'The cutters’ camp', 'the cutters’ camp');
    await t.closeAll();
    await t.tp('hollow', 7, 12, 'W');
    check(await t.bump() === 'A cart of salt', 'a cart of the saint’s salt');
    const s0 = await S(() => Q.debug().silver);
    await choose(/Fill your pockets/);
    check(await S(() => Q.debug().silver) > s0, 'filling your pockets pays');
    await t.closeAll();

    // the Hollow and the overseer
    await t.tp('hollow', 8, 17, 'S');
    await t.page.keyboard.press('w');
    check(await waitModal() === 'The Hollow', 'the Hollow, and the overseer');
    await choose(/^Fight$/);
    const f = await t.fight();
    const fl = await t.flags();
    check(fl.overseerDead && fl.writ && /Leave the crown/.test(await t.lastLog(2)), 'the overseer dies, and carries Lord Fennick’s writ', f);
    await t.closeAll();

    // Saint Agne
    await t.tp('hollow', 14, 21, 'N');
    await t.step();
    check(await t.bump() === 'Saint Agne' && /Seven of us/.test(await t.body()), 'Saint Agne sings of her sisters');
    await choose(/Go on/);
    await S(() => Q.debug().party.forEach((p) => { p.hp = 1; }));
    await choose(/Pray with her/);
    check((await t.party()).every((p) => p.hp === p.maxHp), 'praying with her heals you fully');
    await choose(/Go on/);
    const d0 = await S(() => Q.debug().calendar.days);
    await S(() => { Q.realTest = Q.test; Q.test = (ab, dr) => Q.realTest(ab, dr, 15); }); // the Strength test passes (it's dice)
    await choose(/Bring down/);
    await waitModal();
    await S(() => { Q.test = Q.realTest; });
    check((await t.flags()).agneSealed && await S(() => Q.debug().calendar.days) > d0, 'bringing down the cutters’ tunnel pushes the next Misery back');
    await choose(/Go on/);
    const s1 = await S(() => Q.debug().silver), d1 = await S(() => Q.debug().calendar.days);
    await choose(/Cut a piece/);
    check(await S(() => Q.debug().silver) > s1 && await S(() => Q.debug().calendar.days) === d1 - 1, 'cutting a piece of her pays, and costs a day');
    await t.closeAll();

    // the tunnel, and back up
    await t.tp('hollow', 24, 20, 'E');
    await t.page.keyboard.press('w');
    check(await waitModal() === 'The cutters’ tunnel' && /choked with fallen salt/.test(await t.body()), 'the cutters’ tunnel is choked, once you brought it down');
    await t.closeAll();
    await t.tp('hollow', 2, 1, 'W');
    await t.bump();
    await choose(/Climb out/);
    await t.wait(800);
    const up = await t.where();
    check(await S(() => Q.debug().floors[Q.debug().floorIx].id) === 'skarnvik' && up[0] === 11 && up[1] === 2, 'back up the stair, at the bell-ringers’ door', up);

    // the Stranger
    await t.tp('skarnvik', 20, 14, 'N');
    const s2 = await S(() => Q.debug().silver);
    await t.bump();
    check(/Cut to the knee/.test(await t.body()) && await S(() => Q.debug().silver) === s2 + 50, 'the Stranger hears about Saint Agne, and pays 50s');
    check(/white stair/.test(await t.lastLog()), 'and the next chapter is the white stair under the Exchange');
    await t.closeAll();
  },
};
