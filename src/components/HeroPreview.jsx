import { motion, useReducedMotion } from "framer-motion";
import { Activity, BadgeCheck, ScanLine, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

export default function HeroPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.15, ...spring }}
      className="relative"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_20%_20%,rgba(47,111,237,0.14),transparent_35%),radial-gradient(circle_at_82%_18%,rgba(124,92,255,0.12),transparent_28%)] blur-3xl" />

      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/90 p-5 shadow-[0_32px_100px_rgba(15,23,42,0.10)] backdrop-blur-2xl">
        <div className="absolute -right-24 -top-12 h-56 w-56 rounded-full bg-neon-300/30 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-neon-100/70 blur-3xl" />

        <div className="relative flex items-center justify-between border-b border-slate-200/80 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.38em] text-[#66768c]">Calray dashboard</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-[#102235]">Today&apos;s AI summary</h3>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neon-400/20 bg-neon-400/10 px-3 py-1 text-xs font-semibold text-neon-600">
            <Sparkles className="h-3.5 w-3.5" />
            Live
          </div>
        </div>

        <div className="relative mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.8rem] border border-slate-200/80 bg-gradient-to-b from-white to-neon-50/60 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-[#66768c]">Calories remaining</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-semibold tracking-tight text-[#102235]">418</span>
                  <span className="text-sm font-semibold text-neon-600">kcal</span>
                </div>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#66768c]">
                  Meal scans, workout load, and recovery data stay visible in one calm daily view.
                </p>
              </div>

              <motion.div
                animate={reduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                className="relative h-28 w-28 shrink-0"
              >
                <div
                  className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(47,111,237,0.12)]"
                  style={{
                    background:
                      "conic-gradient(from 180deg, rgba(47,111,237,0.96) 0deg, rgba(124,92,255,0.92) 206deg, rgba(219,234,254,0.72) 206deg, rgba(219,234,254,0.72) 360deg)",
                  }}
                />
                <div className="absolute inset-3 rounded-full border border-white/80 bg-white">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <span className="text-[10px] uppercase tracking-[0.32em] text-[#66768c]">Daily</span>
                    <span className="mt-1 font-display text-2xl font-semibold text-[#102235]">74%</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["Protein", "137g"],
                ["Steps", "8.2k"],
                ["Recovery", "88"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/80 bg-white/80 p-3">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#66768c]">{label}</p>
                  <p className="mt-2 font-display text-lg font-semibold text-[#102235]">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-slate-200/80 bg-white p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-[#66768c]">Meal detection</p>
                <h4 className="mt-1 font-display text-xl font-semibold tracking-tight text-[#102235]">
                  Chicken bowl and greens
                </h4>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-500 via-neon-400 to-neon-300 text-white shadow-glow">
                <ScanLine className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/80 bg-[linear-gradient(135deg,rgba(47,111,237,0.14),rgba(124,92,255,0.12),rgba(255,255,255,0.95))] p-4">
              <div className="rounded-[1.15rem] border border-white/90 bg-white/75 p-4 backdrop-blur-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#66768c]">Photo scan</p>
                    <p className="mt-2 text-base font-semibold text-[#102235]">Instant estimate ready</p>
                  </div>
                  <div className="rounded-full border border-neon-400/20 bg-neon-400/10 px-3 py-1 text-xs font-semibold text-neon-600">
                    612 kcal
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ["Protein", "42g"],
                    ["Carbs", "58g"],
                    ["Fats", "21g"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-slate-200/80 bg-white/85 p-3 text-center">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#66768c]">{label}</p>
                      <p className="mt-2 font-display text-base font-semibold text-[#102235]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-[1.4rem] border border-neon-400/15 bg-neon-50/80 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#102235]">
                <BadgeCheck className="h-4 w-4 text-neon-600" />
                AI coach
              </div>
              <p className="mt-2 text-sm leading-6 text-[#66768c]">
                Your steps are low today, so Calray recommends a lighter session and an earlier protein meal.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Meal photo", "Barcode", "Favorites"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/80 bg-white/90 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#66768c]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-4 grid gap-3 sm:grid-cols-3">
          {[
            ["AI check-in", "Meals + workouts synced", Activity],
            ["Favorites", "One tap repeat logging", BadgeCheck],
            ["Next action", "Log dinner before training", Sparkles],
          ].map(([label, value, Icon]) => (
            <div key={label} className="rounded-2xl border border-white/80 bg-white/85 px-4 py-3">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-[#66768c]">
                <Icon className="h-3.5 w-3.5 text-neon-600" />
                {label}
              </div>
              <p className="mt-2 text-sm font-medium text-[#102235]">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
