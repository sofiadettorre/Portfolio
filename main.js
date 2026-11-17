// ============================================================
//  Logica della pagina — i contenuti stanno in data.js
// ============================================================
const $ = (id) => document.getElementById(id);
const pad = (n) => String(n + 1).padStart(2, "0");

// ---------- Lingua ----------
// Ordine: ?lang=en nell'URL → scelta salvata → italiano
const LANGS = ["it", "en"];
let lang = "it";
try {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  const saved = localStorage.getItem("lang");
  lang = LANGS.includes(fromUrl) ? fromUrl : LANGS.includes(saved) ? saved : "it";
} catch (e) { /* storage non disponibile: resta l'italiano */ }

// Restituisce il testo nella lingua corrente (o il valore così com'è se non è bilingue)
const t = (v) => (v && typeof v === "object" && "it" in v ? v[lang] : v);

// ---------- Illustrazioni pixel ----------
function pixelSvg(rows) {
  const w = rows[0].length, h = rows.length;
  let rects = "";
  rows.forEach((row, y) => {
    // unisce i pixel adiacenti di una riga in un solo rettangolo
    row.replace(/#+/g, (run, x) => { rects += `<rect x="${x}" y="${y}" width="${run.length}" height="1"/>`; return run; });
  });
  return `<svg viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges" style="--cols:${w}">${rects}</svg>`;
}
document.querySelectorAll("[data-pixel]").forEach(el => {
  el.innerHTML = pixelSvg(PIXEL_ART[el.dataset.pixel]);
});

// ---------- Foto sul nome ----------
const photoWrap = document.querySelector(".hero__photo");
const photo = $("hero-photo");
photo.addEventListener("load", () => photoWrap.classList.remove("is-missing"));
photo.addEventListener("error", () => photoWrap.classList.add("is-missing"));
photoWrap.classList.add("is-missing");
photo.src = PHOTO;

// ---------- Contatti ----------
// Sul sito online: se il PDF del CV non è stato caricato, la riga del CV non compare
let cvMissing = false;
if (location.protocol.startsWith("http")) {
  fetch(SITE.cv.url, { method: "HEAD" })
    .then(r => { if (!r.ok) { cvMissing = true; renderContacts(); } })
    .catch(() => {});
}

const arrow = `<svg class="contact-row__arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M6 4h6v6"/></svg>`;
function renderContacts() {
  const contacts = [
    { label: "Email", value: SITE.email, href: "mailto:" + SITE.email },
    { label: "LinkedIn", value: SITE.linkedin.label, href: SITE.linkedin.url },
    cvMissing ? null : { label: "CV", value: t(SITE.cv.label), href: SITE.cv.url },
  ].filter(Boolean);
  const external = (href) => /^https?:|\.pdf$/i.test(href);
  $("contacts").innerHTML = contacts.map(c => `
    <a class="contact-row" href="${c.href}" ${external(c.href) ? 'target="_blank" rel="noopener noreferrer"' : ""}>
      <span class="contact-row__star" aria-hidden="true">★</span>
      <span class="eyebrow">${c.label}</span>
      <span class="contact-row__value">${c.value}</span>
      ${arrow}
    </a>`).join("");
}

// ---------- Schede progetto ----------
// Proporzione della copertina: "16 / 9" → 1.78 (se manca, 4:3)
const coverRatio = (p) => {
  const [w, h] = String(p.cover || "4 / 3").split("/").map(Number);
  return w / h || 4 / 3;
};

// Numero di colonne in base alla larghezza dello schermo
const columnCount = () => (innerWidth >= 1024 ? 3 : innerWidth >= 720 ? 2 : 1);

// Divide i progetti, in ordine, in colonne di altezza il più possibile simile.
// Le colonne sono fisse: passare col mouse o caricare un'immagine non sposta più le schede.
function splitIntoColumns(items, cols) {
  const h = items.map(p => 1 / coverRatio(p) + 0.42);   // altezza stimata: immagine + testo
  let best = null;
  (function search(start, left, groups) {
    if (left === 1) {
      const all = [...groups, [start, items.length]];
      const max = Math.max(...all.map(([a, b]) => h.slice(a, b).reduce((s, x) => s + x, 0)));
      if (!best || max < best.max) best = { max, all };
      return;
    }
    for (let end = start + 1; end <= items.length - left + 1; end++) search(end, left - 1, [...groups, [start, end]]);
  })(0, Math.min(cols, items.length), []);
  return best.all;
}

function cardHtml(p, i) {
  const poster = p.images.find(s => !/\.mp4$/i.test(s));
  return `
    <a class="card" href="#${p.slug}">
      <div class="card__frame" style="aspect-ratio:${p.cover || "4 / 3"}">
        ${media(p.images[0], `class="card__thumb" loading="lazy" poster="${poster}"`)}
        <span class="card__num">(${pad(i)})</span>
      </div>
      <div class="card__body">
        <header class="card__heading">
          <h2 class="card__title">${p.title}</h2>
          <span class="chip-tag">${p.chip}</span>
        </header>
        <p class="card__description">${t(p.oneliner)}</p>
        <div class="card__meta"><div class="card__meta-inner">
          ${p.tags.map(tag => `<span>${tag}</span>`).join("")}<span>${p.year}</span>
        </div></div>
      </div>
    </a>`;
}

let gridCols = 0;
function renderProjects() {
  gridCols = columnCount();
  $("lavori").innerHTML = splitIntoColumns(PROJECTS, gridCols)
    .map(([a, b]) => `<div class="projects-col">${PROJECTS.slice(a, b).map((p, k) => cardHtml(p, a + k)).join("")}</div>`)
    .join("");
  // i video delle copertine girano solo quando sono visibili
  $("lavori").querySelectorAll("video").forEach(v => videoWatcher && videoWatcher.observe(v));
}

const videoWatcher = "IntersectionObserver" in window
  ? new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.play().catch(() => {}); else e.target.pause();
    }), { threshold: 0.2 })
  : null;

// Ridisegna la griglia solo quando cambia il numero di colonne
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { if (columnCount() !== gridCols) renderProjects(); }, 150);
});

// ---------- Rendering di tutti i testi nella lingua corrente ----------
const rows = (list) => list.map(r => `<li class="list__row"><span>${t(r.role)}</span><span class="list__year">${t(r.year)}</span></li>`).join("");

function render() {
  document.documentElement.lang = lang;
  document.querySelector('meta[name="description"]').content = t(UI.description);

  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(UI[el.dataset.i18n]); });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(UI[el.dataset.i18nAria])); });
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

  $("status").textContent = t(SITE.status);
  $("hero-greet").textContent = t(SITE.hero.greet);
  $("hero-text").textContent = t(SITE.hero.text);
  $("hero-cta").textContent = t(SITE.hero.cta);

  $("bio").innerHTML = t(SITE.bio).map(p => `<p>${p}</p>`).join("");
  $("work").innerHTML = rows(SITE.work);
  $("education").innerHTML = rows(SITE.education);
  $("skills").innerHTML = SITE.skills.map(s => `<li>${s}</li>`).join("");
  $("languages").innerHTML = t(SITE.languages).map(l => `<li class="list__row"><span>${l}</span></li>`).join("");
  $("copy").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;

  renderContacts();
  renderProjects();
  if (current >= 0) fillCase(current);
  else document.title = `${SITE.name} — Portfolio`;
}

function setLang(next) {
  if (next === lang || !LANGS.includes(next)) return;
  lang = next;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  // aggiorna ?lang= nell'URL, così il link condiviso apre la lingua giusta
  const url = new URL(location.href);
  url.searchParams.set("lang", lang);
  history.replaceState(null, "", url);
  render();
}
document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

// ---------- Pannello progetto ----------
const overlay = $("cs-overlay");
const content = $("cs-content");
let current = -1, lastFocus = null;

function fillCase(i) {
  const p = PROJECTS[i];
  $("cs-title").textContent = p.title;
  $("cs-oneliner").textContent = t(p.oneliner);
  const facts = [[UI.year, p.year], [UI.field, p.tags.join(" · ")]];
  if (p.course) facts.push([UI.course, t(p.course)]);
  $("cs-facts").innerHTML = facts.map(([k, v]) => `<div><dt>${t(k)}</dt><dd>${v}</dd></div>`).join("");
  $("cs-overview").textContent = t(p.info);
  $("cs-contrib").innerHTML = t(p.contributions).map(c => `<li>${c}</li>`).join("");
  document.title = `${p.title} — ${SITE.name}`;
}

function openCase(i) {
  const p = PROJECTS[i];
  if (!p) return;
  current = i;
  fillCase(i);
  $("cs-hero").innerHTML = media(p.images[0]);
  $("cs-gallery").innerHTML = p.images.slice(1).map(src => media(src, 'loading="lazy"')).join("");
  content.scrollTop = 0;

  if (!overlay.classList.contains("is-open")) {
    lastFocus = document.activeElement;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    $("cs-close").focus();
  }
}

function closeCase() {
  if (!overlay.classList.contains("is-open")) return;
  overlay.classList.remove("is-open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("is-locked");
  document.title = `${SITE.name} — Portfolio`;
  current = -1;
  if (location.hash) history.replaceState(null, "", location.pathname + location.search);
  setTimeout(() => { if (current < 0) { $("cs-hero").innerHTML = ""; $("cs-gallery").innerHTML = ""; } }, 400);
  if (lastFocus) lastFocus.focus();
}

const go = (step) => {
  const n = (current + step + PROJECTS.length) % PROJECTS.length;
  history.replaceState(null, "", "#" + PROJECTS[n].slug);
  openCase(n);
};

// Il pannello segue l'hash (#revera ecc.), così i link ai progetti sono condivisibili
function fromHash() {
  const slug = decodeURIComponent(location.hash.slice(1));
  const i = PROJECTS.findIndex(p => p.slug === slug);
  if (i >= 0) openCase(i); else closeCase();
}

$("cs-close").addEventListener("click", closeCase);
$("cs-prev").addEventListener("click", () => go(-1));
$("cs-next").addEventListener("click", () => go(1));
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeCase(); });
window.addEventListener("keydown", (e) => {
  if (current < 0) return;
  if (e.key === "Escape") closeCase();
  if (e.key === "ArrowRight") go(1);
  if (e.key === "ArrowLeft") go(-1);
});
window.addEventListener("hashchange", fromHash);

render();
fromHash();
