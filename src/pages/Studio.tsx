import PageLayout from "@/components/PageLayout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const directives = [
  { id: "01", text: "Motion before safety" },
  { id: "02", text: "Skill before forgiveness" },
  { id: "03", text: "Mechanics that resist the player" },
  { id: "04", text: "Respect for mastery" },
];

const capabilities = [
  { label: "GAME DESIGN", desc: "Physics-driven systems and control-denial mechanics" },
  { label: "MOBILE DEVELOPMENT", desc: "High-performance Android applications" },
  { label: "SYSTEMS ENGINEERING", desc: "Momentum, decay, and resistance frameworks" },
  { label: "PERFORMANCE OPTIMIZATION", desc: "Precision tuning for real-time physics" },
];

const Studio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <PageLayout>
      <section ref={ref} className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="system-label mb-4"
          >
            🧠 ENTITY PROFILE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-8"
          >
            Aizen <span className="text-velocity">Studio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl"
          >
            Aizen Studio is an independent game development studio focused on control systems,
            physics-driven tension, and mastery-based player experiences. We design games that
            challenge comfort, remove safety nets, and reward precision under pressure.
          </motion.p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glow-line mb-16" />
          <div className="system-label mb-6">SYSTEM DIRECTIVES</div>
          <h2 className="text-3xl font-bold tracking-tight mb-12">Core principles.</h2>

          <div className="space-y-3 mb-24">
            {directives.map((d, i) => (
              <motion.div
                key={d.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glow-line mb-16" />
          <div className="system-label mb-6">OPERATIONAL CAPABILITIES</div>
          <h2 className="text-3xl font-bold tracking-tight mb-12">What we do.</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="velocity-border rounded-sm p-5 bg-card/20 hover:velocity-border-active hover:impulse-glow transition-all duration-500 group"
              >
                <h3 className="font-mono text-sm font-bold text-foreground mb-1 group-hover:text-velocity transition-colors">
                  {cap.label}
                </h3>
                <p className="text-xs text-muted-foreground">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Studio;
