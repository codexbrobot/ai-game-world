/**
 * Quest / Story Arc system for AI Village: Realm of Shadows.
 * Provides a 3-act main quest line and conditional side quests that
 * give the game narrative structure, goals, and a victory condition.
 *
 * Self-contained ES module. All game data passed via parameters.
 */

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Quest lifecycle states. */
export const QUEST_STATUS = {
  LOCKED: 'locked',
  AVAILABLE: 'available',
  ACTIVE: 'active',
  COMPLETED: 'completed',
  FAILED: 'failed',
};

// ---------------------------------------------------------------------------
// Quest Definitions
// ---------------------------------------------------------------------------

/**
 * Internal quest template registry keyed by quest id.
 * Trigger / fail conditions are encoded as string keys and evaluated inside
 * the check functions so that quest state remains serializable.
 */
const QUEST_DEFS = {
  // ---- Act I ---------------------------------------------------------------
  secure_perimeter: {
    id: 'secure_perimeter',
    title: 'Secure the Perimeter',
    act: 1,
    description:
      'The village clings to survival by a thread. Erect a watchtower to pierce the darkness and cull the beasts that circle your walls — or be swallowed by the night.',
    objectives: [
      { id: 'build_watchtower', text: 'Build a Watchtower', target: 1 },
      { id: 'kill_monsters', text: 'Slay 5 monsters', target: 5 },
    ],
    rewards: 'Faith +15, Wood +10, Stone +10',
    triggerCondition: null, // always available from day 1
    failCondition: null,
    failTimer: null,
  },

  // ---- Act II --------------------------------------------------------------
  lost_chronicle: {
    id: 'lost_chronicle',
    title: 'The Lost Chronicle',
    act: 2,
    description:
      'Whispers on the wind speak of forbidden knowledge scattered across the realm. Venture beyond the torchlight, unearth the forgotten places, and recover a lore scroll from the ruined libraries of the Sunkeeper Dynasty.',
    objectives: [
      { id: 'discover_pois', text: 'Discover 3 Points of Interest', target: 3 },
      { id: 'find_scroll', text: 'Find a lore scroll (Abandoned Library)', target: 1 },
    ],
    rewards: 'Faith +25, Iron +15, Herbs +10',
    triggerCondition: 'act1_complete_day8',
    failCondition: null,
    failTimer: null,
  },

  // ---- Act III -------------------------------------------------------------
  shadow_king: {
    id: 'shadow_king',
    title: 'The Shadow King',
    act: 3,
    description:
      'The darkness has a name — and a throne. Seek the Dragon\'s Hoard at the edge of the world, confront the Demon that guards the ancient gate, and let your faith burn bright enough to banish the Shadow King forever.',
    objectives: [
      { id: 'discover_dragon_hoard', text: 'Discover the Dragon\'s Hoard', target: 1 },
      { id: 'defeat_demon', text: 'Defeat the Demon', target: 1 },
      { id: 'faith_60', text: 'Raise faith to 60', target: 60 },
    ],
    rewards: 'Faith +50 — Victory',
    triggerCondition: 'act2_complete_day19',
    failCondition: null,
    failTimer: null,
  },

  // ---- Side Quests ---------------------------------------------------------
  heal_the_sick: {
    id: 'heal_the_sick',
    title: 'Heal the Sick',
    act: null,
    description:
      'A foul miasma seeps from the plague pit, withering flesh and draining hope. Spend precious herbs to concoct a cure before the rot claims them all.',
    objectives: [
      { id: 'spend_herbs', text: 'Spend 5 herbs on a cure', target: 5 },
    ],
    rewards: 'Faith +10, all villagers heal +3',
    triggerCondition: 'plague_pit_discovered',
    failCondition: 'timer',
    failTimer: 8,
  },

  merchants_request: {
    id: 'merchants_request',
    title: 'The Merchant\'s Request',
    act: null,
    description:
      'A cloaked merchant lingers at the village edge, eyes glinting with greed. Gather twenty bars of iron and he will part with weapons forged in distant lands.',
    objectives: [
      { id: 'accumulate_iron', text: 'Accumulate 20 iron', target: 20 },
    ],
    rewards: '2 crude swords',
    triggerCondition: 'wandering_merchant_day5',
    failCondition: 'timer',
    failTimer: 15,
  },

  rally_the_faithful: {
    id: 'rally_the_faithful',
    title: 'Rally the Faithful',
    act: null,
    description:
      'Doubt gnaws at the hearts of your people. The chapel stands empty, prayers falter on trembling lips. Restore their faith before despair consumes the village.',
    objectives: [
      { id: 'raise_faith', text: 'Raise faith above 60', target: 60 },
    ],
    rewards: 'All villagers morale +15',
    triggerCondition: 'faith_below_30',
    failCondition: 'faith_zero',
    failTimer: null,
  },

  builders_ambition: {
    id: 'builders_ambition',
    title: 'The Builder\'s Ambition',
    act: null,
    description:
      'Your settlement grows, and with it the dreams of those who shape wood and stone. Expand the village with two more structures to prove this is more than a campfire in the dark.',
    objectives: [
      { id: 'build_more', text: 'Build 2 more buildings', target: 2 },
    ],
    rewards: 'Wood +15, Stone +15',
    triggerCondition: 'buildings_3_day4',
    failCondition: null,
    failTimer: null,
  },

  first_blood: {
    id: 'first_blood',
    title: 'First Blood',
    act: null,
    description:
      'The first beast falls. Its blood stains the earth — a baptism for those brave enough to stand against the night.',
    objectives: [
      { id: 'kill_first', text: 'Slay a monster', target: 1 },
    ],
    rewards: 'Faith +5, promote a Hunter to Knight',
    triggerCondition: 'first_monster_killed',
    failCondition: null,
    failTimer: null,
  },
};

// ---------------------------------------------------------------------------
// Reward Definitions (separated from display strings for programmatic use)
// ---------------------------------------------------------------------------

const QUEST_REWARDS = {
  secure_perimeter: { faith: 15, resources: { wood: 10, stone: 10 } },
  lost_chronicle:   { faith: 25, resources: { iron: 15, herbs: 10 } },
  shadow_king:      { faith: 50, victory: true },
  heal_the_sick:    { faith: 10, healAll: 3 },
  merchants_request: { weapons: [{ type: 'crude_sword' }, { type: 'crude_sword' }] },
  rally_the_faithful: { moraleAll: 15 },
  builders_ambition: { resources: { wood: 15, stone: 15 } },
  first_blood:      { faith: 5, promoteHunter: true },
};

// ---------------------------------------------------------------------------
// State Factory
// ---------------------------------------------------------------------------

/**
 * Create a fresh, serializable quest state object.
 * @returns {object} Quest state suitable for JSON serialization.
 */
export function createQuestState() {
  return {
    quests: {},
    discoveredScrolls: [],
    monstersKilled: 0,
    poisDiscovered: 0,
    completedQuestIds: [],
    activeQuestIds: [],
    /** Per-quest metadata that does not belong in the definition (timers, baselines). */
    _meta: {},
  };
}

// ---------------------------------------------------------------------------
// Initialization
// ---------------------------------------------------------------------------

/**
 * Populate quest state with all quest entries.
 * Act I main quest starts as 'available'; everything else starts 'locked'.
 * @param {object} questState - State object from createQuestState().
 */
export function initQuests(questState) {
  for (const def of Object.values(QUEST_DEFS)) {
    questState.quests[def.id] = {
      id: def.id,
      title: def.title,
      act: def.act,
      description: def.description,
      objectives: def.objectives.map(o => ({
        id: o.id,
        text: o.text,
        current: 0,
        target: o.target,
        done: false,
      })),
      rewards: def.rewards,
      status: def.id === 'secure_perimeter' ? QUEST_STATUS.AVAILABLE : QUEST_STATUS.LOCKED,
      triggerCondition: def.triggerCondition,
      failCondition: def.failCondition,
      failTimer: def.failTimer,
    };
  }
  questState._meta = {};
}

// ---------------------------------------------------------------------------
// Trigger Checks
// ---------------------------------------------------------------------------

/**
 * Evaluate trigger conditions for locked quests and activate those whose
 * prerequisites are met. Also auto-activates 'available' main quests.
 *
 * @param {object}   questState - Quest state.
 * @param {object}   gameState  - Game state with day, tick, faith, resources, events[].
 * @param {object[]} villagers  - Array of villager objects.
 * @param {object[]} buildings  - Array of building objects.
 * @param {object[]} pois       - Array of POI objects.
 * @returns {string[]} Array of quest ids that were newly activated this call.
 */
export function checkQuestTriggers(questState, gameState, villagers, buildings, pois) {
  const newlyActivated = [];

  for (const quest of Object.values(questState.quests)) {
    // Auto-activate available main quests
    if (quest.status === QUEST_STATUS.AVAILABLE) {
      quest.status = QUEST_STATUS.ACTIVE;
      if (!questState.activeQuestIds.includes(quest.id)) {
        questState.activeQuestIds.push(quest.id);
      }
      newlyActivated.push(quest.id);
      continue;
    }

    if (quest.status !== QUEST_STATUS.LOCKED) continue;

    const triggered = evaluateTrigger(
      quest.triggerCondition,
      questState,
      gameState,
      villagers,
      buildings,
      pois,
    );

    if (triggered) {
      quest.status = QUEST_STATUS.ACTIVE;
      if (!questState.activeQuestIds.includes(quest.id)) {
        questState.activeQuestIds.push(quest.id);
      }
      // Snapshot baseline values where needed
      snapshotBaseline(quest, questState, gameState, buildings);
      newlyActivated.push(quest.id);
    }
  }

  return newlyActivated;
}

/**
 * Evaluate a single trigger condition string against current game state.
 * @returns {boolean}
 */
function evaluateTrigger(condition, questState, gameState, _villagers, buildings, pois) {
  if (condition === null || condition === undefined) return false;

  switch (condition) {
    case 'act1_complete_day8':
      return questState.completedQuestIds.includes('secure_perimeter') && gameState.day >= 8;

    case 'act2_complete_day19':
      return questState.completedQuestIds.includes('lost_chronicle') && gameState.day >= 19;

    case 'plague_pit_discovered':
      return pois && pois.some(p => p.discovered && p.type.id === 'plague_pit');

    case 'wandering_merchant_day5':
      return gameState.day >= 5 &&
        gameState.events &&
        gameState.events.some(e =>
          typeof e === 'string'
            ? e.toLowerCase().includes('merchant')
            : (e.id === 'wandering_merchant'),
        );

    case 'faith_below_30':
      return (gameState.faith || 0) < 30;

    case 'buildings_3_day4':
      return buildings && buildings.length >= 3 && gameState.day >= 4;

    case 'first_monster_killed':
      return questState.monstersKilled >= 1;

    default:
      return false;
  }
}

/**
 * Store baseline values when a quest is activated so we can measure progress
 * relative to the activation moment.
 */
function snapshotBaseline(quest, questState, gameState, buildings) {
  const meta = {};

  if (quest.id === 'builders_ambition') {
    meta.buildingsAtStart = buildings ? buildings.length : 0;
  }

  if (quest.failCondition === 'timer' && quest.failTimer != null) {
    meta.ticksRemaining = quest.failTimer;
  }

  questState._meta[quest.id] = meta;
}

// ---------------------------------------------------------------------------
// Progress & Completion Checks
// ---------------------------------------------------------------------------

/**
 * Update objective progress for all active quests and determine completions
 * and failures.
 *
 * @param {object}   questState - Quest state.
 * @param {object}   gameState  - Game state with day, tick, faith, resources.
 * @param {object[]} villagers  - Array of villager objects.
 * @param {object[]} buildings  - Array of building objects.
 * @param {object[]} pois       - Array of POI objects.
 * @param {object[]} monsters   - Array of monster objects.
 * @returns {{ completed: string[], failed: string[] }}
 */
export function updateQuestProgress(questState, gameState, villagers, buildings, pois, monsters) {
  const completed = [];
  const failed = [];

  for (const questId of [...questState.activeQuestIds]) {
    const quest = questState.quests[questId];
    if (!quest || quest.status !== QUEST_STATUS.ACTIVE) continue;

    // --- Update objective current values ---
    updateObjectives(quest, questState, gameState, villagers, buildings, pois, monsters);

    // --- Check failure conditions ---
    if (checkFailure(quest, questState, gameState)) {
      quest.status = QUEST_STATUS.FAILED;
      questState.activeQuestIds = questState.activeQuestIds.filter(id => id !== questId);
      failed.push(questId);
      continue;
    }

    // --- Check completion ---
    const allDone = quest.objectives.every(o => o.done);
    if (allDone) {
      quest.status = QUEST_STATUS.COMPLETED;
      questState.activeQuestIds = questState.activeQuestIds.filter(id => id !== questId);
      if (!questState.completedQuestIds.includes(questId)) {
        questState.completedQuestIds.push(questId);
      }

      // Unlock next act quest if applicable
      unlockNextAct(quest, questState);

      completed.push(questId);
    }
  }

  return { completed, failed };
}

/**
 * Refresh the `current` and `done` fields for each objective on a quest.
 */
function updateObjectives(quest, questState, gameState, _villagers, buildings, pois, _monsters) {
  for (const obj of quest.objectives) {
    switch (obj.id) {
      // --- Act I ---
      case 'build_watchtower':
        obj.current = buildings
          ? buildings.filter(b => b.type === 'watchtower').length
          : 0;
        break;

      case 'kill_monsters':
        obj.current = Math.min(questState.monstersKilled, obj.target);
        break;

      // --- Act II ---
      case 'discover_pois':
        obj.current = Math.min(questState.poisDiscovered, obj.target);
        break;

      case 'find_scroll':
        obj.current = questState.discoveredScrolls.length > 0 ? 1 : 0;
        break;

      // --- Act III ---
      case 'discover_dragon_hoard':
        obj.current = pois && pois.some(p => p.discovered && p.type.id === 'dragon_hoard') ? 1 : 0;
        break;

      case 'defeat_demon': {
        // Tracked via monstersKilled specifically for demons.
        // We store a flag in _meta when a demon kill is recorded.
        const meta = questState._meta[quest.id] || {};
        obj.current = meta.demonDefeated ? 1 : 0;
        break;
      }

      case 'faith_60':
        obj.current = Math.min(gameState.faith || 0, obj.target);
        break;

      // --- Side: Heal the Sick ---
      case 'spend_herbs':
        // Progress is set to target when the player has enough herbs.
        // The actual deduction happens when the quest completes (via rewards).
        obj.current = (gameState.resources.herbs || 0) >= obj.target ? obj.target : (gameState.resources.herbs || 0);
        break;

      // --- Side: Merchant's Request ---
      case 'accumulate_iron':
        obj.current = Math.min(gameState.resources.iron || 0, obj.target);
        break;

      // --- Side: Rally the Faithful ---
      case 'raise_faith':
        obj.current = Math.min(gameState.faith || 0, obj.target);
        break;

      // --- Side: Builder's Ambition ---
      case 'build_more': {
        const baseline = (questState._meta[quest.id] || {}).buildingsAtStart || 0;
        const built = buildings ? Math.max(0, buildings.length - baseline) : 0;
        obj.current = Math.min(built, obj.target);
        break;
      }

      // --- Side: First Blood ---
      case 'kill_first':
        obj.current = questState.monstersKilled >= 1 ? 1 : 0;
        break;

      default:
        break;
    }

    obj.done = obj.current >= obj.target;
  }
}

/**
 * Check whether a quest's failure condition has been met.
 * @returns {boolean}
 */
function checkFailure(quest, questState, gameState) {
  if (!quest.failCondition) return false;

  switch (quest.failCondition) {
    case 'timer': {
      const meta = questState._meta[quest.id];
      if (!meta) return false;
      if (meta.ticksRemaining != null) {
        meta.ticksRemaining--;
        if (meta.ticksRemaining <= 0) return true;
      }
      return false;
    }

    case 'faith_zero':
      return (gameState.faith || 0) <= 0;

    default:
      return false;
  }
}

/**
 * After completing an act quest, mark the next act quest as 'available'
 * so it can be activated on the next trigger check.
 */
function unlockNextAct(completedQuest, questState) {
  if (completedQuest.act === 1) {
    const next = questState.quests.lost_chronicle;
    if (next && next.status === QUEST_STATUS.LOCKED) {
      next.status = QUEST_STATUS.AVAILABLE;
    }
  } else if (completedQuest.act === 2) {
    const next = questState.quests.shadow_king;
    if (next && next.status === QUEST_STATUS.LOCKED) {
      next.status = QUEST_STATUS.AVAILABLE;
    }
  }
}

// ---------------------------------------------------------------------------
// Rewards
// ---------------------------------------------------------------------------

/**
 * Return the structured reward descriptor for a completed quest.
 *
 * @param {string} questId - Quest identifier.
 * @returns {{ faith?: number, resources?: object, healAll?: number, moraleAll?: number, promoteHunter?: boolean, victory?: boolean, weapons?: object[] } | null}
 */
export function getQuestRewards(questId) {
  return QUEST_REWARDS[questId] || null;
}

// ---------------------------------------------------------------------------
// Tracking Helpers
// ---------------------------------------------------------------------------

/**
 * Increment the lifetime monster-kill counter and update related quest metadata.
 * Call this whenever a monster is killed in the main game loop.
 *
 * @param {object}  questState  - Quest state.
 * @param {string}  [monsterType] - Optional monster type id (e.g. 'demon').
 */
export function trackMonsterKill(questState, monsterType) {
  questState.monstersKilled++;

  // Track demon kills for Act III objective
  if (monsterType === 'demon') {
    if (!questState._meta.shadow_king) {
      questState._meta.shadow_king = {};
    }
    questState._meta.shadow_king.demonDefeated = true;
  }
}

/**
 * Increment the lifetime POI-discovery counter and store any lore scrolls.
 * Call this whenever a POI is discovered in the main game loop.
 *
 * @param {object} questState - Quest state.
 * @param {object} poi        - The discovered POI object (with type and position).
 */
export function trackPOIDiscovery(questState, poi) {
  questState.poisDiscovered++;

  // Check for lore scroll from Abandoned Library
  if (poi.type.id === 'abandoned_library') {
    const LORE_SCROLLS = [
      'Before the shadows came, this land was ruled by the Sunkeeper Dynasty. Their light faded when the last king broke the Covenant of Dawn.',
      'The monsters are not natural creatures — they are echoes of a great betrayal, bound to relive their rage until someone speaks the old words of peace.',
      'Deep beneath the village lies a sealed gate. The ancients built this settlement to guard it. What sleeps below must never wake.',
      'The Voice that guides the villagers is not the first. Many Voices came before, each choosing a different path. Not all chose wisely.',
      'When five scrolls are united and read under a blood moon, the truth of the Shadow King\'s origin shall be revealed.',
    ];
    const scroll = LORE_SCROLLS[(poi.x + poi.y) % LORE_SCROLLS.length];
    if (!questState.discoveredScrolls.includes(scroll)) {
      questState.discoveredScrolls.push(scroll);
    }
  }
}

// ---------------------------------------------------------------------------
// Display Helpers
// ---------------------------------------------------------------------------

/**
 * Return an array of active quests formatted for UI display.
 *
 * @param {object} questState - Quest state.
 * @returns {{ id: string, title: string, act: number|null, description: string, objectives: { text: string, current: number, target: number, done: boolean }[] }[]}
 */
export function getActiveQuests(questState) {
  return questState.activeQuestIds
    .map(id => questState.quests[id])
    .filter(q => q && q.status === QUEST_STATUS.ACTIVE)
    .map(q => ({
      id: q.id,
      title: q.title,
      act: q.act,
      description: q.description,
      objectives: q.objectives.map(o => ({
        text: o.text,
        current: o.current,
        target: o.target,
        done: o.done,
      })),
    }));
}

/**
 * Return all quests grouped by status for the quest log UI.
 *
 * @param {object} questState - Quest state.
 * @returns {{ active: object[], completed: object[], failed: object[], locked: object[], available: object[] }}
 */
export function getQuestLog(questState) {
  const groups = {
    active: [],
    completed: [],
    failed: [],
    locked: [],
    available: [],
  };

  for (const quest of Object.values(questState.quests)) {
    const entry = {
      id: quest.id,
      title: quest.title,
      act: quest.act,
      description: quest.description,
      objectives: quest.objectives.map(o => ({
        text: o.text,
        current: o.current,
        target: o.target,
        done: o.done,
      })),
      rewards: quest.rewards,
      status: quest.status,
    };

    switch (quest.status) {
      case QUEST_STATUS.ACTIVE:    groups.active.push(entry); break;
      case QUEST_STATUS.COMPLETED: groups.completed.push(entry); break;
      case QUEST_STATUS.FAILED:    groups.failed.push(entry); break;
      case QUEST_STATUS.LOCKED:    groups.locked.push(entry); break;
      case QUEST_STATUS.AVAILABLE: groups.available.push(entry); break;
    }
  }

  // Sort: main quests (by act) before side quests
  const sortByAct = (a, b) => {
    const aAct = a.act || 99;
    const bAct = b.act || 99;
    return aAct - bAct;
  };
  groups.active.sort(sortByAct);
  groups.completed.sort(sortByAct);

  return groups;
}

/**
 * Return a summary of the player's current act progression.
 *
 * @param {object} questState - Quest state.
 * @returns {{ currentAct: number, actTitle: string, mainQuestStatus: string }}
 */
export function getActProgress(questState) {
  const actTitles = {
    1: 'Secure the Perimeter',
    2: 'The Lost Chronicle',
    3: 'The Shadow King',
  };
  const actQuestIds = {
    1: 'secure_perimeter',
    2: 'lost_chronicle',
    3: 'shadow_king',
  };

  // Find the highest act whose quest is active or completed
  for (let act = 3; act >= 1; act--) {
    const quest = questState.quests[actQuestIds[act]];
    if (quest && (quest.status === QUEST_STATUS.ACTIVE || quest.status === QUEST_STATUS.COMPLETED)) {
      return {
        currentAct: act,
        actTitle: actTitles[act],
        mainQuestStatus: quest.status,
      };
    }
  }

  // Default to Act I
  return {
    currentAct: 1,
    actTitle: actTitles[1],
    mainQuestStatus: questState.quests.secure_perimeter
      ? questState.quests.secure_perimeter.status
      : QUEST_STATUS.LOCKED,
  };
}
