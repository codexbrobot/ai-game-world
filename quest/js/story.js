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
        dm.flag(pick === 0 ? 'mourned' : 'tookBoots', true);
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
          dm.flag('leftHim', true);
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
        await dm.fight();
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
    // ---------- Skarnvik: the people in the street (a floor's uses name these by id) ----------
    {
      id: 'preacher', floor: 'skarnvik',
      async run(dm, first) {
        const opts = [
          { key: 'mouths', label: 'Ask who the Bright Mouths are' },
          ...(dm.flag('preacherBlessed') ? [] : [{ key: 'coin', label: 'Toss him a coin', note: '1s', disabled: dm.silverLeft < 1 }]),
          { key: 'go', label: 'Walk on' },
        ];
        const pick = await dm.say('The comet preacher', first
          ? `A man in a torn robe stands on an upturned salt barrel with his arms raised to the comet. A yellow comet is daubed on his chest in paint, or worse.

<em>“IT IS A BAPTISM,”</em> he screams at nobody. <em>“THE SEA COMES UP TO WASH SKARN CLEAN. THE BRIGHT MOUTHS WILL SING YOU UNDER!”</em>`
          : 'The preacher is still on his barrel, still screaming at the comet. His voice is going.', opts);
        const key = opts[pick].key;
        if (key === 'mouths') {
          dm.flag('brightMouths', true);
          await dm.say('The comet preacher', `He leans down, suddenly quiet, and his breath smells of salt. <em>“The comet’s own. They gather under the square, where the water is coming up from below. They are waiting for it. Go down and see. Go down and drown.”</em>

Then he straightens up and starts screaming again.`, [{ label: 'Go on' }]);
        } else if (key === 'coin') {
          dm.silver(-1);
          dm.flag('preacherBlessed', true);
          const pc = dm.party.slice().sort((a, b) => a.omens - b.omens)[0];
          dm.omen(pc);
          await dm.say('The comet preacher', `He bites the coin, weeps, and lays a hand on ${dm.name(pc)}’s head. The blessing is in a language that hurts the teeth. <em>+1 Omen.</em>`, [{ label: 'Go on' }]);
        }
      },
    },
    {
      id: 'fishwife', floor: 'skarnvik',
      async run(dm, first) {
        const opts = [
          { key: 'lords', label: 'Ask about the Salt Lords' },
          { key: 'night', label: 'Ask about the harbor' },
          { key: 'eel', label: 'Buy a smoked eel', note: '2s: 1 HP each', disabled: dm.silverLeft < 2 },
          { key: 'go', label: 'Walk on' },
        ];
        const pick = await dm.say('A fishwife', dm.hour === 'night'
          ? 'The fishwife is hauling her boat up the street on a rope, fast, looking back over her shoulder at the water. <em>“Are you mad? Get indoors! They’re up!”</em>'
          : first
          ? `A fishwife stands shin-deep in what used to be the fish market, gutting something that is still moving. <em>“Three streets,”</em> she says, without looking up. <em>“The sea’s come up three streets since spring. And the Salt Lords say it’s the tide.”</em>`
          : '<em>“You again. Buying, or gawping?”</em>', opts);
        const key = opts[pick].key;
        if (key === 'lords') {
          dm.flag('deepMineRumor', true);
          await dm.say('A fishwife', `<em>“They pay double for men to dig the Deep Mine now. My Henrik went for the wages at midsummer.”</em> She cuts the head off the thing in her hands. <em>“Nobody comes back from the Deep Mine. Nobody. And the salt keeps coming up out of it, finer every year.”</em>`, [{ label: 'Go on' }]);
        } else if (key === 'night') {
          await dm.say('A fishwife', '<em>“Don’t come down here after dark. The drowned walk up out of the water at night, looking for their houses. Knocking on doors that are under the sea.”</em>', [{ label: 'Go on' }]);
        } else if (key === 'eel') {
          dm.silver(-2);
          for (const pc of dm.party) dm.heal(pc, 1);
          await dm.say('A fishwife', 'It is black and greasy and tastes of smoke and the bottom of the sea. It is the best thing you have eaten in years.', [{ label: 'Go on' }]);
        }
      },
    },
    {
      id: 'gallows', floor: 'skarnvik',
      async run(dm) {
        const sung = dm.flag('hangedSong');
        const name = dm.flag('livingName');
        const left = dm.flag('sawDawn') && (dm.flag('promised') || dm.flag('leftHim')) && !dm.flag('freed');
        const third = !left ? ''
          : dm.flag('hangedLaid') ? '\n\nThe third rope is gone. Somebody burned it, and the ash has washed away.'
            : dm.hour === 'night' ? '\n\nThe third rope hangs empty, swinging, and the noose has been cut. From the inside.'
              : dm.party.some((p) => p.gaol)
                ? `\n\nOn a third rope, new since you came up out of the Brine: <em>${name}</em>. The Salt Lords’ men went down after you got out, and found him where you left him.`
                : '\n\nOn a third rope, new: a man with shackle-scars on his wrists. They say he was the last one left alive in the Brine.';
        const opts = [
          ...(sung ? [] : [{ key: 'listen', label: 'Listen to the humming', note: 'Presence DR 12' }]),
          { key: 'posters', label: 'Read the posters nailed to the gallows' },
          { key: 'go', label: 'Walk on' },
        ];
        const pick = await dm.say('The gallows', sung
          ? 'The hanged men turn in the rain. The one on the right is silent now, and his face is turned toward the harbor.' + third
          : `Two hanged men turn slowly in the rain, and a crow works at one of them. The ropes creak.

The one on the right is <em>humming</em>, very softly: a work song you half remember from the cells, the one the old miners sang.${third}`, opts);
        const key = opts[pick].key;
        if (key === 'listen') {
          const pc = dm.best('presence');
          if (await dm.test(pc, 'presence', 12, 'listens to the hanged man')) {
            dm.flag('hangedSong', true);
            await dm.say('The gallows', `${dm.name(pc)} stands close, under his feet, and the words come through the rain:

<em>“...down the white stair, down below the Exchange, where the saints lie in the salt, and the saints are singing too...”</em>

The humming stops. The dead face turns, very slowly, toward ${dm.name(pc)}. The crow flies off.`, [{ label: 'Step back' }]);
          } else {
            await dm.say('The gallows', 'Whatever the words are, the rain drowns them out. The humming goes on.', [{ label: 'Step back' }]);
          }
        } else if (key === 'posters') {
          await dm.say('The gallows', `<em>WANTED, by order of the Salt Lords: the escaped prisoners of the Brine Gaol. Dead will do.</em>

Under it, faces, washed by the rain to nothing at all. One of them could be yours. Nobody in the square is looking at them, or at you.`, [{ label: 'Step back' }]);
        }
      },
    },
    {
      id: 'priest', floor: 'skarnvik',
      async run(dm, first) {
        const opts = [{ key: 'saints', label: 'Ask about the saints' }, { key: 'under', label: 'Ask about the crypts under the square' }, { key: 'go', label: 'Walk on' }];
        const pick = await dm.say('A priest of the basilica', first
          ? 'A gaunt priest swings a censer at the rain, as if he could smoke it away. <em>“The basilica is open to the faithful,”</em> he says. <em>“And to the paying.”</em>'
          : 'The priest is still swinging his censer at the rain.', opts);
        const key = opts[pick].key;
        if (key === 'saints') {
          dm.flag('saintsHold', true);
          await dm.say('A priest of the basilica', `He glances up at the Hill, at the watchmen in white. <em>“The saints hold the island up. Everybody knew that, once. It is in the oldest hymns.”</em>

<em>“Now the Salt Lords say saints are a superstition. And they take them away to be cleaned.”</em>`, [{ label: 'Go on' }]);
        } else if (key === 'under') {
          await dm.say('A priest of the basilica', '<em>“The old crypts, under Gallows Square. The water comes up through them now, black and warm. We stopped burying people down there in the spring.”</em>', [{ label: 'Go on' }]);
        }
      },
    },
    {
      id: 'gravedigger', floor: 'skarnvik',
      async run(dm, first) {
        const door = (dm.flag('seekAgne') || dm.flag('sawBellDoor')) && !dm.flag('bellKey') && !dm.flag('hollowOpen');
        const opts = [
          { key: 'whose', label: 'Ask whose grave it is' },
          { key: 'lords', label: 'Ask about the Salt Lords' },
          ...(door ? [{ key: 'door', label: 'Ask about the bell-ringers’ door' }] : []),
          { key: 'go', label: 'Walk on' },
        ];
        const pick = await dm.say('The gravedigger', first
          ? 'An old man leaning on a spade, ankle-deep in a grave he is digging in the rain. <em>“Busy season,”</em> he says, and does not stop.'
          : '<em>“Still busy,”</em> says the gravedigger.', opts);
        const key = opts[pick].key;
        if (key === 'whose') {
          await dm.say('The gravedigger', '<em>“Nobody’s, yet. I dig them ahead now. Since the comet they fill faster than I can dig them.”</em>', [{ label: 'Go on' }]);
        } else if (key === 'lords') {
          dm.flag('emptyTomb', true);
          await dm.say('The gravedigger', `He stops digging. <em>“They opened the old saint’s tomb behind the basilica, last spring. Salt Lords’ men, at night, with a wagon. Paid me to look the other way, so I looked the other way.”</em>

He spits into the grave. <em>“It was empty when they finished. And it wasn’t empty before.”</em>`, [{ label: 'Go on' }]);
        } else if (key === 'door') {
          const how = await dm.say('The gravedigger', `<em>“The little door in the hill? The bell-ringers’ door.”</em> He leans on his spade. <em>“Brother Haskel had the last key, and he went down there and never came up. But old Brother Osric, before him, I buried with his own key round his neck. There. Under the yew.”</em>

He looks at you sideways. <em>“Ten silver, and I’ll have him up. Or dig him up yourselves, and I never saw it.”</em>`, [
            { label: 'Pay him to dig (10s)', disabled: dm.silverLeft < 10 },
            { label: 'Dig it up yourselves', note: 'Strength DR 12' },
            { label: 'Not now' },
          ]);
          if (how === 0) {
            dm.silver(-10);
            dm.flag('bellKey', true);
            await dm.say('The gravedigger', 'He digs fast, for an old man, and doesn’t look at the face. The key comes up on a rotten cord: iron, as long as your hand, with a little bell for a bow. <em>You have the bell-ringers’ key.</em>', [{ label: 'Take it' }]);
          } else if (how === 1) {
            const pc = dm.best('strength');
            if (await dm.test(pc, 'strength', 12, 'digs up Brother Osric')) {
              dm.flag('bellKey', true);
              await dm.say('Brother Osric', `${dm.name(pc)} digs down through the wet earth to the coffin, and through the coffin to Brother Osric, and takes the key from round his neck. Iron, as long as your hand, with a little bell for a bow. <em>You have the bell-ringers’ key.</em>`, [{ label: 'Fill it in' }]);
            } else {
              await dm.hurt(pc, 1, 'a grave that kept filling with water');
              await dm.say('Brother Osric', 'The grave fills with black water as fast as you dig. Brother Osric is keeping his key, for today.', [{ label: 'Step back' }]);
            }
          }
        }
      },
    },
    {
      id: 'watchman', floor: 'skarnvik',
      async run(dm) {
        const opts = [{ key: 'exchange', label: 'Ask about the Salt Exchange' }, { key: 'sinking', label: 'Ask about the sinking' }, { key: 'go', label: 'Walk on' }];
        const pick = await dm.say('A Salt Lords’ watchman', 'A watchman in a salt-white tabard looks you up and down, and doesn’t like what he sees. <em>“Move along.”</em>', opts);
        const key = opts[pick].key;
        if (key === 'exchange') {
          await dm.say('A Salt Lords’ watchman', '<em>“Closed to the likes of you. The Lords count their salt in there. Nobody goes in without a Lord’s seal.”</em>', [{ label: 'Go on' }]);
        } else if (key === 'sinking') {
          dm.flag('fennickTide', true);
          await dm.say('A Salt Lords’ watchman', `His hand goes to his halberd. <em>“Nobody’s sinking. It’s the tide. Lord Fennick says it’s the tide.”</em>

He says it like a prayer he has said a great many times.${dm.flag('ledger') ? ' Fennick: the name in the Gaol ledger.' : ''}`, [{ label: 'Go on' }]);
        }
      },
    },
    {
      id: 'beggar', floor: 'skarnvik',
      async run(dm) {
        const told = dm.flag('warmSalt');
        const opts = [
          { key: 'coin', label: 'Give him a coin', note: '1s', disabled: dm.silverLeft < 1 },
          { key: 'go', label: 'Walk on' },
        ];
        const pick = await dm.say('A blind beggar', '<em>“Spare a coin for a man who saw too much?”</em> A blind beggar in a doorway, wrapped in a blanket, holds out a wooden bowl.', opts);
        if (opts[pick].key !== 'coin') return;
        dm.silver(-1);
        if (told) {
          await dm.say('A blind beggar', '<em>“Bless you. Bless you. Don’t go down the Deep Mine.”</em>', [{ label: 'Go on' }]);
          return;
        }
        dm.flag('warmSalt', true);
        await dm.say('A blind beggar', `He bites the coin. <em>“Kind. Here’s something for it. I worked the Deep Mine, before my eyes went. Twenty years.”</em>

He leans close. <em>“The salt down there is warm. Salt isn’t warm. Think about that.”</em>`, [{ label: 'Go on' }]);
      },
    },
    {
      id: 'graves', floor: 'skarnvik',
      async run(dm) {
        const pick = await dm.say('Old graves', 'Old graves, sinking at angles into the wet ground of Church Hill. Rain runs down the stones and into the names.', [{ label: 'Read the stones' }, { label: 'Walk on' }]);
        if (pick !== 0) return;
        const lines = [
          '<em>HERE LIES A SALT-CUTTER. THE SALT KEPT HIM.</em>',
          '<em>SHE HELD THE ISLAND IN HER PRAYERS.</em> The name has been chiselled off.',
          '<em>DROWNED, AND BURIED ANYWAY.</em>',
          '<em>WE WILL SING YOU UP.</em> Somebody has scratched a comet over it.',
          'A child’s grave. Somebody has left a ring of white salt around it.',
          '<em>SAINT AGNE’S BELL-RINGER. THE BELL IS SILENT NOW.</em>',
        ];
        await dm.say('Old graves', lines[dm.d(lines.length) - 1], [{ label: 'Step back' }]);
      },
    },
    // ---------- the bell-ringers' door, behind the graves on Church Hill ----------
    {
      id: 'belldoor', floor: 'skarnvik',
      async run(dm) {
        if (dm.flag('hollowOpen')) {
          const go = await dm.say('The bell-ringers’ door', 'The little door in the hill stands open. Worn steps wind down into the dark, and up them comes a sound like picks, far away, and something like singing.', [{ label: 'Go down' }, { label: 'Not now' }]);
          if (go === 0) dm.go('hollow');
          return;
        }
        dm.flag('sawBellDoor', true);
        const opts = [
          ...(dm.flag('bellKey') ? [{ key: 'key', label: 'Unlock it with Brother Osric’s key' }] : []),
          ...(dm.flag('bellStair') ? [{ key: 'lift', label: 'Lift it on its hinges', note: 'Strength DR 10' }] : []),
          { key: 'force', label: 'Force it', note: 'Strength DR 16' },
          { key: 'go', label: 'Leave it' },
        ];
        const key = opts[await dm.say('A little door in the hill', `Behind the graves, half under ivy, an old arched door is set into the stone of the hill itself. Rust has run down from its hinges like old blood.

It doesn’t move.${dm.flag('seekAgne') ? ' <em>The bell-ringers’ way into Church Hill.</em>' : ''}`, opts)].key;
        if (key === 'go') return;
        let open = key === 'key';
        if (key !== 'key') {
          const pc = dm.best('strength');
          open = await dm.test(pc, 'strength', key === 'lift' ? 10 : 16, key === 'lift' ? 'lifts the door on its hinges' : 'throws a shoulder at the door');
          if (!open && key === 'force') await dm.hurt(pc, 1, 'an iron door');
        }
        if (!open) {
          await dm.say('A little door in the hill', 'The door doesn’t care.', [{ label: 'Step back' }]);
          return;
        }
        dm.flag('hollowOpen', true);
        const go = await dm.say('The bell-ringers’ door', `${key === 'key' ? 'The key turns as if it had been waiting.' : 'Something gives with a shriek of rust.'} The door swings in on a stair that winds down inside the hill, worn into a gutter by centuries of feet.

Cold air comes up it, and on the air, very far down: <em>picks</em>. And under the picks, something singing.`, [{ label: 'Go down' }, { label: 'Not now' }]);
        if (go === 0) dm.go('hollow');
      },
    },
    // ---------- Saint Agne's Hollow ----------
    {
      id: 'hollowStair', floor: 'hollow', arrive: true,
      async run(dm) {
        await dm.say('The bell-ringers’ stair', `The stair winds down inside the hill, around and around. The walls are bones at first: the bell-ringers buried their own right here on the stair, so they could go on hearing the bell.

Then the bones stop, and somewhere far below, the stone turns white.

From down there comes a sound you know from the Brine: <em>picks</em>. Many picks, working. And under them, so faint you could be imagining it, <em>singing</em>.`, [{ label: 'Go on' }]);
      },
    },
    {
      id: 'bellchamber', floor: 'hollow', area: [9, 1, 15, 6],
      async run(dm) {
        await dm.say('The bell chamber', `A round chamber cut into the rock, its roof lost in the dark. In the middle, where it fell, lies the bell-ringers’ bell: bronze, taller than a man, cracked from lip to crown, its rope still on it.

Around the lip, in old letters: <em>I RING THAT SHE MAY KNOW SHE IS NOT FORGOTTEN.</em>`, [{ label: 'Go on' }]);
      },
    },
    {
      id: 'bell', floor: 'hollow',
      async run(dm) {
        if (dm.flag('bellRung')) {
          await dm.say('The bell-ringers’ bell', 'The bell lies where it fell. You can still feel the note you rang in your teeth.', [{ label: 'Leave it' }]);
          return;
        }
        const pick = await dm.say('The bell-ringers’ bell', 'Cracked from lip to crown. <em>I RING THAT SHE MAY KNOW SHE IS NOT FORGOTTEN.</em> The rope is rotten, but the clapper is still in it.',
          [{ label: 'Ring it', note: 'Strength DR 12' }, { label: 'Leave it' }]);
        if (pick !== 0) return;
        const pc = dm.best('strength');
        if (!(await dm.test(pc, 'strength', 12, 'heaves on the clapper'))) {
          await dm.say('The bell-ringers’ bell', 'The clapper won’t swing. Not yet.', [{ label: 'Step back' }]);
          return;
        }
        dm.flag('bellRung', true);
        for (const p of dm.party) dm.omen(p);
        dm.alarm();
        await dm.say('The bell-ringers’ bell', `${dm.name(pc)} swings the clapper into the cracked bronze, and the bell gives one note, so low and so loud you feel it in your teeth and your knees and the roots of your hair.

And far below, <em>something answers</em>: a voice, singing one long note back up through the hill. <em>Each of you: +1 Omen.</em>

The picks have stopped. Everything down there heard it.`, [{ label: 'Go on' }]);
      },
    },
    {
      id: 'haskel', floor: 'hollow', area: [17, 1, 20, 3],
      async run(dm) {
        const pick = await dm.say('A bell-ringer’s cell', 'A cot, a cold brazier, a rope for a bell that isn’t there. In the corner sits what is left of the last bell-ringer, Brother Haskel, with a book in his lap.', [{ label: 'Read the book' }, { label: 'Leave him be' }]);
        if (pick !== 0) return;
        dm.flag('sevenSaints', true);
        await dm.say('Brother Haskel’s book', `<em>“Seven saints hold up Skarn, one under each of the seven hills, standing on the floor of the sea with the island on their shoulders. Ours is Agne. We ring every dawn so she knows she is not forgotten, and she holds.”</em>

<em>“The Salt Lords have forbidden the dawn bell. It disturbs the counting at the Exchange, they say.”</em>

<em>“Men in the hill. Picks, at night. They came in from the east, from under the Hill. Agne’s song has changed.”</em>

<em>“They have cut down the bell. I am the last. I am going down to her, and”</em>

And that’s where it stops.`, [{ label: 'Close it' }]);
      },
    },
    {
      id: 'camp', floor: 'hollow', area: [5, 11, 13, 15],
      async run(dm) {
        await dm.say('The cutters’ camp', `Lanterns on poles, rails on the floor, and carts heaped with salt that glitters pink where it was freshly cut. The walls are white and wet. Men in salt-caked aprons look up from their picks.

<em>“Who let you down here?”</em>`, [{ label: 'Raise your weapons' }]);
      },
    },
    {
      id: 'cart', floor: 'hollow',
      async run(dm) {
        const taken = dm.flag('tookSalt');
        const pick = await dm.say('A cart of salt', `A cart heaped with fresh-cut salt. It is warm. Where the pick went in, the salt is pink, and wet, and it smells of the sea and of skin.${taken ? '' : ' At the Exchange, a cart like this is worth more than the house you were born in.'}`,
          [...(taken ? [] : [{ label: 'Fill your pockets' }]), { label: 'Leave it' }]);
        if (taken || pick !== 0) return;
        dm.flag('tookSalt', true);
        const n = dm.d(6) * 5;
        dm.silver(n);
        await dm.say('A cart of salt', `You fill your pockets. Thrumm will pay for it, and ask no questions. <em>+${n}s.</em>

Somewhere below, the singing falters, for just a moment.`, [{ label: 'Go on' }]);
      },
    },
    {
      id: 'saltcaves', floor: 'hollow', area: [18, 10, 25, 15],
      async run(dm) {
        await dm.say('The salt', `The salt grows in teeth from the walls here, white and pink, and it is warm to the touch, like a cheek.

Things move in it: cutters who ate the salt they cut, crusted to the knee, to the waist, to the eyes. They still swing their picks. They don’t know what at.`, [{ label: 'Go on' }]);
      },
    },
    {
      id: 'hollow', floor: 'hollow', area: [5, 18, 23, 22],
      async run(dm) {
        const pick = await dm.say('The Hollow', `<em>The hill is hollow.</em>

The cave is as tall as the basilica, and in the middle of it stands <em>Saint Agne</em>: a woman of white salt three storeys tall, her arms raised, holding up the roof of the world. Her face is turned up, and calm. Below the knees there is nothing left of her. They have cut her away, cart by cart, and the hill groans on her shoulders.

And she is singing.

Under her, a big hooded man in a long black coat turns round, a lantern in his fist and a writ in his belt. <em>“This is the Lords’ work,”</em> he says. <em>“Back to it, lads.”</em>`, [
          { label: 'Tell the cutters to put down their picks', note: 'Presence DR 14' },
          { label: 'Fight' },
        ]);
        if (pick === 0) {
          const pc = dm.best('presence');
          if (await dm.test(pc, 'presence', 14, 'speaks to the cutters')) {
            await dm.say('The Hollow', `${dm.name(pc)} points up at her face. The cutters look at the saint, and at their picks, and at each other. One by one they put the picks down and walk off into the dark.

Only the overseer stays. <em>“Cowards,”</em> he says, and hefts his cudgel.`, [{ label: 'Fight' }]);
            await dm.fight({ drop: 'cutter' });
            return;
          }
          await dm.say('The Hollow', '<em>“Back to work,”</em> says the overseer, and the cutters come at you with their picks.', [{ label: 'Fight' }]);
        }
        await dm.fight();
      },
    },
    {
      id: 'agne', floor: 'hollow',
      async run(dm) {
        if (!dm.flag('overseerDead')) {
          await dm.say('Saint Agne', 'The overseer’s lantern swings your way. Not while he’s standing.', [{ label: 'Step back' }]);
          return;
        }
        if (!dm.flag('agneMet')) {
          dm.flag('agneMet', true);
          await dm.say('Saint Agne', `Up close she is not stone and not salt but both, and warm, like a hand. Her song comes up through your feet. There are words in it, if you listen with your bones:

<em>Seven of us. One under each hill. We stood on the floor of the sea when the sea was young, and took Skarn on our shoulders, and we have held it every day since.</em>

<em>Four of my sisters are cut away already. Their salt is in the Exchange, and in the Salt Lords’ bread, and in the mouths of the Bright. The island sinks because we are fewer.</em>

<em>I am cut to the knee. I hold. I hold.</em>`, [{ label: 'Go on' }]);
        }
        for (;;) {
          const opts = [
            ...(dm.flag('agnePrayed') ? [] : [{ key: 'pray', label: 'Pray with her', note: 'all HP, +1 Omen each, once' }]),
            ...(dm.flag('agneSealed') ? [] : [{ key: 'seal', label: 'Bring down the cutters’ tunnel', note: 'Strength DR 12' }]),
            ...(dm.flag('agneCut') ? [] : [{ key: 'cut', label: 'Cut a piece of her', note: 'it would sell for a fortune' }]),
            { key: 'go', label: 'Leave her' },
          ];
          const key = opts[await dm.say('Saint Agne', 'Saint Agne holds up the hill, and sings.', opts)].key;
          if (key === 'go') return;
          if (key === 'pray') {
            dm.flag('agnePrayed', true);
            for (const p of dm.party) { dm.heal(p, p.maxHp); p.bleeding = false; dm.omen(p); }
            await dm.say('Saint Agne', 'You pray, and you don’t know the words, and it doesn’t matter. Her song goes through you like warm water. Every wound closes. <em>All HP, and +1 Omen each.</em>', [{ label: 'Go on' }]);
          } else if (key === 'seal') {
            const pc = dm.best('strength');
            if (await dm.test(pc, 'strength', 12, 'brings down the tunnel roof')) {
              dm.flag('agneSealed', true);
              const n = dm.giveDays(dm.d(4));
              await dm.say('Saint Agne', `${dm.name(pc)} knocks the props out of the cutters’ tunnel, and the roof comes down in a roar of salt. Nobody is coming in that way again.

Her song steadies. The hill stops groaning. <em>The island holds a little longer: the next Misery is ${n} day${n === 1 ? '' : 's'} further off.</em>`, [{ label: 'Go on' }]);
            } else {
              await dm.hurt(pc, dm.d(4), 'falling salt');
              await dm.say('Saint Agne', 'Salt comes down, but not enough of it, and most of it on you.', [{ label: 'Step back' }]);
            }
          } else if (key === 'cut') {
            dm.flag('agneCut', true);
            const n = dm.d(6) * 10;
            dm.silver(n);
            dm.loseDay();
            await dm.say('Saint Agne', `You cut. It comes away warm and pink, and heavy, a fortune in your hands. <em>+${n}s.</em>

She doesn’t stop singing. That is the worst of it. The hill groans, and somewhere in Skarn the sea comes up another step. <em>A day is lost.</em>`, [{ label: 'Go on' }]);
          }
        }
      },
    },
    {
      id: 'tunnel', floor: 'hollow', area: [25, 20, 28, 20],
      async run(dm) {
        await dm.say('The cutters’ tunnel', dm.flag('agneSealed')
          ? 'The cutters’ tunnel is choked with fallen salt, wall to wall. Nobody is coming in this way again.'
          : `The cutters’ tunnel runs on east into the dark, rails and all, sloping down. A wind comes up it that smells of lamp oil and money. It runs under the Hill.

<em>Under the Exchange.</em> Not yet.`, [{ label: 'Turn back' }]);
      },
    },
    // ---------- what the Brine Gaol left behind ----------
    {
      // the one you broke out of his cell, hiding in the Gutter (js/data.js: only once he's freed)
      id: 'freed', floor: 'skarnvik',
      async run(dm, first) {
        const name = dm.flag('freed');
        const knows = dm.party.some((p) => p.gaol);
        const opts = [
          { key: 'know', label: 'Ask what he knows' },
          ...(dm.flag('freedPaid') ? [] : [{ key: 'stash', label: knows ? '“You said you owed us.”' : 'Ask about the two who got him out' }]),
          ...(dm.deadSlot ? [{ key: 'join', label: 'Ask him to come with you', note: 'he takes the dead one’s place' }] : []),
          { key: 'go', label: 'Walk on' },
        ];
        const intro = !first ? `${name} is still in his corner of the Gutter, out of the rain, with his rat on a string.`
          : knows ? `A man in a stolen cloak grins at you out of a corner of the Gutter, and it takes you a moment: <em>${name}</em>, from the cell down the corridor. Out of the Brine, fed, and very nearly clean.

<em>“You got out! I knew you would. I told everyone you would. Nobody believed me, because there’s nobody up here who was ever down there.”</em>`
            : `A man in a stolen cloak watches you from a corner of the Gutter. Shackle-scars on both wrists. <em>“You’re asking about the two who came up out of the Brine,”</em> he says. <em>“They got me out. They’re dead now, aren’t they.”</em>

He spits. <em>“I’m ${name}. If you’re finishing what they started, I’ll help.”</em>`;
        const key = opts[await dm.say(first && !knows ? 'A man in a stolen cloak' : name, intro, opts)].key;
        if (key === 'know') {
          dm.flag('bellStair', true);
          await dm.say(name, `<em>“I said I know where they put everything. I do.”</em> He counts on his fingers.

<em>“One: the Brine is where they put the diggers from the Deep Mine, once the diggers started talking. About the salt, and what was singing under it.”</em>${dm.flag('ledger') ? ' It is what the Gaol ledger said.' : ''}

<em>“Two: the saints. They took the old saint out of her tomb behind the basilica last spring, out the front, with a wagon. But the bell-ringers had their own way into that hill, older than the tomb: <b>the bell-ringer’s stair</b>, behind the graves. Nobody watches it. Nobody remembers it but old lags like me. The door was never locked, mind. It sticks. You lift it on its hinges.”</em>`, [{ label: 'Go on' }]);
        } else if (key === 'stash') {
          dm.flag('freedPaid', true);
          await dm.say(name, `<em>“Before they took me, I hid something where the watch would never look: in the watch-house wall.”</em> He is gone a long time, and comes back with something wrapped in a rag.

<em>“${knows ? 'For getting me out.' : 'For them. For you, then.'}”</em>`, [{ label: 'Unwrap it' }]);
          await dm.item('relic');
        } else if (key === 'join') {
          const pc = dm.recruit(name, 'scum');
          dm.flag('freedJoined', true);
          await dm.say(name, `<em>“Thought you’d never ask.”</em> He finishes the bottle and keeps the rat. ${pc ? dm.name(pc) : name} takes the dead one’s place.`, [{ label: 'Go on' }]);
          dm.refreshCity();
        }
      },
    },
    {
      // the family of the one you knew across the corridor, waiting at her door in Lantern Row
      id: 'kin', floor: 'skarnvik',
      async run(dm) {
        const n = dm.flag('knownName');
        const he = dm.flag('knownShe') === 'he';
        const [He, heL, his, him] = he ? ['He', 'he', 'his', 'him'] : ['She', 'she', 'her', 'her'];
        const rel = { 'Old Sigrun': 'daughter', 'Matthis the Cook': 'wife', 'Little Ragna': 'mother', 'Grey Ottar': 'sister' }[n] || 'sister';
        const title = `${n}’s ${rel}`;
        const knew = dm.party.some((p) => p.gaol);
        if (dm.flag('kinDone')) {
          await dm.say(title, dm.flag('kinCursed') ? `${title} watches you pass from her doorway, and doesn’t blink until you’re gone.` : `${title} is at her door with her candle, as always. She nods to you.`, [{ label: 'Walk on' }]);
          return;
        }
        const clue = async () => {
          dm.flag('kinDone', true);
          dm.flag('saltBleeds', true);
          await dm.say(title, `<em>“${He} dug in the Deep Mine, before. Came home white with salt and wouldn’t sleep. Said the salt down there was warm, and it bled when you cut it, and at night it sang. ${He} said so to the wrong people. That’s why they put ${him} in the Brine.”</em>`, [{ label: 'Go on' }]);
        };
        if (!knew) {
          const pick = await dm.say('A woman in mourning black', `A woman in mourning black stands at her door with a lit candle. <em>“They say two came up out of the Brine Gaol. Did they say anything about ${n}? ${He} was my ${{ daughter: 'mother', wife: 'husband', mother: 'child', sister: 'brother' }[rel] || 'family'}.”</em>`,
            [{ label: 'Tell her what you heard' }, { label: 'Walk on' }]);
          if (pick !== 0) return;
          await dm.say(title, `<em>“${He} drowned in ${his} chains.”</em> She nods. She already knew. She wanted somebody to say it.`, [{ label: 'Go on' }]);
          await clue();
          return;
        }
        const opts = [
          dm.flag('mourned') ? { key: 'eyes', label: `Tell her how you closed ${his} eyes` } : { key: 'dead', label: `Tell her ${heL} is dead` },
          { key: 'go', label: 'Say nothing, and walk on' },
        ];
        const key = opts[await dm.say('A woman in mourning black', `A woman in mourning black stands at her door with a lit candle, as if she has been waiting there a long time. She looks at your faces, and then at your wrists.

<em>“You came up out of the Brine. Everyone knows. Did you know ${n}? I’m ${his} ${rel}.”</em>`, opts)].key;
        if (key === 'go') return;
        if (key === 'eyes') {
          const pc = dm.party.slice().sort((a, b) => a.omens - b.omens)[0];
          await dm.say(title, `You tell her all of it: the cell, the chains, the water to the chin, the eyes you closed. You leave out what happened after.

She weeps without a sound. <em>“Then ${heL} wasn’t alone.”</em> She presses something into ${dm.name(pc)}’s hand: the one thing of ${his} she kept.`, [{ label: 'Take it' }]);
          await dm.item('relic');
          await clue();
          return;
        }
        if (!dm.flag('tookBoots')) {
          await dm.say(title, `<em>“${He} drowned in ${his} chains.”</em> She already knew. She has been in black since the spring. But she wanted somebody to say it.`, [{ label: 'Go on' }]);
          await clue();
          return;
        }
        const back = await dm.say(title, `<em>“${He} drowned in ${his} chains.”</em> She looks down. At your feet. At the boots.

<em>“I made those boots,”</em> she says. <em>“I made those boots for ${him}.”</em>`, [{ label: 'Give them back' }, { label: 'Walk away' }]);
        if (back === 0) {
          dm.flag('bootsBack', true);
          await dm.say(title, 'You take them off and stand in the rain in your bare feet while she holds them like a child. Then, because you gave them back, she tells you why they took her.', [{ label: 'Go on' }]);
          await clue();
          return;
        }
        dm.flag('kinDone', true);
        dm.flag('kinCursed', true);
        for (const pc of dm.party) dm.loseOmen(pc);
        await dm.say(title, 'She says a word after you, an old word, from before the Salt Lords. Something in the rain hears it. <em>Each of you loses an Omen.</em>', [{ label: 'Walk on' }]);
      },
    },
    {
      // the one you left in the Brine, hanged for it, come down off the gallows at night (js/game.js: meet)
      id: 'hangedman', floor: 'skarnvik',
      async run(dm) {
        const name = dm.flag('livingName');
        const knew = dm.party.some((p) => p.gaol);
        const words = !knew ? '<em>“Where are they?”</em> he says, with no breath at all. <em>“The two who left me. Where are they?”</em> He doesn’t wait for an answer.'
          : dm.flag('promised') ? '<em>“You said you’d come back,”</em> he says, with no breath at all. <em>“You said.”</em>'
            : '<em>“You walked away,”</em> he says, with no breath at all. <em>“I heard you walk away.”</em>';
        await dm.say(name, `Out of the rain comes a man with a rope round his neck and the cut end dragging behind him. His face is black. His bare feet point the wrong way.

It is ${name}, from the cell down the corridor in the Brine. ${words}`, [{ label: 'Fight' }]);
      },
    },
    {
      id: 'exchange', floor: 'skarnvik',
      async run(dm) {
        const opts = [
          { key: 'doors', label: 'Try the doors' },
          ...(dm.flag('grinding') ? [] : [{ key: 'listen', label: 'Listen at the doors', note: 'Presence DR 12' }]),
          { key: 'go', label: 'Walk on' },
        ];
        const pick = await dm.say('The Salt Exchange', 'Columns, a pediment carved with salt crystals, and iron-barred doors as tall as two men. Watchmen in salt-white stand at either side. Inside, faintly, under the rain, something is turning.', opts);
        const key = opts[pick].key;
        if (key === 'doors') {
          await dm.say('The Salt Exchange', 'Barred. A watchman lowers his halberd across your chest. <em>“Not without a Lord’s seal.”</em>', [{ label: 'Step back' }]);
        } else if (key === 'listen') {
          const pc = dm.best('presence');
          if (await dm.test(pc, 'presence', 12, 'listens at the Exchange’s doors')) {
            dm.flag('grinding', true);
            await dm.say('The Salt Exchange', `Under the clink of counting, deep down, far below the street: a slow grinding, like a millstone the size of a house.

And under that, so faint ${dm.name(pc)} isn’t sure, <em>singing</em>.`, [{ label: 'Step back' }]);
          } else {
            await dm.say('The Salt Exchange', 'The rain is too loud, and a watchman is starting to look at you.', [{ label: 'Step back' }]);
          }
        }
      },
    },
  ];
})();
