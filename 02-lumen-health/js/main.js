/* Lumen Health — interaction layer */
(() => {
  const nav = document.querySelector('.nav');
  const setScrolled = () => nav && nav.classList.toggle('scrolled', window.scrollY > 20);
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Counter animation in hero stats
  const counters = document.querySelectorAll('[data-count]');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const dur = 1400;
        const start = performance.now();
        const step = (t) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const value = target * eased;
          el.textContent = (target % 1 === 0 ? Math.round(value) : value.toFixed(1)) + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        counterIO.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => counterIO.observe(c));

  // Friendly form submit
  const form = document.querySelector('.intake form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Sending<span class="arrow">…</span>';
      setTimeout(() => {
        btn.innerHTML = 'Thank you — we’ll reach out within a day<span class="arrow">✓</span>';
        form.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 4000);
      }, 1100);
    });
  }

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
