// The Weeping Vault: maps, monsters and loot.
//
// Each floor has three layers of the same size.
// rows:     #  wall               .  floor              D  door (opens when you walk into it)
//           G  stairs up to town  <  stairs up          >  stairs down
//           L  remains to search  S  remains with a scroll
//           F  black font         p  hidden pit         R  the Bell-Tongue (quest item)
//           r z s c w  a band of monsters (see GROUPS)
// heights:  .  level ground   1-9  raised a quarter unit each   a-h  sunk a quarter each   x  chasm
//           (you can walk up two quarters at a time; falling into a chasm hurts)
// ceil:     .  normal   H  a high vault   L  a low passage
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  const { d, roll } = Q;

  Q.FLOORS = [
    {
      name: 'The Undercroft',
      rows: [
        '################',
        '#G..#...c....L.#',
        '#...D.....######',
        '#...#.##.#.....#',
        '##.##.##.D..s..#',
        '#r..#.##.#.....#',
        '#...#....#..S..#',
        '#####.####.....#',
        '#F..D.#..#######',
        '#...#.#z.D.....#',
        '#####.#..#.###.#',
        '#.....#..#.#.r.#',
        '#.###.####.#.#.#',
        '#.#L#......D.#.#',
        '#p..D...z..#.>.#',
        '################',
      ],
      heights: [
        '................',
        '................',
        '................',
        '..........11111.',
        '..........12221.',
        '..........12221.',
        '..........12221.',
        '..........11111.',
        '.......bb.......',
        '.......ba.......',
        '.......bb.......',
        '.......bb.......',
        '................',
        '................',
        '................',
        '................',
      ],
      ceil: [
        '................',
        '................',
        '................',
        '..........HHHHH.',
        '..........HHHHH.',
        '..........HHHHH.',
        '..........HHHHH.',
        '..........HHHHH.',
        '................',
        '................',
        '................',
        '................',
        '................',
        '................',
        '................',
        '................',
      ],
    },
    {
      name: 'The Weeping Vault',
      // its own pictures: weeping marble, burial niches, a weeping face, grave slabs, a ribbed vault, iron doors;
      // and a colder, faintly violet dark
      theme: {
        walls: [['vault-wall', 5], ['vault-niches', 3], ['vault-face', 1]],
        riser: 'vault-wall', floor: 'vault-floor', ceiling: 'vault-ceiling', door: 'vault-door',
        sky: 0x4f4a5c, ground: 0x0a080d, fog: 0x050309, ceilingTint: 0x857d90, wallTint: 0xa49cab,
      },
      rows: [
        '################',
        '#<....#.......L#',
        '#.###.#.##.###.#',
        '#.#s..D.#..#c..#',
        '#.#.###.#..#...#',
        '#...#...#..#...#',
        '###.#.###..#.###',
        '#S..#...D..D...#',
        '#.#####.#..#.#.#',
        '#...z.#.#..#.#z#',
        '#.###.#.#..#.#.#',
        '#.#.....D..D...#',
        '#.#.##########D#',
        '#c#.D..........#',
        '#...#....w..R..#',
        '################',
      ],
      heights: [
        '................',
        '................',
        '................',
        '................',
        '................',
        '.........xx.....',
        '.........xx.....',
        '................',
        '.........xx.....',
        '.........xx.....',
        '.........xx.....',
        '................',
        '................',
        '........1111111.',
        '........12221...',
        '................',
      ],
      ceil: [
        '................',
        '................',
        '................',
        '................',
        '................',
        '........HHHH....',
        '........HHHH....',
        '........HHHH....',
        '........HHHH....',
        '........HHHH....',
        '........HHHH....',
        '........HHHH....',
        '................',
        '.....HHHHHHHHHH.',
        '.....HHHHHHHHHH.',
        '................',
      ],
    },
  ];

  // dr: the DR to hit it. armor: die it soaks with. morale: 2d6 over this and it flees (0 = never).
  Q.MONSTERS = {
    r: {
      kind: 'rats', name: 'Gutter Rats', plural: true, hp: () => d(2), die: 4, dr: 10, armor: 0, morale: 6, sight: 5, speed: 2.7,
      silver: () => 0, desc: 'A boiling knot of rats, fat on the dead.',
    },
    z: {
      kind: 'zombie', name: 'Rotting Dead', hp: () => 4, die: 6, dr: 10, armor: 0, morale: 0, sight: 5, speed: 1.3,
      silver: () => d(6), desc: 'It still wears its burial shroud. It is hungry.',
    },
    s: {
      kind: 'skeleton', name: 'Rattling Skeleton', hp: () => d(2) + 2, die: 6, dr: 12, armor: 2, morale: 0, sight: 7, speed: 2.2,
      silver: () => d(8), desc: 'Bones bound by spite, a rusted blade in its fist.',
    },
    c: {
      kind: 'cultist', name: 'Comet Cultist', hp: () => d(3) + 2, die: 6, dr: 12, armor: 0, morale: 7, sight: 7, speed: 2.3,
      silver: () => roll(2, 10), desc: 'Hooded, branded with the comet, smiling.',
    },
    w: {
      kind: 'abbess', name: 'The Pale Abbess', hp: () => 8 + d(4), die: 8, dr: 14, armor: 2, morale: 0, sight: 6, speed: 1.6,
      boss: true, silver: () => roll(4, 10), desc: 'A crowned corpse weeping black. The Bell-Tongue hangs from her neck.',
    },
  };

  // The Calendar of Nechrubel. Each night's sleep and each flight from a battle is a day lost. When the
  // days run out a Misery comes to pass, and the count starts again. The seventh Misery ends the world.
  Q.MISERIES = [
    { title: 'The rats breed in the walls', text: 'Something fat and pink is born in every crack. Gutter Rats have 1 more HP.' },
    { title: 'The dead grow restless', text: 'The graves of Skarnvik stand open. Every monster moves faster.' },
    { title: 'Thrumm doubles his prices', text: '“The end is near, and silver will be worthless. So pay me more of it.” The stall costs half again as much.' },
    { title: 'Noon is black as midnight', text: 'The sun does not rise. Sleep brings back only one Omen.' },
    { title: 'Blades rust and flesh rots', text: 'Every wound festers. Monsters roll a larger damage die.' },
    { title: 'The gutters run with blood', text: 'No one sleeps in the gutter now. It heals nothing, and the Drowned Lamb charges 20s a bed.' },
    { title: 'The comet falls', text: 'Nechrubel opens its eye. The world ends, and you with it.' },
  ];
  Q.calendarStart = () => ({ misery: 0, days: d(6) + 3 });
  Q.calendarNext = () => d(6) + 2;
  // What the Miseries so far have done to the world.
  Q.miseryMods = (n) => ({
    ratHp: n >= 1 ? 1 : 0,
    speed: n >= 2 ? 1.3 : 1,
    price: n >= 3 ? 1.5 : 1,
    omenCap: n >= 4 ? 1 : 0,
    dieAdd: n >= 5 ? 2 : 0,
    gutter: n < 6,
    bed: n >= 6 ? 20 : 10,
  });
  // Monster speed is read by the engine every frame, so a Misery can change it in place.
  const baseSpeed = {};
  Q.applyMiseries = (n) => {
    const m = Q.miseryMods(n);
    for (const [k, def] of Object.entries(Q.MONSTERS)) {
      if (!(k in baseSpeed)) baseSpeed[k] = def.speed;
      def.speed = baseSpeed[k] * m.speed;
    }
  };

  // Who you meet at each monster mark, floor by floor: the first is the one that leads the band.
  Q.GROUPS = [
    { r: ['r', 'r'], z: ['z'], s: ['s'], c: ['c', 'r'] },
    { r: ['r', 'r', 'r'], z: ['z', 'r'], s: ['s', 's'], c: ['c', 'c'], w: ['w', 's'] },
  ];

  // Searching remains, by floor depth.
  // A quarter of the time, something strange (js/items.js).
  Q.searchRemains = function (depth) {
    if (d(4) === 1) return { kind: 'item' };
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
