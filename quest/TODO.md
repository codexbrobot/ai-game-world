# Fix list

Small things to fix later.

- [ ] **The pit by the Warden's door traps you.** In the Brine Gaol, the chasm at row 10, columns 8–9 (`x` in the Gaol's `heights` in `js/data.js`) has no way out, so falling in can end a run that should go on. Put a ladder (or a climbable wall) in it so you can crawl out. Standing in it could cost 1 HP every 3 seconds or so, but it must never stop you finishing the game.
- [ ] **Footsteps in free movement are too loud and too ticky.** In step movement you hear one per square, but walking freely fires one roughly every world unit (`stepped()` in `src/engine.js`, from the head-bob phase), so it becomes a fast, loud tick-tick-tick. The sound itself (`FX.step` in `js/sound.js`, out at gain 1.7) is a sharp noise click plus a thump. Redo it: much quieter, softer and duller (a scuff on stone, a little different each time), fewer of them when walking freely, and maybe a recorded set of footsteps (stone, wet stone, wading, cobbles in the rain) like the monsters have now.
