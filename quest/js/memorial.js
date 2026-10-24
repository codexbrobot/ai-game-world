// The memorial by the paupers' graveyard (off Gallows Square): every wretch of yours who ever died, in any game,
// with what killed them, where, and what their pair had done by then. Kept in this browser like the Codex, so a
// new game doesn't wipe it. Not narrated.
//
//   Q.Memorial.newGame()          a new game begins: its number
//   Q.Memorial.record(S, where)   write down every dead wretch in the party who isn't on the board yet
//   Q.Memorial.list()             everyone on it, oldest first
//   Q.Memorial.html(esc)          the roll of the dead, newest game first, for a modal
'use strict';
var Q = window.Q || (window.Q = {});

(function () {
  const KEY = 'quest-borg-memorial';
  function load() {
    try {
      const m = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (m && Array.isArray(m.dead)) return m;
    } catch (e) { /* storage may be unavailable */ }
    return { games: 0, dead: [] };
  }
  function store(m) {
    try { localStorage.setItem(KEY, JSON.stringify(m)); } catch (e) { /* ignore */ }
  }
  const newId = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

  Q.Memorial = {
    newGame() {
      const m = load();
      m.games += 1;
      store(m);
      return m.games;
    },
    // Each wretch gets an id the first time it's saved, so nobody is written down twice (a reload, a second save).
    record(S, where) {
      if (!S || !S.party) return 0;
      let m = null, n = 0;
      for (const pc of S.party) {
        if (!pc.id) pc.id = newId();
        if (!pc.dead) continue;
        m = m || load();
        if (m.dead.some((x) => x.id === pc.id)) continue;
        if (!S.game) { m.games += 1; S.game = m.games; } // a game begun before the memorial
        const J = S.journal;
        const ch = J && J.chapters && J.chapters[J.chapters.length - 1];
        m.dead.push({
          id: pc.id, game: S.game, name: pc.name, cls: (Q.CLASSES[pc.cls] || {}).name || '',
          cause: pc.cause || 'the dark', where: where || '', deeds: ch ? ch.deeds.slice() : [],
        });
        n++;
      }
      if (n) store(m);
      return n;
    },
    list: () => load().dead,
    html(esc) {
      const dead = load().dead;
      if (!dead.length) return '<p class="dim">No names yet. The board is new, and the paint is waiting.</p>';
      const games = [...new Set(dead.map((x) => x.game))].sort((a, b) => b - a);
      return games.map((g) => {
        const rows = dead.filter((x) => x.game === g).reverse().map((x) => `<div class="grave">
          <img src="${Q.portraitUrl(x.name)}" alt="" onerror="this.remove()">
          <div><b>${esc(x.name)}</b>${x.cls ? `<small>${esc(x.cls)}</small>` : ''}
            <p>Killed by ${esc(x.cause)}${x.where ? ` in ${esc(x.where)}` : ''}.</p>
            ${x.deeds.length ? `<ul class="deeds">${x.deeds.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>` : '<p class="dim">Nothing worth writing down.</p>'}
          </div></div>`).join('');
        return `<h3 class="j-head">Game ${g}</h3>${rows}`;
      }).join('');
    },
  };
})();
