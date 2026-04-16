import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import {
  ArrowRight,
  Barcode,
  Camera,
  Dumbbell,
  Gauge,
  MessageCircle,
  ScanLine,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import Calray3DScene from "./components/Calray3DScene";
import SeoHead from "./components/SeoHead";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Showcase", href: "#showcase" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Launch", href: "#early-access" },
];

const heroMetrics = [
  ["Photo meals", "Scan in seconds"],
  ["Barcode foods", "Fast packaged logs"],
  ["Coach notes", "Daily next steps"],
];

const proofCards = [
  {
    eyebrow: "Photo scan",
    title: "Point the camera at real food.",
    text: "CalRay reads meals, estimates calories, and keeps macros clear before the plate goes cold.",
    Icon: Camera,
  },
  {
    eyebrow: "Barcode",
    title: "Packaged food stays quick.",
    text: "Scan labels, confirm serving sizes, and save repeat meals without turning lunch into admin.",
    Icon: Barcode,
  },
  {
    eyebrow: "Coach",
    title: "Training follows nutrition.",
    text: "CalRay connects calories, protein, steps, and workouts so the next action feels obvious.",
    Icon: Dumbbell,
  },
];

const galleryPanels = [
  {
    image: "/calray-logo.png",
    alt: "CalRay food scan artwork",
    label: "Scan",
    title: "Meal recognition",
  },
  {
    image: "/calray-app-icon.png",
    alt: "CalRay app icon",
    label: "Log",
    title: "Macro memory",
  },
  {
    image: "/calray-splash-icon.png",
    alt: "CalRay splash icon",
    label: "Coach",
    title: "Daily guidance",
  },
];

const showcaseItems = [
  "Photo calorie detection",
  "Barcode meal lookup",
  "Macro memory",
  "Progress coaching",
  "Workout rhythm",
  "Daily AI insight",
  "Favorites and repeats",
  "Clear serving edits",
];

const useCases = [
  {
    label: "Fat loss",
    title: "Stay close to the target without counting every crumb.",
    detail: "CalRay keeps the estimate visible, editable, and easy to trust across messy real meals.",
  },
  {
    label: "Muscle gain",
    title: "Protein, calories, and training move together.",
    detail: "Daily coaching keeps food choices aligned with workouts, recovery, and consistency.",
  },
  {
    label: "Busy days",
    title: "Repeat meals, scan labels, and move on.",
    detail: "Fast logging helps CalRay fit inside school, work, travel, and late dinners.",
  },
  {
    label: "Coaches",
    title: "Progress becomes easier to explain.",
    detail: "Food signals and workout notes turn daily effort into a clearer check-in.",
  },
];

const steps = [
  ["Step 1", "Capture the meal", "Photo scan or barcode lookup starts the log."],
  ["Step 2", "Confirm the signal", "Calories, macros, and serving details stay editable."],
  ["Step 3", "Follow the next move", "The coach turns today into a clear action."],
];

function App() {
  const pageRef = useRef(null);
  const cursorRef = useRef(null);
  const buttonRef = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const context = gsap.context(() => {
      gsap.from("[data-reveal]", {
        autoAlpha: 0,
        y: 36,
        filter: "blur(16px)",
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.16,
      });

      if (!reduceMotion) {
        gsap.to(".hero-copy", {
          y: -10,
          duration: 5.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    }, pageRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    const root = pageRef.current;
    const cursor = cursorRef.current;

    if (!root || !cursor) {
      return undefined;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursorX = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3.out" });
    const cursorY = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3.out" });
    const layers = gsap.utils.toArray("[data-depth]");

    function handlePointerMove(event) {
      const x = event.clientX;
      const y = event.clientY;
      const progressX = x / window.innerWidth - 0.5;
      const progressY = y / window.innerHeight - 0.5;

      cursorX(x);
      cursorY(y);
      root.style.setProperty("--cursor-x", `${x}px`);
      root.style.setProperty("--cursor-y", `${y}px`);

      if (reduceMotion) {
        return;
      }

      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0);
        gsap.to(layer, {
          x: progressX * depth,
          y: progressY * depth,
          duration: 1.1,
          ease: "power3.out",
        });
      });
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll("[data-card]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim()) {
      setMessage("Add your email to enter early access.");
      return;
    }

    setMessage("You're on the early access list.");
    setEmail("");
  }

  function handleMagneticMove(event) {
    const button = buttonRef.current;

    if (!button) {
      return;
    }

    const rect = button.getBoundingClientRect();
    const pullX = event.clientX - rect.left - rect.width / 2;
    const pullY = event.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: pullX * 0.22,
      y: pullY * 0.28,
      scale: 1.04,
      duration: 0.34,
      ease: "power3.out",
    });
  }

  function handleMagneticLeave() {
    if (!buttonRef.current) {
      return;
    }

    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.55,
      ease: "elastic.out(1, 0.45)",
    });
  }

  return (
    <>
      <SeoHead />
      <main ref={pageRef} className="calray-page" aria-labelledby="hero-title">
        <Calray3DScene />

        <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />
        <div className="scan-grid" data-depth="-42" aria-hidden="true" />
        <div className="depth-pane depth-pane-left" data-depth="28" aria-hidden="true" />
        <div className="depth-pane depth-pane-right" data-depth="-34" aria-hidden="true" />

        <header className="topbar" data-depth="12">
          <a className="brand" href="#top" aria-label="CalRay home">
            <span className="brand-icon">
              <img src="/calray-logo.jpeg?v=20260415" alt="CalRay logo" />
            </span>
            <span className="brand-name">CalRay</span>
          </a>

          <nav className="nav-links" aria-label="CalRay sections">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#early-access">
            Get Started
          </a>
        </header>

        <section id="top" className="cinematic-stage">
          <div className="hero-grid">
            <div className="hero-copy" data-depth="18">
              <p className="hero-kicker" data-reveal>
                Photo scans. Barcode logs. Fitness coaching.
              </p>
              <h1 id="hero-title" className="hero-title" data-reveal>
                CalRay
              </h1>
              <p className="hero-subtitle" data-reveal>
                AI calorie intelligence that turns meals into momentum.
              </p>
              <p className="hero-coming" data-reveal>
                Coming Soon
              </p>

              <div className="hero-actions" data-reveal>
                <a className="primary-link" href="#early-access">
                  Get Early Access
                  <ArrowRight aria-hidden="true" />
                </a>
                <a className="secondary-link" href="#product">
                  Explore Product
                </a>
              </div>

              <div className="hero-metrics" data-reveal>
                {heroMetrics.map(([label, value]) => (
                  <div key={label}>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visuals" data-depth="-18" data-reveal>
              <div className="scan-shell">
                <img src="/calray-logo.png" alt="CalRay meal scan artwork" />
                <span className="scan-line" />
              </div>

              <div className="signal-stack">
                <article className="signal-card">
                  <Gauge aria-hidden="true" />
                  <span>612 kcal</span>
                  <p>Chicken bowl and greens</p>
                </article>
                <article className="signal-card">
                  <Zap aria-hidden="true" />
                  <span>74%</span>
                  <p>Daily target pace</p>
                </article>
                <article className="signal-card">
                  <MessageCircle aria-hidden="true" />
                  <span>Next</span>
                  <p>Protein meal before training</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="product" className="content-section">
          <div className="section-heading" data-card>
            <p>Product</p>
            <h2>Calorie tracking without the spreadsheet feeling.</h2>
          </div>

          <div className="proof-grid">
            {proofCards.map(({ eyebrow, title, text, Icon }) => (
              <article className="glass-card proof-card" key={title} data-card>
                <Icon aria-hidden="true" />
                <p>{eyebrow}</p>
                <h3>{title}</h3>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="showcase" className="content-section showcase-section">
          <div className="section-heading" data-card>
            <p>Showcase</p>
            <h2>A launch world built around the CalRay scan.</h2>
            <span>
              Every meal becomes a signal: calories, macros, confidence, and the next practical move.
            </span>
          </div>

          <div className="gallery-grid">
            {galleryPanels.map((item) => (
              <article className="gallery-panel" key={item.title} data-card>
                <img src={item.image} alt={item.alt} />
                <p>{item.label}</p>
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="intelligence" className="content-section split-section">
          <div className="section-heading" data-card>
            <p>Intelligence</p>
            <h2>Food data that keeps moving with the day.</h2>
            <span>
              CalRay keeps the daily loop simple: scan, adjust, save, and follow the coaching signal.
            </span>
          </div>

          <div className="showcase-grid" data-card>
            {showcaseItems.map((item, index) => (
              <div className="showcase-pill" key={item}>
                <Sparkles aria-hidden="true" />
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="use-cases" className="content-section">
          <div className="section-heading" data-card>
            <p>Use cases</p>
            <h2>Built for the moments where nutrition apps usually feel flat.</h2>
          </div>

          <div className="use-case-grid">
            {useCases.map((item) => (
              <article className="glass-card use-card" key={item.title} data-card>
                <p>{item.label}</p>
                <h3>{item.title}</h3>
                <span>{item.detail}</span>
                <a href="#early-access">
                  Explore Now
                  <ArrowRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section steps-section">
          <div className="section-heading" data-card>
            <p>Launch flow</p>
            <h2>From scan to coaching signal in three calm steps.</h2>
          </div>

          <div className="steps-grid">
            {steps.map(([step, title, detail]) => (
              <article className="glass-card step-card" key={step} data-card>
                <span>{step}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="early-access" className="content-section final-cta">
          <div className="cta-panel" data-card>
            <div>
              <p className="hero-kicker">First wave</p>
              <h2>Get your launch signal when CalRay opens.</h2>
            </div>

            <form className="early-access" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
              />
              <button
                ref={buttonRef}
                type="submit"
                onPointerMove={handleMagneticMove}
                onPointerLeave={handleMagneticLeave}
              >
                Get Early Access
                <ArrowRight aria-hidden="true" />
              </button>
            </form>

            <p className="form-message" role="status" aria-live="polite">
              {message || "No spam. Just the launch signal."}
            </p>
          </div>
        </section>

        <footer className="site-footer">
          <span>CalRay</span>
          <span>AI Calorie Intelligence</span>
          <span>Coming Soon</span>
        </footer>

        <div className="scroll-cue" aria-hidden="true">
          Scroll
          <span />
        </div>
      </main>
    </>
  );
}

export default App;
