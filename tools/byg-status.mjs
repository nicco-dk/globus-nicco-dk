#!/usr/bin/env node
// Bygger sitets /status.json i den faste form nicco-status. Se STATUS.md i nicco-dk/projekt-nicco-dk.
// Kopieres ind i hvert sites repo som tools/byg-status.mjs. Ret ikke formen her, ret STATUS.md først.
//
// Brug:
//   node tools/byg-status.mjs --site globus --spor A --ud site/status.json
//        [--data-tid 2026-10-13T17:41+02:00] [--max-timer 9]
//        [--gennemgang GENNEMGANG.md] [--noegletal '{"haendelser":40}']
//
// Commit, udløser og kørsel læses fra GitHub Actions' miljøvariabler. Uden for Actions skrives "lokal".

import fs from 'node:fs';

const args = process.argv.slice(2);
const arg = navn => { const i = args.indexOf('--' + navn); return i >= 0 ? args[i + 1] : undefined; };
const fejl = t => { console.error('FEJL: ' + t); process.exit(1); };

const site = arg('site');
const spor = arg('spor');
const ud = arg('ud');
if (!site || !/^[a-z]+$/.test(site)) fejl('--site skal være sitets navn med små bogstaver, fx globus');
if (!['A', 'B', 'C', 'D', 'X'].includes(spor)) fejl('--spor skal være A, B, C, D eller X');
if (!ud) fejl('--ud mangler, fx site/status.json');

const dataTid = arg('data-tid') || null;
if (dataTid && Number.isNaN(Date.parse(dataTid))) fejl(`--data-tid kan ikke læses som tid: ${dataTid}`);
const maxTimer = arg('max-timer') !== undefined ? Number(arg('max-timer')) : null;
if (maxTimer !== null && !(maxTimer > 0)) fejl('--max-timer skal være et positivt tal');

// Åbne punkter til ejerens gennemgang: hver linje, der begynder med "- ", tæller som ét punkt.
let gennemgang = null;
const gFil = arg('gennemgang');
if (gFil) gennemgang = fs.readFileSync(gFil, 'utf8').split('\n').filter(l => l.startsWith('- ')).length;

let noegletal = {};
if (arg('noegletal')) {
  try { noegletal = JSON.parse(arg('noegletal')); } catch { fejl('--noegletal er ikke gyldig JSON'); }
}

const repo = process.env.GITHUB_REPOSITORY || `nicco-dk/${site}-nicco-dk`;
const status = {
  form: 'nicco-status',
  site,
  domaene: `${site}.nicco.dk`,
  repo,
  spor,
  genereret: new Date().toISOString(),
  commit: (process.env.GITHUB_SHA || 'lokal').slice(0, 7),
  udrulning: {
    udloest_af: process.env.GITHUB_EVENT_NAME || 'lokal',
    koersel: process.env.GITHUB_RUN_ID ? `https://github.com/${repo}/actions/runs/${process.env.GITHUB_RUN_ID}` : 'lokal'
  },
  data: { senest_gennemgaaet: dataTid, max_alder_timer: maxTimer },
  gennemgang,
  noegletal
};

fs.writeFileSync(ud, JSON.stringify(status, null, 2) + '\n');
console.log(`${ud} skrevet: commit ${status.commit}, data ${dataTid || 'ingen'}, gennemgang ${gennemgang ?? 'ingen'}, ${Object.keys(noegletal).length} nøgletal.`);
