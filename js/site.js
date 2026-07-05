// Shared layout + page renderers. Each page sets data-page on <body>.
(function () {
  const page = document.body.dataset.page || "";

  // ── Header / nav ────────────────────────────────────────────────────
  const links = [
    ["index.html", "Home", "home"],
    ["projects.html", "Projects", "projects"],
    ["blog.html", "Blog", "blog"],
    ["gallery.html", "Gallery", "gallery"],
    ["cad.html", "CAD Files", "cad"],
    ["resume.html", "Resume", "resume"],
    ["contact.html", "Contact", "contact"],
  ];

  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="header-inner">
      <a class="brand" href="index.html">${SITE.name}<span class="brand-dot">.</span></a>
      <button class="nav-toggle" aria-label="Menu">☰</button>
      <nav class="site-nav">
        ${links.map(([href, label, key]) =>
          `<a href="${href}" class="${key === page ? "active" : ""}">${label}</a>`).join("")}
        <a href="${SITE.github}" target="_blank" rel="noopener" class="nav-github">GitHub ↗</a>
      </nav>
    </div>`;
  document.body.prepend(header);
  header.querySelector(".nav-toggle").addEventListener("click", () =>
    header.querySelector(".site-nav").classList.toggle("open"));

  // ── Footer ──────────────────────────────────────────────────────────
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  const social = [
    ["GitHub", SITE.github],
    ["LinkedIn", SITE.linkedin],
    ["YouTube", SITE.youtube],
    ["Instagram", SITE.instagram],
    ["Email", SITE.email ? "mailto:" + SITE.email : ""],
  ].filter(([, url]) => url);
  footer.innerHTML = `
    <div class="footer-inner">
      <span>© ${new Date().getFullYear()} ${SITE.name}</span>
      <span class="footer-links">${social.map(([label, url]) =>
        `<a href="${url}" target="_blank" rel="noopener">${label}</a>`).join("")}</span>
    </div>`;
  document.body.append(footer);

  document.title = document.title ? `${document.title} · ${SITE.name}` : SITE.name;
})();

// ── Helpers used by page scripts ──────────────────────────────────────
function fmtDate(d) {
  if (!d) return "";
  const [y, m, day] = d.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return day ? `${months[m - 1]} ${day}, ${y}` : `${months[m - 1]} ${y}`;
}

function projectCard(p) {
  const cover = p.cover
    ? `<img class="card-cover" src="${p.cover}" alt="${p.title}" loading="lazy">`
    : `<div class="card-cover card-cover-placeholder">⚙</div>`;
  return `
    <a class="card" href="project.html?id=${encodeURIComponent(p.id)}">
      ${cover}
      <div class="card-body">
        <div class="card-meta">${fmtDate(p.date)}${p.status ? ` · <span class="status">${p.status}</span>` : ""}</div>
        <h3>${p.title}</h3>
        <p>${p.summary || ""}</p>
        <div class="tag-row">${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </a>`;
}

function postCard(p) {
  return `
    <a class="post-row" href="post.html?id=${encodeURIComponent(p.id)}">
      <div>
        <h3>${p.title}</h3>
        <p>${p.summary || ""}</p>
        <div class="tag-row">${(p.tags || []).map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
      <span class="post-date">${fmtDate(p.date)}</span>
    </a>`;
}

function byDateDesc(a, b) { return (b.date || "").localeCompare(a.date || ""); }

function getParam(name) { return new URLSearchParams(location.search).get(name); }
