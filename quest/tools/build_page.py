"""Bundle Quest into a single page for publishing as a claude.ai artifact.

    python build_page.py      # writes ../dist/quest.html

The artifact host wraps the page in its own <html>, <head> and <body>, so the page is a fragment:
the title, the Google Fonts link, the CSS and every script inlined. The pictures stay as files and
are published next to the page under assets/.
"""
import re
from pathlib import Path

QUEST = Path(__file__).resolve().parent.parent


def main():
    html = (QUEST / 'index.html').read_text()
    head = re.search(r'<head>(.*?)</head>', html, re.S).group(1)
    body = re.search(r'<body>(.*?)</body>', html, re.S).group(1)
    title = re.search(r'<title>.*?</title>', head).group(0)
    fonts = re.findall(r'<link rel="stylesheet" href="https://fonts\.googleapis\.com[^"]*">', head)
    css = (QUEST / 'style.css').read_text()

    def inline(match):
        js = (QUEST / match.group(1)).read_text().replace('</script', '<\\/script')
        return f'<script>\n{js}</script>'

    body = re.sub(r'<script src="([^"]+)"></script>', inline, body)
    page = '\n'.join([title, *fonts, f'<style>\n{css}</style>', body.strip()]) + '\n'
    out = QUEST / 'dist' / 'quest.html'
    out.parent.mkdir(exist_ok=True)
    out.write_text(page)
    print(f'{out} ({len(page) // 1024} KB); publish it with assets/')


if __name__ == '__main__':
    main()
