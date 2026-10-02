// Weitere Hersteller: Jaguar Land Rover, KGM, VinFast, Togg sowie Sportwagen-/Kleinserienhersteller
(function () {
const JLR_P2 = "parallel (P2): E-Maschine im 8-Gang-Automatikgetriebe (ZF 8HP), mechanischer Allrad mit Untersetzung";

EVDB.brand({
  id: "land-rover", name: "Land Rover / Range Rover", country: "Großbritannien", group: "JLR (Tata Motors)",
  warranty: { vehicle: "3 Jahre / 100.000 km", hv: "8 Jahre / 160.000 km (mind. 70 % Kapazität)" },
  models: [
    { name: "Range Rover / Range Rover Sport Plug-in-Hybrid", type: "PHEV", seg: "Luxus-SUV", platform: "MLA-Flex", since: 2022, arch: "400 V", hybrid: JLR_P2,
      d: { net: 31.8, gross: 38.2, chem: "NMC", layout: "AWD", kw: 160, motor: "PSM", ice: "3.0 Reihensechszylinder-Turbo (Ingenium)", gearbox: "8-Gang-Automatik (ZF 8HP)", ac: 7.2, dc: 50 },
      variants: [{ name: "P460e", range: 120, sysKw: 338 }, { name: "P550e", range: 118, sysKw: 405 }] },
    { name: "Range Rover Electric", type: "BEV", seg: "Luxus-SUV", platform: "MLA-Flex", since: 2026, status: "planned", arch: "800 V",
      notes: "Erstes vollelektrisches JLR-Modell der neuen Generation: selbst gefertigte Batterie (344 prismatische Zellen, zweilagig) und eigene Antriebseinheiten. Auslieferung mehrfach verschoben.",
      variants: [{ name: "Electric (117 kWh)", gross: 117, chem: "NMC", pack: "344 prismatische Zellen, zweilagig", layout: "AWD", kw: 404, nm: 850, motor: "PSM", motorMaker: "JLR (Wolverhampton)", dc: 350 }] },
    { name: "Range Rover Sport Electric", type: "BEV", seg: "Luxus-SUV", platform: "MLA-Flex", since: 2026, arch: "800 V",
      notes: "Seit 01.10.2026 bestellbar (ab 120.400 €), Auslieferung ab Anfang 2027. 118,5-kWh-Batterie, je eine E-Maschine (261 kW) pro Achse; in 10 min bis zu 220 km Reichweite nachladbar.",
      d: { range: 609, layout: "AWD", nm: 850, t: 22 },
      variants: [{ name: "EV450", kw: 331 }, { name: "EV550", kw: 405 }] },
    { name: "Range Rover Velar / Defender 110 Plug-in-Hybrid", type: "PHEV", seg: "Oberklasse-SUV / Geländewagen", since: 2020, arch: "400 V", hybrid: JLR_P2,
      variants: [{ name: "P300e / P400e", gross: 19.2, chem: "NMC", range: 64, layout: "AWD", kw: 105, motor: "PSM", ice: "2.0 Vierzylinder-Turbo (Ingenium), 221 kW", sysKw: 297, gearbox: "8-Gang-Automatik (ZF 8HP)", ac: 7, dc: 50 }] },
    { name: "Range Rover Evoque / Discovery Sport Plug-in-Hybrid", type: "PHEV", seg: "Kompakt-SUV", platform: "PTA", since: 2020, arch: "400 V",
      hybrid: "Axle-Split (P4): Dreizylinder mit 8-Gang-Automatik und Riemenstartergenerator vorn, E-Maschine an der Hinterachse (ERAD)",
      variants: [{ name: "P270e / P300e", gross: 14.9, chem: "NMC", range: 62, layout: "AWD", kw: 80, nm: 260, motor: "PSM", ice: "1.5 Dreizylinder-Turbo (Ingenium), 147 kW", sysKw: 227, gearbox: "8-Gang-Automatik (Aisin)", ac: 7, dc: 32 }] }
  ]
});

EVDB.brand({
  id: "jaguar", name: "Jaguar", country: "Großbritannien", group: "JLR (Tata Motors)", status: "planned",
  warranty: { vehicle: "3 Jahre / 100.000 km", hv: "8 Jahre / 160.000 km" },
  note: "Neustart als reine Elektro-Luxusmarke; alle bisherigen Modelle (inkl. I-Pace) sind ausgelaufen.",
  models: [
    { name: "Viertüriger GT (Serienversion Type 00)", type: "BEV", seg: "Luxus-GT", platform: "JEA", since: 2026, arch: "800 V", notes: "Angekündigt: über 700 km WLTP, drei E-Maschinen, über 735 kW. Daten vorläufig.",
      variants: [{ name: "GT (Vorabangaben)", range: 700, layout: "AWD", kw: 735, motor: "PSM" }] }
  ]
});

EVDB.brand({
  id: "kgm", name: "KGM (SsangYong)", country: "Südkorea", group: "KG Group",
  warranty: { vehicle: "5 Jahre / 100.000 km (marktabhängig)", hv: "BEV-Batterie: 10 Jahre / 1.000.000 km (Torres EVX, marktabhängig)" },
  models: [
    { name: "Torres EVX", type: "BEV", seg: "Mittelklasse-SUV", since: 2024, arch: "400 V", notes: "Blade-Batterie und Antriebseinheit von BYD.",
      variants: [{ name: "Torres EVX (73,4 kWh)", gross: 73.4, chem: "LFP (Blade)", cellMaker: "FinDreams (BYD)", pack: "Cell-to-Pack", range: 462, layout: "FWD", kw: 152, nm: 339, motor: "PSM", motorMaker: "BYD", ac: 11, dc: 145, t: 37 }] },
    { name: "Musso EV", type: "BEV", seg: "Pick-up", since: 2025, arch: "400 V",
      d: { gross: 80.6, chem: "LFP (Blade)", cellMaker: "FinDreams (BYD)", motor: "PSM", ac: 11, dc: 150 },
      variants: [{ name: "2WD", range: 420, layout: "FWD", kw: 152, nm: 339 }, { name: "AWD", range: 380, layout: "AWD", kw: 304, nm: 630 }] },
    { name: "Torres / Actyon Hybrid", type: "HEV", seg: "Mittelklasse-SUV", since: 2025, arch: "350 V", hybrid: "seriell-parallel: Dual-Motor-Hybridgetriebe (Technik in Lizenz von BYD)",
      variants: [{ name: "1.5 Turbo Hybrid", gross: 1.83, chem: "LFP", layout: "FWD", kw: 130, nm: 300, motor: "PSM", ice: "1.5 Vierzylinder-Turbo", sysKw: 150, gearbox: "Hybridgetriebe (e-DHT)" }] }
  ]
});

EVDB.brand({
  id: "vinfast", name: "VinFast", country: "Vietnam", group: "Vingroup",
  warranty: { vehicle: "VF 8/9: 10 Jahre / 200.000 km; VF 6/7: 7 Jahre / 160.000 km", hv: "10 Jahre / 200.000 km (VF 8/9), 8 Jahre / 160.000 km (VF 6/7); mind. 70 %" },
  models: [
    { name: "VF 6", type: "BEV", seg: "Kleinwagen-SUV", since: 2025, arch: "400 V", d: { gross: 59.6, chem: "LFP", layout: "FWD", motor: "PSM", ac: 11 },
      variants: [{ name: "Eco", range: 410, kw: 130, nm: 250 }, { name: "Plus", range: 379, kw: 150, nm: 310 }] },
    { name: "VF 7", type: "BEV", seg: "Kompakt-SUV", since: 2025, arch: "400 V", d: { gross: 75.3, chem: "LFP", motor: "PSM", ac: 11 },
      variants: [{ name: "Eco (FWD)", range: 450, layout: "FWD", kw: 150, nm: 310 }, { name: "Plus (AWD)", range: 431, layout: "AWD", kw: 260, nm: 500 }] },
    { name: "VF 8", type: "BEV", seg: "Mittelklasse-SUV", since: 2023, arch: "400 V", d: { gross: 87.7, chem: "NMC", cellMaker: "CATL", layout: "AWD", motor: "PSM", ac: 11, dc: 150 },
      variants: [{ name: "Eco", range: 471, kw: 260, nm: 500 }, { name: "Plus", range: 457, kw: 300, nm: 620 }] },
    { name: "VF 9", type: "BEV", seg: "Oberklasse-SUV (7-Sitzer)", since: 2024, arch: "400 V",
      variants: [{ name: "VF 9 (123 kWh)", gross: 123, chem: "NMC", cellMaker: "CATL", range: 580, layout: "AWD", kw: 300, nm: 620, motor: "PSM", ac: 11 }] }
  ]
});

EVDB.brand({
  id: "togg", name: "Togg", country: "Türkei", group: "Türkiye'nin Otomobili Girişim Grubu",
  warranty: { vehicle: "k. A.", hv: "8 Jahre / 160.000 km (marktabhängig)" },
  note: "Europa-Start im Herbst 2025 in Deutschland; Batterien vom Joint Venture Siro (Togg / Farasis).",
  models: [
    { name: "T10X", type: "BEV", seg: "Kompakt-SUV", since: 2025, arch: "400 V", d: { chem: "NMC", cellMaker: "Siro (Farasis)", motor: "PSM", ac: 11, dc: 180, t: 28 },
      variants: [
        { name: "RWD Standard Range (52,4 kWh)", gross: 52.4, range: 314, layout: "RWD", kw: 160, nm: 350 },
        { name: "RWD Long Range (88,5 kWh)", gross: 88.5, range: 523, layout: "RWD", kw: 160, nm: 350 },
        { name: "AWD Long Range (88,5 kWh)", gross: 88.5, range: 468, layout: "AWD", kw: 320, nm: 700 }
      ] },
    { name: "T10F", type: "BEV", seg: "Mittelklasse-Fastback", since: 2025, arch: "400 V", d: { chem: "NMC", cellMaker: "Siro (Farasis)", motor: "PSM", ac: 11, dc: 180 },
      variants: [{ name: "RWD Long Range (88,5 kWh)", gross: 88.5, range: 623, layout: "RWD", kw: 160, nm: 350 }, { name: "AWD Long Range (88,5 kWh)", gross: 88.5, range: 523, layout: "AWD", kw: 320, nm: 700 }] }
  ]
});

EVDB.brand({
  id: "ferrari", name: "Ferrari", country: "Italien", group: "Ferrari N.V.",
  warranty: { vehicle: "3 Jahre ohne km-Begrenzung (Wartungsprogramm 7 Jahre)", hv: "Hybridkomponenten 5 Jahre; HV-Batterie über Verlängerungsprogramme mit geplantem Batterietausch (im 8. und 16. Jahr) absicherbar" },
  models: [
    { name: "296 GTB / GTS / Speciale", type: "PHEV", seg: "Supersportwagen", since: 2022, arch: "400 V",
      hybrid: "parallel (P2): Axialfluss-E-Maschine (MGU-K) zwischen V6 und 8-Gang-DKG, Trennkupplung für rein elektrisches Fahren; Heckantrieb",
      d: { gross: 7.45, chem: "NMC", range: 25, layout: "RWD", kw: 122, nm: 315, motor: "PSM", motorMaker: "Axialflussmaschine (Ferrari, Technik YASA)", gearbox: "8-Gang-DKG" },
      variants: [{ name: "296 GTB", ice: "2.9 V6 Biturbo (120°), 488 kW", sysKw: 610 }, { name: "296 Speciale", kw: 132, ice: "2.9 V6 Biturbo, 515 kW", sysKw: 647 }] },
    { name: "849 Testarossa (Nachfolger SF90)", type: "PHEV", seg: "Supersportwagen", since: 2025, arch: "400 V",
      hybrid: "Axle-Split + P2: zwei E-Maschinen an der Vorderachse (Torque Vectoring, rein elektrisch = Frontantrieb), eine Axialflussmaschine zwischen V8 und 8-Gang-DKG",
      variants: [{ name: "849 Testarossa", gross: 7.45, chem: "NMC", range: 25, layout: "AWD", kw: 162, motor: "PSM", ice: "4.0 V8 Biturbo, 610 kW", sysKw: 772, gearbox: "8-Gang-DKG" }] },
    { name: "F80", type: "HEV", seg: "Hypersportwagen (limitiert)", since: 2025, arch: "800 V",
      hybrid: "Axle-Split + P2 ohne Stecker: zwei E-Maschinen vorn, MGU-K am V6; zusätzlich 48-V-E-Turbolader",
      variants: [{ name: "F80", gross: 2.28, v: 860, chem: "NMC", layout: "AWD", motor: "PSM", motorMaker: "Ferrari (Eigenentwicklung)", ice: "3.0 V6 Biturbo mit E-Turbos, 662 kW", sysKw: 883, gearbox: "8-Gang-DKG" }] },
    { name: "Elettrica", type: "BEV", seg: "Sportwagen (viertürig)", since: 2026, status: "planned", arch: "800 V",
      notes: "Erster vollelektrischer Ferrari: vier selbst entwickelte PSM (je Rad eine), Batterie in Maranello montiert und in den Unterboden integriert, Zellen von SK On. Technikdaten laut Vorstellung im Oktober 2025; Marktstart 2026.",
      variants: [{ name: "Elettrica (Vorabangaben)", gross: 122, chem: "NMC", cellMaker: "SK On", range: 530, layout: "AWD", kw: 830, motor: "PSM", motorMaker: "Ferrari – vorn 2 × 105 kW (30.000/min), hinten 2 × 310 kW (25.500/min)", rpm: 30000, dc: 350 }] }
  ]
});

EVDB.brand({
  id: "mclaren", name: "McLaren", country: "Großbritannien", group: "McLaren Group",
  warranty: { vehicle: "5 Jahre (Artura)", hv: "6 Jahre / 75.000 km (Artura)" },
  models: [
    { name: "Artura / Artura Spider", type: "PHEV", seg: "Supersportwagen", platform: "MCLA (Carbon-Monocoque)", since: 2022, arch: "400 V",
      hybrid: "parallel (P2): Axialfluss-E-Maschine in der Getriebeglocke des 8-Gang-DKG; Rückwärtsgang rein elektrisch",
      variants: [{ name: "Artura", gross: 7.4, chem: "NMC", range: 33, layout: "RWD", kw: 70, nm: 225, motor: "PSM", motorMaker: "Axialflussmaschine", ice: "3.0 V6 Biturbo (120°), 445 kW", sysKw: 515, gearbox: "8-Gang-DKG", ac: 3.3 }] }
  ]
});

EVDB.brand({
  id: "aston-martin", name: "Aston Martin", country: "Großbritannien", group: "Aston Martin Lagonda",
  warranty: { vehicle: "3 Jahre ohne km-Begrenzung", hv: "k. A." },
  models: [
    { name: "Valhalla", type: "PHEV", seg: "Supersportwagen (limitiert)", since: 2025, arch: "400 V",
      hybrid: "Axle-Split + P2: zwei E-Maschinen an der Vorderachse, eine im 8-Gang-DKG",
      variants: [{ name: "Valhalla", gross: 6.1, chem: "NMC", range: 14, layout: "AWD", kw: 185, motor: "PSM", ice: "4.0 V8 Biturbo (Flat-Plane), 609 kW", sysKw: 793, gearbox: "8-Gang-DKG" }] }
  ]
});

EVDB.brand({
  id: "bugatti-rimac", name: "Bugatti / Rimac", country: "Frankreich / Kroatien", group: "Bugatti Rimac (Rimac Group / Porsche)",
  warranty: { vehicle: "k. A.", hv: "k. A." },
  models: [
    { name: "Bugatti Tourbillon", type: "PHEV", seg: "Hypersportwagen", since: 2026, arch: "800 V",
      hybrid: "Axle-Split + P2: zwei E-Maschinen vorn, eine hinten am 8-Gang-DKG; V16-Saugmotor",
      variants: [{ name: "Tourbillon", gross: 24.8, chem: "NMC", range: 60, layout: "AWD", kw: 588, motor: "PSM", motorMaker: "Rimac", rpm: 24000, ice: "8.3 V16 Sauger (Cosworth), 735 kW", sysKw: 1324, gearbox: "8-Gang-DKG" }] },
    { name: "Rimac Nevera / Nevera R", type: "BEV", seg: "Hypersportwagen", since: 2022, arch: "800 V", notes: "Vier einzeln geregelte PSM (eine je Rad), H-förmige Batterie als tragendes Element des Carbon-Monocoques.",
      d: { chem: "NMC", layout: "AWD", motor: "PSM", motorMaker: "Rimac", ac: 22, dc: 500 },
      variants: [{ name: "Nevera", gross: 120, v: 730, range: 490, kw: 1408, nm: 2360 }, { name: "Nevera R", gross: 108, range: 400, kw: 1571 }] }
  ]
});
})();
