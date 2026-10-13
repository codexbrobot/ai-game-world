# Browser tests

These play the real game in a headless Chromium (phone-sized, step movement, fast dice) and check what
happens: every DM box, every scene, the fights, the saves. Each spec prints a line per check, ✓ or ✗ with
what it saw, and the run ends with a count.

## Running them

Once, to set up:

```sh
npm install
npx playwright install chromium
```

Then, from the repository root:

```sh
npm run test:quest                       # build the engine, then run every spec (about 20 minutes)
node quest/tests/run.cjs hollow broken    # just these (names without the number)
node quest/tests/run.cjs --shots shots/   # and keep screenshots
```

The runner serves `quest/` itself on a free port, so nothing else needs to be running. It exits non-zero
if anything fails, including any error in the page.

## The specs

| Spec | What it plays |
|---|---|
| `01-gaol` | The Brine Gaol from waking to the grate: the cell door, the one you knew, the living prisoner, the ledger, the evidence room, the Warden |
| `02-town` | Every building and person in Skarnvik, other people's homes, the nest of rags, and new wretches of each class waking at home |
| `03-hours` | Day and night (the clock, sleep, the watch and its toll, the drowned and their bounty) and what the Gaol left behind (the freed man, the kin, the ledger, the hanged man) |
| `04-saves` | An old save carrying on in today's town; black noon after the fourth Misery |
| `05-hollow` | Saint Agne's Hollow, from the Stranger and the gravedigger's key to the saint's three choices and back |
| `06-broken` | The Broken table, each result, the haemorrhage countdown, death below 0, in and out of a fight, and the Settings choice |
| `07-battle` | Fallen foes stay gone while the fight goes on |
| `08-wretches` | Rolling both again, and making your own wretches from the book |
| `09-voice` | Every paragraph finds its recording; the narrator reads the waking box in order, stops when it closes, reads the Broken table with a real name in it, and Settings turns him off |
| `10-sound` | The monsters' recorded voices load, and each place's loop takes over from the synthesized bed |

## Writing one

A spec is a file in `specs/` exporting `{ name, run(t) }`. `t` (see `lib.cjs`) opens the game (`t.open()`,
`t.newGame()`, `t.escaped()`), moves you (`t.tp(floor, x, y, 'N')`, `t.step()`, `t.bump()`), answers
the DM (`t.waitModal()`, `t.choose(/label/)`, `t.closeAll()`), fights (`t.fight()`), reads the run
(`t.S(fn)`, `t.party()`, `t.flags()`) and checks (`t.check(ok, 'what should be true', whatWasSeen)`).
Specs reach into the game through the debug hooks at the end of `js/game.js` (`Q.debug()`,
`Q.debugEnter`, `Q.debugHour`, `Q.debugHurt`, `Q.debugDie`). Where a result is random, a spec either sets
it (replacing `Q.broken` or `Q.defend` for the test) or checks both outcomes.
