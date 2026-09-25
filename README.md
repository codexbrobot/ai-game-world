# Wretch

A Neverwinter Nights-style 3D game set in the world of MÖRK BORG, playable in a web browser on desktop or phone. See [STORY.md](STORY.md) for the story and the rules.

## Build and play

```sh
npm install
npm run build
```

This writes two files:

- `dist/index.html` — a standalone page. Open it in a browser or host it anywhere (for example GitHub Pages).
- `dist/wretch.html` — the same game as a page fragment, for publishing as a claude.ai artifact.

Everything, including the three.js engine, is bundled into the one file; the only network request is for Google Fonts.

## Controls

- **Tap or click the ground** to walk.
- **Tap an undead** to attack it. You keep attacking once per round while it's in reach.
- **Tap a glinting grave** to search it.
- **Drag** to turn the camera; **pinch or scroll** to zoom.

## Code layout

| File | What it holds |
|---|---|
| `src/rules.js` | MÖRK BORG dice, character generation, attacks, defence, the bestiary |
| `src/world.js` | The graveyard level: ground, fence, graves, trees, gibbet, mausoleum, lights |
| `src/actors.js` | The wretch, zombie and skeleton models and their animation |
| `src/main.js` | Game loop, player and monster behaviour, combat, input handling |
| `src/hud.js` | On-screen interface and the character card |
| `src/textures.js` | Procedural textures (no image files) |
| `src/index.html`, `src/style.css` | Page structure and styling |

The old "AI Village" design is kept in `archive/ai-village/`.
