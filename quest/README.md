# Quest: The Weeping Vault

A small first-person dungeon crawler in the style of *The Quest* (Redshift, 2009 iPhone), set in the dying world of MÖRK BORG and played with its rules.

## Play

Open `index.html` in a browser. There is no build step and nothing to install, and it works on a phone. The only network request is for Google Fonts. The game saves to your browser after every step.

## Controls

| | Phone | Keyboard |
|---|---|---|
| Step forward / back | ▲ / ▼ | ↑ / ↓ or W / S |
| Turn left / right | ↶ / ↷ | ← / → or A / D |
| Step sideways | ◀ / ▶ | Q / E |
| Attack, Scroll, Poultice, Omen, Flee | the fight buttons | 1–5 (Space also attacks) |
| Map, character | Map, Wretch (or tap the mini-map) | M, C |

## The game

You're a wretch, rolled up from the gutter: 3d6 abilities, Toughness + d8 HP, d2 Omens, random weapon, armor and silver. In the town of **Skarnvik** a stranger with a sewn-shut eye wants the **Bell-Tongue**, which hangs from the neck of the **Pale Abbess** at the bottom of the Weeping Vault.

- **Skarnvik**: the Stranger (the quest), the Drowned Lamb (sleep, heal, Get Better) and Thrumm's Stall (weapons, armor, poultices).
- **The Undercroft** (floor 1) and **the Weeping Vault** (floor 2): 16 × 16 mazes with remains to search, black fonts to drink from, hidden pits, two scrolls, and the Abbess.
- **Monsters**: Gutter Rats, Rotting Dead, Rattling Skeletons, Comet Cultists and the Pale Abbess. They hunt you once they see you; zombies are slow, and doors stop them.

## Rules used (MÖRK BORG)

| Rule | In the game |
|---|---|
| Tests | d20 + ability vs DR 12 |
| Attacking | Strength vs the foe's DR. Natural 20 doubles damage; natural 1 gives the foe a free blow |
| Defence | Monsters never roll. You roll Agility vs DR 12 (14 in plate). Natural 20: free counterattack. Natural 1: double damage and your armor cracks a tier |
| Armor | Soaks d2 / d4 / d6. Some foes have armor too |
| Initiative | d6 when a fight starts: 1–3 and they strike first |
| Morale | Rats and cultists roll 2d6 against their morale when badly hurt, and may flee |
| Omens | Spend one for maximum damage on your next hit, or to turn aside your next wound. Back to d2 after sleeping |
| Scrolls | Presence test DR 12, Presence + d4 uses a day. A failure leaves you unable to read more until you sleep |
| 0 HP | Broken: d4 for blacking out, a broken bone or lost eye, haemorrhaging (bleeding), or death |
| Below 0 HP | Dead. The save is gone; roll a new wretch |
| Getting Better | After five kills, sleep at the inn: 6d10 vs max HP for more HP, and d6 per ability to raise or lower it |

## Code

| File | What it holds |
|---|---|
| `js/rules.js` | Dice, character generation, attacks, defence, Broken, morale, Getting Better |
| `js/data.js` | The two floor maps, the bestiary, loot and the shop |
| `js/art.js` | The first-person view, monster and item drawings, the town picture and the map |
| `js/game.js` | Game state, movement, monster AI, combat, the town, saving and input |

All art is drawn in code; there are no image files. Edit the maps in `js/data.js` (the key is at the top of the file).

## Licence note

Quest is an independent production and is not affiliated with Ockult Örtmästare Games or Stockholm Kartell. It is published under the MÖRK BORG Third Party License. MÖRK BORG is copyright Ockult Örtmästare Games and Stockholm Kartell. Before releasing it publicly, check the current licence terms.
