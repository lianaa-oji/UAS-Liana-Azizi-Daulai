/* =========================================================
   Inyirah Oleh-oleh — Interactions
   ========================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Navbar shrink on scroll ---- */
  var navbar = document.getElementById("mainNav");
  function handleNavScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll();

  /* ---- Back to top button ---- */
  var backToTop = document.getElementById("backToTop");
  function handleBackToTop() {
    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }
  window.addEventListener("scroll", handleBackToTop, { passive: true });
  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ---- Close mobile navbar after clicking a link ---- */
  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      var menu = document.getElementById("navMenu");
      if (menu.classList.contains("show") && window.jQuery) {
        window.jQuery(menu).collapse("hide");
      }
    });
  });

  /* ---- Scroll reveal (IntersectionObserver) ---- */
  var revealTargets = document.querySelectorAll("[data-aos]");

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: no IntersectionObserver support
    revealTargets.forEach(function (el) { el.classList.add("aos-in"); });
  }
})();