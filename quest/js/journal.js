// The journal: what's going on and what to do next, spelled out, so nobody gets lost. Not narrated.
//
// Quests aren't stored: each is worked out from the run (its flags, scenes and doors) every time the journal
// is read, so old saves get a journal too. What is stored (S.journal) is the record: one chapter per pair of
// wretches, what they did, and how they died, with whatever they left unfinished.
//
//   Q.Journal.start(S)              a new run: the first chapter
//   Q.Journal.newPair(S)            new wretches take over: a new chapter
//   Q.Journal.died(S, cause, where) the pair died: close their chapter, note what they left open
//   Q.Journal.update(S) -> [lines]  what's newly done or newly known since last time (for the log)
//   Q.Journal.html(S)               the journal, for a modal
//   Q.Journal.now(S)                the one thing to do next, in a line
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const F = (S) => S.flags || {};
  const gaolGrid = (S) => { const g = (S.floors || []).find((f) => f.id === 'gaol'); return g ? g.grid : null; };
  const doorOpen = (S, x, y) => { const g = gaolGrid(S); return !!(g && g[y] && g[y][x] !== 'C' && g[y][x] !== 'J'); };
  const living = (S) => F(S).livingName || 'the prisoner';
  const freedName = (S) => (typeof F(S).freed === 'string' ? F(S).freed : living(S));

  // Each quest: id, title, main?, known(S), steps: [{ text, deed, done(S) }], lost(S) -> why it can't be done.
  // A step's text says exactly what to do and where; its deed is what the journal records once it's done.
  const QUESTS = [
    {
      id: 'gaol', title: 'Out of the Brine Gaol', main: true,
      known: () => true,
      warn: (S) => (F(S).gaolHeirs && !S.escaped ? 'The water has risen. If these two die in the Gaol, it drowns, and the game starts over.' : ''),
      steps: [
        {
          text: (S) => (F(S).inSealedCell
            ? 'Get out of your cell, the last one at the east end of the row. Use its door: wrench the rusted hinge (Strength), pick the lock with a bone splinter (Agility), or call for the jailer (Presence).'
            : 'Get out of your cell. Use its door: wrench the rusted hinge (Strength), pick the lock with a bone splinter (Agility), or call for the jailer (Presence).'),
          deed: 'Broke out of their cell.',
          done: (S) => S.escaped || (!F(S).inSealedCell && doorOpen(S, 1, 2)),
        },
        {
          text: 'Get your things back. They are in the evidence room: go to the west end of the corridor outside the cells, down through the infirmary, and through the door at its south end. The long key to the Warden’s hall hangs there too.',
          deed: 'Found their own things in the evidence room, and the long key.',
          done: (S) => S.escaped || !!F(S).hallKey,
        },
        {
          text: 'Unlock the Warden’s hall with the long key: the black iron door in the south wall of the lower block. Mind the hole in the floor in front of it.',
          deed: 'Unlocked the Warden’s hall.',
          done: (S) => S.escaped || doorOpen(S, 9, 12),
        },
        {
          text: 'Get past the Drowned Warden, who walks his rounds in the hall. Kill him, or he will kill you.',
          deed: 'Killed the Drowned Warden.',
          done: (S) => S.escaped || !!F(S).wardenDead,
        },
        {
          text: 'Climb out through the sewer grate in the far east corner of the Warden’s hall.',
          deed: 'Climbed out of the Brine Gaol into Skarnvik.',
          done: (S) => !!S.escaped,
        },
      ],
    },
    {
      id: 'prisoner', title: (S) => `The voice from the cell: ${living(S)}`,
      known: (S) => !!(F(S).promised || F(S).leftHim || F(S).freed),
      steps: [{
        text: (S) => `${living(S)} is locked in a cell in the row: the fourth door from the west, with a grille in it. Break the lock (Strength) to let him out.`,
        deed: (S) => `Broke ${freedName(S)} out of his cell.`,
        done: (S) => !!F(S).freed,
      }],
      lost: (S) => (S.escaped && !F(S).freed ? `You left the Gaol without ${living(S)}.` : ''),
    },
    {
      id: 'why', title: 'Why Skarnvik sinks', main: true,
      known: (S) => !!S.escaped,
      steps: [
        {
          text: 'Find the Stranger, who stands in the shadow of the gallows in Gallows Square.',
          deed: 'Met the Stranger by the gallows.',
          done: (S) => !!S.metStranger,
        },
        {
          text: 'Go down the crypt stair at the edge of Gallows Square into the Undercroft, and see what the water is doing. The stair down to it is in the far south-east of the crypts.',
          deed: 'Found the stair under the square, and the water rising up it.',
          done: (S) => !!F(S).deepStair,
        },
        {
          text: 'Go back to the Stranger in Gallows Square and tell him what the water is doing under the square.',
          deed: 'Told the Stranger what is under the square.',
          done: (S) => !!F(S).strangerTold,
        },
        {
          text: 'Hear the rest from the Stranger in Gallows Square.',
          deed: 'Heard from the Stranger about Saint Agne, under Church Hill.',
          done: (S) => !!F(S).seekAgne,
        },
        {
          text: (S) => (F(S).bellKey
            ? 'You have Brother Osric’s key. Unlock the little door behind the graves on Church Hill, and go down.'
            : F(S).bellStair
              ? `Open the little door behind the graves on Church Hill. ${freedName(S)} says it only sticks: lift it on its hinges (Strength). Or get Brother Osric’s key from the gravedigger on Church Hill.`
              : 'Open the little door behind the graves on Church Hill: the bell-ringers’ way in. The gravedigger on Church Hill knows where Brother Osric’s key is buried (pay him 10s, or dig it up yourselves).'),
          deed: 'Opened the bell-ringers’ door in Church Hill.',
          done: (S) => !!F(S).hollowOpen,
        },
        {
          text: 'Go down the bell-ringers’ stair into the Hollow, deal with the overseer of the salt-cutters, and find Saint Agne beyond him.',
          deed: 'Found Saint Agne in the Hollow under Church Hill.',
          done: (S) => !!F(S).agneMet,
        },
        {
          text: 'Go back up and tell the Stranger, by the gallows, what is under Church Hill.',
          deed: 'Told the Stranger about Saint Agne.',
          done: (S) => !!F(S).strangerAgne,
        },
        {
          text: 'Under the Exchange, down the white stair, the Salt Lords grind the saints into salt. (The story continues in the next update.)',
          deed: '',
          done: () => false,
        },
      ],
    },
    {
      id: 'freed', title: (S) => `${freedName(S)}, out of the Brine`,
      known: (S) => !!(S.escaped && F(S).freed),
      lost: (S) => (F(S).freedGone && !F(S).freedPaid ? 'He left the Gutter while nobody came for him.' : ''),
      steps: [
        {
          text: (S) => `${freedName(S)} got out too. Find him in his corner of the Gutter.`,
          deed: (S) => `Found ${freedName(S)} again, in the Gutter.`,
          done: (S) => !!(S.scenes && S.scenes.freed),
        },
        {
          text: (S) => `${freedName(S)} says he owes you. Ask him about it, in the Gutter.`,
          deed: (S) => `${freedName(S)} paid what he owed.`,
          done: (S) => !!F(S).freedPaid,
        },
      ],
    },
    {
      id: 'kin', title: (S) => `${F(S).knownName || 'The one you knew'}’s family`,
      known: (S) => !!(S.escaped && F(S).knownName),
      lost: (S) => (F(S).kinGone && !F(S).kinDone ? 'She stopped waiting. Her door in Lantern Row is boarded up.' : ''),
      steps: [{
        text: (S) => `${F(S).knownName} drowned in the cell across the corridor from yours. ${F(S).knownShe === 'he' ? 'His' : 'Her'} family waits at their door in Lantern Row, with a candle. Go and tell them.`,
        deed: (S) => (F(S).kinCursed ? `Walked away from ${F(S).knownName}’s family, and were cursed for it.` : `Told ${F(S).knownName}’s family, in Lantern Row.`),
        done: (S) => !!F(S).kinDone,
      }],
    },
    {
      id: 'hanged', title: (S) => `${living(S)}, hanged`,
      known: (S) => !!(S.escaped && F(S).sawDawn && (F(S).promised || F(S).leftHim) && !F(S).freed),
      warn: (S) => (F(S).hangedFed && !F(S).hangedLaid ? 'He wasn’t laid to rest in time: the ones he hanged walk with him now.' : ''),
      steps: [{
        text: (S) => `The Salt Lords hanged ${living(S)}, the one you left in the Brine. At night he comes down off the gallows and walks Gallows Square. Lay him to rest.`,
        deed: (S) => `Laid ${living(S)} to rest.`,
        done: (S) => !!F(S).hangedLaid,
      }],
    },
  ];

  const val = (v, S) => (typeof v === 'function' ? v(S) : v);
  // The bounties you've taken, as quests of their own.
  function bountyQuests(S) {
    const b = S.bounties;
    if (!b || !Q.BOUNTIES) return [];
    return Object.entries(b.taken).map(([id, got]) => {
      const x = Q.BOUNTIES.find((y) => y.id === id);
      if (!x) return null;
      return {
        id: `bounty-${id}`, title: `Bounty: ${x.title}`, known: () => true,
        steps: [
          { text: `${x.text} (${Math.min(got, x.need)} of ${x.need} so far.)`, deed: `Did the bounty: ${x.title}.`, done: () => got >= x.need },
          { text: `Collect your ${x.pay}s at the bounty board in Gallows Square.`, deed: '', done: () => false },
        ],
      };
    }).filter(Boolean);
  }

  // Every quest that's known, worked out: { id, title, main, state: 'open' | 'done' | 'lost', steps, current, why }
  function quests(S) {
    return [...QUESTS, ...bountyQuests(S)].filter((q) => q.known(S)).map((q) => {
      const steps = q.steps.map((st, i) => ({ i, text: val(st.text, S), deed: val(st.deed, S), done: !!st.done(S) }));
      const current = steps.find((st) => !st.done) || null;
      const why = q.lost ? q.lost(S) : '';
      const state = !current ? 'done' : why ? 'lost' : 'open';
      return { id: q.id, title: val(q.title, S), main: !!q.main, state, steps, current, why, warn: q.warn ? q.warn(S) : '' };
    });
  }

  function chapter(S) {
    return { names: S.party.map((p) => p.name), classes: S.party.map((p) => (Q.CLASSES[p.cls] || {}).name || ''), deeds: [], died: null, open: [] };
  }
  function ensure(S) {
    if (S.journal) return S.journal;
    // a save from before the journal: what's already done is the past, with no deeds to tell
    S.journal = { chapters: [chapter(S)], seen: {} };
    for (const q of quests(S)) { S.journal.seen[`q:${q.id}`] = 0; for (const st of q.steps) if (st.done) S.journal.seen[`${q.id}.${st.i}`] = 0; }
    return S.journal;
  }

  const Journal = {
    quests,
    start(S) { S.journal = { chapters: [chapter(S)], seen: {} }; },
    newPair(S) { ensure(S).chapters.push(chapter(S)); },
    died(S, cause, where) {
      const J = ensure(S);
      Journal.update(S);
      const ch = J.chapters[J.chapters.length - 1];
      ch.died = { cause, where };
      ch.open = quests(S).filter((q) => q.state === 'open').map((q) => ({ id: q.id, title: q.title, step: q.current.text }));
      J.left = J.left || {};
      for (const q of ch.open) J.left[q.id] = J.chapters.length - 1;
    },
    // Newly done steps become the current pair's deeds; a step undone again (the key back on its hook) can be
    // earned again. Returns lines for the log: what's new in the journal.
    update(S) {
      if (!S || !S.party) return [];
      const J = ensure(S);
      const ch = J.chapters.length - 1;
      const lines = [];
      for (const q of quests(S)) {
        if (J.seen[`q:${q.id}`] === undefined) {
          J.seen[`q:${q.id}`] = ch;
          if (q.state === 'open') lines.push(`New in the journal: <b>${esc(q.title)}</b>.`);
        }
        for (const st of q.steps) {
          const key = `${q.id}.${st.i}`;
          if (st.done && J.seen[key] === undefined) {
            J.seen[key] = ch;
            if (st.deed) J.chapters[ch].deeds.push(st.deed);
            if (J.left && J.left[q.id] !== undefined) delete J.left[q.id];
          } else if (!st.done && J.seen[key] !== undefined) delete J.seen[key];
        }
      }
      return lines;
    },
    // the one thing to do next: the main quest's step, or else the first open one
    nowQuest(S) {
      const qs = quests(S).filter((q) => q.state === 'open');
      return qs.find((x) => x.main) || qs[0] || null;
    },
    now(S) { const q = Journal.nowQuest(S); return q ? q.current.text : ''; },
    html(S) {
      const J = ensure(S);
      Journal.update(S);
      const qs = quests(S);
      const open = qs.filter((q) => q.state === 'open').sort((a, b) => b.main - a.main);
      const nq = Journal.nowQuest(S);
      const leftBy = (q) => { const c = J.left && J.left[q.id] !== undefined ? J.chapters[J.left[q.id]] : null; return c ? `<p class="left">${esc(c.names.join(' and '))} died with this unfinished.</p>` : ''; };
      // the quest whose step is "now" shows it once, up top, with what's already done under it
      const quest = (q) => {
        const done = q.steps.filter((st) => st.done).map((st) => `<li class="done">${esc(st.deed || st.text)}</li>`).join('');
        const warn = q.warn ? `<p class="warn">${esc(q.warn)}</p>` : '';
        if (nq && q.id === nq.id) return done || leftBy(q) || warn ? `<div class="quest past">${warn}${done ? `<ol>${done}</ol>` : ''}${leftBy(q)}</div>` : '';
        return `<div class="quest${q.main ? ' main' : ''}"><h3>${esc(q.title)}</h3>${warn}<ol>${done}<li class="now">${esc(q.current.text)}</li></ol>${leftBy(q)}</div>`;
      };
      const finished = qs.filter((q) => q.state !== 'open');
      const ch = J.chapters[J.chapters.length - 1];
      const dead = J.chapters.slice(0, -1).reverse();
      const deeds = (c) => (c.deeds.length ? `<ul class="deeds">${c.deeds.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '<p class="dim">Nothing worth writing down.</p>');
      const ordered = nq ? [...open.filter((q) => q.id === nq.id), ...open.filter((q) => q.id !== nq.id)] : open;
      return `${nq ? `<p class="j-now"><span>Now · ${esc(nq.title)}</span>${esc(nq.current.text)}</p>` : ''}
        ${ordered.map(quest).join('')}
        ${finished.length ? `<h3 class="j-head">Done</h3><ul class="j-done">${finished.map((q) => `<li class="${q.state}">${esc(q.title)}${q.state === 'lost' ? `: <i>${esc(q.why)}</i>` : ''}</li>`).join('')}</ul>` : ''}
        <h3 class="j-head">${esc(ch.names.join(' and '))}</h3>${deeds(ch)}
        ${dead.length ? `<h3 class="j-head">The dead</h3>${dead.map((c) => `<div class="chapter"><b>${esc(c.names.join(' and '))}</b>${c.classes.some(Boolean) ? `<small>${esc(c.classes.filter(Boolean).join(', '))}</small>` : ''}${deeds(c)}${c.died ? `<p class="died">Killed by ${esc(c.died.cause)} in ${esc(c.died.where)}.${c.open.length ? ` Left unfinished: ${esc(c.open.map((o) => o.title).join('; '))}.` : ''}</p>` : ''}</div>`).join('')}` : ''}`;
    },
  };
  Q.Journal = Journal;
})();
