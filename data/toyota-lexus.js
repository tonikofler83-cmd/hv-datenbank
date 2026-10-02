// Toyota Motor Corporation: Toyota, Lexus
(function () {
const THS = "leistungsverzweigt (Power-Split, e-CVT): Planetengetriebe verbindet Verbrenner, Generator (MG1) und Fahrmotor (MG2); kein Schaltgetriebe, keine Kupplung";
const THS_AWD = THS + "; AWD-i mit zusätzlicher E-Maschine an der Hinterachse (Axle-Split, keine Kardanwelle)";
const THS_NOTE = "Hybridsystem der 5. Generation: Batteriespannung wird vom Hochsetzsteller in der Leistungselektronik auf bis zu ca. 600–650 V Systemspannung angehoben.";
const ETNGA = "e-TNGA (400 V): eAxle von BluE Nexus (Aisin/Denso/Toyota) mit integriertem Inverter, wassergekühlte Batterie mit prismatischen Zellen (96s). Seit Überarbeitung 2025 SiC-Inverter und Batterie-Vorkonditionierung.";
const ED = { chem: "NMC", cellMaker: "Prime Planet Energy & Solutions (Toyota/Panasonic)", motor: "PSM", motorMaker: "BluE Nexus eAxle", ac: 11, dc: 150, t: 30 };
const etnga = [
  { name: "57,7 kWh FWD", gross: 57.7, range: 444, layout: "FWD", kw: 123, nm: 269 },
  { name: "73,1 kWh FWD", gross: 73.1, v: 355, range: 569, layout: "FWD", kw: 165, nm: 269 },
  { name: "73,1 kWh AWD", gross: 73.1, v: 355, range: 520, layout: "AWD", kw: 252, nm: 338 }
];

EVDB.brand({
  id: "toyota", name: "Toyota", country: "Japan", group: "Toyota Motor Corporation",
  warranty: {
    vehicle: "3 Jahre / 100.000 km; Toyota Relax bei Wartung im Netz bis 10 Jahre / 160.000 km (DE: bis 15 Jahre / 250.000 km)",
    hv: "BEV: 8 Jahre / 160.000 km, mit jährlichem Batterie-Check bis 10 Jahre / 1.000.000 km (70 %); Hybridbatterie: 5 Jahre / 100.000 km, mit Hybrid-Check bis 10 bzw. 15 Jahre",
    drive: "Hybridkomponenten 5 Jahre / 100.000 km", rust: "12 Jahre"
  },
  models: [
    { name: "Urban Cruiser", type: "BEV", seg: "Kleinwagen-SUV", platform: "Heartect-e (Suzuki)", since: 2025, arch: "400 V", notes: "Technikbruder des Suzuki e Vitara, gebaut in Gujarat (Indien). Blade-Zellen von BYD.",
      d: { chem: "LFP", cellMaker: "FinDreams (BYD)", motor: "PSM", motorMaker: "BluE Nexus eAxle", ac: 11, dc: 67, t: 45 },
      variants: [
        { name: "49 kWh FWD", gross: 49, range: 344, layout: "FWD", kw: 106, nm: 189 },
        { name: "61 kWh FWD", gross: 61, range: 426, layout: "FWD", kw: 128, nm: 189 },
        { name: "61 kWh AWD", gross: 61, range: 395, layout: "AWD", kw: 135, nm: 300 }
      ] },
    { name: "C-HR+", type: "BEV", seg: "Kompakt-SUV-Coupé", platform: "e-TNGA", since: 2025, arch: "400 V", notes: ETNGA, d: ED,
      variants: [
        { name: "57,7 kWh FWD", gross: 57.7, range: 455, layout: "FWD", kw: 123, nm: 269 },
        { name: "77 kWh FWD", gross: 77, range: 600, layout: "FWD", kw: 165, nm: 269 },
        { name: "77 kWh AWD", gross: 77, range: 525, layout: "AWD", kw: 252 }
      ] },
    { name: "bZ4X (Überarbeitung 2025)", type: "BEV", seg: "Mittelklasse-SUV", platform: "e-TNGA", since: 2022, arch: "400 V", notes: ETNGA, d: ED, variants: etnga },
    { name: "bZ4X Touring", type: "BEV", seg: "Mittelklasse-SUV (lang)", platform: "e-TNGA", since: 2026, arch: "400 V", notes: ETNGA, d: ED,
      variants: [{ name: "74,7 kWh AWD", gross: 74.7, range: 528, layout: "AWD", kw: 280 }, { name: "74,7 kWh FWD", gross: 74.7, range: 560, layout: "FWD", kw: 165 }] },
    { name: "Proace City / Proace Verso Electric", type: "BEV", seg: "Hochdachkombi / Van", platform: "EMP2 (Stellantis)", since: 2021, arch: "400 V", notes: "Baugleich mit den Stellantis-Vans.",
      variants: [{ name: "Proace City Verso 100 kW (52 kWh)", net: 50, gross: 52, chem: "NMC", range: 340, layout: "FWD", kw: 100, nm: 270, motor: "PSM", ac: 11, dc: 100 }] },
    { name: "Mirai", type: "FCEV", seg: "Obere Mittelklasse", platform: "GA-L", since: 2021, arch: "ca. 650 V (Batterie 310,8 V)",
      hybrid: "Brennstoffzellen-Hybrid: PEM-Stack (330 Zellen) mit Hochsetzsteller, Pufferbatterie, Heckantrieb; drei 700-bar-Tanks (5,6 kg H₂)",
      variants: [{ name: "Mirai", gross: 1.24, v: 310.8, chem: "Li-Ion", range: 650, layout: "RWD", kw: 134, nm: 300, motor: "PSM", ice: "PEM-Brennstoffzelle, 128 kW", port: "H₂ 700 bar (SAE J2601)" }] },
    { name: "Aygo X Hybrid", type: "HEV", seg: "Kleinstwagen", platform: "GA-B", since: 2025, arch: "ca. 580 V (Batterie 177,6 V)", hybrid: THS, notes: THS_NOTE,
      variants: [{ name: "1.5 Hybrid", gross: 0.76, v: 177.6, chem: "Li-Ion", layout: "FWD", kw: 59, motor: "PSM", ice: "1.5 Dreizylinder (Atkinson), 67 kW", sysKw: 85, gearbox: "e-CVT (Planetengetriebe)" }] },
    { name: "Yaris / Yaris Cross Hybrid", type: "HEV", seg: "Kleinwagen / Kleinwagen-SUV", platform: "GA-B", since: 2020, arch: "ca. 580 V (Batterie 177,6 V)", hybrid: THS_AWD, notes: THS_NOTE,
      d: { gross: 0.76, v: 177.6, chem: "Li-Ion", motor: "PSM", ice: "1.5 Dreizylinder (Atkinson), 68 kW", gearbox: "e-CVT (Planetengetriebe)" },
      variants: [
        { name: "Hybrid 115", layout: "FWD", kw: 59, nm: 141, sysKw: 85 },
        { name: "Hybrid 130", layout: "FWD", kw: 62, nm: 185, sysKw: 96 },
        { name: "Yaris Cross Hybrid 130 AWD-i", layout: "AWD", kw: 62, nm: 185, sysKw: 96, motor: "PSM + ASM (hinten)" }
      ] },
    { name: "Corolla / Corolla Touring Sports / Corolla Cross Hybrid", type: "HEV", seg: "Kompaktklasse", platform: "GA-C", since: 2019, arch: "ca. 600 V (Batterie 207 V)", hybrid: THS_AWD, notes: THS_NOTE,
      d: { chem: "Li-Ion", layout: "FWD", motor: "PSM", gearbox: "e-CVT (Planetengetriebe)" },
      variants: [
        { name: "1.8 Hybrid 140", gross: 0.85, v: 207, kw: 70, nm: 185, ice: "1.8 Vierzylinder (Atkinson), 72 kW", sysKw: 103 },
        { name: "2.0 Hybrid 180/200", gross: 0.91, v: 222, kw: 83, nm: 206, ice: "2.0 Vierzylinder (Atkinson), 112 kW", sysKw: 144 }
      ] },
    { name: "C-HR Hybrid / Plug-in-Hybrid", type: "PHEV", seg: "Kompakt-SUV-Coupé", platform: "GA-C", since: 2023, arch: "ca. 600–650 V", hybrid: THS_AWD, notes: THS_NOTE + " Gebaut in Sakarya (Türkei), dort auch Batteriemontage.",
      d: { chem: "Li-Ion", layout: "FWD", motor: "PSM", gearbox: "e-CVT (Planetengetriebe)" },
      variants: [
        { name: "1.8 Hybrid 140", type: "HEV", gross: 0.85, kw: 70, ice: "1.8 Vierzylinder, 72 kW", sysKw: 103 },
        { name: "2.0 Hybrid 200", type: "HEV", gross: 0.91, kw: 83, ice: "2.0 Vierzylinder, 112 kW", sysKw: 145 },
        { name: "2.0 Plug-in-Hybrid 220", gross: 13.6, range: 66, kw: 120, nm: 208, ice: "2.0 Vierzylinder, 112 kW", sysKw: 164, ac: 6.6 }
      ] },
    { name: "Prius Plug-in-Hybrid", type: "PHEV", seg: "Kompaktklasse", platform: "GA-C", since: 2023, arch: "ca. 650 V", hybrid: THS, notes: THS_NOTE,
      variants: [{ name: "2.0 Plug-in-Hybrid 220", gross: 13.6, chem: "Li-Ion", range: 72, layout: "FWD", kw: 120, nm: 208, motor: "PSM", ice: "2.0 Vierzylinder, 112 kW", sysKw: 164, gearbox: "e-CVT (Planetengetriebe)", ac: 3.3 }] },
    { name: "RAV4 (6. Generation) Hybrid / Plug-in-Hybrid", type: "PHEV", seg: "Mittelklasse-SUV", platform: "GA-K", since: 2026, arch: "ca. 650 V", hybrid: THS_AWD,
      notes: "6. Generation Plug-in-System: größere Batterie, SiC-Halbleiter, erstmals DC-Schnellladen (CCS).",
      d: { chem: "Li-Ion", motor: "PSM", ice: "2.5 Vierzylinder (Atkinson)", gearbox: "e-CVT (Planetengetriebe)" },
      variants: [
        { name: "2.5 Hybrid AWD-i", type: "HEV", layout: "AWD", sysKw: 143 },
        { name: "2.5 Plug-in-Hybrid FWD", gross: 22.7, range: 100, layout: "FWD", sysKw: 200, ac: 11, dc: 50 },
        { name: "2.5 Plug-in-Hybrid AWD-i", gross: 22.7, range: 100, layout: "AWD", sysKw: 224, ac: 11, dc: 50 }
      ] },
    { name: "Camry / Highlander Hybrid", type: "HEV", seg: "Mittelklasse / SUV", platform: "GA-K", since: 2019, arch: "ca. 650 V", hybrid: THS_AWD,
      variants: [{ name: "2.5 Hybrid", layout: "FWD", motor: "PSM", ice: "2.5 Vierzylinder (Atkinson)", sysKw: 169, gearbox: "e-CVT (Planetengetriebe)" }] }
  ]
});

EVDB.brand({
  id: "lexus", name: "Lexus", country: "Japan", group: "Toyota Motor Corporation",
  warranty: {
    vehicle: "3 Jahre / 100.000 km; Lexus Relax bei Wartung im Netz bis 10 Jahre / 160.000 km (DE: bis 15 Jahre / 250.000 km)",
    hv: "BEV: 8 Jahre / 160.000 km, mit jährlichem Batterie-Check bis 10 Jahre / 1.000.000 km (70 %); Hybridbatterie: 5 Jahre / 100.000 km, verlängerbar",
    drive: "Hybridkomponenten 5 Jahre / 100.000 km"
  },
  models: [
    { name: "RZ (Überarbeitung 2025)", type: "BEV", seg: "Mittelklasse-SUV", platform: "e-TNGA", since: 2023, arch: "400 V", notes: ETNGA + " Optional Steer-by-Wire ohne mechanische Lenksäule.",
      d: Object.assign({}, ED, { gross: 77 }),
      variants: [
        { name: "RZ 350e", range: 568, layout: "FWD", kw: 165 },
        { name: "RZ 500e", range: 500, layout: "AWD", kw: 280 },
        { name: "RZ 550e F Sport", range: 450, layout: "AWD", kw: 300 }
      ] },
    { name: "UX 300e", type: "BEV", seg: "Kompakt-SUV", platform: "GA-C", since: 2020, arch: "400 V", notes: "Luftgekühlte Batterie; DC-Laden noch über CHAdeMO.",
      variants: [{ name: "UX 300e", net: 64, gross: 72.8, chem: "NMC", range: 450, layout: "FWD", kw: 150, nm: 300, motor: "PSM", ac: 11, dc: 50, port: "Typ 2 + CHAdeMO" }] },
    { name: "ES (8. Generation) 350e / 500e", type: "BEV", seg: "Obere Mittelklasse", platform: "TNGA-K", since: 2026, arch: "400 V", notes: "Neue ES-Generation als Hybrid und erstmals vollelektrisch.",
      d: { chem: "NMC", motor: "PSM", ac: 11, dc: 150 },
      variants: [{ name: "ES 350e", gross: 77, range: 530, layout: "FWD", kw: 165 }, { name: "ES 500e", gross: 75, range: 480, layout: "AWD", kw: 252 }] },
    { name: "LBX", type: "HEV", seg: "Kleinwagen-SUV", platform: "GA-B", since: 2024, arch: "ca. 580 V", hybrid: THS_AWD, notes: "Bipolare Nickel-Metallhydrid-Batterie (hohe Leistungsdichte).",
      variants: [{ name: "LBX", chem: "NiMH (bipolar)", layout: "FWD", kw: 69, nm: 185, motor: "PSM", ice: "1.5 Dreizylinder, 67 kW", sysKw: 100, gearbox: "e-CVT (Planetengetriebe)" }] },
    { name: "UX 300h", type: "HEV", seg: "Kompakt-SUV", platform: "GA-C", since: 2024, arch: "ca. 600 V", hybrid: THS_AWD,
      variants: [{ name: "UX 300h", chem: "Li-Ion", layout: "FWD", kw: 83, motor: "PSM", ice: "2.0 Vierzylinder, 112 kW", sysKw: 146, gearbox: "e-CVT (Planetengetriebe)" }] },
    { name: "NX 350h / NX 450h+", type: "PHEV", seg: "Mittelklasse-SUV", platform: "GA-K", since: 2021, arch: "ca. 650 V", hybrid: THS_AWD,
      d: { chem: "Li-Ion", layout: "AWD", motor: "PSM", ice: "2.5 Vierzylinder (Atkinson)", gearbox: "e-CVT (Planetengetriebe)" },
      variants: [{ name: "NX 350h", type: "HEV", sysKw: 179 }, { name: "NX 450h+", gross: 18.1, v: 355, range: 74, kw: 134, sysKw: 227, ac: 6.6 }] },
    { name: "RX 350h / RX 450h+ / RX 500h", type: "PHEV", seg: "Oberklasse-SUV", platform: "GA-K", since: 2022, arch: "ca. 650 V",
      hybrid: THS_AWD + ". RX 500h abweichend: Parallelhybrid mit 6-Gang-Automatik und eAxle hinten (DIRECT4)",
      d: { layout: "AWD", motor: "PSM" },
      variants: [
        { name: "RX 350h", type: "HEV", chem: "NiMH", ice: "2.5 Vierzylinder (Atkinson)", sysKw: 184, gearbox: "e-CVT (Planetengetriebe)" },
        { name: "RX 450h+", gross: 18.1, v: 355, chem: "Li-Ion", range: 67, kw: 134, ice: "2.5 Vierzylinder (Atkinson)", sysKw: 227, gearbox: "e-CVT (Planetengetriebe)", ac: 6.6 },
        { name: "RX 500h", type: "HEV", chem: "NiMH (bipolar)", kw: 76, ice: "2.4 Vierzylinder-Turbo", sysKw: 273, gearbox: "6-Gang-Automatik + eAxle hinten" }
      ] },
    { name: "LM 350h / LS 500h / LC 500h", type: "HEV", seg: "Luxusklasse", since: 2017, arch: "ca. 650 V", hybrid: THS + " (LS/LC: Multi-Stage-Hybrid mit nachgeschaltetem 4-Stufen-Getriebe)",
      variants: [{ name: "LM 350h", chem: "NiMH", layout: "AWD", motor: "PSM", ice: "2.5 Vierzylinder (Atkinson)", sysKw: 184, gearbox: "e-CVT (Planetengetriebe)" },
                 { name: "LS 500h / LC 500h", gross: 1.1, v: 310.8, chem: "Li-Ion", layout: "RWD", kw: 132, motor: "PSM", ice: "3.5 V6 (Atkinson), 220 kW", sysKw: 264, gearbox: "e-CVT + 4-Stufen-Automatik (Multi-Stage)" }] }
  ]
});
})();
