/* Maison Vega — interaction layer */
(() => {
  const nav = document.querySelector('.nav');
  const setScrolled = () => nav && nav.classList.toggle('scrolled', window.scrollY > 20);
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  // Reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Custom luxe cursor (desktop)
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ring = document.createElement('div');
    ring.className = 'cursor';
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(ring);
    document.body.appendChild(dot);
    let x = -100, y = -100, tx = -100, ty = -100;
    window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
    const tick = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      ring.style.left = x + 'px';
      ring.style.top = y + 'px';
      dot.style.left = tx + 'px';
      dot.style.top = ty + 'px';
      requestAnimationFrame(tick);
    };
    tick();
    document.querySelectorAll('a, button, .look, .craft').forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('hover'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
  }

  // Form
  const form = document.querySelector('.appointment form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Sending<span class="arrow">…</span>';
      setTimeout(() => {
        btn.innerHTML = 'Received with thanks <span class="arrow">✓</span>';
        form.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 4500);
      }, 1100);
    });
  }

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
