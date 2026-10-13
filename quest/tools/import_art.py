"""Bring new pictures into the game (made with ChatGPT, or anything else).

    python3 quest/tools/import_art.py                 # everything in quest/art-new/
    python3 quest/tools/import_art.py zombie.png ...  # or these files / folders
      --zine      grade them into the game's ink-and-bone look (as the current art is)
      --cutout    remove a plain background where a transparent one is needed (needs: pip install rembg)
      --dry-run   say what would happen, write nothing
      --to DIR    write somewhere other than quest/assets/

Each picture is named like the file it replaces: zombie.png becomes assets/zombie.webp. Its size and
whether it needs a transparent background are taken from that file (see ART.md). Figures and things are
trimmed to what isn't transparent and stood on the bottom edge; house fronts are trimmed and fitted to the
wall; textures, faces and pictures are cropped from the middle to fill.
"""
import argparse
import difflib
import sys
from pathlib import Path

from PIL import Image, ImageOps

HERE = Path(__file__).resolve().parent
QUEST = HERE.parent
ASSETS = QUEST / 'assets'
EXTS = {'.png', '.webp', '.jpg', '.jpeg'}


def target(name):
    """The size, and whether it's transparent, of the asset a picture replaces."""
    f = ASSETS / f'{name}.webp'
    if not f.exists():
        return None
    im = Image.open(f)
    return im.size, im.mode in ('RGBA', 'LA') and im.getchannel('A').getextrema()[0] < 250


def transparent(im):
    if im.mode == 'P' and 'transparency' in im.info:
        im = im.convert('RGBA')
    return im.mode in ('RGBA', 'LA') and im.getchannel('A').getextrema()[0] < 250


def trim(im):
    box = im.getchannel('A').point(lambda a: 255 if a > 24 else 0).getbbox()
    return im.crop(box) if box else im


def stand(im, size):
    """Inside the box, keeping its shape, centred, on the bottom edge."""
    W, H = size
    k = min(W / im.width, H / im.height)
    im = im.resize((max(1, round(im.width * k)), max(1, round(im.height * k))), Image.LANCZOS)
    out = Image.new('RGBA', size, (0, 0, 0, 0))
    out.paste(im, ((W - im.width) // 2, H - im.height), im)
    return out


def zine(im, light):
    """The current art's look: high-contrast ink on bone (or stone, for surfaces), yellow and pink kept."""
    import numpy as np
    sys.path.insert(0, str(HERE))
    import make_art as m
    rgb = m._arr(im.convert('RGB'))
    lum = rgb @ np.array([0.299, 0.587, 0.114], np.float32)
    out = m._accents(rgb, m._duotone(m._contrast(lum, k=6.0, mid=0.5), m.INK, light))
    out = m._grain(out, 0.05, 7)
    res = Image.fromarray((out * 255).astype('uint8'), 'RGB')
    if im.mode == 'RGBA':
        res.putalpha(im.getchannel('A'))
    return res


def bring(src, args):
    name = src.stem
    t = target(name)
    if not t:
        close = difflib.get_close_matches(name, [f.stem for f in ASSETS.glob('*.webp')], n=3)
        return f'✗ {src.name}: the game has no picture called “{name}”' + (f' (did you mean {", ".join(close)}?)' if close else '')
    size, alpha = t
    im = Image.open(src)
    im = im.convert('RGBA') if (im.mode in ('RGBA', 'LA', 'P')) else im.convert('RGB')
    how = []
    if alpha and not transparent(im):
        if not args.cutout:
            return f'✗ {src.name}: needs a transparent background (ask for one, or use --cutout)'
        from rembg import remove  # pip install rembg
        im = remove(im.convert('RGB')).convert('RGBA')
        how.append('background removed')
    if alpha:
        im = trim(im.convert('RGBA'))
        if name.startswith(('front-', 'facade-')):
            im = im.resize(size, Image.LANCZOS)
            how.append('fitted to the wall')
        else:
            im = stand(im, size)
            how.append('stood on the bottom edge')
    else:
        im = ImageOps.fit(im.convert('RGB'), size, Image.LANCZOS)
        how.append('cropped to fill')
    if args.zine:
        im = zine(im, (150, 141, 120) if not alpha and size[0] == size[1] else (235, 228, 208))
        how.append('graded')
    out = Path(args.to) / f'{name}.webp'
    if not args.dry_run:
        out.parent.mkdir(parents=True, exist_ok=True)
        im.save(out, 'WEBP', quality=88, method=6)
    return f'✓ {src.name} → {out.relative_to(Path(args.to).parent) if Path(args.to).parent in out.parents else out} ({size[0]}×{size[1]}{", transparent" if alpha else ""}; {", ".join(how)}){" [dry run]" if args.dry_run else ""}'


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split('\n')[0])
    ap.add_argument('paths', nargs='*')
    ap.add_argument('--zine', action='store_true')
    ap.add_argument('--cutout', action='store_true')
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--to', default=str(ASSETS))
    args = ap.parse_args(argv)
    paths = [Path(p) for p in args.paths] or [QUEST / 'art-new']
    files = []
    for p in paths:
        files += sorted(f for f in p.iterdir() if f.suffix.lower() in EXTS) if p.is_dir() else [p]
    if not files:
        print(f'Nothing to bring in. Put pictures in {QUEST / "art-new"} (named like the files in ART.md).')
        return 1
    results = [bring(f, args) for f in files]
    print('\n'.join(results))
    bad = sum(r.startswith('✗') for r in results)
    print(f'\n{len(results) - bad} brought in, {bad} not.' + ('' if args.dry_run or not len(results) - bad else ' To put the game page on the web again, ask Claude to republish it.'))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
