// Layout of the Vorn graveyard, in metres. +z is south (the gate), −z is north.
// world.js builds the level from this data; main.js spawns monsters and loot from it.

export const MAP = {
  start: [0, 61],

  // Ruined outer wall. The gap between the first and last points is the Lych Gate.
  outerWall: [
    [3.5, 64], [14, 63], [32, 58], [48, 46], [55, 22], [55, -4], [52, -26], [44, -46], [26, -58],
    [4, -62], [-18, -60], [-40, -52], [-52, -34], [-56, -8], [-54, 16], [-48, 38], [-32, 56], [-14, 63], [-3.5, 64],
  ],

  // Dirt paths. Walls automatically open where a path crosses them.
  paths: [
    { width: 3.2, pts: [[0, 69], [0, 58], [3, 50], [4, 43], [0, 35], [-6, 29], [-7, 22], [-2, 15], [5, 9], [4, 1], [-1, -7], [0, -14], [0, -22], [0, -29]] },
    { width: 2.4, pts: [[-6, 29], [-14, 28], [-22, 25], [-30, 22], [-36, 22]] }, // to the chapel
    { width: 2.4, pts: [[4, 43], [12, 44], [22, 41], [30, 37], [35, 36]] }, // to the charnel pits
    { width: 2.8, pts: [[5, 9], [14, 8], [22, 5], [31, 4], [42, 3]] }, // the avenue of crypts
    { width: 2.2, pts: [[4, 1], [-6, 0], [-16, -3], [-26, -6], [-32, -8]] }, // to the sexton's hut
    { width: 2.0, pts: [[-32, -8], [-35, -18], [-35, -28], [-31, -36]] }, // down to the drowned graves
    { width: 2.0, pts: [[38, 3], [39, -8], [35, -20], [29, -30], [25, -38]] }, // up to the fallen bell
  ],

  // Named places. Entering one for the first time announces it.
  areas: [
    { id: 'gate', name: 'The Lych Gate', x: 0, z: 58, r: 7, text: 'Rusted hinges and a sagging roof. The path north is the only way in.' },
    { id: 'pauper', name: 'The Pauper’s Field', x: 0, z: 44, r: 14, text: 'No names here. Wooden crosses and long, low mounds where the poor were buried by the cartload.' },
    { id: 'chapel', name: 'Chapel of Saint Gall', x: -37, z: 22, r: 11, text: 'The roof fell in years ago. Someone still leaves candles on the altar.' },
    { id: 'charnel', name: 'The Charnel Pits', x: 37, z: 36, r: 10, text: 'Where old bones go when the graves are needed again. Some of them did not want to go.' },
    { id: 'rows', name: 'The Old Rows', x: 0, z: 12, r: 13, text: 'Old families, old stones, names worn smooth by the rain.' },
    { id: 'crypts', name: 'Avenue of the Crypts', x: 30, z: 4, r: 11, text: 'Little stone houses for the rich dead. Every door is locked from the inside.' },
    { id: 'sexton', name: 'Sexton’s Hollow', x: -36, z: -9, r: 10, text: 'The gravedigger’s hut. The lamp in the window is still lit, but nobody answers.' },
    { id: 'drowned', name: 'The Drowned Graves', x: -33, z: -39, r: 11, text: 'The ground gave way to black water. The graves are sinking, and something moves beneath.' },
    { id: 'bell', name: 'The Fallen Bell', x: 25, z: -42, r: 10, text: 'The bell that tolled for every Vorn funeral lies cracked in the grass.' },
    { id: 'court', name: 'The Vorn Court', x: 0, z: -36, r: 14, text: 'A wall within the wall. The Vorn mausoleum waits at its heart.' },
  ],

  // Where headstones are packed in. style: pauper | old | obelisk | sunk
  graveFields: [
    { x: 0, z: 45, rx: 20, rz: 11, style: 'pauper' },
    { x: -24, z: 44, rx: 10, rz: 9, style: 'pauper' },
    { x: 1, z: 13, rx: 22, rz: 10, style: 'old' },
    { x: 22, z: 23, rx: 12, rz: 7, style: 'old' },
    { x: -22, z: 7, rx: 10, rz: 6, style: 'old' },
    { x: -18, z: -24, rx: 10, rz: 10, style: 'old' },
    { x: 18, z: -18, rx: 11, rz: 8, style: 'old' },
    { x: 28, z: -3, rx: 13, rz: 2.2, style: 'obelisk' },
    { x: 29, z: 11, rx: 13, rz: 2.2, style: 'obelisk' },
    { x: -9, z: -38, rx: 3, rz: 9, style: 'obelisk' },
    { x: 9, z: -38, rx: 3, rz: 9, style: 'obelisk' },
    { x: -33, z: -40, rx: 10, rz: 8, style: 'sunk' },
  ],

  // Low ruined walls that split the graveyard into coves.
  innerWalls: [
    [[10, 31], [24, 30], [40, 25]],
    [[-49, 10], [-34, 12], [-22, 15]],
    [[-12, 32], [-18, 38], [-30, 36]],
    [[14, -9], [30, -12], [47, -14]],
    [[-46, -24], [-32, -22], [-24, -16]],
  ],

  props: [
    { type: 'chapel', x: -37, z: 22 },
    { type: 'charnel', x: 38, z: 36 },
    { type: 'crypt', x: 18, z: 0, rot: 0 },
    { type: 'crypt', x: 26, z: -1.5, rot: 0 },
    { type: 'crypt', x: 34, z: -2.5, rot: 0 },
    { type: 'crypt', x: 22, z: 11, rot: Math.PI },
    { type: 'crypt', x: 30, z: 9.5, rot: Math.PI },
    { type: 'crypt', x: 38, z: 8.5, rot: Math.PI },
    { type: 'hut', x: -38, z: -11, rot: 0.4 },
    { type: 'gibbet', x: -27, z: -14 },
    { type: 'pool', x: -33, z: -40, rx: 7, rz: 5 },
    { type: 'belltower', x: 24, z: -45 },
    { type: 'court', x: 0, z: -36 },
  ],

  // Lanterns on posts along the paths. The nearest few cast real light.
  lanterns: [[2.2, 55], [-2.2, 38], [-9, 25], [7, 12], [-2, 4], [2.5, -12], [12, 45.5], [-15, 30], [14, 10], [-10, -2], [-33.5, -20], [37, -9], [-2.6, -19], [2.6, -19]],

  spawns: [
    ['zombie', 6, 48], ['zombie', -9, 42], ['zombie', 12, 38], ['zombie', -24, 45],
    ['skeleton', -34, 18], ['skeleton', -41, 25], ['zombie', -28, 26],
    ['skeleton', 36, 32], ['skeleton', 41, 39], ['skeleton', 33, 40],
    ['zombie', -10, 14], ['skeleton', 12, 17], ['zombie', 9, 3],
    ['skeleton', 26, 3], ['skeleton', 37, 5],
    ['zombie', -32, -4], ['zombie', -40, -16],
    ['zombie', -28, -34], ['zombie', -42, -33], ['zombie', -26, -42],
    ['skeleton', 27, -38], ['skeleton', 20, -46],
    ['skeleton', -6, -26], ['skeleton', 6, -27],
  ],

  loot: [
    [9, 50], [-13, 48], [-44, 25], [-31, 17], [42, 33], [34, 41], [15, 19], [-18, 11],
    [17, -3], [40, 11], [-34, -13], [-23, -36], [-42, -31], [28, -47], [-9, -45], [9, -30],
  ],
};
