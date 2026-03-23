# Plan: Make AI Village More Eventful, Exploration-Rich & Story-Driven

## Overview

The game has solid rendering, modular systems, and AI integration — but systems are siloed. Events don't cascade, exploration has no rewards, villagers don't grow, and there's no narrative arc. This plan adds **5 new systems** and **enhances 3 existing ones** to create emergent, story-rich gameplay.

---

## Phase 1: Discoverable Points of Interest (POI System)

**File: `client/js/poi.js` (new)**

Place 6–10 POIs on the map during generation, hidden under fog-of-war. When a villager reveals one, trigger a unique event.

### POI Types:
| POI | Tile | Effect When Discovered |
|-----|------|----------------------|
| Ancient Shrine | RUINS | Faith +20, unlock "Blessing" prayer event |
| Bandit Camp | FOREST edge | Spawns 3 goblins immediately + loot chest |
| Crystal Cave | STONE adjacent | +15 iron, permanent +1 miner strength |
| Abandoned Library | RUINS | Unlock a random "lore scroll" (story fragment) |
| Fairy Ring | HERBS | Heal all villagers +5 HP, faith +5 |
| Dragon's Hoard | Deep DARK edge | Boss fight → massive loot or TPK |
| Refugee Camp | PATH far | +2 new villagers with random classes |
| Plague Pit | WATER adjacent | Disease event — villagers lose 1 HP/tick for 4 ticks unless herbs spent |

### Implementation:
- Add `POI_DEFS` registry with spawn rules (min distance from center, biome requirements)
- In `map.js:generateMap()`, scatter POIs using seeded RNG, store in `pois[]` array
- In `exploration.js:revealArea()`, check if newly-revealed tiles contain a POI → fire `onPOIDiscovered` callback
- POI discovery triggers a log entry + optional AI villager reaction thought
- Each POI is one-time only (mark as `discovered: true`)

### Changes:
- `map.js` — Add POI placement in `generateMap()`, return `pois` in result
- `exploration.js` — Add POI discovery check in `updateVisibility()`
- `main.js` — Wire POI callbacks, handle discovery effects
- `hud.js` — Draw POI markers on minimap once discovered

---

## Phase 2: Quest / Story Arc System

**File: `client/js/quests.js` (new)**

A 3-act narrative structure with branching quests that give the player goals and create dramatic tension.

### Act Structure:
- **Act I (Days 1–7): Settlement** — Survive, build, explore nearby. Tutorial quests.
- **Act II (Days 8–18): Expansion** — Discover lore scrolls, face harder monsters, make moral choices.
- **Act III (Day 19+): Reckoning** — Boss encounters, final story revelation, village destiny.

### Quest Types:
1. **Main Quests** (1 per act, sequential):
   - Act I: "Secure the Perimeter" — Build a watchtower + kill 5 monsters
   - Act II: "The Lost Chronicle" — Find 3 of 5 lore scrolls from Abandoned Libraries
   - Act III: "The Shadow King" — Defeat the boss at Dragon's Hoard POI

2. **Side Quests** (triggered by events/POIs):
   - "Heal the Sick" — Spend 5 herbs to cure plague pit disease
   - "The Merchant's Request" — Gather 20 iron for the wandering merchant → reward: 2 swords
   - "Bandit Diplomacy" — When bandit camp found, choose: fight (loot) or parley (recruit 1 goblin ally)
   - "The Zealot's Vision" — If faith > 80, a Zealot villager demands building a second chapel

3. **Emergent Micro-Quests** (AI-generated):
   - When a villager with Dreamer personality discovers a POI, the AI generates a 1-sentence personal quest
   - Example: "Elara dreams of returning to the Crystal Cave to mine a gemstone for her necklace"
   - Completing it (sending villager back) grants +2 charisma

### Implementation:
- `QUEST_DEFS` — Registry with `id`, `act`, `triggerCondition()`, `objectives[]`, `rewards`, `choices[]`
- Quest state tracked in `gameState.quests: { active: [], completed: [], failed: [] }`
- Each tick, check active quest objectives against game state
- Quest completion fires log event + faith bonus + optional AI narrative
- Choices stored for Act III resolution (good/evil path affects ending)

### Changes:
- `quests.js` (new) — Quest engine: definitions, state machine, objective checking
- `main.js` — Tick quest checks, wire quest triggers to events/POIs
- `events-system.js` — Add quest-triggering events (e.g., "mysterious_voice" at dawn on day 8)
- `ai.js` — Add `getQuestNarrative()` for AI-generated quest descriptions

---

## Phase 3: Monster Loot & Equipment Drops

**Enhance: `monsters.js`, `inventory.js`, `combat.js`**

Killing monsters should feel rewarding. Add a loot table system.

### Loot Tables:
| Monster | Drops |
|---------|-------|
| Skeleton | Bone Shield (10%), 2 iron (30%) |
| Goblin | Crude Sword (15%), 3 food (40%) |
| Orc | War Axe (10%), 5 iron (25%) |
| Vampire | Blood Amulet (faith+5, 8%), 3 herbs (30%) |
| Demon | Infernal Blade (20%), 10 iron (40%) |
| Wolf Rider | Wolf Pelt (+1 speed, 15%), 2 food (50%) |
| Death Knight | Dark Plate (+3 HP, 5%) |
| Lich | Spell Tome (reveal 10-tile radius, 10%) |

### Implementation:
- Add `LOOT_TABLES` to `monsters.js` — array of `{ item, chance }` per monster type
- In `combat.js:processCombatTick()`, when monster dies → roll loot → add to `gameState.resources` or villager inventory
- Equipment drops auto-equip to the killing villager if slot is empty
- Log loot drops as discovery-type events
- Lich's Spell Tome calls `revealArea()` centered on the kill location

### Changes:
- `monsters.js` — Add `LOOT_TABLES`, `rollLoot(monsterType)` function
- `combat.js` — Call `rollLoot()` on monster death, apply results
- `inventory.js` — Add new item definitions (Bone Shield, Blood Amulet, etc.)
- `main.js` — Wire loot to resource tracking and log

---

## Phase 4: Villager Relationships & Morale

**Enhance: `villager.js`, `ai.js`**

Villagers should feel alive — they form bonds, argue, and react to events.

### Relationship System:
- Each villager gets `relationships: Map<villagerName, number>` (-100 to +100)
- Working near another villager for 3+ ticks: +5 bond
- Surviving combat together: +15 bond
- Villager death: all villagers who had bond > 20 lose 5 faith, enter "mourning" state for 3 ticks
- Bond > 50: "Friends" — work 20% faster when adjacent
- Bond < -30: "Rivals" — 10% chance to refuse working near each other

### Morale System:
- Individual `morale` stat (0–100, starts 60)
- Morale modifiers:
  - Discovery event: +10
  - Monster kill: +5
  - Ally death: -15
  - Starvation (food < villagers): -5/tick
  - Quest completion: +20
  - Bad omen: -10
- Low morale (< 25): villager works 50% slower, may desert (5% per tick at night)
- High morale (> 80): +1 to all work output

### Implementation:
- Add `morale` and `relationships` to villager objects in `createVillagers()`
- New `updateMorale()` called each tick — applies modifiers from recent events
- Morale influences work speed in `updateVillagers()`
- AI thought system uses morale as context: low-morale villagers have darker thoughts
- Desertion: remove villager from array, log "X has fled into the night"

### Changes:
- `villager.js` — Add morale/relationship fields, `updateMorale()`, friendship speed bonus
- `ai.js` — Include morale in thought prompts
- `main.js` — Call `updateMorale()` per tick, handle desertion
- `hud.js` — Show morale icon in inspect panel (green/yellow/red face)

---

## Phase 5: Exploration Incentive — Scout Missions

**Enhance: `exploration.js`, add scout UI**

Give the player a reason to push into fog and a way to direct exploration.

### Scout Mission System:
- Player can tap an unexplored area on the minimap → assigns nearest Hunter/Knight as scout
- Scout walks toward the target, revealing fog along the way
- Upon reaching destination, scout enters "scouting" state for 2 ticks (wider reveal radius)
- If scout finds a POI, trigger discovery event
- If scout encounters monsters in fog, combat starts (ambush: monster gets first strike)

### Fog Ambush Mechanic:
- Monsters in unexplored tiles are invisible
- When a villager's sight reveals them, 50% chance of "ambush" — monster deals double first hit
- Scouts (Hunters) reduce ambush chance to 20%
- Knights are immune to ambush

### Implementation:
- Add `scoutTarget` field to villager objects
- Minimap click handler: if clicking unexplored area, find nearest scout-capable villager
- New villager state `scouting` — wider reveal (8 tiles) + 2-tick duration
- `updateVisibility()` checks for newly-visible monsters → rolls ambush
- Add minimap destination marker (pulsing dot) for active scout mission

### Changes:
- `exploration.js` — Add ambush check in `updateVisibility()`, `isScoutCapable()` helper
- `villager.js` — Add `scouting` state, `scoutTarget` handling
- `minimap.js` — Add click-to-scout interaction, draw scout destination marker
- `main.js` — Wire minimap clicks to scout assignment
- `combat.js` — Handle ambush damage multiplier

---

## Phase 6: Cascading Event Chains

**Enhance: `events-system.js`**

Events should cause other events, creating dramatic arcs instead of isolated moments.

### Event Chains:
1. **Plague Chain**: Plague Pit discovered → "Sickness Spreads" (3 villagers lose HP) → if no herbs spent in 5 ticks → "Plague Worsens" (all villagers -2 HP) → if still untreated → "Mass Grave" (2 villagers die)
2. **War Chain**: Blood Moon → double monster wave → if 3+ monsters survive dawn → "Monster Camp" POI spawns near village → ongoing raids until destroyed
3. **Faith Chain**: Faith drops below 20 → "Crisis of Faith" event → villager with Zealot personality demands sacrifice (5 food) → if refused → faith drops to 0, Zealot deserts → if accepted → faith jumps to 50
4. **Prosperity Chain**: 3 consecutive days with food > 2x villagers → "Celebration" → new villager arrives → if food still high → "Renown Spreads" → wandering merchant offers rare item

### Implementation:
- Add `CHAIN_DEFS` — linked event sequences with condition checks and timers
- Each chain has `stages[]` with `{ delay, condition, event, failEvent }`
- `eventSystem.activeChains` tracks in-progress chains
- Each tick, advance chain timers, check conditions, fire next stage or fail branch
- Chains can branch: player choices (via guidance panel) affect which path triggers

### Changes:
- `events-system.js` — Add `CHAIN_DEFS`, `updateChains()`, chain state tracking
- `main.js` — Call `updateChains()` per tick
- Add 2–3 new choice events that appear in guidance panel for chain decisions

---

## Implementation Order & Dependencies

```
Phase 1 (POIs) ──────────┐
                          ├──→ Phase 2 (Quests) ──→ Phase 6 (Event Chains)
Phase 3 (Loot) ──────────┘         │
                                   │
Phase 4 (Morale) ─────────────────┘

Phase 5 (Scout Missions) — independent, can parallelize
```

**Suggested build order:**
1. Phase 1 (POIs) — foundation for exploration rewards
2. Phase 3 (Loot) — immediate gameplay feedback loop
3. Phase 5 (Scout Missions) — player agency for exploration
4. Phase 4 (Morale) — depth and emergent drama
5. Phase 2 (Quests) — ties everything into narrative
6. Phase 6 (Event Chains) — dramatic cascading consequences

## Files Changed Summary

| File | Phases | Type |
|------|--------|------|
| `client/js/poi.js` | 1, 2, 5 | **New** |
| `client/js/quests.js` | 2 | **New** |
| `client/js/map.js` | 1 | Modified |
| `client/js/exploration.js` | 1, 5 | Modified |
| `client/js/monsters.js` | 3 | Modified |
| `client/js/combat.js` | 3, 5 | Modified |
| `client/js/inventory.js` | 3 | Modified |
| `client/js/villager.js` | 4, 5 | Modified |
| `client/js/ai.js` | 2, 4 | Modified |
| `client/js/events-system.js` | 2, 6 | Modified |
| `client/js/minimap.js` | 1, 5 | Modified |
| `client/js/hud.js` | 4 | Modified |
| `client/js/main.js` | All | Modified |
