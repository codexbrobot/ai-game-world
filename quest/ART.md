# The game's art

Every picture in the game is a file in `quest/assets/`, named after what it is (`zombie.webp`,
`front-inn.webp`). Make a new picture with the same name, the same shape and (where it says so) a
transparent background, bring it in with `tools/import_art.py`, and the game uses it. No code changes.

This list is written by `python3 quest/tools/art_list.py`.

## The look

**Raw ink sketches**, like MÖRK BORG's own pages: fast, rough black ink strokes on white paper, scratchy
hatching, ink splatter and drips, heavy blacks, hard contrast. No colour except **acid yellow (#FFE11A)** where
something burns or glows (a lantern, a candle, the comet) and, rarely, **hot pink (#FF3D8B)** where something
bleeds or is cursed. No painted colour, no parchment, no soft shading. The whole set must look like one artist
drew it: use the same style words in every prompt, for example *"raw black ink sketch, rough fast strokes,
scratchy hatching, ink splatter, white paper, high contrast, MÖRK BORG zine style"*.

## Making them with ChatGPT

- Ask for a **transparent background** for everything marked *transparent* below. ChatGPT can make
  transparent PNGs; say "PNG with a transparent background, no ground, no shadow".
- Make pictures bigger than the sizes below, in the same shape (ChatGPT's 1024×1536 for tall ones,
  1024×1024 for square, 1536×1024 for wide): the import tool shrinks and fits them.
- House fronts are tall and narrow (2:5). Ask for "a tall narrow building front, two and a half times
  taller than it is wide, centred, filling the picture top to bottom, transparent sky above the roof". The
  tool trims the transparent sides away and fits the building to the wall.
- Textures: ask for "a seamless tileable texture, flat, straight on, even lighting, no perspective".
- **One subject per file.** No sheets of several views, no titles, no labels, no handwriting, no frame or border,
  no signature. Nothing cut off at the edges (except the hands' forearms, at the bottom edge).
- **Name each file exactly like the list** (`guard.png`, `held-sword.png`, `wretch-3.png`), all lowercase.
- Figures face the viewer, whole body in frame, standing, feet on the bottom edge, no ground or shadow.
- Hand them over as PNG files in one folder (a shared Google Drive folder works), or commit them to
  `quest/art-new/` on a branch of your own and open a pull request (see `CONTRIBUTING.md`).

## Bringing them in

1. Save each picture as a PNG named exactly like the file it replaces: `zombie.png`, `front-inn.png`.
2. Put them in `quest/art-new/` (make the folder).
3. From the repository root: `python3 quest/tools/import_art.py`. Each one is checked (does it need a
   transparent background? does it have one?), fitted to its size and saved as `quest/assets/<name>.webp`.
   Add `--zine` to grade them into the game's current ink-and-bone look, or `--dry-run` to see what it
   would do. (`--cutout` removes a plain background if one slipped through; it needs `pip install rembg`.)
4. Look at them in the game (`quest/index.html` through any local web server), and run the tests if you
   like: `npm run test:quest`.

Or give the pictures to Claude in a session and ask for them to be brought in and checked in the game.
If you don't like a new one, `git checkout quest/assets/<name>.webp` puts the old one back.


## Monsters

In the 3D view and on the battle cards. The game bends the picture to make them walk, so keep the whole figure in frame, standing, facing you, feet on the bottom edge, no ground or shadow. The Salt Lords’ watch use `npc-watchman`; the hanged man uses `prisoner`.

| File | Size (px) | Transparent | What it shows now |
|---|---|---|---|
| `rats` | 512 × 384 | yes | a giant mangy sewer rat on all fours with a long naked tail, snarling, yellow eyes, animal, side view |
| `zombie` | 384 × 576 | yes | a rotting zombie in a torn burial shroud, arms reaching forward, glowing yellow eyes, pink gore, standing, facing the viewer |
| `skeleton` | 384 × 576 | yes | a skeleton warrior raising a rusty sword, glowing yellow eye sockets, standing, facing the viewer |
| `cultist` | 384 × 576 | yes | a hooded cultist in a ragged black robe holding a curved knife, a pink comet symbol branded on the chest, face hidden in shadow, standing, facing the viewer |
| `abbess` | 384 × 576 | yes | a tall undead abbess in a black veil and tattered nun habit, spiked iron crown, weeping black tears, glowing pink eyes, long bony hands, standing, facing the viewer |
| `guard` | 384 × 576 | yes | a drowned undead prison guard, bloated grey skin, a dented iron helmet, a rotten leather jerkin, a heavy wooden truncheon in one hand and a ring of keys at the belt, seaweed hanging from him, standing, facing the viewer |
| `prisoner` | 384 × 576 | yes | a drowned emaciated prisoner in torn rags, iron manacles and a broken chain on the wrists, hollow staring eyes, wet tangled hair, standing, facing the viewer |
| `warden` | 384 × 576 | yes | a huge bloated drowned prison warden in a long black coat with brass buttons, an iron mask over his face, a great ring of iron keys and a lantern on his belt, barnacles and seaweed, standing, facing the viewer |
| `drowned` | 384 × 576 | yes | a bloated drowned fisherman risen from the sea, tangled in a torn fishing net, seaweed and barnacles on his oilskin coat, water streaming off him, white dead eyes, arms reaching, standing, facing the viewer |
| `cutter` | 384 × 576 | yes | a gaunt salt miner in a leather apron and hood caked in white salt dust, a heavy pickaxe over his shoulder, a rag over his mouth, standing, facing the viewer |
| `saltwight` | 384 × 576 | yes | a dead miner half encrusted in white salt crystals, crystals growing out of his face and shoulders, glowing red cracks in the salt, a broken pickaxe, shambling, facing the viewer |
| `overseer` | 384 × 576 | yes | a huge brutal mine overseer in a long pale coat, a lantern on a pole in one hand and a coiled whip in the other, a rolled writ with a red wax seal in his belt, standing, facing the viewer |
| `warden-bare` (new) | 384 × 576 | yes | the Drowned Warden in his second half: armor and coat thrown off, bare-chested, huge, still masked, his ring of keys at his belt |

## People in Skarnvik

Standing in the street, the same way as monsters: whole figure, facing you, feet on the bottom edge.

| File | Size (px) | Transparent | What it shows now |
|---|---|---|---|
| `npc-stranger` | 384 × 576 | yes | a tall gaunt stranger in a long hooded black cloak, one eye sewn shut with thick black thread, thin cruel smile, hands folded, standing, facing the viewer |
| `npc-preacher` | 384 × 576 | yes | a wild-eyed ragged doomsday preacher in a torn robe, both arms raised to the sky, a crude yellow comet painted on his chest, standing, facing the viewer |
| `npc-fisher` | 384 × 576 | yes | a weathered old fishwife in a shawl and a stained apron holding a basket of dead fish, standing, facing the viewer |
| `npc-priest` | 384 × 576 | yes | a gaunt bald priest in a black cassock with a two-headed serpent amulet, holding a smoking censer, standing, facing the viewer |
| `npc-gravedigger` | 384 × 576 | yes | a hunched old gravedigger leaning on a spade, muddy rags, a lantern at his belt, standing, facing the viewer |
| `npc-watchman` | 384 × 576 | yes | a grim town watchman in a dented helmet and a salt-white tabard, holding a halberd, standing, facing the viewer |
| `npc-beggar` | 384 × 576 | yes | a ragged blind old beggar wrapped in a filthy blanket holding out a wooden bowl, standing, facing the viewer |
| `npc-freed` | 384 × 576 | yes | a gaunt escaped prisoner with a shaved scarred head and raw shackle scars on his wrists, wrapped in a stolen hooded cloak, grinning nervously, standing, facing the viewer |
| `npc-widow` | 384 × 576 | yes | a gaunt woman in black mourning clothes and a black shawl holding a lit candle, grief-stricken face, standing, facing the viewer |

## Things in the world

Standing on the floor (remains, fonts, relics) or in the street (gallows, graves, trees, the board), and Saint Agne in her cave. Whole object, sitting on the bottom edge.

| File | Size (px) | Transparent | What it shows now |
|---|---|---|---|
| `remains` | 384 × 288 | yes | a pile of human bones and a skull with rotten rags lying on the ground |
| `remains-scroll` | 384 × 288 | yes | a pile of human bones and a skull with a rolled yellow parchment scroll, lying on the ground |
| `font` | 288 × 384 | yes | a black stone baptismal font on a pedestal brimming with glowing pink liquid |
| `relic` | 288 × 384 | yes | a black iron bell clapper relic glowing yellow, resting on a small stone altar |
| `gallows` | 448 × 560 | yes | a wooden gallows with two hanged corpses dangling from ropes and a crow on the beam, front view |
| `board` | 288 × 384 | yes | a weathered wooden notice board on two posts covered in nailed paper notices and wanted posters, a skull nailed on top, front view |
| `memorial` | 288 × 384 | yes | a weathered wooden memorial board with rows of painted names, a small cross beside each name, a carved skull on top, candle stubs and wilted flowers at its foot, front view |
| `tombstones` | 384 × 288 | yes | a cluster of three crooked old gravestones and a leaning stone cross in the mud, front view |
| `dead-tree` | 384 × 576 | yes | a gnarled dead leafless tree with twisted black branches and a crow |
| `bell` | 384 × 288 | yes | a big bronze bell, cracked, lying on its side (a hanging bell, laid down after it was cut out) |
| `saltcart` | 384 × 288 | yes | a small iron minecart heaped with white rock salt crystals, on rails, close-up still life of one object |
| `saint-agne` | 384 × 768 | yes | a tall statue of a hooded nun saint in a long straight robe like a stone column, arms raised holding up a slab of rock, carved from white salt, the base hacked with pickaxe marks, front view |

## House fronts

Stretched over a whole wall of a street, about 5 m tall and 2 m wide. One flat building front, straight on, filling the full width, its ground floor at the bottom edge. Everything above the roofline is transparent (the sky shows through). `facade-*` line the streets; `front-*` are the buildings you walk into, so their door is at the bottom, in the middle. `front-belldoor` is a wall in a hillside: no sky, no transparency. `front-gravegate` is the graveyard’s locked gates in its wall.

| File | Size (px) | Transparent | What it shows now |
|---|---|---|---|
| `facade-timber` | 320 × 800 | yes | front view of a narrow crooked medieval timber-framed house with a steep gable roof, dark wooden beams, a heavy wooden door, small leaded windows |
| `facade-stone` | 320 × 800 | yes | front view of a narrow old stone townhouse with a chimney, shuttered windows, an iron-banded door |
| `facade-derelict` | 320 × 800 | yes | front view of a derelict waterlogged fisherman house with a stepped gable, windows boarded up with planks, cracked plaster, slimy stains |
| `front-inn` | 320 × 800 | yes | front view of a crooked medieval tavern with a steep gable roof, a wide arched door, glowing windows, a wooden sign with a drowned lamb hanging from an iron bracket |
| `front-stall` | 320 × 800 | yes | front view of a cramped medieval weapon shop with a ragged striped awning over an open counter, axes and swords hanging, a flat roof with a chimney |
| `front-church` | 320 × 1120 | yes | front view of the tall gothic stone portal of a grim cathedral, a pointed arched doorway, a round rose window, carved saints and a two-headed serpent over the door, weathered stone |
| `front-manor` | 320 × 800 | yes | front view of a crumbling noble townhouse of dark stone, a carved coat of arms over a double door with steps, tall cracked windows, a parapet with broken urns |
| `front-exchange` | 320 × 800 | yes | front view of a severe stone counting-house with heavy columns and a low pediment, huge iron-barred doors, carved salt crystals |
| `front-home` | 320 × 800 | yes | front view of a narrow crooked timber house with bundles of dried herbs and roots hanging by the door, a glowing window, a steep gable roof |
| `front-crypthouse` | 320 × 800 | yes | front view of a small stone crypt house in a graveyard with a cross on its gable, a low iron door, skulls set in the wall |
| `front-watchhouse` | 320 × 800 | yes | front view of an old stone watch tower with crenellations, a barred window, a boarded-up door, rags hanging from the window |
| `front-belldoor` | 320 × 800 | no | an old arched door half under ivy, set in the stone of a hillside (the text no longer mentions a carved bell) |
| `front-gravegate` | 320 × 800 | yes | front view of tall wrought iron cemetery gates under a pointed stone arch in an old graveyard wall, a heavy chain and padlock on the gates, crooked gravestones and crosses seen through the bars |

## Walls, floors, ceilings, doors

Tiled over the dungeon’s surfaces, one picture per 2 × 2 m square. Must be seamless (its edges meet when repeated, left to right and top to bottom), flat and straight on, evenly lit, no perspective.

| File | Size (px) | Transparent | What it shows now |
|---|---|---|---|
| `wall-stone` | 512 × 512 | no | close-up of an old wall of rough hewn grey stone blocks with dark mortar, cracked and chipped |
| `wall-ossuary` | 512 × 512 | no | close-up of a wall of stacked human skulls and bones |
| `wall-relief` | 512 × 512 | no | close-up of a stone wall with a carved stone relief of a weeping saint in a niche |
| `floor` | 512 × 512 | no | close-up of cracked grey flagstones with dirt between them |
| `ceiling` | 512 × 512 | no | close-up of rough dark stone blocks with hanging roots and cobwebs |
| `door` | 512 × 512 | no | close-up of a heavy arched wooden door with iron bands and rivets in a stone wall |
| `gaol-wall` | 512 × 512 | no | close-up of a damp prison wall of small dark bricks with an iron ring and a hanging chain, scratched tally marks |
| `gaol-bars` | 512 × 512 | no | close-up of a prison cell front of rusted vertical iron bars set in a stone frame, darkness behind the bars |
| `gaol-door` | 512 × 512 | no | close-up of a heavy iron prison cell door with rivets and a small barred window, in a stone wall |
| `wall-salt` | 512 × 512 | no | close-up of a white salt mine wall with wavy layered strata and pickaxe marks |
| `floor-salt` | 512 × 512 | no | close-up of a trampled floor of grey white rock salt with cracks and grit |

## In your hands

Drawn over the view like DOOM’s weapons: a hand and what it holds. **The forearm rises from the bottom edge of the picture, cut off by it, nearly upright, and the weapon points up**, filling the height of the picture (an arm coming in from the side comes out small in the game). The torch is in the left hand, the arm rising from the bottom left; each weapon in the right, rising from the bottom right. Transparent around them. Draw the torch unlit (a head of black oily rags): the game paints a live flame on its tip.

| File | Size (px) | Transparent | What it shows now |
|---|---|---|---|
| `held-torch` | 384 × 512 | yes | a dirty bony hand and forearm in a ragged sleeve gripping a wooden torch wrapped in black oily rags |
| `held-femur` | 384 × 512 | yes | a dirty bony hand and forearm in a ragged sleeve gripping a long bare white human leg bone with big knobby joints at both ends, used as a club |
| `held-knife` | 384 × 512 | yes | a dirty bony hand and forearm in a ragged sleeve gripping a crude rusty knife |
| `held-staff` | 384 × 512 | yes | a dirty bony hand and forearm in a ragged sleeve gripping a gnarled wooden walking staff |
| `held-shortsword` | 384 × 512 | yes | a dirty bony hand and forearm in a ragged sleeve gripping a plain short rusty iron sword with a simple crossguard, its blade pointing up to a sharp tip |
| `held-warhammer` | 384 × 512 | yes | a dirty bony hand and forearm in a ragged sleeve gripping a heavy iron war hammer |
| `held-sword` | 384 × 512 | yes | a dirty bony hand and forearm in a ragged sleeve gripping a plain long straight iron sword with a simple crossguard, its notched blade pointing up to a sharp tip |
| `held-flail` | 384 × 512 | yes | a dirty bony hand and forearm in a ragged sleeve gripping a spiked iron flail on a chain |
| `held-zweihander` | 384 × 512 | yes | a dirty bony hand and forearm in a ragged sleeve gripping a huge plain two-handed iron greatsword with a wide crossguard, its long blade pointing up to a sharp tip |

## Faces

The portraits wretches get (picked from their name). Head and shoulders, looking at you.

| File | Size (px) | Transparent | What it shows now |
|---|---|---|---|
| `wretch-0` | 384 × 448 | no | head and shoulders: an old woman with one milky eye and a hood, grimy medieval peasant |
| `wretch-1` | 384 × 448 | no | head and shoulders: a gaunt young man with a shaved head and scars, grimy medieval peasant |
| `wretch-2` | 384 × 448 | no | head and shoulders: a bearded man with rotten teeth and a broken nose, grimy medieval peasant |
| `wretch-3` | 384 × 448 | no | head and shoulders: a gaunt middle-aged woman with matted grey hair and a scar across her lips, grimy medieval peasant |
| `wretch-4` | 384 × 448 | no | head and shoulders: a bald old man with a crooked nose and warts, grimy medieval peasant |
| `wretch-5` | 384 × 448 | no | head and shoulders: a hollow-cheeked young woman with a shaved head and a burn scar, grimy medieval peasant |
| `wretch-6` | 384 × 448 | no | head and shoulders: a one-eared man with a scruffy beard and a hood, grimy medieval peasant |
| `wretch-7` | 384 × 448 | no | head and shoulders: a sickly middle-aged woman with sunken eyes, lined skin and a rag tied over her head, grimy medieval peasant |

## Pictures in the DM’s boxes and screens

`title` is behind the title screen; the rest head the boxes for the inn, Thrumm’s stall, a stair, the Stranger, and death.

| File | Size (px) | Transparent | What it shows now |
|---|---|---|---|
| `title` | 1600 × 900 | no | the sinking island city of Skarnvik seen from a broken pier, a cathedral on the hill and tenements tumbling into the sea, half-drowned houses with lit yellow windows, a burning yellow comet in the black sky, the waves streaked hot pink |
| `inn` | 512 × 384 | no | a grim medieval tavern interior with a dying hearth fire and drunken peasants |
| `stall` | 512 × 384 | no | a ragged market stall selling rusty swords, axes and dented armor |
| `stair` | 512 × 384 | no | worn stone stairs descending into a dark crypt entrance under a ruined arch |
| `stranger` | 512 × 384 | no | portrait of a hooded stranger with one eye sewn shut, thin cruel smile |
| `grave` | 512 × 384 | no | a fresh grave with a crooked wooden cross and a crow, black sky |

## Not shown any more

`town`: made for the old menu town; still loaded, never drawn. No need to remake it.
