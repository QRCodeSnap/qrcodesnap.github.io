// QRCodeSnap — modern site interactions

document.addEventListener("DOMContentLoaded", () => {
  // Reveal-on-scroll for sections / cards
  const revealEls = document.querySelectorAll(
    ".feature, .stat, .cta-inner, .hero-visual"
  );
  revealEls.forEach((el) => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  // Subtle parallax on hero visual
  const heroVisual = document.querySelector(".hero-visual");
  if (heroVisual && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("scroll", () => {
      const y = Math.min(window.scrollY, 600);
      heroVisual.style.transform = `translateY(${y * 0.06}px)`;
    }, { passive: true });
  }
});
