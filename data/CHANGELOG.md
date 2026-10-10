# Änderungsprotokoll der HV-Datenbank

Neueste Einträge oben. Jeder Lauf der automatischen Aktualisierung ergänzt hier Datum, geprüfte Datei, Änderungen und Quellen.

## Prüf-Rotation

Pro Monatslauf werden die nächsten drei Dateien dieser Liste gegen Herstellerquellen und die Referenzdatenbanken (ev-database.org, vision-mobility.de, firstev.de) geprüft (danach wieder von vorn):

1. vw-konzern.js
2. bmw-group.js
3. mercedes.js
4. stellantis.js
5. renault-nissan-mitsubishi.js
6. hyundai-kia.js
7. toyota-lexus.js
8. geely-gruppe.js
9. tesla-ford-usa.js
10. japan-weitere.js
11. byd-saic.js
12. china-weitere.js
13. sonstige-exoten.js

Zuletzt geprüft: renault-nissan-mitsubishi.js, hyundai-kia.js und toyota-lexus.js am 10.10.2026 – jeweils nur teilweise (Stichproben der Neuheiten), Einzelheiten unter „Offene Punkte“ des Laufs. Davor: bmw-group.js, mercedes.js und stellantis.js am 02.10.2026 (Lauf 2) – jeweils nur teilweise. Davor: vw-konzern.js am 02.10.2026 – nur teilweise (Elektromodelle VW/Audi/Škoda/Cupra, Porsche Cayenne Electric); offen geblieben: Plug-in-Hybride, Porsche Taycan/Macan/Hybride, Bentley, Lamborghini, ID.7, ID. Buzz.

Nächste drei Dateien: geely-gruppe.js, tesla-ford-usa.js, japan-weitere.js

## 2026-10-10 – Monatslauf (Rotationsdateien: renault-nissan-mitsubishi.js, hyundai-kia.js, toyota-lexus.js)

Im selben Zeitraum wie der Antriebsfilter-Eintrag unten; Teil A nur als Stichprobe zu den Rotationsmarken.

### Teil A – Neuigkeiten

- **Renault Megane E-Tech** (renault-nissan-mitsubishi.js): auf Modelljahr 2026 umgestellt – 67 kWh LFP, 160 kW, 300 Nm, bis 494 km WLTP, DC 165 kW, 15–80 % in ca. 24 min, 11 kW AC bidirektional (22 kW optional); Einstiegsversion EV40 entfällt, Alt-Variante EV60 (NMC, 468 km) ersetzt. Quellen: https://www.meinauto.de/news/2026/09/renault-megane-e-tech-erhaelt-update-neue-batterie-schnelleres-laden-und-mehr-reichweite , https://www.sparneuwagen.de/news/renault-bringt-neu-ueberarbeiteten-megane-e-tech-electric/
- **Hyundai IONIQ 3**: Zellchemie 42 kWh LFP / 61 kWh NMC, DC 119 bzw. 110 kW, 10–80 % in ca. 30 min (61 kWh). Quellen: https://www.angurten.de/is/technische-daten/Hyundai-Ioniq+3-108+kW+-+42+kWh-0-kW-0-PS-2311-20334.html , https://www.heidelberg24.de/ratgeber/kleine-nummer-grosser-wurf-fahrbericht-hyundai-ioniq-zr-94529185.html
- Hinweis zum IONIQ 3: Produktion in Izmit angelaufen. Quelle: https://www.elektroquatsch.de/artikel/hyundai-ioniq-3-produktion-tuerkei-izmit-oktober-2026

### Teil B – Prüfung (jeweils Stichproben)

- **Renault Twingo E-Tech**: AC-Ladeleistung 11 kW (vorher 6,6), Reichweite 262 km (Renault, vorher 263), Bruttokapazität 29 kWh, 10–80 % in ca. 30 min. Quellen: https://www.electrive.net/2026/01/06/renault-twingo-startet-in-deutschland-bei-21-590-euro/ , https://ev-database.org/de/pkw/3392/Renault-Twingo-E-Tech-275-kWh
- **Dacia Spring Electric 70 (2026)**: Reichweite 221 km (vorher 225). Quelle: https://www.inside-digital.de/e-autos/dacia-spring-electric-100-2026 , https://www.nextpit.de/e-autos/dacia-spring-electric-70-2026
- **Nissan Leaf 75 kWh**: Reichweite 624 km (Nissan-Korrektur, vorher 622). Quelle: https://insideevs.de/news/775435/nissan-leaf-daten-preise/
- **Kia EV2 Long Range**: Drehmoment 250 Nm, 10–80 % in 30 min ergänzt. Quelle: https://ev-database.org/de/pkw/3491/Kia-EV2-61-kWh
- **Toyota C-HR+**: Nettokapazitäten 54,0 / 72,0 kWh ergänzt. Quellen: https://ev-database.org/de/pkw/3393/Toyota-C-HRplus-577-kWh , https://insideevs.de/news/752424/toyota-chr-plus-elektroantrieb-daten/
- **Toyota bZ4X Touring**: Nettokapazität 71 kWh, 269 Nm (FWD) ergänzt. Quelle: https://ev-database.org/de/pkw/3400/Toyota-bZ4X-Touring-FWD-747-kWh

### Offene Punkte

- Alle drei Dateien nur stichprobenartig geprüft; ungeprüft sind u. a. Renault 5/4/Scenic/Kangoo/Clio/Captur-Hybride, Alpine, Nissan Micra/Ariya/e-Power, Mitsubishi, Hyundai Inster/Kona/IONIQ 5/6/9/NEXO/Hybride, Kia EV3–EV9/PV5/Niro/Hybride, Genesis, Toyota Urban Cruiser/Mirai/Hybride/Proace, Lexus RZ/UX/NX/RX/LBX sowie alle Garantiebedingungen.
- Widersprüchlich, daher nicht geändert: Kia EV2 61 kWh (61 kWh netto laut Bestand, ev-database 58 kWh nutzbar; Reichweite 448/453 km; DC 115/118 kW); Toyota C-HR+ 77 kWh Reichweite (600/607 km FWD, 525/505 km AWD); bZ4X Touring FWD (560 km Bestand vs. 591 km WLTP laut ev-database); Lexus ES (530 vs. 581 km, Batterie 77 brutto / 72 netto – Lexus-Preisliste war nicht lesbar); Dacia Spring AC-Ladeleistung (3,7 vs. 7 kW); Nissan Leaf Nettokapazität (52,9/75,1 kWh laut InsideEVs).
- Angekündigt, nicht eingetragen: Dacia Spring Electric 80 (27,5 kWh, laut ev-database ab November 2026, Werte geschätzt); Hyundai-Neuheiten der Paris Motor Show (12.–18.10.2026).
- Wie üblich Fachmedien statt Hersteller-Datenblättern als Hauptquelle (Hersteller-PDFs nicht lesbar).

## 2026-10-10 – Antriebsfilter und Referenzquellen

- **App**: Filter „Antrieb“ (Allradantrieb, Vorderachsantrieb, Hinterachsantrieb) ergänzt; er wirkt je Variante in Herstellerübersicht, Modelltabellen, Vergleichstabelle und CSV-Export. Bezeichnungen der Antriebsart entsprechend vereinheitlicht.
- **Quellen**: ev-database.org/de, vision-mobility.de und firstev.de/elektroautos-uebersicht/ als Referenzdatenbanken in SCHEMA.md, im Fuß der Webapp und in der Aktualisierungsroutine aufgenommen.
- **Leapmotor B05** (stellantis.js): Hinterachsantrieb, LFP, Cell-to-Chassis, AC 11 kW ergänzt. Quellen: https://www.elektroquatsch.de/artikel/leapmotor-b05-alle-infos-preise-und-reichweiten-2026 , https://www.autohled.cz/de/a/leapmotor/b05/leapmotor-b05-67-1-kwh-160kw-rwd-1225095
- **Mercedes EQS 400** (mercedes.js): Hinterachsantrieb und 505 Nm ergänzt. Quellen: https://de.motor1.com/news/792869/mercedes-eqs-facelift-daten-preise/ , https://evkx.net/en/models/mercedes/eqs/eqs_400/specifications/ – offen: WLTP-Reichweite 810 km (Bestand) vs. 817 km (race24.asia), bei Monatslauf gegen Mercedes prüfen.

## 2026-10-02 – Lauf 2 (Rotationsdateien: bmw-group.js, mercedes.js, stellantis.js)

Zweiter Lauf am selben Tag wie Wochenlauf 1; Teil A daher nur als Nachtrag zu den drei Rotationsdateien.

### Teil A – Neuigkeiten

- **BMW iX5 60 xDrive** (bmw-group.js): neu als `planned`, Bestellstart für 08.10.2026 angekündigt; 425 kW, 805 Nm, 141 kWh netto, 800 V, bis 845 km, DC 460 kW, AC 22 kW, 10–80 % in 23 min, hintere E-Maschine 242 kW Dauerleistung. Quellen: https://www.press.bmwgroup.com/switzerland/article/attachment/T0458909DE/651875 (BMW-Datenblatt 06/2026), https://www.sparneuwagen.de/news/bmw-ix5-erster-elektro-x5-ab-oktober-bestellbar/ , https://ev-database.org/de/pkw/3664/BMW-iX5-60-xDrive (Bruttokapazität 148 kWh)
- **BMW iX3 40 xDrive** (bmw-group.js): am 30.09.2026 im Konfigurator, 82,6 kWh, 621 km, 275 kW. Quelle: https://www.bmwblog.com/2026/09/30/2027-bmw-ix3-40-xdrive-revealed/
- **Mercedes VLE** (mercedes.js): `status: "planned"` entfernt; VLE 300 seit April, VLE 400 4MATIC seit September 2026 bestellbar. Quelle: https://www.electrive.net/2026/09/09/mercedes-vle-kostet-mit-allradantrieb-ab-78-500-euro/
- **Opel Corsa GSE** (stellantis.js): seit September 2026 bestellbar, 207 kW, 374 km. Quellen: https://www.media.stellantis.com/de-de/opel/press/start-frei-fuer-den-neuen-hot-hatch-opel-corsa-gse-ab-sofort-bestellbar , https://insideevs.de/news/794543/opel-corsa-gse-2026-daten/
- **Peugeot E-208 GTi** (stellantis.js): ab 09/2026, 207 kW, 345 Nm, bis 374 km. Quelle: https://www.peugeot.de/modelle/neuer-e-208-gti/technische-daten-abmessungen.html
- **Lancia Gamma** (stellantis.js): am 16.09.2026 vorgestellt, bleibt `planned` (Bestellstart offen); Batterien 73,7/97,2 kWh in den Hinweisen ergänzt. Quellen: https://insideevs.de/news/796953/neuer-lancia-gamma-2026-elektro/ , https://www.meinauto.de/news/2026/05/lancia-gamma-zeigt-sich-erstmals-italienisches-crossover-zunaechst-ohne-deutschland-start

### Teil B – Prüfung bmw-group.js

- **iX3 (Neue Klasse)**: iX3 40 (Heckantrieb, 235 kW, 500 Nm, 82,6 kWh, 635 km, DC 300 kW, 21 min) ergänzt; DC 400 kW/21 min nur noch beim 50 xDrive. Quellen: https://www.heise.de/news/BMW-iX3-40-Neues-Einstiegsmodell-mit-235-kW-und-635-km-Reichweite-11242385.html , https://www.electrive.net/2026/03/31/bmw-bringt-neue-ix3-version-mit-heckantrieb-ab-63-400-euro/
- **i3**: Verbrauch (14,3 bzw. 13,4 kWh/100 km), Hinweis auf bidirektionales Laden und i3 M60 xDrive (2027). Quelle: https://ecomento.de/2026/09/30/neuer-bmw-i3-zwei-elektroauto-versionen-zum-marktstart/
- **i7 → Facelift 2026**: alte Varianten (eDrive50, xDrive60, M70 mit 101,7 kWh) ersetzt durch 50 xDrive (335 kW, 660 Nm, 728 km), 60 xDrive (400 kW, 745 Nm, 727 km), M70 xDrive (500 kW, 686 km); 112,5 kWh netto mit Rundzellen der Neuen Klasse, weiterhin 400 V, DC 250 kW, 10–80 % in 29 min. Quellen: https://www.electrive.net/2026/04/22/bmw-bringt-neue-klasse-technologien-in-den-i7/ , https://www.bimmertoday.de/2026/04/22/bmw-i7-facelift-nur-728-km-wltp-im-elektro-7er-erste-m-sport-fotos/
- **750e / M760e xDrive (Facelift 2026)**: Reichweiten 82 bzw. 80 km, Systemleistung M760e 450 kW (vorher 420 kW); nicht belegte Verbrennerleistung des M760e entfernt. Quelle: https://www.bmw-syndikat.de/bmwsyndikatforum/bmw_news_blog_t408561_BMW_7er_G70_LCI_Technische_Daten_2026__i7__750e__M760e__740d___Reichweiten_im_Ueberblick_Automobil-_und_BMW_News-Blog.html
- **X5 50e / M60e xDrive (G65)** neu als `planned`: 26,5/29,48 kWh, 317 V, E-Maschine 145 kW/280 Nm bei 6000/min, Systemleistung 360 bzw. 450 kW, bis 102 bzw. 98 km; bisheriger X5 xDrive50e als G05 gekennzeichnet. Quelle: BMW-Datenblatt 06/2026 (siehe oben).
- **MINI Countryman E / SE ALL4**: seit März 2026 SiC-Inverter, 65,2 kWh netto, 501 bzw. 467 km (vorher 462/432 km); nicht mehr belegte Bruttokapazität entfernt. Quellen: https://www.press.bmwgroup.com/deutschland/article/attachment/T0455156DE/642988 , https://www.bimmertoday.de/2026/01/28/mini-countryman-e-u25-upgrade-hebt-elektro-reichweite-uber-500-kilometer/

### Teil B – Prüfung mercedes.js

- **CLA**: CLA 250 (71 kWh NMC, 200 kW, 674 km, DC 250 kW, 20 min) ergänzt; CLA 200 mit 335 Nm, 12,3 kWh/100 km, 20 min; CLA 350 4MATIC 771 km. Quellen: https://www.electrive.net/2026/02/13/mercedes-bringt-vierte-antriebsvariante-des-cla/ , https://www.electrive.net/2025/10/16/mit-lfp-batterie-bestellstart-fuer-die-basisversion-des-mercedes-cla/
- **GLB**: Drehmomente 335/515 Nm ergänzt. Quelle: https://www.inside-digital.de/e-autos/mercedes-glb-250plus-mit-eq-technologie-2026
- **GLC**: GLC 250 (260 kW, 85 kWh) und GLC 300 4MATIC (310 kW, 85 kWh, 613 km, DC 320 kW, 22 min) ergänzt, seit 09.06.2026 bestellbar; Marktstart auf 2025 korrigiert; GLC 400 mit 14,9 kWh/100 km. Quellen: https://www.electrive.net/2026/06/01/mercedes-erweitert-angebot-des-elektro-glc-um-zwei-varianten/ , https://mbpassion.de/2026/05/glc-250-und-300-4matic-varianten-ab-09-juni-2026-bestellbar/ , https://www.inside-digital.de/e-autos/mercedes-glc-400-4matic-eq
- **C-Klasse mit EQ Technologie** neu: C 400 4MATIC, 360 kW, 94/100 kWh, bis 762 km, DC 330 kW, seit Mai 2026 bestellbar. Quellen: https://mbpassion.de/2026/05/c-400-4matic-eq-startet-bei-67-71100-euro/ , https://firstev.de/mercedes/c/ , https://jesmb.de/33353/
- **EQS**: Limousine auf Modellpflege 2026 umgestellt (800 V, 122 kWh, DC 350 kW; EQS 400/450+/500 4MATIC/580 4MATIC, bis 926 km); EQS SUV als eigenes Modell mit bisheriger 400-V-Technik abgetrennt, die dort nicht belegten Reichweiten (stammten von der Limousine) entfernt. Quelle: https://www.electrive.net/2026/04/14/mercedes-spendiert-dem-eqs-ein-800-volt-system/
- **VLE**: Varianten VLE 300 (203 kW, Frontantrieb, 678 km) und VLE 400 4MATIC (310 kW, 654 km), 115 kWh NMC, DC 300 kW, 25 min. Quelle: siehe Teil A.

### Teil B – Prüfung stellantis.js

- **Peugeot E-308**: 58,3 kWh nutzbar, 450 km, 270 Nm, V2L (vorher 54-kWh-Variante). Quellen: https://www.peugeot.de/modelle/neuer-308/elektro.html , https://www.inside-digital.de/e-autos/peugeot-e-308-2026
- **Opel Astra Electric**: Facelift 2026 mit 58 kWh, 454 km, 10–80 % in 32 min, V2L. Quelle: https://ecomento.de/2025/12/10/opel-astra-ab-2026-mit-neuem-gesicht-und-mehr-e-auto-reichweite/
- **Jeep Compass**: 73,7 kWh/500 km, 96,3 kWh/674 km (vorher 650 km), 4xe mit 96,1/103 kWh und 606 km (vorher 600 km). Quellen: https://www.jeep.de/neuer-jeep-compass/4xe-elektro/technische-details , https://www.elektroquatsch.de/artikel/jeep-compass-elektro-2026-drei-versionen-preise-276kw-674km
- **Citroën ë-C5 Aircross**: 520/680 km bestätigt, Long Range inzwischen bestellbar – keine Änderung. Quelle: https://insideevs.de/news/757927/citroen-e-c5-aircross-vorgestellt/
- **Leapmotor B05**: `planned` entfernt (seit Ende April 2026 bestellbar); 160 kW, 240 Nm, 56,2 kWh/401 km und 67,1 kWh/482 km. Quelle: https://www.electrive.net/2026/04/28/leapmotor-b05-ist-in-europa-ab-26-900-euro-bestellbar/
- **Leapmotor B10 Hybrid EV** (REEV) neu: 160 kW/240 Nm, 18,8 kWh, 86 km elektrisch, Generator 50 kW, AC 6,6 kW, DC 46 kW. Quellen: https://www.electrive.net/2026/04/29/leapmotor-b10-als-range-extender-ab-32-400-euro-bestellbar/ , https://ecomento.de/2026/04/30/leapmotor-b10-hybrid-ev-ab-32400-euro-bestellbar/
- **Leapmotor B03X** neu: 39,8 kWh/292 km und 53,0 kWh/382 km (LFP), Frontantrieb, AC 11 kW, seit 01.07.2026 bestellbar. Quellen: https://www.electrive.net/2026/07/07/leapmotor-ruft-fuer-b03x-ab-24-900-euro-auf/ , https://www.media.stellantis.com/de-de/leapmotor/press/bestellstart-leapmotor-b03x-einfach-cleveres-auto-setzt-neue-massstaebe-im-segment-der-urbanen-crossover-modelle

### Offene Punkte

- Alle drei Dateien nur teilweise geprüft. Weiterhin ungeprüftes Modellwissen: **BMW** iX1/iX2, i4, i5, iX, 2er/X1-, 3er-, 5er-, X3-Plug-in-Hybride, M5, XM, MINI Cooper/Aceman, Rolls-Royce Spectre, Garantiebedingungen; **Mercedes** EQA/EQB, EQE, EQS SUV, G 580, EQV, EQT, alle Plug-in-Hybride, AMG E Performance, Garantiebedingungen; **Stellantis** Citroën ë-C3/ë-C4, DS, Fiat, Abarth, Alfa Romeo, Maserati, Hochdachkombis/Vans, Plug-in-Hybride, Leapmotor T03/C10, Garantiebedingungen.
- Widersprüchliche Angaben, daher weggelassen: Batterie BMW i3 40 xDrive (82,6/82,8 kWh); Drehmoment i7 M70 (1015/1100 Nm); DC-Leistung und Drehmoment iX3 40 xDrive; Reichweite Mercedes GLC 250 (617/665 km) und EQS 580 4MATIC; Ladezeit GLC 400 (22/23 min); Leistung und DC-Leistung Leapmotor B03X Life (130/135 kW, 100/110 kW); netto/brutto bei Leapmotor B10 Hybrid EV und B03X sowie Opel Astra Electric (58 kWh) unklar.
- Mercedes GLB: Die eingetragenen Reichweiten 631/614 km sind nicht bestätigt – Fachportale nennen 542/521 km; gegen die Mercedes-Preisliste prüfen. Mercedes C 400 4MATIC: Reichweite 762 km ist der Bestwert (Spanne 592–762 km).
- Leapmotor B10 Hybrid EV: elektrische Reichweite 86 km laut Fachmedien zum Bestellstart, die frühere Stellantis-Pressemitteilung nannte 80 km.
- Stellantis e-CMP-Modelle: Die Ladezeit 27 min ist als 10–80 % eingetragen, Peugeot nennt beim E-208 GTi 27 min für 20–80 % – für alle e-CMP-Modelle prüfen.
- Reichweiten der EQS Limousine und des i7 sind Bestwerte der jeweiligen Spanne; Varianten und Angaben des BMW iX1/iX2 nach der Technikpflege 2026 (SiC-Inverter wie beim Countryman?) noch prüfen.
- Angekündigt und noch nicht eingetragen: Mercedes GLC 300+ und Basis-GLC (Ende 2026), C 300 4MATIC, BMW i3 M60 xDrive (2027), Peugeot 208 auf STLA Small, Neuheiten des Pariser Autosalons (12.–18.10.2026).
- Die offenen Punkte aus Wochenlauf 1 (u. a. Mazda 6e 78 kWh, Geely E2, Renault Megane/Scenic, MG IM5/IM6, Smart #2) gelten weiter.
- Mehrere Angaben stammen aus Fachmedien statt aus Hersteller-Datenblättern (Mercedes- und Stellantis-Presseseiten waren nicht abrufbar).

## 2026-10-02 – Wochenlauf 1 (Rotationsdatei: vw-konzern.js)

### Teil A – Neuigkeiten

- **BMW i3 (Neue Klasse)** (bmw-group.js): `status: "planned"` entfernt, seit 30.09.2026 bestellbar; Varianten 40 xDrive (275 kW, 710 km) und 50 xDrive (345 kW, 912 km, 108,7 kWh) ergänzt. Quelle: https://www.bmwgroup.com/de/news/allgemein/2026/3er-reihe.html
- **Hyundai IONIQ 3** (hyundai-kia.js): `status: "planned"` entfernt, bestellbar seit Anfang September 2026; Varianten 42 kWh (108 kW, 344 km) und 61 kWh (99 kW, 497 km). Quelle: https://www.electrive.net/2026/09/02/ioniq-3-startet-bei-28-950-euro/
- **Range Rover Sport Electric** (sonstige-exoten.js): neu, bestellbar seit 01.10.2026; EV450 (331 kW) und EV550 (405 kW), 850 Nm, 609 km, 10–80 % in 22 min. Quelle: https://www.goingelectric.de/2026/10/01/news/range-rover-sport-electric-405-kw-609-km-ab-120-400-euro/
- **Škoda Epiq 40** bestellbar seit 17.09.2026, Epiq 35 für Oktober angekündigt (siehe Teil B). Quelle: https://automobilsalon-bellemann.de/news/skoda-epiq-bestellstart-2026/
- **VW ID.3 GTI** am 16.09.2026 vorgestellt (240 kW, 545 Nm, 79 kWh, 601 km, DC 183 kW, 10–80 % in 29 min; Vorverkauf ab Anfang 2027) – als Variante des ID.3 Neo eingetragen. Quelle: https://www.volkswagen-newsroom.com/en/press-releases/world-premiere-of-the-all-new-electric-id3__gti-most-powerful-model-in-five-decades-of-gti-history-20699
- **VW ID. Tiguan** als angekündigtes Modell (`planned`) angelegt, löst im Frühjahr 2027 ID.4/ID.5 ab; ID.4/ID.5 mit Auslaufhinweis versehen (noch nicht entfernt). Quelle: https://www.autobild.de/artikel/vw-id.tiguan-2026-schon-gefahren-28823001.html
- **Audi A2 e-tron** neu angelegt (bestellbar seit 10.09.2026). Quellen: https://www.heise.de/news/Elektroauto-Audi-A2-e-tron-Weltpremiere-des-Effizienzmodells-11436465.html , https://firstev.de/audi/a2-e-tron/a2-e-tron-technische-daten/ , https://www.autoscout24.de/informieren/news/audi-a2-e-tron-technische-daten-reichweite-preis/

### Teil B – Prüfung vw-konzern.js

- **VW ID.3 → ID.3 Neo**: alte Varianten (Pure/Pro/Pro S/GTX, eingestellt mit dem Modellwechsel im April 2026) durch 50 kWh LFP/125 kW, 58 kWh LFP/140 kW, 79 kWh NMC/170 kW ersetzt; Motor APP350 (350 Nm), DC 105 bzw. 183 kW. Quelle: https://www.electrive.net/2026/04/15/weltpremiere-des-vw-id-3-neo-mehr-als-nur-ein-facelift/
- **VW ID. Polo**: Reichweiten 329 km (37 kWh) und 454 km (52 kWh), DC 90/105 kW (vorher 130 kW), 10–80 % in 23/24 min, 290 Nm, 99-kW-Version und GTI (166 kW, 424 km) ergänzt, V2L 3,6 kW. Quellen: https://www.volkswagen-newsroom.com/en/at-a-glance-id-polo-20359 , https://www.volkswagen-newsroom.com/en/press-releases/100-per-cent-electric-100-per-cent-gti-volkswagen-presents-the-allnew-electric-id-polo-gti-20375
- **VW ID. Cross**: `status: "planned"` entfernt (seit Juli 2026 bestellbar); 155 kW/52 kWh mit 427 km, DC 105 kW, 24 min; 37-kWh-Versionen ergänzt. Quelle: https://www.electrive.net/2026/07/23/vw-id-cross-startet-zunaechst-ab-34-025-euro/
- **VW T-Roc / Golf Hybrid (Vollhybrid)** neu als `planned` (verfügbar ab Q4 2026): seriell-parallel, 1,6 kWh NMC, EM2 125 kW, Systemleistung 100/125 kW. Quellen: https://www.volkswagen-newsroom.com/en/the-new-t-roc-international-media-drive-19983/drive-systems-19984 , https://www.auto-motor-und-sport.de/tech-zukunft/alternative-antriebe/neues-vollhybrid-system-vw-golf-und-t-roc-2026/
- **VW Garantie** bestätigt (2 Jahre; HV-Batterie 8 Jahre/160.000 km, 70 %), keine Änderung. Quelle: https://www.volkswagen.de/idhub/content/dam/onehub_pkw/importers/de/fs/2026-01_Neuwagengarantie-Bedingungen_der_Volkswagen_AG_im_Markt_Deutschland.pdf
- **Audi Q4 e-tron**: auf Facelift 2026 umgestellt (bidirektional V2L/V2H, DC 160/185 kW, 578 km mit 82 kWh und Heckantrieb, 27 min beim quattro performance); nicht belegte alte Reichweiten und Ladeleistungen entfernt. Quelle: https://www.carwow.de/audi/q4-e-tron/auto-news/5627/audi-q4-e-tron-facelift-2026-technische-daten-bilder
- **Audi RS 5** (PHEV) neu: 2.9 V6 Biturbo 375 kW + E-Maschine 130 kW/460 Nm, System 470 kW, 25,9/22 kWh, 84 km. Quelle: https://www.meinauto.de/news/2026/02/audi-rs5-unter-strom-hochleistungs-hybrid-mit-639-ps
- **Škoda Epiq**: `planned` entfernt; Varianten 35/40/55 mit 38,5 kWh LFP (37 netto) bzw. 55 kWh NMC (51,7 netto), 441 km und DC 105 kW/24 min beim 55. Quellen: https://automobilsalon-bellemann.de/news/skoda-epiq-bestellstart-2026/ , https://ev-database.org/de/pkw/3622/Skoda-Epiq-55
- **Škoda Peaq**: `planned` entfernt; Varianten 60 (150 kW, 59/63 kWh, 456 km), 90 (210 kW, 86/91 kWh, 642 km), 90x (218 kW, 609 km). Quelle: https://www.skoda-auto.de/modelle/peaq/peaq
- **Cupra Born**: auf Facelift 2026 umgestellt (58 kWh LFP/140 kW/420 km, 79 kWh/170 kW/600 km, VZ 240 kW); alte Varianten entfernt. Quelle: https://www.heise.de/news/Vorstellung-Cupra-Born-Facelift-Vorgriff-auf-den-ueberarbeiteten-VW-ID-3-11200506.html
- **Cupra Raval**: vier Varianten (85/99/155/166 kW), Reichweiten 328/446/387 km, Ladezeiten 23/24 min; nicht belegte DC 130 kW entfernt. Quellen: https://www.cupraofficial.at/raval/raval-technische-daten , https://ev-database.org/de/pkw/3510/CUPRA-Raval-VZ
- **Porsche Cayenne Electric**: Cayenne S Electric ergänzt (400 kW, mit Overboost 490 kW, 653 km), Batterieaufbau (6 Module, 192 Zellen). Quelle: https://newsroom.porsche.com/en/2026/products/porsche-the-new-cayenne-s-electric-41864.html

### Offene Punkte

- vw-konzern.js nicht vollständig geprüft: MQB-/PPC-/MLB-Plug-in-Hybride, ID.7, ID. Buzz, ID.4/ID.5, Audi Q6/A6/e-tron GT, Porsche Taycan/Macan/Hybride, Bentley, Lamborghini sind weiterhin ungeprüftes Modellwissen.
- Widersprüchliche Angaben, daher weggelassen: Reichweite Audi A2 e-tron 170 kW (646–649 km, vorläufig); DC-Leistung Cupra Born 79 kWh (165/185 kW) und Škoda Epiq 35/40 (50/88/90 kW); Ladezeit ID. Cross 37 kWh; Reichweite BMW i3 50 xDrive (912 km laut BMW Group, anderswo 900/916 km).
- Audi Q4 e-tron: Variantennamen und Einzelreichweiten nach dem Facelift noch gegen die Audi-Preisliste prüfen.
- Noch nicht eingetragen (beim Lauf der jeweiligen Datei prüfen): BMW iX5 60 xDrive (Bestellstart Oktober 2026 erwartet), Mazda 6e 78 kWh, Geely E2, Renault Megane/Scenic mit neuen Batterien, MG IM5/IM6-Varianten, Smart #2 und weitere Premieren der Paris Motor Show (12.–18.10.2026).
- Mehrere Angaben stammen aus Fachmedien statt aus Hersteller-Datenblättern (Pressemappen teils nicht abrufbar).

## 2026-10-02 – Erstbefüllung

- 71 Marken, 336 Modelle, 591 Varianten angelegt.
- Quelle: Modellwissen des Assistenten (Stand Mitte 2026), nicht einzeln gegen Herstellerangaben geprüft.
- Bekannte Lücken: Dauerleistung (30 min), max. Drehzahl, Übersetzung und Motorhersteller sind nur bei einem Teil der Modelle gefüllt; Garantieangaben sind marktabhängig formuliert.
