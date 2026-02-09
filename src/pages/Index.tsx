import KineticBackground from "@/components/KineticBackground";
import HeroSection from "@/components/HeroSection";
import GameFantasy from "@/components/GameFantasy";
import GameplayRules from "@/components/GameplayRules";
import EnemyCards from "@/components/EnemyCards";
import FlowIntegrity from "@/components/FlowIntegrity";
import FlowAnalytics from "@/components/FlowAnalytics";
import StudioSection from "@/components/StudioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <KineticBackground />
      <div className="relative z-10">
        <HeroSection />
        <GameFantasy />
        <GameplayRules />
        <EnemyCards />
        <FlowIntegrity />
        <FlowAnalytics />
        <StudioSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
