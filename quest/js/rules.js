// Mörk Borg rules, turn by turn.
//
// Tests are d20 + ability against a Difficulty Rating (DR); DR 12 is normal.
// Attacking is a Strength test against the foe's DR. Monsters never roll to hit:
// when one attacks, the wretch rolls Defence (an Agility test) to avoid the blow.
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  const DR = 12;
  const d = (sides) => 1 + Math.floor(Math.random() * sides);
  const roll = (n, sides) => {
    let total = 0;
    for (let i = 0; i < n; i++) total += d(sides);
    return total;
  };
  const pick = (list) => list[Math.floor(Math.random() * list.length)];
  const fmt = (n) => (n >= 0 ? '+' + n : '−' + Math.abs(n));

  // 3d6 ability roll to modifier.
  function abilityFromRoll(total) {
    if (total <= 4) return -3;
    if (total <= 6) return -2;
    if (total <= 8) return -1;
    if (total <= 12) return 0;
    if (total <= 14) return 1;
    if (total <= 16) return 2;
    return 3;
  }

  const WEAPONS = [
    { name: 'Femur', die: 4, price: 1 },
    { name: 'Knife', die: 4, price: 6 },
    { name: 'Staff', die: 4, price: 5 },
    { name: 'Shortsword', die: 4, price: 15 },
    { name: 'Warhammer', die: 6, price: 30 },
    { name: 'Sword', die: 6, price: 30 },
    { name: 'Flail', die: 8, price: 45 },
    { name: 'Zweihänder', die: 10, price: 80 },
  ];

  // Armor tiers soak damage. Heavy armor makes Defence harder.
  const ARMOR = [
    { name: 'Rags', tier: 0, price: 0 },
    { name: 'Boiled leather', tier: 1, price: 20 },
    { name: 'Rusted scale', tier: 2, price: 60 },
    { name: 'Dented plate', tier: 3, price: 150 },
  ];
  const ARMOR_DIE = [0, 2, 4, 6];

  // Scrolls. Reading one is a Presence test; each wretch has Presence + d4 uses a day.
  const SCROLLS = {
    flame: { name: 'Psalm of Black Flame', kind: 'unclean', text: 'Black fire eats a foe for d8 damage.' },
    mend: { name: 'Rite of Mending Bone', kind: 'sacred', text: 'Knits your flesh: heal d6 HP and stop bleeding.' },
  };

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

  function rollWretch() {
    const ability = () => abilityFromRoll(roll(3, 6));
    // Starting gear comes from the cheaper half of the lists, as in the rulebook.
    const weapon = WEAPONS[d(6) - 1];
    const armor = ARMOR[d(3) - 1];
    const pc = {
      name: `${pick(NAMES)} ${pick(EPITHETS)}`,
      trait: pick(TRAITS),
      strength: ability(),
      agility: ability(),
      presence: ability(),
      toughness: ability(),
      weapon: { name: weapon.name, die: weapon.die },
      armor: { name: armor.name, tier: armor.tier },
      omens: d(2),
      silver: roll(2, 6) * 10,
      poultices: 2,
      scrolls: [],
      kills: 0,
      killsSinceBetter: 0,
      bleeding: false,
      omenMax: false,
      omenWard: false,
    };
    pc.maxHp = Math.max(1, pc.toughness + d(8));
    pc.hp = pc.maxHp;
    pc.powers = Math.max(0, pc.presence + d(4));
    return pc;
  }

  function healthWord(hp, max) {
    if (hp >= max) return 'Unhurt';
    const r = hp / max;
    if (r > 0.6) return 'Scratched';
    if (r > 0.3) return 'Bloodied';
    return 'Near death';
  }

  // A generic test: d20 + ability vs DR.
  function test(ability, dr) {
    const r = d(20);
    const total = r + ability;
    return { r, total, dr, ok: r !== 1 && (r === 20 || total >= dr), crit: r === 20, fumble: r === 1 };
  }

  // The wretch attacks: Strength test vs the foe's DR.
  // Natural 20 deals double damage. Natural 1 fumbles and the foe gets a free blow.
  function attack(pc, foe) {
    const t = test(pc.strength, foe.dr);
    if (t.fumble) return { kind: 'fumble', ...t };
    if (!t.ok) return { kind: 'miss', ...t };
    let dmg = pc.omenMax ? pc.weapon.die : d(pc.weapon.die);
    const maxed = pc.omenMax;
    pc.omenMax = false;
    if (t.crit) dmg *= 2;
    const absorbed = foe.armor ? Math.min(dmg, d(foe.armor)) : 0;
    dmg -= absorbed;
    return { kind: t.crit ? 'crit' : 'hit', ...t, dmg, absorbed, maxed };
  }

  // A foe attacks: the wretch tests Agility vs DR 12 (DR 14 in plate).
  // Natural 20 dodges and grants a free counterattack.
  // Natural 1 takes double damage and the armor drops a tier.
  function defend(pc, foeDie) {
    const t = test(pc.agility, DR + (pc.armor.tier === 3 ? 2 : 0));
    if (t.crit) return { kind: 'riposte', ...t };
    if (t.ok) return { kind: 'dodge', ...t };
    let dmg = d(foeDie) * (t.fumble ? 2 : 1);
    const armorDie = ARMOR_DIE[pc.armor.tier];
    const absorbed = armorDie ? Math.min(dmg, d(armorDie)) : 0;
    dmg -= absorbed;
    let brokeArmor = false;
    if (t.fumble && pc.armor.tier > 0) {
      pc.armor.tier -= 1;
      pc.armor.name = ARMOR[pc.armor.tier].name;
      brokeArmor = true;
    }
    let warded = false;
    if (pc.omenWard && dmg > 0) {
      pc.omenWard = false;
      warded = true;
      dmg = 0;
    }
    return { kind: t.fumble ? 'fumble' : 'wound', ...t, dmg, absorbed, brokeArmor, warded };
  }

  // At exactly 0 HP a wretch is Broken. Below 0 they are dead.
  function broken(pc) {
    const r = d(4);
    if (r === 1) {
      pc.hp = d(4);
      return { text: 'You black out in the filth, then wake with ' + pc.hp + ' HP.', dead: false, lostTurn: true };
    }
    if (r === 2) {
      pc.hp = d(4);
      if (d(6) === 6) {
        pc.presence = Math.max(-3, pc.presence - 1);
        pc.lostEye = true;
        return { text: 'An eye is gone. Presence ' + fmt(pc.presence) + '. You rise with ' + pc.hp + ' HP.', dead: false };
      }
      pc.agility = Math.max(-3, pc.agility - 1);
      return { text: 'A bone snaps. Agility ' + fmt(pc.agility) + '. You rise with ' + pc.hp + ' HP.', dead: false };
    }
    if (r === 3) {
      pc.hp = d(4);
      pc.bleeding = true;
      return { text: 'You haemorrhage. ' + pc.hp + ' HP, and bleeding until you are tended.', dead: false };
    }
    return { text: 'Your heart gives up in the dark.', dead: true };
  }

  // A monster's morale: 2d6 over its morale and it flees.
  function moraleBreaks(morale) {
    if (!morale) return false;
    return roll(2, 6) > morale;
  }

  // Getting Better: rolled after enough horrors survived.
  function gettingBetter(pc) {
    const lines = [];
    const hpRoll = roll(6, 10);
    if (hpRoll >= pc.maxHp) {
      const gain = d(6);
      pc.maxHp += gain;
      lines.push(`Max HP +${gain} (6d10 rolled ${hpRoll}).`);
    } else {
      lines.push(`No new HP (6d10 rolled ${hpRoll}).`);
    }
    for (const key of ['strength', 'agility', 'presence', 'toughness']) {
      const r = d(6);
      const label = key[0].toUpperCase() + key.slice(1);
      if (r >= pc[key] && pc[key] < 6) {
        pc[key] += 1;
        lines.push(`${label} ${fmt(pc[key])} (d6 ${r}).`);
      } else if (r < pc[key] && pc[key] > -3) {
        pc[key] -= 1;
        lines.push(`${label} ${fmt(pc[key])} (d6 ${r}).`);
      }
    }
    pc.hp = pc.maxHp;
    return lines;
  }

  Object.assign(Q, {
    DR, d, roll, pick, fmt, abilityFromRoll, WEAPONS, ARMOR, ARMOR_DIE, SCROLLS,
    rollWretch, healthWord, test, attack, defend, broken, moraleBreaks, gettingBetter,
  });
})();
