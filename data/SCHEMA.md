# Datenschema der HV-Datenbank

Die App ist rein statisch (`index.html` + `app.js`). Alle Daten liegen als JavaScript-Dateien in `data/`.
`data/manifest.js` listet die Datendateien (`files`) und enthält `meta.updated` (Datenstand, `JJJJ-MM-TT`).
Jede Datendatei ruft pro Marke einmal `EVDB.brand({...})` auf. Eine neue Datei muss in `manifest.js` unter `files` eingetragen werden.

## Marke

| Feld | Bedeutung |
|---|---|
| `id` | eindeutiger Kleinbuchstaben-Schlüssel (URL) |
| `name`, `country`, `group` | Marke, Herkunftsland, Konzern |
| `status` | `"planned"` wenn die Marke in Europa noch nicht verkauft wird, sonst weglassen |
| `note` | optionaler Hinweis zur Marke |
| `warranty` | `{ vehicle, hv, drive, rust, note }` – Texte; `hv` = HV-Batterie, `drive` = Antrieb/HV-Komponenten |
| `models` | Liste der Modelle |

## Modell

| Feld | Bedeutung |
|---|---|
| `name` | Modellname |
| `type` | `BEV`, `PHEV`, `HEV` (Vollhybrid), `REEV`, `FCEV` – keine 12-/48-V-Mildhybride |
| `seg`, `platform`, `since` | Fahrzeugklasse, Plattform, Marktstart (Jahr) |
| `status` | `"planned"` für angekündigte Modelle, sonst weglassen |
| `arch` | Systemspannung, muss bei BEV/PHEV mit der Zahl beginnen (`"400 V"`, `"800 V"`); daraus entsteht der Filter 400-/800-V-Klasse (ab 700 V). Bei Hybriden mit Hochsetzsteller `"ca. 650 V ..."` |
| `hybrid` | Hybridsystem in Worten: seriell, parallel (P0–P4), leistungsverzweigt, seriell-parallel, Axle-Split … |
| `notes` | weitere Angaben zum HV-System (Architektur, Kühlung, bidirektional, Besonderheiten) |
| `d` | Standardwerte, die für alle Varianten gelten (gleiche Felder wie Variante) |
| `variants` | Liste der Varianten; leer bei angekündigten Modellen ohne Daten |

## Variante (alle Felder optional außer `name`; Fehlendes zeigt die App als „k. A.“)

| Feld | Einheit | Bedeutung |
|---|---|---|
| `name` | | Bezeichnung der Variante |
| `type` | | nur wenn abweichend vom Modell (z. B. HEV-Variante in einem PHEV-Modell) |
| `net`, `gross` | kWh | Batteriekapazität netto / brutto |
| `v` | V | Nennspannung der Batterie |
| `chem` | | Zellchemie (NMC, LFP, NCA, NiMH …) |
| `cellMaker` | | Zell-/Batteriehersteller |
| `pack` | | Batterieaufbau (Module, Verschaltung, Cell-to-Pack …) |
| `range` | km | elektrische Reichweite WLTP (bei PHEV: EAER). Anderer Zyklus (CLTC/EPA) nur mit Hinweis in `notes` oder im Variantennamen |
| `cons` | kWh/100 km | Verbrauch WLTP |
| `layout` | | `FWD` (Vorderachsantrieb), `RWD` (Hinterachsantrieb), `AWD` (Allradantrieb) – Grundlage des Antriebsfilters, bei jeder Variante angeben |
| `kw` | kW | max. Leistung des E-Antriebs (BEV: Systemleistung; Hybrid: E-Maschine) |
| `kwCont` | kW | Dauerleistung (30-Minuten-Leistung nach UN ECE R85, Feld P.2 der Zulassung) |
| `nm` | Nm | max. Drehmoment |
| `rpm` | 1/min | max. Drehzahl der E-Maschine |
| `ratio` | | Übersetzung (Text, z. B. `"9 : 1"`) |
| `motor` | | `PSM`, `ASM`, `EESM` (fremderregt); Kombinationen mit ` + ` |
| `motorMaker` | | Motorhersteller / Motorcode |
| `ice` | | Verbrennungsmotor (Hybride) bzw. Brennstoffzelle |
| `sysKw` | kW | Systemleistung (Hybride) |
| `gearbox` | | Getriebe |
| `ac`, `dc` | kW | max. Ladeleistung AC / DC |
| `port` | | Ladeanschluss; ohne Angabe setzt die App „CCS2“ (wenn `dc`) bzw. „Typ 2“ (wenn nur `ac`) |
| `t` | min | DC-Ladezeit 10–80 % |

## Quellen

Reihenfolge der Verlässlichkeit:

1. Herstellerangaben für den europäischen Markt: Webseiten, Konfiguratoren, Preislisten, Pressemappen, technische Datenblätter.
2. Referenzdatenbanken (zum Abgleich und zum Füllen von Lücken, besonders Netto-/Bruttokapazität, Ladekurven, Ladezeiten, Zellchemie):
   - https://ev-database.org/de
   - https://vision-mobility.de/
   - https://firstev.de/elektroautos-uebersicht/
3. Seriöse Fachmedien (z. B. electrive.net, heise.de, auto-motor-und-sport.de, ecomento.de).

Widersprechen sich Quellen, gilt die Herstellerangabe; ohne Herstellerangabe nur Werte eintragen, die mindestens zwei unabhängige Quellen übereinstimmend nennen. Jede Änderung im CHANGELOG mit URL belegen.

## Regeln für Aktualisierungen

- Nur belegte Werte eintragen. Unsichere Werte weglassen statt schätzen.
- Zahlen als Zahl (Dezimalpunkt), keine Einheiten in Zahlenfeldern.
- Nach jeder Änderung `meta.updated` in `manifest.js` setzen und einen Eintrag in `data/CHANGELOG.md` ergänzen (Datum, was geändert, Quelle).
- Dateien müssen gültiges JavaScript bleiben (auf schließende Klammern und Kommas achten).
