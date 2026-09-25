# Wretch — Story Bible

A Neverwinter Nights-style game set in the dying world of MÖRK BORG, using its rules.

## Premise

The world is ending. A comet has burned in the sky for nine nights. In the drowned town of **Skarnvik** the gates will be chained at the next dark moon, and nobody left inside will see another spring.

You are a **wretch**: nobody, rolled up fresh from the gutter with random abilities, a random weapon and a random piece of armor. A stranger with a sewn-shut eye has hired you:

> "Beneath the Vorn mausoleum lies the Reliquary of the Hollow Saint. Bring it to me and you will have a purse of gold and a seat on the last cart out."

## Level 1: The Vorn Graveyard (built)

About 110 × 130 m inside a ruined outer wall, with a dead wood pressing in outside. A winding main path runs north from the gate to the walled court at the heart of the graveyard; side paths branch off into coves.

| Area | What's there |
|---|---|
| **The Lych Gate** | Where you enter. The only way in, and no way back. |
| **The Pauper's Field** | Wooden crosses and long mass-grave mounds. Zombies. |
| **Chapel of Saint Gall** (west) | Roofless ruin, broken pews, fallen beams. Someone still lights the altar candles. Skeletons. |
| **The Charnel Pits** (east) | Fenced bone pits and a bone cart. Skeletons. |
| **The Old Rows** (centre) | Dense old headstones either side of the main path. |
| **Avenue of the Crypts** (east) | Six locked family crypts along an avenue of obelisks. |
| **Sexton's Hollow** (west) | The gravedigger's hut, lamp still lit, and the gibbet. |
| **The Drowned Graves** (north-west) | A black pool swallowing sinking headstones. Zombies. |
| **The Fallen Bell** (north-east) | A ruined bell tower; the cracked funeral bell lies in the grass. |
| **The Vorn Court** (north-centre) | A walled court with guards at the gate and the **Vorn Mausoleum**: bronze doors bound in chain, three keyholes shaped like weeping eyes, something breathing inside. **It cannot be entered yet.** |

Each area announces itself the first time you enter it, and appears by name on the Map. Sixteen disturbed graves glint with something worth digging for: silver, a black poultice, a black feather (an Omen) or a cold hand that grabs you.

The layout lives in `src/map.js` and can be edited without touching the building code.

## Open threads for the next levels

- **The three keys.** Where are the weeping-eye keys? (Candidates: the gibbet cage, the sexton's house, the Vorn family's last living heir in Skarnvik.)
- **Who lit the candles** on the mausoleum steps, and who still mourns the Vorns?
- **The stranger with the sewn-shut eye.** What does the Reliquary of the Hollow Saint actually do, and why can't the stranger fetch it alone?
- **What is breathing** behind the doors?

## Rules used (MÖRK BORG, adapted to real time)

| Rule | How the game uses it |
|---|---|
| Abilities | Strength, Agility, Presence, Toughness, each rolled 3d6 → −3 to +3 |
| Hit points | Toughness + d8 (minimum 1) |
| Omens | d2 at the start. Spend one to make your next hit deal maximum damage, or to turn your next wound aside |
| Tests | d20 + ability vs DR 12 |
| Attacking | Strength test. Natural 20 doubles damage. Natural 1 fumbles and costs you a round |
| Defence | Monsters never roll. You roll Agility vs DR 12 (DR 14 in heavy armor). Natural 20 gives a free counterattack. Natural 1 doubles the damage and cracks your armor a tier |
| Armor | Tier 1 −d2, tier 2 −d4, tier 3 −d6 damage |
| 0 HP | Broken: roll d4 (senseless, broken bone, lost eye, or bleed out) |
| Below 0 HP | Dead. Roll a new wretch |
| Rounds | About 2 seconds of real time; you auto-attack once per round while engaged |

Adaptations: ranged starting weapons (bow, crossbow) are left out until ranged combat exists. Class options are planned for a later build; for now every wretch is classless.

## Licence note

Wretch is an independent production and is not affiliated with Ockult Örtmästare Games or Stockholm Kartell. It is published under the MÖRK BORG Third Party License. MÖRK BORG is copyright Ockult Örtmästare Games and Stockholm Kartell. Before releasing publicly, check the current licence terms and add the creator's name to the attribution line.
