import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Barcode,
  ChevronRight,
  Dumbbell,
  MessageSquareQuote,
  MonitorSmartphone,
  ScanLine,
  Sparkles,
  Star,
} from "lucide-react";
import FeatureCard from "./components/FeatureCard";
import HeroPreview from "./components/HeroPreview";
import MockPhone from "./components/MockPhone";
import RotatingCore from "./components/RotatingCore";
import SectionHeading from "./components/SectionHeading";
import { featureCards, statPills, testimonials } from "./data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

const previewFeed = [
  {
    icon: ScanLine,
    title: "Meal photo",
    description: "Greek yogurt, berries, oats",
    meta: "620 kcal",
  },
  {
    icon: Barcode,
    title: "Barcode lookup",
    description: "Protein bar, 21g protein",
    meta: "Saved",
  },
  {
    icon: MonitorSmartphone,
    title: "Coach tip",
    description: "Walk 15 minutes after dinner",
    meta: "Adaptive",
  },
];

const dashboardStats = [
  ["Protein", "137g", "w-[78%]"],
  ["Calories", "1,842 / 2,100", "w-[87%]"],
  ["Workout", "Moderate", "w-[64%]"],
];

const bottomTiles = [
  ["Favorites", "12 saved meals"],
  ["Custom foods", "Fast macro entries"],
  ["Weekly progress", "Consistency up 18%"],
];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[#102235]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(47,111,237,0.08),transparent_26%),radial-gradient(circle_at_85%_10%,rgba(124,92,255,0.06),transparent_22%),radial-gradient(circle_at_75%_85%,rgba(15,159,110,0.04),transparent_24%)]" />

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/72 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neon-400/20 bg-gradient-to-br from-neon-500 via-neon-400 to-neon-300 text-sm font-semibold text-white shadow-glow">
              C
            </span>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight text-[#102235]">Calray</p>
              <p className="text-xs uppercase tracking-[0.28em] text-[#66768c]">AI Fitness</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#66768c] md:flex">
            <a className="transition hover:text-[#102235]" href="#features">
              Features
            </a>
            <a className="transition hover:text-[#102235]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#102235]" href="#motion">
              Motion
            </a>
            <a className="transition hover:text-[#102235]" href="#preview">
              Preview
            </a>
            <a className="transition hover:text-[#102235]" href="#testimonials">
              Testimonials
            </a>
          </nav>

          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-neon-400/20 bg-gradient-to-r from-neon-500 via-neon-400 to-neon-300 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="home">
        <section className="relative">
          <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-16 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-8 lg:py-24">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-400/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neon-600 shadow-[0_12px_40px_rgba(47,111,237,0.08)]">
                <Sparkles className="h-3.5 w-3.5" />
                Premium AI calorie detection
              </div>

              <h1 className="font-display text-5xl font-semibold tracking-tight text-[#102235] sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95]">
                AI That Tracks Your Calories &amp; Fitness
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#66768c] sm:text-lg">
                Calray brings meal detection, barcode lookup, favorites, custom foods, and workout planning into one
                calm daily routine, so users get the premium feel of a startup app with the clarity of Apple and Stripe.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#preview"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-500 via-neon-400 to-neon-300 px-6 font-semibold text-white shadow-glow transition hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
                <a
                  href="#features"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/80 bg-white/85 px-6 font-semibold text-[#102235] shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition hover:border-neon-300/70 hover:bg-white"
                >
                  Explore features
                  <ChevronRight className="h-4.5 w-4.5" />
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[#66768c]">
                {["Meal photo", "Barcode lookup", "Favorites", "Workout plan"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.22em]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {statPills.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/80 bg-white/85 p-4 shadow-panel backdrop-blur-xl"
                  >
                    <p className="font-display text-2xl font-semibold text-[#102235]">{item.value}</p>
                    <p className="mt-1 text-sm text-[#66768c]">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <HeroPreview />
          </div>
        </section>

        <section id="features" className="relative mx-auto w-full max-w-7xl px-6 py-6 lg:px-8 lg:py-12">
          <SectionHeading
            eyebrow="Features"
            title="Everything the app needs to feel fast, calm, and premium."
            description="The website is built around the same product flow as the app: scan a meal, confirm the numbers, save the favorite, then let the coach guide the next move."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((card, index) => (
              <FeatureCard key={card.title} index={index} {...card} />
            ))}
          </div>
        </section>

        <section id="about" className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="About us"
            title="Built from the app color system."
            description="We matched the landing page to the same blue, purple, lilac, and soft-mint palette used in Calray, so the brand feels like one premium product from top to bottom."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="rounded-[2rem] border border-white/80 bg-white/85 p-7 shadow-panel backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neon-600/80">Our mission</p>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[#102235] sm:text-3xl">
                One calm place for meal detection, training, and progress.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#66768c] sm:text-base">
                Calray turns calorie tracking into a clean ritual: photo scans, barcode lookup, favorites, custom
                foods, and adaptive workouts all live in one premium flow that feels easy to trust.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Meal photo and barcode logging stay fast enough to use every day.",
                  "Favorites and custom foods turn repeat logging into one tap.",
                  "Workout guidance reacts to recovery, steps, and the rest of the day.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-neon-600" />
                    <span className="text-sm leading-7 text-[#66768c]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  ["Palette", "Blue + purple"],
                  ["Experience", "Apple-like clarity"],
                  ["Focus", "Daily consistency"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/80 bg-white/90 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#66768c]">{label}</p>
                    <p className="mt-2 font-semibold text-[#102235]">{value}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] border border-neon-300/40 bg-gradient-to-br from-white via-white to-neon-100/70 p-7 shadow-panel backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-neon-600/80">Founder note</p>
              <blockquote className="mt-4 text-lg leading-8 text-[#102235] sm:text-xl">
                "We built Calray so calorie tracking and fitness coaching would feel simple, premium, and genuinely
                useful every day."
              </blockquote>
              <div className="mt-8 flex items-center gap-4 border-t border-slate-200/80 pt-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-500 via-neon-400 to-neon-300 text-sm font-semibold text-white shadow-glow">
                  C
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-[#102235]">Founder, Calray</p>
                  <p className="text-sm text-[#66768c]">App-first product vision</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="motion" className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
            <SectionHeading
              eyebrow="3D motion"
              title="A rotating core keeps the page feeling alive."
              description="This section uses smooth Framer Motion layers to give Calray a futuristic, high-end startup feel without adding clutter."
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-[2rem] border border-white/80 bg-white/85 p-5 shadow-panel backdrop-blur-xl"
            >
              <RotatingCore />
            </motion.div>
          </div>
        </section>

        <section id="preview" className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="App preview"
            title="A desktop dashboard and mobile screens that mirror the product."
            description="The preview shows the real Calray flow: scan food, confirm calories, save the favorite, then let the coach guide the next move."
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-panel backdrop-blur-xl"
            >
              <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.32em] text-[#66768c]">Desktop preview</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-[#102235]">Daily control panel</h3>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-neon-400/20 bg-neon-400/10 px-3 py-1 text-xs font-semibold text-neon-600">
                  <Activity className="h-3.5 w-3.5" />
                  Today
                </div>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_1.05fr]">
                <div className="rounded-[1.8rem] border border-slate-200/80 bg-gradient-to-b from-white to-neon-50/60 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-[#66768c]">Calories remaining</p>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="font-display text-4xl font-semibold tracking-tight text-[#102235]">418</span>
                        <span className="text-sm font-semibold text-neon-600">kcal</span>
                      </div>
                    </div>

                    <div className="relative h-24 w-24 shrink-0 rounded-full bg-[conic-gradient(from_180deg,rgba(47,111,237,0.96)0deg,rgba(124,92,255,0.92)220deg,rgba(219,234,254,0.72)220deg,rgba(219,234,254,0.72)360deg)] shadow-[0_0_40px_rgba(47,111,237,0.12)]">
                      <div className="absolute inset-3 rounded-full border border-white/80 bg-white">
                        <div className="flex h-full flex-col items-center justify-center text-center">
                          <span className="text-[10px] uppercase tracking-[0.32em] text-[#66768c]">Daily</span>
                          <span className="mt-1 font-display text-2xl font-semibold text-[#102235]">74%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {dashboardStats.map(([label, value, width]) => (
                      <div key={label} className="rounded-2xl border border-white/80 bg-white/85 p-4">
                        <div className="flex items-center justify-between gap-4">
                          <p className="text-sm text-[#66768c]">{label}</p>
                          <p className="font-display text-lg font-semibold text-[#102235]">{value}</p>
                        </div>
                        <div className="mt-3 h-2 rounded-full bg-slate-200/80">
                          <div className={`h-2 rounded-full bg-gradient-to-r from-neon-500 via-neon-400 to-neon-300 ${width}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.8rem] border border-slate-200/80 bg-white p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#66768c]">Today&apos;s feed</p>
                        <h4 className="mt-1 font-display text-xl font-semibold tracking-tight text-[#102235]">
                          Scan, confirm, and save
                        </h4>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {previewFeed.map(({ icon: Icon, title, description, meta }) => (
                        <div
                          key={title}
                          className="rounded-[1.4rem] border border-white/80 bg-gradient-to-r from-white to-neon-50/65 p-4"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-3">
                              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-500 via-neon-400 to-neon-300 text-white shadow-glow">
                                <Icon className="h-4.5 w-4.5" />
                              </div>
                              <div>
                                <p className="font-display text-base font-semibold text-[#102235]">{title}</p>
                                <p className="mt-1 text-sm leading-6 text-[#66768c]">{description}</p>
                              </div>
                            </div>
                            <span className="rounded-full border border-neon-400/20 bg-neon-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-neon-600">
                              {meta}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-[1.35rem] border border-neon-400/15 bg-neon-50/80 p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#102235]">
                        <MonitorSmartphone className="h-4 w-4 text-neon-600" />
                        AI coach summary
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#66768c]">
                        Your steps are low today, so Calray suggests a lighter workout and an earlier protein meal.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {[
                      ["Meal logging", "Photo + barcode in one flow"],
                      ["Favorites", "Repeat meals in one tap"],
                    ].map(([title, description]) => (
                      <div key={title} className="rounded-[1.5rem] border border-white/80 bg-white/85 p-4">
                        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#66768c]">
                          <BadgeCheck className="h-3.5 w-3.5 text-neon-600" />
                          {title}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[#102235]">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {bottomTiles.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/80 bg-white/85 px-4 py-3">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-[#66768c]">{label}</p>
                    <p className="mt-2 text-sm font-medium text-[#102235]">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-6">
              <MockPhone
                title="Meal logging"
                subtitle="Log photo or barcode inputs fast enough to use every day."
                icon={ScanLine}
                progress={78}
                chips={["Photo", "Barcode", "Favorites"]}
              />
              <MockPhone
                title="Workout planner"
                subtitle="Train with a split that adapts to recovery and time."
                icon={Dumbbell}
                progress={64}
                chips={["Split", "Recovery", "Weekly"]}
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Testimonials"
            title="The experience feels calm enough to become a habit."
            description="A premium landing page should make the product feel trustworthy before the first sign-up click."
            center
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, ...spring }}
                className="rounded-[1.75rem] border border-white/80 bg-white/85 p-6 shadow-panel backdrop-blur-xl"
              >
                <div className="flex items-center gap-1 text-neon-600">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <MessageSquareQuote className="mt-5 h-6 w-6 text-neon-400/80" />
                <p className="mt-4 text-base leading-8 text-[#66768c]">"{item.quote}"</p>

                <div className="mt-6 flex items-center gap-4 border-t border-slate-200/80 pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-500/15 to-white text-sm font-semibold text-neon-600">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-[#102235]">{item.name}</p>
                    <p className="text-sm text-[#66768c]">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-6 pb-10 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-6 rounded-[2rem] border border-white/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(238,244,255,0.86),rgba(245,248,244,0.92))] p-6 shadow-panel backdrop-blur-xl md:flex-row md:items-center lg:px-8 lg:py-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neon-600/80">Calray AI</p>
            <h2 id="cta" className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#102235] sm:text-3xl">
              Start your fitness journey with AI
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#66768c] sm:text-base">
              A minimalist, premium landing page that mirrors the app&apos;s color system and turns calorie detection
              into a polished startup story.
            </p>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-500 via-neon-400 to-neon-300 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight className="h-4.5 w-4.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
