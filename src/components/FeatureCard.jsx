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
      className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-panel backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-neon-400/30 hover:bg-white/[0.07]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-neon-400/20 bg-neon-400/10 text-neon-300 shadow-[0_0_35px_rgba(99,255,148,0.12)] transition group-hover:scale-105">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-display text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/64 sm:text-[15px]">{description}</p>
    </motion.article>
  );
}
