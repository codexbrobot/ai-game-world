"""Cut game pictures out of a sheet of ink drawings on white paper (the kind another AI hands over: several
subjects on one page, with titles and labels).

    python3 quest/tools/cut_sheet.py SPEC.json [--to DIR]

SPEC.json lists the pieces: [{"src": "sheet.png", "box": [x0, y0, x1, y1], "erase": [[x0, y0, x1, y1], ...],
"name": "guard", "fit": "stand" | "held-right" | "held-left" | "fill", "unyellow": [x0, y0, x1, y1]}], in the
sheet's own pixels (unyellow: wipe a yellow title bar's highlight from that part of the page, where it touches the
drawing). A picture that already has a transparent background keeps it. Each piece
is cropped, its labels erased, the paper around it made transparent (the paper inside it, between the strokes,
stays: a flood from the edges that can't slip through gaps narrower than SEAL), then fitted to the size of the
game's picture of that name (quest/assets/<name>.webp) and written there as webp:
  stand       stood on the bottom edge, centred (monsters, people)
  held-right  the weapon hand: turned upright by "tilt" degrees (clockwise) so the arm rises from the bottom
              of the screen, filling the height, the sleeve running off the bottom edge
  held-left   in the bottom-left corner
  fill        cropped to fill, paper kept (portraits)
"""
import argparse
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter, ImageOps
from scipy import ndimage

QUEST = Path(__file__).resolve().parent.parent
PAPER = 226  # a pixel whose darkest channel is above this is paper (yellow keeps its blue channel low)
SEAL = 6     # gaps in the strokes narrower than about twice this don't let the outside paper in


def cut_out(im):
    a = np.asarray(im.convert('RGB')).astype(np.int16)
    paper = a.min(axis=2) > PAPER
    walls = ndimage.binary_dilation(~paper, iterations=SEAL)
    lab, _ = ndimage.label(~walls)
    edge = set(np.unique(np.concatenate([lab[0], lab[-1], lab[:, 0], lab[:, -1]]))) - {0}
    outside = np.isin(lab, list(edge))
    outside = ndimage.binary_dilation(outside, iterations=SEAL + 1) & paper  # back up to the strokes
    keep = ~outside
    # stray specks far from the drawing go too
    lab2, n = ndimage.label(keep)
    if n:
        sizes = ndimage.sum(keep, lab2, range(1, n + 1))
        keep &= np.isin(lab2, [i + 1 for i, s in enumerate(sizes) if s >= 24])
    alpha = Image.fromarray((keep * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.7))
    out = im.convert('RGBA')
    out.putalpha(alpha)
    return out


def fit(im, size, how, tilt=0):
    W, H = size
    if how == 'fill':
        return ImageOps.fit(im.convert('RGB'), size, Image.LANCZOS)
    if tilt:
        im = im.rotate(-tilt, resample=Image.BICUBIC, expand=True)
    box = im.getchannel('A').point(lambda v: 255 if v > 24 else 0).getbbox()
    im = im.crop(box)
    if how == 'held-right':
        # as tall as the frame and a little more: the sleeve runs off the bottom
        k = min(H * 1.12 / im.height, W / im.width * 1.0 if im.width * H * 1.12 / im.height > W else 9)
        im = im.resize((max(1, round(im.width * k)), max(1, round(im.height * k))), Image.LANCZOS)
        out = Image.new('RGBA', size, (0, 0, 0, 0))
        out.paste(im, ((W - im.width) // 2, 0), im)
        return out
    k = min(W / im.width, H / im.height)
    im = im.resize((max(1, round(im.width * k)), max(1, round(im.height * k))), Image.LANCZOS)
    out = Image.new('RGBA', size, (0, 0, 0, 0))
    x = {'stand': (W - im.width) // 2, 'held-right': W - im.width, 'held-left': 0}[how]
    out.paste(im, (x, H - im.height), im)
    return out


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('spec')
    ap.add_argument('--to', default=str(QUEST / 'assets'))
    args = ap.parse_args(argv)
    spec_path = Path(args.spec)
    for p in json.loads(spec_path.read_text()):
        sheet = Image.open(spec_path.parent / p['src'])
        own_alpha = sheet.mode == 'RGBA' and sheet.getchannel('A').getextrema()[0] < 250
        page = sheet.convert('RGBA' if own_alpha else 'RGB')
        for r in p.get('erase', []):
            page.paste((255, 255, 255, 0) if own_alpha else (255, 255, 255), tuple(r))
        if p.get('unyellow'):
            a = np.asarray(page).copy()
            x0, y0, x1, y1 = p['unyellow']
            reg = a[y0:y1, x0:x1].astype(np.int16)
            yellow = (reg[..., 0] > 170) & (reg[..., 1] > 140) & (reg[..., 2] < 140)
            reg[yellow, :3] = 255
            a[y0:y1, x0:x1] = reg.astype(np.uint8)
            page = Image.fromarray(a)
        piece = page.crop(tuple(p['box']))
        target = QUEST / 'assets' / f"{p.get('size_of', p['name'])}.webp"
        size = Image.open(target).size if target.exists() else tuple(p['size'])
        out = fit(piece if p['fit'] == 'fill' or own_alpha else cut_out(piece), size, p['fit'], p.get('tilt', 0))
        dest = Path(args.to) / f"{p['name']}.webp"
        dest.parent.mkdir(parents=True, exist_ok=True)
        out.save(dest, 'WEBP', quality=88, method=6)
        print(f"✓ {p['name']} ({size[0]}×{size[1]}, {p['fit']}) from {p['src']}")


if __name__ == '__main__':
    sys.exit(main())
