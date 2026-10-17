// Loot with personality: unique weapons and relics. Every one helps and every one costs something, and
// some are cursed. You don't know what a thing does, or whether it's cursed, until a wretch wears or
// wields it. What you learn goes in the Codex, which this browser remembers from run to run.
//
// Each wretch carries one weapon and one relic. A unique weapon is an ordinary weapon object with a `key`
// (its art is borrowed from a plain weapon, `art`). A cursed relic will not come off; Thrumm can pry it
// off for silver.
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  const CODEX_KEY = 'quest-borg-codex';

  // kind: weapon | relic. depth: the shallowest floor it turns up on. price: what Thrumm asks.
  // mod: stat changes while worn. text: what it does, revealed when first worn.
  Q.ITEMS = {
    // ---------- weapons ----------
    hook: {
      kind: 'weapon', name: 'Gutting Hook', die: 6, art: 'Knife', depth: 1, price: 35,
      flavor: 'A butcher’s hook, filed sharp. The handle is warm.',
      text: 'Each hit heals you 1 HP. Each miss tears you for 1.',
    },
    widow: {
      kind: 'weapon', name: 'The Widow’s Blade', die: 8, art: 'Sword', depth: 1, price: 60,
      flavor: 'A thin black sword. Its last three owners were married to each other.',
      text: 'A hit heals you half the damage dealt. Your partner bleeds 1 HP for every hit.',
    },
    saint: {
      kind: 'weapon', name: 'Saint’s Femur', die: 4, art: 'Femur', depth: 1, price: 30,
      flavor: 'A thighbone in a silver sleeve, stamped with a name rubbed away by kisses.',
      text: 'Against the dead (the drowned, zombies, skeletons) it strikes +d6. Against the living it is only a bone.',
    },
    plank: {
      kind: 'weapon', name: 'Nail-Studded Plank', die: 4, art: 'Staff', depth: 1, price: 15,
      flavor: 'A coffin lid, broken over someone’s knee and full of nails.',
      text: 'Strikes d4 + d4. A fumble snaps it into splinters (d2).',
    },
    gorgh: {
      kind: 'weapon', name: 'Black Flail of Gorgh', die: 8, art: 'Flail', depth: 2, price: 70,
      flavor: 'The chain is warm and the ball has teeth.',
      text: 'Goes straight through armor. A fumble swings it into your own skull (d8).',
    },
    weeping: {
      kind: 'weapon', name: 'The Weeping Sword', die: 10, art: 'Zweihänder', depth: 2, price: 90,
      flavor: 'Black water runs down the blade and never drips off.',
      text: 'Strikes d10. Every kill it makes costs a day on the Calendar of Nechrubel.',
    },
    // ---------- relics ----------
    crown: {
      kind: 'relic', name: 'Comet Crown', cursed: true, depth: 2, price: 55,
      flavor: 'A ring of black iron spikes, each tipped with a drop of yellow glass.',
      text: 'Sleep brings you one more Omen. Every night you wear it costs an extra day on the Calendar.',
    },
    eye: {
      kind: 'relic', name: 'Eye in a Jar', depth: 1, price: 40, mod: { maxHp: -2 },
      flavor: 'It turns to look at whoever holds the jar.',
      text: 'Every monster on the floor shows on your map, and you see your foes’ exact HP. Max HP −2: it watches you sleep.',
    },
    rosary: {
      kind: 'relic', name: 'Bloodied Rosary', depth: 1, price: 45,
      flavor: 'Beads of knuckle-bone on a gut string, wet no matter how long it dries.',
      text: 'Heals you 1 HP at the start of every round of battle. You cannot read scrolls while you wear it.',
    },
    tongue: {
      kind: 'relic', name: 'Liar’s Tongue', depth: 1, price: 35,
      flavor: 'Dried, pierced, on a string. It still twitches when you lie.',
      text: 'Thrumm charges the party 40% less. Every Presence test you make is at DR +2.',
    },
    glory: {
      kind: 'relic', name: 'Hand of Glory', depth: 1, price: 50,
      flavor: 'A hanged man’s hand, made into a candle. Its fingers burn without burning down.',
      text: 'The party always acts first in battle. Each battle, it burns you for 1 HP.',
    },
    shroud: {
      kind: 'relic', name: 'Pilgrim’s Shroud', depth: 1, price: 65,
      flavor: 'Grey linen with the print of a face on it.',
      text: 'The first time you would die, you are left at 1 HP instead. Then the shroud falls to dust.',
    },
    mirror: {
      kind: 'relic', name: 'Mirror Shard', depth: 1, price: 40,
      flavor: 'In it, you are always a little behind yourself.',
      text: 'When a foe wounds you, 1 in 3 it takes the same wound. Your Defence is at DR +1.',
    },
    mask: {
      kind: 'relic', name: 'Plague Mask', depth: 1, price: 45, mod: { agility: -1 },
      flavor: 'A leather beak stuffed with herbs gone black.',
      text: 'Curses, wails and tolls cannot touch you. Agility −1: you can barely see.',
    },
    heart: {
      kind: 'relic', name: 'Heart of a Saint', cursed: true, depth: 1, price: 40, mod: { maxHp: 4 },
      flavor: 'In a reliquary of green copper. It still beats, slowly.',
      text: 'Max HP +4. You can never lead a retreat: the heart will not let you run.',
    },
    ratking: {
      kind: 'relic', name: 'Rat-King’s Knot', depth: 1, price: 30,
      flavor: 'Seven rat tails, knotted, still faintly warm.',
      text: 'Gutter Rats bow to you and scatter before a battle starts. Every night, rats in the pack eat a poultice.',
    },
    coin: {
      kind: 'relic', name: 'Drowned Man’s Coin', cursed: true, depth: 1, price: 20,
      flavor: 'Green, heavy, and always cold. It was under someone’s tongue.',
      text: 'Every foe the party kills leaves d6 more silver. Every night, d6: on 1–2 the drowned take a day from the Calendar.',
    },
    dirt: {
      kind: 'relic', name: 'Pouch of Grave Dirt', depth: 1, price: 35,
      flavor: 'Earth from your own grave. You don’t remember being buried.',
      text: 'When Broken, a Dead result is rolled again. Poultices heal you only half.',
    },
  };

  // ---------- the Codex ----------
  let codex = new Set();
  try { codex = new Set(JSON.parse(localStorage.getItem(CODEX_KEY) || '[]')); } catch (e) { /* storage may be unavailable */ }
  Q.Codex = {
    known: (key) => codex.has(key),
    learn(key) {
      if (codex.has(key)) return false;
      codex.add(key);
      try { localStorage.setItem(CODEX_KEY, JSON.stringify([...codex])); } catch (e) { /* ignore */ }
      return true;
    },
    count: () => [...codex].filter((k) => Q.ITEMS[k]).length,
  };

  // ---------- who has what ----------
  // True if this wretch wears the relic or wields the weapon called key.
  Q.has = (pc, key) => !!pc && !pc.dead && (pc.relic === key || (pc.weapon && pc.weapon.key === key));
  Q.anyHas = (party, key) => party.some((p) => Q.has(p, key));

  function applyMod(pc, mod, sign) {
    if (!mod) return;
    for (const [stat, v] of Object.entries(mod)) {
      if (stat === 'maxHp') {
        pc.maxHp = Math.max(1, pc.maxHp + v * sign);
        pc.hp = Math.min(pc.hp, pc.maxHp);
        if (v * sign > 0) pc.hp += v * sign;
      } else {
        pc[stat] = Math.max(-3, Math.min(6, pc[stat] + v * sign));
      }
    }
  }

  // Put a relic on (taking off the old one, which is lost). Returns what was learned, for the log.
  Q.wear = function (pc, key) {
    if (pc.relic) Q.takeOff(pc);
    pc.relic = key;
    applyMod(pc, Q.ITEMS[key].mod, 1);
    return Q.Codex.learn(key);
  };
  Q.takeOff = function (pc) {
    if (!pc.relic) return;
    applyMod(pc, Q.ITEMS[pc.relic] && Q.ITEMS[pc.relic].mod, -1);
    pc.relic = null;
  };
  Q.wield = function (pc, key) {
    const it = Q.ITEMS[key];
    pc.weapon = { name: it.name, die: it.die, key, art: it.art };
    return Q.Codex.learn(key);
  };
  Q.cursedOn = (pc) => !!(pc.relic && Q.ITEMS[pc.relic] && Q.ITEMS[pc.relic].cursed);

  // ---------- the pack ----------
  // What a wretch carries besides what's in hand and on their back: pc.pack, a list of
  //   { kind: 'weapon', name, die, key?, art? }   { kind: 'armor', name, tier }
  //   { kind: 'relic', key }                      { kind: 'thing', name, text, small? }
  // Only what is wielded or worn does anything; a unique item's secret waits until then (the Codex).
  Q.packOf = (pc) => pc.pack || (pc.pack = []);
  // A unique item (js/items.js) as a pack item.
  Q.packItem = (key) => {
    const it = Q.ITEMS[key];
    return it.kind === 'weapon' ? { kind: 'weapon', name: it.name, die: it.die, key, art: it.art } : { kind: 'relic', key, name: it.name };
  };
  Q.itemName = (x) => x.name || (x.key && Q.ITEMS[x.key].name) || 'something';
  // What the thing is, in a few words.
  Q.itemLine = (x) => (x.kind === 'weapon' ? `${x.name} (d${x.die})`
    : x.kind === 'armor' ? `${x.name} (−d${Q.ARMOR_DIE[x.tier]})`
      : x.kind === 'relic' ? `${x.name}, a relic` : x.name);
  Q.addToPack = (pc, item) => {
    if (Q.packFull(pc)) return false;
    Q.packOf(pc).push(item);
    return true;
  };
  // Wield, wear or put on the pack's i-th thing; what was in use goes into the pack (a plain femur or a pair
  // of rags is just left behind). Returns { ok, fresh, why }: fresh is what the Codex just learned.
  Q.equip = (pc, i) => {
    const pack = Q.packOf(pc);
    const x = pack[i];
    if (!x) return { ok: false, why: 'nothing there' };
    if (x.kind === 'relic' && Q.cursedOn(pc)) return { ok: false, why: 'their cursed relic won’t come off' };
    pack.splice(i, 1);
    let fresh = false;
    if (x.kind === 'weapon') {
      const old = pc.weapon;
      if (old && !(old.name === 'Femur' && !old.key) && old.name !== 'Splinters') pack.push({ kind: 'weapon', ...old });
      if (x.key) fresh = Q.wield(pc, x.key);
      else pc.weapon = { name: x.name, die: x.die };
    } else if (x.kind === 'armor') {
      const old = pc.armor;
      if (old && old.tier > 0) pack.push({ kind: 'armor', name: old.name, tier: old.tier });
      pc.armor = { name: x.name, tier: x.tier };
    } else if (x.kind === 'relic') {
      const old = pc.relic;
      if (old) { Q.takeOff(pc); pack.push({ kind: 'relic', key: old, name: Q.ITEMS[old].name }); }
      fresh = Q.wear(pc, x.key);
    } else {
      pack.splice(i, 0, x);
      return { ok: false, why: 'that can’t be worn or wielded' };
    }
    return { ok: true, fresh, item: x };
  };
  // Hand the pack's i-th thing to another wretch.
  Q.give = (from, to, i) => {
    const x = Q.packOf(from)[i];
    if (!x) return false;
    if (!Q.addToPack(to, x)) return false;
    Q.packOf(from).splice(i, 1);
    return true;
  };
  // What Thrumm pays for a spare: half its price (at least a silver).
  Q.sellValue = (x) => {
    const price = x.kind === 'relic' || x.key ? Q.ITEMS[x.key].price
      : x.kind === 'weapon' ? (Q.WEAPONS.find((w) => w.name === x.name) || {}).price
        : x.kind === 'armor' ? (Q.ARMOR.find((a) => a.name === x.name) || {}).price : x.price;
    return Math.max(1, Math.floor((price || 2) / 2));
  };

  // A random item not yet found this run, for a floor depth (1 or 2).
  Q.rollItem = function (S, depth, kind) {
    const owned = new Set(S.party.flatMap((p) => [p.relic, p.weapon && p.weapon.key, ...(p.pack || []).map((x) => x.key)]).filter(Boolean));
    const pool = Object.keys(Q.ITEMS).filter((k) => Q.ITEMS[k].depth <= depth && !S.found.includes(k) && !owned.has(k)
      && (!kind || Q.ITEMS[k].kind === kind));
    if (!pool.length) return null;
    const key = pool[Math.floor(Math.random() * pool.length)];
    S.found.push(key);
    return key;
  };

  // What the player is told about an item: everything if it's known, only the flavor if not.
  Q.itemHtml = function (key, esc) {
    const it = Q.ITEMS[key];
    const known = Q.Codex.known(key);
    const head = it.kind === 'weapon' ? `<b>${esc(it.name)}</b> (d${it.die})` : `<b>${esc(it.name)}</b>`;
    return `${head}${known && it.cursed ? ' <span class="pink">cursed</span>' : ''}<br><i>${esc(it.flavor)}</i><br>`
      + (known ? esc(it.text) : `<span class="dim">What it does, you'll learn when you ${it.kind === 'weapon' ? 'wield' : 'wear'} it.</span>`);
  };
})();
