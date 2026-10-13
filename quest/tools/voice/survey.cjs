// One-off survey: every prose string in the game's scripts, with what it is passed to. Used to decide
// which strings are DM boxes. node quest/tools/voice/survey.cjs > /tmp/survey.txt
const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const walk = require('acorn-walk');

const ROOT = path.join(__dirname, '..', '..');
const FILES = ['js/story.js', 'js/game.js', 'js/battle.js', 'js/items.js', 'js/data.js', 'js/rules.js'];

function calleeName(node) {
  const c = node.callee;
  if (c.type === 'Identifier') return c.name;
  if (c.type === 'MemberExpression') return (c.object.name || (c.object.property && c.object.property.name) || '?') + '.' + (c.property.name || '?');
  return '?';
}

for (const f of FILES) {
  const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
  const ast = acorn.parse(src, { ecmaVersion: 'latest', locations: true });
  walk.ancestor(ast, {
    TemplateLiteral(node, anc) { report(node, anc, node.quasis.map((q) => q.value.cooked).join('⟨⟩')); },
    Literal(node, anc) { if (typeof node.value === 'string') report(node, anc, node.value); },
  });
  function report(node, anc, text) {
    const words = text.replace(/<[^>]+>/g, ' ').replace(/⟨⟩/g, ' ').split(/\s+/).filter((w) => /[a-z]/i.test(w));
    if (words.length < 4) return;
    // nearest call and property key above this string
    let call = '-', key = '-';
    for (let i = anc.length - 2; i >= 0; i--) {
      const a = anc[i];
      if (key === '-' && a.type === 'Property') key = a.key.name || a.key.value;
      if (a.type === 'CallExpression' || a.type === 'NewExpression') { call = calleeName(a); break; }
    }
    console.log(`${f}:${node.loc.start.line}\t${call}\t${key}\t${words.length}\t${text.replace(/\s+/g, ' ').slice(0, 90)}`);
  }
}
