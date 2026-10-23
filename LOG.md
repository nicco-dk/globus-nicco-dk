# Log over opdateringer af datasættet

Én post pr. kørsel, nyeste øverst. Formatet står i `OPDATERING.md`.

## 23. oktober 2026

### Kl. 00.20, Europa og Danmark

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 22. oktober er fortsat den nyeste og står på siden) og dengue (dashboardet pr. 22. oktober, står på siden), WHO SEARO nummer 21, WHO WPRO nummer 1066, ECDC uge 42 (uge 43 kommer fredag), UKHSA (ugeoversigten for uge 42 er læst af kl. 17-kørslen), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Sri Lankas side kunne ikke hentes af scriptet. Statens Serum Instituts liste over aktuelle sygdomsudbrud (senest redigeret 7. oktober, intet nyt), DK-VET's nyheder (intet nyt), RIVM's ebolaside (nyeste opdatering 21. oktober om Nigeria, intet nyt om `ebola-nl`), RKI's Epidemiologisches Bulletin 43/2026 22. oktober (Verdenspoliodagen og elektroniske anmeldelser, intet udbrud) og ECDC's nyheder (Shamonda-virus 22. oktober, indarbejdet). Kvalitet: kontrollen gav ingen advarsler, heller ingen om tal i `cases` uden opgørelsesdato, så vagtplanens opgave med tre sådanne hændelser havde intet at rette.

**Ændret**
- Ingen eksisterende hændelser.

**Nye**
- `shamonda-fr`: første dokumenterede infektion med Shamonda-virus hos et menneske, en stærkt immunsvækket patient behandlet på Hospices civils de Lyon, der døde i begyndelsen af oktober. Meldt af de franske sundhedsmyndigheder i en pressemeddelelse fra Frankrigs landbrugsministerium 22. oktober: https://agriculture.gouv.fr/virus-shamonda-une-premiere-detection-chez-letre-humain og fulgt op af ECDC samme dag: https://www.ecdc.europa.eu/en/news-events/severely-ill-patient-france-becomes-first-ever-human-infected-shamonda-virus Trinnet er `udbrud` (ét laboratoriebekræftet tilfælde, ingen smitte mellem mennesker). Første punkt i forløbet har trinnet `reservoir` for fundet hos landbrugsdyr i Europa fra juli, efter ECDC. Begge sider er læst som rå tekst. Placeret i Lyon, hvor patienten blev behandlet. Smittestedet er efter myndighedernes hypotese det østlige Frankrig, og det står i `gap`.
- Set, men ikke taget med: Usutu-virus i Italien, 18 tilfælde i 2026 pr. 14. oktober (NaTHNaC 22. oktober), som ingen myndighed kalder usædvanligt.

**Urørt**
- 45 hændelser uden nyt i kilderne.
- `ebola-nl`: intet nyt hos RIVM, lukkes efter planen 21. november. `h5n1-dk` og `salmonella-dk`: intet nyt fra DK-VET og Statens Serum Institut. `wnv-eu`, `chik-fr`, `dengue-eu`, `cre-eu` og `salmonella-eu` venter på ECDC's ugerapport fredag.

**Usikkert**
- `shamonda-fr`: det er ikke fastslået, om virusset forårsagede dødsfaldet, og patientens alder og bopæl er ikke oplyst. Pressemeddelelsen ligger på landbrugsministeriets side, men er udsendt af sundhedsmyndighederne sammen med sundhedsministeriets krisecenter.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 7260bb2.

**Til gennemgang**
- Intet nyt.

### Kl. 05.20, bred gennemgang

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 22. oktober er fortsat den nyeste og står på siden) og dengue (dashboardet pr. 22. oktober, står på siden), WHO SEARO nummer 21, WHO WPRO nummer 1066, ECDC uge 42 (uge 43 kommer i dag), UKHSA (ugeoversigten for uge 42 er læst af kl. 17-kørslen 22. oktober), Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (intet om smitte i dag og i går). Scriptet kunne ikke hente Sri Lankas side og NaTHNaC's RSS (HTTP 307, og direkte gav det et tomt svar). DR Congos situationsrapporter gennem insp.cd's medieliste (159 er fortsat den nyeste), ECDC's ebolaside (tal pr. 19. oktober, ældre end dem på siden) og ECDC's nyheder (intet efter Shamonda-virus 22. oktober), Africa CDC's ugerapport (den nyeste på siden er udgaven 11. oktober, som er læst), PAHO (myiasis 16. oktober og dengue og chikungunya 20. oktober er indarbejdet, ingen ny situationsrapport om mæslinger), US CDC's mæslingeside (fortsat pr. 15. oktober, opdateret 16. oktober), Pennsylvanias sundhedsmyndighed, Floridas ugerapport uge 41, WHO's mpox-situationsrapporter (nummer 70 findes fortsat ikke), GPEI og søgninger efter nyt om ebola i Kenya og Nigeria.

**Ændret**
- `dengue-fl`: 425 lokalt erhvervede tilfælde i 11 counties, Floridas sundhedsmyndighed pr. 17. oktober, ugerapport uge 41: https://www.floridahealth.gov/wp-content/uploads/2026/10/fl-arbovirus-report-w41-2026.pdf 57 nye på en uge. Hillsborough 346, Pinellas 51, Miami-Dade 9, Orange 8, Pasco 4 og Citrus 2, mens Brevard, Broward, Manatee, Palm Beach og Polk har ét hver. Brevard, Citrus og Manatee er nye. Nyt punkt i forløbet og i talserien, `cases` og `extra` opdateret, og ugerapport uge 40 er erstattet af uge 41 i `src`. Punktet 10. oktober bærer selv adressen til uge 40. Tallene er læst i PDF'ens tekst og som billede af første side. Outbreak News Today nævner 22. oktober et humant tilfælde af østlig hesteencephalitis (EEE) i Florida. Ugerapporten har ét humant fund i 2026, men ingen i uge 41, og det er ikke en del af denguehændelsen.
- `maesling-us`: Pennsylvania 1.317 tilfælde i 43 counties, 251 indlagte og 5 bekræftede mæslingeassocierede dødsfald, delstatens sundhedsmyndighed 21. oktober: https://www.pa.gov/agencies/health/newsroom/pa-department-of-health-nurses-surpass-10-000-mmr-vaccines-admin 31 nye tilfælde siden 19. oktober, og Washington County er kommet til. Nyt punkt i forløbet, `extra` og `src` opdateret. Dødsfaldet i Franklin County undersøges fortsat af delstaten (CIDRAP 20. oktober). `cases` er uændret, fordi US CDC's landstal fortsat er pr. 15. oktober.

**Nye**
- Ingen. Set, men ikke taget med: syfilis i Costa Rica (Outbreak News Today 22. oktober), som ikke er et udbrud af den slags, siden viser, og mæslinger i Kentucky med 174 tilfælde (Outbreak News Today 19. oktober), som hører under landstallet i `maesling-us`.

**Urørt**
- 44 hændelser uden nyt i kilderne.
- Rundtur, slået op uden nyt: `kolera` 15 dage, `difteri-ng` 29, `mpox` 10, `anthrax-zm` 25, `pest-irkutsk` 11, `ebola-nl` 13, `cre-eu` 21, `h5n1-dk` 22, `salmonella-dk` 22, `h5n1-kh` 14, `altnv-cn` 25, `dengue-asien` 11, `kolera-ye` 10, `maesling-am` 20, `h5n1-us` 15, `mpox-mo` 23, `cyclospora-us` 18, `salmonella-eu` 14 og `gul-feber-gh` 14 dage siden seneste punkt. `kolera`, `cre-eu` og `salmonella-eu` venter desuden på ECDC's ugerapport i dag. De nyeste fund om `gul-feber-gh` (sundhedsministerens pressemøde 9. oktober), `pest-irkutsk` (Bernama 9. oktober) og `h5n1-us` (CIDRAP 8. oktober) står allerede på siden.
- `ebola-drc`, `ebola-ke` og `ebola-ng`: intet nyere end tallene på siden. Situationsrapport 160 er ikke i insp.cd's medieliste.

**Usikkert**
- `difteri-ng`: 29 dage uden nyt punkt. NCDC's seneste situationsrapporter, som søgningen gav, er fra januar, og intet nyere end WHO AFRO's tal pr. uge 34 er fundet. Næste kørsel får kontrollens advarsel om 30 dage og skal tage stilling til `live`.
- `dengue-asien`: Sri Lankas side kunne ikke hentes af scriptet. Hører til kl. 11-kørslen.
- NaTHNaC's RSS https://travelhealthpro.org.uk/rss-outbreaks.php gav HTTP 307 i scriptet og et tomt svar direkte, og hentningsværktøjets opslag af https://travelhealthpro.org.uk/outbreaks blev ikke godkendt i tide. NaTHNaC er derfor ikke læst i denne kørsel.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit ba2e6d7.

**Mediesporet**
- To par havde status afventer i https://globus.nicco.dk/konflikter.json (genereret 23. oktober kl. 02.25 UTC).
- Afvist: `FR-US`. Artiklerne handler om Donald Trumps udtalelser om urolighederne i Frankrig og om en retssag i Massachusetts, ikke om kampe mellem landenes styrker (The Guardian 19. oktober: https://www.theguardian.com/us-news/2026/oct/19/trump-france-protests og RNZ 22. oktober: https://www.rnz.co.nz/news/world/2093680/looksmaxxing-influencer-clavicular-brings-dog-to-court-pleads-not-guilty-to-2025-rape-in-massachusetts).
- Afvist: `IL>PS` (militær støtte). Artiklerne handler om bosættervold på Vestbredden og en diplomatisk strid mellem Storbritannien og Israel, ikke om levering af våben, tropper eller udstyr fra Israel til Palæstina (The Daily Star 22. oktober: https://www.thedailystar.net/opinion/views/news/israeli-settler-terror-thrives-impunity-and-silence-4305016 og Anadolu 7. oktober: https://aa.com.tr/en/middle-east/explainer-how-a-dispute-over-illegal-israeli-settlements-led-to-a-britain-israel-diplomatic-crisis/4081445).
- Godkendt: ingen.

**Til gennemgang**
- Intet nyt.

## 22. oktober 2026

### Kl. 00.20, Europa og Danmark

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (ny meddelelse 21. oktober, indarbejdet) og dengue (dashboardet pr. 21. oktober, står på siden), WHO SEARO nummer 20, WHO WPRO nummer 1066, ECDC uge 42 (uge 43 kommer fredag), UKHSA (ingen ny ugeoversigt, den kommer torsdag), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (intet om smitte til siden). Sri Lankas side kunne ikke hentes af scriptet. Statens Serum Instituts liste over aktuelle sygdomsudbrud (senest redigeret 7. oktober, intet nyt), DK-VET's nyheder (nyeste er dværgbændelorm hos ræve 7. oktober, som ikke er smitteudbrud hos mennesker, og fugleinfluenza i sæler 1. oktober, som står på siden), RKI's Epidemiologisches Bulletin 42/2026 15. oktober (STIKO's anbefaling af vaccination mod influenza A(H5) til udsatte faggrupper, intet udbrud) og ECDC's nyheder (intet nyt efter 1. oktober). Kvalitet: koordinaterne i alle 45 hændelser er sammenholdt med deres knuder uden fund, og kontrollen gav ingen advarsler om tal i `cases` uden opgørelsesdato.

**Ændret**
- `maesling-bd`: 216.765 mistænkte og 23.212 bekræftede tilfælde, 1.101 dødsfald blandt mistænkte og 104 blandt bekræftede tilfælde, DGHS pr. 21. oktober: https://dghs.gov.bd/pages/press-releases/6ad8f82c5703c40cec8212f5 997 nye mistænkte og 13 nye bekræftede tilfælde på et døgn og 1 dødsfald blandt mistænkte, i Habiganj i Sylhet-divisionen. 192.695 indlagt og 185.110 udskrevet siden 15. marts. Nyt punkt i forløbet og i talserien (dødstallet 1.205 er de to rækker lagt sammen efter reglen), `cases`, `extra` og `src` opdateret. Punktet 20. oktober bærer selv den gamle adresse. Tallene er læst i PDF-bilaget som tekst og som billede af første side. Meddelelsen hører normalt til kl. 17-kørslen, men var ude nu.

**Nye**
- Ingen. Set, men ikke taget med: NaTHNaC meldte 21. oktober ét tilfælde af cirkulerende vaccineafledt poliovirus type 2 i Kenya i 2026. Det hører under `polio`, når GPEI's ugeoversigt nævner det, og overlades til kl. 05-kørslen.

**Urørt**
- 44 hændelser uden nyt i kilderne.
- `ebola-nl`: RIVM's ebolaside kunne ikke hentes i denne kørsel, se Usikkert. Lukkes efter planen 21. november. `h5n1-dk` og `salmonella-dk`: intet nyt fra DK-VET og Statens Serum Institut. `wnv-eu`, `chik-fr`, `dengue-eu`, `cre-eu` og `salmonella-eu` venter på ECDC's ugerapport fredag.

**Usikkert**
- RIVM's side https://www.rivm.nl/ebola/actuele-informatie kunne hverken hentes direkte (forbindelsen afbrudt) eller med hentningsværktøjet (afvist af sidens robots.txt). Den engelske side er senest opdateret 11. juni og nævner ikke patienten.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 85f4a0a.

**Til gennemgang**
- Intet nyt.

### Kl. 05.20, bred gennemgang

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 21. oktober er fortsat den nyeste og står på siden) og dengue (dashboardet pr. 21. oktober, står på siden), WHO SEARO nummer 21 (ny, 21. oktober, men tallene for Bangladesh er ældre end DGHS' egne på siden, og Sri Lanka har ingen data efter uge 37), WHO WPRO nummer 1066, ECDC uge 42 (uge 43 kommer fredag), UKHSA (ingen ny ugeoversigt endnu, den kommer torsdag), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (intet om smitte til siden). Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapporter gennem insp.cd's medieliste (159 er ny), GPEI's Polio This Week (fortsat pr. 14. oktober), US CDC's mæslingeside (fortsat pr. 15. oktober, opdateret 16. oktober), Africa CDC's nyheder, PAHO's mæslingeside (ingen ny situationsrapport fundet) og søgninger efter nyt om ebola i Kenya og Nigeria og polio i Pakistan.

**Ændret**
- `ebola-drc`: 9.704 bekræftede tilfælde og 4.687 dødsfald, DR Congos sundhedsministerium pr. 20. oktober, situationsrapport 159: https://insp.cd/wp-content/uploads/2026/10/SITREP_MVEBDB_159_20_10_2026.pdf 67 nye tilfælde på et døgn, 37 i Ituri, 29 i Nordkivu og 1 i Tshopo, og 41 nye dødsfald, heraf 23 i lokalsamfundet og 18 på behandlingscentre. Ingen nye sundhedszoner. Nyt punkt i forløbet og i talserien, `cases` og `extra` opdateret, og situationsrapport 158 er erstattet af 159 i `src`. Punktet 20. oktober bærer selv adressen til 158. Tallene er læst som tekst og som billede af første side.

**Nye**
- Ingen. Set, men ikke taget med: Mauretanien melder et tilfælde af Rift Valley-feber og endnu et af krim-kongo-blødningsfeber (Outbreak News Today 21. oktober), som ikke er usædvanligt for sæsonen ifølge nogen myndighed, og NaTHNaC's melding om vaccineafledt poliovirus type 2 i Kenya, som GPEI endnu ikke har med.

**Urørt**
- 44 hændelser uden nyt i kilderne.
- `polio`: Pakistans syvende tilfælde i Karachi står allerede som punkt 19. oktober. GPEI's oversigt er fortsat pr. 14. oktober, så `cases` er uændret. `ebola-ke`: fortsat 9 tilfælde, Premium Times via AllAfrica 21. oktober. `ebola-ng`: fortsat ét tilfælde. Daily Trust skriver 21. oktober, at NCDC oplyser, at patientens tilstand er forværret. Ikke indarbejdet, fordi NCDC's egen udmelding ikke er fundet. `maesling-us` og `maesling-am`: ingen nye opgørelser fra US CDC og PAHO.
- Rundtur: hændelserne uden nyt punkt i 10 dage blev slået op af kørslen kl. 05.20 21. oktober uden nyt. I denne kørsel er `h5n1-us` søgt hos CIDRAP uden en dateret ny melding, `maesling-am` hos PAHO uden ny situationsrapport, og `polio` hos GPEI. `dengue-fl` venter på Floridas ugerapport torsdag, `kolera`, `cre-eu` og `salmonella-eu` på ECDC's ugerapport fredag.

**Usikkert**
- `ebola-ng`: patientens tilstand er kun oplyst gennem Daily Trust, medie. Ingen ændring.
- `dengue-asien`: Sri Lankas side kunne ikke hentes af scriptet. Hører til kl. 11-kørslen.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 903e8ab, som er det samme commit som nicco-dk/globus-nicco-dk viser.

**Mediesporet**
- To par havde status afventer i https://globus.nicco.dk/konflikter.json (genereret 22. oktober kl. 02.23 UTC).
- Afvist: `FR-PS`. Artiklerne handler om bosætteres angreb på europæiske diplomater og en fransk borgmester på Vestbredden og om en amerikansk kandidat, der blev tilbageholdt, ikke om kampe mellem franske og palæstinensiske styrker (RTÉ 21. oktober: https://www.rte.ie/news/us/2026/1021/1596309-brad-lander/ og Reuters via Al-Monitor 18. oktober: https://www.al-monitor.com/originals/2026/10/us-wants-israel-crack-down-settler-violence-west-bank-rubio-says).
- Afvist: `SY>SA`. Syrien overvejer militær hjælp til Saudi-Arabien, og landene har drøftet at sende op til 10.000 syriske soldater til krigen mod Houthi-bevægelsen, men ingen levering af våben, tropper eller udstyr er beskrevet (Reuters via Middle East Eye 7. oktober: https://www.middleeasteye.net/live-blog/live-blog-update/syria-weighs-military-aid-saudi-arabia-amid-yemen-war-sources-say og CBS News 21. oktober: https://www.cbsnews.com/live-updates/iran-war-trump-us-ceasefire-talks-ongoing/).
- Godkendt: ingen.

**Til gennemgang**
- Intet nyt.

### Kl. 11.20, Asien og Mellemøsten: intet nyt
Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 21. oktober er fortsat den nyeste og står på siden, dagens er normalt ikke ude kl. 11) og dengue (dashboardet pr. 21. oktober, står på siden), WHO SEARO nummer 21 (21. oktober, tallene for Bangladesh er ældre end DGHS' egne på siden), WHO WPRO nummer 1066 (ingen nye humane tilfælde 9. til 15. oktober, nummer 1067 ventes fredag), ECDC uge 42, UKHSA (ugeoversigten for uge 42 var ikke lagt ud kl. 11.25, seneste er uge 41), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser 21. og 22. oktober (et dødsfald efter influenza hos et barn 21. oktober, almindelig sæson, intet om smitte til siden). Søgninger efter nyt om fugleinfluenza hos mennesker i Kambodja og Kina, polio i Pakistan, pest i Irkutsk, mpox i Hongkong og dengue i Sri Lanka, uden nyere udmeldinger end dem på siden. Urørt: 45 hændelser, heraf rundturen `pest-irkutsk` 10 dage, `h5n1-kh` 13, `dengue-asien` 10 og `altnv-cn` 24 dage siden seneste punkt. Usikkert: Sri Lankas dengueside https://www.dengue.health.gov.lk/ kunne hverken hentes af scriptet, direkte (forbindelsen afbrudt) eller med hentningsværktøjet (afvist af sidens robots.txt), så `dengue-asien` står fortsat med tal pr. 12. oktober. WHO EMRO's nyhedsside gav kun en gammel udgave gennem hentningsværktøjet. Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 121005b. Til gennemgang: intet nyt.

### Kl. 17.20, Afrika og Amerika

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (ny meddelelse 22. oktober, indarbejdet) og dengue (dashboardet pr. 22. oktober, indarbejdet), WHO SEARO nummer 21, WHO WPRO nummer 1066, ECDC uge 42 (uge 43 kommer fredag), UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (intet om smitte til siden). Sri Lankas side kunne ikke hentes af scriptet. UKHSA's ugeoversigt for uge 42, lagt ud 22. oktober: https://www.gov.uk/government/publications/outbreaks-under-monitoring-in-2026/outbreaks-under-monitoring-week-42-week-ending-16-october-2026 (ebola, fugleinfluenza i Washington, MERS og argentinsk hæmoragisk feber, som er endemisk, intet nyt til siden). DR Congos situationsrapporter gennem insp.cd's medieliste (159 er fortsat den nyeste), Africa CDC's ugerapport (udgaven 11. oktober, ældre end tallene på siden), WHO AFRO (ugebulletinen for uge 41 er indarbejdet 21. oktober, ingen nyere fundet), PAHO (opdateringen om dengue og chikungunya 20. oktober er indarbejdet), US CDC's mæslingeside (fortsat pr. 15. oktober, opdateret 16. oktober) og søgninger efter nyt om ebola i Kenya og Nigeria.

**Ændret**
- `maesling-bd`: 217.760 mistænkte og 23.248 bekræftede tilfælde, 1.103 dødsfald blandt mistænkte og 104 blandt bekræftede tilfælde, DGHS pr. 22. oktober: https://dghs.gov.bd/pages/press-releases/6ad9f6519422db94cd42950c 995 nye mistænkte og 36 nye bekræftede tilfælde på et døgn og 2 dødsfald blandt mistænkte, begge i Dhaka-distriktet. 193.608 indlagt og 185.927 udskrevet siden 15. marts. Nyt punkt i forløbet og i talserien (dødstallet 1.207 er de to rækker lagt sammen efter reglen), `cases`, `extra` og `src` opdateret. Punktet 21. oktober bærer selv den gamle adresse. Tallene er læst i PDF-bilaget som tekst og som billede af første side.
- `dengue-bd`: 118.502 indlagte og 368 dødsfald i 2026, DGHS pr. 22. oktober: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php 1.512 nye indlagte og 4 nye dødsfald på et døgn, uge 42 har indtil videre 8.190 tilfælde og 26 dødsfald. Nyt punkt i forløbet og i talserien, `cases` opdateret. Læst i scriptets udtræk og i sidens rå tekst.
- `ebola-ng`: nyt punkt 21. oktober. NCDC oplyser på et beredskabsmøde, at patientens tilstand er forværret til svigt af flere organer, og at 44 nære kontakter følges, gengivet af Blueprint, medie: https://blueprint.ng/ncdc-reveals-real-identify-of-ebola-patient-in-dire-situation-us-issues-health-advisory/ Daily Trust skrev det samme 21. oktober. Kilden er tilføjet i `src`. `cases` er uændret.

**Nye**
- Ingen.

**Urørt**
- 42 hændelser uden nyt i kilderne.
- `ebola-drc`: situationsrapport 160 findes endnu ikke i insp.cd's medieliste. `ebola-ke`: fortsat 9 bekræftede tilfælde og 1 dødsfald. Sundhedsministeriet skriver ifølge Citizen Digital 22. oktober, at der ingen nye tilfælde er, og at de otte patienter i behandling er stabile: https://citizen.digital/article/kenya-reports-zero-new-ebola-cases-as-govt-says-end-of-outbreak-within-reach-n392534 `maesling-us`: US CDC havde kl. 17.30 endnu ikke opdateret onsdagens tal, siden står fortsat pr. 15. oktober.

**Usikkert**
- `ebola-ng`: patientens tilstand er kun oplyst gennem medier, der gengiver NCDC. NCDC's egen udmelding er ikke fundet.
- `maesling-us`: US CDC's ugentlige opdatering mangler en dag efter det sædvanlige. Næste kørsel bør se efter den.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit f135158.

**Mediesporet**
- Ét par havde status afventer i https://globus.nicco.dk/konflikter.json (genereret 22. oktober kl. 15.23 UTC).
- Afvist: `HT-SV`. Fire salvadoranske soldater fra den FN-støttede Gang Suppression Force, som støtter Haitis sikkerhedsstyrker, blev angrebet og bortført af kriminelle bander nær Croix-des-Bouquets, og El Salvador har indledt en redningsaktion. Det er ikke kampe mellem de to landes styrker eller med en myndighed, der kontrollerer Haiti (AP via Al Jazeera 22. oktober: https://www.aljazeera.com/news/2026/10/22/el-salvadors-bukele-threatens-haitian-gangs-over-abducted-soldiers og Anadolu 22. oktober: https://aa.com.tr/en/americas/bukele-threatens-haitian-gangs-over-4-salvadorans-held-hostage/4096542).
- Godkendt: ingen.

**Til gennemgang**
- Intet nyt.

## 21. oktober 2026

### Kl. 00.20, Europa og Danmark

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS (ingen ny meddelelse efter 20. oktober), DGHS' dengue (dashboardet pr. 20. oktober, står på siden), WHO SEARO nummer 20, WHO WPRO nummer 1066, ECDC uge 42 (uge 43 kommer fredag), UKHSA (ingen ny ugeoversigt, den kommer torsdag), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Statens Serum Instituts liste over aktuelle sygdomsudbrud (senest redigeret 7. oktober, intet nyt), DK-VET's nyheder (intet nyt), RIVM's ebolaside (seneste opdatering 19. oktober, intet nyt om `ebola-nl`) og DR Congos situationsrapporter gennem insp.cd's medieliste (157 er fortsat den nyeste). Outbreak News Today meldte 20. oktober et ebolatilfælde i Abuja og Kenyas niende tilfælde. Begge er alvorlige og er taget med uanset vagtplanens række.

**Ændret**
- `ebola-ke`: 9 bekræftede tilfælde, Kenyas sundhedsministerium gengivet af Blueprint, medie, pr. 20. oktober: https://blueprint.ng/kenya-confirms-9th-ebola-case-as-authorities-trace-135-contacts/ Det niende tilfælde er en 24-årig mand, nært familiemedlem til det første tilfælde, som testede positiv 19. oktober efter at have fået symptomer i karantæne. Alle ni tilfælde hører til én klynge, og 134 af 135 kontakter er opsporet og i karantæne. WHO AFRO skriver samme dag, at Kenya har meldt ni tilfælde: https://afro.who.int/countries/nigeria/news/nigeria-confirms-imported-case-ebola-bundibugyo-virus-disease Nyt punkt i forløbet, `cases`, `extra`, `gap`, `rel` og `src` opdateret. Dødstallet 1 står fortsat med Associated Press pr. 18. oktober, fordi ingen kilde gentager et samlet dødstal 20. oktober. Tallene er læst i Blueprints rå tekst og bekræftet af Eastleigh Voice gennem hentningsværktøjet.
- `cchf-ir`: `live` er sat til `false`. Kontrollen ville advare om over 30 dage uden nyt punkt (seneste 20. september). Kl. 11.20-kørslen 20. oktober søgte på engelsk og persisk, og denne kørsel søgte på engelsk, uden nyt fra de iranske myndigheder. Udbruddet er ikke erklæret afsluttet. Ingen andre felter er ændret.
- `ebola-drc`: `ebola-ng` er tilføjet i `rel`. Ingen tal er ændret.

**Nye**
- `ebola-ng`: et importeret tilfælde af ebola (Bundibugyo-virus) i Abuja, Nigeria. Nigerias føderale sundhedsministerium bekræftede tilfældet 20. oktober: https://health.gov.ng/fg-confirms-ebola-disease-case-in-fct-activates-public-health-response/ Patienten er en kvinde, der kom med fly fra Uganda, og 44 nære kontakter er identificeret. WHO AFRO oplyser samme dag, at hun fik symptomer 7. oktober, fire dage efter ankomsten, søgte behandling på et privathospital i Abuja 11. oktober, og at Nigeria er det femte land, der har påvist virus under udbruddet: https://afro.who.int/countries/nigeria/news/nigeria-confirms-imported-case-ebola-bundibugyo-virus-disease Trinnet er `udbrud`, fordi der endnu ikke er påvist smitte i Nigeria. Begge sider er læst som rå tekst.

**Urørt**
- 41 hændelser uden nyt i kilderne.
- `ebola-nl`: RIVM har intet nyt efter 10. oktober og lukkes efter planen 21. november. `wnv-eu`, `chik-fr`: NaTHNaC har tal pr. land fra 12. til 16. oktober, men ECDC's ugerapport, som hændelserne bygger på, kommer først fredag. `chik-am`: 29 dage siden seneste punkt (22. september). Næste kørsel skal tage stilling til `live`.
- Kontrollen gav ingen advarsler om tal i `cases` uden opgørelsesdato, så vagtplanens opgave med tre sådanne hændelser havde intet at rette.

**Usikkert**
- `ebola-ng`: smittekilden er ikke fastslået, og det er ikke oplyst, hvor i Uganda patienten rejste fra. Uganda erklærede sit udbrud slut i september ifølge RIVM. Det står i `gap`. Rutens knude for Uganda er sat ved Kampala som landets hovedstad, ikke som et kendt opholdssted.
- `ebola-ke`: Kenyas sundhedsministeriums egen udmelding om det niende tilfælde er ikke fundet. Eastleigh Voice afviser direkte opslag (403) og er læst med hentningsværktøjet.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 577d2e6.

**Til gennemgang**
- Intet nyt.

### Kl. 05.20, bred gennemgang

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (ingen meddelelse nyere end 20. oktober) og dengue (dashboardet pr. 20. oktober, står på siden), WHO SEARO nummer 20, WHO WPRO nummer 1066, ECDC uge 42 (uge 43 kommer fredag), UKHSA (ingen ny ugeoversigt, den kommer torsdag), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (intet om smitte). Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapporter gennem insp.cd's medieliste (157 er fortsat den nyeste), ECDC's ebolaside (opdateret 20. oktober, samme tal som på siden), WHO AFRO's ugentlige situationsrapport for Kenya 5. til 16. oktober (ældre end tallene på siden), PAHO's epidemiologiske alarmer og opdateringer (ny opdatering om dengue og chikungunya 20. oktober, indarbejdet) og ECDC's månedlige globale oversigt over chikungunya (fortsat pr. 30. august). Søgninger efter nyt om ebola i Kenya og Nigeria, gul feber i Ghana, difteri i Nigeria og Marokko, miltbrand i Zambia, mpox i USA og fugleinfluenza i fjerkræ i USA. Statens Serum Institut, DK-VET og RIVM blev gennemgået af kørslen kl. 00.20 og er ikke slået op igen.

**Ændret**
- `chik-am`: 213.919 mistænkte tilfælde, heraf 78.481 bekræftede, og 88 dødsfald i 20 lande og territorier i Amerika fra uge 1 til uge 38 2026, PAHO pr. 20. oktober: https://www.paho.org/sites/default/files/2026/10/2026-20-october-phe-dengue-chkvfinalen.pdf Nyt punkt i forløbet, `cases`, `extra` og `src` opdateret med landetal for Brasilien, Bolivia, Fransk Guyana og Costa Rica fra samme rapport. ECDC's globale tal 250.051 tilfælde og 87 dødsfald pr. 30. august omfatter også lande uden for Amerika. Det står i `extra`, og talserien er ikke forlænget med PAHO's tal, fordi de to opgørelser ikke kan sammenlignes. Tallene er læst i PDF'ens tekst.
- `ebola-ng`: nyt punkt i forløbet 20. oktober. Ugandas sundhedsministerium oplyser, at der ikke er aktive tilfælde af ebola i Uganda, og at patienten havde været i det østlige DR Congo i forretningsøjemed og rejste gennem Uganda i begyndelsen af oktober uden symptomer. Gengivet af Daily Monitor: https://www.monitor.co.ug/uganda/news/national/uganda-urges-calm-confirms-no-active-ebola-cases-in-country-5639738 og af Punch via Parrot Nigeria: https://parrotnigeria.com/2026/10/21/ebola-uganda-seeks-nigerian-womans-travel-history-from-fg/ `gap` og `src` opdateret. Knuder og rute er ikke ændret.

**Nye**
- Ingen. Set, men ikke taget med: difteri i Marokko (se Til gennemgang), Outbreak News Today 20. oktober om et udbrud af dengue på Marshalløerne og CIDRAP om medfødte mæslinger i Pennsylvania (hører under `maesling-us`, hvis US CDC nævner det).

**Urørt**
- 43 hændelser uden nyt i kilderne.
- Rundtur: `difteri-ng` 27 dage siden seneste punkt, `anthrax-zm` 23, `altnv-cn` 23, `mpox-mo` 21, `h5n1-dk` 20, `salmonella-dk` 20, `cre-eu` 19, `maesling-am` 18, `cyclospora-us` 16, `kolera` 13, `h5n1-us` 13, `h5n1-kh` 12, `salmonella-eu` 12, `gul-feber-gh` 12, `dengue-fl` 11 og `ebola-nl` 11. Slået op i denne kørsel uden nyt: `difteri-ng` (seneste fundne udmelding fra NCDC er fra begyndelsen af september), `anthrax-zm`, `gul-feber-gh` (sundhedsministerens tal 9. oktober står på siden), `maesling-am` (PAHO's situationsrapport 14 findes endnu ikke), `mpox-mo`, `h5n1-us` og `h5n1-kh` (WHO WPRO nummer 1066). `dengue-fl` venter på Floridas ugerapport torsdag, `salmonella-eu`, `cre-eu` og `kolera` på ECDC's ugerapport fredag. De øvrige er gennemgået af kørslen kl. 00.20 eller tidligere uden nyt.
- `ebola-drc`: situationsrapport 158 findes endnu ikke i insp.cd's medieliste. `ebola-ke`: fortsat 9 tilfælde. ECDC skriver 8 tilfælde pr. 20. oktober, og Reuters gengiver sundhedsministeriet med 9 samme dag.

**Usikkert**
- `ebola-ng`: Nigerias sundhedsministerium skriver, at patienten kom med fly fra Uganda. Ugandas sundhedsministerium skriver ifølge medierne, at hun var i det østlige DR Congo og kun rejste gennem Uganda. Ministeriets egen udmelding er ikke fundet på https://health.go.ug/press-statements/ Rutens knude står fortsat ved Kampala, og forskellen står i `gap`.
- `chik-am`: grafen har ECDC's globale tal og er ikke forlænget. Ejeren kan overveje, om talserien skal skifte til PAHO's tal for Amerika.
- Sri Lankas side er ikke prøvet med hentningsværktøjet i denne kørsel, fordi `dengue-asien` hører til kl. 11-kørslen.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 624856b.

**Mediesporet**
- Ét par havde status afventer.
- Afvist: `GB-SA`. Storbritannien sender Typhoon-kampfly til Saudi-Arabien for at forsvare landet mod Houthi-bevægelsens angreb, og flyene skal ikke angribe mål i Yemen. Landene er allierede og kæmper ikke mod hinanden (Deutsche Welle 21. oktober: https://www.dw.com/en/united-kingdom-uk-saudi-arabia-houthis-yemen/a-79718467 og AFP via The New Zealand Herald 20. oktober: https://www.nzherald.co.nz/world/uk-to-deploy-fighter-jets-to-help-protect-saudi-arabia-from-houthi-attacks/PJ556AD6GRGSZCNE2SESMLYBDE/). Udsendelsen kan senere dukke op som militær støtte `GB>SA`, som afgøres efter reglen for militær støtte.
- Godkendt: ingen.

**Til gennemgang**
- Nyt i GENNEMGANG.md: difteri i Marokko, egen hændelse eller fortsat kun omtale i `difteri-afro`.

### Kl. 11.20, Asien og Mellemøsten: intet nyt
Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 20. oktober er fortsat den nyeste, dagens er normalt ikke ude kl. 11) og dengue (dashboardet pr. 20. oktober, står på siden), WHO SEARO nummer 20 (nummer 21 findes endnu ikke på den faste adresse), WHO WPRO nummer 1066, ECDC uge 42, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser 20. og 21. oktober (intet om smitte). WHO EMRO's nyheder (kolera i Yemen 13. oktober står på siden, og WHO EMRO skriver, at der ikke er bekræftet tilfælde af ebola i regionen), GPEI's ugeoversigt (fortsat Afghanistan 36 og Pakistan 6 tilfælde af vild poliovirus type 1, som på siden) og søgninger efter nyt om fugleinfluenza hos mennesker i Kina, Nipah og polio i Pakistan. Usikkert: Sri Lankas dengueside https://www.dengue.health.gov.lk/ kunne hverken hentes af scriptet, direkte (forbindelsen afbrudt) eller med hentningsværktøjet (afvist af sidens robots.txt), så `dengue-asien` står urørt med tal pr. 12. oktober. Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 9feadd7.

### Kl. 17.20, Afrika og Amerika

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 20. oktober er fortsat den nyeste på listen https://dghs.gov.bd/pages/press-releases kl. 17.22, også ved direkte opslag) og dengue (dashboardet pr. 21. oktober, indarbejdet), WHO SEARO nummer 20, WHO WPRO nummer 1066, ECDC uge 42, UKHSA (ingen ny ugeoversigt), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (intet om smitte til siden). Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapporter gennem insp.cd's medieliste (158 er ny), WHO AFRO's ugebulletin for uge 41 (lagt ud 21. oktober, indarbejdet), Africa CDC's nyheder (intet nyt efter meldingerne om Kenya), PAHO's epidemiologiske alarmer og opdateringer (opdateringen om dengue og chikungunya 20. oktober er indarbejdet af kørslen kl. 05.20), US CDC's mæslingeside (fortsat pr. 15. oktober, opdateret 16. oktober) og søgninger efter nyt om ebola i Kenya og Nigeria.

**Ændret**
- `ebola-drc`: 9.637 bekræftede tilfælde og 4.646 dødsfald, DR Congos sundhedsministerium pr. 19. oktober, situationsrapport 158: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_158_19_10_2026.pdf 85 nye tilfælde på et døgn, 43 i Ituri, 33 i Nordkivu, 6 i Haut-Uélé, 2 i Tshopo og 1 i Nord-Ubangi, og 44 nye dødsfald, heraf 29 i lokalsamfundet og 15 på behandlingscentre. Ingen nye sundhedszoner. Nyt punkt i forløbet og i talserien, `cases` og `extra` opdateret, og situationsrapport 157 er erstattet af 158 i `src`. Punktet 19. oktober bærer selv adressen til 157. Tallene er læst som tekst og som billede af første side.
- `dengue-bd`: 116.990 indlagte og 364 dødsfald i 2026, DGHS pr. 21. oktober: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php 1.373 nye indlagte og 7 nye dødsfald på et døgn, uge 42 har indtil videre 6.678 tilfælde og 22 dødsfald. Nyt punkt i forløbet og i talserien. Læst i scriptets udtræk og i sidens rå tekst.
- `kolera`: nyt punkt 5. oktober for Zambia: 573 tilfælde, heraf 115 laboratoriebekræftede, og 15 dødsfald i 12 distrikter i fem provinser, WHO AFRO's ugebulletin uge 41: https://iris.who.int/bitstreams/41f85b00-a89e-4d52-9c69-9e3b8f96a164/download `gap` og `src` opdateret. `cases` er uændret med de globale tal.
- `gul-feber-gh`: nyt punkt 22. september: 42 mistænkte tilfælde og 13 dødsfald i syv distrikter i Upper West Region fra 30. august til 22. september, 13 IgM-positive og 3 PCR-bekræftede, alle døde, WHO AFRO's ugebulletin uge 41 (samme adresse). `extra` og `src` opdateret. Punktet er sat ind i datoorden før punktet 8. oktober.
- `difteri-ng`: `cases` er nu 16.997 tilfælde og 596 dødsfald i 2026 til og med uge 34 (23. august), WHO AFRO's ugebulletin uge 41, i stedet for mediets "over 10.000 bekræftede". Nyt punkt 23. august sat ind i datoorden, `extra` med fordelingen på stater og `src` opdateret.
- `maesling-us`: `extra` siger nu, at US CDC har 3 dødsfald i 2026 i sin tabel (siden opdateret 16. oktober), ikke 2. Læst to gange med hentningsværktøjet. Tallene for tilfælde er uændrede, fordi US CDC endnu ikke har opdateret onsdagens tal.

**Nye**
- Ingen.

**Urørt**
- 39 hændelser uden nyt i kilderne.
- `maesling-bd`: DGHS' meddelelse for 21. oktober var ikke på listen kl. 17.22. `ebola-ke`: fortsat 9 tilfælde. WHO AFRO's ugebulletin har kun tal pr. 11. oktober. `ebola-ng`: intet nyt efter 20. oktober. `maesling-us`: US CDC opdaterer om onsdagen ved middagstid amerikansk østkysttid, efter denne kørsel.

**Usikkert**
- `kolera`: WHO AFRO (573 tilfælde og 15 dødsfald pr. 5. oktober) og NaTHNaC (909 tilfælde og 25 dødsfald, 14. oktober) er uenige om Zambia. Ingen af tallene er sat i `cases`, og forskellen står i `gap`.
- `difteri-ng`: WHO AFRO's tabel har en kolonne med 12.491 "bekræftede" tilfælde, mens teksten siger, at kun 0,4 procent er laboratoriebekræftet. Kolonnen er derfor ikke brugt.
- `dengue-asien`: Sri Lankas side kunne ikke hentes af scriptet. Hører til kl. 11-kørslen og er ikke prøvet med hentningsværktøjet.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit d0cecda.

**Mediesporet**
- Ingen par havde status afventer i https://globus.nicco.dk/konflikter.json (genereret 21. oktober kl. 14.23 UTC). Intet godkendt eller afvist.

**Til gennemgang**
- Intet nyt.

## 20. oktober 2026

### Kl. 11.20, Asien og Mellemøsten

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 18. oktober er fortsat den nyeste på listen https://dghs.gov.bd/pages/press-releases) og dengue (dashboardet pr. 19. oktober), WHO SEARO's bulletin nummer 20 (næste udgave ventes 21. oktober), WHO WPRO's oversigt nummer 1066 (ingen nye humane tilfælde af fugleinfluenza 9. til 15. oktober), ECDC uge 42, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser 19. oktober (svær influenza hos et barn og legionærsyge, intet til siden). WHO EMRO's nyhed om kolera i Yemen 13. oktober (indarbejdet). Søgninger efter Pakistans syvende poliotilfælde, nyt om Krim-Congo-blødningsfeber i Iran og nye tilfælde af ebola i Kenya. Fordi kørslerne 19. oktober kl. 17.20 og 20. oktober kl. 00.20 og 05.20 ikke blev gennemført, er DR Congos situationsrapporter gennem insp.cd's medieliste og ECDC's ebolaside også læst.

**Ændret**
- `ebola-drc`: 9.552 bekræftede tilfælde og 4.602 dødsfald, DR Congos sundhedsministerium pr. 18. oktober, situationsrapport 157: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_157_18_10_2026.pdf 97 nye tilfælde på et døgn, 48 i Nordkivu, 42 i Ituri og 7 i Haut-Uélé, og 41 nye dødsfald. Situationsrapport 156 pr. 17. oktober havde 9.455 og 4.561: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_156_17_10_2026.pdf ECDC's ebolaside har de samme tal pr. 17. oktober. To nye punkter i forløbet og i talserien, `cases` og `extra` opdateret, og situationsrapport 155 er erstattet af 157 i `src`. Punktet 17. oktober bærer selv adressen til 155. Tallene er læst som tekst og som billede af første side.
- `dengue-bd`: 114.251 indlagte og 352 dødsfald i 2026, DGHS pr. 19. oktober: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php 1.851 nye indlagte og 4 nye dødsfald på et døgn, uge 42 har indtil videre 3.939 tilfælde og 10 dødsfald. Nyt punkt i forløbet og i talserien.
- `polio`: nyt punkt i forløbet 19. oktober. Pakistans nationale nødcenter for polioudryddelse, NEOC, har bekræftet landets syvende tilfælde i 2026, en seks måneder gammel dreng fra Jamali Colony i Karachi East, gengivet af The Express Tribune: https://tribune.com.pk/story/2635744/karachi-polio-case-takes-pakistans-tally-to-seven-this-year og Xinhua: https://english.news.cn/asiapacific/20261019/9eae95e8cdf14c83bad3e08767b6a852/c.html Ny stedknude for Karachi East, og The Express Tribune er sat i `src` med tilføjelsen `, medie`. `cases` er uændret med GPEI's 6 tilfælde pr. 14. oktober.

**Nye**
- Ingen.

**Urørt**
- 38 hændelser uden nyt i kilderne.
- `maesling-bd`: DGHS' meddelelse for 19. oktober var ikke på listen kl. 11.20. `dengue-asien`: Sri Lankas side kunne ikke hentes. `mers-sa`: Outbreak News Today 18. oktober gengiver WHO's 8 tilfælde, som står på siden. `kolera-ye`: intet nyt efter WHO EMRO 13. oktober. `h5n1-kh`: intet nyt tilfælde i WHO WPRO nummer 1066. `pest-irkutsk`: intet nyt efter DON 620. `ebola-ke`: fortsat 8 tilfælde og 1 dødsfald, ECDC pr. 18. oktober.
- `cchf-ir`: 30 dage siden seneste punkt (20. september). Søgninger på engelsk og persisk gav intet nyt fra de iranske myndigheder. `live` er ikke ændret, fordi kontrollen først advarer efter over 30 dage. Næste kørsel skal tage stilling.

**Usikkert**
- `polio`: typen af poliovirus i Pakistans syvende tilfælde er ikke oplyst i kilderne. Tallet er derfor kun skrevet i forløbet og ikke i `cases`, som er GPEI's tal for vild poliovirus type 1.
- `dengue-asien`: https://www.dengue.health.gov.lk/ kunne ikke hentes direkte (forbindelsen afbrudt). Hentningsværktøjet er tidligere afvist af sidens robots.txt og er ikke prøvet igen.
- Kørslerne 19. oktober kl. 17.20 og 20. oktober kl. 00.20 og 05.20 efterlod intet commit, så `DATA_TID` stod på 19. oktober kl. 11.23 i omkring 24 timer. Tjekket af par i mediesporet, som hører til kl. 05 og kl. 17, er derfor ikke gennemført siden 19. oktober kl. 05.20. Fem par står som afventer: `IL-SY`, `FR-IL`, `RU>UA`, `MP-US` og `CN-PH`. Denne kørsel har ikke afgjort dem, fordi rækken kl. 11 ikke omfatter tjekket.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit e72c6e5.

**Til gennemgang**
- Nyt i GENNEMGANG.md: tre kørsler i træk er ikke gennemført.

### Kl. 11.35, ejerens afgørelser i gennemgangen

Ejeren har afgjort 15 punkter fra GENNEMGANG.md på en beslutningsside 20. oktober. 14 fulgte forslaget, og botulismen blev taget med. Punkterne er fjernet fra GENNEMGANG.md, undtagen de 30 udenlandske datacentre, som efterprøves nu.

**Ændret i datasættet (gamle punkter, rettet efter ejerens afgørelse)**
- `ebola-nl`: står som aktiv og lukkes 21. november, 42 dage efter RIVM's melding 10. oktober om negativ test, hvis der ikke kommer sekundære tilfælde. Det er WHO's regel for, hvornår et ebolaudbrud er slut. `naeste` er rettet.
- `ebola-drc`: punktet 13. oktober efter AP er erstattet af punktet 11. oktober efter situationsrapport 150 med 9.065 bekræftede tilfælde og 4.381 dødsfald, som i rapportens oversigt og tabel: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_150_11_10_2026.pdf Talserien har fået punktet 11. oktober.
- `kolera`: WHO's dato for Zambia bliver stående. NaTHNaC's dato 28. juli og tallene 909 tilfælde og 25 dødsfald står under Usikkert, til Zambias egen myndighed er fundet.
- `mers-sa`: punktet 31. august om ingen nye tilfælde er erstattet af to punkter med symptomdebut 11. og 20. september efter WHO 15. oktober. `naeste` siger nu otte sporadiske tilfælde fra 1. januar til 5. oktober.
- `sfts-th`: punktet er dateret 17. september efter Thai PBS World og er ikke længere mærket omtrentligt.
- `h5n1-us`: handler igen om fjerkræ i Midtvesten med trinnet reservoir. Det humane tilfælde og malkekvæget i Washington står i den nye hændelse `h5n1-wa`.

**Nye**
- `h5n1-wa`: fugleinfluenza hos et menneske i Yakima County i Washington efter udsættelse for smittet malkekvæg, Yakima Health District 15. oktober: https://www.yakimacounty.us/DocumentCenter/View/46716
- `botulisme-dk`: seks indlagte med alvorlig forgiftning efter behandling med botulinumtoksin i Region Sjælland, Styrelsen for Patientsikkerhed 9. september: https://stps.dk/nyheder/2026/sep/seks-tilfaelde-af-alvorlig-forgiftning-efter-behandling-med-botulinumtoksin Det er en forgiftning og ikke smitte.

**Ændret i mediesporet**
- `IL-SY` er afvist efter reglen om direkte kampe mellem parternes styrker.

**Ændret i reglerne (OPDATERING.md)**
- Forgiftninger og lignende hændelser uden smitte tages med, når de har forbindelse til Danmark. Uden for Danmark afgøres de enkeltvis.
- Et importeret ebolatilfælde uden sekundære tilfælde lukkes 42 dage efter den negative test.
- Fejler kildescriptet mod Sri Lankas dengueside, læses den med hentningsværktøjet.
- DR Congos situationsrapporter findes gennem insp.cd's medieliste.

**Svar fra ejeren**
- De planlagte kørsler 19. oktober kl. 17.20 og 20. oktober kl. 00.20 og 05.20 kørte ikke, fordi kontoen var løbet tør for forbrug. Opgaverne er ikke fejlbehæftede, og punktet er fjernet fra GENNEMGANG.md. Mediesporets par tjekkes igen af den næste kørsel, der har det i vagtplanen.

### Kl. 11.45, datacentre: de sidste 30 udenlandske efterprøvet

Ingen gennemgang af kilder til smitteudbruddene og ingen ændrede tal i datasættet.

**Ændret i laget Datacentre (efter ejerens afgørelse om at efterprøve dem nu)**
- De 30 udenlandske anlæg, der ikke var efterprøvet 17. oktober, er tjekket felt for felt mod kilderne. 21 havde ingen fejl.
- Rettet: ejeren af VIRTUS i Wustermark og Elsham Tech Park er den, kilderne nævner, og VIRTUS' annoncering er dateret 6. september 2023. Ejer eller operatør uden kilde er fjernet for Project Jade i Cheyenne, Reliance og Meta i Jamnagar, SoftBank i Tomakomai og Khazna i Ajman. Effekten for Scala AI City står uden type, fordi kilden ikke siger, om det er IT-effekt.
- Ny status: BDx i Jatiluhur står som planlagt, fordi Vestjavas guvernør 30. september bad byggeriet standset. Digital Edge i Bekasi og CDC i Marsden Park er under opførelse efter rejsegilde i maj 2026 og første spadestik i oktober 2024. Fermi America i Amarillo er under opførelse efter lejeaftalen med TensorWave 10. august 2026. AirTrunk MEL2 ventes åbnet i 2027.
- Laget har 149 anlæg: 81 i drift, 36 under opførelse, 6 godkendt og 26 planlagt.

### Kl. 17.20, Afrika og Amerika

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelserne 19. og 20. oktober, indarbejdet) og dengue (dashboardet pr. 20. oktober, indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1066, ECDC uge 42, UKHSA (ingen ny ugeoversigt), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (intet om smitte til siden). Sri Lankas side kunne ikke hentes af scriptet. WHO AFRO's side med udbrud og nødsituationer (intet nyt efter 9. oktober), Africa CDC's nyheder (seneste 17. oktober om Kenya, indarbejdet), PAHO's epidemiologiske alarmer (seneste 16. oktober om myiasis, står i GENNEMGANG.md), DR Congos situationsrapporter gennem insp.cd's medieliste (157 er fortsat den nyeste) og CIDRAP om Kenya (fortsat 8 tilfælde). US CDC's mæslingetal udkommer onsdag, og `maesling-us` står med tallet pr. 15. oktober.

**Ændret**
- `maesling-bd`: 215.768 mistænkte og 23.199 bekræftede tilfælde, 1.100 dødsfald blandt mistænkte og 104 blandt bekræftede tilfælde, DGHS pr. 20. oktober: https://dghs.gov.bd/pages/press-releases/6ad751312e520f8fc88d1dfe Det seneste døgn 1.217 nye mistænkte tilfælde, 42 nye bekræftede og 3 dødsfald blandt mistænkte. Meddelelsen pr. 19. oktober havde 214.551 mistænkte og 23.157 bekræftede tilfælde og 1.097 dødsfald blandt mistænkte: https://dghs.gov.bd/pages/press-releases/6ad750a0734da992ba75b6d1 To nye punkter i forløbet og i talserien, hvor dødstallet er de to rækker lagt sammen efter reglen i OPDATERING.md. `cases`, `extra` (dødsfald, indlagte 191.761 og udskrevne 184.168) og kilden i `src` er opdateret. Tallene er læst som tekst og som billede af første side i begge PDF'er.
- `dengue-bd`: 115.617 indlagte og 357 dødsfald i 2026, DGHS pr. 20. oktober: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php 1.366 nye indlagte og 5 nye dødsfald på et døgn, uge 42 har indtil videre 5.305 tilfælde og 15 dødsfald. Nyt punkt i forløbet og i talserien.

**Nye**
- Ingen.

**Urørt**
- 41 hændelser uden nyt i kilderne.
- `ebola-drc`: situationsrapport 158 findes endnu ikke i insp.cd's medieliste. `ebola-ke`: fortsat 8 bekræftede tilfælde og 1 dødsfald (CIDRAP 20. oktober, NaTHNaC 19. oktober). `dengue-fl`: Outbreak News Today melder 19. oktober to lokalt erhvervede tilfælde i Citrus County efter amtets sundhedsmyndighed. Floridas ugerapport kommer torsdag, så tallet er ikke ændret. `kolera`: NaTHNaC's tal for Zambia er de samme, som står under Usikkert. `chik-am`: 28 dage siden seneste punkt (22. september). ECDC's månedlige globale opgørelse pr. 30. august er den nyeste, så næste kørsler skal tage stilling til `live`, når der er gået over 30 dage. `cchf-ir`: 30 dage siden seneste punkt, hører til kl. 11-kørslen.

**Usikkert**
- `dengue-asien`: https://www.dengue.health.gov.lk/ kunne ikke hentes af scriptet (forbindelsen afbrudt). Hører til kl. 11-kørslen og er ikke prøvet med hentningsværktøjet.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 14a6bb2.

**Mediesporet**
- Fem par havde status afventer. Alle fem er afvist.
- `FR-IL`: bosætteres angreb på en fransk borgmester og en europæisk delegation på Vestbredden (Middle East Eye 17. oktober: https://www.middleeasteye.net/live-blog/live-blog-update/france-demands-israel-arrest-settlers-who-attacked-french-mayor-west og Al Jazeera 18. oktober: https://www.aljazeera.com/news/2026/10/18/a-timeline-of-west-bank-attacks-on-palestinians-and-foreign-officials), ikke kampe mellem landenes styrker.
- `CN-PH`: diplomatisk strid om den kinesiske ambassadørs udtalelse om brug af magt (Taipei Times 17. oktober: https://www.taipeitimes.com/News/world/archives/2026/10/17/2003866142 og Bloomberg via The Star 19. oktober: https://www.thestar.com.my/aseanplus/aseanplus-news/2026/10/19/philippine-secretary-lazaro-says-china-ambassador039s-statement-was-provocative-and-unacceptable), ingen sammenstød i perioden.
- `MP-US`: Nordmarianerne er ikke nævnt. Artiklerne handler om amerikansk indenrigspolitik og uroen i Frankrig (The Guardian 19. oktober: https://www.theguardian.com/us-news/2026/oct/19/trump-france-protests).
- `RU>UA`: artiklerne handler om krigen og et topmøde (Euronews 19. oktober: https://www.euronews.com/2026/10/19/putin-seeks-ukraine-summit-with-trump-and-xi-but-refuses-talks-with-zelenskyy), ikke om militær støtte fra Rusland til Ukraine.
- `GB>IL`: striden om konsulatet i Østjerusalem og regeringens afvisning af en undersøgelse af tidligere våbenleverancer (Middle East Eye 20. oktober: https://www.middleeasteye.net/news/burnham-rejects-jeremy-corbyns-call-public-inquiry-british-complicity-gaza-genocide), ikke leverancer i perioden beskrevet af to medier.
- Godkendt: ingen.

**Til gennemgang**
- Intet nyt.

### Kl. 20.05, ejerens afgørelser om de fire nye punkter

Ejeren har afgjort de fire punkter, kørslerne skrev 17. til 18. oktober, på en beslutningsside 20. oktober. Alle fulgte forslaget. Punkterne er fjernet fra GENNEMGANG.md, som nu ingen åbne punkter har.

**Ændret i datasættet (gamle punkter, rettet efter ejerens afgørelse)**
- `difteri-ng`: 10.476 bekræftede tilfælde, 12.977 mistænkte og 406 dødsfald stod uden kilde. `cases` og punktet 28. august siger nu det, kilden siger: over 10.000 bekræftede tilfælde i 2026, NCDC's generaldirektør 28. august, gengivet af The Guardian Nigeria: https://guardian.ng/?p=2907334
- `altnv-cn`: AABB er mærket som sekundær kilde, fordi den genfortæller undersøgelsen i New England Journal of Medicine.

**Nye**
- `myiasis-am`: myiasis med skruelarve i Mexico og Mellemamerika, 1.355 bekræftede tilfælde og 5 dødsfald i seks lande fra januar til september 2026 efter PAHO's epidemiologiske alarm 16. oktober: https://www.paho.org/en/documents/epidemiological-alert-myiasis-caused-cochliomyia-hominivorax-americas-region-16-october Det er en parasit og ikke smitte mellem mennesker.

**Ændret i reglerne (OPDATERING.md)**
- Uden for Danmark tages hændelser uden smitte med, når WHO eller en af WHO's regionale afdelinger udsender en alarm om tilfælde hos mennesker.

**Ændret i kildescriptet**
- `tools/hent-kilder.mjs`, delen `dghs`, viser nu alle DGHS' meddelelser nyere end den nyeste i `maesling-bd`, ældste først. Prøvet 20. oktober kl. 20.00 med en ældre meddelelse som udgangspunkt: scriptet viste meddelelserne for 19. og 20. oktober.

## 19. oktober 2026

### Kl. 00.20, Europa og Danmark: intet nyt
Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger og dengue (pr. 18. oktober, indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1066, ECDC's ugerapport uge 42 (indarbejdet, næste udgave fredag), UKHSA (ugeoversigten fra 15. oktober er fortsat den nyeste), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (et dødsfald af invasiv pneumokoksygdom, intet til siden). Statens Serum Instituts liste over aktuelle sygdomsudbrud (senest redigeret 7. oktober), DK-VET's nyheder (intet efter 7. oktober, fundet af fugleinfluenza i sæler 1. oktober står i `h5n1-dk`), RIVM's side om ebola (intet nyt efter 12. oktober), Robert Koch Instituts Epidemiologisches Bulletin (næste udgave 22. oktober). Søgning efter Rospotrebnadzors udmelding om mpox i Sankt Petersborg: ikke fundet, så hændelsen er fortsat ikke taget med. Kontrollen advarer kun om `difteri-ng`, som allerede står i GENNEMGANG.md. Set, men overladt til kl. 05-kørslen: Outbreak News Today melder 18. oktober et ottende tilfælde af ebola i Kenya (https://outbreaknewstoday.substack.com/p/kenya-8th-ebola-case-reported), ikke læst i myndighedens egen udmelding i denne kørsel. Sri Lankas side kunne ikke hentes af scriptet. Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen, og kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 8e5cd67.

### Kl. 05.20, bred gennemgang

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger og dengue (pr. 18. oktober, indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1066, ECDC's ugerapport uge 42 (indarbejdet, næste udgave fredag), UKHSA (ugeoversigten fra 15. oktober er fortsat den nyeste), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (intet om smitte). Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapporter gennem insp.cd's medieliste (155 er fortsat den nyeste). Søgninger efter Kenyas ottende ebolatilfælde, nyt om gul feber i Ghana og nye udbrud meldt af sundhedsministerier. Statens Serum Institut, DK-VET, RIVM og Robert Koch Institut blev gennemgået af kørslen kl. 00.20 og er ikke slået op igen. WHO AFRO's bulletin, PAHO og Africa CDC er ikke slået op særskilt i denne kørsel, de blev gennemgået af kørslen 18. oktober kl. 17.20.

**Ændret**
- `ebola-ke`: 8 bekræftede tilfælde og 1 dødsfald, Kenyas sundhedsministerium pr. 18. oktober. Generaldirektøren for sundhed, Patrick Amoth, meldte i et interview på Citizen TV et ottende tilfælde, en 49-årig mand, der som pårørende ledsager passede det første tilfælde. Af 38 testede var én positiv. Gengivet af Associated Press: https://www.bozemandailychronicle.com/wire/international/kenya-s-ebola-cases-hit-8-with-no-community-transmission-yet/article_dab273f0-f846-594f-90ca-3c6aa86467f2.html og Eastleigh Voice: https://eastleighvoice.co.ke/headlines/413599/kenya-confirms-eighth-ebola-case-as-49-year-old-patient-attendant-tests-positive samt Outbreak News Today. Nyt punkt i forløbet, `cases`, `extra` og `gap` er opdateret, og AP og Eastleigh Voice er sat i `src` med tilføjelsen `, medie`. Trinnet er uændret `smitte`.

**Nye**
- Ingen. Set, men ikke taget med: Outbreak News Today 18. oktober om, at Manitoba har erklæret sit mæslingeudbrud afsluttet, og om 288 mæslingetilfælde i Wisconsin. Ingen af dem står som egen hændelse, og US CDC's næste ugetal ventes onsdag.

**Urørt**
- 40 hændelser uden nyt i kilderne.
- Rundtur: `cchf-ir` 29 dage siden seneste punkt, `chik-am` 27, `difteri-ng` 25, `anthrax-zm` 21, `altnv-cn` 21, `mpox-mo` 19, `h5n1-dk` 18, `salmonella-dk` 18, `cre-eu` 17, `maesling-am` 16, `cyclospora-us` 14, `kolera` 11, `h5n1-kh` 10, `salmonella-eu` 10 og `gul-feber-gh` 10: de samlede kilder nævner dem ikke med nyt. Kun `gul-feber-gh` og `h5n1-kh` er slået op enkeltvis i denne kørsel. De øvrige blev søgt af kørslen 18. oktober kl. 05.20 uden nyt og er ikke søgt igen. `gul-feber-gh`: seneste fundne udmelding er sundhedsministerens 9. oktober (450 mistænkte tilfælde i 16 regioner), som står på siden. `h5n1-kh`: WHO WPRO nummer 1066 har intet nyt tilfælde. `cchf-ir` når 30 dage i morgen, og `chik-am` om tre dage, så næste kørsler skal tage stilling til `live`.

**Usikkert**
- `ebola-ke`: det ottende tilfælde kendes kun gennem generaldirektørens interview, gengivet af medier. AP skriver, at patienten var i karantæne, da han blev testet. Eastleigh Voice skriver kun, at han er isoleret. Sundhedsministeriets egen pressemeddelelse er ikke fundet. Kontrollen fik 403 fra Eastleigh Voice, men siden er læst gennem hentningsværktøjet.
- Kontrollen advarer fortsat om `difteri-ng`, se GENNEMGANG.md.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 5467814.

**Mediesporet**
- To par har status afventer. `IL-SY` venter fortsat på ejerens afgørelse i GENNEMGANG.md og er ikke afgjort.
- Afvist: `IL-JO`. Artiklerne handler om narkotikasmugling over grænsen (Al Jazeera 18. oktober: https://www.aljazeera.com/news/2026/10/18/jordans-israel-border-becomes-a-new-hotspot-for-a-sophisticated-drug-trade), bosætteres angreb på olivenhøsten på Vestbredden (Los Angeles Times 16. oktober: https://www.latimes.com/world-nation/story/2026-10-16/israeli-settlers-torch-cars-trees-in-west-bank-villages-disrupting-palestinians-olive-harvest), en klage over olivental (The Jerusalem Post 18. oktober: https://www.jpost.com/israel-news/article-912092) og israelske trusler mod Libanon, ikke om kampe mellem Israels og Jordans styrker.
- Godkendt: ingen.

**Til gennemgang**
- Intet nyt.

### Kl. 11.20, Asien og Mellemøsten: intet nyt
Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 18. oktober er indarbejdet, dagens er normalt ikke ude kl. 11) og dengue (dashboardet pr. 18. oktober er indarbejdet), WHO SEARO's bulletin nummer 20 (næste udgave ventes 21. oktober), WHO WPRO's oversigt nummer 1066 (ingen nye humane tilfælde af fugleinfluenza 9. til 15. oktober), ECDC uge 42, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser 18. og 19. oktober (et dødsfald af invasiv pneumokoksygdom og legionærsyge, intet til siden). WHO EMRO's nyheder (intet nyt udbrud). Usikkert: Sri Lankas side https://www.dengue.health.gov.lk/ kunne ikke hentes ad nogen af de to veje (direkte opslag afbrudt af serveren, hentningsværktøjet afvist af sidens robots.txt), så `dengue-asien` er urørt. Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen, og kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 3740efe.

## 18. oktober 2026

### Kl. 00.20, Europa og Danmark

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger og dengue (pr. 17. oktober, indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1066, ECDC's ugerapport uge 42 (indarbejdet 17. oktober), UKHSA (ugeoversigten uge 41 fra 15. oktober er fortsat den nyeste og er indarbejdet), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Sri Lankas side kunne ikke hentes af scriptet. Statens Serum Instituts liste over aktuelle sygdomsudbrud (senest redigeret 7. oktober) og siderne om Salmonella Enteritidis (1. oktober) og Salmonella Typhimurium ST19 (15. september): intet nyt. DK-VET's nyheder: intet nyt efter 7. oktober. RIVM's side om ebola: intet nyt efter 12. oktober. Robert Koch Instituts Epidemiologisches Bulletin: næste udgave 22. oktober.

**Ændret**
- `cchf-ir`: `cases` har fået kilde og dato: 31 bekræftede tilfælde i hele Iran i 2026, oplyst af lederen af sundhedsministeriets center for smitsomme sygdomme til ILNA, gengivet 16. september: https://www.aromastore.ir/news34737/ Tallet er læst i den persiske tekst og er uændret.
- `altnv-cn`: `cases` har fået kilde og dato: 10,4 procent af 3.163 undersøgte febersyge patienter med flåtbid var positive, undersøgelsen i New England Journal of Medicine gengivet af AABB 14. september: https://www.aabb.org/news-resources/news/article/2026/09/14/chinese-researchers-identify-new-tickborne-virus-in-febrile-patients Tallene er uændrede. New England Journal of Medicine afviste opslaget med 403.

**Nye**
- Ingen. Set, men ikke taget med: Outbreak News Today skriver 17. oktober efter russiske medier, at fire personer i Sankt Petersborg er indlagt med laboratoriebekræftet mpox: https://outbreaknewstoday.substack.com/p/russia-4-confirmed-mpox-cases-reported Ingen myndighed, og typen er ikke oplyst. Outbreak News Today skriver 16. oktober, at Sveriges mæslingeudbrud efter Urkult-festivalen (40 tilfælde) er erklæret afsluttet 14. oktober: https://outbreaknewstoday.substack.com/p/sweden-measles-outbreak-declared Udbruddet har ikke stået på siden.

**Urørt**
- 39 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Europa op. Resten hører til de andre kørsler i vagtplanen.
- `h5n1-dk` og `salmonella-dk` 17 dage siden seneste punkt: DK-VET og SSI uændrede. `ebola-nl`: intet nyt fra RIVM efter 10. oktober. `wnv-eu`, `dengue-eu` og `chik-fr`: ajour efter ECDC uge 42. `cre-eu`, `salmonella-eu`, `sindbis-de`, `malaria-de` og `cchf-es`: intet nyt.

**Usikkert**
- `difteri-ng`: tallet 10.476 bekræftede og 406 dødsfald er ikke fundet i kilderne i `src` eller ved søgning. ICIR og The Guardian Nigeria gengiver NCDC 28. august som "over 10.000 bekræftede tilfælde". Ingen ændring, og kontrollen advarer fortsat om hændelsen.
- `cchf-ir`: kilden er en nyhedsside, der gengiver Khabar Online og ILNA. Ministeriets egen udmelding er ikke fundet.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi værktøjet add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 9e41339.

**Til gennemgang**
- Nyt i GENNEMGANG.md: `difteri-ng`, tallet i `cases` har ingen fundet kilde. `altnv-cn`, AABB står uden tilføjelsen `, sekundær`.

### Kl. 05.20, bred gennemgang

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 17. oktober er indarbejdet) og dengue (dashboardet pr. 17. oktober er indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1066, ECDC's ugerapport uge 42 (indarbejdet), UKHSA (ugeoversigten uge 41 er fortsat den nyeste), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (intet om smitte). Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapporter gennem insp.cd's medieliste (154 er fortsat den nyeste). Kenyas sundhedsministerium hos APO Group (intet nyt efter 7. oktober). Søgninger efter nyt fra WHO om kolera, om miltbrand i Zambia, mpox i Mexico og cyclospora i USA: intet nyt fra myndighederne. Statens Serum Institut, DK-VET, RIVM og Robert Koch Institut blev gennemgået af kørslen kl. 00.20 og er ikke slået op igen.

**Ændret**
- `ebola-ke`: 7 bekræftede tilfælde og 1 dødsfald, Kenyas sundhedsministerium pr. 17. oktober. Pressemeddelelsen fra generaldirektøren for sundhed, Nairobi 17. oktober, og ministeriets oversigt samme dag er læst som billeder gengivet af Outbreak News Today: https://outbreaknewstoday.substack.com/p/kenya-reports-4-additional-ebola De fire nye tilfælde er en nær mandlig slægtning til det første tilfælde, i karantæne siden 6. oktober, og tre sundhedsarbejdere på 29, 35 og 32 år, som behandlede det første tilfælde 3. og 4. oktober og har været i karantæne siden 9. oktober. 128 af 130 kontakter er opsporet og i karantæne. Reuters gengiver de samme tal: https://www.sabcnews.com/sabcnews/kenya-confirms-four-new-ebola-cases-bringing-total-number-to-seven/ Nyt punkt i forløbet, `cases`, `extra` og `gap` er opdateret, og begge kilder er sat i `src` med tilføjelsen `, medie`. Trinnet er uændret `smitte`, fordi alle nye tilfælde var kontakter i karantæne.

**Nye**
- Ingen.

**Urørt**
- 40 hændelser uden nyt i kilderne.
- Rundtur: `cchf-ir` 28 dage siden seneste punkt, `chik-am` 26, `difteri-ng` 24, `anthrax-zm` 20, `altnv-cn` 20, `mpox-mo` 18, `h5n1-dk` 17, `salmonella-dk` 17, `cre-eu` 16, `maesling-am` 15, `cyclospora-us` 13 og `kolera` 10: søgt eller slået op, intet nyt fra myndighederne. `ebola-drc`: situationsrapport 155 findes endnu ikke i insp.cd's medieliste. `maesling-am`: næste PAHO-rapport 22. oktober.

**Usikkert**
- `ebola-ke`: Kenyas sundhedsministeriums udmelding 17. oktober er kun fundet som billeder hos Outbreak News Today og gengivet af Reuters, ikke på ministeriets egen side eller hos APO Group.
- Kontrollen advarer fortsat om `difteri-ng`, hvor tallet i `cases` ikke har kilde og dato, se GENNEMGANG.md.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi værktøjet add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit f8d796c.

**Mediesporet**
- Ét par har status afventer: `IL-SY`, som venter på ejerens afgørelse i GENNEMGANG.md. Ikke afgjort. Stregens nyeste artikel, Arab News 18. oktober, handler efter overskriften om flere israelske indtrængninger i det sydlige Syrien og fire tilbageholdte i Quneitra: https://www.arabnews.com/middle-east/israel-steps-up-incursions-into-southern-syria-detains-four-in-quneitra-3006937
- Godkendt: ingen. Afvist: ingen.

**Til gennemgang**
- Intet nyt.

### Kl. 11.20, Asien og Mellemøsten: intet nyt
Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 17. oktober er indarbejdet, dagens er normalt ikke ude kl. 11) og dengue (dashboardet pr. 17. oktober er indarbejdet), WHO SEARO's bulletin nummer 20 (næste udgave ventes 21. oktober), WHO WPRO's oversigt nummer 1066 (ingen nye humane tilfælde af fugleinfluenza 9. til 15. oktober), ECDC uge 42, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser 17. og 18. oktober (et dødsfald af invasiv pneumokoksygdom, intet til siden). WHO EMRO's nyheder (intet nyt efter 15. oktober). Søgninger efter nye udbrud i Asien og Mellemøsten og nyt om mpox i Hongkong og dengue i Sri Lanka: intet nyt fra myndighederne. Usikkert: Sri Lankas side https://www.dengue.health.gov.lk/ kunne ikke hentes ad nogen af de to veje (direkte opslag afbrudt af serveren, hentningsværktøjet fik ikke tilladelse), så `dengue-asien` er urørt. Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen, og kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 0a6c376.

### Kl. 17.20, Afrika og Amerika

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 18. oktober, indarbejdet) og dengue (dashboardet pr. 18. oktober, indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1066, ECDC uge 42, UKHSA (ugeoversigten uge 41 er fortsat den nyeste), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapporter gennem insp.cd's medieliste (155 er ny). PAHO's epidemiologiske alarmer og opdateringer (ny alarm 16. oktober om myiasis, se Til gennemgang). Søgninger efter nyt fra Kenyas sundhedsministerium om ebola, Africa CDC, pest på Madagaskar og Floridas ugerapport om dengue uge 41: intet nyt at indarbejde.

**Ændret**
- `ebola-drc`: 9.415 bekræftede tilfælde og 4.536 dødsfald, DR Congos sundhedsministerium pr. 16. oktober, situationsrapport 155: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_155_16_10_2026.pdf Rapporten bekræfter officielt Nord-Ubangi som den ottende ramte provins med 2 bekræftede tilfælde og 1 dødsfald i sundhedszonen Wapinda. 67 nye tilfælde og 26 nye dødsfald på et døgn, 66 af 178 sundhedszoner. Nyt punkt i forløbet og i talserien, `cases` og `extra` er opdateret, situationsrapport 155 erstatter 154 i `src`, og `gap` om den ubekræftede provins er fjernet. Wapinda er sat på kortet med koordinaterne fra OpenStreetMap (3,6777 N, 22,8030 Ø), uden forbindelse, fordi rapporten ikke dokumenterer retningen. Tallene er læst i rapportens tekst og som billede af første side.
- `maesling-bd`: 213.244 mistænkte og 23.122 bekræftede tilfælde, 1.092 dødsfald blandt mistænkte og 104 blandt bekræftede tilfælde, DGHS pr. 18. oktober: https://dghs.gov.bd/pages/press-releases/6ad49db294e4dab6748d9c8e Det seneste døgn 1.254 nye mistænkte, 65 nye bekræftede og 7 dødsfald blandt mistænkte, heraf 3 i Dhaka-divisionen. 189.484 indlagte og 181.756 udskrevne. Tallene er læst i PDF'en som tekst og som billede. Nyt punkt i forløbet og i talserien (dødstallet i grafen er de to rækker lagt sammen, 1.196, som reglen siger).
- `dengue-bd`: 112.400 indlagte og 348 dødsfald i 2026, efter 2.088 nye indlagte og 6 nye dødsfald på et døgn, DGHS' denguedashboard pr. 18. oktober: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php Nyt punkt i forløbet og i talserien. Hændelsen hører til kl. 11-kørslen, men dashboardet var opdateret efter den.

**Nye**
- Ingen. Set, men ikke taget med: pest på Madagaskar (Outbreak News Today 16. oktober, The Star 14. oktober: 4 bekræftede tilfælde), fordi det er den kendte sæson, og ingen myndighed kalder den usædvanlig. Hantavirus i Argentina (NaTHNaC: 59 bekræftede tilfælde i 2026 pr. 3. oktober) af samme grund. PAHO's alarm om myiasis med Cochliomyia hominivorax 16. oktober, se Til gennemgang.

**Urørt**
- 38 hændelser uden nyt i kilderne. `ebola-ke`: ingen nye tal efter 17. oktober. `maesling-us`: US CDC's næste ugetal ventes onsdag. `maesling-am`: næste PAHO-rapport 22. oktober. `dengue-fl`: ugerapporten for uge 41 findes ikke endnu. `kolera`, `gul-feber-gh`, `anthrax-zm` og `h5n1-us`: intet nyt fra myndighederne.

**Usikkert**
- `difteri-afro`: NaTHNaC skriver 16. oktober 161 bekræftede tilfælde og 11 dødsfald i Senegal pr. 5. oktober, mens punktet 16. oktober efter ECDC har Senegals sundhedsministerium med 248 bekræftede tilfælde og 11 dødsfald pr. 4. oktober. Ingen ændring.
- `ebola-drc`: situationsrapport 155 har 916 isolerede patienter, samme tal som 154. Rapportens første linje dateres "16 septembre", men skal efter sammenhængen være 16. oktober. Tallet for isolerede er sat ind, som rapporten skriver det.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 87a7b31.

**Mediesporet**
- To par har status afventer. `IL-SY` venter fortsat på ejerens afgørelse i GENNEMGANG.md og er ikke afgjort.
- Afvist: `FR-TF`. Artiklerne handler om demonstrationer, plyndringer og over 1.800 anholdelser i Frankrig og om et fransk krigsskib, der skød en drone ned ved Bab el-Mandeb, ikke om kampe mellem Frankrig og De Franske Sydterritorier: https://www.npr.org/2026/10/17/nx-s1-6006773/student-protests-france og https://www.aljazeera.com/gallery/2026/10/18/photos-protests-across-france-spiral-into-looting-blazes-and-clashes
- Godkendt: ingen.

**Til gennemgang**
- Nyt i GENNEMGANG.md: PAHO's alarm om myiasis med Cochliomyia hominivorax 16. oktober. Skal den slags hændelser med på siden?

## 17. oktober 2026

### Kl. 00.20, Europa og Danmark

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (seneste meddelelse er fortsat 14. oktober) og dengue (dashboardet pr. 16. oktober er indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1065, ECDC's ugerapport uge 42, UKHSA (ugeoversigten uge 41 er indarbejdet, uge 42 er ikke udkommet), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Sri Lankas side kunne ikke hentes af scriptet. ECDC's ugerapport uge 42 i sin helhed og uge 41 til sammenligning. Statens Serum Instituts liste over aktuelle sygdomsudbrud (senest redigeret 7. oktober, intet nyt). DK-VET's nyheder. RIVM's side om ebola (intet nyt efter 12. oktober). Robert Koch Instituts Epidemiologisches Bulletin 42/2026 blev gennemgået af kørslen 16. oktober kl. 00.20, og næste udgave kommer 22. oktober. WHO WPRO's oversigt nummer 1065 og WHO's risikovurdering om influenza mellem dyr og mennesker 8. august til 6. september for tal og datoer til `cases`. Den nye stedknude for Slovenien er kontrolleret mod Kroatien og Ungarn i samme hændelse.

**Ændret**
- `wnv-eu`: 1.926 lokalt erhvervede tilfælde i 19 lande og 222 områder, ECDC pr. 14. oktober, ugerapport uge 42: https://www.ecdc.europa.eu/sites/default/files/documents/communicable-disease-threats-report-week-42-2026.pdf Italien 764, Grækenland 455, Frankrig 159, Spanien 141, Rumænien 121 og Nordmakedonien 70. Slovenien er kommet til med 3 tilfælde og har fået en stedknude. Månedsrapporten i samme ugerapport giver 130 dødsfald i EU og EØS og 11 i kandidatlandene pr. 7. oktober, så `gap` om det manglende dødstal er fjernet. Nyt punkt i forløbet og i talserien, `place`, `cases`, `extra` og `note` er opdateret. Uge 42 har erstattet uge 41 i `src`, fordi punktet 7. oktober selv bærer uge 41.
- `dengue-eu`: Italien 70 og Frankrig 6 lokalt erhvervede tilfælde, ECDC pr. 14. oktober, samme ugerapport. Ny klynge, den anden i Rom, så Italien har syv klynger, alle aktive. Nyt punkt i forløbet og i talserien, `cases` og `extra` er opdateret. Uge 42 har erstattet uge 41 i `src`.
- `chik-fr`: 163 lokalt erhvervede tilfælde i Frankrig og 1 i Italien, ECDC pr. 14. oktober, samme ugerapport. 17 nye på en uge, 21 klynger, hvoraf 17 er aktive, ny klynge i Sainte-Eulalie i Gironde, og klyngen i Rom er lukket. Nyt punkt i forløbet, `place`, `cases` og `extra` er opdateret. Uge 42 har erstattet uge 41 i `src`.
- `h5n1-kh`: `cases` har fået kilde og dato: WHO Vestlige Stillehav har 5 tilfælde og 1 dødsfald i Cambodja i 2026 pr. 6. september, før tilfældet fra Oddar Meanchey med symptomdebut 24. september: https://cdn.who.int/media/docs/default-source/wpro---documents/emergency/surveillance/avian-influenza/ai_20261009.pdf
- `h5n1-bd`: `cases` har fået kilde og dato: det fjerde laboratoriebekræftede humane tilfælde af A(H5) i Bangladesh i 2026, WHO pr. 6. september: https://cdn.who.int/media/docs/default-source/influenza/human-animal-interface-risk-assessments/influenza-at-the-human-animal-interface-summary-and-assessment--from-8-august-to-6-september-2026.pdf Sætningen om, at alle årets tilfælde har været hos børn, er flyttet uændret fra `cases` til `extra`, se Usikkert.
- `sfts-th`: `cases` har fået kilde og dato: 3 tilfælde og 2 dødsfald i 2026, Thailands Department of Disease Control gengivet af Thai PBS World pr. 16. september: https://www.thaipbsworld.com/around-thailand/558076 Tallene er uændrede.

**Nye**
- Ingen. DK-VET meldte 7. oktober nye fund af rævens dværgbændelorm hos ræve på Rømø og i Midtjylland, 18 positive af 820 undersøgte ræve siden 2022: https://dkvet.dk/nyheder/2026/dvaergbaendelorm-paa-roemoe-og-i-midtjylland/ Ikke taget med, fordi det er overvågning af en parasit hos dyr uden meldte tilfælde hos mennesker og ikke et udbrud.

**Urørt**
- 35 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Europa op. Resten hører til de andre kørsler i vagtplanen.
- `cchf-es`: ECDC melder ingen nye tilfælde, fortsat 4 pr. 14. oktober. `ebola-nl`: RIVM har intet nyt om patienten efter 10. oktober. `salmonella-dk` 16 dage siden seneste punkt og `h5n1-dk` 16 dage: SSI og DK-VET er uændrede. `salmonella-eu`, `cre-eu`, `sindbis-de` og `malaria-de`: ikke nævnt i ECDC's ugerapport uge 42.

**Usikkert**
- `wnv-eu`: ECDC skriver 222 områder i 19 lande, men listen over områder har 18 lande. Moldovas ene tilfælde har ukendt smittested. Siden skriver 19 lande, som ECDC gør.
- `wnv-eu`: NaTHNaC skriver 748 tilfælde i Italien pr. 15. oktober og 455 i Grækenland. ECDC har 764 for Italien pr. 14. oktober. Siden følger ECDC.
- `h5n1-bd`: WHO's risikovurdering skriver ikke, at alle årets tilfælde har været hos børn. Sætningen stod på siden før og er ikke slået op i denne kørsel.
- `difteri-afro`: NaTHNaC skriver 161 bekræftede tilfælde og 11 dødsfald i Senegal pr. 5. oktober, mens ECDC skriver 248 bekræftede pr. 4. oktober efter Senegals sundhedsministerium. Ingen ændring, siden følger ECDC.
- Kontrollen advarer nu om 3 hændelser, hvor `cases` har tal uden opgørelsesdato: `difteri-ng`, `cchf-ir` og `altnv-cn`.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi værktøjet add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 39edddb.

**Til gennemgang**
- Nyt i GENNEMGANG.md: `sfts-th`, punktet 22. september er mærket omtrentligt, men Thai PBS World bragte tallene 17. september.

### Kl. 05.20, bred gennemgang

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (seneste meddelelse er fortsat 14. oktober, som står på siden) og dengue (dashboardet pr. 16. oktober er indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1066 af 16. oktober (ingen nye humane tilfælde af fugleinfluenza 9. til 15. oktober), ECDC's ugerapport uge 42 (indarbejdet af kørslen kl. 00.20), UKHSA (ugeoversigten uge 41 er fortsat den nyeste), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapporter (153 er fortsat den nyeste, også i insp.cd's medieliste). Kenyas sundhedsministerium hos APO Group (intet nyt efter 7. oktober). Yakima Health Districts pressemeddelelser. US CDC om mæslinger. Nigerias NCDC (nyeste ugerapport er fortsat uge 31). Søgninger efter nyt fra PAHO, Africa CDC og WHO AFRO (ingen nye rapporter fundet), om pest på Madagaskar, Krim-Congo hæmoragisk feber i Iran og miltbrand i Zambia. Statens Serum Institut, DK-VET, RIVM og Robert Koch Institut blev gennemgået af kørslen kl. 00.20 og er ikke slået op igen.

**Ændret**
- `ebola-ke`: 3 bekræftede tilfælde og 1 dødsfald, Kenyas sundhedsministerium pr. 16. oktober. Pressemeddelelsen fra generaldirektøren for sundhed, Nairobi 16. oktober, er læst som billede gengivet af Outbreak News Today: https://outbreaknewstoday.substack.com/p/kenya-reports-3rd-ebola-case Det tredje tilfælde er en 65-årig kvinde, primær kontakt og nær slægtning til de to første tilfælde, i karantæne siden 6. oktober, positiv på National Virology Reference Laboratory og KEMRI. 127 af 130 kontakter er opsporet og i karantæne, og 685.027 rejsende er screenet pr. 15. oktober. Nyt punkt i forløbet, `cases`, `extra` og `gap` er opdateret, og kilden er sat i `src` med tilføjelsen `, medie`. Trinnet er uændret `smitte`.
- `h5n1-us`: trinnet er flyttet fra `reservoir` til `udbrud`. Yakima Health District melder 15. oktober i samarbejde med Washingtons sundhedsministerium et bekræftet tilfælde af fugleinfluenza hos en beboer i Yakima County, som var udsat for smittet malkekvæg: https://www.yakimacounty.us/DocumentCenter/View/46716 Patienten har ikke været alvorligt syg eller indlagt og er isoleret i hjemmet. Nyt punkt i forløbet med trinnet, `stage`, `disease`, `cases`, `extra` og `naeste` er opdateret, `gap` er tilføjet, og pressemeddelelsen er sat i `src`.

**Nye**
- Ingen. Pest på Madagaskar: Madagaskars sundhedsministerium melder efter Xinhua og Midi Madagasikara 4 bekræftede tilfælde i Ankazobe, Anjozorobe og Ambohimahasoa siden slutningen af juli og 5 mistænkte i Midongy Atsimo 10. oktober: https://www.thestar.com.my/news/world/2026/10/14/madagascar-reports-4-confirmed-plague-cases og https://midi-madagasikara.mg/peste-quatre-cas-confirmes-et-plusieurs-cas-suspects-sous-surveillance/ Ikke taget med, fordi pest er endemisk på Madagaskar med en årlig sæson fra september til april, og ingen myndighed kalder årets sæson usædvanlig. Se Usikkert om lungepest.

**Urørt**
- 39 hændelser uden nyt i kilderne.
- Rundtur: `cchf-ir` 27 dage siden seneste punkt, `chik-am` 25, `difteri-ng` 23, `anthrax-zm` 19, `altnv-cn` 19, `mpox-mo` 17, `h5n1-dk` 16, `salmonella-dk` 16, `cre-eu` 15, `maesling-am` 14 og `cyclospora-us` 12: søgt eller slået op, intet nyt fra myndighederne. `ebola-drc`: situationsrapport 154 findes endnu ikke. `h5n1-kh`: WHO WPRO's oversigt nummer 1066 har intet nyt tilfælde. `maesling-us`: se Usikkert.

**Usikkert**
- `maesling-us`: CIDRAP skriver, at US CDC melder 4.410 tilfælde: https://www.cidrap.umn.edu/measles/us-measles-cases-grow-8-1-week-total-4410-cases Hentningsværktøjet viser fortsat 4.080 pr. 8. oktober, opdateret 9. oktober, på https://www.cdc.gov/measles/data-research/index.html og et direkte opslag giver 403. Tallet er ikke sat ind.
- `ebola-ke`: Kenyas sundhedsministeriums pressemeddelelse om det tredje tilfælde er kun fundet som billede hos Outbreak News Today. Africanews' artikel kunne ikke hentes ad nogen af de to veje (direkte opslag uden tekst, hentningsværktøjet fik ikke tilladelse).
- `h5n1-us`: Yakima Health District nævner ikke undertypen hos patienten. Hændelsens sted står fortsat som Minnesota, Dakotaerne og Wisconsin, se Til gennemgang.
- Pest på Madagaskar: Outbreak News Today skriver 16. oktober efter sundhedsministeriet, at tre af tilfældene i Midongy Atsimo er lungepest, mens Xinhua og Midi Madagasikara skriver, at de fem tilfælde dér er mistænkte og venter på laboratoriesvar. Ministeriets egen udmelding er ikke fundet.
- Kontrollen advarer fortsat om 3 hændelser, hvor `cases` har tal uden opgørelsesdato: `difteri-ng`, `cchf-ir` og `altnv-cn`.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi værktøjet add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 68c338d.

**Mediesporet**
- Ét par har status afventer: `IL-SY`, som venter på ejerens afgørelse i GENNEMGANG.md. Ikke afgjort. Stregens nye artikler handler om diplomati og landbrug ved Golanhøjderne, ikke om kampe med syriske regeringsstyrker: The Jerusalem Post 17. oktober om Netanyahus telefonsamtale med al-Sharaa (https://www.jpost.com/middle-east/article-911941) og The National 16. oktober om syriske landmænd ved grænsen (https://www.thenationalnews.com/news/mena/2026/10/16/syria-israel-golan-sufa-53/).
- Godkendt: ingen. Afvist: ingen.

**Til gennemgang**
- Nyt i GENNEMGANG.md: `h5n1-us`, skal det humane tilfælde i Washington være en egen hændelse? Og `OPDATERING.md`, en hurtigere vej til DR Congos situationsrapporter.

### Kl. 11.20, Asien og Mellemøsten: intet nyt
Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (seneste meddelelse er fortsat 14. oktober, dagens er normalt ikke ude kl. 11) og dengue (dashboardet pr. 16. oktober er indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1066 (ingen nye humane tilfælde af fugleinfluenza 9. til 15. oktober), ECDC uge 42, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser 16. og 17. oktober (et importeret denguetilfælde, to importerede chikungunyatilfælde og et sporadisk tilfælde af melioidose, intet til siden). WHO EMRO's nyheder (beredskab mod Bundibugyo-virus i regionen, ingen tilfælde). Søgninger efter nyt om Krim-Congo hæmoragisk feber i Iran (`cchf-ir`, 27 dage siden seneste punkt) og dengue i Sri Lanka: intet nyt fra myndighederne. Usikkert: Sri Lankas side https://www.dengue.health.gov.lk/ kunne ikke hentes ad nogen af de to veje (direkte opslag afbrudt af serveren, hentningsværktøjet afvist af robots.txt), så `dengue-asien` er urørt. Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi add_repo ikke findes i kørslen, og kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 5949e4b.

### Kl. 15.20, nyt lag: datacentre, ændret af ejeren

Ingen gennemgang af kilder og ingen ændrede tal i datasættet.

**Ændret på siden**
- Nyt lag, Datacentre, med en knap ved siden af rejsevejledningerne og en kontakt under Lag på mobilen. Laget er slået fra, når siden åbner. Det viser de største datacentre i verden i tre tilstande: i drift (fyldt prik), under opførelse (halvfyldt) og planlagt eller godkendt (stiplet). Prikkens areal følger IT-effekten.
- Et tryk på et datacenter viser status, effekt nu og planlagt, ejer og brugere, forbrug og energi, tidslinje og kilder efter en fast skabelon. Felter uden kilde står som "ikke oplyst". Skøn er mærket med kildens navn.
- Første udgave har Epoch AI's 94 anlæg fra Frontier Data Centers: https://epoch.ai/data/ai-data-centers (CC BY 4.0). Placeringen er slået op i OpenStreetMap (ODbL). Laget tæller ikke med i alvor, søljen eller beskeder.

**Ændret i driften**
- Udrulningen henter datacentrene ved hver kørsel med `tools/hent-datacentre.mjs`. Reglerne står i OPDATERING.md under Datacentre.

### Kl. 15.50, datacentre: danske og udenlandske anlæg

Ingen gennemgang af kilder til smitteudbruddene og ingen ændrede tal i datasættet.

**Ændret på siden**
- Laget Datacentre har fået 55 anlæg mere med kilder, i alt 149. 15 er danske: Apple i Viborg, Meta i Odense, Google i Fredericia, Microsofts anlæg i Høje-Taastrup, Køge og Roskilde, Microsofts planlagte anlæg i Tinghøj, Lunde og Bramming, Gefion i København, atNorth i Ølgod og Haslev, Prime Data Centers og Thylander i Esbjerg og GARBE på Falster. 40 er store campusser uden for USA og Epochs liste.
- De danske og 10 af de udenlandske er efterprøvet mod kilderne felt for felt. Rettet blandt andet: Gefions indvielse er 23. oktober 2024 og investeringen 600 mio. kr. fra Novo Nordisk Fonden, Faxe Byråds afstemning om atNorth i Haslev er 28. maj 2026, og Wonder Valley i Canada har ingen IT-effekt, fordi de 7,5 GW er kraftproduktion.
- Siger kilden ikke, om tallet er IT-effekt eller nettilslutning, står der effekt. Et felt uden kilde står som "ikke oplyst".

**Til gennemgang**
- Nyt i GENNEMGANG.md under Datacentre: de 30 udenlandske anlæg, der ikke er efterprøvet, Gefion under 50 MW og Microsofts anlæg i Roskilde.

### Kl. 17.20, Afrika og Amerika

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (meddelelsen 17. oktober, og meddelelserne 15. og 16. oktober, som er lagt ud senere end de tidligere kørsler) og dengue (dashboardet pr. 17. oktober), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1066, ECDC's ugerapport uge 42, UKHSA (ugeoversigten uge 41 er fortsat den nyeste), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapport 154, fundet gennem insp.cd's medieliste. US CDC om mæslinger (opdateret 16. oktober). WHO AFRO's side med udbrud og nødsituationer (intet nyt efter 9. oktober). Søgninger efter nyt fra Africa CDC og PAHO (ingen nye rapporter fundet) og om ebola i Kenya (intet nyt efter det tredje tilfælde 16. oktober).

**Ændret**
- `ebola-drc`: 9.348 bekræftede tilfælde og 4.510 dødsfald, DR Congos sundhedsministerium pr. 15. oktober, situationsrapport 154 offentliggjort 16. oktober: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_154_15_10_2026.pdf 71 nye tilfælde på et døgn (Ituri 41, Nordkivu 22, Tshopo 7, Haut-Uélé 1) og 32 nye dødsfald (18 i lokalsamfundet, 14 på behandlingscentre). Tallene er læst i PDF'ens tekstlag og som billede af forsiden, og de stemmer med rapport 153 plus døgnets tal. Nyt punkt 16. oktober i forløbet og i talserien (15. oktober), `cases`, `extra` og `gap` er opdateret. Rapport 154 har erstattet 153 i `src`, fordi punktet 15. oktober selv bærer rapport 153.
- `maesling-bd`: 211.990 mistænkte og 23.057 bekræftede tilfælde, 1.085 dødsfald blandt mistænkte og 104 blandt bekræftede tilfælde, DGHS pr. 17. oktober: https://dghs.gov.bd/pages/press-releases/6ad34109e0cf99482931056a Tre nye punkter i forløbet og i talserien for 15., 16. og 17. oktober efter meddelelserne https://dghs.gov.bd/pages/press-releases/6ad23de62e520f8fc88b7054 (209.876 mistænkte, 22.926 bekræftede, 1.077 dødsfald blandt mistænkte) og https://dghs.gov.bd/pages/press-releases/6ad23d92ffd11fcb4bdba153 (211.040 mistænkte, 22.972 bekræftede, 1.082 dødsfald blandt mistænkte). Tallene er læst i PDF'ernes tekstlag og som billede af siden, og hver dag stemmer med dagen før plus døgnets tal. Grafens dødstal er de to rækker lagt sammen, som `extra` forklarer. `cases`, `extra` og `src` er opdateret.
- `dengue-bd`: 110.312 indlagte og 342 dødsfald i 2026, DGHS pr. 17. oktober: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php 1.872 nye indlagte og 7 nye dødsfald på et døgn, uge 41 indtil videre 13.230 tilfælde og 43 dødsfald. Tallene er læst i sidens rå tekst og stemmer med gårsdagens tal plus døgnets. Nyt punkt i forløbet og i talserien, `cases` er opdateret.
- `maesling-us`: 4.410 bekræftede tilfælde i 2026, heraf 4.392 meldt af 47 jurisdiktioner, US CDC pr. 15. oktober, opdateret 16. oktober: https://www.cdc.gov/measles/data-research/index.html 96 procent (4.228 af 4.410) hører til et udbrud, 42 udbrud. Læst to gange uafhængigt gennem hentningsværktøjet. Nyt punkt i forløbet og i talserien, `cases` og `extra` er opdateret.

**Nye**
- Ingen. NaTHNaC melder 16. oktober 59 bekræftede tilfælde af hantavirus i Argentina i 2026 pr. 3. oktober. Ikke taget med, fordi hantavirus er endemisk i Argentina, og ingen myndighed kalder året usædvanligt.

**Urørt**
- 37 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Afrika og Amerika op. Resten hører til de andre kørsler i vagtplanen.
- `ebola-ke`: intet nyt efter det tredje tilfælde 16. oktober. `maesling-am`: næste PAHO-rapport 22. oktober. `kolera`, `difteri-afro`, `difteri-ng`, `anthrax-zm`, `gul-feber-gh`, `chik-am`, `mpox-mo`, `cyclospora-us`, `dengue-fl` og `h5n1-us`: intet nyt fra myndighederne siden forrige gennemgang.

**Usikkert**
- `ebola-drc`: Nord-Ubangi er fortsat ikke bekræftet af DR Congos myndigheder. Situationsrapport 154 skriver syv provinser. CIDRAP skriver 16. oktober efter Reuters, at landet endnu ikke har meldt tilfældene officielt.
- `maesling-bd`: DGHS' liste har to meddelelser dateret 14. oktober. Den anden (https://dghs.gov.bd/pages/press-releases/6ad23e48fde009fa70fc5b09) har de samme tal som den, der står på siden. Meddelelserne for 15. og 16. oktober er lagt ud efter kørslen 16. oktober kl. 17.20.
- `kolera`: WHO's egen udmelding om over 51.400 tilfælde i DR Congo er fortsat ikke fundet.
- Kontrollen advarer fortsat om 3 hændelser, hvor `cases` har tal uden opgørelsesdato: `difteri-ng`, `cchf-ir` og `altnv-cn`.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi værktøjet add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 8d36def.

**Mediesporet**
- Ét par har status afventer: `IL-SY`, som venter på ejerens afgørelse i GENNEMGANG.md. Ikke afgjort. En ny artikel fra Al Jazeera 17. oktober handler efter overskriften om israelske razziaer og anholdelser i det sydlige Syrien: https://www.aljazeera.com/features/2026/10/17/israeli-raids-and-arrests-in-southern-syria-push-population-to-the-brink
- Godkendt: ingen. Afvist: ingen.

**Til gennemgang**
- Nyt i GENNEMGANG.md: `tools/hent-kilder.mjs`, delen `dghs` viser kun den nyeste meddelelse om mæslinger.

## 16. oktober 2026

### Kl. 00.20, Europa og Danmark

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON 620 fra 10. oktober), DGHS' mæslinger og dengue (allerede indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1065, ECDC's ugerapport uge 41 (næste udkommer fredag), UKHSA's udgivelser (ugeoversigten uge 41 er indarbejdet af kørslen kl. 17.20), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Sri Lankas side kunne ikke hentes af scriptet. ECDC's ugerapport uge 40 for tal og datoer til `cases`. Statens Serum Instituts liste over aktuelle sygdomsudbrud (senest redigeret 7. oktober, intet nyt). DK-VET's nyheder (intet nyt efter fundet i sæler). RIVM's side om ebola (seneste melding om patienten 10. oktober, ny oversigt 12. oktober om DR Congo og Kenya). Robert Koch Instituts Epidemiologisches Bulletin 42/2026 af 15. oktober (STIKO's anbefaling om vaccination mod zoonotisk influenza A(H5), ingen udbrud). Koordinaterne i alle hændelser og stedknuder er kontrolleret for ombyttet længde- og breddegrad. Ingen fejl fundet.

**Ændret**
- `mers-sa`: `cases` har fået kilde og dato: 2 tilfælde og 1 dødsfald i 2026, ECDC pr. 29. september: https://www.ecdc.europa.eu/sites/default/files/documents/communicable-disease-threats-report-week-40-2026.pdf Tallene er uændrede.
- `h9n2-cn`: `cases` har fået kilde og dato: WHO Vestlige Stillehav pr. 25. september. ECDC's ugerapport uge 40 skriver, at de to tilfælde blev meldt i WHO Vestlige Stillehavs ugeoversigt nummer 1063 offentliggjort 25. september: https://www.ecdc.europa.eu/sites/default/files/documents/communicable-disease-threats-report-week-40-2026.pdf Tallene er uændrede.
- `chik-am`: `cases` har fået kilde og dato: 250.051 tilfælde og 87 dødsfald i 26 lande uden EU og EØS, ECDC pr. 30. august, efter samme ugerapport. Tallene er uændrede.

**Nye**
- Ingen. CIDRAP omtaler 14. oktober en undersøgelse i CDC's tidsskrift Emerging Infectious Diseases, hvor fire isbjørne i Østgrønland i 2025 havde antistoffer mod H5N1: https://www.cidrap.umn.edu/avian-influenza-bird-flu/greenland-4-polar-bears-test-positive-h5n1-avian-flu-antibodies Ikke taget med, fordi det er antistoffer fra prøver taget i 2024 og 2025 i en forskningsundersøgelse og ikke et aktuelt udbrud meldt af en myndighed.

**Urørt**
- 38 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Europa op. Resten hører til de andre kørsler i vagtplanen.
- `ebola-nl`: RIVM har intet nyt om patienten efter 10. oktober. `wnv-eu`, `dengue-eu`, `chik-fr`, `cchf-es`, `salmonella-eu`, `cre-eu` og `sindbis-de`: ECDC's næste ugerapport kommer fredag. `salmonella-dk` 15 dage siden seneste punkt og `h5n1-dk` 15 dage: SSI og DK-VET er uændrede.

**Usikkert**
- `wnv-eu` og `chik-fr`: NaTHNaC melder 15. oktober 178 lokalt erhvervede tilfælde af vestnilfeber og 162 af chikungunya i Frankrig pr. 12. oktober, og Outbreak News Today skriver 443 tilfælde af vestnilfeber i Grækenland. Den oprindelige myndighed er ikke slået op i denne kørsel, og ECDC's ugerapport fredag ventes. Ikke sat ind.
- Kontrollen advarer nu om 6 hændelser, hvor `cases` har tal uden opgørelsesdato.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi værktøjet add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk. `main` var skrevet om siden klonen blev lavet (tvungen opdatering). Kørslen arbejder på det seneste commit 206ae9f.

**Til gennemgang**
- Intet nyt.

### Kl. 05.20, bred gennemgang

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON 620 fra 10. oktober), DGHS' mæslinger (seneste meddelelse er fortsat 14. oktober, som står på siden) og dengue (dashboardet pr. 15. oktober er indarbejdet), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1065, ECDC's ugerapport uge 41 (uge 42 udkommer i dag, fredag, senere end denne kørsel), UKHSA (ugeoversigten uge 41 er indarbejdet), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser (intet om smitte). Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapport 152 (153 findes endnu ikke på den faste adresse). Floridas ugerapport uge 40. GPEI Polio This Week pr. 14. oktober. US CDC om mæslinger (uændret, 4.080 pr. 8. oktober, opdateret 9. oktober). FN's nyhedstjeneste om WHO's udtalelse om ebola i Kenya 15. oktober (intet nyt tal). Søgninger efter nyt fra WHO AFRO, Africa CDC og PAHO (ingen nye rapporter fundet) og om fugleinfluenza i Cambodja, Krim-Congo hæmoragisk feber i Iran og miltbrand i Zambia. Statens Serum Institut, DK-VET, RIVM og Robert Koch Institut blev gennemgået af kørslen kl. 00.20 og er ikke slået op igen.

**Ændret**
- `ebola-drc`: 9.212 bekræftede tilfælde og 4.441 dødsfald, DR Congos sundhedsministerium pr. 13. oktober, situationsrapport 152 offentliggjort 14. oktober: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_152_13_10_2026.pdf 68 nye tilfælde på et døgn (Ituri 41, Nordkivu 25, Haut-Uélé 2) og 31 nye dødsfald. Tallene er læst i PDF'ens tekstlag og som billede af forsiden, og de stemmer med rapport 151 plus døgnets tal. Nyt punkt 14. oktober i forløbet og i talserien (13. oktober), `cases` og `extra` er opdateret. Rapport 152 har erstattet 151 i `src`, fordi punktet 13. oktober selv bærer rapport 151.
- `dengue-fl`: 368 lokalt erhvervede tilfælde i 8 counties, Floridas sundhedsmyndighed pr. 10. oktober, ugerapport uge 40: https://www.floridahealth.gov/wp-content/uploads/2026/10/fl-arbovirus-report-w40-2026.pdf 72 nye på en uge, Hillsborough 310 og Pinellas 37. Nyt punkt i forløbet og i talserien, `cases` og `extra` er opdateret. Uge 40 har erstattet uge 39 i `src`, fordi punktet 3. oktober selv bærer uge 39.
- `polio`: Afghanistan 36 og Pakistan 6 tilfælde af vild poliovirus type 1 i 2026, GPEI pr. 14. oktober: https://polioeradication.org/about-polio/polio-this-week/ GPEI har nu samme tal for Pakistan som landets polioprogram, så den del af `gap` er fjernet. Vaccineafledt type 2: DR Congo 71, Mali 5. Vaccineafledt type 1: Sydsudan 16, Madagaskar 4. Vaccineafledt type 3: Nigeria 13. Nyt punkt i forløbet, `cases`, `extra` og `note` er opdateret.

**Nye**
- Ingen. CIDRAP skriver 15. oktober, at USDA har bekræftet H5N1 i to malkekvægsbesætninger i Yakima County i Washington, statens første: https://www.cidrap.umn.edu/avian-influenza-bird-flu/washington-state-confirms-first-h5n1-avian-flu-detection-dairy-cattle Ikke taget med, fordi `h5n1-us` handler om fjerkræ, og delstatens egen udmelding ikke er slået op.

**Urørt**
- 38 hændelser uden nyt i kilderne.
- Rundtur: `cchf-ir` 26 dage siden seneste punkt, `chik-am` 24, `difteri-ng` 22, `difteri-afro` 19, `anthrax-zm` 18, `h5n1-kh` 18, `altnv-cn` 18, `mpox-mo` 16, `h5n1-dk` 15, `salmonella-dk` 15, `cre-eu` 14, `maesling-am` 13 og `cyclospora-us` 11: søgt eller slået op, intet nyt fra myndighederne. Den nyeste ugerapport fra Nigerias NCDC, søgningen finder, er uge 31 (offentliggjort 24. august), som er ældre end tallene på siden.

**Usikkert**
- `kolera`: CIDRAP skriver 15. oktober efter WHO, at DR Congo har over 51.400 tilfælde og 1.487 dødsfald i 21 provinser i 2026: https://www.cidrap.umn.edu/west-nile/quick-takes-west-nile-deaths-us-cholera-dr-congo-yemen-avian-flu-uptick-us WHO's egen udmelding er ikke fundet, så tallet er ikke sat ind.
- `cchf-ir`: 26 dage uden nyt punkt. Kontrollen advarer efter 30 dage. Ingen iransk udmelding fundet.
- `ebola-drc`: rapport 152 skriver "Nord -Kivi" i overskriftsteksten. Tabellen og resten af rapporten har Nord-Kivu. Tallene er læst i tabellen.
- Kontrollen advarer fortsat om 6 hændelser, hvor `cases` har tal uden opgørelsesdato.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi værktøjet add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk. `main` var skrevet om siden klonen blev lavet (tvungen opdatering). Kørslen arbejder på det seneste commit 95ff7dd.

**Mediesporet**
- Ét par har status afventer: `IL-SY`, som venter på ejerens afgørelse i GENNEMGANG.md. Ikke afgjort. Stregens nye artikler (blandt andre Anadolu 15. oktober om israelske styrker, der satte ild til et hus og et foderlager i det sydlige Syrien: https://aa.com.tr/en/middle-east/israeli-forces-set-fire-to-house-animal-feed-warehouse-in-southern-syria/4089508) beskriver fortsat ikke kampe med syriske regeringsstyrker.
- Godkendt: ingen. Afvist: ingen.

**Til gennemgang**
- Intet nyt.

### Kl. 11.20, Asien og Mellemøsten

**Gennemgået:** Kildescriptet: WHO DON (ny DON om MERS i Saudi-Arabien 15. oktober), DGHS' mæslinger (seneste meddelelse er fortsat 14. oktober, som står på siden) og dengue (dashboardet pr. 15. oktober er indarbejdet), WHO SEARO's bulletin nummer 20 (næste ventes 21. oktober), WHO WPRO's oversigt nummer 1065 (udgaven 16. oktober findes endnu ikke på den faste adresse), ECDC's ugerapport uge 41, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser til og med 16. oktober. WHO EMRO's nyheder (seneste om Yemen 6. og 13. oktober, allerede indarbejdet i `kolera-ye`). Søgninger efter nyt om Krim-Congo hæmoragisk feber i Iran og fugleinfluenza i Cambodja (intet nyt fra myndighederne).

**Ændret**
- `mers-sa`: 8 laboratoriebekræftede tilfælde og 1 dødsfald i 2026, WHO pr. 5. oktober, efter WHO's Disease Outbreak News 15. oktober: https://www.who.int/emergencies/disease-outbreak-news/item/middle-east-respiratory-syndrome-coronavirus---kingdom-of-saudi-arabia Tilfældene er fordelt på Al Jouf (1), Arar (1), Hafr Al-Batin (1), Riyadh (2), Tabuk (1) og Taif (2), uden indbyrdes smitteforbindelse og uden sekundære tilfælde, og WHO's risikovurdering er uændret moderat. Tallene er læst i WHO's dataudtræk og på læserens side. Nyt punkt i forløbet, `place`, `cases`, `extra`, `note` og `gap` er opdateret, og DON'en er sat i `src`. ECDC's tal (2 tilfælde pr. 29. september) er forklaret i `extra`. Trinnet er uændret.
- `mpox-hk`: nyt punkt 16. oktober. Hongkongs sundhedsmyndighed CHP melder et importeret tilfælde hos en 36-årig mand, et fald på over 60 procent i bekræftede tilfælde i oktobers første 15 dage i forhold til samme periode i september, og at stedet Hutong i Mong Kok har lukket midlertidigt: https://www.info.gov.hk/gia/general/202610/16/P2026101600344.htm `extra` er opdateret med 116 tilfælde siden 2022 (91 lokale og 25 importerede), 23 tilfælde siden august og omkring 650 vaccinerede den seneste måned. `cases` er uændret, fordi CHP ikke skriver et nyt tal for 2026.
- `h5n1-kh`: nyt punkt 9. oktober. WHO WPRO's fugleinfluenzaoversigt nummer 1065 melder tilfældet fra Oddar Meanchey med symptomdebut 24. september og skriver, at patienten er rask igen, og at alle kendte kontakter overvåges: https://cdn.who.int/media/docs/default-source/wpro---documents/emergency/surveillance/avian-influenza/ai_20261009.pdf Oversigten er sat i `src`.

**Nye**
- Ingen.

**Urørt**
- 38 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Asien og Mellemøsten op. Resten hører til de andre kørsler i vagtplanen.
- `maesling-bd`: dagens meddelelse fra DGHS var ikke ude. `dengue-bd`: dashboardet er ikke opdateret efter 15. oktober. `dengue-asien`: Sri Lankas side kunne ikke hentes, se Usikkert. `kolera-ye`: intet nyt efter 13. oktober. `cchf-ir` 26 dage siden seneste punkt og `altnv-cn` 18 dage: intet nyt fra myndighederne. `pest-irkutsk` og `polio`: intet nyt siden seneste punkt.

**Usikkert**
- `mers-sa`: WHO's dataudtræk giver DON'en nummeret 2026-DON618, som også er nummeret på DON'en om ebola i DR Congo 25. september, og adressen med nummeret fører til ebola-DON'en. Kilden er derfor sat med DON'ens egen adresse. WHO skriver i oversigten, at fem af tilfældene var 70 år eller ældre, men gennemgangen af de otte tilfælde har fire på 70 år eller derover og en på 60 til 69 år. Aldersfordelingen er ikke skrevet på siden.
- `mers-sa`: hændelsen har ikke `live`. Ingen ændring, fordi WHO beskriver tilfældene som sporadiske, og det seneste blev bekræftet 21. september.
- `dengue-asien`: Sri Lankas National Dengue Control Unit kunne ikke hentes ad nogen af de to veje (curl: ingen forbindelse, hentningsværktøjet: afvist af robots.txt). Tallet står pr. 12. oktober.
- Kontrollen advarer fortsat om 6 hændelser, hvor `cases` har tal uden opgørelsesdato.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi værktøjet add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit abf767f.

**Til gennemgang**
- Nyt i GENNEMGANG.md: `mers-sa`, punktet 31. august og `naeste` passer ikke med WHO's nye tal.

### Kl. 17.20, Afrika og Amerika

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON'en om MERS 15. oktober), DGHS' mæslinger (seneste meddelelse er fortsat 14. oktober, også ved et nyt opslag kl. 17.26) og dengue (dashboardet pr. 16. oktober), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1065, ECDC's ugerapport uge 42 (udkom i dag), UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapport 153 (154 findes endnu ikke på den faste adresse). US CDC's side om ebola (opdateret 13. oktober) og om mæslinger (uændret, 4.080 pr. 8. oktober). PAHO's regionale situationsrapport 13 om mæslinger (allerede indarbejdet, næste 22. oktober). Kenyas sundhedsministerium hos APO Group (intet nyt efter 7. oktober). Søgninger efter nyt fra WHO AFRO, Africa CDC og WHO's samlede koleraopdatering (ingen nye rapporter fundet) og om gul feber i Ghana, miltbrand i Zambia og difteri i Nigeria (intet nyt fra myndighederne).

**Ændret**
- `ebola-drc`: 9.277 bekræftede tilfælde og 4.478 dødsfald, DR Congos sundhedsministerium pr. 14. oktober, situationsrapport 153 offentliggjort 15. oktober: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_153_14_10_2026.pdf 65 nye tilfælde på et døgn (Ituri 31, Nordkivu 28, Haut-Uélé 5, Tshopo 1) og 37 nye dødsfald. Tallene er læst i PDF'ens tekstlag og som billede af forsiden, de stemmer med rapport 152 plus døgnets tal, og ECDC's ugerapport uge 42 har de samme tal. Nyt punkt 15. oktober i forløbet og i talserien (14. oktober), `cases` og `extra` er opdateret. Rapport 153 har erstattet 152 i `src`, fordi punktet 14. oktober selv bærer rapport 152.
- `ebola-drc`: nyt punkt 16. oktober og nyt `gap`. ECDC skriver i ugerapporten uge 42 efter medier, der citerer myndighederne, at to tilfælde er bekræftet i Nord-Ubangi, som i så fald er den ottende ramte provins: https://www.ecdc.europa.eu/sites/default/files/documents/communicable-disease-threats-report-week-42-2026.pdf Reuters skriver 15. oktober efter to unavngivne sundhedsfolk, at tilfældene ikke er meldt officielt: https://wtaq.com/2026/10/15/congo-ebola-outbreak-spreads-to-new-province-bordering-central-african-republic/ Provinsen er ikke sat på kortet, og trinnet er uændret. Ugerapporten uge 42 er sat i `src` ved siden af uge 41.
- `ebola-ke`: `gap` er opdateret. ECDC skriver 16. oktober, at det andet tilfælde er på et behandlingscenter. Ugerapporten uge 42 er sat i `src`.
- `dengue-bd`: 108.440 indlagte og 335 dødsfald i 2026, DGHS pr. 16. oktober: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php 1.181 nye indlagte og 4 nye dødsfald på et døgn, uge 41 indtil videre 11.358 tilfælde og 36 dødsfald. Tallene er læst i sidens rå tekst og stemmer med gårsdagens tal plus døgnets. Nyt punkt i forløbet og i talserien, `cases` er opdateret.
- `difteri-afro`: nyt punkt 16. oktober efter ECDC's samlede oversigt over difteri i Afrika i ugerapporten uge 42: Senegals sundhedsministerium opgør 248 bekræftede tilfælde og 11 dødsfald i 51 sundhedsdistrikter i 13 regioner pr. 4. oktober. Ugerapporten er sat i `src`.

**Nye**
- Ingen. Difteri i Marokko: ECDC skriver efter medier, der citerer Marokkos sundhedsministerium, om to familieklynger i Souss-Massa 28. september med 1 bekræftet og 8 mistænkte tilfælde, heraf 2 døde, og USA's ambassade har udsendt et sundhedsvarsel (Outbreak News Today 16. oktober: https://outbreaknewstoday.substack.com/p/morocco-health-alert-issued-due-to). Ikke taget med som egen hændelse, fordi ministeriets egen udmelding ikke er fundet. Nævnt i punktet i `difteri-afro`.

**Urørt**
- 37 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Afrika og Amerika op. Resten hører til de andre kørsler i vagtplanen.
- `maesling-bd`: dagens meddelelse fra DGHS var ikke ude. `maesling-us`: US CDC uændret. `maesling-am`: næste PAHO-rapport 22. oktober. `gul-feber-gh` 7 dage siden seneste punkt: intet nyt efter sundhedsministerens udmelding 9. oktober. `kolera` 8 dage, `difteri-ng` 22 dage, `anthrax-zm` 18 dage, `chik-am` 24 dage, `mpox-mo` 16 dage og `cyclospora-us` 11 dage: intet nyt fra myndighederne. ECDC's ugerapport uge 42 har nye tal for `wnv-eu` (1.926 tilfælde i 19 lande), `dengue-eu` (Italien 70) og `chik-fr` (163), som hører til kørslen kl. 00.20 og ikke er sat ind.

**Usikkert**
- `ebola-drc`: Nord-Ubangi er ikke bekræftet af DR Congos myndigheder. Situationsrapport 153 skriver fortsat syv provinser.
- `kolera`: WHO's egen udmelding om over 51.400 tilfælde i DR Congo, som CIDRAP gengav 15. oktober, er fortsat ikke fundet. Tallet er ikke sat ind.
- `dengue-asien`: Sri Lankas side kunne ikke hentes af scriptet. Ikke forsøgt ad anden vej i denne kørsel, fordi Asien hører til kørslen kl. 11.20.
- Hentningsværktøjet fik ikke lov at åbne Outbreak News Today's artikel om Marokko. Den er læst gennem Substacks API med curl.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi værktøjet add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk på det seneste commit 21888c2. GitHubs API svarer heller ikke for nicco-dk/globus-nicco-dk.

**Mediesporet**
- Ét par har status afventer: `IL-SY`, som venter på ejerens afgørelse i GENNEMGANG.md. Ikke afgjort. Stregens nye artikler (blandt andre Naharnet 16. oktober: https://www.naharnet.com/stories/en/323132-netanyahu-says-spoke-with-sharaa-during-sweida-massacres og Anadolu 16. oktober: https://aa.com.tr/en/middle-east/syria-says-it-rejects-politicizing-druze-community-for-israeli-elections/4090455) handler efter adresserne om diplomati og politik. Artiklerne er ikke læst i denne kørsel, fordi parret venter på ejeren.
- Godkendt: ingen. Afvist: ingen.

**Til gennemgang**
- Intet nyt.

## 15. oktober 2026

### Kl. 00.20, Europa og Danmark

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON 620 fra 10. oktober), ECDC's ugerapport uge 41 (allerede indarbejdet, næste udkommer fredag), UKHSA's udgivelser (ugeoversigten over udbrud kommer torsdag), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. ECDC's ugerapporter uge 38 til 40 for lufthavnsmalaria i Frankfurt. ECDC's månedsrapport om mpox i EU og EØS for september. Statens Serum Instituts liste over aktuelle sygdomsudbrud (senest redigeret 7. oktober) og nyheder (seneste 7. oktober). DK-VET's nyheder og siden om fugleinfluenza i sæler. RIVM's side om ebola (seneste melding om patienten 10. oktober). Robert Koch Instituts Epidemiologisches Bulletin 41/2026.

**Ændret**
- `mpox`: nyt punkt 13. oktober. ECDC's månedsrapport for september melder 342 klade I-tilfælde i 17 lande i EU og EØS i september, flest i Spanien (94), mod 354 i august og 317 i juli, og 1.939 klade I-tilfælde i 23 lande fra oktober 2025 til september 2026. Data pr. 13. oktober: https://mpox-monthly.ecdc.europa.eu/ Tallene er læst i sidens rå tekst. `extra` er udvidet med tallene, og rapporten er sat i `src`. `cases` har fået kilde og dato: WHO pr. 31. juli 2026 efter situationsrapport 69 (https://cdn.who.int/media/docs/default-source/_sage-2026/multi-country-outbreak-of-mpox--external-situation-report_69.pdf). Tallene er uændrede.
- `malaria-de`: `cases` har fået kilde og dato: 8 tilfælde og 3 dødsfald, ECDC pr. 18. september: https://www.ecdc.europa.eu/sites/default/files/documents/communicable-disease-threats-report-week-38-2026.pdf Rapporten er sat i `src`. Tallene er uændrede. ECDC's ugerapport uge 39 skriver, at hændelsen sidst er omtalt 18. september.
- `h5n1-dk`: `cases` har fået kilde og dato: DK-VET pr. 1. oktober, sidens offentliggørelse: https://dkvet.dk/nyheder/2026/hoejpatogen-fugleinfluenza/ Tallene er uændrede.

**Nye**
- Ingen. ECDC's ugerapport uge 38 omtaler seks alvorlige tilfælde af botulisme i Danmark efter kosmetisk behandling med botulinumtoksin. Ikke taget med, fordi det er en forgiftning og ikke en smitsom sygdom, se GENNEMGANG.md.

**Urørt**
- 38 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Europa op. Resten hører til de andre kørsler i vagtplanen.
- `ebola-nl`: RIVM har intet nyt efter 10. oktober. `sindbis-de`, `wnv-eu`, `dengue-eu`, `chik-fr`, `cchf-es`, `salmonella-eu` og `cre-eu`: ECDC's næste ugerapport kommer fredag. `salmonella-dk` 14 dage siden seneste punkt og `h5n1-dk` 14 dage: SSI og DK-VET er uændrede.

**Usikkert**
- `mpox`: ECDC's side har ingen dato for offentliggørelsen, kun at data er pr. 13. oktober. Punktet er dateret 13. oktober. Adressen viser altid den seneste månedsrapport.
- `malaria-de`: Hessenschau skrev 29. september efter Frankfurts sundhedsmyndighed, at der ikke er meldt nye tilfælde efter 16. september: https://www.hessenschau.de/panorama/airport-malaria-in-frankfurt-suche-nach-der-ursache-geht-weiter-v1,malaria-frankfurt-flughafen-100.html Ikke sat ind som punkt, fordi myndighedens egen udmelding ikke er fundet.
- Kontrollen advarer nu om 9 hændelser, hvor `cases` har tal uden opgørelsesdato.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk.
- Udrulningen til Cloudflare fejler fortsat ved godkendelsen i alle timekørsler fra kl. 18.23 til 23.23 dansk tid 14. oktober, se GENNEMGANG.md. Dagens data er derfor ikke live.

**Til gennemgang**
- Nyt i GENNEMGANG.md: botulisme efter kosmetisk behandling i Danmark.

### Kl. 05.20, bred gennemgang

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON 620 fra 10. oktober), DGHS' mæslinger og dengue (allerede indarbejdet pr. 14. oktober), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1064, ECDC's ugerapport uge 41 (næste udkommer fredag), UKHSA's udgivelser (ugeoversigten over udbrud for uge 41 var endnu ikke udkommet), NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. Sri Lankas side kunne ikke hentes af scriptet. DR Congos situationsrapporter (151 er fortsat den nyeste på insp.cd). ECDC's ebolaside (9.144 og 4.410 pr. 12. oktober, som allerede står på siden). US CDC om mæslinger (uændret, 4.080 pr. 8. oktober, opdateret 9. oktober) og cyclospora (udbruddet erklæret slut 11. september). PAHO's epidemiologiske alarmer og opdateringer (seneste 26. august) og situationsrapporter om mæslinger (nummer 14 findes ikke endnu). Statens Serum Instituts liste over aktuelle sygdomsudbrud og DK-VET's nyheder (intet nyt). Søgninger efter nyt fra WHO AFRO, Africa CDC, om kolera i Zambia, ebola i Kenya, difteri i Nigeria, miltbrand i Zambia, Krim-Congo hæmoragisk feber i Iran, fugleinfluenza i Cambodja og klade I-mpox i USA.

**Ændret**
- Ingen hændelser. Kun `DATA_DATO` og `DATA_TID` er sat.

**Nye**
- Ingen. NaTHNaC melder vestnilfeber i USA (1.328 tilfælde pr. 13. oktober). Ikke taget med, fordi det er den almindelige sæson, og ingen myndighed kalder den usædvanlig.

**Urørt**
- Alle 41 hændelser. Ingen af de samlede kilder har nyt, der ikke allerede står på siden.
- Rundtur: `cchf-ir` 25 dage siden seneste punkt, `chik-am` 23, `difteri-ng` 21, `difteri-afro` 18, `anthrax-zm` 17, `h5n1-kh` 17, `altnv-cn` 17, `mpox-mo` 15, `h5n1-dk` 14, `salmonella-dk` 14, `cre-eu` 13, `maesling-am` 12 og `cyclospora-us` 10: søgt eller slået op, intet nyt fra myndighederne. Nigerias NCDC har ikke lagt ugerapporter ud efter uge 25 de steder, søgningen finder.

**Usikkert**
- `kolera`: NaTHNaC melder 14. oktober 909 tilfælde i Zambia, heraf 149 bekræftede, og 25 dødsfald siden udbruddet blev erklæret 28. juli: https://travelhealthpro.org.uk/outbreaks Punktet 8. oktober siger efter WHO, at Zambia erklærede et nyt udbrud 29. september. Datoerne passer ikke sammen, og Zambias egen myndighed er ikke fundet. Ikke sat ind.
- `cchf-ir`: 25 dage uden nyt punkt. Kontrollen advarer efter 30 dage. Ingen iransk udmelding fundet.
- Mediesporet: https://globus.nicco.dk/konflikter.json er fra 14. oktober kl. 08.24 dansk tid, fordi udrulningen fejler. Parrene er derfor tjekket ud fra den udgave.
- `TR>SA`: godkendt på tyrkiske embedsmænds oplysninger til Middle East Eye om luftforsvar og udstyr i Saudi-Arabien siden 2025 og Pakistans forsvarsministers udtalelse til Geo News gengivet af Al Jazeera. Tyrkiets udenrigsminister siger, at yderligere udstationering kræver parlamentets godkendelse.
- Udrulningen til Cloudflare fejler fortsat ved godkendelsen i alle timekørsler fra kl. 00.23 til 04.23 dansk tid 15. oktober, se GENNEMGANG.md. Data fra 14. oktober middag og frem er derfor ikke live.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk, og udrulningen følges gennem GitHubs MCP-værktøjer, fordi `gh api` afviser viderestillingen.

**Mediesporet**
- Otte par med status afventer er gennemgået, ud over `IL-SY`, som venter på ejeren. De øvrige par med status afventer i filen blev afgjort i kørslen 14. oktober kl. 17.20.
- Godkendt: `PK>SA` (militær støtte: Pakistan har styrker i Saudi-Arabien under Mekka-pagten, og militærets talsmand bekræfter, at de er i landet: https://www.aljazeera.com/news/2026/10/6/pakistan-turkiye-join-saudi-deterrence-against-houthis-what-that-means og https://www.uniindia.com/world/defence-pak-saudi-deployment/207608) og `TR>SA` (militær støtte: tyrkiske tekniske hold, luftforsvarssystemer og udstyr til elektronisk krigsførelse i Saudi-Arabien: https://www.middleeasteye.net/news/turkey-rules-out-launching-attacks-yemen-saudi-arabia og https://www.aljazeera.com/news/2026/10/6/pakistan-turkiye-join-saudi-deterrence-against-houthis-what-that-means).
- Afvist: `GB-US` (MI5's advarsler og en dødsulykke i en zoo: http://www.jpost.com/international/article-911583 og https://www.newsweek.com/man-killed-after-entering-uk-tiger-enclosure-similar-us-zoo-incidents-12551656), `JO-PS` (israelske angreb og razziaer i Gaza og på Vestbredden: https://www.middleeasteye.net/live-blog/live-blog-update/israel-kills-eight-gaza-families-forced-flee-homes og https://www.arabnews.com/middle-east/israeli-forces-detain-interrogate-95-palestinians-amid-west-bank-olive-harvest-rights-group-says-3005333), `SY-TR` (Houthi-angreb på Riyadh og israelske indtrængninger i Syrien: https://www.jpost.com/middle-east/article-911068 og https://www.thenationalnews.com/news/mena/2026/10/10/israel-holding-49-syrians-after-280-armed-incursions-in-september-says-un/), `QA-SA` (Qatars støtte til Saudi-Arabien og Houthi-angreb: https://www.middleeasteye.net/live-blog/live-blog-update/qatars-former-pm-urges-decisive-support-saudi-arabia-after-airport og https://www.al-monitor.com/originals/2026/10/booms-and-flight-disruptions-riyadh-saudi-houthi-war-escalates), `CN-IR` (Trump siger, at Kina og Rusland ikke hjælper Iran: https://www.arabnews.com/world/trump-says-he-does-not-believe-china-and-russia-are-helping-iran-at-all-3006030 og https://www.dailysabah.com/world/americas/china-russia-have-too-much-to-lose-by-enabling-tehran-trump) og `PL-RU` (Polens forsvarsproduktion og russiske angreb i Ukraine: https://www.euronews.com/2026/10/13/europe-must-switch-to-war-mode-defence-production-polish-defence-minister-says og https://www.theguardian.com/world/2026/oct/12/zelenskyy-vows-retaliate-russia-strikes-ukraine-power-grid).

**Til gennemgang**
- Nyt i GENNEMGANG.md: `kolera`, to forskellige datoer for udbruddet i Zambia.

### Kl. 11.20, Asien og Mellemøsten: intet nyt
Kildescriptet: WHO DON (ingen nye efter DON 620 fra 10. oktober), DGHS' mæslinger og dengue (meddelelsen og dashboardet pr. 14. oktober er allerede indarbejdet), WHO SEARO's bulletin nummer 20 (næste ventes 21. oktober), WHO WPRO's oversigt nummer 1064 (udgaven fra 9. oktober findes fortsat ikke på den faste adresse eller WPRO's oversigtsside), ECDC's ugerapport uge 41, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser 14. og 15. oktober. WHO EMRO's nyheder (seneste om sundhedsbehovet i regionen 14. oktober, intet hændelsesspecifikt). GPEI Polio This Week (stadig udgaven pr. 7. oktober). Søgninger efter nyt om fugleinfluenza i Cambodja, Bangladesh og Kina, MERS i Saudi-Arabien, Krim-Congo hæmoragisk feber i Iran og mpox i Hongkong. Sri Lankas National Dengue Control Unit kunne ikke hentes ad nogen af de to veje (curl: forbindelsen nulstillet, hentningsværktøjet: afvist af robots.txt), så `dengue-asien` står urørt pr. 12. oktober. Udrulningen fejler fortsat ved Cloudflares godkendelse (kode 6111), se GENNEMGANG.md.

### Kl. 17.20, Afrika og Amerika

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON 620 fra 10. oktober), DGHS' mæslinger (meddelelsen for 15. oktober var ikke ude kl. 17.30, seneste er 14. oktober, som allerede står på siden) og dengue (dashboardet er opdateret 15. oktober), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1065, ECDC's ugerapport uge 41, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. UKHSA's ugeoversigt over udbrud under overvågning uge 41 (udkommet i dag). US CDC om ebola (pr. 14. oktober) og mæslinger (uændret, 4.080 pr. 8. oktober, opdateret 9. oktober). ECDC's ebolaside (9.144 og 4.410 pr. 12. oktober, som allerede står på siden). DR Congos situationsrapport 152 findes endnu ikke på den faste adresse. PAHO's epidemiologiske alarmer og opdateringer (seneste 26. august) og siden om mæslinger i Amerika (situationsrapport 13 er fortsat den nyeste). Søgninger efter nyt fra WHO AFRO og Africa CDC (ingen ny ugebulletin fundet) og om ebola i Kenya.

**Ændret**
- `ebola-ke`: trinnet er flyttet fra udbrud til smitte. Sundhedsministeriet meldte 14. oktober Kenyas andet bekræftede tilfælde, et nært familiemedlem til det første tilfælde, som fik symptomer 13. oktober, mens han var i karantæne. I alt 2 bekræftede tilfælde og 1 dødsfald, og pr. 13. oktober 128 kontakter, heraf 113 opsporet og 108 i karantæne i Kenya, og 5 kontakter uden for Kenya, ifølge UKHSA's ugeoversigt uge 41: https://www.gov.uk/government/publications/outbreaks-under-monitoring-in-2026/outbreaks-under-monitoring-week-41-week-ending-11-october-2026 US CDC har 2 bekræftede tilfælde i Kenya pr. 14. oktober: https://www.cdc.gov/ebola/situation-summary/index.html AP gengiver ministeriets udmelding: https://abcnews.com/International/wireStory/kenya-confirms-ebola-case-relative-patient-137261113 Nyt punkt i forløbet med trinnet smitte, `stage` er sat til smitte, og `cases`, `extra`, `gap` og `naeste` er opdateret. UKHSA og AP er sat i `src`.
- `dengue-bd`: 107.259 indlagte og 331 dødsfald i 2026, DGHS' denguedashboard pr. 15. oktober: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php 1.943 nye indlagte og 10 dødsfald det seneste døgn, og uge 41 har indtil videre 10.177 tilfælde og 32 dødsfald. Tallene er læst i scriptets udtræk og i sidens rå tekst og stemmer med gårsdagens tal plus døgnets. Nyt punkt i forløbet og i talserien, og `cases` er opdateret.

**Nye**
- Ingen. UKHSA's ugeoversigt melder Krim-Congo hæmoragisk feber i Senegal (8 bekræftede tilfælde i 2026). Ikke taget med, fordi Senegal har sporadiske tilfælde hvert år. NaTHNaC melder difteri i Niger (949 mistænkte tilfælde og 36 dødsfald pr. 27. september). Niger indgår i `difteri-afro`, men tallet er ikke sat ind, fordi den oprindelige myndighed ikke er fundet.

**Urørt**
- 39 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Afrika og Amerika op. Resten hører til de andre kørsler i vagtplanen.
- `ebola-drc`: ingen nyere tal end situationsrapport 151 pr. 12. oktober. `maesling-us`: US CDC er ikke opdateret siden 9. oktober. `maesling-am`: PAHO's situationsrapport 13 er fortsat den nyeste. `dengue-fl`: Floridas ugerapport er ikke slået op i denne kørsel. `maesling-bd`: dagens meddelelse var ikke ude. Rundturen (`difteri-ng` 21 dage siden seneste punkt, `difteri-afro` 18, `anthrax-zm` 17, `chik-am` 23, `mpox-mo` 15, `maesling-am` 12 og `cyclospora-us` 10) er ikke gentaget, fordi kørslen kl. 05.20 slog dem op uden nyt.

**Usikkert**
- `ebola-ke`: sundhedsministeriets egen udmelding kunne ikke hentes ad nogen af de to veje (health.go.ke: ingen forbindelse med curl og afvist af robots.txt i hentningsværktøjet, og APO Group har ikke lagt den ud). Tallene bygger derfor på UKHSA og US CDC. US CDC's side har overskriften "as of Oct. 14", men datoen "Updated: October 13". The Kenya Times skriver, at patienten er flyttet til et behandlingscenter, uden at nævne hvor. Det er skrevet i `gap`.
- `ebola-drc`: UKHSA's ugeoversigt bruger også 9.066 bekræftede tilfælde pr. 11. oktober, mens situationsrapport 150 har 9.065 i tabellen. Se punktet i GENNEMGANG.md fra 14. oktober.
- Mediesporet: `AF-PK` er godkendt på to medier, der begge gengiver parternes egne udmeldinger (Pakistans militær og Talibans 203. korps). Begge parter bekræfter ildudvekslingen 10. oktober.
- Kontrollen advarer fortsat om 9 hændelser, hvor `cases` har tal uden opgørelsesdato.
- Repoet kunne fortsat ikke tilføjes som nicco-dk/globus-nicco-dk, fordi værktøjet add_repo ikke findes i kørslen. Kørslen arbejder gennem mikkelnicco/globus-nicco-dk.
- Udrulningen virker igen: timekørslerne fra kl. 13.23 til 17.23 dansk tid er gennemført, og konflikter.json på siden er fra kl. 17.23.

**Mediesporet**
- Seks par har status afventer. `IL-SY` venter på ejeren. De fem øvrige er gennemgået.
- Godkendt: `AF-PK` (pakistanske styrker og Talibans grænsestyrker udvekslede ild ved grænsen 10. oktober, i Kurram ifølge Pakistans militær og i Dand Patan i Paktia ifølge Talibans 203. korps: https://www.nation.com.pk/11-Oct-2026/12-khwarij-afghan-taliban-personnel-killed-pakistan-foils-border-infiltration-attempt-kurram og https://www.longwarjournal.org/archives/2026/10/taliban-pakistan-border-clashes-continue-after-moscow-talks-end-without-agreement.php).
- Afvist: `UA>RU` (krigen mellem landene, ikke militær støtte fra Ukraine til Rusland: https://www.rte.ie/news/ukraine/2026/1015/1595431-ukraine-russia/ og https://www.theguardian.com/world/2026/oct/13/allies-did-not-warn-kyiv-of-russian-ballistic-missile-strikes-says-zelenskyy), `IR>US` (henrettelsen af Fort Hood-skytten: https://www.cbc.ca/news/world/nidal-hasan-firing-squad-livestreamed-9.7374889 og https://www.latimes.com/world-nation/story/2026-10-08/pentagon-says-firing-squad-execution-of-fort-hood-shooter-nidal-malik-hasan-will-be-livestreamed), `IL-SA` (ofrene for Houthi-angrebene i Riyadh: https://www.arabnews.com/saudi-arabia/palestinian-father-of-six-killed-in-riyadh-airport-attack-was-returning-home-in-jeddah-3006280 og https://www.abc.net.au/news/2026-10-11/riyadh-airport-suspends-flights-houthi-attacks-middle-east/107253260) og `PL-UA` (russiske angreb på Ukraines elnet og ukrainske flygtninge i Polen: https://www.theguardian.com/world/2026/oct/12/zelenskyy-vows-retaliate-russia-strikes-ukraine-power-grid og https://www.dw.com/en/poland-lifeline-for-ukrainian-refugees-confronts-donor-fatigue-and-online-abuse-as-anti-ukrainian-sentiment-grows/a-79613292).

**Til gennemgang**
- Nyt i GENNEMGANG.md: udrulningen virker igen, så punktet om Cloudflares godkendelse kan lukkes.

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
- Nyt i GENNEMGANG.md: udrulningen til Cloudflare fejler ved godkendelsen, også før denne kørsels commit. Datakontrollen i workflowet bestod, men ændringerne er ikke live.

### Kl. 17.20, Afrika og Amerika

**Gennemgået:** Kildescriptet: WHO DON (ingen nye efter DON 620 fra 10. oktober), DGHS' mæslinger (meddelelsen for 14. oktober er allerede indarbejdet kl. 11.20) og dengue (dashboardet er opdateret 14. oktober), WHO SEARO's bulletin nummer 20, WHO WPRO's oversigt nummer 1064, ECDC's ugerapport uge 41, UKHSA, NaTHNaC, Outbreak News Today, CIDRAP og Hongkongs pressemeddelelser. DR Congos situationsrapporter 150 og 151 (nu på den faste adresse, 152 findes endnu ikke). US CDC om ebola (8.978 og 4.336 pr. 10. oktober, opdateret 13. oktober) og mæslinger (4.080 pr. 8. oktober, endnu ikke opdateret i dag). WHO AFRO's ugebulletiner (seneste er uge 39). PAHO's regionale situationsrapporter om mæslinger nummer 12 og 13. Søgninger efter nyt fra Africa CDC, om ebola i Kenya og gul feber i Ghana.

**Ændret**
- `ebola-drc`: 9.144 bekræftede tilfælde og 4.410 dødsfald, DR Congos sundhedsministerium pr. 12. oktober, situationsrapport 151 offentliggjort 13. oktober: https://insp.cd/wp-content/uploads/2026/10/SitRep_MVEBDB_151_12_10_2026.pdf 79 nye tilfælde på et døgn, 40 i Ituri, 27 i Nordkivu, 8 i Haut-Uélé og 4 i Tshopo, og 2.418 erklæret raske. Tallene er læst som tekst og som billede af siderne 1 og 2, og provinstallene summer til 9.144 og 4.410. Nyt punkt i forløbet dateret 13. oktober (offentliggørelsen) og nyt punkt i talserien pr. 12. oktober. `cases` og `extra` er opdateret, så de bygger på situationsrapporterne i stedet for medierne. Situationsrapport 151 er sat i `src` i stedet for 149, som punktet 10. oktober selv bærer.
- `dengue-bd`: 105.316 indlagte og 321 dødsfald i 2026, DGHS' denguedashboard pr. 14. oktober: https://dashboard.dghs.gov.bd/pages/heoc_dengue_v1.php 1.920 nye indlagte og 5 dødsfald det seneste døgn, og uge 41 har indtil videre 8.234 tilfælde og 22 dødsfald. Tallene er læst i sidens rå tekst og stemmer med gårsdagens tal plus døgnets. Nyt punkt i forløbet og i talserien, og `cases` er opdateret.

**Nye**
- `maesling-am`: mæslinger i Amerika, hårdest ramt Guatemala og Mexico. PAHO opgør 55.792 bekræftede tilfælde og 77 dødsfald i 17 lande og territorier fra 4. januar til 3. oktober, 4,8 gange så mange som i samme periode i 2025. Guatemala 34.355 tilfælde og 50 dødsfald, Mexico 13.595 og 23: https://www.paho.org/sites/default/files/2026/10/pahomeaslessitrep13esp.pdf Talserien har også udgaven pr. 19. september (53.957 og 68): https://www.paho.org/sites/default/files/2026/09/pahomeaslessitrep12eng.pdf Tidligere kørsler har set Guatemalas tal uden at tage dem med. Reglen om, at alder ikke er en afvisningsgrund, og PAHO's egen betegnelse af udbruddet som et udbrud i flere lande gør, at det hører til på siden.

**Urørt**
- 38 hændelser uden nyt i kilderne. Kørslen har slået hændelserne i Afrika og Amerika op. Resten hører til de andre kørsler i vagtplanen.
- `ebola-ke`: sundhedsministeriets seneste udmelding er fortsat den fra 11. oktober (122 kontakter, 108 i karantæne), som allerede står på siden. The Standard skriver 14. oktober, at der ikke er kommet flere tilfælde: https://www.standardmedia.co.ke/health/health-science/article/2001560076/contact-tracing-helps-keep-ebola-at-bay-eight-days-after-imported-fatal-case `gul-feber-gh`: intet nyere end sundhedsministerens udmeldinger 8. og 9. oktober fundet. `maesling-us`: US CDC er endnu ikke opdateret i dag. `dengue-fl`: Floridas ugerapport kommer torsdag. Rundturen (`mpox`, `chik-am`, `difteri-ng`, `difteri-afro`, `anthrax-zm`, `mpox-mo`) er ikke gentaget, fordi kørslen kl. 05.20 slog dem op uden nyt.

**Usikkert**
- `ebola-drc`: situationsrapport 150 pr. 11. oktober har 9.065 bekræftede tilfælde i oversigten og tabellen, men 9.066 i teksten. AP og Al Jazeera gengav 9.066, som står i punktet 13. oktober. 9.065 plus 79 giver de 9.144 i rapport 151. Punktet er ikke rettet, se GENNEMGANG.md.
- `maesling-am`: PAHO's tal for USA (3.887 pr. 3. oktober) er lavere end US CDC's (4.080 pr. 8. oktober) på grund af opgørelsesdatoerne. Begge står i hver sin hændelse. Ingen alvor er sat, fordi WHO ikke har vurderet risikoen som høj for regionen i de læste rapporter.
- `mpox`: kontrollen advarer fra i morgen om en aktiv hændelse uden nyt punkt i over 30 dage. Ikke slået op i denne kørsel.
- Kontrollen advarer fortsat om 12 hændelser, hvor `cases` har tal uden opgørelsesdato. Ingen af dem er opdateret i denne kørsel.
- Repoet kunne ikke tilføjes under navnet nicco-dk/globus-nicco-dk i denne session. Kørslen har hentet, sendt og fulgt udrulningen gennem det gamle navn mikkelnicco/globus-nicco-dk, som GitHub viderestiller.
- Udrulningen til Cloudflare fejlede også i alle timekørsler fra kl. 12.23 til 16.23 dansk tid ved godkendelsen, se GENNEMGANG.md. Dagens data er derfor ikke live, og konflikter.json på siden er fra kl. 08.24.

**Mediesporet**
- De ti mest omtalte par med status afventer er gennemgået, ud over `IL-SY`, som venter på ejeren.
- Godkendt: `KP>RU` (militær støtte: Nordkorea har sendt anslået 14.000 til 15.000 soldater til Rusland siden 2024 ifølge ukrainske og sydkoreanske skøn, og Kim Jong-un lover fortsat støtte: https://www.dailymaverick.co.za/article/2026-10-07-north-korea-criticises-us-support-for-taiwan-pledges-backing-for-russia/ (Reuters) og https://www.vanguardngr.com/2026/10/north-koreas-kim-hails-good-friendship-with-putin-in-birthday-letter/ (AFP)).
- Afvist: `AU-MX` (dom i drabssagen om surferne: https://www.aljazeera.com/news/2026/10/10/mexican-judge-sentences-three-men-for-murders-of-australian-us-surfers og https://www.dw.com/en/mexico-court-finds-three-men-guilty-of-murder-of-australian-us-surfers/a-79624125), `BD-SA` (bangladeshisk mufti dræbt i Houthi-angrebet på Riyadh og økonomiske følger: https://gulfnews.com/world/gulf/saudi/wearing-ihram-bangladeshi-mufti-killed-in-riyadh-airport-attack-before-reaching-mecca-1.500708055 og https://www.thedailystar.net/news/bangladesh/news/saudi-conflict-risks-another-economic-blow-4297391), `GB-IL` (sanktioner og striden om konsulatet: https://www.dw.com/en/uk-scales-back-jerusalem-consulate-after-israel-dispute/a-79590790 og https://www.aljazeera.com/news/2026/10/8/king-david-hotel-bombing-to-consulate-row-a-timeline-of-uk-israel-tension), `DZ-SA` (Algeriet fordømmer Houthi-angrebene: https://www.arabnews.com/saudi-arabia/arab-gcc-leaders-condemn-deadly-houthi-attacks-on-saudi-airports-3005199 og https://www.straitstimes.com/world/middle-east/saudi-arabia-says-three-dead-at-airports-after-houthis-claim-attacks), `IT-US` (en ærkebiskops kritik af en henrettelse og Columbus Day: https://www.cbc.ca/news/world/us-archbishop-condemns-firing-squad-execution-livestream-9.7378152 og https://www.newsweek.com/map-shows-how-states-mark-columbus-day-as-trump-vows-to-protect-holiday-12552798), `GB-RU` (efterretningstjenestens advarsler: https://www.nytimes.com/2026/10/13/world/europe/mi5-uk-threat-iran-russia.html og https://www.wsj.com/world/europe/u-k-spy-agency-confronts-escalating-hybrid-war-with-russia-and-iran-4c54f9ab), `DE-UA` (retssagen om Nord Stream: https://www.bbc.co.uk/news/articles/cw99zpmnxzmjo og https://www.reuters.com/world/ukrainian-ex-officer-stands-trial-germany-over-nord-stream-bombing-2026-10-14/) og `IL-OM` (en planlagt flykapring og et afvist fragtfly: https://www.washingtonpost.com/world/2026/10/09/flydubai-co-pilot-planned-911-style-attack-israels-main-airport-uae-says/ og https://www.middleeasteye.net/news/israel-turns-back-ethiopian-airlines-cargo-flight-over-indonesian-pilots-nationality).
- Ikke afgjort: `TR>SA`. Euronews og Al Jazeera beskriver en aftale om at sende tyrkiske styrker til Saudi-Arabien, men ikke at de er sendt, og Tyrkiets parlament har ikke godkendt det: https://www.euronews.com/2026/10/06/turkey-and-pakistan-to-send-troops-to-saudi-arabia-under-defence-pact og https://www.aljazeera.com/news/2026/10/6/pakistan-turkiye-join-saudi-deterrence-against-houthis-what-that-means Kun Middle East Eye nævner tyrkiske luftforsvarssystemer i landet siden sidste år: https://www.middleeasteye.net/news/turkey-rules-out-launching-attacks-yemen-saudi-arabia Parret står som afventer og tjekkes igen i en senere kørsel.
- Godkendelsen og afvisningerne træder først i kraft på siden, når udrulningen virker igen.

**Til gennemgang**
- Nyt i GENNEMGANG.md: `ebola-drc`, punktet 13. oktober bygger på situationsrapport 150 pr. 11. oktober, hvis tabel har 9.065.
- Nyt i GENNEMGANG.md: repoet kan ikke tilføjes til kørslens session under det nye navn.

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
