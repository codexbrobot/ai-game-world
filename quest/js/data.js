// The Weeping Vault: maps, monsters and loot.
//
// Map key
//   #  wall               .  floor              D  closed door
//   G  stairs up to town  <  stairs up          >  stairs down
//   L  remains to search  S  remains with a scroll
//   F  black font         p  hidden pit         R  the Bell-Tongue (quest item)
//   r  gutter rats   z  rotting dead   s  rattling skeleton   c  comet cultist   w  the Pale Abbess
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  const { d, roll } = Q;

  Q.FLOORS = [
    {
      name: 'The Undercroft',
      rows: [
        '################',
        '#G..#.....#....#',
        '#.#.#.###.#.##.#',
        '#.#...#r#...#L.#',
        '#.#####.#####.##',
        '#...z.D...s....#',
        '###.###.#####.##',
        '#S#.#F#.#...#..#',
        '#.D.#.#...#.#.r#',
        '#.###.#####.#.##',
        '#...#...c...#..#',
        '###.###.#####p.#',
        '#.....#.#...#..#',
        '#.###.#.#.#.##.#',
        '#z..L.D...#...>#',
        '################',
      ],
    },
    {
      name: 'The Weeping Vault',
      rows: [
        '################',
        '#<....#.......L#',
        '#.###.#.#####..#',
        '#.#s..D.#...#s.#',
        '#.#.###.#.#.##.#',
        '#...#...c.#....#',
        '###.#.#####.####',
        '#S..#...F.#....#',
        '#.#####.#.#.##.#',
        '#...z.#.#...#z.#',
        '#.###.#.#####.##',
        '#.#.....p...D..#',
        '#.#.#########..#',
        '#c#.D...s...#..#',
        '#...#..w..R.#..#',
        '################',
      ],
    },
  ];

  // dr: the DR to hit it. armor: die it soaks with. morale: 2d6 over this and it flees (0 = never).
  Q.MONSTERS = {
    r: {
      kind: 'rats', name: 'Gutter Rats', plural: true, hp: () => d(4) + 2, die: 4, dr: 10, armor: 0, morale: 6, sight: 5,
      silver: () => 0, desc: 'A boiling knot of rats, fat on the dead.',
    },
    z: {
      kind: 'zombie', name: 'Rotting Dead', hp: () => d(6) + 4, die: 6, dr: 10, armor: 0, morale: 0, sight: 5, slow: true,
      silver: () => d(6), desc: 'It still wears its burial shroud. It is hungry.',
    },
    s: {
      kind: 'skeleton', name: 'Rattling Skeleton', hp: () => d(6) + 2, die: 6, dr: 12, armor: 2, morale: 0, sight: 7,
      silver: () => d(8), desc: 'Bones bound by spite, a rusted blade in its fist.',
    },
    c: {
      kind: 'cultist', name: 'Comet Cultist', hp: () => d(8) + 3, die: 6, dr: 12, armor: 0, morale: 7, sight: 7,
      silver: () => roll(2, 10), desc: 'Hooded, branded with the comet, smiling.',
    },
    w: {
      kind: 'abbess', name: 'The Pale Abbess', hp: () => 18 + d(6), die: 8, dr: 14, armor: 2, morale: 0, sight: 6,
      boss: true, silver: () => roll(4, 10), desc: 'A crowned corpse weeping black. The Bell-Tongue hangs from her neck.',
    },
  };

  // Searching remains, by floor depth.
  Q.searchRemains = function (depth) {
    const r = d(10);
    if (r <= 4) return { kind: 'silver', amount: roll(3, 6) * depth };
    if (r <= 6) return { kind: 'poultice' };
    if (r === 7) {
      const w = Q.WEAPONS[3 + d(depth === 1 ? 3 : 5) - 1];
      return { kind: 'weapon', item: { name: w.name, die: w.die } };
    }
    if (r === 8) {
      const a = Q.ARMOR[Math.min(3, d(depth + 1))];
      return { kind: 'armor', item: { name: a.name, tier: a.tier } };
    }
    if (r === 9) return { kind: 'omen' };
    return { kind: 'hand', dmg: d(4) };
  };

  Q.SHOP = [
    { kind: 'poultice', name: 'Black poultice', note: 'Heals d6 HP and stops bleeding.', price: 8 },
    ...Q.WEAPONS.filter((w) => w.die >= 6).map((w) => ({ kind: 'weapon', name: w.name, note: `d${w.die} damage`, price: w.price, item: w })),
    ...Q.ARMOR.filter((a) => a.tier > 0).map((a) => ({ kind: 'armor', name: a.name, note: `Soaks d${Q.ARMOR_DIE[a.tier]}${a.tier === 3 ? ', Defence DR 14' : ''}`, price: a.price, item: a })),
  ];
})();
