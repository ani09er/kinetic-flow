import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const directives = [
  { id: "01", text: "Motion before safety" },
  { id: "02", text: "Skill before forgiveness" },
  { id: "03", text: "Mechanics that resist the player" },
  { id: "04", text: "Respect for mastery" },
];

const devlogs = [
  { version: "v0.4.2", date: "2026-02-01", focus: "Flow decay rebalanced — momentum predator aggression tuned" },
  { version: "v0.4.1", date: "2026-01-18", focus: "Velocity gate minimum threshold increased by 12%" },
  { version: "v0.3.9", date: "2026-01-05", focus: "Direction scrambler vector distortion range expanded" },
  { version: "v0.3.7", date: "2025-12-20", focus: "Arena 7 endgame chamber — uninterrupted flow test phase" },
];

const StudioSection = () => {
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
          🧠 AIZEN STUDIO — ENTITY PROFILE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-8"
        >
          Who we are.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl"
        >
          Aizen Studio is an independent game development studio focused on control systems,
          physics-driven tension, and mastery-based player experiences. We design games that
          challenge comfort, remove safety nets, and reward precision under pressure.
        </motion.p>

        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="system-label mb-6"
        >
          CORE DIRECTIVES
        </motion.div>

        <div className="space-y-3 mb-24">
          {directives.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-4 velocity-border rounded-sm px-5 py-3 bg-card/20 hover:velocity-border-active transition-all duration-500 group"
            >
              <span className="font-mono text-xs text-velocity/50 group-hover:text-velocity transition-colors">
                {d.id}
              </span>
              <span className="text-sm font-medium tracking-wide group-hover:text-velocity transition-colors">
                {d.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Devlog */}
        <div className="glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="system-label mb-4"
        >
          📰 KINETIC REPORTS — DEVLOG
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
        >
          System updates.
        </motion.h2>

        <div className="space-y-4">
          {devlogs.map((log, i) => (
            <motion.div
              key={log.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="threat-card group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="font-mono text-sm text-velocity font-bold shrink-0">
                  {log.version}
                </span>
                <span className="system-label shrink-0">{log.date}</span>
                <p className="text-sm text-muted-foreground">{log.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
