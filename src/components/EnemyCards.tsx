import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const enemies = [
  {
    classification: "TYPE-D",
    name: "DAMPENERS",
    behavior: "Reduce velocity on contact. Creates drag fields that slow the core progressively.",
    threatLevel: "MODERATE",
    color: "text-accent",
  },
  {
    classification: "TYPE-R",
    name: "REBOUNDERS",
    behavior: "Redirect motion into dead zones. Deflect the core toward momentum sinks.",
    threatLevel: "HIGH",
    color: "text-velocity",
  },
  {
    classification: "TYPE-P",
    name: "MOMENTUM PREDATORS",
    behavior: "Engage only when speed drops. Hunt the hesitant. Punish deceleration.",
    threatLevel: "CRITICAL",
    color: "text-threat",
  },
];

const obstacles = [
  { name: "FRICTION ZONES", effect: "Continuous velocity reduction" },
  { name: "MOMENTUM SINKS", effect: "Absorb velocity on contact" },
  { name: "DIRECTION SCRAMBLERS", effect: "Distort movement vectors" },
  { name: "VELOCITY GATES", effect: "Enforce minimum speed threshold" },
];

const EnemyCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="system-label mb-4"
        >
          VELOCITY THREATS — CLASSIFIED
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-16"
        >
          Motion disruptors.
        </motion.h2>

        {/* Enemy cards */}
        <div className="space-y-6 mb-24">
          {enemies.map((enemy, i) => (
            <motion.div
              key={enemy.classification}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="threat-card group flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="md:w-32 shrink-0">
                <div className="system-label mb-1">{enemy.classification}</div>
                <h3 className={`text-xl font-bold ${enemy.color} group-hover:animate-flicker`}>
                  {enemy.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {enemy.behavior}
              </p>
              <div className="shrink-0">
                <span className={`system-label ${enemy.color}`}>
                  THREAT: {enemy.threatLevel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Obstacles */}
        <div className="glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="system-label mb-4"
        >
          RESISTANCE FIELDS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          The arena fights back.
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {obstacles.map((obs, i) => (
            <motion.div
              key={obs.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="velocity-border rounded-sm p-5 bg-card/30 hover:velocity-border-active hover:impulse-glow transition-all duration-500 group"
            >
              <h4 className="font-mono text-sm font-bold text-foreground mb-1 group-hover:text-velocity transition-colors">
                {obs.name}
              </h4>
              <p className="text-xs text-muted-foreground">{obs.effect}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnemyCards;
