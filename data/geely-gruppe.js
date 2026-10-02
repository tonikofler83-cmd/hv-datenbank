// Geely Holding: Volvo, Polestar, Zeekr, Lynk & Co, smart (JV mit Mercedes-Benz), Lotus, Geely
(function () {
const SEA = "SEA (Sustainable Experience Architecture) von Geely; Hinterachsantrieb als Basis, PSM mit integriertem Inverter.";
const VOLVO_PHEV = "Axle-Split (P4): Vierzylinder-Turbo mit 8-Gang-Automatik und Kurbelwellen-Startergenerator an der Vorderachse, E-Maschine an der Hinterachse (ERAD), keine Kardanwelle";
const vphev = (range) => [
  { name: "T6 Plug-in-Hybrid AWD", net: 14.7, gross: 18.8, range, kw: 107, nm: 309, ice: "2.0 Vierzylinder-Turbo, 186 kW", sysKw: 257 },
  { name: "T8 Plug-in-Hybrid AWD", net: 14.7, gross: 18.8, range: range - 2, kw: 107, nm: 309, ice: "2.0 Vierzylinder-Turbo, 228 kW", sysKw: 335 }
];
const VPD = { chem: "NMC", cellMaker: "LG Energy Solution", layout: "AWD", motor: "PSM", gearbox: "8-Gang-Automatik (Aisin)", ac: 6.4 };

EVDB.brand({
  id: "volvo", name: "Volvo", country: "Schweden", group: "Geely Holding",
  warranty: { vehicle: "2 Jahre ohne km-Begrenzung (marktabhängig 3 Jahre / 100.000 km)", hv: "8 Jahre / 160.000 km (mind. 70 % Kapazität)", rust: "12 Jahre" },
  models: [
    { name: "EX30 / EX30 Cross Country", type: "BEV", seg: "Kleinwagen-SUV", platform: "SEA", since: 2023, arch: "400 V", notes: SEA + " Fertigung für Europa in Gent.",
      d: { motor: "PSM", ac: 11 },
      variants: [
        { name: "Single Motor (LFP)", net: 49, gross: 51, chem: "LFP", range: 337, layout: "RWD", kw: 200, nm: 343, dc: 134 },
        { name: "Single Motor Extended Range", net: 64, gross: 69, chem: "NMC", range: 476, layout: "RWD", kw: 200, nm: 343, dc: 153, t: 26 },
        { name: "Twin Motor Performance", net: 64, gross: 69, chem: "NMC", range: 450, layout: "AWD", kw: 315, nm: 543, dc: 153 }
      ] },
    { name: "EX40 / EC40", type: "BEV", seg: "Kompakt-SUV", platform: "CMA", since: 2020, arch: "400 V", notes: "Seit Modelljahr 2023 Heckantrieb mit bei Volvo entwickelter PSM, Allrad mit ASM vorn.",
      d: { chem: "NMC", ac: 11 },
      variants: [
        { name: "Single Motor", net: 66, gross: 69, range: 480, layout: "RWD", kw: 175, nm: 420, motor: "PSM", dc: 135 },
        { name: "Single Motor Extended Range", net: 79, gross: 82, range: 575, layout: "RWD", kw: 185, nm: 420, motor: "PSM", dc: 205, t: 28 },
        { name: "Twin Motor", net: 79, gross: 82, range: 540, layout: "AWD", kw: 300, nm: 670, motor: "PSM + ASM", dc: 205 }
      ] },
    { name: "EX60", type: "BEV", seg: "Mittelklasse-SUV", platform: "SPA3", since: 2026, arch: "800 V",
      notes: "SPA3: 800 V, Cell-to-Body-Batterie, Megacasting im Heck, selbst entwickelte E-Maschinen, zentrale Rechnerarchitektur (HuginCore). Gebaut in Torslanda.",
      d: { chem: "NMC", pack: "Cell-to-Body", motor: "PSM", ac: 11 },
      variants: [
        { name: "P6 (RWD)", net: 80, gross: 83, range: 620, layout: "RWD", kw: 275, dc: 320 },
        { name: "P10 AWD", net: 91, gross: 95, range: 660, layout: "AWD", kw: 375, dc: 370 },
        { name: "P12 AWD", net: 112, gross: 117, range: 810, layout: "AWD", kw: 500, dc: 370 }
      ] },
    { name: "ES90", type: "BEV", seg: "Obere Mittelklasse", platform: "SPA2", since: 2025, arch: "800 V", notes: "Erster Volvo mit 800 V. Gebaut in Chengdu.",
      d: { chem: "NMC", cellMaker: "CATL", motor: "PSM", ac: 11 },
      variants: [
        { name: "Single Motor", net: 88, gross: 92, range: 650, layout: "RWD", kw: 245, nm: 480, dc: 300 },
        { name: "Twin Motor", net: 102, gross: 106, range: 700, layout: "AWD", kw: 330, nm: 670, dc: 350, t: 20 },
        { name: "Twin Motor Performance", net: 102, gross: 106, range: 700, layout: "AWD", kw: 500, nm: 870, dc: 350 }
      ] },
    { name: "EX90", type: "BEV", seg: "Oberklasse-SUV (7-Sitzer)", platform: "SPA2", since: 2024, arch: "800 V", notes: "Zum Start 400 V (111 kWh, DC 250 kW); ab Modelljahr 2026 auf 800 V umgestellt. Bidirektionales Laden vorbereitet, Lidar serienmäßig.",
      d: { chem: "NMC", cellMaker: "CATL", layout: "AWD", motor: "PSM", ac: 11 },
      variants: [
        { name: "Twin Motor (MJ 2026, 800 V)", net: 102, gross: 106, range: 620, kw: 335, dc: 350 },
        { name: "Twin Motor Performance (MJ 2026)", net: 102, gross: 106, range: 620, kw: 500, dc: 350 },
        { name: "Twin Motor (bis MJ 2025, 400 V)", net: 107, gross: 111, v: 400, range: 600, kw: 300, nm: 770, dc: 250, t: 30 }
      ] },
    { name: "XC60 / XC90 / V60 / V90 Plug-in-Hybrid", type: "PHEV", seg: "Mittelklasse bis Oberklasse", platform: "SPA", since: 2017, arch: "400 V", hybrid: VOLVO_PHEV,
      notes: "3-lagige Batterie im Mitteltunnel; AC-Laden nur zweiphasig (max. 6,4 kW).", d: VPD, variants: vphev(82) },
    { name: "XC70 (Langstrecken-Plug-in-Hybrid)", type: "PHEV", seg: "Mittelklasse-SUV", platform: "SMA", since: 2026, status: "planned", arch: "400 V",
      hybrid: "seriell-parallel: 1,5-l-Turbo mit 3-Gang-Hybridgetriebe (DHT), Allrad mit E-Maschine hinten",
      notes: "In China seit 2025; Europa-Einführung angekündigt. Reichweitenangaben nach chinesischem CLTC-Zyklus.",
      variants: [{ name: "AWD (39,6 kWh)", gross: 39.6, chem: "NMC", range: 180, layout: "AWD", ice: "1.5 Vierzylinder-Turbo", gearbox: "3-Gang-DHT", dc: 100 }] }
  ]
});

EVDB.brand({
  id: "polestar", name: "Polestar", country: "Schweden", group: "Geely Holding",
  warranty: { vehicle: "2 Jahre ohne km-Begrenzung (marktabhängig länger)", hv: "8 Jahre / 160.000 km (mind. 70 % Kapazität)" },
  models: [
    { name: "Polestar 2", type: "BEV", seg: "Mittelklasse-Fastback", platform: "CMA", since: 2020, arch: "400 V",
      d: { chem: "NMC", ac: 11 },
      variants: [
        { name: "Standard Range Single Motor", net: 67, gross: 70, cellMaker: "CATL", range: 554, layout: "RWD", kw: 200, nm: 490, motor: "PSM", dc: 180 },
        { name: "Long Range Single Motor", net: 79, gross: 82, cellMaker: "CATL", range: 659, layout: "RWD", kw: 220, nm: 490, motor: "PSM", dc: 205, t: 28 },
        { name: "Long Range Dual Motor Performance", net: 79, gross: 82, range: 568, layout: "AWD", kw: 350, nm: 740, motor: "PSM + ASM", dc: 205 }
      ] },
    { name: "Polestar 3", type: "BEV", seg: "Oberklasse-SUV", platform: "SPA2", since: 2024, arch: "800 V", notes: "Zum Start 400 V (111 kWh, DC 250 kW); ab Modelljahr 2026 800 V mit neuen Batterien und selbst entwickelter PSM hinten.",
      d: { chem: "NMC", cellMaker: "CATL", motor: "PSM", ac: 11 },
      variants: [
        { name: "Rear Motor (MJ 2026)", gross: 92, range: 604, layout: "RWD", kw: 245, dc: 310 },
        { name: "Dual Motor (MJ 2026)", gross: 106, range: 635, layout: "AWD", kw: 400, dc: 350, t: 22 },
        { name: "Performance (MJ 2026)", gross: 106, range: 593, layout: "AWD", kw: 500, dc: 350 }
      ] },
    { name: "Polestar 4", type: "BEV", seg: "SUV-Coupé", platform: "SEA", since: 2024, arch: "400 V", notes: SEA + " Ohne Heckscheibe (Kamera-Rückspiegel).",
      d: { net: 94, gross: 100, chem: "NMC", cellMaker: "CATL", motor: "PSM", ac: 22, dc: 200, t: 30 },
      variants: [{ name: "Long Range Single Motor", range: 620, layout: "RWD", kw: 200, nm: 343 }, { name: "Long Range Dual Motor", range: 590, layout: "AWD", kw: 400, nm: 686 }] },
    { name: "Polestar 5", type: "BEV", seg: "Gran Turismo (4-Türer)", platform: "PPA (geklebte Aluminiumstruktur)", since: 2025, arch: "800 V",
      notes: "Eigene Plattform mit geklebtem Aluminium-Chassis, selbst entwickelte Heck-PSM, Zellen von SK On.",
      d: { net: 106, gross: 112, chem: "NMC", cellMaker: "SK On", layout: "AWD", motor: "PSM", ac: 11, dc: 350, t: 22 },
      variants: [{ name: "Dual Motor", range: 670, kw: 550, nm: 812 }, { name: "Performance", range: 565, kw: 650, nm: 1015 }] }
  ]
});

EVDB.brand({
  id: "zeekr", name: "Zeekr", country: "China", group: "Geely Holding",
  warranty: { vehicle: "5 Jahre / 100.000 km (marktabhängig)", hv: "8 Jahre / 160.000 km" },
  models: [
    { name: "X", type: "BEV", seg: "Kompakt-SUV", platform: "SEA", since: 2023, arch: "400 V", notes: SEA,
      d: { net: 66, gross: 69, chem: "NMC", motor: "PSM", ac: 22, dc: 150, t: 30 },
      variants: [{ name: "Long Range RWD", range: 446, layout: "RWD", kw: 200, nm: 343 }, { name: "Privilege AWD", range: 425, layout: "AWD", kw: 315, nm: 543 }] },
    { name: "001", type: "BEV", seg: "Shooting Brake", platform: "SEA", since: 2023, arch: "400 V", notes: SEA + " Europa-Version mit 400 V; in China inzwischen 800 V.",
      d: { net: 94, gross: 100, chem: "NMC", cellMaker: "CATL (Qilin)", motor: "PSM", ac: 22, dc: 200, t: 30 },
      variants: [{ name: "Long Range RWD", range: 620, layout: "RWD", kw: 200, nm: 343 }, { name: "Performance / Privilege AWD", range: 585, layout: "AWD", kw: 400, nm: 686 }] },
    { name: "7X", type: "BEV", seg: "Mittelklasse-SUV", platform: "SEA (800 V)", since: 2025, arch: "800 V", notes: "800 V mit SiC-Antrieb; LFP-„Golden Battery“ aus Geely-Fertigung mit sehr hoher Laderate.",
      d: { motor: "PSM", ac: 22 },
      variants: [
        { name: "Core RWD (75 kWh)", net: 75, chem: "LFP", cellMaker: "Geely (Golden Battery)", range: 480, layout: "RWD", kw: 310, nm: 440, dc: 450, t: 13 },
        { name: "Long Range RWD (100 kWh)", net: 100, chem: "NMC", cellMaker: "CATL (Qilin)", range: 615, layout: "RWD", kw: 310, nm: 440, dc: 360, t: 16 },
        { name: "Privilege AWD (100 kWh)", net: 100, chem: "NMC", cellMaker: "CATL (Qilin)", range: 543, layout: "AWD", kw: 475, nm: 710, dc: 360, t: 16 }
      ] },
    { name: "7GT", type: "BEV", seg: "Mittelklasse-Shooting-Brake", platform: "SEA (800 V)", since: 2026, status: "planned", arch: "800 V", notes: "Europa-Version des Zeekr 007 GT, angekündigt für 2026.", variants: [] }
  ]
});

EVDB.brand({
  id: "lynk-co", name: "Lynk & Co", country: "China / Schweden", group: "Geely Holding",
  warranty: { vehicle: "k. A. (marktabhängig)", hv: "8 Jahre / 160.000 km" },
  models: [
    { name: "01 Plug-in-Hybrid", type: "PHEV", seg: "Kompakt-SUV", platform: "CMA", since: 2021, arch: "400 V", hybrid: "parallel (P2.5): E-Maschine an einer Teilwelle des 7-Gang-Doppelkupplungsgetriebes",
      variants: [{ name: "01 PHEV", gross: 17.6, chem: "NMC", range: 75, layout: "FWD", kw: 60, motor: "PSM", ice: "1.5 Dreizylinder-Turbo, 132 kW", sysKw: 192, gearbox: "7-Gang-DKG", ac: 6.6 }] },
    { name: "02", type: "BEV", seg: "Kompakt-Crossover", platform: "SEA", since: 2024, arch: "400 V", notes: SEA,
      variants: [{ name: "02", net: 66, gross: 69, chem: "NMC", range: 445, layout: "RWD", kw: 200, nm: 343, motor: "PSM", ac: 22, dc: 150, t: 30 }] },
    { name: "08 Plug-in-Hybrid", type: "PHEV", seg: "Mittelklasse-SUV", platform: "CMA Evo", since: 2025, arch: "400 V", hybrid: "seriell-parallel: 3-Gang-Hybridgetriebe (DHT) mit E-Maschinen P1 + P3",
      variants: [{ name: "08 PHEV", gross: 39.6, chem: "NMC", range: 200, layout: "FWD", kw: 155, motor: "PSM", ice: "1.5 Vierzylinder-Turbo, 102 kW", sysKw: 254, gearbox: "3-Gang-DHT", ac: 11, dc: 85, t: 33 }] }
  ]
});

EVDB.brand({
  id: "smart", name: "smart", country: "Deutschland / China", group: "smart Automobile (Mercedes-Benz 50 % / Geely 50 %)",
  warranty: { vehicle: "2 Jahre (marktabhängig länger)", hv: "8 Jahre / 200.000 km" },
  models: [
    { name: "#1", type: "BEV", seg: "Kleinwagen-SUV", platform: "SEA", since: 2022, arch: "400 V", notes: SEA, d: { motor: "PSM" },
      variants: [
        { name: "Pro (49 kWh)", net: 47, gross: 49, chem: "LFP", range: 310, layout: "RWD", kw: 200, nm: 343, ac: 7.4, dc: 130 },
        { name: "Pro+ / Premium (66 kWh)", net: 62, gross: 66, chem: "NMC", range: 440, layout: "RWD", kw: 200, nm: 343, ac: 22, dc: 150, t: 30 },
        { name: "Brabus", net: 62, gross: 66, chem: "NMC", range: 400, layout: "AWD", kw: 315, nm: 543, ac: 22, dc: 150 }
      ] },
    { name: "#3", type: "BEV", seg: "Kompakt-SUV-Coupé", platform: "SEA", since: 2023, arch: "400 V", notes: SEA, d: { motor: "PSM" },
      variants: [
        { name: "Pro (49 kWh)", net: 47, gross: 49, chem: "LFP", range: 325, layout: "RWD", kw: 200, nm: 343, ac: 7.4, dc: 130 },
        { name: "Pro+ / Premium (66 kWh)", net: 62, gross: 66, chem: "NMC", range: 455, layout: "RWD", kw: 200, nm: 343, ac: 22, dc: 150 },
        { name: "Brabus", net: 62, gross: 66, chem: "NMC", range: 415, layout: "AWD", kw: 315, nm: 543, ac: 22, dc: 150 }
      ] },
    { name: "#5", type: "BEV", seg: "Mittelklasse-SUV", platform: "SEA (800 V)", since: 2025, arch: "800 V", notes: "800 V bei den 100-kWh-Versionen; Einstiegsversion Pro mit 400 V und LFP.", d: { motor: "PSM" },
      variants: [
        { name: "Pro (76 kWh, 400 V)", gross: 76, chem: "LFP", range: 465, layout: "RWD", kw: 250, ac: 11, dc: 150, t: 30 },
        { name: "Pro+ / Premium (100 kWh)", net: 94, gross: 100, chem: "NMC", range: 590, layout: "RWD", kw: 267, ac: 22, dc: 400, t: 18 },
        { name: "Brabus", net: 94, gross: 100, chem: "NMC", range: 540, layout: "AWD", kw: 475, nm: 710, ac: 22, dc: 400, t: 18 }
      ] },
    { name: "#2", type: "BEV", seg: "Kleinstwagen (Zweisitzer)", since: 2026, status: "planned", arch: "400 V", notes: "Nachfolger des fortwo auf eigener Plattform (ECA), Vorstellung Ende 2026 angekündigt.", variants: [] }
  ]
});

EVDB.brand({
  id: "lotus", name: "Lotus", country: "Großbritannien / China", group: "Geely Holding",
  warranty: { vehicle: "5 Jahre / 150.000 km", hv: "8 Jahre / 200.000 km" },
  models: [
    { name: "Eletre", type: "BEV", seg: "Hyper-SUV", platform: "EPA", since: 2023, arch: "800 V", notes: "800 V, Cell-to-Pack-Batterie; Topversion mit 2-Gang-Getriebe an der Hinterachse.",
      d: { net: 109, gross: 112, chem: "NMC", cellMaker: "CATL", pack: "Cell-to-Pack", layout: "AWD", motor: "PSM", ac: 22, dc: 350, t: 20 },
      variants: [{ name: "Eletre 600", range: 600, kw: 450, nm: 710 }, { name: "Eletre 900", range: 490, kw: 675, nm: 985, ratio: "hinten 2-Gang" }] },
    { name: "Emeya", type: "BEV", seg: "Hyper-GT", platform: "EPA", since: 2024, arch: "800 V",
      d: { gross: 102, chem: "NMC", cellMaker: "CATL", pack: "Cell-to-Pack", layout: "AWD", motor: "PSM", ac: 22, dc: 400, t: 14 },
      variants: [{ name: "Emeya 600", range: 610, kw: 450, nm: 710 }, { name: "Emeya 900", range: 485, kw: 675, nm: 985, ratio: "hinten 2-Gang" }] },
    { name: "Eletre Plug-in-Hybrid („Hyper Hybrid“)", type: "PHEV", seg: "Hyper-SUV", platform: "EPA", since: 2026, status: "planned", arch: "900 V", hybrid: "Plug-in-Hybrid mit 900-V-Architektur und 2.0-Turbo", notes: "In China vorgestellt, Europa-Start angekündigt.", variants: [] }
  ]
});

EVDB.brand({
  id: "geely", name: "Geely", country: "China", group: "Geely Holding",
  warranty: { vehicle: "k. A. (marktabhängig, teils bis 8 Jahre)", hv: "8 Jahre / 200.000 km (marktabhängig)" },
  note: "Die Stammmarke Geely ist seit 2025 schrittweise in einzelnen europäischen Märkten gestartet (u. a. Großbritannien, Polen, Griechenland, Italien).",
  models: [
    { name: "EX5", type: "BEV", seg: "Kompakt-SUV", platform: "GEA", since: 2025, arch: "400 V", notes: "11-in-1-Antriebseinheit, LFP-Kurzklingenzellen aus eigener Fertigung.",
      variants: [{ name: "EX5 (60,2 kWh)", net: 60.2, chem: "LFP", cellMaker: "Geely (Aegis Short Blade)", range: 430, layout: "FWD", kw: 160, nm: 320, motor: "PSM", ac: 11, dc: 160 }] },
    { name: "Starray EM-i", type: "PHEV", seg: "Kompakt-SUV", platform: "GEA", since: 2025, arch: "400 V", hybrid: "seriell-parallel: Hybridgetriebe mit einem Direktgang (überwiegend serieller Betrieb)",
      variants: [{ name: "EM-i (18,4 kWh)", gross: 18.4, chem: "LFP", range: 83, layout: "FWD", kw: 160, motor: "PSM", ice: "1.5 Vierzylinder-Sauger, 73 kW", gearbox: "1-Gang-DHT", ac: 6.6, dc: 30 }] }
  ]
});
})();
