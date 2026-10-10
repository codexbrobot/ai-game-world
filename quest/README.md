# Quest: The Weeping Vault

A small first-person dungeon crawler in the style of *The Quest* (Redshift, 2009 iPhone), set in the dying world of MÖRK BORG and played with its rules.

## Play

Serve the folder and open it in a browser; it works on a phone too:

```sh
cd quest && python3 -m http.server 8765   # then open http://localhost:8765
```

Opening `index.html` straight from disk doesn't work, because WebGL won't load textures from `file://`. The only network request is for Google Fonts; the pictures load from `assets/`. The game saves to your browser as you go.

To publish it as a single web page (a claude.ai artifact, for example), run `python tools/build_page.py`. It writes `dist/quest.html` with the CSS and scripts inlined; publish that page together with the `assets/` folder.

## Controls

| | Phone | Keyboard / mouse |
|---|---|---|
| Walk and strafe (free movement) | drag the left half of the screen (a joystick appears) | W A S D |
| Step a square, turn a quarter (step movement) | the arrow pad | W S or ↑ ↓ to step, A D to sidestep, Q E or ← → to turn |
| Settings (movement, sound) | ⚙ (or Settings on the title screen) | |
| Look around | drag the right half of the screen | ← / → or Q / E, or drag with the mouse |
| Pick a battle command | tap it | ↑ ↓ ← → and Enter, or 1–7 |
| Spend an Omen when one is offered | tap the yellow button on the dice | O |
| Pick a target | tap the foe | ← / → and Enter |
| Hurry the dice | tap the dice | Space or Enter |
| Map, party | the buttons at the bottom (or tap the mini-map) | M, P |
| Sound on or off | ♪ (or the Sound button on the title screen) | |
| Use a poultice outside battle | the Poultice button | |

## The game

You lead two wretches, rolled up from the gutter: 3d6 abilities shifted by their class, Toughness + a class HP die, Omens, random weapon, armor and silver. In the town of **Skarnvik** a stranger with a sewn-shut eye wants the **Bell-Tongue**, which hangs from the neck of the **Pale Abbess** at the bottom of the Weeping Vault.

- **Exploring** is in real time and in 3D, like DOOM: raised daises, sunken crypts, stairs, high naves and low passages, and a chasm on the second floor with a single bridge. Step off the edge and both wretches fall (d6 each) and are hauled back up.
- **Two ways to move** (⚙ Settings): **Free**, walking anywhere and looking around like DOOM, or **Steps**, a square at a time with quarter turns, gliding between squares, like The Quest or Dungeon Master. Monsters move in real time either way.
- **The DM**: walking into certain places for the first time, the game narrates them like a dungeon master and offers choices. Some are tests rolled on the dice (and an Omen can save them); what you choose can tell you what something is, find hidden things, open secret niches, or change how the boss fight goes. See *Story scenes* below.
- **What you see**: the torch in your left hand burns with a living flame, and the dungeon's light flickers with it. Your right hand holds the front wretch's weapon. Both swing as you walk and lag as you turn. Monsters shamble in two-frame steps, like Doom's sprites: zombies lurch, skeletons rattle, cultists' robes swing, rats scurry, and the Abbess drifts with her veil rippling.
- **Each floor has its own look**: the Undercroft is rough stone, ossuary walls and carved saints. The Weeping Vault is pale marble running with black tar, burial niches, a stone face that weeps, grave slabs underfoot, a ribbed vault overhead, black iron doors, and a colder, violet dark.
- **Sound**: footsteps (wet in the Vault), dripping water, a low drone and moaning air below, wind and a far bell in town. A monster that spots you gives a dissonant sting and its own cry (squeaks, a groan, a rattle, a chant, a wail), and keeps calling while it hunts you, from the side it's on. Battles crunch, whoosh, ring on a critical and toll for the dead, and the dice clatter. Everything is made on the spot with Web Audio; there are no sound files.
- **Monsters** wander the halls as groups. Once they see you, they hunt you; zombies are slow, rats are fast, and doors stop them all.
- **Touching a group** shatters the screen into a turn-based battle, Final Fantasy style. Initiative is a d6; then each wretch picks Attack, their class ability, Scroll, Poultice, a change of row, or Flee, and the foes answer. Omens are spent after the dice land, not before (see the rules below). Fleeing leaves the group stunned for a moment so you can get away, but it costs a day.
- **Rows**: one wretch stands in front, one behind. Foes go for the front wretch three times in four, and a melee attack from the back row is at DR +2. Swap in battle (it takes the turn) or from the party sheet.
- **Monsters have tricks**: rats ignore the rows and swarm (each other pack of rats makes them harder to dodge), cultists curse anyone with Comet's Wrath (no armor helps) or heal each other, skeletons raise their fallen allies, and the Pale Abbess wakes at half HP: she tears off her crown, loses her armor, acts twice a round, tolls the Bell-Tongue at the whole party, and calls her dead guards back up.
- **The Calendar of Nechrubel**: every night's sleep and every flight from a battle is a day lost. When the days run out a Misery comes to pass and makes the world worse (fatter rats, faster dead, dearer shops, fewer Omens, nastier wounds, a bloody gutter). The seventh Misery ends the world. The count is on the HUD (☄) and in town.
- **Skarnvik**: the Stranger (the quest), the Drowned Lamb (sleep, heal, Get Better, and hire a new wretch for 20s when one of yours has died) and Thrumm's Stall (weapons, armor, poultices; you choose who gets them).
- **The Undercroft** (floor 1) and **the Weeping Vault** (floor 2) hold remains to search, black fonts to drink from, hidden pits, two scrolls, and the Abbess.
- If both wretches die, the save is gone.

## Story scenes

The scenes live in `js/story.js`, one short script each.

| Where | What happens |
|---|---|
| Arriving in the Undercroft | Listen at the dark (Presence DR 10): every monster on the floor shows on your map |
| The black font | Pink liquid in a black basin. Its nature (saint's tears that heal, comet water that gives an Omen, or lye that burns) is decided when the run begins. Taste a drop (Presence DR 12) to learn which before you drink; look under the basin (Strength DR 12) to find a secret niche with a relic in it |
| The rat-saint's dais | Read the words at her feet (Presence DR 12): an Omen, or a letter crawls into your eye |
| The drowned crypt | Feel under the black water (Agility DR 12): a purse or a strange item, or a leech |
| The stair down | A woman weeping, a long way below |
| Arriving in the Weeping Vault | Listen to the echoes (Presence DR 12): monsters on the map |
| The bone bridge | Drop a silver coin and listen (Presence DR 12): learn that the Abbess drinks the Vault's tears |
| The nave | Before the Abbess: plug the tear-channels (if you know about the tears) or smash the statues' eyes (Strength DR 12) and she fights without armor and weaker; creep up on her (Agility DR 14) and you strike first, or fail and she does |

## Loot with personality

Remains (a quarter of the time), dead cultists (relics) and skeletons (weapons) can leave something strange, and Thrumm keeps two curios under the counter, new after every night. Each wretch holds one weapon and wears one relic. You don't know what a thing does, or whether it's cursed, until somebody wields or wears it; then it goes in the **Codex** (on the title screen), which this browser keeps from run to run. A cursed relic won't come off, but Thrumm will pry it off for 25s.

| Weapon | The good | The price |
|---|---|---|
| Gutting Hook (d6) | Each hit heals you 1 HP | Each miss tears you for 1 |
| The Widow's Blade (d8) | A hit heals you half the damage | Your partner bleeds 1 HP per hit |
| Saint's Femur (d4) | +d6 against zombies, skeletons and the Abbess | Only a bone against the living |
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
| Omens | Spent after you see the roll, as in the rulebook. When a roll goes wrong and someone has an Omen, a button sits on the dice for two seconds (tap anywhere else, or wait, to carry on): a failed attack, Defence or test is rolled again, or its DR lowered by 4 if that's enough to pass; a hit that maximum damage would turn into a kill can deal maximum damage; a wound that would drop you to 0 is lowered by d6; a Dead result on the Broken table, or losing initiative, is rolled again. The wretch who rolled pays if they can, otherwise their partner. Back to d2 after sleeping |
| Scrolls | Presence test DR 12, Presence + d4 uses a day. A failure leaves you unable to read more until you sleep |
| 0 HP | Broken: d4 for blacking out, a broken bone or lost eye, haemorrhaging (bleeding), or death |
| Below 0 HP | Dead. Hire a replacement at the inn; if both die, the save is gone |
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
| `js/data.js` | The two floor maps (tiles, floor heights and ceiling heights), the bestiary and its groups, loot and the shop |
| `js/art.js` | The town picture, the map, and the grain overlay |
| `js/dice.js` | The dice thrown on screen for every roll in a battle |
| `js/sound.js` | Every sound, synthesized with Web Audio: effects, ambience per place, mute |
| `js/game.js` | Game state, the party, the town, what happens on each square, saving, the HUD and input |
| `assets/` | The generated pictures (WebP) |
| `tools/make_art.py` | Generates and grades the pictures |
| `tools/build_page.py` | Bundles the game into one page for publishing |

Edit the maps in `js/data.js` (the key is at the top of the file). Each floor has three layers of the same size: `rows` (walls, doors, stairs and so on), `heights` (`.` is ground level, `1`–`9` raise the floor by a quarter step each, `a`–`h` sink it, `x` is a chasm) and `ceil` (`.` normal, `H` high, `L` low). You can climb up to two quarter steps at a time.

### Dice

Every roll in a battle is thrown on screen by `js/dice.js`: the dice tumble in, land on the number actually rolled, and a caption gives the sum (for example *Strength 14 + 1 = 15 vs DR 12*). The rules in `js/rules.js` report each die they roll, so what you see is what was rolled. Animations are skipped for anyone who prefers reduced motion.

## Art

The pictures in `assets/` (monsters, walls, floor, ceiling, the town, portraits), used as textures and sprites in the 3D world, were generated by `tools/make_art.py`, which runs an open image model locally and then grades every image into the same Mörk Borg look: hard black ink, bone-white highlights, acid yellow and pink only where the picture glows or bleeds, and photocopier grain. Monsters and objects are cut out with a segmentation model and get a rough bone-white rim, like stickers in a zine.

- Image model: [LCM Dreamshaper v7](https://huggingface.co/SimianLuo/LCM_Dreamshaper_v7) (MIT licence), 8 steps per image on the CPU.
- Walls, door, floor, ceiling and the rat start from a simple flat layout drawn in code (stone blocks, rows of skulls, planks, a crouching rat), which the model paints over (image-to-image). Asked directly, the model paints whole corridors instead of a flat wall, and rat-men instead of rats.
- The hands work the same way: an arm and fist drawn coming up from the bottom of the frame, gripping a torch or one of the eight weapons. Asked directly, the model paints a whole person holding the thing.
- The Weeping Vault's black tears are painted onto the graded pictures by `make_art.py` (the model tidies them away), each a tapering run of ink with a wet bone-white glint.
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

## Licence note

Quest is an independent production and is not affiliated with Ockult Örtmästare Games or Stockholm Kartell. It is published under the MÖRK BORG Third Party License. MÖRK BORG is copyright Ockult Örtmästare Games and Stockholm Kartell. Before releasing it publicly, check the current licence terms.
