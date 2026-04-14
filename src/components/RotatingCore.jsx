import { motion, useReducedMotion } from "framer-motion";
import { Barcode, Dumbbell, HeartPulse, ScanLine, Sparkles } from "lucide-react";

export default function RotatingCore() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto min-h-[380px] w-full max-w-[720px] sm:min-h-[460px] lg:min-h-[520px]"
      style={{ perspective: "1400px" }}
    >
      <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(47,111,237,0.12),transparent_55%)] blur-3xl" />

      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.98),rgba(238,244,255,0.84)_46%,rgba(219,234,254,0.15)_74%,transparent_100%)] shadow-[0_24px_90px_rgba(47,111,237,0.12)] [transform-style:preserve-3d] sm:h-[24rem] sm:w-[24rem] lg:h-[28rem] lg:w-[28rem]"
      >
        <div className="absolute inset-7 rounded-full border border-dashed border-slate-200/90" />
        <div className="absolute inset-14 rounded-full border border-neon-400/20 bg-white/85 shadow-inner" />

        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(47,111,237,0.2),rgba(124,92,255,0.18),rgba(255,255,255,0.05),rgba(47,111,237,0.2))] opacity-70 mix-blend-multiply" />
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-10 -translate-x-1/2 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-panel backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-[#102235]">
          <Sparkles className="h-4 w-4 text-neon-600" />
          Calray AI engine
        </div>
        <p className="mt-1 text-xs text-[#66768c]">Tracks meals, training, and recovery in one loop.</p>
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, 12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-28 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-panel backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-[#102235]">
          <ScanLine className="h-4 w-4 text-neon-600" />
          Meal photo scan
        </div>
        <p className="mt-1 text-xs text-[#66768c]">Fast calorie detection with a clean confirmation step.</p>
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-24 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-panel backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-[#102235]">
          <Barcode className="h-4 w-4 text-neon-600" />
          Barcode lookup
        </div>
        <p className="mt-1 text-xs text-[#66768c]">Packaged foods stay just as fast as photo logging.</p>
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-14 left-10 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-panel backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-[#102235]">
          <Dumbbell className="h-4 w-4 text-neon-600" />
          Workout planner
        </div>
        <p className="mt-1 text-xs text-[#66768c]">Training adjusts to recovery and weekly availability.</p>
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-8 hidden rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-panel backdrop-blur-xl sm:block"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-[#102235]">
          <HeartPulse className="h-4 w-4 text-neon-600" />
          Recovery aware
        </div>
        <p className="mt-1 text-xs text-[#66768c]">The coach keeps pace with sleep, steps, and energy.</p>
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { rotate: [0, 8, 0], y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-[3rem] border border-white/60 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.34),transparent_65%)]"
      />

      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.22),rgba(5,8,22,0.02)_48%,transparent_74%)] blur-[2px] sm:h-52 sm:w-52" />

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/90 bg-white/90 px-6 py-8 text-center shadow-[0_24px_80px_rgba(47,111,237,0.12)] sm:px-8 sm:py-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#66768c] sm:text-[11px] sm:tracking-[0.42em]">
          Calray AI
        </p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-[#102235] sm:text-3xl">Calorie detection</h3>
        <p className="mt-3 max-w-[220px] text-xs leading-6 text-[#66768c] sm:text-sm">
          Meals, workouts, and recovery keep moving through one elegant loop.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 sm:hidden">
        {["Meal scan", "Barcode", "Workout"].map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-white/80 bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#66768c]"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
