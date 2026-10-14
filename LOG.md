# Log over opdateringer af datasættet

Én post pr. kørsel, nyeste øverst. Formatet står i `OPDATERING.md`.

## 14. oktober 2026

### Kl. 00.20, Europa og Danmark

**Gennemgået:** ECDC's ugerapport uge 41 (3. til 9. oktober, allerede indarbejdet, næste udkommer fredag) og ECDC's tilfældeliste for Krim-Congo hæmoragisk feber. Statens Serum Instituts liste over aktuelle sygdomsudbrud (senest redigeret 7. oktober) og siden om Salmonella Enteritidis. DK-VET's nyheder. RIVM's side om ebola på engelsk og nederlandsk. UKHSA's udgivelser (ugeoversigten over udbrud kommer torsdag). Kildescriptet: WHO DON (ingen nye efter DON 620), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Søgninger efter nyt fra ECDC og Robert Koch Institut.

**Ændret**
- `ebola-nl`: nyt punkt 10. oktober. RIVM melder, at patienten i Leiden er rask og tester negativ for ebolavirus, at isolationen er ophævet, og at patienten forlod hospitalet dagen før: https://www.rivm.nl/en/ebola/current-information Meldingen er læst på engelsk og nederlandsk (https://www.rivm.nl/ebola/actuele-informatie). `extra` siger det samme i stedet for, at tilstanden ikke var offentliggjort. `cases` har fået kilde og dato: RIVM pr. 10. oktober.
- `cchf-es`: `cases` har fået kilde og dato: 4 lokalt erhvervede tilfælde og 1 dødsfald, ECDC pr. 7. oktober. Ugerapport uge 41 skriver fire tilfælde i Spanien pr. 7. oktober og ingen nye på en uge: https://www.ecdc.europa.eu/sites/default/files/documents/communicable-disease-threats-report-week-41-2026.pdf ECDC's tilfældeliste har ét dødsfald i Salamanca: https://cchf-weekly.ecdc.europa.eu/case_summary.csv Uge 41 er sat i `src`. Uge 40 står der stadig, fordi punktet 30. september ikke selv bærer en kilde.
- `salmonella-dk`: `cases` har fået kilde og dato: Statens Serum Institut pr. 1. oktober, sidens seneste redigering: https://www.ssi.dk/sygdomme-beredskab-og-forskning/sygdomsudbrud/2026_salmonella-enteritidis-i-danmark Tallene er uændrede.

**Nye**
- Ingen. Statens Serum Instituts udbrud af Salmonella Typhimurium ST19 står stadig på listen, men er fortsat ikke taget med, som besluttet tidligere.

**Urørt**
- 36 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Europa op. Resten hører til de andre kørsler i vagtplanen.
- Rundtur i Europa: `cchf-es` 14 dage siden seneste punkt, ECDC melder ingen nye tilfælde. `h5n1-dk` 13 dage, intet nyt hos DK-VET. `salmonella-dk` 13 dage, SSI's side er ikke ændret siden 1. oktober. `cre-eu` 12 dage, ikke nævnt i ECDC's ugerapport uge 41.

**Usikkert**
- `ebola-nl`: RIVM erklærer ikke hændelsen afsluttet og nævner ikke sekundære tilfælde. `live` står derfor som `true`, se GENNEMGANG.md.
- `cchf-es`: ugerapporten nævner ikke dødsfaldet. Dødstallet er læst i ECDC's tilfældeliste, som ikke har dato. Tallet er det samme som pr. 30. september.
- Kontrollen advarer nu om 12 hændelser, hvor `cases` har tal uden opgørelsesdato.
- `main` var skrevet om siden klonen blev lavet (tvungen opdatering). Kørslen arbejder på det seneste commit 7b96680.

**Til gennemgang**
- Nyt i GENNEMGANG.md: `ebola-nl`, skal `live` sættes til `false`, nu da patienten er rask og udskrevet.

### Kl. 05.20, bred gennemgang

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON 620 fra 10. oktober), DGHS' mæslinger og dengue (allerede indarbejdet pr. 13. oktober), Sri Lankas dagstal (12. oktober, allerede indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1064, ECDC's ugerapport uge 41, UKHSA's udgivelser (ugeoversigten over udbrud kommer torsdag), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. ECDC's ebolaside (uændret, 8.978 bekræftede og 4.336 dødsfald pr. 10. oktober). DR Congos situationsrapporter 150 til 152 (findes ikke på den faste adresse). Statens Serum Instituts liste over aktuelle sygdomsudbrud og DK-VET's nyheder (intet nyt). Søgninger efter nyt fra WHO AFRO, Africa CDC og PAHO (intet nyt fundet).

**Ændret**
- `ebola-drc`: 9.066 bekræftede tilfælde og 4.381 dødsfald efter sundhedsministeriets rapport offentliggjort 13. oktober. Rapporten har 88 nye tilfælde, og 65 sundhedszoner i syv provinser er ramt. Gengivet af AP (https://abcnews.com/Health/wireStory/congos-confirmed-ebola-cases-exceed-9000-containment-efforts-137233349) og Al Jazeera (https://www.aljazeera.com/news/2026/10/13/dr-congo-ebola-cases-pass-9000-as-efforts-to-curb-transmission-falter), som har de samme tal. Nyt punkt i forløbet, `cases` og `extra` er opdateret, og de to artikler er sat i `src` med tilføjelsen `, medie`. Talserien er ikke opdateret, se Usikkert.
- `h5n1-us`: nyt punkt 8. oktober. Washingtons landbrugsministerium WSDA melder delstatens første fund af H5N1 i malkekvæg på to bedrifter i Yakima County, bekræftet af USDA's laboratorium NVSL. Bedrifterne er i karantæne, og malkekvæg i 19 stater er smittet siden marts 2024: https://agr.wa.gov/about-wsda/news-and-media-relations/news-releases?article=47359 Fundet er set hos CIDRAP 13. oktober. Yakima County er ny stedknude, og WSDA er sat i `src`.

**Nye**
- Ingen. NaTHNaC melder 2.065 bekræftede tilfælde af chikungunya i Fransk Guyana i 2026 pr. 8. oktober. Det er ikke taget med, fordi den oprindelige myndighed ikke er fundet, og ingen myndighed kalder det usædvanligt. Dengue på Marshalløerne er fortsat ikke taget med af samme grund.

**Urørt**
- 37 hændelser uden nyt i kilderne.
- Rundtur: `mpox` 30 dage siden seneste punkt, WHO's situationsrapport nummer 70 findes ikke på den faste adresse. `chik-am` 22 dage, intet nyt fra PAHO. `cchf-ir` 24 dage, `difteri-ng` 20 dage, `h5n1-kh` 16 dage og `anthrax-zm` 16 dage: søgt, intet nyt fra myndighederne. `h5n1-dk` 13 dage og `salmonella-dk` 13 dage: DK-VET og SSI uændret. `difteri-afro` 17 dage, `mpox-mo` 14 dage og `cre-eu` 12 dage er ikke slået op igen, fordi kørslerne kl. 17.20 og 00.20 slog dem op uden nyt. `altnv-cn` 16 dage har ingen løbende kilde.

**Usikkert**
- `ebola-drc`: sundhedsministeriets rapport er ikke fundet selv. Situationsrapporterne efter nummer 149 ligger ikke på den faste adresse, og Reuters' artikel kunne ikke hentes. Tallene er derfor gengivet af to medier, og opgørelsesdatoen kendes ikke, kun at rapporten blev offentliggjort 13. oktober. 9.066 er 88 flere end tallet pr. 10. oktober, så rapporten dækker formentlig 11. oktober, men det er ikke bekræftet. Tallet er derfor ikke sat i talserien.
- `mpox`: kontrollen advarer om en aktiv hændelse uden nyt punkt fra i morgen. WHO kalder det fortsat en graderet nødsituation i rapport 69, så `live` står.
- Kontrollen advarer fortsat om 12 hændelser, hvor `cases` har tal uden opgørelsesdato.

**Mediesporet**
- De ti mest omtalte par med status afventer er gennemgået.
- Godkendt: ingen.
- Afvist: `US-YE` (amerikaner dræbt i Houthi-angrebet på Riyadh, og medierne drøfter et muligt amerikansk svar, men beskriver ingen angreb: https://www.cbsnews.com/news/iran-war-houthis-saudi-arabia-trump-faces-difficult-dilemma/ og https://www.wsj.com/opinion/saudi-arabia-houthi-attacks-iran-donald-trump-mohammed-bin-salman-856a0c23), `IR-RU` (britiske advarsler om trusler og en dieselaftale: https://www.nytimes.com/2026/10/13/world/europe/mi5-uk-threat-iran-russia.html og https://www.theguardian.com/us-news/2026/oct/11/trump-russia-diesel-deal-putin-little-impact-prices), `EG-IL` (nødhjælp til Gaza og israelske angreb i Gaza: https://www.thenationalnews.com/news/uae/2026/10/13/uae-food-aid-reaches-gaza-through-ahmed-bin-rashid-humanitarian-bridge/ og https://www.thehindu.com/news/international/israel-strikes-gaza-on-october-7-anniversary-three-dead-officials/article71556404.ece), `PS-US` (amerikansk indenrigspolitik og kort over Gaza: https://www.aljazeera.com/news/2026/10/12/maps-show-how-israels-yellow-line-keeps-squeezing-palestinians-in-gaza og https://www.hindustantimes.com/world-news/us-news/mamdani-under-fire-for-dining-at-palestinian-restaurant-in-nyc-on-october-7-anniversary-making-quite-a-statement-101791451686487.html), `JP-KP` (missilprøver i havet: https://www.euronews.com/2026/10/12/north-korea-fires-several-ballistic-missiles-into-sea-of-japan-seouls-military-says og https://www.france24.com/en/asia-pacific/20261012-north-korea-ballistic-missiles-sea-japan-seoul), `GB-PS` (sanktioner og strid om konsulatet: https://aa.com.tr/en/europe/interview-uk-sanctions-on-israeli-settlements-welcome-but-not-far-enough-says-labour-lawmaker-john-mcdonnell/4085836 og https://www.aljazeera.com/news/2026/10/8/has-israel-shut-the-uk-consulate-in-east-jerusalem-or-downgraded), `DE-RU` (retssagen om Nord Stream: https://www.bbc.co.uk/news/articles/cw99zpmnxzmjo og https://www.dw.com/en/nord-stream-pipeline-sabotage-suspect-on-trial-germany-hamburg/a-79647617), `JP-US` (drabssag på Okinawa: https://www.cbsnews.com/news/okinawa-us-troops-off-duty-behavior-rules-japan-review-womans-killing/ og https://www.channelnewsasia.com/east-asia/japan-okinawa-alleged-murder-woman-us-marine-6449876) og `EG-YE` (egyptisk kabineansat dræbt i Houthi-angrebet på Riyadh: https://www.aljazeera.com/video/newsfeed/2026/10/13/funeral-for-egyptian-flight-attendant-killed-in-houthi-attack-on-riyadh og https://www.nbcnews.com/world/middle-east/iran-backed-houthis-claim-new-attacks-saudi-arabia-yemens-aden-airport-rcna602020).
- Ikke afgjort: `IL-SY`. FN's menneskerettighedskontor har registreret 280 væbnede israelske indtrængninger i det sydlige Syrien i september med razziaer, tilbageholdelser og ødelæggelse af afgrøder, og Tyrkiet beder Israel standse angrebene i Syrien: https://www.thenationalnews.com/news/mena/2026/10/10/israel-holding-49-syrians-after-280-armed-incursions-in-september-says-un/ og https://aa.com.tr/en/turkiye/turkiye-urges-israel-to-stop-reckless-attacks-in-syria/4086708 Artiklerne beskriver ikke kampe med syriske regeringsstyrker. Parret står som afventer, se GENNEMGANG.md.

**Til gennemgang**
- Nyt i GENNEMGANG.md: `IL-SY` i mediesporet.

### Kl. 07.45, siden og driften ændret af ejeren

Ingen gennemgang af kilder og ingen ændrede tal i datasættet.

**Ændret på siden**
- Den fælles fod for nicco.dk står nu nederst på forsiden, på fejlsiden og i ændringsloggen. Den viser, hvem der driver siden, kontaktadressen og et link til den fælles privatlivstekst på https://info.nicco.dk/privatliv/ Globus får ikke sin egen privatlivstekst, og udkastet er fjernet.

**Ændret i driften**
- Repoet er offentligt fra 14. oktober kl. 07.20.
- Kørslen hver time udruller kun, når varslerne eller konfliktstregerne er ændret. Vagten for smittekørslen er et trin i samme kørsel.

### Kl. 11.20, Asien og Mellemøsten

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON 620 fra 10. oktober), DGHS' mæslinger (meddelelsen for 14. oktober var ude) og dengue (dashboardet er opdateret 13. oktober og allerede indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1064, ECDC's ugerapport uge 41, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser 13. og 14. oktober. Sri Lankas National Dengue Control Unit (forsiden peger fortsat på opgørelsen pr. 12. oktober). WHO EMRO's nyheder. GPEI Polio This Week (stadig udgaven pr. 7. oktober). Søgninger efter nyt om fugleinfluenza i Cambodja, MERS i Saudi-Arabien og Nipah i Indien og Bangladesh.

**Ændret**
- `maesling-bd`: 208.570 mistænkte og 22.840 bekræftede tilfælde, 1.073 dødsfald blandt mistænkte og 104 blandt bekræftede tilfælde, DGHS pr. 14. oktober: https://dghs.gov.bd/pages/press-releases/6acf487a582bde01e1ae2529 Det seneste døgn 1.199 nye mistænkte tilfælde, 128 nye bekræftede og 7 dødsfald blandt mistænkte, heraf 5 i Dhaka-divisionen. 185.390 er indlagt siden 15. marts, og 177.698 er udskrevet. Nyt punkt i forløbet og i talserien (dødstal 1.177, de to rækker lagt sammen efter reglen), `cases` og `extra` er opdateret, og meddelelsen er sat i `src` i stedet for den fra 13. oktober, som punktet 13. oktober selv bærer. Tallene er læst to gange i PDF'en, som tekst og som billede, og stemmer med gårsdagens tal plus døgnets.

**Nye**
- `kolera-ye`: kolera i Yemen. WHO EMRO melder 13. oktober, at mistænkte tilfælde er tredoblet på tre uger, fra 217 i uge 36 til 647 i uge 39, samtidig med at kampene siden 6. august har fordrevet over 200.000 mennesker. 8.034 mistænkte tilfælde og 27 dødsfald i 2026, og 92 procent af tilfældene i Abyan, Lahj, Al-Dhale'e, Taiz og Aden. Udmeldingen nævner også mæslinger i Yemen og akut vandig diarré blandt flygtninge i Obock i Djibouti, som står i `extra`: https://www.emro.who.int/media/news/cholera-cases-surge-as-conflict-in-yemen-displaces-over-200-000-people.html

**Urørt**
- 38 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Asien og Mellemøsten op. Resten hører til de andre kørsler i vagtplanen.
- `dengue-bd` og `mpox-hk` er allerede ajour pr. 13. oktober. `dengue-asien`: Sri Lankas seneste opgørelse er fortsat pr. 12. oktober. `polio`: GPEI's ugeside er ikke opdateret efter 7. oktober. `h5n1-kh` 16 dage siden seneste punkt, intet nyt tilfælde fundet. WHO WPRO's oversigt fra 9. oktober findes heller ikke i dag på den sædvanlige adresse. `cchf-ir` 24 dage, `mers-sa` og `altnv-cn`: intet nyt fundet.

**Usikkert**
- `kolera-ye`: trinnet er sat til `spredning`, fordi WHO beskriver en kraftig stigning i smitten og spredning til lejre i Hadramout. Tilfældene er mistænkte, og udmeldingen nævner ikke laboratoriebekræftelse. WHO siger ikke, om årets tal dækker hele landet, eller hvilken dag de er opgjort til. Det står i `gap`. Ingen talserie, fordi ugetallene ikke er dateret i kilden.
- Hongkongs sundhedsmyndighed melder 14. oktober stigende lokal forekomst af hånd-, fod- og mundsygdom: https://www.info.gov.hk/gia/general/202610/14/P2026101400516.htm Ikke taget med, fordi det er en almindelig sæsonsygdom, og myndigheden ikke kalder den usædvanlig.
- Sri Lankas side kunne ikke hentes af kildescriptet (curl fejlede), men kunne læses gennem hentningsværktøjet.
- Kontrollen advarer fortsat om 12 hændelser, hvor `cases` har tal uden opgørelsesdato. Ingen af dem er opdateret i denne kørsel.

**Til gennemgang**
- Nyt i GENNEMGANG.md: kildescriptets hentning af Sri Lankas side fejler.

## 13. oktober 2026

### Kl. 11.20, Asien og Mellemøsten

**Gennemgået:** WHO DON siden 12. oktober (ingen nye efter DON 620 fra 10. oktober). Bangladeshs sundhedsmyndighed DGHS: mæslingemeddelelsen for 12. oktober og denguedashboardet. Sri Lankas National Dengue Control Unit. WHO SEARO's epidemiologiske bulletin nummer 20 fra 7. oktober. WHO WPRO's ugentlige oversigt over fugleinfluenza nummer 1064 fra 2. oktober. WHO EMRO's nyheder. Hongkongs pressemeddelelser 11., 12. og 13. oktober. NaTHNaC's udbrudsliste, CIDRAP og Outbreak News Today. Søgninger efter nyt om polio i Pakistan, fugleinfluenza i Cambodja, Krim-Congo hæmoragisk feber i Iran, MERS i Saudi-Arabien og Nipah i Indien og Bangladesh.

**Ændret**
- `maesling-bd`: 206.297 mistænkte og 22.573 bekræftede tilfælde, 1.060 dødsfald blandt mistænkte og 104 blandt bekræftede tilfælde, DGHS pr. 12. oktober: https://dghs.gov.bd/pages/press-releases/6accaf9ce0cf9948292ece3c Det seneste døgn 1.269 nye mistænkte tilfælde, 152 nye bekræftede og 2 dødsfald blandt mistænkte. 183.226 er indlagt siden 15. marts, og 175.655 er udskrevet. Nyt punkt i forløbet og i talserien, `cases` og `extra` er opdateret, og meddelelsen er sat i `src` i stedet for den fra 11. oktober, som punktet 11. oktober selv bærer. Tallene er læst to gange i meddelelsens PDF, først som tekst og derefter som billede.
- `dengue-asien`: Bangladesh har passeret 100.000 indlagte i 2026: 101.442 indlagte og 307 dødsfald pr. 12. oktober efter 2.167 nye indlagte og 4 dødsfald på et døgn, DGHS' dashboard: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php Sri Lanka 102.769 tilfælde og 79 dødsfald pr. 12. oktober, heraf 2.049 tilfælde i oktober og 21.700 i Gampaha, National Dengue Control Unit: https://www.dengue.health.gov.lk/wp-content/uploads/2026/10/Daily-Update-2026.-10.-12-1.pdf To nye punkter i forløbet og et i talserien for Sri Lanka. `cases` og tallet for Gampaha i `extra` er opdateret. I `src` er Sri Lankas opgørelse fra 6. oktober erstattet af den fra 12. oktober. Punktet 6. oktober bærer selv den gamle adresse.
- `pest-irkutsk`: nyt punkt 12. oktober. Hongkongs sundhedsmyndighed CHP indfører forebyggende tiltag i lufthavnen: temperaturmåling ved gaten for de relevante fly fra Rusland og opfordring til rejsende, der har været i Irkutsk oblast inden for 14 dage, om at oplyse det. Læger og hospitaler bedes indberette lungebetændelse af ukendt årsag hos patienter, der har været i området. CHP vurderer den umiddelbare betydning for folkesundheden i Hongkong som lav: https://www.info.gov.hk/gia/general/202610/12/P2026101200466.htm Hændelsen hører til Europa i vagtplanen, men meldingen kommer fra en myndighed i Asien. Tal, trin og øvrige felter er urørt.

**Nye**
- Ingen. WHO har ikke udgivet en ny DON efter DON 620. WHO SEARO's bulletin, WHO WPRO's oversigt, WHO EMRO's nyheder, NaTHNaC, CIDRAP og Outbreak News Today har ingen nye signaler i Asien og Mellemøsten, som ikke allerede er på siden.

**Urørt**
- 35 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Asien og Mellemøsten op. Resten hører til de andre kørsler i vagtplanen.

**Usikkert**
- `maesling-bd`: DGHS havde ikke lagt meddelelsen for 13. oktober ud, da kørslen sluttede kl. 11.19 dansk tid. Tallene er derfor pr. 12. oktober. DGHS opgør fortsat dødsfaldene i to rækker og skriver ikke selv et samlet tal, så det nye punkt i talserien har intet dødstal.
- `dengue-asien`: Sri Lankas opgørelse er mærket "As of 12.10.2026 midnight". Det fremgår ikke, om det er midnat ved døgnets begyndelse eller slutning. Punktet er dateret 12. oktober. DGHS' dashboard kalder Bangladeshs tal for tilfælde. Forløbet kalder dem fortsat indlagte, som de tidligere punkter gør. WHO SEARO's bulletin nummer 20 har 86.458 tilfælde og 262 dødsfald i Bangladesh pr. 5. oktober efter samme dashboard: https://cdn.who.int/media/docs/default-source/searo/whe/wherepib/2026_20_searo_epi_bulletin.pdf
- `mpox-hk`: Hongkongs pressemeddelelser 11., 12. og 13. oktober har intet om mpox.
- `polio`: intet nyt tilfælde i Pakistan fundet efter det sjette. GPEI's ugeside udkommer om onsdagen og er ikke slået op.
- `h5n1-kh`: intet nyt tilfælde fundet, 15 dage siden seneste punkt. WHO WPRO's oversigt nummer 1064 fra 2. oktober har endnu ikke det sjette tilfælde med og tæller fem tilfælde i Cambodja i 2026: https://cdn.who.int/media/docs/default-source/wpro---documents/emergency/surveillance/avian-influenza/ai_20261002.pdf Udgaven fra 9. oktober kunne ikke findes på den sædvanlige adresse.
- `cchf-ir`: intet nyt fundet, 23 dage siden seneste punkt. Kontrollen begynder at advare om en aktiv hændelse uden nyt fra 21. oktober.
- `altnv-cn`: ikke slået op. Hændelsen bygger på en tidsskriftsartikel og har ingen løbende kilde. 15 dage siden seneste punkt.
- WHO EMRO: nyhedssiden har intet om udbrud siden 8. oktober. Den ugentlige Weekly Epidemiological Monitor er ikke udkommet siden 2020.
- Kontrollen advarer fortsat om 17 hændelser, hvor `cases` har tal uden opgørelsesdato. Ingen af dem er opdateret i denne kørsel.

### Kl. 12.10, side, data og arbejdsgang ændret af ejeren

Ændringer efter en gennemgang af kørslen kl. 11.20.

**Ændret i datasættet**
- `dengue-bd`: ny hændelse. Bangladesh er flyttet ud af `dengue-asien`, så landet har sin egen kurve, sit eget forløb og kan følges som land. Talserien er indlagte i 2026 fra WHO SEARO's bulletin nummer 20 (86.458 tilfælde og 262 dødsfald pr. 5. oktober): https://cdn.who.int/media/docs/default-source/searo/whe/wherepib/2026_20_searo_epi_bulletin.pdf og DGHS' denguedashboard (101.442 indlagte og 307 dødsfald pr. 12. oktober): https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php De punkter fra `dengue-asien`, der havde kilde, er flyttet med. Tre punkter uden kilde er ikke, se GENNEMGANG.md.
- `dengue-asien`: omfatter nu Sri Lanka og Filippinerne. Bangladeshs punkter, stedknude og kilder er fjernet. Kontrollen advarer om de fjernede punkter. Det er tilsigtet.
- `maesling-bd`: DGHS' meddelelse for 13. oktober kom ud efter kørslen kl. 11.20 og er taget med: 207.371 mistænkte og 22.712 bekræftede tilfælde, 1.066 dødsfald blandt mistænkte og 104 blandt bekræftede tilfælde, DGHS pr. 13. oktober: https://dghs.gov.bd/pages/press-releases/6acdf12fba7fabe195e182a6 Det seneste døgn 1.074 nye mistænkte tilfælde, 139 nye bekræftede og 6 dødsfald blandt mistænkte. Tallene er læst i PDF'en som tekst og som billede. Grafens dødstal er nu de to rækker lagt sammen, som DGHS selv gjorde til og med 9. oktober: 1.162 pr. 11. oktober, 1.164 pr. 12. oktober og 1.170 pr. 13. oktober.
- `pest-irkutsk`: `region` er Asien i stedet for Europa, fordi Irkutsk ligger i Asien.

**Ændret på siden og i arbejdsgangen**
- Overskriftslinjen advarer nu, når gennemgangen er over 9 timer gammel, regnet efter `DATA_TID`. Før var grænsen 2 dage, hvilket passede til én kørsel i døgnet.
- Hver kørsel sætter nu `DATA_DATO` og `DATA_TID` og skriver en linje i loggen, også når intet er nyt. Så kan både siden og vagten se, at kørslen er gennemført.
- Vagt i workflowet: hver time tjekkes `DATA_TID`. Er den over 9 timer gammel, åbnes et issue i repoet, som GitHub sender til ejeren. Det lukkes igen, når en kørsel har sat `DATA_TID`.
- `tools/hent-kilder.mjs` henter de faste kilder (WHO DON, DGHS' mæslinger og dengue, Sri Lanka, WHO SEARO og WPRO, ECDC, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkong) og skriver kildens egen tekst og tal ud med adressen. Scriptet bruger ingen AI og regner intet ud. Kørslen læser tallene dér og kontrollerer dem i kilden.
- Logsiden viser kørslernes underafsnit som overskrifter.
- Listen Til gennemgang står nu i GENNEMGANG.md i repoet i stedet for at blive gentaget i hver post. Dagens post nævner kun nye punkter.
- OPDATERING.md: trin 1 henter `main` på ny, før der ændres noget. Nye faste veje til kilderne, Bangladeshs dagstal læses kl. 17 (kl. 11 er de endnu ikke ude), en regel for DGHS' dødstal, og kl. 00-kørslen giver tre hændelser ad gangen opgørelsesdato i `cases`.

**Til gennemgang**
- Nye punkter i GENNEMGANG.md: de tre punkter uden kilde, der ikke kom med til `dengue-bd`, forskellen mellem SEARO og det fjernede punkt 6. oktober, ændringen af `region` for `pest-irkutsk`, summen af dødstal i `maesling-bd`, grenen `udrulning-fra-repo` og de manglende kørsler 13. oktober.
- Punkterne fra listen 12. oktober står i GENNEMGANG.md. Fire er løst og ikke ført med: dødstallene i `maesling-bd`, de to om OPDATERING.md og veje til kilderne, og logsidens underoverskrifter.

### Kl. 13.00, regel for alvor og siden ændret af ejeren

Ingen gennemgang af kilder og ingen ændrede tal i datasættet.

**Ændret i reglerne**
- En mistanke får ikke længere alvor 5 af sig selv. Uden feltet `alvor` er en mistanke nu 2 som et bekræftet udbrud. Alvor 5 (akut) gives kun til alvor 4 med en udvikling inden for tre dage. `pest-irkutsk` står derfor som alvor 2 i stedet for 5. OPDATERING.md og `lib/data.mjs` er rettet til samme regel.

**Ændret på siden**
- Alvor står først i kortet og i listen. Trinnet står på linjen under som forklaring.
- Overskriftslinjen skelner mellem smitteudbrud og automatiske varsler, og listen viser fx "325 af 404", når noget er skjult.
- Knappen Nyt på siden har et nyt ikon og en blå mærkat, så den ikke ligner varsler. Velkomsten siger, hvor mange hændelser i hvor mange lande, og for sig, hvor mange der er akut og kritisk.
- På mobilen har retningernes ikoner et kort navn, søljen viser det alvorligste og et tal for resten, og pauseknappen står over Nulstil nederst til højre. Søljen står stille på computeren, når alt kan ses.
- Kortet viser fortælling og nøgletal før kortudsnittet, også på computeren. Smittestof står på sin egen linje.
- Navne på kloden skriver ikke længere oven i hinanden: stednavne i et udbrud, hovedstæder og regioner deler plads.

### Kl. 13.30, mistanker har egen status

Ingen gennemgang af kilder og ingen ændrede tal i datasættet.

- En mistanke har nu sin egen status og intet alvorstal. Siden viser "Mistanke · ikke bekræftet", og filteret Mistanker alene bestemmer, om de vises. Alvorsfilteret skjuler dem ikke længere.
- En mistanke tæller ikke med, når landets eller retningens højeste alvor regnes ud. Bekræftes den, skifter trinnet og får alvor efter reglerne. Afkræftes den, sættes `live` til `false` med et punkt i forløbet. OPDATERING.md beskriver det.
- Delte links til en mistanke siger "Mistanke om smitteudbrud, ikke bekræftet" i stedet for et alvorstal.

### Kl. 17.00, siden ændret af ejeren

Ingen gennemgang af kilder og ingen ændrede tal i datasættet.

- Overskriftslinjen står på én linje på computeren: hvornår smitteudbruddene sidst blev gennemgået, og hvornår varslerne sidst blev hentet.
- På computeren springer søljen det over, som listen allerede viser under Akut lige nu.
- Pauseknappen står nederst til højre over zoomknapperne, også på computeren.
- På engelsk er guiden, dialogerne og Nyt på siden oversat på forhånd (`site/en.json`), og kortets mærkat står i ental.
- Push-beskeden om en ny mistanke siger, at den ikke er bekræftet, i stedet for "alvor 1". `/status` har fået et fjerde felt til det.

### Kl. 17.20, Afrika og Amerika

**Gennemgået:** WHO DON siden forrige kørsel (ingen nye efter DON 620 fra 10. oktober). DR Congos situationsrapporter om ebola (nummer 150 og frem findes endnu ikke på den faste adresse) og ECDC's ebolaside (8.978 bekræftede og 4.336 dødsfald pr. 10. oktober, som allerede står på siden). WHO AFRO, Africa CDC's pressemeddelelser (seneste 6. oktober), PAHO's epidemiologiske advarsler og opdateringer (seneste 26. august), US CDC's mæslingetal (næste opdatering onsdag), Floridas ugerapport om dengue (uge 40 er ikke ude), Pennsylvanias sundhedsmyndighed. Bangladeshs sundhedsmyndighed DGHS: mæslingemeddelelsen for 13. oktober og denguedashboardet. Kildescriptet: ECDC uge 41, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. WHO's mpox-situationsrapport nummer 70 er søgt efter.

**Ændret**
- `ebola-ke`: nyt punkt 11. oktober. Sundhedsministeriet oplyser, at 122 kontakter er registreret og verificeret, og at 108 er i karantæne uden symptomer. Af 293 prøver fra 289 alarmer var kun det bekræftede tilfælde positivt, og 667.675 rejsende er screenet ved 26 grænseovergange. Gengivet af The Standard: https://www.standardmedia.co.ke/health-science/article/2001559920/kenya-puts-108-ebola-contacts-in-quarantine-as-surveillance-intensifies og Citizen Digital: https://citizen.digital/article/ebola-122-contacts-verified-108-in-quarantine-as-tracing-continues-n391840 De to medier har de samme tal. `extra` og `gap` er opdateret, og begge artikler er sat i `src`.
- `kolera`: nyt punkt 8. oktober. Borno State i Nigeria har 68.152 mistænkte tilfælde og 394 dødsfald pr. 7. oktober siden udbruddets start i maj, og alle 22 lokalområder har tilfælde, NaTHNaC: https://travelhealthpro.org.uk/outbreaks Punktet er dateret 8. oktober, NaTHNaC's udgivelsesdato, fordi forløbet allerede har et punkt 8. oktober.
- `difteri-afro`: nyt punkt 27. september. Niger har 949 mistænkte tilfælde og 36 dødsfald i 50 af 72 sundhedsdistrikter pr. 27. september, NaTHNaC: https://travelhealthpro.org.uk/outbreaks
- `maesling-us`: nyt punkt 12. oktober. Franklin County i Pennsylvania melder delstatens sjette mæslingeassocierede dødsfald, en uvaccineret kvinde på 39 år. Delstatens side har fortsat fem, og US CDC har to for hele landet. CIDRAP: https://www.cidrap.umn.edu/measles/pennsylvania-reports-its-6th-measles-death-franklin-county-resident `extra` nævner det sjette dødsfald.
- `dengue-bd`: 103.396 indlagte og 316 dødsfald i 2026 pr. 13. oktober efter 1.954 nye indlagte og 9 dødsfald på et døgn, DGHS' dashboard: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php Nyt punkt i forløbet og i talserien, og `cases` er opdateret. Tallene er læst to gange: i kildescriptets udtræk og i sidens rå tekst. Hændelsen hører til kl. 11-kørslen, men dagens tal var ude nu.
- `mpox-hk`: nyt punkt 13. oktober. CHP melder et nyt tilfælde hos en 39-årig mand og anbefaler, at stedet Hutong i Mong Kok lukkes midlertidigt. 31 tilfælde i år, heraf 24 lokale og 7 importerede, og 115 siden 2022: https://www.info.gov.hk/gia/general/202610/13/P2026101300621.htm `cases`, `extra` og `src` er opdateret. Hændelsen hører til kl. 11-kørslen, men meldingen kom i dag.

**Nye**
- Ingen. NaTHNaC melder dengue på Marshalløerne (112 bekræftede tilfælde pr. 25. september, ingen i 2025). Det er ikke taget med i denne kørsel, fordi den oprindelige myndighed ikke er fundet.

**Urørt**
- 33 hændelser uden nyt i kilderne, heraf `ebola-drc` (situationsrapport 150 er ikke ude), `dengue-fl`, `gul-feber-gh`, `h5n1-us`, `cyclospora-us` og `mpox-mo`.
- Rundtur: `mpox` 29 dage siden seneste punkt. WHO's situationsrapport nummer 70 er ikke fundet, og nummer 69 fra 14. september er stadig den seneste. `chik-am` 21 dage, `difteri-ng` 19 dage, `anthrax-zm` 13 dage og `mpox-mo` 13 dage: intet nyt fundet i denne kørsel.

**Usikkert**
- `mpox`: kontrollen begynder at advare om en aktiv hændelse uden nyt punkt fra 14. oktober. Udbruddet er ikke erklæret afsluttet, og WHO kalder det fortsat en graderet nødsituation i rapport 69, så `live` står.
- `ebola-ke`: kontakttallene kendes kun gennem medier, der gengiver sundhedsministeriet. Ministeriets egen udmelding er ikke fundet.
- `maesling-us`: det sjette dødsfald er meldt af Franklin County og gengivet af CIDRAP. Amtets egen meddelelse er ikke fundet, og delstaten har ikke selv bekræftet det.
- `kolera` og `difteri-afro`: NaTHNaC's tal er ikke slået op hos Nigerias og Nigers egne myndigheder.
- Kontrollen advarer fortsat om 17 hændelser, hvor `cases` har tal uden opgørelsesdato.

**Mediesporet**
- Ti par med status afventer er gennemgået, mest omtalte først. `IR-US` og `IL-IR` er ikke rørt, fordi de venter på ejerens afgørelse i GENNEMGANG.md.
- Godkendt: ingen.
- Afvist: `PK-SA` (Pakistan nævnt som mulig allieret og fordi en pakistaner blev dræbt i angrebet på Riyadhs lufthavn: https://www.geo.tv/latest/686103-pakistani-killed-11-others-injured-in-riyadh-airport-attack og https://tribune.com.pk/story/2634569/saudi-arabia-rejects-israeli-bid-to-join-fight-against-houthis-israeli-media), `KP-KR` (missilprøver: https://www.koreatimes.co.kr/southkorea/defense/20261013/n-korea-reports-test-firing-of-tactical-ballistic-missile-to-improve-weapons-systems og https://www.reuters.com/world/asia-pacific/north-korea-fires-unidentified-projectile-toward-sea-off-its-east-coast-seoul-2026-10-12/), `SA-SD` (Houthi-angreb på Riyadh: https://www.irishtimes.com/world/middle-east/2026/10/12/riyadh-airport-hit-again-after-deadly-houthi-missile-attack/ og https://www.al-monitor.com/originals/2026/10/riyadh-airport-hit-fresh-houthi-strike-day-after-deadly-attack), `DJ-SA` (krigen mod Houthi-bevægelsen og Rødehavet: https://www.aljazeera.com/news/2026/10/10/yemeni-governments-military-says-its-forces-advancing-against-houthis og https://www.premiumtimesng.com/news/top-news/915653-how-houthi-military-aggression-in-red-sea-threatens-africa.html), `US-VE` (anklager mod Maduro: https://www.channelnewsasia.com/world/maduro-wife-flores-venezuela-torture-charges-6444506 og https://www.thehindu.com/news/international/venezuelas-maduro-charged-in-us-with-ordering-torture-of-opponents-americans/article71561348.ece), `EG-SA` (egyptisk kabineansat dræbt i Riyadh: https://gulfnews.com/business/aviation/riyadh-airport-attack-egyptian-flight-attendant-28-among-12-killed-1.500706143 og https://www.npr.org/2026/10/10/g-s1-147682/attack-on-riyadh-airport-killed-12-people-and-wounded-over-300-more-saudi-authorities-say), `GB-IR` (efterretningstjenestens advarsler: https://www.nytimes.com/2026/10/13/world/europe/mi5-uk-threat-iran-russia.html og https://www.washingtonpost.com/world/2026/10/13/uk-intelligence-chief-warns-iran-is-shifting-plots-harder-targets/), `CN-US` (handelskrig og forhandlinger: https://www.cnn.com/2026/10/13/china/china-data-centers-ai-race-intl-hnk-dst og https://www.irishtimes.com/world/asia-pacific/2026/10/11/taiwan-fears-for-us-support-as-trump-and-xi-prepare-for-fresh-talks/) og `MX-US` (kriminalitet og drabssag: https://www.dw.com/en/mexico-court-finds-three-men-guilty-of-murder-of-australian-us-surfers/a-79624125 og https://www.latimes.com/world-nation/story/2026-10-11/mexican-cartels-are-building-luxury-fleets-by-stealing-u-s-rental-cars).
- Ikke afgjort: `EG-SD`. En menneskeretsgruppe anklager Egyptens luftvåben for luftangreb, der dræbte guldgravere på den sudanesiske side af grænsen, og Egyptens militær siger, at det har en operation mod ulovlig minedrift ved grænsen: https://www.hindustantimes.com/world-news/us-news/egypt-says-border-operation-targeted-illegal-mining-after-deadly-strike-101791830310525.html og https://www.aljazeera.com/news/2026/10/12/deadly-gold-mine-air-strikes-highlight-egypt-sudan-border-insecurity Angrebet ramte civile og ikke en sudanesisk styrke, og ophavet er ikke bekræftet. Parret står som afventer, se GENNEMGANG.md.

**Til gennemgang**
- Nyt i GENNEMGANG.md: `EG-SD` i mediesporet.

### Kl. 21.40, ejerens afgørelser i gennemgangen

Ejeren har afgjort alle punkter i GENNEMGANG.md i et svarark. Punkterne er fjernet derfra, undtagen de 15 hændelser, der mangler opgørelsesdato i `cases`.

**Ændret i datasættet (gamle punkter, rettet efter ejerens afgørelse)**
- `gul-feber-gh`: punktet 8. oktober siger nu, at nødvaccinationen forberedes og ventes i oktober ifølge sundhedsministeriets meddelelse 9. oktober.
- `maesling-bd`: punktet 8. oktober og talserien har 201.625 mistænkte tilfælde efter DGHS' egen meddelelse: https://dghs.gov.bd/pages/press-releases/6ac79bd5693754e6a6881711
- `polio`: Pakistans sjette tilfælde er dateret 5. oktober efter APP: https://www.app.com.pk/?p=1286643
- `cyclospora-us`: tallet er US CDC's pr. 15. september for sæsonen 1. maj til 31. august. "Lavere kvalitet" er fjernet fra `extra`: https://www.cdc.gov/cyclosporiasis/cases/index.html
- `anthrax-zm`: de 26 humane tilfælde er dateret 28. september efter Times of Zambia, i forløbet, talserien og `cases`: https://times.co.zm/8000-animals-get-anthrax-vaccine/
- `ebola-ke`: landrejsen via Beni til Kampala er dateret 2. oktober efter WHO AFRO, flyet til Nairobi står 3. oktober. Stedknuden Kampala og linjen dertil har 2. oktober. `extra` nævner, at WHO DON 619 har dødsfaldet 5. oktober og ministeriet hos APO Group 6. oktober. `naeste` har 122 kontakter.
- `ebola-drc`: punktet 27. august står med UKHSA's uge 35 som kilde. `note` nævner evakueringen af en britisk nødhjælpsarbejder til London 21. juli efter mulig smitte, uden symptomer, efter det spanske sundhedsministerium. Sydkivu er ny stedknude.
- `h5n1-dk`: DK-VET 1. oktober er sat i `src` og på punktet 1. oktober: https://dkvet.dk/nyheder/2026/hoejpatogen-fugleinfluenza/
- `dengue-bd`: nyt punkt 6. oktober med 90.356 indlagte og 281 dødsfald efter bdnews24: https://bdnews24.com/health/7d4zguh4hx Talserien bruger fortsat SEARO's tal. Punkterne 10. august og 17. september og sætningen om september tages ikke med, fordi kilden ikke kunne findes.
- Uændret efter afgørelsen: `pest-irkutsk` (navn, `naeste`, de 5.000 prøver, datoerne og region Asien), `maesling-us` 2025-tallet, `ebola-ke` og `ebola-nl` uden alvor 4, SEARO's tal i talserien for `dengue-bd` og grafens samlede dødstal i `maesling-bd`.

**Ændret i mediesporet**
- `IL-IR`, `IR-US`, `DJ-YE` og `EG-SD` er afvist. Kun direkte kampe eller angreb mellem parternes styrker tæller som bekræftet konflikt. En erklæret krig uden angreb, en blokade mod skibe fra tredje lande og et angreb på civile med ubekræftet ophav afvises.
- Et afvist par udløber efter 30 dage og tages op igen. Afvises det på ny, får det ny dato.

**Ændret på siden**
- Smithsonians ugentlige vulkanrapport er taget ud som kilde, fordi også dens RSS-adresse svarer 403 hver time. Vulkanlaget viser udbrud med GDACS-varsel, og guiden siger det.
- Læs mere: DR's alle nyheder, TV 2 og Politiken er lagt til overskrifterne med danske søgeord, og GDELT søges blandt dansksprogede medier med danske ord og landets danske navn.
- `/oversaet` oversætter kun tekster, hvis ord står i sidens egne filer. Ordlisten bygges ved hver udrulning.
- Udkast til privatlivstekst i `udkast/privatliv.md`. Ikke live, før ejeren har læst den, og kontaktadressen er valgt.

## 12. oktober 2026, sen eftermiddag

**Side og arbejdsgang ændret.** Ingen ændringer i data.

- Vagtplan: smitteudbruddene gennemgås nu fire gange i døgnet (kl. 00.20, 05.20, 11.20 og 17.20), hver gang med fokus på sin del af verden. Reglerne står i OPDATERING.md under Vagtplan: ingen overlap mellem kørsler, intet commit uden ændringer, og én logpost pr. døgn med et underafsnit pr. kørsel.
- `DATA_TID`: tidspunktet for seneste gennemgang, vist som "Gennemgået for 2 timer siden". Kontrollen afviser et tidspunkt i fremtiden eller på en anden dag end `DATA_DATO`.
- Engelsk: også Sådan virker siden, Nyt på siden, Data og kilder og listernes linjer maskinoversættes nu, først når de åbnes.
- Beskeder: prøvet hele vejen gennem Mozillas push-tjeneste (tilmelding, krypteret besked modtaget og læst). https://globus.nicco.dk/besked/tilstand viser antal abonnementer og den seneste timevise gennemgang, uden persondata.

## 12. oktober 2026, eftermiddag

**Side ændret.** Ingen ændringer i data.

- Velkomst ved første besøg: det vigtigste lige nu i tre linjer og en vej ind i Udforsk.
- Tilbage på telefonen (og swipe tilbage på iPhone) lukker søgningen og Lag i stedet for at forlade siden.
- Hvornår hver retning sidst blev opdateret, står under Lag, i Data og kilder og i forklaringen på hver retning.
- Delte links (/h/<id>) viser titel, tekst og billede for netop den hændelse, det sted eller det land. Sidens beskrivelse nævner nu alle retninger.
- Push-beskeder om de lande, man følger (klokken i landets kort og i listen over fulgte lande). Workeren `globus-besked` sender én besked pr. time højst, når noget er ændret.
- Engelsk: knappen EN oversætter brugerfladen. Datatekster i kortene maskinoversættes med Cloudflare Workers AI og er mærket som maskinoversat. Teksterne oversættes én sætning ad gangen, og har en oversat sætning andre tal end originalen, vises den danske sætning i stedet.
- Tilgængelighed: gennemgået med axe-core på computer og mobil, lys og mørk. Rettet: kontrast på tal og i søljen, navne på knapper, overskrifternes rækkefølge, sidens hovedområder, og forløbets rækker, der var knapper med links indeni (nu er datoen knappen).
- Rettet: et link direkte til en hændelse på mobilen stoppede sidens script, før bundbjælken og arkene var sat op. Links direkte til en landeside (fx #land-DK) virker nu, og et link zoomer ind på landet, når landegrænserne er hentet. Maskinmeldinger uden landekode (fx et jordskælv ud for kysten) zoomer ind på det land, punktet ligger i eller nærmest.
- OPDATERING.md: flere faste kilder (WHO AFRO, PAHO, WHO SEARO og WPRO, Africa CDC, SSI og DK-VET), en rundtur på levende udbrud uden nyt i 10 dage, reglen om at alder ikke er en afvisningsgrund, og nye veje til kilderne.

## 12. oktober 2026, mobilen

**Side ændret.** Ingen ændringer i data.

- Mobilen har en bundbjælke med Overblik, Udforsk, Søg, Følger og Lag. Søg står i midten og er størst. Følger har et tal, når et land, man følger, har noget nyt.
- Søg fylder hele skærmen. Før man skriver, foreslår den steder nær en (ud fra forbindelsens placering), lande man følger, de seneste søgninger, populære emner og det mest alvorlige lige nu. Søgningerne huskes kun i browseren.
- Lag er et ark over bjælken med rejsevejledninger som kontakt, alvor, mistanker, tidslinjen, område og trin, og knapperne for lys og mørk, Prototypedata og Hent app. Toppen har nu kun logoet, retningerne, Nyt på siden og Sådan virker siden.
- Trin for trin: overblikket starter i Verden med områderne som knapper. Et område zoomer kloden derhen og viser de tre vigtigste, retningerne i området og landene. Se alle folder hele listen ud. Kortet har en sti øverst, fx Verden › Afrika › DR Congo › Ebola, hvor hvert led kan trykkes på. Træk kortet nedad for at gå et trin op. På en landeside blader pilene og swipe mellem landene i samme område.
- I halv højde viser kortet først titel, kort fortalt og nøgletal. Billede, forløb og kilder kommer, når arket trækkes op.
- Bundbjælken er højere og hævet fra skærmens kant. Kortet og overblikket går i fuld højde op til Lige nu.
- Zoom til det valgte: et land, et område, et sted eller en hændelse fylder det synlige stykke kort med 5 procent luft på hver side. Hændelser vises med deres land, udbrud uden ét land med alle deres steder, og et sted med sit område på 50 × 50 km (højst 40 gange zoom). Fjerne dele af et land, fx Alaska, tæller ikke med.
- Rotationen: mens et kort er åbent, står kloden stille. Efter en handling venter den 2 minutter og bruger 10 sekunder på at nå fuld fart. Pauseknappen står for sig selv øverst til højre i klodens felt, rund og blå, på mobil og computer.

## 12. oktober 2026

**Gennemgået:** ECDC CDTR uge 41 fra 9. oktober, som fortsat er den seneste, WHO DON siden 11. oktober (ingen nye efter DON 620) og UKHSA's ugeoversigt over udbrud under overvågning, hvor uge 40 fortsat er den seneste. Enkeltkilder: DR Congos sundhedsministeriums situationsrapporter 147, 148 og 149, ECDC's ebolaside, Bangladeshs sundhedsmyndighed DGHS om mæslinger og dengue, Sri Lankas National Dengue Control Unit, GPEI, Floridas sundhedsmyndighed, Hongkongs pressemeddelelser, RIVM, Kenyas sundhedsministerium gennem APO Group, WHO AFRO, Africa CDC, ECDC's nyheder, Statens Serum Institut, CIDRAP og WHO's mpox-rapporter samt nyhedsmedier om Kenya, Ghana, Irkutsk og Bangladesh. Kørslen faldt natten til mandag, hvor de faste ugeudgivelser ikke er nye.

**Ændret**
- `ebola-drc`: tal opdateret til 8.978 bekræftede tilfælde og 4.336 dødsfald pr. 10. oktober efter sundhedsministeriets situationsrapport 149: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_149_10_10_2026.pdf 64 nye tilfælde på et døgn: 30 i Ituri, 25 i Nordkivu, 7 i Haut-Uélé og 2 i Tshopo. Dødelighed 48,3 procent. Situationsrapport 147 oplyser, at sundhedszonen Dakwa i Bas-Uélé kom til 8. oktober med et bekræftet tilfælde, så 65 af 167 sundhedszoner nu er ramt: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_147_08_10_2026.pdf To nye punkter i forløbet, 8. og 10. oktober, og to i talserien. Tallene pr. provins i `extra` er opdateret. I `src` er situationsrapport 146 erstattet af 149. Punktet 7. oktober bærer selv rapport 146 som kilde.
- `maesling-bd`: 205.028 mistænkte og 22.421 bekræftede tilfælde, 1.058 dødsfald blandt mistænkte og 104 blandt bekræftede tilfælde, DGHS pr. 11. oktober: https://dghs.gov.bd/pages/press-releases/6acb551cba7fabe195e07849 Det seneste døgn 1.180 nye mistænkte tilfælde, 93 nye bekræftede og 7 dødsfald blandt mistænkte. Nyt punkt i forløbet og i talserien, `cases` og `extra` er opdateret, og meddelelsen er sat i `src` i stedet for den fra 9. oktober, som punktet 9. oktober selv bærer. Se Usikkert om dødstallet.
- `dengue-asien`: Bangladesh 99.275 indlagte og 303 dødsfald pr. 11. oktober efter 2.193 nye indlagte og 4 dødsfald på et døgn, DGHS' dashboard: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php Nyt punkt i forløbet, og `cases` er opdateret. Sri Lanka er uændret.

**Nye**
- Ingen. WHO har ikke udgivet en ny DON efter DON 620, og hverken ECDC eller UKHSA har udgivet nyt siden forrige kørsel. WHO AFRO, Africa CDC, ECDC's nyheder, Statens Serum Institut og CIDRAP har ingen nye signaler, som ikke allerede er på siden.

**Urørt**
- 35 hændelser uden nyt i kilderne.

**Usikkert**
- `maesling-bd`: DGHS' meddelelse opgør dødsfaldene i to rækker, 1.058 blandt mistænkte og 104 blandt bekræftede tilfælde, og skriver ikke selv et samlet tal. Tidligere punkter har et samlet dødstal, som medierne også bruger, senest 1.147 pr. 9. oktober. Kørslen lægger ikke tal sammen, så `cases` viser nu de to rækker hver for sig, og det nye punkt i talserien har intet dødstal. DGHS har ikke lagt en meddelelse ud for 10. oktober. Tallene er læst i den PDF, som meddelelsen for 11. oktober viser.
- `ebola-drc`: US CDC's side kunne ikke læses i denne kørsel. Direkte opslag gav 403, og en søgning begrænset til cdc.gov gav ikke sidens adresse, så hentningsværktøjet kunne ikke bruges. ECDC's ebolaside er fortsat senest opdateret 8. oktober kl. 16.25. Tallene bygger derfor alene på sundhedsministeriets rapporter. Rapport 147 har stadig en linje om Alimbongo i Nordkivu som ny sundhedszone. Den stammer fra tidligere rapporter. Rapportens egen tekst og tabel viser, at det er Dakwa i Bas-Uélé, der er kommet til.
- `ebola-ke`: intet nyt. Sundhedsministeriet har ikke udsendt nyt om ebola gennem APO Group siden 7. oktober, og der er ikke fundet nye tal for kontakter eller karantæne.
- `ebola-nl`: intet nyt om patienten. RIVM's side er uændret siden 1. oktober.
- `pest-irkutsk`: intet nyt efter WHO DON 620. Søgningen gav kun artikler fra 7. og 8. oktober om meldingen om et muligt andet dødsfald, som forløbet allerede har med.
- `gul-feber-gh`: intet nyt efter 9. oktober. Graphic Online gengiver ministeren med 88 mistænkte tilfælde i Upper West Region på pressemødet 9. oktober, samme tal som MyJoyOnline samme dag, og med 187.000 ekstra vaccinedoser bestilt: https://www.graphic.com.gh/news/health/yellow-fever-situation-under-control-health-minister.html `gap` nævner fortsat både 74 og 88. Ikke rettet, fordi der ikke er nyt fra myndighederne.
- `dengue-asien`: Sri Lankas National Dengue Control Unit har ikke lagt et dagstal ud efter 6. oktober.
- `polio`: GPEI's ugeside står fortsat pr. 7. oktober.
- `dengue-fl`: ugerapporten for uge 40 er ikke udkommet.
- `mpox-hk`: Hongkongs pressemeddelelser 11. og 12. oktober har intet om mpox.
- `mpox`: WHO's situationsrapport nummer 70 er fortsat ikke udkommet. Seneste punkt i forløbet er 14. september, så kontrollen begynder at advare om en aktiv hændelse uden nyt fra 15. oktober.
- `maesling-us`: ikke slået op. US CDC opdaterer om onsdagen, og Pennsylvanias seneste opgørelse er fra fredag 9. oktober.
- Hentning: hentningsværktøjet afviste igen adresser, der ikke kom fra et søgeresultat i samme kørsel, også adresserne fra https://globus.nicco.dk/konflikter.json Næsten alt er derfor læst med direkte opslag. Financial Times, The New York Times, The Washington Post, France 24, Le Monde og Agenzia Nova kunne ikke læses ad nogen af de to veje.

**Mediesporet**

38 par stod som afventer i https://globus.nicco.dk/konflikter.json De ti mest omtalte er gennemgået. Ét er godkendt, syv er afvist, og to står fortsat som afventer.

- Godkendt: `IL-LB`, Israel og Libanon. Israelske luftangreb og artilleribeskydning i det sydlige Libanon 11. oktober trods rammeaftalen fra juni, og en mand dræbt af israelsk beskydning i Yater ifølge Libanons statslige nyhedsbureau. Kilder: Al Jazeera https://www.aljazeera.com/news/2026/10/11/two-killed-near-israeli-occupied-area-in-south-lebanon og Anadolu https://aa.com.tr/en/middle-east/israeli-army-renews-airstrikes-artillery-shelling-in-southern-lebanon-despite-us-deal/4085106 Arab News og Middle East Eye beskriver desuden et israelsk droneangreb i det nordøstlige Libanon 9. oktober. Angrebene er ensidige: ingen af artiklerne beskriver beskydning fra libanesisk side i vinduet.
- Afvist: `IR-SA`, Iran og Saudi-Arabien. Angrebene på Saudi-Arabien er udført af Houthi-bevægelsen i Yemen. Iran er kun nævnt som dens støtte, og landenes udenrigsministre talte sammen 11. oktober. Læst: BBC https://www.bbc.co.uk/news/articles/cr93znyk44e1o og Arab News https://www.arabnews.com/saudi-arabia/saudi-iranian-foreign-ministers-discuss-regional-tensions-after-airport-attack-3005810
- Afvist: `SA-US`, Saudi-Arabien og USA. Landene er partnere. Artiklerne handler om, at USA overvejer at gå med i Saudi-Arabiens angreb på Houthi-bevægelsen. Læst: Euronews https://www.euronews.com/2026/10/11/riyadh-airport-stays-shut-after-deadly-attack-as-trump-says-us-may-join-saudi-strikes-on-h og The Guardian https://www.theguardian.com/world/2026/oct/11/saudi-coalition-retaliation-houthi-attack-riyadh-airport
- Afvist: `IR-YE`, Iran og Yemen. Kampene står mellem Houthi-bevægelsen og Saudi-Arabien samt Yemens regering. Iran er kun nævnt som Houthi-bevægelsens støtte. Læst: BBC og The Guardian som ovenfor og CBC https://www.cbc.ca/news/world/un-displaced-yemen-fighting-9.7372204
- Afvist: `RU-US`, Rusland og USA. Artiklerne handler om en dieselaftale og forhandlinger om Ukraine. Læst: DR https://www.dr.dk/nyheder/udland/ukraine-kender-ikke-detaljer-i-mulig-energi-vaabenhvile og NBC News https://www.nbcnews.com/world/ukraine/russia-war-kushner-witkoff-discuss-new-peace-plan-rcna602463
- Afvist: `UA-US`, Ukraine og USA. Politisk strid mellem præsidenterne og forhandlinger om en fredsplan. Læst: DR og NBC News som ovenfor og Euronews https://www.euronews.com/2026/10/10/trump-says-ukraine-needs-new-president-after-zelenskyy-condemns-russia-fuel-deal
- Afvist: `IL-US`, Israel og USA. Landene er allierede. Artiklerne handler om forholdet mellem dem og om amerikansk indenrigspolitik. Læst: The Jerusalem Post https://www.jpost.com/israel-news/article-911368 og The Guardian https://www.theguardian.com/commentisfree/2026/oct/09/jewish-vote-israel
- Afvist: `DJ-YE`, Djibouti og Yemen. Djibouti er kun nævnt som modtager af flygtninge fra Yemen og som hjemsted for udenlandske flådebaser. Læst: CBC som ovenfor og Premium Times https://www.premiumtimesng.com/news/top-news/915653-how-houthi-military-aggression-in-red-sea-threatens-africa.html Tre af stregens seks artikler nævner slet ikke Djibouti.
- Ikke afgjort: `IR-US`, Iran og USA. Anadolu, Al Jazeera, The National og The Jerusalem Post beskriver, at et amerikansk kampfly 10. oktober ramte det Panama-flagede fragtskib Ocean Molica i Omanbugten for at håndhæve blokaden af Irans havne: https://aa.com.tr/en/americas/us-forces-strike-cargo-ship-attempting-to-breach-iran-blockade-in-gulf-of-oman/4084859 og https://www.aljazeera.com/news/2026/10/11/hormuz-attacks-intensify-as-efforts-to-end-war-on-iran-stall Målet var et handelsskib fra et tredje land, ikke iranske styrker, og der er ikke fundet kampe mellem amerikanske og iranske styrker i vinduet. Præsident Trump har ifølge Al Jazeera og CNN skrevet 8. oktober, at USA ikke angriber Iran før midtvejsvalget 3. november. Reglen er strengt læst ikke opfyldt, men krigen er ikke afsluttet, og blokaden håndhæves med våben. Parret er derfor hverken godkendt eller afvist. Se Til gennemgang.
- Ikke afgjort: `IL-IR`, Israel og Iran. Ingen af de læste artikler beskriver et angreb mellem de to lande i vinduet. Krigen, som USA og Israel indledte 28. februar, omtales som baggrund. Af samme grund som ved `IR-US` er parret hverken godkendt eller afvist.
- De øvrige 28 afventende par er ikke gennemgået, fordi kørslen højst tager ti.
- De fire par, der blev godkendt 11. oktober, står uændret. Ingen af dem er afsluttet ifølge to medier. Den energivåbenhvile mellem Rusland og Ukraine, som præsident Trump har annonceret, er ifølge DR ikke bekræftet af parterne.

**Til gennemgang**
- Mediesporet, `IR-US` og `IL-IR`: ejeren bør afgøre, om en erklæret krig uden rapporterede angreb mellem parternes styrker i vinduet, og håndhævelse af en blokade mod skibe fra tredje lande, skal tælle som bekræftet konflikt. Indtil da kommer de to par igen i hver kørsel.
- Mediesporet, afviste par: `tools/hent-medier.mjs` springer et afvist par over uden tidsgrænse. Et par, der er afvist i dag, vises derfor heller ikke, hvis landene senere kommer i kamp, før nogen fjerner det fra `afvist`. Ejeren kan overveje en udløbsdato eller en regel for at tage afviste par op igen.
- Mediesporet, `DJ-YE`: stregen ser ud til at stamme fra GDELT's stedfæstelse af kampe ved Bab el-Mandeb og ikke fra artiklernes indhold.
- `maesling-bd`: `cases` viser nu dødsfald blandt mistænkte og bekræftede hver for sig, fordi DGHS ikke selv skriver et samlet tal. Ejeren kan vælge at lægge de to rækker sammen som i de tidligere punkter. Det ville give 1.162 pr. 11. oktober.
- `OPDATERING.md`, Sådan hentes kilderne: DGHS' mæslingemeddelelser er en PDF, som siden viser i en ramme. Adressen til PDF'en står i sidens kildekode som en adresse hos objectstorage.ap-dcc-gazipur-1.oraclecloud15.com, og tallene kan læses dér med pdftotext. DR Congos situationsrapporter har fast adresseform: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_149_10_10_2026.pdf med rapportnummer og dato.
- `pest-irkutsk`: sygdomsnavn og smittestof blev ændret af kørslen 11. oktober, se posten fra den dag. Ret tilbage, hvis hændelsen fortsat skal hedde "Pest, lungeform mistænkt".
- `pest-irkutsk`: `naeste` siger, at hændelsen lukkes, hvis WHO får et svar, der udelukker pest. Rusland har svaret, at dødsfaldet ikke skyldtes pest, men WHO kan ikke selv bekræfte det. `naeste` rettes kun, når trinnet flytter sig, så teksten står.
- `pest-irkutsk`: punktet 7. oktober har omkring 5.000 negative prøver. WHO DON 620 skriver over 5.500. Ikke rettet. Det nye tal står i punktet 10. oktober og i `extra`.
- `pest-irkutsk`: forløbet daterer WHO's opfordring til Rusland til 8. oktober. Al Jazeera og PBS har onsdag 7. oktober. Ifølge DON 620 henvendte WHO sig 3., 5., 6. og 7. oktober og bad om yderligere oplysninger 7. og 8. oktober, så begge datoer har dækning. UKHSA's ugeoversigt skriver, at kvinden døde 1. oktober. ECDC uge 41 skriver natten mellem 1. og 2. oktober, og WHO DON 620 skriver 2. oktober, som forløbet.
- `gul-feber-gh`: punktet 8. oktober siger efter NaTHNaC, at en målrettet vaccinationskampagne er i gang. Ifølge sundhedsministeriets meddelelse 9. oktober forberedes den og ventes i oktober. Ikke rettet. `note` og `extra` følger meddelelsen.
- `maesling-bd`: punktet 8. oktober og talserien har 202.625 mistænkte tilfælde. DGHS' egen pressemeddelelse for 8. oktober har 201.625: https://dghs.gov.bd/pages/press-releases/6ac79bd5693754e6a6881711 The Business Standard skrev 2,02,625. Ikke rettet. Det rigtige tal står i punktet 9. oktober og i `extra`.
- `polio`: punktet 6. oktober siger, at Pakistan bekræfter sit sjette tilfælde. Ifølge nyhedsbureauet APP skete bekræftelsen mandag 5. oktober: https://www.app.com.pk/?p=1286643 Ikke rettet.
- `cyclospora-us`: punktet 5. oktober har 19.883 tilfælde som nationalt sæsontal. Ifølge US CDC er det tallet pr. 15. september for sæsonen 1. maj til 31. august, og siden opdateres ikke længere ugentligt: https://www.cdc.gov/cyclosporiasis/cases/index.html `extra` kalder kilden af lavere kvalitet, selv om tallet er CDC's eget. Ikke rettet.
- `anthrax-zm`: de 26 humane tilfælde gælder ifølge Times of Zambia pr. 28. september. Forløbet og talserien har 30. september, som er Lusaka Times' udgivelsesdato: https://times.co.zm/8000-animals-get-anthrax-vaccine/ Ikke rettet.
- `ebola-ke`: sundhedsministeriets pressemeddelelse hos APO Group skriver, at patienten døde 6. oktober. WHO DON 619 og forløbet har 5. oktober. Ikke rettet.
- `ebola-drc`: punktet 27. august siger, at WHO erklærede udbruddet i Uganda afsluttet den dag. ECDC's ebolaside skriver 25. august, mens ECDC uge 41 skriver 27. august i brødteksten og 25. august i resuméet. Ikke rettet.
- `h5n1-dk`: fundene i sæler stammer fra DK-VET 1. oktober, som ikke står blandt kilderne: https://dkvet.dk/nyheder/2026/hoejpatogen-fugleinfluenza/ Statens Serum Instituts side, der står som kilde, er senest redigeret 17. april og handler om andre pattedyr.
- `maesling-us`: kørslen 8. oktober rettede tallet for hele 2025 fra 2.255 til 2.289 efter US CDC, før reglen om gamle punkter blev ændret. Rettelsen står.
- `ebola-drc`: WHO, ECDC, UKHSA og sundhedsministeriet regner Sydkivu blandt de syv ramte provinser. Datasættet har ingen stedknude for Sydkivu, men en for Kinshasa.
- `ebola-drc`: `note` nævner ikke evakueringen til Storbritannien 21. juli, som ECDC's ebolaside har med.
- `ebola-ke`: `naeste` nævner 28 kontakter. Sundhedsministeriet har 57 pr. 7. oktober, og ministeren nævner 66 i karantæne 8. oktober. `naeste` rettes kun, når trinnet flytter sig, så teksten står.
- `ebola-ke`: forløbet har 3. oktober for både landrejsen til Kampala og ankomsten til Nairobi. WHO AFRO har 2. oktober for landrejsen.
- `OPDATERING.md`, To veje til en side: hentningsværktøjet tager i en kørsel uden tilsyn kun adresser, som en søgning har givet i samme kørsel. Adresser fra repoet eller gættede adresser afvises. For US CDC virker det at søge med begrænsning til cdc.gov og derefter hente den adresse, søgningen giver. Det bør stå i afsnittet.
- `OPDATERING.md`, Sådan hentes kilderne: veje, der virkede med direkte hentning i de seneste kørsler. DR Congos daglige situationsrapport ligger på https://insp.cd og udkommer en til to dage efter rapportdatoen. DGHS' mæslingetal står i pressemeddelelser på https://dghs.gov.bd/pages/press-releases og dengue på https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php Sri Lankas dagstal ligger som PDF på https://www.dengue.health.gov.lk og Floridas ugerapport som PDF på https://www.floridahealth.gov om torsdagen. Hongkongs pressemeddelelser ligger på https://www.info.gov.hk/gia/general/ med en side pr. dag. Kenyas sundhedsministeriums meddelelser hos APO Group står samlet på https://africa-newsroom.com/press/source/ministry-of-health-kenya
- Repoet har en gren, `udrulning-fra-repo`, ved siden af `main`. Kørslen har ikke rørt den.
- `ebola-ke` og `ebola-nl`: hører til samme ebolaudbrud, som WHO har erklæret international sundhedskrise, men har ikke fået alvor 4, fordi krisen gælder udbruddet i DR Congo. Ejeren kan tage stilling.

## 11. oktober 2026, aften

**Side ændret og nye kilder.** Ingen ændringer i smitteudbruddene.

- Siden viser nu alle otte retninger. De syv nye hentes automatisk hver time af workflowet fra navngivne kilder: Udenrigsministeriets rejsevejledninger, USGS, GDACS, Meteoalarm og Smithsonian GVP. Reglerne står i `OPDATERING.md` under Maskinmeldinger.
- Ved første hentning: 43 lande med mindst gul rejsevejledning, 14 jordskælv, 17 storme og vindvarsler, 12 oversvømmelser, 185 naturbrande, 3 hede-, kulde- og tørkevarsler og 1 vulkanudbrud.
- Smithsonian GVP svarede ikke (HTTP 403, siden var midlertidigt nede). Vulkaner kommer derfor kun fra GDACS, til GVP svarer igen.
- Smitteprikkerne er nu grønne som retningens farve. Trinnet står som tekst. Før brugte prikkerne trinfarver, som lignede de andre retninger.
- Siden åbner med alt fra alle retninger. Et klik på en retning slår den til eller fra. Et dobbeltklik viser kun den retning, og et nyt dobbeltklik fører tilbage.
- Lande med en rejsevejledning fra gul og op står en tone mørkere blå. Landegrænserne er Natural Earth 1:110m.
- Zoom op til 30 gange. Fra 20 gange vises landenes regioner med navn (Natural Earth 1:10m).
- Knap til lys og mørk tilstand. Siden starter som maskinens tilstand.
- Udenrigsministeriet har rejsevejledninger for under halvdelen af verdens lande. For 36 lande uden dansk vejledning, blandt andre Sudan, Syrien, Yemen, Afghanistan, Irak, Libyen, Somalia, Mali og DR Congo, bruges nu det britiske udenrigsministeriums niveau.
- Mediesporet: røde streger for konflikter og gule for militær støtte, talt op hver time i GDELT blandt ca. 240 medier på vores liste. Ved start: 140 streger i de sidste 7 dage, heraf 39 over tærsklen. Fire par er tjekket og godkendt med to kilder hver: Rusland–Ukraine (Al Jazeera, Euronews), Israel–Palæstina (Middle East Eye, Yeni Şafak), Saudi-Arabien–Yemen (Euronews, The Times of Israel) og Eritrea–Etiopien (Al Jazeera, South China Morning Post). De øvrige 35 venter på tjek i den daglige kørsel og vises stiplet.
- Rejsevejledninger har fået deres egen retning med et fly. Krig og konflikt viser nu kampe, borgerkrig, konflikter og demonstrationer ifølge medierne: et varmekort over, hvor der kæmpes, og en markør pr. land.
- Landeside: vælger man et land, samles alt om det, med samlet vurdering øverst. Man kan følge et land og abonnere på det som RSS.
- Regioner, som Udenrigsministeriets rejsevejledning nævner ved navn, farves, når man zoomer ind (fx Tigray, Amhara og Afar i Etiopien).
- Flygtninge fra UNHCR: prikkede streger til de lande, der huser flest flygtninge fra det valgte land.
- Konflikternes udvikling vises som en lille kurve over medier pr. dag.
- Kloden starter og nulstilles til 1,5 gange zoom.
- Hovedstæder står som fx "København, Danmark" med fed og kommer frem sammen med regionerne. Danske navne på hovedstæderne er fra Wikidata. Regionernes navne står altid i samme lille størrelse.
- Fra 2,5 gange bruges et finere kort (Natural Earth 1:50m), så små øer som Fyn, Bornholm og Færøerne kommer med.
- Kloden starter over det område, ens internetforbindelse ser ud til at komme fra, og Nulstil fører tilbage dertil. Placeringen slås op af Cloudflare i en lille funktion (functions/hvor.js) og gemmes ikke.
- Pauseknap under zoomknapperne: stopper klodens rotation, til man trykker igen eller genindlæser siden.
- Landenes regioner toner frem fra 2 gange og står lige så kraftigt som landegrænserne fra 20 gange og op til 30 gange. Navnene kommer med fra cirka 7 gange.
- Markører, der lå oven i hinanden (fx hede- og oversvømmelsesvarsel i Israel), lægges nu i en lille ring, så forklaringen ved musen passer til den markør, man peger på.
- Er noget valgt, vises kun det valgtes streger. Konfliktstregerne forsvinder, når man vælger et smitteudbrud eller en storm.
- Alle lande har en lysegrå prik på hovedstaden (Natural Earth), og navnet står ved, når man zoomer ind, eller når landet har en forbindelse til det valgte land. Krig og konflikt og alle streger går nu mellem hovedstæderne. Mistanker vises kun for det valgte land.
- Mediesporet læser også overskrifter direkte fra 17 store medier, som GDELT dækker dårligt: Reuters, AP, CNN, The New York Times, The Wall Street Journal, The Washington Post, Financial Times, BBC, The Guardian, Al Jazeera, NPR, CBS, NBC, France 24, Le Monde, Euronews og DR. De tæller kun til røde streger.
- Vælger man et land under krig og konflikt, viser grønne streger, hvem der i år har givet mindst 1 mio. USD i humanitær hjælp (OCHA FTS). Storme viser deres bane fra GDACS.
- Prikker, der ligger tæt, samles i én prik med antallet. Kanten viser retningernes farver. Zoomer man ind eller trykker på prikken, skilles de. Ligger de samme sted, vises de som en liste.
- Krig og konflikt har nu en prik pr. sted i stedet for én pr. land: kampe fra 8 omtaler (højst 8 steder pr. land) og demonstrationer fra 15 omtaler. Trykker man på en prik, ses kun det, der er omtalt netop dér: stedets navn fra GDELT, antal omtaler og medier, parterne, andre lande nævnt som part og op til fire artikler. Landesiden åbner, når man trykker på selve landet eller på "Se hele landet".
- Landesiden tegner kun bekræftede konflikter. Par, der venter på tjek, får deres streg, når man peger på eller trykker på rækken.
- Zoom op til 40 gange. Regionerne toner frem fra 15 gange og står fuldt fra 25 gange. Hovedstædernes navne kommer stadig frem fra 2 gange.
- Nyt alvorstrin 5, akut: alvor 4 med en udvikling inden for tre dage og smitteudbrud på mistanke. Det gives af en fast regel og står ikke i datasættet. Rejsevejledninger bliver aldrig akut. Søljen "Lige nu" i bunden viser alvor 5 og 4, akut først, i én ubrudt række, og et tryk fører hen til hændelsen. Under Alvor er "Kun 4" blevet til "Fra 4", og "Kun 5" er kommet til.
- Rejsevejledninger er en service: knappen står for sig til højre og er slået fra ved start og ved Vis alle.
- Siden kan hentes som app (webapp) på computer og telefon: manifest, ikoner og en service worker, der viser de sidst hentede data uden net. Knappen Hent app vises, når browseren tilbyder installation. På iPhone bruges Del, Føj til hjemmeskærm.
- Detaljerne er et kort med samme rækkefølge for alle typer: retning, titel, sted, alvor og dato med knapper til følg, del og sammenlign; billede; kort fortalt; nøgletal; forløb (de seneste tre punkter, resten foldet sammen); kilder og vurdering; læs mere; og foldet sammen: hvad ville flytte trinnet, udbredelse, detaljer og hvad der hører sammen. Pilene øverst blader i listen.
- Billedet er et frit billede fra Wikimedia Commons fra Wikipedia-artiklen om emnet (fx sygdommen eller byen), med fotograf og licens, og der står, at det ikke viser selve hændelsen. Findes der intet, vises et kortudsnit.
- Læs mere: tre artikler fundet i GDELT DOC af `tools/hent-laes.mjs` hver time, den første fra et dansk medie for brugere i Danmark. Til videre læsning, ikke kilde til tal eller alvor.
- Overblikket: søgning og filtre er foldet væk bag to knapper, det akutte står øverst, og resten er samlet pr. retning med antal. Udforsk giver en tur gennem de tolv alvorligste lige nu.
- Mobilen er bygget som en app: kortet står fast i hele skærmen, retningerne ligger i en bjælke øverst med søljen under, og overblik og detaljer er ark, der trækkes op fra bunden. Et swipe til siden skifter hændelse.
- Bred læsevisning på computeren: knappen med pilene i detaljekortet gør kortet op til 820 px bredt med indholdet i to spalter og hele forløbet som en vandret tidslinje. Kloden rykker til højre for kortet. Valget huskes i browseren.
- Afspil udbruddet: et tryk på et punkt i forløbet sætter tidsskyderen til datoen og flyver til stedet. Knappen Afspil udbruddet går punkt for punkt gennem forløbet.
- Nyt siden sidst: siden husker i browseren, hvad der stod på den, da man sidst forlod den. Ved næste besøg står det nye øverst i overblikket (ny, højere eller lavere alvor, ny udvikling), og prikkerne har en lille markering på kloden.
- Knappen Nyt på siden ved siden af Sådan virker siden samler nye funktioner med en kort forklaring og en Prøv det-knap. Et lille tal på knappen viser, hvor mange nyheder man ikke har set endnu. En nyhed forsvinder fra vinduet, når man har set den, og står samtidig under Det kan du på siden i Sådan virker siden. Et tryk på en nyhed fører hen til funktionen.
- På telefonen kommer et lille banner, der tilbyder at hente siden som app. På iPhone viser det, hvordan man føjer siden til hjemmeskærmen. Lukkes banneret, kommer det ikke igen i 30 dage.
- Prototypedata-mærket åbner Data og kilder: hvilke data siden henter, hvorfra og hvornår de sidst blev hentet, og de seneste opdateringer ti ad gangen med Vis mere.
- Toppen: undertitlen starter ved stregen efter logoet, tema og Nyt på siden står ved stregen til overblikket. Positionsteksten står øverst til højre over kloden, og klodens felt har bløde overgange i top og bund.
- Når kloden begynder at dreje af sig selv, bruger den den første halve omgang på at glide til ækvator og 1,5 gange zoom og drejer derefter rundt om ækvator, til man rører den.
- Efter et tryk på en prik står kloden stille i 10 sekunder, før den drejer igen. Tæt på drejer den langsommere.

## 11. oktober 2026, eftermiddag

**Side ændret.** Ingen gennemgang af kilder og ingen ændrede tal i denne post. Siden har fået et nyt udseende, som forbereder flere retninger end smitteudbrud.

- Overskriften er nu Nicco-mærket og domænet GLOBUS.NICCO.DK, og browserikonet er skiftet til Nicco-mærket.
- Øverst står en knap pr. retning med ikon og egen farve: krig og konflikt, smitteudbrud, hedebølger og klimaekstremer, jordskælv, oversvømmelser, storme, naturbrande og vulkaner. Kun smitteudbrud har data. De andre står stiplet som på vej.
- Prikkerne viser nu alvor på en skala fra 1 til 4 med størrelse og ringe. Under kloden kan man vælge, hvor alvorligt det mindst skal være, og hvornår mistanker vises. Som udgangspunkt vises mistanker først på kloden, når man zoomer ind, men de står altid i listen.
- Kun alvor 4 pulserer. Før pulserede alle aktive hændelser.
- Man kan zoome op til 14 gange, også med to fingre, og holder man musen over en prik eller en knap, kommer en kort forklaring.
- Om siden er afløst af Sådan virker siden, med retninger, alvor, status, eskaleringstrin og hvordan kortet bruges.
- Tre hændelser har fået feltet `alvor`, begrundet i punkter, der allerede står i forløbet med kilde:
  - `ebola-drc`: alvor 4. WHO erklærede international sundhedskrise 17. maj.
  - `polio`: alvor 4. WHO's nødkomité fastholdt den internationale sundhedskrise 25. august: https://www.who.int/news/item/25-08-2026-statement-of-the-forty-fifth-meeting-of-the-polio-ihr-emergency-committee
  - `kolera`: alvor 3. WHO vurderer risikoen for kolera i Afrika som høj: https://www.who.int/publications/m/item/who-rapid-risk-assessment-cholera--african-region-v.1
- Alle andre hændelser har alvor efter trinnet: 1 for mistanke og naturligt reservoir, 2 for resten. Reglen står i `OPDATERING.md` under Alvor, og kontrollen afviser en alvor uden for 1 til 4.

**Til gennemgang**
- `pest-irkutsk`: sygdomsnavn og smittestof er ændret af kørslen, se Ændret og Usikkert. Ret tilbage, hvis hændelsen fortsat skal hedde "Pest, lungeform mistænkt".
- `pest-irkutsk`: `naeste` siger, at hændelsen lukkes, hvis WHO får et svar, der udelukker pest. Rusland har svaret, at dødsfaldet ikke skyldtes pest, men WHO kan ikke selv bekræfte det. `naeste` rettes kun, når trinnet flytter sig, så teksten står.
- `pest-irkutsk`: punktet 7. oktober har omkring 5.000 negative prøver. WHO DON 620 skriver over 5.500. Ikke rettet. Det nye tal står i punktet 10. oktober og i `extra`.
- `pest-irkutsk`: forløbet daterer WHO's opfordring til Rusland til 8. oktober. Al Jazeera og PBS har onsdag 7. oktober. Ifølge DON 620 henvendte WHO sig 3., 5., 6. og 7. oktober og bad om yderligere oplysninger 7. og 8. oktober, så begge datoer har dækning. UKHSA's ugeoversigt skriver, at kvinden døde 1. oktober. ECDC uge 41 skriver natten mellem 1. og 2. oktober, og WHO DON 620 skriver 2. oktober, som forløbet.
- `gul-feber-gh`: punktet 8. oktober siger efter NaTHNaC, at en målrettet vaccinationskampagne er i gang. Ifølge sundhedsministeriets meddelelse 9. oktober forberedes den og ventes i oktober. Ikke rettet. `note` og `extra` følger meddelelsen.
- `maesling-bd`: punktet 8. oktober og talserien har 202.625 mistænkte tilfælde. DGHS' egen pressemeddelelse for 8. oktober har 201.625: https://dghs.gov.bd/pages/press-releases/6ac79bd5693754e6a6881711 The Business Standard skrev 2,02,625. Ikke rettet. Det rigtige tal står i punktet 9. oktober og i `extra`.
- `polio`: punktet 6. oktober siger, at Pakistan bekræfter sit sjette tilfælde. Ifølge nyhedsbureauet APP skete bekræftelsen mandag 5. oktober: https://www.app.com.pk/?p=1286643 Ikke rettet.
- `cyclospora-us`: punktet 5. oktober har 19.883 tilfælde som nationalt sæsontal. Ifølge US CDC er det tallet pr. 15. september for sæsonen 1. maj til 31. august, og siden opdateres ikke længere ugentligt: https://www.cdc.gov/cyclosporiasis/cases/index.html `extra` kalder kilden af lavere kvalitet, selv om tallet er CDC's eget. Ikke rettet.
- `anthrax-zm`: de 26 humane tilfælde gælder ifølge Times of Zambia pr. 28. september. Forløbet og talserien har 30. september, som er Lusaka Times' udgivelsesdato: https://times.co.zm/8000-animals-get-anthrax-vaccine/ Ikke rettet.
- `ebola-ke`: sundhedsministeriets pressemeddelelse hos APO Group skriver, at patienten døde 6. oktober. WHO DON 619 og forløbet har 5. oktober. Ikke rettet.
- `ebola-drc`: punktet 27. august siger, at WHO erklærede udbruddet i Uganda afsluttet den dag. ECDC's ebolaside skriver 25. august, mens ECDC uge 41 skriver 27. august i brødteksten og 25. august i resuméet. Ikke rettet.
- `h5n1-dk`: fundene i sæler stammer fra DK-VET 1. oktober, som ikke står blandt kilderne: https://dkvet.dk/nyheder/2026/hoejpatogen-fugleinfluenza/ Statens Serum Instituts side, der står som kilde, er senest redigeret 17. april og handler om andre pattedyr.
- `maesling-us`: kørslen 8. oktober rettede tallet for hele 2025 fra 2.255 til 2.289 efter US CDC, før reglen om gamle punkter blev ændret. Rettelsen står.
- `ebola-drc`: WHO, ECDC, UKHSA og sundhedsministeriet regner Sydkivu blandt de syv ramte provinser. Datasættet har ingen stedknude for Sydkivu, men en for Kinshasa.
- `ebola-drc`: `note` nævner ikke evakueringen til Storbritannien 21. juli, som ECDC's ebolaside har med.
- `ebola-ke`: `naeste` nævner 28 kontakter. Sundhedsministeriet har 57 pr. 7. oktober, og ministeren nævner 66 i karantæne 8. oktober. `naeste` rettes kun, når trinnet flytter sig, så teksten står.
- `ebola-ke`: forløbet har 3. oktober for både landrejsen til Kampala og ankomsten til Nairobi. WHO AFRO har 2. oktober for landrejsen.
- `OPDATERING.md`, To veje til en side: hentningsværktøjet tager i en kørsel uden tilsyn kun adresser, som en søgning har givet i samme kørsel. Adresser fra repoet eller gættede adresser afvises. For US CDC virker det at søge med begrænsning til cdc.gov og derefter hente den adresse, søgningen giver. Det bør stå i afsnittet.
- `OPDATERING.md`, Sådan hentes kilderne: veje, der virkede med direkte hentning i de seneste kørsler. DR Congos daglige situationsrapport ligger på https://insp.cd og udkommer en til to dage efter rapportdatoen. DGHS' mæslingetal står i pressemeddelelser på https://dghs.gov.bd/pages/press-releases og dengue på https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php Sri Lankas dagstal ligger som PDF på https://www.dengue.health.gov.lk og Floridas ugerapport som PDF på https://www.floridahealth.gov om torsdagen. Hongkongs pressemeddelelser ligger på https://www.info.gov.hk/gia/general/ med en side pr. dag. Kenyas sundhedsministeriums meddelelser hos APO Group står samlet på https://africa-newsroom.com/press/source/ministry-of-health-kenya
- Repoet har en gren, `udrulning-fra-repo`, ved siden af `main`. Kørslen har ikke rørt den.
- `ebola-ke` og `ebola-nl`: hører til samme ebolaudbrud, som WHO har erklæret international sundhedskrise, men har ikke fået alvor 4, fordi krisen gælder udbruddet i DR Congo. Ejeren kan tage stilling.

## 11. oktober 2026

**Gennemgået:** ECDC CDTR uge 41 fra 9. oktober, som fortsat er den seneste, WHO DON siden 10. oktober (DON 620 er ny) og UKHSA's ugeoversigt over udbrud under overvågning, hvor uge 40 fortsat er den seneste. Enkeltkilder: DR Congos sundhedsministeriums situationsrapporter, ECDC's ebolaside, US CDC om ebola og mæslinger, RIVM, GPEI, Bangladeshs sundhedsmyndighed DGHS, Sri Lankas National Dengue Control Unit, Floridas sundhedsmyndighed, Hongkongs sundhedsmyndighed CHP, Kenyas sundhedsministerium gennem APO Group, Ghanas sundhedsministerium, Statens Serum Institut, NaTHNaC, CIDRAP, WHO AFRO, Africa CDC og ECDC's nyheder samt nyhedsmedier om Kenya og Ghana. Kørslen faldt en søndag morgen, hvor de fleste faste udgivelser ikke er nye.

**Ændret**
- `pest-irkutsk`: WHO offentliggjorde 10. oktober hændelsen i DON 620 som lungebetændelse af ukendt årsag: https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON620 Rusland har oplyst til WHO, at dødsfaldet ikke skyldtes pest, at over 5.500 laboratorieundersøgelser var negative for højrisikopatogener, at alle kontakter forblev symptomfri gennem syv dages observation, og at to uafhængige undersøgelser ikke fandt noget laboratorieuheld. WHO ser ingen tegn på fortsat smitte og fraråder ikke rejser eller handel, men har ikke fået oplyst, hvilket smittestof der var årsagen, og kan derfor ikke helt udelukke smitte i laboratoriet. Nyt punkt i forløbet. `cases`, `extra`, `note` og `gap` er skrevet om efter DON 620, og kilden står forrest i `src`. Sygdomsnavnet er ændret fra "Pest, lungeform mistænkt" til "Lungebetændelse af ukendt årsag, pest mistænkt", og smittestoffet fra "Yersinia pestis, ikke bekræftet" til "Ikke fastslået. Dødsfaldet skyldtes ifølge Rusland ikke pest", så overskriften følger WHO's betegnelse. Trinnet er fortsat `mistanke`, og hændelsen står fortsat som aktiv, se Usikkert og Til gennemgang.
- `dengue-asien`: Bangladesh 97.082 indlagte og 299 dødsfald pr. 10. oktober efter 1.631 nye indlagte og 4 dødsfald på et døgn, DGHS' dashboard: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php Nyt punkt i forløbet, og `cases` er opdateret. Sri Lanka er uændret.
- `gul-feber-gh`: sundhedsministeriets skriftlige meddelelse fra 9. oktober er fundet, gengivet enslydende af Graphic Online og GBC: https://www.graphic.com.gh/news/health/health-ministry-declares-yellow-fever-outbreak-in-upper-west-region.html Den oplyser, at de mistænkte tilfælde er set siden 9. september i distrikterne Sissala West og Wa West, at prøverne først blev undersøgt i Ghana og derefter bekræftet på et WHO-akkrediteret laboratorium i Dakar, at beredskabscentrene er aktiveret, og at en nødvaccination forberedes i blandt andre Wa West, Sissala West og Sissala East i oktober. To nye punkter i forløbet: et for 9. september med trinnet `mistanke`, sat ind før de eksisterende punkter, og et for 9. oktober. De 450 mistænkte tilfælde gælder ifølge ministeren hele Ghana fra juni til september, gengivet af MyJoyOnline: https://www.myjoyonline.com/450-suspected-yellow-fever-cases-recorded-across-ghana-since-june-health-minister/ `extra`, `note` og `gap` er rettet til, og begge kilder står i `src`. `cases` er uændret: 3 bekræftede tilfælde, alle døde.
- `ebola-ke`: nyt punkt 10. oktober. Statssekretær for folkesundhed Mary Muthoni oplyser, at Kenya ikke har et aktivt ebolaudbrud, men har håndteret et enkelt importeret tilfælde, People Daily: https://peopledaily.digital/news/ebola-in-kenya-ps-muthoni-clarifies-outbreak-status-amid-hotel-meeting-suspension Tal og øvrige felter er uændrede.

**Nye**
- Ingen. WHO's eneste nye DON handler om hændelsen i Irkutsk, som allerede er på siden, og hverken ECDC eller UKHSA har udgivet nyt siden forrige kørsel.
- Set, men ikke taget med: Channels Television skriver 9. oktober, at Nigerias smitteovervågning NCDC opgør 1.115 bekræftede tilfælde af Lassa-feber og 263 dødsfald fra januar til 20. september, mod 906 og 168 i samme periode i 2025: https://channelstv.com/2026/10/09/nigeria-records-263-lassa-fever-deaths-1115-confirmed-cases-ncdc Lassa-feber er endemisk i Nigeria med en årlig sæson, tallene er tre uger gamle, og NCDC's egen rapport er ikke læst. Ejeren kan overveje, om stigningen skal med som hændelse. NaTHNaC gengiver desuden WHO med 68.152 mistænkte koleratilfælde og 394 dødsfald i delstaten Borno i Nigeria pr. 7. oktober. Det hører under `kolera`, men er ikke ført ind, fordi WHO's egen opgørelse ikke er fundet.

**Urørt**
- 34 hændelser uden nyt i kilderne.

**Usikkert**
- `pest-irkutsk`: alle oplysninger om prøvesvar, vaccination og undersøgelser stammer fra de russiske myndigheder og er gengivet af WHO. WHO skriver selv, at tilliden til vurderingen er begrænset, så længe diagnosen mangler. Hændelsen er derfor ikke lukket, selv om `naeste` siger, at den lukkes, hvis WHO får et svar, der udelukker pest. DON 620 oplyser ikke antallet af kontakter, så de omkring 200 fra tidligere meldinger står kun i `gap`. DON 620 har tre tilfælde af rhinovirus blandt kontakterne, hvor `extra` før havde to.
- `pest-irkutsk`: ændringen af sygdomsnavn og smittestof er en redaktionel vurdering og ikke et tal. Den er foretaget, fordi WHO nu selv betegner hændelsen som lungebetændelse af ukendt årsag, og fordi Rusland oplyser negativ test for pest. Ejeren bør se den igennem.
- `gul-feber-gh`: meddelelsen er ikke fundet på sundhedsministeriets egen side https://www.moh.gov.gh og forsiden hos Ghana Health Service https://ghs.gov.gh nævner ikke gul feber. Kilden er derfor mærket som medie. MyJoyOnline gengiver ministeren med 74 mistænkte tilfælde i Upper West Region i en artikel 8. oktober og med 88 i en artikel 9. oktober, så tallet for regionen står kun i `gap`. MyJoyOnline skriver 9. oktober også, at de tre tilfælde er bekræftet på Noguchi Memorial Institute for Medical Research, hvor ministeriets meddelelse og GNA har Dakar. Meddelelsens version er brugt.
- `gul-feber-gh`: det nye punkt 9. september flytter hændelsens start på tidslinjen fra 8. oktober til 9. september. Datoen er ministeriets egen, men læst gennem medier.
- `ebola-ke`: statssekretærens udmelding er lagt på X og er læst hos People Daily og Eastleigh Voice, ikke hos ministeriet. Sundhedsministeriet har ikke udsendt nyt om ebola gennem APO Group siden 7. oktober, og der er ikke fundet nye tal for kontakter eller karantæne.
- `ebola-drc`: ingen opgørelse nyere end 7. oktober. Sundhedsministeriets seneste situationsrapport på https://insp.cd er fortsat nummer 146, ECDC's ebolaside er senest opdateret 8. oktober kl. 16.25, og US CDC's side er opdateret 9. oktober med tallene pr. 7. oktober: 8.787 bekræftede tilfælde og 4.242 dødsfald i DR Congo.
- `ebola-nl`: intet nyt om patienten. RIVM's side er uændret siden 1. oktober.
- `maesling-bd`: DGHS havde ved kørslen ikke lagt pressemeddelelsen for 10. oktober ud. Seneste er 9. oktober. Ingen ændring.
- `dengue-asien`: Sri Lankas National Dengue Control Unit har ikke lagt et dagstal ud efter 6. oktober.
- `maesling-us`: US CDC er uændret med 4.080 tilfælde pr. 8. oktober. Pennsylvanias seneste opgørelse er fra fredag 9. oktober, og delstatens mæslingeside kunne ikke læses maskinelt.
- `polio`: GPEI's ugeside står fortsat pr. 7. oktober.
- `dengue-fl`: ugerapporten for uge 40 er ikke udkommet.
- `mpox-hk`: CHP har ikke udsendt nyt om mpox efter meddelelsen 10. oktober.
- `mpox`: WHO's situationsrapport nummer 70 er fortsat ikke udkommet. Seneste punkt i forløbet er 14. september, så kontrollen begynder at advare om en aktiv hændelse uden nyt fra 15. oktober.
- Hentning: hentningsværktøjet afviste i denne kørsel alle adresser, der ikke kom fra et søgeresultat. US CDC, som afviser direkte opslag med 403, kunne først læses, efter at en søgning begrænset til cdc.gov havde givet adressen. Eastleigh Voice og Channels Television afviste direkte opslag og blev læst med hentningsværktøjet. Ghana Health Service's side https://ghs.gov.gh gav et tomt svar ved direkte opslag og blev læst med hentningsværktøjet. Kenyas sundhedsministeriums egen side og Rospotrebnadzor er ikke forsøgt hentet i denne kørsel.

**Til gennemgang**
- `pest-irkutsk`: sygdomsnavn og smittestof er ændret af kørslen, se Ændret og Usikkert. Ret tilbage, hvis hændelsen fortsat skal hedde "Pest, lungeform mistænkt".
- `pest-irkutsk`: `naeste` siger, at hændelsen lukkes, hvis WHO får et svar, der udelukker pest. Rusland har svaret, at dødsfaldet ikke skyldtes pest, men WHO kan ikke selv bekræfte det. `naeste` rettes kun, når trinnet flytter sig, så teksten står.
- `pest-irkutsk`: punktet 7. oktober har omkring 5.000 negative prøver. WHO DON 620 skriver over 5.500. Ikke rettet. Det nye tal står i punktet 10. oktober og i `extra`.
- `pest-irkutsk`: forløbet daterer WHO's opfordring til Rusland til 8. oktober. Al Jazeera og PBS har onsdag 7. oktober. Ifølge DON 620 henvendte WHO sig 3., 5., 6. og 7. oktober og bad om yderligere oplysninger 7. og 8. oktober, så begge datoer har dækning. UKHSA's ugeoversigt skriver, at kvinden døde 1. oktober. ECDC uge 41 skriver natten mellem 1. og 2. oktober, og WHO DON 620 skriver 2. oktober, som forløbet.
- `gul-feber-gh`: punktet 8. oktober siger efter NaTHNaC, at en målrettet vaccinationskampagne er i gang. Ifølge sundhedsministeriets meddelelse 9. oktober forberedes den og ventes i oktober. Ikke rettet. `note` og `extra` følger meddelelsen.
- `maesling-bd`: punktet 8. oktober og talserien har 202.625 mistænkte tilfælde. DGHS' egen pressemeddelelse for 8. oktober har 201.625: https://dghs.gov.bd/pages/press-releases/6ac79bd5693754e6a6881711 The Business Standard skrev 2,02,625. Ikke rettet. Det rigtige tal står i punktet 9. oktober og i `extra`.
- `polio`: punktet 6. oktober siger, at Pakistan bekræfter sit sjette tilfælde. Ifølge nyhedsbureauet APP skete bekræftelsen mandag 5. oktober: https://www.app.com.pk/?p=1286643 Ikke rettet.
- `cyclospora-us`: punktet 5. oktober har 19.883 tilfælde som nationalt sæsontal. Ifølge US CDC er det tallet pr. 15. september for sæsonen 1. maj til 31. august, og siden opdateres ikke længere ugentligt: https://www.cdc.gov/cyclosporiasis/cases/index.html `extra` kalder kilden af lavere kvalitet, selv om tallet er CDC's eget. Ikke rettet.
- `anthrax-zm`: de 26 humane tilfælde gælder ifølge Times of Zambia pr. 28. september. Forløbet og talserien har 30. september, som er Lusaka Times' udgivelsesdato: https://times.co.zm/8000-animals-get-anthrax-vaccine/ Ikke rettet.
- `ebola-ke`: sundhedsministeriets pressemeddelelse hos APO Group skriver, at patienten døde 6. oktober. WHO DON 619 og forløbet har 5. oktober. Ikke rettet.
- `ebola-drc`: punktet 27. august siger, at WHO erklærede udbruddet i Uganda afsluttet den dag. ECDC's ebolaside skriver 25. august, mens ECDC uge 41 skriver 27. august i brødteksten og 25. august i resuméet. Ikke rettet.
- `h5n1-dk`: fundene i sæler stammer fra DK-VET 1. oktober, som ikke står blandt kilderne: https://dkvet.dk/nyheder/2026/hoejpatogen-fugleinfluenza/ Statens Serum Instituts side, der står som kilde, er senest redigeret 17. april og handler om andre pattedyr.
- `maesling-us`: kørslen 8. oktober rettede tallet for hele 2025 fra 2.255 til 2.289 efter US CDC, før reglen om gamle punkter blev ændret. Rettelsen står.
- `ebola-drc`: WHO, ECDC, UKHSA og sundhedsministeriet regner Sydkivu blandt de syv ramte provinser. Datasættet har ingen stedknude for Sydkivu, men en for Kinshasa.
- `ebola-drc`: `note` nævner ikke evakueringen til Storbritannien 21. juli, som ECDC's ebolaside har med.
- `ebola-ke`: `naeste` nævner 28 kontakter. Sundhedsministeriet har 57 pr. 7. oktober, og ministeren nævner 66 i karantæne 8. oktober. `naeste` rettes kun, når trinnet flytter sig, så teksten står.
- `ebola-ke`: forløbet har 3. oktober for både landrejsen til Kampala og ankomsten til Nairobi. WHO AFRO har 2. oktober for landrejsen.
- `OPDATERING.md`, To veje til en side: hentningsværktøjet tager i en kørsel uden tilsyn kun adresser, som en søgning har givet i samme kørsel. Adresser fra repoet eller gættede adresser afvises. For US CDC virker det at søge med begrænsning til cdc.gov og derefter hente den adresse, søgningen giver. Det bør stå i afsnittet.
- `OPDATERING.md`, Sådan hentes kilderne: veje, der virkede med direkte hentning i de seneste kørsler. DR Congos daglige situationsrapport ligger på https://insp.cd og udkommer en til to dage efter rapportdatoen. DGHS' mæslingetal står i pressemeddelelser på https://dghs.gov.bd/pages/press-releases og dengue på https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php Sri Lankas dagstal ligger som PDF på https://www.dengue.health.gov.lk og Floridas ugerapport som PDF på https://www.floridahealth.gov om torsdagen. Hongkongs pressemeddelelser ligger på https://www.info.gov.hk/gia/general/ med en side pr. dag. Kenyas sundhedsministeriums meddelelser hos APO Group står samlet på https://africa-newsroom.com/press/source/ministry-of-health-kenya
- Repoet har en gren, `udrulning-fra-repo`, ved siden af `main`. Kørslen har ikke rørt den.

## 10. oktober 2026

**Gennemgået:** ECDC CDTR uge 41, udkommet 9. oktober, WHO DON siden 9. oktober (ingen nye efter DON 619) og UKHSA's ugeoversigt over udbrud under overvågning, hvor uge 40 fra 8. oktober fortsat er den seneste. Enkeltkilder: DR Congos sundhedsministeriums daglige situationsrapport, ECDC's ebolaside og ECDC's ugedata for West Nile, dengue og Krim-Congo hæmoragisk feber, US CDC om ebola, mæslinger, mpox og Cyclospora, WHO's risikovurdering for kolera i Afrika, WHO AFRO, GPEI, Bangladeshs sundhedsmyndighed DGHS, Sri Lankas National Dengue Control Unit, Floridas sundhedsmyndighed, New Yorks guvernør, Pennsylvanias sundhedsmyndighed, Hongkongs sundhedsmyndighed CHP, Israels sundhedsministerium, RIVM, Statens Serum Institut, NaTHNaC, CIDRAP samt nyhedsmedier om Kenya, Ghana, Pennsylvania, Irkutsk, Zambia og Nigeria.

**Ændret**
- `ebola-drc`: tal opdateret til 8.787 bekræftede tilfælde og 4.242 dødsfald pr. 7. oktober efter sundhedsministeriets situationsrapport 146: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_146_07_10_2026.pdf US CDC har samme tal for DR Congo pr. 7. oktober. Dødelighed 48,3 procent, fortsat 64 af 167 sundhedszoner, og tallene pr. provins står nu i `extra`. Nyt punkt i forløbet og i talserien. I `src` er ECDC uge 40 erstattet af uge 41, og punktet 29. september har fået uge 40 som sin kilde.
- `ebola-ke`: nyt punkt 9. oktober. Sundhedsminister Aden Duale oplyser, at patienten i Wajir er testet negativ for ebola og positiv for malaria, Capital FM: https://capitalfm.africa/wajir-patient-tests-negative-for-ebola-positive-for-malaria-duale-says/ `cases` har fået kilde og dato: 1 bekræftet tilfælde og 1 dødsfald, US CDC pr. 7. oktober. Tallet er uændret.
- `kolera`: nyt punkt 8. oktober om WHO's risikovurdering for kolera i Afrika, som sætter den regionale risiko til høj: 160.799 tilfælde og 2.466 dødsfald i 19 lande fra 1. januar til 20. september, heraf DR Congo 48.759 og 1.416 og Nigeria 70.543 og 452. Kilde: https://www.who.int/publications/m/item/who-rapid-risk-assessment-cholera--african-region-v.1 `cases` viser nu begge opgørelser med kilde og dato, og `extra` forklarer forskellen.
- `pest-irkutsk`: nyt punkt 9. oktober. ECDC skriver i uge 41, at oplysningerne ikke rækker til at vurdere risikoen for befolkningen i EU. Ingen nye fakta om dødsårsagen.
- `wnv-eu`: 1.855 tilfælde og 208 områder i 18 lande, ECDC pr. 7. oktober. Bulgarien og Moldova er nye lande. Landetallene i `extra` er læst på ECDC's ugeside: https://wnv-weekly.ecdc.europa.eu/ Nyt punkt i forløbet og i talserien, ny stedknude for Bulgarien.
- `dengue-eu`: Italien 68 og Frankrig 6 tilfælde, ECDC pr. 7. oktober. Ny klynge i Rom. ECDC har slået klyngerne i Livorno og Firenze sammen, så Italien nu har seks klynger. Nyt punkt i forløbet og i talserien, ny stedknude for Rom.
- `chik-fr`: 146 lokale tilfælde i Frankrig og 1 i Italien, ECDC pr. 7. oktober. 20 klynger, heraf 18 aktive, og en ny i Bellefont-La Rauze i Lot. Nyt punkt i forløbet.
- `wnv-eu`, `dengue-eu` og `chik-fr`: ECDC uge 40 er erstattet af uge 41 i `src`, og punkterne 30. september har fået uge 40 som deres kilde.
- `maesling-il`: 3.823 tilfælde, 1.262 indlæggelser og 17 dødsfald pr. 2. september ifølge Israels sundhedsministerium, gengivet af ECDC i uge 41. Nyt punkt i forløbet og i talserien, `gap` rettet til. `live` står fortsat på `false`, se Usikkert.
- `sindbis-de`: nyt punkt 9. oktober. ECDC omtaler tilfældet i uge 41, kalder symptomatiske tilfælde ikke uventede og foretager sig ikke yderligere.
- `maesling-bd`: 202.893 mistænkte og 22.197 bekræftede tilfælde, 1.147 dødsfald, DGHS pr. 9. oktober: https://dghs.gov.bd/pages/press-releases/6ac91a1e734da992ba70ebd9 Nyt punkt i forløbet og i talserien. Punktet 8. oktober har fået sin kilde, The Business Standard, sat på.
- `dengue-asien`: Sri Lanka 101.744 tilfælde og 78 dødsfald pr. 6. oktober, National Dengue Control Unit: https://www.dengue.health.gov.lk/wp-content/uploads/2026/10/Daily-Update-2026.-10.-06.pdf Bangladesh 95.451 indlagte og 295 dødsfald pr. 9. oktober, DGHS' dashboard og The Business Standard: https://www.tbsnews.net/bangladesh/health/one-dies-1300-hospitalised-dengue-24-hours-1567591 To nye punkter i forløbet og et i talserien.
- `polio`: GPEI pr. 7. oktober. Seks nye tilfælde af vaccineafledt type 2 i DR Congo, i alt 64 i 2026, og fem nye af vaccineafledt type 1 i Sydsudan, i alt 15. Afghanistan uændret på 35. `cases`, `extra` og `gap` er skrevet om, så det fremgår, at GPEI har fem tilfælde i Pakistan, hvor landets polioprogram har seks.
- `maesling-us`: 4.080 bekræftede tilfælde i 47 jurisdiktioner, US CDC pr. 8. oktober. Pennsylvania 1.136 tilfælde, 219 indlagte og 5 dødsfald pr. 9. oktober, delstatens sundhedsmyndighed gengivet af WFMZ: https://www.wfmz.com/news/area/pennsylvania/doh-reports-over-1-100-total-measles-cases-across-41-counties-in-pennsylvania/article_3fbe233a-edf7-4c1b-afb6-0ce68827987a.html New Yorks guvernør erklærede katastrofetilstand 5. oktober: https://governor.ny.gov/news/governor-hochul-declares-state-disaster-emergency-response-ongoing-measles-outbreak Tre nye punkter i forløbet og et i talserien.
- `dengue-fl`: 296 lokalt erhvervede tilfælde i 8 counties pr. 3. oktober, Floridas sundhedsmyndigheds ugerapport uge 39: https://www.floridahealth.gov/wp-content/uploads/2026/10/fl-arbovirus-report-w39-2026.pdf Broward County er kommet til. Nyt punkt i forløbet og i talserien.
- `h5n1-us`: nyt punkt 8. oktober efter CIDRAP's gengivelse af USDA: seks nye fund på en uge, blandt andet i Indiana, og 550.000 fugle i 12 kommercielle og 9 baggårdsflokke de seneste 30 dage. Kilde: https://www.cidrap.umn.edu/avian-influenza-bird-flu/usda-notes-more-h5n1-avian-flu-poultry-farms Ny stedknude for Jay County i Indiana.

**Nye**
- `salmonella-eu`: Salmonella Strathcona i ti lande i EU og EØS, heriblandt Danmark. ECDC melder i uge 41 over 160 nye tilfælde i 2026 og omkring 100 mere, der afventer sekventering. Tidligere udbrudsundersøgelser har udpeget små tomater fra Sicilien som kilde. Trin `udbrud`. Kilde: https://www.ecdc.europa.eu/sites/default/files/documents/communicable-disease-threats-report-week-41-2026.pdf
- `gul-feber-gh`: gul feber i Upper West Region i Ghana. Tre laboratoriebekræftede tilfælde, alle døde, og sundhedsministeriet har erklæret udbrud. Trin `udbrud`. Kilder: NaTHNaC https://travelhealthpro.org.uk/outbreaks og Ghana News Agency https://gna.org.gh/2026/10/health-minister-confirms-three-yellow-fever-cases-in-upper-west/
- `mpox-hk`: mpox i Hongkong. Sundhedsmyndigheden CHP melder 10. oktober om en markant stigning: 30 tilfælde i år, heraf 23 lokale, og 21 siden august. Trin `smitte`. Kilde: https://www.info.gov.hk/gia/general/202610/10/P2026101000238.htm
- Set, men ikke taget med: Statens Serum Instituts udbrud af Salmonella Typhimurium ST19 med 33 syge i august, hvor siden senest er redigeret 15. september: https://www.ssi.dk/sygdomme-beredskab-og-forskning/sygdomsudbrud/2026_salmonella_typhimurium_st19 ECDC's månedsoversigt over mæslinger nævner desuden Guatemala med 34.134 tilfælde, Mexico, Canada, Bulgarien, Kosovo og Sverige. Ingen af delene er nye signaler siden forrige kørsel.

**Urørt**
- 20 hændelser uden nyt i kilderne.

**Usikkert**
- `maesling-il`: ECDC kalder udbruddet igangværende 9. oktober, men det nyeste tal er fra 2. september, altså over en måned gammelt. `live` er derfor ikke sat tilbage til `true`. Sundhedsministeriets egne sider på gov.il kunne ikke hentes ad nogen af de to veje. Tallet er læst hos ECDC.
- `gul-feber-gh`: sundhedsministeriets egen meddelelse er ikke fundet på ministeriets eller Ghana Health Service's sider. Tallene er læst to steder, hos NaTHNaC og hos det statslige nyhedsbureau GNA, og de er enige om tre bekræftede tilfælde, alle døde. NaTHNaC er mærket som sekundær kilde, fordi tjenesten gengiver ministeriet. GNA skriver 450 mistænkte tilfælde uden at sige, om det er regionen eller hele landet. Tallet står i `extra` med det forbehold i `gap`.
- `mpox-hk`: CHP oplyser ikke kladen. Hændelsen er derfor ikke koblet til `mpox`, som handler om klade Ib.
- `salmonella-eu`: ECDC oplyser ingen tal pr. land, og der er ikke fundet danske tal for 2026 hos Statens Serum Institut. Hændelsen er placeret i Italien, fordi flere af de syge har boet eller rejst dér, og har stedknuder for alle ti lande. Trinnet er sat til `udbrud` og ikke `spredning`, fordi smitten sker gennem fødevarer.
- `ebola-drc`: ingen opgørelse nyere end 7. oktober. ECDC's ebolaside er senest opdateret 8. oktober kl. 16.25 og har tallene pr. 6. oktober.
- `ebola-ke`: Wajir-resultatet er kun læst i medier. Sundhedsministeriet har ikke udsendt nyt gennem APO Group siden 7. oktober, og ministeriets egen side kunne ikke hentes ad nogen af de to veje. The Star skriver 9. oktober fortsat 66 i karantæne. Nation kunne heller ikke hentes.
- `ebola-nl`: intet nyt om patienten. RIVM's side er senest opdateret 1. oktober.
- `maesling-us`: Pennsylvanias pressemeddelelse fra 9. oktober er ikke fundet på pa.gov. Tallene er læst hos WFMZ, som gengiver den, og Reuters og CIDRAP har de samme tal. US CDC's side kunne kun læses med hentningsværktøjet, ikke direkte. Reuters og CIDRAP er uenige om ugens stigning, 193 eller 194, så den er ikke skrevet.
- `maesling-bd`: ECDC uge 41 skriver 1.040 dødsfald for Bangladesh. Det er kun dødsfaldene blandt mistænkte tilfælde pr. 8. oktober. DGHS' samlede tal er brugt.
- `kolera`: WHO's tal for Afrika og ECDC's globale tal er to forskellige serier med hver sin dato. WHO har flere dødsfald i Afrika alene, end ECDC har globalt. Begge står i `cases` med kilde og dato.
- `polio`: tallene for Nigeria, Tchad og Somalia er fra 30. september, fordi GPEI's ugeside kun nævner lande med nye fund, og GPEI's tælletabeller ikke kunne læses.
- `dengue-fl`: ugerapporten nævner ikke dødsfald. Det ene dødsfald står med sin egen dato fra forløbet.
- `h5n1-us`: tallet for de seneste 30 dage gælder hele USA og er et rullende vindue. Talserien for Midtvesten er ikke ført videre.
- `pest-irkutsk`: intet nyt om patogen eller dødsårsag. Rospotrebnadzors sider kunne ikke hentes ad nogen af de to veje.
- `mpox`: WHO's situationsrapport nummer 70 er fortsat ikke udkommet. `mpox-mo`: US CDC's sider er opdateret 5. oktober med uændret tekst.
- `anthrax-zm`, `difteri-ng`, `cchf-ir`, `mers-sa`, `h5n1-kh`, `sfts-th`, `salmonella-dk` og `h5n1-dk`: søgt, intet nyt fundet.
- Sider, der ikke kunne hentes ad nogen af de to veje: Kenyas sundhedsministerium, Nation, Rospotrebnadzor, gov.il, Zambias sundhedsministerium, ZNBC, Filippinernes sundhedsministerium, Dhaka Tribune, Khmer Times og NU.nl.

**Til gennemgang**
- `maesling-bd`: punktet 8. oktober og talserien har 202.625 mistænkte tilfælde. DGHS' egen pressemeddelelse for 8. oktober har 201.625: https://dghs.gov.bd/pages/press-releases/6ac79bd5693754e6a6881711 The Business Standard skrev 2,02,625. Ikke rettet. Det rigtige tal står i det nye punkt 9. oktober og i `extra`.
- `polio`: punktet 6. oktober siger, at Pakistan bekræfter sit sjette tilfælde. Ifølge nyhedsbureauet APP skete bekræftelsen mandag 5. oktober: https://www.app.com.pk/?p=1286643 Ikke rettet.
- `cyclospora-us`: punktet 5. oktober har 19.883 tilfælde som nationalt sæsontal. Ifølge US CDC er det tallet pr. 15. september for sæsonen 1. maj til 31. august, og siden opdateres ikke længere ugentligt: https://www.cdc.gov/cyclosporiasis/cases/index.html `extra` kalder kilden af lavere kvalitet, selv om tallet er CDC's eget. Ikke rettet.
- `anthrax-zm`: de 26 humane tilfælde gælder ifølge Times of Zambia pr. 28. september. Forløbet og talserien har 30. september, som er Lusaka Times' udgivelsesdato: https://times.co.zm/8000-animals-get-anthrax-vaccine/ Ikke rettet.
- `ebola-ke`: sundhedsministeriets pressemeddelelse hos APO Group skriver, at patienten døde 6. oktober. WHO DON 619 og forløbet har 5. oktober. Ikke rettet.
- `ebola-drc`: punktet 27. august siger, at WHO erklærede udbruddet i Uganda afsluttet den dag. ECDC's ebolaside skriver 25. august, mens ECDC uge 41 skriver 27. august i brødteksten og 25. august i resuméet. Ikke rettet.
- `h5n1-dk`: fundene i sæler stammer fra DK-VET 1. oktober, som ikke står blandt kilderne: https://dkvet.dk/nyheder/2026/hoejpatogen-fugleinfluenza/ Statens Serum Instituts side, der står som kilde, er senest redigeret 17. april og handler om andre pattedyr.
- `maesling-us`: kørslen 8. oktober rettede tallet for hele 2025 fra 2.255 til 2.289 efter US CDC, før reglen om gamle punkter blev ændret. Rettelsen står.
- `ebola-drc`: WHO, ECDC, UKHSA og sundhedsministeriet regner Sydkivu blandt de syv ramte provinser. Datasættet har ingen stedknude for Sydkivu, men en for Kinshasa.
- `ebola-drc`: `note` nævner ikke evakueringen til Storbritannien 21. juli, som ECDC's ebolaside har med.
- `ebola-ke`: `naeste` nævner 28 kontakter. Sundhedsministeriet har 57 pr. 7. oktober, og ministeren nævner 66 i karantæne 8. oktober. `naeste` rettes kun, når trinnet flytter sig, så teksten står.
- `ebola-ke`: forløbet har 3. oktober for både landrejsen til Kampala og ankomsten til Nairobi. WHO AFRO har 2. oktober for landrejsen.
- `pest-irkutsk`: forløbet daterer WHO's opfordring til Rusland til 8. oktober. Al Jazeera og PBS har onsdag 7. oktober. UKHSA's ugeoversigt skriver, at kvinden døde 1. oktober. ECDC uge 41 skriver natten mellem 1. og 2. oktober, som forløbet.
- `OPDATERING.md`, Sådan hentes kilderne: nye veje, der virkede med direkte hentning i denne kørsel. DR Congos daglige situationsrapport ligger på https://insp.cd og udkommer en til to dage efter rapportdatoen. DGHS' mæslingetal står i pressemeddelelser på https://dghs.gov.bd/pages/press-releases og dengue på https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php Sri Lankas dagstal ligger som PDF på https://www.dengue.health.gov.lk og Floridas ugerapport som PDF på https://www.floridahealth.gov om torsdagen. Hongkongs pressemeddelelser ligger på https://www.info.gov.hk/gia/general/ med en side pr. dag.
- `OPDATERING.md`, To veje til en side: hentningsværktøjet afviste i denne kørsel mange adresser, der ikke kom fra et søgeresultat. Direkte hentning var derfor hovedvejen, og US CDC og New Yorks guvernør var de eneste, der kun kunne læses med hentningsværktøjet.
- Repoet har en gren, `udrulning-fra-repo`, ved siden af `main`. Kørslen har ikke rørt den.

## 9. oktober 2026

**Regler ændret.** Ingen gennemgang af kilder og ingen ændrede tal i denne post. Ejeren har godkendt morgenkørslens to forslag til `OPDATERING.md`, og de er ført ind.

- UKHSA's ugeoversigt over udbrud under overvågning er nu den tredje samlede kilde sammen med ECDC's ugerapport og WHO DON. Det var den, der havde Sindbis-tilfældet i Tyskland.
- Afviser hentningsværktøjet en side, skal den forsøges hentet direkte, før kilden opgives eller erstattes af et medie. Det var før et råd og er nu et krav.
- Robert Koch Instituts Epidemiologisches Bulletin og APO Group som vej til Kenyas sundhedsministeriums pressemeddelelser står nu i afsnittet Sådan hentes kilderne.
- Den daglige kørsel starter fremover kl. 5.20 dansk tid, så siden er opdateret inden kl. 6.

**Til gennemgang**
- `maesling-us`: kørslen 8. oktober rettede tallet for hele 2025 fra 2.255 til 2.289 efter US CDC, før reglen om gamle punkter blev ændret. Rettelsen står.
- `ebola-drc`: WHO, ECDC og UKHSA regner Sydkivu blandt de syv ramte provinser. Datasættet har ingen stedknude for Sydkivu, men en for Kinshasa.
- `ebola-drc`: `note` nævner ikke evakueringen til Storbritannien 21. juli, som ECDC's ebolaside har med.
- `ebola-ke`: `naeste` nævner 28 kontakter. Sundhedsministeriet har 57 pr. 7. oktober, og ministeren nævner 66 i karantæne 8. oktober. `naeste` rettes kun, når trinnet flytter sig, så teksten står.
- `ebola-ke`: forløbet har 3. oktober for både landrejsen til Kampala og ankomsten til Nairobi. WHO AFRO har 2. oktober for landrejsen.
- `pest-irkutsk`: forløbet daterer WHO's opfordring til Rusland til 8. oktober. Al Jazeera og PBS har onsdag 7. oktober. UKHSA's ugeoversigt skriver desuden, at kvinden døde 1. oktober, hvor forløbet har natten til 2. oktober.

## 9. oktober 2026

**Gennemgået:** ECDC CDTR uge 40 (seneste udgave, uge 41 var ikke udkommet, da kørslen gik i gang kl. 5.45), WHO DON siden 8. oktober (ingen nye efter DON 619) og UKHSA's ugeoversigt over udbrud under overvågning, uge 40, opdateret 8. oktober. Enkeltkilder: ECDC's ebolaside og ECDC's ugedata for West Nile, dengue og Krim-Congo hæmoragisk feber, US CDC om ebola, mæslinger og mpox, GPEI, RIVM, Statens Serum Institut, Robert Koch Institut, WHO AFRO, PAHO og NaTHNaC samt nyhedsmedier om Kenya, Irkutsk, Israel, Bangladesh, Florida, Pennsylvania, Nigeria og Zambia.

**Ændret**
- `ebola-ke`: to nye punkter i forløbet om kontaktopsporingen. 7. oktober: sundhedsministeriet oplyser 57 identificerede kontakter, heraf ti i karantæne på National Police Service Hospital i Nairobi. Kilden er ministeriets pressemeddelelse, gengivet af APO Group: https://www.africa-newsroom.com/press/kenya-strengthens-ebola-preparedness-and-contact-tracing?lang=en 8. oktober: sundhedsminister Aden Duale oplyser, at 66 formodede kontakter er i karantæne, Citizen Digital: https://citizen.digital/article/health-cabinet-secretary-aden-duale-has-said-that-66-people-suspected-to-have-come-into-contact-with-n391689 `extra` er skrevet om, så de tre opgørelser står med kilde og dato, og WHO AFRO's 28 kontakter pr. 6. oktober er beholdt. `gap` er tilføjet, fordi det samlede antal kontakter er uklart. Begge kilder er tilføjet i `src`. Antallet af tilfælde er uændret: 1 bekræftet og 1 dødsfald.
- `maesling-il`: `live` er sat til `false`. Kontrollen advarede om, at hændelsen stod som aktiv uden nyt punkt i 191 dage. Søgninger på engelsk og hebraisk fandt ingen officielle tal efter 31. marts 2026 og ingen udmeldinger fra det israelske sundhedsministerium den seneste måned. Udbruddet er ikke erklæret afsluttet, og det står fortsat i `note` og `gap`. Ingen andre felter er ændret.

**Nye**
- `sindbis-de`: det første påviste symptomatiske, lokalt erhvervede tilfælde af Sindbis-virus hos et menneske i Tyskland. En 60-årig mand i Baden-Württemberg med symptomdebut 12. juli, laboratoriebekræftet i september og offentliggjort af Robert Koch Institut 1. oktober i Epidemiologisches Bulletin 40/2026: https://www.rki.de/DE/Aktuelles/Publikationen/Epidemiologisches-Bulletin/2026/40_26.pdf?__blob=publicationFile&v=2 UKHSA tog tilfældet med som nyt signal 8. oktober: https://www.gov.uk/government/publications/outbreaks-under-monitoring-in-2026/outbreaks-under-monitoring-week-40-week-ending-4-october-2026 Trin `udbrud`, ikke markeret som aktiv, da der er tale om ét tilfælde fra juli.

**Urørt**
- 32 hændelser uden nyt i kilderne.

**Usikkert**
- `ebola-ke`: tallene for kontakter hænger ikke sammen. Citizen Digital gengiver ministeren 8. oktober med både 57 identificerede kontakter og 66, der er gjort rede for og i karantæne. Nation skriver også 66 i karantæne i sin overskrift, men artiklen kunne ikke hentes. Sundhedsministeriets egen side kunne ikke hentes, så pressemeddelelsen fra 7. oktober er læst hos APO Group, der udsender den på ministeriets vegne, og kilden er mærket som medie. Begge tal står i forløbet med hver sin kilde, og uklarheden står i `gap`.
- `maesling-il`: at kilderne er tavse, bygger på søgninger. En artikel i JAMA Health Forum om udbruddets alvor og de to artikler i CDC's tidsskrift EID kunne ikke hentes i denne kørsel, så deres datoer er ikke kontrolleret. Findes der nyere officielle tal, bør `live` sættes tilbage.
- `sindbis-de`: bopælen er ikke offentliggjort nærmere end et bydistrikt i Baden-Württemberg, så hændelsen er placeret midt i delstaten. Laboratoriebekræftelsen er kun dateret til september. Første punkt i forløbet har trinnet `mistanke`, fordi diagnosen ikke var stillet ved symptomdebut.
- `ebola-drc`: ingen opgørelse nyere end 6. oktober. ECDC's ebolaside, senest opdateret 8. oktober kl. 16.25, har fortsat 8.728 bekræftede og 4.205 døde. US CDC's side, opdateret 8. oktober, viser nu de samme tal pr. 6. oktober. `extra` nævner fortsat US CDC's tal pr. 5. oktober. UKHSA's ugeoversigt har 8.603 og 4.148 pr. 4. oktober, altså ældre. Ingen ændring.
- `pest-irkutsk`: intet nyt. Ingen dødsårsag og intet patogen er navngivet, og der er ikke fundet meldinger om, at Rusland har svaret WHO. Ingen ændring.
- `maesling-us`: US CDC står fortsat på 3.887 bekræftede tilfælde pr. 1. oktober, opdateret 2. oktober. Pennsylvania har ikke opgjort noget nyere end 7. oktober. Ingen ændring.
- `dengue-asien` og `maesling-bd`: ingen DGHS-tal nyere end 8. oktober var ude, da kørslen gik. Ingen ændring.
- `dengue-fl`: Fox 13 skrev 7. oktober, at delstatens ugeopgørelse for 27. september til 3. oktober var ventet samme dag. Ingen nye tal er fundet, og medierne skriver fortsat 252. Ingen ændring.
- `polio`: GPEI's side står fortsat pr. 30. september. Ingen ændring.
- `wnv-eu`, `dengue-eu`, `chik-fr` og `cchf-es`: ECDC's ugedata er uændrede siden uge 40. Afventer CDTR uge 41, som ventes senere i dag.
- `mpox`: WHO's situationsrapport nummer 70 er fortsat ikke fundet. `mpox-mo`: US CDC's side er opdateret 5. oktober med uændret tekst.
- `h5n1-us`: en CIDRAP-artikel om tre kalkunfarme i Minnesota bar ingen dato, og dens tal passer ikke med datasættets periode. Ikke brugt.

**Til gennemgang**
- `maesling-us`: kørslen 8. oktober rettede tallet for hele 2025 fra 2.255 til 2.289 efter US CDC, før reglen om gamle punkter blev ændret. Rettelsen står.
- `ebola-drc`: WHO, ECDC og UKHSA regner Sydkivu blandt de syv ramte provinser. Datasættet har ingen stedknude for Sydkivu, men en for Kinshasa.
- `ebola-drc`: `note` nævner ikke evakueringen til Storbritannien 21. juli, som ECDC's ebolaside har med.
- `ebola-ke`: `naeste` nævner 28 kontakter. Sundhedsministeriet har 57 pr. 7. oktober, og ministeren nævner 66 i karantæne 8. oktober. `naeste` rettes kun, når trinnet flytter sig, så teksten står.
- `ebola-ke`: forløbet har 3. oktober for både landrejsen til Kampala og ankomsten til Nairobi. WHO AFRO har 2. oktober for landrejsen.
- `pest-irkutsk`: forløbet daterer WHO's opfordring til Rusland til 8. oktober. Al Jazeera og PBS har onsdag 7. oktober. UKHSA's ugeoversigt skriver desuden, at kvinden døde 1. oktober, hvor forløbet har natten til 2. oktober.
- `OPDATERING.md`, Sådan hentes kilderne: UKHSA's ugeoversigt på https://www.gov.uk/government/publications/outbreaks-under-monitoring-in-2026 opdateres om torsdagen og kan hentes direkte. Den havde Sindbis-tilfældet i Tyskland, som hverken ECDC uge 40 eller WHO DON nævner, og kunne stå som tredje samlede kilde. Robert Koch Instituts Epidemiologisches Bulletin kan også hentes direkte.
- `OPDATERING.md`, To veje til en side: i denne kørsel er sider, som hentningsværktøjet afviste, ikke forsøgt hentet direkte. Det gjaldt Kenyas sundhedsministerium, CDC's tidsskrift EID, JAMA, Science, Nation, Daily Star og CIDRAP's nyhedsoversigt. Kenyas sundhedsministeriums pressemeddelelser kan læses hos APO Group på https://www.africa-newsroom.com

## 8. oktober 2026

**Regler og side ændret.** Ingen gennemgang af kilder og ingen ændrede tal i denne post.

- Hvert nyt punkt i et forløb bærer nu sin egen kilde, som vises under punktet på siden. Otte punkter har fået kilden sat på: de seks fra aftenens opdatering samt punkterne 23. september og 5. oktober i `ebola-drc`, som bygger på WHO DON 618 og US CDC.
- Automatiske kørsler retter ikke længere i gamle punkter. Det, kun ejeren må rette, står fremover under Til gennemgang.
- Overskriftslinjen advarer selv, hvis der går mere end to dage uden en gennemgang.
- Denne log er nu offentlig på https://globus.nicco.dk/log, og siden linker til den fra foden.
- Kontrollen afviser nye punkter uden kilde. Den advarer om tal uden opgørelsesdato, som 28 hændelser har, om `maesling-il`, der står som aktiv uden nyt siden 31. marts, og om kildeadresser, der ikke svarer.

**Til gennemgang**
- `maesling-us`: kørslen tidligere i aften rettede tallet for hele 2025 fra 2.255 til 2.289 efter US CDC, før reglen om gamle punkter blev ændret. Rettelsen står.
- `ebola-drc`: WHO og ECDC regner Sydkivu blandt de syv ramte provinser. Datasættet har ingen stedknude for Sydkivu, men en for Kinshasa.
- `ebola-drc`: `note` nævner ikke evakueringen til Storbritannien 21. juli, som ECDC's ebolaside har med.
- `ebola-ke`: `naeste` nævner 28 kontakter. Kenyanske medier gengiver ministeren med 57 i alt, heraf 10 i karantæne.
- `ebola-ke`: forløbet har 3. oktober for både landrejsen til Kampala og ankomsten til Nairobi. WHO AFRO har 2. oktober for landrejsen.
- `pest-irkutsk`: forløbet daterer WHO's opfordring til Rusland til 8. oktober. Al Jazeera og PBS har onsdag 7. oktober.

## 8. oktober 2026

**Gennemgået:** ECDC CDTR uge 40 (seneste udgave, uge 41 er ikke udkommet), WHO DON siden 8. oktober (DON 619). Enkeltkilder: ECDC's ebolaside, US CDC om ebola og mæslinger, WHO AFRO, RIVM, GPEI, ECDC's West Nile ugeside, ECDC om Irkutsk, Statens Serum Institut, Pennsylvanias sundhedsmyndighed, UKHSA, NaTHNaC, CIDRAP, Africa CDC og PAHO samt nyhedsmedier om Kenya, Irkutsk, Bangladesh og Florida. Første automatiske kørsel. `DATA_DATO` stod allerede på 8. oktober og er uændret.

**Ændret**
- `ebola-drc`: tal opdateret til 8.728 bekræftede og 4.205 døde, WHO DON 619 pr. 6. oktober. ECDC's ebolaside har samme tal. 64 sundhedszoner mod 63 før, dødelighed 48,2 procent. Nyt punkt i forløbet om Alimbongo i Nordkivu og nyt punkt i talserien. US CDC's tal pr. 5. oktober er flyttet til `extra`. I `src` er WHO DON 618 erstattet af DON 619, som reglen om samme rapportserie siger. Punktet 23. september bygger fortsat på DON 618: https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON618
- `ebola-ke`: to nye punkter i forløbet 8. oktober. Et mistænkt tilfælde i Wajir testede foreløbigt negativt, The Standard med amtets guvernør som kilde. WHO DON 619 omtaler tilfældet: formodet smitte under behandling for anden sygdom, sikker begravelse, fortsat kontaktopsporing og risikovurdering for Kenya på vej. Begge kilder tilføjet.
- `ebola-nl`: nyt punkt i forløbet 8. oktober. WHO DON 619 oplyser, at patienten fortsat er i behandling, og at tilfældet ikke tælles som lokalt. Kilden tilføjet.
- `maesling-us`: Pennsylvania opdateret til 1.078 tilfælde i 41 counties, 207 indlagte og 5 dødsfald, delstatens sundhedsmyndighed pr. 7. oktober. Nyt punkt i forløbet, kilden tilføjet.
- `maesling-us`: gammelt punkt rettet. Tallet for hele 2025 er ændret fra 2.255 til 2.289 i forløbets første punkt og i `extra`, fordi US CDC's side nu skriver 2.289 for hele 2025 og oplyser, at tallene er foreløbige og kan ændres. Kilden har altså rettet sig selv.
- `dengue-asien`: Bangladesh opdateret til 94.151 indlagte og 294 døde, DGHS pr. 8. oktober via The Business Standard. Nyt punkt i forløbet, kilden tilføjet. Daily Star er beholdt som kilde til de tidligere tal.

**Nye**
- Ingen. WHO har ikke meldt nye hændelser siden forrige kørsel, og ECDC har ikke udgivet en ny ugerapport. UKHSA's indlæg 8. oktober om covid-varianter beskriver en almindelig sæsonstigning med en kendt variant og er ikke taget med.

**Urørt**
- 29 hændelser uden nyt i kilderne.

**Usikkert**
- `ebola-ke`: antallet af kontakter er ikke ændret. WHO AFRO skrev 28 kontakter plus 23 passagerer og 4 besætningsmedlemmer 6. oktober. Kenyanske medier gengiver sundhedsministeren med 27 kontakter (Capital FM 7. oktober) og 57 kontakter i alt, heraf 10 i karantæne (Eastleigh Voice 8. oktober). Sundhedsministeriets egen side kunne ikke hentes, og det er uklart, om 57 er en ny optælling eller summen af de tre grupper. `naeste` nævner fortsat 28 kontakter.
- `ebola-ke`: WHO AFRO daterer landrejsen til Kampala til 2. oktober og ankomsten til Nairobi til 3. oktober. Forløbet og stedknuden for Kampala har 3. oktober for begge. Ikke rettet.
- `ebola-drc`: WHO og ECDC regner Sydkivu blandt de syv ramte provinser, ECDC med 3 tilfælde. Datasættet har ingen stedknude for Sydkivu, men en for Kinshasa. Kilderne oplyser ikke, hvornår Sydkivu kom til, så ingen knude er tilføjet.
- `ebola-drc`: ECDC's ebolaside nævner også en evakuering til Storbritannien 21. juli. `note` nævner Uganda, Tyskland, Frankrig, Nederlandene og Kenya. Ikke rettet.
- `ebola-drc`: DON 619 skriver både 379 og 372 dødsfald siden forrige DON. Ingen af de to tal er brugt.
- `maesling-us`: US CDC's seneste landstal er 3.887 bekræftede tilfælde pr. 1. oktober i 47 jurisdiktioner, opdateret 2. oktober. Datasættets "over 3.800" pr. 5. oktober kommer fra medier og er ladt stå, fordi CDC ikke har opgjort noget nyere. CDC's side kunne kun læses gennem hentningsværktøjet, ikke direkte, og tallet 2.289 er læst tre gange ad den vej.
- `pest-irkutsk`: intet nyt. WHO har ikke fået svar fra Rusland. Al Jazeera og PBS daterer WHO's opfordring til onsdag 7. oktober, mens forløbet har 8. oktober. Ikke rettet.
- `dengue-fl`: ingen ugeopgørelse efter uge 38 pr. 26. september er fundet. Ingen ændring.
- `polio`: GPEI's side står fortsat pr. 30. september. Ingen ændring.
- `wnv-eu`, `dengue-eu`, `chik-fr`: afventer ECDC CDTR uge 41.
- `mpox`: WHO's situationsrapport nummer 70 er fortsat ikke fundet.

## 8. oktober 2026

**Udgangspunkt.** Datasættet er sammenstillet manuelt: 34 hændelser med 219 daterede forløbspunkter og 115 stedknuder. Ingen automatisk kørsel har rørt det endnu.
