/* Aurelian Estates — interaction */
(() => {
  const nav = document.querySelector('.nav');
  const setScrolled = () => nav && nav.classList.toggle('scrolled', window.scrollY > 20);
  setScrolled();
  window.addEventListener('scroll', setScrolled, { passive: true });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  // Hero parallax
  const heroImg = document.querySelector('.hero-image');
  if (heroImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < 900) heroImg.style.transform = `translateY(${y * 0.25}px)`;
    }, { passive: true });
  }

  // Property image parallax (subtle, on visible)
  const propImages = document.querySelectorAll('.property-image img, .listing-image img');
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', () => {
      const vh = window.innerHeight;
      propImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < vh && rect.bottom > 0) {
          const progress = (rect.top / vh - 0.5) * -1;
          img.style.transform = `scale(1.04) translateY(${progress * 14}px)`;
        }
      });
    }, { passive: true });
  }

  // Form
  const form = document.querySelector('.inquire form');
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
