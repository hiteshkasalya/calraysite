import * as THREE from "three";
import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="page-shell">
    <div class="ambient ambient-one"></div>
    <div class="ambient ambient-two"></div>

    <header class="topbar reveal">
      <a class="brand" href="#home" aria-label="Calray home">
        <span class="brand-mark"></span>
        Calray
      </a>
      <nav class="topnav" aria-label="Primary">
        <a href="#features">Features</a>
        <a href="#flow">How it works</a>
        <a href="#join">Join</a>
      </nav>
      <a class="nav-cta" href="#join">Get early access</a>
    </header>

    <main id="home" class="hero">
      <section class="hero-copy reveal stagger">
        <p class="eyebrow">Adaptive AI fitness</p>
        <h1>Train smarter with a coach that never stops learning.</h1>
        <p class="lede">
          Calray blends workouts, recovery, and nutrition into one living plan, then adjusts every day around your energy, goals, and progress.
        </p>

        <div class="hero-actions">
          <a id="join" class="primary-cta" href="#features">Start free trial</a>
          <a class="secondary-cta" href="#flow">See the flow</a>
        </div>

        <div class="stat-row" aria-label="Calray highlights">
          <article class="stat-card">
            <strong>24/7</strong>
            <span>adaptive coaching</span>
          </article>
          <article class="stat-card">
            <strong>+18%</strong>
            <span>better consistency</span>
          </article>
          <article class="stat-card">
            <strong>1 app</strong>
            <span>training, food, recovery</span>
          </article>
        </div>
      </section>

      <section class="hero-visual reveal">
        <div class="visual-frame">
          <div class="scene" data-scene aria-hidden="true"></div>
          <div class="overlay overlay-top">
            <span class="overlay-label">Live readiness</span>
            <strong>92%</strong>
          </div>
          <div class="overlay overlay-bottom">
            <span class="overlay-label">Next workout</span>
            <strong>Upper push + core</strong>
          </div>
          <div class="orbital orbital-a"></div>
          <div class="orbital orbital-b"></div>
        </div>
      </section>
    </main>

    <section id="features" class="feature-grid">
      <article class="feature-card reveal">
        <span class="feature-kicker">01</span>
        <h2>AI workout plans</h2>
        <p>Turn your calendar, equipment, and energy level into a session that fits your real day.</p>
      </article>
      <article class="feature-card reveal">
        <span class="feature-kicker">02</span>
        <h2>Recovery aware</h2>
        <p>Sleep, soreness, and load tracking help Calray decide when to push and when to pull back.</p>
      </article>
      <article class="feature-card reveal">
        <span class="feature-kicker">03</span>
        <h2>Nutrition cues</h2>
        <p>Simple food guidance keeps calories, protein, and timing aligned with the plan you are actually following.</p>
      </article>
    </section>

    <section id="flow" class="flow-panel reveal">
      <div>
        <p class="eyebrow">How it works</p>
        <h2>One loop: input, adapt, improve.</h2>
      </div>
      <div class="flow-steps">
        <div class="flow-step">
          <span>01</span>
          <p>Log your workout, steps, and meals in seconds.</p>
        </div>
        <div class="flow-step">
          <span>02</span>
          <p>Calray updates your target based on recovery and progress.</p>
        </div>
        <div class="flow-step">
          <span>03</span>
          <p>Get the next best session with real-time coaching cues.</p>
        </div>
      </div>
    </section>
  </div>
`;

const sceneHost = document.querySelector("[data-scene]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x020402, 7, 18);

const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
camera.position.set(0, 0.2, 6.2);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  powerPreference: "high-performance"
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);
sceneHost.appendChild(renderer.domElement);

const group = new THREE.Group();
scene.add(group);

const ambient = new THREE.AmbientLight(0x7fffb0, 1.6);
scene.add(ambient);

const keyLight = new THREE.DirectionalLight(0xa8ffd0, 3.2);
keyLight.position.set(3.5, 4, 7);
scene.add(keyLight);

const rimLight = new THREE.PointLight(0x00ff88, 12, 24);
rimLight.position.set(-4, -2, 5);
scene.add(rimLight);

const coreGeometry = new THREE.IcosahedronGeometry(1.35, 5);
const coreMaterial = new THREE.MeshStandardMaterial({
  color: 0x06130a,
  emissive: 0x11ff7a,
  emissiveIntensity: 1.6,
  roughness: 0.22,
  metalness: 0.78
});
const core = new THREE.Mesh(coreGeometry, coreMaterial);
group.add(core);

const wireframe = new THREE.Mesh(
  new THREE.IcosahedronGeometry(1.58, 2),
  new THREE.MeshBasicMaterial({
    color: 0x79ffb0,
    wireframe: true,
    transparent: true,
    opacity: 0.22
  })
);
group.add(wireframe);

const shell = new THREE.Mesh(
  new THREE.SphereGeometry(1.92, 48, 48),
  new THREE.MeshBasicMaterial({
    color: 0x00ff88,
    transparent: true,
    opacity: 0.05
  })
);
group.add(shell);

const ringMaterial = new THREE.MeshBasicMaterial({
  color: 0x8cffbf,
  transparent: true,
  opacity: 0.45
});
const ringOne = new THREE.Mesh(new THREE.TorusGeometry(2.12, 0.045, 10, 180), ringMaterial);
ringOne.rotation.x = Math.PI / 2.6;
group.add(ringOne);

const ringTwo = new THREE.Mesh(
  new THREE.TorusGeometry(1.72, 0.028, 10, 180),
  new THREE.MeshBasicMaterial({
    color: 0x00ff88,
    transparent: true,
    opacity: 0.28
  })
);
ringTwo.rotation.y = Math.PI / 2;
ringTwo.rotation.z = Math.PI / 3.3;
group.add(ringTwo);

const particleCount = 240;
const particlePositions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount; i += 1) {
  const radius = 2.5 + Math.random() * 3.5;
  const theta = Math.random() * Math.PI * 2;
  const phi = Math.acos(THREE.MathUtils.randFloatSpread(2));
  const index = i * 3;

  particlePositions[index] = radius * Math.sin(phi) * Math.cos(theta);
  particlePositions[index + 1] = radius * Math.cos(phi) * 0.8;
  particlePositions[index + 2] = radius * Math.sin(phi) * Math.sin(theta);
}

const particleGeometry = new THREE.BufferGeometry();
particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

const particles = new THREE.Points(
  particleGeometry,
  new THREE.PointsMaterial({
    color: 0xb8ffd1,
    size: 0.035,
    transparent: true,
    opacity: 0.92
  })
);
group.add(particles);

const pointer = { x: 0, y: 0 };
window.addEventListener("pointermove", (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
});

function resizeScene() {
  const width = sceneHost.clientWidth;
  const height = sceneHost.clientHeight;

  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

resizeScene();
window.addEventListener("resize", resizeScene);

const clock = new THREE.Clock();

function animate() {
  const elapsed = clock.getElapsedTime();
  const motionScale = reduceMotion ? 0.18 : 1;

  group.rotation.y = elapsed * 0.55 * motionScale;
  group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, pointer.y * -0.2, 0.05);
  group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, pointer.x * 0.13, 0.05);
  group.position.y = Math.sin(elapsed * 1.5) * 0.08;

  core.rotation.x += 0.0035 * motionScale;
  core.rotation.y += 0.005 * motionScale;
  wireframe.rotation.y -= 0.0025 * motionScale;
  ringOne.rotation.z += 0.002 * motionScale;
  ringTwo.rotation.x -= 0.0022 * motionScale;
  particles.rotation.y += 0.0012 * motionScale;

  camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.42, 0.04);
  camera.position.y = THREE.MathUtils.lerp(camera.position.y, 0.2 - pointer.y * 0.22, 0.04);
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(() => {
  document.body.classList.add("is-ready");
});

animate();
