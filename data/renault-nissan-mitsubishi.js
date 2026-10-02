// Renault Group (Renault, Dacia, Alpine) sowie Allianzpartner Nissan und Mitsubishi
(function () {
const ETECH = "seriell-parallel (Multi-Mode): Verbrenner + Haupt-E-Maschine + Hochvolt-Startergenerator an einem kupplungslosen Klauengetriebe (4 Verbrenner- und 2 E-Gänge); Anfahren immer elektrisch";
const AMPR_S = "AmpR Small (400 V): fremderregte Synchronmaschine ohne Seltene Erden (Werk Cléon), Batterie mit 4 großen Modulen, bidirektionaler AC-Lader (V2L, V2G) ab 11 kW.";
const AMPR_M = "AmpR Medium (ehem. CMF-EV, 400 V): sehr flache Batterie (110 mm), fremderregte Synchronmaschine, Wärmepumpe.";
const ET145 = { name: "E-Tech Full Hybrid 145", gross: 1.2, v: 230, chem: "NMC", layout: "FWD", kw: 36, motor: "PSM", ice: "1.6 Vierzylinder-Sauger, 69 kW", sysKw: 105, gearbox: "Multi-Mode-Klauengetriebe" };
const ET160 = { name: "E-Tech Full Hybrid 160", gross: 1.4, v: 230, chem: "NMC", layout: "FWD", kw: 36, motor: "PSM", ice: "1.8 Vierzylinder-Sauger (Direkteinspritzung), 80 kW", sysKw: 116, gearbox: "Multi-Mode-Klauengetriebe" };
const ET200 = { name: "E-Tech Full Hybrid 200", gross: 2, v: 400, chem: "NMC", layout: "FWD", kw: 50, nm: 205, motor: "PSM", ice: "1.2 Dreizylinder-Turbo, 96 kW", sysKw: 146, gearbox: "Multi-Mode-Klauengetriebe" };

EVDB.brand({
  id: "renault", name: "Renault", country: "Frankreich", group: "Renault Group",
  warranty: { vehicle: "2 Jahre ohne km-Begrenzung (marktabhängig bis 5 Jahre / 100.000 km)", hv: "8 Jahre / 160.000 km (mind. 70 % Kapazität)", rust: "12 Jahre" },
  models: [
    { name: "Renault 5 E-Tech", type: "BEV", seg: "Kleinwagen", platform: "AmpR Small", since: 2024, arch: "400 V", notes: AMPR_S + " Gebaut in Douai.",
      d: { chem: "NMC", cellMaker: "AESC (Douai) / LG Energy Solution", layout: "FWD", motor: "EESM", motorMaker: "Renault (Cléon)", ac: 11 },
      variants: [
        { name: "Urban Range 90 kW (40 kWh)", net: 40, range: 312, kw: 90, nm: 225, dc: 80 },
        { name: "Comfort Range 110 kW (52 kWh)", net: 52, range: 410, kw: 110, nm: 245, dc: 100, t: 30 }
      ] },
    { name: "Renault 4 E-Tech", type: "BEV", seg: "Kleinwagen-SUV", platform: "AmpR Small", since: 2025, arch: "400 V", notes: AMPR_S + " Gebaut in Maubeuge.",
      d: { chem: "NMC", cellMaker: "AESC / LG Energy Solution", layout: "FWD", motor: "EESM", motorMaker: "Renault (Cléon)", ac: 11 },
      variants: [{ name: "Urban Range 90 kW (40 kWh)", net: 40, range: 308, kw: 90, nm: 225, dc: 80 }, { name: "Comfort Range 110 kW (52 kWh)", net: 52, range: 409, kw: 110, nm: 245, dc: 100 }] },
    { name: "Twingo E-Tech", type: "BEV", seg: "Kleinstwagen", platform: "AmpR Small", since: 2026, arch: "400 V", notes: "In rund zwei Jahren mit chinesischem Entwicklungszentrum entwickelt, gebaut in Novo Mesto. Erste LFP-Batterie der Marke (Cell-to-Pack).",
      variants: [{ name: "60 kW (27,5 kWh)", net: 27.5, chem: "LFP", cellMaker: "CATL", pack: "Cell-to-Pack", range: 263, layout: "FWD", kw: 60, nm: 175, motor: "PSM", ac: 6.6, dc: 50 }] },
    { name: "Megane E-Tech", type: "BEV", seg: "Kompaktklasse", platform: "AmpR Medium", since: 2022, arch: "400 V", notes: AMPR_M,
      variants: [{ name: "EV60 160 kW", net: 60, v: 400, chem: "NMC", cellMaker: "LG Energy Solution", pack: "12 Module, 288 Zellen", range: 468, layout: "FWD", kw: 160, nm: 300, motor: "EESM", motorMaker: "Renault (Cléon)", ac: 22, dc: 130 }] },
    { name: "Scenic E-Tech", type: "BEV", seg: "Kompakt-SUV", platform: "AmpR Medium", since: 2024, arch: "400 V", notes: AMPR_M,
      d: { chem: "NMC", cellMaker: "LG Energy Solution", layout: "FWD", motor: "EESM", motorMaker: "Renault (Cléon)", ac: 22 },
      variants: [{ name: "Comfort Range 125 kW (60 kWh)", net: 60, range: 430, kw: 125, nm: 280, dc: 130 }, { name: "Long Range 160 kW (87 kWh)", net: 87, range: 625, kw: 160, nm: 300, dc: 150, t: 37 }] },
    { name: "Kangoo E-Tech", type: "BEV", seg: "Hochdachkombi", platform: "CMF-CD", since: 2022, arch: "400 V",
      variants: [{ name: "EV45 90 kW", net: 45, chem: "NMC", range: 285, layout: "FWD", kw: 90, nm: 245, motor: "EESM", ac: 22, dc: 80 }] },
    { name: "Renault 5 Turbo 3E", type: "BEV", seg: "Sportwagen (Kleinserie)", since: 2027, status: "planned", arch: "800 V", notes: "Auf 1.980 Stück limitiert: Carbon-Karosserie, zwei Radnabenmotoren an der Hinterachse, 800 V.",
      variants: [{ name: "Turbo 3E", net: 70, range: 400, layout: "RWD", kw: 400, motor: "PSM", motorMaker: "Radnabenmotoren", dc: 350 }] },
    { name: "Clio E-Tech Full Hybrid", type: "HEV", seg: "Kleinwagen", platform: "CMF-B", since: 2020, arch: "230 V", hybrid: ETECH, variants: [ET160] },
    { name: "Captur / Symbioz E-Tech Full Hybrid", type: "HEV", seg: "Kleinwagen-SUV", platform: "CMF-B", since: 2020, arch: "230 V", hybrid: ETECH, variants: [ET145, ET160] },
    { name: "Austral / Espace / Rafale E-Tech Full Hybrid", type: "HEV", seg: "Kompakt-SUV bis SUV-Coupé", platform: "CMF-CD", since: 2022, arch: "400 V", hybrid: ETECH, variants: [ET200] },
    { name: "Rafale E-Tech 4x4 300 (Plug-in)", type: "PHEV", seg: "SUV-Coupé", platform: "CMF-CD", since: 2024, arch: "400 V",
      hybrid: "seriell-parallel (Multi-Mode-Getriebe vorn) + zusätzliche E-Maschine an der Hinterachse (Axle-Split-Allrad)",
      variants: [{ name: "E-Tech 4x4 300", net: 22, chem: "NMC", range: 105, layout: "AWD", kw: 100, motor: "PSM", ice: "1.2 Dreizylinder-Turbo, 110 kW", sysKw: 221, gearbox: "Multi-Mode-Klauengetriebe", ac: 7.4 }] }
  ]
});

EVDB.brand({
  id: "dacia", name: "Dacia", country: "Rumänien", group: "Renault Group",
  warranty: { vehicle: "3 Jahre / 100.000 km (Dacia Zen bis 7 Jahre / 150.000 km bei Wartung im Netz)", hv: "8 Jahre / 120.000 km (Spring)", rust: "6 Jahre" },
  models: [
    { name: "Spring", type: "BEV", seg: "Kleinstwagen", platform: "CMF-A", since: 2021, arch: "400 V", notes: "Gebaut in China (Dongfeng). Modelljahr 2026 mit LFP-Batterie und stärkeren Motoren.",
      d: { layout: "FWD", motor: "PSM", ac: 7 },
      variants: [
        { name: "Electric 70 (2026)", net: 24.3, chem: "LFP", range: 225, kw: 52, dc: 40 },
        { name: "Electric 100 (2026)", net: 24.3, chem: "LFP", range: 225, kw: 75, dc: 40 },
        { name: "Electric 65 (bis 2025)", net: 26.8, chem: "NMC", range: 228, kw: 48, nm: 113, dc: 30 }
      ] },
    { name: "Duster / Bigster / Jogger Hybrid", type: "HEV", seg: "Kompakt-SUV / Van", platform: "CMF-B", since: 2023, arch: "230 V", hybrid: ETECH,
      variants: [Object.assign({}, ET145, { name: "Hybrid 140" }), Object.assign({}, ET160, { name: "Hybrid 155" })] }
  ]
});

EVDB.brand({
  id: "alpine", name: "Alpine", country: "Frankreich", group: "Renault Group",
  warranty: { vehicle: "2 Jahre (marktabhängig 3 Jahre / 100.000 km)", hv: "8 Jahre / 160.000 km (mind. 70 % Kapazität)" },
  models: [
    { name: "A290", type: "BEV", seg: "Kleinwagen (Sport)", platform: "AmpR Small", since: 2024, arch: "400 V", notes: AMPR_S,
      d: { net: 52, chem: "NMC", cellMaker: "AESC", layout: "FWD", motor: "EESM", motorMaker: "Renault (Cléon)", ac: 11, dc: 100 },
      variants: [{ name: "GT 130 kW", range: 380, kw: 130, nm: 285 }, { name: "GTS 160 kW", range: 364, kw: 160, nm: 300 }] },
    { name: "A390", type: "BEV", seg: "Sport-Fastback", platform: "AmpR Medium", since: 2025, arch: "400 V",
      notes: "Drei E-Maschinen: eine fremderregte Synchronmaschine vorn, zwei PSM hinten für aktives Torque Vectoring. Zellen von Verkor (Dünkirchen), Fertigung in Dieppe.",
      d: { net: 89, chem: "NMC", cellMaker: "Verkor", layout: "AWD", motor: "EESM + PSM", ac: 11 },
      variants: [{ name: "GT", range: 555, kw: 295, nm: 650, dc: 150 }, { name: "GTS", range: 520, kw: 345, nm: 808, dc: 190 }] }
  ]
});

EVDB.brand({
  id: "nissan", name: "Nissan", country: "Japan", group: "Renault-Nissan-Mitsubishi-Allianz",
  warranty: { vehicle: "3 Jahre / 100.000 km", hv: "8 Jahre / 160.000 km (Kapazitätsgarantie)", drive: "5 Jahre / 100.000 km auf EV-Komponenten" },
  models: [
    { name: "Micra (6. Generation)", type: "BEV", seg: "Kleinwagen", platform: "AmpR Small", since: 2025, arch: "400 V", notes: "Technikbruder des Renault 5, gebaut in Douai.",
      d: { chem: "NMC", cellMaker: "AESC", layout: "FWD", motor: "EESM", motorMaker: "Renault (Cléon)", ac: 11 },
      variants: [{ name: "90 kW (40 kWh)", net: 40, range: 317, kw: 90, nm: 225, dc: 80 }, { name: "110 kW (52 kWh)", net: 52, range: 416, kw: 110, nm: 245, dc: 100 }] },
    { name: "Leaf (3. Generation)", type: "BEV", seg: "Kompakt-Crossover", platform: "CMF-EV", since: 2026, arch: "400 V",
      notes: "3-in-1-Antrieb (Motor, Inverter, Getriebe), flüssigkeitsgekühlte Batterie, CCS statt CHAdeMO, V2L/V2G. Gebaut in Sunderland.",
      d: { chem: "NMC", cellMaker: "AESC", layout: "FWD", motor: "EESM", ac: 11 },
      variants: [{ name: "52 kWh", net: 52, range: 436, kw: 130, nm: 345, dc: 105 }, { name: "75 kWh", net: 75, range: 622, kw: 160, nm: 355, dc: 150, t: 30 }] },
    { name: "Ariya", type: "BEV", seg: "Mittelklasse-SUV", platform: "CMF-EV", since: 2022, arch: "400 V",
      d: { chem: "NMC", cellMaker: "CATL", motor: "EESM", ac: 22, dc: 130 },
      variants: [
        { name: "63 kWh", net: 63, gross: 66, range: 403, layout: "FWD", kw: 160, nm: 300 },
        { name: "87 kWh", net: 87, gross: 91, range: 533, layout: "FWD", kw: 178, nm: 300 },
        { name: "87 kWh e-4ORCE", net: 87, gross: 91, range: 515, layout: "AWD", kw: 225, nm: 600 },
        { name: "Nismo e-4ORCE", net: 87, gross: 91, range: 417, layout: "AWD", kw: 320, nm: 600 }
      ] },
    { name: "Juke (Elektro)", type: "BEV", seg: "Kleinwagen-SUV", platform: "CMF-EV", since: 2027, status: "planned", arch: "400 V", notes: "Elektrischer Nachfolger angekündigt, Fertigung in Sunderland.", variants: [] },
    { name: "Qashqai e-Power", type: "HEV", seg: "Kompakt-SUV", platform: "CMF-C", since: 2022, arch: "400 V",
      hybrid: "seriell: Verbrenner treibt nur den Generator, Antrieb ausschließlich über die E-Maschine (kein Stecker)",
      notes: "3. e-Power-Generation (2025): 5-in-1-Antriebseinheit, neuer 1,5-l-Dreizylinder-Turbo mit hohem thermischen Wirkungsgrad.",
      variants: [{ name: "e-Power (2025)", gross: 2.1, chem: "NMC", layout: "FWD", kw: 151, nm: 330, motor: "PSM", ice: "1.5 Dreizylinder-Turbo (Generatorbetrieb)" }] },
    { name: "X-Trail e-Power", type: "HEV", seg: "SUV", platform: "CMF-C", since: 2022, arch: "400 V",
      hybrid: "seriell: Verbrenner treibt nur den Generator; e-4ORCE mit zweiter E-Maschine an der Hinterachse",
      variants: [
        { name: "e-Power 2WD", gross: 2.1, chem: "NMC", layout: "FWD", kw: 150, nm: 330, motor: "PSM", ice: "1.5 VC-Turbo Dreizylinder (variable Verdichtung), Generatorbetrieb" },
        { name: "e-Power e-4ORCE", gross: 2.1, chem: "NMC", layout: "AWD", kw: 157, motor: "PSM", ice: "1.5 VC-Turbo Dreizylinder, Generatorbetrieb" }
      ] },
    { name: "Juke Hybrid", type: "HEV", seg: "Kleinwagen-SUV", platform: "CMF-B", since: 2022, arch: "230 V", hybrid: ETECH, variants: [Object.assign({}, ET145, { name: "Hybrid 143" })] }
  ]
});

EVDB.brand({
  id: "mitsubishi", name: "Mitsubishi", country: "Japan", group: "Renault-Nissan-Mitsubishi-Allianz",
  warranty: { vehicle: "5 Jahre / 100.000 km", hv: "8 Jahre / 160.000 km" },
  models: [
    { name: "Outlander Plug-in-Hybrid", type: "PHEV", seg: "SUV", platform: "CMF-CD", since: 2025, arch: "400 V",
      hybrid: "seriell-parallel mit Axle-Split-Allrad: zwei E-Maschinen (vorn/hinten), Verbrenner treibt meist den Generator und wird bei höherem Tempo direkt zugeschaltet (eine feste Übersetzung)",
      variants: [{ name: "Plug-in-Hybrid S-AWC", net: 22.7, chem: "NMC", range: 86, layout: "AWD", kw: 185, motor: "PSM", motorMaker: "vorn 85 kW, hinten 100 kW", ice: "2.4 Vierzylinder-Sauger, 100 kW", sysKw: 225, gearbox: "feste Übersetzung (kein Schaltgetriebe)", ac: 3.7, dc: 50, port: "Typ 2 + CHAdeMO" }] },
    { name: "Eclipse Cross (Elektro)", type: "BEV", seg: "Kompakt-SUV", platform: "AmpR Medium", since: 2025, arch: "400 V", notes: "Technikbruder des Renault Scenic E-Tech, gebaut in Douai.",
      variants: [{ name: "Long Range 160 kW (87 kWh)", net: 87, chem: "NMC", cellMaker: "LG Energy Solution", range: 600, layout: "FWD", kw: 160, nm: 300, motor: "EESM", ac: 22, dc: 150 }] },
    { name: "Colt / ASX / Grandis Hybrid", type: "HEV", seg: "Kleinwagen bis Kompakt-SUV", platform: "CMF-B", since: 2023, arch: "230 V", notes: "Baugleich mit Renault Clio / Captur / Symbioz.", hybrid: ETECH, variants: [ET145, ET160] }
  ]
});
})();
