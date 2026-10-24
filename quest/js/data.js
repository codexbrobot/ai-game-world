// The Brine Gaol and the Undercroft: maps, monsters and loot.
//
// Each floor has three layers of the same size.
// rows:     #  wall               .  floor              D  door (opens when you walk into it)
//           G  stairs up to town  <  stairs up          >  stairs down
//           L  remains to search  S  remains with a scroll
//           F  black font         p  hidden pit         @  where you wake (the Gaol)
//           C  a locked cell door J  a locked gate       K  a niche in the wall
//           other letters: a band of monsters (see the floor's groups)
// heights:  .  level ground   1-9  raised a quarter unit each   a-h  sunk a quarter each   x  chasm
//           (you can walk up two quarters at a time; falling into a chasm hurts)
// ceil:     .  normal   H  a high vault   L  a low passage
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  const { d, roll } = Q;

  Q.FLOORS = [
    {
      id: 'gaol',
      name: 'The Brine Gaol',
      depth: 1,
      // You wake in the cell at @. C: a cell door that won't open on its own (the last one, at 13,2, is sealed:
      // wretches who die in the Gaol are followed by two who wake behind it); J: the Warden's hall, locked.
      // G here is the sewer grate out into Skarnvik.
      theme: {
        walls: [['gaol-wall', 5], ['gaol-bars', 3], ['wall-stone', 1]],
        riser: 'gaol-wall', floor: 'floor', ceiling: 'ceiling', door: 'gaol-door',
        sky: 0x4f5250, ground: 0x080907, fog: 0x020303, ceilingTint: 0x6f6a60,
        water: 0.4, waterTint: 0x070806,
      },
      groups: { r: ['r', 'r'], g: ['g', 'g'], P: ['P'], q: ['q', 'r'], W: ['W', 'g'] },
      // the guards at the card table sit there until you're in the guard room and the DM has set the scene
      asleep: 'g',
      rows: [
        '################',
        '#.@#.L#.P#..#..#',
        '#C##D##D##C##C##',
        '#..............#',
        '##.#####D#####.#',
        '#...#.....#..#.#',
        '#...D..g..D.r#.#',
        '#.S.#.....#..D.#',
        '#.L.#####D###..#',
        '#...D..........#',
        '#...#..........#',
        '#...#..q.......#',
        '##D######J######',
        '#...#.....W....#',
        '#...#.........G#',
        '################',
      ],
      heights: [
        '................',
        '1111111111111111',
        '1111111111111111',
        '................',
        '................',
        '................',
        '................',
        '................',
        '................',
        '.....bbbbbbbbbb.',
        '.....bbbxxbbbbb.',
        '.....bbbbbbbbbb.',
        '................',
        '..........11....',
        '..........11....',
        '................',
      ],
      ceil: [
        '................',
        'LLLLLLLLLLLLLLLL',
        'LLLLLLLLLLLLLLLL',
        '................',
        '................',
        '................',
        '................',
        '................',
        '................',
        '................',
        '................',
        '................',
        '................',
        '.....HHHHHHHHHH.',
        '.....HHHHHHHHHH.',
        '................',
      ],
    },
    {
      id: 'undercroft',
      name: 'The Undercroft',
      depth: 2,
      up: 'skarnvik', // its G is the crypt stair up into Gallows Square
      groups: { r: ['r', 'r'], z: ['z'], s: ['s'], c: ['c', 'r'] },
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
      id: 'skarnvik',
      name: 'Skarnvik',
      // The town, walked like a dungeon but under the sky. Its own letters are in uses: house fronts you walk
      // into (T Thrumm's stall, I the Drowned Lamb, U the basilica, E the Salt Exchange, and the homes new
      // wretches wake in: V a crypt-house, M a manor, O a narrow house, W the old watch-house, Z a nest of
      // rags in an alley), people (X the Stranger, P the comet preacher, N a fishwife, Q a priest, d the
      // gravedigger, w the Salt Lords' watchmen, b a beggar) and things (Y the gallows, B the bounty board,
      // t graves, y dead trees, l lamps, G the sewer grate you came up through). > is the crypt stair. Off the
      // square to the south, the paupers' graveyard: its gates (r) are locked, and the memorial (m) beside them
      // names every wretch who ever died (js/memorial.js).
      depth: 0,
      down: 'undercroft',
      // districts, for the HUD (the first that holds you): x0, y0, x1, y1
      areas: [
        { name: 'Church Hill', rect: [0, 0, 15, 9] },
        { name: 'The Hill', rect: [27, 0, 39, 10] },
        { name: 'Gallows Square', rect: [15, 10, 28, 16] },
        { name: 'Rope Street', rect: [20, 17, 21, 22] },
        { name: 'The graveyard gates', rect: [22, 17, 29, 21] },
        { name: 'Saltpan Lane', rect: [28, 11, 39, 22] },
        { name: 'The Harbor', rect: [13, 22, 39, 30] },
        { name: 'Lantern Row', rect: [0, 10, 14, 21] },
        { name: 'The Gutter', rect: [0, 22, 13, 30] },
      ],
      // where new wretches wake, by the class of the one in front: home is that use's letter
      starts: {
        priest: { home: 'U', at: [7, 2], a: 'S' },
        hermit: { home: 'V', at: [2, 5], a: 'E' },
        royalty: { home: 'M', at: [30, 2], a: 'S' },
        herbmaster: { home: 'O', at: [6, 16], a: 'E' },
        deserter: { home: 'W', at: [10, 28], a: 'E' },
        scum: { home: 'Z', at: [2, 27], a: 'N' },
      },
      theme: {
        outdoor: true, rain: true, sea: true, wallHeight: 5.2,
        walls: [['facade-timber', 4], ['facade-stone', 3], ['facade-derelict', 1]],
        // each district its own mix of walls (x0, y0, x1, y1 of the wall's square)
        zones: [
          { rect: [22, 17, 26, 18], walls: [['wall-stone', 1]] }, // the graveyard's wall along the square
          { rect: [0, 0, 16, 10], walls: [['wall-stone', 3], ['wall-relief', 2], ['facade-stone', 1]] },
          { rect: [27, 0, 39, 10], walls: [['facade-stone', 4], ['wall-stone', 1]] },
          { rect: [0, 22, 13, 30], walls: [['facade-derelict', 4], ['facade-timber', 1]] },
          { rect: [13, 21, 39, 30], walls: [['facade-derelict', 3], ['facade-timber', 2], ['facade-stone', 1]] },
          { rect: [0, 10, 14, 21], walls: [['facade-timber', 4], ['facade-stone', 2], ['facade-derelict', 1]] },
        ],
        riser: 'wall-stone', floor: 'floor', door: 'door',
        sky: 0x8c8e98, ground: 0x1d1b16, hemi: 0.95, moon: 0.75, fog: 0x1a1d21, fogNear: 8, fogFar: 46,
        water: -0.2, waterTint: 0x080a0b,
      },
      uses: {
        T: { front: 'front-stall', name: 'Thrumm’s Stall', act: 'shop', mark: '⚒' },
        I: { front: 'front-inn', name: 'The Drowned Lamb', act: 'inn', mark: '⌂' },
        U: { front: 'front-church', name: 'The Basilica of the Two-Headed Basilisk', act: 'church', mark: '✝' },
        E: { front: 'front-exchange', name: 'The Salt Exchange', scene: 'exchange', mark: '◆' },
        V: { front: 'front-crypthouse', name: 'A crypt-house', act: 'home', home: 'hermit', mark: '▪' },
        M: { front: 'front-manor', name: 'The House of Vael', act: 'home', home: 'royalty', mark: '▪' },
        O: { front: 'front-home', name: 'A narrow house', act: 'home', home: 'herbmaster', mark: '▪' },
        W: { front: 'front-watchhouse', name: 'The old watch-house', act: 'home', home: 'deserter', mark: '▪' },
        Z: { decal: 'rags', name: 'A nest of rags', act: 'home', home: 'scum', mark: '▪' },
        X: { prop: { art: 'npc-stranger', h: 1.95 }, name: 'The Stranger', act: 'stranger', mark: '●' },
        P: { prop: { art: 'npc-preacher', h: 1.9 }, name: 'The comet preacher', scene: 'preacher', mark: '●' },
        N: { prop: { art: 'npc-fisher', h: 1.75 }, name: 'A fishwife', scene: 'fishwife', mark: '●' },
        Q: { prop: { art: 'npc-priest', h: 1.9 }, name: 'A priest of the basilica', scene: 'priest', mark: '●' },
        d: { prop: { art: 'npc-gravedigger', h: 1.75 }, name: 'The gravedigger', scene: 'gravedigger', mark: '●' },
        w: { prop: { art: 'npc-watchman', h: 1.95 }, name: 'A Salt Lords’ watchman', scene: 'watchman', mark: '●' },
        b: { prop: { art: 'npc-beggar', h: 1.6 }, name: 'A blind beggar', scene: 'beggar', mark: '●' },
        Y: { prop: { art: 'gallows', h: 4.3, aspect: 0.8 }, name: 'The gallows', scene: 'gallows', mark: '†' },
        B: { prop: { art: 'board', h: 1.25, aspect: 0.75, posts: true }, name: 'The bounty board', act: 'board', mark: '▤' },
        t: { prop: { art: 'tombstones', h: 1.15, aspect: 4 / 3 }, name: 'Old graves', scene: 'graves', mark: '+' },
        y: { prop: { art: 'dead-tree', h: 4.4 } },
        l: { prop: { lamp: true } },
        G: { decal: 'grate', name: 'The sewer grate', act: 'grate', mark: '▦' },
        // what the Brine Gaol left: the one you freed (only if you did, and until he goes with you), and the
        // family of the one you knew, waiting for news
        j: { prop: { art: 'npc-freed', h: 1.8 }, name: 'A man in a stolen cloak', scene: 'freed', mark: '●', only: 'freed', unless: ['freedJoined', 'freedGone'] },
        k: { prop: { art: 'npc-widow', h: 1.75 }, name: 'A woman in mourning black', scene: 'kin', mark: '●', unless: 'kinGone' },
        // the bell-ringers' door into Church Hill, behind the graves: down to Saint Agne's Hollow
        h: { front: 'front-belldoor', name: 'A little door in the hill', scene: 'belldoor', mark: '∩' },
        // the paupers' graveyard, off the square: locked, and beside its gates the memorial to your dead
        r: { front: 'front-gravegate', name: 'The graveyard gates', scene: 'gravegate', mark: '+' },
        m: { prop: { art: 'memorial', h: 1.75, aspect: 0.75 }, name: 'The memorial', act: 'memorial', mark: '‡' },
      },
      rows: [
        '########################################',
        '#######U###h##################M###E#####',
        '##l..Q....t.y################....w.w..##',
        '##...........################l.......l##',
        '##.t.....t...################.........##',
        '#V...........################.........##',
        '##...t..d..tl################.........##',
        '##.y............#############..l......##',
        '######..#######.############..##########',
        '######..#######.############..##########',
        '######..#######.###T########..##########',
        '######..#######.l.........l..###########',
        '#.......................P...############',
        '###.####l.#####.....X.Y...w.############',
        '###.l####.#####......................###',
        '###.##O##.#####...G......B..#######..###',
        '###..............l.........>######l..###',
        '###.#####.##l#######..#m..####....#..###',
        '###.......##########..##r#####.......###',
        '###.....k.##########..########....#..###',
        '##l.#####.##########..#############..l##',
        '#.............######..#############..###',
        '#####.###########I##..#############..###',
        '#####.l######.l.........l........l....##',
        '##....#######.........................##',
        '##.##.................................##',
        '##.#####.##b#.................N.......##',
        '##Z#####.#W##.........................##',
        '########j..........l.........l........##',
        '#############.........................##',
        '########################################',
      ],
      heights: [
        '........................................',
        '........................................',
        '..44444444444................333333333..',
        '..44444444444................333333333..',
        '..44444444444................333333333..',
        '..44444444444................333333333..',
        '..44444444444................333333333..',
        '..44444444444321.............333333333..',
        '......33.......1............22..........',
        '......22....................11..........',
        '......11................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '....................aa..................',
        '....................bb..................',
        '.....a..............bb..................',
        '.....aa......bbbbbbbbbbbbbbbbbbbbbbbbb..',
        '..aaaa.......bbbbbbbbbbbbbbbbbbbbbbbbb..',
        '..a..aaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbb..',
        '..a.....a..a.bbbbbbbbbbbbbbbbbbbbbbbbb..',
        '..a.....a....bbbbbbbbbbbbbbbbbbbbbbbbb..',
        '........aaaaabbbbbbbbbbbbbbbbbbbbbbbbb..',
        '.............ccccccccccccccccccccccccc..',
        '........................................',
      ],
      // the quay's wall to the sea is only a parapet; the basilica and the Exchange stand taller
      ceil: [
        '........................................',
        '........................................',
        '.......H..........................H.....',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '........................................',
        '.............LLLLLLLLLLLLLLLLLLLLLLLLL..',
        '........................................',
      ],
    },
    {
      // Saint Agne's Hollow, inside Church Hill, down the bell-ringers' stair (a little door behind the graves).
      // The bell-ringers' way at the top (G the stair up, B their fallen bell, Brother Haskel's cell through
      // the door), then down into salt: the cutters' camp (Y carts of saint-salt), the salt caves, and the
      // Hollow, where Saint Agne holds up the hill (A) and her overseer (O) watches the cutting. The cutters'
      // tunnel runs off east, under the Hill.
      id: 'hollow',
      name: 'Saint Agne’s Hollow',
      depth: 3,
      up: 'skarnvik',
      upAt: [11, 2, 'S'], // back out at the bell-ringers' door
      upText: 'The bell-ringers’ stair winds up and around toward rain and grey light. Church Hill is above.',
      areas: [
        { name: 'The Bell-Ringers’ Way', rect: [0, 0, 22, 9] },
        { name: 'The Cutters’ Camp', rect: [0, 10, 14, 17] },
        { name: 'The Salt', rect: [15, 10, 29, 17] },
        { name: 'The Hollow', rect: [0, 18, 23, 23] },
        { name: 'The Cutters’ Tunnel', rect: [24, 18, 29, 23] },
      ],
      theme: {
        walls: [['wall-stone', 4], ['wall-ossuary', 3], ['wall-relief', 2]],
        riser: 'wall-stone', floor: 'floor', ceiling: 'ceiling', door: 'door',
        sky: 0x6a5f58, ground: 0x0c0a0a, fog: 0x050404, ceilingTint: 0x8a8070, fogNear: 4, fogFar: 26,
        water: -1.3, waterTint: 0x0a0607,
        // below the descent, everything is salt
        zones: [{ rect: [0, 9, 29, 23], walls: [['wall-salt', 5], ['wall-stone', 1]], floor: 'floor-salt', ceiling: 'wall-salt', riser: 'wall-salt' }],
      },
      uses: {
        A: { prop: { art: 'saint-agne', h: 5.9, aspect: 0.5, glow: 0xc8beb0, light: { color: 0xffd9e4, power: 9, range: 18, at: 0.55 } }, name: 'Saint Agne', scene: 'agne', mark: '✝' },
        B: { prop: { art: 'bell', h: 1.5, aspect: 4 / 3 }, name: 'The bell-ringers’ bell', scene: 'bell', mark: '◉' },
        Y: { prop: { art: 'saltcart', h: 1.3, aspect: 4 / 3 }, name: 'A cart of salt', scene: 'cart' },
      },
      groups: { r: ['r', 'r'], k: ['cutter', 'cutter'], w: ['saltwight'], v: ['saltwight', 'saltwight'], O: ['overseer', 'cutter', 'cutter'] },
      rows: [
        '##############################',
        '#G.L#####.......#...S#########',
        '#...............D....#########',
        '#...#####...B...#....#########',
        '##.######.......##############',
        '##.######.......##############',
        '##...r.##.......##############',
        '############.#################',
        '############.#################',
        '############.#################',
        '############.######....#######',
        '######........####.#.w...K####',
        '######Y.....k.####..#...v.####',
        '#####...k............#....####',
        '#####.........####.p...#######',
        '#####L.....Y.#####....########',
        '########.###########.#########',
        '########.###########.#########',
        '#####...................######',
        '#####.L.......A.........######',
        '#####........................#',
        '#####.........O.........######',
        '#####...................######',
        '##############################',
      ],
      heights: [
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '............a.................',
        '............b.................',
        '............c.....ccccc.......',
        '.....ccccccccc....cccbbccc....',
        '.....ccccccccc....ccccccbc....',
        '.....ccccccccccccccccccccc....',
        '.....ccccccccc....ccccc.......',
        '.....ccccccccc....ccccc.......',
        '........d...........d.........',
        '........d...........d.........',
        '.....fdddddddddddddddddf......',
        '.....fdddddddddddddddddf......',
        '.....fdddddddddddddddddfddddd.',
        '.....fdddddddddddddddddf......',
        '.....fffffffffffffffffff......',
        '..............................',
      ],
      ceil: [
        '..............................',
        '.........HHHHHHH..............',
        '.........HHHHHHH..............',
        '.........HHHHHHH..............',
        '.........HHHHHHH..............',
        '.........HHHHHHH..............',
        '.........HHHHHHH..............',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '..............................',
        '.....HHHHHHHHHHHHHHHHHHH......',
        '.....HHHHHHHHHHHHHHHHHHH......',
        '.....HHHHHHHHHHHHHHHHHHH......',
        '.....HHHHHHHHHHHHHHHHHHH......',
        '.....HHHHHHHHHHHHHHHHHHH......',
        '..............................',
      ],
    },
  ];

  // dr: the DR to hit it. armor: die it soaks with. morale: 2d6 over this and it flees (0 = never).
  Q.MONSTERS = {
    // the Brine Gaol: the drowned dead, still at their posts and in their cells
    g: {
      kind: 'guard', name: 'Drowned Guard', hp: () => d(2) + 2, die: 6, dr: 12, armor: 2, morale: 0, sight: 6, speed: 2.0,
      silver: () => d(6), desc: 'Still on duty. The shift ended months ago.',
    },
    q: {
      kind: 'prisoner', name: 'Drowned Prisoner', hp: () => 4, die: 4, dr: 10, armor: 0, morale: 0, sight: 5, speed: 1.2,
      silver: () => 0, desc: 'Chained, drowned, and not finished.',
    },
    P: {
      kind: 'prisoner', name: 'The One You Knew', hp: () => 5, die: 6, dr: 10, armor: 0, morale: 0, sight: 4, speed: 1.3,
      dormant: true, silver: () => d(4), desc: 'You knew this face. It doesn’t know yours any more.',
    },
    W: {
      kind: 'warden', name: 'The Drowned Warden', hp: () => 8 + d(4), die: 8, dr: 13, armor: 2, morale: 0, sight: 6, speed: 1.4,
      boss: true, silver: () => roll(3, 10), desc: 'He still makes his rounds. He still has the keys.',
    },
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
    // Skarnvik's streets: the drowned walk up out of the harbor at night, the Salt Lords' watch walks them by
    // day, and a man you left behind in the Brine comes down off the gallows looking for you
    drowned: {
      kind: 'drowned', name: 'Harbor Dead', hp: () => d(4) + 2, die: 6, dr: 10, armor: 0, morale: 0, sight: 5, speed: 1.4,
      silver: () => d(4), desc: 'Drowned fisherfolk, walking up out of the sea to find houses that are under it now.',
    },
    watch: {
      kind: 'watch', art: 'npc-watchman', name: 'Salt Lords’ Watchman', hp: () => d(4) + 3, die: 6, dr: 12, armor: 2, morale: 8, sight: 6, speed: 2.0,
      silver: () => d(10) + 4, desc: 'Salt-white tabard, a halberd, and orders.',
    },
    hanged: {
      kind: 'hanged', art: 'prisoner', name: 'The Hanged Man', hp: () => 7, die: 6, dr: 11, armor: 0, morale: 0, sight: 9, speed: 1.9,
      silver: () => 0, desc: 'Cut down from the gallows, or he cut himself down.',
    },
    // inside Church Hill: the Salt Lords' cutters, the cutters the salt got into, and their overseer
    cutter: {
      kind: 'cutter', name: 'Salt-Cutter', hp: () => d(4) + 2, die: 6, dr: 11, armor: 1, morale: 7, sight: 6, speed: 2.0,
      silver: () => d(6), desc: 'Paid by the Salt Lords to cut a saint into salt, and paid well.',
    },
    saltwight: {
      kind: 'saltwight', name: 'Salt Wight', hp: () => 5, die: 6, dr: 11, armor: 2, morale: 0, sight: 5, speed: 1.5,
      silver: () => d(4), desc: 'A cutter who ate the salt he cut. Now it is eating him.',
    },
    overseer: {
      kind: 'overseer', name: 'Overseer Gall', hp: () => 10 + d(4), die: 8, dr: 13, armor: 2, morale: 0, sight: 6, speed: 1.6,
      boss: true, dormant: true, silver: () => roll(3, 10), desc: 'Lord Fennick’s overseer: a hood, a lantern, a cudgel, and a writ.',
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
