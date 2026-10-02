// Zentrale Registrierung der Datenbank. Jede Datei in "files" ruft EVDB.brand({...}) auf.
// Schema: siehe data/SCHEMA.md
window.EVDB = {
  meta: {
    updated: "2026-10-02",
    note: "Letzte Aktualisierung am 02.10.2026. Erstbefüllung aus Modellwissen; bisher gegen Hersteller- und Fachquellen geprüft (jeweils teilweise): vw-konzern.js (Elektromodelle von VW, Audi, Škoda, Cupra und Porsche Cayenne Electric; Plug-in-Hybride, übrige Porsche-Modelle, Bentley und Lamborghini noch offen), bmw-group.js (Neue Klasse iX3/i3, iX5, i7, X5- und 7er-Plug-in-Hybride, MINI Countryman; übrige Modelle offen), mercedes.js (CLA, GLB, GLC, C-Klasse, EQS, VLE mit EQ Technologie; EQA/EQB, EQE, G-Klasse und Plug-in-Hybride offen), stellantis.js (Leapmotor, Jeep Compass, Peugeot E-208/E-308, Opel Corsa/Astra, Lancia Gamma; übrige Modelle offen). Alle anderen Dateien sind noch nicht einzeln geprüft. Die automatische Aktualisierung prüft und ergänzt die Daten laufend; Änderungen stehen in data/CHANGELOG.md."
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
