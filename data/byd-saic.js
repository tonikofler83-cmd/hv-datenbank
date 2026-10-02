// BYD (inkl. Denza, Yangwang) und SAIC (MG, IM, Maxus)
(function () {
const E3 = "e-Platform 3.0: Blade-Batterie (LFP, Cell-to-Pack bzw. Cell-to-Body) aus eigener Fertigung (FinDreams), 8-in-1-Antriebseinheit, Wärmepumpe mit direkter Kältemittel-Batteriekühlung, V2L. DC-Laden an 400-V-Säulen über Hochsetzen mit den Motorwicklungen.";
const DMI = "seriell-parallel (DM-i, EHS): überwiegend serieller Betrieb, bei höherem Tempo wird der Verbrenner über einen festen Direktgang zugeschaltet; kein Schaltgetriebe";
const BD = { chem: "LFP (Blade)", cellMaker: "FinDreams (BYD)", motor: "PSM", motorMaker: "BYD", ac: 11 };
const BDM = { chem: "LFP (Blade)", cellMaker: "FinDreams (BYD)", motor: "PSM", motorMaker: "BYD", gearbox: "EHS (E-CVT mit Direktgang)" };

EVDB.brand({
  id: "byd", name: "BYD", country: "China", group: "BYD Company",
  warranty: { vehicle: "6 Jahre / 150.000 km", hv: "8 Jahre / 200.000 km (mind. 70 % Kapazität), teils 250.000 km", drive: "Antriebseinheit 8 Jahre / 150.000 km", rust: "12 Jahre" },
  note: "Eigene Pkw-Fertigung in Szeged (Ungarn) im Hochlauf; weiteres Werk in der Türkei angekündigt.",
  models: [
    { name: "Dolphin Surf", type: "BEV", seg: "Kleinstwagen", platform: "e-Platform 3.0", since: 2025, arch: "400 V", notes: E3, d: Object.assign({}, BD, { layout: "FWD" }),
      variants: [
        { name: "Active (30 kWh)", net: 30, range: 220, kw: 65, nm: 175, dc: 65 },
        { name: "Boost (43,2 kWh)", net: 43.2, range: 322, kw: 65, nm: 175, dc: 85 },
        { name: "Comfort (43,2 kWh)", net: 43.2, range: 310, kw: 115, nm: 220, dc: 85, t: 30 }
      ] },
    { name: "Dolphin", type: "BEV", seg: "Kompaktklasse", platform: "e-Platform 3.0", since: 2023, arch: "400 V", notes: E3, d: Object.assign({}, BD, { layout: "FWD" }),
      variants: [{ name: "Active (44,9 kWh)", net: 44.9, range: 340, kw: 70, nm: 180, dc: 60 }, { name: "Comfort / Design (60,4 kWh)", net: 60.4, range: 427, kw: 150, nm: 310, dc: 88, t: 29 }] },
    { name: "Atto 2", type: "BEV", seg: "Kleinwagen-SUV", platform: "e-Platform 3.0", since: 2025, arch: "400 V", notes: E3, d: Object.assign({}, BD, { layout: "FWD", pack: "Cell-to-Body" }),
      variants: [{ name: "Active / Boost (45,1 kWh)", net: 45.1, range: 312, kw: 130, nm: 290, dc: 65 }, { name: "Comfort (64,8 kWh)", net: 64.8, range: 420, kw: 150, nm: 310, dc: 155 }] },
    { name: "Atto 2 DM-i", type: "PHEV", seg: "Kleinwagen-SUV", since: 2026, arch: "400 V", hybrid: DMI, d: Object.assign({}, BDM, { layout: "FWD", ice: "1.5 Vierzylinder-Sauger (Atkinson), 72 kW" }),
      variants: [{ name: "Active (7,8 kWh)", gross: 7.8, range: 40, sysKw: 122, ac: 3.3 }, { name: "Boost (18 kWh)", gross: 18, range: 90, sysKw: 156, ac: 6.6 }] },
    { name: "Atto 3", type: "BEV", seg: "Kompakt-SUV", platform: "e-Platform 3.0", since: 2022, arch: "400 V", notes: E3 + " Nachfolger „Atto 3 Evo“ mit Heckantrieb und höherer Systemspannung für 2026 angekündigt.",
      variants: [Object.assign({ name: "Atto 3 (60,5 kWh)", net: 60.5, v: 403, range: 420, layout: "FWD", kw: 150, nm: 310, dc: 88, t: 29 }, BD)] },
    { name: "Seal", type: "BEV", seg: "Mittelklasse-Limousine", platform: "e-Platform 3.0", since: 2023, arch: "550 V", notes: E3 + " Erstes Modell mit Cell-to-Body; Allrad mit ASM vorn.",
      d: Object.assign({}, BD, { pack: "Cell-to-Body" }),
      variants: [
        { name: "Comfort RWD (61,4 kWh)", net: 61.4, range: 460, layout: "RWD", kw: 170, nm: 330, dc: 110 },
        { name: "Design RWD (82,5 kWh)", net: 82.5, v: 550, range: 570, layout: "RWD", kw: 230, nm: 360, dc: 150, t: 26 },
        { name: "Excellence AWD (82,5 kWh)", net: 82.5, v: 550, range: 520, layout: "AWD", kw: 390, nm: 670, motor: "PSM + ASM", dc: 150 }
      ] },
    { name: "Seal U (Elektro)", type: "BEV", seg: "Mittelklasse-SUV", platform: "e-Platform 3.0", since: 2024, arch: "400 V", notes: E3, d: Object.assign({}, BD, { layout: "FWD", kw: 160, nm: 330 }),
      variants: [{ name: "Comfort (71,8 kWh)", net: 71.8, range: 420, dc: 115 }, { name: "Design (87 kWh)", net: 87, range: 500, dc: 140 }] },
    { name: "Sealion 7", type: "BEV", seg: "Mittelklasse-SUV-Coupé", platform: "e-Platform 3.0 Evo", since: 2024, arch: "550 V", notes: "e-Platform 3.0 Evo: 12-in-1-Antrieb, Heckmotor mit bis zu 23.000/min, Cell-to-Body.",
      d: Object.assign({}, BD, { pack: "Cell-to-Body", rpm: 23000 }),
      variants: [
        { name: "Comfort RWD (82,5 kWh)", net: 82.5, range: 482, layout: "RWD", kw: 230, nm: 380, dc: 150 },
        { name: "Design AWD (82,5 kWh)", net: 82.5, range: 456, layout: "AWD", kw: 390, nm: 690, motor: "PSM + ASM", dc: 150 },
        { name: "Excellence AWD (91,3 kWh)", net: 91.3, range: 502, layout: "AWD", kw: 390, nm: 690, motor: "PSM + ASM", dc: 230, t: 24 }
      ] },
    { name: "Han / Tang", type: "BEV", seg: "Oberklasse-Limousine / 7-Sitzer-SUV", since: 2022, arch: "650 V", d: Object.assign({}, BD, { layout: "AWD", kw: 380 }),
      variants: [{ name: "Han (85,4 kWh)", net: 85.4, range: 521, nm: 700, dc: 120 }, { name: "Tang (108,8 kWh)", net: 108.8, range: 530, nm: 700, dc: 170 }] },
    { name: "Seal 6 DM-i (Limousine / Touring)", type: "PHEV", seg: "Mittelklasse", since: 2025, arch: "400 V", hybrid: DMI, d: Object.assign({}, BDM, { layout: "FWD", ice: "1.5 Vierzylinder-Sauger (Atkinson), 72 kW" }),
      variants: [{ name: "Boost (10,1 kWh)", gross: 10.1, range: 50, kw: 120, sysKw: 135, ac: 3.3 }, { name: "Comfort (19 kWh)", gross: 19, range: 105, kw: 145, sysKw: 156, ac: 6.6, dc: 26 }] },
    { name: "Seal U DM-i", type: "PHEV", seg: "Mittelklasse-SUV", since: 2024, arch: "400 V", hybrid: DMI + "; Allradversion mit zusätzlicher E-Maschine hinten", d: Object.assign({}, BDM, { ac: 11, dc: 18 }),
      variants: [
        { name: "Boost FWD (18,3 kWh)", gross: 18.3, range: 80, layout: "FWD", kw: 145, ice: "1.5 Vierzylinder-Sauger, 72 kW", sysKw: 160 },
        { name: "Comfort FWD (26,6 kWh)", gross: 26.6, range: 125, layout: "FWD", kw: 145, ice: "1.5 Vierzylinder-Sauger, 72 kW", sysKw: 160 },
        { name: "Design AWD (18,3 kWh)", gross: 18.3, range: 70, layout: "AWD", ice: "1.5 Vierzylinder-Turbo, 96 kW", sysKw: 238 }
      ] },
    { name: "Sealion 5 DM-i", type: "PHEV", seg: "Kompakt-SUV", since: 2026, arch: "400 V", hybrid: DMI, d: Object.assign({}, BDM, { layout: "FWD", ice: "1.5 Vierzylinder-Sauger, 72 kW" }),
      variants: [{ name: "Comfort (12,9 kWh)", gross: 12.9, range: 62, sysKw: 156, ac: 3.3 }, { name: "Design (18,3 kWh)", gross: 18.3, range: 86, sysKw: 156, ac: 3.3 }] }
  ]
});

EVDB.brand({
  id: "denza", name: "Denza", country: "China", group: "BYD Company",
  warranty: { vehicle: "6 Jahre / 150.000 km (analog BYD, marktabhängig)", hv: "8 Jahre / 200.000 km" },
  note: "Premium-Marke von BYD, Europa-Start 2025/2026.",
  models: [
    { name: "Z9GT", type: "BEV", seg: "Oberklasse-Shooting-Brake", platform: "e³ (drei Motoren)", since: 2026, arch: "800 V",
      notes: "Drei E-Maschinen (eine vorn, zwei unabhängige hinten), Hinterradlenkung mit Einzelradansteuerung („Krabbengang“). BYD kündigt für Europa Megawatt-„Flash Charging“ an; Europa-Daten teils noch vorläufig.",
      variants: [{ name: "Elektro (100 kWh)", net: 100, chem: "LFP (Blade)", cellMaker: "FinDreams (BYD)", layout: "AWD", kw: 710, motor: "PSM", motorMaker: "BYD" }] },
    { name: "Z9GT DM", type: "PHEV", seg: "Oberklasse-Shooting-Brake", platform: "e³", since: 2026, arch: "800 V", hybrid: "seriell-parallel (DM) mit 2.0-Turbo, drei E-Maschinen",
      variants: [{ name: "Plug-in-Hybrid (38,5 kWh)", gross: 38.5, chem: "LFP (Blade)", cellMaker: "FinDreams (BYD)", layout: "AWD", motor: "PSM", ice: "2.0 Vierzylinder-Turbo", sysKw: 640 }] },
    { name: "D9", type: "PHEV", seg: "Großraum-Van", since: 2026, status: "planned", arch: "400 V", hybrid: DMI, notes: "Luxus-Van, für Europa angekündigt.", variants: [] }
  ]
});

const MSP = "MSP (Modular Scalable Platform, 400 V): Heckantrieb, sehr flache Batterie (110 mm) mit liegenden Zellen („One Pack“), Batterie tauschbar konstruiert.";
const HYB_PLUS = "seriell-parallel (Hybrid+): große E-Maschine + Generator, Verbrenner über 3-Gang-Getriebe zuschaltbar";
EVDB.brand({
  id: "mg", name: "MG", country: "China / Großbritannien", group: "SAIC Motor",
  warranty: { vehicle: "7 Jahre / 150.000 km", hv: "7 Jahre / 150.000 km (HV-Batterie und Antrieb eingeschlossen)" },
  models: [
    { name: "MG4 Electric", type: "BEV", seg: "Kompaktklasse", platform: "MSP", since: 2022, arch: "400 V", notes: MSP, d: { motor: "PSM", ac: 11 },
      variants: [
        { name: "Standard (51 kWh)", net: 50.8, gross: 51, chem: "LFP", cellMaker: "CATL", range: 350, layout: "RWD", kw: 125, nm: 250, ac: 6.6, dc: 88 },
        { name: "Comfort / Luxury (64 kWh)", net: 61.7, gross: 64, chem: "NMC", range: 450, layout: "RWD", kw: 150, nm: 250, dc: 140, t: 28 },
        { name: "Trophy Extended Range (77 kWh)", net: 74.4, gross: 77, chem: "NMC", range: 520, layout: "RWD", kw: 180, nm: 350, dc: 144 },
        { name: "XPower", net: 61.7, gross: 64, chem: "NMC", range: 385, layout: "AWD", kw: 320, nm: 600, dc: 140 }
      ] },
    { name: "MG4 Urban", type: "BEV", seg: "Kompaktklasse", platform: "E3 (Frontantrieb)", since: 2026, arch: "400 V", notes: "Zusätzliches, günstigeres Modell mit Frontantrieb und LFP-Batterie.",
      d: { chem: "LFP", layout: "FWD", motor: "PSM", ac: 7 },
      variants: [{ name: "43 kWh", gross: 43, range: 325, kw: 110, dc: 82 }, { name: "54 kWh", gross: 54, range: 415, kw: 118, dc: 87 }] },
    { name: "MGS5 EV", type: "BEV", seg: "Kompakt-SUV", platform: "MSP", since: 2025, arch: "400 V", notes: MSP, d: { layout: "RWD", motor: "PSM", ac: 11 },
      variants: [{ name: "Standard (49 kWh)", gross: 49, chem: "LFP", range: 340, kw: 125, nm: 250, dc: 120 }, { name: "Long Range (64 kWh)", gross: 64, chem: "NMC", range: 480, kw: 170, nm: 350, dc: 139 }] },
    { name: "MGS6 EV", type: "BEV", seg: "Mittelklasse-SUV", platform: "MSP", since: 2025, arch: "400 V", d: { gross: 77, chem: "NMC", motor: "PSM", ac: 11, dc: 144 },
      variants: [{ name: "RWD", range: 530, layout: "RWD", kw: 180, nm: 350 }, { name: "AWD", range: 485, layout: "AWD", kw: 266, nm: 540 }] },
    { name: "Cyberster", type: "BEV", seg: "Roadster", since: 2024, arch: "400 V", d: { gross: 77, net: 74.4, chem: "NMC", motor: "PSM", ac: 11, dc: 144 },
      variants: [{ name: "Trophy (RWD)", range: 507, layout: "RWD", kw: 250, nm: 475 }, { name: "GT (AWD)", range: 443, layout: "AWD", kw: 375, nm: 725 }] },
    { name: "IM5 / IM6", type: "BEV", seg: "Mittelklasse-Limousine / SUV", platform: "IM (800 V)", since: 2025, arch: "800 V", notes: "Unter „MG IM“ in ausgewählten Märkten. Hinterradlenkung; Basisversion mit 400 V.",
      d: { motor: "PSM", ac: 11 },
      variants: [
        { name: "Standard Range (75 kWh, 400 V)", gross: 75, chem: "LFP", range: 490, layout: "RWD", kw: 217, dc: 153 },
        { name: "Long Range (100 kWh)", gross: 100, chem: "NMC", range: 655, layout: "RWD", kw: 300, nm: 500, dc: 396, t: 17 },
        { name: "Performance (100 kWh)", gross: 100, chem: "NMC", range: 575, layout: "AWD", kw: 553, nm: 802, dc: 396, t: 17 }
      ] },
    { name: "MG3 / ZS / HS Hybrid+", type: "HEV", seg: "Kleinwagen bis Kompakt-SUV", since: 2024, arch: "350 V", hybrid: HYB_PLUS,
      variants: [{ name: "Hybrid+ (MG3 / ZS)", gross: 1.83, v: 350, chem: "NMC", layout: "FWD", kw: 100, nm: 250, motor: "PSM", ice: "1.5 Vierzylinder-Sauger (Atkinson), 75 kW", sysKw: 143, gearbox: "3-Gang-Hybridgetriebe" }] },
    { name: "HS Plug-in-Hybrid", type: "PHEV", seg: "Kompakt-SUV", since: 2024, arch: "400 V", hybrid: "seriell-parallel: E-Maschine + Generator mit 2-Gang-Hybridgetriebe",
      variants: [{ name: "HS PHEV (24,7 kWh)", gross: 24.7, chem: "NMC", range: 120, layout: "FWD", kw: 154, motor: "PSM", ice: "1.5 Vierzylinder-Turbo, 105 kW", sysKw: 220, ac: 7 }] }
  ]
});

EVDB.brand({
  id: "maxus", name: "Maxus", country: "China", group: "SAIC Motor",
  warranty: { vehicle: "5 Jahre / 100.000 km (marktabhängig)", hv: "8 Jahre / 200.000 km (marktabhängig)" },
  models: [
    { name: "Mifa 9", type: "BEV", seg: "Großraum-Van", since: 2022, arch: "400 V",
      variants: [{ name: "Mifa 9 (90 kWh)", gross: 90, chem: "NMC", range: 440, layout: "FWD", kw: 180, nm: 350, motor: "PSM", ac: 11, dc: 120 }] },
    { name: "eTerron 9", type: "BEV", seg: "Pick-up", since: 2025, arch: "400 V",
      variants: [{ name: "eTerron 9 AWD (102 kWh)", gross: 102, chem: "LFP", range: 430, layout: "AWD", kw: 325, motor: "PSM", ac: 11, dc: 115 }] }
  ]
});
})();
