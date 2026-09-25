// On-screen interface: vitals, combat log, floating numbers, story toasts and the character card.
import * as THREE from 'three';
import { ARMOR, ARMOR_DIE, fmt, healthWord } from './rules.js';

const $ = (id) => document.getElementById(id);

export function characterCard(pc) {
  const armor = `${pc.armor.name}${pc.armor.tier ? ` (tier ${pc.armor.tier}, −d${ARMOR_DIE[pc.armor.tier]})` : ''}`;
  const worn = pc.armor.tier < ARMOR.findIndex((a) => a.name === pc.armor.name) ? ', battered' : '';
  return `
    <div class="name">${pc.name}</div>
    <p class="trait">${pc.trait}</p>
    <div class="abilities">
      <div class="ability"><span class="k">Str</span><span class="v">${fmt(pc.strength)}</span></div>
      <div class="ability"><span class="k">Agi</span><span class="v">${fmt(pc.agility)}</span></div>
      <div class="ability"><span class="k">Pre</span><span class="v">${fmt(pc.presence)}</span></div>
      <div class="ability"><span class="k">Tou</span><span class="v">${fmt(pc.toughness)}</span></div>
    </div>
    <dl class="gear">
      <dt>HP</dt><dd>${Math.max(0, pc.hp)} / ${pc.maxHp}</dd>
      <dt>Weapon</dt><dd>${pc.weapon.name} (d${pc.weapon.die})</dd>
      <dt>Armor</dt><dd>${armor}${worn}</dd>
      <dt>Omens</dt><dd>${pc.omens}</dd>
      <dt>Silver</dt><dd>${pc.silver}s</dd>
      <dt>Pack</dt><dd>${pc.poultices} black poultice${pc.poultices === 1 ? '' : 's'} (heal d6)</dd>
    </dl>`;
}

export function createHud() {
  const logEl = $('log');
  const tagEl = $('tag');
  const floats = [];
  const v = new THREE.Vector3();
  let toastTimer = 0;

  const project = (pos, camera) => {
    v.copy(pos).project(camera);
    return { x: (v.x * 0.5 + 0.5) * innerWidth, y: (-v.y * 0.5 + 0.5) * innerHeight, behind: v.z > 1 };
  };

  $('toast').addEventListener('click', () => { $('toast').hidden = true; });

  return {
    project,
    log(html) {
      const li = document.createElement('li');
      li.innerHTML = html;
      logEl.appendChild(li);
      while (logEl.children.length > 5) logEl.firstChild.remove();
    },
    clearLog() { logEl.replaceChildren(); },
    goal(text) { $('goal').textContent = text; },
    vitals(pc) {
      $('pcName').textContent = pc.name;
      $('hpFill').style.width = `${Math.max(0, pc.hp / pc.maxHp) * 100}%`;
      $('hpText').textContent = `${Math.max(0, pc.hp)} / ${pc.maxHp} HP · ${pc.silver}s`;
      const bp = $('btnPoultice');
      bp.textContent = `Poultice ×${pc.poultices}`;
      bp.disabled = pc.poultices === 0 || pc.hp >= pc.maxHp;
      const bo = $('btnOmen');
      bo.textContent = pc.omenMax || pc.omenWard ? 'Omen ready' : `Omens ×${pc.omens}`;
      bo.disabled = pc.omens === 0 && !pc.omenMax && !pc.omenWard;
    },
    toast(title, body, seconds = 7) {
      $('toastTitle').textContent = title;
      $('toastBody').textContent = body;
      $('toast').hidden = false;
      toastTimer = seconds;
    },
    float(text, cls, pos) {
      const el = document.createElement('div');
      el.className = 'float ' + cls;
      el.textContent = text;
      document.body.appendChild(el);
      floats.push({ el, pos: pos.clone(), t: 0 });
    },
    clearFloats() {
      for (const f of floats) f.el.remove();
      floats.length = 0;
      tagEl.hidden = true;
    },
    update(dt, camera, target) {
      if (toastTimer > 0) {
        toastTimer -= dt;
        if (toastTimer <= 0) $('toast').hidden = true;
      }
      if (target && target.state !== 'dead') {
        const p = project(v.set(target.pos.x, 2.25, target.pos.z), camera);
        tagEl.hidden = p.behind;
        tagEl.textContent = `${target.def.name} · ${healthWord(target.hp, target.maxHp)}`;
        tagEl.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -100%)`;
      } else {
        tagEl.hidden = true;
      }
      for (let i = floats.length - 1; i >= 0; i--) {
        const f = floats[i];
        f.t += dt;
        const p = project(v.copy(f.pos).setY(f.pos.y + f.t * 0.9), camera);
        f.el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`;
        f.el.style.opacity = String(Math.max(0, Math.min(1, 1 - (f.t - 0.7) / 0.5)));
        if (f.t > 1.2) {
          f.el.remove();
          floats.splice(i, 1);
        }
      }
    },
  };
}
