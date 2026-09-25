// Mörk Borg rules, adapted for real-time play.
//
// Tests are d20 + ability against a Difficulty Rating (DR); DR 12 is normal.
// Attacking is a Strength test. Monsters never roll to hit: when one attacks,
// the wretch rolls Defence (an Agility test) to avoid the blow.
// A round is a few seconds of real time instead of a turn.

export const DR = 12;

export const d = (sides) => 1 + Math.floor(Math.random() * sides);

export function roll(n, sides) {
  let total = 0;
  for (let i = 0; i < n; i++) total += d(sides);
  return total;
}

const pick = (list) => list[Math.floor(Math.random() * list.length)];

// 3d6 ability roll to modifier.
export function abilityFromRoll(total) {
  if (total <= 4) return -3;
  if (total <= 6) return -2;
  if (total <= 8) return -1;
  if (total <= 12) return 0;
  if (total <= 14) return 1;
  if (total <= 16) return 2;
  return 3;
}

export const fmt = (n) => (n >= 0 ? '+' + n : '−' + Math.abs(n));

// Starting melee weapons (the bow and crossbow are left out until ranged combat exists).
export const WEAPONS = [
  { name: 'Femur', die: 4 },
  { name: 'Staff', die: 4 },
  { name: 'Shortsword', die: 4 },
  { name: 'Knife', die: 4 },
  { name: 'Warhammer', die: 6 },
  { name: 'Sword', die: 6 },
  { name: 'Flail', die: 8 },
  { name: 'Zweihänder', die: 10 },
];

// Armor tiers reduce damage taken. Heavy armor makes Defence harder.
export const ARMOR = [
  { name: 'Rags', tier: 0 },
  { name: 'Boiled leather', tier: 1 },
  { name: 'Rusted scale', tier: 2 },
  { name: 'Dented plate', tier: 3 },
];
export const ARMOR_DIE = [0, 2, 4, 6];

const NAMES = ['Agnes', 'Brom', 'Cilla', 'Drust', 'Edda', 'Fenk', 'Grete', 'Hask', 'Ilse', 'Jorl', 'Kasimir',
  'Lotte', 'Morg', 'Nils', 'Odda', 'Pell', 'Ragna', 'Sten', 'Tove', 'Ulf', 'Vigga', 'Wendel'];
const EPITHETS = ['the Unwashed', 'Half-Ear', 'of the Ditch', 'Rotfinger', 'the Twice-Hanged', 'Gallowsbait',
  'the Mute', 'Graveborn', 'the Pale', 'Crookback', 'the Last', 'Ninefingers'];
const TRAITS = [
  'Coughs blood when nervous.',
  'Hears the dead whisper, mostly insults.',
  'Has not slept since the comet.',
  'Steals without meaning to.',
  'Laughs at funerals.',
  'Believes the end is deserved.',
  'Carries a dead brother’s tooth.',
  'Smells of wet ash.',
  'Prays to nothing in particular.',
  'Owes silver to someone very patient.',
];

export function rollWretch() {
  const ability = () => abilityFromRoll(roll(3, 6));
  const pc = {
    name: `${pick(NAMES)} ${pick(EPITHETS)}`,
    trait: pick(TRAITS),
    strength: ability(),
    agility: ability(),
    presence: ability(),
    toughness: ability(),
    weapon: WEAPONS[d(WEAPONS.length) - 1],
    armor: { ...ARMOR[d(4) - 1] },
    omens: d(2),
    silver: roll(2, 6) * 10,
    poultices: 3,
    omenMax: false,
    omenWard: false,
  };
  pc.maxHp = Math.max(1, pc.toughness + d(8));
  pc.hp = pc.maxHp;
  return pc;
}

export function healthWord(hp, max) {
  if (hp >= max) return 'Unhurt';
  const r = hp / max;
  if (r > 0.6) return 'Scratched';
  if (r > 0.3) return 'Wounded';
  return 'Near death';
}

export const BESTIARY = {
  zombie: {
    name: 'Rotting Dead',
    hp: () => d(6) + 3,
    damage: 4,
    speed: 0.95,
    sight: 7,
    reach: 1.35,
    round: 2.4,
    swingTime: 0.8,
  },
  skeleton: {
    name: 'Rattling Skeleton',
    hp: () => d(6) + 1,
    damage: 6,
    speed: 1.9,
    sight: 8.5,
    reach: 1.45,
    round: 2.0,
    swingTime: 0.6,
  },
};

// The wretch attacks: Strength test vs DR 12.
// Natural 20 deals double damage. Natural 1 fumbles and costs the next round.
export function attack(pc) {
  const r = d(20);
  const total = r + pc.strength;
  if (r === 1) return { kind: 'fumble', r, total };
  const crit = r === 20;
  if (!crit && total < DR) return { kind: 'miss', r, total };
  let dmg = pc.omenMax ? pc.weapon.die : d(pc.weapon.die);
  const maxed = pc.omenMax;
  pc.omenMax = false;
  if (crit) dmg *= 2;
  return { kind: crit ? 'crit' : 'hit', r, total, dmg, maxed };
}

// A monster attacks: the wretch tests Agility vs DR 12 (DR 14 in heavy armor).
// Natural 20 dodges and grants a free counterattack.
// Natural 1 takes double damage and the armor drops a tier.
export function defend(pc, foeDamageDie) {
  const dr = DR + (pc.armor.tier === 3 ? 2 : 0);
  const r = d(20);
  const total = r + pc.agility;
  if (r === 20) return { kind: 'riposte', r, total, dr };
  if (r !== 1 && total >= dr) return { kind: 'dodge', r, total, dr };
  const fumble = r === 1;
  let dmg = d(foeDamageDie) * (fumble ? 2 : 1);
  const armorDie = ARMOR_DIE[pc.armor.tier];
  const absorbed = armorDie ? Math.min(dmg, d(armorDie)) : 0;
  dmg -= absorbed;
  let brokeArmor = false;
  if (fumble && pc.armor.tier > 0) {
    pc.armor.tier -= 1;
    brokeArmor = true;
  }
  let warded = false;
  if (pc.omenWard && dmg > 0) {
    pc.omenWard = false;
    warded = true;
    dmg = 0;
  }
  return { kind: fumble ? 'fumble' : 'wound', r, total, dr, dmg, absorbed, brokeArmor, warded };
}

// At exactly 0 HP a wretch is Broken. Below 0 they are dead.
export function broken(pc) {
  const r = d(4);
  if (r === 1) return { text: 'You collapse, senseless, into the mud.', stun: 3, dead: false };
  if (r === 2) {
    pc.agility = Math.max(-3, pc.agility - 1);
    return { text: 'A bone snaps. Agility ' + fmt(pc.agility) + '.', stun: 1, dead: false };
  }
  if (r === 3) {
    pc.presence = Math.max(-3, pc.presence - 1);
    return { text: 'An eye is gone. Presence ' + fmt(pc.presence) + '.', stun: 1, dead: false };
  }
  return { text: 'You bleed out between the graves.', stun: 0, dead: true };
}

// Searching a disturbed grave.
export function searchGrave() {
  const r = d(6);
  if (r === 1) return { kind: 'hand', dmg: d(2) };
  if (r <= 3) return { kind: 'silver', amount: roll(2, 6) };
  if (r <= 5) return { kind: 'poultice' };
  return { kind: 'omen' };
}
