import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

export default function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.36em] text-neon-600/80">
        <span className="h-px w-10 bg-gradient-to-r from-transparent via-neon-500 to-transparent" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[#102235] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 text-base leading-7 text-[#66768c] sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
