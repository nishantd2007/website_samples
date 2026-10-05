/* Wanderlight — interaction + Three.js globe */
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

  // Form
  const form = document.querySelector('.inquire form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = 'Sending<span class="arrow">→</span>';
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

/* ============================================
   Three.js — interactive globe
   ============================================ */
(() => {
  const mount = document.getElementById('hero-canvas');
  if (!mount || !window.THREE) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const THREE = window.THREE;
  const w = mount.clientWidth || 800;
  const h = mount.clientHeight || 700;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
  camera.position.z = 28;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  mount.appendChild(renderer.domElement);

  // Globe group
  const globeGroup = new THREE.Group();
  scene.add(globeGroup);

  // Inner sphere — solid deep blue
  const innerGeo = new THREE.SphereGeometry(7.95, 64, 64);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x0E2542,
    transparent: true,
    opacity: 0.95,
  });
  const innerSphere = new THREE.Mesh(innerGeo, innerMat);
  globeGroup.add(innerSphere);

  // Wireframe overlay — coral
  const wireGeo = new THREE.SphereGeometry(8, 36, 24);
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xFF6B5B,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  });
  const wireSphere = new THREE.Mesh(wireGeo, wireMat);
  globeGroup.add(wireSphere);

  // Outer halo — amber glow
  const haloGeo = new THREE.SphereGeometry(8.6, 32, 32);
  const haloMat = new THREE.MeshBasicMaterial({
    color: 0xFFB454,
    transparent: true,
    opacity: 0.08,
    side: THREE.BackSide,
  });
  const halo = new THREE.Mesh(haloGeo, haloMat);
  globeGroup.add(halo);

  // Destination pins
  const destinations = [
    { lat: 27.9, lon: 86.9 },   // Himalayas / Nepal
    { lat: -16.5, lon: -71.5 }, // Andes / Peru
    { lat: 35.7, lon: 139.7 },  // Tokyo / Japan
    { lat: -3.1, lon: 37.4 },   // Kilimanjaro / Tanzania
    { lat: 64.1, lon: -21.9 },  // Iceland
    { lat: -33.9, lon: 151.2 }, // Sydney
    { lat: 30.0, lon: 31.2 },   // Egypt
    { lat: 19.4, lon: -99.1 },  // Mexico City
    { lat: 41.9, lon: 12.5 },   // Rome
  ];

  const latLonToVec3 = (lat, lon, r) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -r * Math.sin(phi) * Math.cos(theta),
       r * Math.cos(phi),
       r * Math.sin(phi) * Math.sin(theta),
    );
  };

  const pinGroup = new THREE.Group();
  globeGroup.add(pinGroup);

  destinations.forEach((d, i) => {
    const pos = latLonToVec3(d.lat, d.lon, 8.05);
    // Pin core
    const pinGeo = new THREE.SphereGeometry(0.16, 16, 16);
    const pinMat = new THREE.MeshBasicMaterial({ color: 0xFFB454 });
    const pin = new THREE.Mesh(pinGeo, pinMat);
    pin.position.copy(pos);
    pinGroup.add(pin);

    // Pulse halo
    const pulseGeo = new THREE.SphereGeometry(0.4, 20, 20);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: 0xFF6B5B, transparent: true, opacity: 0.5, depthWrite: false,
    });
    const pulse = new THREE.Mesh(pulseGeo, pulseMat);
    pulse.position.copy(pos);
    pulse.userData = { phase: i * 0.6, basePos: pos };
    pinGroup.add(pulse);
  });

  // Connecting arcs between near-by destinations
  const arcLines = [];
  for (let i = 0; i < destinations.length; i++) {
    const next = (i + 1) % destinations.length;
    const start = latLonToVec3(destinations[i].lat, destinations[i].lon, 8.05);
    const end = latLonToVec3(destinations[next].lat, destinations[next].lon, 8.05);
    const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(9.5);
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    const points = curve.getPoints(40);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xFFB454, transparent: true, opacity: 0.22, depthWrite: false,
    });
    const line = new THREE.Line(lineGeo, lineMat);
    globeGroup.add(line);
    arcLines.push(line);
  }

  // Tilt
  globeGroup.rotation.z = 0.35;
  globeGroup.rotation.x = -0.15;

  // Mouse parallax (subtle)
  let mx = 0, my = 0, isDragging = false, dragStartX = 0, dragStartY = 0, rotY = 0, rotX = -0.15;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Drag to rotate
  renderer.domElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    renderer.domElement.style.cursor = 'grabbing';
  });
  window.addEventListener('mouseup', () => {
    isDragging = false;
    renderer.domElement.style.cursor = 'grab';
  });
  renderer.domElement.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    rotY += dx * 0.005;
    rotX += dy * 0.003;
    rotX = Math.max(-1, Math.min(1, rotX));
    dragStartX = e.clientX;
    dragStartY = e.clientY;
  });
  renderer.domElement.style.cursor = 'grab';

  // Resize
  const resize = () => {
    const W = mount.clientWidth || 800;
    const H = mount.clientHeight || 700;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H);
  };
  window.addEventListener('resize', resize);

  // Animate
  let t = 0;
  const animate = () => {
    t += 0.01;
    if (!isDragging) rotY += 0.0025;
    globeGroup.rotation.y = rotY + mx * 0.1;
    globeGroup.rotation.x = rotX + my * 0.05;

    // Pulse halos
    pinGroup.children.forEach((mesh) => {
      if (mesh.userData && mesh.userData.phase !== undefined) {
        const wave = (Math.sin(t * 2 + mesh.userData.phase) + 1) / 2;
        mesh.scale.setScalar(1 + wave * 0.6);
        mesh.material.opacity = 0.5 - wave * 0.4;
      }
    });

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };
  animate();
})();
