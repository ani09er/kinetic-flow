import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const analytics = [
  { label: "AVG VELOCITY", value: "67.3", unit: "u/s", trend: "+2.1%" },
  { label: "MOMENTUM DROPS", value: "14", unit: "events", trend: "-18%" },
  { label: "DEATH SPEED", value: "4.2", unit: "u/s", trend: "—" },
  { label: "FLOW RATING", value: "A-", unit: "rank", trend: "↑" },
];

const FlowAnalytics = () => {
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
          📊 SYSTEMS & ANALYTICS — FLOW ANALYSIS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
        >
          Post-run diagnostics.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          Every run generates data. Average velocity, momentum drops, death speed — all
          presented as clean kinetic charts for post-run analysis.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {analytics.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="velocity-border rounded-sm p-5 bg-card/30"
            >
              <div className="system-label mb-3">{stat.label}</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-mono text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="font-mono text-xs text-muted-foreground">{stat.unit}</span>
              </div>
              <span className="font-mono text-xs text-velocity">{stat.trend}</span>
            </motion.div>
          ))}
        </div>

        {/* Level design philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="velocity-border rounded-sm p-6 bg-card/20 mb-8"
        >
          <div className="system-label mb-3">LEVEL ARCHITECTURE</div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Fixed arenas. Each level tightens momentum tolerance. Endgame chambers demand
            uninterrupted flow. These are not stages — they are increasingly hostile systems
            that test the limits of your control.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <span className="font-mono text-sm text-muted-foreground/60 tracking-wider">
            "Flow analysis complete."
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default FlowAnalytics;
