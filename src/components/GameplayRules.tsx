import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const laws = [
  {
    id: "LAW_01",
    title: "AUTO-MOTION",
    description: "The core auto-moves. You do not choose to stop.",
    icon: "→",
  },
  {
    id: "LAW_02",
    title: "IMPULSE ONLY",
    description: "Impulses can be applied, not sustained. Every push decays.",
    icon: "⚡",
  },
  {
    id: "LAW_03",
    title: "NATURAL DECAY",
    description: "Momentum decays naturally. The system resists your existence.",
    icon: "↓",
  },
  {
    id: "LAW_04",
    title: "ZERO TOLERANCE",
    description: "Standing still results in termination. There is no pause.",
    icon: "✕",
  },
];

const GameplayRules = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="system-label mb-4"
        >
          🎮 CONTROL DENIAL SYSTEM — PHYSICS LAWS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-16"
        >
          Rules of engagement.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {laws.map((law, i) => (
            <motion.div
              key={law.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="threat-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="system-label">{law.id}</span>
                <span className="text-2xl text-velocity/60 group-hover:text-velocity transition-colors duration-500">
                  {law.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold tracking-wide mb-2 group-hover:text-velocity transition-colors duration-500">
                {law.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {law.description}
              </p>
              {/* Decay line */}
              <div className="mt-4 h-px bg-secondary overflow-hidden">
                <motion.div
                  className="h-full bg-velocity/30"
                  initial={{ width: "100%" }}
                  whileInView={{ width: "0%" }}
                  transition={{ duration: 3, delay: 1 + i * 0.3 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameplayRules;
