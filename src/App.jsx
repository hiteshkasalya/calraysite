import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Barcode,
  ChevronRight,
  Dumbbell,
  Globe,
  Languages,
  Layers,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import BrandMark from "./components/BrandMark";
import SeoHead from "./components/SeoHead";
import { brandHighlights, faqItems, languageShowcase, palette } from "./seo";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const spring = {
  type: "spring",
  stiffness: 110,
  damping: 18,
};

const heroMetrics = [
  {
    value: "6",
    label: "language touchpoints",
    detail: "English, हिंदी, Español, العربية, 日本語, Français",
  },
  {
    value: "3D",
    label: "spatial depth",
    detail: "Floating glass layers and orbital motion",
  },
  {
    value: "1",
    label: "calm flow",
    detail: "Scan, confirm, coach, repeat",
  },
];

const productCards = [
  {
    icon: ScanLine,
    eyebrow: "Meal capture",
    title: "Spatial scan that feels calm.",
    description:
      "Photo recognition and barcode lookup stay inside a glassy confirm step, so logging food feels deliberate instead of noisy.",
    accent: "#0f6f85",
    tint: "rgba(143, 216, 240, 0.18)",
  },
  {
    icon: Dumbbell,
    eyebrow: "Adaptive coach",
    title: "Training that reacts to the day.",
    description:
      "Workout guidance shifts with steps, recovery, and your remaining energy, giving the interface a more intelligent pulse.",
    accent: "#3f7f10",
    tint: "rgba(141, 217, 75, 0.18)",
  },
  {
    icon: Languages,
    eyebrow: "Global language",
    title: "Feels native across markets.",
    description:
      "English, हिंदी, Español, العربية, 日本語, and Français all appear in the design system, so the brand looks ready to travel.",
    accent: "#9a7000",
    tint: "rgba(255, 216, 77, 0.2)",
  },
];

function SectionIntro({ eyebrow, title, description, center = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-[#6a7177]">
        <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#111111] to-transparent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-7 text-[#5b6268] sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}

function SpatialStage({ reduceMotion }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.12, ...spring }}
      className="relative"
    >
      <div className="absolute -inset-8 rounded-[3.4rem] bg-[radial-gradient(circle_at_20%_20%,rgba(143,216,240,0.24),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(141,217,75,0.18),transparent_24%),radial-gradient(circle_at_74%_84%,rgba(255,216,77,0.18),transparent_22%),radial-gradient(circle_at_24%_84%,rgba(248,155,76,0.14),transparent_22%)] blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.75rem] border border-black/8 bg-white/68 p-5 shadow-[0_36px_120px_rgba(17,17,17,0.12)] backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4 border-b border-black/8 pb-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.34em] text-[#6a7177]">Spatial preview</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-[#111111]">
              A 3D product stage with real depth
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-[#111111] px-3 py-1 text-xs font-semibold text-white shadow-[0_16px_40px_rgba(17,17,17,0.16)]">
            <ShieldCheck className="h-3.5 w-3.5" />
            Live
          </span>
        </div>

        <div
          className="relative mt-5 min-h-[560px] overflow-hidden rounded-[2.25rem] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(251,249,244,0.92))] p-4 sm:min-h-[620px]"
          style={{ perspective: "1800px" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(143,216,240,0.18),transparent_28%),radial-gradient(circle_at_50%_74%,rgba(141,217,75,0.12),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.4),transparent_45%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <motion.div
            aria-hidden="true"
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-[conic-gradient(from_180deg,rgba(143,216,240,0.26),rgba(141,217,75,0.22),rgba(255,216,77,0.2),rgba(248,155,76,0.18),rgba(143,216,240,0.26))] opacity-80 shadow-[0_30px_100px_rgba(17,17,17,0.08)] sm:h-[28rem] sm:w-[28rem]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-8 rounded-full border border-dashed border-black/10" />
            <div className="absolute inset-16 rounded-full border border-white/85 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.98),rgba(255,255,255,0.55)_48%,rgba(143,216,240,0.15)_75%,transparent_100%)] shadow-inner" />
          </motion.div>

          <motion.div
            animate={reduceMotion ? {} : { y: [0, -12, 0], rotate: [-6, -4, -6] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 top-8 hidden w-56 rounded-[1.5rem] border border-black/8 bg-white/88 p-4 shadow-[0_22px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:block"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#6a7177]">
              <ScanLine className="h-3.5 w-3.5 text-[#0f6f85]" />
              Meal scan
            </div>
            <p className="mt-2 text-sm leading-6 text-[#111111]">Photo + barcode in one calm surface.</p>
          </motion.div>

          <motion.div
            animate={reduceMotion ? {} : { y: [0, -10, 0], rotate: [6, 4, 6] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 top-12 hidden w-56 rounded-[1.5rem] border border-black/8 bg-white/88 p-4 shadow-[0_22px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:block"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#6a7177]">
              <Barcode className="h-3.5 w-3.5 text-[#9a7000]" />
              Barcode lookup
            </div>
            <p className="mt-2 text-sm leading-6 text-[#111111]">Packaged foods stay just as fast.</p>
          </motion.div>

          <motion.div
            animate={reduceMotion ? {} : { y: [0, 12, 0], rotate: [-5, -3, -5] }}
            transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-4 bottom-24 hidden w-56 rounded-[1.5rem] border border-black/8 bg-white/88 p-4 shadow-[0_22px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:block"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#6a7177]">
              <Dumbbell className="h-3.5 w-3.5 text-[#3f7f10]" />
              Workout planner
            </div>
            <p className="mt-2 text-sm leading-6 text-[#111111]">Training adjusts to recovery and availability.</p>
          </motion.div>

          <motion.div
            animate={reduceMotion ? {} : { y: [0, -8, 0], rotate: [5, 3, 5] }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-4 bottom-24 hidden w-56 rounded-[1.5rem] border border-black/8 bg-white/88 p-4 shadow-[0_22px_60px_rgba(17,17,17,0.08)] backdrop-blur-xl md:block"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#6a7177]">
              <Languages className="h-3.5 w-3.5 text-[#0f6f85]" />
              Global language
            </div>
            <p className="mt-2 text-sm leading-6 text-[#111111]">English, हिंदी, Español, العربية, 日本語, Français.</p>
          </motion.div>

          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    rotateX: [10, 14, 10],
                    rotateY: [-10, 10, -10],
                    rotateZ: [0, 1.5, 0],
                  }
            }
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 z-20 flex h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-[radial-gradient(circle_at_30%_22%,rgba(255,255,255,0.98),rgba(252,251,247,0.9)_42%,rgba(143,216,240,0.18)_72%,rgba(248,155,76,0.1)_84%,transparent_100%)] shadow-[0_42px_120px_rgba(17,17,17,0.14)] sm:h-[26rem] sm:w-[26rem]"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-8 rounded-full border border-black/8" />
            <div className="absolute inset-14 rounded-full border border-dashed border-black/10" />
            <div className="absolute inset-20 rounded-full bg-[radial-gradient(circle_at_center,rgba(17,17,17,0.05),transparent_58%)] blur-sm" />
            <div className="relative flex flex-col items-center text-center">
              <div className="overflow-hidden rounded-[1.8rem] border border-black/10 bg-white p-3 shadow-[0_18px_50px_rgba(17,17,17,0.08)]">
                <img
                  src="/calray-logo.jpeg?v=20260415"
                  alt="CalRay logo"
                  className="aspect-square w-36 rounded-[1.25rem] object-contain sm:w-40"
                />
              </div>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#6a7177]">CalRay AI</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-[#111111] sm:text-3xl">
                Nutrition that moves
              </h3>
              <p className="mt-3 max-w-[240px] text-sm leading-6 text-[#5b6268]">
                Meals, workouts, and language feel connected in one sculpted interface.
              </p>
            </div>
          </motion.div>

          <div className="absolute inset-x-4 bottom-4 hidden gap-3 sm:grid sm:grid-cols-3">
            {[
              { icon: Activity, label: "Motion", value: "Subtle 3D drift" },
              { icon: BadgeCheck, label: "Flow", value: "One calm confirm step" },
              { icon: Globe, label: "Reach", value: "English + global scripts" },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/8 bg-white/84 px-4 py-3 shadow-[0_14px_40px_rgba(17,17,17,0.05)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#6a7177]">
                    <Icon className="h-3.5 w-3.5 text-[#0f6f85]" />
                    {item.label}
                  </div>
                  <p className="mt-2 text-sm font-medium text-[#111111]">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function App() {
  const reduceMotion = useReducedMotion();
  const ribbonItems = reduceMotion ? languageShowcase : [...languageShowcase, ...languageShowcase];

  return (
    <>
      <SeoHead />
      <div className="relative min-h-screen overflow-x-hidden bg-[#fbf9f4] text-[#111111]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(143,216,240,0.22),transparent_18%),radial-gradient(circle_at_84%_14%,rgba(141,217,75,0.18),transparent_18%),radial-gradient(circle_at_74%_80%,rgba(255,216,77,0.16),transparent_22%),radial-gradient(circle_at_16%_82%,rgba(248,155,76,0.12),transparent_20%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.52),rgba(255,255,255,0.1))]" />

        <header className="sticky top-0 z-50 border-b border-black/8 bg-white/60 backdrop-blur-3xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
            <a href="#home" className="flex items-center gap-3">
              <BrandMark size={52} label="CalRay" subtitle="Spatial AI calorie and fitness tracker coach" />
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-[#596067] md:flex">
              <a className="transition hover:text-[#111111]" href="#product">
                Product
              </a>
              <a className="transition hover:text-[#111111]" href="#global">
                Global
              </a>
              <a className="transition hover:text-[#111111]" href="#brand">
                Brand
              </a>
              <a className="transition hover:text-[#111111]" href="#faq">
                FAQ
              </a>
            </nav>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#111111] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(17,17,17,0.12)] transition hover:-translate-y-0.5"
            >
              Request demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        <main id="home">
          <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="relative overflow-hidden rounded-[2.6rem] border border-black/8 bg-white/72 p-6 shadow-[0_36px_110px_rgba(17,17,17,0.1)] backdrop-blur-2xl sm:p-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/78 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5d6468] shadow-[0_14px_40px_rgba(17,17,17,0.05)]">
                <Sparkles className="h-3.5 w-3.5 text-[#0f6f85]" />
                Built from the logo palette
              </div>

              <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl lg:text-[6.4rem] lg:leading-[0.9]">
                Premium nutrition, sculpted in 3D.
                <span className="mt-4 block text-2xl font-medium leading-9 tracking-tight text-[#5b6268] sm:text-3xl">
                  CalRay feels like a luxury product home, not a static landing page.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5b6268] sm:text-lg">
                CalRay by Hitesh Kasalya brings meal scans, barcode lookup, favorites, custom foods, and coaching into
                a layered, high-contrast home built to look global from the first scroll.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#product"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#111111] px-6 font-semibold text-white shadow-[0_18px_50px_rgba(17,17,17,0.14)] transition hover:-translate-y-0.5"
                >
                  Explore the system
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
                <a
                  href="#global"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/88 px-6 font-semibold text-[#111111] shadow-[0_16px_40px_rgba(17,17,17,0.06)] transition hover:border-black/20 hover:bg-white"
                >
                  See global edition
                  <ChevronRight className="h-4.5 w-4.5" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/74 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6a7177]">
                  <Layers className="h-3.5 w-3.5 text-[#9a7000]" />
                  Layered depth
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/74 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6a7177]">
                  <Activity className="h-3.5 w-3.5 text-[#0f6f85]" />
                  Living motion
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/74 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6a7177]">
                  <BadgeCheck className="h-3.5 w-3.5 text-[#3f7f10]" />
                  Premium polish
                </span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {heroMetrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-black/8 bg-white/82 p-4 shadow-[0_18px_40px_rgba(17,17,17,0.05)]"
                  >
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#6a7177]">{item.label}</p>
                    <p className="mt-2 font-display text-2xl font-semibold text-[#111111]">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-[#5b6268]">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[2rem] border border-black/8 bg-white/74 p-4 shadow-[0_18px_50px_rgba(17,17,17,0.06)] backdrop-blur-2xl">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6a7177]">
                  <Languages className="h-3.5 w-3.5 text-[#0f6f85]" />
                  Global language ribbon
                </div>

                <div className="mt-4 overflow-hidden">
                  <motion.div
                    animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
                    transition={reduceMotion ? undefined : { duration: 28, repeat: Infinity, ease: "linear" }}
                    className={reduceMotion ? "flex flex-wrap gap-3" : "flex w-max gap-3"}
                  >
                    {ribbonItems.map((item, index) => (
                      <div
                        key={`${item.language}-${index}`}
                        dir={item.dir || "ltr"}
                        className="min-w-[170px] rounded-[1.25rem] border border-black/8 bg-white/82 px-4 py-3 shadow-[0_14px_40px_rgba(17,17,17,0.05)]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[10px] uppercase tracking-[0.28em] text-[#6a7177]">{item.language}</p>
                          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                        </div>
                        <p className={`mt-3 text-sm font-semibold text-[#111111] ${item.dir === "rtl" ? "text-right" : ""}`}>
                          {item.sample}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <SpatialStage reduceMotion={reduceMotion} />
          </section>

          <section id="product" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <SectionIntro
              eyebrow="Product"
              title="A premium interface built in layers."
              description="Paper-white surfaces, charcoal type, and glowing accents keep the brand calm while the 3D motion makes it feel alive."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {productCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.article
                    key={card.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.08, ...spring }}
                    whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="group relative overflow-hidden rounded-[2rem] border border-black/8 bg-white/82 p-6 shadow-[0_28px_90px_rgba(17,17,17,0.08)] backdrop-blur-2xl"
                  >
                    <div
                      className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                      style={{
                        background:
                          "radial-gradient(circle at top right, rgba(17, 17, 17, 0.05), transparent 40%), radial-gradient(circle at bottom left, rgba(255, 255, 255, 0.72), transparent 58%)",
                      }}
                    />

                    <div
                      className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/8 shadow-[0_18px_40px_rgba(17,17,17,0.08)]"
                      style={{ backgroundColor: card.tint, color: card.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="relative mt-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6a7177]">
                      {card.eyebrow}
                    </p>
                    <h3 className="relative mt-4 font-display text-2xl font-semibold tracking-tight text-[#111111]">
                      {card.title}
                    </h3>
                    <p className="relative mt-3 text-sm leading-7 text-[#5b6268]">{card.description}</p>
                    <div className="relative mt-6 h-1.5 rounded-full bg-black/5">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-[#8fd8f0] via-[#8dd94b] to-[#ffd84d]" />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section id="global" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
              <div>
                <SectionIntro
                  eyebrow="Global edition"
                  title="Built to feel native in many languages."
                  description="The same product voice now reads cleanly across English, हिंदी, Español, العربية, 日本語, and Français so the website feels ready for a wider market."
                />

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: 0.06, ...spring }}
                  className="mt-8 rounded-[2rem] border border-black/8 bg-white/72 p-5 shadow-[0_24px_80px_rgba(17,17,17,0.08)] backdrop-blur-2xl"
                >
                  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#6a7177]">
                    <Globe className="h-3.5 w-3.5 text-[#0f6f85]" />
                    Language logic
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#5b6268]">
                    Script balance, right-to-left rhythm, and warmer spacing keep the interface elegant even when the
                    alphabet changes.
                  </p>

                  <ul className="mt-5 space-y-3">
                    {[
                      "RTL-aware cards keep Arabic samples readable and elegant.",
                      "Language chips maintain a consistent rhythm across scripts.",
                      "The visual system keeps the premium feel without losing clarity.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#3f7f10]" />
                        <span className="text-sm leading-7 text-[#5b6268]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {languageShowcase.map((item, index) => (
                  <motion.article
                    key={item.language}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.05, ...spring }}
                    whileHover={{ y: -8, rotateX: 4, rotateY: index % 2 === 0 ? 4 : -4 }}
                    style={{ transformStyle: "preserve-3d" }}
                    dir={item.dir || "ltr"}
                    className={`rounded-[1.6rem] border border-black/8 bg-white/84 p-5 shadow-[0_24px_70px_rgba(17,17,17,0.08)] backdrop-blur-2xl ${
                      item.dir === "rtl" ? "text-right" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-[11px] uppercase tracking-[0.3em] text-[#6a7177]">{item.language}</p>
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    </div>
                    <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-[#111111]">
                      {item.sample}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#5b6268]">{item.note}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="brand" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
              <div>
                <SectionIntro
                  eyebrow="Brand system"
                  title="The logo palette becomes the interface language."
                  description="The same paper, ink, sky, leaf, sun, and orange tones now spread across the site in more sculpted layers so the brand feels owned, not assembled."
                />

                <div className="mt-8 grid gap-4">
                  {brandHighlights.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ delay: 0.04, ...spring }}
                      className="rounded-[1.5rem] border border-black/8 bg-white/82 p-4 shadow-[0_18px_50px_rgba(17,17,17,0.06)]"
                    >
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#6a7177]">{item.label}</p>
                      <p className="mt-2 font-display text-lg font-semibold text-[#111111]">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-[#5b6268]">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.08, ...spring }}
                className="rounded-[2.5rem] border border-black/8 bg-white/72 p-6 shadow-[0_32px_100px_rgba(17,17,17,0.08)] backdrop-blur-2xl"
              >
                <div className="grid gap-4 md:grid-cols-[1.06fr_0.94fr]">
                  <div className="rounded-[1.8rem] border border-black/8 bg-[#fffdf9] p-4">
                    <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-white p-3 shadow-inner">
                      <img
                        src="/calray-logo.jpeg?v=20260415"
                        alt="CalRay logo"
                        className="aspect-square w-full rounded-[1.25rem] object-contain"
                      />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#5b6268]">
                      The mark stays bold and readable because the website borrows the same black frames, white base,
                      and bright food colors.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Paper", "Ink", "Sky", "Leaf", "Sun", "Orange"].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-black/8 bg-white/88 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#6a7177]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    {palette.map((swatch) => (
                      <div
                        key={swatch.label}
                        className="flex items-center gap-3 rounded-[1.35rem] border border-black/8 bg-white p-3 shadow-[0_14px_40px_rgba(17,17,17,0.05)]"
                      >
                        <span
                          className="h-12 w-12 rounded-2xl border border-black/8 shadow-inner"
                          style={{ backgroundColor: swatch.color }}
                        />
                        <div className="flex-1">
                          <p className="font-display text-base font-semibold text-[#111111]">{swatch.label}</p>
                          <p className="text-xs uppercase tracking-[0.24em] text-[#6a7177]">{swatch.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="faq" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <SectionIntro
              eyebrow="FAQ"
              title="Questions people ask when they discover CalRay."
              description="Clear answers help people and search engines understand the founder, the product, and the premium positioning."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {faqItems.map((item, index) => (
                <motion.article
                  key={item.question}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08, ...spring }}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.75rem] border border-black/8 bg-white/82 p-6 shadow-[0_22px_70px_rgba(17,17,17,0.06)] backdrop-blur-2xl"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6a7177]">Answer</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[#111111]">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5b6268] sm:text-base">{item.answer}</p>
                </motion.article>
              ))}
            </div>
          </section>
        </main>

        <footer className="px-6 pb-10 lg:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-black/8 bg-white/72 p-6 shadow-[0_28px_100px_rgba(17,17,17,0.08)] backdrop-blur-2xl md:flex-row md:items-center lg:px-8 lg:py-7">
            <BrandMark size={56} label="CalRay" subtitle="Spatial AI calorie and fitness tracker coach" />

            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6a7177]">Created by Hitesh Kasalya</p>
              <h2 id="cta" className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
                Bring the same spatial feel into the app.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5b6268] sm:text-base">
                CalRay now looks and feels like a real premium startup brand: clean, high-contrast, and built around
                the logo colors from the app.
              </p>
            </div>

            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
            >
              Get started
              <ArrowRight className="h-4.5 w-4.5" />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
