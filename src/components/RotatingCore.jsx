import { motion, useReducedMotion } from "framer-motion";
import { Clock3, Cpu, ShieldCheck } from "lucide-react";

export default function RotatingCore() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto min-h-[480px] w-full max-w-[680px]" style={{ perspective: "1400px" }}>
      <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_center,rgba(47,111,237,0.16),transparent_55%)] blur-3xl" />

      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon-400/15 bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.1),rgba(5,8,22,0.18)_65%,transparent_72%)] shadow-[0_0_120px_rgba(47,111,237,0.12)] [transform-style:preserve-3d]"
      >
        <div className="absolute inset-8 rounded-full border border-dashed border-white/10" />
        <div className="absolute inset-16 rounded-full border border-neon-400/20 bg-[radial-gradient(circle_at_center,rgba(47,111,237,0.18),rgba(5,8,22,0.18)_72%)] shadow-[inset_0_0_70px_rgba(124,92,255,0.14)]" />
        <motion.div
          animate={reduceMotion ? {} : { rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-neon-400/10"
        />
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-9 -translate-x-1/2 rounded-2xl border border-neon-400/20 bg-black/60 px-4 py-3 shadow-glow backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-neon-300">
          <Cpu className="h-4 w-4" />
          Adaptive AI engine
        </div>
        <p className="mt-1 text-xs text-white/55">Tracks meals, training, and recovery in one loop.</p>
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, 12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-24 rounded-2xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <ShieldCheck className="h-4 w-4 text-neon-300" />
          Recovery aware
        </div>
        <p className="mt-1 text-xs text-white/55">Pushes when you&apos;re ready, eases off when you&apos;re not.</p>
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-14 right-0 rounded-2xl border border-white/10 bg-black/65 px-4 py-3 backdrop-blur-xl"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Clock3 className="h-4 w-4 text-neon-300" />
          Workout ready in 12 min
        </div>
        <p className="mt-1 text-xs text-white/55">Warm-up, set count, and pace adapted automatically.</p>
      </motion.div>

      <motion.div
        animate={reduceMotion ? {} : { rotate: [0, 8, 0], y: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-[3rem] border border-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_65%)]"
      />
      <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.34),rgba(5,8,22,0.06)_48%,transparent_74%)] shadow-[0_0_80px_rgba(47,111,237,0.28)] blur-[2px]" />
    </div>
  );
}
