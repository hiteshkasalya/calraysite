import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Barcode,
  ChevronRight,
  Dumbbell,
  ScanLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import BrandMark from "./components/BrandMark";
import SeoHead from "./components/SeoHead";
import { brandHighlights, faqItems, palette } from "./seo";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

const heroSignals = [
  {
    title: "Meal scan",
    text: "Photo + barcode",
    tone: "#8fd8f0",
  },
  {
    title: "Favorites",
    text: "One-tap repeats",
    tone: "#8dd94b",
  },
  {
    title: "Coach",
    text: "Adaptive prompts",
    tone: "#ffd84d",
  },
];

const productPillars = [
  {
    icon: ScanLine,
    title: "Scan meals fast",
    description: "Photo recognition and barcode lookup keep logging quick and calm.",
    tint: "bg-[#e8f8fd]",
    iconTone: "text-[#0f6f85]",
  },
  {
    icon: BadgeCheck,
    title: "Save favorites",
    description: "Repeat meals and custom foods stay one tap away in a clean flow.",
    tint: "bg-[#eef9de]",
    iconTone: "text-[#3f7f10]",
  },
  {
    icon: Dumbbell,
    title: "Coach training",
    description: "Workout guidance adapts to steps, recovery, and the rest of the day.",
    tint: "bg-[#fff4cd]",
    iconTone: "text-[#9a7000]",
  },
];

const flowSteps = [
  {
    number: "01",
    title: "Capture",
    description: "Take a meal photo or scan a barcode from any packaged food.",
  },
  {
    number: "02",
    title: "Confirm",
    description: "Review calories and macros in a calm card before logging it.",
  },
  {
    number: "03",
    title: "Adjust",
    description: "CalRay suggests the next meal or workout based on the day ahead.",
  },
];

const dashboardMetrics = [
  {
    label: "Calories",
    value: "1,842 / 2,100",
    width: "w-[87%]",
    fill: "#8fd8f0",
  },
  {
    label: "Protein",
    value: "137g",
    width: "w-[78%]",
    fill: "#8dd94b",
  },
  {
    label: "Workout",
    value: "Moderate",
    width: "w-[64%]",
    fill: "#ffd84d",
  },
];

const quickTags = ["Meal scan", "Barcode lookup", "Favorites", "Workout coach"];

function App() {
  return (
    <>
      <SeoHead />
      <div className="relative min-h-screen overflow-x-hidden bg-[#fcfbf8] text-[#151515]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_14%,rgba(143,216,240,0.18),transparent_24%),radial-gradient(circle_at_86%_10%,rgba(141,217,75,0.16),transparent_22%),radial-gradient(circle_at_70%_82%,rgba(255,223,82,0.14),transparent_24%),radial-gradient(circle_at_20%_82%,rgba(248,161,76,0.09),transparent_20%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,255,255,0.14))]" />

        <header className="sticky top-0 z-50 border-b border-black/8 bg-white/78 backdrop-blur-2xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
            <a href="#home" className="flex items-center gap-3">
              <BrandMark size={56} label="CalRay" subtitle="AI calorie and fitness tracker coach" />
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-[#5d6468] md:flex">
              <a className="transition hover:text-[#151515]" href="#product">
                Product
              </a>
              <a className="transition hover:text-[#151515]" href="#flow">
                Flow
              </a>
              <a className="transition hover:text-[#151515]" href="#brand">
                Brand
              </a>
              <a className="transition hover:text-[#151515]" href="#faq">
                FAQ
              </a>
            </nav>

            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#151515] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(18,18,18,0.12)] transition hover:-translate-y-0.5"
            >
              Request demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </header>

        <main id="home">
          <section className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-3xl rounded-[2.25rem] border border-black/10 bg-white/90 p-5 shadow-[0_24px_70px_rgba(18,18,18,0.08)] backdrop-blur-xl lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#5d6468] shadow-[0_14px_40px_rgba(18,18,18,0.05)]">
                <Sparkles className="h-3.5 w-3.5 text-[#0f6f85]" />
                Built from the logo palette
              </div>

              <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-[#151515] sm:text-7xl lg:text-[6rem] lg:leading-[0.92]">
                CalRay
                <span className="mt-4 block text-2xl font-medium tracking-tight text-[#5d6468] sm:text-3xl">
                  AI calorie and fitness tracker coach
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#5d6468] sm:text-lg">
                Official site of CalRay by Hitesh Kasalya. A clean, premium home for meal scans, barcode lookup,
                favorites, custom foods, and adaptive workout guidance.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#product"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#151515] px-6 font-semibold text-white shadow-[0_18px_50px_rgba(18,18,18,0.12)] transition hover:-translate-y-0.5"
                >
                  Explore product
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
                <a
                  href="#brand"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-black/10 bg-white/85 px-6 font-semibold text-[#151515] shadow-[0_16px_40px_rgba(18,18,18,0.06)] transition hover:border-black/20 hover:bg-white"
                >
                  View brand system
                  <ChevronRight className="h-4.5 w-4.5" />
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {quickTags.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#6b6f72] sm:text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {heroSignals.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[1.5rem] border border-black/10 bg-white/85 p-4 shadow-[0_18px_50px_rgba(18,18,18,0.06)] backdrop-blur-xl"
                  >
                    <div className="h-2 w-10 rounded-full" style={{ backgroundColor: card.tone }} />
                    <p className="mt-4 font-display text-xl font-semibold text-[#151515]">{card.title}</p>
                    <p className="mt-1 text-sm text-[#5d6468]">{card.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.12, ...spring }}
              className="relative"
            >
              <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_20%_20%,rgba(143,216,240,0.24),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(141,217,75,0.20),transparent_24%),radial-gradient(circle_at_78%_84%,rgba(255,223,82,0.18),transparent_22%)] blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/86 p-5 shadow-[0_32px_100px_rgba(18,18,18,0.10)] backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-black/8 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.34em] text-[#6b6f72]">App preview</p>
                    <h2 className="mt-2 font-display text-2xl font-semibold text-[#151515]">Meal to movement</h2>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#151515] px-3 py-1 text-xs font-semibold text-white">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Live
                  </span>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-[0.98fr_1.02fr]">
                  <div className="rounded-[1.8rem] border border-black/8 bg-gradient-to-b from-white to-[#fbfdf9] p-4">
                    <div className="rounded-[1.6rem] border border-black/8 bg-white p-3">
                      <img
                        src="/calray-logo.jpeg"
                        alt="CalRay logo"
                        className="aspect-square w-full rounded-[1.25rem] object-contain"
                      />
                    </div>

                    <div className="mt-4 rounded-[1.5rem] border border-black/8 bg-[#fcfbf8] p-4">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[#6b6f72]">Logo lockup</p>
                      <p className="mt-2 text-lg font-semibold text-[#151515]">
                        Paper, ink, sky, leaf, sun, and orange.
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#5d6468]">
                        The website uses the same colors from the app logo so the brand feels like one polished product.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.8rem] border border-black/8 bg-white p-5">
                      <p className="text-sm text-[#6b6f72]">Today&apos;s log</p>

                      <div className="mt-4 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.28em] text-[#6b6f72]">Calories remaining</p>
                          <p className="mt-2 font-display text-4xl font-semibold text-[#151515]">418</p>
                        </div>

                        <div className="rounded-[1.4rem] bg-[#151515] px-4 py-3 text-right text-white">
                          <p className="text-[11px] uppercase tracking-[0.28em] opacity-70">Target</p>
                          <p className="mt-1 font-display text-2xl font-semibold">2,100</p>
                        </div>
                      </div>

                      <div className="mt-5 space-y-3">
                        {dashboardMetrics.map((item) => (
                          <div key={item.label} className="rounded-[1.35rem] border border-black/8 bg-[#fcfbf8] p-4">
                            <div className="flex items-center justify-between gap-4">
                              <p className="text-sm text-[#5d6468]">{item.label}</p>
                              <p className="font-display text-lg font-semibold text-[#151515]">{item.value}</p>
                            </div>
                            <div className="mt-3 h-2 rounded-full bg-black/5">
                              <div className={`h-2 rounded-full ${item.width}`} style={{ backgroundColor: item.fill }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[1.5rem] border border-black/8 bg-[#eefafc] p-4">
                        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#0f6f85]">
                          <ScanLine className="h-3.5 w-3.5" />
                          Meal scan
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[#151515]">Photo logging with a clean confirm step.</p>
                      </div>

                      <div className="rounded-[1.5rem] border border-black/8 bg-[#f8fbec] p-4">
                        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#3f7f10]">
                          <Barcode className="h-3.5 w-3.5" />
                          Barcode
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[#151515]">Packaged foods log just as fast.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Favorites", "Coach", "Workout"].map((item) => (
                    <div key={item} className="rounded-2xl border border-black/8 bg-white/85 px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[#6b6f72]">{item}</p>
                      <p className="mt-2 text-sm font-medium text-[#151515]">
                        {item === "Favorites"
                          ? "Repeat logging in one tap."
                          : item === "Coach"
                            ? "Next best action, every day."
                            : "Training that fits your schedule."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <section id="product" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-[#6b6f72]">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#151515] to-transparent" />
                Product
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[#151515] sm:text-4xl lg:text-5xl">
                A premium interface for the entire nutrition loop.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#5d6468] sm:text-lg">
                Paper-white surfaces, charcoal type, and accents from the logo keep CalRay calm, polished, and easy to
                trust.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {productPillars.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.article
                    key={card.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.08, ...spring }}
                    className="rounded-[1.8rem] border border-black/10 bg-white/88 p-6 shadow-[0_24px_70px_rgba(18,18,18,0.06)] backdrop-blur-xl"
                  >
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.tint} ${card.iconTone}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-[#151515]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5d6468]">{card.description}</p>
                    <div className="mt-6 h-1.5 rounded-full bg-black/5">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-[#8fd8f0] via-[#8dd94b] to-[#ffd84d]" />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>

          <section id="flow" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr]">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl">
                <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-[#6b6f72]">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#151515] to-transparent" />
                  Flow
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-[#151515] sm:text-4xl lg:text-5xl">
                  Designed to feel like the app disappears.
                </h2>
                <p className="mt-5 text-base leading-7 text-[#5d6468] sm:text-lg">
                  The experience stays calm from the first scan to the final workout suggestion. It is the kind of
                  product flow that makes a new brand feel real the first time someone opens it.
                </p>

                <ul className="mt-8 space-y-3">
                  {[
                    "Photo scans and barcode lookup stay in the same calm flow.",
                    "Favorites and custom foods keep repeat meals one tap away.",
                    "Workout guidance adapts to steps, recovery, and time.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#3f7f10]" />
                      <span className="text-sm leading-7 text-[#5d6468] sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {brandHighlights.map((item) => (
                    <div key={item.label} className="rounded-[1.5rem] border border-black/10 bg-white/85 p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6f72]">{item.label}</p>
                      <p className="mt-2 font-display text-lg font-semibold text-[#151515]">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-[#5d6468]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="space-y-4">
                {flowSteps.map((step, index) => (
                  <motion.article
                    key={step.number}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: index * 0.08, ...spring }}
                    className="rounded-[1.65rem] border border-black/10 bg-white/90 p-5 shadow-[0_22px_60px_rgba(18,18,18,0.06)] backdrop-blur-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#151515] text-sm font-semibold text-white">
                        {step.number}
                      </div>
                      <div>
                        <p className="font-display text-xl font-semibold tracking-tight text-[#151515]">{step.title}</p>
                        <p className="mt-2 text-sm leading-7 text-[#5d6468] sm:text-base">{step.description}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          <section id="brand" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr]">
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl">
                <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-[#6b6f72]">
                  <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#151515] to-transparent" />
                  Brand system
                </p>
                <h2 className="font-display text-3xl font-semibold tracking-tight text-[#151515] sm:text-4xl lg:text-5xl">
                  The logo colors become the interface language.
                </h2>
                <p className="mt-5 text-base leading-7 text-[#5d6468] sm:text-lg">
                  We pulled the UI from the same paper, charcoal, sky, leaf, sun, and orange palette in the app logo
                  so the website feels like one product family.
                </p>

                <div className="mt-8 grid gap-4">
                  {brandHighlights.map((item) => (
                    <div key={item.label} className="rounded-[1.5rem] border border-black/10 bg-white/85 p-4">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-[#6b6f72]">{item.label}</p>
                      <p className="mt-2 font-display text-lg font-semibold text-[#151515]">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-[#5d6468]">{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-[2rem] border border-black/10 bg-white/90 p-6 shadow-[0_24px_80px_rgba(18,18,18,0.08)] backdrop-blur-xl"
              >
                <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
                  <div className="rounded-[1.8rem] border border-black/8 bg-[#fcfbf8] p-4">
                    <div className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-white p-3">
                      <img
                        src="/calray-logo.jpeg"
                        alt="CalRay logo"
                        className="aspect-square w-full rounded-[1.25rem] object-contain"
                      />
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#5d6468]">
                      The mark stays bold and readable because the website borrows the same black frames, white base,
                      and bright food colors.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {palette.map((swatch) => (
                      <div
                        key={swatch.label}
                        className="flex items-center gap-3 rounded-[1.35rem] border border-black/8 bg-white p-3"
                      >
                        <span
                          className="h-12 w-12 rounded-2xl border border-black/8 shadow-inner"
                          style={{ backgroundColor: swatch.color }}
                        />
                        <div className="flex-1">
                          <p className="font-display text-base font-semibold text-[#151515]">{swatch.label}</p>
                          <p className="text-xs uppercase tracking-[0.24em] text-[#6b6f72]">{swatch.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="faq" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="max-w-3xl">
              <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.34em] text-[#6b6f72]">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#151515] to-transparent" />
                FAQ
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-[#151515] sm:text-4xl lg:text-5xl">
                Questions people ask when they discover CalRay.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#5d6468] sm:text-lg">
                Clear answers also help Google understand the product, the brand, and the founder behind it.
              </p>
            </motion.div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {faqItems.map((item, index) => (
                <motion.article
                  key={item.question}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.08, ...spring }}
                  className="rounded-[1.75rem] border border-black/10 bg-white/90 p-6 shadow-[0_22px_70px_rgba(18,18,18,0.06)] backdrop-blur-xl"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6b6f72]">Answer</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[#151515]">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5d6468] sm:text-base">{item.answer}</p>
                </motion.article>
              ))}
            </div>
          </section>
        </main>

        <footer className="px-6 pb-10 lg:px-8">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-black/10 bg-white/90 p-6 shadow-[0_24px_80px_rgba(18,18,18,0.08)] backdrop-blur-xl md:flex-row md:items-center lg:px-8 lg:py-7">
            <BrandMark size={56} label="CalRay" subtitle="AI calorie and fitness tracker coach" />

            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6b6f72]">Created by Hitesh Kasalya</p>
              <h2 id="cta" className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#151515] sm:text-3xl">
                Bring the same premium feel into the app.
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#5d6468] sm:text-base">
                CalRay now looks and feels like a real startup brand: clean, high contrast, and built around the logo
                colors from the app.
              </p>
            </div>

            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full bg-[#151515] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
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
