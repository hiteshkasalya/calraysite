import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function MockPhone({ title, subtitle, icon: Icon, progress, chips }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto w-full max-w-[320px] rounded-[2rem] border border-white/10 bg-zinc-950/85 p-4 shadow-panel backdrop-blur-xl"
    >
      <div className="rounded-[1.45rem] border border-white/8 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/35">Calray mobile</p>
            <h3 className="mt-2 font-display text-lg font-semibold text-white">{title}</h3>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-neon-400/20 bg-neon-400/10 text-neon-300">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-white/58">{subtitle}</p>

        <div className="mt-5 rounded-[1.3rem] border border-white/8 bg-black/35 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-white/55">Progress</span>
            <span className="font-display text-2xl font-semibold text-white">{progress}%</span>
          </div>
          <div className="mt-4 h-2 rounded-full bg-white/8">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-neon-500 via-neon-400 to-neon-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/50"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
