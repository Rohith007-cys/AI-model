import { Shield, AlertTriangle, Lock, Bug } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import dataPoisoningImg from "@/assets/data-poisoning.jpg";
import adversarialDefenseImg from "@/assets/adversarial-defense.jpg";
import modelProtectionImg from "@/assets/model-protection.jpg";
import modelBackdoorsImg from "@/assets/model-backdoors.jpg";

const threats = [
  {
    icon: AlertTriangle,
    title: "Data Poisoning Attacks",
    threat: "The Threat Vector",
    threatDesc: "Attackers inject carefully crafted, malicious data into the training datasets that AI models learn from. This subtle manipulation often goes undetected during standard data validation.",
    outcome: "The Malicious Outcome",
    outcomeDesc: "The poisoned data causes the AI model to learn false patterns, leading to compromised decision-making and critical misclassifications. Example: A security model trained to ignore malware after being fed poisoned benign samples.",
    image: dataPoisoningImg,
    color: "destructive",
  },
  {
    icon: Shield,
    title: "Adversarial Attacks: Subverting AI Perception",
    threat: "Imperceptible Alterations",
    threatDesc: "These involve making tiny, often imperceptible modifications to legitimate input data. The changes are designed to be undetectable to the human eye but highly effective at fooling AI models.",
    outcome: "Deceptive Outcomes",
    outcomeDesc: "The consequences are severe, such as an autonomous vehicle's vision system misclassifying a stop sign as a speed-limit sign, creating dangerous situations.",
    image: adversarialDefenseImg,
    color: "primary",
  },
  {
    icon: Lock,
    title: "Model Extraction & Stealing",
    threat: "The Target: Intellectual Property Theft",
    threatDesc: "Highly valuable, proprietary AI models, representing years of research and investment, are targets for theft. Hackers aim to replicate or reverse-engineer these models through repeated query inferences, analyzing responses to infer underlying architecture.",
    outcome: "Competitive Compromise",
    outcomeDesc: "Successful extraction leads to a direct loss of competitive advantage, enabling competitors to bypass R&D costs and develop counter-strategies based on your AI's vulnerabilities.",
    image: modelProtectionImg,
    color: "accent",
  },
  {
    icon: Bug,
    title: "Model Backdoors: Covert Control",
    threat: "Stealthy Insertion",
    threatDesc: "Attackers insert hidden triggers or 'backdoors' directly into AI models, often during the training phase. These malicious functionalities remain dormant under normal operation.",
    outcome: "Compromised Behavior",
    outcomeDesc: "The backdoor activates only when a specific, predefined trigger input is presented (e.g., a unique pixel pattern or phrase). Upon activation, the model behaves incorrectly or maliciously, allowing attackers to manipulate outputs or bypass security measures.",
    image: modelBackdoorsImg,
    color: "destructive",
  },
];

const ThreatsSection = () => {
  return (
    <section id="threats" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Four Primary <span className="text-primary">Attack Vectors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sophisticated attacks that target the AI lifecycle, from training to deployment
          </p>
        </div>

        <div className="space-y-12">
          {threats.map((threat, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={threat.image} 
                      alt={threat.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-${threat.color}/10 border border-${threat.color}/20`}>
                        <threat.icon className={`w-6 h-6 text-${threat.color}`} />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold">{threat.title}</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-primary mb-2">{threat.threat}</h4>
                        <p className="text-muted-foreground leading-relaxed">{threat.threatDesc}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-destructive mb-2">{threat.outcome}</h4>
                        <p className="text-muted-foreground leading-relaxed">{threat.outcomeDesc}</p>
                      </div>
                    </div>
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

export default ThreatsSection;
