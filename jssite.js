// script.js - interactions for landing
document.addEventListener('DOMContentLoaded', () => {
  // click on brand dots
  document.querySelectorAll('.brand-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      const name = dot.dataset.name || dot.textContent.trim();
      alert(name + ' — Marca selecionada (exemplo).');
    });
  });

  // subtle parallax on scroll for center stage
  const stage = document.getElementById('centerStage');
  window.addEventListener('scroll', () => {
    if (!stage) return;
    const y = window.scrollY / 10;
    stage.style.transform = `translate(-50%, ${y}px)`;
  });

  // smooth reveal for sections
  const sections = document.querySelectorAll('.section');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inview');
      }
    });
  }, {threshold: 0.12});
  sections.forEach(s => io.observe(s));
});