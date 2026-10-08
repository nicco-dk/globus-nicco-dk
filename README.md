# globus.nicco.dk

Udbrudsglobus. Statisk side, én HTML-fil plus skrifttyper. Ingen build, ingen database.

Dette repo er kilden. Det, der ligger i `site/` på `main`, er det, der er live på https://globus.nicco.dk.

## Indhold

| Sti | Hvad |
| --- | --- |
| `site/index.html` | Siden, inklusive hele datasættet og kortgeometrien |
| `site/fonts/` | Archivo og IBM Plex Mono, lagt lokalt så der ikke hentes noget fra Google |
| `site/404.html` | Fejlside. Uden den svarer Pages med hele forsiden på ukendte adresser |
| `site/favicon.svg`, `site/favicon.ico` | Ikon til browserfanen |
| `site/_headers` | Cache og sikkerhedsheadere, læses af Cloudflare Pages |
| `.github/workflows/udrul.yml` | Kontrol og udrulning ved hvert commit på `main` |
| `tools/tjek-data.mjs` | Formkontrol af datasættet, køres af workflowet og kan køres lokalt |
| `OPDATERING.md` | Arbejdsbeskrivelse for den kørsel, der holder datasættet ajour |
| `LOG.md` | Én post pr. opdatering: hvad der blev ændret og hvorfor |

Kun `site/` udrulles. Denne README og alt andet uden for `site/` bliver i repoet.

## Udrulning

Hosting er Cloudflare Pages, projekt `globus-nicco-dk`. Projektet er oprettet med direkte upload og kan ikke skiftes til Git-integration, så udrulningen sker fra GitHub Actions med `wrangler pages deploy`.

- Et commit på `main`, der rører `site/`, udruller af sig selv.
- Udrulningen kan også startes manuelt under Actions, Udrul til Cloudflare Pages, Run workflow.
- Kræver repo-secret `CLOUDFLARE_API_TOKEN`: et Cloudflare API-token med tilladelsen Account, Cloudflare Pages, Edit.

Før udrulning kontrolleres siden og datasættet. Fejler noget, udrulles der ikke.

Siden:

1. Intet i `site/` henviser til fonts.googleapis.com eller fonts.gstatic.com.
2. `site/index.html` begynder med `<!doctype html>`.
3. `site/index.html` har `<meta name="viewport">`.
4. `site/index.html` har reglen `[hidden]{display:none!important}`.

De tre sidste findes, fordi siden oprindeligt kom som et fragment fra et artifact uden dokumentskelet. Uden dem vises skrivebordslayoutet på telefoner, og detaljepanelet kan ikke lukkes.

Datasættet, med `node tools/tjek-data.mjs`: sidens script kan læses, hver hændelse har de nødvendige felter og mindst én kilde med https-adresse, koordinater og datoer er gyldige, ingen dato ligger efter datasættets dato, trinnet stemmer med forløbet, og ingen hændelse er forsvundet siden forrige udgave. Kontrollen fanger formfejl. Den kan ikke se, om et tal er rigtigt.

## Opdatering af data

Datasættet ligger i `site/index.html` i konstanten `EVENTS`, og datasættets dato i `DATA_DATO` lige over. Antal hændelser og dato i sidens overskriftslinje og fod læses derfra, så de to steder er de eneste, der skal røres ved en opdatering.

Fremgangsmåde, kilder, regler og felter står i `OPDATERING.md`. Hver opdatering får en post i `LOG.md`.

## Bemærk

Datasættet er sammenstillet manuelt 8. oktober 2026 og opdateres ikke automatisk endnu. Det står også i sidens overskriftslinje.

Siden er offentlig, men holdt ude af søgemaskiner, mens datasættet er en prototype. Det styres af linjen `<meta name="robots" content="noindex">` i `site/index.html`. Slet linjen, når siden skal kunne findes. Adresserne på pages.dev holdes altid ude med `X-Robots-Tag` i `site/_headers`, så der kun er én udgave i søgemaskinerne.
