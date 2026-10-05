/* Nullspace — Three.js network + interaction layer */

(() => {
  /* ---------- Reveal ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* ---------- Terminal form submit ---------- */
  const form = document.querySelector('.terminal-form form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<span>executing<span class="t-cursor"></span></span>';
      setTimeout(() => {
        btn.innerHTML = '<span>✓ booked · check inbox</span>';
        form.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 4500);
      }, 1100);
    });
  }

  /* ---------- ⌘↵ keyboard shortcut ---------- */
  const termForm = document.querySelector('.terminal-form form');
  if (termForm) {
    termForm.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        termForm.requestSubmit ? termForm.requestSubmit() : termForm.dispatchEvent(new Event('submit', { cancelable: true }));
      }
    });
  }

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

/* ============================================
   Three.js — agent particle network
   ============================================ */
(() => {
  const mount = document.getElementById('hero-canvas');
  if (!mount || !window.THREE) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const THREE = window.THREE;
  const w = mount.clientWidth || window.innerWidth;
  const h = mount.clientHeight || 700;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 1000);
  camera.position.z = 70;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  mount.appendChild(renderer.domElement);

  /* --- Node cloud --- */
  const NODE_COUNT = 90;
  const positions = new Float32Array(NODE_COUNT * 3);
  const velocities = [];
  const range = 60;

  for (let i = 0; i < NODE_COUNT; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * range * 1.6;
    positions[i * 3 + 1] = (Math.random() - 0.5) * range;
    positions[i * 3 + 2] = (Math.random() - 0.5) * range;
    velocities.push({
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02,
      z: (Math.random() - 0.5) * 0.02,
    });
  }

  const nodeGeo = new THREE.BufferGeometry();
  nodeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const nodeMat = new THREE.PointsMaterial({
    color: 0x00f5a0,
    size: 0.8,
    transparent: true,
    opacity: 0.95,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const nodes = new THREE.Points(nodeGeo, nodeMat);
  scene.add(nodes);

  /* --- Glow halo --- */
  const haloMat = new THREE.PointsMaterial({
    color: 0x00d4ff,
    size: 2.2,
    transparent: true,
    opacity: 0.25,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const halo = new THREE.Points(nodeGeo, haloMat);
  scene.add(halo);

  /* --- Lines between near neighbours --- */
  const lineGeo = new THREE.BufferGeometry();
  const maxLines = 400;
  const linePositions = new Float32Array(maxLines * 2 * 3);
  const lineColors = new Float32Array(maxLines * 2 * 3);
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
  const lineMat = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  /* --- Mouse parallax --- */
  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* --- Resize --- */
  const resize = () => {
    const W = mount.clientWidth || window.innerWidth;
    const H = mount.clientHeight || 700;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  };
  window.addEventListener('resize', resize);

  /* --- Animate --- */
  let t = 0;
  const animate = () => {
    t += 0.003;
    const pos = nodeGeo.attributes.position.array;

    // Drift
    for (let i = 0; i < NODE_COUNT; i++) {
      pos[i * 3]     += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;
      // Bounce
      if (Math.abs(pos[i * 3])     > range) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > range * 0.7) velocities[i].y *= -1;
      if (Math.abs(pos[i * 3 + 2]) > range * 0.7) velocities[i].z *= -1;
    }
    nodeGeo.attributes.position.needsUpdate = true;

    // Build line segments
    let lineIdx = 0;
    const maxDist = 12;
    const maxDistSq = maxDist * maxDist;
    for (let i = 0; i < NODE_COUNT && lineIdx < maxLines; i++) {
      for (let j = i + 1; j < NODE_COUNT && lineIdx < maxLines; j++) {
        const dx = pos[i * 3]     - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dSq = dx * dx + dy * dy + dz * dz;
        if (dSq < maxDistSq) {
          const idx = lineIdx * 6;
          linePositions[idx]     = pos[i * 3];
          linePositions[idx + 1] = pos[i * 3 + 1];
          linePositions[idx + 2] = pos[i * 3 + 2];
          linePositions[idx + 3] = pos[j * 3];
          linePositions[idx + 4] = pos[j * 3 + 1];
          linePositions[idx + 5] = pos[j * 3 + 2];

          const alpha = 1 - dSq / maxDistSq;
          // green→cyan gradient
          lineColors[idx]     = 0;
          lineColors[idx + 1] = 0.96 * alpha;
          lineColors[idx + 2] = 0.6 * alpha;
          lineColors[idx + 3] = 0;
          lineColors[idx + 4] = 0.83 * alpha;
          lineColors[idx + 5] = 1 * alpha;
          lineIdx++;
        }
      }
    }
    // Zero remaining
    for (let k = lineIdx * 6; k < maxLines * 6; k++) linePositions[k] = 0;
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;

    // Rotate slowly + mouse parallax
    scene.rotation.y += 0.0007;
    scene.rotation.x = my * 0.15;
    camera.position.x += (mx * 4 - camera.position.x) * 0.05;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
})();
