# Log over opdateringer af datasættet

Én post pr. kørsel, nyeste øverst. Formatet står i `OPDATERING.md`.

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
