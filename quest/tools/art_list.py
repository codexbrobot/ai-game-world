"""Write ART.md: every picture the game uses, what it is, the shape it must have, and what it shows.

    python3 quest/tools/art_list.py

Sizes and transparency are read from the files in assets/; what each shows comes from the specs in
make_art.py (the prompts the current art was made from).
"""
import os
import sys
from pathlib import Path

from PIL import Image

HERE = Path(__file__).resolve().parent
QUEST = HERE.parent
sys.path.insert(0, str(HERE))
import make_art  # noqa: E402  (light: the image models load only when used)

GROUPS = [
    ('Monsters', 'In the 3D view and on the battle cards. The game bends the picture to make them walk, so keep the whole figure in frame, standing, facing you, feet on the bottom edge, no ground or shadow. The Salt Lords’ watch use `npc-watchman`; the hanged man uses `prisoner`.',
     ['rats', 'zombie', 'skeleton', 'cultist', 'abbess', 'guard', 'prisoner', 'warden', 'drowned', 'cutter', 'saltwight', 'overseer']),
    ('People in Skarnvik', 'Standing in the street, the same way as monsters: whole figure, facing you, feet on the bottom edge.',
     ['npc-stranger', 'npc-preacher', 'npc-fisher', 'npc-priest', 'npc-gravedigger', 'npc-watchman', 'npc-beggar', 'npc-freed', 'npc-widow']),
    ('Things in the world', 'Standing on the floor (remains, fonts, relics) or in the street (gallows, graves, trees, the board), and Saint Agne in her cave. Whole object, sitting on the bottom edge.',
     ['remains', 'remains-scroll', 'font', 'relic', 'gallows', 'board', 'tombstones', 'dead-tree', 'bell', 'saltcart', 'saint-agne']),
    ('House fronts', 'Stretched over a whole wall of a street, about 5 m tall and 2 m wide. One flat building front, straight on, filling the full width, its ground floor at the bottom edge. Everything above the roofline is transparent (the sky shows through). `facade-*` line the streets; `front-*` are the buildings you walk into, so their door is at the bottom, in the middle. `front-belldoor` is a wall in a hillside: no sky, no transparency.',
     ['facade-timber', 'facade-stone', 'facade-derelict', 'front-inn', 'front-stall', 'front-church', 'front-manor', 'front-exchange', 'front-home', 'front-crypthouse', 'front-watchhouse', 'front-belldoor']),
    ('Walls, floors, ceilings, doors', 'Tiled over the dungeon’s surfaces, one picture per 2 × 2 m square. Must be seamless (its edges meet when repeated, left to right and top to bottom), flat and straight on, evenly lit, no perspective.',
     ['wall-stone', 'wall-ossuary', 'wall-relief', 'floor', 'ceiling', 'door', 'gaol-wall', 'gaol-bars', 'gaol-door', 'wall-salt', 'floor-salt']),
    ('In your hands', 'Drawn over the view like DOOM’s weapons: a hand and what it holds, rising from the bottom edge. The torch is in the left hand; each weapon in the right. Transparent around them.',
     ['held-torch', 'held-femur', 'held-knife', 'held-staff', 'held-shortsword', 'held-warhammer', 'held-sword', 'held-flail', 'held-zweihander']),
    ('Faces', 'The portraits wretches get (picked from their name). Head and shoulders, looking at you.',
     [f'wretch-{i}' for i in range(8)]),
    ('Pictures in the DM’s boxes and screens', '`title` is behind the title screen; the rest head the boxes for the inn, Thrumm’s stall, a stair, the Stranger, and death.',
     ['title', 'inn', 'stall', 'stair', 'stranger', 'grave']),
]
NOT_SHOWN = ['town']


# Where the picture came out differently from what was asked for.
AS_MADE = {
    'front-belldoor': 'an old arched door half under ivy, set in the stone of a hillside (the text no longer mentions a carved bell)',
    'bell': 'a big bronze bell, cracked, lying on its side (a hanging bell, laid down after it was cut out)',
}
# The style words the old image model needed; the list keeps only what the picture is of.
STYLE_WORDS = [', flat', 'black ink illustration', 'black ink crosshatching', 'grimdark', 'centered, isolated', 'isolated on', 'staring at the viewer, dark background']


def describe(name):
    if name in AS_MADE:
        return AS_MADE[name]
    spec = make_art.ART.get(name)
    if not spec:
        return ''
    text = spec['prompt']
    cut = min([text.find(w) for w in STYLE_WORDS if w in text] + [len(text)])
    text = text[:cut].replace('full body illustration of ', '').replace('head and shoulders portrait of ', 'head and shoulders: ')
    return text.strip(' ,')


def shape(name):
    im = Image.open(QUEST / 'assets' / f'{name}.webp')
    alpha = im.mode in ('RGBA', 'LA') and im.getchannel('A').getextrema()[0] < 250
    return im.size, alpha


def main():
    lines = ["""# The game's art

Every picture in the game is a file in `quest/assets/`, named after what it is (`zombie.webp`,
`front-inn.webp`). Make a new picture with the same name, the same shape and (where it says so) a
transparent background, bring it in with `tools/import_art.py`, and the game uses it. No code changes.

This list is written by `python3 quest/tools/art_list.py`.

## The look

MÖRK BORG: black ink on bone-white, rough and high-contrast, like a photocopied zine, with acid yellow
(#FFE11A) and hot pink (#FF3D8B) only where something glows or bleeds. The current pictures are ink-wash
greys with a little yellow and pink. You can go another way (full colour, painted), but the whole set should
look like one artist made it: use the same style words for every picture.

## Making them with ChatGPT

- Ask for a **transparent background** for everything marked *transparent* below. ChatGPT can make
  transparent PNGs; say "PNG with a transparent background, no ground, no shadow".
- Make pictures bigger than the sizes below, in the same shape (ChatGPT's 1024×1536 for tall ones,
  1024×1024 for square, 1536×1024 for wide): the import tool shrinks and fits them.
- House fronts are tall and narrow (2:5). Ask for "a tall narrow building front, two and a half times
  taller than it is wide, centred, filling the picture top to bottom, transparent sky above the roof". The
  tool trims the transparent sides away and fits the building to the wall.
- Textures: ask for "a seamless tileable texture, flat, straight on, even lighting, no perspective".
- One subject per picture, nothing cut off at the edges, no text, no frame or border.

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

"""]
    for title, intro, names in GROUPS:
        lines.append(f'## {title}\n\n{intro}\n\n| File | Size (px) | Transparent | What it shows now |\n|---|---|---|---|')
        for n in names:
            (w, h), alpha = shape(n)
            lines.append(f'| `{n}` | {w} × {h} | {"yes" if alpha else "no"} | {describe(n)} |')
        lines.append('')
    used = {n for _, _, names in GROUPS for n in names} | set(NOT_SHOWN)
    stray = sorted(f[:-5] for f in os.listdir(QUEST / 'assets') if f.endswith('.webp') and f[:-5] not in used)
    lines.append('## Not shown any more\n\n' + ', '.join(f'`{n}`' for n in NOT_SHOWN + stray) +
                 ': made for the old menu town; still loaded, never drawn. No need to remake it.\n')
    (QUEST / 'ART.md').write_text('\n'.join(lines))
    print(QUEST / 'ART.md')


if __name__ == '__main__':
    main()
