// Dice that tumble onto the dungeon view and land on what was really rolled.
// Q.Dice.roll(spec) throws them and resolves once the result has been on screen long enough to read;
// a tap on the dice (or Q.Dice.skip()) hurries them along.
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  // Outlines on a 100 × 100 face; facets are the thin inner lines.
  const SHAPES = {
    2: '<circle cx="50" cy="50" r="44"/><circle class="facet" cx="50" cy="50" r="34"/>',
    4: '<polygon points="50,5 96,88 4,88"/>',
    6: '<rect x="7" y="7" width="86" height="86" rx="14"/>',
    8: '<polygon points="50,2 96,50 50,98 4,50"/><polyline class="facet" points="4,50 96,50"/>',
    10: '<polygon points="50,2 96,40 50,98 4,40"/><polyline class="facet" points="4,40 50,62 96,40"/><line class="facet" x1="50" y1="62" x2="50" y2="98"/>',
    12: '<polygon points="50,3 96,36 78,95 22,95 4,36"/><polygon class="facet" points="50,22 74,40 65,72 35,72 26,40"/>',
    20: '<polygon points="50,2 94,26 94,74 50,98 6,74 6,26"/>'
      + '<polygon class="facet" points="50,24 79,72 21,72"/>'
      + '<polyline class="facet" points="50,2 50,24 6,26 21,72 6,74"/>'
      + '<polyline class="facet" points="50,24 94,26 79,72 94,74"/>'
      + '<polyline class="facet" points="21,72 50,98 79,72"/>',
  };
  // Where the number sits on each face, as a percentage from the top.
  const NUMBER_AT = { 2: 50, 4: 63, 6: 50, 8: 52, 10: 40, 12: 52, 20: 55 };

  let layer = null;
  let current = null; // the throw in progress: { finish }

  const speed = () => (Q.speed === undefined ? 1 : Q.speed);
  const reduced = () => !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  function init(el) {
    layer = el;
    layer.addEventListener('click', skip);
  }

  // One die: { sides, value, tone: 'yellow' | 'bone' | 'pink' | 'dim', label }.
  function dieEl(spec) {
    const el = document.createElement('div');
    const sides = SHAPES[spec.sides] ? spec.sides : 6;
    el.className = `die tone-${spec.tone || 'bone'}`;
    if (spec.sides === 20 && spec.value === 20) el.classList.add('nat20');
    if (spec.sides === 20 && spec.value === 1) el.classList.add('nat1');
    el.innerHTML = `<svg viewBox="0 0 100 100" aria-hidden="true">${SHAPES[sides]}</svg>`
      + `<b style="top:${NUMBER_AT[sides]}%">${spec.value}</b>`
      + (spec.label ? `<small>${spec.label}</small>` : '');
    el.setAttribute('aria-label', `d${spec.sides}: ${spec.value}`);
    return el;
  }

  // spec: { dice: [...], verdict, text, tone: 'good' | 'bad' | 'neutral', hold }
  function roll(spec) {
    if (!layer) return Promise.resolve();
    skip();
    const k = speed();
    const throwEl = document.createElement('div');
    throwEl.className = 'throw';
    const row = document.createElement('div');
    row.className = 'dice-row';
    const els = spec.dice.map(dieEl);
    els.forEach((el) => row.appendChild(el));
    const caption = document.createElement('div');
    caption.className = `caption tone-${spec.tone || 'neutral'}`;
    caption.innerHTML = `<strong>${spec.verdict}</strong>${spec.text ? `<span>${spec.text}</span>` : ''}`;
    throwEl.append(row, caption);
    layer.replaceChildren(throwEl);
    layer.hidden = false;
    layer.classList.remove('leaving');

    return new Promise((resolve) => {
      const anims = [];
      const timers = new Set();
      const later = (fn, ms) => {
        const id = setTimeout(() => { timers.delete(id); fn(); }, ms);
        timers.add(id);
      };
      let done = false;
      const land = () => {
        els.forEach((el, i) => {
          el.querySelector('b').textContent = spec.dice[i].value;
          el.classList.add('landed');
        });
        caption.classList.add('shown');
      };
      const finish = (hold) => {
        if (done) return;
        done = true;
        if (current && current.finish === finish) current = null;
        for (const id of timers) clearTimeout(id);
        timers.clear();
        anims.forEach((a) => { try { a.finish(); } catch (e) { /* already done */ } });
        land();
        setTimeout(resolve, hold);
      };
      current = { finish };

      if (k === 0 || reduced() || !els[0].animate) {
        finish(k === 0 ? 0 : 900);
        return;
      }
      const tumble = 620 * k, stagger = 110 * k;
      els.forEach((el, i) => {
        const dur = tumble + i * stagger;
        const spin = (i % 2 ? 1 : -1) * (300 + Math.random() * 260);
        const fromX = -90 - Math.random() * 70, fromY = -50 - Math.random() * 60;
        anims.push(el.animate([
          { transform: `translate(${fromX}px, ${fromY}px) rotate(${spin}deg) scale(0.55)`, opacity: 0 },
          { opacity: 1, offset: 0.12 },
          { transform: `translate(${8 + i * 2}px, -14px) rotate(${-spin * 0.06}deg) scale(1.06)`, offset: 0.62 },
          { transform: 'translate(-2px, 3px) rotate(2deg) scale(0.98)', offset: 0.84 },
          { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: 1 },
        ], { duration: dur, easing: 'cubic-bezier(.2,.7,.35,1)', fill: 'backwards' }));
        // the faces flicker past as it tumbles, then settle on the real number
        const b = el.querySelector('b');
        const sides = spec.dice[i].sides;
        const flicker = () => {
          if (done || el.classList.contains('landed')) return;
          b.textContent = 1 + Math.floor(Math.random() * sides);
          later(flicker, 60);
        };
        flicker();
        later(() => {
          b.textContent = spec.dice[i].value;
          el.classList.add('landed');
        }, dur * 0.8);
      });
      const landed = tumble + (els.length - 1) * stagger;
      later(() => caption.classList.add('shown'), landed * 0.85);
      later(() => finish(0), landed + (spec.hold === undefined ? 900 : spec.hold) * k);
    });
  }

  // Hurry the current throw: the dice land at once and the result shows briefly.
  function skip() {
    if (current) current.finish(160 * speed());
  }

  // Take the dice off the table.
  function clear() {
    if (!layer || layer.hidden) return;
    if (current) current.finish(0);
    layer.classList.add('leaving');
    const el = layer;
    setTimeout(() => {
      if (!el.classList.contains('leaving')) return;
      el.hidden = true;
      el.classList.remove('leaving');
      el.replaceChildren();
    }, 220 * speed());
  }

  Q.Dice = { init, roll, skip, clear };
})();
