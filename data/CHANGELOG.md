# Änderungsprotokoll der HV-Datenbank

Neueste Einträge oben. Jeder Lauf der automatischen Aktualisierung ergänzt hier Datum, geprüfte Datei, Änderungen und Quellen.

## Prüf-Rotation

Pro Wochenlauf wird die nächste Datei dieser Liste vollständig gegen Herstellerquellen geprüft (danach wieder von vorn):

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

Zuletzt geprüft: vw-konzern.js am 02.10.2026 – nur teilweise (Elektromodelle VW/Audi/Škoda/Cupra, Porsche Cayenne Electric); offen geblieben: Plug-in-Hybride, Porsche Taycan/Macan/Hybride, Bentley, Lamborghini, ID.7, ID. Buzz (nächste: bmw-group.js)

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
