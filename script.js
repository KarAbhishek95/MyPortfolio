// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Header scrolled state
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Scroll-reveal for sections
const revealEls = document.querySelectorAll(".section, .timeline-card");
if ("IntersectionObserver" in window) {
  revealEls.forEach((el) => el.classList.add("reveal"));

  const revObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revObs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  revealEls.forEach((el) => revObs.observe(el));
}
// Animate skill bars when in view
const skillCards = document.querySelectorAll(".skill-card");
const barObs = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.querySelectorAll(".bar").forEach((b) => b.classList.add("animate"));
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
skillCards.forEach((c) => barObs.observe(c));

// Count-up for metrics.
// The real values live in the HTML (both data-target and the visible text) so
// search engines, link-preview bots, and no-JS visitors always see the true
// numbers. JS only adds the count-up animation on top.
const nums = document.querySelectorAll(".metric-num");
const finalText = (el) =>  (el.dataset.prefix || "") + el.dataset.target + (el.dataset.suffix || "");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !reduceMotion) {
  const animate = (el) => {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || "";
    const prefix = el.dataset.prefix || "";
    const start = performance.now(), dur = 1400;
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = finalText(el);
    };
    requestAnimationFrame(step);
  };
 const numObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { animate(e.target); numObs.unobserve(e.target); }
    });
  }, { threshold: 0.35 });
  nums.forEach((n) => {
    n.textContent = "0" + (n.dataset.suffix || ""); // start state for the count-up
    numObs.observe(n);                              // fires immediately if already in view
  });
} else {
  // No IntersectionObserver, or user prefers reduced motion: show real numbers, no animation.
  nums.forEach((n) => { n.textContent = finalText(n); });
}
// Typing effect on the headline
(function(){
  const el = document.getElementById("typed");
  if(!el) return;
  const phrases = ["from first principles to production.","with precision that ships.","by overruling the room with data.","from concept to production."];
  let pi=0, ci=0, deleting=false;
  const type=()=>{
    const word=phrases[pi];
    el.textContent = deleting ? word.slice(0,ci--) : word.slice(0,ci++);
    let delay = deleting ? 40 : 75;
    if(!deleting && ci===word.length+1){ delay=2200; deleting=true; ci=word.length; }
    else if(deleting && ci<0){ deleting=false; ci=0; pi=(pi+1)%phrases.length; delay=350; }
    setTimeout(type, delay);
  };
  // start after a short beat
  setTimeout(type, 500);
})();
