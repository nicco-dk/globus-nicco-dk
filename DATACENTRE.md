# Ugentlig gennemgang af datacentrene

Denne fil er arbejdsbeskrivelsen for den planlagte kørsel der holder datacentrene på https://globus.nicco.dk ajour. Den læses af den der udfører kørslen, hver gang. Følg den som den står. Hvor den ikke dækker en situation, så vælg det forsigtige: lad data stå, og skriv tvivlen i loggen.

Kørslen er fase 3 i planen for datacentrene (`claude/globus-datacentre.md` i projektet, afgørelsen DC-07). Ejeren valgte 16. november 2026 Opus 5.5 som model (B2-01) og to smittekørsler i døgnet så der er plads til denne (B2-02).

## Prøve

**Indtil ejeren har godkendt den første kørsel, retter kørslen ikke `tools/datacentre.json`.** Den skriver i stedet hvert forslag som et punkt i `GENNEMGANG.md` under Datacentre, med anlæggets id, feltet, den nye værdi og kilden, og den skriver sit underafsnit i loggen. Globus-chatten fjerner dette afsnit når ejeren har godkendt. Står afsnittet her, gælder det.

## Hvornår

Søndag kl. 13.40 dansk tid. Smittekørslen kører kl. 05.20 og 17.20 og har sin egen arbejdsbeskrivelse i `OPDATERING.md`. Datacentrene rører ikke `EVENTS`, `DATA_DATO` eller `DATA_TID`.

**Ingen overlap.** Hent `main` først. Er der et commit inden for de sidste 15 minutter, og er dens udrulning ikke færdig, så vent til den er.

## Hvad der må ændres

Kun disse fire steder:

1. `anlaeg` i `tools/datacentre.json`: nye anlæg og rettelser af eksisterende, hver med kilde.
2. `epoch_steder` i `tools/datacentre.json`: koordinater til et nyt anlæg hos Epoch AI når kørslen advarer om at det mangler. Slå adressen op i OpenStreetMap Nominatim og skriv `praecision` og `opslag`.
3. `LOG.md`: et underafsnit i dagens post, fx `### Kl. 13.40, datacentre`.
4. `GENNEMGANG.md`: nye punkter nederst under Datacentre.

Alt andet står urørt. Ser noget forkert ud, så skriv det i loggen og i GENNEMGANG.md.

## Reglerne

Felterne og formatet står i afsnittet Datacentre i `OPDATERING.md` og gælder her. Desuden:

- **Kun med kilde.** Hvert felt der ændres skal stå i `felter` hos en kilde med `navn`, `titel`, `url` og `dato`. Et felt uden kilde er `null`.
- **Kilderne i denne rækkefølge:** selskabets egen meddelelse, myndighederne (kommuneplaner, VVM, byggetilladelser, miljøgodkendelser, elnettets tilslutning), Epoch AI og til sidst fagmedier og nyhedsmedier. Et medie er et spor til primærkilden og aldrig den eneste kilde for et tal. Bruges et medie, står det med `(fagpresse)` eller `(medie)` efter navnet.
- **Status** er `drift`, `opfoerelse`, `godkendt` eller `planlagt`. `status_dato` er datoen for den kilde der sidst bekræftede status. Et skift kræver en kilde der siger det direkte.
- **Effekt** er IT-effekt i MW. Et skøn får `skoen: true` og kildens navn. Er det kun den samlede effekt der er oplyst, så skriv det i `noter` og lad IT-effekten stå tom.
- **Brugere** står kun med en kilde og med `sikkerhed` `sikker` eller `sandsynlig`.
- **Aflyst eller standset:** slet ikke posten. Skriv et punkt i GENNEMGANG.md med kilden. Ejeren afgør om anlægget tages af kortet.
- **Udløb (DC-08):** et anlæg med `planlagt` eller `godkendt` uden ny kilde i 12 måneder vises som "ikke bekræftet siden". Mangler der mindre end en måned, så nævn det i loggen.
- **Ikke med:** kommercielle registre (Data Center Map, Baxtel, Cloudscene, DC Byte), hemmelige eller militære anlæg og aflyste projekter.
- **Højst 10 nye anlæg pr. kørsel.** Er der flere, så tag de største og skriv resten i loggen.

## Fremgangsmåde

1. **Hent repoet på ny:** `git fetch origin` og `git checkout -B main origin/main`. Kontrollér med `git log -1 origin/main` at du står på det seneste commit. Læs denne fil, afsnittet Datacentre i `OPDATERING.md`, det seneste datacenterafsnit i `LOG.md` og afsnittet Datacentre i `GENNEMGANG.md`.
2. **De kuraterede anlæg.** Søg for hvert anlæg med `planlagt`, `godkendt` eller `opfoerelse` efter nyt siden `status_dato`. Tag de danske først og derefter USA, Kina, EU, Storbritannien, Indien og Golfen. Anlæg i drift tjekkes én gang om måneden, den første søndag i måneden.
3. **Nye anlæg.** Søg efter annonceringer, godkendelser og aflysninger fra den forløbne uge: anlæg på mindst 100 MW i hele verden og alle i Danmark. Findes anlægget hos Epoch AI, sætter den kuraterede post `erstatter` til Epochs navn.
4. **Kontrollér** før commit: `node -e "JSON.parse(require('fs').readFileSync('tools/datacentre.json','utf8'))"` og `node tools/hent-datacentre.mjs /tmp/datacentre.json`. Ingen af de kuraterede anlæg må blive sprunget over med en advarsel. Fejler Epochs hentning, er det ikke en fejl i kørslen.
5. **Loggen.** Underafsnittet har Gennemgået (kilder og søgninger), Ændret, Nye, Usikkert og Til gennemgang som i smittekørslen. Er intet ændret, er underafsnittet én linje med "intet nyt" og en linje med det der er gennemgået.
6. **Commit og send** direkte til `main`. Følg udrulningen til den er grøn med `gh api "repos/nicco-dk/globus-nicco-dk/actions/runs?per_page=1"`. Fejler den, så ret årsagen eller fortryd dit commit med et nyt commit.

## Rapporten

Afslut med en kort rapport: hvilke anlæg der blev gennemgået, hvad der blev ændret og på hvilken kilde, hvilke nye anlæg der kom til, hvad der var usikkert, hvad der kom til i GENNEMGANG.md, og om udrulningen blev grøn.
