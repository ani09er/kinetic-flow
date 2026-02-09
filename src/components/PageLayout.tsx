import KineticBackground from "./KineticBackground";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  showFooter?: boolean;
}

const PageLayout = ({ children, showFooter = true }: PageLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <KineticBackground />
      <Navigation />
      <div className="relative z-10 pt-14">
        {children}
        {showFooter && <Footer />}
      </div>
    </div>
  );
};

export default PageLayout;
