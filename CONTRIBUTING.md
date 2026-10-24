# Working on the games

For anyone changing this repo: people, Claude, or any other AI. Most of the work is on **Quest** ([`quest/`](quest/README.md)), the Mörk Borg dungeon crawler.

## Branches

- **`main`** is the stable copy. The live game is published from it. Nothing is pushed to `main` directly.
- **Work on a branch of your own**, one per feature or fix, named for what it does (`warden-tone-down`, `prisoner-lock`). Push to it as often as you like.
- **When it's done and the tests pass, open a pull request into `main`.** Say what changed and why, and anything that still needs doing. It's merged once the full suite passes on it.
- If `main` moved on while you worked, merge `main` into your branch (don't rebase a branch someone else may have) and run the tests again.

## Before you open the pull request

1. **Read first.** [`quest/README.md`](quest/README.md) explains how the game works and how the code is laid out; [`quest/TODO.md`](quest/TODO.md) says what's done, what's next, and what is still being worked out; [`STORY.md`](STORY.md) has the story; [`quest/tests/README.md`](quest/tests/README.md) says what each test checks.
2. **Build.** `npm install`, then `npm run build:quest`. Edit `quest/src/engine.js`, never `quest/js/engine.js`, which is built from it. `quest/js/voice-data.js` and `quest/js/sfx-data.js` are generated too.
3. **Test.** `npm run test:quest` runs the whole suite (about 25 minutes); `node quest/tests/run.cjs 17-inventory.cjs` runs one spec. A change that breaks a test isn't done. A new feature comes with a spec that checks it.
4. **Docs.** Update `quest/README.md`, `quest/TODO.md` (tick what you finished, note what's left) and `quest/tests/README.md` for a new spec.

## Rules

- **Don't change `Q.VERSION` and don't publish.** Claude bumps the version and publishes the live game from `main`.
- **Mörk Borg:** its rules and mechanics are free to use; the book's text, art and logo are not. Don't copy wording from the book.
- **Narration:** every DM box is read aloud from recordings made with ElevenLabs. If you add or change the words of a box (`dm.say` in `quest/js/story.js`, `say` in `quest/js/game.js`), say so in the pull request: it needs recording (`quest/tools/voice/`), which costs credits. Boxes that list things (the journal, the memorial) are passed `quiet: true` and aren't read.
- **Decisions already made:**
  - House rules stay: a fumbled attack gives the foe a free blow; a critical hit doubles the damage (it doesn't break the foe's armor).
  - New wretches start with none of the dead ones' things.
- **Ideas rather than changes:** add them to `quest/TODO.md` on your branch, or write them up in the pull request.
