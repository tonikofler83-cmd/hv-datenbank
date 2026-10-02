// Volkswagen-Konzern: Volkswagen, Audi, Škoda, Cupra/SEAT, Porsche, Bentley, Lamborghini
(function () {
const HV = "8 Jahre / 160.000 km (mind. 70 % Netto-Kapazität)";
const MEB = "MEB: Heckmotor (PSM, APP-Baureihe aus Kassel), bei Allrad zusätzliche ASM vorn. Batterie als Modulbauweise im Unterboden (8–13 Module, je nach Größe 96s oder 108s verschaltet). Wärmepumpe optional, bidirektionales Laden (DC, V2H) bei den großen Batterien.";
const PHEV_MQB = "parallel (P2): E-Maschine im 6-Gang-DSG DQ400e zwischen Trennkupplung und Getriebe";
const mqbPhev = (r1, r2) => [
  { name: "eHybrid 150 kW", net: 19.7, gross: 25.7, range: r1, kw: 85, nm: 330, ice: "1.5 TSI evo2, 110 kW", sysKw: 150 },
  { name: "eHybrid 200 kW", net: 19.7, gross: 25.7, range: r2, kw: 85, nm: 330, ice: "1.5 TSI evo2, 130 kW", sysKw: 200 }
];
const MQB_D = { chem: "NMC", layout: "FWD", motor: "PSM", gearbox: "6-Gang-DSG (DQ400e)", ac: 11, dc: 50 };
const MQB_NOTE = "2. Generation MQB-evo-PHEV: flüssigkeitsgekühlte Batterie vor der Hinterachse, DC-Laden serienmäßig oder optional (bis 50 kW).";

EVDB.brand({
  id: "volkswagen", name: "Volkswagen", country: "Deutschland", group: "Volkswagen AG",
  warranty: { vehicle: "2 Jahre ohne km-Begrenzung (Anschlussgarantie bis 5 Jahre optional)", hv: HV, rust: "12 Jahre" },
  models: [
    { name: "ID.3 Neo", type: "BEV", seg: "Kompaktklasse", platform: "MEB", since: 2020, arch: "400 V",
      notes: "Große Überarbeitung des ID.3 (bestellbar seit 16.04.2026): neuer Heckmotor APP350 (PSM, 350 Nm) statt APP310, Einstiegs- und mittlere Batterie jetzt mit LFP-Zellen (Cell-to-Pack), große Batterie weiter NMC in Modulbauweise. DC-Laden 10–80 % je nach Batterie in ca. 26–29 min. ID.3 GTI (ersetzt den GTX) am 16.09.2026 vorgestellt, Vorverkauf ab Anfang 2027.",
      d: { layout: "RWD", motor: "PSM", motorMaker: "VW Kassel, APP350", ac: 11 },
      variants: [
        { name: "50 kWh (125 kW)", net: 50, chem: "LFP", range: 417, kw: 125, nm: 350, dc: 105 },
        { name: "58 kWh (140 kW)", net: 58, chem: "LFP", range: 494, kw: 140, nm: 350, dc: 105 },
        { name: "79 kWh (170 kW)", net: 79, chem: "NMC", range: 630, kw: 170, nm: 350, dc: 183 },
        { name: "GTI (79 kWh, Vorverkauf ab Anfang 2027)", net: 79, chem: "NMC", range: 601, kw: 240, nm: 545, motorMaker: "VW Kassel, APP550", dc: 183, t: 29 }
      ] },
    { name: "ID. Tiguan", type: "BEV", seg: "Kompakt-SUV", platform: "MEB", since: 2027, status: "planned", arch: "400 V",
      notes: "Nachfolger von ID.4 und ID.5 (tiefgreifende Überarbeitung), Produktion in Emden, Marktstart Frühjahr 2027. Alle Werte Vorabangaben.",
      d: { motor: "PSM", ac: 11 },
      variants: [
        { name: "Pure (58 kWh, Vorabangabe)", net: 58, chem: "LFP", range: 450, layout: "RWD", kw: 140, dc: 105 },
        { name: "Pro (77 kWh, Vorabangabe)", net: 77, chem: "NMC", range: 600, layout: "RWD", kw: 210, dc: 165, t: 29 },
        { name: "Pro 4Motion (77 kWh, Vorabangabe)", net: 77, chem: "NMC", range: 560, layout: "AWD", kw: 220, dc: 165, t: 29 }
      ] },
    { name: "ID.4 / ID.5", type: "BEV", seg: "Kompakt-SUV / SUV-Coupé", platform: "MEB", since: 2021, arch: "400 V", notes: MEB + " Auslaufmodell: wird im Frühjahr 2027 vom ID. Tiguan abgelöst.",
      d: { chem: "NMC", cellMaker: "LG Energy Solution / SK On", motor: "PSM", motorMaker: "VW Kassel, APP550", ac: 11 },
      variants: [
        { name: "Pure (52 kWh)", net: 52, gross: 55, range: 364, layout: "RWD", kw: 125, nm: 310, motorMaker: "VW Kassel, APP310", dc: 145 },
        { name: "Pro (77 kWh)", net: 77, gross: 82, v: 352, range: 550, layout: "RWD", kw: 210, kwCont: 89, nm: 545, dc: 175 },
        { name: "GTX 4Motion (79 kWh)", net: 79, gross: 84, range: 515, layout: "AWD", kw: 250, nm: 545, motor: "PSM + ASM", dc: 185 }
      ] },
    { name: "ID.7 / ID.7 Tourer", type: "BEV", seg: "Obere Mittelklasse", platform: "MEB", since: 2023, arch: "400 V", notes: MEB,
      d: { chem: "NMC", motor: "PSM", motorMaker: "VW Kassel, APP550", ac: 11 },
      variants: [
        { name: "Pro (77 kWh)", net: 77, gross: 82, v: 352, range: 621, layout: "RWD", kw: 210, kwCont: 89, nm: 545, dc: 175 },
        { name: "Pro S (86 kWh)", net: 86, gross: 91, pack: "13 Module", range: 709, layout: "RWD", kw: 210, kwCont: 89, nm: 545, dc: 200 },
        { name: "GTX 4Motion (86 kWh)", net: 86, gross: 91, range: 595, layout: "AWD", kw: 250, nm: 545, motor: "PSM + ASM", dc: 200 }
      ] },
    { name: "ID. Buzz", type: "BEV", seg: "Van / Bus", platform: "MEB", since: 2022, arch: "400 V", notes: MEB,
      d: { chem: "NMC", motor: "PSM", motorMaker: "VW Kassel, APP550", ac: 11 },
      variants: [
        { name: "Pro (79 kWh, Normalradstand)", net: 79, gross: 84, range: 461, layout: "RWD", kw: 210, nm: 560, dc: 185 },
        { name: "Pro (86 kWh, langer Radstand)", net: 86, gross: 91, range: 487, layout: "RWD", kw: 210, nm: 560, dc: 200 },
        { name: "GTX 4Motion", net: 86, gross: 91, range: 470, layout: "AWD", kw: 250, motor: "PSM + ASM", dc: 200 }
      ] },
    { name: "ID. Polo", type: "BEV", seg: "Kleinwagen", platform: "MEB+ (Frontantrieb)", since: 2026, arch: "400 V",
      notes: "Erste MEB+-Generation mit Frontantrieb, Cell-to-Pack-Batterie mit Konzern-Einheitszelle (PowerCo, prismatisch), neuer Frontmotor APP290 mit 1-Gang-Getriebe. Vehicle-to-Load serienmäßig bis 3,6 kW. Auslieferung seit September 2026.",
      d: { layout: "FWD", motor: "PSM", motorMaker: "VW, APP290", cellMaker: "PowerCo (Einheitszelle)", pack: "Cell-to-Pack", nm: 290, ac: 11 },
      variants: [
        { name: "37 kWh (85 kW)", net: 37, chem: "LFP", range: 329, kw: 85, dc: 90, t: 23 },
        { name: "37 kWh (99 kW)", net: 37, chem: "LFP", range: 329, kw: 99, dc: 90, t: 23 },
        { name: "52 kWh (155 kW)", net: 52, chem: "NMC", range: 454, kw: 155, dc: 105, t: 24 },
        { name: "GTI (52 kWh, Vorverkauf Herbst 2026)", net: 52, chem: "NMC", range: 424, kw: 166, dc: 105, t: 24 }
      ] },
    { name: "ID. Cross", type: "BEV", seg: "Kleinwagen-SUV", platform: "MEB+ (Frontantrieb)", since: 2026, arch: "400 V",
      notes: "Technikbruder des ID. Polo (Cell-to-Pack, Einheitszelle, Frontmotor APP290). Seit Juli 2026 mit 155 kW bestellbar, Auslieferung ab Herbst 2026; die 37-kWh-Versionen (85/99 kW) folgen laut VW ab Mitte Oktober 2026.",
      d: { layout: "FWD", motor: "PSM", motorMaker: "VW, APP290", cellMaker: "PowerCo (Einheitszelle)", pack: "Cell-to-Pack", ac: 11 },
      variants: [
        { name: "52 kWh (155 kW)", net: 52, chem: "NMC", range: 427, kw: 155, dc: 105, t: 24 },
        { name: "37 kWh (85 kW, ab Mitte Oktober 2026)", net: 37, chem: "LFP", range: 316, kw: 85, dc: 90 },
        { name: "37 kWh (99 kW, ab Herbst 2026)", net: 37, chem: "LFP", kw: 99, dc: 90 }
      ] },
    { name: "ID. Every1", type: "BEV", seg: "Kleinstwagen", platform: "MEB+ (Frontantrieb)", since: 2027, status: "planned", arch: "400 V",
      notes: "Einstiegsmodell um 20.000 €, Serienstart 2027 angekündigt. Studie: 70 kW, mind. 250 km.",
      variants: [{ name: "Studie", range: 250, layout: "FWD", kw: 70 }] },
    { name: "T-Roc / Golf Hybrid (Vollhybrid)", type: "HEV", seg: "Kompakt-SUV / Kompaktklasse", platform: "MQB evo", since: 2026, status: "planned",
      hybrid: "seriell-parallel: Hybridmodul mit zwei E-Maschinen (Generator EM1 bis 110 kW, Fahrmotor EM2 125 kW) und elektronisch betätigter Lamellenkupplung; elektrisch bei niedrigem Tempo, seriell, ab ca. 60 km/h parallel",
      notes: "Erster Vollhybrid von VW; flüssigkeitsgekühlte Batterie mit prismatischen NMC-Zellen (Spitzenleistung 44 kW). Laut VW ab dem 4. Quartal 2026 verfügbar.",
      d: { gross: 1.6, chem: "NMC", layout: "FWD", kw: 125, ice: "1.5 TSI evo2 (Miller), 110 kW" },
      variants: [{ name: "Hybrid 100 kW", sysKw: 100 }, { name: "Hybrid 125 kW", sysKw: 125 }] },
    { name: "Golf eHybrid / GTE", type: "PHEV", seg: "Kompaktklasse", platform: "MQB evo", since: 2024, arch: "400 V", hybrid: PHEV_MQB, notes: MQB_NOTE, d: MQB_D, variants: mqbPhev(143, 131) },
    { name: "Passat eHybrid", type: "PHEV", seg: "Mittelklasse Kombi", platform: "MQB evo", since: 2024, arch: "400 V", hybrid: PHEV_MQB, notes: MQB_NOTE, d: MQB_D, variants: mqbPhev(133, 126) },
    { name: "Tiguan eHybrid", type: "PHEV", seg: "Kompakt-SUV", platform: "MQB evo", since: 2024, arch: "400 V", hybrid: PHEV_MQB, notes: MQB_NOTE, d: MQB_D, variants: mqbPhev(129, 120) },
    { name: "Tayron eHybrid", type: "PHEV", seg: "SUV", platform: "MQB evo", since: 2025, arch: "400 V", hybrid: PHEV_MQB, notes: MQB_NOTE, d: MQB_D, variants: mqbPhev(126, 117) },
    { name: "Touareg eHybrid / R eHybrid", type: "PHEV", seg: "Oberklasse-SUV", platform: "MLB evo", since: 2019, arch: "400 V",
      hybrid: "parallel (P2): E-Maschine im 8-Gang-Wandlerautomaten, permanenter Allrad (Torsen)",
      d: { chem: "NMC", layout: "AWD", motor: "PSM", gearbox: "8-Gang-Tiptronic", ac: 11, net: 14.3, gross: 17.9, kw: 100, nm: 400 },
      variants: [
        { name: "eHybrid", range: 51, ice: "3.0 V6 TSI, 250 kW", sysKw: 280 },
        { name: "R eHybrid", range: 51, ice: "3.0 V6 TSI, 250 kW", sysKw: 340 }
      ] },
    { name: "Multivan / California eHybrid 4Motion", type: "PHEV", seg: "Van", platform: "MQB", since: 2024, arch: "400 V",
      hybrid: "parallel (P2) vorn + elektrische Hinterachse (Axle-Split-Allrad)",
      variants: [{ name: "eHybrid 4Motion", net: 19.7, chem: "NMC", range: 95, layout: "AWD", kw: 85, motor: "PSM", ice: "1.5 TSI, 130 kW", sysKw: 180, gearbox: "6-Gang-DSG", ac: 11, dc: 50 }] }
  ]
});

const PPE = "PPE (Premium Platform Electric, mit Porsche entwickelt): 800-V-Architektur, Batterie aus 12 Modulen mit 180 prismatischen Zellen, Bankladen (2 × 400 V) an 400-V-Säulen, SiC-Pulswechselrichter an der Hinterachse, Trockensumpf-Ölkühlung der E-Maschinen.";
const PPC_HYB = "parallel (P2): E-Maschine im 7-Gang-S-tronic, quattro ultra";
const ppcPhev = r => [
  { name: "e-hybrid 220 kW", range: r, sysKw: 220 },
  { name: "e-hybrid 270 kW", range: r - 3, sysKw: 270 }
];
const PPC_D = { net: 20.7, gross: 25.9, chem: "NMC", layout: "AWD", kw: 105, nm: 350, motor: "PSM", ice: "2.0 TFSI, 185 kW", gearbox: "7-Gang-S-tronic", ac: 11 };

EVDB.brand({
  id: "audi", name: "Audi", country: "Deutschland", group: "Volkswagen AG",
  warranty: { vehicle: "2 Jahre ohne km-Begrenzung (Anschlussgarantie bis 5 Jahre optional)", hv: HV, rust: "12 Jahre" },
  models: [
    { name: "A2 e-tron", type: "BEV", seg: "Kompaktklasse", platform: "MEB+", since: 2026, arch: "400 V",
      notes: "Bestellbar seit 10.09.2026 (ab 38.200 €), Markteinführung Dezember 2026, gebaut in Ingolstadt. Heckmotor, Topmodell mit Allrad. LFP-Batterien in Cell-to-Pack-Bauweise, 79-kWh-Batterie mit NMC-Zellen in Modulbauweise. cW 0,24, Verbrauch ab 12,8 kWh/100 km (WLTP, vorläufig). Bidirektionales Laden optional. Reichweite der 170-kW-Version laut Vorabangaben bis ca. 646 km.",
      d: { motor: "PSM", ac: 11 },
      variants: [
        { name: "125 kW (50 kWh)", net: 50, gross: 52, chem: "LFP", range: 423, layout: "RWD", kw: 125, nm: 350, dc: 100, t: 24 },
        { name: "140 kW (58 kWh)", net: 58, gross: 61, chem: "LFP", range: 479, layout: "RWD", kw: 140, nm: 350, dc: 105 },
        { name: "170 kW (79 kWh)", net: 79, gross: 84, chem: "NMC", layout: "RWD", kw: 170, dc: 183 },
        { name: "240 kW quattro (79 kWh)", net: 79, gross: 84, chem: "NMC", range: 630, layout: "AWD", kw: 240, motor: undefined, dc: 183 }
      ] },
    { name: "Q4 e-tron / Q4 Sportback e-tron (Facelift 2026)", type: "BEV", seg: "Kompakt-SUV", platform: "MEB", since: 2021, arch: "400 V",
      notes: MEB + " Facelift (vorgestellt 27.04.2026, bestellbar seit 01.05.2026): effizienterer Antrieb, Reichweite je nach Karosserie und Batterie 440–592 km, bidirektionales Laden (V2L bis 2 kW, V2H), DC bis 185 kW.",
      d: { chem: "NMC", motor: "PSM", motorMaker: "VW Kassel, APP550", ac: 11 },
      variants: [
        { name: "Basis (63 kWh)", net: 59, gross: 63, layout: "RWD", kw: 150, nm: 310, motorMaker: "VW Kassel, APP310", dc: 160 },
        { name: "performance (82 kWh)", net: 77, gross: 82, v: 352, range: 578, layout: "RWD", kw: 210, kwCont: 89, nm: 545 },
        { name: "quattro performance (82 kWh)", net: 77, gross: 82, v: 352, layout: "AWD", kw: 250, nm: 545, motor: "PSM + ASM", dc: 185, t: 27 }
      ] },
    { name: "Q6 e-tron / SQ6 e-tron", type: "BEV", seg: "Mittelklasse-SUV", platform: "PPE", since: 2024, arch: "800 V", notes: PPE,
      d: { chem: "NMC", cellMaker: "CATL", ac: 11, t: 21 },
      variants: [
        { name: "Q6 e-tron (83 kWh)", net: 75.8, gross: 83, range: 530, layout: "RWD", kw: 215, motor: "PSM", dc: 225 },
        { name: "Q6 e-tron performance", net: 94.9, gross: 100, v: 662, range: 640, layout: "RWD", kw: 225, nm: 485, motor: "PSM", dc: 270 },
        { name: "Q6 e-tron quattro", net: 94.9, gross: 100, v: 662, range: 625, layout: "AWD", kw: 285, motor: "PSM + ASM", dc: 270 },
        { name: "SQ6 e-tron", net: 94.9, gross: 100, v: 662, range: 598, layout: "AWD", kw: 360, motor: "PSM + ASM", dc: 270 }
      ] },
    { name: "A6 e-tron / S6 e-tron (Sportback & Avant)", type: "BEV", seg: "Obere Mittelklasse", platform: "PPE", since: 2024, arch: "800 V", notes: PPE,
      d: { chem: "NMC", cellMaker: "CATL", ac: 11, t: 21 },
      variants: [
        { name: "A6 e-tron (83 kWh)", net: 75.8, gross: 83, range: 627, layout: "RWD", kw: 210, nm: 435, motor: "PSM", dc: 225 },
        { name: "A6 e-tron performance", net: 94.9, gross: 100, v: 662, range: 756, layout: "RWD", kw: 270, nm: 565, motor: "PSM", dc: 270 },
        { name: "A6 e-tron quattro", net: 94.9, gross: 100, v: 662, range: 716, layout: "AWD", kw: 315, motor: "PSM + ASM", dc: 270 },
        { name: "S6 e-tron", net: 94.9, gross: 100, v: 662, range: 675, layout: "AWD", kw: 370, motor: "PSM + ASM", dc: 270 }
      ] },
    { name: "e-tron GT (S / RS / RS performance)", type: "BEV", seg: "Sportwagen / Gran Turismo", platform: "J1 II", since: 2021, arch: "800 V",
      notes: "Technikbruder des Porsche Taycan: 800 V, 2-Gang-Getriebe an der Hinterachse, PSM an beiden Achsen, Batterie mit 33 Modulen (198s2p, LG-Pouchzellen). Facelift 2024 mit 105 kWh brutto.",
      d: { net: 97, gross: 105, chem: "NMC", cellMaker: "LG Energy Solution", layout: "AWD", motor: "PSM", gearbox: undefined, ratio: "vorn 1-Gang, hinten 2-Gang", ac: 11, dc: 320, t: 18 },
      variants: [
        { name: "S e-tron GT", range: 609, kw: 500 },
        { name: "RS e-tron GT", range: 598, kw: 630 },
        { name: "RS e-tron GT performance", range: 592, kw: 680, nm: 1027 }
      ] },
    { name: "A3 Sportback TFSI e", type: "PHEV", seg: "Kompaktklasse", platform: "MQB evo", since: 2024, arch: "400 V", hybrid: PHEV_MQB, notes: MQB_NOTE, d: MQB_D,
      variants: [{ name: "40 TFSI e", net: 19.7, gross: 25.7, range: 143, kw: 85, nm: 330, ice: "1.5 TFSI, 110 kW", sysKw: 150 },
                 { name: "45 TFSI e", net: 19.7, gross: 25.7, range: 135, kw: 85, nm: 330, ice: "1.5 TFSI, 130 kW", sysKw: 200 }] },
    { name: "Q3 e-hybrid", type: "PHEV", seg: "Kompakt-SUV", platform: "MQB evo", since: 2025, arch: "400 V", hybrid: PHEV_MQB, notes: MQB_NOTE, d: MQB_D,
      variants: [{ name: "e-hybrid 200 kW", net: 19.7, gross: 25.7, range: 119, kw: 85, nm: 330, ice: "1.5 TFSI, 130 kW", sysKw: 200 }] },
    { name: "A5 e-hybrid quattro", type: "PHEV", seg: "Mittelklasse", platform: "PPC", since: 2025, arch: "400 V", hybrid: PPC_HYB, d: PPC_D, variants: ppcPhev(110) },
    { name: "RS 5 (Limousine / Avant)", type: "PHEV", seg: "Mittelklasse (Sportmodell)", platform: "PPC", since: 2026, arch: "400 V",
      hybrid: "parallel (P2): E-Maschine im Getriebe integriert, Allradantrieb",
      notes: "Erstes RS-Modell als Plug-in-Hybrid; Systemdrehmoment 825 Nm.",
      variants: [{ name: "RS 5", net: 22, gross: 25.9, range: 84, layout: "AWD", kw: 130, nm: 460, ice: "2.9 V6 Biturbo, 375 kW", sysKw: 470 }] },
    { name: "A6 e-hybrid quattro", type: "PHEV", seg: "Obere Mittelklasse", platform: "PPC", since: 2025, arch: "400 V", hybrid: PPC_HYB, d: PPC_D, variants: ppcPhev(106) },
    { name: "Q5 e-hybrid quattro", type: "PHEV", seg: "Mittelklasse-SUV", platform: "PPC", since: 2025, arch: "400 V", hybrid: PPC_HYB, d: PPC_D, variants: ppcPhev(100) },
    { name: "Q7 / Q8 TFSI e quattro", type: "PHEV", seg: "Oberklasse-SUV", platform: "MLB evo", since: 2019, arch: "400 V",
      hybrid: "parallel (P2): E-Maschine im 8-Gang-Wandlerautomaten",
      d: { net: 22, gross: 25.9, chem: "NMC", layout: "AWD", kw: 130, nm: 460, motor: "PSM", ice: "3.0 V6 TFSI, 250 kW", gearbox: "8-Gang-Tiptronic", ac: 7.4 },
      variants: [{ name: "55 TFSI e", range: 85, sysKw: 290 }, { name: "60 TFSI e", range: 84, sysKw: 360 }] }
  ]
});

EVDB.brand({
  id: "skoda", name: "Škoda", country: "Tschechien", group: "Volkswagen AG",
  warranty: { vehicle: "2 Jahre ohne km-Begrenzung (Anschlussgarantie bis 5 Jahre optional)", hv: HV, rust: "12 Jahre" },
  models: [
    { name: "Elroq", type: "BEV", seg: "Kompakt-SUV", platform: "MEB", since: 2025, arch: "400 V", notes: MEB,
      d: { chem: "NMC", motor: "PSM", ac: 11 },
      variants: [
        { name: "50", net: 52, gross: 55, range: 375, layout: "RWD", kw: 125, nm: 310, motorMaker: "VW Kassel, APP310", dc: 145 },
        { name: "60", net: 59, gross: 63, range: 428, layout: "RWD", kw: 150, nm: 310, motorMaker: "VW Kassel, APP310", dc: 165 },
        { name: "85", net: 77, gross: 82, v: 352, range: 579, layout: "RWD", kw: 210, kwCont: 89, nm: 545, motorMaker: "VW Kassel, APP550", dc: 175 },
        { name: "RS", net: 79, gross: 84, range: 547, layout: "AWD", kw: 250, nm: 545, motor: "PSM + ASM", dc: 185 }
      ] },
    { name: "Enyaq / Enyaq Coupé", type: "BEV", seg: "Mittelklasse-SUV", platform: "MEB", since: 2021, arch: "400 V", notes: MEB,
      d: { chem: "NMC", motor: "PSM", ac: 11 },
      variants: [
        { name: "60", net: 59, gross: 63, range: 431, layout: "RWD", kw: 150, nm: 310, motorMaker: "VW Kassel, APP310", dc: 165 },
        { name: "85", net: 77, gross: 82, v: 352, range: 579, layout: "RWD", kw: 210, kwCont: 89, nm: 545, motorMaker: "VW Kassel, APP550", dc: 135 },
        { name: "85x", net: 77, gross: 82, v: 352, range: 536, layout: "AWD", kw: 210, nm: 545, motor: "PSM + ASM", dc: 175 },
        { name: "RS", net: 79, gross: 84, range: 560, layout: "AWD", kw: 250, nm: 545, motor: "PSM + ASM", dc: 185 }
      ] },
    { name: "Epiq", type: "BEV", seg: "Kleinwagen-SUV", platform: "MEB+ (Frontantrieb)", since: 2026, arch: "400 V",
      notes: "Technikbruder von VW ID. Cross / Cupra Raval, Serienfertigung in Pamplona seit 08.06.2026. Epiq 55 bestellbar seit 19.05.2026, Epiq 40 seit 17.09.2026, Epiq 35 für Oktober 2026 angekündigt.",
      d: { layout: "FWD", motor: "PSM", pack: "Cell-to-Pack", ac: 11 },
      variants: [
        { name: "35 (ab Oktober 2026)", net: 37, gross: 38.5, chem: "LFP", range: 315, kw: 85 },
        { name: "40", net: 37, gross: 38.5, chem: "LFP", range: 327, kw: 99 },
        { name: "55", net: 51.7, gross: 55, chem: "NMC", range: 441, kw: 155, dc: 105, t: 24 }
      ] },
    { name: "Peaq", type: "BEV", seg: "SUV (7-Sitzer)", platform: "MEB", since: 2026, arch: "400 V",
      notes: "Serienversion der Studie Vision 7S, rund 4,9 m lang, bis zu sieben Sitze. Seit Sommer 2026 bestellbar (ab 49.900 €). Reichweiten: jeweils Bestwert der WLTP-Spanne.",
      variants: [
        { name: "60", net: 59, gross: 63, range: 456, layout: "RWD", kw: 150 },
        { name: "90", net: 86, gross: 91, range: 642, layout: "RWD", kw: 210 },
        { name: "90x", net: 86, gross: 91, range: 609, layout: "AWD", kw: 218 }
      ] },
    { name: "Superb iV", type: "PHEV", seg: "Mittelklasse Kombi", platform: "MQB evo", since: 2024, arch: "400 V", hybrid: PHEV_MQB, notes: MQB_NOTE, d: MQB_D,
      variants: [{ name: "iV 150 kW", net: 19.7, gross: 25.7, range: 135, kw: 85, nm: 330, ice: "1.5 TSI, 110 kW", sysKw: 150 }] },
    { name: "Kodiaq iV", type: "PHEV", seg: "SUV", platform: "MQB evo", since: 2024, arch: "400 V", hybrid: PHEV_MQB, notes: MQB_NOTE, d: MQB_D,
      variants: [{ name: "iV 150 kW", net: 19.7, gross: 25.7, range: 123, kw: 85, nm: 330, ice: "1.5 TSI, 110 kW", sysKw: 150 }] }
  ]
});

EVDB.brand({
  id: "cupra-seat", name: "Cupra / SEAT", country: "Spanien", group: "Volkswagen AG",
  warranty: { vehicle: "2 Jahre + Anschlussgarantie (in DE bis 5 Jahre / 150.000 km, marktabhängig)", hv: HV, rust: "12 Jahre" },
  models: [
    { name: "Cupra Born (Facelift 2026)", type: "BEV", seg: "Kompaktklasse", platform: "MEB", since: 2021, arch: "400 V",
      notes: "Facelift 2026 (Technik wie VW ID.3 Neo, Fertigung in Zwickau): Einstiegsbatterie jetzt mit LFP-Zellen, große Batterie 79 kWh netto (NMC).",
      d: { layout: "RWD", motor: "PSM", ac: 11 },
      variants: [
        { name: "Born (58 kWh)", net: 58, chem: "LFP", range: 420, kw: 140, dc: 105 },
        { name: "Born Endurance (79 kWh)", net: 79, chem: "NMC", range: 600, kw: 170 },
        { name: "Born VZ (79 kWh)", net: 79, chem: "NMC", kw: 240, nm: 545, motorMaker: "VW Kassel, APP550" }
      ] },
    { name: "Cupra Tavascan", type: "BEV", seg: "SUV-Coupé", platform: "MEB", since: 2024, arch: "400 V", notes: MEB + " Produktion in Anhui (China).",
      d: { net: 77, gross: 82, v: 352, chem: "NMC", motor: "PSM", motorMaker: "VW Kassel, APP550", ac: 11, dc: 135 },
      variants: [{ name: "Endurance", range: 568, layout: "RWD", kw: 210, kwCont: 89, nm: 545 }, { name: "VZ", range: 522, layout: "AWD", kw: 250, nm: 545, motor: "PSM + ASM" }] },
    { name: "Cupra Raval", type: "BEV", seg: "Kleinwagen", platform: "MEB+ (Frontantrieb)", since: 2026, arch: "400 V",
      notes: "Technikbruder des VW ID. Polo, gebaut in Martorell. Bestellbar seit April 2026; die 37-kWh-LFP-Versionen laufen seit Herbst 2026 an.",
      d: { layout: "FWD", motor: "PSM", pack: "Cell-to-Pack", ac: 11 },
      variants: [
        { name: "Raval (37 kWh, 85 kW)", net: 37, chem: "LFP", kw: 85 },
        { name: "Raval Plus (37 kWh, 99 kW)", net: 37, chem: "LFP", range: 328, kw: 99, t: 23 },
        { name: "Raval Endurance (52 kWh, 155 kW)", net: 52, chem: "NMC", range: 446, kw: 155, t: 24 },
        { name: "Raval VZ (52 kWh, 166 kW)", net: 51.7, gross: 56, chem: "NMC", range: 387, kw: 166, nm: 290 }
      ] },
    { name: "Cupra Leon / Formentor / Terramar e-Hybrid", type: "PHEV", seg: "Kompaktklasse / SUV", platform: "MQB evo", since: 2024, arch: "400 V", hybrid: PHEV_MQB, notes: MQB_NOTE, d: MQB_D, variants: mqbPhev(125, 118) },
    { name: "SEAT Leon e-Hybrid", type: "PHEV", seg: "Kompaktklasse", platform: "MQB evo", since: 2024, arch: "400 V", hybrid: PHEV_MQB, notes: MQB_NOTE, d: MQB_D,
      variants: [{ name: "e-Hybrid 150 kW", net: 19.7, gross: 25.7, range: 133, kw: 85, nm: 330, ice: "1.5 TSI, 110 kW", sysKw: 150 }] }
  ]
});

EVDB.brand({
  id: "porsche", name: "Porsche", country: "Deutschland", group: "Volkswagen AG",
  warranty: { vehicle: "2 Jahre ohne km-Begrenzung (Porsche Approved bis 15 Jahre verlängerbar)", hv: HV, rust: "12 Jahre" },
  models: [
    { name: "Taycan (Limousine / Sport Turismo / Cross Turismo)", type: "BEV", seg: "Sportwagen", platform: "J1 II", since: 2019, arch: "800 V",
      notes: "Erstes Serienfahrzeug mit 800 V. PSM an beiden Achsen (Hairpin-Wicklung), 2-Gang-Getriebe an der Hinterachse, SiC-Pulswechselrichter hinten (Facelift 2024). Batterie: 33 Module, 198s2p (Performance Plus), LG-Pouchzellen. An 400-V-Säulen Laden über DC/DC-Booster (150 kW).",
      d: { chem: "NMC", cellMaker: "LG Energy Solution", motor: "PSM", motorMaker: "Porsche (Zuffenhausen)", rpm: 16000, ratio: "vorn 8,05 : 1; hinten 2-Gang", ac: 11, t: 18 },
      variants: [
        { name: "Taycan (Performance-Batterie)", net: 82.3, gross: 89, range: 590, layout: "RWD", kw: 300, dc: 270 },
        { name: "Taycan 4S (Performance Plus)", net: 97, gross: 105, v: 725, range: 642, layout: "AWD", kw: 440, dc: 320 },
        { name: "Taycan Turbo S", net: 97, gross: 105, v: 725, range: 630, layout: "AWD", kw: 700, nm: 1110, dc: 320 },
        { name: "Taycan Turbo GT", net: 97, gross: 105, v: 725, range: 555, layout: "AWD", kw: 760, nm: 1340, dc: 320 }
      ] },
    { name: "Macan Electric", type: "BEV", seg: "Mittelklasse-SUV", platform: "PPE", since: 2024, arch: "800 V", notes: PPE,
      d: { net: 95, gross: 100, v: 662, chem: "NMC", cellMaker: "CATL", motor: "PSM", ac: 11, dc: 270, t: 21 },
      variants: [
        { name: "Macan", range: 641, layout: "RWD", kw: 265, nm: 563 },
        { name: "Macan 4", range: 613, layout: "AWD", kw: 300, nm: 650 },
        { name: "Macan 4S", range: 606, layout: "AWD", kw: 380, nm: 820 },
        { name: "Macan Turbo", range: 591, layout: "AWD", kw: 470, nm: 1130 }
      ] },
    { name: "Cayenne Electric", type: "BEV", seg: "Oberklasse-SUV", platform: "PPE (weiterentwickelt)", since: 2026, arch: "800 V",
      notes: "Batterie als tragendes Bauteil mit doppelseitiger Kühlung, DC-Laden bis 400 kW, optional induktives Laden (11 kW). Turbo mit direkt ölgekühlter Hinterachs-E-Maschine.",
      d: { net: 108, gross: 113, chem: "NMC", pack: "6 Module, 192 Zellen, beidseitig flüssigkeitsgekühlt", layout: "AWD", motor: "PSM", ac: 11, dc: 400, t: 16 },
      variants: [
        { name: "Cayenne Electric", range: 642, kw: 325 },
        { name: "Cayenne S Electric (400 kW, mit Overboost 490 kW)", range: 653, kw: 490 },
        { name: "Cayenne Turbo Electric", range: 623, kw: 850, nm: 1500 }
      ] },
    { name: "Cayenne E-Hybrid", type: "PHEV", seg: "Oberklasse-SUV", platform: "MLB evo", since: 2023, arch: "400 V",
      hybrid: "parallel (P2): E-Maschine im 8-Gang-Tiptronic S",
      d: { net: 21.8, gross: 25.9, chem: "NMC", layout: "AWD", kw: 130, nm: 460, motor: "PSM", gearbox: "8-Gang-Tiptronic S", ac: 11 },
      variants: [
        { name: "E-Hybrid", range: 90, ice: "3.0 V6 Turbo, 224 kW", sysKw: 346 },
        { name: "S E-Hybrid", range: 90, ice: "3.0 V6 Turbo, 260 kW", sysKw: 382 },
        { name: "Turbo E-Hybrid", range: 82, ice: "4.0 V8 Biturbo, 441 kW", sysKw: 544 }
      ] },
    { name: "Panamera E-Hybrid", type: "PHEV", seg: "Oberklasse", platform: "MSB", since: 2024, arch: "400 V",
      hybrid: "parallel (P2): E-Maschine ölgekühlt im Gehäuse des 8-Gang-PDK integriert",
      d: { net: 21.8, gross: 25.9, chem: "NMC", layout: "AWD", kw: 140, nm: 450, motor: "PSM", gearbox: "8-Gang-PDK", ac: 11 },
      variants: [
        { name: "4 E-Hybrid", range: 96, ice: "2.9 V6 Biturbo, 224 kW", sysKw: 346 },
        { name: "4S E-Hybrid", range: 92, ice: "2.9 V6 Biturbo, 260 kW", sysKw: 400 },
        { name: "Turbo S E-Hybrid", range: 88, ice: "4.0 V8 Biturbo, 441 kW", sysKw: 575 }
      ] },
    { name: "911 Carrera GTS / Turbo S (T-Hybrid)", type: "HEV", seg: "Sportwagen", platform: "992.2", since: 2024, arch: "400 V",
      hybrid: "parallel (P2) Performance-Hybrid ohne Stecker: E-Maschine im 8-Gang-PDK plus elektrischer Abgasturbolader",
      notes: "400-V-System mit 1,9-kWh-Batterie im Vorderwagen; der E-Turbolader rekuperiert bis 11 kW aus dem Abgasstrom. Kein rein elektrisches Fahren.",
      variants: [{ name: "Carrera GTS", gross: 1.9, chem: "NMC", layout: "RWD", kw: 40, nm: 150, motor: "PSM", ice: "3.6 Boxer-6 mit E-Turbo, 357 kW", sysKw: 398, gearbox: "8-Gang-PDK" }] }
  ]
});

EVDB.brand({
  id: "bentley", name: "Bentley", country: "Großbritannien", group: "Volkswagen AG",
  warranty: { vehicle: "3 Jahre ohne km-Begrenzung", hv: "8 Jahre / 160.000 km" },
  models: [
    { name: "Continental GT / GTC / Flying Spur (Hybrid)", type: "PHEV", seg: "Luxusklasse", platform: "MSB", since: 2024, arch: "400 V",
      hybrid: "parallel (P2): E-Maschine im 8-Gang-Doppelkupplungsgetriebe",
      d: { gross: 25.9, chem: "NMC", layout: "AWD", kw: 140, nm: 450, motor: "PSM", ice: "4.0 V8 Biturbo", gearbox: "8-Gang-DKG", ac: 11 },
      variants: [{ name: "High Performance Hybrid", range: 80, sysKw: 500 }, { name: "Speed (Ultra Performance Hybrid)", range: 81, sysKw: 575 }] },
    { name: "Bentayga Hybrid", type: "PHEV", seg: "Luxus-SUV", platform: "MLB evo", since: 2019, arch: "400 V", hybrid: "parallel (P2)",
      variants: [{ name: "Hybrid", gross: 18, chem: "NMC", range: 43, layout: "AWD", kw: 100, motor: "PSM", ice: "3.0 V6 Turbo", sysKw: 340, gearbox: "8-Gang-Automatik", ac: 7.2 }] },
    { name: "Luxury Urban SUV (erstes BEV)", type: "BEV", seg: "Luxus-SUV", platform: "PPE", since: 2027, status: "planned", arch: "800 V", notes: "Erstes Elektromodell angekündigt, Vorstellung 2026, Auslieferung ab 2027.", variants: [] }
  ]
});

EVDB.brand({
  id: "lamborghini", name: "Lamborghini", country: "Italien", group: "Volkswagen AG (Audi)",
  warranty: { vehicle: "3 Jahre ohne km-Begrenzung", hv: "8 Jahre (Angabe marktabhängig)" },
  models: [
    { name: "Revuelto", type: "PHEV", seg: "Supersportwagen", since: 2023, arch: "400 V",
      hybrid: "Axle-Split + P2/P3: zwei Axialfluss-E-Maschinen an der Vorderachse (Torque Vectoring), eine E-Maschine am 8-Gang-DKG",
      variants: [{ name: "Revuelto", gross: 3.8, chem: "NMC", range: 10, layout: "AWD", kw: 220, motor: "PSM", motorMaker: "vorn Axialfluss (YASA-Technik)", ice: "6.5 V12 Sauger, 607 kW", sysKw: 747, gearbox: "8-Gang-DKG (quer hinter dem Motor)", ac: 7 }] },
    { name: "Temerario", type: "PHEV", seg: "Supersportwagen", since: 2025, arch: "400 V",
      hybrid: "Axle-Split + P1: zwei E-Maschinen vorn, eine zwischen V8 und Getriebe",
      variants: [{ name: "Temerario", gross: 3.8, chem: "NMC", layout: "AWD", motor: "PSM", ice: "4.0 V8 Biturbo (10.000/min), 588 kW", sysKw: 677, gearbox: "8-Gang-DKG", ac: 7 }] },
    { name: "Urus SE", type: "PHEV", seg: "Super-SUV", platform: "MLB evo", since: 2024, arch: "400 V", hybrid: "parallel (P2): E-Maschine im 8-Gang-Automatikgetriebe",
      variants: [{ name: "Urus SE", gross: 25.9, chem: "NMC", range: 60, layout: "AWD", kw: 141, nm: 483, motor: "PSM", ice: "4.0 V8 Biturbo, 456 kW", sysKw: 588, gearbox: "8-Gang-Automatik", ac: 11 }] }
  ]
});
})();
