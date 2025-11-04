import { CheckCircle2, Search, Activity, Shield, Lock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "Data Validation & Sanitization",
    description: "Automated identification and neutralization of malicious or poisoned data before it corrupts your training pipelines.",
  },
  {
    icon: Activity,
    title: "Real-time Model Monitoring",
    description: "Continuous surveillance of model behavior in production to detect anomalous outputs indicative of adversarial attacks or backdoors.",
  },
  {
    icon: Shield,
    title: "Proactive Threat Detection",
    description: "Leveraging AI to identify new attack patterns and emerging vulnerabilities, ensuring your defenses stay ahead of attackers.",
  },
  {
    icon: Lock,
    title: "Secure Deployment Pipelines",
    description: "Integrating security checks and hardening measures throughout the AI model development and deployment lifecycle.",
  },
];

const metrics = [
  { label: "Detection Rate", value: ">20%", description: "Accuracy improvement after poisoning mitigation" },
  { label: "Model Degradation", value: "<5%", description: "Accuracy loss under attack with our defense" },
  { label: "Response Time", value: "Real-time", description: "Immediate threat detection and alerts" },
  { label: "Risk Reduction", value: "85%", description: "Decrease in security and financial risks" },
];

const SolutionSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl space-y-20">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Proactive Defense Strategy: <span className="text-primary">Key Pillars</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A specialized, AI-powered approach to counter emergent threats. Integrating cutting-edge machine learning to protect AI assets at every stage.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-5 blur-3xl" />
          <div className="relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-12">
              Proven <span className="text-primary">Success Metrics</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-bold text-primary">{metric.value}</div>
                  <div className="font-semibold text-foreground">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
