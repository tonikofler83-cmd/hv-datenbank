// Weitere chinesische Hersteller: Xpeng, NIO/Firefly, Xiaomi, Chery (Omoda, Jaecoo), Great Wall (Ora, Wey), Hongqi,
// Dongfeng/Voyah, Changan/Deepal/Avatr, GAC, Skyworth, DR Automobiles (Italien, Basis Chery/JAC/BAIC)
(function () {
EVDB.brand({
  id: "xpeng", name: "Xpeng", country: "China", group: "Xpeng Inc. (Volkswagen ca. 5 %)",
  warranty: { vehicle: "7 Jahre / 160.000 km (marktabhängig 5 Jahre / 120.000 km)", hv: "8 Jahre / 160.000 km (mind. 70 % Kapazität)" },
  note: "G6 und G9 für Europa werden seit 2025 auch bei Magna in Graz montiert.",
  models: [
    { name: "G6 (Überarbeitung 2025)", type: "BEV", seg: "Mittelklasse-SUV-Coupé", platform: "SEPA 2.0", since: 2024, arch: "800 V",
      notes: "800-V-SiC-Plattform, Cell-to-Body, Heck als Gigacasting. Seit Überarbeitung 2025 durchgehend LFP-Batterien mit 5C-Laderate.",
      d: { chem: "LFP", pack: "Cell-to-Body", motor: "PSM", ac: 11 },
      variants: [
        { name: "Standard Range RWD (68,5 kWh)", net: 68.5, range: 480, layout: "RWD", kw: 185, nm: 440, dc: 382 },
        { name: "Long Range RWD (80,8 kWh)", net: 80.8, range: 525, layout: "RWD", kw: 218, nm: 440, dc: 451, t: 12 },
        { name: "AWD Performance (80,8 kWh)", net: 80.8, range: 510, layout: "AWD", kw: 358, nm: 660, dc: 451, t: 12 }
      ] },
    { name: "G9 (Überarbeitung 2025)", type: "BEV", seg: "Oberklasse-SUV", platform: "SEPA (Edward)", since: 2023, arch: "800 V", notes: "800 V, Luftfederung; Überarbeitung 2025 mit 5C-LFP-Batterien.",
      d: { chem: "LFP", motor: "PSM", ac: 11 },
      variants: [
        { name: "Standard Range RWD (79 kWh)", net: 79, range: 502, layout: "RWD", kw: 258, nm: 465, dc: 370 },
        { name: "Long Range RWD (93,1 kWh)", net: 93.1, range: 585, layout: "RWD", kw: 258, nm: 465, dc: 525, t: 12 },
        { name: "AWD Performance (93,1 kWh)", net: 93.1, range: 540, layout: "AWD", kw: 423, nm: 695, dc: 525, t: 12 }
      ] },
    { name: "P7+", type: "BEV", seg: "Obere Mittelklasse (Fastback)", platform: "SEPA 2.0", since: 2026, arch: "800 V", notes: "Europa-Start 2026, Montage für Europa bei Magna in Graz angekündigt.", variants: [] },
    { name: "X9", type: "BEV", seg: "Großraum-Van", platform: "SEPA 2.0", since: 2026, status: "planned", arch: "800 V", notes: "7-Sitzer mit Hinterradlenkung; Europa-Einführung in einzelnen Märkten angekündigt.", variants: [] }
  ]
});

EVDB.brand({
  id: "nio", name: "NIO / Firefly", country: "China", group: "NIO Inc.",
  warranty: { vehicle: "5 Jahre / 150.000 km (marktabhängig)", hv: "8 Jahre / 160.000 km; bei Batteriemiete (BaaS) über den Mietvertrag abgedeckt" },
  note: "Besonderheit: Batteriewechselstationen (Power Swap) und Batteriemiete; Batterien 75 kWh und 100 kWh sind untereinander tauschbar.",
  models: [
    { name: "ET5 / ET5 Touring / EL6", type: "BEV", seg: "Mittelklasse / Mittelklasse-SUV", platform: "NT 2.0", since: 2022, arch: "400 V",
      notes: "Allrad mit ASM vorn (150 kW) und PSM hinten (210 kW, SiC-Inverter). Wechselbatterie mit standardisierten Abmessungen.",
      d: { layout: "AWD", kw: 360, nm: 700, motor: "ASM + PSM", motorMaker: "XPT (NIO)", ac: 11 },
      variants: [
        { name: "75 kWh (Standard Range)", gross: 75, chem: "LFP/NMC-Hybrid", cellMaker: "CATL", range: 456, dc: 140 },
        { name: "100 kWh (Long Range)", gross: 100, net: 90, chem: "NMC", cellMaker: "CATL", range: 590, dc: 180 }
      ] },
    { name: "EL8 / ET7", type: "BEV", seg: "Oberklasse", platform: "NT 2.0", since: 2022, arch: "400 V",
      variants: [{ name: "100 kWh", gross: 100, net: 90, chem: "NMC", cellMaker: "CATL", range: 510, layout: "AWD", kw: 480, nm: 850, motor: "PSM + ASM", ac: 11, dc: 180 }] },
    { name: "Firefly", type: "BEV", seg: "Kleinwagen", since: 2025, arch: "400 V", notes: "Eigene Kleinwagenmarke von NIO, Heckantrieb, für Batteriewechsel vorbereitet.",
      variants: [{ name: "Firefly", net: 41.2, gross: 42.1, chem: "LFP", range: 330, layout: "RWD", kw: 105, nm: 200, motor: "PSM", ac: 11, dc: 100, t: 29 }] }
  ]
});

EVDB.brand({
  id: "xiaomi", name: "Xiaomi", country: "China", group: "Xiaomi Corporation", status: "planned",
  warranty: { vehicle: "k. A. (Europa noch nicht festgelegt)", hv: "k. A." },
  note: "Markteintritt in Europa für 2027 angekündigt (Entwicklungszentrum in München). Alle Daten entsprechen den chinesischen Versionen; Reichweiten nach CLTC (deutlich optimistischer als WLTP).",
  models: [
    { name: "SU7", type: "BEV", seg: "Obere Mittelklasse (Limousine)", platform: "Modena", since: 2027, arch: "400 V / 800 V",
      notes: "Eigenentwickelte „HyperEngine“-Motoren (V6/V6s mit 21.000/min, V8s mit 27.200/min), Cell-to-Body mit umgedrehten Zellen, großes Heck-Gigacasting. Basis mit 400 V, Max und Ultra mit 800 V (871 V).",
      d: { motor: "PSM", pack: "Cell-to-Body", port: "GB/T (China) – Europa voraussichtlich CCS2" },
      variants: [
        { name: "SU7 (China)", gross: 73.6, v: 400, chem: "LFP (Blade)", cellMaker: "FinDreams (BYD)", range: 700, layout: "RWD", kw: 220, nm: 400, rpm: 21000, motorMaker: "Xiaomi HyperEngine V6 (UAES)" },
        { name: "SU7 Max (China)", gross: 101, v: 871, chem: "NMC", cellMaker: "CATL (Qilin)", range: 800, layout: "AWD", kw: 495, nm: 838, rpm: 21000, motorMaker: "Xiaomi HyperEngine V6 / V6s (Inovance)", dc: 480 },
        { name: "SU7 Ultra (China)", gross: 93.7, v: 897, chem: "NMC", cellMaker: "CATL (Qilin 2.0)", range: 630, layout: "AWD", kw: 1138, nm: 1770, rpm: 27200, motorMaker: "Xiaomi HyperEngine 2 × V8s + V6s", dc: 490 }
      ] },
    { name: "YU7", type: "BEV", seg: "Oberklasse-SUV", platform: "Modena", since: 2027, arch: "800 V", notes: "Alle Versionen mit 800-V-SiC-Plattform, Motor V6s Plus mit 22.000/min.",
      d: { motor: "PSM", rpm: 22000, motorMaker: "Xiaomi HyperEngine V6s Plus", pack: "Cell-to-Body", port: "GB/T (China) – Europa voraussichtlich CCS2" },
      variants: [
        { name: "YU7 (China)", gross: 96.3, chem: "LFP", range: 835, layout: "RWD", kw: 235, nm: 528 },
        { name: "YU7 Max (China)", gross: 101.7, chem: "NMC", cellMaker: "CATL (Qilin)", range: 760, layout: "AWD", kw: 508, nm: 866 }
      ] }
  ]
});

const SHS = "seriell-parallel (Super Hybrid System): Hybridgetriebe (DHT) mit E-Maschine und Generator, Verbrenner über Direktgang zuschaltbar";
EVDB.brand({
  id: "omoda-jaecoo", name: "Omoda / Jaecoo (Chery)", country: "China", group: "Chery Automobile",
  warranty: { vehicle: "7 Jahre / 150.000 km", hv: "8 Jahre / 160.000 km" },
  note: "Chery vertreibt in Europa je nach Markt auch die Marken Chery (Tiggo), Ebro (Spanien) sowie künftig Lepas und Exlantix.",
  models: [
    { name: "Omoda 5 EV (E5)", type: "BEV", seg: "Kompakt-SUV", since: 2024, arch: "400 V",
      variants: [{ name: "E5 (61 kWh)", gross: 61, chem: "LFP", range: 430, layout: "FWD", kw: 150, nm: 340, motor: "PSM", ac: 11, dc: 80 }] },
    { name: "Jaecoo 5 EV (E5)", type: "BEV", seg: "Kompakt-SUV", since: 2025, arch: "400 V",
      variants: [{ name: "E5 (61 kWh)", gross: 61, chem: "LFP", range: 400, layout: "FWD", kw: 155, nm: 288, motor: "PSM", ac: 11, dc: 130 }] },
    { name: "Jaecoo 7 SHS / Omoda 7 SHS", type: "PHEV", seg: "Kompakt-SUV", since: 2025, arch: "400 V", hybrid: SHS,
      variants: [{ name: "1.5 TGDI SHS (18,3 kWh)", gross: 18.3, chem: "LFP", range: 90, layout: "FWD", kw: 150, nm: 310, motor: "PSM", ice: "1.5 Vierzylinder-Turbo (Miller), 105 kW", sysKw: 205, gearbox: "1-Gang-DHT", ac: 6.6, dc: 40 }] },
    { name: "Omoda 9 SHS", type: "PHEV", seg: "Mittelklasse-SUV", since: 2025, arch: "400 V", hybrid: SHS + "; 3-Gang-DHT und zusätzliche E-Maschine hinten (Allrad)",
      variants: [{ name: "1.5 TGDI SHS AWD (34,5 kWh)", gross: 34.5, chem: "NMC", range: 145, layout: "AWD", motor: "PSM", ice: "1.5 Vierzylinder-Turbo, 105 kW", sysKw: 395, gearbox: "3-Gang-DHT", ac: 6.6, dc: 70 }] }
  ]
});

EVDB.brand({
  id: "gwm", name: "GWM (Ora / Wey / Haval)", country: "China", group: "Great Wall Motor",
  warranty: { vehicle: "5 Jahre / 100.000 km (marktabhängig bis 7 Jahre)", hv: "8 Jahre / 160.000 km" },
  models: [
    { name: "Ora 03", type: "BEV", seg: "Kompaktklasse", platform: "Lemon", since: 2022, arch: "400 V", d: { layout: "FWD", kw: 126, nm: 250, motor: "PSM", cellMaker: "SVOLT", ac: 11, dc: 67 },
      variants: [{ name: "48 kWh", gross: 48, chem: "LFP", range: 310 }, { name: "63 kWh", gross: 63, chem: "NMC", range: 420 }] },
    { name: "Ora 07", type: "BEV", seg: "Mittelklasse-Fastback", since: 2024, arch: "400 V", d: { chem: "NMC", cellMaker: "SVOLT", motor: "PSM", ac: 11, dc: 88 },
      variants: [{ name: "RWD (67 kWh)", gross: 67, range: 440, layout: "FWD", kw: 150, nm: 340 }, { name: "GT AWD (86 kWh)", gross: 86, range: 520, layout: "AWD", kw: 300, nm: 680 }] },
    { name: "Wey 03 / Wey 05", type: "PHEV", seg: "Mittelklasse-SUV", since: 2022, arch: "400 V", hybrid: "seriell-parallel: 2-Gang-Hybridgetriebe (DHT), Wey 05 mit zusätzlicher E-Maschine hinten",
      d: { chem: "NMC", cellMaker: "SVOLT", motor: "PSM", gearbox: "2-Gang-DHT", ac: 6.6, dc: 50 },
      variants: [
        { name: "Wey 03 (34 kWh)", gross: 34, range: 139, layout: "FWD", ice: "1.5 Vierzylinder-Turbo", sysKw: 270 },
        { name: "Wey 05 AWD (41,8 kWh)", gross: 41.8, range: 146, layout: "AWD", ice: "2.0 Vierzylinder-Turbo", sysKw: 350 }
      ] },
    { name: "Haval Jolion Pro / H6 Hybrid", type: "HEV", seg: "Kompakt-SUV", since: 2024, arch: "350 V", hybrid: "seriell-parallel: 2-Gang-Hybridgetriebe (DHT)", notes: "Angebot je nach Markt (u. a. Italien, Spanien).",
      variants: [{ name: "1.5 HEV", gross: 1.7, chem: "NMC", layout: "FWD", motor: "PSM", ice: "1.5 Vierzylinder (Turbo beim H6)", sysKw: 140, gearbox: "2-Gang-DHT" }] }
  ]
});

EVDB.brand({
  id: "hongqi", name: "Hongqi", country: "China", group: "FAW Group",
  warranty: { vehicle: "5 Jahre / 150.000 km (marktabhängig)", hv: "8 Jahre / 160.000 km" },
  models: [
    { name: "E-HS9", type: "BEV", seg: "Luxus-SUV (7-Sitzer)", since: 2021, arch: "400 V",
      variants: [{ name: "E-HS9 (120 kWh)", gross: 120, chem: "NMC", range: 515, layout: "AWD", kw: 405, nm: 750, motor: "PSM", ac: 11, dc: 140 }] },
    { name: "EH7 / EHS7", type: "BEV", seg: "Obere Mittelklasse (Limousine / SUV)", platform: "FMEs „Flag“", since: 2025, arch: "800 V",
      d: { gross: 111, chem: "NMC", motor: "PSM", ac: 11, dc: 250, t: 20 },
      variants: [{ name: "EH7 RWD", range: 655, layout: "RWD", kw: 253, nm: 450 }, { name: "EHS7 AWD", range: 540, layout: "AWD", kw: 455, nm: 756 }] }
  ]
});

EVDB.brand({
  id: "dongfeng", name: "Dongfeng / Voyah", country: "China", group: "Dongfeng Motor",
  warranty: { vehicle: "k. A. (marktabhängig, meist 5–7 Jahre)", hv: "8 Jahre / 160.000 km (marktabhängig)" },
  note: "Importeursgetriebener Vertrieb in einzelnen Märkten (u. a. Italien, Schweiz, Norwegen, Spanien); dazu Schwestermarken Forthing, MHero, DFSK/Seres.",
  models: [
    { name: "Dongfeng Box", type: "BEV", seg: "Kleinwagen", since: 2024, arch: "400 V",
      variants: [{ name: "Box (42,3 kWh)", gross: 42.3, chem: "LFP", range: 310, layout: "FWD", kw: 70, nm: 160, motor: "PSM", ac: 6.6, dc: 60 }] },
    { name: "Voyah Free", type: "BEV", seg: "Oberklasse-SUV", platform: "ESSA", since: 2022, arch: "400 V",
      variants: [{ name: "Free AWD (106 kWh)", gross: 106, chem: "NMC", range: 500, layout: "AWD", kw: 360, nm: 720, motor: "PSM", ac: 11, dc: 100 }] },
    { name: "Voyah Courage", type: "BEV", seg: "Mittelklasse-SUV", since: 2025, arch: "400 V",
      variants: [{ name: "Courage (80 kWh)", gross: 80, chem: "NMC", range: 440, layout: "AWD", kw: 320, motor: "PSM", ac: 11 }] }
  ]
});

EVDB.brand({
  id: "changan", name: "Changan / Deepal / Avatr", country: "China", group: "Changan Automobile",
  warranty: { vehicle: "k. A. (marktabhängig, Deepal teils 7 Jahre / 160.000 km)", hv: "8 Jahre / 200.000 km (marktabhängig)" },
  note: "Europa-Start 2025 (u. a. Norwegen, Deutschland, Großbritannien, Niederlande).",
  models: [
    { name: "Deepal S07", type: "BEV", seg: "Mittelklasse-SUV", platform: "EPA1", since: 2025, arch: "400 V",
      variants: [{ name: "S07 RWD (80 kWh)", gross: 80, chem: "NMC", range: 475, layout: "RWD", kw: 160, nm: 320, motor: "PSM", ac: 11, dc: 92 }] },
    { name: "Deepal S05", type: "BEV", seg: "Kompakt-SUV", platform: "EPA1", since: 2025, arch: "400 V", d: { gross: 68.8, chem: "LFP", motor: "PSM", ac: 11, dc: 150 },
      variants: [{ name: "S05 RWD", range: 485, layout: "RWD", kw: 200, nm: 290 }, { name: "S05 AWD", range: 445, layout: "AWD", kw: 320, nm: 502 }] },
    { name: "Avatr 11 / 12", type: "BEV", seg: "Oberklasse", platform: "CHN (mit Huawei und CATL)", since: 2026, status: "planned", arch: "800 V", notes: "Premium-Marke mit Huawei-Antriebstechnik (DriveONE) und CATL-Batterien; Europa-Start angekündigt.", variants: [] }
  ]
});

EVDB.brand({
  id: "gac", name: "GAC (Aion)", country: "China", group: "Guangzhou Automobile Group",
  warranty: { vehicle: "k. A. (marktabhängig, teils 8 Jahre / 200.000 km)", hv: "8 Jahre / 200.000 km (marktabhängig)" },
  note: "Europa-Start 2025 (u. a. Polen, Portugal, Finnland, Griechenland); Montage des Aion V bei Magna in Graz angekündigt.",
  models: [
    { name: "Aion V", type: "BEV", seg: "Kompakt-SUV", platform: "AEP 3.0", since: 2025, arch: "400 V", notes: "„Magazine“-LFP-Batterie mit 3C-Schnellladung.",
      variants: [{ name: "Aion V (75,3 kWh)", gross: 75.3, chem: "LFP", range: 510, layout: "FWD", kw: 150, nm: 240, motor: "PSM", ac: 11, dc: 180, t: 24 }] },
    { name: "Aion UT", type: "BEV", seg: "Kompaktklasse", since: 2025, arch: "400 V",
      variants: [{ name: "Aion UT (60 kWh)", gross: 60, chem: "LFP", range: 430, layout: "FWD", kw: 150, nm: 210, motor: "PSM", ac: 11, t: 24 }] }
  ]
});

EVDB.brand({
  id: "skyworth", name: "Skyworth (Skywell)", country: "China", group: "Skywell New Energy",
  warranty: { vehicle: "7 Jahre / 150.000 km (marktabhängig)", hv: "8 Jahre / 250.000 km (marktabhängig)" },
  models: [
    { name: "Skyworth K / BE11", type: "BEV", seg: "Mittelklasse-SUV", since: 2021, arch: "400 V", d: { layout: "FWD", kw: 150, nm: 320, motor: "PSM", ac: 11, dc: 80 },
      variants: [{ name: "72 kWh", gross: 72, chem: "NMC", range: 400 }, { name: "86 kWh", gross: 86, chem: "NMC", range: 489 }] }
  ]
});

EVDB.brand({
  id: "dr", name: "DR Automobiles (DR / EVO / Sportequipe / Tiger)", country: "Italien", group: "DR Automobiles Groupe (Fahrzeugbasis Chery, JAC, BAIC)",
  warranty: { vehicle: "5 Jahre / 100.000 km (marktabhängig)", hv: "8 Jahre / 160.000 km (modellabhängig)" },
  note: "Italienischer Anbieter aus Macchia d'Isernia: Endmontage und Anpassung chinesischer Basisfahrzeuge. Schwerpunkt sind Benzin/LPG-Modelle; Elektro- und Plug-in-Varianten wechseln häufig – Detaildaten werden bei der nächsten Aktualisierung ergänzt.",
  models: [
    { name: "DR 1.0 EV", type: "BEV", seg: "Kleinstwagen", platform: "Chery eQ1", since: 2022, arch: "400 V",
      variants: [{ name: "1.0 EV", gross: 31, chem: "NMC", range: 210, layout: "RWD", kw: 45, nm: 120, motor: "PSM", ac: 6.6 }] },
    { name: "Sportequipe / DR Plug-in-Hybrid-Modelle", type: "PHEV", seg: "Kompakt- bis Mittelklasse-SUV", since: 2024, arch: "400 V", hybrid: SHS, notes: "Auf Basis der Chery-Plug-in-Technik (1.5 TGDI + DHT).", variants: [] }
  ]
});
})();
