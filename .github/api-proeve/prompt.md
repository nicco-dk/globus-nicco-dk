Du skal bringe datasættet på https://globus.nicco.dk ajour. Siden viser aktuelle udbrud af smitsom sygdom og andre risici for rejsende på en klode. Svar og skriv på dansk.

Dette er et forsøg, der kører én gang gennem Claude API'et i GitHub Actions i stedet for i en chat. Det skal måle, hvad en almindelig kørsel koster. Arbejdet skal være præcis som en almindelig planlagt kørsel, med én undtagelse: intet må udgives. Der er ingen at spørge. Stil ingen spørgsmål undervejs: tag det forsigtige valg, lad data stå når du er i tvivl, og skriv tvivlen i loggen og i rapporten.

Sådan gør du:

1. Repoet nicco-dk/globus-nicco-dk er allerede hentet i den mappe, du står i, på det commit, forsøget skal starte fra. Hent ikke nyt fra GitHub, skift ikke gren, og tilføj ikke repoet på ny.
2. Læs OPDATERING.md i repoets rod. Den er din arbejdsbeskrivelse: hvad der må ændres, vagtplanen, hvilke kilder der må bruges, fremgangsmåden trin for trin, reglerne for tal, trin og kilder, felternes format, tjekket af par i mediesporet og loggens format. Følg den, som den står. Står der noget andet dér end her, gælder filen, undtagen det om at committe, sende til GitHub og følge udrulningen, som er beskrevet i punkt 7.
3. Følg rækken for kl. RAEKKE i Vagtplan i OPDATERING.md, uanset hvad klokken er nu. Skriv kørslens underafsnit i LOG.md med klokkeslættet RAEKKE.20 og dagens dato, som en almindelig kørsel ville.
4. Læs de seneste poster i LOG.md og GENNEMGANG.md, så du ved, hvad forrige kørsel ændrede, og hvad der venter på ejeren.
5. Kør node tools/hent-kilder.mjs for de faste kilder. Gennemfør derefter opdateringen efter OPDATERING.md og vagtplanens række. Brug websøgning og hentning af sider til de øvrige kilder. Læs hvert tal i kilden selv, før du skriver det. Dags dato i dansk tid får du med: TZ=Europe/Copenhagen date +%F
6. Tjek par fra mediesporet, når vagtplanens række siger det, efter afsnittet Mediesporet i OPDATERING.md: hent https://globus.nicco.dk/konflikter.json, tag parrene med status "afventer", og godkend eller afvis dem i tools/par-tjek.json efter reglerne, med kilder.
7. Sæt DATA_DATO og DATA_TID, skriv dit underafsnit i LOG.md, og kør kontrollen: git show HEAD:site/index.html > /tmp/forrige.html, derefter node tools/tjek-data.mjs site/index.html --forrige /tmp/forrige.html, og node -e "JSON.parse(require('fs').readFileSync('tools/par-tjek.json','utf8'))". Når begge består, så commit lokalt med git commit og en besked, der begynder med "API-forsøg:". Send ikke til GitHub: kør ikke git push, og forsøg ikke at udrulle eller følge en udrulning. Workflowet gemmer selv resultatet bagefter.

Hold dig til det, OPDATERING.md tillader: DATA_DATO, DATA_TID og EVENTS i site/index.html, tools/par-tjek.json, dit underafsnit i dagens post i LOG.md og nye punkter nederst i GENNEMGANG.md. Rør ikke andre filer.

Siden er offentlig, så skriv kun det, en navngiven kilde har offentliggjort, med kilden ved siden af. Et manglende tal er i orden. Et forkert tal er ikke. Godkend kun par i mediesporet, som mindst to navngivne medier beskriver.

Afslut med en kort rapport: hvilken række i vagtplanen kørslen fulgte, hvilke kilder du gennemgik, hvad der blev ændret og på hvilken kilde, hvad der er nyt, hvor mange hændelser der blev ladt urørt, hvilke par i mediesporet der blev godkendt og afvist, hvad der var usikkert, og hvad der kom til i GENNEMGANG.md.
