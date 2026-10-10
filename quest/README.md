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
| Walk and strafe | drag the left half of the screen (a joystick appears) | W A S D |
| Look around | drag the right half of the screen | ← / → or Q / E, or drag with the mouse |
| Pick a battle command | tap it | ↑ ↓ ← → and Enter, or 1–5 |
| Pick a target | tap the foe | ← / → and Enter |
| Hurry the dice | tap the dice | Space or Enter |
| Map, party | the buttons at the bottom (or tap the mini-map) | M, P |
| Use a poultice outside battle | the Poultice button | |

## The game

You lead two wretches, rolled up from the gutter: 3d6 abilities shifted by their class, Toughness + a class HP die, Omens, random weapon, armor and silver. In the town of **Skarnvik** a stranger with a sewn-shut eye wants the **Bell-Tongue**, which hangs from the neck of the **Pale Abbess** at the bottom of the Weeping Vault.

- **Exploring** is in real time and in 3D, like DOOM: raised daises, sunken crypts, stairs, high naves and low passages, and a chasm on the second floor with a single bridge. Step off the edge and both wretches fall (d6 each) and are hauled back up.
- **Monsters** wander the halls as groups. Once they see you, they hunt you; zombies are slow, rats are fast, and doors stop them all.
- **Touching a group** shatters the screen into a turn-based battle, Final Fantasy style. Initiative is a d6; then each wretch picks Attack, their class ability, Scroll, Poultice, Omen, a change of row, or Flee, and the foes answer. Fleeing leaves the group stunned for a moment so you can get away, but it costs a day.
- **Rows**: one wretch stands in front, one behind. Foes go for the front wretch three times in four, and a melee attack from the back row is at DR +2. Swap in battle (it takes the turn) or from the party sheet.
- **Monsters have tricks**: rats ignore the rows and swarm (each other pack of rats makes them harder to dodge), cultists curse anyone with Comet's Wrath (no armor helps) or heal each other, skeletons raise their fallen allies, and the Pale Abbess wakes at half HP: she tears off her crown, loses her armor, acts twice a round, tolls the Bell-Tongue at the whole party, and calls her dead guards back up.
- **The Calendar of Nechrubel**: every night's sleep and every flight from a battle is a day lost. When the days run out a Misery comes to pass and makes the world worse (fatter rats, faster dead, dearer shops, fewer Omens, nastier wounds, a bloody gutter). The seventh Misery ends the world. The count is on the HUD (☄) and in town.
- **Skarnvik**: the Stranger (the quest), the Drowned Lamb (sleep, heal, Get Better, and hire a new wretch for 20s when one of yours has died) and Thrumm's Stall (weapons, armor, poultices; you choose who gets them).
- **The Undercroft** (floor 1) and **the Weeping Vault** (floor 2) hold remains to search, black fonts to drink from, hidden pits, two scrolls, and the Abbess.
- If both wretches die, the save is gone.

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
| Omens | Spend one for maximum damage on your next hit, or to turn aside your next wound. Back to d2 after sleeping |
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
| `js/data.js` | The two floor maps (tiles, floor heights and ceiling heights), the bestiary and its groups, loot and the shop |
| `js/art.js` | The town picture, the map, and the grain overlay |
| `js/dice.js` | The dice thrown on screen for every roll in a battle |
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
