/**
 * SolarAndina - Main JS
 * Navbar, animaciones de scroll, contadores, galería, FAQ
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initGallery();
  initLightbox();
  initRippleButtons();
  initYear();
  setupDynamicRevealObserver();
});

/* =====================================================
   Navbar scroll effect
   ===================================================== */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  const onScroll = () => {
    if (window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* =====================================================
   Mobile menu toggle
   ===================================================== */
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
    const iconEl = toggle.querySelector("svg");
    if (iconEl) {
      iconEl.innerHTML = isOpen
        ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
        : '<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>';
    }
  });

  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* =====================================================
   Reveal on scroll
   - Observer principal (elementos al cargar)
   - MutationObserver para captar elementos nuevos (innerHTML)
   ===================================================== */
let revealObserver = null;
const REVEAL_SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger";

function getRevealObserver() {
  if (revealObserver) return revealObserver;
  if (!("IntersectionObserver" in window)) return null;
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  return revealObserver;
}

function initScrollReveal() {
  const items = document.querySelectorAll(REVEAL_SELECTOR);
  const io = getRevealObserver();
  if (!items.length) return;
  if (!io) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  items.forEach((el) => io.observe(el));
}

/* Observa nuevos elementos .reveal agregados dinámicamente.
   Cuando un nodo aparece, lo añadimos al IntersectionObserver.
   También si tiene .stagger y entra en viewport, marcamos visible
   para activar los delays de hijos. */
function setupDynamicRevealObserver() {
  if (!("MutationObserver" in window)) return;
  const mo = new MutationObserver((mutations) => {
    const io = getRevealObserver();
    if (!io) return;
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return;
        if (node.matches && node.matches(REVEAL_SELECTOR)) {
          io.observe(node);
        }
        node.querySelectorAll && node.querySelectorAll(REVEAL_SELECTOR).forEach((child) => {
          io.observe(child);
        });
      });
    });
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

/* Función pública: util para invocar tras inyectar contenido */
window.refreshRevealAnimations = function () {
  initScrollReveal();
};

/* =====================================================
   Animated counters
   ===================================================== */
function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;
  const animate = (el) => {
    const target = parseFloat(el.dataset.value);
    const suffix = el.dataset.suffix || "";
    const duration = 1600;
    const start = performance.now();
    const isDecimal = !Number.isInteger(target);
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = (isDecimal ? val.toFixed(1) : Math.floor(val)) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
    };
    requestAnimationFrame(step);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animate);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  counters.forEach((c) => io.observe(c));
}

/* =====================================================
   Galería: filtros
   ===================================================== */
function initGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      const items = grid.querySelectorAll(".gallery-item");
      items.forEach((it) => {
        const itemCat = it.dataset.category;
        const show = cat === "all" || itemCat === cat;
        it.style.display = show ? "" : "none";
      });
    });
  });
}

/* =====================================================
   Lightbox
   ===================================================== */
function initLightbox() {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;
  const lightboxImg = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (!img) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  const close = () => {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  };
  closeBtn.addEventListener("click", close);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

/* =====================================================
   Ripple effect on primary buttons
   ===================================================== */
function initRippleButtons() {
  document.querySelectorAll(".btn-primary, .btn-secondary").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const rect = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "ripple";
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = e.clientX - rect.left - size / 2 + "px";
      ripple.style.top = e.clientY - rect.top - size / 2 + "px";
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/* =====================================================
   Footer year
   ===================================================== */
function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

/* =====================================================
   Smooth anchor scroll (offset navbar)
   ===================================================== */
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const href = link.getAttribute("href");
  if (href === "#" || href.length < 2) return;
  const target = document.querySelector(href);
  if (!target) return;
  e.preventDefault();
  const top = target.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: "smooth" });
});