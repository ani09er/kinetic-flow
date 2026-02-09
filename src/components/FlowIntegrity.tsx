import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const FlowIntegrity = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<number[]>([]);

  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setPoints((prev) => {
        const next = [...prev, 50 + Math.sin(Date.now() / 300) * 30 + (Math.random() - 0.5) * 15];
        return next.slice(-60);
      });
    }, 80);
    return () => clearInterval(interval);
  }, [isInView]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || points.length < 2) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width = canvas.offsetWidth * 2;
    const h = canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);
    ctx.clearRect(0, 0, w, h);

    const actualW = canvas.offsetWidth;
    const actualH = canvas.offsetHeight;

    // Draw waveform
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 187, 255, 0.6)";
    ctx.lineWidth = 1.5;

    points.forEach((p, i) => {
      const x = (i / 60) * actualW;
      const y = actualH - (p / 100) * actualH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Glow pass
    ctx.beginPath();
    ctx.strokeStyle = "rgba(0, 187, 255, 0.15)";
    ctx.lineWidth = 6;
    points.forEach((p, i) => {
      const x = (i / 60) * actualW;
      const y = actualH - (p / 100) * actualH;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    // Threshold line
    ctx.beginPath();
    ctx.strokeStyle = "rgba(255, 80, 80, 0.3)";
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    const thresholdY = actualH - (35 / 100) * actualH;
    ctx.moveTo(0, thresholdY);
    ctx.lineTo(actualW, thresholdY);
    ctx.stroke();
    ctx.setLineDash([]);
  }, [points]);

  const rules = [
    { label: "BELOW THRESHOLD", effect: "Integrity drains continuously" },
    { label: "COLLISION EVENT", effect: "Accelerated decay rate" },
    { label: "HIGH MOMENTUM", effect: "Integrity restoration begins" },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="system-label mb-4"
        >
          HP SYSTEM — FLOW INTEGRITY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
        >
          Stability is earned.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-12 max-w-2xl"
        >
          Traditional health bars lie. Flow Integrity shows the truth — your survival
          is a waveform, not a number. Sustain velocity or watch it collapse.
        </motion.p>

        {/* Waveform display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="velocity-border rounded-sm p-6 bg-card/30 mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="system-label">FLOW INTEGRITY — LIVE</span>
            <span className="font-mono text-xs text-velocity animate-pulse-slow">● MONITORING</span>
          </div>
          <canvas
            ref={canvasRef}
            className="w-full h-32"
            style={{ imageRendering: "auto" }}
          />
          <div className="flex items-center justify-between mt-3">
            <span className="system-label text-threat">THRESHOLD: 35%</span>
            <span className="system-label">SAMPLE RATE: 80ms</span>
          </div>
        </motion.div>

        {/* Rules */}
        <div className="grid sm:grid-cols-3 gap-4">
          {rules.map((rule, i) => (
            <motion.div
              key={rule.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="velocity-border rounded-sm p-4 bg-card/20"
            >
              <div className="system-label text-velocity mb-2">{rule.label}</div>
              <p className="text-xs text-muted-foreground">{rule.effect}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlowIntegrity;
