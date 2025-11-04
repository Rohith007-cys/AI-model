import { AlertTriangle } from "lucide-react";

const ThreatOverview = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Critical Security Threat</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            The Rising Threat to <span className="text-primary">AI Integrity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Artificial Intelligence models are now deeply integrated into critical business operations across diverse sectors, from finance and healthcare to cybersecurity and manufacturing. Their pervasive adoption, however, introduces an urgent and complex new frontier of cyber risks.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl rounded-full" />
          <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
            <blockquote className="text-2xl md:text-3xl font-medium text-center italic">
              "AI models, while transformative, are not inherently secure. They present novel attack surfaces that require specialized defenses."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatOverview;
