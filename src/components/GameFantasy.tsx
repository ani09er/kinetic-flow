import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const GameFantasy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="system-label mb-6"
        >
          ⚡ CORE GAME FANTASY — MOTION AS SURVIVAL
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 mb-8"
        >
          <span className="text-velocity font-medium">MOMENTUM NULL</span> is a physics action game
          where the player controls a core in a world that actively{" "}
          <span className="text-accent">steals momentum</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-muted-foreground leading-relaxed mb-12"
        >
          The system punishes hesitation. Survival depends on maintaining motion under constant resistance.
          Every second of stillness is a second closer to termination.
        </motion.p>

        {/* Kinetic meter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="velocity-border rounded-sm p-6 bg-card/30"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="system-label">MOMENTUM STATE</span>
            <span className="font-mono text-xs text-velocity">ACTIVE</span>
          </div>
          <div className="h-1 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-velocity rounded-full"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "78%" } : {}}
              transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="system-label">DECAY</span>
            <span className="system-label">CRITICAL</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GameFantasy;
