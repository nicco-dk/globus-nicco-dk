# globus.nicco.dk

Udbrudsglobus. Statisk side, én HTML-fil plus skrifttyper. Ingen database, og ingen build ud over ændringsloggen, som bygges ved udrulning.

Dette repo er kilden. Det, der ligger i `site/` på `main`, er det, der er live på https://globus.nicco.dk, plus `log.html`, som workflowet bygger af `LOG.md`.

## Indhold

| Sti | Hvad |
| --- | --- |
| `site/index.html` | Siden, inklusive hele datasættet og kortgeometrien |
| `site/fonts/` | Archivo og IBM Plex Mono, lagt lokalt så der ikke hentes noget fra Google |
| `site/404.html` | Fejlside. Uden den svarer Pages med hele forsiden på ukendte adresser |
| `site/favicon.svg`, `site/favicon.ico` | Ikon til browserfanen |
| `site/og.png` | Billedet, der vises, når et link til siden deles. Et skærmbillede fra 8. oktober 2026, som ikke opdateres af sig selv |
| `site/_headers` | Cache og sikkerhedsheadere, læses af Cloudflare Pages |
| `.github/workflows/udrul.yml` | Kontrol og udrulning ved hvert commit på `main` |
| `tools/tjek-data.mjs` | Formkontrol af datasættet, køres af workflowet og kan køres lokalt |
| `tools/byg-log.mjs` | Bygger den offentlige ændringslog `site/log.html` af `LOG.md`. Køres af workflowet |
| `OPDATERING.md` | Arbejdsbeskrivelse for den kørsel, der holder datasættet ajour |
| `LOG.md` | Én post pr. opdatering: hvad der blev ændret og hvorfor. Offentlig på https://globus.nicco.dk/log |
| `.gitignore` | Holder den byggede `site/log.html` ude af repoet |

Kun `site/` udrulles. Denne README og alt andet uden for `site/` bliver i repoet, bortset fra indholdet af `LOG.md`, som bliver til `log.html`.

## Udrulning

Hosting er Cloudflare Pages, projekt `globus-nicco-dk`. Projektet er oprettet med direkte upload og kan ikke skiftes til Git-integration, så udrulningen sker fra GitHub Actions med `wrangler pages deploy`.

- Et commit på `main`, der rører `site/`, `LOG.md` eller værktøjerne i `tools/`, udruller af sig selv.
- Udrulningen kan også startes manuelt under Actions, Udrul til Cloudflare Pages, Run workflow.
- Kræver repo-secret `CLOUDFLARE_API_TOKEN`: et Cloudflare API-token med tilladelsen Account, Cloudflare Pages, Edit.

Før udrulning kontrolleres siden og datasættet. Fejler noget, udrulles der ikke.

Siden:

1. Intet i `site/` henviser til fonts.googleapis.com eller fonts.gstatic.com.
2. `site/index.html` begynder med `<!doctype html>`.
3. `site/index.html` har `<meta name="viewport">`.
4. `site/index.html` har reglen `[hidden]{display:none!important}`.

De tre sidste findes, fordi siden oprindeligt kom som et fragment fra et artifact uden dokumentskelet. Uden dem vises skrivebordslayoutet på telefoner, og detaljepanelet kan ikke lukkes.

Datasættet, med `node tools/tjek-data.mjs`: sidens script kan læses, hver hændelse har de nødvendige felter og mindst én kilde med https-adresse, koordinater og datoer er gyldige, ingen dato ligger efter datasættets dato, trinnet stemmer med forløbet, ingen hændelse er forsvundet siden forrige udgave, og hvert nyt punkt i et forløb bærer sin egen kilde. Kontrollen fanger formfejl. Den kan ikke se, om et tal er rigtigt.

Kontrollen giver desuden advarsler, som ikke standser udrulningen: tal i `cases` uden opgørelsesdato, hændelser med `live:true` uden nyt i over 30 dage, og gamle forløbspunkter, der er ændret eller fjernet. Med `--links` slår den også de nye kildeadresser op. Det bruges af den daglige kørsel, ikke af workflowet, fordi en kilde, der er nede, ikke må standse en udrulning.

## Siden for den besøgende

- **Om siden.** Dialogen bag knapperne Om siden, Prototypedata og Hvad betyder trinnene forklarer trinnene, kilderne, opdateringen og at siden ikke er rådgivning. Teksten står i `site/index.html` i `<dialog id="om">`.
- **Adresser.** Den valgte hændelse står i adressen som `#id`, fx https://globus.nicco.dk/#ebola-drc, så en hændelse kan deles. Derfor må et `id` aldrig ændres.
- **Listen.** Hver hændelse viser datoen for seneste punkt i forløbet og det aktuelle omfang. Datoen markeres, når den er højst tre dage gammel (`NY_DAGE`). Knappen Nyeste først sorterer efter den dato.
- **Område.** Filteret bruger feltet `region`. Danmark er hændelser med Danmark i `country`.
- **Telefon.** Under 900 pixel i bredden åbner detaljerne som et ark fra bunden. Et tryk uden for arket eller på Tilbage lukker det.

## Opdatering af data

Datasættet ligger i `site/index.html` i konstanten `EVENTS`, og datasættets dato i `DATA_DATO` lige over. Antal hændelser og dato i sidens overskriftslinje og fod læses derfra, så de to steder er de eneste, der skal røres ved en opdatering.

Fremgangsmåde, kilder, regler og felter står i `OPDATERING.md`. Hver opdatering får en post i `LOG.md`.

Den automatiske kørsel tilføjer og ajourfører, men retter ikke i gamle forløbspunkter. Det, den finder, som kun ejeren må rette, står i `GENNEMGANG.md`. `tools/hent-kilder.mjs` henter de faste kilder og skriver kildens egne tal ud, så kørslen ikke skal lede efter adresser.

## Bemærk

Datasættet er sammenstillet manuelt 8. oktober 2026 og opdateres siden da automatisk: en planlagt opgave i Claude, "Udbrudsglobus daglig opdatering", kører kl. 00.20, 05.20, 11.20 og 17.20 dansk tid efter vagtplanen i `OPDATERING.md`. Hver kørsel sætter `DATA_TID` og skriver sit underafsnit i dagens post i `LOG.md`. Sidens overskriftslinje siger det samme gennem `DATA_STATUS` i `site/index.html`. Sættes opgaven på pause, skal den linje rettes tilbage.

Går der mere end 9 timer siden `DATA_TID`, skifter overskriftslinjen selv til en advarsel med tiden siden seneste gennemgang. Grænsen er `DATA_MAX_TIMER` i `site/index.html`. Samtidig åbner jobbet Vagt for smittekørslen i `.github/workflows/udrul.yml` et issue i repoet, som GitHub sender til ejeren, og lukker det igen, når en kørsel har sat tiden.

Siden er offentlig, men holdt ude af søgemaskiner, mens datasættet er en prototype. Det styres af linjen `<meta name="robots" content="noindex">` i `site/index.html`. Slet linjen, når siden skal kunne findes. Adresserne på pages.dev holdes altid ude med `X-Robots-Tag` i `site/_headers`, så der kun er én udgave i søgemaskinerne.
