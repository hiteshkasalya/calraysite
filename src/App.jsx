import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  BarChart3,
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

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(99,255,148,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(99,255,148,0.08),transparent_22%),radial-gradient(circle_at_80%_85%,rgba(99,255,148,0.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,transparent_78%,rgba(255,255,255,0.02))]" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/65 backdrop-blur-2xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-neon-400/20 bg-neon-400/10 text-sm font-semibold text-neon-300 shadow-[0_0_30px_rgba(99,255,148,0.16)]">
              C
            </span>
            <div>
              <p className="font-display text-lg font-semibold tracking-tight">Calray</p>
              <p className="text-xs uppercase tracking-[0.28em] text-white/35">AI Fitness</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/65 md:flex">
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#motion">
              Motion
            </a>
            <a className="transition hover:text-white" href="#preview">
              Preview
            </a>
            <a className="transition hover:text-white" href="#testimonials">
              Testimonials
            </a>
          </nav>

          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-neon-400/20 bg-neon-400/10 px-4 py-2 text-sm font-semibold text-neon-300 shadow-[0_0_28px_rgba(99,255,148,0.1)] transition hover:-translate-y-0.5 hover:border-neon-400/35 hover:bg-neon-400/15"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main id="home">
        <section className="relative">
          <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-28">
            <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neon-400/20 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-neon-300">
                <Sparkles className="h-3.5 w-3.5" />
                Premium AI fitness startup
              </div>

              <h1 className="font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[5.5rem] lg:leading-[0.95]">
                AI That Tracks Your Calories &amp; Fitness
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                Calray uses AI-powered tracking to understand your meals, workouts, and recovery in real time, then turns that data into simple daily actions that feel effortless to follow.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  id="cta"
                  href="#preview"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-500 via-neon-400 to-neon-300 px-6 font-semibold text-black shadow-[0_18px_60px_rgba(99,255,148,0.22)] transition hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="h-4.5 w-4.5" />
                </a>
                <a
                  href="#features"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 font-semibold text-white/80 transition hover:border-neon-400/30 hover:bg-white/[0.06] hover:text-white"
                >
                  Explore features
                  <ChevronRight className="h-4.5 w-4.5" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {statPills.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                  >
                    <p className="font-display text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-1 text-sm text-white/55">{item.label}</p>
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
            title="Everything your users need to stay consistent."
            description="A streamlined product experience that blends AI tracking, coaching, and planning into one calm, premium interface."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featureCards.map((card, index) => (
              <FeatureCard key={card.title} index={index} {...card} />
            ))}
          </div>
        </section>

        <section id="motion" className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="3D motion"
              title="A rotating visual core that makes the brand feel alive."
              description="This section uses smooth Framer Motion transitions and layered 3D-style elements to give Calray a futuristic, high-end startup feel without clutter."
            />

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-panel"
            >
              <RotatingCore />
            </motion.div>
          </div>
        </section>

        <section id="preview" className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="App preview"
            title="Mock screens that show the product story at a glance."
            description="A desktop dashboard and mobile-first screens make the experience feel tangible before users ever sign up."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="lg:col-span-7"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 shadow-panel">
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.32em] text-white/40">Desktop preview</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-white">Calray dashboard</h3>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-neon-400/20 bg-neon-400/10 px-3 py-1 text-xs font-semibold text-neon-300">
                    <Activity className="h-3.5 w-3.5" />
                    Today
                  </div>
                </div>

                <div className="mt-5 grid gap-4 xl:grid-cols-[1fr_1.08fr]">
                  <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/50">Energy score</p>
                        <p className="mt-2 font-display text-4xl font-semibold text-white">87</p>
                      </div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-neon-400/20 bg-black/50">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-neon-400/25 bg-neon-400/10 text-neon-300">
                          <BadgeCheck className="h-6 w-6" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      {[
                        ["Protein target", "138g", "w-3/4"],
                        ["Calories logged", "1,842 / 2,100", "w-[87%]"],
                        ["Workout load", "Moderate", "w-2/3"],
                      ].map(([label, value, width]) => (
                        <div key={label} className="rounded-2xl border border-white/8 bg-black/35 p-4">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-sm text-white/60">{label}</p>
                            <p className="font-display text-lg font-semibold text-white">{value}</p>
                          </div>
                          <div className="mt-3 h-2 rounded-full bg-white/8">
                            <div className={`h-2 rounded-full bg-gradient-to-r from-neon-500 via-neon-400 to-neon-300 ${width}`} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                    <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neon-400/10 text-neon-300">
                          <BarChart3 className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/50">Trendline</p>
                          <p className="font-display text-lg font-semibold text-white">Consistency up 18%</p>
                        </div>
                      </div>

                      <div className="mt-5 grid grid-cols-6 items-end gap-2">
                        {[42, 48, 35, 58, 64, 76].map((value, index) => (
                          <span
                            key={index}
                            className="rounded-full bg-gradient-to-t from-neon-500/40 to-neon-300"
                            style={{ height: `${value}px` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-neon-400/10 text-neon-300">
                          <MonitorSmartphone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-white/50">Coach message</p>
                          <p className="font-display text-lg font-semibold text-white">Swap leg day to tomorrow</p>
                        </div>
                      </div>

                      <div className="mt-4 rounded-2xl border border-white/8 bg-black/35 p-4 text-sm leading-6 text-white/60">
                        Your sleep score dipped, so Calray recommends a lighter session, more water, and an earlier protein hit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6 lg:col-span-5">
              <MockPhone
                title="Meal logging"
                subtitle="Quick scan and smart calorie estimates keep food tracking fast enough to actually use."
                icon={ScanLine}
                progress={78}
                chips={["AI scan", "Quick add", "Macros"]}
              />
              <MockPhone
                title="Training plan"
                subtitle="Personalized workouts adapt to recovery so every session feels realistic and focused."
                icon={Dumbbell}
                progress={64}
                chips={["Strength", "Recovery", "Weekly split"]}
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <SectionHeading
            eyebrow="Testimonials"
            title="Early users want to keep using it."
            description="The product feels calm, premium, and useful enough to become part of the daily routine."
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
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-panel backdrop-blur-xl"
              >
                <div className="flex items-center gap-1 text-neon-300">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <MessageSquareQuote className="mt-5 h-6 w-6 text-neon-400/70" />
                <p className="mt-4 text-base leading-8 text-white/72">"{item.quote}"</p>

                <div className="mt-6 flex items-center gap-4 border-t border-white/8 pt-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-500/20 to-white/5 text-sm font-semibold text-neon-300">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-white">{item.name}</p>
                    <p className="text-sm text-white/50">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-6 pb-10 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 rounded-[2rem] border border-neon-400/15 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 shadow-panel backdrop-blur-xl lg:px-8 lg:py-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neon-300/80">Calray AI</p>
            <h2 id="cta" className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Start your fitness journey with AI
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Calm design, smart tracking, and adaptive coaching in one premium landing page built for conversion.
            </p>
          </div>

          <a
            href="#home"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-neon-500 via-neon-400 to-neon-300 px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5 md:inline-flex"
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
