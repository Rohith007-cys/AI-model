import Hero from "@/components/Hero";
import ThreatOverview from "@/components/ThreatOverview";
import ThreatsSection from "@/components/ThreatsSection";
import ImpactSection from "@/components/ImpactSection";
import SolutionSection from "@/components/SolutionSection";
import TargetAudience from "@/components/TargetAudience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ThreatOverview />
      <ThreatsSection />
      <ImpactSection />
      <SolutionSection />
      <TargetAudience />
      <Footer />
    </div>
  );
};

export default Index;
