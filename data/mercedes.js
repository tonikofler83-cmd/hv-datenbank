// Mercedes-Benz (inkl. Mercedes-AMG, Mercedes-Maybach)
(function () {
const P2 = "parallel (P2): E-Maschine im 9G-TRONIC-Getriebekopf";
const EVA = "EVA2-Plattform: 400-V-Architektur, PSM an der Hinterachse (6-phasig), bei 4MATIC zusätzliche PSM vorn mit Abkoppeleinheit. Batteriemodule mit NMC-811-Zellen, Batteriefertigung in Hedelfingen.";

EVDB.brand({
  id: "mercedes-benz", name: "Mercedes-Benz", country: "Deutschland", group: "Mercedes-Benz Group",
  warranty: {
    vehicle: "2 Jahre ohne km-Begrenzung (marktabhängig länger)",
    hv: "BEV: 8 Jahre / 160.000 km (EQS/EQE: 10 Jahre / 250.000 km), 70 % Kapazität; Plug-in-Hybride: 6 Jahre / 100.000 km",
    rust: "30 Jahre (bei Wartung im Servicenetz)"
  },
  models: [
    { name: "CLA mit EQ Technologie (Coupé / Shooting Brake)", type: "BEV", seg: "Kompaktklasse", platform: "MMA", since: 2025, arch: "800 V",
      notes: "MMA: 800 V, Antriebseinheit eATS 2.0 mit SiC-Inverter und 2-Gang-Getriebe an der Hinterachse, 4MATIC mit abkoppelbarer PSM vorn. NMC-Zellen mit Siliziumoxid-Anode. Zum Marktstart kein DC-Laden an reinen 400-V-Säulen (DC-Wandler später/optional). Bidirektional vorbereitet.",
      d: { chem: "NMC (Anode mit Siliziumoxid)", motor: "PSM", motorMaker: "Mercedes-Benz eATS 2.0", ratio: "2-Gang: 11 : 1 / 5 : 1", ac: 11, t: 22 },
      variants: [
        { name: "CLA 200", net: 58, chem: "LFP", range: 541, cons: 12.3, layout: "RWD", kw: 165, nm: 335, dc: 200, t: 20 },
        { name: "CLA 250", net: 71, range: 674, layout: "RWD", kw: 200, nm: 335, dc: 250, t: 20 },
        { name: "CLA 250+", net: 85, range: 792, layout: "RWD", kw: 200, nm: 335, dc: 320 },
        { name: "CLA 350 4MATIC", net: 85, range: 771, layout: "AWD", kw: 260, nm: 515, dc: 320 }
      ] },
    { name: "GLB mit EQ Technologie", type: "BEV", seg: "Kompakt-SUV (bis 7 Sitze)", platform: "MMA", since: 2026, arch: "800 V",
      notes: "Zweites MMA-Modell, Antrieb und Batterie wie CLA.",
      d: { net: 85, chem: "NMC", motor: "PSM", motorMaker: "Mercedes-Benz eATS 2.0", ac: 11, dc: 320 },
      variants: [{ name: "GLB 250+", range: 631, layout: "RWD", kw: 200, nm: 335 }, { name: "GLB 350 4MATIC", range: 614, layout: "AWD", kw: 260, nm: 515 }] },
    { name: "C-Klasse mit EQ Technologie", type: "BEV", seg: "Mittelklasse", platform: "MB.EA-M", since: 2026, arch: "800 V",
      notes: "Elektrische C-Klasse auf eigener Elektroarchitektur (800 V, MB.OS), Rekuperation bis 300 kW, lädt in 10 min bis zu 325 km nach. C 400 4MATIC seit Mai 2026 bestellbar; weitere Varianten (u. a. C 300 4MATIC) folgen.",
      d: { chem: "NMC", motor: "PSM", ac: 11 },
      variants: [{ name: "C 400 4MATIC", net: 94, gross: 100, range: 762, cons: 14.1, layout: "AWD", kw: 360, dc: 330 }] },
    { name: "GLC mit EQ Technologie", type: "BEV", seg: "Mittelklasse-SUV", platform: "MB.EA-M", since: 2025, arch: "800 V",
      notes: "Neue Elektroplattform MB.EA: 800 V, 2-Gang-Getriebe hinten, One-Box-Bremssystem, bidirektionales Laden vorbereitet. GLC 250 und GLC 300 4MATIC seit 09.06.2026 bestellbar; für Ende 2026 angekündigt: GLC 300+ (94 kWh, 270 kW, Heckantrieb) und ein Basismodell (64 kWh, 230 kW).",
      d: { chem: "NMC", motor: "PSM", ac: 11 },
      variants: [
        { name: "GLC 250", net: 85, layout: "RWD", kw: 260, dc: 320, t: 22 },
        { name: "GLC 300 4MATIC", net: 85, range: 613, layout: "AWD", kw: 310, dc: 320, t: 22 },
        { name: "GLC 400 4MATIC", net: 94, range: 713, cons: 14.9, layout: "AWD", kw: 360, nm: 800, dc: 330 }
      ] },
    { name: "EQA / EQB", type: "BEV", seg: "Kompakt-SUV", platform: "MFA2 (Verbrenner-Plattform)", since: 2021, arch: "400 V",
      notes: "Frontmotor als ASM, 4MATIC mit zusätzlicher PSM an der Hinterachse. Auslauf zugunsten der MMA-Modelle.",
      d: { chem: "NMC", ac: 11, dc: 100, t: 32 },
      variants: [
        { name: "EQA 250+", net: 70.5, v: 420, range: 560, layout: "FWD", kw: 140, nm: 385, motor: "ASM" },
        { name: "EQA 300 4MATIC", net: 66.5, v: 367, range: 459, layout: "AWD", kw: 168, nm: 390, motor: "ASM + PSM" },
        { name: "EQB 350 4MATIC", net: 66.5, v: 367, range: 447, layout: "AWD", kw: 215, nm: 520, motor: "ASM + PSM" }
      ] },
    { name: "EQE (Limousine / SUV)", type: "BEV", seg: "Obere Mittelklasse", platform: "EVA2", since: 2022, arch: "400 V", notes: EVA,
      d: { chem: "NMC 811", cellMaker: "CATL", motor: "PSM", ac: 11, dc: 170, t: 32 },
      variants: [
        { name: "EQE 350+", net: 96, range: 690, layout: "RWD", kw: 215, nm: 565 },
        { name: "EQE 500 4MATIC", net: 96, range: 660, layout: "AWD", kw: 300, nm: 858 },
        { name: "AMG EQE 53 4MATIC+", net: 90.6, v: 328, range: 526, layout: "AWD", kw: 460, nm: 950 }
      ] },
    { name: "EQS Limousine (Modellpflege 2026)", type: "BEV", seg: "Luxusklasse", platform: "EVA2", since: 2021, arch: "800 V",
      notes: "Mit der Modellpflege 2026 (Produktion ab April 2026 in der Factory 56, Sindelfingen) Umstellung auf 800-V-Bordnetz, neue Batterie mit 122 kWh (EQS 400: 112 kWh), effizientere Antriebe mit 2-Gang-Getriebe an der Hinterachse, DC-Laden bis 350 kW (bis zu 320 km in 10 min). Optional Steer-by-Wire.",
      d: { net: 122, chem: "NMC", motor: "PSM", ac: 11, dc: 350 },
      variants: [
        { name: "EQS 400", net: 112, range: 810, layout: "RWD", kw: 270, nm: 505 },
        { name: "EQS 450+", range: 926, layout: "RWD", kw: 300 },
        { name: "EQS 500 4MATIC", range: 869, layout: "AWD", kw: 350 },
        { name: "EQS 580 4MATIC", layout: "AWD", kw: 430 }
      ] },
    { name: "EQS SUV", type: "BEV", seg: "Luxus-SUV", platform: "EVA2", since: 2022, arch: "400 V", notes: EVA + " Batterie 12 Module, ca. 396 V Nennspannung.",
      d: { net: 118, v: 396, chem: "NMC 811", cellMaker: "CATL", motor: "PSM", ac: 11, dc: 200, t: 31 },
      variants: [
        { name: "EQS SUV 450+", layout: "RWD", kw: 265, nm: 568 },
        { name: "EQS SUV 580 4MATIC", layout: "AWD", kw: 400, nm: 858 }
      ] },
    { name: "G 580 mit EQ Technologie", type: "BEV", seg: "Geländewagen", platform: "Leiterrahmen (W465)", since: 2024, arch: "400 V",
      notes: "Vier radnahe E-Maschinen (je 108 kW) mit jeweils eigenem 2-Gang-Getriebe (Geländeuntersetzung), Batterie im Leiterrahmen integriert, verwindungssteifes Gehäuse mit Unterfahrschutz aus Carbon-Verbund.",
      variants: [{ name: "G 580", net: 116, chem: "NMC", range: 473, layout: "AWD", kw: 432, nm: 1164, motor: "PSM", ratio: "je Rad schaltbare Geländeuntersetzung", ac: 11, dc: 200, t: 32 }] },
    { name: "EQV / V-Klasse elektrisch", type: "BEV", seg: "Van", since: 2020, arch: "400 V",
      variants: [{ name: "EQV 300", net: 90, chem: "NMC", range: 363, layout: "FWD", kw: 150, nm: 365, motor: "PSM", ac: 11, dc: 110 }] },
    { name: "VLE", type: "BEV", seg: "Großraumlimousine", platform: "VAN.EA", since: 2026, arch: "800 V",
      notes: "Erste Baureihe der Van-Elektroarchitektur VAN.EA (800 V). VLE 300 seit April 2026 bestellbar, VLE 400 4MATIC seit September 2026; 5 bis 8 Sitze, Anhängelast bis 2,5 t (4MATIC).",
      d: { net: 115, chem: "NMC", dc: 300, t: 25 },
      variants: [
        { name: "VLE 300", range: 678, layout: "FWD", kw: 203 },
        { name: "VLE 400 4MATIC", range: 654, layout: "AWD", kw: 310 }
      ] },
    { name: "EQT / eCitan", type: "BEV", seg: "Hochdachkombi", platform: "CMF-CD (Renault Kangoo)", since: 2023, arch: "400 V",
      variants: [{ name: "EQT 200", net: 45, chem: "NMC", range: 282, layout: "FWD", kw: 90, nm: 245, motor: "EESM", motorMaker: "Renault", ac: 22, dc: 80 }] },
    { name: "A 250 e / CLA 250 e / GLA 250 e", type: "PHEV", seg: "Kompaktklasse", platform: "MFA2", since: 2020, arch: "400 V",
      hybrid: "parallel (P2): E-Maschine im 8-Gang-Doppelkupplungsgetriebe",
      variants: [{ name: "250 e", gross: 15.6, chem: "NMC", range: 80, layout: "FWD", kw: 80, nm: 300, motor: "PSM", ice: "1.33 Vierzylinder-Turbo, 120 kW", sysKw: 160, gearbox: "8G-DCT", ac: 11 }] },
    { name: "C 300 e / C 300 de", type: "PHEV", seg: "Mittelklasse", platform: "MRA2", since: 2021, arch: "400 V", hybrid: P2,
      d: { net: 19.5, gross: 25.4, chem: "NMC", kw: 95, nm: 440, motor: "PSM", gearbox: "9G-TRONIC", ac: 11, dc: 55 },
      variants: [{ name: "C 300 e", range: 110, layout: "RWD", ice: "2.0 Vierzylinder-Turbo, 150 kW", sysKw: 230 },
                 { name: "C 300 de", range: 105, layout: "RWD", ice: "2.0 Diesel, 145 kW", sysKw: 230 }] },
    { name: "E 300 e / E 400 e / E 300 de", type: "PHEV", seg: "Obere Mittelklasse", platform: "MRA2", since: 2023, arch: "400 V", hybrid: P2,
      d: { net: 19.5, gross: 25.4, chem: "NMC", kw: 95, nm: 440, motor: "PSM", gearbox: "9G-TRONIC", ac: 11, dc: 55 },
      variants: [
        { name: "E 300 e", range: 115, layout: "RWD", ice: "2.0 Vierzylinder-Turbo, 150 kW", sysKw: 230 },
        { name: "E 400 e 4MATIC", range: 105, layout: "AWD", ice: "2.0 Vierzylinder-Turbo, 185 kW", sysKw: 280 },
        { name: "E 300 de", range: 108, layout: "RWD", ice: "2.0 Diesel, 145 kW", sysKw: 230 }
      ] },
    { name: "GLC 300 e / 400 e / 300 de 4MATIC", type: "PHEV", seg: "Mittelklasse-SUV", platform: "MRA2", since: 2022, arch: "400 V", hybrid: P2,
      d: { net: 24.8, gross: 31.2, chem: "NMC", layout: "AWD", kw: 100, nm: 440, motor: "PSM", gearbox: "9G-TRONIC", ac: 11, dc: 60 },
      variants: [{ name: "GLC 300 e", range: 130, ice: "2.0 Vierzylinder-Turbo, 150 kW", sysKw: 230 }, { name: "GLC 400 e", range: 128, ice: "2.0 Vierzylinder-Turbo, 185 kW", sysKw: 280 }] },
    { name: "GLE 350 de / 400 e 4MATIC", type: "PHEV", seg: "Oberklasse-SUV", platform: "MHA", since: 2019, arch: "400 V", hybrid: P2,
      d: { gross: 31.2, chem: "NMC", layout: "AWD", kw: 100, nm: 440, motor: "PSM", gearbox: "9G-TRONIC", ac: 11, dc: 60 },
      variants: [{ name: "GLE 400 e", range: 105, ice: "2.0 Vierzylinder-Turbo, 185 kW", sysKw: 280 }, { name: "GLE 350 de", range: 108, ice: "2.0 Diesel, 145 kW", sysKw: 245 }] },
    { name: "S 580 e", type: "PHEV", seg: "Luxusklasse", platform: "MRA2", since: 2021, arch: "400 V", hybrid: P2,
      variants: [{ name: "S 580 e", net: 22, gross: 28.6, chem: "NMC", range: 110, layout: "RWD", kw: 110, nm: 480, motor: "PSM", ice: "3.0 Reihensechszylinder, 270 kW", sysKw: 375, gearbox: "9G-TRONIC", ac: 11, dc: 60 }] },
    { name: "AMG E Performance (C 63 S, GT 63 S, S 63, SL 63 S)", type: "PHEV", seg: "Performance", since: 2022, arch: "400 V",
      hybrid: "P3-Hybrid: elektrische Antriebseinheit an der Hinterachse (E-Maschine + elektrisch geschaltetes 2-Gang-Getriebe + Sperrdifferenzial), Verbrenner über 9-Gang-MCT; Allrad über Kardanwelle auch elektrisch",
      notes: "AMG High Performance Battery mit direkt gekühlten Zellen (nicht leitendes Kühlmittel umströmt jede Zelle), auf Leistung statt Reichweite ausgelegt. C 63: zusätzlich elektrischer Abgasturbolader (400 V).",
      d: { chem: "NMC (direktgekühlt)", layout: "AWD", kw: 150, nm: 320, motor: "PSM", gearbox: "AMG Speedshift MCT 9G + 2-Gang hinten", ac: 3.7 },
      variants: [
        { name: "C 63 S E Performance", gross: 6.1, range: 13, ice: "2.0 Vierzylinder mit E-Turbolader, 350 kW", sysKw: 500 },
        { name: "GT 63 S E Performance", gross: 6.1, range: 13, ice: "4.0 V8 Biturbo, 450 kW", sysKw: 600 },
        { name: "S 63 E Performance", gross: 13.1, range: 33, kw: 140, ice: "4.0 V8 Biturbo, 450 kW", sysKw: 590 }
      ] }
  ]
});
})();
