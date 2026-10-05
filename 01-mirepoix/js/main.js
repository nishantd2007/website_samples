/* Mirepoix & Co. — interaction layer */

(() => {
  // Nav scroll state
  const nav = document.querySelector('.nav');
  const setScrolled = () => {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 24);
  };
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  // Intersection-based reveal
  const reveals = document.querySelectorAll('.reveal, .split-line');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });
  reveals.forEach((el) => io.observe(el));

  // Soft parallax on hero image
  const heroImg = document.querySelector('.hero-image img');
  if (heroImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < 700) {
        heroImg.style.transform = `scale(${1.08 - y * 0.00015}) translateY(${y * 0.05}px)`;
      }
    }, { passive: true });
  }

  // Custom cursor (desktop only)
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
    let x = -100, y = -100, tx = -100, ty = -100;
    window.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
    const animate = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      dot.style.left = x + 'px';
      dot.style.top = y + 'px';
      requestAnimationFrame(animate);
    };
    animate();
    document.querySelectorAll('a, button, .dish, .menu-item').forEach((el) => {
      el.addEventListener('mouseenter', () => dot.classList.add('hover'));
      el.addEventListener('mouseleave', () => dot.classList.remove('hover'));
    });
  }

  // Form: friendly submit handler
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Sending<span class="arrow">…</span>';
      setTimeout(() => {
        btn.innerHTML = 'Thank you — we’ll be in touch<span class="arrow">✓</span>';
        form.reset();
        setTimeout(() => {
          btn.innerHTML = original;
          btn.disabled = false;
        }, 4000);
      }, 1200);
    });
  }

  // Set current year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
