# Fix list

Small things to fix later.

- [ ] **The pit by the Warden's door traps you.** In the Brine Gaol, the chasm at row 10, columns 8–9 (`x` in the Gaol's `heights` in `js/data.js`) has no way out, so falling in can end a run that should go on. Put a ladder (or a climbable wall) in it so you can crawl out. Standing in it could cost 1 HP every 3 seconds or so, but it must never stop you finishing the game.
