import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        {/* CTA Section */}
        <div className="text-center space-y-6 pb-12 border-b border-border/50">
          <h3 className="text-3xl md:text-4xl font-bold">
            Ready to <span className="text-primary">Secure Your AI</span>?
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join leading organizations protecting their AI infrastructure with our comprehensive security platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="hero" asChild>
              <a href="/demo">Request Demo</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/demo">Contact Sales</a>
            </Button>
          </div>
        </div>

        {/* Footer Info */}
        <div className="pt-12 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <div className="text-lg font-bold">CHILL STACK</div>
                <div className="text-sm text-muted-foreground">AI Security Platform by GANSMA</div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-sm text-muted-foreground mb-2">Team Members</div>
              <div className="text-sm font-medium">
                Rohith S (Lead) • Naveen K C • Ragul S • Raghavendra R • Praveen P
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Mentor: Narasimha Guptha K • Vertical: Cloud & DevOps
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border/30">
            © 2025 CHILL STACK. All rights reserved. • Cohort/Batch: 2024-28
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
