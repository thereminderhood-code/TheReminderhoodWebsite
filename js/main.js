/* =========================================================
   The ReminderHood — site behaviour
   Loaded on every page (after bits.js). Each feature checks
   that its elements exist, so one file serves all pages.
   ========================================================= */
(() => {
  "use strict";

  /* ---------- Settings: fill these in to switch the links on ---------- */
  const SOCIAL = {
    youtube: "",   // e.g. "https://www.youtube.com/@thereminderhood"
    instagram: ""  // e.g. "https://www.instagram.com/thereminderhood"
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const icon = (id) => `<svg aria-hidden="true"><use href="assets/icons.svg#${id}"/></svg>`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Header: compact on scroll + mobile menu ---------- */
  function initHeader() {
    const header = $(".site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const btn = $(".menu-btn", header);
    if (!btn) return;
    const setOpen = (open) => {
      header.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", String(open));
      btn.innerHTML = icon(open ? "i-close" : "i-menu") + `<span class="sr-only">${open ? "Close" : "Open"} menu</span>`;
    };
    btn.addEventListener("click", () => setOpen(!header.classList.contains("menu-open")));
    document.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));
    document.addEventListener("click", (e) => { if (!header.contains(e.target)) setOpen(false); });
  }

  /* ---------- Social links: show only the ones that are set ---------- */
  function initSocial() {
    $$("[data-social]").forEach((a) => {
      const url = SOCIAL[a.dataset.social];
      if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
      else a.hidden = true;
    });
    // If no links are set yet, hide the whole "Follow" block rather than leave it empty
    const anySet = Object.values(SOCIAL).some(Boolean);
    $$("[data-social-block]").forEach((el) => { el.hidden = !anySet; });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const items = $$(".reveal");
    if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-in");
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach((el) => io.observe(el));
  }

  /* ---------- Bit of the day (home) ---------- */
  // Everyone sees the same bit on the same day; arrows browse the rest.
  function initBitOfDay() {
    const box = $("#bitOfDay");
    const bits = window.RH_BITS;
    if (!box || !bits || !bits.length) return;
    const dayNumber = Math.floor(Date.now() / 86400000);
    let i = dayNumber % bits.length;

    const render = () => {
      const b = bits[i];
      box.innerHTML = `
        ${b.ar ? `<p class="ar" lang="ar">${esc(b.ar)}</p>` : ""}
        <blockquote>“${esc(b.text)}”</blockquote>
        <p class="ref">${esc(b.ref)}</p>
        <p class="apply"><strong>Today's action:</strong> ${esc(b.apply)}</p>`;
      box.classList.remove("fade-swap");
      void box.offsetWidth; // restart the animation
      box.classList.add("fade-swap");
      const title = $("#bitTitle");
      if (title) title.textContent = b.title;
    };
    $("#bitPrev")?.addEventListener("click", () => { i = (i - 1 + bits.length) % bits.length; render(); });
    $("#bitNext")?.addEventListener("click", () => { i = (i + 1) % bits.length; render(); });
    render();
  }

  /* ---------- Bit library + filters (learn) ---------- */
  function initLibrary() {
    const list = $("#bitLibrary");
    const bits = window.RH_BITS;
    const tracks = window.RH_TRACKS || {};
    if (!list || !bits) return;

    list.innerHTML = bits.map((b) => `
      <article class="bit glass reveal" data-track="${b.track}" id="${b.id}">
        <header>
          <span class="chip">${esc(tracks[b.track] || b.track)}</span>
          <span class="chip">${b.kind === "hadith" ? "Hadith" : "Ayah"}</span>
        </header>
        <h3>${esc(b.title)}</h3>
        ${b.ar ? `<p class="ar" lang="ar">${esc(b.ar)}</p>` : ""}
        <blockquote>“${esc(b.text)}”</blockquote>
        <p class="ref">${esc(b.ref)}</p>
        <details>
          <summary>Reflect &amp; apply</summary>
          <dl>
            <dt>Reflect</dt><dd>${esc(b.reflect)}</dd>
            <dt>Apply</dt><dd>${esc(b.apply)}</dd>
          </dl>
        </details>
      </article>`).join("");

    const buttons = $$(".filter");
    const apply = (track) => {
      buttons.forEach((btn) => btn.setAttribute("aria-pressed", String(btn.dataset.filter === track)));
      $$(".bit", list).forEach((card) => { card.hidden = track !== "all" && card.dataset.track !== track; });
    };
    buttons.forEach((btn) => btn.addEventListener("click", () => {
      apply(btn.dataset.filter);
      history.replaceState(null, "", btn.dataset.filter === "all" ? location.pathname : `#${btn.dataset.filter}`);
    }));

    // Deep links from the home page track cards: learn#faith, learn#growth …
    const fromHash = location.hash.slice(1);
    apply(tracks[fromHash] ? fromHash : "all");
    if (tracks[fromHash]) $("#library")?.scrollIntoView();
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    $$("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initSocial();
    initBitOfDay();
    initLibrary();   // before reveal, so the new cards animate in too
    initReveal();
    initYear();
  });
})();
