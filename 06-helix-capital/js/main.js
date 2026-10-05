/* Helix Capital — interaction + Three.js helix */
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

  // Animate hero portfolio value count-up
  const counter = document.querySelector('[data-count-up]');
  if (counter) {
    const target = parseFloat(counter.dataset.countUp);
    const prefix = counter.dataset.prefix || '';
    const decimals = parseInt(counter.dataset.decimals || '0');
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const dur = 2200;
        const start = performance.now();
        const fmt = (v) => prefix + v.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
        const step = (t) => {
          const p = Math.min((t - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          counter.textContent = fmt(target * eased);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        counterIO.unobserve(counter);
      });
    }, { threshold: 0.5 });
    counterIO.observe(counter);
  }

  const form = document.querySelector('.intake-form form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Submitting<span class="arrow">…</span>';
      setTimeout(() => {
        btn.innerHTML = 'Received. We\'ll be in touch within 24 hours <span class="arrow">✓</span>';
        form.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 4500);
      }, 1100);
    });
  }

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

/* ============================================
   Three.js — double helix
   ============================================ */
(() => {
  const mount = document.getElementById('hero-canvas');
  if (!mount || !window.THREE) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const THREE = window.THREE;
  const w = mount.clientWidth || 800;
  const h = mount.clientHeight || 700;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
  camera.position.z = 50;
  camera.position.x = 0;
  camera.position.y = 0;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  mount.appendChild(renderer.domElement);

  /* Two intertwined helices */
  const helixGroup = new THREE.Group();
  scene.add(helixGroup);

  const TURNS = 4;
  const POINTS_PER_TURN = 30;
  const TOTAL = TURNS * POINTS_PER_TURN;
  const RADIUS = 8;
  const HEIGHT = 40;

  const makeStrand = (color, phase) => {
    const positions = new Float32Array(TOTAL * 3);
    for (let i = 0; i < TOTAL; i++) {
      const t = i / TOTAL;
      const angle = t * Math.PI * 2 * TURNS + phase;
      positions[i * 3]     = Math.cos(angle) * RADIUS;
      positions[i * 3 + 1] = t * HEIGHT - HEIGHT / 2;
      positions[i * 3 + 2] = Math.sin(angle) * RADIUS;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color,
      size: 0.6,
      transparent: true,
      opacity: 0.95,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(geo, mat);
    return { points, geo, positions, mat };
  };

  const strandA = makeStrand(0x00C272, 0);
  const strandB = makeStrand(0xD4A862, Math.PI);
  helixGroup.add(strandA.points);
  helixGroup.add(strandB.points);

  /* Glow halos */
  const haloA = strandA.points.clone();
  const haloAMat = new THREE.PointsMaterial({
    color: 0x00C272, size: 2, transparent: true, opacity: 0.15,
    sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  haloA.material = haloAMat;
  helixGroup.add(haloA);

  const haloB = strandB.points.clone();
  const haloBMat = new THREE.PointsMaterial({
    color: 0xD4A862, size: 2, transparent: true, opacity: 0.12,
    sizeAttenuation: true, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  haloB.material = haloBMat;
  helixGroup.add(haloB);

  /* Connecting rungs */
  const rungCount = 32;
  const rungPositions = new Float32Array(rungCount * 6);
  const rungGeo = new THREE.BufferGeometry();
  rungGeo.setAttribute('position', new THREE.BufferAttribute(rungPositions, 3));
  const rungMat = new THREE.LineBasicMaterial({
    color: 0x00C272, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false,
  });
  const rungs = new THREE.LineSegments(rungGeo, rungMat);
  helixGroup.add(rungs);

  // Build rungs once
  for (let i = 0; i < rungCount; i++) {
    const t = i / rungCount;
    const y = t * HEIGHT - HEIGHT / 2;
    const angleA = t * Math.PI * 2 * TURNS;
    const angleB = angleA + Math.PI;
    const idx = i * 6;
    rungPositions[idx]     = Math.cos(angleA) * RADIUS;
    rungPositions[idx + 1] = y;
    rungPositions[idx + 2] = Math.sin(angleA) * RADIUS;
    rungPositions[idx + 3] = Math.cos(angleB) * RADIUS;
    rungPositions[idx + 4] = y;
    rungPositions[idx + 5] = Math.sin(angleB) * RADIUS;
  }
  rungGeo.attributes.position.needsUpdate = true;

  // Tilt
  helixGroup.rotation.z = 0.15;

  // Mouse parallax
  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  const resize = () => {
    const W = mount.clientWidth || 800;
    const H = mount.clientHeight || 700;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  };
  window.addEventListener('resize', resize);

  const animate = () => {
    helixGroup.rotation.y += 0.003;
    helixGroup.rotation.x += (my * 0.18 - helixGroup.rotation.x) * 0.04;
    camera.position.x += (mx * 3 - camera.position.x) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
})();
