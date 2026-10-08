# globus.nicco.dk

Udbrudsglobus. Statisk side, én HTML-fil plus skrifttyper. Ingen build, ingen database.

Dette repo er kilden. Det, der ligger i `site/` på `main`, er det, der er live på https://globus.nicco.dk.

## Indhold

| Sti | Hvad |
| --- | --- |
| `site/index.html` | Siden, inklusive hele datasættet og kortgeometrien |
| `site/fonts/` | Archivo og IBM Plex Mono, lagt lokalt så der ikke hentes noget fra Google |
| `site/_headers` | Cache og sikkerhedsheadere, læses af Cloudflare Pages |
| `.github/workflows/udrul.yml` | Kontrol og udrulning ved hvert commit på `main` |

Kun `site/` udrulles. Denne README og alt andet uden for `site/` bliver i repoet.

## Udrulning

Hosting er Cloudflare Pages, projekt `globus-nicco-dk`. Projektet er oprettet med direkte upload og kan ikke skiftes til Git-integration, så udrulningen sker fra GitHub Actions med `wrangler pages deploy`.

- Et commit på `main`, der rører `site/`, udruller af sig selv.
- Udrulningen kan også startes manuelt under Actions, Udrul til Cloudflare Pages, Run workflow.
- Kræver repo-secret `CLOUDFLARE_API_TOKEN`: et Cloudflare API-token med tilladelsen Account, Cloudflare Pages, Edit.

Før udrulning kontrolleres fire betingelser. Fejler én, udrulles der ikke:

1. Intet i `site/` henviser til fonts.googleapis.com eller fonts.gstatic.com.
2. `site/index.html` begynder med `<!doctype html>`.
3. `site/index.html` har `<meta name="viewport">`.
4. `site/index.html` har reglen `[hidden]{display:none!important}`.

De tre sidste findes, fordi siden oprindeligt kom som et fragment fra et artifact uden dokumentskelet. Uden dem vises skrivebordslayoutet på telefoner, og detaljepanelet kan ikke lukkes.

## Opdatering af data

Datasættet ligger i `site/index.html` i konstanten `EVENTS`. Hver hændelse har felterne: sted, land, koordinater, sygdom, smittestof, eskaleringstrin, forløb med datoer, stedknuder, forbindelser, talserie og kilder.

En planlagt kørsel kan skrive en ny `site/index.html` og committe den. Siden opdaterer sig selv, når udrulningen er kørt.

## Bemærk

Datasættet er sammenstillet manuelt 8. oktober 2026 og opdateres ikke automatisk endnu.
