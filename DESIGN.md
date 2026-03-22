# AI Village: Realm of Shadows — Game Design Document

## Overview

A medieval colony simulation where AI-driven villagers live, work, and fight
autonomously. You are **The Voice** — a formless spiritual presence that can only
speak when a villager seeks guidance. Your goal: influence the village to discover
and destroy the **Source of Evil** before the **Shadow Whisperer** (an AI
antagonist) overwhelms the village with monsters, corruption, and misinformation.

---

## 1. The Player: The Voice

You have no body, no cursor, no direct control. You exist only in the moments
when a villager is uncertain, afraid, or at a crossroads and **seeks counsel**.

- Villagers come to you — you don't go to them
- Your words are filtered through each villager's personality, courage, and
  loyalty
- A brave captain interprets "be careful" as "stay alert and press forward"
- A frightened farmer interprets it as "we should hide"
- Corrupted villagers may twist or withhold your guidance from others

### Influence Mechanics

| Action | How It Works |
|---|---|
| **Counsel** | Respond to a villager's question in natural language |
| **Inspire** | Spend spiritual energy to boost a villager's resolve |
| **Warn** | Send a vague premonition to a villager (costs energy, unreliable) |
| **Observe** | Watch any part of the map (free, but you can't act while observing) |

**Spiritual Energy** regenerates slowly and increases when villagers have faith
in you. Bad advice or ignored warnings reduce faith and energy.

---

## 2. The Antagonist: The Shadow Whisperer

An AI running the best available model — your dark mirror. It operates
symmetrically to you but for the forces of evil.

### Shadow Whisperer Capabilities

- **Whisper to monsters**: Coordinates raids, times attacks for maximum impact
- **Plant misinformation**: Creates false clues, fake survivor stories
- **Corrupt villagers**: Slowly turns villagers into double agents who
  misreport your guidance and sabotage defenses
- **Escalate threats**: As the game progresses, the Shadow Whisperer unlocks
  stronger monster types and more sophisticated strategies

You never see the Shadow Whisperer directly — only its effects. Strange
villager behavior, suspiciously timed attacks, and misleading clues are your
signals.

---

## 3. The AI Tier System

Every entity in the game is driven by an LLM. Different roles get different
model tiers by default, but the player can override any assignment in config.

### Default Role → Tier Mapping

| Tier | Default Model | Used For |
|---|---|---|
| **Tier 1 — Apex** | Claude Opus / GPT-4o | Shadow Whisperer, Village Elder, Hero units |
| **Tier 2 — Standard** | Claude Sonnet / GPT-4o-mini | Captains, Scouts, Blacksmith, Healer |
| **Tier 3 — Fast** | Claude Haiku / Gemini Flash | Common villagers, basic monsters |
| **Tier 4 — Local/Rule** | Rule-based (no API call) | Ambient wildlife, simple tasks, pathfinding |

### Configuration

```yaml
# config/ai_tiers.yaml
tiers:
  apex:
    provider: claude
    model: claude-opus-4-6
    max_tokens: 1024
    rate_limit: 10/min
  standard:
    provider: openai
    model: gpt-4o-mini
    max_tokens: 512
    rate_limit: 30/min
  fast:
    provider: google
    model: gemini-2.0-flash
    max_tokens: 256
    rate_limit: 60/min

role_overrides:
  village_elder: apex
  shadow_whisperer: apex
  captain: standard
  scout: standard
  villager: fast
  monster_grunt: fast
  monster_boss: standard
```

### Cost Controls

- **Token budget per tick**: Configurable cap on total API spend per game tick
- **Batch calls**: Group multiple Tier 3 decisions into a single prompt
- **Cache layer**: Identical situations produce cached responses for 5 ticks
- **Fallback chain**: If a provider is down or rate-limited, fall through to
  the next configured provider

---

## 4. Villager AI Loop

Every villager runs an autonomous **Observe → Question → Decide → Act →
Remember** loop each tick.

### Phase Breakdown

```
OBSERVE  →  What do I see? (nearby tiles, other villagers, threats, resources)
    ↓
QUESTION →  Am I uncertain? Is this new? Does this conflict with what I know?
    ↓         ↓ (uncertainty > threshold)
    ↓     SEEK GUIDANCE → Ask The Voice for counsel
    ↓         ↓
DECIDE   →  Choose action based on personality + observations + guidance
    ↓
ACT      →  Execute: move, build, fight, flee, trade, scout, rest
    ↓
REMEMBER →  Store outcome in personal memory. Update beliefs.
```

### Villager Attributes

| Attribute | Range | Effect |
|---|---|---|
| **Courage** | 0–100 | Willingness to fight, scout dark areas |
| **Faith** | 0–100 | How often they seek guidance, how closely they follow it |
| **Intelligence** | 0–100 | Quality of independent decisions, clue interpretation |
| **Loyalty** | 0–100 | Resistance to corruption by the Shadow Whisperer |
| **Skill** | varies | Combat, farming, building, healing, scouting — each a separate value |

### Personality Types

Each villager gets a personality archetype that shapes how they interpret
guidance and make decisions:

- **The Stalwart** — Brave, literal, follows orders precisely
- **The Skeptic** — Questions everything, sometimes ignores guidance
- **The Dreamer** — Creative interpretations, occasionally brilliant insights
- **The Coward** — Cautious to a fault, great at survival, bad at risk
- **The Zealot** — Extreme faith, may over-interpret vague guidance
- **The Pragmatist** — Weighs cost/benefit, ignores "impractical" advice

### Memory System

Each villager maintains a rolling memory of recent events:

```
- Short-term: Last 10 ticks of observations and actions
- Long-term: Key events (deaths, discoveries, betrayals, guidance received)
- Beliefs: Updated model of the world ("the forest is dangerous",
  "the blacksmith is trustworthy", "The Voice said to go north")
- Rumors: Information heard from other villagers (may be true or false)
```

Memory is included in the AI prompt for that villager's decisions, creating
emergent storytelling as villagers act on incomplete and sometimes wrong
information.

---

## 5. Monster System

Monsters are controlled by the Shadow Whisperer and have their own simplified
AI loop.

### Monster Types

| Type | Tier | Behavior |
|---|---|---|
| **Shade** | Fast | Scouts village perimeter, reports defenses |
| **Ghoul** | Fast | Melee swarm attacker, low HP |
| **Wraith** | Standard | Can pass through walls, targets isolated villagers |
| **Corruptor** | Standard | Doesn't attack — whispers to villagers, lowers loyalty |
| **Dread Knight** | Apex | Raid leader, tactical, adapts to defenses |
| **The Source** | Apex | Final boss, hidden, must be discovered through clues |

### Raid System

The Shadow Whisperer plans raids based on:

- Village defense strength (observed by Shades)
- Time of day (prefers night)
- Villager morale and faith levels
- Whether key defenders are away scouting

Raids escalate over time: early game is scattered Ghouls, late game is
coordinated multi-wave assaults led by Dread Knights.

---

## 6. The Source of Evil

The ultimate objective. The Source is never shown on the map — it must be
**discovered** through gameplay.

### Discovery Mechanics

1. **Survivor stories**: NPCs who wander in from the wilderness may have clues
2. **Scout reports**: Scouts who venture far enough may find traces
3. **Monster behavior patterns**: The direction raids come from is meaningful
4. **Captured monsters**: A brave enough villager might interrogate one
5. **Ancient texts**: Found in ruins scattered across the expanding map
6. **Corrupted villagers**: If identified and redeemed, they may recall
   fragments of what the Shadow Whisperer showed them

### Clue System

Clues are fragments. No single clue reveals the Source. The player (and
villagers with high Intelligence) must connect multiple clues:

```
Clue 1: "The raids always come from the northeast"
Clue 2: "A survivor speaks of a ruined cathedral in the mountains"
Clue 3: "An ancient text mentions a seal broken beneath holy ground"
→ Inference: The Source may be under a cathedral in the northeast mountains
```

The Shadow Whisperer actively plants **false clues** to misdirect.

---

## 7. Corruption System

The Shadow Whisperer can slowly corrupt villagers, creating a trust/paranoia
dynamic.

### Corruption Stages

| Stage | Signs | Effect |
|---|---|---|
| **Whispered** | Nightmares, irritability | -10 Loyalty, slight behavior changes |
| **Tempted** | Isolation, secret meetings | May withhold information |
| **Corrupted** | Appears normal | Actively sabotages: false reports, weakened defenses |
| **Lost** | Visible transformation | Attacks village, becomes a monster |

### Detection and Redemption

- Observant villagers may notice behavioral changes
- The Voice can warn about suspicious behavior (if a villager asks)
- Confronting a corrupted villager with evidence may redeem them (or expose
  the accuser to danger)
- A Zealot villager might accuse innocents, creating internal conflict

---

## 8. Map and World

### Tile Types

| Tile | Properties |
|---|---|
| **Grass** | Buildable, farmable |
| **Forest** | Provides wood, limits visibility, monster hiding spots |
| **Stone** | Provides stone, blocks movement until mined |
| **Water** | Impassable, provides fish at edges |
| **Mountain** | Impassable border, may contain caves |
| **Ruins** | Explorable, may contain clues or danger |
| **Dark Zone** | Unexplored, revealed by scouts. Monsters spawn here |
| **Village** | Built structures — houses, walls, farms, workshops |

### Map Expansion

The game starts with a small revealed area (~30x30 tiles) centered on the
village. The rest is **Dark Zone**.

- Scouts expand the visible map
- Each expansion may reveal resources, ruins, threats, or clues
- The Source is always in the furthest reaches — you must expand to find it
- Expanding too fast thins defenses; too slow lets the Shadow Whisperer grow
  stronger

### Day/Night Cycle

- **Day** (ticks 1–12): Villagers work, build, scout. Monsters are weaker.
- **Dusk** (ticks 13–14): Warning phase. Scouts return, defenses prepared.
- **Night** (ticks 15–22): Monster activity peaks. Raids occur. Vision reduced.
- **Dawn** (ticks 23–24): Damage assessed, dead mourned, new day begins.

---

## 9. Building and Economy

Villagers can construct structures to strengthen the village.

### Structures

| Structure | Cost | Effect |
|---|---|---|
| **House** | 10 wood | Shelters 2 villagers, morale boost |
| **Wall** | 5 stone | Blocks monster movement, HP barrier |
| **Watchtower** | 15 wood, 10 stone | Extended vision range, archer post |
| **Farm** | 5 wood | Produces food each day cycle |
| **Workshop** | 20 wood, 15 stone | Enables weapon/armor crafting |
| **Chapel** | 25 stone, 10 wood | Boosts faith regeneration, corruption resistance |
| **Archive** | 20 wood, 20 stone | Stores clues, helps connect them |
| **Healer's Hut** | 10 wood, 5 herbs | Heals injured villagers |

### Resources

- **Wood**: From forests
- **Stone**: From quarries/mountains
- **Food**: From farms, fishing, foraging
- **Herbs**: From forest gathering (used for healing)
- **Iron**: From mining (used for weapons/armor)
- **Faith**: Generated by good outcomes, chapel, answered guidance

---

## 10. Tech Stack

### Frontend: HTML5 Canvas

- Top-down 2D tile map rendering
- Sprite-based villagers and monsters with simple animations
- UI overlay: villager status, guidance panel, clue board, minimap
- Previewable in a browser (including Claude Code's built-in browser)

### Backend: Python FastAPI

- All AI calls happen server-side (API keys never reach the client)
- WebSocket connection for real-time tick updates
- REST endpoints for player actions (counsel, inspect, observe)

### Project Structure

```
ai-game-world/
├── DESIGN.md                  # This document
├── README.md                  # Setup and run instructions
├── config/
│   ├── ai_tiers.yaml          # AI model configuration per tier
│   ├── game_settings.yaml     # Tick speed, map size, difficulty
│   └── api_keys.env           # API keys (gitignored)
├── server/
│   ├── main.py                # FastAPI app entry point
│   ├── game/
│   │   ├── engine.py          # Core game loop and tick system
│   │   ├── world.py           # Map generation and tile management
│   │   ├── village.py         # Village state, buildings, resources
│   │   ├── villager.py        # Villager class, attributes, memory
│   │   ├── monster.py         # Monster types and behavior
│   │   ├── combat.py          # Combat resolution
│   │   ├── corruption.py      # Corruption system
│   │   ├── clues.py           # Clue generation, tracking, connection
│   │   └── events.py          # Event system (guidance requests, raids, etc.)
│   ├── ai/
│   │   ├── provider.py        # Abstract AI provider interface
│   │   ├── claude_provider.py # Anthropic API integration
│   │   ├── openai_provider.py # OpenAI API integration
│   │   ├── gemini_provider.py # Google Gemini API integration
│   │   ├── tier_manager.py    # Tier assignment and fallback logic
│   │   ├── prompt_builder.py  # Builds prompts from game state
│   │   └── cache.py           # Response caching layer
│   ├── voice/
│   │   ├── guidance.py        # The Voice's counsel system
│   │   └── influence.py       # Spiritual energy, inspire, warn
│   ├── shadow/
│   │   ├── whisperer.py       # Shadow Whisperer AI controller
│   │   └── strategy.py        # Raid planning, corruption targeting
│   └── api/
│       ├── routes.py          # REST + WebSocket endpoints
│       └── schemas.py         # Pydantic models for API
├── client/
│   ├── index.html             # Main game page
│   ├── css/
│   │   └── game.css           # UI styling
│   ├── js/
│   │   ├── main.js            # App entry point
│   │   ├── renderer.js        # Canvas tile/sprite rendering
│   │   ├── camera.js          # Viewport and scrolling
│   │   ├── ui.js              # HUD, panels, dialogs
│   │   ├── websocket.js       # Server connection
│   │   └── input.js           # Click/keyboard handling
│   └── assets/
│       ├── tiles/             # Tile sprites (grass, stone, water, etc.)
│       ├── villagers/         # Villager sprites
│       ├── monsters/          # Monster sprites
│       ├── buildings/         # Structure sprites
│       └── ui/                # UI elements
├── prompts/
│   ├── villager_loop.txt      # Template for villager AI decisions
│   ├── shadow_whisperer.txt   # Template for Shadow Whisperer decisions
│   ├── guidance_filter.txt    # How villagers interpret guidance
│   └── clue_generation.txt    # Template for generating clues
├── requirements.txt           # Python dependencies
└── .gitignore
```

---

## 11. MVP Roadmap — Visual World First

### Phase 1: The Living Map (target: first playable)

- [ ] Tile map renderer with camera/scrolling
- [ ] Procedural map generation (village center + surrounding terrain)
- [ ] Day/night cycle with lighting changes
- [ ] Villager sprites that wander, enter buildings, and idle
- [ ] Basic building placement (houses, walls)
- [ ] Resource nodes visible on map (forests, stone, water)
- [ ] Simple UI: minimap, resource counter, time-of-day indicator

### Phase 2: The Thinking Village

- [ ] AI provider abstraction + config system
- [ ] Villager AI loop (Observe → Question → Decide → Act → Remember)
- [ ] Villager memory system
- [ ] Personality types affecting behavior
- [ ] Basic economy: gathering, building, farming
- [ ] "Seeking Guidance" event — villagers approach The Voice
- [ ] Guidance panel: receive question, type response, see interpretation

### Phase 3: The Darkness

- [ ] Monster spawning from Dark Zones
- [ ] Shadow Whisperer AI controller
- [ ] Raid system with escalating difficulty
- [ ] Combat resolution (villagers vs monsters)
- [ ] Scouting system — revealing Dark Zone tiles
- [ ] Death, injury, morale consequences

### Phase 4: The Mystery

- [ ] Clue generation and discovery
- [ ] Clue board UI for tracking and connecting fragments
- [ ] False clues planted by Shadow Whisperer
- [ ] Corruption system (stages, detection, redemption)
- [ ] Source of Evil — final discovery and assault
- [ ] Win/lose conditions

### Phase 5: Polish

- [ ] Sound effects and ambient audio
- [ ] Sprite animations (walk cycles, combat, building)
- [ ] Save/load game state
- [ ] Difficulty settings
- [ ] Tutorial / first-time guidance
- [ ] Token usage dashboard (API cost tracking)

---

## 12. Win and Lose Conditions

### Victory

The village discovers the Source of Evil's location and sends a strong enough
party to destroy it. Requires:

- Enough clues connected to identify the location
- A sufficiently strong and equipped assault party
- The party must survive the journey through hostile territory
- The Source has its own defenses — the final encounter is an AI-driven battle

### Defeat

Any of the following:

- All villagers die
- Village faith drops to zero (The Voice is forgotten — you lose influence)
- The Source reaches full power (after ~100 day cycles if not destroyed)
- All villagers become corrupted

---

## 13. Sample Gameplay Moment

> *Day 7, Dusk. The village has 12 people, a few houses, and a wooden wall.*
>
> **Elena the Scout** approaches The Voice:
> "I found strange tracks in the northeast forest — larger than any animal.
> They lead deeper into the dark. Should I follow them alone, or return and
> gather others?"
>
> **You respond**: "Mark the trail and return. Gather the captain and two
> others before following."
>
> *Elena's personality is The Dreamer. She interprets this as: "The Voice
> wants me to remember the path... but also hinted that this is important
> enough to bring our best people. This must be significant."*
>
> *She returns and tells Captain Aldric — but exaggerates slightly: "The Voice
> says this trail is extremely important and we must investigate immediately
> with our strongest fighters."*
>
> *Meanwhile, the Shadow Whisperer has been watching. It orders a Shade to
> follow Elena back and report the village's weakened northern defense while
> the captain is away...*
