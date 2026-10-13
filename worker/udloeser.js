// Udløseren for globus.nicco.dk.
//
// GitHubs egen tidsplan i .github/workflows/udrul.yml er ikke gået i gang. Denne Cloudflare Worker
// starter i stedet workflowet "Udrul til Cloudflare Pages" hver time (kl. xx.23) gennem GitHubs API,
// på samme måde som knappen "Run workflow". Workeren har ingen offentlig adresse.
//
// Hemmeligheden GH_TOKEN er et fine-grained GitHub-token med ressourceejer nicco-dk, adgang til repoet globus-nicco-dk og
// kun rettigheden Actions: Read and write. Det sættes af workflowet .github/workflows/udloeser.yml.

const URL = 'https://api.github.com/repos/nicco-dk/globus-nicco-dk/actions/workflows/udrul.yml/dispatches';

async function start(env) {
  const r = await fetch(URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.GH_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'globus-udloeser'
    },
    body: JSON.stringify({ ref: 'main' })
  });
  // GitHub svarer 204 uden indhold, når workflowet er startet.
  if (r.status !== 204) console.log(`GitHub svarede ${r.status}: ${await r.text()}`);
  else console.log('Workflowet er startet.');
}

export default {
  async scheduled(event, env, ctx) { ctx.waitUntil(start(env)); }
};
