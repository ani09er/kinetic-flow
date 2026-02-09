import PageLayout from "@/components/PageLayout";
import GameFantasy from "@/components/GameFantasy";
import GameplayRules from "@/components/GameplayRules";
import EnemyCards from "@/components/EnemyCards";
import FlowIntegrity from "@/components/FlowIntegrity";
import FlowAnalytics from "@/components/FlowAnalytics";

const GameSystems = () => {
  return (
    <PageLayout>
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="system-label mb-4">MOMENTUM NULL — SYSTEM DOCUMENTATION</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Game <span className="text-velocity">Systems</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Complete documentation of the physics laws, threat classifications, and survival mechanics
            that govern the MOMENTUM NULL environment.
          </p>
        </div>
      </section>
      <GameFantasy />
      <GameplayRules />
      <EnemyCards />
      <FlowIntegrity />
      <FlowAnalytics />
    </PageLayout>
  );
};

export default GameSystems;
