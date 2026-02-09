import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative py-16 px-6 border-t border-border/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <Link to="/" className="font-display text-lg font-bold tracking-tight mb-2 block hover:text-velocity transition-colors">
              AIZEN STUDIO
            </Link>
            <p className="font-mono text-xs text-muted-foreground max-w-xs">
              Independent game development. Control systems. Physics-driven tension.
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <div className="system-label mb-3">NAVIGATION</div>
              <div className="space-y-2">
                <Link to="/game-systems" className="block font-mono text-xs text-muted-foreground hover:text-velocity transition-colors">
                  Game Systems
                </Link>
                <Link to="/pre-launch" className="block font-mono text-xs text-muted-foreground hover:text-velocity transition-colors">
                  Pre-Launch
                </Link>
                <Link to="/studio" className="block font-mono text-xs text-muted-foreground hover:text-velocity transition-colors">
                  Studio
                </Link>
                <Link to="/devlogs" className="block font-mono text-xs text-muted-foreground hover:text-velocity transition-colors">
                  Dev Logs
                </Link>
                <Link to="/contact" className="block font-mono text-xs text-muted-foreground hover:text-velocity transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <div className="system-label mb-3">LEGAL</div>
              <div className="space-y-2">
                <Link to="/privacy" className="block font-mono text-xs text-muted-foreground hover:text-velocity transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="block font-mono text-xs text-muted-foreground hover:text-velocity transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div>
              <div className="system-label mb-3">SIGNAL</div>
              <div className="space-y-2">
                <a href="mailto:contact@aizenstudio.com" className="block font-mono text-xs text-muted-foreground hover:text-velocity transition-colors">
                  contact@aizenstudio.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="glow-line mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="system-label">
            © 2026 AIZEN STUDIO. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-[10px] text-muted-foreground/50">
            SYSTEM STATUS: OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
