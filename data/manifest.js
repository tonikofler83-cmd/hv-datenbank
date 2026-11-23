// Zentrale Registrierung der Datenbank. Jede Datei in "files" ruft EVDB.brand({...}) auf.
// Schema: siehe data/SCHEMA.md
window.EVDB = {
  meta: {
    updated: "2026-11-23",
    note: "Letzte Aktualisierung am 23.11.2026 (Nissan Pixo neu, Dacia Spring 2. Generation, Renault Scenic Modellpflege mit 67/89 kWh, Citroën ë-C5 Aircross Long Range, Batteriewerte Opel Astra/Peugeot E-308, Leapmotor B03X Life, Hinweis zum Bestellstopp Mercedes EQE/EQS SUV); geprüft am 23.11.2026, nur teilweise: stellantis.js (Peugeot E-308, Citroën ë-C5, Opel Astra, Leapmotor B03X), renault-nissan-mitsubishi.js (Scenic, Spring, Pixo); hyundai-kia.js nicht geprüft. Davor: Letzte Aktualisierung am 18.11.2026 (Mercedes GLA elektrisch neu, GLB-Varianten 200/250, G 580 Modelljahr 2026); geprüft am 18.11.2026, nur oberflächlich: mercedes.js (GLA, GLB, G 580), bmw-group.js (X5 50e, ohne Änderung), vw-konzern.js (ID. Cross, ohne Änderung). Davor: Letzte Aktualisierung am 12.11.2026 (zuletzt ergänzt: Ferrari Luce mit Serienwerten; BMW iX5 jetzt bestellbar). Geprüft am 12.11.2026, nur sehr oberflächlich: sonstige-exoten.js (Ferrari), bmw-group.js (iX5), vw-konzern.js (ID. Polo/ID. Cross bestätigt). Letzte Aktualisierung davor am 03.11.2026 (BYD Atto 3 Evo; Atto 3 und Xpeng G6 Standard Range Batterie-/Ladewerte). Geprüft am 03.11.2026, nur sehr oberflächlich: byd-saic.js (BYD Atto 3/Evo, Atto 2 DM-i bestätigt), china-weitere.js (Xpeng G6); sonstige-exoten.js noch offen. Geprüft am 26.10.2026, nur sehr oberflächlich: tesla-ford-usa.js (Model Y), geely-gruppe.js (Polestar 5), japan-weitere.js (nichts). Erstbefüllung aus Modellwissen; bisher gegen Hersteller- und Fachquellen geprüft (jeweils teilweise): vw-konzern.js (Elektromodelle von VW, Audi, Škoda, Cupra und Porsche Cayenne Electric; Plug-in-Hybride, übrige Porsche-Modelle, Bentley und Lamborghini noch offen), bmw-group.js (Neue Klasse iX3/i3, iX5, i7, X5- und 7er-Plug-in-Hybride, MINI Countryman; übrige Modelle offen), mercedes.js (CLA, GLB, GLC, C-Klasse, EQS, VLE mit EQ Technologie; EQA/EQB, EQE, G-Klasse und Plug-in-Hybride offen), stellantis.js (Leapmotor, Jeep Compass, Peugeot E-208/E-308, Opel Corsa/Astra, Lancia Gamma; übrige Modelle offen), renault-nissan-mitsubishi.js (Renault Twingo/Megane, Dacia Spring, Nissan Leaf; übrige Modelle offen), hyundai-kia.js (Hyundai IONIQ 3, Kia EV2; übrige Modelle offen), toyota-lexus.js (C-HR+, bZ4X Touring; übrige Modelle offen). Alle anderen Dateien sind noch nicht einzeln geprüft. Die automatische Aktualisierung prüft und ergänzt die Daten laufend; Änderungen stehen in data/CHANGELOG.md."
  },
  files: [
    "vw-konzern.js",
    "bmw-group.js",
    "mercedes.js",
    "stellantis.js",
    "renault-nissan-mitsubishi.js",
    "hyundai-kia.js",
    "toyota-lexus.js",
    "geely-gruppe.js",
    "tesla-ford-usa.js",
    "japan-weitere.js",
    "byd-saic.js",
    "china-weitere.js",
    "sonstige-exoten.js"
  ],
  brands: [],
  brand(b) { this.brands.push(b); }
};
