# Quest: The Isle That Sinks

A small first-person dungeon crawler in the style of *The Quest* (Redshift, 2009 iPhone), set in the dying world of MÖRK BORG and played with its rules.

## Play

Serve the folder and open it in a browser; it works on a phone too:

```sh
cd quest && python3 -m http.server 8765   # then open http://localhost:8765
```

Opening `index.html` straight from disk doesn't work, because WebGL won't load textures from `file://`. The only network request is for Google Fonts; the pictures, the narration and the recorded sounds load from `assets/`. The game saves to your browser as you go.

To publish it as a single web page (a claude.ai artifact, for example), run `python tools/build_page.py`. It writes `dist/quest.html` with the CSS and scripts inlined; publish that page together with the `assets/` folder.

## Controls

| | Phone | Keyboard / mouse |
|---|---|---|
| Walk and strafe (free movement) | drag the left half of the screen (a joystick appears) | W A S D |
| Step a square, turn a quarter (step movement) | the arrow pad | W S or ↑ ↓ to step, A D to sidestep, Q E or ← → to turn |
| Settings (movement, Omens, sound, the narrator) | ⚙ (or Settings on the title screen) | |
| Look around | drag the right half of the screen | ← / → or Q / E, or drag with the mouse |
| Pick a battle command | tap it | ↑ ↓ ← → and Enter, or 1–7 |
| Spend an Omen when one is offered | tap the yellow button on the dice | O |
| Omens: auto or manual | the Omens button in the battle menu, or ⚙ Settings | |
| Pick a target | tap the foe | ← / → and Enter |
| Hurry the dice | tap the dice | Space or Enter |
| Map | the Map button (or tap the mini-map) | M |
| Character sheet | tap a wretch's portrait (in the dungeon or in battle), or Party | P |
| Sound on or off | ♪ (or the Sound button on the title screen) | |
| Use a poultice outside battle | the Poultice button | |

## The game

You lead two wretches, rolled up from the gutter: 3d6 abilities shifted by their class, Toughness + a class HP die, Omens, random weapon, armor and silver. On the wretches page you can **roll both again** (always the pair together, so nobody keeps the good one and fishes for a better partner). Or **create your own**: the DM asks whether you own the MÖRK BORG book (the tables for rolling a wretch up are the book's, not the game's); if you do, you get two blank character sheets to fill in by hand (name, class or none, the four abilities, HP, Omens, silver, weapon, armor, row and a terrible trait), and **save these wretches** to play them. You can edit them by hand until you go into the dark. Skarnvik, the island-city they come from, is sinking, and the Salt Lords say it isn't.

- **It starts in a cell.** Your wretches wake in the **Brine Gaol** with the sea coming in under the door and nothing but a femur each (d4) and rags. Their own weapons, armor and silver were taken when they were thrown in. Get out of the cell, find your things in the evidence room, take the key to the Warden's hall, get past **the Drowned Warden**, and climb out through the sewer grate into the city. Nobody up there recognises you.
- **Then the city.** You come up through the sewer grate into **Skarnvik**, at night, in the rain, and walk it like a dungeon (see below). The Stranger by the gallows notices your shackle scars and sends you down the crypt stair into the Undercroft to see what the water is doing.
- **Then Saint Agne.** Tell the Stranger what the water does and he tells you the rest: seven saints hold the island up, one under each hill, and the one under Church Hill was kept by the bell-ringers until the Salt Lords forbade their bell. Their little door into the hill is behind the graves. The gravedigger buried the last bell-ringer but one with his key (10s, or dig him up yourselves); the prisoner you freed knows the door only sticks; or you can force it. Down the bell-ringers' stair is **Saint Agne's Hollow**, and at the bottom of it the first Pillar Saint, being cut into salt. Tell the Stranger what you found. That is as far as the main story goes for now: next, the white stair under the Exchange. The grate stays where it is: step on it and your wretches refuse to go back down.
- **Wretches don't last.** Die in the Gaol and that's it: new prisoners, from the start. But once you have made it out into the city, a death is not the end of the run: you roll new wretches, people of Skarnvik who heard what the dead learned, and they carry on with the same story, the same Calendar and the same Miseries.

- **Exploring** is in real time and in 3D, like DOOM: raised daises, sunken crypts, stairs, high naves and low passages, and a pit in the Gaol's flooded lower block. Step off the edge and both wretches fall (d6 each) into black water over their heads; there's an iron ladder on one wall, and until you climb it each loses a point of HP every 3 seconds (never the last one).
- **Two ways to move** (⚙ Settings): **Free**, walking anywhere and looking around like DOOM, or **Steps**, a square at a time with quarter turns, gliding between squares, like The Quest or Dungeon Master. Monsters move in real time either way.
- **Character sheets**: tap a wretch's portrait, in the dungeon or on their card in battle, or press Party, for everything about them: what each ability is for and their odds on a DR 12 test, their attack and dodge chances, what their weapon, armor, relic and class ability do in full, their Omens and Powers and row, and what the party carries (silver, poultices, scrolls in full). Swap rows from there. When the DM offers a test, the choice says who would roll it, with their score and odds: *Strength DR 12 · Pell +2, 55%*.
- **The DM**: walking into certain places for the first time, the game narrates them like a dungeon master and offers choices. Some are tests rolled on the dice (and an Omen can save them); what you choose can tell you what something is, find hidden things, open secret niches, or change how the boss fight goes. See *Story scenes* below.
- **The flood**: black water stands over the dungeon floors, ankle-deep in the cells, waist-deep in the Gaol's lower block, where the floor has fallen in to the sea, and shin-deep in the Undercroft. It mirrors the crypt (walls, torchlight, monsters), ripples in rings where you and the monsters wade and where drops fall from the ceiling, catches the torch in hard glints, darkens the stone just above the waterline, and slows you down a little. Raised floors stay dry.
- **What you see**: the torch in your left hand burns with a real-looking fire, drawn by a shader on the GPU: turbulence rising through it, a white heart fading through yellow and orange to a dull red edge, tongues tearing loose at the top and sparks lifting off. It leaps when the dungeon's light flickers, which flickers with it, and it trails behind when you turn or swing the torch as you walk. Your right hand holds the front wretch's weapon. Both swing as you walk and lag as you turn. Monsters shamble in two-frame steps, like Doom's sprites: drowned guards plod, drowned prisoners stagger, the Warden lumbers, zombies lurch, skeletons rattle, cultists' robes swing and rats scurry.
- **Each floor has its own look**: the Brine Gaol is wet brick with shackle rings and tally marks, cell bars, riveted cell doors and drain grates underfoot, in a grey-green dark. The Undercroft is rough stone, ossuary walls and carved saints.
- **Sound**: soft footsteps (splashing in the water), dripping, a chain shifting somewhere in the Gaol, a low drone and moaning air below, wind and a far bell in town. A monster that spots you gives a dissonant sting and its own cry (a jangle of keys and a grunt, a drowned moan, a bellow, squeaks, a groan, a rattle, a chant), and keeps calling while it hunts you, from the side it's on. Battles crunch, whoosh, ring on a critical and toll for the dead, and the dice clatter. The monsters' cries and each place's bed are recordings (see *Voice and sound*); everything else is made on the spot with Web Audio.
- **Monsters** wander the halls as groups. Once they see you, they hunt you; zombies are slow, rats are fast, and doors stop them all.
- **Touching a group** shatters the screen into a turn-based battle, Final Fantasy style. Initiative is a d6; then each wretch picks Attack, their class ability, Scroll, Poultice, a change of row, or Flee, and the foes answer. Omens are spent after the dice land, not before (see the rules below). Fleeing leaves the group stunned for a moment so you can get away, but it costs a day.
- **Rows**: one wretch stands in front, one behind. Foes go for the front wretch three times in four, and a melee attack from the back row is at DR +2. Swap in battle (it takes the turn) or from the party sheet.
- **Monsters have tricks**: drowned guards' truncheons can daze you (lose a turn, unless you pass Toughness DR 12), rats ignore the rows and swarm (each other pack of rats makes them harder to dodge), cultists curse anyone with Comet's Wrath (no armor helps) or heal each other, and skeletons raise their fallen allies. The Drowned Warden bellows you back to roll-call (a wretch freezes for a turn), and at half HP the DM stops the fight to tell you what happens next: he tears off his mask, loses his armor, hits with a d10, acts twice a round, swings his ring of keys at the whole party and calls his dead guards back to their feet at half strength.
- **The Calendar of Nechrubel**: every night's sleep and every flight from a battle is a day lost. When the days run out a Misery comes to pass and makes the world worse (fatter rats, faster dead, dearer shops, fewer Omens, nastier wounds, a bloody gutter). The seventh Misery ends the world. The count is on the HUD (☄) and in town.
- **Skarnvik** is walked in first person like the dungeons, under an open sky: at night, black, with the comet low over the harbor, rain falling (and ringing the flooded streets), crooked house fronts with lit windows and gabled roofs against the sky, street lamps, and the black sea past the harbor wall, where the comet glitters. It is a whole small town, about 500 squares of street in eight districts, with long streets that open on its landmarks. Walk into a building or a person to use them, or tap the name that appears when you face them. The HUD names the district you stand in; the map marks the buildings, the people and the homes.
  - **Gallows Square**, where you come up: the Stranger in the shadow of the gallows (the main quest), Thrumm's Stall, the **bounty board** (take up to two jobs killing what lives in the Undercroft, then come back for your pay; new work every morning, for whatever still lives down there), the comet preacher, a Salt Lords' watchman, the gallows (one of the hanged men is humming), and the crypt stair down to the Undercroft.
  - **Church Hill**, up the Bell Stair or Saints' Lane: the Basilica of the Two-Headed Basilisk (its saints' niches all empty; the priests bind wounds for 10s), a priest, the gravedigger, the graveyard and a hermit's crypt-house.
  - **The Hill**, up the Salt Stair: the Salt Lords' quarter. The Salt Exchange (barred; something grinds below it), its watchmen, and the crumbling House of Vael.
  - **Lantern Row**, the tenements: narrow lanes, Widows' Court, a herbmaster's house.
  - **The Gutter**, alleys down to the harbor: the deserters' old watch-house, a blind beggar, and somebody's nest of rags in a dead end.
  - **Rope Street** and **Saltpan Lane**, down to **the Harbor**, half under the sea: the Drowned Lamb (sleep, heal, Get Better, hire a new wretch for 20s when one of yours has died) and a fishwife.
- **The hour turns as you walk.** Skarnvik goes from dawn (rose-grey) to day (an overcast pewter sky, the comet a pale smear even at noon, the lamps out, and you can see the length of the town) to dusk (rust-brown, the basilica's bell) to night, by the steps you take in its streets; the HUD shows the hour next to the district. Sleeping anywhere brings the next dawn. Walking the night through brings it too, but heals nothing. After the fourth Misery the sun stops rising: the HUD says *Black noon* and it is night all day.
  - **At night the drowned walk up out of the harbor**: a handful of the Harbor Dead roam the Harbor and Saltpan Lane, looking for houses that are under the sea now, and they come for you when they see you. At dawn they walk back into the water. The bounty board always has work for them: three of them put back in the sea, 24s.
  - **By day the Salt Lords' watch walks the streets** in pairs: Gallows Square, the Hill, Rope Street. When they catch you they want the street toll (5s), or you can talk your way past (Presence DR 12; DR 14 if you are the two from the Gaol, because they have your poster), or fight them. At dusk they go off duty.
- **What the Brine Gaol left behind.** What you did down there comes back up:
  - **The one you broke out of his cell** hides in a corner of the Gutter. He knows where they put everything: why the diggers from the Deep Mine were thrown in the Brine, and the forgotten bell-ringer's stair into Church Hill. He owes you, and pays it back with something he hid before they took him. If one of your wretches has died, he'll take their place.
  - **The one you left behind**, or promised to come back for: the Salt Lords' men found him after you got out. He hangs from a third rope on the gallows, and at night the noose is cut and he comes looking for you. Put him down for good and the thing he kept from the guards is yours.
  - **The family of the one you knew** across the corridor waits at her door in Lantern Row for news. Tell her you closed their eyes and she gives you their keepsake; tell her they're dead and she tells you why they were put in the Brine. But if you took the boots, she will know them, because she made them: give them back, or walk away under her curse (−1 Omen each).
  - **The Gaol ledger**: tell the Stranger what it said about Lord Fennick and the diggers (10s).
- **New wretches wake at home.** After the two who escaped the Gaol are dead, the new wretches are people of Skarnvik, and they start where the front one lives: a Heretical Priest in the basilica's vestry, an Esoteric Hermit in a crypt-house in the graveyard, Wretched Royalty in what's left of the House of Vael, an Occult Herbmaster in a narrow house in Lantern Row, a Fanged Deserter in the old watch-house, Gutterborn Scum in a corner of an alley. Walk into your home to sleep there for nothing (all HP in the manor, d6 at home, d4 in the alley), and the HUD calls it *Your home*. Other people's homes stay shut.
- **The Brine Gaol** holds rats, drowned guards and prisoners, remains to search, a scroll, and the Warden. **The Undercroft**, below Gallows Square, holds remains, a black font, hidden pits, a scroll, zombies, skeletons and cultists, and a stair down that is drowned to the ceiling.
- **Saint Agne's Hollow**, inside Church Hill, starts as the bell-ringers' way (an ossuary stair, their fallen bell, the last bell-ringer's cell with his book) and goes down into salt: white rock salt that bleeds pink where it's cut, the Salt Lords' cutters and their carts, salt wights (cutters who ate the salt), and at the bottom the Hollow itself, three storeys tall, its rim flooded by the sea. In the middle, Saint Agne holds up the hill, cut away to the knee, singing, and her overseer watches the cutting.
- If both wretches die in the Gaol, the save is gone. If they die after the escape, new wretches pick up the run in Skarnvik.

## Story scenes

The scenes live in `js/story.js`, one short script each.

| Where | What happens |
|---|---|
| Waking in the Gaol | Your cellmate's femurs; your real gear was taken |
| Your cell door | Wrench the hinge (Strength DR 12, a failure costs 1 HP), pick the lock with a bone splinter (Agility DR 12), or call for the jailer (Presence DR 12: he opens it and runs, or the guards come for you) |
| The cell across the corridor | Someone you knew for years (a different one each run) drowned in their chains. Close their eyes and say goodbye (+1 Omen) or take their boots; either way, they wake up and you fight them. Or back away and leave them be |
| The cell with someone still alive | Break the lock (Strength DR 12) and they tell you where the evidence room is and warn you about the Warden; or promise to come back; or leave them |
| The guard room | The drowned guards are still on duty |
| The infirmary | The Gaol ledger: Lord Fennick, the Deep Mine prisoners who are never to be released, and the sea in the lower block |
| The lower block | Waist-deep, with a hole to the sea in the floor |
| The evidence room | Your sacks: your own weapon, armor and silver. Each wretch rolls a d6: on a 1 the guards spent half the silver; on a 6 the sack beside yours holds something strange. Two poultices, and the key to the Warden's hall |
| The Warden's hall door | Locked until you have the key |
| The sewer grate | Padlocked: the key is on the Warden's ring. Then out into Skarnvik |
| Skarnvik: the comet preacher | Ask who the Bright Mouths are; toss him a coin for a blessing (+1 Omen, once) |
| Skarnvik: the gallows | Listen to the humming hanged man (Presence DR 12): a line of the miners' song about the saints in the salt; read the wanted posters (your faces, washed away) |
| Skarnvik: the fishwife | The Salt Lords and the Deep Mine nobody comes back from; the drowned who walk the harbor at night; a smoked eel for 2s (1 HP each) |
| Skarnvik: the basilica | Ask about the empty saints' niches (the Salt Lords took them in the spring); pay 10s for a blessing (d6 HP each, bleeding stops); a priest's home |
| Skarnvik: a priest | The saints hold the island up, and the Salt Lords take them away "to be cleaned"; the water coming up through the crypts |
| Skarnvik: the gravedigger | The Salt Lords emptied the old saint's tomb behind the basilica |
| Skarnvik: a watchman | "Nobody's sinking. Lord Fennick says it's the tide." |
| Skarnvik: the blind beggar | A coin, and a Deep Mine secret: the salt down there is warm |
| Skarnvik: the Salt Exchange | Barred without a Lord's seal; listen at the doors (Presence DR 12) for the grinding far below |
| Skarnvik: the graves | Worn epitaphs |
| Skarnvik: a man in a stolen cloak | Only if you freed him from his cell. What he knows (the Deep Mine diggers; the bell-ringer's stair), a relic from his stash, and he joins you in a dead wretch's place |
| Skarnvik: a woman in mourning black | The family of the one you knew in the Gaol: a keepsake if you mourned them, the boots if you took them (give them back, or be cursed), and why they were put in the Brine: the salt in the Deep Mine is warm, bleeds, and sings |
| Skarnvik: the hanged man | Only if you left the living prisoner in his cell: hanged on the gallows, and at night he walks |
| Skarnvik: the Salt Lords' watch | By day: pay the toll, talk your way past (Presence), or fight |
| Skarnvik: the little door in the hill | Behind the graves: unlock it with the bell-ringer's key, lift it on its hinges if the freed man told you how (Strength DR 10), or force it (Strength DR 16, a failure costs 1 HP) |
| Skarnvik: the gravedigger (again) | The bell-ringers' door: he'll dig up Brother Osric and his key for 10s, or you can (Strength DR 12) |
| The Hollow: the bell-ringers' stair | The bones, the salt, the picks, the singing |
| The Hollow: the bell | Ring it (Strength DR 12): something far below sings back (+1 Omen each), and everything down there knows you've come; the overseer will strike first |
| The Hollow: Brother Haskel's cell | His book: seven saints, one under each hill; the dawn bell forbidden; the cutters came in from the east |
| The Hollow: the cutters' camp | The cutters look up from their picks. A cart of salt: fill your pockets (5–30s), and the singing falters |
| The Hollow: the Hollow | Saint Agne, cut to the knee, and Overseer Gall. Tell the cutters to put down their picks (Presence DR 14) and fight him alone, or fight them all. He carries Lord Fennick's writ: *leave the crown, so the hill stands until the Exchange has its fill* |
| The Hollow: Saint Agne | Her song: seven saints, four already cut away. Pray with her (all HP, +1 Omen each, once); bring down the cutters' tunnel (Strength DR 12: the next Misery is d4 days further off; a failure brings salt down on you); or cut a piece of her (10–60s, and a day lost) |
| The Hollow: the cutters' tunnel | East, under the Hill, under the Exchange. Not yet |
| Arriving in the Undercroft | Listen at the dark (Presence DR 10): every monster on the floor shows on your map |
| The black font | Pink liquid in a black basin. Its nature (saint's tears that heal, comet water that gives an Omen, or lye that burns) is decided when the run begins. Taste a drop (Presence DR 12) to learn which before you drink; look under the basin (Strength DR 12) to find a secret niche with a relic in it |
| The rat-saint's dais | Read the words at her feet (Presence DR 12): an Omen, or a letter crawls into your eye |
| The drowned crypt | Feel under the black water (Agility DR 12): a purse or a strange item, or a leech |
| The stair down | Drowned to the ceiling: the water is coming up from under the island. Tell the Stranger |

## Loot with personality

Remains (a quarter of the time), dead cultists (relics), and skeletons and drowned guards (weapons) can leave something strange, and Thrumm keeps two curios under the counter, new after every night. Each wretch holds one weapon and wears one relic. You don't know what a thing does, or whether it's cursed, until somebody wields or wears it; then it goes in the **Codex** (on the title screen), which this browser keeps from run to run. A cursed relic won't come off, but Thrumm will pry it off for 25s.

| Weapon | The good | The price |
|---|---|---|
| Gutting Hook (d6) | Each hit heals you 1 HP | Each miss tears you for 1 |
| The Widow's Blade (d8) | A hit heals you half the damage | Your partner bleeds 1 HP per hit |
| Saint's Femur (d4) | +d6 against the dead: the drowned, zombies, skeletons | Only a bone against the living |
| Nail-Studded Plank (d4) | Strikes d4 + d4 | A fumble snaps it into splinters (d2) |
| Black Flail of Gorgh (d8) | Goes straight through armor | A fumble hits your own skull (d8) |
| The Weeping Sword (d10) | The biggest die there is | Every kill costs a day on the Calendar |

| Relic | The good | The price |
|---|---|---|
| Comet Crown (cursed) | One more Omen every night | Every night costs an extra day |
| Eye in a Jar | Every monster shows on the map; you see foes' exact HP | Max HP −2 |
| Bloodied Rosary | +1 HP at the start of every round | You can't read scrolls |
| Liar's Tongue | Thrumm charges 40% less | Presence tests at DR +2 |
| Hand of Glory | The party always acts first | Burns its bearer 1 HP each battle |
| Pilgrim's Shroud | The first death leaves you at 1 HP instead | Then it falls to dust |
| Mirror Shard | 1 in 3 wounds are dealt back to the foe | Defence at DR +1 |
| Plague Mask | Curses, wails and tolls can't touch you | Agility −1 |
| Heart of a Saint (cursed) | Max HP +4 | You can't lead a retreat |
| Rat-King's Knot | Rats scatter before a fight starts | Rats eat a poultice every night |
| Drowned Man's Coin (cursed) | d6 more silver for every kill | Each night, 1 in 3 the drowned take a day |
| Pouch of Grave Dirt | A Dead result on the Broken table is rolled again | Poultices heal you only half |

## Classes

Pick a class for each wretch on the creation screen, or let the dice choose. Each ability works once per battle.

| Class | Rolls | Ability |
|---|---|---|
| Fanged Deserter | Strength +2, Agility and Presence −1, HP d10 | **Bite**: Strength DR 10, d6 that ignores armor |
| Gutterborn Scum | Agility +2, Strength −1, HP d6 | **Low Blow**: attack with Agility, +d4, no back-row penalty |
| Esoteric Hermit | Presence +2, Strength −1, HP d4, two more scroll uses a day | **Wither**: Presence DR 12, d4 to every foe |
| Heretical Priest | Presence and Toughness +1, Agility −1, HP d8, d4 Omens | **Black Sacrament**: Presence DR 10, both wretches heal d6 |
| Wretched Royalty | Presence and Strength +1, Toughness −1, HP d6 | **Command**: Presence vs the foe's DR, it loses its next turn |
| Occult Herbmaster | Toughness and Presence +1, Strength −1, HP d6, two extra poultices | **Toxic Flask**: Agility DR 12, d4 now and d4 every enemy turn |

The modifiers are added to the 3d6 roll before it becomes an ability score, as in the rulebook.

## Rules used (MÖRK BORG)

| Rule | In the game |
|---|---|
| Tests | d20 + ability vs DR 12 |
| Attacking | Strength vs the foe's DR. Natural 20 doubles damage; natural 1 gives the foe a free blow |
| Defence | Monsters never roll. The wretch they strike rolls Agility vs DR 12 (14 in plate). Natural 20: free counterattack. Natural 1: double damage and your armor cracks a tier |
| Armor | Soaks d2 / d4 / d6. Some foes have armor too |
| Initiative | d6 when a battle starts: 1–3 and they strike first |
| Morale | Rats and cultists roll 2d6 against their morale when badly hurt, and may flee |
| Omens | Spent after you see the roll, as in the rulebook. When a roll goes wrong and someone has an Omen, a button sits on the dice for two seconds (tap anywhere else, or wait, to carry on): a failed attack, Defence or test is rolled again, or its DR lowered by 4 if that's enough to pass; a hit that maximum damage would turn into a kill can deal maximum damage; a wound that would drop you to 0 is lowered by d6; a Dead result on the Broken table, or losing initiative, is rolled again. The wretch who rolled pays if they can, otherwise their partner. If you'd rather not be asked, switch Omens to **manual** (the Omens button in the battle menu, or ⚙ Settings): nothing pops up, and you spend them from the menu before you act, at no cost in time: maximum damage on your next hit, −d6 off your next wound, or DR −4 on your next attack or dodge. Back to d2 after sleeping |
| Scrolls | Presence test DR 12, Presence + d4 uses a day. A failure leaves you unable to read more until you sleep |
| Exactly 0 HP | **Broken**, rolled on the book's d4 table, and the DM stops to tell you what it means. 1: unconscious for d4 rounds, then wake with d4 HP. 2: d6, 1–5 a broken or half-severed limb, 6 a lost eye; out for d4 rounds, then up with d4 HP (the book leaves the lasting harm to the GM: here an arm costs a point of Strength, a leg a point of Agility, the eye a point of Presence, for good). 3: haemorrhage: you stay on your feet at 0 HP, but bleed to death in d2 hours (an hour is 17 steps, a twenty-fourth of Skarnvik's day) unless treated with a black poultice, the basilica's priests or a healing power; every test is DR 16, and DR 18 in the last hour; sleep doesn't save you. 4: dead. While a wretch lies at 0 HP the enemy goes for whoever is still standing, but one more wound kills them; when the fight ends they come round |
| Below 0 HP | Dead, with nothing to roll, and the DM says so. (⚙ Settings → **Broken**: *Exactly 0* is the book and the default; *0 or below* is the common house rule, where a killing blow rolls on the Broken table too. A wretch already lying at 0 HP dies to the next wound either way.) Hire a replacement at the inn. If both die in the Gaol, the save is gone; after the escape, roll new wretches in Skarnvik |
| Calendar of Nechrubel | d6+3 days to the first Misery, then d6+2 to each next one. Seven Miseries and the world ends |
| Getting Better | After five kills, sleep at the inn: 6d10 vs max HP for more HP, and d6 per ability to raise or lower it |

## Code

| File | What it holds |
|---|---|
| `src/engine.js` | The 3D world (three.js): builds each floor from its map, the camera, movement and collision, doors, sprites, and the monsters that roam and chase |
| `js/engine.js` | `src/engine.js` bundled with three.js. Rebuild it with `npm run build:quest` from the repository root |
| `js/battle.js` | The turn-based battle screen: initiative, commands, targeting, enemy turns, morale and fleeing |
| `js/rules.js` | Dice, character generation, attacks, defence, Broken, morale, Getting Better |
| `js/story.js` | The DM's scenes: narration, choices, tests, secrets |
| `js/items.js` | Unique weapons and relics, wearing and wielding, the Codex |
| `js/data.js` | The floor maps (the Brine Gaol, the Undercroft, Skarnvik) (tiles, floor heights and ceiling heights), the bestiary and its groups, loot and the shop |
| `js/art.js` | The town picture, the map, and the grain overlay |
| `js/dice.js` | The dice thrown on screen for every roll in a battle |
| `js/sound.js` | Every sound, in Web Audio: the effects, synthesized; the monsters' voices and each place's bed, recorded (with the synthesized ones as the fallback); mute |
| `js/sfx-data.js` | Where the recorded sounds are in `assets/sfx/` (written by `tools/voice/sfx.cjs`) |
| `js/voice.js` | The narrator: matches each paragraph of a DM box to its recording and plays them in order |
| `js/voice-data.js` | What each paragraph sounds like and where its recording is in `assets/voice/` (written by `tools/voice/bundle.cjs`) |
| `js/game.js` | Game state, the party, the town, what happens on each square, saving, the HUD and input |
| `assets/` | The generated pictures (WebP), the narration (`voice/`) and the recorded sounds (`sfx/`), Opus in WebM |
| `voice/`, `tools/voice/` | The narration script and the tools that record and pack it (see *Voice and sound*) |
| `tools/make_art.py` | Generates and grades the pictures |
| `tools/build_page.py` | Bundles the game into one page for publishing |

Edit the maps in `js/data.js` (the key is at the top of the file). A floor can bring its own letters in `uses`: a `front` (a building's face, a wall you walk into), a `prop` (someone or something standing in the street) or a `decal` (a grate on the ground), each with a name and what it does. A floor whose theme is `outdoor` has no ceiling: its `ceil` layer says how tall the walls stand instead (`L` a low parapet), and it gets the sky, rain (`rain`) and open sea past its last row (`sea`). Each floor has three layers of the same size: `rows` (walls, doors, stairs and so on), `heights` (`.` is ground level, `1`–`9` raise the floor by a quarter step each, `a`–`h` sink it, `x` is a chasm, with an iron ladder up one wall, put there by the engine) and `ceil` (`.` normal, `H` high, `L` low). You can climb up to two quarter steps at a time.

### Dice

Every roll in a battle is thrown on screen by `js/dice.js`: the dice tumble in, land on the number actually rolled, and a caption gives the sum (for example *Strength 14 + 1 = 15 vs DR 12*). The rules in `js/rules.js` report each die they roll, so what you see is what was rolled. Animations are skipped for anyone who prefers reduced motion.


The browser tests are in `tests/` (see `tests/README.md`): `npm run test:quest` from the repository root plays the game headless and checks the Gaol, the town, day and night, Saint Agne's Hollow, the Broken table, the wretches page, the narrator and the recorded sounds.
## Art

To remake the art (with ChatGPT or anything else), see [`ART.md`](ART.md): every picture the game uses, the shape and transparency each needs, and `tools/import_art.py` to bring new ones in.

The pictures in `assets/` (monsters, walls, floor, ceiling, the town, portraits), used as textures and sprites in the 3D world, were generated by `tools/make_art.py`, which runs an open image model locally and then grades every image into the same Mörk Borg look: hard black ink, bone-white highlights, acid yellow and pink only where the picture glows or bleeds, and photocopier grain. Monsters and objects are cut out with a segmentation model and get a rough bone-white rim, like stickers in a zine.

- Image model: [LCM Dreamshaper v7](https://huggingface.co/SimianLuo/LCM_Dreamshaper_v7) (MIT licence), 8 steps per image on the CPU.
- Walls, door, floor, ceiling and the rat start from a simple flat layout drawn in code (stone blocks, rows of skulls, planks, a crouching rat), which the model paints over (image-to-image). Asked directly, the model paints whole corridors instead of a flat wall, and rat-men instead of rats.
- The hands work the same way: an arm and fist drawn coming up from the bottom of the frame, gripping a torch or one of the eight weapons. Asked directly, the model paints a whole person holding the thing.
- Saint Agne is drawn first as a column (a hooded figure, arms raised to a slab of rock, robes falling straight) and the model paints over it, so she comes out a pillar. The Hollow's salt starts from wavy strata scored with pick marks, graded bone-white, with pink veins drawn into it where the saint bleeds. The fallen bell is a hanging bell, laid on its side after it's cut out.
- Skarnvik's house fronts start from drawn layouts too (storeys, timber, a door, windows, a gable, a chimney or a stepped roof). After grading, each is cut out along its roofline so the sky shows above it, and the panes the model painted bright near the layout's lit windows glow yellow.
- The Gaol's walls, bars, cell doors and drain floor start from drawn layouts too (bricks with a shackle ring and tally marks, a cell front of bars, a riveted door with a grille, flagstones around a round grate).
- The town prints in black and acid yellow; everything else in black and bone.
- Cut-outs: [rembg](https://github.com/danielgatis/rembg) with the ISNet general-use model (Apache 2.0).
- Each asset's prompt and chosen seed live in `make_art.py`, so any picture can be regenerated or re-graded.

```sh
cd quest/tools
pip install torch --index-url https://download.pytorch.org/whl/cpu
pip install -r requirements.txt
python make_art.py candidates zombie --seeds 1 2 3   # contact sheets of three tries in tools/sheets/
python make_art.py build                             # render the chosen seeds into assets/
```

## Voice and sound

Every box the DM shows is read aloud: 357 recordings, 48 minutes in all, made with [ElevenLabs](https://elevenlabs.io) (the voice *Jasper Vayne – Epic Grim Dark Narrator*, model `eleven_v4`, one take per line), trimmed of silence and squeezed to 16 kbps Opus (6.7 MB). They come in a few dozen small bundles, one per scene, and the game fetches a bundle the first time one of its boxes opens. Turn him off in Settings. Browsers that can't play WebM Opus (older Safari) stay quiet.

The monsters' voices (two takes each) and a seamless loop for each place (the Gaol, the Undercroft, the city in the rain, the Hollow) are ElevenLabs sound effects too, 667 KB in `assets/sfx/`. Every other sound is still synthesized in `js/sound.js`, and so are those until the recordings load.

A paragraph finds its recording by its words alone: tags, quote marks and case don't count, the wretches' names stand in as one token, and so does every number. Where a paragraph has a name or a number in it, the narrator says something that fits any (*"One of you…"*); those words, and the patterns for the Broken table, are in `voice/spoken.json`.

When the text changes:

```sh
node quest/tools/voice/script.cjs          # every paragraph the game can show, into voice/script.json; lists any that need words in spoken.json
node quest/tools/voice/clips.cjs todo 20   # the next lines nobody has recorded, to record (one take each) with the ElevenLabs connector
node quest/tools/voice/clips.cjs fetch     # download what was recorded in this session, squeezed to Opus (voice/clips/, not in git)
node quest/tools/voice/bundle.cjs          # pack assets/voice/ and js/voice-data.js (recordings already in a bundle are kept)
node quest/tools/voice/check.cjs           # every paragraph, with real names in, must land on its own recording
```

`script.cjs` walks every branch of every story scene (`tools/voice/explore.cjs` plays them against a stand-in DM), reads every `say()` in the game and the battle code, and runs the Broken table for every result. The sounds are listed in `voice/sfx.json`; `node quest/tools/voice/sfx.cjs` fetches and packs them.

## Licence note

Quest is an independent production and is not affiliated with Ockult Örtmästare Games or Stockholm Kartell. It is published under the MÖRK BORG Third Party License. MÖRK BORG is copyright Ockult Örtmästare Games and Stockholm Kartell. Before releasing it publicly, check the current licence terms.
