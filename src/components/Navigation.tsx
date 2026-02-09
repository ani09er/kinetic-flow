import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { path: "/", label: "HOME" },
  { path: "/game-systems", label: "GAME SYSTEMS" },
  { path: "/pre-launch", label: "PRE-LAUNCH" },
  { path: "/studio", label: "STUDIO" },
  { path: "/devlogs", label: "DEV LOGS" },
  { path: "/contact", label: "CONTACT" },
];

const Navigation = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/30">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-display text-sm font-bold tracking-tight text-foreground hover:text-velocity transition-colors">
          AIZEN STUDIO
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-2 transition-colors duration-300 ${
                  isActive ? "text-velocity" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-velocity"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden font-mono text-[10px] text-muted-foreground tracking-widest hover:text-velocity transition-colors"
        >
          {mobileOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/30 px-6 py-4 space-y-1"
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block font-mono text-xs uppercase tracking-[0.2em] py-2 transition-colors ${
                  isActive ? "text-velocity" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;
