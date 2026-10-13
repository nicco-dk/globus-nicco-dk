#!/usr/bin/env node
// Globus' nøgletal til /status.json. Skriver ét JSON-objekt med tal til standardud, som
// tools/byg-status.mjs tager med --noegletal. Køres af workflowet efter hent-feeds og hent-medier.
//
// Brug:  node tools/status-noegletal.mjs [site]
//
// Kun tal, aldrig tekst eller persondata. Se STATUS.md i nicco-dk/projekt-nicco-dk.
// En fil, der mangler eller ikke kan læses, giver intet tal frem for et forkert tal.

import fs from 'node:fs';
import vm from 'node:vm';

const site = process.argv[2] || 'site';
const tal = {};

try {
  const html = fs.readFileSync(`${site}/index.html`, 'utf8');
  const s = html.indexOf('const EVENTS = ['), e = html.indexOf('\n];', s);
  if (s >= 0 && e > s) {
    const events = vm.runInNewContext('(' + html.slice(s + 'const EVENTS = '.length, e + 2) + ')', Object.create(null), { timeout: 2000 });
    tal.haendelser = events.length;
    tal.haendelser_aktive = events.filter(x => x.live).length;
    tal.mistanker_aktive = events.filter(x => x.live && x.stage === 'mistanke').length;
  }
} catch { /* intet tal frem for et forkert */ }

try {
  const f = JSON.parse(fs.readFileSync(`${site}/feeds.json`, 'utf8'));
  if (Array.isArray(f.h)) {
    tal.varsler = f.h.length;
    tal.varsler_alvor_3_plus = f.h.filter(x => (x.alvor || 0) >= 3).length;
  }
} catch { /* intet tal */ }

try {
  const k = JSON.parse(fs.readFileSync(`${site}/konflikter.json`, 'utf8'));
  if (Array.isArray(k.s)) tal.konflikter_bekraeftet = k.s.filter(x => x.type === 'konflikt' && x.status === 'bekraeftet').length;
} catch { /* intet tal */ }

process.stdout.write(JSON.stringify(tal));
