// Zentrale Registrierung der Datenbank. Jede Datei in "files" ruft EVDB.brand({...}) auf.
// Schema: siehe data/SCHEMA.md
window.EVDB = {
  meta: {
    updated: "2026-10-02",
    note: "Letzte Aktualisierung am 02.10.2026. Erstbefüllung aus Modellwissen; bisher gegen Hersteller- und Fachquellen geprüft: vw-konzern.js (Elektromodelle von VW, Audi, Škoda, Cupra und Porsche Cayenne Electric; Plug-in-Hybride, übrige Porsche-Modelle, Bentley und Lamborghini noch offen). Alle anderen Dateien sind noch nicht einzeln geprüft. Die automatische Aktualisierung prüft und ergänzt die Daten laufend; Änderungen stehen in data/CHANGELOG.md."
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
