# Til gennemgang

Det, kun ejeren må rette eller afgøre. Kørslerne tilføjer nye punkter nederst under den rette overskrift og nævner dem i dagens post i LOG.md under Til gennemgang. Et punkt fjernes, når ejeren har rettet eller afvist det. Kørslerne retter ikke selv i de punkter, der står her.

Hvert punkt begynder med den hændelse eller fil, det handler om, og slutter med, hvad der skal afgøres.

## Mediesporet

- Mediesporet, `IR-US` og `IL-IR`: ejeren bør afgøre, om en erklæret krig uden rapporterede angreb mellem parternes styrker i vinduet, og håndhævelse af en blokade mod skibe fra tredje lande, skal tælle som bekræftet konflikt. Indtil da kommer de to par igen i hver kørsel.
- Mediesporet, afviste par: `tools/hent-medier.mjs` springer et afvist par over uden tidsgrænse. Et par, der er afvist i dag, vises derfor heller ikke, hvis landene senere kommer i kamp, før nogen fjerner det fra `afvist`. Ejeren kan overveje en udløbsdato eller en regel for at tage afviste par op igen.
- Mediesporet, `DJ-YE`: stregen ser ud til at stamme fra GDELT's stedfæstelse af kampe ved Bab el-Mandeb og ikke fra artiklernes indhold.
- Mediesporet, `EG-SD` (13. oktober): en menneskeretsgruppe anklager Egyptens luftvåben for luftangreb, der dræbte dusinvis af guldgravere ved Jabal al-Uqaydat på den sudanesiske side af grænsen, og Egyptens militær siger, at det har en operation mod ulovlig minedrift ved grænsen. Angrebet ramte civile og ikke en sudanesisk styrke, og ophavet er ikke uafhængigt bekræftet: https://www.hindustantimes.com/world-news/us-news/egypt-says-border-operation-targeted-illegal-mining-after-deadly-strike-101791830310525.html og https://www.aljazeera.com/news/2026/10/12/deadly-gold-mine-air-strikes-highlight-egypt-sudan-border-insecurity Ejeren bør afgøre, om et lands luftangreb på civile i et naboland skal tælle som bekræftet konflikt. Indtil da står parret som afventer.

## Datasættet: gamle punkter og tekster

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
- `ebola-ke` og `ebola-nl`: hører til samme ebolaudbrud, som WHO har erklæret international sundhedskrise, men har ikke fået alvor 4, fordi krisen gælder udbruddet i DR Congo. Ejeren kan tage stilling.
- `dengue-asien` og `dengue-bd` (13. oktober): Bangladesh er flyttet til sin egen hændelse. Tre punkter uden kilde blev ikke taget med, fordi kontrollen kræver kilde på nye punkter: 10. august "rekordmange indlæggelser: 20.071 indlagte og 61 dødsfald", 17. september "58.400 indlagte og 176 dødsfald" og 6. oktober "90.356 indlagte og 281 dødsfald". Det samme gælder sætningen "September alene gav 43.774 indlæggelser og 148 dødsfald" fra `extra`. Kan kilden findes, kan de sættes ind i `dengue-bd` med kilde.
- `dengue-bd`: WHO SEARO har 86.458 tilfælde pr. 5. oktober, mens det fjernede punkt uden kilde havde 90.356 indlagte pr. 6. oktober. Forskellen er større end et døgns tilgang. Talserien bruger SEARO's tal.
- `pest-irkutsk` (13. oktober): `region` er ændret fra Europa til Asien, fordi Irkutsk ligger i Asien. Hændelsen hører nu til kl. 11-kørslen i vagtplanen.
- `maesling-bd` (13. oktober): grafens dødstal er nu DGHS' to rækker lagt sammen, som DGHS selv gjorde til og med 9. oktober. `cases` viser fortsat rækkerne hver for sig. Ret tilbage, hvis grafen kun skal vise tal, DGHS selv har skrevet som ét tal.
- 17 hændelser har tal i `cases` uden opgørelsesdato: difteri-ng, mpox, anthrax-zm, ebola-nl, cchf-es, malaria-de, h5n1-dk, salmonella-dk, h5n1-kh, h5n1-bd, h9n2-cn, cchf-ir, sfts-th, altnv-cn, mers-sa, cyclospora-us, chik-am. Kl. 00-kørslen tager tre ad gangen, se Vagtplan i OPDATERING.md.

## Repoet og driften

- Grenen `udrulning-fra-repo` har to commits, der ikke findes i `main` ("Første udgave" og "Udrulning fra repoet"). Den er resterne af historikken, før `main` blev skrevet om. Den bruges ikke af noget. Slet den, hvis den gamle historik ikke skal gemmes.
- Kørslerne kl. 00.20 og 05.20 13. oktober satte ingen spor. Den planlagte opgave viser kun seneste kørsel, så årsagen kan ikke ses. Andre planlagte opgaver på kontoen stoppede samme morgen på forbrugsgrænsen, så det er den sandsynlige årsag. Vagten i `udrul.yml` åbner nu et issue, når DATA_TID er over 9 timer gammel.
