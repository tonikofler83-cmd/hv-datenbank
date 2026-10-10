// Hyundai Motor Group: Hyundai, Kia, Genesis
(function () {
const EGMP = "E-GMP (800 V): Laden an 400-V-Säulen über die Motorwicklungen und den Inverter als Hochsetzsteller (kein separater Booster), SiC-Halbleiter im Heckinverter, V2L bis 3,6 kW, Batterie mit Pouchzellen in Standardmodulen, abkoppelbarer Frontmotor bei Allrad.";
const EGMP400 = "E-GMP-Ableitung mit 400 V und Frontantrieb; V2L bis 3,6 kW.";
const TMED = "parallel (P2, TMED): E-Maschine zwischen Trennkupplung und Getriebe, zusätzlicher Hochvolt-Startergenerator";
const E8 = { chem: "NMC", cellMaker: "SK On", motor: "PSM", motorMaker: "Hyundai Mobis", rpm: 15000, ac: 11, t: 18 };
const hev16t = (kwSys, layout) => ({ name: "Hybrid 1.6 T-GDI", type: "HEV", gross: 1.49, v: 270, chem: "Li-Ion-Polymer", layout: layout || "FWD", kw: 48, nm: 264, motor: "PSM", ice: "1.6 T-GDI, 132 kW", sysKw: kwSys, gearbox: "6-Gang-Automatik" });
const phev16t = (range, kwSys) => ({ name: "Plug-in-Hybrid 1.6 T-GDI 4WD", gross: 13.8, v: 360, chem: "Li-Ion-Polymer", range, layout: "AWD", kw: 72, nm: 304, motor: "PSM", ice: "1.6 T-GDI, 118–132 kW", sysKw: kwSys, gearbox: "6-Gang-Automatik", ac: 7.2 });

EVDB.brand({
  id: "hyundai", name: "Hyundai", country: "Südkorea", group: "Hyundai Motor Group",
  warranty: { vehicle: "5 Jahre ohne km-Begrenzung", hv: "8 Jahre / 160.000 km (mind. 70 % Kapazität)", rust: "12 Jahre" },
  models: [
    { name: "Inster", type: "BEV", seg: "Kleinstwagen", platform: "K1 (BEV-Ableitung)", since: 2024, arch: "400 V",
      d: { chem: "NMC", layout: "FWD", motor: "PSM", ac: 11, dc: 85, t: 30 },
      variants: [{ name: "42 kWh", net: 42, v: 266, range: 327, kw: 71, nm: 147 }, { name: "49 kWh", net: 49, v: 310, range: 370, kw: 85, nm: 147 }] },
    { name: "Kona Elektro", type: "BEV", seg: "Kleinwagen-SUV", platform: "K3", since: 2023, arch: "400 V", notes: "Für Europa in Nošovice (Tschechien) gebaut.",
      d: { chem: "NMC", layout: "FWD", motor: "PSM", ac: 11, dc: 102 },
      variants: [{ name: "48,4 kWh", net: 48.4, v: 269, range: 377, kw: 115, nm: 255 }, { name: "65,4 kWh", net: 65.4, v: 358, range: 514, kw: 160, nm: 255, t: 41 }] },
    { name: "IONIQ 5 / IONIQ 5 N", type: "BEV", seg: "Kompakt-Crossover", platform: "E-GMP", since: 2021, arch: "800 V", notes: EGMP, d: E8,
      variants: [
        { name: "63 kWh RWD", net: 63, v: 522, range: 440, layout: "RWD", kw: 125, nm: 350, dc: 195 },
        { name: "84 kWh RWD", net: 84, v: 697, range: 570, layout: "RWD", kw: 168, nm: 350, ratio: "10,65 : 1", dc: 260 },
        { name: "84 kWh AWD", net: 84, v: 697, range: 546, layout: "AWD", kw: 239, nm: 605, dc: 260 },
        { name: "IONIQ 5 N", net: 84, v: 697, range: 448, layout: "AWD", kw: 478, nm: 770, rpm: 21000, dc: 260 }
      ] },
    { name: "IONIQ 6", type: "BEV", seg: "Mittelklasse-Limousine", platform: "E-GMP", since: 2022, arch: "800 V", notes: EGMP + " Facelift 2025 mit 63/84 kWh.", d: E8,
      variants: [
        { name: "63 kWh RWD", net: 63, v: 522, range: 480, layout: "RWD", kw: 125, nm: 350, dc: 195 },
        { name: "84 kWh RWD", net: 84, v: 697, range: 680, layout: "RWD", kw: 168, nm: 350, dc: 260 },
        { name: "84 kWh AWD", net: 84, v: 697, range: 640, layout: "AWD", kw: 239, nm: 605, dc: 260 }
      ] },
    { name: "IONIQ 9", type: "BEV", seg: "Oberklasse-SUV (7-Sitzer)", platform: "E-GMP", since: 2025, arch: "800 V", notes: EGMP,
      d: Object.assign({}, E8, { net: 110.3, dc: 233, t: 24 }),
      variants: [
        { name: "RWD", range: 620, layout: "RWD", kw: 160, nm: 350 },
        { name: "AWD", range: 606, layout: "AWD", kw: 230, nm: 605 },
        { name: "AWD Performance", range: 600, layout: "AWD", kw: 315, nm: 700 }
      ] },
    { name: "IONIQ 3", type: "BEV", seg: "Kompaktklasse", platform: "E-GMP (400 V)", since: 2026, arch: "400 V",
      notes: "Serienversion der Studie Concept Three, Fertigung in der Türkei seit August 2026. In Deutschland seit Anfang September 2026 bestellbar (ab 28.950 €). DC-Laden je nach Version bis 110–119 kW, 10–80 % in 29–30 min; AC 11 kW (große Batterie optional 22 kW).",
      d: { layout: "FWD", ac: 11 },
      variants: [{ name: "42 kWh", net: 42, chem: "LFP", range: 344, kw: 108, dc: 119 }, { name: "61 kWh", net: 61, chem: "NMC", range: 497, kw: 99, dc: 110, t: 30 }] },
    { name: "NEXO (2. Generation)", type: "FCEV", seg: "Mittelklasse-SUV", since: 2025, arch: "400 V",
      hybrid: "Brennstoffzellen-Hybrid: PEM-Stack lädt Pufferbatterie und versorgt E-Maschine; drei 700-bar-Tanks (6,69 kg H₂)",
      variants: [{ name: "NEXO", gross: 2.64, chem: "Li-Ion", range: 826, layout: "FWD", kw: 150, nm: 350, motor: "PSM", ice: "PEM-Brennstoffzelle, 110 kW (brutto)", port: "H₂ 700 bar (SAE J2601)" }] },
    { name: "Kona Hybrid", type: "HEV", seg: "Kleinwagen-SUV", platform: "K3", since: 2023, arch: "240 V", hybrid: TMED,
      variants: [{ name: "Hybrid 1.6 GDI", gross: 1.32, v: 240, chem: "Li-Ion-Polymer", layout: "FWD", kw: 32, nm: 170, motor: "PSM", ice: "1.6 GDI Sauger, 77 kW", sysKw: 95, gearbox: "6-Gang-DKG" }] },
    { name: "Tucson Hybrid / Plug-in-Hybrid", type: "PHEV", seg: "Kompakt-SUV", platform: "N3", since: 2021, arch: "400 V", hybrid: TMED, variants: [hev16t(158), phev16t(70, 185)] },
    { name: "Santa Fe Hybrid / Plug-in-Hybrid", type: "PHEV", seg: "SUV (7-Sitzer)", platform: "N3", since: 2024, arch: "400 V", hybrid: TMED, variants: [hev16t(158, "AWD"), phev16t(54, 186)] }
  ]
});

EVDB.brand({
  id: "kia", name: "Kia", country: "Südkorea", group: "Hyundai Motor Group",
  warranty: { vehicle: "7 Jahre / 150.000 km", hv: "7 Jahre / 150.000 km (neuere EV-Modelle: 8 Jahre / 160.000 km), mind. 70 % Kapazität", rust: "12 Jahre" },
  models: [
    { name: "EV2", type: "BEV", seg: "Kleinwagen-SUV", platform: "E-GMP (400 V)", since: 2026, arch: "400 V", notes: EGMP400 + " Gebaut in Žilina (Slowakei).",
      d: { layout: "FWD", motor: "PSM", ac: 11 },
      variants: [{ name: "Standard Range (42,2 kWh)", net: 42.2, chem: "LFP", range: 317, kw: 108 }, { name: "Long Range (61 kWh)", net: 61, chem: "NMC", range: 448, kw: 100, nm: 250, t: 30 }] },
    { name: "EV3", type: "BEV", seg: "Kompakt-SUV", platform: "E-GMP (400 V)", since: 2024, arch: "400 V", notes: EGMP400,
      d: { chem: "NMC", cellMaker: "LG Energy Solution", layout: "FWD", kw: 150, nm: 283, motor: "PSM", ac: 11 },
      variants: [{ name: "58,3 kWh", net: 58.3, range: 436, dc: 102, t: 29 }, { name: "81,4 kWh", net: 81.4, range: 605, dc: 128, t: 31 }] },
    { name: "EV4 (Hatchback / Fastback)", type: "BEV", seg: "Kompaktklasse", platform: "E-GMP (400 V)", since: 2025, arch: "400 V", notes: EGMP400 + " Hatchback aus Žilina (Slowakei).",
      d: { chem: "NMC", layout: "FWD", kw: 150, nm: 283, motor: "PSM", ac: 11 },
      variants: [{ name: "58,3 kWh", net: 58.3, range: 440, dc: 102 }, { name: "81,4 kWh", net: 81.4, range: 625, dc: 128 }] },
    { name: "EV5", type: "BEV", seg: "Kompakt-SUV", platform: "E-GMP (400 V)", since: 2025, arch: "400 V", notes: EGMP400,
      variants: [{ name: "81,4 kWh FWD", net: 81.4, chem: "NMC", range: 530, layout: "FWD", kw: 160, nm: 295, motor: "PSM", ac: 11, dc: 150, t: 30 }] },
    { name: "EV6 / EV6 GT", type: "BEV", seg: "Mittelklasse-Crossover", platform: "E-GMP", since: 2021, arch: "800 V", notes: EGMP, d: E8,
      variants: [
        { name: "63 kWh RWD", net: 63, v: 522, range: 428, layout: "RWD", kw: 125, nm: 350, dc: 195 },
        { name: "84 kWh RWD", net: 84, v: 697, range: 582, layout: "RWD", kw: 168, nm: 350, dc: 258 },
        { name: "84 kWh AWD", net: 84, v: 697, range: 546, layout: "AWD", kw: 239, nm: 605, dc: 258 },
        { name: "EV6 GT", net: 84, v: 697, range: 450, layout: "AWD", kw: 478, nm: 770, rpm: 21000, dc: 258 }
      ] },
    { name: "EV9", type: "BEV", seg: "Oberklasse-SUV (7-Sitzer)", platform: "E-GMP", since: 2023, arch: "800 V", notes: EGMP, d: Object.assign({}, E8, { t: 24 }),
      variants: [
        { name: "76,1 kWh RWD", net: 76.1, range: 443, layout: "RWD", kw: 160, nm: 350, dc: 210 },
        { name: "99,8 kWh RWD", net: 99.8, v: 552, range: 563, layout: "RWD", kw: 150, nm: 350, dc: 210 },
        { name: "99,8 kWh AWD", net: 99.8, v: 552, range: 512, layout: "AWD", kw: 283, nm: 700, dc: 210 },
        { name: "EV9 GT", net: 99.8, v: 552, range: 510, layout: "AWD", kw: 374, nm: 740, dc: 210 }
      ] },
    { name: "PV5 (Passenger / Cargo)", type: "BEV", seg: "Van (PBV)", platform: "E-GMP.S", since: 2025, arch: "400 V",
      d: { layout: "FWD", kw: 120, nm: 250, motor: "PSM", ac: 11, dc: 150 },
      variants: [{ name: "51,5 kWh", net: 51.5, chem: "NMC", range: 295 }, { name: "71,2 kWh", net: 71.2, chem: "NMC", range: 412 }] },
    { name: "Niro EV", type: "BEV", seg: "Kompakt-Crossover", platform: "K3", since: 2022, arch: "400 V",
      variants: [{ name: "64,8 kWh", net: 64.8, v: 358, chem: "NMC", cellMaker: "CATL", range: 460, layout: "FWD", kw: 150, nm: 255, motor: "PSM", ac: 11, dc: 80, t: 43 }] },
    { name: "Niro Hybrid / Plug-in-Hybrid", type: "PHEV", seg: "Kompakt-Crossover", platform: "K3", since: 2022, arch: "360 V", hybrid: TMED,
      variants: [
        { name: "Hybrid 1.6 GDI", type: "HEV", gross: 1.32, v: 240, chem: "Li-Ion-Polymer", layout: "FWD", kw: 32, nm: 170, motor: "PSM", ice: "1.6 GDI Sauger, 77 kW", sysKw: 95, gearbox: "6-Gang-DKG" },
        { name: "Plug-in-Hybrid 1.6 GDI", gross: 11.1, v: 360, chem: "Li-Ion-Polymer", range: 62, layout: "FWD", kw: 62, nm: 203, motor: "PSM", ice: "1.6 GDI Sauger, 77 kW", sysKw: 126, gearbox: "6-Gang-DKG", ac: 3.3 }
      ] },
    { name: "Sportage Hybrid / Plug-in-Hybrid", type: "PHEV", seg: "Kompakt-SUV", platform: "N3", since: 2022, arch: "400 V", hybrid: TMED, variants: [hev16t(169), phev16t(70, 185)] },
    { name: "Sorento Hybrid / Plug-in-Hybrid", type: "PHEV", seg: "SUV (7-Sitzer)", platform: "N3", since: 2020, arch: "400 V", hybrid: TMED, variants: [hev16t(158, "AWD"), phev16t(55, 185)] }
  ]
});

EVDB.brand({
  id: "genesis", name: "Genesis", country: "Südkorea", group: "Hyundai Motor Group",
  warranty: { vehicle: "5 Jahre ohne km-Begrenzung (inkl. Wartung, marktabhängig)", hv: "8 Jahre / 160.000 km" },
  models: [
    { name: "GV60", type: "BEV", seg: "Kompakt-Crossover", platform: "E-GMP", since: 2022, arch: "800 V", notes: EGMP, d: Object.assign({}, E8, { net: 84, v: 697, dc: 240 }),
      variants: [{ name: "RWD", range: 561, layout: "RWD", kw: 168, nm: 350 }, { name: "AWD", range: 512, layout: "AWD", kw: 234, nm: 605 }, { name: "Performance AWD", range: 481, layout: "AWD", kw: 360, nm: 700 }] },
    { name: "Electrified GV70", type: "BEV", seg: "Mittelklasse-SUV", platform: "M3 (Verbrenner-Ableitung)", since: 2022, arch: "800 V",
      variants: [{ name: "AWD (84 kWh)", net: 84, chem: "NMC", cellMaker: "SK On", range: 479, layout: "AWD", kw: 360, nm: 700, motor: "PSM", ac: 11, dc: 240, t: 19 }] },
    { name: "Electrified G80", type: "BEV", seg: "Obere Mittelklasse", platform: "M3 (Verbrenner-Ableitung)", since: 2022, arch: "800 V",
      variants: [{ name: "AWD (94,5 kWh)", net: 94.5, chem: "NMC", cellMaker: "SK On", range: 570, layout: "AWD", kw: 272, nm: 700, motor: "PSM", ac: 11, dc: 187, t: 25 }] }
  ]
});
})();
