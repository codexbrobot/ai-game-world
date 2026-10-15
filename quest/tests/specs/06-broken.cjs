// The Broken table by the book, with the DM saying what each result means: out of a fight (unconscious, a
// broken limb, a haemorrhage counting down to death, sleeping with one), in a fight (out for rounds, the
// enemy going for whoever stands, coming round, death below 0), and the Settings choice between the book's
// "exactly 0" and the house rule "0 or below".
module.exports = {
  name: 'Broken (0 HP) and death',
  async run(t) {
    const { S, check, choose, waitModal } = t;
    const force = (b) => S((b) => { Q.broken = () => b; }, b);
    await t.open();
    check(await S(() => Q.prefs.broken) === 'exact', 'by default the Broken table is rolled at exactly 0 HP');
    await t.newGame();
    await t.escaped({ hp: 10, omens: 0 });
    await t.tp('skarnvik', 16, 12, 'E');

    await force({ r: 1, kind: 'out', title: 'Unconscious', rounds: 3, hp: 2 });
    await S(() => { Q.debug().party[0].hp = 4; Q.debugHurt(0, 4); });
    check(await waitModal() === 'Broken' && /comes up <b>1<\/b>|comes up 1/.test(await t.body()), 'exactly 0 HP: the DM explains the Broken roll');
    await choose(/Go on/);
    check((await t.party())[0].hp === 2, 'unconscious, out of a fight: you come round with d4 HP');

    await force({ r: 2, r6: 2, kind: 'limb', title: 'A broken leg', limb: 'left leg', severed: false, ability: 'agility', rounds: 2, hp: 3 });
    const ag = (await t.party())[0].agility;
    await S(() => { Q.debug().party[0].hp = 2; Q.debugHurt(0, 2); });
    await waitModal();
    check(/left leg is broken/.test(await t.body()), 'a broken limb, explained');
    await choose(/Go on/);
    check((await t.party())[0].agility === ag - 1 && (await t.party())[0].hp === 3, 'a broken leg costs a point of Agility, for good');

    await force({ r: 3, kind: 'bleed', title: 'Haemorrhage', hours: 2 });
    await S(() => { Q.debug().party[1].hp = 5; Q.debugHurt(1, 5); });
    await waitModal();
    check(/bleeds to death in 2 hours \(about 34 steps\)/.test(await t.body()), 'a haemorrhage: death in d2 hours unless treated, and how to stop it');
    await choose(/Go on/);
    let p1 = (await t.party())[1];
    const chip = await S(() => document.querySelectorAll('#chips .chip em')[1].textContent);
    check(p1.hp === 0 && p1.bleeding && p1.haem === 34 && await S(() => Q.haemDR(Q.debug().party[1])) === 16 && /♦34/.test(chip), 'bleeding at 0 HP, the steps counting down on the portrait, every test DR 16', { p1, chip });
    await S(() => { Q.debug().party[1].haem.left = Q.HOUR_STEPS + 1; });
    await t.step();
    check(await S(() => Q.haemDR(Q.debug().party[1])) === 18 && /last hour/.test(await t.lastLog()), 'the last hour: DR 18');
    await S(() => { Q.debug().party[1].haem.left = 1; });
    await t.page.keyboard.press('s');
    check(await waitModal() === 'Dead' && /bled to death/.test(await t.body()), 'untreated, the hours run out: the DM tells you they bled to death');
    await choose(/Go on/);
    check((await t.party())[1].dead, 'and they are dead');

    await force({ r: 3, kind: 'bleed', title: 'Haemorrhage', hours: 1 });
    await S(() => { Q.debug().party[0].hp = 3; Q.debugHurt(0, 3); });
    await waitModal(); await choose(/Go on/);
    await t.tp('skarnvik', 17, 23, 'N');
    await t.bump();
    check(/bleeding to death/.test(await t.body()), 'the inn warns you that sleep won’t save the bleeding');
    await choose(/gutter/i);
    check(/bled to death in the night/.test(await t.body()), 'sleep with a haemorrhage and you don’t wake');
    await choose(/Go on/);
    check(await waitModal() === 'Dead', 'with both dead, the run passes to new wretches');

    // a fight: struck to exactly 0, out for rounds, the enemy goes for whoever stands; then death below 0
    await choose(/New wretches/);
    await t.wait(400);
    await t.page.click('#btnAccept');
    await waitModal(); await choose(/Go on/);
    await t.closeAll(); // a day went by first (and maybe a Misery came with it)
    await S(() => { const s = Q.debug(); s.party.forEach((p) => { p.hp = p.maxHp = 12; p.omens = 0; }); for (const x of Q.SCENES) s.scenes[x.id] = true; });
    await S(() => {
      window.__queue = ['zero', 'below'];
      Q.defend = (pc) => {
        const plan = window.__queue.length && !(pc.out > 0) ? window.__queue.shift() : null;
        if (!plan) return { kind: 'dodge', r: 15, dr: 12, total: 15, ok: true, fumble: false, crit: false };
        const dmg = plan === 'zero' ? pc.hp : pc.hp + 3;
        return { kind: 'wound', r: 3, dr: 12, total: 3, ok: false, fumble: false, crit: false, dmg, dmgRoll: dmg, armorDie: 0, armorRoll: 0, absorbed: 0, before: dmg, brokeArmor: false, warded: false, wardRoll: 0 };
      };
    });
    await force({ r: 1, kind: 'out', title: 'Unconscious', rounds: 2, hp: 3 });
    const g = await S(() => { const f = Q.debug().floors.find((x) => x.id === 'hollow'); const g = f.groups.find((g) => g.alive && g.members.length === 2 && g.members.every((m) => m.key === 'saltwight')); return { x: g.x, z: g.z }; });
    await S((g) => Q.debugEnter(Q.FLOORS.findIndex((f) => f.id === 'hollow'), { x: g.x + 1.0, z: g.z, a: Math.PI }), g);
    const fought = await t.fight();
    const broken = fought.boxes.find((b) => b.startsWith('Broken'));
    const dead = fought.boxes.find((b) => b.startsWith('Dead'));
    check(broken && /Out for 2 rounds/.test(broken) && /enemy will go for whoever is still standing/.test(broken), 'in a fight the DM stops it: out for d4 rounds, and the enemy goes for whoever stands', fought.boxes.map((b) => b.slice(0, 120)));
    check(dead && /below 0, and below 0 there is nothing to roll/.test(dead), 'below 0 there is nothing to roll: dead, and the DM says so', fought.boxes);
    const after = await t.party();
    check(after.filter((p) => p.dead).length === 1 && after.some((p) => !p.dead && p.hp === 3 && !p.out), 'the one who was out comes round with d4 HP and finishes it', after);
    await t.closeAll();

    // Settings: 0 or below
    await t.page.click('#tSettings'); await t.wait(400);
    await t.page.click('[data-set="broken"][data-val="below"]'); await t.wait(300);
    check(await S(() => localStorage.getItem('quest-borg-broken')) === 'below', 'Settings: “0 or below” is chosen and kept');
    await choose(/^Close$/);
    await force({ r: 1, kind: 'out', title: 'Unconscious', rounds: 2, hp: 3 });
    const alive = (await t.party()).findIndex((p) => !p.dead);
    await S((i) => { Q.debug().party[i].hp = 4; Q.debugHurt(i, 7); }, alive);
    check(await waitModal() === 'Broken' && /a killing blow is <em>Broken<\/em>|a killing blow is Broken/.test(await t.body()) && !(await t.party())[alive].dead,
      'with the house rule, a killing blow rolls on the Broken table instead');
    await t.closeAll();
    await t.page.reload(); await t.wait(500);
    check(await S(() => Q.prefs.broken) === 'below', 'the choice is remembered');
  },
};
