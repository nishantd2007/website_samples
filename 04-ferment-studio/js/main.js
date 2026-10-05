/* Ferment Studio — interaction layer */
(() => {
  // Reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Custom cursor (desktop only)
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const c = document.createElement('div');
    c.className = 'cursor';
    document.body.appendChild(c);
    let x = -100, y = -100, tx = -100, ty = -100;
    window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
    const tick = () => {
      x += (tx - x) * 0.22; y += (ty - y) * 0.22;
      c.style.left = x + 'px'; c.style.top = y + 'px';
      requestAnimationFrame(tick);
    };
    tick();
    document.querySelectorAll('a, button, .work-card, .service-tag, .budget-pill, .member').forEach((el) => {
      el.addEventListener('mouseenter', () => c.classList.add('big'));
      el.addEventListener('mouseleave', () => c.classList.remove('big'));
    });
  }

  // Form
  const form = document.querySelector('.brief form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Sending<span class="arrow">…</span>';
      setTimeout(() => {
        btn.innerHTML = 'Brief landed. Reply in 48hrs.<span class="arrow">✓</span>';
        form.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 4500);
      }, 1000);
    });
  }

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
