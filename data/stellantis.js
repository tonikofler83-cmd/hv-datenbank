// Stellantis: Peugeot, Citroën, DS, Opel, Fiat, Abarth, Alfa Romeo, Lancia, Jeep, Maserati, Leapmotor
(function () {
const W = { vehicle: "2 Jahre ohne km-Begrenzung (marktabhängig Anschlussprogramme bis 8 Jahre)", hv: "8 Jahre / 160.000 km (mind. 70 % Kapazität)", rust: "12 Jahre" };
const ECMP = "e-CMP (400 V): Frontmotor, flüssigkeitsgekühlte NMC-Batterie in H-Form unter Sitzen und Boden, PSM „M3“ von Emotors (Joint Venture Stellantis/Nidec, Werk Trémery).";
const SMALL = "Smart-Car-Plattform (400 V): kostengünstige LFP-Batterie, Frontantrieb.";
const MEDIUM = "STLA Medium (400 V): flache Batterie zwischen den Achsen, NMC-Zellen von ACC (Werk Billy-Berclau), Wärmepumpe serienmäßig, V2L möglich.";
const PHEV_NEW = "parallel (P2): E-Maschine im 7-Gang-Doppelkupplungsgetriebe e-DCS7";

// häufig wiederverwendete Antriebsvarianten
const ecmp = (name, range, extra) => Object.assign({ name, net: 51, gross: 54, chem: "NMC", cellMaker: "CATL", range, layout: "FWD", kw: 115, nm: 260, motor: "PSM", motorMaker: "Emotors M3", ac: 11, dc: 100, t: 27 }, extra);
const ecmp50 = (name, range) => ({ name, net: 46.3, gross: 50, chem: "NMC", cellMaker: "CATL", range, layout: "FWD", kw: 100, nm: 260, motor: "PSM", ac: 11, dc: 100 });
const ecmpHot = (name, range) => ecmp(name, range, { kw: 207, nm: 345, motorMaker: "Emotors M4+", ratio: "Torsen-Sperrdifferenzial" });
const smart = (name, range) => ({ name, net: 44, chem: "LFP", cellMaker: "SVOLT", range, layout: "FWD", kw: 83, nm: 120, motor: "PSM", ac: 7.4, dc: 100, t: 26 });
const med73 = (name, range) => ({ name, net: 73, chem: "NMC", cellMaker: "ACC", range, layout: "FWD", kw: 157, nm: 345, motor: "PSM", motorMaker: "Emotors", ac: 11, dc: 160, t: 30 });
const med97 = (name, range) => ({ name, net: 97, chem: "NMC", cellMaker: "ACC", range, layout: "FWD", kw: 170, nm: 345, motor: "PSM", motorMaker: "Emotors", ac: 11, dc: 160, t: 27 });
const medAwd = (name, range) => ({ name, net: 73, chem: "NMC", cellMaker: "ACC", range, layout: "AWD", kw: 239, nm: 509, motor: "PSM", ac: 11, dc: 160 });
const phev = (name, range, net) => ({ name, net: net || 17.9, chem: "NMC", range, layout: "FWD", kw: 92, motor: "PSM", ice: "1.6 Turbo-Benziner, 110 kW", sysKw: 143, gearbox: "7-Gang-DKG e-DCS7", ac: 7.4 });

EVDB.brand({ id: "peugeot", name: "Peugeot", country: "Frankreich", group: "Stellantis", warranty: W, models: [
  { name: "E-208 / E-208 GTi", type: "BEV", seg: "Kleinwagen", platform: "e-CMP", since: 2019, arch: "400 V", notes: ECMP + " E-208 GTi (ab September 2026) mit mechanischem Sperrdifferenzial. Nachfolger auf STLA Small angekündigt (Produktionsstart Ende 2026).", variants: [ecmp50("100 kW (50 kWh)", 362), ecmp("115 kW (54 kWh)", 410), ecmpHot("GTi 207 kW", 374)] },
  { name: "E-2008", type: "BEV", seg: "Kleinwagen-SUV", platform: "e-CMP", since: 2020, arch: "400 V", notes: ECMP, variants: [ecmp("115 kW (54 kWh)", 406)] },
  { name: "E-308 / E-308 SW", type: "BEV", seg: "Kompaktklasse", platform: "EMP2 V3", since: 2023, arch: "400 V", notes: "Seit dem Facelift (Modelljahr 2026) 58,3 statt 51 kWh nutzbar, Vehicle-to-Load.",
    variants: [{ name: "115 kW (58 kWh)", net: 58.3, chem: "NMC", range: 450, layout: "FWD", kw: 115, nm: 270, motor: "PSM", ac: 11, dc: 100 }] },
  { name: "E-408", type: "BEV", seg: "Mittelklasse-Fastback", platform: "EMP2 V3", since: 2024, arch: "400 V",
    variants: [{ name: "157 kW (58 kWh)", net: 58.2, chem: "NMC", range: 453, layout: "FWD", kw: 157, nm: 345, motor: "PSM", ac: 11, dc: 120 }] },
  { name: "E-3008 / E-5008", type: "BEV", seg: "Kompakt-SUV / 7-Sitzer", platform: "STLA Medium", since: 2024, arch: "400 V", notes: MEDIUM,
    variants: [med73("157 kW (73 kWh)", 527), med97("Long Range 170 kW (97 kWh)", 700), medAwd("Dual Motor 239 kW", 490)] },
  { name: "308 / 408 / 3008 / 5008 Plug-in-Hybrid", type: "PHEV", seg: "Kompaktklasse bis SUV", platform: "EMP2 / STLA Medium", since: 2024, arch: "400 V", hybrid: PHEV_NEW,
    variants: [phev("Plug-in-Hybrid 195", 85)] },
  { name: "E-Rifter / E-Traveller", type: "BEV", seg: "Hochdachkombi / Van", platform: "EMP2", since: 2021, arch: "400 V",
    variants: [{ name: "E-Rifter 100 kW (52 kWh)", net: 50, gross: 52, chem: "NMC", range: 339, layout: "FWD", kw: 100, nm: 270, motor: "PSM", ac: 11, dc: 100 },
               { name: "E-Traveller 100 kW (75 kWh)", net: 68, gross: 75, chem: "NMC", range: 350, layout: "FWD", kw: 100, nm: 260, motor: "PSM", ac: 11, dc: 100 }] }
] });

EVDB.brand({ id: "citroen", name: "Citroën", country: "Frankreich", group: "Stellantis", warranty: W, models: [
  { name: "ë-C3", type: "BEV", seg: "Kleinwagen", platform: "Smart Car", since: 2024, arch: "400 V", notes: SMALL,
    variants: [smart("83 kW (44 kWh)", 326), { name: "Urban Range (30 kWh)", net: 30, chem: "LFP", range: 212, layout: "FWD", kw: 83, motor: "PSM", ac: 7.4, dc: 30 }] },
  { name: "ë-C3 Aircross", type: "BEV", seg: "Kleinwagen-SUV", platform: "Smart Car", since: 2024, arch: "400 V", notes: SMALL,
    variants: [smart("Standard Range (44 kWh)", 303), { name: "Extended Range (54 kWh)", net: 54, chem: "LFP", range: 400, layout: "FWD", kw: 83, motor: "PSM", ac: 7.4, dc: 100 }] },
  { name: "ë-C4 / ë-C4 X", type: "BEV", seg: "Kompaktklasse", platform: "e-CMP", since: 2020, arch: "400 V", notes: ECMP, variants: [ecmp50("100 kW (50 kWh)", 355), ecmp("115 kW (54 kWh)", 415)] },
  { name: "ë-C5 Aircross", type: "BEV", seg: "Kompakt-SUV", platform: "STLA Medium", since: 2025, arch: "400 V", notes: MEDIUM, variants: [med73("157 kW (73 kWh)", 520), med97("Long Range 170 kW (97 kWh)", 680)] },
  { name: "C5 Aircross Plug-in-Hybrid", type: "PHEV", seg: "Kompakt-SUV", platform: "STLA Medium", since: 2025, arch: "400 V", hybrid: PHEV_NEW, variants: [phev("Plug-in-Hybrid 195", 86, 21)] },
  { name: "ë-Berlingo / ë-SpaceTourer", type: "BEV", seg: "Hochdachkombi / Van", platform: "EMP2", since: 2021, arch: "400 V",
    variants: [{ name: "ë-Berlingo 100 kW (52 kWh)", net: 50, gross: 52, chem: "NMC", range: 343, layout: "FWD", kw: 100, nm: 270, motor: "PSM", ac: 11, dc: 100 }] }
] });

EVDB.brand({ id: "ds", name: "DS Automobiles", country: "Frankreich", group: "Stellantis", warranty: W, models: [
  { name: "DS 3 E-Tense", type: "BEV", seg: "Kleinwagen-SUV", platform: "e-CMP", since: 2019, arch: "400 V", notes: ECMP, variants: [ecmp("115 kW (54 kWh)", 404)] },
  { name: "N°4 E-Tense", type: "BEV", seg: "Kompaktklasse", platform: "EMP2 V3", since: 2025, arch: "400 V",
    variants: [{ name: "E-Tense 156 kW", net: 58.3, chem: "NMC", range: 450, layout: "FWD", kw: 156, nm: 343, motor: "PSM", ac: 11, dc: 120 }] },
  { name: "N°4 Plug-in-Hybrid", type: "PHEV", seg: "Kompaktklasse", platform: "EMP2 V3", since: 2025, arch: "400 V", hybrid: PHEV_NEW,
    variants: [{ name: "Plug-in-Hybrid 225", net: 14.6, chem: "NMC", range: 81, layout: "FWD", kw: 92, motor: "PSM", ice: "1.6 Turbo-Benziner, 132 kW", sysKw: 165, gearbox: "7-Gang-DKG e-DCS7", ac: 7.4 }] },
  { name: "N°8", type: "BEV", seg: "Obere Mittelklasse (SUV-Coupé)", platform: "STLA Medium", since: 2025, arch: "400 V", notes: MEDIUM + " Gebaut in Melfi.",
    d: { chem: "NMC", cellMaker: "ACC", motor: "PSM", ac: 11, dc: 160 },
    variants: [
      { name: "FWD (73,7 kWh)", net: 73.7, range: 550, layout: "FWD", kw: 169, nm: 345 },
      { name: "FWD Long Range (97,2 kWh)", net: 97.2, range: 750, layout: "FWD", kw: 180, nm: 345 },
      { name: "AWD Long Range", net: 97.2, range: 688, layout: "AWD", kw: 257, nm: 511 }
    ] }
] });

EVDB.brand({ id: "opel", name: "Opel", country: "Deutschland", group: "Stellantis", warranty: W, models: [
  { name: "Corsa Electric / Corsa GSE", type: "BEV", seg: "Kleinwagen", platform: "e-CMP", since: 2019, arch: "400 V", notes: ECMP + " Corsa GSE seit September 2026 bestellbar.", variants: [ecmp50("100 kW (50 kWh)", 357), ecmp("115 kW (54 kWh)", 405), ecmpHot("GSE 207 kW", 374)] },
  { name: "Mokka Electric / Mokka GSE", type: "BEV", seg: "Kleinwagen-SUV", platform: "e-CMP", since: 2020, arch: "400 V", notes: ECMP, variants: [ecmp("115 kW (54 kWh)", 403), ecmpHot("GSE 207 kW", 336)] },
  { name: "Astra Electric / Sports Tourer Electric", type: "BEV", seg: "Kompaktklasse", platform: "EMP2 V3", since: 2023, arch: "400 V", notes: "Seit dem Facelift 2026 Batterie mit 58 statt 54 kWh, Vehicle-to-Load.",
    variants: [{ name: "115 kW (58 kWh)", chem: "NMC", range: 454, cons: 15.3, layout: "FWD", kw: 115, motor: "PSM", ac: 11, dc: 100, t: 32 }] },
  { name: "Frontera Electric", type: "BEV", seg: "Kleinwagen-SUV", platform: "Smart Car", since: 2024, arch: "400 V", notes: SMALL,
    variants: [smart("83 kW (44 kWh)", 305), { name: "Extended Range (54 kWh)", net: 54, chem: "LFP", range: 408, layout: "FWD", kw: 83, motor: "PSM", ac: 7.4, dc: 100 }] },
  { name: "Grandland Electric", type: "BEV", seg: "Kompakt-SUV", platform: "STLA Medium", since: 2024, arch: "400 V", notes: MEDIUM + " Gebaut in Eisenach.",
    variants: [med73("157 kW (73 kWh)", 523), med97("Long Range 170 kW (97 kWh)", 694), medAwd("AWD 239 kW", 501)] },
  { name: "Astra / Grandland Plug-in-Hybrid", type: "PHEV", seg: "Kompaktklasse / SUV", platform: "EMP2 / STLA Medium", since: 2024, arch: "400 V", hybrid: PHEV_NEW, variants: [phev("Plug-in-Hybrid 195", 87)] },
  { name: "Combo / Zafira / Vivaro Electric", type: "BEV", seg: "Hochdachkombi / Van", platform: "EMP2", since: 2021, arch: "400 V",
    variants: [{ name: "Combo Electric 100 kW (52 kWh)", net: 50, gross: 52, chem: "NMC", range: 345, layout: "FWD", kw: 100, nm: 270, motor: "PSM", ac: 11, dc: 100 }] }
] });

EVDB.brand({ id: "fiat", name: "Fiat", country: "Italien", group: "Stellantis", warranty: W, models: [
  { name: "500e", type: "BEV", seg: "Kleinstwagen", platform: "eigenständig (BEV-nativ)", since: 2020, arch: "400 V",
    notes: "Gebaut in Turin-Mirafiori; prismatische Zellen von Samsung SDI. Seit 2025 auch 500 Hybrid (12-V-Mildhybrid, hier nicht geführt).",
    d: { chem: "NMC", cellMaker: "Samsung SDI", layout: "FWD", motor: "PSM", ac: 11 },
    variants: [
      { name: "70 kW (23,8 kWh)", net: 21.3, gross: 23.8, range: 190, kw: 70, nm: 220, dc: 50 },
      { name: "87 kW (42 kWh)", net: 37.3, gross: 42, range: 320, kw: 87, nm: 220, dc: 85, t: 35 }
    ] },
  { name: "Grande Panda Elektro", type: "BEV", seg: "Kleinwagen", platform: "Smart Car", since: 2025, arch: "400 V", notes: SMALL + " Gebaut in Kragujevac (Serbien). Ausziehbares Spiral-Ladekabel (AC) in der Front.", variants: [smart("83 kW (44 kWh)", 320)] },
  { name: "600e", type: "BEV", seg: "Kleinwagen-SUV", platform: "e-CMP", since: 2023, arch: "400 V", notes: ECMP + " Gebaut in Tychy (Polen).", variants: [ecmp("115 kW (54 kWh)", 409)] },
  { name: "E-Doblò / E-Ulysse", type: "BEV", seg: "Hochdachkombi / Van", platform: "EMP2", since: 2022, arch: "400 V",
    variants: [{ name: "E-Doblò 100 kW (52 kWh)", net: 50, gross: 52, chem: "NMC", range: 340, layout: "FWD", kw: 100, nm: 270, motor: "PSM", ac: 11, dc: 100 }] }
] });

EVDB.brand({ id: "abarth", name: "Abarth", country: "Italien", group: "Stellantis", warranty: W, models: [
  { name: "500e", type: "BEV", seg: "Kleinstwagen (Sport)", since: 2023, arch: "400 V",
    variants: [{ name: "500e", net: 37.3, gross: 42, chem: "NMC", cellMaker: "Samsung SDI", range: 265, layout: "FWD", kw: 114, nm: 235, motor: "PSM", ac: 11, dc: 85 }] },
  { name: "600e", type: "BEV", seg: "Kleinwagen-SUV (Sport)", platform: "e-CMP (Perfo)", since: 2024, arch: "400 V", notes: ECMP + " Mechanisches Torsen-Sperrdifferenzial.",
    variants: [ecmp("Turismo 175 kW", 334, { kw: 175, nm: 345 }), ecmpHot("Scorpionissima 207 kW", 334)] }
] });

EVDB.brand({ id: "alfa-romeo", name: "Alfa Romeo", country: "Italien", group: "Stellantis", warranty: W, models: [
  { name: "Junior Elettrica", type: "BEV", seg: "Kleinwagen-SUV", platform: "e-CMP", since: 2024, arch: "400 V", notes: ECMP + " Gebaut in Tychy (Polen).",
    variants: [ecmp("Elettrica 115 kW", 410), ecmpHot("Veloce 207 kW", 334)] },
  { name: "Tonale Plug-in-Hybrid Q4", type: "PHEV", seg: "Kompakt-SUV", platform: "Small Wide 4x4 LWB", since: 2022, arch: "400 V",
    hybrid: "Axle-Split (P4): Benziner mit 6-Gang-Automatik und Riemenstartergenerator vorn, E-Maschine an der Hinterachse",
    variants: [{ name: "Plug-in-Hybrid Q4", net: 12, gross: 15.5, chem: "NMC", range: 65, layout: "AWD", kw: 90, nm: 250, motor: "PSM", ice: "1.3 MultiAir Turbo, 132 kW", sysKw: 206, gearbox: "6-Gang-Automatik (vorn)", ac: 7.4 }] },
  { name: "Stelvio (neue Generation)", type: "BEV", seg: "Mittelklasse-SUV", platform: "STLA Large", status: "planned", arch: "800 V", notes: "Nachfolger auf STLA Large (400/800 V), Marktstart mehrfach verschoben; zusätzlich Hybridvarianten angekündigt.", variants: [] }
] });

EVDB.brand({ id: "lancia", name: "Lancia", country: "Italien", group: "Stellantis", warranty: W, models: [
  { name: "Ypsilon Elettrica / Ypsilon HF", type: "BEV", seg: "Kleinwagen", platform: "e-CMP", since: 2024, arch: "400 V", notes: ECMP, variants: [ecmp("Elettrica 115 kW", 403), ecmpHot("HF 207 kW", 370)] },
  { name: "Gamma", type: "BEV", seg: "Mittelklasse-Fastback", platform: "STLA Medium", since: 2026, status: "planned", arch: "400 V", notes: "Am 16.09.2026 in Rom vorgestellt, Messepremiere auf dem Pariser Autosalon (Oktober 2026); Fertigung in Melfi, als BEV und Hybrid. Angekündigte Batterien: 73,7 kWh und 97,2 kWh (NMC, 400 V), Frontantrieb oder Allrad. Bestellstart noch offen, Deutschland-Start zunächst nicht vorgesehen.", variants: [] }
] });

EVDB.brand({ id: "jeep", name: "Jeep", country: "USA", group: "Stellantis", warranty: W, models: [
  { name: "Avenger Elektro", type: "BEV", seg: "Kleinwagen-SUV", platform: "e-CMP", since: 2023, arch: "400 V", notes: ECMP + " Gebaut in Tychy (Polen).", variants: [ecmp("115 kW (54 kWh)", 400)] },
  { name: "Compass (3. Generation)", type: "BEV", seg: "Kompakt-SUV", platform: "STLA Medium", since: 2025, arch: "400 V", notes: MEDIUM + " Gebaut in Melfi.",
    variants: [Object.assign(med73("157 kW (74 kWh)", 500), { net: 73.7 }), Object.assign(med97("Long Range 170 kW (96 kWh)", 674), { net: 96.3 }),
               { name: "4xe 276 kW (AWD)", net: 96.1, gross: 103, chem: "NMC", cellMaker: "ACC", range: 606, cons: 19.5, layout: "AWD", kw: 276, motor: "PSM", ac: 11, dc: 160 }] },
  { name: "Compass Plug-in-Hybrid", type: "PHEV", seg: "Kompakt-SUV", platform: "STLA Medium", since: 2025, arch: "400 V", hybrid: PHEV_NEW, variants: [phev("Plug-in-Hybrid 195", 85)] },
  { name: "Wrangler 4xe / Grand Cherokee 4xe", type: "PHEV", seg: "Geländewagen / SUV", since: 2021, arch: "400 V",
    hybrid: "parallel (P2 im 8-Gang-Automatikgetriebe) plus Riemenstartergenerator (P0); mechanischer Allrad mit Untersetzung",
    variants: [{ name: "4xe", gross: 17.3, chem: "NMC", cellMaker: "Samsung SDI", range: 45, layout: "AWD", kw: 107, nm: 245, motor: "PSM", ice: "2.0 Turbo-Benziner, 200 kW", sysKw: 280, gearbox: "8-Gang-Automatik (ZF 8P75PH)", ac: 7.4 }] },
  { name: "Wagoneer S", type: "BEV", seg: "Oberklasse-SUV", platform: "STLA Large", status: "planned", arch: "400 V", notes: "In Nordamerika seit 2024 im Verkauf; Europa-Start angekündigt, Termin offen.",
    variants: [{ name: "Launch Edition (US-Angaben)", gross: 100.5, chem: "NMC", layout: "AWD", kw: 441, nm: 836, motor: "PSM", dc: 203 }] }
] });

EVDB.brand({ id: "maserati", name: "Maserati", country: "Italien", group: "Stellantis",
  warranty: { vehicle: "3 Jahre ohne km-Begrenzung", hv: "8 Jahre / 160.000 km" }, models: [
  { name: "GranTurismo Folgore / GranCabrio Folgore", type: "BEV", seg: "Gran Turismo", platform: "Giorgio Sport", since: 2023, arch: "800 V",
    notes: "800-V-System mit drei 300-kW-PSM (eine vorn, zwei hinten mit echtem Torque Vectoring), SiC-Inverter aus der Formel-E-Entwicklung. T-förmige Batterie im Mitteltunnel und hinter den Sitzen (niedrige Sitzposition).",
    variants: [{ name: "Folgore", net: 83, gross: 92.5, chem: "NMC", cellMaker: "LG Energy Solution", pack: "T-Bone-Layout", range: 450, layout: "AWD", kw: 560, nm: 1350, motor: "PSM", ac: 22, dc: 270, t: 18 }] },
  { name: "Grecale Folgore", type: "BEV", seg: "Mittelklasse-SUV", platform: "Giorgio", since: 2023, arch: "400 V",
    variants: [{ name: "Folgore", gross: 105, chem: "NMC", cellMaker: "CATL", range: 500, layout: "AWD", kw: 410, nm: 820, motor: "PSM", ac: 22, dc: 150, t: 29 }] }
] });

EVDB.brand({ id: "leapmotor", name: "Leapmotor", country: "China", group: "Leapmotor International (Stellantis 51 %)",
  warranty: { vehicle: "4 Jahre / 100.000 km", hv: "8 Jahre / 160.000 km" },
  note: "Vertrieb in Europa über das Stellantis-Händlernetz seit Herbst 2024.", models: [
  { name: "T03", type: "BEV", seg: "Kleinstwagen", since: 2024, arch: "400 V",
    variants: [{ name: "T03", net: 37.3, range: 265, layout: "FWD", kw: 70, nm: 158, motor: "PSM", ac: 6.6, dc: 48, t: 36 }] },
  { name: "B10", type: "BEV", seg: "Kompakt-SUV", platform: "LEAP 3.5", since: 2025, arch: "400 V", notes: "Cell-to-Chassis-Batterie, zentrale Rechnerarchitektur.",
    d: { chem: "LFP", pack: "Cell-to-Chassis", layout: "RWD", kw: 160, nm: 240, motor: "PSM", ac: 11, dc: 168 },
    variants: [{ name: "Pro (56,2 kWh)", net: 56.2, range: 361 }, { name: "Pro Max (67,1 kWh)", net: 67.1, range: 434 }] },
  { name: "C10", type: "BEV", seg: "Mittelklasse-SUV", platform: "LEAP 3.0", since: 2024, arch: "400 V", notes: "Cell-to-Chassis-Batterie. Modelljahr 2026 mit 800-V-Allradversion.",
    variants: [
      { name: "RWD (69,9 kWh)", net: 69.9, chem: "LFP", pack: "Cell-to-Chassis", range: 420, layout: "RWD", kw: 160, nm: 320, motor: "PSM", ac: 11, dc: 84, t: 30 },
      { name: "AWD 800 V (81,9 kWh)", net: 81.9, chem: "LFP", range: 437, layout: "AWD", kw: 440, nm: 720, motor: "PSM", ac: 11, dc: 180 }
    ] },
  { name: "C10 REEV", type: "REEV", seg: "Mittelklasse-SUV", platform: "LEAP 3.0", since: 2025, arch: "400 V",
    hybrid: "seriell: 1,5-l-Benziner arbeitet ausschließlich als Generator, Antrieb rein elektrisch über die Hinterachse",
    variants: [{ name: "REEV", net: 28.4, chem: "LFP", range: 145, layout: "RWD", kw: 158, nm: 320, motor: "PSM", ice: "1.5 Vierzylinder-Sauger (Generator, ca. 50 kW elektrisch)", ac: 6.6, dc: 65 }] },
  { name: "B10 Hybrid EV", type: "REEV", seg: "Kompakt-SUV", platform: "LEAP 3.5", since: 2026, arch: "400 V",
    hybrid: "seriell: 1,5-l-Benziner arbeitet ausschließlich als Generator (50 kW), Antrieb rein elektrisch über die Hinterachse",
    notes: "Seit Ende April 2026 bestellbar. Batterie 18,8 kWh, Gesamtreichweite bis 900 km; DC-Laden 30–80 % in 30 min.",
    variants: [{ name: "Hybrid EV (18,8 kWh)", range: 86, layout: "RWD", kw: 160, nm: 240, ice: "1.5 Benziner (Generator, 50 kW)", ac: 6.6, dc: 46 }] },
  { name: "B05", type: "BEV", seg: "Kompaktklasse", platform: "LEAP 3.5", since: 2026, arch: "400 V", notes: "Kompakter Fünftürer (4,43 m), in Europa seit Ende April 2026 bestellbar.",
    d: { kw: 160, nm: 240 },
    variants: [{ name: "Pro (56,2 kWh)", net: 56.2, range: 401 }, { name: "ProMax (67,1 kWh)", net: 67.1, range: 482 }] },
  { name: "B03X", type: "BEV", seg: "Kleinwagen-SUV", since: 2026, arch: "400 V", notes: "Seit 01.07.2026 bestellbar. Batterie als tragendes Strukturteil („Cell-to-Chassis 2.0 Plus“). DC-Laden 30–80 % in 16 bzw. 17 min.",
    d: { chem: "LFP", pack: "Cell-to-Chassis", layout: "FWD", ac: 11 },
    variants: [{ name: "Life (39,8 kWh)", range: 292 }, { name: "Design (53,0 kWh)", range: 382, kw: 145, dc: 133 }] }
] });
})();
