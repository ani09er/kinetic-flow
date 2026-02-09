import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";

const logs = [
  { version: "v0.4.2", date: "2026-02-01", focus: "Flow decay rebalanced — momentum predator aggression tuned" },
  { version: "v0.4.1", date: "2026-01-18", focus: "Velocity gate minimum threshold increased by 12%" },
  { version: "v0.3.9", date: "2026-01-05", focus: "Direction scrambler vector distortion range expanded" },
  { version: "v0.3.7", date: "2025-12-20", focus: "Arena 7 endgame chamber — uninterrupted flow test phase" },
  { version: "v0.3.5", date: "2025-12-08", focus: "Rebounder deflection angle calibration — dead zone mapping" },
  { version: "v0.3.2", date: "2025-11-22", focus: "Flow Integrity waveform rendering optimized for low-end devices" },
  { version: "v0.3.0", date: "2025-11-10", focus: "Momentum sink absorption rate reduced by 8% — survival window extended" },
  { version: "v0.2.8", date: "2025-10-28", focus: "Dampener drag field radius decreased — tactical maneuvering space improved" },
];

const DevLogs = () => {
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="system-label mb-4"
          >
            📰 KINETIC REPORTS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Development <span className="text-velocity">Logs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mb-16 max-w-2xl"
          >
            Transparent system reports documenting every calibration, rebalance, and pressure adjustment
            applied to MOMENTUM NULL.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {logs.map((log, i) => (
            <motion.div
              key={log.version}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="threat-card group"
              style={{ opacity: Math.max(0.4, 1 - i * 0.08) }}
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <span className="font-mono text-xs text-muted-foreground/40 tracking-wider">
            END OF TRANSMISSION LOG
          </span>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default DevLogs;
