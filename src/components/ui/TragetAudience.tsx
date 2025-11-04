import { Briefcase, Building2, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const audiences = [
  {
    icon: Users,
    title: "Data Scientists & ML Engineers",
    description: "Professionals building and maintaining AI models who need robust security measures to protect their training pipelines and model integrity.",
    industries: ["Research Labs", "Tech Companies", "AI Startups"],
  },
  {
    icon: Briefcase,
    title: "Cybersecurity Teams",
    description: "Security professionals responsible for protecting enterprise AI infrastructure from sophisticated attacks and data manipulation.",
    industries: ["Enterprise Security", "SOC Teams", "Risk Management"],
  },
  {
    icon: Building2,
    title: "Enterprise Organizations",
    description: "Organizations deploying AI in critical operations who require comprehensive protection against data poisoning and adversarial attacks.",
    industries: ["Finance", "Healthcare", "Defense", "E-commerce", "Autonomous Systems"],
  },
];

const TargetAudience = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Who We <span className="text-primary">Protect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored security solutions for professionals and organizations at the forefront of AI innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="space-y-4">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 w-fit">
                  <audience.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <div className="text-sm font-semibold text-primary mb-2">Key Industries:</div>
                  <div className="flex flex-wrap gap-2">
                    {audience.industries.map((industry, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-full bg-secondary/50 text-xs font-medium text-foreground border border-border/30"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
