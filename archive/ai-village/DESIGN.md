# AI Village: Realm of Shadows — Game Design Document

## Concept Summary

A medieval god-game / colony simulator where you are **The Voice** — an unseen spiritual influence
whispering guidance to a struggling village. The village and its surrounding monsters are fully
autonomous, each powered by AI. Your only power is to advise a villager when they seek counsel.
The goal: guide the villagers to uncover and destroy the **Source of Evil** hidden in the wilderness
before it consumes the realm.

Inspired by: Dwarf Fortress, RimWorld, and classic god-games (Black & White, Populous).

---

## Core Design Pillars

1. **AI Autonomy** — Every character (villager or monster) thinks and decides independently using LLM calls
2. **Indirect Control** — You never command; you influence. Villagers interpret your whispers through their own personality and judgment
3. **Competing Intelligences** — An evil AI Influencer opposes you, nudging monsters and escalating threats
4. **Emergent Storytelling** — The narrative emerges from AI decisions, not scripted events
5. **Multi-Model Architecture** — Different AI tiers run different roles based on complexity and cost

---

## Player Role: The Voice

You have no physical form in the world. You are a spiritual presence that:

- Can only communicate when a villager **seeks guidance** (they must come to you)
- Speak through a **chat prompt** — but your words are filtered through the villager's personality, mood, and current knowledge
- Cannot force any action — villagers weigh your counsel against their own judgment
- Can observe all events but cannot act directly on any entity

**Key mechanic:** A "Seeking Guidance" event fires when a villager is uncertain, afraid, or making a major decision. You have a limited response window. If you don't respond, the villager decides alone.

---

## The Opposing Force: The Shadow Whisperer

The evil AI Influencer is your direct counterpart:

- Runs as the **best available AI model** (most capable reasoning)
- Whispers to monsters, cultists, and corrupted creatures
- Chooses when to escalate attacks, when to probe for weaknesses, when to stay hidden
- Has a **hidden agenda** — it wants to delay discovery of the Source of Evil while weakening the village
- The Shadow Whisperer can also **corrupt villagers** — turning them into unwitting assets

---

## AI Model Architecture

| Role | AI Tier | Examples |
|---|---|---|
| Common villagers (farmers, workers) | Tier 1 — Cheapest/fastest | Claude Haiku, GPT-3.5-turbo, Gemini Flash |
| Village leaders (captain, healer, elder) | Tier 2 — Mid-tier reasoning | Claude Sonnet, GPT-4o-mini, Gemini Pro |
| Shadow Whisperer (evil AI influencer) | Tier 3 — Most capable | Claude Opus, GPT-4o, Gemini Ultra |
| World Event Narrator | Tier 2 | Same as leaders |

### How Villager AI Works (The Thought Loop)

Every N seconds (or game ticks), each active villager runs:

```
1. OBSERVE   — What do I see/know right now? (world state fed as context)
2. QUESTION  — What should I do? Am I afraid? Do I need guidance?
3. DECIDE    — Choose an action based on personality + knowledge + any influence received
4. ACT       — Execute the action in the game world
5. REMEMBER  — Update short-term memory (recent events, emotional state)
```

If step 2 produces high uncertainty, the villager can trigger a **Seeking Guidance** event.

### How Monster AI Works

Monsters use the same loop but with predatory/survival goals. The Shadow Whisperer injects
strategic direction periodically, similar to how you influence villagers.

---

## World Structure

```
┌─────────────────────────────────────────┐
│           DARK WILDERNESS               │
│    ╔═══════════════════════╗            │
│    ║  [Farmland / Fields]  ║            │
│    ║  ┌─────────────────┐  ║            │
│    ║  │    VILLAGE      │  ║            │
│    ║  │  [Town Square]  │  ║            │
│    ║  │  [Barracks]     │  ║            │
│    ║  │  [Healer Hut]   │  ║            │
│    ║  │  [Blacksmith]   │  ║            │
│    ║  └─────────────────┘  ║            │
│    ╚═══════════════════════╝            │
│  ??? [Source of Evil - Hidden] ???      │
└─────────────────────────────────────────┘
```

### Village Buildings

- **Town Hall** — Elder lives here; most likely to seek guidance
- **Barracks** — Militia captain and guards; military decisions
- **Healer's Hut** — Manages injuries; notices corruption/illness patterns
- **Blacksmith** — Crafts weapons; resource aware
- **Farmstead** — Farmers; first to notice wilderness threats
- **Tavern** — Gossip hub; information spreads here

### Wilderness Zones

- **Farmland Belt** — Partially safe, scoutable by day
- **Dark Forest** — Monster territory; dangerous, clue-bearing
- **Ruins / Corrupted Sites** — Mid-distance, high danger, high reward
- **Source of Evil Lair** — Hidden, requires piecing together clues to locate

---

## Win / Loss Conditions

### Win
- Villagers (with your guidance) discover the Source of Evil's location
- A strike team is organized and successfully destroys it
- The Shadow Whisperer's corruption of the village is too weak to prevent this

### Loss
- Village population drops to 0
- All leaders are dead or corrupted
- The Source of Evil achieves **full corruption** of the village (evil % meter hits 100)
- Time limit expires (the Shadow Whisperer fully manifests)

---

## Game Loop (Day/Night Cycle)

### Daytime
- Villagers work, gather resources, repair
- Safe window for scouting (reduced monster activity)
- Leaders meet to share information (AI to AI discussion, observable in event log)
- Your influence opportunities are most effective here

### Nighttime
- Monsters grow active and bold
- The Shadow Whisperer makes its moves
- Villagers retreat inside or stand guard
- Scary events trigger "Seeking Guidance" from frightened villagers

### Event Categories
- **Raids** — Monster group attacks village perimeter
- **Abductions** — A villager disappears in the night
- **Discoveries** — Scout returns with clues
- **Corruption** — A villager starts acting strangely
- **Whisper Events** — Shadow Whisperer plants misinformation
- **Rallying** — A leader organizes a group action

---

## Influence System (The Voice Mechanic)

### When You Can Speak
A villager "seeks guidance" when:
- They have high fear or uncertainty
- They face a major decision (organize a raid? trust a stranger?)
- They've just received confusing or contradictory information
- Random event: "A strange calm falls over [Name]. They feel something speaking to them."

### How Influence Works
1. **You receive context**: the game shows you the villager's name, personality, current emotional state, recent memory, and their question
2. **You type a message** (free-form chat, or pick from AI-generated suggestions)
3. **The villager's AI processes your message** through their personality filter:
   - A brave warrior interprets "be cautious" differently than a cowardly farmer
   - A corrupted villager may misinterpret your guidance entirely
4. **The villager decides** based on their weighted judgment (AI call result)
5. **You see the outcome** in the event log

### Limits
- You cannot speak to the same villager twice within a short cooldown
- Corrupted villagers may misreport your guidance to others
- Monster-aligned villagers may relay your plans to the Shadow Whisperer

---

## Villager Characters (Starting Cast)

| Name | Role | Personality | AI Tier |
|---|---|---|---|
| Elder Aldric | Village Elder | Wise, cautious, skeptical of the unknown | Leader |
| Captain Rowan | Militia Captain | Brave, direct, protective, impatient | Leader |
| Mira | Healer | Empathetic, observant, pragmatic | Leader |
| Gort | Blacksmith | Stubborn, practical, slow to trust | Leader |
| Pip | Young Scout | Curious, reckless, eager to prove himself | Villager |
| Hilde | Farmer | Superstitious, community-minded, hardworking | Villager |
| Sera | Tavern Keeper | Gossipy, shrewd, hides nothing but reveals everything | Villager |
| 4-8 others | Farmers/Workers | Various personalities | Villager |

---

## Source of Evil: Narrative Design

The Source of Evil is a **hidden location** that must be discovered through:
- Scouting expeditions (villagers finding clues)
- Survivor testimony (rescued abductees)
- Healer observations (patterns in corruption/illness)
- Interrogating captured or cornered monsters (rare event)
- Connecting dots in the AI-generated event log

The Source is never shown on the map until discovered. It grows stronger over time
(represented by escalating Shadow Whisperer aggression and a "Corruption Meter").

### Source Types (randomly selected each game)
- **The Buried Idol** — Ancient corrupted artifact radiating evil
- **The Lich's Crypt** — An undead sorcerer directing everything
- **The Dark Altar** — A cult site being operated by corrupted humans
- **The Wound in the World** — A magical rift leaking shadow energy

---

## Technical Architecture

### Tech Stack
- **Frontend:** Vanilla HTML5/CSS3/JavaScript — Canvas 2D for game world rendering
- **Backend:** Python (FastAPI) — Handles all AI API calls server-side to protect API keys
- **Communication:** WebSocket for real-time game state; REST for influence inputs
- **Runs on:** Local dev server (previewable in Claude Code's browser preview)

### AI API Integration

The backend accepts a configuration at startup:

```json
{
  "tier1": { "provider": "anthropic", "model": "claude-haiku-4-5-20251001" },
  "tier2": { "provider": "anthropic", "model": "claude-sonnet-4-6" },
  "tier3": { "provider": "anthropic", "model": "claude-opus-4-6" }
}
```

Supported providers:
- `anthropic` (Claude) — via Anthropic SDK
- `openai` (ChatGPT) — via OpenAI SDK
- `google` (Gemini) — via Google Generative AI SDK

### Project Structure (Planned)

```
ai-game-world/
├── backend/
│   ├── main.py              # FastAPI app, WebSocket hub
│   ├── game/
│   │   ├── world.py         # World state, map, tile system
│   │   ├── villager.py      # Villager entity, AI thought loop
│   │   ├── monster.py       # Monster entity, behavior
│   │   ├── influence.py     # Voice mechanic, guidance system
│   │   ├── shadow.py        # Shadow Whisperer AI logic
│   │   └── events.py        # Event generation and dispatch
│   ├── ai/
│   │   ├── provider.py      # AI provider abstraction layer
│   │   ├── anthropic.py     # Claude integration
│   │   ├── openai.py        # GPT integration
│   │   └── google.py        # Gemini integration
│   └── config.py            # API keys and model config
├── frontend/
│   ├── index.html           # Main game page
│   ├── game.js              # Canvas renderer, game loop
│   ├── ui.js                # UI panels, event log, influence dialog
│   ├── ws.js                # WebSocket client
│   └── style.css            # Medieval-themed styling
├── DESIGN.md                # This document
└── README.md                # Setup and run instructions
```

---

## Visual Style

- **Top-down 2D tile map** — 32x32 or 48x48 pixel tiles
- **Medieval pixel art palette** — muted earth tones, torchlight orange, shadow purple
- **Day/night lighting** — canvas overlay changes from warm day to dark blue-black night
- **Villager sprites** — simple colored figures with name labels
- **Monster sprites** — visually distinct, grow more numerous as corruption increases
- **Event Log** — scrolling text on the right side showing AI "thought" summaries and game events
- **Influence Panel** — bottom panel that slides up when a villager seeks guidance

---

## Key Open Questions / Future Expansion

- **Corruption Mechanic Depth:** How visible should corruption be to the player vs. the other villagers?
- **Multiplayer:** Could two human players each take on the Voice vs. Shadow Whisperer role?
- **Persistent World:** Save/load between sessions with ongoing narrative
- **Difficulty:** Adjust by changing AI tier gap between your side and the Shadow Whisperer
- **Moddable AI Prompts:** Let players customize villager personalities via editable prompt templates

---

*Document version 0.1 — Initial design draft*
