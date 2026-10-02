// Weitere japanische Hersteller: Honda, Mazda, Subaru, Suzuki
(function () {
const EHEV = "seriell-parallel (e:HEV / i-MMD): im Stadtverkehr seriell (Verbrenner treibt Generator), bei höherem Tempo koppelt eine Überbrückungskupplung den Verbrenner mit fester Übersetzung direkt an die Räder; kein Schaltgetriebe";
const EH = { chem: "Li-Ion", layout: "FWD", motor: "PSM", gearbox: "e-CVT (feste Übersetzung + Überbrückungskupplung)" };

EVDB.brand({
  id: "honda", name: "Honda", country: "Japan", group: "Honda Motor Co.",
  warranty: { vehicle: "3 Jahre / 100.000 km", hv: "BEV-Batterie: 8 Jahre / 160.000 km; Hybridkomponenten: 5 Jahre / 100.000 km", rust: "12 Jahre" },
  models: [
    { name: "e:Ny1", type: "BEV", seg: "Kompakt-SUV", platform: "e:N Architecture F", since: 2023, arch: "400 V",
      variants: [{ name: "e:Ny1", net: 61.9, gross: 68.8, chem: "NMC", cellMaker: "CATL", range: 412, layout: "FWD", kw: 150, nm: 310, motor: "PSM", ac: 11, dc: 78, t: 45 }] },
    { name: "Jazz / Jazz Crosstar e:HEV", type: "HEV", seg: "Kleinwagen", since: 2020, arch: "ca. 570 V (Batterie 172,8 V)", hybrid: EHEV, d: EH,
      variants: [{ name: "1.5 e:HEV", gross: 0.9, v: 172.8, kw: 90, nm: 253, ice: "1.5 Vierzylinder (Atkinson), 79 kW" }] },
    { name: "HR-V e:HEV", type: "HEV", seg: "Kleinwagen-SUV", since: 2021, arch: "ca. 570 V", hybrid: EHEV, d: EH,
      variants: [{ name: "1.5 e:HEV", kw: 96, nm: 253, ice: "1.5 Vierzylinder (Atkinson), 79 kW" }] },
    { name: "Civic / ZR-V e:HEV", type: "HEV", seg: "Kompaktklasse / Kompakt-SUV", since: 2022, arch: "ca. 600 V", hybrid: EHEV, d: EH,
      variants: [{ name: "2.0 e:HEV", gross: 1.05, kw: 135, nm: 315, ice: "2.0 Direkteinspritzer (Atkinson), 105 kW" }] },
    { name: "Prelude e:HEV", type: "HEV", seg: "Sportcoupé", since: 2025, arch: "ca. 600 V", hybrid: EHEV, notes: "„S+ Shift“ simuliert Gangwechsel; Antrieb wie Civic e:HEV.", d: EH,
      variants: [{ name: "2.0 e:HEV", kw: 135, nm: 315, ice: "2.0 Direkteinspritzer (Atkinson), 105 kW" }] },
    { name: "CR-V e:HEV / e:PHEV", type: "PHEV", seg: "Mittelklasse-SUV", since: 2023, arch: "ca. 600 V", hybrid: EHEV + "; CR-V mit zweistufiger Direktkopplung (Low/High)", d: EH,
      variants: [
        { name: "2.0 e:HEV AWD", type: "HEV", layout: "AWD", kw: 135, nm: 335, ice: "2.0 Direkteinspritzer (Atkinson), 109 kW" },
        { name: "2.0 e:PHEV", gross: 17.7, range: 82, kw: 135, nm: 335, ice: "2.0 Direkteinspritzer (Atkinson), 109 kW", ac: 6.8 }
      ] },
    { name: "0 SUV (Honda 0 Series)", type: "BEV", seg: "Mittelklasse-SUV", platform: "Honda 0 Architecture", since: 2027, status: "planned", arch: "400 V", notes: "Neue Elektro-Generation („Thin, Light, Wise“); Start zuerst in Nordamerika, Europa danach angekündigt.", variants: [] }
  ]
});

EVDB.brand({
  id: "mazda", name: "Mazda", country: "Japan", group: "Mazda Motor Corporation",
  warranty: { vehicle: "6 Jahre / 150.000 km", hv: "8 Jahre / 160.000 km (mind. 70 % Kapazität)", rust: "12 Jahre" },
  models: [
    { name: "Mazda6e", type: "BEV", seg: "Mittelklasse-Fließheck", platform: "Changan EPA1", since: 2025, arch: "400 V", notes: "Gemeinsam mit Changan entwickelt und in Nanjing gebaut (Basis Deepal L07). Die LFP-Version lädt deutlich schneller als die NMC-Long-Range.",
      d: { layout: "RWD", nm: 320, motor: "PSM", ac: 11 },
      variants: [
        { name: "68,8 kWh (LFP)", net: 68.8, chem: "LFP", range: 479, kw: 190, dc: 165, t: 24 },
        { name: "Long Range 80 kWh (NMC)", net: 80, chem: "NMC", range: 552, kw: 180, dc: 90, t: 47 }
      ] },
    { name: "CX-6e", type: "BEV", seg: "Mittelklasse-SUV", platform: "Changan EPA1", since: 2026, arch: "400 V", notes: "SUV-Ableger des Mazda6e (Basis Deepal S07), Europa-Start 2026.",
      variants: [{ name: "78 kWh (LFP)", net: 78, chem: "LFP", range: 484, layout: "RWD", kw: 190, nm: 290, motor: "PSM", ac: 11, dc: 195, t: 24 }] },
    { name: "CX-60 / CX-80 Plug-in-Hybrid", type: "PHEV", seg: "Mittelklasse-SUV / 7-Sitzer", platform: "Large Product Group (Längsmotor)", since: 2022, arch: "355 V",
      hybrid: "parallel (P2): E-Maschine zwischen Verbrenner und 8-Gang-Automatik (Lamellenkupplung statt Wandler), mechanischer Allrad",
      variants: [{ name: "e-Skyactiv PHEV AWD", gross: 17.8, v: 355, chem: "NMC", cellMaker: "Panasonic", range: 63, layout: "AWD", kw: 129, nm: 270, motor: "PSM", ice: "2.5 Vierzylinder-Sauger, 141 kW", sysKw: 241, gearbox: "8-Gang-Automatik", ac: 7.2 }] },
    { name: "MX-30 e-Skyactiv R-EV", type: "REEV", seg: "Kompakt-Crossover", since: 2023, arch: "355 V",
      hybrid: "seriell: Einscheiben-Wankelmotor (830 cm³, 55 kW) arbeitet ausschließlich als Generator",
      notes: "Auslaufmodell in Europa (Verfügbarkeit marktabhängig).",
      variants: [{ name: "R-EV", gross: 17.8, chem: "NMC", range: 85, layout: "FWD", kw: 125, nm: 260, motor: "PSM", ice: "Wankel-Einscheibenmotor 830 cm³, 55 kW (Generator)", ac: 11, dc: 36 }] },
    { name: "Mazda2 Hybrid", type: "HEV", seg: "Kleinwagen", platform: "Toyota GA-B", since: 2022, arch: "ca. 580 V (Batterie 177,6 V)", hybrid: "leistungsverzweigt (Power-Split, Toyota-Hybridsystem)", notes: "Baugleich mit Toyota Yaris Hybrid.",
      variants: [{ name: "1.5 Hybrid", gross: 0.76, v: 177.6, chem: "Li-Ion", layout: "FWD", kw: 59, motor: "PSM", ice: "1.5 Dreizylinder (Atkinson), 68 kW", sysKw: 85, gearbox: "e-CVT (Planetengetriebe)" }] }
  ]
});

const SUBD = { chem: "NMC", cellMaker: "Prime Planet Energy & Solutions", motor: "PSM", motorMaker: "BluE Nexus eAxle", ac: 11, dc: 150, t: 30 };
EVDB.brand({
  id: "subaru", name: "Subaru", country: "Japan", group: "Subaru Corporation (Toyota 20 %)",
  warranty: { vehicle: "5 Jahre / 160.000 km (DE; marktabhängig 3 Jahre)", hv: "8 Jahre / 160.000 km" },
  note: "Die e-Boxer-Modelle (118 V, 12 kW) zählen als Mildhybride und sind hier nicht aufgeführt.",
  models: [
    { name: "Solterra (Überarbeitung 2025)", type: "BEV", seg: "Mittelklasse-SUV", platform: "e-Subaru Global Platform (e-TNGA)", since: 2022, arch: "400 V", notes: "Technikbruder des Toyota bZ4X, permanenter Allrad mit zwei eAxles.", d: SUBD,
      variants: [{ name: "AWD (73,1 kWh)", gross: 73.1, v: 355, range: 500, layout: "AWD", kw: 252 }] },
    { name: "Uncharted", type: "BEV", seg: "Kompakt-SUV-Coupé", platform: "e-TNGA", since: 2026, arch: "400 V", notes: "Technikbruder des Toyota C-HR+.", d: SUBD,
      variants: [{ name: "FWD (77 kWh)", gross: 77, range: 585, layout: "FWD", kw: 165 }, { name: "AWD (77 kWh)", gross: 77, range: 525, layout: "AWD", kw: 252 }] },
    { name: "E-Outback (Trailseeker)", type: "BEV", seg: "Mittelklasse-Kombi-SUV", platform: "e-TNGA", since: 2026, arch: "400 V", notes: "Technikbruder des Toyota bZ4X Touring.", d: SUBD,
      variants: [{ name: "AWD (74,7 kWh)", gross: 74.7, range: 500, layout: "AWD", kw: 280 }] }
  ]
});

EVDB.brand({
  id: "suzuki", name: "Suzuki", country: "Japan", group: "Suzuki Motor Corporation",
  warranty: { vehicle: "3 Jahre / 100.000 km (bei Wartung im Netz verlängerbar)", hv: "8 Jahre / 160.000 km (e Vitara, mind. 70 %)" },
  models: [
    { name: "e Vitara", type: "BEV", seg: "Kleinwagen-SUV", platform: "Heartect-e", since: 2025, arch: "400 V", notes: "Erstes Elektroauto der Marke, gebaut in Gujarat (Indien). Allrad „Allgrip-e“ mit zweiter eAxle hinten.",
      d: { chem: "LFP", cellMaker: "FinDreams (BYD)", motor: "PSM", motorMaker: "BluE Nexus eAxle", ac: 11, dc: 70, t: 45 },
      variants: [
        { name: "49 kWh 2WD", gross: 49, range: 344, layout: "FWD", kw: 106, nm: 193 },
        { name: "61 kWh 2WD", gross: 61, range: 426, layout: "FWD", kw: 128, nm: 193 },
        { name: "61 kWh Allgrip-e", gross: 61, range: 395, layout: "AWD", kw: 135, nm: 307 }
      ] },
    { name: "Vitara / S-Cross 1.5 Hybrid (140 V)", type: "HEV", seg: "Kleinwagen-SUV", since: 2022, arch: "140 V",
      hybrid: "parallel: E-Maschine (MGU) am automatisierten 6-Gang-Schaltgetriebe (AGS), füllt die Zugkraftunterbrechung",
      variants: [{ name: "1.5 Dualjet Hybrid AGS", gross: 0.84, v: 140, chem: "Li-Ion", layout: "FWD", kw: 24, nm: 60, motor: "PSM", ice: "1.5 Vierzylinder-Sauger, 75 kW", sysKw: 85, gearbox: "6-Gang-AGS (automatisiert)" }] },
    { name: "Swace", type: "HEV", seg: "Kompaktklasse Kombi", platform: "Toyota GA-C", since: 2020, arch: "ca. 600 V", hybrid: "leistungsverzweigt (Power-Split, Toyota-Hybridsystem)", notes: "Baugleich mit Toyota Corolla Touring Sports 1.8 Hybrid.",
      variants: [{ name: "1.8 Hybrid", gross: 0.85, chem: "Li-Ion", layout: "FWD", kw: 70, motor: "PSM", ice: "1.8 Vierzylinder (Atkinson), 72 kW", sysKw: 103, gearbox: "e-CVT (Planetengetriebe)" }] },
    { name: "Across", type: "PHEV", seg: "Mittelklasse-SUV", platform: "Toyota GA-K", since: 2020, arch: "ca. 650 V", hybrid: "leistungsverzweigt (Power-Split) + E-Maschine an der Hinterachse (E-Four)", notes: "Baugleich mit Toyota RAV4 Plug-in-Hybrid (5. Generation).",
      variants: [{ name: "2.5 Plug-in-Hybrid E-Four", gross: 18.1, v: 355, chem: "Li-Ion", range: 75, layout: "AWD", kw: 134, motor: "PSM", ice: "2.5 Vierzylinder (Atkinson), 136 kW", sysKw: 225, gearbox: "e-CVT (Planetengetriebe)", ac: 6.6 }] }
  ]
});
})();
