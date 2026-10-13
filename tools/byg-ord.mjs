#!/usr/bin/env node
// Ordlisten til /oversaet.
//
//   node tools/byg-ord.mjs site
//
// Samler alle ord i sidens egne filer (index.html og JSON-filerne i site og site/regioner, som udrulningen lige har
// hentet) og skriver dem til site/oversaet-ord.txt, ét ord pr. linje. functions/oversaet.js oversætter kun tekster,
// hvis ord står i listen, så endepunktet ikke kan bruges til at oversætte andre tekster. Køres lige før udrulningen.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const UD = process.argv[2];
if (!UD) { console.error('Brug: node tools/byg-ord.mjs site'); process.exit(2); }
const ORD = new Set();
let filer = 0;
const laes = mappe => {
  for (const n of readdirSync(mappe)) {
    const f = join(mappe, n);
    if (statSync(f).isDirectory()) { if (n === 'regioner') laes(f); continue; }
    if (!['.html', '.json'].includes(extname(n)) || n === 'oversaet-ord.txt') continue;
    let t = readFileSync(f, 'utf8');
    // æ og lignende i JSON skal også tælle som bogstaver.
    if (extname(n) === '.json') t = t.replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)));
    for (const w of t.toLowerCase().match(/\p{L}{2,}/gu) || []) ORD.add(w);
    filer++;
  }
};
laes(UD);
writeFileSync(join(UD, 'oversaet-ord.txt'), [...ORD].sort().join('\n') + '\n');
console.log(`Ordlisten til /oversaet: ${ORD.size} ord fra ${filer} filer.`);
