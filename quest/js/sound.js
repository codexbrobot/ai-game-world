// Sound, made on the spot with Web Audio: there are no sound files. Every effect is a few oscillators and
// some filtered noise, run through a shared crypt reverb.
//
// Q.Sound.play(name, opts)    a one-shot effect (see FX below)
// Q.Sound.ambience(where, id) the bed under everything: 'crawl' (floor id), 'town', or null for silence
// Q.Sound.duck(on)            quieten the ambience (battles, menus)
// Q.Sound.toggle()            mute or unmute; remembered in the browser
//
// Browsers only allow audio after the player touches the page, so nothing sounds until the first tap or key.
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  const MUTE_KEY = 'quest-borg-muted';
  let muted = false;
  try { muted = localStorage.getItem(MUTE_KEY) === '1'; } catch (e) { /* storage may be unavailable */ }

  let ctx = null, master = null, fxBus = null, ambBus = null, verbSend = null, noiseBuf = null, brownBuf = null;
  let ambState = { where: null, ix: 0 }, ambNodes = [], ambTimers = [], ducked = false;

  function init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = muted ? 0 : 0.9;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.ratio.value = 4; comp.attack.value = 0.004; comp.release.value = 0.2;
    master.connect(comp).connect(ctx.destination);
    fxBus = ctx.createGain(); fxBus.connect(master);
    ambBus = ctx.createGain(); ambBus.gain.value = ducked ? 0.35 : 1; ambBus.connect(master);
    // the crypt: a long, dark reverb from decaying noise
    const verb = ctx.createConvolver();
    const len = Math.floor(ctx.sampleRate * 2.8);
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = ir.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
    }
    verb.buffer = ir;
    const verbTone = ctx.createBiquadFilter();
    verbTone.type = 'lowpass'; verbTone.frequency.value = 2600;
    verbSend = ctx.createGain(); verbSend.gain.value = 0.55;
    verbSend.connect(verb).connect(verbTone).connect(master);
    // white and brown noise, looped
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const n = noiseBuf.getChannelData(0);
    for (let i = 0; i < n.length; i++) n[i] = Math.random() * 2 - 1;
    brownBuf = ctx.createBuffer(1, ctx.sampleRate * 4, ctx.sampleRate);
    const b = brownBuf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < b.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; b[i] = last * 3.5; }
    if (ambState.where) startAmbience();
  }
  ['pointerdown', 'keydown', 'touchstart'].forEach((ev) => window.addEventListener(ev, init, { passive: true }));

  // ---------- building blocks ----------
  const now = () => ctx.currentTime;
  const rnd = (a, b) => a + Math.random() * (b - a);

  // A destination with pan, level and some of it sent to the reverb.
  function out(opts = {}) {
    const g = ctx.createGain();
    g.gain.value = opts.gain === undefined ? 1 : opts.gain;
    let node = g;
    if (opts.pan && ctx.createStereoPanner) {
      const p = ctx.createStereoPanner();
      p.pan.value = Math.max(-1, Math.min(1, opts.pan));
      g.connect(p);
      node = p;
    }
    node.connect(opts.bus || fxBus);
    if (opts.verb) {
      const s = ctx.createGain();
      s.gain.value = opts.verb;
      node.connect(s).connect(verbSend);
    }
    return g;
  }

  // An envelope on a gain: silence, up to peak in a, down to nothing over d.
  function env(param, t, a, peak, d) {
    param.setValueAtTime(0.0001, t);
    param.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + a);
    param.exponentialRampToValueAtTime(0.0001, t + a + d);
  }

  function tone(dest, t, o) {
    const osc = ctx.createOscillator();
    osc.type = o.type || 'sine';
    osc.frequency.setValueAtTime(o.f, t);
    if (o.f2) osc.frequency.exponentialRampToValueAtTime(o.f2, t + (o.glide || o.d));
    if (o.vib) {
      const lfo = ctx.createOscillator(), depth = ctx.createGain();
      lfo.frequency.value = o.vib; depth.gain.value = o.f * (o.vibDepth || 0.02);
      lfo.connect(depth).connect(osc.frequency);
      lfo.start(t); lfo.stop(t + (o.a || 0.005) + o.d + 0.05);
    }
    const g = ctx.createGain();
    env(g.gain, t, o.a || 0.005, o.gain || 0.3, o.d);
    let node = osc;
    if (o.lp) {
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass'; f.frequency.setValueAtTime(o.lp, t); f.Q.value = o.q || 0.7;
      if (o.lp2) f.frequency.exponentialRampToValueAtTime(o.lp2, t + (o.a || 0.005) + o.d);
      node = node.connect(f);
    }
    node.connect(g).connect(dest);
    osc.start(t); osc.stop(t + (o.a || 0.005) + o.d + 0.05);
  }

  function noise(dest, t, o) {
    const src = ctx.createBufferSource();
    src.buffer = o.brown ? brownBuf : noiseBuf;
    src.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = o.filter || 'bandpass';
    f.frequency.setValueAtTime(o.f || 1000, t);
    if (o.f2) f.frequency.exponentialRampToValueAtTime(o.f2, t + (o.a || 0.002) + o.d);
    f.Q.value = o.q || 1;
    const g = ctx.createGain();
    env(g.gain, t, o.a || 0.002, o.gain || 0.3, o.d);
    let node = src.connect(f);
    if (o.crush) node = node.connect(shaper(o.crush));
    node.connect(g).connect(dest);
    src.start(t, Math.random() * 1.5); src.stop(t + (o.a || 0.002) + o.d + 0.05);
  }

  const shapers = {};
  function shaper(amount) {
    if (!shapers[amount]) {
      const curve = new Float32Array(1024);
      for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; curve[i] = Math.tanh(x * amount); }
      shapers[amount] = curve;
    }
    const w = ctx.createWaveShaper();
    w.curve = shapers[amount];
    return w;
  }

  // A bell: inharmonic partials, long decay.
  function bell(dest, t, f, d, gain) {
    [[1, 1], [2.0, 0.5], [2.76, 0.35], [5.4, 0.18], [8.9, 0.08]].forEach(([k, g]) => tone(dest, t, { f: f * k, d: d / Math.sqrt(k), gain: gain * g, a: 0.004 }));
  }

  // ---------- the effects ----------
  const VOICES = {
    rats(d, t) { for (let i = 0; i < 4; i++) tone(d, t + i * rnd(0.06, 0.11), { type: 'triangle', f: rnd(2600, 3600), f2: rnd(1800, 2400), d: 0.05, gain: 0.12 }); },
    zombie(d, t) { tone(d, t, { type: 'sawtooth', f: rnd(78, 95), f2: rnd(60, 70), d: 1.1, a: 0.15, gain: 0.2, lp: 520, q: 6, vib: 5, vibDepth: 0.04 }); },
    skeleton(d, t) { for (let i = 0; i < 9; i++) noise(d, t + i * rnd(0.03, 0.07), { filter: 'highpass', f: rnd(2500, 4000), d: 0.02, gain: 0.25 }); },
    cultist(d, t) { [196, 233, 294].forEach((f, i) => tone(d, t + i * 0.05, { type: 'triangle', f: f * rnd(0.99, 1.01), d: 1.4, a: 0.35, gain: 0.07, vib: 4.5, vibDepth: 0.01 })); },
    abbess(d, t) { tone(d, t, { f: 640, f2: 420, glide: 1.8, d: 1.9, a: 0.25, gain: 0.16, vib: 6, vibDepth: 0.03 }); tone(d, t, { f: 1280, f2: 860, glide: 1.8, d: 1.7, a: 0.3, gain: 0.05, vib: 6.3, vibDepth: 0.03 }); },
    // a ring of keys jangling, then a wet grunt
    guard(d, t) {
      for (let i = 0; i < 6; i++) bell(d, t + i * rnd(0.04, 0.09), rnd(2200, 3400), 0.18, 0.05);
      tone(d, t + 0.35, { type: 'sawtooth', f: rnd(105, 120), f2: 80, d: 0.35, a: 0.03, gain: 0.16, lp: 700, q: 4 });
    },
    // a drowned throat trying to say a name
    prisoner(d, t) {
      tone(d, t, { type: 'sawtooth', f: rnd(150, 170), f2: rnd(110, 125), glide: 1.2, d: 1.4, a: 0.2, gain: 0.13, lp: 800, q: 9, vib: 7, vibDepth: 0.06 });
      noise(d, t + 0.1, { filter: 'lowpass', f: 380, d: 0.9, a: 0.2, gain: 0.12, brown: true });
    },
    // a bellow from the bottom of a flooded hall, with a chain dragging
    warden(d, t) {
      tone(d, t, { type: 'sawtooth', f: 62, f2: 48, glide: 1.4, d: 1.7, a: 0.12, gain: 0.26, lp: 420, q: 5, vib: 3.5, vibDepth: 0.05 });
      tone(d, t, { type: 'square', f: 93, f2: 72, glide: 1.4, d: 1.5, a: 0.15, gain: 0.05, lp: 600 });
      for (let i = 0; i < 7; i++) bell(d, t + 0.6 + i * rnd(0.07, 0.12), rnd(900, 1500), 0.25, 0.04);
    },
  };

  Object.assign(VOICES, {
    // the harbor dead: a throat full of the sea, bubbling
    drowned(d, t) {
      tone(d, t, { type: 'sawtooth', f: rnd(70, 85), f2: rnd(55, 62), glide: 1.4, d: 1.3, a: 0.2, gain: 0.16, lp: 450, q: 8, vib: 9, vibDepth: 0.08 });
      for (let i = 0; i < 7; i++) tone(d, t + 0.15 + i * rnd(0.07, 0.14), { type: 'sine', f: rnd(260, 520), f2: rnd(600, 900), glide: 0.04, d: 0.05, gain: 0.07 });
    },
    // the watch: a bark, and mail shifting
    watch(d, t) {
      tone(d, t, { type: 'square', f: rnd(150, 175), f2: rnd(120, 135), d: 0.32, a: 0.02, gain: 0.08, lp: 900, q: 3 });
      for (let i = 0; i < 5; i++) noise(d, t + 0.3 + i * rnd(0.03, 0.06), { filter: 'highpass', f: rnd(3000, 5000), d: 0.03, gain: 0.12 });
    },
    // the hanged man: the rope creaks, and a voice with no breath behind it
    hanged(d, t) {
      for (let i = 0; i < 3; i++) tone(d, t + i * 0.22, { type: 'sawtooth', f: rnd(330, 380), f2: rnd(280, 300), d: 0.18, a: 0.05, gain: 0.05, lp: 1400, q: 12 });
      noise(d, t + 0.7, { filter: 'bandpass', f: 900, q: 6, d: 1.1, a: 0.3, gain: 0.14 });
    },
  });

  const FX = {
    // footsteps: a scuff and a thump; wet in the Vault
    step(o) {
      const d = out({ gain: 1.7, verb: 0.15, pan: rnd(-0.15, 0.15) }), t = now();
      noise(d, t, { f: rnd(380, 620), q: 1.4, d: 0.07, gain: 0.25 });
      tone(d, t, { f: rnd(70, 85), f2: 45, d: 0.09, gain: 0.35 });
      if (o.wet) noise(d, t + 0.02, { filter: 'highpass', f: 2800, d: 0.06, gain: 0.05 });
      if (o.splash > 0) {
        // wading: a slosh, deeper the deeper you are
        const deep = Math.min(1, o.splash * 1.6);
        noise(d, t, { f: rnd(700, 1100), f2: rnd(1800, 2600), q: 1.2, a: 0.02, d: 0.16 + deep * 0.1, gain: 0.22 + deep * 0.2 });
        noise(d, t + 0.05, { filter: 'lowpass', f: 500, d: 0.12, gain: 0.12 + deep * 0.15 });
      }
    },
    // a drop of water somewhere in the dark
    drip(o) {
      const d = out({ gain: (o.gain || 0.3) * 3, verb: 0.9, pan: o.pan !== undefined ? o.pan : rnd(-0.9, 0.9) }), t = now();
      const f = rnd(700, 1300);
      tone(d, t, { f, f2: f * 2.1, glide: 0.03, d: 0.12, gain: 0.3 });
    },
    // a monster sees you: a dissonant stab, then its voice
    alert(o) {
      const d = out({ gain: 0.6, verb: 0.5, pan: o.pan }), t = now();
      [98, 104, 139, 147].forEach((f) => tone(d, t, { type: 'sawtooth', f, d: 1.4, a: 0.006, gain: 0.12, lp: 3200, lp2: 260 }));
      noise(d, t, { filter: 'lowpass', f: 400, d: 0.5, gain: 0.25, brown: true });
      if (VOICES[o.kind]) VOICES[o.kind](d, t + 0.12);
    },
    voice(o) {
      const near = Math.max(0, 1 - (o.dist || 0) / 7);
      const d = out({ gain: 0.25 + near * 0.6, verb: 0.6, pan: o.pan });
      if (VOICES[o.kind]) VOICES[o.kind](d, now());
    },
    // a door grinding up into the lintel
    door() {
      const d = out({ gain: 0.6, verb: 0.4 }), t = now();
      noise(d, t, { filter: 'lowpass', f: 260, d: 0.9, a: 0.1, gain: 0.5, brown: true });
      tone(d, t, { type: 'sawtooth', f: 95, f2: 140, d: 0.8, a: 0.1, gain: 0.08, lp: 900, q: 8, vib: 11, vibDepth: 0.08 });
      tone(d, t + 0.85, { f: 60, f2: 40, d: 0.25, gain: 0.4 });
    },
    // the battle starts: the world cracks like glass
    shatter() {
      const d = out({ gain: 0.7, verb: 0.6 }), t = now();
      noise(d, t, { filter: 'highpass', f: 3000, d: 0.45, gain: 0.35 });
      for (let i = 0; i < 10; i++) tone(d, t + rnd(0, 0.35), { type: 'triangle', f: rnd(2800, 6500), d: rnd(0.08, 0.25), gain: 0.05 });
      [82, 87, 123].forEach((f) => tone(d, t, { type: 'sawtooth', f, d: 1.0, gain: 0.12, lp: 2400, lp2: 200 }));
    },
    // a weapon lands: crunch and thump; a critical rings too
    hit(o) {
      const d = out({ gain: 0.8, verb: 0.3 }), t = now();
      noise(d, t, { f: 1400, f2: 300, q: 0.9, d: 0.16, gain: 0.6, crush: 6 });
      tone(d, t, { f: 120, f2: 45, d: 0.2, gain: 0.6 });
      if (o.crit) bell(d, t + 0.02, 1150, 0.9, 0.12);
    },
    miss() {
      const d = out({ gain: 2.2, verb: 0.2 }), t = now();
      noise(d, t, { f: 400, f2: 2200, q: 2, a: 0.06, d: 0.2, gain: 0.35 });
    },
    // a wretch is wounded
    hurt() {
      const d = out({ gain: 0.8, verb: 0.3 }), t = now();
      noise(d, t, { filter: 'lowpass', f: 900, f2: 200, d: 0.22, gain: 0.5, crush: 4 });
      tone(d, t, { f: 95, f2: 38, d: 0.3, gain: 0.6 });
    },
    // a foe dies: a heavier crunch, a low boom, bones scattering
    slain() {
      const d = out({ gain: 0.8, verb: 0.5 }), t = now();
      noise(d, t, { f: 900, f2: 160, q: 0.8, d: 0.35, gain: 0.6, crush: 8 });
      tone(d, t, { f: 70, f2: 30, d: 0.9, gain: 0.55 });
      for (let i = 0; i < 6; i++) noise(d, t + 0.15 + rnd(0, 0.4), { filter: 'highpass', f: rnd(1800, 3200), d: 0.03, gain: 0.18 });
    },
    heal() {
      const d = out({ gain: 0.5, verb: 0.8 }), t = now();
      [523, 659, 784, 1046].forEach((f, i) => tone(d, t + i * 0.08, { type: 'triangle', f, d: 0.9, gain: 0.12 }));
    },
    // sorcery: black flame, curses, withering
    cast() {
      const d = out({ gain: 0.6, verb: 0.8 }), t = now();
      tone(d, t, { type: 'sawtooth', f: 220, f2: 55, d: 0.9, a: 0.05, gain: 0.12, lp: 1800, lp2: 300, vib: 9, vibDepth: 0.06 });
      tone(d, t, { f: 233, f2: 58, d: 0.9, a: 0.05, gain: 0.15 });
      noise(d, t, { f: 1200, f2: 300, q: 3, d: 0.8, a: 0.08, gain: 0.15 });
    },
    // dice tumbling across stone, and the landing click
    dice(o) {
      const d = out({ gain: 1.4, verb: 0.15 }), t = now();
      const n = 5 + Math.floor(Math.random() * 4);
      let at = 0;
      for (let i = 0; i < n; i++) {
        noise(d, t + at, { f: rnd(2500, 4200), q: 3, d: 0.018, gain: 0.35 - i * 0.025 });
        at += 0.05 + i * 0.022;
      }
      if (o.count > 1) for (let i = 0; i < 3; i++) noise(d, t + rnd(0.02, at), { f: rnd(2000, 3500), q: 3, d: 0.015, gain: 0.2 });
    },
    land() {
      const d = out({ gain: 2.8 }), t = now();
      noise(d, t, { f: 1800, q: 2, d: 0.03, gain: 0.35 });
    },
    victory() {
      const d = out({ gain: 0.6, verb: 0.7 }), t = now();
      [220, 261.6, 329.6, 440].forEach((f, i) => tone(d, t + i * 0.06, { type: 'sawtooth', f, d: 1.6, a: 0.04, gain: 0.06, lp: 1400, lp2: 500 }));
      bell(d, t, 440, 1.8, 0.1);
    },
    flee() {
      const d = out({ gain: 2, verb: 0.3 }), t = now();
      noise(d, t, { f: 300, f2: 1600, q: 1.5, a: 0.1, d: 0.35, gain: 0.3 });
      for (let i = 0; i < 4; i++) noise(d, t + 0.1 + i * 0.13, { f: 500, q: 1.4, d: 0.05, gain: 0.25 });
    },
    // a death, a Misery: a great bell far off
    toll(o) {
      const d = out({ gain: 0.55, verb: 1 }), t = now();
      bell(d, t, o.f || 98, 5, 0.35);
      noise(d, t, { filter: 'lowpass', f: 120, d: 2.5, a: 0.4, gain: 0.25, brown: true });
    },
    // into the chasm: the drop whistles, then the floor
    fall() {
      const d = out({ gain: 0.35, verb: 0.6 }), t = now();
      tone(d, t, { f: 900, f2: 90, d: 0.75, gain: 0.12 });
      noise(d, t, { f: 600, f2: 150, q: 1, d: 0.7, gain: 0.2 });
      tone(d, t + 0.75, { f: 80, f2: 30, d: 0.4, gain: 0.7 });
      noise(d, t + 0.75, { filter: 'lowpass', f: 700, d: 0.3, gain: 0.5, crush: 5 });
    },
    // something gained: silver, a scroll, an Omen
    gain() {
      const d = out({ gain: 0.8, verb: 0.5 }), t = now();
      tone(d, t, { type: 'triangle', f: 988, d: 0.25, gain: 0.15 });
      tone(d, t + 0.09, { type: 'triangle', f: 1318, d: 0.5, gain: 0.15 });
    },
  };

  // ---------- ambience ----------
  function stopAmbience() {
    ambTimers.forEach(clearTimeout);
    ambTimers = [];
    const t = ctx ? now() : 0;
    for (const n of ambNodes) {
      try { if (n.gain) { n.gain.cancelScheduledValues(t); n.gain.setTargetAtTime(0, t, 0.4); } } catch (e) { /* gone */ }
      if (n.stop) { try { n.stop(t + 2); } catch (e) { /* already stopped */ } }
    }
    ambNodes = [];
  }

  // A held drone: looped noise through a filter, with a slow wobble.
  function bed(o) {
    const src = ctx.createBufferSource();
    src.buffer = o.brown ? brownBuf : noiseBuf; src.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = o.filter || 'lowpass'; f.frequency.value = o.f; f.Q.value = o.q || 0.7;
    const lfo = ctx.createOscillator(), depth = ctx.createGain();
    lfo.frequency.value = o.rate || 0.07; depth.gain.value = o.f * (o.wobble || 0.35);
    lfo.connect(depth).connect(f.frequency);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, now());
    g.gain.linearRampToValueAtTime(o.gain, now() + 2.5);
    src.connect(f).connect(g).connect(ambBus);
    src.start(); lfo.start();
    ambNodes.push(src, lfo, g);
  }

  function hum(freqs, gain) {
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, now());
    g.gain.linearRampToValueAtTime(gain, now() + 4);
    g.connect(ambBus);
    ambNodes.push(g);
    for (const f of freqs) {
      const o = ctx.createOscillator();
      o.frequency.value = f;
      o.connect(g);
      o.start();
      ambNodes.push(o);
    }
  }

  // Now and then: fire fn after a random wait, forever (until the ambience changes).
  function every(min, max, fn) {
    const loop = () => {
      ambTimers.push(setTimeout(() => { if (!muted) fn(); loop(); }, rnd(min, max) * 1000));
    };
    loop();
  }

  function startAmbience() {
    if (!ctx) return;
    stopAmbience();
    const { where, ix } = ambState;
    if (where === 'crawl') {
      bed({ f: 140, gain: 0.1, brown: true, rate: 0.05 });
      hum([41.2, 41.9, 61.7], 0.01);
      if (ix === 'gaol') {
        // the Gaol: water everywhere, and somewhere a chain shifting in it
        bed({ filter: 'bandpass', f: 520, q: 6, gain: 0.02, rate: 0.03, wobble: 0.5 });
        every(0.8, 3.5, () => FX.drip({ gain: 0.35 }));
        every(11, 26, () => {
          const d = out({ bus: ambBus, gain: 0.3, verb: 1, pan: rnd(-0.8, 0.8) }), t = now();
          for (let i = 0; i < 5; i++) bell(d, t + i * rnd(0.08, 0.16), rnd(700, 1200), 0.3, 0.03);
        });
      } else {
        every(2.5, 7, () => FX.drip({ gain: 0.25 }));
      }
      // a moan of air through the stone
      every(14, 30, () => {
        const d = out({ bus: ambBus, gain: 0.5, verb: 0.6, pan: rnd(-0.7, 0.7) });
        noise(d, now(), { f: 260, f2: rnd(380, 520), q: 9, a: 1.5, d: 2.5, gain: 0.12 });
      });
    } else if (where === 'town') {
      bed({ filter: 'bandpass', f: 500, q: 0.8, gain: 0.1, rate: 0.12, wobble: 0.6 });
      // rain on the stones and the water: a steady hiss, and now and then a gust of it
      bed({ filter: 'highpass', f: 2600, gain: 0.05, rate: 0.08, wobble: 0.35 });
      bed({ filter: 'bandpass', f: 1200, q: 0.6, gain: 0.03, rate: 0.05, wobble: 0.5 });
      every(18, 34, () => { const d = out({ bus: ambBus, gain: 0.35, verb: 1, pan: rnd(-0.6, 0.6) }); bell(d, now(), 196, 4, 0.12); });
      every(9, 20, () => { const d = out({ bus: ambBus, gain: 0.3, verb: 0.5, pan: rnd(-1, 1) }); for (let i = 0; i < 2; i++) noise(d, now() + i * 0.32, { f: 1400, f2: 900, q: 4, d: 0.22, gain: 0.25 }); });
    }
  }

  Q.Sound = {
    play(name, opts = {}) {
      if (!ctx || muted || !FX[name]) return;
      if (ctx.state === 'suspended') ctx.resume();
      try { FX[name](opts); } catch (e) { /* a sound must never break the game */ }
    },
    ambience(where, ix = '') {
      if (ambState.where === where && ambState.ix === ix) return;
      ambState = { where, ix };
      if (ctx) { if (where) startAmbience(); else stopAmbience(); }
    },
    duck(on) {
      ducked = !!on;
      if (ctx) ambBus.gain.setTargetAtTime(ducked ? 0.35 : 1, now(), 0.3);
    },
    toggle() {
      muted = !muted;
      try { localStorage.setItem(MUTE_KEY, muted ? '1' : '0'); } catch (e) { /* ignore */ }
      init();
      if (ctx) master.gain.setTargetAtTime(muted ? 0 : 0.9, now(), 0.05);
      return !muted;
    },
    get on() { return !muted; },
    // for tests: render an effect offline and report its level
    _fx: FX,
  };
})();
