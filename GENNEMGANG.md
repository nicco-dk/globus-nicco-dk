# Til gennemgang

Det, kun ejeren må rette eller afgøre. Kørslerne tilføjer nye punkter nederst under den rette overskrift og nævner dem i dagens post i LOG.md under Til gennemgang. Et punkt fjernes, når ejeren har rettet eller afvist det. Kørslerne retter ikke selv i de punkter, der står her.

Hvert punkt begynder med den hændelse eller fil, det handler om, og slutter med, hvad der skal afgøres.

Alle punkter fra 13. oktober er afgjort af ejeren i svararket samme aften og fjernet. 19 punkter mere er afgjort på to beslutningssider 20. oktober og fjernet. Afgørelserne står i LOG.md. 22 punkter er afgjort på beslutningssiden Gennemgang globus november 16. november og fjernet. De to punkter om Yemen er ført ind samme dag. Punktet om Argentina er afgjort, men står til sundhedsministeriets bulletin er læst.

## Mediesporet

- `PL-RU` (20. november, kl. 17.20): afvist, fordi et russisk krydsermissil (Kh-101), et formodet missil mere og en drone krænkede polsk luftrum og styrtede ned i det sydøstlige Polen under et russisk angreb på Ukraine, uden skader og uden kampe mellem landenes styrker. Polens regering kalder det en provokation, og NATO sendte fly på vingerne. Læst: https://www.bbc.co.uk/news/articles/cqx2x9dklxnro og https://www.aljazeera.com/video/newsfeed/2026/11/20/poland-hit-by-at-least-one-russian-missile-says-polish-govt Afgør, om et missil, der rammer polsk territorium uden at ramme polske styrker, skal tælle som angreb mellem landene.

- `tools/par-tjek.json` (20. november, kl. 17.20): `DJ-YE` står to gange under `afvist`, med datoen 2026-10-13 (ejerens afgørelse) og 2026-10-12. Ved læsning gælder den sidste, og kørslen har derfor sat ny dato og grund på den. Afgør, hvilken af de to linjer der skal fjernes.

- `SY>SA` (21. november, kl. 05.20): godkendt som militær støtte, fordi Al Jazeera https://www.aljazeera.com/features/2026/11/9/syria-confirms-sending-troops-to-saudi-arabia-amid-battle-against-houthis og The Jerusalem Post http://www.jpost.com/middle-east/article-914267 beskriver, at Syrien har sendt militære rådgivere, trænere og soldater til Saudi-Arabien, og en syrisk embedsmand over for SANA bekræfter, at soldater er sendt til træning og rådgivning. Syrien afviser at sende tropper til Yemen. Begge artikler bygger på AP, Reuters og SANA. Afgør, om rådgivere og trænere tæller som levering af tropper, eller om parret skal flyttes til afvist.


## Datasættet: gamle punkter og tekster

- Hantavirus i Argentina (12. november): bør udbruddet have sin egen hændelse? NaTHNaC skriver 12. november, at Argentina har meldt 64 bekræftede tilfælde af hantavirus i 2026 pr. 31. oktober, over det årlige antal i 2022 til 2025: https://travelhealthpro.org.uk/rss-outbreaks.php Argentinas sundhedsministeriums egen opgørelse (Boletín Epidemiológico Nacional) er ikke læst i kørslen, og en søgning gav argentinske medier med andre tal (fx 102 og 112 tilfælde), der ser ud til at gælde sæsonen og ikke kalenderåret. Kørslen har ikke oprettet en hændelse, fordi myndighedens egen opgørelse ikke er fundet, og tallene ikke kan stemmes af. Afgør: egen hændelse `hanta-ar` (trinnet `udbrud`, når ministeriets bulletin er læst), eller ingen ændring.

- `hanta-ar` (16. november, kl. 17.20): hændelsen er oprettet efter afgørelsen, med 64 tilfælde fra Boletín Epidemiológico Nacional nr. 833 (uge 43). Bulletinens tabel siger ikke selv, om alle tilfælde er bekræftede, og prikken står midt i landet. Afgør: punktet ovenfor om hantavirus i Argentina kan fjernes.

- `difteri-ma` (17. november, kl. 05.20): le360 skrev 30. oktober efter samme udtalelse fra sundhedsministeriet som Hespress, at der er 30 bekræftede tilfælde og tre dødsfald i Marokko: https://fr.le360.ma/societe/diphterie-30-cas-confirmes-et-3-deces-recenses-le-ministere-de-la-sante-assure-que-la-situation-est_W2GCPFYZEBHPPBQ6B6KNU542VA/ Hændelsens `gap` siger, at antallet af døde efter de 2 i september ikke er oplyst. Kørslen har ikke ændret hændelsen, fordi oplysningen er fra 30. oktober, og ministeriets egen opgørelse ikke er fundet. Afgør: skal dødstallet 3 med i `extra` og `gap` med le360, medie, som kilde, eller ingen ændring.

- `maesling-us` (18. november, kl. 05.20): `naeste` siger: "USA risikerer sin eliminationsstatus, hvis smitten fortsætter ind i 2027." PAHO meldte 17. november, at USA har mistet status som fri for endemiske mæslinger: https://www.paho.org/en/news/17-11-2026-measles-americas-questions-and-answers-technical-reference-journalists-and-public Kørslen har tilføjet et punkt i forløbet, men retter ikke `naeste`, fordi trinnet ikke har flyttet sig. Afgør: ny tekst i `naeste`, eller ingen ændring.

- `maesling-bd` (18. november, kl. 05.20): DGHS' meddelelse 17. november https://dghs.gov.bd/pages/press-releases/6afc7df1862c6f28f3ce925b har 25.628 bekræftede tilfælde i alt på første side og 25.528 i divisionstabellen. 25.442 pr. 16. november og 86 nye giver 25.528. Kørslen har ikke skrevet et samlet tal for bekræftede i `cases`. Afgør: skal `cases` bruge divisionstabellens 25.528, eller vente til DGHS' næste meddelelse.


- `maesling-bd` (18. november, kl. 17.20): DGHS' meddelelse 18. november https://dghs.gov.bd/pages/press-releases/6afdc22634f2d6299b678990 har 25.786 bekræftede tilfælde i alt både på første side og i divisionstabellen. 25.528 pr. 17. november og 258 nye giver 25.786. Kørslen har skrevet 25.786 i `cases`. Afgør: punktet ovenfor om 25.628 og 25.528 kan fjernes.

- PAHO's alarm om vilde svampe (18. november, kl. 17.20): PAHO udsendte 17. november en epidemiologisk alarm om indsamling og spisning af vilde svampe i Amerika https://www.paho.org/sites/default/files/2026/11/2026-nov-17-phe-epi-alert-wild-mushroomsen.pdf Den er forebyggende og nævner tidligere forgiftninger, fx 39 mistænkte amatoksinforgiftninger og 4 dødsfald i Californien fra november 2025 til marts 2026, men intet aktuelt udbrud. Kørslen har ikke oprettet en hændelse, fordi reglen om forgiftninger kræver en alarm om tilfælde hos mennesker. Afgør: skal den med, eller ej.

- `dengue-asien` (20. november, kl. 05.20): `naeste` siger: "Følger monsunen. Sri Lanka toppede i september." WHO SEARO nummer 23 har 5.536 tilfælde i Sri Lanka i oktober https://cdn.who.int/media/docs/default-source/searo/whe/wherepib/2026_23_searo_epi_bulletin.pdf mod 5.230 i hele september efter National Dengue Control Unit, og uge 45 lå 6 procent over uge 44. Kørslen retter ikke `naeste`, fordi trinnet ikke har flyttet sig. Afgør: ny tekst i `naeste`, eller ingen ændring.

- `h5n1-gx` (23. november, kl. 05.20): ny hændelse efter WHO WPRO nummer 1071 https://cdn.who.int/media/docs/default-source/wpro---documents/emergency/surveillance/avian-influenza/ai_20261120.pdf om A(H5N1) hos en mand bosat i Quang Ninh i Vietnam, fundet ved grænsekontrollen i Dongxing i Guangxi. WPRO lister tilfældet under Kina, prøven ved grænsen var positiv i Kina, og senere prøver i Vietnam var negative. Kørslen har sat prikken og landet til Kina (Dongxing) og skrevet de negative prøver i `gap`. Afgør: skal hændelsen stå i Kina eller Vietnam, og skal den med, når de senere prøver var negative.

- `polio-sy` (24. november, kl. 05.20): WHO DON 628 https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON628 dokumenterer smitte fra person til person, og kørslen har flyttet trinnet til `smitte`. DON'en skriver, at international spredning af polio fortsat er en international sundhedskrise (PHEIC siden 5. maj 2014), og at de midlertidige anbefalinger gælder Syrien. `polio` har `alvor` 4 af den grund, `polio-sy` har intet `alvor`. Kørslen har ikke sat feltet. Afgør: `alvor` 4 på `polio-sy`, eller ingen ændring.

- `mpox` (25. november, kl. 17.20): PAHO's alarm 24. november https://www.paho.org/sites/default/files/2026/11/24-nov-2026-epi-alert-mpox.pdf skriver, at Brasilien har 43 klade Ib-tilfælde i Rio de Janeiro, og at epidemiologien ser ud til at skifte fra rejserelaterede tilfælde til samfundssmitte. Colombia (23 tilfælde) og Canada (34 klade I) har tegn på samfundssmitte. Kørslen har skrevet det som et punkt i `mpox` og ikke oprettet en hændelse, fordi PAHO kalder smitten tilsyneladende og under undersøgelse. Afgør: egen hændelse `mpox-br` (og evt. Colombia), eller ingen ændring.

- Lassafeber i Nigeria (27. november, kl. 05.20): NaTHNaC https://travelhealthpro.org.uk/rss-outbreaks.php skriver 26. november, at Nigeria har 1.226 bekræftede tilfælde, 9.264 mistænkte, 6 sandsynlige og 278 dødsfald i 26 delstater i 2026 pr. 15. november, flere end i samme periode i 2025. Lassafeber har sæson i Nigeria hvert år, og NCDC's egen situationsrapport er ikke læst. Kørslen har ikke oprettet en hændelse efter reglen om den almindelige sæson for kendte sygdomme. Afgør: skal lassafeber i Nigeria med, og i givet fald efter NCDC's situationsrapport.

- `mpox-pk` (28. november, kl. 05.20): Dawn skrev 31. oktober https://www.dawn.com/news/2041078/three-year-old-child-tests-positive-for-mpox-in-sindh , at et treårigt barn testede positiv i Karachi 30. oktober, og at Sindh har 115 tilfælde og 12 dødsfald i 2026, uden at nævne kilden til tallene. Hændelsen har 98 tilfælde og 12 dødsfald efter sundhedsministeriet gengivet af The Express Tribune pr. 29. oktober, og intet nyere er fundet. Kørslen har ikke skrevet tallet. Afgør: skal Dawns tal med som punkt mærket `, medie`, og skal `live` sættes til `false`, når en måned uden nyt er gået 29. november.

## Repoet og driften

Ingen åbne punkter.

- Udrulningen (23. november, kl. 17.20): repoet er tilgængeligt for kørslen som mikkelnicco/globus-nicco-dk, men GitHubs API svarer for det navn kun med en henvisning til repoets nummer, som kørslens adgang ikke tillader, og nicco-dk/globus-nicco-dk er ikke givet til kørslen. Kørslen kan derfor skubbe til main, men ikke læse Actions-kørslerne, og følger i stedet udrulningen ved at se, om DATA_TID er ændret på https://globus.nicco.dk. Afgør: giv den planlagte opgave adgang til nicco-dk/globus-nicco-dk, så trin 10 kan gennemføres som beskrevet.

- Kildehentning (25. november, kl. 05.20): Statens Serum Instituts liste https://www.ssi.dk/sygdomme-beredskab-og-forskning/sygdomsudbrud, DK-VET's nyheder https://dkvet.dk/nyheder og Sri Lankas forside https://www.dengue.health.gov.lk gav ingen tekst ved direkte opslag med curl, og hentningsværktøjet var ikke tilgængeligt for den planlagte kørsel, fordi forespørgslen om tilladelse ikke blev besvaret. Kravet om to veje i Sådan hentes kilderne kunne derfor ikke opfyldes for de tre sider. Afgør: giv den planlagte opgave adgang til hentningsværktøjet uden godkendelse, eller anvis en anden vej til siderne.


- Kildehentning (26. november, kl. 17.20): insp.cd's situationsrapporter om ebola hedder nu fx `SitRep_N194_24-11-2026_corrige_VF.pdf`. Opslaget i Sådan hentes kilderne (`https://insp.cd/wp-json/wp/v2/media?search=SitRep_MVEBDB&per_page=5`) finder derfor kun de gamle filer op til nummer 168, og kørslerne har siden skrevet, at nummer 168 pr. 29. oktober var nyeste. Søgningen `https://insp.cd/wp-json/wp/v2/media?search=SitRep&per_page=8&_fields=date,source_url` fandt nummer 188 til 194. Afgør: ret adressen i OPDATERING.md.

## Datacentre

Ingen åbne punkter.
