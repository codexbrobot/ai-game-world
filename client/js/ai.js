/**
 * AI Provider Module — OpenAI ChatGPT integration.
 * Stores API keys in localStorage. Calls OpenAI directly from the browser.
 */

const STORAGE_KEY = 'ai-village-openai-key';
const MODEL_KEY = 'ai-village-openai-model';
const DEFAULT_MODEL = 'gpt-4o-mini';

export function getApiKey() {
  return localStorage.getItem(STORAGE_KEY) || '';
}

export function setApiKey(key) {
  if (key) {
    localStorage.setItem(STORAGE_KEY, key.trim());
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export function getModel() {
  return localStorage.getItem(MODEL_KEY) || DEFAULT_MODEL;
}

export function setModel(model) {
  localStorage.setItem(MODEL_KEY, model);
}

export function isAiEnabled() {
  return getApiKey().length > 0;
}

/**
 * Test the API key by making a minimal request.
 * Returns { ok: true } or { ok: false, error: string }.
 */
export async function testConnection() {
  const key = getApiKey();
  if (!key) return { ok: false, error: 'No API key set' };

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: getModel(),
        messages: [{ role: 'user', content: 'Say "ok"' }],
        max_tokens: 3,
      }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { ok: false, error: data.error?.message || `HTTP ${res.status}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

/**
 * Get an AI-interpreted guidance response.
 * The villager "filters" the player's guidance through their personality.
 *
 * @param {object} villager - { name, role, personality }
 * @param {string} question - The villager's question
 * @param {string} playerGuidance - What the player typed
 * @returns {Promise<string>} The villager's interpreted response
 */
export async function getGuidanceResponse(villager, question, playerGuidance) {
  const key = getApiKey();
  if (!key) return null;

  const systemPrompt = `You are ${villager.name}, a ${villager.role} in a medieval village. Your personality type is "${villager.personality}".

Personality interpretations:
- Stalwart: Brave, literal, follows orders precisely
- Skeptic: Questions everything, sometimes ignores guidance
- Dreamer: Creative interpretations, occasionally brilliant insights
- Coward: Cautious to a fault, great at survival, bad at risk
- Zealot: Extreme faith, may over-interpret vague guidance
- Pragmatist: Weighs cost/benefit, ignores "impractical" advice

You asked The Voice (a spiritual guide) this question: "${question}"

The Voice responded. You must now interpret their guidance through your personality. Respond in first person as the villager, in 1-2 short sentences. Show how your personality colors your interpretation. Be concise and in-character.`;

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: getModel(),
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `The Voice says: "${playerGuidance}"` },
        ],
        max_tokens: 100,
        temperature: 0.8,
      }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.choices?.[0]?.message?.content?.trim() || null;
  } catch {
    return null;
  }
}

/**
 * Get an AI "conscience" response to a villager's inner thought.
 * Sends villager context (stats, class, personality, previous thoughts) for rich responses.
 *
 * @param {object} villager - Full villager object
 * @param {string} thought - The villager's current thought/question
 * @param {object} gameContext - { day, tick, phase, resources }
 * @returns {Promise<string|null>} The conscience's response
 */
export async function getThoughtResponse(villager, thought, gameContext) {
  const key = getApiKey();
  if (!key) return null;

  // Build previous thoughts summary (last 5)
  const prevThoughts = (villager.thoughts || []).slice(-5);
  const historyBlock = prevThoughts.length > 0
    ? `\nYour recent thoughts and reflections:\n${prevThoughts.map(t => `- Thought: "${t.thought}" → Reflection: "${t.response}"`).join('\n')}`
    : '\nYou have had no previous reflections yet.';

  const systemPrompt = `You are the inner conscience of ${villager.name}, a ${villager.raceLabel} ${villager.classLabel} in a medieval village called "AI Village: Realm of Shadows."

Your personality type: ${villager.personality}
Race: ${villager.raceLabel} | Class: ${villager.classLabel} | Role: ${villager.role}
Stats — Speed: ${villager.stats.speed}, Strength: ${villager.stats.strength}, Charisma: ${villager.stats.charisma}
HP: ${villager.hp}/${villager.maxHp}
Current state: ${villager.state}
Day: ${gameContext.day}, Time: ${gameContext.phase} (tick ${gameContext.tick}/24)
Village resources — Wood: ${gameContext.resources.wood}, Stone: ${gameContext.resources.stone}, Food: ${gameContext.resources.food}, Iron: ${gameContext.resources.iron}
${historyBlock}

Personality guide:
- Stalwart: Brave, determined, stoic inner voice
- Skeptic: Questioning, analytical, doubts easily
- Dreamer: Imaginative, hopeful, sees possibilities
- Coward: Anxious, cautious, survival-focused
- Zealot: Fervent, purpose-driven, sees signs everywhere
- Pragmatist: Practical, weighs options, no-nonsense

You are this villager's inner voice — their conscience answering their thought. Respond in 1-2 short sentences as their internal reflection. Stay deeply in character with their personality. Your response may subtly influence what they decide to do next. Be concise and flavorful.`;

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: getModel(),
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: thought },
        ],
        max_tokens: 80,
        temperature: 0.9,
      }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    return data.choices?.[0]?.message?.content?.trim() || null;
  } catch {
    return null;
  }
}
