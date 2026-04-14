import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      transition={{ delay: 0.15, ...spring }}
      className="relative"
    >
      <div className="absolute -inset-6 rounded-[2.5rem] bg-neon-400/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 p-5 shadow-panel backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">Calray dashboard</p>
            <h3 className="mt-2 font-display text-xl font-semibold text-white">Today&apos;s AI summary</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-neon-400/20 bg-neon-400/10 px-3 py-1 text-xs font-semibold text-neon-300">
            <Sparkles className="h-3.5 w-3.5" />
            Live
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-white/55">Calories remaining</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-semibold tracking-tight text-white">418</span>
                  <span className="text-sm text-neon-300">kcal</span>
                </div>
              </div>
              <div
                className="relative h-28 w-28 rounded-full"
                style={{
                  background:
                    "conic-gradient(rgb(99, 255, 148) 0 74%, rgba(255,255,255,0.08) 74% 100%)",
                }}
              >
                <div className="absolute inset-3 rounded-full bg-zinc-950">
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <span className="text-[10px] uppercase tracking-[0.32em] text-white/40">Daily</span>
                    <span className="mt-1 font-display text-2xl font-semibold text-white">74%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                ["Protein", "137g"],
                ["Steps", "8.2k"],
                ["Water", "2.1L"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-black/30 p-3">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">{label}</p>
                  <p className="mt-2 font-display text-lg font-semibold text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              ["Breakfast", "Greek yogurt, berries, oats", "620 kcal", true],
              ["Workout", "Upper body strength", "45 min", false],
              ["Coach tip", "Increase water before training", "Personalized", false],
            ].map(([title, subtitle, meta, highlighted]) => (
              <div
                key={title}
                className={`rounded-[1.4rem] border p-4 ${
                  highlighted ? "border-neon-400/25 bg-neon-400/10" : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-base font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/60">{subtitle}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] uppercase tracking-[0.22em] text-white/50">
                    {meta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3">
          {[
            ["AI check-in", "Meals + workouts synced"],
            ["Recovery", "Sleep score 88"],
            ["Next action", "Log dinner now"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/35">{label}</p>
              <p className="mt-2 text-sm font-medium text-white/80">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
