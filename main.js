// ============================================================
//  Logica della pagina — i contenuti stanno in data.js
// ============================================================
const $ = (id) => document.getElementById(id);
const pad = (n) => String(n + 1).padStart(2, "0");

// ---------- Testi principali ----------
$("status").textContent = SITE.status;
$("bio").innerHTML = SITE.bio.map(p => `<p>${p}</p>`).join("");
const rows = (list) => list.map(r => `<li class="list__row"><span>${r.role}</span><span class="list__year">${r.year}</span></li>`).join("");
$("work").innerHTML = rows(SITE.work);
$("education").innerHTML = rows(SITE.education);
$("skills").innerHTML = SITE.skills.map(s => `<li>${s}</li>`).join("");
$("languages").innerHTML = SITE.languages.map(l => `<li class="list__row"><span>${l}</span></li>`).join("");
$("copy").textContent = `© ${new Date().getFullYear()} ${SITE.name}`;

// ---------- Contatti ----------
const arrow = `<svg class="contact-row__arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 12 12 4M6 4h6v6"/></svg>`;
const contacts = [
  { label: "Email", value: SITE.email, href: "mailto:" + SITE.email, thumb: "Email" },
  { label: "LinkedIn", value: SITE.linkedin.label, href: SITE.linkedin.url, thumb: "LinkedIn", ph: SITE.linkedin.url === "#" },
  { label: "CV", value: SITE.cv.label, href: SITE.cv.url, thumb: "CV", ph: SITE.cv.url === "#" },
];
$("contacts").innerHTML = contacts.map(c => `
  <a class="contact-row" href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>
    <span class="contact-row__thumb ph-box" aria-hidden="true"><span>${c.thumb}</span></span>
    <span class="eyebrow">${c.label}</span>
    <span class="contact-row__value${c.ph ? " ph" : ""}"${c.ph ? ' title="Segnaposto: link da completare"' : ""}>${c.value}</span>
    ${arrow}
  </a>`).join("");

// ---------- Decorazioni sparse ----------
const spots = [[6, 3, 54], [88, 5, 46], [3, 34, 40], [93, 30, 52], [12, 70, 36], [84, 64, 44]];
$("decor").innerHTML = spots.map(([x, y, w], i) =>
  `<img src="${DECOR[(i + 1) % DECOR.length]}" alt="" style="left:${x}%;top:${y}%;width:${w}px;animation-delay:${-i * 1.3}s">`).join("");

// ---------- Schede progetto ----------
$("lavori").innerHTML = PROJECTS.map((p, i) => `
  <a class="card" href="#${p.slug}" data-i="${i}">
    <div class="card__frame" style="aspect-ratio:${p.frame}">
      ${media(p.images[0], `class="card__thumb" loading="lazy" poster="${p.images.find(s => !/\.mp4$/i.test(s))}"`)}
      <span class="card__num">(${pad(i)})</span>
    </div>
    <div class="card__body">
      <header class="card__heading">
        <h2 class="card__title">${p.title}</h2>
        <span class="chip-tag">${p.chip}</span>
      </header>
      <p class="card__description">${p.oneliner}</p>
      <div class="card__meta"><div class="card__meta-inner">
        ${p.tags.map(t => `<span>${t}</span>`).join("")}<span>${p.year}</span>
      </div></div>
    </div>
  </a>`).join("");

// ---------- Pannello progetto ----------
const overlay = $("cs-overlay");
const content = $("cs-content");
let current = -1, lastFocus = null;

function openCase(i) {
  const p = PROJECTS[i];
  if (!p) return;
  current = i;
  $("cs-title").textContent = p.title;
  $("cs-oneliner").textContent = p.oneliner;
  const facts = [["Anno", p.year], ["Ruolo", p.role], ["Ambito", p.tags.join(" · ")]];
  if (p.course) facts.push(["Corso", p.course]);
  $("cs-facts").innerHTML = facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join("");
  $("cs-hero").innerHTML = media(p.images[0]);
  $("cs-overview").textContent = p.info;
  $("cs-contrib").innerHTML = p.contributions.map(c => `<li>${c}</li>`).join("");
  $("cs-gallery").innerHTML = p.images.slice(1).map(src => media(src, 'loading="lazy"')).join("");
  content.scrollTop = 0;
  document.title = `${p.title} — ${SITE.name}`;

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
  setTimeout(() => { $("cs-hero").innerHTML = ""; $("cs-gallery").innerHTML = ""; }, 400);
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
window.addEventListener("hashchange", fromHash);
fromHash();

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
