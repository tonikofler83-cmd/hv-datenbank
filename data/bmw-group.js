// BMW Group: BMW, MINI, Rolls-Royce
(function () {
const HV = "8 Jahre / 160.000 km (mind. 70 % Kapazität)";
const GEN5 = "BMW eDrive Gen5: fremderregte Synchronmaschine (ohne Seltene Erden im Rotor), E-Maschine, Getriebe und Leistungselektronik in einem Gehäuse; 400-V-Architektur, prismatische NMC-Zellen in Modulbauweise.";
const G5 = { chem: "NMC", cellMaker: "CATL / Samsung SDI", motor: "EESM", motorMaker: "BMW (Werk Dingolfing)", rpm: 17000, ac: 11 };
const P2 = "parallel (P2): E-Maschine im 8-Gang-Steptronic-Getriebe (ZF 8HP) integriert";
const P2D = { chem: "NMC", motor: "PSM", gearbox: "8-Gang-Steptronic (ZF 8HP)", ac: 11 };

EVDB.brand({
  id: "bmw", name: "BMW", country: "Deutschland", group: "BMW Group",
  warranty: { vehicle: "2 Jahre Gewährleistung ohne km-Begrenzung (marktabhängig 3 Jahre)", hv: HV, rust: "12 Jahre" },
  models: [
    { name: "iX1 / iX2", type: "BEV", seg: "Kompakt-SUV", platform: "FAAR (UKL)", since: 2022, arch: "400 V", notes: GEN5,
      d: Object.assign({}, G5, { net: 64.7, gross: 66.5, dc: 130, t: 29 }),
      variants: [
        { name: "eDrive20", range: 475, layout: "FWD", kw: 150, nm: 250 },
        { name: "xDrive30", range: 440, layout: "AWD", kw: 230, nm: 494 }
      ] },
    { name: "i4", type: "BEV", seg: "Mittelklasse", platform: "CLAR", since: 2021, arch: "400 V", notes: GEN5, d: G5,
      variants: [
        { name: "eDrive35", net: 67.1, gross: 70.3, range: 500, layout: "RWD", kw: 210, nm: 400, dc: 180 },
        { name: "eDrive40", net: 81.3, gross: 83.9, v: 399, range: 600, layout: "RWD", kw: 250, kwCont: 105, nm: 430, ratio: "11,1 : 1", dc: 205, t: 31 },
        { name: "xDrive40", net: 81.3, gross: 83.9, v: 399, range: 548, layout: "AWD", kw: 295, nm: 600, dc: 205 },
        { name: "M60 xDrive", net: 81.3, gross: 83.9, v: 399, range: 551, layout: "AWD", kw: 442, nm: 795, dc: 205 }
      ] },
    { name: "i5 (Limousine / Touring)", type: "BEV", seg: "Obere Mittelklasse", platform: "CLAR", since: 2023, arch: "400 V", notes: GEN5,
      d: Object.assign({}, G5, { net: 81.2, gross: 84.3, dc: 205, t: 30 }),
      variants: [
        { name: "eDrive40", range: 582, layout: "RWD", kw: 250, nm: 430 },
        { name: "xDrive40", range: 538, layout: "AWD", kw: 290, nm: 590 },
        { name: "M60 xDrive", range: 516, layout: "AWD", kw: 442, nm: 820 }
      ] },
    { name: "i7", type: "BEV", seg: "Luxusklasse", platform: "CLAR", since: 2022, arch: "400 V", notes: GEN5,
      d: Object.assign({}, G5, { net: 101.7, gross: 105.7, dc: 195, t: 34 }),
      variants: [
        { name: "eDrive50", range: 611, layout: "RWD", kw: 335, nm: 650 },
        { name: "xDrive60", range: 625, layout: "AWD", kw: 400, nm: 745 },
        { name: "M70 xDrive", range: 560, layout: "AWD", kw: 485, nm: 1100 }
      ] },
    { name: "iX (Facelift 2025)", type: "BEV", seg: "Oberklasse-SUV", platform: "eigenständig (Aluminium-Spaceframe/CFK)", since: 2021, arch: "400 V", notes: GEN5,
      d: Object.assign({}, G5, { layout: "AWD" }),
      variants: [
        { name: "xDrive45", net: 94.8, gross: 100.1, range: 602, kw: 300, nm: 700, dc: 175 },
        { name: "xDrive60", net: 109.1, gross: 113.4, range: 701, kw: 400, nm: 765, dc: 195 },
        { name: "M70 xDrive", net: 108.9, gross: 113.2, range: 600, kw: 485, nm: 1100, dc: 195 }
      ] },
    { name: "iX3 (Neue Klasse)", type: "BEV", seg: "Mittelklasse-SUV", platform: "Neue Klasse (NA5)", since: 2025, arch: "800 V",
      notes: "eDrive Gen6: 800 V, Rundzellen (46 mm Durchmesser) als Cell-to-Pack, Batterie als Strukturbauteil („pack to open body“), EESM hinten + ASM vorn, SiC-Inverter, zentrale „Energy Master“-Steuereinheit auf der Batterie. Bidirektional (V2L, V2H, V2G). Werk Debrecen.",
      d: { chem: "NMC", cellMaker: "CATL / EVE Energy (Rundzelle 4695)", pack: "Cell-to-Pack, Rundzellen", motor: "EESM + ASM", motorMaker: "BMW (Werk Steyr)", ac: 11, dc: 400, t: 21 },
      variants: [{ name: "50 xDrive", net: 108.7, range: 805, layout: "AWD", kw: 345, nm: 645 }] },
    { name: "i3 (Neue Klasse Limousine)", type: "BEV", seg: "Mittelklasse", platform: "Neue Klasse (NA0)", since: 2026, arch: "800 V",
      notes: "Limousine auf Neue-Klasse-Basis mit Gen6-Technik (800 V, Rundzellen, Cell-to-Pack); Produktion im Werk München. Laut BMW Group seit 30.09.2026 bestellbar, Auslieferung ab Jahresende 2026; i3 50 xDrive lädt in 10 min bis zu 423 km nach.",
      d: { layout: "AWD", ac: 11 },
      variants: [{ name: "40 xDrive", range: 710, kw: 275 }, { name: "50 xDrive", net: 108.7, range: 912, kw: 345, dc: 400 }] },
    { name: "2er Active Tourer / X1 Plug-in-Hybrid", type: "PHEV", seg: "Kompaktklasse / Kompakt-SUV", platform: "FAAR (UKL)", since: 2022, arch: "400 V",
      hybrid: "Axle-Split (P4): Dreizylinder treibt die Vorderachse, E-Maschine die Hinterachse; kein mechanischer Durchtrieb",
      d: { net: 14.2, gross: 16.3, chem: "NMC", layout: "AWD", kw: 130, nm: 247, motor: "EESM", ice: "1.5 Dreizylinder-Turbo", gearbox: "7-Gang-DKG", ac: 7.4 },
      variants: [{ name: "225e / xDrive25e", range: 90, kw: 80, sysKw: 180 }, { name: "230e / xDrive30e", range: 88, sysKw: 240 }] },
    { name: "330e (Limousine / Touring)", type: "PHEV", seg: "Mittelklasse", platform: "CLAR", since: 2019, arch: "400 V", hybrid: P2, d: P2D,
      variants: [{ name: "330e", net: 19.5, gross: 22.3, range: 100, layout: "RWD", kw: 80, ice: "2.0 Vierzylinder-Turbo, 135 kW", sysKw: 215 }] },
    { name: "530e / 550e xDrive", type: "PHEV", seg: "Obere Mittelklasse", platform: "CLAR", since: 2023, arch: "400 V", hybrid: P2, d: P2D,
      variants: [
        { name: "530e", net: 19.4, gross: 22.1, range: 101, layout: "RWD", kw: 135, ice: "2.0 Vierzylinder-Turbo, 140 kW", sysKw: 220 },
        { name: "550e xDrive", net: 19.4, gross: 22.1, range: 90, layout: "AWD", kw: 145, ice: "3.0 Reihensechszylinder, 230 kW", sysKw: 360 }
      ] },
    { name: "X3 30e xDrive", type: "PHEV", seg: "Mittelklasse-SUV", platform: "CLAR", since: 2024, arch: "400 V", hybrid: P2, d: P2D,
      variants: [{ name: "30e xDrive", net: 19.7, gross: 22.3, range: 90, layout: "AWD", kw: 135, ice: "2.0 Vierzylinder-Turbo, 140 kW", sysKw: 220 }] },
    { name: "X5 xDrive50e", type: "PHEV", seg: "Oberklasse-SUV", platform: "CLAR", since: 2023, arch: "400 V", hybrid: P2, d: P2D,
      variants: [{ name: "xDrive50e", net: 25.7, gross: 29.5, range: 105, layout: "AWD", kw: 145, ice: "3.0 Reihensechszylinder, 230 kW", sysKw: 360 }] },
    { name: "750e / M760e xDrive", type: "PHEV", seg: "Luxusklasse", platform: "CLAR", since: 2022, arch: "400 V", hybrid: P2, d: P2D,
      variants: [{ name: "750e xDrive", net: 18.7, range: 87, layout: "AWD", kw: 145, ice: "3.0 Reihensechszylinder", sysKw: 360 },
                 { name: "M760e xDrive", net: 18.7, range: 84, layout: "AWD", kw: 145, ice: "3.0 Reihensechszylinder, 280 kW", sysKw: 420 }] },
    { name: "M5 (Limousine / Touring)", type: "PHEV", seg: "Sportlimousine", platform: "CLAR", since: 2024, arch: "400 V", hybrid: P2 + " mit Vorübersetzung (bis 450 Nm am Getriebeeingang)", d: P2D,
      variants: [{ name: "M5", net: 18.6, gross: 22.1, range: 69, layout: "AWD", kw: 145, nm: 280, ice: "4.4 V8 Biturbo, 430 kW", sysKw: 535 }] },
    { name: "XM", type: "PHEV", seg: "Luxus-SUV", platform: "CLAR", since: 2023, arch: "400 V", hybrid: P2, d: P2D,
      variants: [{ name: "XM Label", net: 25.7, gross: 29.5, range: 76, layout: "AWD", kw: 145, ice: "4.4 V8 Biturbo, 430 kW", sysKw: 550 }] }
  ]
});

EVDB.brand({
  id: "mini", name: "MINI", country: "Großbritannien", group: "BMW Group",
  warranty: { vehicle: "2 Jahre Gewährleistung ohne km-Begrenzung (marktabhängig 3 Jahre)", hv: HV, rust: "12 Jahre" },
  models: [
    { name: "Cooper E / SE (J01)", type: "BEV", seg: "Kleinwagen", platform: "Spotlight (JV mit Great Wall)", since: 2024, arch: "400 V",
      notes: "Entwickelt und gebaut im Joint Venture Spotlight Automotive (Zhangjiagang, China); Fertigung in Oxford angekündigt.",
      d: { chem: "NMC", cellMaker: "SVOLT", layout: "FWD", motor: "PSM", ac: 11 },
      variants: [
        { name: "Cooper E", net: 36.6, gross: 40.7, range: 305, kw: 135, nm: 290, dc: 75 },
        { name: "Cooper SE", net: 49.2, gross: 54.2, range: 402, kw: 160, nm: 330, dc: 95 },
        { name: "John Cooper Works Electric", net: 49.2, gross: 54.2, range: 371, kw: 190, nm: 350, dc: 95 }
      ] },
    { name: "Aceman", type: "BEV", seg: "Kleinwagen-Crossover", platform: "Spotlight (JV mit Great Wall)", since: 2024, arch: "400 V",
      d: { chem: "NMC", cellMaker: "SVOLT", layout: "FWD", motor: "PSM", ac: 11 },
      variants: [
        { name: "Aceman E", net: 38.5, gross: 42.5, range: 310, kw: 135, nm: 290, dc: 75 },
        { name: "Aceman SE", net: 49.2, gross: 54.2, range: 406, kw: 160, nm: 330, dc: 95 }
      ] },
    { name: "Countryman E / SE ALL4", type: "BEV", seg: "Kompakt-SUV", platform: "FAAR (UKL)", since: 2024, arch: "400 V", notes: GEN5 + " Gebaut in Leipzig.",
      d: Object.assign({}, G5, { net: 64.6, gross: 66.5, dc: 130, t: 29 }),
      variants: [{ name: "Countryman E", range: 462, layout: "FWD", kw: 150, nm: 250 }, { name: "Countryman SE ALL4", range: 432, layout: "AWD", kw: 230, nm: 494 }] }
  ]
});

EVDB.brand({
  id: "rolls-royce", name: "Rolls-Royce", country: "Großbritannien", group: "BMW Group",
  warranty: { vehicle: "4 Jahre ohne km-Begrenzung", hv: "k. A. (HV-Batterie voraussichtlich analog BMW)" },
  models: [
    { name: "Spectre", type: "BEV", seg: "Luxus-Coupé", platform: "Architecture of Luxury", since: 2023, arch: "400 V", notes: GEN5,
      d: { net: 102, chem: "NMC", layout: "AWD", motor: "EESM", motorMaker: "BMW", ac: 22, dc: 195, t: 34 },
      variants: [{ name: "Spectre", range: 530, kw: 430, nm: 900 }, { name: "Black Badge Spectre", range: 493, kw: 485, nm: 1075 }] }
  ]
});
})();
