(function () {
  "use strict";
  const DB = window.EVDB;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const TYPES = { BEV: "Batterieelektrisch", PHEV: "Plug-in-Hybrid", HEV: "Vollhybrid", REEV: "Range Extender", FCEV: "Brennstoffzelle" };
  const LAYOUT = { AWD: "Allradantrieb", FWD: "Vorderachsantrieb", RWD: "Hinterachsantrieb" };
  const MOTOR = {
    PSM: "PSM (permanenterregte Synchronmaschine)",
    ASM: "ASM (Asynchronmaschine)",
    EESM: "FSM/EESM (fremderregte Synchronmaschine)"
  };

  // [Schlüssel, Bezeichnung, Einheit]
  const SECTIONS = [
    ["Batterie & Reichweite", [
      ["net", "Kapazität netto", "kWh"], ["gross", "Kapazität brutto", "kWh"], ["v", "Nennspannung Batterie", "V"],
      ["chem", "Zellchemie"], ["cellMaker", "Zell-/Batteriehersteller"], ["pack", "Batterieaufbau"],
      ["range", "Elektrische Reichweite", "km"], ["cons", "Verbrauch", "kWh/100 km"]]],
    ["Antrieb", [
      ["layout", "Antriebsart"], ["kw", "Max. Leistung E-Antrieb", "kW"], ["kwCont", "Dauerleistung (30 min)", "kW"],
      ["nm", "Max. Drehmoment", "Nm"], ["rpm", "Max. Drehzahl E-Maschine", "1/min"], ["ratio", "Übersetzung"],
      ["motor", "Maschinentyp"], ["motorMaker", "Motorhersteller / Typ"]]],
    ["Hybridsystem", [
      ["ice", "Verbrennungsmotor / Brennstoffzelle"], ["sysKw", "Systemleistung", "kW"], ["gearbox", "Getriebe"]]],
    ["Laden", [
      ["ac", "AC-Ladeleistung", "kW"], ["dc", "DC-Ladeleistung max.", "kW"], ["port", "Ladeanschluss"], ["t", "DC 10–80 %", "min"]]]
  ];

  const state = { q: "", types: new Set(), status: "", volt: "", drive: "", sort: { k: "brand", dir: 1 } };

  // ---------- Datenaufbereitung ----------
  function prepare() {
    DB.brands.sort((a, b) => a.name.localeCompare(b.name, "de"));
    for (const b of DB.brands) {
      b.status = b.status || "available";
      for (const m of b.models) {
        m.status = m.status || b.status;
        m.vs = (m.variants || []).map(v => {
          const r = Object.assign({}, m.d, v);
          if (!r.port) r.port = r.dc ? "CCS2 (Combo 2, inkl. Typ 2)" : r.ac ? "Typ 2" : undefined;
          return r;
        });
        // Varianten dürfen einen eigenen Typ tragen (z. B. HEV neben PHEV im selben Modell)
        m.vs.forEach(v => v.type = v.type || m.type);
        m.types = [...new Set([m.type, ...m.vs.map(v => v.type)])];
        // Nur Angaben, die mit einer Zahl beginnen, werden klassifiziert ("ca. 650 V" bei Hybriden bleibt ohne Klasse)
        const volts = parseInt(m.arch, 10);
        m.voltClass = !volts ? "" : volts >= 700 ? "800" : volts >= 300 ? "400" : "";
        m.hay = [b.name, b.group, m.name, ...m.types, ...m.types.map(t => TYPES[t]), m.platform, m.seg, m.arch, m.hybrid, m.notes,
          ...m.vs.flatMap(v => [v.name, v.chem, v.cellMaker, v.motor, v.motorMaker, v.ice, v.gearbox])]
          .filter(Boolean).join(" ").toLowerCase();
      }
    }
  }

  // Typ- und Antriebsfilter wirken je Variante; ein Modell erscheint, wenn mindestens eine Variante passt
  const variantOk = v => (!state.types.size || state.types.has(v.type)) && (!state.drive || v.layout === state.drive);
  const shownVs = m => m.vs.filter(variantOk);

  function matches(m) {
    if (state.types.size && !m.types.some(t => state.types.has(t))) return false;
    if (state.drive && !shownVs(m).length) return false;
    if (state.status && m.status !== state.status) return false;
    if (state.volt && m.voltClass !== state.volt) return false;
    if (state.q) for (const w of state.q.toLowerCase().split(/\s+/)) if (w && !m.hay.includes(w)) return false;
    return true;
  }
  const filtering = () => state.types.size || state.status || state.volt || state.drive || state.q;

  // ---------- Formatierung ----------
  function fmt(key, val, unit) {
    if (val === undefined || val === null || val === "") return null;
    if (key === "layout") return LAYOUT[val] || val;
    if (key === "motor") return String(val).split(/\s*\+\s*/).map(x => MOTOR[x] || x).join(" + ");
    const s = typeof val === "number" ? val.toLocaleString("de-DE") : val;
    return unit ? s + " " + unit : s;
  }
  function span(vs, key, unit) {
    const n = vs.map(v => v[key]).filter(x => typeof x === "number");
    if (!n.length) return "";
    const lo = Math.min(...n), hi = Math.max(...n);
    return (lo === hi ? lo.toLocaleString("de-DE") : lo.toLocaleString("de-DE") + "–" + hi.toLocaleString("de-DE")) + " " + unit;
  }
  const typeBadge = t => `<span class="badge t-${t}" title="${TYPES[t] || t}">${t}</span>`;
  const planBadge = s => s === "planned" ? `<span class="badge t-plan">geplant</span>` : "";

  // ---------- Ansichten ----------
  function viewBrands() {
    const groups = new Map(); // Anfangsbuchstabe -> Karten (DB.brands ist bereits alphabetisch sortiert)
    for (const b of DB.brands) {
      const ms = b.models.filter(matches);
      if (!ms.length && (filtering() || b.models.length)) continue;
      const counts = {};
      ms.forEach(m => m.types.forEach(t => counts[t] = (counts[t] || 0) + 1));
      const letter = initial(b.name);
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter).push(`<a class="bcard" href="#h-${b.id}">
        <h3>${esc(b.name)}</h3>
        <div class="sub">${esc([b.country, b.group].filter(Boolean).join(" · "))}</div>
        <div class="badges">${Object.keys(TYPES).filter(t => counts[t]).map(t =>
          `<span class="badge t-${t}">${counts[t]} ${t}</span>`).join("")}${planBadge(b.status)}</div>
      </a>`);
    }
    const letters = [...groups.keys()];
    $("#app").innerHTML = letters.length
      ? `<nav class="az" aria-label="Sprung zum Anfangsbuchstaben">${letters.map(l => `<button type="button" data-l="${l}">${l}</button>`).join("")}</nav>` +
        letters.map(l => `<section class="letter" id="az-${l}"><h2>${l}</h2><div class="grid">${groups.get(l).join("")}</div></section>`).join("")
      : `<p class="muted">Keine Treffer für die aktuelle Filterung.</p>`;
    const az = $("#app .az");
    if (az) az.onclick = e => {
      const l = e.target.dataset.l;
      if (l) document.getElementById("az-" + l).scrollIntoView({ block: "start", behavior: "smooth" });
    };
  }
  // Anfangsbuchstabe ohne Akzente (Škoda -> S, smart -> S)
  const initial = name => name.normalize("NFD").replace(/[̀-ͯ]/g, "").charAt(0).toUpperCase();

  function specTable(m) {
    const vs = shownVs(m);
    if (!vs.length) return "";
    let h = `<div class="scroll"><table class="spec"><thead><tr><th></th>${vs.map(v => `<th>${esc(v.name || m.name)}${m.types.length > 1 ? " " + typeBadge(v.type) : ""}</th>`).join("")}</tr></thead><tbody>`;
    for (const [title, rows] of SECTIONS) {
      const used = rows.filter(([k]) => vs.some(v => v[k] !== undefined));
      if (title === "Hybridsystem" && !used.length) continue;
      h += `<tr><th class="sec" colspan="${vs.length + 1}">${title}</th></tr>`;
      for (const [k, label, unit] of rows) {
        if (title === "Hybridsystem" && !used.some(u => u[0] === k)) continue;
        h += `<tr><td>${label}</td>${vs.map(v => {
          const f = fmt(k, v[k], unit);
          return f === null ? `<td class="na">k. A.</td>` : `<td>${esc(f)}</td>`;
        }).join("")}</tr>`;
      }
    }
    return h + "</tbody></table></div>";
  }

  function modelCard(m, open) {
    const vs = shownVs(m);
    const key = [span(vs, "net", "kWh"), span(vs, "range", "km"), span(vs, "kw", "kW"), m.arch].filter(Boolean).join(" · ");
    const meta = [["Fahrzeugklasse", m.seg], ["Plattform", m.platform], ["Systemspannung / Architektur", m.arch],
      ["Hybridsystem", m.hybrid], ["Marktstart", m.since]].filter(x => x[1]);
    return `<details class="model" id="m-${esc(m.name)}" ${open ? "open" : ""}>
      <summary><span class="mname">${esc(m.name)}</span>${m.types.map(typeBadge).join("")}${planBadge(m.status)}<span class="mkey">${esc(key)}</span></summary>
      <div class="mbody">
        <dl class="kv">${meta.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>
        ${m.notes ? `<p class="note">${esc(m.notes)}</p>` : ""}
        ${specTable(m)}
      </div></details>`;
  }

  function viewBrand(id, openModel) {
    const b = DB.brands.find(x => x.id === id);
    if (!b) return viewBrands();
    const ms = b.models.filter(matches);
    const w = b.warranty || {};
    const wr = [["Fahrzeug (allgemein)", w.vehicle], ["HV-Batterie", w.hv], ["Antrieb / HV-Komponenten", w.drive],
      ["Durchrostung", w.rust], ["Hinweis", w.note]].filter(x => x[1]);
    $("#app").innerHTML = `<a class="back" href="#start">← alle Hersteller</a>
      <h1>${esc(b.name)} ${planBadge(b.status)}</h1>
      <p class="muted">${esc([b.country, b.group].filter(Boolean).join(" · "))}</p>
      ${b.note ? `<p>${esc(b.note)}</p>` : ""}
      <h2>Garantie</h2>
      <div class="panel">${wr.length ? `<dl class="kv">${wr.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v)}</dd>`).join("")}</dl>` : `<span class="muted">k. A.</span>`}</div>
      <h2>Modelle (${ms.length}${ms.length !== b.models.length ? " von " + b.models.length : ""})</h2>
      ${ms.map(m => modelCard(m, m.name === openModel || ms.length === 1)).join("") || `<p class="muted">Keine Modelle für die aktuelle Filterung.</p>`}`;
    if (openModel) { const el = document.getElementById("m-" + openModel); if (el) el.scrollIntoView({ block: "start" }); }
  }

  const COLS = [
    ["brand", "Hersteller"], ["model", "Modell"], ["name", "Variante"], ["type", "Typ"], ["arch", "Architektur"],
    ["net", "kWh netto", 1], ["v", "V", 1], ["chem", "Zellchemie"], ["range", "km", 1], ["kw", "kW", 1], ["nm", "Nm", 1],
    ["layout", "Antrieb"], ["motor", "Maschine"], ["ac", "AC kW", 1], ["dc", "DC kW", 1]
  ];
  function rows() {
    const out = [];
    for (const b of DB.brands) for (const m of b.models) if (matches(m))
      for (const v of shownVs(m))
        out.push(Object.assign({}, v, { brand: b.name, bid: b.id, model: m.name, arch: m.arch }));
    const { k, dir } = state.sort;
    return out.sort((a, b) => {
      const x = a[k], y = b[k];
      if (x === undefined) return y === undefined ? 0 : 1;
      if (y === undefined) return -1;
      return (typeof x === "number" && typeof y === "number" ? x - y : String(x).localeCompare(String(y), "de")) * dir;
    });
  }
  function viewTable() {
    const rs = rows();
    $("#app").innerHTML = `<div class="tablebar"><span class="muted">${rs.length} Varianten · Klick auf Spaltenkopf sortiert, Klick auf Zeile öffnet das Modell</span>
      <button id="csv">CSV exportieren</button></div>
      <div class="scroll"><table class="all"><thead><tr>${COLS.map(([k, l]) =>
        `<th data-k="${k}" class="${state.sort.k === k ? "sorted" : ""}">${l}${state.sort.k === k ? (state.sort.dir > 0 ? " ▲" : " ▼") : ""}</th>`).join("")}</tr></thead>
      <tbody>${rs.map(r => `<tr data-b="${r.bid}" data-m="${esc(r.model)}">${COLS.map(([k, , num]) =>
        `<td class="${num ? "num" : ""}">${k === "type" ? typeBadge(r.type) : k === "layout" && LAYOUT[r[k]] ? LAYOUT[r[k]] : esc(r[k] === undefined ? "–" : typeof r[k] === "number" ? r[k].toLocaleString("de-DE") : r[k])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    $("#app thead").onclick = e => {
      const k = e.target.dataset.k; if (!k) return;
      state.sort = { k, dir: state.sort.k === k ? -state.sort.dir : 1 }; viewTable();
    };
    $("#app tbody").onclick = e => { const tr = e.target.closest("tr"); if (tr) { pendingModel = tr.dataset.m; location.hash = "h-" + tr.dataset.b; } };
    $("#csv").onclick = () => exportCsv(rs);
  }

  function exportCsv(rs) {
    const keys = ["brand", "model", "name", "type", "arch", ...SECTIONS.flatMap(s => s[1].map(r => r[0]))];
    const cell = x => x === undefined ? "" : typeof x === "number" ? String(x).replace(".", ",") : '"' + String(x).replace(/"/g, '""') + '"';
    const csv = "﻿" + keys.join(";") + "\r\n" + rs.map(r => keys.map(k => cell(r[k])).join(";")).join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    a.download = "hv-datenbank-" + DB.meta.updated + ".csv";
    a.click();
    // In der Online-Ansicht sind Downloads gesperrt, deshalb zusätzlich in die Zwischenablage
    const btn = $("#csv");
    const done = t => { btn.textContent = t; setTimeout(() => btn.textContent = "CSV exportieren", 2500); };
    try { navigator.clipboard.writeText(csv).then(() => done("CSV auch in Zwischenablage kopiert"), () => {}); } catch (e) { /* nur Download */ }
  }

  // ---------- Routing & Start ----------
  // Adressen: #start, #tabelle, #h-<marken-id> (nur einfache Anker, damit Links auch online funktionieren)
  let pendingModel = null;
  function route() {
    const h = location.hash.slice(1);
    $("#navTable").classList.toggle("on", h === "tabelle");
    $("#navBrands").classList.toggle("on", h !== "tabelle");
    if (h === "tabelle") viewTable();
    else if (h.startsWith("h-")) viewBrand(h.slice(2), pendingModel);
    else viewBrands();
    pendingModel = null;
  }

  function init() {
    prepare();
    const nm = DB.brands.reduce((n, b) => n + b.models.length, 0);
    const nv = DB.brands.reduce((n, b) => n + b.models.reduce((k, m) => k + m.vs.length, 0), 0);
    $("#stats").textContent = `${DB.brands.length} Marken · ${nm} Modelle · ${nv} Varianten · Datenstand ${DB.meta.updated.split("-").reverse().join(".")}`;
    $("#metaNote").textContent = DB.meta.note || "";
    $("#typeChips").innerHTML = Object.keys(TYPES).map(t => `<span class="chip" data-t="${t}" title="${TYPES[t]}">${t}</span>`).join("");
    $("#typeChips").onclick = e => {
      const t = e.target.dataset.t; if (!t) return;
      state.types.has(t) ? state.types.delete(t) : state.types.add(t);
      e.target.classList.toggle("on"); route();
    };
    $("#q").oninput = e => { state.q = e.target.value.trim(); route(); };
    $("#fStatus").onchange = e => { state.status = e.target.value; route(); };
    $("#fVolt").onchange = e => { state.volt = e.target.value; route(); };
    $("#fDrive").onchange = e => { state.drive = e.target.value; route(); };
    window.addEventListener("hashchange", () => { route(); window.scrollTo(0, 0); });
    route();
  }

  // Datendateien nacheinander laden (funktioniert auch per Doppelklick ohne Webserver)
  let i = 0;
  (function next() {
    if (i >= DB.files.length) return init();
    const s = document.createElement("script");
    s.src = "data/" + DB.files[i++];
    s.onload = next;
    s.onerror = () => { console.error("Datendatei fehlt oder fehlerhaft: " + s.src); next(); };
    document.head.appendChild(s);
  })();
})();
