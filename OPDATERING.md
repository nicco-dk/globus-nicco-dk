# Opdatering af datasættet

Denne fil er arbejdsbeskrivelsen for den kørsel, der holder Udbrudsglobus ajour. Den læses af den, der udfører kørslen, hver gang. Følg den, som den står. Hvor den ikke dækker en situation, så vælg det forsigtige: lad data stå, og skriv i loggen, hvad der var uklart.

## Hvad kørslen er til

https://globus.nicco.dk viser aktuelle udbrud af smitsom sygdom på en klode. Siden er offentlig. Folk kan læse et tal her og handle på det, og der er ingen, der ser en ændring igennem, før den går live. Derfor er reglen for alt i denne fil den samme: **der står kun det på siden, som en navngiven kilde har offentliggjort, og kilden står ved siden af.** Et manglende tal er i orden. Et forkert tal er ikke.

Kørslen gør tre ting: bringer de eksisterende hændelser ajour, tilføjer nye hændelser som myndighederne har meldt ud, og skriver ned, hvad den gjorde.

## Hvad der må ændres

Kun disse fem steder:

1. Konstanterne `DATA_DATO` og `DATA_TID` i `site/index.html`.
2. Listen `EVENTS` i `site/index.html`.
3. `LOG.md`, hvor kørslen skriver sit underafsnit i dagens post (se Loggen).
4. `tools/par-tjek.json`, når par fra mediesporet skal godkendes eller afvises (se Mediesporet nedenfor).
5. `GENNEMGANG.md`, hvor nye punkter til ejerens gennemgang tilføjes nederst under den rette overskrift. Eksisterende punkter rettes og fjernes kun af ejeren.

Alt andet står urørt: resten af `site/index.html` (markup, CSS, kortgeometri, kode, `DATA_STATUS`), de øvrige filer i `site/`, `tools/`, workflowet og denne fil. Ser noget andet forkert ud, så skriv det i loggen og i den afsluttende rapport i stedet for at rette det.

### Maskinmeldinger (de syv andre retninger)

Krig og konflikt, hedebølger og klimaekstremer, jordskælv, oversvømmelser, storme, naturbrande og vulkaner kommer ikke fra denne kørsel. De hentes af workflowet `udrul.yml` hver time (startet kl. xx.23 af Cloudflare Workeren i `worker/`, fordi GitHubs egen tidsplan ikke går i gang) med `tools/hent-feeds.mjs` til `site/feeds.json`, som ikke ligger i repoet. Scriptet bruger ingen AI og skriver kun kildens egne felter.

| Retning | Kilde | Hvad tages med | Alvor |
| --- | --- | --- | --- |
| Rejsevejledninger | Udenrigsministeriets rejsevejledninger, hver 6. time | Lande med mindst gul. Regioner, der nævnes ved navn, matches mod Natural Earth (tools/regionsnavne.json), hovedstaden undtaget | Gul 2, orange 3, rød 4 |
| Rejsevejledninger, lande uden dansk vejledning | Det britiske udenrigsministerium (FCDO) via GOV.UK's API, hver 6. time | Lande med "fraråder" | Alle rejser 4, alle ikke-nødvendige 3 |
| Jordskælv | USGS, seneste 7 døgn | Fra M5,5 eller med PAGER-varsel | PAGER grøn 1, gul 2, orange 3, rød 4. Uden varsel 1 |
| Storme, oversvømmelser, brande, tørke, vulkaner | GDACS | Igangværende hændelser, for storme også banen | Grøn 1, orange 3, rød 4 |
| Hede, kulde, brandfare, oversvømmelse, vind i Europa | Meteoalarm | Gyldige varsler, ét punkt pr. land og retning | Gul 2, orange 3, rød 4 |

**Krig og konflikt (markører og varmekort).** `tools/hent-medier.mjs` placerer GDELT-hændelser på et halvgradsnet: kampe (kode 19x, 20x og bombeangreb 183) med mindst én væbnet part (militær, oprørere, opstandsgruppe, separatister) og demonstrationer (kode 14), kun på by- eller regionsniveau, og kun omtaler fra medierne på listen. Datolinjebyer som Washington, London og Bruxelles tæller ikke. Hvert land får alvor efter omtalen af kampe de sidste 7 dage: 20 omtaler 2, 100 omtaler 3, 400 omtaler 4. Siden giver højst alvor 2, hvis landet hverken har rejsevejledning fra orange og op eller en bekræftet konflikt, og mindst 3 ved en bekræftet konflikt. Hvert felt med mindst 8 omtaler af kampe (højst 8 pr. land) eller 15 omtaler af demonstrationer (højst 3 pr. land) bliver en prik for sig. For hvert felt gemmes GDELT's stednavn, medierne, op til fire artikler (én pr. medie), parternes type og de lande, der er nævnt som part mindst to gange. Feltets alvor: 40 omtaler 2, 150 omtaler 3, under landets loft; demonstrationer altid 1. Felter uden for kortet (fx Gaza) får landet efter navnet eller den nærmeste hovedstad inden for 1,5 grad.

**Flygtninge (lilla prikkede streger).** UNHCR's åbne API, én gang i døgnet: for lande med niveau 3 eller 4 de højst 10 lande, der huser flest flygtninge og asylansøgere fra landet (mindst 10.000), efter seneste opgørelse.

**Landeside, følg og RSS.** Vælger man et land, samler siden rejsevejledning, krig og konflikt, militær støtte, nødhjælp, flygtninge, smitteudbrud og varsler. Man kan følge et land (gemmes kun i browseren), og https://globus.nicco.dk/feed?land=XX giver RSS for landet (functions/feed.js).

**Forbindelser.** Grønne streger for humanitær hjælp kommer fra OCHA Financial Tracking Service én gang i døgnet: for lande med niveau 3 eller 4 tages alle donorlande og EU med mindst 1 mio. USD i indeværende år, udbetalt eller forpligtet (ikke løfter). Røde streger (konflikt) og gule (militær støtte) er ikke bygget endnu. Se projektets opgave om konfliktdata.

### Mediesporet (røde og gule streger)

`tools/hent-medier.mjs` kører i workflowet hver time. Det læser GDELT 2.0 (hændelser og omtaler, hvert kvarter), finder hændelser mellem to lande af typen kamp, angreb eller massevold (rød) og militær hjælp (gul) og tæller, hvilke medier fra `tools/medier.json` der har skrevet om dem. Derudover læses overskrifter fra store medier, som GDELT dækker dårligt, blandt andre Reuters, AP, CNN, The New York Times, The Wall Street Journal og The Washington Post (listen står i `tools/overskrifter.json`). En overskrift tæller for et par, når den nævner to eller tre lande (ordene står i `tools/ord.json`) og et ord for kamp eller angreb. Overskrifterne tæller kun til røde streger. Resultatet står i `site/konflikter.json`, som kan læses på https://globus.nicco.dk/konflikter.json.

| Status | Regel | Vises |
| --- | --- | --- |
| Mistanke | Mindst 2 medier fra listen inden for 7 dage (30 for militær støtte) | Stiplet, kun når et af landene er valgt |
| Venter på tjek | Mindst 5 medier fra listen, fra mindst 3 lande uden for parterne, på mindst 3 forskellige dage | Som mistanke |
| Bekræftet af medier | Som ovenfor, og parret står under `godkendt` i `tools/par-tjek.json` | Fast streg. Militær støtte kun, når et af landene er valgt |
| Afvist | Parret står under `afvist` | Vises ikke |

**Tjek af par (den daglige kørsel).** Hent https://globus.nicco.dk/konflikter.json og tag alle streger med status `afventer`, mest omtalte først, højst 10 pr. kørsel. For hvert par:

1. Søg efter parret (landenes navne og ordet for kamp eller angreb, fx "Ethiopia Eritrea fighting") og læs mindst to artikler fra forskellige medier. Brug gerne artiklerne i stregens `art`.
2. **Godkend**, når mindst to medier inden for vinduet beskriver væbnede angreb eller kampe mellem de to landes styrker, eller mellem et land og den myndighed, der kontrollerer det andet land eller en del af det (fx Houthi-bevægelsen i Yemen). Ved militær støtte: når mindst to medier beskriver levering af våben, tropper eller militært udstyr fra det ene land til det andet.
3. **Afvis**, når artiklerne handler om noget andet: diplomatisk strid, handelskrig, sanktioner, sport, retssager, demonstrationer, historiske årsdage, eller når landet kun er nævnt, fx fordi en borger fra landet er involveret.
4. Skriv parret i `tools/par-tjek.json` med nøglen fra stregens id uden `gdelt-` (fx `ER-ET` eller `KP>RU`):
   - godkendt: `{"dato": "ÅÅÅÅ-MM-DD", "note": "én sætning på dansk om, hvad der sker", "kilder": [["Medie", "url"], ["Medie", "url"]]}`
   - afvist: `{"dato": "ÅÅÅÅ-MM-DD", "grund": "én sætning"}`
5. Et godkendt par, hvor konflikten er slut ifølge to medier (fx fredsaftale), flyttes til afvist med grunden.
   Et afvist par udløber 30 dage efter sin dato og kommer igen som afventer, hvis tærsklen nås. Afvises det på ny, sættes en ny dato. Kun direkte kampe eller angreb mellem parternes styrker tæller: en erklæret krig uden rapporterede angreb, en blokade mod tredjelandes skibe eller et angreb på civile, hvor ophavet ikke er uafhængigt bekræftet, afvises (ejerens afgørelse 13. oktober 2026).
6. Skriv i loggen under en overskrift **Mediesporet**, hvilke par der blev godkendt og afvist, med kilderne.

Medielisten `tools/medier.json` rettes ikke af den daglige kørsel. Forslag til medier, der mangler, skrives under Til gennemgang.

Smittekørslen rører hverken `feeds.json`, `tools/hent-feeds.mjs` eller `tools/lande.json`. Ser en maskinmelding forkert ud, skrives det under Til gennemgang.

### Datacentre (laget med servere)

Laget Datacentre kommer ikke fra denne kørsel og rører ikke `EVENTS`. Det er en service ved siden af rejsevejledningerne, slået fra, når siden åbner, og det tæller ikke med i alvor, søljen eller beskeder. Planen og skabelonen står i `claude/globus-datacentre.md` i projektet.

- **Kørslen:** `tools/hent-datacentre.mjs` kører i `udrul.yml` ved hver udrulning og skriver `site/datacentre.json`, som ikke ligger i repoet. Det henter `data_centers.csv` og `data_center_timelines.csv` fra Epoch AI's Frontier Data Centers (CC BY 4.0) og fletter dem med den kuraterede liste `tools/datacentre.json`. Fejler Epoch, genbruges Epochs anlæg fra den udgave, der er live. Scriptet bruger ingen AI.
- **Status fra Epoch:** det seneste punkt i tidslinjen på eller før i dag afgør. IT-effekt over 0 giver `drift`. Punkter i fortiden uden effekt giver `opfoerelse`. Kun punkter i fremtiden giver `planlagt`. Den planlagte effekt er den største IT-effekt efter i dag med Epochs dato. Epochs effekt, kapitalomkostning, vand og chips vises som skøn med Epochs navn.
- **Koordinater til Epochs anlæg** står i `epoch_steder` i `tools/datacentre.json`, slået op én gang i OpenStreetMap Nominatim med Epochs adresse eller byen fra Epochs kilder. Et nyt anlæg hos Epoch uden koordinater springes over med en advarsel i kørslen, til det har fået sine koordinater.
- **Den kuraterede liste** (`anlaeg` i `tools/datacentre.json`) ændres kun med en kilde, ligesom `EVENTS`. Hver post har `id`, `navn`, `status` (`drift`, `opfoerelse`, `godkendt` eller `planlagt`), `status_dato`, `lat` og `lon` med `koordinat_kilde`, og `kilder` med `navn`, `url`, `dato` og `felter`. Hvert tal skal stå i `felter` hos mindst én kilde. Et felt uden kilde er `null` og vises som "ikke oplyst". Brugere står kun med en kilde og med `sikkerhed` `sikker` eller `sandsynlig`. Et skøn får `skoen: true`.
- **Dobbeltanlæg:** findes et kurateret anlæg også hos Epoch, sætter den kuraterede post `erstatter` til Epochs navn. Kørslen advarer, når to anlæg med samme ejer ligger under 2 km fra hinanden uden `erstatter`.
- **Udløb:** et anlæg med `planlagt` eller `godkendt` uden ny kilde i 12 måneder vises som "ikke bekræftet siden" med datoen.
- **Ikke med:** kommercielle registre (Data Center Map, Baxtel, Cloudscene, DC Byte), hemmelige eller militære anlæg og aflyste projekter.

## Kilder

Brug dem i denne rækkefølge.

**Myndigheder og internationale organer.** WHO (Disease Outbreak News, situationsrapporter, regionskontorerne AFRO, EMRO, EURO, PAHO, SEARO, WPRO), ECDC (den ugentlige Communicable Disease Threats Report og sygdomssiderne), US CDC, Africa CDC, UKHSA, GPEI, Statens Serum Institut, RIVM, RKI og andre nationale sundhedsmyndigheder. Disse kan stå alene.

**Sekundære faglige kilder.** Fagtidsskrifter og faglige nyhedstjenester som CIDRAP. Kildens navn får tilføjelsen `, sekundær` eller `, medie`.

**Nyhedsmedier.** Kun når myndighederne tier om en hændelse, der allerede er på siden, eller når en ny hændelse endnu ikke er bekræftet. Kildens navn får tilføjelsen `, medie`, hændelsen får trinnet `mistanke` medmindre en myndighed siger andet, og feltet `gap` beskriver, hvad der ikke er bekræftet.

Siden viser kilder med `, medie` eller `, sekundær` som ikke myndighedsbekræftede. Tilføjelsen er derfor ikke pynt. Glem den ikke, og sæt den ikke på en myndighed.

Brug ikke Wikipedia, sociale medier, fora eller sider, der genfortæller andres tal uden at henvise til dem.

### Sådan hentes kilderne

Erfaringer fra tidligere kørsler. Virker en adresse eller en metode ikke længere, eller finder en kørsel en bedre vej, så skriv det under Til gennemgang i loggen, så afsnittet kan rettes. Kørslen retter ikke selv i denne fil.

- **WHO DON.** Oversigten på https://www.who.int/emergencies/disease-outbreak-news viser ingen poster, når den hentes maskinelt. Brug WHO's dataudtræk i stedet. De seneste 15 med nummer og dato: `https://www.who.int/api/news/diseaseoutbreaknews?sf_culture=en&$orderby=PublicationDateAndTime%20desc&$top=15&$select=Title,PublicationDateAndTime,ItemDefaultUrl,DonId`. Hele teksten i én DON: `https://www.who.int/api/news/diseaseoutbreaknews?sf_culture=en&$filter=DonId%20eq%20'2026-DON619'`. Adressen, der sættes som kilde, er læserens side: `https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON619`.
- **ECDC.** Ugerapporterne står på https://www.ecdc.europa.eu/en/publications-and-data/monitoring/weekly-threats-reports og udkommer om fredagen. Ebolasiden https://www.ecdc.europa.eu/en/ebola-outbreak-democratic-republic-congo-and-uganda opdateres hver hverdag og har tal pr. provins.
- **UKHSA.** Ugeoversigten over udbrud under overvågning står på https://www.gov.uk/government/publications/outbreaks-under-monitoring-in-2026, opdateres om torsdagen og kan hentes med hentningsværktøjet. Den samler signaler fra nationale myndigheder, også dem ECDC og WHO ikke nævner, og henviser til den oprindelige kilde. Sæt den oprindelige myndighed som kilde på hændelsen, når den kan hentes, og UKHSA ved siden af.
- **Robert Koch Institut.** Epidemiologisches Bulletin ligger som PDF på rki.de og kan hentes direkte.
- **To veje til en side.** Hentningsværktøjet og et direkte opslag fra skallen med `curl -sL` rammer ikke de samme spærringer. Helt nye WHO-sider har fejlet i hentningsværktøjet, men kunne hentes direkte. US CDC afviser direkte opslag med 403, men kan læses med hentningsværktøjet. Fejler den ene vej, skal den anden prøves, før kilden opgives eller erstattes af et medie. Det er et krav, ikke et råd. Skriv i loggen under Usikkert, hvilke sider der ikke kunne hentes ad nogen af de to veje.
- **Læs tal to gange.** Hentningsværktøjet genfortæller siden, det citerer den ikke. Bed om den ordrette sætning med tallet, og læs den to gange uafhængigt af hinanden, eller hent sidens rå tekst direkte og find tallet dér, før det skrives.
- **Myndigheder gennem medier.** Kan myndighedens egen side ikke hentes, som hos Kenyas sundhedsministerium, så brug mediet, der gengiver udmeldingen, med tilføjelsen `, medie`. Kenyas sundhedsministeriums pressemeddelelser udsendes af APO Group og kan læses på https://www.africa-newsroom.com. Kilden mærkes stadig `, medie`, fordi det ikke er ministeriets egen side. Gengiver to medier forskellige tal fra samme udmelding, så lad tallet stå og skriv det under Usikkert.
- **Kildescriptet.** Kør `node tools/hent-kilder.mjs` først. Det henter WHO DON, DGHS' mæslinger og dengue, Sri Lankas dagstal, WHO SEARO's bulletin, WHO WPRO's fugleinfluenzaoversigt, ECDC's ugerapport, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser og skriver adressen og kildens egne linjer med tallene. `node tools/hent-kilder.mjs dghs lk` henter kun de nævnte. Scriptet regner intet ud. Læs tallet i kilden selv, før det skrives, og sæt den adresse, scriptet viser, som kilde.
- **DGHS i Bangladesh** lægger dagens mæslingetal som PDF-bilag på en anden server. Bilagets adresse står i pressemeddelelsens HTML og begynder med `https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/`. PDF'en har et tekstlag og kan læses med `pdftotext -layout`. Læs tallene to gange: som tekst og som billede af siden (`pdftoppm -png`). Meddelelsen var ikke ude kl. 11.20 dansk tid 13. oktober, men kort efter kl. 12. Kl. 17-kørslen tager derfor dagens mæslingetal. Serveren afbryder af og til forbindelsen, så prøv igen, før kilden opgives. Dengue står på dashboardet https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php med dato øverst.
- **Sri Lanka, National Dengue Control Unit.** Dagstallet er en PDF, hvis filnavn skifter (fx `Daily-Update-2026.-10.-12-1.pdf`). Tag adressen fra forsiden https://www.dengue.health.gov.lk og gæt den ikke. Scriptets opslag mod siden fejlede 14. og 17. oktober, mens hentningsværktøjet kunne læse den. Fejler delen `lk`, så læs forsiden og PDF'en med hentningsværktøjet, før kilden opgives (ejerens afgørelse 20. oktober).
- **WHO SEARO** udgiver sin epidemiologiske bulletin hver anden onsdag med fast adresseform: https://cdn.who.int/media/docs/default-source/searo/whe/wherepib/2026_20_searo_epi_bulletin.pdf med årstal og udgavens nummer.
- **WHO WPRO** udgiver sin oversigt over fugleinfluenza om fredagen med datoen i adressen: https://cdn.who.int/media/docs/default-source/wpro---documents/emergency/surveillance/avian-influenza/ai_20261002.pdf En udgave kan mangle en uge.
- **WHO EMRO** har ingen løbende bulletin. Weekly Epidemiological Monitor er ikke udkommet siden 2020. Brug nyhederne på https://www.emro.who.int/media/news/
- **DR Congos situationsrapport** om ebola ligger på https://insp.cd med fast adresseform, fx https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_149_10_10_2026.pdf med nummer og dato, og udkommer en til to dage efter rapportdatoen. De nyeste PDF'er med dato står i insp.cd's medieliste: https://insp.cd/wp-json/wp/v2/media?search=SitRep_MVEBDB&per_page=5 Brug den i stedet for at gætte nummer og dato.
- **Andre faste veje.** Floridas ugerapport om dengue er en PDF på https://www.floridahealth.gov om torsdagen. Hongkongs pressemeddelelser står på https://www.info.gov.hk/gia/general/ med en side pr. dag. Kenyas sundhedsministeriums meddelelser hos APO Group står samlet på https://africa-newsroom.com/press/source/ministry-of-health-kenya
- **Hentningsværktøjet** tager kun adresser, som en søgning i samme kørsel har givet. Søg derfor først med `allowed_domains`, fx `cdc.gov`, og hent den adresse, søgningen giver.
- **Hurtige faste veje.** CIDRAP: `https://www.cidrap.umn.edu/all-news?page=N`. Outbreak News Today: `https://outbreaknewstoday.substack.com/api/v1/archive?sort=new&limit=25`. NaTHNaC: `https://travelhealthpro.org.uk/rss-outbreaks.php`. UKHSA: `https://www.gov.uk/api/search.json?filter_organisations=uk-health-security-agency&order=-public_timestamp`.
- **Faste udgivelser.** UKHSA's ugeoversigt kommer torsdag, ECDC's ugerapport fredag, GPEI's poliooversigt og US CDC's mæslingetal én gang om ugen. Mellem udgivelserne er der intet nyt at hente dér, og hændelsen lades urørt.

## Vagtplan

Kørslen startes fire gange i døgnet, kl. 00.20, 05.20, 11.20 og 17.20 dansk tid. Læs timen med `TZ=Europe/Copenhagen date +%H`, og følg rækken for den time. De andre retninger (jordskælv, storme, oversvømmelser, brande, hede, vulkaner, rejsevejledninger og mediesporets optælling) hentes automatisk hver time af workflowet og hører ikke til kørslen. Rækken siger, hvor kørslen lægger sin tid. Alt i Fremgangsmåde gælder stadig, og en alvorlig ny hændelse et andet sted tages med uanset rækken.

| Kl. | Fokus |
| --- | --- |
| 00 | Smitte i Europa og Danmark: ECDC, Statens Serum Institut, DK-VET, UKHSA, RIVM og RKI. Kvalitet: koordinater, gamle punkter og GENNEMGANG.md. Tre hændelser fra kontrollens advarsel om tal i `cases` uden opgørelsesdato får kilde og dato, når kilden kan findes. |
| 05 | Bred gennemgang: alle samlede kilder i trin 2, rundturen (trin 3a) og tjek af par i mediesporet. |
| 11 | Smitte i Asien og Mellemøsten: WHO SEARO, WHO WPRO, WHO EMRO, Bangladeshs denguedashboard, Sri Lankas dagstal og Hongkongs pressemeddelelser. WHO DON siden forrige kørsel. Bangladeshs mæslingetal for dagen er normalt ikke ude endnu. |
| 17 | Smitte i Afrika og Amerika: WHO AFRO, Africa CDC, PAHO og US CDC. Bangladeshs mæslingetal for dagen (DGHS). WHO DON siden forrige kørsel. Tjek af par i mediesporet. |

**Ingen overlap.** Hent `main` først. Er der et commit fra en anden kørsel inden for de sidste 15 minutter, og er dens udrulning ikke færdig, så vent, til den er, eller spring kørslen over og skriv det i rapporten.

**Hver kørsel sætter tiden.** Hver kørsel sætter `DATA_DATO` og `DATA_TID`, skriver sit underafsnit i dagens post og committer, også når intet er ændret. Er intet ændret, er underafsnittet én linje, fx `### Kl. 17.20, Afrika og Amerika: intet nyt` efterfulgt af en linje med de kilder, der er gennemgået. Siden advarer, når `DATA_TID` er over 9 timer gammel, og workflowet åbner da et issue til ejeren. En kørsel, der ikke sætter tiden, ligner derfor en kørsel, der ikke er gennemført.

## Fremgangsmåde

Arbejd i denne rækkefølge. Den er valgt, så de fleste hændelser kan afgøres ud fra tre samlede kilder, og kun de hændelser, der faktisk har rørt sig, kræver egne opslag.

1. **Hent repoet på ny:** `git fetch origin` og `git checkout -B main origin/main`. En klon kan stå på et gammelt commit, og `main` kan være skrevet om. Kontrollér med `git log -1 origin/main`, at det seneste commit er det forventede, før noget ændres. Læs derefter `EVENTS`, de seneste poster i `LOG.md` og `GENNEMGANG.md`, så du ved, hvad der står, og hvad forrige kørsel var i tvivl om.
2. **Kør kildescriptet** (`node tools/hent-kilder.mjs`, se Sådan hentes kilderne), og **læs de samlede kilder:** ECDC's seneste Communicable Disease Threats Report, WHO's liste over Disease Outbreak News siden forrige kørsel og UKHSA's seneste ugeoversigt over udbrud under overvågning. Læs desuden:
   - WHO AFRO's ugentlige bulletin over udbrud og nødsituationer (iris.who.int)
   - PAHO's seneste epidemiologiske opdateringer og situationsrapporter
   - WHO SEARO's epidemiologiske bulletin og WHO WPRO's ugentlige oversigt over fugleinfluenza
   - Africa CDC's ugentlige rapport
   - Statens Serum Instituts liste over aktuelle sygdomsudbrud (https://www.ssi.dk/sygdomme-beredskab-og-forskning/sygdomsudbrud) og DK-VET's nyheder (https://dkvet.dk/nyheder)

   Notér hvilke hændelser på siden de nævner, og hvilke nye hændelser de melder.
3. **Bring nævnte hændelser ajour.** Slå kun enkeltkilder op for de hændelser, de samlede kilder nævner, og for hændelser med `live:true` og trin `spredning` eller `smitte`, hvor der er grund til at tro, at tallene har flyttet sig. En hændelse uden nyt lades urørt. Det er det normale udfald for de fleste hændelser på en given dag.
3a. **Rundtur.** Hver hændelse med `live:true`, der ikke har fået et nyt punkt i 10 dage, slås op i sin egen hovedkilde, også selv om ingen samlet kilde nævner den. Er der intet nyt, lades den urørt, og det skrives i loggen under Urørt med antal dage siden seneste punkt.
4. **Tilføj nye hændelser**, højst fem pr. kørsel. Er der flere, så tag de alvorligste og nævn resten i loggen.
5. **Sæt `DATA_DATO`** til dags dato i dansk tid, også når ingen hændelser er ændret, og **`DATA_TID`** til tidspunktet, gennemgangen blev afsluttet, med tidszone: `TZ=Europe/Copenhagen date +%Y-%m-%dT%H:%M%:z` (fx `2026-10-12T11:40+02:00`). Siden viser det som "Gennemgået for 2 timer siden". Kontrollen afviser et tidspunkt i fremtiden eller på en anden dag end `DATA_DATO`.
6. **Kør kontrollen:** `node tools/tjek-data.mjs site/index.html --forrige <forrige udgave> --links`, hvor forrige udgave hentes med `git show HEAD:site/index.html`. Ret alle fejl. Kan en fejl ikke rettes, så fortryd ændringen i den hændelse. Læs også advarslerne, se afsnittet Kontrollens advarsler.
7. **Skriv underafsnittet i `LOG.md`** og nye punkter til ejeren i `GENNEMGANG.md`.
8. **Commit og send til `main`** med beskeden `Data: <dato> · <kort opsummering>`.
9. **Følg udrulningen** under Actions, til den er grøn. Fejler den, så ret årsagen eller fortryd dit commit med et nyt commit. Efterlad ikke `main` med en fejlet kørsel.
10. **Afslut med en kort rapport:** hvad der blev ændret, hvad der blev ladt urørt og hvorfor, hvad der var usikkert, og hvad der venter på ejerens gennemgang.

Kan de samlede kilder ikke hentes, så prøv enkeltkilderne for de alvorligste hændelser. Kan ingen kilder hentes, så ændr ingen data, sæt ikke `DATA_DATO`, og skriv i loggen, at kørslen ikke kunne gennemføres.

## Regler for ændringer

**Tal.** Et tal står altid sammen med, hvem der har opgjort det, og pr. hvilken dato: `8.665 bekræftede tilfælde og 4.178 dødsfald, US CDC pr. 5. oktober`. Skriv tallet, som kilden skriver det. Regn ikke selv et tal ud, læg ikke tal fra to kilder sammen, og rund ikke af. Er to myndigheder uenige, så brug den nyeste opgørelse i `cases` og forklar forskellen i `extra`.

Én undtagelse: når en myndighed har skrevet et samlet tal og senere kun skriver de to dele, som det samlede tal bestod af, i samme tabel, må delene lægges sammen i talserien `pts`, så grafen fortsætter. `cases` og forløbet skriver delene, som kilden gør, og `extra` siger, at grafen er summen. Det gælder i dag DGHS' dødstal i `maesling-bd`: dødsfald blandt mistænkte plus dødsfald blandt bekræftede tilfælde, som DGHS selv lagde sammen til og med 9. oktober.

**Kilder følger tallene.** Hvert nyt punkt i `tl` bærer sin egen kilde i fjerde felt, så en læser kan se, hvor netop den oplysning kommer fra. Kontrollen afviser et nyt punkt uden kilde. `src` er hændelsens aktuelle hovedkilder: når et tal eller en oplysning i `cases`, `extra` eller `note` ændres, skal kilden også stå dér. Kontrollér, at adressen faktisk fører til det, du henviser til.

**Rapportserier i `src`.** Er kilden en løbende serie, som WHO's DON eller ECDC's ugerapport, erstattes den forældede adresse i `src` med den nye, men kun når de punkter i forløbet, der bygger på den gamle udgave, selv bærer den gamle adresse. Har et sådant punkt ingen kilde, så sæt den gamle adresse på punktet, før den fjernes fra `src`. Det ændrer ikke punktets dato eller tekst og er tilladt. Kan du ikke se, hvilket punkt den gamle adresse hører til, så lad den stå i `src`.

**Forløb.** En ny udvikling bliver et nyt punkt i `tl` med dato, en sætning om, hvad der skete, og kilden.

**Gamle punkter rettes ikke af kørslen.** Dato og tekst i et punkt, der stod i forrige udgave, og gamle punkter i `pts`, står, som de stod, også når en kilde har rettet sit eget tal. Skriv i stedet under Til gennemgang i loggen: hændelsen, det gamle tal, det nye tal og kilden. Ejeren retter. Den nye oplysning må gerne stå som et nyt punkt med dags dato, når den er væsentlig: "US CDC har opjusteret tallet for 2025 til 2.289". Kontrollen advarer, hvis et gammelt punkt er ændret eller fjernet.

**Trin.** Trinnet flyttes kun, når en kilde dokumenterer det, der definerer det nye trin. Flytningen sker ved, at det nye punkt i `tl` får trinnet i sit tredje felt, og at `stage` sættes til det samme. De to skal altid stemme overens.

| Trin | Betyder | Kræver |
| --- | --- | --- |
| `mistanke` | Ubekræftet signal | En melding, hvor diagnosen ikke er fastslået |
| `udbrud` | Bekræftet udbrud | Laboratoriebekræftet tilfælde |
| `smitte` | Smitte mellem mennesker | Dokumenteret videregivelse fra person til person |
| `spredning` | Geografisk spredning | Smitte i flere led og i nye områder |
| `variant` | Ny variant eller resistens | Dokumenteret ændret smitsomhed eller svigtende behandling |
| `reservoir` | Naturligt reservoir | Smittestof påvist hos dyr, ingen humane tilfælde |

**Alvor.** Siden viser alvor på en skala fra 1 til 5, som størrelse og ringe på prikken, og man kan filtrere på den. Alvor er den skala, læseren ser først i kortet. Trinnet står under som forklaring. Uden feltet `alvor` følger alvor trinnet: 1 for `reservoir`, 2 for alle andre. Alvor 5 (akut) står aldrig i datasættet. Siden giver det selv til alvor 4 med en udvikling inden for tre dage. En `mistanke` har sin egen status og intet alvorstal: siden viser "Mistanke, ikke bekræftet", og læseren vælger selv under Mistanker, om de vises. Bekræftes den, skifter trinnet til `udbrud` eller højere og får alvor efter reglerne. Afkræftes den, sættes `live` til `false` med et punkt i forløbet og kilde. Sæt kun `alvor` på en mistanke, når en kilde selv vurderer risikoen, fx WHO. Feltet sættes kun, når en kilde begrunder et højere trin:

| Alvor | Navn | Smitteudbrud |
| --- | --- | --- |
| 3 | Alvorligt | WHO vurderer risikoen som høj for regionen eller landet |
| 4 | Kritisk | WHO har erklæret en international sundhedskrise, der omfatter hændelsen |

Ændres `alvor`, skal grunden stå i et punkt i forløbet med kilde. Erklærer WHO krisen afsluttet eller sænker risikoen, fjernes feltet eller sættes ned. Kan alvor ikke begrundes med en kilde, sættes feltet ikke.

**Afsluttede hændelser slettes ikke.** Når en myndighed erklærer et udbrud for afsluttet, tilføjes et punkt i `tl` om det, og `live` sættes til `false`. Hændelsen bliver stående, så tidslinjen stadig kan vise den. Kontrollen afviser en udgave, hvor en hændelse er forsvundet. Et importeret ebolatilfælde uden sekundære tilfælde lukkes 42 dage efter den negative test, som er WHO's regel for, hvornår et ebolaudbrud er slut (ejerens afgørelse 20. oktober om `ebola-nl`, der lukkes 21. november).

**`live`** betyder, at hændelsen udvikler sig nu. Sæt den til `false`, når der ikke har været nyt fra kilderne i en måned, eller når udbruddet er erklæret afsluttet.

**Forgiftninger med forbindelse til Danmark.** Forgiftninger og lignende hændelser uden smitte tages med, når de har forbindelse til Danmark, fx botulisme efter behandling med botulinumtoksin (`botulisme-dk`, ejerens afgørelse 20. oktober). De står under smitteudbrud med trinnet `udbrud`, når tilfældene er bekræftet, og `pathogen` og `note` siger, at det ikke er smitte. Hændelser uden smitte uden for Danmark skrives under Til gennemgang, så ejeren afgør dem enkeltvis.

**Usikkerhed** skrives i `gap`, som siden viser under overskriften Usikkert. Brug feltet, når noget væsentligt ikke er bekræftet. Fjern det, når det er afklaret.

**`naeste`** er en vurdering af, hvad der ville flytte trinnet, og siden mærker den som ikke kildebelagt. Ret den kun, når trinnet har flyttet sig, så teksten ikke længere passer.

**Alder er ingen afvisningsgrund.** En hændelse, der er i gang, og som en myndighed har meldt, kan tages med, selv om meldingen er ældre end forrige kørsel. "Ikke nyt siden forrige kørsel" er ikke en grund til at lade den være. Det afgørende er, om udbruddet er i gang, og om det hører til på siden.

**Nye hændelser** kræver en myndighedskilde, eller en mediekilde med trin `mistanke` og et udfyldt `gap`. Tag hændelser med, som en læser ville forvente at finde på en side om udbrud: nye eller usædvanlige udbrud, udbrud med smitte mellem mennesker, og udbrud i eller med forbindelse til Danmark og Europa. Tag ikke den almindelige sæson for kendte sygdomme med, medmindre en myndighed kalder den usædvanlig.

**Sprog.** Dansk, nøgternt og i samme tone som de eksisterende tekster. Ingen tankestreger: brug komma, punktum eller kolon. Sygdomme og steder skrives, som de eksisterende hændelser skriver dem.

## Felter

Datasættet er JavaScript, ikke JSON. Strenge står i enkelte anførselstegn, så en apostrof i en tekst skal skrives `\'`, ellers kan siden ikke læses.

| Felt | Indhold |
| --- | --- |
| `id` | Kort, entydigt navn med små bogstaver og bindestreger, fx `ebola-drc`. Ændres aldrig |
| `place`, `country`, `region` | Sted, land og verdensdel. Regionerne er Afrika, Amerika, Asien, Europa og Mellemøsten. Verdensdelen følger stedet, ikke landet: Irkutsk i Rusland er Asien |
| `lat`, `lon` | Hændelsens placering på kloden, breddegrad først |
| `disease`, `pathogen` | Sygdom og smittestof |
| `stage` | Trinnet, se tabellen ovenfor |
| `live` | `true`, mens hændelsen udvikler sig |
| `alvor` | Valgfri. Et helt tal fra 1 til 4, se Alvor. Udelades, når alvor følger trinnet |
| `cases` | Omfanget i én linje: tal, kilde og opgørelsesdato |
| `extra` | Uddybning af tallene |
| `note` | Hvad hændelsen er, og hvorfor den er med |
| `gap` | Hvad der er usikkert. Udelades, når intet væsentligt er usikkert |
| `nodes` | Steder i hændelsen: `[navn, lon, lat, dato]`. **Her står længdegrad før breddegrad**, omvendt af `lat` og `lon` ovenfor |
| `links` | Forbindelser mellem steder: `[fra, til, dato, type]`, hvor fra og til er numre i `nodes` talt fra 0. Typerne er `eksport`, `rute`, `udbredelse` og `respons`. Tegn kun en forbindelse, når en kilde dokumenterer retningen |
| `rel` | `id` på hændelser, der hører sammen med denne |
| `naeste` | Hvad der ville flytte trinnet |
| `plabel`, `pts` | Talserie til grafen: en overskrift og punkter `[dato, tilfælde, dødsfald eller null]` i datoorden |
| `tl` | Forløbet: `[dato, tekst, trin eller '', [navn, adresse]]` i datoorden. Første punkt bærer hændelsens første trin. Fjerde felt er punktets kilde og kræves på nye punkter. Ældre punkter kan mangle det |
| `src` | Hændelsens hovedkilder: `[navn, adresse]`. Adressen skal begynde med `https://` |

Datoer skrives `ÅÅÅÅ-MM-DD`. Kendes kun måneden, skrives `ÅÅÅÅ-MM`. Ingen dato må ligge efter `DATA_DATO`.

Kontrollen kan ikke se, om længdegrad og breddegrad er byttet om, når begge tal er under 90. Slå koordinater op, og tjek dem mod et sted i samme land, der allerede står i datasættet.

## Kontrollens advarsler

En fejl standser udrulningen. En advarsel gør ikke, men den skal læses og besvares sådan:

- **En kildeadresse svarer ikke.** Åbn den ad den anden vej, se Sådan hentes kilderne. Fører ingen vej til siden, så brug ikke adressen. Et 403 fra en myndighed, du lige har læst gennem hentningsværktøjet, er i orden og nævnes i loggen.
- **`cases` har tal uden opgørelsesdato.** Mange ældre hændelser mangler kilde og dato i `cases`. Ret det i de hændelser, kørslen alligevel opdaterer tallet i. Opfind ikke en dato til et tal, du ikke selv har læst i kilden.
- **`live:true` uden nyt punkt i over 30 dage.** Søg efter nyt om hændelsen. Er kilderne tavse, sættes `live` til `false`, som reglen om `live` siger, og det skrives i loggen.
- **Et gammelt punkt er ændret eller fjernet.** Fortryd ændringen, og skriv den under Til gennemgang i stedet.

## Loggen

Loggen er offentlig. Den vises på https://globus.nicco.dk/log, som siden linker til fra foden, og den bygges af `LOG.md` ved hver udrulning. Skriv den, så en læser udefra kan følge, hvad der blev ændret og hvorfor. Ingen HTML i loggen, og adresser skrives fuldt ud med `https://`.

`LOG.md` får én post pr. døgn med overskriften `## <dato>` øverst. Hver kørsel tilføjer et underafsnit i dagens post med klokkeslættet, fx `### Kl. 11.20, Asien og Mellemøsten`, under de tidligere kørslers underafsnit. Findes dagens post ikke, oprettes den. En kørsel uden ændringer skriver én linje (se Vagtplan). Formatet for indholdet i et underafsnit med ændringer:

```
## 9. oktober 2026

### Kl. 05.20, bred gennemgang: intet nyt
ECDC CDTR uge 40, WHO DON siden 8. oktober, UKHSA's ugeoversigt uge 40.

### Kl. 11.20, Asien og Mellemøsten

**Gennemgået:** ECDC CDTR uge 41, WHO DON siden 8. oktober, UKHSA's ugeoversigt uge 40.

**Ændret**
- `ebola-drc`: tal opdateret til 8.702 bekræftede og 4.195 døde, US CDC pr. 8. oktober. Nyt punkt i forløbet.

**Nye**
- Ingen.

**Urørt**
- 33 hændelser uden nyt i kilderne.

**Usikkert**
- `pest-irkutsk`: WHO har ikke fået svar fra Rusland. Ingen ændring.

**Til gennemgang**
- Nyt i GENNEMGANG.md: `maesling-us`: US CDC skriver nu 2.289 tilfælde for hele 2025. Punktet 31. december 2025 har 2.255. Ikke rettet.
```

Skriv konkret, hvad der blev ændret, og hvilken kilde det bygger på. Posten er det eneste sted, et menneske kan se, hvad kørslen gjorde og hvorfor.

Til gennemgang er det, kun ejeren må rette: gamle punkter, hvor en kilde har rettet sig selv, og alt uden for `DATA_DATO`, `EVENTS` og loggen, der ser forkert ud. Den samlede liste står i `GENNEMGANG.md`. Kørslen tilføjer nye punkter dér og nævner kun de nye i sit underafsnit. Er der intet nyt, skrives `- Intet nyt.` Gentag ikke listen i loggen.

**Læs mere (artikler i detaljekortet).** `tools/hent-laes.mjs` kører efter mediesporet. Først matches overskrifterne fra de 17 store medier, som mediesporet lige har læst (Reuters, AP, BBC, DR m.fl.): en overskrift passer, når den nævner søgeordet og hændelsens land. Mangler der artikler, søges i GDELT DOC 2.0 efter artikler om smitteudbruddene, maskinmeldinger fra alvor 3 og steder med mindst 40 omtaler af kampe. To søgninger pr. hændelse: engelsksprogede medier (sidste 7 eller 14 dage, kun overskrifter, der nævner søgeordet) og danske medier. Kendte internationale medier (Reuters, AP, BBC, The Guardian m.fl.) foretrækkes. Højst 12 søgninger pr. kørsel med 6,5 sekunder imellem, som GDELT beder om. En hændelse søges igen efter et døgn. Resultatet ligger i `site/laes.json` og bruges kun som henvisning til videre læsning.

**Billeder i detaljekortet.** Siden henter selv billedet fra Wikipedia-artiklen om emnet og bruger det kun, hvis det ligger på Wikimedia Commons (fri licens). Fotograf og licens står under billedet sammen med, at det ikke viser selve hændelsen.

**Udløseren.** GitHubs tidsplan i `udrul.yml` er ikke gået i gang. I stedet starter Cloudflare Workeren `globus-udloeser` (`worker/udloeser.js`) workflowet hver time kl. xx.23 gennem GitHubs API. Den bruger et fine-grained GitHub-token med kun Actions: Read and write på dette repo (repo-hemmeligheden `UDLOESER_TOKEN`, udløber 12. oktober 2027 og skal fornyes inden). Workeren udrulles med workflowet `udloeser.yml`, som startes manuelt. Kørsler startet af Workeren udrulles altid, også når meldingerne ikke er ændret.

**Delte links.** Del-knappen i kortet giver et link på formen https://globus.nicco.dk/h/<id>. Pages Functionen `functions/h/[id].js` svarer med titel, tekst og billede for netop det (til fx Facebook og Messenger) og sender en person videre til https://globus.nicco.dk/#<id>. Billedet er et frit billede fra Wikimedia Commons, fundet gennem den engelske Wikipedia-artikel om emnet, ellers `og.png`.

**Status pr. land.** https://globus.nicco.dk/status (`functions/status.js`) giver for hvert land rejsevejledningens niveau, levende smitteudbrud, varsler fra alvor 3, bekræftede konflikter og alvor for krig og konflikt. Den bygges af de samme filer som siden. EVENTS læses af `site/index.html` med JSON5 (`lib/json5.mjs`), uden at sidens script køres.

**Beskeder.** Man kan få push-beskeder om de lande, man følger. Tilmeldingen går gennem `functions/besked/[[sti]].js` til Cloudflare Workeren `globus-besked` (`worker-besked/`), som gemmer browserens push-adresse og landekoderne i en Durable Object og intet andet. Hver time kl. xx.47 henter Workeren /status, sammenligner med forrige time og sender én besked pr. person om den alvorligste ændring: nyt niveau i rejsevejledningen, et nyt smitteudbrud, et nyt varsel fra alvor 3, en bekræftet konflikt, eller at krig og konflikt er steget til alvor 3 eller mere. VAPID-nøglerne laves af Workeren selv og ligger i dens Durable Object. Workeren udrulles med workflowet `besked.yml`, som startes manuelt, og den skal findes, før siden udrulles, fordi `wrangler.toml` binder siden til den.

**Engelsk.** Knappen EN skifter siden til engelsk (valget huskes i browseren, ellers vælges efter browserens sprog). Knapper og overskrifter oversættes efter ordbogen i siden. Datatekster i kortene maskinoversættes af Cloudflare Workers AI (`functions/oversaet.js`, modellen m2m100) og mærkes som maskinoversat. Tal, navne på kilder og links oversættes ikke. Den daglige dataopdatering skriver fortsat kun dansk.

**`wrangler.toml` i roden** er Pages-projektets indstillinger: Workers AI (`AI`) og service bindingen til `globus-besked` (`BESKED`). Den læses af `wrangler pages deploy` i `udrul.yml`.

**Nyt på siden.** Knappen Nyt på siden læser `site/nyheder.json`. Når en ny funktion går live, tilføjes en post øverst med et nyt `id`, dato, titel og en kort forklaring i samme stil som Sådan virker siden. `proev` kan pege på en lille demonstration i siden (udforsk, bred, afspil, krig). Tallet på knappen er de poster, brugeren ikke har set. Første gang tæller kun poster fra de sidste 14 dage. Vinduet viser kun det, brugeren ikke har set. Alle poster (undtagen den om selve knappen) står samtidig under Det kan du på siden i Sådan virker siden, bygget af den samme fil. Den daglige dataopdatering ændrer ikke filen.
