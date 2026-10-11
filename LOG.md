# Log over opdateringer af datasættet

Én post pr. kørsel, nyeste øverst. Formatet står i `OPDATERING.md`.

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
- Søljen "Lige nu" i bunden viser alt med alvor 4, der er nyt inden for tre dage, og alle smitteudbrud på mistanke. Et tryk fører hen til hændelsen.
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
