// US-Hersteller: Tesla, Ford, Cadillac, Lucid
(function () {
const TESLA = "Eigenentwickelte Antriebseinheiten: Hinterachse PSM (IPM-SynRM, SiC-Inverter), Frontmotor bei Allrad als ASM. Batterie als Strukturbauteil im Unterboden, Oktoventil-Wärmepumpe. Europa-Fahrzeuge aus Grünheide (Model Y) bzw. Shanghai (Model 3).";

EVDB.brand({
  id: "tesla", name: "Tesla", country: "USA", group: "Tesla, Inc.",
  warranty: { vehicle: "4 Jahre / 80.000 km", hv: "Batterie und Antriebseinheit: 8 Jahre / 160.000 km (Hinterradantrieb) bzw. 192.000 km (Long Range / Performance), Model S/X 240.000 km; mind. 70 % Kapazität", rust: "12 Jahre" },
  models: [
    { name: "Model 3", type: "BEV", seg: "Mittelklasse", since: 2019, arch: "400 V", notes: TESLA,
      d: { motor: "PSM", motorMaker: "Tesla", ratio: "9 : 1", ac: 11 },
      variants: [
        { name: "Hinterradantrieb", net: 57.5, gross: 60, v: 340, chem: "LFP", cellMaker: "CATL", range: 513, layout: "RWD", kw: 208, nm: 350, dc: 170 },
        { name: "Long Range Hinterradantrieb", net: 75, gross: 79, v: 355, chem: "NMC", cellMaker: "LG Energy Solution", range: 702, layout: "RWD", kw: 235, dc: 250 },
        { name: "Long Range Allrad", net: 75, gross: 79, v: 355, chem: "NMC", cellMaker: "LG Energy Solution", range: 660, layout: "AWD", kw: 366, nm: 493, motor: "PSM + ASM", dc: 250, t: 27 },
        { name: "Performance", net: 75, gross: 79, v: 355, chem: "NMC", cellMaker: "LG Energy Solution", range: 528, layout: "AWD", kw: 338, nm: 723, motor: "PSM + ASM", dc: 250 }
      ] },
    { name: "Model Y (Überarbeitung 2025)", type: "BEV", seg: "Mittelklasse-SUV", since: 2021, arch: "400 V", notes: TESLA,
      d: { motor: "PSM", motorMaker: "Tesla", ratio: "9 : 1", ac: 11 },
      variants: [
        { name: "Hinterradantrieb", net: 60, v: 340, chem: "LFP", cellMaker: "CATL / BYD", range: 500, layout: "RWD", kw: 220, dc: 175 },
        { name: "Long Range Hinterradantrieb", net: 75, v: 355, chem: "NMC", cellMaker: "LG Energy Solution", range: 622, layout: "RWD", kw: 250, dc: 250 },
        { name: "Long Range Allrad", net: 75, v: 355, chem: "NMC", cellMaker: "LG Energy Solution", range: 586, layout: "AWD", kw: 378, motor: "PSM + ASM", dc: 250, t: 27 },
        { name: "Performance", net: 79, chem: "NMC", cellMaker: "LG Energy Solution", range: 580, layout: "AWD", kw: 343, motor: "PSM + ASM", dc: 250 }
      ] },
    { name: "Model S / Model X", type: "BEV", seg: "Oberklasse / Oberklasse-SUV", since: 2012, arch: "400 V",
      notes: "Rundzellen 18650 (NCA) von Panasonic, ca. 450 V Nennspannung. Plaid: drei PSM mit kohlefaserummantelten Rotoren. Neubestellungen in Europa zeitweise eingeschränkt.",
      d: { net: 95, gross: 100, v: 450, chem: "NCA", cellMaker: "Panasonic", layout: "AWD", motor: "PSM", motorMaker: "Tesla", ac: 11, dc: 250, t: 30 },
      variants: [
        { name: "Model S Allrad", range: 634, kw: 493 },
        { name: "Model S Plaid", range: 600, kw: 750, nm: 1420, rpm: 20000 },
        { name: "Model X Plaid", range: 543, kw: 750, rpm: 20000 }
      ] }
  ]
});

const MEBF = "Basis ist der Modulare E-Antriebs-Baukasten (MEB) von Volkswagen; gebaut in Köln.";
EVDB.brand({
  id: "ford", name: "Ford", country: "USA", group: "Ford Motor Company",
  warranty: { vehicle: "2 Jahre ohne km-Begrenzung (Ford Protect bis 7 Jahre optional)", hv: "8 Jahre / 160.000 km auf HV-Komponenten (Batterie mind. 70 %)", rust: "12 Jahre" },
  models: [
    { name: "Puma Gen-E", type: "BEV", seg: "Kleinwagen-SUV", platform: "Global B (BEV-Umbau)", since: 2025, arch: "400 V", notes: "Antriebseinheit aus Halewood (UK), gebaut in Craiova (Rumänien).",
      variants: [{ name: "Gen-E", net: 43, chem: "NMC", cellMaker: "SK On", range: 376, layout: "FWD", kw: 124, nm: 290, motor: "PSM", motorMaker: "Ford (Halewood)", ac: 11, dc: 100, t: 23 }] },
    { name: "Explorer (Elektro) / Capri", type: "BEV", seg: "Kompakt-SUV / SUV-Coupé", platform: "MEB (Volkswagen)", since: 2024, arch: "400 V", notes: MEBF,
      d: { chem: "NMC", motor: "PSM", ac: 11 },
      variants: [
        { name: "Standard Range RWD (52 kWh)", net: 52, range: 384, layout: "RWD", kw: 125, nm: 310, dc: 145 },
        { name: "Extended Range RWD (77 kWh)", net: 77, v: 352, range: 602, layout: "RWD", kw: 210, kwCont: 89, nm: 545, motorMaker: "VW Kassel, APP550", dc: 135, t: 28 },
        { name: "Extended Range AWD (79 kWh)", net: 79, range: 566, layout: "AWD", kw: 250, nm: 545, motor: "PSM + ASM", dc: 185, t: 26 }
      ] },
    { name: "Mustang Mach-E", type: "BEV", seg: "Mittelklasse-SUV", platform: "GE1", since: 2021, arch: "400 V", notes: "Gebaut in Cuautitlán (Mexiko). Standard-Range seit 2023 mit LFP.",
      d: { motor: "PSM", ac: 11 },
      variants: [
        { name: "Standard Range RWD", net: 73, chem: "LFP", cellMaker: "CATL", range: 470, layout: "RWD", kw: 198, nm: 430, dc: 115 },
        { name: "Extended Range RWD", net: 88, chem: "NMC", cellMaker: "LG Energy Solution", range: 600, layout: "RWD", kw: 216, nm: 430, dc: 150 },
        { name: "GT (AWD)", net: 88, chem: "NMC", cellMaker: "LG Energy Solution", range: 515, layout: "AWD", kw: 358, nm: 950, dc: 150 }
      ] },
    { name: "E-Tourneo Courier / E-Tourneo Custom", type: "BEV", seg: "Hochdachkombi / Van", since: 2024, arch: "400 V",
      variants: [
        { name: "E-Tourneo Courier", net: 43, chem: "NMC", range: 288, layout: "FWD", kw: 100, nm: 290, motor: "PSM", ac: 11, dc: 100 },
        { name: "E-Tourneo Custom 160 kW", net: 64, chem: "NMC", range: 325, layout: "RWD", kw: 160, nm: 415, motor: "PSM", ac: 11, dc: 125 }
      ] },
    { name: "Kuga Hybrid / Plug-in-Hybrid", type: "PHEV", seg: "Kompakt-SUV", platform: "C2", since: 2020, arch: "400 V",
      hybrid: "leistungsverzweigt (Power-Split, e-CVT mit Planetengetriebe, Ford HF45)",
      d: { chem: "NMC", motor: "PSM", ice: "2.5 Vierzylinder (Atkinson)", gearbox: "e-CVT (Planetengetriebe)" },
      variants: [
        { name: "2.5 FHEV", type: "HEV", gross: 1.1, layout: "FWD", sysKw: 132 },
        { name: "2.5 PHEV", gross: 14.4, range: 69, layout: "FWD", sysKw: 179, ac: 3.6 }
      ] },
    { name: "Ranger Plug-in-Hybrid", type: "PHEV", seg: "Pick-up", platform: "T6", since: 2025, arch: "400 V", hybrid: "parallel (P2): E-Maschine im 10-Gang-Automatikgetriebe, mechanischer Allrad mit Untersetzung",
      notes: "Pro Power Onboard: bis 6,9 kW Wechselstrom an Bordsteckdosen (V2L).",
      variants: [{ name: "2.3 EcoBoost PHEV", net: 11.8, chem: "NMC", range: 43, layout: "AWD", kw: 75, motor: "PSM", ice: "2.3 Vierzylinder-Turbo", sysKw: 207, gearbox: "10-Gang-Automatik (Modular Hybrid)", ac: 3.5 }] }
  ]
});

EVDB.brand({
  id: "cadillac", name: "Cadillac", country: "USA", group: "General Motors",
  warranty: { vehicle: "k. A. (marktabhängig)", hv: "8 Jahre / 160.000 km" },
  note: "Direktvertrieb in ausgewählten Märkten (u. a. Schweiz, Deutschland, Frankreich, Schweden).",
  models: [
    { name: "Lyriq", type: "BEV", seg: "Oberklasse-SUV", platform: "BEV3 (Ultium)", since: 2023, arch: "400 V", notes: "Ultium-Batterie mit großformatigen Pouchzellen (NCMA) und drahtlosem Batteriemanagement.",
      d: { net: 102, chem: "NCMA", cellMaker: "Ultium Cells (GM / LG Energy Solution)", layout: "AWD", motor: "PSM", ac: 11, dc: 190 },
      variants: [{ name: "Lyriq AWD", range: 530, kw: 388, nm: 610 }, { name: "Lyriq-V", range: 460, kw: 458, nm: 880 }] },
    { name: "Optiq", type: "BEV", seg: "Mittelklasse-SUV", platform: "BEV3 (Ultium)", since: 2025, arch: "400 V",
      variants: [{ name: "Optiq AWD", net: 85, chem: "NCMA", range: 425, layout: "AWD", kw: 224, nm: 480, motor: "PSM", ac: 11, dc: 150 }] },
    { name: "Vistiq", type: "BEV", seg: "Oberklasse-SUV (3 Sitzreihen)", platform: "BEV3 (Ultium)", since: 2025, arch: "400 V",
      variants: [{ name: "Vistiq AWD", net: 102, chem: "NCMA", range: 460, layout: "AWD", kw: 459, nm: 880, motor: "PSM", ac: 11, dc: 190 }] }
  ]
});

EVDB.brand({
  id: "lucid", name: "Lucid", country: "USA", group: "Lucid Group (Mehrheitseigner PIF, Saudi-Arabien)",
  warranty: { vehicle: "4 Jahre / 80.000 km", hv: "8 Jahre / 160.000 km (mind. 70 % Kapazität)" },
  models: [
    { name: "Air", type: "BEV", seg: "Luxuslimousine", platform: "LEAP", since: 2022, arch: "900 V",
      notes: "Systemspannung über 900 V (Grand Touring, 22 Module); kleinere Batterien mit entsprechend weniger Modulen und niedrigerer Spannung. Extrem kompakte Antriebseinheit (ca. 74 kg) mit bis zu 20.000/min, „Wunderbox“ als Boost-Lader für 400-/500-V-Säulen, bidirektional vorbereitet.",
      d: { chem: "NMC", cellMaker: "Samsung SDI / LG Energy Solution / Panasonic (Rundzelle 2170)", motor: "PSM", motorMaker: "Lucid", rpm: 20000, ac: 22 },
      variants: [
        { name: "Pure (RWD)", net: 84, range: 747, layout: "RWD", kw: 325, nm: 550, dc: 210 },
        { name: "Touring", net: 92, range: 725, layout: "AWD", kw: 462, nm: 1200, dc: 250 },
        { name: "Grand Touring", net: 117, v: 924, range: 960, layout: "AWD", kw: 611, nm: 1200, dc: 300 },
        { name: "Sapphire (3 Motoren)", net: 118, v: 924, range: 687, layout: "AWD", kw: 920, nm: 1940, dc: 300 }
      ] },
    { name: "Gravity", type: "BEV", seg: "Luxus-SUV (bis 7 Sitze)", platform: "LEAP", since: 2026, arch: "900 V", notes: "Europa-Auslieferungen 2026 gestartet bzw. angekündigt.",
      variants: [{ name: "Grand Touring", net: 123, v: 926, chem: "NMC", cellMaker: "Panasonic (Rundzelle 2170)", range: 748, layout: "AWD", kw: 618, nm: 1232, motor: "PSM", motorMaker: "Lucid", ac: 22, dc: 400 }] }
  ]
});
})();
