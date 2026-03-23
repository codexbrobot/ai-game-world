// event-chains.js — Cascading event chain system for AI Village: Realm of Shadows
// Pure ES module, no external imports required.
// Returns effect descriptors only — never mutates game state directly.

// ---------------------------------------------------------------------------
// Random helpers (local copies to stay self-contained)
// ---------------------------------------------------------------------------
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ---------------------------------------------------------------------------
// Chain definitions
// ---------------------------------------------------------------------------
const CHAIN_DEFS = {
  plague: {
    id: 'plague',
    title: 'The Spreading Plague',
    repeatable: false,
    stages: [
      {
        delay: 0,
        title: 'Sickness Spreads',
        description:
          'A foul miasma seeps from the unearthed plague pit. Villagers clutch their stomachs and collapse in the streets — the sickness has already taken root.',
        effects: { damageRandom: { count: 3, amount: 2 } },
      },
      {
        delay: 5,
        title: 'Plague Worsens',
        description:
          'The plague tightens its grip. Fever-sweat glistens on every brow. Without herbal remedy, the village will become a charnel house.',
        condition: (_chain, gs) => gs.resources.herbs < 5,
        effects: { damageAll: 2 },
      },
      {
        delay: 5,
        title: 'Mass Grave',
        description:
          'The weakest succumb at last. Their bodies are dragged to a shallow trench at the village edge — there is no strength left for proper burial.',
        condition: (_chain, gs) => gs.resources.herbs < 5,
        effects: { kill: 2 },
      },
    ],
    resolution: {
      title: 'Plague Cured',
      description:
        'Bitter poultices and desperate prayers drive the sickness back. The survivors weep — not from sorrow, but relief.',
      condition: (_chain, gs) => gs.resources.herbs >= 5,
      effects: { resources: { herbs: -5 }, healAll: 2 },
    },
  },

  war: {
    id: 'war',
    title: 'The Blood Moon War',
    repeatable: false,
    stages: [
      {
        delay: 0,
        title: 'Blood Moon Rising',
        description:
          'The sky bleeds crimson. From the treeline, a chorus of snarls rises — twice the usual number of beasts pour from the darkness.',
        effects: { spawnMonsters: ['shadow_beast', 'shadow_beast', 'wraith', 'wraith'] },
      },
      {
        delay: 0,
        title: 'Monster Camp Established',
        description:
          'The surviving creatures do not retreat with the dawn. They have dug in among the ruins, establishing a fetid camp within sight of the village walls.',
        // This stage is advanced manually in updateChains when dawn arrives
        // and 3+ monsters survived the blood moon night.
        condition: (chain) => chain.data.dawnArrived && chain.data.survivingMonsters >= 3,
        effects: { spawnMonsterCamp: true },
      },
      {
        delay: 5,
        title: 'Raiding Party',
        description:
          'A raiding party strikes from the monster camp! Twisted shapes lope toward the village, hungry for blood.',
        condition: (chain) => chain.data.campActive,
        effects: { spawnMonsters: ['shadow_beast', 'wraith'] },
        repeating: true,
      },
    ],
    resolution: {
      title: 'Camp Destroyed',
      description:
        'The last beast falls. The camp is put to the torch — greasy smoke rises as the threat is finally ended.',
      condition: (chain) => chain.data.campActive && chain.data.campCleared,
      effects: { removeMonsterCamp: true, faith: 10 },
    },
  },

  faith_crisis: {
    id: 'faith_crisis',
    title: 'Crisis of Faith',
    repeatable: false,
    stages: [
      {
        delay: 0,
        title: 'Crisis of Faith',
        description:
          'Doubt gnaws at the village like rot in timber. The chapel stands empty. Whispers of abandonment spread from hearth to hearth.',
        effects: {},
      },
      {
        delay: 3,
        title: "The Zealot's Demand",
        description:
          'A wild-eyed zealot seizes the pulpit, voice cracking with fervor: "The spirits demand sacrifice! Offer food to the flame, or I walk — and your souls walk with me."',
        condition: (_chain, _gs, villagers) =>
          villagers && villagers.some((v) => v.personality === 'Zealot'),
        choice: {
          prompt:
            'The Zealot demands a sacrifice of food to restore the village\'s faith. What do you decide?',
          options: [
            {
              label: 'Sacrifice 5 food to the spirits',
              effects: { faith: 50, resources: { food: -5 }, setFaith: 50 },
            },
            {
              label: 'Refuse the Zealot\'s demand',
              effects: { setFaith: 0, desertVillager: 'Zealot' },
            },
          ],
        },
        effects: {},
      },
      {
        delay: 3,
        title: 'Silent Despair',
        description:
          'Without a voice to rally them, the villagers sink into hollow silence. Eyes stare at nothing. Hands hang limp at sides. Hope has left this place.',
        condition: (_chain, _gs, villagers) =>
          !villagers || !villagers.some((v) => v.personality === 'Zealot'),
        effects: { morale: -10 },
      },
    ],
    resolution: {
      title: 'Faith Restored',
      description:
        'Light returns to weary eyes. Whether by miracle or determination, the village remembers what it means to believe.',
      condition: (_chain, gs) => gs.faith > 40,
      effects: {},
    },
  },

  prosperity: {
    id: 'prosperity',
    title: 'Time of Plenty',
    repeatable: true,
    stages: [
      {
        delay: 0,
        title: 'Time of Plenty',
        description:
          'The granaries overflow. Children laugh in the streets. For the first time in memory, there is more than enough.',
        effects: { morale: 5 },
      },
      {
        delay: 5,
        title: 'Village Celebration',
        description:
          'Music drifts through the evening air as the village gathers to celebrate its fortune. A stranger at the gate asks to join — another soul drawn by word of plenty.',
        condition: (_chain, gs, villagers) =>
          gs.resources.food > (villagers ? villagers.length * 2 : 0),
        effects: { faith: 10, newVillagers: 1 },
      },
      {
        delay: 8,
        title: 'Renown Spreads',
        description:
          'A merchant caravan crests the hill, banners snapping. Word of the village\'s prosperity has traveled far — and they bring rare goods to trade.',
        condition: (_chain, gs, villagers) =>
          gs.resources.food > (villagers ? villagers.length * 2 : 0),
        effects: { spawnMerchant: true },
      },
    ],
    resolution: {
      title: 'Lean Times Return',
      description:
        'The abundance fades. Portions shrink, laughter quiets. The golden days are over — for now.',
      condition: (_chain, gs, villagers) =>
        gs.resources.food < (villagers ? villagers.length : 1),
      effects: {},
    },
  },

  exploration: {
    id: 'exploration',
    title: 'Charting the Unknown',
    repeatable: false,
    stages: [
      {
        delay: 0,
        title: 'The Map Takes Shape',
        description:
          'Scouts return with ink-stained parchment. The blank edges of the map begin to fill — familiar landmarks connect to unknown territories beyond.',
        effects: { revealSpots: 2, revealRadius: 3 },
      },
      {
        delay: 0,
        title: 'Ancient Boundaries',
        description:
          'At the edge of explored lands, scouts discover weathered stone markers covered in forgotten script. These ancient boundaries speak of a civilization that knew this land long before.',
        condition: (chain) => chain.data.explorationPct >= 75,
        effects: { faith: 10, loreText: 'The boundary stones whisper of the Old Realm — a kingdom swallowed by shadow centuries ago. Its borders match the village\'s own.' },
      },
      {
        delay: 0,
        title: 'The World Revealed',
        description:
          'The final corners of the map are filled. Every ridge, every hollow, every ruin is marked. The scouts stand taller now — they have seen the whole of their world, and they are not afraid.',
        condition: (chain) => chain.data.explorationPct >= 95,
        effects: { sightRadiusBonus: 1 },
      },
    ],
    resolution: null, // This chain completes naturally at stage 3
  },
};

// ---------------------------------------------------------------------------
// createChainState — initialize event chain tracking
// ---------------------------------------------------------------------------

/**
 * Creates a fresh chain state object for tracking active and completed event chains.
 * @returns {{ activeChains: Array, completedChains: string[], prosperityCounter: number }}
 */
export function createChainState() {
  return {
    activeChains: [],       // { chainId, currentStage, ticksInStage, resolved, data: {} }
    completedChains: [],    // chainId strings
    prosperityCounter: 0,   // ticks of consecutive prosperity
  };
}

// ---------------------------------------------------------------------------
// checkChainTriggers — evaluate whether new chains should start
// ---------------------------------------------------------------------------

/**
 * Checks game conditions for chain trigger criteria. Returns info about any
 * newly started chains. Does not mutate game state.
 * @param {object} chainState - Current chain state from createChainState()
 * @param {object} gameState - Current game state { day, tick, resources, faith, events }
 * @param {Array} villagers - Array of villager objects
 * @param {Array} pois - Array of point-of-interest objects
 * @param {Array} eventHistory - Recent event history entries
 * @returns {Array<{ chainId: string, description: string }>} Newly triggered chains
 */
export function checkChainTriggers(chainState, gameState, villagers, pois, eventHistory) {
  const triggered = [];
  const activeIds = chainState.activeChains.map((c) => c.chainId);

  // Helper: is a chain eligible to start?
  function canStart(id) {
    if (activeIds.includes(id)) return false;
    const def = CHAIN_DEFS[id];
    if (!def) return false;
    if (!def.repeatable && chainState.completedChains.includes(id)) return false;
    return true;
  }

  // --- Plague: triggered when plague_pit POI is discovered ---
  if (canStart('plague')) {
    const hasPlaguePit = pois && pois.some(
      (p) => p.id === 'plague_pit' && p.discovered
    );
    if (hasPlaguePit) {
      startChain(chainState, 'plague');
      triggered.push({
        chainId: 'plague',
        description: CHAIN_DEFS.plague.stages[0].description,
      });
    }
  }

  // --- War: triggered by blood_moon event ---
  if (canStart('war')) {
    const bloodMoonFired = eventHistory && eventHistory.some(
      (e) => {
        const txt = typeof e === 'string' ? e : (e.text || e.id || '');
        return txt.toLowerCase().includes('blood moon');
      }
    );
    if (bloodMoonFired) {
      startChain(chainState, 'war');
      triggered.push({
        chainId: 'war',
        description: CHAIN_DEFS.war.stages[0].description,
      });
    }
  }

  // --- Faith Crisis: triggered when faith drops below 20 ---
  if (canStart('faith_crisis')) {
    if (gameState.faith !== undefined && gameState.faith < 20) {
      startChain(chainState, 'faith_crisis');
      triggered.push({
        chainId: 'faith_crisis',
        description: CHAIN_DEFS.faith_crisis.stages[0].description,
      });
    }
  }

  // --- Prosperity: triggered when food > 2x villager count for 3 consecutive ticks ---
  if (canStart('prosperity')) {
    const villagerCount = villagers ? villagers.length : 0;
    if (villagerCount > 0 && gameState.resources.food > villagerCount * 2) {
      chainState.prosperityCounter++;
    } else {
      chainState.prosperityCounter = 0;
    }
    if (chainState.prosperityCounter >= 3) {
      startChain(chainState, 'prosperity');
      chainState.prosperityCounter = 0;
      triggered.push({
        chainId: 'prosperity',
        description: CHAIN_DEFS.prosperity.stages[0].description,
      });
    }
  }

  // --- Exploration: triggered when exploration reaches 50% ---
  if (canStart('exploration')) {
    const explorationPct = calculateExplorationPct(pois, gameState);
    if (explorationPct >= 50) {
      const chain = startChain(chainState, 'exploration');
      chain.data.explorationPct = explorationPct;
      triggered.push({
        chainId: 'exploration',
        description: CHAIN_DEFS.exploration.stages[0].description,
      });
    }
  }

  return triggered;
}

// ---------------------------------------------------------------------------
// updateChains — advance all active chains by one tick
// ---------------------------------------------------------------------------

/**
 * Advances all active chains by one tick. Checks stage conditions, fires
 * stage events, and detects resolutions. Returns effect descriptors.
 * @param {object} chainState - Current chain state
 * @param {object} gameState - Current game state
 * @param {Array} villagers - Array of villager objects
 * @param {Array} pois - Array of point-of-interest objects
 * @returns {{ stageEvents: Array, choices: Array, resolved: Array }}
 */
export function updateChains(chainState, gameState, villagers, pois) {
  const result = {
    stageEvents: [],
    choices: [],
    resolved: [],
  };

  // Iterate over a copy so we can modify activeChains during iteration
  const chainsSnapshot = [...chainState.activeChains];

  for (const chain of chainsSnapshot) {
    if (chain.resolved) continue;

    const def = CHAIN_DEFS[chain.chainId];
    if (!def) continue;

    // --- Check resolution condition first ---
    if (def.resolution && def.resolution.condition) {
      if (def.resolution.condition(chain, gameState, villagers)) {
        chain.resolved = true;
        result.resolved.push({
          chainId: chain.chainId,
          resolution: def.resolution.title,
          description: def.resolution.description,
          effects: def.resolution.effects || {},
        });
        finalizeChain(chainState, chain);
        continue;
      }
    }

    // --- Update war chain data ---
    if (chain.chainId === 'war') {
      updateWarChainData(chain, gameState, villagers, pois);
    }

    // --- Update exploration chain data ---
    if (chain.chainId === 'exploration') {
      chain.data.explorationPct = calculateExplorationPct(pois, gameState);
    }

    // Increment tick counter for current stage
    chain.ticksInStage++;

    // --- Determine if next stage should fire ---
    const currentStageDef = def.stages[chain.currentStage];
    if (!currentStageDef) {
      // All stages exhausted — complete the chain
      chain.resolved = true;
      finalizeChain(chainState, chain);
      result.resolved.push({
        chainId: chain.chainId,
        resolution: 'completed',
      });
      continue;
    }

    // For repeating stages (war raiding party), check if delay has elapsed again
    if (currentStageDef.repeating && chain.data.stageAlreadyFired) {
      if (chain.ticksInStage >= currentStageDef.delay) {
        const conditionMet = !currentStageDef.condition ||
          currentStageDef.condition(chain, gameState, villagers);
        if (conditionMet) {
          chain.ticksInStage = 0;
          result.stageEvents.push({
            chainId: chain.chainId,
            stage: chain.currentStage,
            title: currentStageDef.title,
            description: currentStageDef.description,
            effects: { ...currentStageDef.effects },
          });
        }
      }
      continue;
    }

    // Check if this is the initial stage (delay 0) that hasn't fired yet
    const shouldFire = chain.currentStage === 0 && chain.ticksInStage === 1 && currentStageDef.delay === 0
      ? true
      : chain.ticksInStage >= currentStageDef.delay && currentStageDef.delay > 0;

    if (!shouldFire && !(currentStageDef.delay === 0 && chain.ticksInStage >= 1 && !chain.data.stageAlreadyFired)) {
      continue;
    }

    // For stages with delay 0 that aren't the first tick, check condition
    if (currentStageDef.delay === 0 && chain.currentStage > 0 && chain.data.stageAlreadyFired) {
      // Condition-gated stage with no delay — check each tick
      continue;
    }

    // Check stage condition
    if (currentStageDef.condition) {
      const conditionMet = currentStageDef.condition(chain, gameState, villagers);
      if (!conditionMet) {
        // For delay-0 stages, keep checking each tick
        if (currentStageDef.delay === 0 && chain.currentStage > 0) {
          continue;
        }
        // For timed stages, skip to next stage if condition fails at the deadline
        if (currentStageDef.delay > 0 && chain.ticksInStage >= currentStageDef.delay) {
          advanceStage(chain);
        }
        continue;
      }
    }

    // Delay check for timed stages
    if (currentStageDef.delay > 0 && chain.ticksInStage < currentStageDef.delay) {
      continue;
    }

    // --- Fire the stage ---
    chain.data.stageAlreadyFired = true;

    // If stage has a player choice, emit that instead of effects
    if (currentStageDef.choice) {
      chain.data.pendingChoice = true;
      result.choices.push({
        chainId: chain.chainId,
        stage: chain.currentStage,
        prompt: currentStageDef.choice.prompt,
        options: currentStageDef.choice.options.map((opt) => ({
          label: opt.label,
          effects: { ...opt.effects },
        })),
      });
      continue;
    }

    result.stageEvents.push({
      chainId: chain.chainId,
      stage: chain.currentStage,
      title: currentStageDef.title,
      description: currentStageDef.description,
      effects: { ...currentStageDef.effects },
    });

    // Advance to next stage unless this stage repeats
    if (!currentStageDef.repeating) {
      advanceStage(chain);
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// resolveChoice — apply a player's decision for a pending chain choice
// ---------------------------------------------------------------------------

/**
 * Resolves a pending player choice for a chain. Returns the effects of the
 * chosen option so the caller can apply them.
 * @param {object} chainState - Current chain state
 * @param {string} chainId - ID of the chain with a pending choice
 * @param {number} choiceIndex - Index of the chosen option (0-based)
 * @returns {object|null} Effects of the chosen option, or null if invalid
 */
export function resolveChoice(chainState, chainId, choiceIndex) {
  const chain = chainState.activeChains.find(
    (c) => c.chainId === chainId && !c.resolved
  );
  if (!chain || !chain.data.pendingChoice) return null;

  const def = CHAIN_DEFS[chainId];
  if (!def) return null;

  const stageDef = def.stages[chain.currentStage];
  if (!stageDef || !stageDef.choice) return null;

  const option = stageDef.choice.options[choiceIndex];
  if (!option) return null;

  chain.data.pendingChoice = false;
  const effects = { ...option.effects };

  // Advance to next stage after choice is made
  advanceStage(chain);

  return effects;
}

// ---------------------------------------------------------------------------
// cancelChain — end a chain early with a given resolution
// ---------------------------------------------------------------------------

/**
 * Cancels an active chain, marking it as resolved with a custom resolution string.
 * @param {object} chainState - Current chain state
 * @param {string} chainId - ID of the chain to cancel
 * @param {string} resolution - Description of why the chain ended
 * @returns {boolean} True if the chain was found and cancelled
 */
export function cancelChain(chainState, chainId, resolution) {
  const chain = chainState.activeChains.find(
    (c) => c.chainId === chainId && !c.resolved
  );
  if (!chain) return false;

  chain.resolved = true;
  chain.data.resolution = resolution || 'cancelled';
  finalizeChain(chainState, chain);
  return true;
}

// ---------------------------------------------------------------------------
// getActiveChainSummaries — HUD display data for active chains
// ---------------------------------------------------------------------------

/**
 * Returns summary objects for all active (unresolved) chains, suitable for
 * rendering in the HUD overlay.
 * @param {object} chainState - Current chain state
 * @returns {Array<{ chainId: string, title: string, stage: number, description: string, urgent: boolean }>}
 */
export function getActiveChainSummaries(chainState) {
  return chainState.activeChains
    .filter((c) => !c.resolved)
    .map((chain) => {
      const def = CHAIN_DEFS[chain.chainId];
      if (!def) return null;

      const stageDef = def.stages[chain.currentStage];
      const title = stageDef ? stageDef.title : def.title;
      const description = stageDef ? stageDef.description : '';
      const urgent = !!(chain.data.pendingChoice);

      return {
        chainId: chain.chainId,
        title,
        stage: chain.currentStage,
        description,
        urgent,
      };
    })
    .filter(Boolean);
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/**
 * Starts a new chain and adds it to chainState.activeChains.
 * @param {object} chainState
 * @param {string} chainId
 * @returns {object} The newly created chain entry
 */
function startChain(chainState, chainId) {
  const chain = {
    chainId,
    currentStage: 0,
    ticksInStage: 0,
    resolved: false,
    data: {},
  };
  chainState.activeChains.push(chain);
  return chain;
}

/**
 * Advances a chain to the next stage, resetting the tick counter.
 * @param {object} chain - Active chain entry
 */
function advanceStage(chain) {
  chain.currentStage++;
  chain.ticksInStage = 0;
  chain.data.stageAlreadyFired = false;
}

/**
 * Finalizes a resolved chain — moves its ID to completedChains and removes
 * it from activeChains.
 * @param {object} chainState
 * @param {object} chain
 */
function finalizeChain(chainState, chain) {
  if (!chainState.completedChains.includes(chain.chainId)) {
    chainState.completedChains.push(chain.chainId);
  }
  chainState.activeChains = chainState.activeChains.filter(
    (c) => c !== chain
  );
}

/**
 * Updates war-chain-specific tracking data (dawn arrival, surviving monsters,
 * camp status).
 * @param {object} chain - The war chain entry
 * @param {object} gameState
 * @param {Array} villagers
 * @param {Array} pois
 */
function updateWarChainData(chain, gameState, _villagers, pois) {
  // Detect dawn after blood moon
  if (gameState.tick >= 23 || gameState.tick === 24) {
    chain.data.dawnArrived = true;
  }

  // Count surviving monsters near the village (caller must set this)
  // We use chain.data.survivingMonsters which should be updated by the game loop
  // Default to checking if it's been set
  if (chain.data.survivingMonsters === undefined) {
    chain.data.survivingMonsters = 0;
  }

  // Check if monster camp POI exists
  if (pois) {
    const camp = pois.find((p) => p.id === 'monster_camp' && p.active);
    chain.data.campActive = !!camp;

    // Check if camp is cleared (no monsters within 3 tiles of camp)
    if (camp && chain.data.monstersNearCamp !== undefined) {
      chain.data.campCleared = chain.data.monstersNearCamp === 0;
    }
  }
}

/**
 * Calculates exploration percentage from POI and game state data.
 * Uses gameState.explorationPct if available, otherwise estimates from POIs.
 * @param {Array} pois
 * @param {object} gameState
 * @returns {number} Exploration percentage (0-100)
 */
function calculateExplorationPct(pois, gameState) {
  // Prefer explicit exploration percentage from game state
  if (gameState.explorationPct !== undefined) {
    return gameState.explorationPct;
  }

  // Fallback: estimate from discovered POIs
  if (!pois || pois.length === 0) return 0;
  const discovered = pois.filter((p) => p.discovered).length;
  return Math.round((discovered / pois.length) * 100);
}
