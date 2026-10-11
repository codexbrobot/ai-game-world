"""Generate Quest's art with an open image model, then grade it into the Mörk Borg look.

    python make_art.py candidates NAME [NAME ...] [--seeds 1 2 3]   # try seeds, write contact sheets
    python make_art.py build [NAME ...]                              # render chosen seeds into ../assets

Generation runs locally on the CPU with LCM Dreamshaper v7 (MIT licence, a few steps per image).
Raw renders are cached in RAW_DIR, so re-grading never re-generates.
"""
import argparse
import hashlib
import math
import os
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter, ImageOps

HERE = Path(__file__).resolve().parent
ASSETS = HERE.parent / 'assets'
RAW_DIR = Path(os.environ.get('QUEST_RAW_DIR', HERE / 'raw'))
MODEL = 'SimianLuo/LCM_Dreamshaper_v7'

INK = (10, 10, 8)
BONE = (235, 228, 208)
STONE = (150, 141, 120)
YELLOW = (255, 225, 26)
PINK = (255, 61, 139)

STYLE = ('grimdark medieval horror, black ink illustration, heavy crosshatching, rough woodcut, '
         'high contrast, gritty photocopied zine art, dark fantasy')
ISOLATED = 'centered, isolated on a plain white background'
FLAT = 'flat, black ink crosshatching, woodcut print, high contrast'

# kind: sprite (cut out, bone ink), texture (dark stone grade), scene (bone ink, full frame), portrait.
# light: the colour the highlights print in (bone unless given).
# size: the size generated; out: the size written.
ART = {
    # --- monsters ---
    # Prompts alone give rat-men, so one rat is painted over a drawn crouching-rat silhouette (init),
    # and the game draws it two or three times as a swarm.
    'rats': dict(kind='sprite', size=(512, 384), out=(512, 384), seed=None, init='rat', strength=0.78,
                 prompt=f'a giant mangy sewer rat on all fours with a long naked tail, snarling, yellow eyes, animal, '
                        f'side view, {ISOLATED}, black ink illustration, heavy crosshatching, rough woodcut, '
                        f'high contrast, gritty zine art'),
    'zombie': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                   prompt=f'full body illustration of a rotting zombie in a torn burial shroud, arms reaching forward, '
                          f'glowing yellow eyes, pink gore, standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'skeleton': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                     prompt=f'full body illustration of a skeleton warrior raising a rusty sword, glowing yellow eye sockets, '
                            f'standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'cultist': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                    prompt=f'full body illustration of a hooded cultist in a ragged black robe holding a curved knife, '
                           f'a pink comet symbol branded on the chest, face hidden in shadow, standing, facing the viewer, '
                           f'{ISOLATED}, {STYLE}'),
    'abbess': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                   prompt=f'full body illustration of a tall undead abbess in a black veil and tattered nun habit, '
                          f'spiked iron crown, weeping black tears, glowing pink eyes, long bony hands, '
                          f'standing, facing the viewer, {ISOLATED}, {STYLE}'),
    # The Brine Gaol's dead, still at their posts and in their cells.
    'guard': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                  prompt=f'full body illustration of a drowned undead prison guard, bloated grey skin, a dented iron helmet, '
                         f'a rotten leather jerkin, a heavy wooden truncheon in one hand and a ring of keys at the belt, '
                         f'seaweed hanging from him, standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'prisoner': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                     prompt=f'full body illustration of a drowned emaciated prisoner in torn rags, iron manacles and a broken chain '
                            f'on the wrists, hollow staring eyes, wet tangled hair, standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'warden': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                   prompt=f'full body illustration of a huge bloated drowned prison warden in a long black coat with brass buttons, '
                          f'an iron mask over his face, a great ring of iron keys and a lantern on his belt, barnacles and seaweed, '
                          f'standing, facing the viewer, {ISOLATED}, {STYLE}'),
    # --- things on the floor ---
    'remains': dict(kind='sprite', size=(512, 384), out=(384, 288), seed=None,
                    prompt=f'a pile of human bones and a skull with rotten rags lying on the ground, {ISOLATED}, {STYLE}'),
    'remains-scroll': dict(kind='sprite', size=(512, 384), out=(384, 288), seed=None,
                           prompt=f'a pile of human bones and a skull with a rolled yellow parchment scroll, '
                                  f'lying on the ground, {ISOLATED}, {STYLE}'),
    'font': dict(kind='sprite', size=(384, 512), out=(288, 384), seed=None,
                 prompt=f'a black stone baptismal font on a pedestal brimming with glowing pink liquid, {ISOLATED}, {STYLE}'),
    'relic': dict(kind='sprite', size=(384, 512), out=(288, 384), seed=None,
                  prompt=f'a black iron bell clapper relic glowing yellow, resting on a small stone altar, {ISOLATED}, {STYLE}'),
    # --- dungeon surfaces ---
    # Asked for a wall, the model paints a whole room in perspective. So each surface starts from a flat
    # layout drawn here (init: stone blocks, rows of skulls, door planks...), which the model paints over
    # in ink (image-to-image). 'Close-up ... flat' keeps it flat; strength is how far it may stray.
    'wall-stone': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='blocks', strength=0.7,
                       prompt=f'close-up of an old wall of rough hewn grey stone blocks with dark mortar, cracked and chipped, {FLAT}'),
    'wall-ossuary': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='skulls', strength=0.7,
                         prompt=f'close-up of a wall of stacked human skulls and bones, {FLAT}'),
    'wall-relief': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='relief', strength=0.68,
                        prompt=f'close-up of a stone wall with a carved stone relief of a weeping saint in a niche, {FLAT}'),
    'door': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.96, init='door', strength=0.64,
                 prompt=f'close-up of a heavy arched wooden door with iron bands and rivets in a stone wall, {FLAT}'),
    'floor': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='flags', strength=0.68,
                  prompt=f'close-up of cracked grey flagstones with dirt between them, {FLAT}'),
    'ceiling': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='roots', strength=0.66,
                    prompt=f'close-up of rough dark stone blocks with hanging roots and cobwebs, {FLAT}'),
    # The Weeping Vault (floor 2) has its own surfaces: marble streaked with black tears, burial niches,
    # a carved face that weeps, grave slabs underfoot, a ribbed vault overhead and iron doors.
    'vault-wall': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='weeping', strength=0.66, drips=8,
                       prompt=f'close-up of an old wall of pale marble blocks streaked with black dripping stains like tears, cracked, {FLAT}'),
    'vault-niches': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='niches', strength=0.66,
                         prompt=f'close-up of a catacomb wall with rectangular burial niches holding corpses wrapped in shrouds, {FLAT}'),
    'vault-face': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='face', strength=0.64,
                       tears=[(0.383, 0.455), (0.617, 0.455)],  # under the eyes of seed 2
                       prompt=f'close-up of a stone wall with a huge carved stone face of a saint weeping black tears, {FLAT}'),
    'vault-floor': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='slabs', strength=0.64,
                        prompt=f'close-up of worn stone tomb slabs set in a floor, carved crosses and worn inscriptions, {FLAT}'),
    'vault-ceiling': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='ribs', strength=0.62,
                          prompt=f'close-up of a dark gothic vaulted ceiling of small black bricks with crossing stone ribs, {FLAT}'),
    'vault-door': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.96, init='irondoor', strength=0.62,
                       prompt=f'close-up of a heavy black iron door with riveted bands and a skull knocker in a stone wall, {FLAT}'),
    # The Brine Gaol: wet brick with shackles, barred cell fronts, cell doors. (Its floor is the Undercroft's
    # flagstones: a drain on every square looked like a bathroom.)
    'gaol-wall': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='shackles', strength=0.64,
                      prompt=f'close-up of a damp prison wall of small dark bricks with an iron ring and a hanging chain, scratched tally marks, {FLAT}'),
    'gaol-bars': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='bars', strength=0.6,
                      prompt=f'close-up of a prison cell front of rusted vertical iron bars set in a stone frame, darkness behind the bars, {FLAT}'),
    'gaol-door': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.96, init='celldoor', strength=0.6,
                      prompt=f'close-up of a heavy iron prison cell door with rivets and a small barred window, in a stone wall, {FLAT}'),
    # --- Skarnvik, the city ---
    # House fronts, one per street square: drawn as a flat layout (storeys, timber, door, windows, roof),
    # painted over in ink, then cut out along the roofline so the sky shows above them, with some windows lit.
    'facade-timber': dict(kind='facade', size=(384, 960), out=(320, 800), seed=None, init='facade:timber', strength=0.62,
                          prompt=f'front view of a narrow crooked medieval timber-framed house with a steep gable roof, dark wooden beams, '
                                 f'a heavy wooden door, small leaded windows, flat facade, {FLAT}'),
    'facade-stone': dict(kind='facade', size=(384, 960), out=(320, 800), seed=None, init='facade:stone', strength=0.62,
                         prompt=f'front view of a narrow old stone townhouse with a chimney, shuttered windows, an iron-banded door, '
                                f'flat facade, {FLAT}'),
    'facade-derelict': dict(kind='facade', size=(384, 960), out=(320, 800), seed=None, init='facade:derelict', strength=0.64,
                            prompt=f'front view of a derelict waterlogged fisherman house with a stepped gable, windows boarded up with planks, '
                                   f'cracked plaster, slimy stains, flat facade, {FLAT}'),
    'front-inn': dict(kind='facade', size=(384, 960), out=(320, 800), seed=None, init='facade:inn', strength=0.6,
                      prompt=f'front view of a crooked medieval tavern with a steep gable roof, a wide arched door, glowing windows, '
                             f'a wooden sign with a drowned lamb hanging from an iron bracket, flat facade, {FLAT}'),
    'front-stall': dict(kind='facade', size=(384, 960), out=(320, 800), seed=None, init='facade:stall', strength=0.62,
                        prompt=f'front view of a cramped medieval weapon shop with a ragged striped awning over an open counter, '
                               f'axes and swords hanging, a flat roof with a chimney, flat facade, {FLAT}'),
    # The bigger town's buildings: the basilica on Church Hill, a crumbling manor and the Salt Exchange on the
    # Hill, and the homes new wretches wake in (a herbmaster's house, a hermit's crypt-house in the
    # graveyard, the deserters' old watch-house in the Gutter).
    'front-church': dict(kind='facade', size=(384, 1152), out=(320, 1120), seed=None, init='facade:church', strength=0.62,
                         prompt=f'front view of the tall gothic stone portal of a grim cathedral, a pointed arched doorway, a round rose window, '
                                f'carved saints and a two-headed serpent over the door, weathered stone, flat facade, {FLAT}'),
    'front-manor': dict(kind='facade', size=(384, 960), out=(320, 800), seed=None, init='facade:manor', strength=0.62,
                        prompt=f'front view of a crumbling noble townhouse of dark stone, a carved coat of arms over a double door with steps, '
                               f'tall cracked windows, a parapet with broken urns, flat facade, {FLAT}'),
    'front-exchange': dict(kind='facade', size=(384, 960), out=(320, 800), seed=None, init='facade:exchange', strength=0.62,
                           prompt=f'front view of a severe stone counting-house with heavy columns and a low pediment, huge iron-barred doors, '
                                  f'carved salt crystals, flat facade, {FLAT}'),
    'front-home': dict(kind='facade', size=(384, 960), out=(320, 800), seed=None, init='facade:home', strength=0.62,
                       prompt=f'front view of a narrow crooked timber house with bundles of dried herbs and roots hanging by the door, '
                              f'a glowing window, a steep gable roof, flat facade, {FLAT}'),
    'front-crypthouse': dict(kind='facade', size=(384, 960), out=(320, 800), seed=None, init='facade:crypthouse', strength=0.64,
                             prompt=f'front view of a small stone crypt house in a graveyard with a cross on its gable, a low iron door, '
                                    f'skulls set in the wall, flat facade, {FLAT}'),
    'front-watchhouse': dict(kind='facade', size=(384, 960), out=(320, 800), seed=None, init='facade:watchhouse', strength=0.64,
                             prompt=f'front view of an old stone watch tower with crenellations, a barred window, a boarded-up door, '
                                    f'rags hanging from the window, flat facade, {FLAT}'),
    # Skarnvik's people and things, cut out like the monsters.
    'npc-stranger': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                         prompt=f'full body illustration of a tall gaunt stranger in a long hooded black cloak, one eye sewn shut with '
                                f'thick black thread, thin cruel smile, hands folded, standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'npc-preacher': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                         prompt=f'full body illustration of a wild-eyed ragged doomsday preacher in a torn robe, both arms raised to the sky, '
                                f'a crude yellow comet painted on his chest, standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'npc-fisher': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                       prompt=f'full body illustration of a weathered old fishwife in a shawl and a stained apron holding a basket of '
                              f'dead fish, standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'gallows': dict(kind='sprite', size=(512, 640), out=(448, 560), seed=None,
                    prompt=f'a wooden gallows with two hanged corpses dangling from ropes and a crow on the beam, front view, '
                           f'{ISOLATED}, {STYLE}'),
    'npc-priest': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                       prompt=f'full body illustration of a gaunt bald priest in a black cassock with a two-headed serpent amulet, '
                              f'holding a smoking censer, standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'npc-gravedigger': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                            prompt=f'full body illustration of a hunched old gravedigger leaning on a spade, muddy rags, a lantern at his belt, '
                                   f'standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'npc-watchman': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                         prompt=f'full body illustration of a grim town watchman in a dented helmet and a salt-white tabard, holding a halberd, '
                                f'standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'npc-beggar': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                       prompt=f'full body illustration of a ragged blind old beggar wrapped in a filthy blanket holding out a wooden bowl, '
                              f'standing, facing the viewer, {ISOLATED}, {STYLE}'),
    'tombstones': dict(kind='sprite', size=(512, 384), out=(384, 288), seed=None,
                       prompt=f'a cluster of three crooked old gravestones and a leaning stone cross in the mud, front view, {ISOLATED}, {STYLE}'),
    'dead-tree': dict(kind='sprite', size=(384, 576), out=(384, 576), seed=None,
                      prompt=f'a gnarled dead leafless tree with twisted black branches and a crow, {ISOLATED}, {STYLE}'),
    'board': dict(kind='sprite', size=(384, 512), out=(288, 384), seed=None,
                  prompt=f'a weathered wooden notice board on two posts covered in nailed paper notices and wanted posters, '
                         f'a skull nailed on top, front view, {ISOLATED}, {STYLE}'),
    # --- the wretches' hands, seen in first person like Doom's weapons ---
    # Asked for a hand, the model paints a whole figure; so each starts from a drawn arm and fist entering
    # from the bottom of the frame, gripping the thing (init 'held:...'). The torch is drawn unlit; the game
    # paints a living flame on its tip.
    'held-torch': dict(kind='sprite', size=(384, 512), out=(384, 512), seed=None, init='held:torch', strength=0.62,
                       prompt=f'a dirty bony hand and forearm in a ragged sleeve gripping a wooden torch wrapped in black oily rags, '
                              f'{ISOLATED}, black ink illustration, heavy crosshatching, rough woodcut, high contrast, gritty zine art'),
    # --- scenes ---
    'town': dict(kind='scene', size=(768, 416), out=(1280, 693), seed=None, light=YELLOW, crop=0.97,
                 prompt=f'a crooked medieval town at night under a huge burning yellow comet, leaning houses with glowing '
                        f'yellow windows, a gallows with a hanged man, a crooked church spire, muddy street, {STYLE}'),
    'title': dict(kind='scene', size=(512, 768), out=(640, 960), seed=None,
                  prompt=f'an undead abbess with a spiked iron crown rising from a crypt, weeping black tears, '
                         f'a burning yellow comet in the black sky, {STYLE}'),
    'inn': dict(kind='scene', size=(512, 384), out=(512, 384), seed=None,
                prompt=f'a grim medieval tavern interior with a dying hearth fire and drunken peasants, {STYLE}'),
    'stall': dict(kind='scene', size=(512, 384), out=(512, 384), seed=None,
                  prompt=f'a ragged market stall selling rusty swords, axes and dented armor, {STYLE}'),
    'stranger': dict(kind='scene', size=(512, 384), out=(512, 384), seed=None, crop=0.9,
                     prompt=f'portrait of a hooded stranger with one eye sewn shut, thin cruel smile, {STYLE}'),
    'stair': dict(kind='scene', size=(512, 384), out=(512, 384), seed=None,
                  prompt=f'worn stone stairs descending into a dark crypt entrance under a ruined arch, {STYLE}'),
    'grave': dict(kind='scene', size=(512, 384), out=(512, 384), seed=None,
                  prompt=f'a fresh grave with a crooked wooden cross and a crow, black sky, {STYLE}'),
}

# The weapon in the front wretch's hand, one per weapon in the rules.
WEAPON_ART = {
    'femur': 'a long bare white human leg bone with big knobby joints at both ends, used as a club',
    'knife': 'a crude rusty knife',
    'staff': 'a gnarled wooden walking staff',
    'shortsword': 'a plain short rusty iron sword with a simple crossguard, its blade pointing up to a sharp tip',
    'warhammer': 'a heavy iron war hammer',
    'sword': 'a plain long straight iron sword with a simple crossguard, its notched blade pointing up to a sharp tip',
    'flail': 'a spiked iron flail on a chain',
    'zweihander': 'a huge plain two-handed iron greatsword with a wide crossguard, its long blade pointing up to a sharp tip',
}
for key, what in WEAPON_ART.items():
    ART[f'held-{key}'] = dict(kind='sprite', size=(384, 512), out=(384, 512), seed=None, init=f'held:{key}', strength=0.62,
                              prompt=f'a dirty bony hand and forearm in a ragged sleeve gripping {what}, {ISOLATED}, '
                                     f'black ink illustration, heavy crosshatching, rough woodcut, high contrast, gritty zine art')

# Eight wretch portraits, picked by name.
FACES = [
    'an old woman with one milky eye and a hood',
    'a gaunt young man with a shaved head and scars',
    'a bearded man with rotten teeth and a broken nose',
    'a gaunt middle-aged woman with matted grey hair and a scar across her lips',
    'a bald old man with a crooked nose and warts',
    'a hollow-cheeked young woman with a shaved head and a burn scar',
    'a one-eared man with a scruffy beard and a hood',
    'a sickly middle-aged woman with sunken eyes, lined skin and a rag tied over her head',
]
for i, face in enumerate(FACES):
    ART[f'wretch-{i}'] = dict(kind='portrait', size=(384, 448), out=(384, 448), seed=None,
                             prompt=f'head and shoulders portrait of {face}, grimy medieval peasant, '
                                    f'staring at the viewer, dark background, {STYLE}')

# Chosen seeds (picked from the contact sheets).
SEEDS = {
    'rats': 1, 'skeleton': 2, 'zombie': 2, 'cultist': 1, 'abbess': 1,
    'remains': 2, 'remains-scroll': 1, 'font': 3, 'relic': 2,
    'wall-stone': 1, 'wall-ossuary': 2, 'wall-relief': 2, 'door': 2, 'floor': 1, 'ceiling': 1,
    'town': 2, 'title': 1, 'inn': 1, 'stall': 1, 'stranger': 2, 'stair': 2, 'grave': 2,
    'vault-wall': 1, 'vault-niches': 2, 'vault-face': 2, 'vault-floor': 1, 'vault-ceiling': 2, 'vault-door': 2,
    'guard': 2, 'prisoner': 1, 'warden': 3, 'gaol-wall': 3, 'gaol-bars': 2, 'gaol-door': 2,
    'facade-timber': 1, 'front-inn': 1, 'facade-stone': 3, 'front-stall': 3, 'npc-stranger': 2, 'facade-derelict': 1, 'gallows': 2, 'board': 1, 'npc-preacher': 2, 'npc-fisher': 1,
    'front-church': 1, 'front-manor': 3, 'front-home': 1, 'npc-priest': 1, 'front-watchhouse': 1, 'front-crypthouse': 2, 'front-exchange': 1, 'npc-watchman': 2, 'npc-beggar': 3, 'npc-gravedigger': 2,
    'held-torch': 1, 'held-warhammer': 1, 'held-knife': 1, 'held-flail': 1, 'held-staff': 1,
    'held-sword': 3, 'held-shortsword': 1, 'held-zweihander': 2, 'held-femur': 1,
    'wretch-0': 1, 'wretch-1': 1, 'wretch-2': 1, 'wretch-3': 2, 'wretch-4': 1, 'wretch-5': 1, 'wretch-6': 1, 'wretch-7': 2,
}


# ---------------- layouts for image-to-image ----------------
# What a facade layout drew, for grading: its outline (outside it is sky) and its windows (some lit).
LAYOUT_INFO = {}


def _facade(d, rnd, w, h, style):
    roof = {'timber': 'gable', 'inn': 'gable', 'stone': 'flat', 'stall': 'flat', 'derelict': 'step', 'church': 'gable', 'home': 'gable',
            'manor': 'flat', 'exchange': 'pediment', 'crypthouse': 'hut', 'watchhouse': 'cren'}[style]
    eave = h * rnd.uniform(0.17, 0.21)
    if roof == 'gable':
        outline = [(0, h), (0, eave), (w * 0.5, h * rnd.uniform(0.02, 0.04)), (w, eave), (w, h)]
    elif roof == 'pediment':
        eave = h * 0.2
        outline = [(0, h), (0, eave), (w * 0.5, h * 0.09), (w, eave), (w, h)]
    elif roof == 'hut':
        # a low hut: everything above its little gable is sky
        eave = h * 0.6
        outline = [(w * 0.08, h), (w * 0.08, eave), (w * 0.5, h * 0.44), (w * 0.92, eave), (w * 0.92, h)]
    elif roof == 'cren':
        top = h * 0.05
        outline = [(0, h), (0, top)]
        for i in range(5):
            x0, x1 = w * i / 5, w * (i + 0.5) / 5
            outline += [(x0, top), (x1, top), (x1, top + h * 0.035), (w * (i + 1) / 5, top + h * 0.035)]
        outline += [(w, top), (w, h)]
    elif roof == 'step':
        top, k = h * 0.04, 3
        outline = [(0, h), (0, eave)]
        for i in range(k):  # up the left side in steps
            x = w * (0.08 + 0.13 * i)
            y = eave - (eave - top) * (i + 1) / k
            outline += [(x, outline[-1][1]), (x, y)]
        outline += [(w - p[0], p[1]) for p in reversed(outline[2:])] + [(w, eave), (w, h)]
    else:
        top = eave * 0.6
        cx0, cx1 = w * rnd.uniform(0.55, 0.65), 0
        cx1 = cx0 + w * 0.16
        outline = [(0, h), (0, top), (cx0, top), (cx0, h * 0.02), (cx1, h * 0.02), (cx1, top), (w, top), (w, h)]
    wall = {'timber': 150, 'inn': 150, 'stone': 118, 'stall': 128, 'derelict': 135, 'church': 112, 'home': 148,
            'manor': 122, 'exchange': 132, 'crypthouse': 104, 'watchhouse': 110}[style]
    d.polygon(outline, fill=wall)
    # the roof: tiles above the eave, or a cornice
    if roof in ('gable', 'pediment', 'hut'):
        d.polygon(outline[1:4], fill=62 if roof == 'gable' else 90)
        for i in range(1, 9):
            y = outline[2][1] + (eave - outline[2][1]) * i / 9
            half = (outline[3][0] - outline[1][0]) * 0.5 * (y - outline[2][1]) / (eave - outline[2][1])
            if roof == 'gable':
                d.line([(w * 0.5 - half, y), (w * 0.5 + half, y)], fill=34, width=3)
    elif roof == 'flat':
        d.rectangle([0, eave * 0.6, w, eave * 0.6 + 14], fill=70)
        d.rectangle([outline[2][0], outline[3][1], outline[4][0], eave * 0.6], fill=95)
    storey = h * rnd.uniform(0.52, 0.58)
    plinth = h * 0.95
    d.rectangle([0, plinth, w, h], fill=80)
    windows = []
    if style in ('timber', 'inn', 'home'):
        beam = 34
        for x in (0, w - 14):
            d.rectangle([x, eave, x + 14, plinth], fill=beam)
        d.rectangle([0, storey - 8, w, storey + 8], fill=beam)
        d.rectangle([0, eave, w, eave + 12], fill=beam)
        d.line([(14, storey - 8), (w * 0.3, eave + 12)], fill=beam, width=10)
        d.line([(w - 14, storey - 8), (w * 0.7, eave + 12)], fill=beam, width=10)
    if style in ('stone', 'church', 'watchhouse', 'crypthouse', 'manor', 'exchange'):
        for y in range(int(eave), int(plinth), 34):
            d.line([(outline[0][0], y), (outline[-1][0], y)], fill=88, width=3)
    if style in ('church', 'exchange', 'manor', 'crypthouse', 'watchhouse'):
        # the grand ones and the grim ones: their own fronts, drawn whole
        windows = []
        if style == 'church':
            d.ellipse([w * 0.26, h * 0.3, w * 0.74, h * 0.46], fill=60)                       # the rose window
            d.ellipse([w * 0.31, h * 0.32, w * 0.69, h * 0.44], fill=215)
            for k in range(8):
                import math as _m
                a = k * _m.pi / 4
                d.line([(w * 0.5, h * 0.38), (w * 0.5 + _m.cos(a) * w * 0.19, h * 0.38 + _m.sin(a) * h * 0.06)], fill=60, width=5)
            windows.append((0.31, 0.32, 0.69, 0.44, True))
            for x in (0.1, 0.78):
                d.rectangle([w * x, h * 0.5, w * (x + 0.12), h * 0.66], fill=18)
                d.ellipse([w * x, h * 0.47, w * (x + 0.12), h * 0.53], fill=18)
            d.rectangle([w * 0.27, h * 0.72, w * 0.73, plinth], fill=30)                      # the portal
            d.ellipse([w * 0.27, h * 0.64, w * 0.73, h * 0.8], fill=30)
            d.polygon([(w * 0.22, h * 0.72), (w * 0.5, h * 0.6), (w * 0.78, h * 0.72)], fill=95)
        elif style == 'exchange':
            for k in range(4):
                x = w * (0.08 + 0.26 * k)
                d.rectangle([x, h * 0.24, x + w * 0.1, plinth], fill=185)
            d.rectangle([w * 0.3, h * 0.62, w * 0.7, plinth], fill=26)
            for k in range(6):
                x = w * (0.32 + 0.065 * k)
                d.line([(x, h * 0.62), (x, plinth)], fill=120, width=5)
        elif style == 'manor':
            for x in (0.12, 0.62):
                lit = rnd.random() < 0.4
                d.rectangle([w * x, h * 0.26, w * (x + 0.26), h * 0.46], fill=225 if lit else 18)
                windows.append((x, 0.26, x + 0.26, 0.46, lit))
            d.polygon([(w * 0.4, h * 0.52), (w * 0.6, h * 0.52), (w * 0.6, h * 0.6), (w * 0.5, h * 0.65), (w * 0.4, h * 0.6)], fill=190)
            d.rectangle([w * 0.3, h * 0.68, w * 0.7, plinth - h * 0.03], fill=30)
            for k in range(3):
                d.rectangle([w * (0.24 - 0.04 * k), plinth - h * 0.03 + k * 8, w * (0.76 + 0.04 * k), plinth - h * 0.03 + k * 8 + 8], fill=140 - 15 * k)
        elif style == 'crypthouse':
            d.line([(w * 0.5, h * 0.4), (w * 0.5, h * 0.47)], fill=40, width=8)                  # the cross
            d.line([(w * 0.45, h * 0.425), (w * 0.55, h * 0.425)], fill=40, width=8)
            d.rectangle([w * 0.36, h * 0.74, w * 0.64, plinth], fill=24)
            for k in range(4):
                d.ellipse([w * (0.16 + 0.19 * k), h * 0.66, w * (0.16 + 0.19 * k) + 26, h * 0.66 + 30], fill=200)
        else:  # watchhouse
            d.rectangle([w * 0.38, h * 0.3, w * 0.62, h * 0.42], fill=18)
            for k in range(4):
                d.line([(w * (0.4 + 0.06 * k), h * 0.3), (w * (0.4 + 0.06 * k), h * 0.42)], fill=140, width=5)
            d.rectangle([w * 0.32, h * 0.72, w * 0.68, plinth], fill=30)
            for k in range(3):
                d.line([(w * 0.28, h * (0.75 + 0.06 * k)), (w * 0.72, h * (0.77 + 0.06 * k))], fill=125, width=14)
        LAYOUT_INFO[style] = {'outline': [(x / w, y / h) for x, y in outline], 'windows': windows}
        return
    # upper windows
    n = 1 if style in ('stall',) else rnd.choice([1, 2])
    for i in range(n):
        ww, wh = w * (0.3 if n == 1 else 0.24), h * rnd.uniform(0.12, 0.15)
        x0 = (w - ww) / 2 if n == 1 else w * (0.16 + 0.44 * i)
        y0 = eave + (storey - eave - wh) * 0.5
        lit = style in ('inn', 'home') or rnd.random() < 0.45
        d.rectangle([x0, y0, x0 + ww, y0 + wh], fill=225 if lit else 18)
        d.line([(x0 + ww / 2, y0), (x0 + ww / 2, y0 + wh)], fill=60, width=4)
        d.line([(x0, y0 + wh / 2), (x0 + ww, y0 + wh / 2)], fill=60, width=4)
        if style == 'derelict':
            lit = False
            for k in range(3):
                yy = y0 + wh * (0.2 + 0.3 * k)
                d.line([(x0 - 8, yy + rnd.uniform(-10, 10)), (x0 + ww + 8, yy + rnd.uniform(-10, 10))], fill=120, width=14)
        windows.append((x0 / w, y0 / h, (x0 + ww) / w, (y0 + wh) / h, lit))
    # the ground floor
    if style == 'stall':
        ox0, ox1, oy0, oy1 = w * 0.08, w * 0.92, storey + h * 0.06, plinth - h * 0.12
        d.rectangle([ox0, oy0, ox1, oy1], fill=16)
        d.rectangle([ox0 - 6, oy1, ox1 + 6, oy1 + 18], fill=110)                     # the counter
        for k in range(8):                                                            # the awning
            x = ox0 - 10 + (ox1 - ox0 + 20) * k / 8
            d.polygon([(x, storey + 4), (x + (ox1 - ox0 + 20) / 8, storey + 4),
                       (x + (ox1 - ox0 + 20) / 8 + 6, oy0 + 10), (x + 6, oy0 + 10)], fill=200 if k % 2 else 70)
        for k in range(3):                                                            # hanging axes
            x = ox0 + (ox1 - ox0) * (0.22 + 0.28 * k)
            d.line([(x, oy0 + 14), (x, oy0 + 90)], fill=170, width=6)
            d.polygon([(x, oy0 + 70), (x + 26, oy0 + 60), (x + 26, oy0 + 96), (x, oy0 + 90)], fill=190)
    else:
        dw = w * (0.44 if style == 'inn' else 0.32)
        dx0 = (w - dw) / 2 if style == 'inn' else rnd.choice([w * 0.14, (w - dw) / 2, w * 0.54])
        dy0 = plinth - h * (0.27 if style == 'inn' else 0.23)
        d.rectangle([dx0, dy0 + dw * 0.3, dx0 + dw, plinth], fill=38)
        d.ellipse([dx0, dy0, dx0 + dw, dy0 + dw * 0.6], fill=38)
        for k in range(1, 4):
            x = dx0 + dw * k / 4
            d.line([(x, dy0 + dw * 0.15), (x, plinth)], fill=22, width=3)
        if style == 'derelict':
            d.line([(dx0 - 10, dy0 + 60), (dx0 + dw + 10, dy0 + 140)], fill=120, width=16)
        # a ground-floor window beside the door
        if style != 'derelict':
            gw, gh = w * 0.22, h * 0.09
            gx0 = w * 0.62 if dx0 < w * 0.4 else w * 0.12
            if style == 'inn':
                gx0 = None
            if gx0 is not None:
                lit = rnd.random() < 0.5
                gy0 = storey + h * 0.07
                d.rectangle([gx0, gy0, gx0 + gw, gy0 + gh], fill=225 if lit else 18)
                d.line([(gx0 + gw / 2, gy0), (gx0 + gw / 2, gy0 + gh)], fill=60, width=4)
                windows.append((gx0 / w, gy0 / h, (gx0 + gw) / w, (gy0 + gh) / h, lit))
        if style == 'home':
            # bundles of herbs and roots hanging beside the door
            for k in range(4):
                x = dx0 + dw + 10 + k * 14
                d.line([(x, dy0), (x, dy0 + 30)], fill=40, width=2)
                d.ellipse([x - 7, dy0 + 26, x + 7, dy0 + 60], fill=70 + 20 * (k % 2))
        if style == 'inn':
            # the sign of the Drowned Lamb on its bracket
            d.line([(14, storey + 30), (w * 0.42, storey + 30)], fill=30, width=6)
            sx0, sy0 = w * 0.1, storey + 40
            d.rectangle([sx0, sy0, sx0 + w * 0.3, sy0 + h * 0.08], fill=170)
            d.ellipse([sx0 + w * 0.06, sy0 + 14, sx0 + w * 0.24, sy0 + h * 0.065], fill=235)
    LAYOUT_INFO[style] = {'outline': [(x / w, y / h) for x, y in outline], 'windows': windows}



def _blocks(d, rnd, w, h, rows, tone=(95, 150), mortar=28, x0=0, y0=0):
    y = y0
    row_h = (h - y0) / rows
    for r in range(rows):
        rh = row_h * rnd.uniform(0.85, 1.15)
        x = x0 - rnd.uniform(0, 80)
        while x < w:
            bw = rnd.uniform(70, 170)
            g = rnd.randint(*tone)
            j = lambda: rnd.uniform(2, 10)
            d.polygon([(x + j(), y + j()), (x + bw - j(), y + j()), (x + bw - j(), y + rh - j()), (x + j(), y + rh - j())], fill=g)
            # a little shading on each block, and a crack or two
            d.line([x + 8, y + rh - 10, x + bw - 8, y + rh - 10], fill=max(0, g - 40), width=6)
            d.line([x + 8, y + 8, x + bw - 8, y + 8], fill=min(255, g + 40), width=3)
            for _ in range(rnd.randint(0, 2)):
                cx, cy = x + rnd.uniform(10, bw - 10), y + rnd.uniform(8, rh - 8)
                d.line([cx, cy, cx + rnd.uniform(-25, 25), cy + rnd.uniform(-20, 20)], fill=max(0, g - 60), width=2)
            x += bw
        d.line([0, y + rh, w, y + rh], fill=mortar, width=7)
        y += rh


def _held(d, rnd, w, h, what):
    """An arm from the bottom of the frame, a fist, and the thing it grips, along a tilted axis.
    The torch is held in the left hand (arm from the lower left), weapons in the right."""
    d.rectangle([0, 0, w, h], fill=242)
    left = what == 'torch'
    sx = -1 if left else 1
    # the axis of the held thing: from the pommel (p0) up to its tip (p1)
    reach = {'knife': 0.5, 'shortsword': 0.72, 'torch': 0.78, 'zweihander': 0.98}.get(what, 0.9)
    p0 = (w * (0.5 + 0.06 * sx), h * 0.8)
    p1 = (w * (0.5 - 0.18 * sx), h * (0.8 - 0.78 * reach))
    ax, ay = p1[0] - p0[0], p1[1] - p0[1]
    ln = math.hypot(ax, ay)
    ux, uy = ax / ln, ay / ln
    px, py = -uy, ux  # perpendicular
    at = lambda t, off=0: (p0[0] + ax * t + px * off, p0[1] + ay * t + py * off)
    def seg(t0, t1, hw0, fill, hw1=None):
        hw1 = hw0 if hw1 is None else hw1
        d.polygon([at(t0, -hw0), at(t0, hw0), at(t1, hw1), at(t1, -hw1)], fill=fill)
    def blob(t, r, fill, off=0):
        x, y = at(t, off)
        d.ellipse([x - r, y - r, x + r, y + r], fill=fill)
    # the forearm and its ragged sleeve, coming up from the bottom edge to the fist
    fist = at(0.16)
    elbow = (w * (0.5 + 0.42 * sx), h * 1.02)
    d.polygon([(elbow[0] - 70, elbow[1]), (elbow[0] + 70, elbow[1]), (fist[0] + 38, fist[1] + 20), (fist[0] - 38, fist[1] + 20)], fill=125)
    rag = [(elbow[0] - 95, h), (elbow[0] + 95, h)]
    for k in range(9):
        tx = elbow[0] + 95 - k * 190 / 8
        rag.append((tx, h * (0.86 + 0.05 * (k % 2)) + rnd.uniform(-8, 8)))
    d.polygon(rag, fill=55)
    # the thing held
    if what == 'torch':
        seg(0, 0.78, 11, 120)
        seg(0.7, 1.0, 26, 45, 20)
        for t in (0.76, 0.84, 0.92):
            d.line([at(t, -27), at(t, 27)], fill=25, width=5)
    elif what in ('sword', 'shortsword', 'knife', 'zweihander'):
        big = what == 'zweihander'
        seg(-0.04, 0.24, 9 if not big else 11, 70)
        blob(-0.05, 14 if not big else 18, 90)
        guard = {'knife': 0.3, 'shortsword': 0.27, 'sword': 0.25, 'zweihander': 0.25}[what]
        seg(guard - 0.02, guard + 0.01, 30 if what == 'knife' else 46 if not big else 66, 95)
        hw = {'knife': 13, 'shortsword': 15, 'sword': 17, 'zweihander': 24}[what]
        seg(guard + 0.01, 0.9, hw, 205, hw * 0.75)
        d.polygon([at(0.9, -hw * 0.75), at(0.9, hw * 0.75), at(1.0, 0)], fill=205)
        d.line([at(guard + 0.03), at(0.92)], fill=150, width=3)  # the fuller
    elif what == 'warhammer':
        seg(-0.04, 0.86, 9, 95)
        seg(0.78, 0.94, 50, 75)
        d.polygon([at(0.82, -50), at(0.9, -50), at(0.86, -82)], fill=75)  # the back spike
    elif what == 'flail':
        seg(-0.04, 0.42, 10, 95)
        blob(0.44, 12, 80)
        x, y = at(0.44)
        for k in range(1, 7):
            cx, cy = x + sx * -k * 13, y - k * 9 + k * k * 1.6
            d.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], outline=70, width=5)
        bx, by = x + sx * -100, y - 20
        d.ellipse([bx - 40, by - 40, bx + 40, by + 40], fill=70)
        for k in range(10):
            a = k * math.pi / 5
            d.polygon([(bx + math.cos(a) * 36, by + math.sin(a) * 36), (bx + math.cos(a + 0.2) * 36, by + math.sin(a + 0.2) * 36),
                       (bx + math.cos(a + 0.1) * 62, by + math.sin(a + 0.1) * 62)], fill=70)
    elif what == 'femur':
        for t, r in ((-0.04, 22), (0.92, 26)):
            blob(t, r, 110, -12)
            blob(t, r, 110, 12)
        seg(-0.02, 0.9, 16, 110, 18)
        for t, r in ((-0.04, 18), (0.92, 22)):
            blob(t, r, 185, -12)
            blob(t, r, 185, 12)
        seg(-0.02, 0.9, 12, 185, 14)
    elif what == 'staff':
        pts = [at(t, math.sin(t * 9) * 6) for t in [k / 12 for k in range(-1, 13)]]
        d.line(pts, fill=100, width=20)
        blob(1.0, 18, 100)
    # the fist closes over the grip: four knuckles across the axis
    fx, fy = fist
    d.ellipse([fx - 46, fy - 40, fx + 46, fy + 42], fill=150)
    for k in range(4):
        kx, ky = at(0.11 + k * 0.035, 20 * sx)
        d.ellipse([kx - 16, ky - 13, kx + 16, ky + 13], fill=160, outline=95, width=3)
    tx, ty = at(0.2, -26 * sx)
    d.ellipse([tx - 18, ty - 14, tx + 18, ty + 14], fill=140, outline=95, width=3)  # the thumb


def layout(kind, size, seed_name):
    import random
    from PIL import ImageDraw
    w, h = size
    rnd = random.Random(seed_name)
    img = Image.new('L', size, 30)
    d = ImageDraw.Draw(img)
    if kind in ('blocks', 'relief'):
        _blocks(d, rnd, w, h, rows=6)
        if kind == 'relief':
            # a niche with a robed, praying figure
            d.rectangle([w * 0.3, h * 0.12, w * 0.7, h * 0.92], fill=45)
            d.ellipse([w * 0.3, h * 0.02, w * 0.7, h * 0.32], fill=45)
            d.ellipse([w * 0.44, h * 0.16, w * 0.56, h * 0.3], fill=175)          # head
            d.polygon([(w * 0.5, h * 0.3), (w * 0.36, h * 0.9), (w * 0.64, h * 0.9)], fill=150)  # robe
            d.polygon([(w * 0.47, h * 0.42), (w * 0.53, h * 0.42), (w * 0.5, h * 0.52)], fill=200)  # hands
    elif kind == 'rat':
        d.rectangle([0, 0, w, h], fill=242)
        cy = h * 0.62
        d.ellipse([w * 0.22, cy - h * 0.2, w * 0.68, cy + h * 0.14], fill=70)                      # body
        d.polygon([(w * 0.62, cy - h * 0.16), (w * 0.9, cy + h * 0.02), (w * 0.64, cy + h * 0.08)], fill=60)  # head
        d.ellipse([w * 0.63, cy - h * 0.22, w * 0.7, cy - h * 0.12], fill=80)                      # ear
        d.ellipse([w * 0.75, cy - h * 0.09, w * 0.78, cy - h * 0.06], fill=230)                    # eye
        for lx in (0.3, 0.38, 0.55, 0.62):                                                         # legs
            d.rectangle([w * lx, cy + h * 0.08, w * lx + w * 0.03, cy + h * 0.24], fill=65)
        d.line([(w * 0.24, cy), (w * 0.12, cy + h * 0.1), (w * 0.05, cy + h * 0.02), (w * 0.02, cy - h * 0.1)],
               fill=110, width=9)                                                                  # tail
    elif kind == 'skulls':
        d.rectangle([0, 0, w, h], fill=35)
        rows = 7
        rh = h / rows
        for r in range(rows):
            y = r * rh
            if r % 3 == 2:
                # a row of long bones
                for k in range(5):
                    x = k * w / 5 + rnd.uniform(-8, 8)
                    d.rounded_rectangle([x + 4, y + rh * 0.3, x + w / 5 - 4, y + rh * 0.7], radius=12, fill=185)
                continue
            n = 6
            for k in range(n):
                cx = (k + 0.5 + (0.5 if r % 2 else 0)) * w / n
                cy = y + rh * 0.5
                sw, sh = w / n * 0.42, rh * 0.46
                g = rnd.randint(165, 210)
                d.ellipse([cx - sw, cy - sh, cx + sw, cy + sh * 0.8], fill=g)
                d.rectangle([cx - sw * 0.55, cy + sh * 0.3, cx + sw * 0.55, cy + sh], fill=g - 15)
                for ex in (-0.42, 0.42):
                    d.ellipse([cx + ex * sw - sw * 0.25, cy - sh * 0.1, cx + ex * sw + sw * 0.25, cy + sh * 0.35], fill=20)
                d.polygon([(cx, cy + sh * 0.35), (cx - sw * 0.1, cy + sh * 0.6), (cx + sw * 0.1, cy + sh * 0.6)], fill=25)
    elif kind == 'door':
        _blocks(d, rnd, w, h, rows=6)
        x0, x1, top = w * 0.18, w * 0.82, h * 0.12
        d.rectangle([x0 - 10, top + (x1 - x0) / 2 - 10, x1 + 10, h], fill=25)
        d.ellipse([x0 - 10, top - 10, x1 + 10, top + (x1 - x0) + 10], fill=25)
        d.ellipse([x0, top, x1, top + (x1 - x0)], fill=95)
        d.rectangle([x0, top + (x1 - x0) / 2, x1, h], fill=95)
        planks = 6
        for k in range(1, planks):
            x = x0 + (x1 - x0) * k / planks
            d.line([x, top, x, h], fill=40, width=5)
        for y in (h * 0.38, h * 0.72):
            d.rectangle([x0, y, x1, y + 22], fill=55)
            for k in range(7):
                rx = x0 + 14 + k * (x1 - x0 - 28) / 6
                d.ellipse([rx - 5, y + 6, rx + 5, y + 16], fill=170)
        d.ellipse([w * 0.66, h * 0.55, w * 0.74, h * 0.63], outline=170, width=5)
    elif kind == 'flags':
        d.rectangle([0, 0, w, h], fill=30)
        y = 0
        while y < h:
            rh = rnd.uniform(90, 150)
            x = -rnd.uniform(0, 60)
            while x < w:
                bw = rnd.uniform(90, 170)
                g = rnd.randint(85, 135)
                d.polygon([(x + rnd.uniform(3, 9), y + rnd.uniform(3, 9)), (x + bw - rnd.uniform(3, 9), y + rnd.uniform(3, 9)),
                           (x + bw - rnd.uniform(3, 9), y + rh - rnd.uniform(3, 9)), (x + rnd.uniform(3, 9), y + rh - rnd.uniform(3, 9))], fill=g)
                x += bw
            y += rh
        for _ in range(9):
            x, y = rnd.uniform(0, w), rnd.uniform(0, h)
            d.line([x, y, x + rnd.uniform(-40, 40), y + rnd.uniform(-12, 12)], fill=210, width=5)
    elif kind == 'shackles':
        _blocks(d, rnd, w, h, rows=9, tone=(70, 120))
        cx, cy = w * 0.5, h * 0.38
        d.ellipse([cx - 34, cy - 34, cx + 34, cy + 34], outline=185, width=11)
        d.rectangle([cx - 14, cy - 60, cx + 14, cy - 30], fill=150)
        for k in range(6):
            yy = cy + 34 + k * 26
            d.ellipse([cx - 11 + (k % 2) * 4, yy, cx + 11 + (k % 2) * 4, yy + 30], outline=170, width=7)
        for k in range(4):  # tally marks
            x = w * 0.12 + k * 14
            d.line([x, h * 0.72, x + 3, h * 0.84], fill=215, width=4)
        d.line([w * 0.1, h * 0.8, w * 0.12 + 56, h * 0.75], fill=215, width=4)
    elif kind == 'bars':
        _blocks(d, rnd, w, h, rows=6)
        x0, x1, y0 = w * 0.1, w * 0.9, h * 0.08
        d.rectangle([x0 - 12, y0 - 12, x1 + 12, h], fill=110)
        d.rectangle([x0, y0, x1, h], fill=12)
        for k in range(7):
            x = x0 + 18 + k * (x1 - x0 - 36) / 6
            d.rectangle([x - 8, y0, x + 8, h], fill=150)
            d.line([x - 3, y0, x - 3, h], fill=200, width=3)
        for yy in (h * 0.3, h * 0.72):
            d.rectangle([x0, yy, x1, yy + 16], fill=135)
    elif kind == 'celldoor':
        _blocks(d, rnd, w, h, rows=6)
        x0, x1, top = w * 0.16, w * 0.84, h * 0.08
        d.rectangle([x0 - 12, top - 12, x1 + 12, h], fill=22)
        d.rectangle([x0, top, x1, h], fill=85)
        for k in range(5):
            y = top + 20 + k * (h - top - 40) / 4
            for j in range(7):
                rx = x0 + 18 + j * (x1 - x0 - 36) / 6
                d.ellipse([rx - 6, y - 6, rx + 6, y + 6], fill=175)
        gx0, gx1, gy0, gy1 = w * 0.36, w * 0.64, h * 0.2, h * 0.36
        d.rectangle([gx0, gy0, gx1, gy1], fill=10)
        for k in range(4):
            x = gx0 + 10 + k * (gx1 - gx0 - 20) / 3
            d.rectangle([x - 4, gy0, x + 4, gy1], fill=160)
        d.rectangle([w * 0.72, h * 0.55, w * 0.78, h * 0.65], fill=160)
    elif kind.startswith('facade:'):
        d.rectangle([0, 0, w, h], fill=20)  # night sky behind the roofline
        _facade(d, rnd, w, h, kind.split(':')[1])
        LAYOUT_INFO[seed_name] = LAYOUT_INFO.pop(kind.split(':')[1])
    elif kind.startswith('held:'):
        _held(d, rnd, w, h, kind.split(':')[1])
    elif kind == 'weeping':
        _blocks(d, rnd, w, h, rows=5, tone=(130, 185))
        for _ in range(16):
            x, y = rnd.uniform(0, w), rnd.uniform(0, h * 0.7)
            length = rnd.uniform(h * 0.2, h * 0.7)
            width = rnd.uniform(5, 14)
            pts, yy = [], y
            while yy < y + length:
                pts.append((x, yy))
                x += rnd.uniform(-3, 3)
                yy += 10
            for i in range(len(pts) - 1):
                d.line([pts[i], pts[i + 1]], fill=12, width=max(1, int(width * (1 - i / len(pts)))))
            d.ellipse([pts[0][0] - width, pts[0][1] - width / 2, pts[0][0] + width, pts[0][1] + width / 2], fill=12)
    elif kind == 'niches':
        _blocks(d, rnd, w, h, rows=4, tone=(80, 120))
        for r in range(3):
            for k in range(2):
                x0, y0 = w * (0.06 + k * 0.48), h * (0.05 + r * 0.32)
                x1, y1 = x0 + w * 0.42, y0 + h * 0.24
                d.rectangle([x0 - 8, y0 - 8, x1 + 8, y1 + 8], fill=150)
                d.rectangle([x0, y0, x1, y1], fill=14)
                # a shrouded body lying in it, head to one side
                hx = x0 + 28 if (r + k) % 2 else x1 - 28
                d.ellipse([x0 + 12, y0 + h * 0.08, x1 - 12, y1 - 6], fill=165)
                d.ellipse([hx - 22, y0 + h * 0.07, hx + 22, y0 + h * 0.07 + 40], fill=190)
                for j in range(5):
                    lx = x0 + 40 + j * (x1 - x0 - 80) / 4
                    d.line([lx, y0 + h * 0.09, lx + 10, y1 - 10], fill=120, width=3)
    elif kind == 'face':
        _blocks(d, rnd, w, h, rows=6)
        d.ellipse([w * 0.2, h * 0.08, w * 0.8, h * 0.95], fill=150)
        for ex in (0.37, 0.63):
            d.ellipse([w * (ex - 0.08), h * 0.36, w * (ex + 0.08), h * 0.46], fill=20)
            # tears run from each eye to the bottom of the stone
            x = w * ex
            for yy in range(int(h * 0.44), h, 8):
                d.line([x, yy, x + rnd.uniform(-2, 2), yy + 8], fill=10, width=9)
                x += rnd.uniform(-2, 2)
        d.polygon([(w * 0.5, h * 0.48), (w * 0.45, h * 0.62), (w * 0.55, h * 0.62)], fill=110)
        d.ellipse([w * 0.4, h * 0.7, w * 0.6, h * 0.8], fill=25)
        d.arc([w * 0.25, h * 0.1, w * 0.75, h * 0.5], 200, 340, fill=200, width=6)
    elif kind == 'slabs':
        d.rectangle([0, 0, w, h], fill=25)
        for r in range(2):
            for k in range(2):
                x0, y0 = k * w / 2 + 6, r * h / 2 + 6
                x1, y1 = x0 + w / 2 - 12, y0 + h / 2 - 12
                d.rectangle([x0, y0, x1, y1], fill=rnd.randint(105, 140))
                cx = (x0 + x1) / 2
                d.line([cx, y0 + 30, cx, y0 + 140], fill=40, width=9)
                d.line([cx - 40, y0 + 65, cx + 40, y0 + 65], fill=40, width=9)
                for j in range(3):
                    yy = y0 + 165 + j * 22
                    xx = x0 + 30
                    while xx < x1 - 40:
                        ln = rnd.uniform(10, 30)
                        d.line([xx, yy, xx + ln, yy], fill=55, width=5)
                        xx += ln + rnd.uniform(6, 14)
                for _ in range(2):
                    sx, sy = rnd.uniform(x0, x1), rnd.uniform(y0, y1)
                    d.line([sx, sy, sx + rnd.uniform(-50, 50), sy + rnd.uniform(-30, 30)], fill=30, width=3)
    elif kind == 'ribs':
        _blocks(d, rnd, w, h, rows=10, tone=(40, 75), mortar=15)
        for a, b in (((0, 0), (w, h)), ((w, 0), (0, h))):
            d.line([a, b], fill=20, width=46)
            d.line([a, b], fill=150, width=32)
        d.ellipse([w / 2 - 34, h / 2 - 34, w / 2 + 34, h / 2 + 34], fill=170)
    elif kind == 'irondoor':
        _blocks(d, rnd, w, h, rows=6)
        x0, x1, top = w * 0.18, w * 0.82, h * 0.1
        d.rectangle([x0 - 10, top - 10, x1 + 10, h], fill=20)
        d.rectangle([x0, top, x1, h], fill=55)
        for y in (h * 0.22, h * 0.5, h * 0.78):
            d.rectangle([x0, y, x1, y + 26], fill=100)
            for k in range(8):
                rx = x0 + 14 + k * (x1 - x0 - 28) / 7
                d.ellipse([rx - 6, y + 7, rx + 6, y + 19], fill=190)
        cx, cy = w * 0.5, h * 0.62
        d.ellipse([cx - 30, cy - 34, cx + 30, cy + 20], fill=195)
        for ex in (-12, 12):
            d.ellipse([cx + ex - 8, cy - 18, cx + ex + 8, cy - 2], fill=20)
        d.ellipse([cx - 26, cy + 14, cx + 26, cy + 62], outline=180, width=6)
    elif kind == 'roots':
        _blocks(d, rnd, w, h, rows=5, tone=(55, 95), mortar=18)
        for _ in range(7):
            x = rnd.uniform(0, w)
            pts, y = [], 0
            while y < h * rnd.uniform(0.4, 0.9):
                pts.append((x, y))
                x += rnd.uniform(-14, 14)
                y += rnd.uniform(12, 26)
            d.line(pts, fill=15, width=rnd.randint(4, 9))
    # stone grain: noise at a few scales, so there is texture for the model to ink over
    rng = np.random.default_rng(len(seed_name))
    if kind.startswith('held:'):
        # a cut-out: grain on the subject only, the background left plain for the model and the cutter
        arr = np.asarray(img, np.float32)
        noise = rng.normal(0, 9, (h, w)).astype(np.float32)
        arr = np.where(arr < 236, np.clip(arr + noise, 0, 255), arr).astype(np.uint8)
        return Image.fromarray(arr).filter(ImageFilter.GaussianBlur(1.0)).convert('RGB')
    grain = np.zeros((h, w), np.float32)
    for scale, amp in ((64, 22), (16, 16), (4, 10), (1, 8)):
        small = rng.normal(0, 1, (max(1, h // scale), max(1, w // scale))).astype(np.float32)
        grain += amp * np.asarray(Image.fromarray(small).resize((w, h), Image.BICUBIC))
    arr = np.clip(np.asarray(img, np.float32) + grain, 0, 255).astype(np.uint8)
    return Image.fromarray(arr).filter(ImageFilter.GaussianBlur(1.2)).convert('RGB')


# ---------------- generation ----------------
_pipe = None
_img2img = None
STRENGTH = 0.68  # how far image-to-image may stray from the drawn layout, unless the asset says


def _strength(spec):
    return spec.get('strength', STRENGTH)


def pipe():
    global _pipe
    if _pipe is None:
        import torch
        from diffusers import DiffusionPipeline
        torch.set_num_threads(os.cpu_count() or 4)
        _pipe = DiffusionPipeline.from_pretrained(MODEL, safety_checker=None, requires_safety_checker=False)
        _pipe.to('cpu')
        _pipe.set_progress_bar_config(disable=True)
    return _pipe


def raw_path(name, seed):
    # keyed on the prompt, size and layout too, so editing any of them never reuses a stale render
    spec = ART[name]
    key = hashlib.sha1(f"{spec['prompt']}|{spec['size']}|{spec.get('init')}|{_strength(spec) if spec.get('init') else ''}"
                       .encode()).hexdigest()[:8]
    return RAW_DIR / f'{name}-{seed}-{key}.png'


def generate(name, seed, steps=8):
    path = raw_path(name, seed)
    if path.exists():
        return Image.open(path).convert('RGB')
    import torch
    spec = ART[name]
    w, h = spec['size']
    g = torch.Generator('cpu').manual_seed(seed)
    if spec.get('init'):
        global _img2img
        if _img2img is None:
            from diffusers import LatentConsistencyModelImg2ImgPipeline
            _img2img = LatentConsistencyModelImg2ImgPipeline(**pipe().components)
            _img2img.set_progress_bar_config(disable=True)
        init = layout(spec['init'], (w, h), f'{name}-{seed}')
        img = _img2img(prompt=spec['prompt'], image=init, strength=_strength(spec), num_inference_steps=steps,
                       guidance_scale=8.0, generator=g, output_type='pil').images[0]
    else:
        img = pipe()(prompt=spec['prompt'], width=w, height=h, num_inference_steps=steps,
                     guidance_scale=8.0, generator=g, output_type='pil').images[0]
    RAW_DIR.mkdir(parents=True, exist_ok=True)
    img.save(path)
    return img


# ---------------- grading ----------------
def _arr(img):
    return np.asarray(img).astype(np.float32) / 255.0


def _hsv(rgb):
    mx = rgb.max(-1)
    mn = rgb.min(-1)
    d = mx - mn
    s = np.where(mx > 0, d / np.maximum(mx, 1e-6), 0)
    r, g, b = rgb[..., 0], rgb[..., 1], rgb[..., 2]
    h = np.zeros_like(mx)
    m = d > 1e-6
    rc = np.where(m & (mx == r), ((g - b) / np.maximum(d, 1e-6)) % 6, 0)
    gc = np.where(m & (mx == g), (b - r) / np.maximum(d, 1e-6) + 2, 0)
    bc = np.where(m & (mx == b), (r - g) / np.maximum(d, 1e-6) + 4, 0)
    h = np.where(m & (mx == r), rc, np.where(m & (mx == g), gc, np.where(m, bc, 0))) * 60
    return h, s, mx


def _contrast(lum, lo_pct=2, hi_pct=98, k=7.0, mid=0.5, gamma=1.0):
    lo, hi = np.percentile(lum, lo_pct), np.percentile(lum, hi_pct)
    x = np.clip((lum - lo) / max(hi - lo, 1e-6), 0, 1) ** gamma
    y = 1 / (1 + np.exp(-k * (x - mid)))
    y0, y1 = 1 / (1 + np.exp(k * mid)), 1 / (1 + np.exp(-k * (1 - mid)))
    return (y - y0) / (y1 - y0)


def _duotone(t, dark, light):
    dark = np.array(dark, np.float32) / 255
    light = np.array(light, np.float32) / 255
    return dark + (light - dark) * t[..., None]


def _accents(rgb, out, strength=1.0):
    """Keep acid yellow where the render glows yellow or orange, and pink where it bleeds red or magenta."""
    h, s, v = _hsv(rgb)
    yellow = np.clip((s - 0.35) * 2.5, 0, 1) * np.clip((v - 0.45) * 3, 0, 1) * ((h > 28) & (h < 75))
    pink = np.clip((s - 0.4) * 2.5, 0, 1) * np.clip((v - 0.25) * 3, 0, 1) * ((h > 300) | (h < 18))
    for mask, color in ((yellow, YELLOW), (pink, PINK)):
        m = np.clip(mask * strength, 0, 1)[..., None]
        out = out * (1 - m) + (np.array(color, np.float32) / 255) * m
    return out


def _drips(out, spec, seed):
    """Paint black, wet drips over a graded surface: `drips` random ones, and `tears` that run from given
    points (fractions of the picture) to the bottom. Each has a bone-white glint down one side."""
    import random
    from PIL import ImageDraw
    h, w = out.shape[:2]
    rnd = random.Random(seed)
    starts = [(x * w, y * h, True) for x, y in spec.get('tears', [])]
    starts += [(rnd.uniform(0, w), rnd.uniform(0, h * 0.55), False) for _ in range(spec.get('drips', 0))]
    ink = Image.new('L', (w, h), 0)
    glint = Image.new('L', (w, h), 0)
    di, dg = ImageDraw.Draw(ink), ImageDraw.Draw(glint)
    for x, y, tear in starts:
        width = rnd.uniform(16, 22) if tear else rnd.uniform(12, 24)
        end = h * rnd.uniform(0.93, 0.99) if tear else min(h * 0.97, y + h * rnd.uniform(0.25, 0.55))
        pts = [(x, y)]
        drift = rnd.uniform(-0.25, 0.25)
        while pts[-1][1] < end:
            px, py = pts[-1]
            pts.append((px + drift + rnd.uniform(-0.6, 0.6), py + 4))
        n = len(pts)
        for i in range(n - 1):
            k = i / n
            # thick where it starts, thinning as it runs, swelling a little here and there
            wd = width * (1 - (0.6 if tear else 0.72) * k) * (1 + 0.16 * math.sin(i * 0.23 + x))
            (x0, y0), (x1, y1) = pts[i], pts[i + 1]
            di.polygon([(x0 - wd / 2, y0), (x0 + wd / 2, y0), (x1 + wd / 2, y1 + 1), (x1 - wd / 2, y1 + 1)], fill=255)
            if wd > 5 and (tear or k < 0.45):
                gx0, gx1 = x0 - wd * 0.22, x1 - wd * 0.22
                dg.line([(gx0, y0), (gx1, y1 + 1)], fill=200, width=max(2, int(wd * 0.14)))
        # a heavy bead where the drip has stopped, and a smear where it began
        ex, ey = pts[-1]
        r = width * 0.4 + 3
        di.ellipse([ex - r, ey - r * 1.1, ex + r, ey + r * 1.3], fill=255)
        if tear:
            di.ellipse([x - width * 0.9, y - width * 0.35, x + width * 0.9, y + width * 0.35], fill=255)
        else:
            # a wall drip seeps out of a crack: a ragged stain where it starts
            for _ in range(5):
                sx, sy = x + rnd.uniform(-width, width), y + rnd.uniform(-width * 0.3, width * 0.6)
                sr = rnd.uniform(width * 0.25, width * 0.55)
                di.ellipse([sx - sr, sy - sr * 0.6, sx + sr, sy + sr * 0.6], fill=255)
    m = np.asarray(ink.filter(ImageFilter.GaussianBlur(0.8)), np.float32)[..., None] / 255
    g = np.asarray(glint.filter(ImageFilter.GaussianBlur(0.6)), np.float32)[..., None] / 255 * m
    inkc, bone = np.array(INK, np.float32) / 255, np.array(BONE, np.float32) / 255
    out = out * (1 - m) + inkc * m
    return out * (1 - g * 0.7) + bone * g * 0.7


def _grain(out, amount=0.06, seed=0):
    rnd = np.random.default_rng(seed)
    noise = rnd.normal(0, amount, out.shape[:2])[..., None]
    return np.clip(out + noise, 0, 1)


_rembg = None


def _subject_mask(img):
    """Alpha for the subject, from a segmentation model (rembg, ISNet, Apache-2.0)."""
    global _rembg
    from rembg import new_session, remove
    if _rembg is None:
        _rembg = new_session('isnet-general-use')
    mask = remove(img, session=_rembg, only_mask=True, post_process_mask=True)
    return np.asarray(mask.convert('L')).astype(np.float32) / 255.0


def grade(name, img, seed=None):
    spec = ART[name]
    kind = spec['kind']
    if kind == 'facade':
        return _grade_facade(name, img, seed)
    if spec.get('crop'):
        # keep the middle of the picture
        k = spec['crop']
        w, h = img.size
        cw, ch = round(w * k), round(h * k)
        img = img.crop(((w - cw) // 2, (h - ch) // 2, (w + cw) // 2, (h + ch) // 2)).resize((w, h), Image.LANCZOS)
    rgb = _arr(img)
    lum = rgb @ np.array([0.299, 0.587, 0.114], np.float32)
    seed = sum(map(ord, name))
    if kind == 'sprite':
        from scipy import ndimage
        alpha = _subject_mask(img)
        solid = alpha > 0.5
        # drop specks: keep only pieces at least 5% the size of the biggest
        labels, n = ndimage.label(solid)
        if n > 1:
            sizes = ndimage.sum(solid, labels, range(1, n + 1))
            keep = np.concatenate([[False], sizes >= sizes.max() * 0.05])
            solid = keep[labels]
            alpha = alpha * ndimage.binary_dilation(solid, iterations=2)
        # grade the subject on its own, so the background doesn't skew the levels
        t = _contrast(np.where(solid, lum, np.median(lum[solid]) if solid.any() else lum), k=6.0, mid=0.5)
        out = _duotone(t, INK, BONE)
        out = _accents(rgb, out)
        out = _grain(out, 0.05, seed)
        # a rough bone-white rim around the cut-out, like a sticker in a zine
        rim = ndimage.binary_dilation(solid, iterations=3) & ~ndimage.binary_erosion(solid, iterations=1)
        rim = np.asarray(Image.fromarray((rim * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.7))) / 255.0
        bone = np.array(BONE, np.float32) / 255
        out = out * (1 - rim[..., None]) + bone * rim[..., None]
        alpha = np.maximum(alpha, rim)
        rgba = np.dstack([out, alpha])
        res = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA')
        bbox = res.getchannel('A').point(lambda a: 255 if a > 24 else 0).getbbox()
        if bbox:
            res = res.crop(bbox)
        return _fit(res, spec['out'], anchor='bottom')
    if kind == 'texture':
        t = _contrast(lum, k=6.5, mid=0.55, gamma=1.15)
        out = _duotone(t, INK, STONE)
        out = _accents(rgb, out, 0.8)
        if spec.get('drips') or spec.get('tears'):
            out = _drips(out, spec, seed)
        out = _grain(out, 0.07, seed)
    else:  # scene, portrait
        t = _contrast(lum, k=7.0, mid=0.5)
        out = _duotone(t, INK, spec.get('light', BONE))
        out = _accents(rgb, out)
        out = _grain(out, 0.06, seed)
    res = Image.fromarray((out * 255).astype(np.uint8), 'RGB')
    if res.size != tuple(spec['out']):
        res = res.resize(spec['out'], Image.LANCZOS).filter(ImageFilter.UnsharpMask(1.2, 60, 2))
    return res


def _grade_facade(name, img, seed):
    """A house front: inked like a wall, its lit windows glowing yellow, cut out along the roofline."""
    from PIL import ImageDraw
    spec = ART[name]
    w, h = img.size
    layout(spec['init'], (w, h), f'{name}-{seed}')
    info = LAYOUT_INFO[f'{name}-{seed}']
    rgb = _arr(img)
    lum = rgb @ np.array([0.299, 0.587, 0.114], np.float32)
    t = _contrast(lum, k=6.0, mid=0.5, gamma=1.05)
    out = _duotone(t, INK, (186, 176, 150))
    out = _accents(rgb, out, 0.6)
    # lit windows: where the model painted the panes bright, near where the layout put a lit window (the
    # model moves windows about a little; a pane it painted dark stays dark)
    near = Image.new('L', (w, h), 0)
    gd = ImageDraw.Draw(near)
    for x0, y0, x1, y1, lit in info['windows']:
        if lit:
            px, py = (x1 - x0) * w * 0.35, (y1 - y0) * h * 0.35
            gd.rectangle([x0 * w - px, y0 * h - py, x1 * w + px, y1 * h + py], fill=255)
    near = np.asarray(near, np.float32) / 255.0
    bright = np.clip((lum - 0.7) / 0.15, 0, 1)
    glow = Image.fromarray((near * bright * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.5))
    glow = np.asarray(glow, np.float32)[..., None] / 255.0
    yellow = np.array(YELLOW, np.float32) / 255
    # lit panes: yellow where the ink is light, the ink's dark lines (mullions, grime) still showing
    out = out * (1 - glow) + (yellow * (0.35 + 0.65 * t[..., None])) * glow
    out = _grain(out, 0.06, sum(map(ord, name)))
    mask = Image.new('L', (w, h), 0)
    ImageDraw.Draw(mask).polygon([(x * w, y * h) for x, y in info['outline']], fill=255)
    rgba = np.dstack([out, np.asarray(mask, np.float32) / 255.0])
    res = Image.fromarray((rgba * 255).astype(np.uint8), 'RGBA')
    return res.resize(spec['out'], Image.LANCZOS)


def _fit(img, size, anchor='bottom'):
    """Scale a cut-out into a fixed canvas, keeping its proportions, feet on the bottom edge."""
    W, H = size
    scale = min(W / img.width, H / img.height)
    img = img.resize((max(1, round(img.width * scale)), max(1, round(img.height * scale))), Image.LANCZOS)
    canvas = Image.new('RGBA', size, (0, 0, 0, 0))
    x = (W - img.width) // 2
    y = H - img.height if anchor == 'bottom' else (H - img.height) // 2
    canvas.paste(img, (x, y), img)
    return canvas


def save(name, img):
    ASSETS.mkdir(parents=True, exist_ok=True)
    path = ASSETS / f'{name}.webp'
    img.save(path, 'WEBP', quality=82, method=6)
    return path


# ---------------- commands ----------------
def contact_sheet(name, seeds, out_dir):
    tiles = []
    for seed in seeds:
        raw = generate(name, seed)
        graded = grade(name, raw, seed).convert('RGBA')
        bgc = Image.new('RGBA', graded.size, (40, 36, 30, 255))
        bgc.alpha_composite(graded)
        tiles.append((raw.resize(graded.size), bgc.convert('RGB')))
    w, h = tiles[0][1].size
    sheet = Image.new('RGB', (w * len(tiles), h * 2), (0, 0, 0))
    for i, (raw, gr) in enumerate(tiles):
        sheet.paste(raw.convert('RGB'), (i * w, 0))
        sheet.paste(gr, (i * w, h))
    out_dir.mkdir(parents=True, exist_ok=True)
    path = out_dir / f'{name}.jpg'
    sheet.thumbnail((1600, 1600))
    sheet.save(path, quality=85)
    return path


def main(argv):
    ap = argparse.ArgumentParser()
    ap.add_argument('command', choices=['candidates', 'build', 'layouts'])
    ap.add_argument('names', nargs='*')
    ap.add_argument('--seeds', nargs='*', type=int, default=[1, 2, 3])
    ap.add_argument('--out', default=str(HERE / 'sheets'))
    args = ap.parse_args(argv)
    names = args.names or list(ART)
    for name in names:
        if name not in ART:
            sys.exit(f'unknown asset {name}')
    if args.command == 'layouts':
        out = Path(args.out)
        out.mkdir(parents=True, exist_ok=True)
        for name in names:
            if ART[name].get('init'):
                layout(ART[name]['init'], ART[name]['size'], f'{name}-1').save(out / f'layout-{name}.jpg')
        return
    if args.command == 'candidates':
        for name in names:
            print(contact_sheet(name, args.seeds, Path(args.out)), flush=True)
    else:
        for name in names:
            seed = SEEDS.get(name, ART[name]['seed'])
            if seed is None:
                print(f'skip {name}: no seed chosen', flush=True)
                continue
            print(save(name, grade(name, generate(name, seed), seed)), flush=True)


if __name__ == '__main__':
    main(sys.argv[1:])
