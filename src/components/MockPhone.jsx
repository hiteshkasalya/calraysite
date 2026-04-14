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
      className="mx-auto w-full max-w-[340px] rounded-[2.2rem] border border-white/80 bg-white/85 p-4 shadow-panel backdrop-blur-xl"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-b from-white via-white to-neon-50/65 p-4">
        <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(47,111,237,0.1),transparent_72%)]" />

        <div className="relative flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.32em] text-[#66768c]">
          <span>Calray AI mobile</span>
          <span>09:41</span>
        </div>

        <div className="relative mt-4 flex items-start gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-neon-500 via-neon-400 to-neon-300 text-white shadow-[0_18px_40px_rgba(47,111,237,0.20)]">
            <Icon className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="font-display text-lg font-semibold tracking-tight text-[#102235]">{title}</p>
            <p className="mt-2 text-sm leading-6 text-[#66768c]">{subtitle}</p>
          </div>
        </div>

        <div className="relative mt-5 rounded-[1.45rem] border border-white/80 bg-white/90 p-4 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#66768c]">Progress</span>
            <span className="font-display text-2xl font-semibold text-[#102235]">{progress}%</span>
          </div>

          <div className="mt-4 h-2 rounded-full bg-slate-200/80">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-neon-500 via-neon-400 to-neon-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-slate-200/90 bg-white/90 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-[#66768c]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-[1.3rem] border border-neon-400/15 bg-neon-50/80 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#66768c]">Fast flow</p>
          <p className="mt-2 text-sm leading-6 text-[#102235]">
            Keep logging meals, workouts, and favorites without leaving the calm product flow.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
