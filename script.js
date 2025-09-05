/* ==============================
   LewisCloud Innovations - script.js
   Progressive enhancement for smooth scrolling, animations,
   and an optional mobile menu toggle (if present in the DOM).
   ============================== */

document.addEventListener("DOMContentLoaded", () => {
  // Smooth-scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", targetId);
      }
    });
  });

  // Optional: Mobile menu toggle (expects #menuToggle and #mobileMenu in the HTML)
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
    });
  }

  // Subtle fade-in animation for sections as they enter the viewport
  const sections = document.querySelectorAll("section");
  if ("IntersectionObserver" in window && sections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(sec => {
      sec.classList.add("pre-reveal");
      io.observe(sec);
    });
  }

  // Back-to-top button (auto-creates if not present)
  let backTop = document.getElementById("backToTop");
  if (!backTop) {
    backTop = document.createElement("button");
    backTop.id = "backToTop";
    backTop.textContent = "↑";
    Object.assign(backTop.style, {
      position: "fixed",
      right: "1rem",
      bottom: "1.25rem",
      padding: "0.6rem 0.8rem",
      borderRadius: "999px",
      border: "none",
      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
      cursor: "pointer",
      display: "none",
      zIndex: "999",
    });
    document.body.appendChild(backTop);
  }

  window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 400 ? "block" : "none";
  });

  backTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Lightweight page view ping (for debugging; replace with real analytics later)
  // eslint-disable-next-line no-console
  console.log("LewisCloud Innovations: page initialized.");
});
