/**
 * Morale & Relationships Module — tracks villager happiness and interpersonal bonds.
 * Self-contained module with no external dependencies.
 */

// --- Morale Event Deltas ---
const MORALE_EVENTS = {
  discovery:         +10,
  monster_kill:       +5,
  ally_death:        -15,
  starving:           -5,
  quest_complete:    +20,
  bad_omen:          -10,
  feast:             +12,
  poi_found:          +8,
  combat_victory:     +7,
  building_complete:  +5,
};

// --- Desertion Chances by Personality ---
const DESERTION_CHANCE = {
  default:  0.03,
  Coward:   0.06,
  Stalwart: 0.01,
};

/**
 * Initialize morale and relationships on a villager.
 * @param {object} villager - Villager object to initialize.
 */
export function initMorale(villager) {
  villager.morale = 60;
  villager.relationships = {};
}

/**
 * Apply morale events for a single tick.
 * Mutates villager.morale in place.
 * @param {object} villager - Villager with a morale property.
 * @param {string[]} events - Array of morale event keys (e.g. 'discovery', 'starving').
 */
export function updateMorale(villager, events) {
  for (const event of events) {
    const delta = MORALE_EVENTS[event];
    if (delta !== undefined) {
      villager.morale += delta;
    }
  }
  villager.morale = clamp(villager.morale, 0, 100);
}

/**
 * Compute the gameplay effects of a villager's current morale.
 * @param {object} villager - Villager with a morale property.
 * @returns {{ workSpeedMult: number, canDesert: boolean, moodLabel: string, moodColor: string }}
 */
export function getMoraleEffects(villager) {
  const m = villager.morale;

  if (m > 80) {
    return { workSpeedMult: 1.2, canDesert: false, moodLabel: 'Inspired', moodColor: '#80e880' };
  }
  if (m >= 50) {
    return { workSpeedMult: 1.0, canDesert: false, moodLabel: 'Content', moodColor: '#e0e0e0' };
  }
  if (m >= 25) {
    return { workSpeedMult: 0.8, canDesert: false, moodLabel: 'Uneasy', moodColor: '#e8c840' };
  }
  return { workSpeedMult: 0.5, canDesert: true, moodLabel: 'Despairing', moodColor: '#e85050' };
}

/**
 * Roll whether a villager deserts. Only possible when morale < 25 during night.
 * @param {object} villager - Villager with morale and personality.
 * @returns {boolean} True if the villager deserts this tick.
 */
export function rollDesertion(villager) {
  if (villager.morale >= 25) return false;

  const chance = DESERTION_CHANCE[villager.personality] ?? DESERTION_CHANCE.default;
  return Math.random() < chance;
}

// ---------------------------------------------------------------------------
// Relationship System
// ---------------------------------------------------------------------------

/**
 * Adjust the relationship bond between two villagers in both directions.
 * @param {object} villager1 - First villager.
 * @param {object} villager2 - Second villager.
 * @param {number} delta - Bond change (positive = friendlier, negative = more hostile).
 */
export function updateRelationship(villager1, villager2, delta) {
  if (!villager1.relationships) villager1.relationships = {};
  if (!villager2.relationships) villager2.relationships = {};

  villager1.relationships[villager2.name] =
    clamp((villager1.relationships[villager2.name] || 0) + delta, -100, 100);
  villager2.relationships[villager1.name] =
    clamp((villager2.relationships[villager1.name] || 0) + delta, -100, 100);
}

/**
 * Check all villager pairs for proximity-based bond growth.
 * Working/building together or fighting nearby strengthens bonds.
 * @param {object[]} villagers - Array of all villagers.
 * @param {number} tileSize - Size of a tile in pixels (used for distance calc in tile coords).
 * @returns {{ v1: string, v2: string, delta: number, reason: string }[]} Log of bond updates.
 */
export function checkProximityBonds(villagers, tileSize) {
  const updates = [];

  for (let i = 0; i < villagers.length; i++) {
    for (let j = i + 1; j < villagers.length; j++) {
      const a = villagers[i];
      const b = villagers[j];
      const dist = tileDist(a, b);

      // Working or building together within 2 tiles
      if (dist <= 2 &&
          (a.state === 'working' || a.state === 'building') &&
          (b.state === 'working' || b.state === 'building')) {
        updateRelationship(a, b, 1);
        updates.push({ v1: a.name, v2: b.name, delta: 1, reason: 'working nearby' });
      }

      // Fighting together within 3 tiles
      if (dist <= 3 && a.state === 'fighting' && b.state === 'fighting') {
        updateRelationship(a, b, 3);
        updates.push({ v1: a.name, v2: b.name, delta: 3, reason: 'fighting together' });
      }
    }
  }

  return updates;
}

/**
 * Get a human-readable label and color for a relationship bond value.
 * @param {number} bond - Bond value (-100 to +100).
 * @returns {{ label: string, color: string }}
 */
export function getRelationshipLabel(bond) {
  if (bond > 50)  return { label: 'Friends',  color: '#80e880' };
  if (bond > 20)  return { label: 'Friendly', color: '#a0d0a0' };
  if (bond < -50) return { label: 'Rivals',   color: '#e85050' };
  if (bond < -20) return { label: 'Tense',    color: '#e8c840' };
  return { label: 'Neutral', color: '#aaaaaa' };
}

/**
 * Check whether a close friend is nearby and return a speed bonus.
 * @param {object} villager - The villager to check.
 * @param {object[]} villagers - All villagers in the game.
 * @returns {{ hasFriend: boolean, friendName: string|null, speedBonus: number }}
 */
export function getFriendshipBonus(villager, villagers) {
  if (!villager.relationships) return { hasFriend: false, friendName: null, speedBonus: 0 };

  for (const other of villagers) {
    if (other === villager) continue;
    const bond = villager.relationships[other.name] || 0;
    if (bond > 50 && tileDist(villager, other) <= 3) {
      return { hasFriend: true, friendName: other.name, speedBonus: 0.2 };
    }
  }

  return { hasFriend: false, friendName: null, speedBonus: 0 };
}

/**
 * Process the death of a villager — apply mourning to bonded allies.
 * @param {object} deadVillager - The villager who died.
 * @param {object[]} allVillagers - All living villagers.
 * @returns {{ name: string, bond: number }[]} List of mourning villagers for logging.
 */
export function processAllyDeath(deadVillager, allVillagers) {
  const mourning = [];

  for (const v of allVillagers) {
    if (v === deadVillager) continue;
    const bond = v.relationships?.[deadVillager.name] || 0;
    if (bond > 20) {
      v.morale = clamp((v.morale || 60) - 15, 0, 100);
      v.mourning = 3;
      mourning.push({ name: v.name, bond });
    }
  }

  return mourning;
}

/**
 * Build a context string describing a villager's morale and relationships,
 * suitable for inclusion in AI thought prompts.
 * @param {object} villager - Villager with morale and relationships.
 * @returns {string} Human-readable morale context.
 */
export function getMoraleContext(villager) {
  const effects = getMoraleEffects(villager);
  const parts = [`Morale is ${describeMoraleLevel(villager.morale)} (${villager.morale}/100).`];

  // Collect notable relationships
  const rels = villager.relationships || {};
  const entries = Object.entries(rels)
    .sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));

  for (const [name, bond] of entries) {
    if (bond > 50) {
      parts.push(`Close friend: ${name} (bond ${bond}).`);
    } else if (bond > 20) {
      parts.push(`Friendly with: ${name} (bond ${bond}).`);
    } else if (bond < -50) {
      parts.push(`Rival: ${name} (bond ${bond}).`);
    } else if (bond < -20) {
      parts.push(`Tense with: ${name} (bond ${bond}).`);
    }
  }

  parts.push(`Currently ${effects.moodLabel.toLowerCase()}.`);

  return parts.join(' ');
}

// ---------------------------------------------------------------------------
// Internal Helpers
// ---------------------------------------------------------------------------

/**
 * Clamp a number between min and max (inclusive).
 */
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Euclidean distance between two villagers in tile coordinates.
 */
function tileDist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Describe morale level in words.
 */
function describeMoraleLevel(morale) {
  if (morale > 80) return 'high';
  if (morale >= 50) return 'stable';
  if (morale >= 25) return 'low';
  return 'critically low';
}
