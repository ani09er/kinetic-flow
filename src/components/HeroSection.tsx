import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [velocity, setVelocity] = useState(87);

  useEffect(() => {
    const interval = setInterval(() => {
      setVelocity((v) => {
        const delta = (Math.random() - 0.45) * 8;
        return Math.max(12, Math.min(99, v + delta));
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const velocityColor = velocity > 60 ? "text-velocity" : velocity > 30 ? "text-accent" : "text-threat";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 kinetic-gradient" />
      
      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-px bg-velocity/10 animate-scan-line" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* System label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="system-label mb-8"
        >
          AIZEN STUDIO // SYSTEM ACTIVE
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-6"
        >
          <span className="text-foreground">MOMENTUM</span>
          <br />
          <span className="text-velocity">NULL</span>
        </motion.h1>

        {/* Status panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="inline-block velocity-border rounded-sm px-8 py-4 bg-card/50 backdrop-blur-sm mb-8"
        >
          <div className="system-label mb-2">STATUS</div>
          <div className={`font-mono text-2xl md:text-3xl font-bold ${velocityColor} animate-flicker`}>
            VELOCITY CRITICAL — {velocity.toFixed(0)}%
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="font-mono text-sm text-muted-foreground tracking-wider"
        >
          "This system does not tolerate stillness."
        </motion.p>

        {/* Velocity vectors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex justify-center gap-8"
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="w-px bg-velocity/30 animate-pulse-slow"
                style={{
                  height: `${30 + Math.random() * 40}px`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                className="text-velocity/50 animate-pulse-slow"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <path d="M6 0 L12 12 L6 8 L0 12 Z" fill="currentColor" />
              </svg>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="system-label mb-3">SCROLL TO ENGAGE</div>
          <div className="w-px h-8 bg-velocity/30 mx-auto animate-pulse-slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
