/* Helion Protocol — interaction + Three.js holographic network */
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

  // Count-up
  const counters = document.querySelectorAll('[data-count]');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const decimals = parseInt(el.dataset.decimals || '0');
      const dur = 1800;
      const start = performance.now();
      const fmt = (v) => v.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      const step = (t) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => counterIO.observe(c));

  const form = document.querySelector('.apply form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Sending<span class="arrow">→</span>';
      setTimeout(() => {
        btn.innerHTML = 'Application received <span class="arrow">✓</span>';
        form.reset();
        setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 4500);
      }, 1100);
    });
  }

  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

/* ============================================
   Three.js — holographic node network
   ============================================ */
(() => {
  const mount = document.getElementById('hero-canvas');
  if (!mount || !window.THREE) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const THREE = window.THREE;
  const w = mount.clientWidth || window.innerWidth;
  const h = mount.clientHeight || 800;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, w / h, 0.1, 1000);
  camera.position.z = 45;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  mount.appendChild(renderer.domElement);

  // Central hub
  const hubGeo = new THREE.IcosahedronGeometry(2.4, 1);
  const hubEdges = new THREE.EdgesGeometry(hubGeo);
  const hubMat = new THREE.LineBasicMaterial({
    color: 0xFF38B4,
    transparent: true,
    opacity: 0.9,
  });
  const hub = new THREE.LineSegments(hubEdges, hubMat);
  scene.add(hub);

  // Inner glow sphere
  const glowGeo = new THREE.SphereGeometry(2.5, 24, 24);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0xFF38B4,
    transparent: true,
    opacity: 0.18,
  });
  const hubGlow = new THREE.Mesh(glowGeo, glowMat);
  scene.add(hubGlow);

  // Surrounding nodes — 38 distributed on multiple shells
  const NODE_COUNT = 38;
  const nodes = [];
  const nodePositions = [];
  const colors = [0x00FFE0, 0xFF38B4, 0x9A3FFF];

  for (let i = 0; i < NODE_COUNT; i++) {
    // Spherical distribution with some randomness
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    const r = 14 + Math.random() * 8;
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    nodePositions.push(new THREE.Vector3(x, y, z));

    const color = colors[i % colors.length];
    const nodeGeo = new THREE.OctahedronGeometry(0.36, 0);
    const nodeEdges = new THREE.EdgesGeometry(nodeGeo);
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.9,
    });
    const node = new THREE.LineSegments(nodeEdges, mat);
    node.position.set(x, y, z);
    node.userData = { baseScale: 0.8 + Math.random() * 0.6, phase: i * 0.4 };
    scene.add(node);
    nodes.push(node);

    // Glow point at node
    const dotGeo = new THREE.SphereGeometry(0.14, 12, 12);
    const dotMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const dot = new THREE.Mesh(dotGeo, dotMat);
    dot.position.copy(node.position);
    scene.add(dot);
  }

  // Lines from hub to each node
  const lineMat = new THREE.LineBasicMaterial({
    transparent: true,
    opacity: 0.18,
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const linePositions = new Float32Array(NODE_COUNT * 2 * 3);
  const lineColors = new Float32Array(NODE_COUNT * 2 * 3);
  for (let i = 0; i < NODE_COUNT; i++) {
    const idx = i * 6;
    linePositions[idx]     = 0;
    linePositions[idx + 1] = 0;
    linePositions[idx + 2] = 0;
    linePositions[idx + 3] = nodePositions[i].x;
    linePositions[idx + 4] = nodePositions[i].y;
    linePositions[idx + 5] = nodePositions[i].z;
    // Center color (magenta) to node color
    lineColors[idx]     = 1.0;
    lineColors[idx + 1] = 0.22;
    lineColors[idx + 2] = 0.71;
    const c = new THREE.Color(colors[i % colors.length]);
    lineColors[idx + 3] = c.r;
    lineColors[idx + 4] = c.g;
    lineColors[idx + 5] = c.b;
  }
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  lineGeo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  // Flowing data packets along each line
  const PACKET_COUNT = NODE_COUNT;
  const packetPositions = new Float32Array(PACKET_COUNT * 3);
  const packetGeo = new THREE.BufferGeometry();
  packetGeo.setAttribute('position', new THREE.BufferAttribute(packetPositions, 3));
  const packetMat = new THREE.PointsMaterial({
    color: 0x00FFE0,
    size: 0.5,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const packets = new THREE.Points(packetGeo, packetMat);
  scene.add(packets);
  const packetT = new Float32Array(PACKET_COUNT);
  for (let i = 0; i < PACKET_COUNT; i++) packetT[i] = Math.random();

  // Mouse parallax
  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  const resize = () => {
    const W = mount.clientWidth || window.innerWidth;
    const H = mount.clientHeight || 800;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  };
  window.addEventListener('resize', resize);

  let t = 0;
  const animate = () => {
    t += 0.01;

    // Rotate hub
    hub.rotation.x += 0.002;
    hub.rotation.y += 0.003;
    hubGlow.scale.setScalar(1 + Math.sin(t * 0.8) * 0.06);

    // Pulse nodes
    nodes.forEach((node) => {
      const wave = Math.sin(t * 1.2 + node.userData.phase);
      node.scale.setScalar(node.userData.baseScale * (1 + wave * 0.12));
      node.rotation.y += 0.01;
      node.rotation.x += 0.005;
    });

    // Move data packets along their lines
    const packetPos = packetGeo.attributes.position.array;
    for (let i = 0; i < PACKET_COUNT; i++) {
      packetT[i] += 0.006;
      if (packetT[i] > 1) packetT[i] -= 1;
      const target = nodePositions[i];
      const pt = packetT[i];
      packetPos[i * 3]     = target.x * pt;
      packetPos[i * 3 + 1] = target.y * pt;
      packetPos[i * 3 + 2] = target.z * pt;
    }
    packetGeo.attributes.position.needsUpdate = true;

    // Rotate whole scene
    scene.rotation.y += 0.0018;
    scene.rotation.x = my * 0.18;
    camera.position.x += (mx * 4 - camera.position.x) * 0.04;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
})();
