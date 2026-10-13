#!/usr/bin/env node
// Kontrollerer en /status.json mod den faste form nicco-status. Se STATUS.md i nicco-dk/projekt-nicco-dk.
// Kopieres ind i hvert sites repo som tools/tjek-status.mjs og køres i workflowet før udrulning.
// admin.nicco.dk bruger den samme kontrol, når filerne hentes.
//
// Brug:  node tools/tjek-status.mjs site/status.json
//
// Afslutter med kode 1 og en liste over fejl, hvis filen ikke holder formen.

import fs from 'node:fs';

export function tjekStatus(tekst) {
  const f = [];
  if (Buffer.byteLength(tekst, 'utf8') > 4096) f.push('filen er større end 4 KB');
  let s;
  try { s = JSON.parse(tekst); } catch { return ['filen er ikke gyldig JSON']; }
  if (!s || typeof s !== 'object' || Array.isArray(s)) return ['filen er ikke et JSON-objekt'];

  const tid = v => typeof v === 'string' && !Number.isNaN(Date.parse(v));
  if (s.form !== 'nicco-status') f.push('form skal være "nicco-status"');
  if (typeof s.site !== 'string' || !/^[a-z]+$/.test(s.site)) f.push('site skal være små bogstaver');
  if (s.domaene !== `${s.site}.nicco.dk`) f.push('domaene skal være <site>.nicco.dk');
  if (typeof s.repo !== 'string' || !/^[A-Za-z0-9-]+\/[a-z]+-nicco-dk$/.test(s.repo)) f.push('repo skal have formen <ejer>/<site>-nicco-dk');
  if (!['A', 'B', 'C', 'D', 'X'].includes(s.spor)) f.push('spor skal være A, B, C, D eller X');
  if (!tid(s.genereret)) f.push('genereret skal være et tidspunkt');
  if (typeof s.commit !== 'string' || !/^([0-9a-f]{7,40}|lokal)$/.test(s.commit)) f.push('commit skal være 7 til 40 hex-tegn');
  if (!s.udrulning || typeof s.udrulning.udloest_af !== 'string' || typeof s.udrulning.koersel !== 'string') f.push('udrulning skal have udloest_af og koersel');
  if (!s.data || typeof s.data !== 'object') f.push('data mangler');
  else {
    if (s.data.senest_gennemgaaet !== null && !tid(s.data.senest_gennemgaaet)) f.push('data.senest_gennemgaaet skal være et tidspunkt eller null');
    if (s.data.max_alder_timer !== null && !(typeof s.data.max_alder_timer === 'number' && s.data.max_alder_timer > 0)) f.push('data.max_alder_timer skal være et positivt tal eller null');
  }
  if (s.gennemgang !== null && !Number.isInteger(s.gennemgang)) f.push('gennemgang skal være et heltal eller null');
  if (!s.noegletal || typeof s.noegletal !== 'object' || Array.isArray(s.noegletal)) f.push('noegletal skal være et objekt');
  else for (const [k, v] of Object.entries(s.noegletal)) if (typeof v !== 'number' || !Number.isFinite(v)) f.push(`noegletal.${k} skal være et tal`);

  // Vagt mod persondata: ingen nøgler, der lyder som oplysninger om en person, nogen steder i filen.
  const forbudt = /^(e-?mail|mail|ip|navn|name|adresse|address|telefon|phone|bruger|user)/i;
  const gaa = (o, sti) => {
    if (!o || typeof o !== 'object') return;
    for (const [k, v] of Object.entries(o)) {
      if (forbudt.test(k)) f.push(`nøglen ${sti}${k} ligner persondata`);
      gaa(v, `${sti}${k}.`);
    }
  };
  gaa(s, '');
  return f;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const sti = process.argv[2] || 'site/status.json';
  const fund = tjekStatus(fs.readFileSync(sti, 'utf8'));
  if (fund.length) { for (const x of fund) console.error('FEJL: ' + x); process.exit(1); }
  console.log(`${sti} holder formen nicco-status.`);
}
