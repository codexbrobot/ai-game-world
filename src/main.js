// Wretch: level 1, the Vorn graveyard.
import * as THREE from 'three';
import { buildGraveyard } from './world.js';
import { MAP } from './map.js';
import { drawMap } from './mapview.js';
import { makeWretch, makeZombie, makeSkeleton, animate, animateDeath } from './actors.js';
import * as R from './rules.js';
import { createHud, characterCard } from './hud.js';
import { bindInput } from './input.js';

const $ = (id) => document.getElementById(id);
const coarse = matchMedia('(pointer: coarse)').matches;
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

function fatal(msg) {
  $('title').hidden = true;
  $('failMsg').textContent = msg;
  $('fail').hidden = false;
}

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas: $('view'), antialias: true, powerPreference: 'high-performance' });
} catch (err) {
  fatal('This device or app view could not start WebGL 2, which the game needs to draw 3D graphics.');
  throw err;
}
try {
  main();
} catch (err) {
  fatal('Something broke while building the graveyard: ' + err.message);
  throw err;
}

function seeded(seed) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function main() {
  const canvas = $('view');
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.4;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.5, 160);
  const rand = seeded(1349);
  const world = buildGraveyard(renderer, scene, rand, coarse);
  const hud = createHud();
  const cam = bindInput(canvas, onTap);
  const camTarget = new THREE.Vector3(0, 1, 0);
  // Combat camera: 0 = exploring, 1 = fully zoomed in on a fight.
  let combatBlend = 0;
  const COMBAT_ZOOM = 0.55, COMBAT_TILT = 0.12, FIGHT_RANGE = 4;

  // The enemy the fight should frame: your target, or the nearest monster attacking you.
  function currentOpponent() {
    const p = game.player;
    const t = p.target?.type === 'foe' ? p.target.foe : null;
    if (t && t.state !== 'dead' && t.pos.distanceTo(p.pos) < FIGHT_RANGE * 1.5) return t;
    let best = null, bestD = FIGHT_RANGE;
    for (const f of game.foes) {
      if (f.state !== 'chase') continue;
      const d = f.pos.distanceTo(p.pos);
      if (d < bestD) { bestD = d; best = f; }
    }
    return best;
  }
  const tmp = new THREE.Vector3();
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  const PLAYER_R = 0.35, FOE_R = 0.35, SPEED = 3.3, ROUND = 1.7, REACH = 1.6; // reach is at least as long as any monster's
  const game = { discovered: new Set(), mode: 'title', pc: R.rollWretch(), player: null, foes: [], destroyed: 0, sawDoor: false, deadT: 0 };

  // ---------- collision ----------
  function collide(p, r) {
    for (const c of world.circlesNear(p.x, p.z)) {
      const dx = p.x - c.x, dz = p.z - c.z, dist = Math.hypot(dx, dz), min = c.r + r;
      if (dist < min && dist > 1e-5) {
        p.x = c.x + (dx / dist) * min;
        p.z = c.z + (dz / dist) * min;
      }
    }
    for (const sg of world.segments) {
      const vx = sg.bx - sg.ax, vz = sg.bz - sg.az, len = vx * vx + vz * vz || 1;
      const t = clamp(((p.x - sg.ax) * vx + (p.z - sg.az) * vz) / len, 0, 1);
      const cx = sg.ax + vx * t, cz = sg.az + vz * t;
      let dx = p.x - cx, dz = p.z - cz;
      let dist = Math.hypot(dx, dz);
      const min = sg.r + r;
      if (dist >= min) continue;
      if (dist < 1e-5) { dx = -vz; dz = vx; dist = Math.hypot(dx, dz) || 1; }
      p.x = cx + (dx / dist) * min;
      p.z = cz + (dz / dist) * min;
    }
  }

  const turnToward = (a, b, k) => {
    const diff = ((((b - a + Math.PI) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)) - Math.PI;
    return a + diff * Math.min(1, k);
  };

  // Step an actor toward a point; returns distance left before moving.
  function stepToward(a, goal, speed, stopAt, dt, radius) {
    const dx = goal.x - a.pos.x, dz = goal.z - a.pos.z, dist = Math.hypot(dx, dz);
    a.moving = false;
    if (dist <= stopAt) return dist;
    const step = Math.min(speed * dt, dist - stopAt);
    const bx = a.pos.x, bz = a.pos.z;
    a.pos.x += (dx / dist) * step;
    a.pos.z += (dz / dist) * step;
    collide(a.pos, radius);
    const moved = Math.hypot(a.pos.x - bx, a.pos.z - bz);
    a.stuck = moved < step * 0.2 ? (a.stuck || 0) + dt : 0;
    a.heading = turnToward(a.heading, Math.atan2(dx, dz), dt * 10);
    a.phase += moved * (a.parts.kind === 'zombie' ? 2.6 : 3.2);
    a.moving = moved > 1e-4;
    return dist;
  }

  // ---------- spawning ----------
  function spawnPlayer() {
    if (game.player) scene.remove(game.player.parts.root);
    const parts = makeWretch(game.pc.weapon.name);
    scene.add(parts.root);
    const player = {
      parts, pos: parts.root.position, heading: Math.PI, phase: 0, moving: false, seed: 0,
      move: null, target: null, swing: -1, struck: false, roundT: 0, stunT: 0, searchT: -1, crouch: false, deadT: 0,
    };
    player.pos.copy(world.playerStart);
    game.player = player;
  }

  function spawnFoe(kind, x, z) {
    const def = R.BESTIARY[kind];
    const parts = kind === 'zombie' ? makeZombie(Math.random) : makeSkeleton();
    parts.root.position.set(x, 0, z);
    scene.add(parts.root);
    const hp = def.hp();
    return {
      kind, def, parts, pos: parts.root.position, home: new THREE.Vector3(x, 0, z), hp, maxHp: hp,
      state: 'wander', heading: Math.random() * Math.PI * 2, phase: Math.random() * 6, seed: Math.random() * 10,
      moving: false, goal: null, idleT: Math.random() * 3, swing: -1, struck: false,
      roundT: 0.6 + Math.random(), deadT: 0, gone: false,
    };
  }

  function spawnFoes() {
    for (const f of game.foes) scene.remove(f.parts.root);
    game.foes = [];
    for (const [kind, x, z] of MAP.spawns) game.foes.push(spawnFoe(kind, x, z));
    for (const f of game.foes) collide(f.pos, FOE_R);
  }

  function resetLoot() {
    for (const l of world.loot) {
      l.searched = false;
      l.sprite.visible = true;
      collide(l.stand, PLAYER_R);
    }
  }

  // ---------- title and death screens ----------
  const showCard = () => { $('card').innerHTML = characterCard(game.pc); };
  showCard();
  $('btnReroll').addEventListener('click', () => {
    game.pc = R.rollWretch();
    showCard();
  });
  $('btnStart').addEventListener('click', startRun);
  $('btnAgain').addEventListener('click', () => {
    game.pc = R.rollWretch();
    showCard();
    $('death').hidden = true;
    $('title').hidden = false;
    game.mode = 'title';
  });

  function startRun() {
    combatBlend = 0;
    spawnPlayer();
    spawnFoes();
    resetLoot();
    game.destroyed = 0;
    game.sawDoor = false;
    game.discovered = new Set();
    hud.clearLog();
    hud.clearFloats();
    hud.vitals(game.pc);
    hud.goal('Find the Vorn mausoleum. The path north leads into the graveyard.');
    $('title').hidden = true;
    $('hud').hidden = false;
    game.mode = 'play';
    cam.yaw = 0;
    camTarget.copy(game.player.pos).setY(1);
    const pc = game.pc;
    hud.log(`${pc.name} climbs through the gate. ${pc.weapon.name} (d${pc.weapon.die}), ${pc.armor.name.toLowerCase()}.`);
    
  }

  function die(cause) {
    const pc = game.pc;
    game.mode = 'dead';
    game.deadT = 0;
    game.player.deadT = 0;
    game.player.target = null;
    hud.log(`<span class="hurt"><b>${pc.name} is dead.</b></span>`);
    $('deathText').textContent = `${pc.name} ${cause} Undead destroyed: ${game.destroyed}. Silver carried: ${pc.silver}s, now the graveyard's.`;
  }

  // ---------- combat ----------
  const foeLabel = (f) => f.def.name;

  function hurtPlayer(n, cause) {
    const pc = game.pc;
    pc.hp -= n;
    hud.float(`−${n}`, 'hurt', tmp.copy(game.player.pos).setY(2.1));
    hud.vitals(pc);
    if (pc.hp < 0) return die(cause);
    if (pc.hp === 0) {
      const b = R.broken(pc);
      hud.log(`<span class="hurt"><b>Broken.</b> ${b.text}</span>`);
      if (b.dead) return die('bled out between the graves.');
      pc.hp = 1;
      game.player.stunT = b.stun;
      game.player.swing = -1;
      hud.vitals(pc);
    }
  }

  function playerStrikes(foe, riposte = false) {
    const pc = game.pc;
    const res = R.attack(pc);
    const roll = `${res.r} ${R.fmt(pc.strength)} = ${res.total} vs DR ${R.DR}`;
    const pre = riposte ? 'Riposte! ' : '';
    if (res.kind === 'fumble') {
      hud.log(`<span class="miss"><b>${pre}Fumble.</b></span> Your ${pc.weapon.name.toLowerCase()} slips; you lose a round.`);
      game.player.roundT = ROUND * 2;
      return;
    }
    if (res.kind === 'miss') {
      hud.log(`<span class="miss"><b>${pre}Miss</b></span> · ${roll}`);
      hud.float('Miss', 'miss', tmp.copy(foe.pos).setY(2));
      return;
    }
    const crit = res.kind === 'crit';
    foe.hp -= res.dmg;
    hud.log(`<span class="${crit ? 'crit' : 'hit'}"><b>${pre}${crit ? 'Critical hit' : 'Hit'}</b> for ${res.dmg}${res.maxed ? ' (Omen)' : ''}</span> · ${roll}`);
    hud.float(String(res.dmg), crit ? 'crit' : 'hit', tmp.copy(foe.pos).setY(2));
    hud.vitals(pc);
    if (foe.state !== 'chase') foe.state = 'chase';
    if (foe.hp <= 0) killFoe(foe);
  }

  function killFoe(foe) {
    foe.state = 'dead';
    foe.deadT = 0;
    foe.swing = -1;
    game.destroyed += 1;
    hud.log(`The ${foeLabel(foe).toLowerCase()} ${foe.kind === 'skeleton' ? 'clatters apart' : 'falls and stays down'}.`);
    if (game.player.target && game.player.target.foe === foe) game.player.target = null;
    if (game.foes.every((f) => f.state === 'dead')) {
      hud.goal('The mausoleum is sealed. Find a way in.');
      hud.toast('The graveyard falls silent', 'Nothing else moves between the stones. The bronze doors of the Vorn mausoleum stay chained. The way in lies elsewhere. (End of this build.)', 10);
    }
  }

  function foeStrikes(foe) {
    const pc = game.pc;
    // Hit back automatically, as in Neverwinter Nights, unless you're busy doing something else.
    const p = game.player;
    if (!p.target && !p.move && p.searchT < 0) p.target = { type: 'foe', foe };
    const res = R.defend(pc, foe.def.damage);
    const roll = `Defence ${res.r} ${R.fmt(pc.agility)} = ${res.total} vs DR ${res.dr}`;
    const name = foeLabel(foe);
    if (res.kind === 'riposte') {
      hud.log(`<span class="hit"><b>Perfect dodge.</b></span> ${roll}`);
      playerStrikes(foe, true);
      return;
    }
    if (res.kind === 'dodge') {
      hud.log(`<span class="miss">${name} attacks · <b>dodged</b></span> · ${roll}`);
      hud.float('Dodge', 'miss', tmp.copy(game.player.pos).setY(2.1));
      return;
    }
    const notes = [];
    if (res.absorbed) notes.push(`armor stops ${res.absorbed}`);
    if (res.brokeArmor) notes.push('your armor splits');
    if (res.warded) notes.push('an Omen turns it aside');
    const note = notes.length ? ` (${notes.join(', ')})` : '';
    hud.log(`<span class="hurt">${name} ${res.kind === 'fumble' ? '<b>savages</b>' : 'wounds'} you for <b>${res.dmg}</b>${note}</span> · ${roll}`);
    if (res.dmg > 0) hurtPlayer(res.dmg, `was torn apart by a ${name.toLowerCase()}.`);
    else hud.float('0', 'miss', tmp.copy(game.player.pos).setY(2.1));
  }

  // ---------- places ----------
  function discoverAreas() {
    const p = game.player.pos;
    for (const a of world.areas) {
      if (game.discovered.has(a.id) || Math.hypot(p.x - a.x, p.z - a.z) > a.r) continue;
      game.discovered.add(a.id);
      hud.toast(a.name, a.text, 5);
      if (a.id === 'court' && !game.sawDoor) hud.goal('Reach the mausoleum doors.');
    }
  }

  // ---------- player ----------
  function updatePlayer(dt) {
    const p = game.player;
    p.roundT -= dt;
    if (p.stunT > 0) {
      p.stunT -= dt;
      p.moving = false;
      return;
    }

    if (p.searchT >= 0) {
      p.searchT += dt;
      p.moving = false;
      p.crouch = true;
      if (p.searchT > 1.3) {
        p.searchT = -1;
        p.crouch = false;
        finishSearch(p.searchSpot);
      }
      return;
    }

    const t = p.target;
    let goal = null, stopAt = 0.05;
    if (t?.type === 'foe') { goal = t.foe.pos; stopAt = REACH; }
    else if (t?.type === 'door') { goal = world.door; stopAt = 0.25; }
    else if (t?.type === 'loot') { goal = t.spot.stand; stopAt = 0.3; }
    else if (p.move) goal = p.move;

    if (goal) {
      const dist = stepToward(p, goal, SPEED, stopAt, dt, PLAYER_R);
      // A headstone may stop you just short of a monster: swing anyway if it's nearly in reach.
      const blockedButClose = t?.type === 'foe' && p.stuck > 0.2 && dist <= REACH + 0.6;
      if (p.stuck > 0.6 && t?.type !== 'foe') {
        p.stuck = 0;
        p.move = null;
        p.target = null;
      } else if (dist <= stopAt || blockedButClose) {
        if (t?.type === 'foe') {
          p.moving = false;
          p.heading = turnToward(p.heading, Math.atan2(t.foe.pos.x - p.pos.x, t.foe.pos.z - p.pos.z), dt * 12);
          if (p.roundT <= 0 && p.swing < 0) {
            p.swing = 0;
            p.struck = false;
            p.roundT = ROUND;
          }
        } else if (t?.type === 'door') {
          p.target = null;
          p.heading = Math.PI;
          tryDoor();
        } else if (t?.type === 'loot') {
          p.target = null;
          p.searchT = 0;
          p.searchSpot = t.spot;
        } else {
          p.move = null;
        }
      }
    }

    if (p.swing >= 0) {
      p.swing += dt / 0.55;
      if (!p.struck && p.swing >= 0.55) {
        p.struck = true;
        const foe = p.target?.type === 'foe' ? p.target.foe : null;
        if (foe && foe.state !== 'dead' && foe.pos.distanceTo(p.pos) < REACH + 0.7) playerStrikes(foe);
      }
      if (p.swing >= 1) p.swing = -1;
    }
  }

  function tryDoor() {
    if (!game.sawDoor) {
      game.sawDoor = true;
      hud.goal('The mausoleum is sealed. Find a way in.');
    }
    hud.toast('The Vorn Mausoleum', 'Bronze doors, green with age, bound in chain. Three keyholes shaped like weeping eyes. Behind them, something slow is breathing. (Sealed in this build.)', 9);
    hud.log('The doors will not move.');
  }

  function finishSearch(spot) {
    const pc = game.pc;
    spot.searched = true;
    spot.sprite.visible = false;
    const res = R.searchGrave();
    if (res.kind === 'hand') {
      hud.log(`<span class="hurt">A cold hand closes on your wrist. <b>${res.dmg}</b> damage.</span>`);
      hurtPlayer(res.dmg, 'was dragged down into a grave.');
    } else if (res.kind === 'silver') {
      pc.silver += res.amount;
      hud.log(`<span class="hit">Grave goods: <b>${res.amount} silver</b>.</span>`);
    } else if (res.kind === 'poultice') {
      pc.poultices += 1;
      hud.log('<span class="hit">A clay jar of <b>black poultice</b>, still sealed.</span>');
    } else {
      pc.omens += 1;
      hud.log('<span class="hit">A black feather, dry in the wet earth. <b>You gain an Omen.</b></span>');
    }
    hud.vitals(pc);
  }

  // ---------- the dead ----------
  function updateFoe(f, dt) {
    if (f.state === 'dead') {
      if (!f.gone && animateDeath(f, dt)) {
        f.gone = true;
        scene.remove(f.parts.root);
      }
      return;
    }
    const p = game.player;
    const alive = game.mode === 'play';
    const dist = Math.hypot(p.pos.x - f.pos.x, p.pos.z - f.pos.z);
    f.roundT -= dt;

    if (f.state === 'wander') {
      if (alive && dist < f.def.sight) {
        f.state = 'chase';
      } else {
        if (!f.goal) {
          f.idleT -= dt;
          f.moving = false;
          if (f.idleT <= 0) {
            const a = Math.random() * Math.PI * 2, r = 1 + Math.random() * 4;
            f.goal = new THREE.Vector3(f.home.x + Math.cos(a) * r, 0, f.home.z + Math.sin(a) * r);
          }
        } else if (stepToward(f, f.goal, f.def.speed * 0.45, 0.2, dt, FOE_R) <= 0.2 || f.stuck > 1) {
          f.goal = null;
          f.stuck = 0;
          f.idleT = 1.5 + Math.random() * 3;
        }
      }
    }

    if (f.state === 'chase') {
      if (!alive || dist > f.def.sight * 1.8) {
        f.state = 'wander';
        f.goal = null;
      } else if (dist > f.def.reach) {
        if (f.swing < 0) stepToward(f, p.pos, f.def.speed, f.def.reach, dt, FOE_R);
        else f.moving = false;
      } else {
        f.moving = false;
        f.heading = turnToward(f.heading, Math.atan2(p.pos.x - f.pos.x, p.pos.z - f.pos.z), dt * 8);
        if (f.roundT <= 0 && f.swing < 0) {
          f.swing = 0;
          f.struck = false;
          f.roundT = f.def.round;
        }
      }
    }

    if (f.swing >= 0) {
      f.swing += dt / f.def.swingTime;
      if (!f.struck && f.swing >= 0.55) {
        f.struck = true;
        if (alive && dist < f.def.reach + 0.6) foeStrikes(f);
      }
      if (f.swing >= 1) f.swing = -1;
    }
  }

  // Keep the dead from standing inside each other or the wretch.
  function separate() {
    const live = game.foes.filter((f) => f.state !== 'dead');
    for (let i = 0; i < live.length; i++) {
      const a = live[i];
      for (let j = i + 1; j < live.length; j++) {
        const b = live[j];
        const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z, dist = Math.hypot(dx, dz), min = FOE_R * 2;
        if (dist < min && dist > 1e-5) {
          const push = (min - dist) / 2;
          a.pos.x -= (dx / dist) * push; a.pos.z -= (dz / dist) * push;
          b.pos.x += (dx / dist) * push; b.pos.z += (dz / dist) * push;
        }
      }
      if (game.player && game.mode === 'play') {
        const p = game.player.pos;
        const dx = a.pos.x - p.x, dz = a.pos.z - p.z, dist = Math.hypot(dx, dz), min = FOE_R + PLAYER_R;
        if (dist < min && dist > 1e-5) {
          a.pos.x = p.x + (dx / dist) * min;
          a.pos.z = p.z + (dz / dist) * min;
        }
      }
    }
  }

  // ---------- input ----------
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hit = new THREE.Vector3();
  const a3 = new THREE.Vector3(), b3 = new THREE.Vector3();

  function distToSegment(px, py, a, b) {
    const vx = b.x - a.x, vy = b.y - a.y, len = vx * vx + vy * vy || 1;
    const t = clamp(((px - a.x) * vx + (py - a.y) * vy) / len, 0, 1);
    return Math.hypot(px - (a.x + vx * t), py - (a.y + vy * t));
  }

  function onTap(x, y) {
    if (game.mode !== 'play') return;
    const p = game.player;
    if (p.searchT >= 0) return;
    const reach = coarse ? 46 : 30;

    let best = null, bestD = reach;
    for (const f of game.foes) {
      if (f.state === 'dead') continue;
      const a = hud.project(a3.set(f.pos.x, 0.25, f.pos.z), camera), b = hud.project(b3.set(f.pos.x, 1.85, f.pos.z), camera);
      if (a.behind) continue;
      const dd = distToSegment(x, y, a, b);
      if (dd < bestD) { bestD = dd; best = f; }
    }
    if (best) {
      p.target = { type: 'foe', foe: best };
      p.move = null;
      return;
    }
    for (const spot of world.loot) {
      if (spot.searched) continue;
      const s = hud.project(a3.set(spot.x, 0.3, spot.z), camera);
      if (!s.behind && Math.hypot(x - s.x, y - s.y) < reach) {
        p.target = { type: 'loot', spot };
        p.move = null;
        return;
      }
    }
    const d = hud.project(world.doorAnchor, camera);
    if (!d.behind && Math.hypot(x - d.x, y - d.y) < reach * 1.6) {
      p.target = { type: 'door' };
      p.move = null;
      return;
    }
    ndc.set((x / innerWidth) * 2 - 1, -(y / innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    if (!ray.ray.intersectPlane(groundPlane, hit)) return;
    // A tap on the ground right beside a monster means attack it.
    const near = game.foes.find((f) => f.state !== 'dead' && Math.hypot(f.pos.x - hit.x, f.pos.z - hit.z) < 1);
    if (near) {
      p.target = { type: 'foe', foe: near };
      p.move = null;
      return;
    }
    const goal = hit.clone();
    collide(goal, PLAYER_R);
    p.target = null;
    p.move = goal;
    p.stuck = 0;
  }

  $('btnPoultice').addEventListener('click', () => {
    const pc = game.pc;
    if (game.mode !== 'play' || pc.poultices === 0 || pc.hp >= pc.maxHp) return;
    pc.poultices -= 1;
    const heal = Math.min(R.d(6), pc.maxHp - pc.hp);
    pc.hp += heal;
    hud.log(`You smear black poultice into the wounds. <span class="hit"><b>+${heal} HP</b></span>.`);
    hud.float(`+${heal}`, 'hit', tmp.copy(game.player.pos).setY(2.1));
    hud.vitals(pc);
  });
  $('btnOmen').addEventListener('click', () => {
    if (game.mode !== 'play') return;
    const pc = game.pc;
    if (pc.omenMax || pc.omenWard) { hud.log('An Omen is already waiting to be spent.'); return; }
    const menu = $('omenMenu');
    const open = menu.hidden;
    closePopups();
    menu.hidden = !open;
  });

  // Quickbar slot 1: attack the nearest undead in sight.
  $('btnAttack').addEventListener('click', () => {
    if (game.mode !== 'play') return;
    const p = game.player;
    let best = null, bestD = 12;
    for (const f of game.foes) {
      if (f.state === 'dead' || !f.parts.root.visible) continue;
      const d = f.pos.distanceTo(p.pos);
      if (d < bestD) { bestD = d; best = f; }
    }
    if (!best) { hud.log('Nothing undead close enough to fight.'); return; }
    p.target = { type: 'foe', foe: best };
    p.move = null;
  });

  function closePopups() {
    for (const id of ['omenMenu', 'sheet', 'mapView']) $(id).hidden = true;
  }

  // Keyboard: 1–5 match the quickbar slots, Escape closes windows.
  addEventListener('keydown', (e) => {
    if (game.mode !== 'play' || e.repeat) return;
    if (e.key === 'Escape') { closePopups(); return; }
    const slot = ['btnAttack', 'btnPoultice', 'btnOmen', 'btnMap', 'btnSheet'][Number(e.key) - 1];
    if (slot && !$(slot).disabled) $(slot).click();
  });
  const spendOmen = (flag, text) => {
    const pc = game.pc;
    $('omenMenu').hidden = true;
    if (pc.omens === 0 || pc.omenMax || pc.omenWard) return;
    pc.omens -= 1;
    pc[flag] = true;
    hud.log(`<span class="hit">${text}</span>`);
    hud.vitals(pc);
  };
  $('omenMax').addEventListener('click', () => spendOmen('omenMax', 'The Omen settles on your weapon. Your next hit deals maximum damage.'));
  $('omenWard').addEventListener('click', () => spendOmen('omenWard', 'The Omen coils around you. Your next wound will be turned aside.'));
  $('omenClose').addEventListener('click', () => { $('omenMenu').hidden = true; });

  let mapTimer = 0;
  const redrawMap = () => drawMap($('mapCanvas'), world, game.player, game.discovered);
  $('btnMap').addEventListener('click', () => {
    if (game.mode !== 'play') return;
    const view = $('mapView');
    const open = view.hidden;
    closePopups();
    view.hidden = !open;
    if (!view.hidden) redrawMap();
  });
  $('btnCloseMap').addEventListener('click', () => { $('mapView').hidden = true; });

  let high = true;
  $('btnSheet').addEventListener('click', () => {
    const sheet = $('sheet');
    if (!sheet.hidden) { sheet.hidden = true; return; }
    closePopups();
    sheet.innerHTML = `<div class="win-title"><span>Character</span><button class="x" id="btnCloseSheet" type="button" aria-label="Close">×</button></div>
      <div class="win-body">
        <div class="card">${characterCard(game.pc)}</div>
        <div class="sheet-extra"><span id="fps">– fps</span><button id="btnQuality" class="nwn-btn" type="button">Graphics: ${high ? 'High' : 'Low'}</button></div>
      </div>`;
    sheet.hidden = false;
    $('btnCloseSheet').addEventListener('click', () => { sheet.hidden = true; });
    $('btnQuality').addEventListener('click', (e) => {
      high = !high;
      applyQuality();
      e.target.textContent = `Graphics: ${high ? 'High' : 'Low'}`;
    });
  });

  // ---------- sizing ----------
  let portrait = null;
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const now = w < h;
    if (now !== portrait) {
      portrait = now;
      camera.fov = portrait ? 40 : 34;
      cam.dist = portrait ? 19 : 15;
    }
    camera.updateProjectionMatrix();
  }
  function applyQuality() {
    renderer.setPixelRatio(Math.min(devicePixelRatio, high ? 2 : 1));
    renderer.shadowMap.enabled = high;
    scene.traverse((o) => {
      if (o.material) [].concat(o.material).forEach((m) => { m.needsUpdate = true; });
    });
    resize();
  }
  addEventListener('resize', resize);
  applyQuality();

  // ---------- loop ----------
  let frames = 0, fpsAcc = 0;
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const raw = clock.getDelta();
    const dt = Math.min(raw, 0.05);
    const t = clock.elapsedTime;

    world.update(dt, t, calm, game.mode === 'title' || !game.player ? camTarget : game.player.pos);
    if (game.mode === 'play') discoverAreas();
    if (game.player) {
      if (game.mode === 'play') updatePlayer(dt);
      if (game.mode === 'dead') {
        animateDeath(game.player, dt);
        game.deadT += dt;
        if (game.deadT > 2 && $('death').hidden) {
          $('death').hidden = false;
          $('mapView').hidden = true;
          $('hud').hidden = true;
          hud.clearFloats();
        }
      } else {
        animate(game.player, dt, t);
      }
    }
    // Monsters far from the wretch (hidden in fog anyway) are frozen and not drawn.
    const focus = game.mode === 'title' || !game.player ? camTarget : game.player.pos;
    for (const f of game.foes) {
      const far = Math.hypot(f.pos.x - focus.x, f.pos.z - focus.z) > 48;
      if (!f.gone) f.parts.root.visible = !far;
      if (far && f.state !== 'dead') continue;
      updateFoe(f, dt);
      if (f.state !== 'dead') animate(f, dt, t);
    }
    separate();

    // Camera: slow orbit of the mausoleum on the title screen, follow the wretch in play.
    if (game.mode === 'title') {
      camTarget.set(0, 1.5, -36);
      const a = t * 0.05;
      camera.position.set(Math.sin(a) * 28, 13, -36 + Math.cos(a) * 28);
    } else {
      // Ease in quickly when a fight starts, back out slowly when it ends.
      const foe = game.mode === 'play' ? currentOpponent() : null;
      combatBlend += ((foe ? 1 : 0) - combatBlend) * Math.min(1, dt * (foe ? 2.5 : 1.2));
      tmp.copy(game.player.pos).setY(1);
      if (foe) tmp.lerp(a3.set(foe.pos.x, 1, foe.pos.z), 0.5 * combatBlend); // frame both fighters
      camTarget.lerp(tmp, 1 - Math.exp(-dt * 6));
      const dist = cam.dist * (1 - (1 - COMBAT_ZOOM) * combatBlend);
      const pitch = cam.pitch - COMBAT_TILT * combatBlend;
      const cp = Math.cos(pitch);
      camera.position.set(
        camTarget.x + Math.sin(cam.yaw) * cp * dist,
        camTarget.y + Math.sin(pitch) * dist,
        camTarget.z + Math.cos(cam.yaw) * cp * dist,
      );
    }
    camera.lookAt(camTarget);
    renderer.render(scene, camera);

    const target = game.player?.target?.type === 'foe' ? game.player.target.foe : null;
    hud.update(dt, camera, game.mode === 'play' ? target : null);
    if (!$('mapView').hidden) {
      mapTimer -= dt;
      if (mapTimer <= 0) { mapTimer = 0.25; redrawMap(); }
    }

    frames++;
    fpsAcc += raw;
    if (fpsAcc >= 0.5) {
      const el = document.getElementById('fps');
      if (el) el.textContent = `${Math.round(frames / fpsAcc)} fps`;
      frames = 0;
      fpsAcc = 0;
    }
  });
}
