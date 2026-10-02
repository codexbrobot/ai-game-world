"""Generate Quest's art with an open image model, then grade it into the Mörk Borg look.

    python make_art.py candidates NAME [NAME ...] [--seeds 1 2 3]   # try seeds, write contact sheets
    python make_art.py build [NAME ...]                              # render chosen seeds into ../assets

Generation runs locally on the CPU with LCM Dreamshaper v7 (MIT licence, a few steps per image).
Raw renders are cached in RAW_DIR, so re-grading never re-generates.
"""
import argparse
import hashlib
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
SURFACE = ('straight-on front view, it fills the entire picture, no perspective, '
           'pen and ink drawing, dense crosshatching, woodcut, high contrast')

# kind: sprite (cut out, bone ink), texture (dark stone grade), scene (bone ink, full frame), portrait.
# size: the size generated; out: the size written.
ART = {
    # --- monsters ---
    # 'medieval horror' turns rats into hooded men, so the rats get a plainer style
    'rats': dict(kind='sprite', size=(512, 384), out=(512, 384), seed=None,
                 prompt=f'three huge mangy sewer rats with long naked tails and yellow eyes, animals, side view, '
                        f'on the ground, {ISOLATED}, black ink illustration, heavy crosshatching, rough woodcut, '
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
    # in ink (image-to-image), keeping the flat, straight-on structure. The edge is trimmed (crop).
    'wall-stone': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='blocks',
                       prompt=f'a dungeon wall of large rough stone blocks with deep cracks, {SURFACE}'),
    'wall-ossuary': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='skulls',
                         prompt=f'a catacomb wall of stacked human skulls and long bones, {SURFACE}'),
    'wall-relief': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='relief',
                        prompt=f'a stone wall with a carved relief of a weeping saint in a niche, {SURFACE}'),
    'door': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.96, init='door',
                 prompt=f'a heavy arched wooden door with iron bands and rivets in a stone wall, {SURFACE}'),
    'floor': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='flags',
                  prompt=f'a cracked stone flagstone floor with dirt and bone fragments, {SURFACE}'),
    'ceiling': dict(kind='texture', size=(512, 512), out=(512, 512), seed=None, crop=0.94, init='roots',
                    prompt=f'rough dark stone blocks with hanging roots and cobwebs, {SURFACE}'),
    # --- scenes ---
    'town': dict(kind='scene', size=(768, 416), out=(1280, 693), seed=None,
                 prompt=f'a crooked medieval town at night under a huge burning yellow comet, leaning houses with glowing '
                        f'yellow windows, a gallows with a hanged man, a crooked church spire, muddy street, {STYLE}'),
    'title': dict(kind='scene', size=(512, 768), out=(640, 960), seed=None,
                  prompt=f'an undead abbess with a spiked iron crown rising from a crypt, weeping black tears, '
                         f'a burning yellow comet in the black sky, {STYLE}'),
    'inn': dict(kind='scene', size=(512, 384), out=(512, 384), seed=None,
                prompt=f'a grim medieval tavern interior with a dying hearth fire and drunken peasants, {STYLE}'),
    'stall': dict(kind='scene', size=(512, 384), out=(512, 384), seed=None,
                  prompt=f'a ragged market stall selling rusty swords, axes and dented armor, {STYLE}'),
    'stranger': dict(kind='scene', size=(512, 384), out=(512, 384), seed=None,
                     prompt=f'portrait of a hooded stranger with one eye sewn shut, thin cruel smile, {STYLE}'),
    'stair': dict(kind='scene', size=(512, 384), out=(512, 384), seed=None,
                  prompt=f'worn stone stairs descending into a dark crypt entrance under a ruined arch, {STYLE}'),
    'grave': dict(kind='scene', size=(512, 384), out=(512, 384), seed=None,
                  prompt=f'a fresh grave with a crooked wooden cross and a crow, black sky, {STYLE}'),
}

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
    'skeleton': 2, 'zombie': 2, 'cultist': 1, 'abbess': 1,
    'remains': 2, 'remains-scroll': 1, 'font': 3, 'relic': 2,
    'wretch-0': 1, 'wretch-1': 1, 'wretch-2': 1, 'wretch-4': 1, 'wretch-5': 1, 'wretch-6': 1,
}


# ---------------- layouts for image-to-image ----------------
def _blocks(d, rnd, w, h, rows, tone=(95, 150), mortar=28, x0=0, y0=0):
    y = y0
    row_h = (h - y0) / rows
    for r in range(rows):
        rh = row_h * rnd.uniform(0.85, 1.15)
        x = x0 - rnd.uniform(0, 80)
        while x < w:
            bw = rnd.uniform(70, 170)
            g = rnd.randint(*tone)
            d.rectangle([x + 4, y + 4, x + bw - 4, y + rh - 4], fill=g)
            # a little shading on each block
            d.rectangle([x + 4, y + rh - 14, x + bw - 4, y + rh - 4], fill=max(0, g - 35))
            d.line([x + 6, y + 6, x + bw - 6, y + 6], fill=min(255, g + 40), width=3)
            x += bw
        d.line([0, y + rh, w, y + rh], fill=mortar, width=7)
        y += rh


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
    noise = np.random.default_rng(len(seed_name)).normal(0, 14, (h, w))
    arr = np.clip(np.asarray(img, np.float32) + noise, 0, 255).astype(np.uint8)
    return Image.fromarray(arr).filter(ImageFilter.GaussianBlur(1.2)).convert('RGB')


# ---------------- generation ----------------
_pipe = None
_img2img = None
STRENGTH = 0.62  # how far image-to-image may stray from the drawn layout


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
    key = hashlib.sha1(f"{spec['prompt']}|{spec['size']}|{spec.get('init')}|{STRENGTH if spec.get('init') else ''}"
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
        img = _img2img(prompt=spec['prompt'], image=init, strength=STRENGTH, num_inference_steps=steps,
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


def grade(name, img):
    spec = ART[name]
    kind = spec['kind']
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
        t = _contrast(lum, k=5.5, mid=0.55, gamma=1.15)
        out = _duotone(t, INK, STONE)
        out = _accents(rgb, out, 0.8)
        out = _grain(out, 0.05, seed)
    else:  # scene, portrait
        t = _contrast(lum, k=7.0, mid=0.5)
        out = _duotone(t, INK, BONE)
        out = _accents(rgb, out)
        out = _grain(out, 0.06, seed)
    res = Image.fromarray((out * 255).astype(np.uint8), 'RGB')
    if res.size != tuple(spec['out']):
        res = res.resize(spec['out'], Image.LANCZOS).filter(ImageFilter.UnsharpMask(1.2, 60, 2))
    return res


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
        graded = grade(name, raw).convert('RGBA')
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
            print(save(name, grade(name, generate(name, seed))), flush=True)


if __name__ == '__main__':
    main(sys.argv[1:])
