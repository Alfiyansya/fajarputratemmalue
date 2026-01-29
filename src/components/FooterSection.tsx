import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail } from "lucide-react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* CTA Section */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Turn Data Into{" "}
            <span className="text-primary">Decisions</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Open to opportunities in Data Analytics — let's connect and discuss how I can bring value to your team.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild className="gap-2">
              <a href="https://linkedin.com/in/fajarputratemmalue" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a href="mailto:fajartemmalue@gmail.com">
                <Mail className="h-5 w-5" />
                Send Email
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <Download className="h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Fajar Putra Temmalue. All rights reserved.</p>
            <p>
              Built with precision & passion for data.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
