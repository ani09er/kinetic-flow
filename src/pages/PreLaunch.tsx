import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { useState } from "react";

const lockedModules = [
  { id: "MOD_01", name: "CONTROL-DENIAL GAMEPLAY", desc: "Physics-based impulse control with momentum decay" },
  { id: "MOD_02", name: "HIGH-SKILL KINETIC SURVIVAL", desc: "Hostile arenas that punish hesitation" },
  { id: "MOD_03", name: "FLOW RATING PROGRESSION", desc: "Rank system tied to velocity consistency" },
  { id: "MOD_04", name: "DEEP PERFORMANCE ANALYTICS", desc: "Post-run diagnostics with kinetic charting" },
];

const PreLaunch = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="system-label mb-6"
          >
            ⏳ PRE-LAUNCH STATUS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            MOMENTUM <span className="text-velocity">NULL</span>
          </motion.h1>

          {/* Status panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block velocity-border rounded-sm px-8 py-5 bg-card/50 backdrop-blur-sm mb-16"
          >
            <div className="system-label mb-2">STATUS</div>
            <div className="font-mono text-xl font-bold text-accent animate-flicker mb-3">
              SYSTEM CALIBRATION IN PROGRESS
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <div>
                <div className="system-label mb-1">PLATFORM</div>
                <span className="font-mono text-xs text-foreground">Android (Google Play)</span>
              </div>
              <div>
                <div className="system-label mb-1">PHASE</div>
                <span className="font-mono text-xs text-velocity">Internal Testing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locked Modules */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glow-line mb-16" />
          <div className="system-label mb-4">LOCKED MODULES — AWAITING DEPLOYMENT</div>
          <h2 className="text-3xl font-bold tracking-tight mb-12">What's coming.</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {lockedModules.map((mod, i) => (
              <motion.div
                key={mod.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="velocity-border rounded-sm p-5 bg-card/20 group hover:velocity-border-active hover:impulse-glow transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-[10px] text-velocity/50">{mod.id}</span>
                  <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest">LOCKED</span>
                </div>
                <h3 className="font-mono text-sm font-bold text-foreground mb-1 group-hover:text-velocity transition-colors">
                  {mod.name}
                </h3>
                <p className="text-xs text-muted-foreground">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify */}
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <div className="glow-line mb-16" />
          <div className="system-label mb-4">📡 DEPLOYMENT UPDATES</div>
          <h2 className="text-2xl font-bold tracking-tight mb-3">Receive deployment updates.</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Enter your signal address to be notified when MOMENTUM NULL reaches deployment status.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="velocity-border rounded-sm p-6 bg-card/30 text-center"
            >
              <div className="font-mono text-sm text-velocity mb-1">SIGNAL REGISTERED</div>
              <p className="text-xs text-muted-foreground">You will be notified when deployment begins.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-card/30 velocity-border rounded-sm px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 outline-none focus:velocity-border-active focus:impulse-glow transition-all duration-500"
              />
              <button
                type="submit"
                className="velocity-border rounded-sm px-6 py-3 font-mono text-xs font-bold text-velocity uppercase tracking-widest hover:velocity-border-active hover:impulse-glow hover:bg-velocity/5 transition-all duration-500 shrink-0"
              >
                REQUEST NOTIFICATION
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Developer Note */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glow-line mb-16" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="velocity-border rounded-sm p-6 bg-card/20"
          >
            <div className="system-label mb-3">DEVELOPER NOTE</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              MOMENTUM NULL is currently in internal testing. Every system — from momentum decay curves
              to enemy aggression thresholds — is being calibrated to ensure the final experience demands
              genuine skill. We do not rush. We do not compromise on the physics. The game will deploy
              when the system is ready.
            </p>
            <div className="mt-4 font-mono text-[10px] text-muted-foreground/50">
              — AIZEN STUDIO // SYSTEM INTEGRITY TEAM
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PreLaunch;
