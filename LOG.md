# Log over opdateringer af datasættet

Én post pr. kørsel, nyeste øverst. Formatet står i `OPDATERING.md`.

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
