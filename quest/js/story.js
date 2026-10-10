// The DM's voice: scenes that play when you first walk into a place (or arrive on a floor). Each scene
// narrates, offers choices, and may ask for a test, which is rolled on screen like any other (and an
// Omen can save it). Choices can reveal what something is, find a hidden thing, open a secret, or
// change how a fight will go.
//
// A scene: { id, floor, area: [x0, y0, x1, y1] (cells, inclusive) or arrive: true, run(dm) }
// The dm object (made in js/game.js):
//   say(title, text, choices) -> index chosen      choices: [{ label, note, disabled }]
//   best(ability) -> the living wretch best at it   test(pc, ability, dr, what) -> passed?
//   heal(pc, n)  hurt(pc, n, cause)  omen(pc)  silver(n)  item(kind)  listen()  open(x, y, tile)
//   flag(name, value?)  name(pc)  d(sides)  party  log(html)  font -> this floor's font state
// Text: paragraphs split by blank lines; <em> for what matters.
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  // The black font's nature is decided when a run begins, and stays hidden until someone tastes it.
  Q.FONT_NATURES = {
    saint: {
      name: 'saint’s tears',
      taste: 'Salt and sweetness. <em>Saint’s tears.</em> Whatever wept them was holy once, and it still mends what it touches.',
      uses: 2,
    },
    comet: {
      name: 'comet water',
      taste: 'It fizzes on your tongue, and for a heartbeat you see the comet from above, looking down at you. <em>Comet water.</em> It will show you something, once.',
      uses: 1,
    },
    lye: {
      name: 'lye and blood',
      taste: 'Your lip blisters. <em>Lye and old blood.</em> Whoever filled this font wanted it to hurt.',
      uses: 99,
    },
  };

  async function font(dm, first) {
    const f = dm.font;
    let heaved = false; // one heave at the basin per visit
    let text = first
      ? `In the middle of a cramped chapel stands a basin of black stone, full to the brim with something pink. Not water: it doesn’t ripple when you breathe on it, and the flagstones around it are bone-dry.

It smells of rosewater and old pennies. It does not belong down here. <em>It might be a blessing.</em> Things down here rarely are.`
      : `The black font, still brimming with pink${f.known ? ` (${Q.FONT_NATURES[f.nature].name})` : ''}.`;
    for (;;) {
      const choices = [
        { label: 'Drink', note: 'whoever is worst hurt drinks' },
        ...(!f.known ? [{ label: 'Taste a single drop', note: 'Presence DR 12: learn what it is' }] : []),
        ...(!f.searched && !heaved ? [{ label: 'Look under the basin', note: 'Strength DR 12: it sits oddly on the floor' }] : []),
        { label: 'Leave it' },
      ];
      const pick = choices[await dm.say('The black font', text, choices)].label;
      if (pick === 'Leave it') return;
      if (pick === 'Drink') {
        const pc = dm.party.slice().sort((a, b) => a.hp / a.maxHp - b.hp / b.maxHp)[0];
        f.uses -= 1;
        if (f.nature === 'saint') {
          const h = dm.d(6) + 1;
          dm.heal(pc, h);
          pc.bleeding = false;
          text = `${dm.name(pc)} drinks. Warmth runs down the throat and spreads. <em>+${h} HP.</em>`;
        } else if (f.nature === 'comet') {
          dm.omen(pc);
          text = `${dm.name(pc)} drinks, and sees their own death: not today, not here. <em>+1 Omen.</em>`;
        } else {
          const n = dm.d(4);
          await dm.hurt(pc, n, 'the black font');
          text = `${dm.name(pc)} drinks, and it burns all the way down. <em>${n} damage.</em> The font seems pleased.`;
        }
        f.known = true;
        if (f.uses <= 0) { dm.dry(); dm.log('The font runs dry.'); return; }
        if (!dm.party.length) return;
      } else if (pick === 'Taste a single drop') {
        const pc = dm.best('presence');
        const ok = await dm.test(pc, 'presence', 12, 'tastes a drop');
        if (ok) { f.known = true; text = Q.FONT_NATURES[f.nature].taste; } else text = `${dm.name(pc)} rolls the drop around the mouth and learns nothing, except that it tastes of nothing they know.`;
      } else {
        f.searched = true;
        const pc = dm.best('strength');
        const ok = await dm.test(pc, 'strength', 12, 'heaves at the basin');
        if (ok) {
          dm.open(1, 10, 'K');
          text = `The basin grinds a hand’s width aside. Behind it, low in the wall, a crack breathes cold air. ${dm.name(pc)} pries out a loose stone, then another: <em>a hidden niche.</em> Something is wrapped in rotten velvet inside.`;
        } else {
          f.searched = false;
          heaved = true;
          text = 'The basin won’t move. Something under it clicks, almost mockingly. Maybe it needs a stronger back, or a luckier one, another time.';
        }
      }
    }
  }

  Q.SCENES = [
    // ---------- the Undercroft ----------
    {
      id: 'undercroft', floor: 0, arrive: true,
      async run(dm) {
        const pick = await dm.say('The Undercroft', `The crypt stair spits you out into a low hall. The air is wet and old, like breath held for a hundred years.

Somewhere ahead, claws click on stone. Under that, so faint you might be imagining it, <em>something is dragging itself along.</em>`, [
          { label: 'Listen at the dark', note: 'Presence DR 10: learn where things move' },
          { label: 'Go on' },
        ]);
        if (pick !== 0) return;
        const pc = dm.best('presence');
        if (await dm.test(pc, 'presence', 10, 'listens')) {
          dm.listen();
          await dm.say('The Undercroft', `${dm.name(pc)} holds their breath and counts: rats to the west, something slow in the deep crypt, and boots, many boots, by a door. <em>Everything that moves on this floor is on your map.</em>`, [{ label: 'Go on' }]);
        } else {
          await dm.say('The Undercroft', 'Only your own heartbeat, and the drip of water. The dark keeps its secrets.', [{ label: 'Go on' }]);
        }
      },
    },
    { id: 'font', floor: 0, area: [1, 8, 3, 9], tile: 'F', run: (dm, first) => font(dm, first) },
    {
      id: 'dais', floor: 0, area: [10, 3, 14, 7],
      async run(dm) {
        const pick = await dm.say('The rat-saint', `The ceiling goes up and up until your torchlight gives out. In the middle of the vault a dais of black stone rises in three steps, and every step is carved: rats, hundreds of them, gnawing their way up toward a saint who smiles as she is eaten.

There are words cut around her feet.`, [
          { label: 'Read the words', note: 'Presence DR 12' },
          { label: 'Leave her to her rats' },
        ]);
        if (pick !== 0) return;
        const pc = dm.best('presence');
        if (await dm.test(pc, 'presence', 12, 'reads the words')) {
          dm.omen(pc);
          await dm.say('The rat-saint', `It is a prayer for being eaten gladly. ${dm.name(pc)} says it under their breath, and for a moment the comet looks away. <em>+1 Omen.</em>`, [{ label: 'Go on' }]);
        } else {
          await dm.hurt(pc, 1, 'the rat-saint’s words');
          await dm.say('The rat-saint', `The letters crawl. One of them crawls into ${dm.name(pc)}’s eye. <em>1 damage.</em>`, [{ label: 'Go on' }]);
        }
      },
    },
    {
      id: 'crypt', floor: 0, area: [7, 8, 8, 11],
      async run(dm) {
        const pick = await dm.say('The drowned crypt', `Steps lead down into a crypt flooded with black water, ankle-deep and still. Coffin lids float in it like rafts.

Something under the water catches your torchlight and <em>winks</em>. Something else, further in, makes a slow ring of ripples.`, [
          { label: 'Feel around under the water', note: 'Agility DR 12' },
          { label: 'Stay out of the water' },
        ]);
        if (pick !== 0) return;
        const pc = dm.best('agility');
        if (await dm.test(pc, 'agility', 12, 'reaches into the black water')) {
          if (dm.d(2) === 1) {
            const s = dm.d(6) + dm.d(6) + dm.d(6) + 4;
            dm.silver(s);
            await dm.say('The drowned crypt', `${dm.name(pc)}’s fingers close on a purse that rotted around its coins. <em>${s}s.</em>`, [{ label: 'Go on' }]);
          } else {
            await dm.say('The drowned crypt', `${dm.name(pc)}’s fingers close on something cold that was waiting to be found.`, [{ label: 'Pull it out' }]);
            await dm.item();
          }
        } else {
          const n = dm.d(4);
          await dm.hurt(pc, n, 'a crypt leech');
          await dm.say('The drowned crypt', `A leech as long as your forearm, fat and grateful. <em>${n} damage</em> before ${dm.name(pc)} tears it off.`, [{ label: 'Go on' }]);
        }
      },
    },
    {
      id: 'deepstair', floor: 0, area: [12, 13, 14, 14],
      async run(dm) {
        await dm.say('The stair down', `Cold air rises from the stair, and with it a sound you will hear in your sleep for the rest of your short life: <em>a woman weeping</em>, patiently, as if she has been at it for a hundred years and has a hundred more to go.`, [{ label: 'Go on' }]);
      },
    },
    // ---------- the Weeping Vault ----------
    {
      id: 'vault', floor: 1, arrive: true,
      async run(dm) {
        const pick = await dm.say('The Weeping Vault', `The walls sweat. Every drip lands with a little sob, and the sobs echo until the whole place seems to be grieving.

Far below, a bell rings once. But the Bell-Tongue is down here, and <em>a bell without its tongue cannot ring.</em>`, [
          { label: 'Listen to the echoes', note: 'Presence DR 12: learn where things move' },
          { label: 'Go on' },
        ]);
        if (pick !== 0) return;
        const pc = dm.best('presence');
        if (await dm.test(pc, 'presence', 12, 'listens to the echoes')) {
          dm.listen();
          await dm.say('The Weeping Vault', `The sobbing has a shape, and ${dm.name(pc)} learns it. <em>Everything that moves on this floor is on your map.</em>`, [{ label: 'Go on' }]);
        } else {
          await dm.say('The Weeping Vault', 'The echoes fold over each other until you can’t tell near from far.', [{ label: 'Go on' }]);
        }
      },
    },
    {
      id: 'bridge', floor: 1, area: [9, 7, 10, 7],
      async run(dm) {
        const pick = await dm.say('The bone bridge', `A bridge of fused bones spans the chasm. Below it there is no bottom, only a red glow, and a hum: one note, held forever.

It is the same note as the bell.`, [
          { label: 'Drop a silver coin and listen', note: '1s, Presence DR 12', disabled: dm.silverLeft < 1 },
          { label: 'Cross' },
        ]);
        if (pick !== 0) return;
        dm.silver(-1);
        const pc = dm.best('presence');
        if (await dm.test(pc, 'presence', 12, 'listens to the coin fall')) {
          dm.flag('knowsTears', true);
          await dm.say('The bone bridge', `The coin falls for a long time. When it strikes, it rings the bell’s note, and every wall in the Vault weeps harder.

${dm.name(pc)} understands: <em>the Abbess drinks the Vault’s tears. Stop them, and she is only flesh.</em>`, [{ label: 'Cross' }]);
        } else {
          await dm.say('The bone bridge', 'The coin never lands. Or it lands somewhere that doesn’t make a sound.', [{ label: 'Cross' }]);
        }
      },
    },
    {
      id: 'nave', floor: 1, area: [5, 13, 7, 14],
      async run(dm) {
        let text = `A nave, tall as a church. Weeping statues line both walls, and from their stone eyes run black tears, down channels cut in the floor, all of them flowing to one place:

a dais where a crowned woman in black kneels with her back to you, rocking. <em>The Pale Abbess.</em> The tears pool around her knees, and she is drinking them through her skin.`;
        const used = new Set();
        for (;;) {
          const choices = [
            ...(dm.flag('knowsTears') && !dm.flag('abbessWeak') ? [{ label: 'Plug the channels with grave-wax', note: 'quietly' }] : []),
            ...(!dm.flag('abbessWeak') && !used.has('smash') ? [{ label: 'Smash the statues’ eyes', note: 'Strength DR 12, and loud' }] : []),
            ...(!used.has('creep') ? [{ label: 'Creep up on her', note: 'Agility DR 14' }] : []),
            { label: 'Step into the light' },
          ];
          const pick = choices[await dm.say('The nave', text, choices)].label;
          if (pick === 'Step into the light') return;
          if (pick.startsWith('Plug')) {
            dm.flag('abbessWeak', true);
            text = 'You work in silence, pressing wax into the channels one by one. The tears back up and spill across the floor. At the far end, <em>the Abbess stops rocking.</em> Without her tears, she is only flesh: no armor, and weaker.';
          } else if (pick.startsWith('Smash')) {
            used.add('smash');
            const pc = dm.best('strength');
            if (await dm.test(pc, 'strength', 12, 'smashes the statues’ eyes')) {
              dm.flag('abbessWeak', true);
              text = `${dm.name(pc)} goes down the line with a stone, eye after eye, and the tears stop. <em>The Abbess shrieks.</em> Without her tears she is only flesh: no armor, and weaker. But she knows you’re here.`;
              dm.flag('abbessAlert', true);
            } else {
              dm.flag('abbessAlert', true);
              text = 'The stone is harder than you are. The noise rolls down the nave, and slowly, slowly, <em>she turns her head.</em> She will strike first.';
            }
          } else {
            used.add('creep');
            const pc = dm.best('agility');
            if (await dm.test(pc, 'agility', 14, 'creeps along the wall')) {
              dm.flag('ambush', true);
              dm.flag('abbessAlert', false);
              text = `${dm.name(pc)} moves between the statues like another shadow. <em>You will strike first.</em>`;
            } else {
              dm.flag('abbessAlert', true);
              text = 'A pebble skitters. The rocking stops. <em>She will strike first.</em>';
            }
          }
        }
      },
    },
  ];
})();
