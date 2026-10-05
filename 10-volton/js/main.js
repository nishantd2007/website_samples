/* Volton — interaction + Three.js car silhouette */
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

  // Configurator swatches
  document.querySelectorAll('.swatch').forEach((s) => {
    s.addEventListener('click', () => {
      document.querySelectorAll('.swatch').forEach((x) => x.classList.remove('active'));
      s.classList.add('active');
    });
  });

  // Build waveform bars dynamically
  const wf = document.querySelector('.waveform');
  if (wf && wf.children.length === 0) {
    const heights = [0.4, 0.6, 0.9, 1.0, 0.7, 0.5, 0.8, 1.0, 0.6, 0.3, 0.5, 0.8, 0.9, 0.7, 0.4, 0.6, 1.0, 0.8, 0.5, 0.3, 0.7, 0.9, 0.6, 0.4, 0.8, 1.0, 0.7, 0.5, 0.3, 0.6, 0.9, 0.7, 0.4, 0.8, 1.0, 0.6, 0.3, 0.5];
    heights.forEach((h, i) => {
      const b = document.createElement('div');
      b.className = 'waveform-bar';
      b.style.height = (h * 100) + '%';
      b.style.animationDelay = (i * 50) + 'ms';
      wf.appendChild(b);
    });
  }

  const form = document.querySelector('.reserve-compact form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Reserving<span class="arrow">→</span>';
      setTimeout(() => {
        btn.innerHTML = 'Allocation requested <span class="arrow">✓</span>';
        form.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 4500);
      }, 1100);
    });
  }

  /* ---------- Configurator ---------- */
  const tiles = document.querySelectorAll('.config-tile');
  if (tiles.length) {
    const BASE_PRICE = 1400000;
    const groupKeys = ['exterior', 'wheels', 'interior', 'voice', 'delivery', 'concierge'];
    const groupLabels = {
      exterior: 'Exterior',
      wheels: 'Wheels',
      interior: 'Interior',
      voice: 'Voice',
      delivery: 'Delivery',
      concierge: 'Concierge',
    };
    const fmt = (n) => n.toLocaleString('en-US', { maximumFractionDigits: 0 });

    const rowsContainer = document.getElementById('summary-rows');
    const totalFigure = document.getElementById('summary-total-figure');
    const totalEl = document.getElementById('summary-total');
    const changesTag = document.getElementById('summary-changes');

    const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));

    const updateSummary = () => {
      if (!rowsContainer) return;

      let total = BASE_PRICE;
      let addedItems = 0;

      const baseRow = `<div class="summary-row included">
        <span class="label">Volton One <small>Base · GT-99</small></span>
        <span class="figure">$${fmt(BASE_PRICE)}</span>
      </div>`;

      const groupRowsHtml = groupKeys.map((key) => {
        const grp = document.querySelector(`[data-group="${key}"]`);
        const selected = grp && grp.querySelector('.config-tile.selected');
        if (!selected) return '';
        const name = selected.dataset.name || '';
        const price = parseInt(selected.dataset.price, 10) || 0;
        total += price;
        const isAdd = price > 0;
        if (isAdd) addedItems++;
        return `<div class="summary-row ${isAdd ? 'add' : 'included'}">
          <span class="label">${groupLabels[key]} <small>${escapeHtml(name)}</small></span>
          <span class="figure">${isAdd ? '+$' + fmt(price) : 'Included'}</span>
        </div>`;
      }).join('');

      rowsContainer.innerHTML = baseRow + groupRowsHtml;
      if (totalFigure) totalFigure.textContent = '$' + fmt(total);
      if (totalEl) totalEl.classList.toggle('has-changes', addedItems > 0);
      if (changesTag) changesTag.textContent = addedItems > 0
        ? `+${addedItems} option${addedItems > 1 ? 's' : ''}`
        : 'Base spec';
    };

    tiles.forEach((tile) => {
      tile.addEventListener('click', (e) => {
        e.preventDefault();
        const groupEl = tile.closest('[data-group]');
        if (!groupEl) return;
        groupEl.querySelectorAll('.config-tile').forEach((t) => t.classList.remove('selected'));
        tile.classList.add('selected');
        updateSummary();
      });
    });

    updateSummary();
  }

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

/* ============================================
   Three.js — stylized car silhouette
   ============================================ */
(() => {
  const mount = document.getElementById('hero-canvas');
  if (!mount || !window.THREE) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const THREE = window.THREE;
  const w = mount.clientWidth || window.innerWidth;
  const h = mount.clientHeight || window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 1000);
  camera.position.set(0, 4, 22);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  mount.appendChild(renderer.domElement);

  // Build a stylized car silhouette using primitives
  const car = new THREE.Group();
  scene.add(car);

  // Materials
  const edgeMat = new THREE.LineBasicMaterial({
    color: 0x00B4FF,
    transparent: true,
    opacity: 0.9,
  });
  const wheelEdgeMat = new THREE.LineBasicMaterial({
    color: 0x00B4FF,
    transparent: true,
    opacity: 0.7,
  });

  // Helper: build a wireframe edge mesh from a geometry
  const makeEdges = (geo, mat) => {
    const edges = new THREE.EdgesGeometry(geo, 18);
    return new THREE.LineSegments(edges, mat || edgeMat);
  };

  // Lower body — long, low
  const bodyGeo = new THREE.BoxGeometry(8, 0.9, 2.4);
  bodyGeo.translate(0, 0.45, 0);
  const body = makeEdges(bodyGeo);
  car.add(body);

  // Mid-section / cockpit — narrower, sloped
  const cockpitGeo = new THREE.BoxGeometry(3.6, 0.9, 2.0);
  cockpitGeo.translate(0, 1.6, 0);
  // Skew via vertex manipulation for sloped roof
  const cockpitPos = cockpitGeo.attributes.position;
  for (let i = 0; i < cockpitPos.count; i++) {
    const x = cockpitPos.getX(i);
    const y = cockpitPos.getY(i);
    if (y > 1.5) {
      cockpitPos.setX(i, x * 0.7);
    }
  }
  cockpitPos.needsUpdate = true;
  const cockpit = makeEdges(cockpitGeo);
  car.add(cockpit);

  // Front hood detail
  const hoodGeo = new THREE.BoxGeometry(2.2, 0.6, 2.2);
  hoodGeo.translate(2.8, 0.95, 0);
  const hood = makeEdges(hoodGeo);
  car.add(hood);

  // Rear deck
  const rearGeo = new THREE.BoxGeometry(2.2, 0.55, 2.2);
  rearGeo.translate(-2.8, 0.92, 0);
  const rear = makeEdges(rearGeo);
  car.add(rear);

  // Wheels (4)
  const wheelGeo = new THREE.CylinderGeometry(0.85, 0.85, 0.45, 28);
  wheelGeo.rotateX(Math.PI / 2);
  const wheelPositions = [
    [-2.8, -0.2, 1.05],
    [-2.8, -0.2, -1.05],
    [2.8, -0.2, 1.05],
    [2.8, -0.2, -1.05],
  ];
  wheelPositions.forEach((p) => {
    const wgeo = wheelGeo.clone();
    wgeo.translate(...p);
    car.add(makeEdges(wgeo, wheelEdgeMat));
  });

  // Underglow plane
  const glowGeo = new THREE.PlaneGeometry(14, 4);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x00B4FF,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.rotation.x = -Math.PI / 2;
  glow.position.y = -1.05;
  car.add(glow);

  // Floor reflection grid
  const gridGeo = new THREE.PlaneGeometry(40, 40, 24, 24);
  const gridMat = new THREE.MeshBasicMaterial({
    color: 0x00B4FF,
    wireframe: true,
    transparent: true,
    opacity: 0.08,
  });
  const grid = new THREE.Mesh(gridGeo, gridMat);
  grid.rotation.x = -Math.PI / 2;
  grid.position.y = -1.1;
  scene.add(grid);

  // Particle dust (sparse)
  const dustCount = 40;
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    dustPositions[i * 3]     = (Math.random() - 0.5) * 30;
    dustPositions[i * 3 + 1] = Math.random() * 6;
    dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  const dustMat = new THREE.PointsMaterial({
    color: 0x00B4FF,
    size: 0.05,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
  });
  const dust = new THREE.Points(dustGeo, dustMat);
  scene.add(dust);

  // Mouse parallax
  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  const resize = () => {
    const W = mount.clientWidth || window.innerWidth;
    const H = mount.clientHeight || window.innerHeight;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  };
  window.addEventListener('resize', resize);

  let t = 0;
  const animate = () => {
    t += 0.008;
    // Slow continuous rotation
    car.rotation.y += 0.0035;
    car.rotation.y += (mx * 0.6 - (car.rotation.y % (Math.PI * 2)) * 0) * 0;
    // Subtle nodding from mouse
    car.position.y = Math.sin(t * 0.6) * 0.08;

    // Camera arc
    camera.position.x = mx * 1.5;
    camera.position.y = 4 + my * 0.5;
    camera.lookAt(0, 0.4, 0);

    // Drift dust
    const pos = dustGeo.attributes.position.array;
    for (let i = 0; i < dustCount; i++) {
      pos[i * 3]     += 0.01;
      if (pos[i * 3] > 15) pos[i * 3] = -15;
    }
    dustGeo.attributes.position.needsUpdate = true;

    // Glow pulse
    glow.material.opacity = 0.3 + Math.sin(t * 0.8) * 0.08;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
})();
