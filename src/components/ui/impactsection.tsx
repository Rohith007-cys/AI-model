import { DollarSign, AlertCircle, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const impacts = [
  {
    icon: DollarSign,
    title: "Financial Loss",
    description: "Fraudulent transactions, data breaches, and regulatory fines that directly impact your bottom line.",
  },
  {
    icon: AlertCircle,
    title: "Reputational Damage",
    description: "Loss of trust due to unreliable or manipulated AI systems severely damages brand reputation and customer loyalty.",
  },
  {
    icon: Zap,
    title: "Operational Disruption",
    description: "Malicious AI behavior can halt critical business processes, impacting efficiency and continuity.",
  },
  {
    icon: Shield,
    title: "Compliance Risks",
    description: "AI vulnerabilities can lead to non-compliance with industry regulations and data privacy laws, resulting in legal repercussions.",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Critical Stakes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            The Impact on <span className="text-primary">Enterprise AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compromised AI systems can inflict widespread damage across your entire enterprise, affecting operations, reputation, and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{impact.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
