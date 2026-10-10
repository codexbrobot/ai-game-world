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
      id: 'undercroft', floor: 'undercroft', arrive: true,
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
    { id: 'font', floor: 'undercroft', area: [1, 8, 3, 9], tile: 'F', run: (dm, first) => font(dm, first) },
    {
      id: 'dais', floor: 'undercroft', area: [10, 3, 14, 7],
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
      id: 'crypt', floor: 'undercroft', area: [7, 8, 8, 11],
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
      id: 'deepstair', floor: 'undercroft', area: [12, 13, 14, 14],
      async run(dm) {
        dm.flag('deepStair', true);
        await dm.say('The stair down', `The stair goes down into black water, and the water is <em>rising</em>: you watch it climb a step while you stand there. It isn’t rain and it isn’t a spring. It’s coming up from under the island.

Somewhere below, under all that water, <em>a woman is weeping</em>, patiently, as if she has been at it for a hundred years.`, [{ label: 'Remember this' }]);
      },
    },
    // ---------- the Brine Gaol: where it starts ----------
    {
      id: 'wake', floor: 'gaol', arrive: true,
      async run(dm) {
        const [a, b] = dm.party;
        await dm.say('The Brine Gaol', `Cold water in your mouth wakes you. It is up to your ankles, and it wasn’t yesterday. Or the day before. You stopped counting days a long time ago.

${dm.name(a)}${b ? ` and ${dm.name(b)}` : ''}: two wretches in one cell, in the Brine Gaol of Skarnvik, where the Salt Lords put the people they want forgotten. Nobody has brought food in a long while. Nobody has come at all.

In the corner is what’s left of your old cellmate. He isn’t using his legs any more.`, [{ label: 'Take his legs', note: 'a femur each (d4)' }]);
        await dm.say('The Brine Gaol', `The bones come away easily. Not a sword, but they will crack a skull. <em>Your own things</em> — your weapons, your armor, your silver — the guards took when they brought you in. If they’re anywhere, they’re somewhere in here.

The cell door is shut. Water is coming in under it.`, [{ label: 'Get up' }]);
      },
    },
    {
      id: 'celldoor', floor: 'gaol', door: [1, 2],
      async run(dm) {
        const choices = [
          { label: 'Wrench the rusted hinge', note: 'Strength DR 12' },
          { label: 'Pick the lock with a bone splinter', note: 'Agility DR 12' },
          { label: 'Call for the jailer', note: 'Presence DR 12: someone might come' },
          { label: 'Not yet' },
        ];
        const pick = await dm.say('Your cell door', 'Iron, rusted orange where the water reaches. The lock is old. The hinges are older.', choices);
        if (pick === 3) return;
        const ab = ['strength', 'agility', 'presence'][pick];
        const pc = dm.best(ab);
        const ok = await dm.test(pc, ab, 12, ['wrenches at the hinge', 'works a splinter into the lock', 'shouts down the corridor'][pick]);
        if (ok) {
          dm.openDoor(1, 2);
          const text = [
            `The hinge screams and gives. The door sags open into the corridor. <em>You are out of the cell.</em>`,
            `Something in the lock clicks, and keeps clicking, and gives. <em>You are out of the cell.</em>`,
            `A last turnkey comes sloshing, half-starved, keys rattling, and opens the door to drag you out — and sees the bone in ${dm.name(pc)}’s hand. He runs screaming into the dark. <em>You are out of the cell.</em>`,
          ][pick];
          await dm.say('Your cell door', text, [{ label: 'Out' }]);
        } else {
          if (pick === 0) await dm.hurt(pc, 1, 'a rusted hinge');
          if (pick === 2) { dm.openDoor(8, 4); dm.alarm(); }
          const text = [
            `The hinge holds. The bar bites ${dm.name(pc)}’s palm. <em>1 damage.</em> Try again, or try something else.`,
            'The splinter snaps off in the lock. There are more bones.',
            'Nobody comes. But somewhere down the corridor a door bangs open, and <em>something heard you</em>. It is coming the slow way.',
          ][pick];
          await dm.say('Your cell door', text, [{ label: 'Again' }]);
        }
      },
    },
    {
      id: 'knewher', floor: 'gaol', area: [7, 1, 8, 1],
      async run(dm) {
        const n = dm.flag('knownName');
        const pick = await dm.say(`The cell of ${n}`, `You know this cell. You know who’s in it.

<em>${n}.</em> Across the corridor from you for years. ${dm.flag('knownWhat')} ${dm.flag('knownShe') === 'he' ? 'He' : 'She'} drowned in ${dm.flag('knownShe') === 'he' ? 'his' : 'her'} chains, sitting up, as if waiting for a visitor.

Nobody else is going to mourn ${n}.`, [
          { label: 'Close the eyes and say goodbye' },
          { label: 'Take the boots, and go' },
          { label: 'Back away' },
        ]);
        if (pick === 2) {
          await dm.say(`The cell of ${n}`, 'You back out into the corridor. The water closes over the footprints you made.', [{ label: 'Go on' }]);
          return;
        }
        if (pick === 0) {
          const pc = dm.party.slice().sort((a, b) => a.omens - b.omens)[0];
          dm.omen(pc);
          await dm.say(`The cell of ${n}`, `${dm.name(pc)} closes the eyes and says what there is to say. It’s the first time in years anyone has wept in here. Something in the dark takes note. <em>+1 Omen.</em>

Then the eyes open again.`, [{ label: 'Fight' }]);
        } else {
          await dm.say(`The cell of ${n}`, `The boots come off the swollen feet with a sound you won’t forget. And then the feet move.

<em>${n} opens ${dm.flag('knownShe') === 'he' ? 'his' : 'her'} eyes</em>, and they are full of seawater, and they don’t know you.`, [{ label: 'Fight' }]);
        }
        await dm.fight();
      },
    },
    {
      id: 'brann', floor: 'gaol', door: [10, 2],
      async run(dm) {
        if (dm.flag('freed')) return;
        const name = dm.flag('livingName');
        const pick = await dm.say('A voice from the cell', `“You’re out? You’re <em>OUT</em>. Let me out. Please. I’m ${name}. I can tell you things. I know where they put everything.”

A hand comes through the grille, grey and shaking.`, [
          { label: 'Break the lock', note: 'Strength DR 12' },
          { label: 'Promise to come back' },
          { label: 'Leave him' },
        ]);
        if (pick === 2) {
          await dm.say('A voice from the cell', 'You walk away. His voice follows you down the corridor for a long time, cursing you by name, and then by the names of your mothers.', [{ label: 'Go on' }]);
          return;
        }
        if (pick === 1) {
          dm.flag('promised', true);
          await dm.say('A voice from the cell', '“You’ll come back. You’ll come back. They all say that.” The hand withdraws.', [{ label: 'Go on' }]);
          return;
        }
        const pc = dm.best('strength');
        if (await dm.test(pc, 'strength', 12, 'heaves at the lock')) {
          dm.openDoor(10, 2);
          dm.flag('freed', name);
          dm.flag('knowsEvidence', true);
          await dm.say(name, `He falls out into the water and grabs ${dm.name(pc)}’s hand in both of his.

“The guards kept everything in the <em>evidence room, through the infirmary</em>. Sacks with our names on them. The key to the Warden’s hall hangs in there too. And the Warden — he’s still down there. Still doing his rounds. <em>Don’t let him see you.</em>”

Then he’s gone into the dark ahead of you, laughing or weeping. You may see him again, up in the city.`, [{ label: 'Go on' }]);
        } else {
          await dm.say('A voice from the cell', '“Again. Again! Please.” The lock holds. Your arms shake.', [{ label: 'Step back' }]);
        }
      },
    },
    {
      id: 'guardroom', floor: 'gaol', area: [5, 5, 9, 7],
      async run(dm) {
        await dm.say('The guard room', `A table, a brazier long dead, and cards laid out for a game nobody finished. The guards are still here. They drowned at their posts, and they are <em>still on duty</em>, swollen with seawater, waiting for a shift that ended months ago to end.

They look up.`, [{ label: 'Raise the femur' }]);
      },
    },
    {
      id: 'infirmary', floor: 'gaol', area: [1, 5, 3, 11],
      async run(dm) {
        const pick = await dm.say('The infirmary', `Cots under the water, straps on the cots. A desk on a dais of bricks, just above the flood, with a ledger on it, swollen shut.`, [
          { label: 'Read the ledger' },
          { label: 'Leave it' },
        ]);
        if (pick !== 0) return;
        dm.flag('ledger', true);
        await dm.say('The Gaol ledger', `Most of it is names, and most of the names are crossed out. The last pages are different:

<em>“Salt shipment from the Deep Mine. Lord Fennick says the prisoners who dug it are not to be released. Ever. Not to be named.”</em>

<em>“The sea in the lower block again. The Salt Lords say the island isn’t sinking. The Salt Lords live on the hill.”</em>

<em>“Comet in the sky three nights now. Half the guards gone. The Warden says no one leaves their post.”</em>

<em>“Water to the knee. No one leaves.”</em>`, [{ label: 'Close it' }]);
      },
    },
    {
      id: 'lowerblock', floor: 'gaol', area: [5, 9, 14, 11],
      async run(dm) {
        await dm.say('The lower block', `The lower block is drowned to the waist. In the middle of it the floor has fallen in, and the sea comes and goes through the hole like breath: in, and the water rises around you; out, and something pulls at your legs.

<em>Don’t step in the hole.</em>`, [{ label: 'Wade on' }]);
      },
    },
    {
      id: 'evidence', floor: 'gaol', area: [1, 13, 3, 14],
      async run(dm) {
        await dm.say('The evidence room', `Behind the infirmary, an iron cage, and in it sacks stacked to the ceiling, each with a name chalked on it. Most of the names are crossed out. <em>Yours aren’t.</em>

On a hook by the cage hangs a key as long as your hand.`, [{ label: 'Open your sacks' }]);
        const lines = dm.restoreGear();
        dm.flag('hallKey', true);
        await dm.say('Your things', `${lines.join('<br>')}

You take the long key from its hook. <em>The Warden’s hall</em> is the only way out.`, [{ label: 'Get dressed' }]);
      },
    },
    {
      id: 'halldoor', floor: 'gaol', door: [9, 12],
      async run(dm) {
        if (!dm.flag('hallKey')) {
          await dm.say('A locked door', `A door of black iron with a lock as big as your head. Beyond it, slow and heavy, something sloshes back and forth: footsteps, on their rounds.

${dm.flag('knowsEvidence') ? 'The key hangs in the evidence room, through the infirmary.' : 'The key must be somewhere in the Gaol.'}`, [{ label: 'Step back' }]);
          return;
        }
        dm.openDoor(9, 12);
        await dm.say('The Warden’s hall', `The long key turns. Beyond the door is the Warden’s hall, tall as a chapel, and at the far end, under a grate where grey light leaks down, is the way out.

Between you and the light, keys ringing at every step, <em>the Warden is making his rounds.</em>`, [{ label: 'Go in' }]);
      },
    },
  ];
})();
