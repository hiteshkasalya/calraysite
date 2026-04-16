import { useEffect, useRef } from "react";
import * as THREE from "three";

const palette = {
  cyan: 0x58d8ef,
  blue: 0xffd84d,
  coral: 0xff6b5f,
  aqua: 0x94df46,
  white: 0xffffff,
};

function createGlowMaterial(color, opacity = 0.82) {
  return new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
}

function createTube(points, radius, color, opacity = 0.82, closed = false) {
  const curve = new THREE.CatmullRomCurve3(points, closed, "catmullrom", 0.42);
  return new THREE.Mesh(new THREE.TubeGeometry(curve, 96, radius, 10, closed), createGlowMaterial(color, opacity));
}

function createParticleField(count, spread, depth) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const colorChoices = [new THREE.Color(palette.cyan), new THREE.Color(palette.aqua), new THREE.Color(palette.blue)];

  for (let i = 0; i < count; i += 1) {
    const index = i * 3;
    const color = colorChoices[i % colorChoices.length];

    positions[index] = (Math.random() - 0.5) * spread;
    positions[index + 1] = (Math.random() - 0.5) * spread * 0.55;
    positions[index + 2] = -Math.random() * depth + 2;

    colors[index] = color.r;
    colors[index + 1] = color.g;
    colors[index + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.026,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
}

function createFishParticleBody() {
  const count = 520;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const colorChoices = [new THREE.Color(palette.cyan), new THREE.Color(palette.aqua), new THREE.Color(palette.coral)];

  for (let i = 0; i < count; i += 1) {
    const index = i * 3;
    const x = -1.55 + Math.random() * 2.85;
    const centerBias = 1 - Math.min(1, Math.abs((x + 0.14) / 1.55));
    const height = 0.08 + centerBias * 0.52;
    const color = colorChoices[i % colorChoices.length];

    positions[index] = x;
    positions[index + 1] = (Math.random() - 0.5) * height;
    positions[index + 2] = (Math.random() - 0.5) * 0.18;

    colors[index] = color.r;
    colors[index + 1] = color.g;
    colors[index + 2] = color.b;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({
      size: 0.036,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  );
}

function createLightRayTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 96;
  canvas.height = 512;
  const context = canvas.getContext("2d");
  const gradient = context.createLinearGradient(0, 0, 0, canvas.height);

  gradient.addColorStop(0, "rgba(148,223,70,0)");
  gradient.addColorStop(0.2, "rgba(148,223,70,0.42)");
  gradient.addColorStop(0.68, "rgba(88,216,239,0.14)");
  gradient.addColorStop(1, "rgba(255,216,77,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function createTextSprite(text, color = "#94df46") {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 180;
  const context = canvas.getContext("2d");

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "700 64px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.shadowColor = color;
  context.shadowBlur = 28;
  context.fillStyle = color;
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const sprite = new THREE.Sprite(material);
  sprite.scale.set(1.35, 0.46, 1);
  return sprite;
}

function setGroupOpacity(group, opacity) {
  group.traverse((object) => {
    if (!object.material) {
      return;
    }

    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.forEach((material) => {
      material.transparent = true;
      material.opacity = opacity;
    });
  });
}

export default function Calray3DScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080907, 0.075);

    const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 80);
    camera.position.set(0, 0.2, 7.2);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true,
    });

    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.28;
    renderer.setClearColor(0x000000, 0);

    const world = new THREE.Group();
    const fish = new THREE.Group();
    const orb = new THREE.Group();
    const dataCloud = new THREE.Group();
    scene.add(world);
    world.add(fish);
    world.add(orb);
    world.add(dataCloud);

    const ambient = new THREE.HemisphereLight(0x94df46, 0x080907, 1.15);
    const topLight = new THREE.DirectionalLight(0xf8fff2, 2.8);
    const coralLight = new THREE.PointLight(0xff6b5f, 5.4, 20);
    const cyanLight = new THREE.PointLight(0x58d8ef, 7.5, 22);

    topLight.position.set(0, 5.5, 3.2);
    coralLight.position.set(-4, 1, 2);
    cyanLight.position.set(3.5, -0.6, 4);
    scene.add(ambient, topLight, coralLight, cyanLight);

    const particlesBack = createParticleField(1200, 22, 30);
    const particlesNear = createParticleField(440, 11, 14);
    world.add(particlesBack, particlesNear);

    const rayTexture = createLightRayTexture();
    const rayMaterial = new THREE.MeshBasicMaterial({
      map: rayTexture,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < 7; i += 1) {
      const ray = new THREE.Mesh(new THREE.PlaneGeometry(1.25 + i * 0.18, 11), rayMaterial.clone());
      ray.position.set(-4.2 + i * 1.35, 2.6, -6 - i * 1.7);
      ray.rotation.set(-0.38, 0.08 + i * 0.04, -0.28 + i * 0.06);
      ray.material.opacity = 0.16 + i * 0.022;
      world.add(ray);
    }

    const bodyOutline = createTube(
      [
        new THREE.Vector3(-1.55, 0, 0),
        new THREE.Vector3(-0.55, 0.54, 0.04),
        new THREE.Vector3(1.2, 0.08, 0),
        new THREE.Vector3(-0.48, -0.5, -0.04),
      ],
      0.022,
      palette.cyan,
      0.88,
      true,
    );
    const spine = createTube(
      [new THREE.Vector3(-1.35, 0, 0), new THREE.Vector3(-0.2, 0.05, 0.04), new THREE.Vector3(1.25, 0.05, 0)],
      0.018,
      palette.aqua,
      0.7,
    );
    const tailTop = createTube(
      [new THREE.Vector3(-1.48, 0.02, 0), new THREE.Vector3(-2.04, 0.55, 0.02), new THREE.Vector3(-1.9, 0.05, 0.08)],
      0.018,
      palette.coral,
      0.75,
    );
    const tailBottom = createTube(
      [new THREE.Vector3(-1.48, -0.02, 0), new THREE.Vector3(-2.04, -0.55, -0.02), new THREE.Vector3(-1.9, -0.05, -0.08)],
      0.018,
      palette.coral,
      0.75,
    );
    const fin = createTube(
      [new THREE.Vector3(-0.12, -0.1, 0), new THREE.Vector3(-0.38, -0.72, 0.1), new THREE.Vector3(0.28, -0.2, 0)],
      0.014,
      palette.blue,
      0.7,
    );
    const fishParticles = createFishParticleBody();
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.055, 18, 18), createGlowMaterial(palette.white, 0.92));
    eye.position.set(0.92, 0.16, 0.08);

    fish.add(bodyOutline, spine, tailTop, tailBottom, fin, fishParticles, eye);
    fish.position.set(-1.15, 0.1, -1.2);
    fish.rotation.set(0.06, -0.22, 0.02);

    const orbCore = new THREE.Mesh(
      new THREE.SphereGeometry(0.98, 64, 64),
      new THREE.MeshBasicMaterial({
        color: palette.cyan,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    const orbWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.32, 3),
      new THREE.MeshBasicMaterial({
        color: palette.coral,
        transparent: true,
        opacity: 0,
        wireframe: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    const orbRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.45, 0.015, 18, 180),
      createGlowMaterial(palette.aqua, 0),
    );
    orb.add(orbCore, orbWire, orbRing);
    orb.position.set(0.55, -0.1, -5);

    const calorieParticles = createParticleField(760, 4.6, 4.4);
    calorieParticles.material.opacity = 0;
    dataCloud.add(calorieParticles);

    const labels = ["612 kcal", "AI", "PROTEIN 42g", "SCAN", "CARBS 58g", "FAT 21g"];
    labels.forEach((label, index) => {
      const sprite = createTextSprite(label, index % 2 === 0 ? "#94df46" : "#ffd84d");
      const angle = (Math.PI * 2 * index) / labels.length;
      sprite.position.set(Math.cos(angle) * 2.2, Math.sin(angle * 1.4) * 0.86, Math.sin(angle) * 0.9);
      dataCloud.add(sprite);
    });
    dataCloud.position.copy(orb.position);

    let pointerX = 0;
    let pointerY = 0;
    let diveProgress = 0;
    let animationFrame = 0;
    const clock = new THREE.Clock();

    function resize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const mobile = width < 760;

      camera.aspect = width / height;
      camera.position.set(0, mobile ? 0.24 : 0.2, mobile ? 8.9 : 7.2);
      camera.updateProjectionMatrix();
      world.scale.setScalar(mobile ? 0.82 : 1);

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.3 : 1.65));
      renderer.setSize(width, height, false);
    }

    function handlePointerMove(event) {
      pointerX = event.clientX / window.innerWidth - 0.5;
      pointerY = event.clientY / window.innerHeight - 0.5;
    }

    function getTargetDive() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      return maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    }

    function animate() {
      const elapsed = clock.getElapsedTime();
      const targetDive = reduceMotion ? 0 : getTargetDive();
      diveProgress = THREE.MathUtils.lerp(diveProgress, targetDive, 0.055);
      const transformProgress = THREE.MathUtils.smoothstep(diveProgress, 0.26, 0.72);
      const dataProgress = THREE.MathUtils.smoothstep(diveProgress, 0.58, 1);
      const swim = Math.sin(elapsed * 1.35) * 0.12;

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointerX * 0.9 + diveProgress * 0.6, 0.04);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, -pointerY * 0.48 - diveProgress * 0.22, 0.04);
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 7.2 - diveProgress * 3.4, 0.035);
      camera.lookAt(diveProgress * 0.8, -diveProgress * 0.28, -4.4 - diveProgress * 2.2);

      world.rotation.y = pointerX * 0.08;
      world.rotation.x = -pointerY * 0.045;
      particlesBack.rotation.y += 0.0012;
      particlesNear.rotation.y -= 0.0022;
      particlesNear.position.z = diveProgress * 2.8;

      fish.position.x = -1.15 + diveProgress * 2.15;
      fish.position.y = 0.1 + swim - diveProgress * 0.82;
      fish.position.z = -1.2 - diveProgress * 8.7;
      fish.rotation.y = -0.22 + Math.sin(elapsed * 0.64) * 0.12 + diveProgress * 0.58;
      fish.rotation.z = Math.sin(elapsed * 1.05) * 0.08 - diveProgress * 0.28;
      fish.scale.setScalar(1 - transformProgress * 0.72);
      setGroupOpacity(fish, 1 - transformProgress * 0.88);

      orb.position.x = 0.2 + diveProgress * 1.2;
      orb.position.y = -0.1 - diveProgress * 0.5;
      orb.position.z = -4.5 - diveProgress * 3.6;
      orb.scale.setScalar(0.2 + transformProgress * 1.35);
      orb.rotation.y += 0.008;
      orb.rotation.x = elapsed * 0.08;
      orbCore.material.opacity = transformProgress * (1 - dataProgress * 0.4) * 0.56;
      orbWire.material.opacity = transformProgress * 0.54;
      orbRing.material.opacity = transformProgress * 0.8;
      orbRing.rotation.x = Math.PI * 0.5 + elapsed * 0.08;
      orbRing.rotation.z += 0.01;

      dataCloud.position.copy(orb.position);
      dataCloud.rotation.y -= 0.004;
      calorieParticles.material.opacity = dataProgress * 0.76;
      dataCloud.children.forEach((child, index) => {
        if (child.isSprite) {
          child.material.opacity = dataProgress * (0.72 + (index % 2) * 0.18);
          child.position.y += Math.sin(elapsed + index) * 0.0009;
        }
      });

      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);

      scene.traverse((object) => {
        if (object.geometry) {
          object.geometry.dispose();
        }

        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if (material.map) {
              material.map.dispose();
            }
            material.dispose();
          });
        }
      });
      rayTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="three-scene" aria-hidden="true" data-testid="calray-3d-canvas" />;
}
