import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, ...spring }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-panel backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-neon-300/70 hover:bg-white/95"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,111,237,0.08),transparent_52%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-400/20 bg-gradient-to-br from-neon-100 to-white text-neon-600 shadow-[0_16px_40px_rgba(47,111,237,0.12)] transition group-hover:scale-105">
        <Icon className="h-5 w-5" />
      </div>
      <p className="relative text-[11px] font-semibold uppercase tracking-[0.32em] text-[#66768c]">Core feature</p>
      <h3 className="relative mt-4 font-display text-xl font-semibold tracking-tight text-[#102235]">{title}</h3>
      <p className="relative mt-3 text-sm leading-7 text-[#66768c] sm:text-[15px]">{description}</p>
    </motion.article>
  );
}
