import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="glow-line mb-16" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="system-label mb-4"
        >
          📬 INITIATE SIGNAL
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
        >
          Contact.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground mb-12"
        >
          Direct communication channel. No noise.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {[
            { name: "name", label: "IDENTIFIER", type: "text", placeholder: "Your name" },
            { name: "email", label: "SIGNAL ADDRESS", type: "email", placeholder: "your@email.com" },
          ].map((field) => (
            <div key={field.name}>
              <label className="system-label mb-2 block">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                onFocus={() => setFocused(field.name)}
                onBlur={() => setFocused(null)}
                className={`w-full bg-card/30 rounded-sm px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 outline-none transition-all duration-500 ${
                  focused === field.name
                    ? "velocity-border-active impulse-glow"
                    : "velocity-border"
                }`}
              />
            </div>
          ))}

          <div>
            <label className="system-label mb-2 block">TRANSMISSION</label>
            <textarea
              rows={4}
              placeholder="Your message"
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`w-full bg-card/30 rounded-sm px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/40 outline-none resize-none transition-all duration-500 ${
                focused === "message"
                  ? "velocity-border-active impulse-glow"
                  : "velocity-border"
              }`}
            />
          </div>

          <button
            type="submit"
            className="w-full velocity-border rounded-sm px-6 py-3 font-mono text-sm font-bold text-velocity uppercase tracking-widest hover:velocity-border-active hover:impulse-glow hover:bg-velocity/5 transition-all duration-500"
          >
            TRANSMIT SIGNAL
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 justify-between"
        >
          <div>
            <div className="system-label mb-1">EMAIL</div>
            <a href="mailto:contact@aizenstudio.com" className="font-mono text-sm text-velocity hover:underline">
              contact@aizenstudio.com
            </a>
          </div>
          <div>
            <div className="system-label mb-1">LOCATION</div>
            <span className="font-mono text-sm text-muted-foreground">India</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
