import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 dashboard-grid">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Name */}
          <p className="text-lg md:text-xl text-primary font-semibold mb-2 animate-fade-in">
            Fajar Putra Temmalue
          </p>

          {/* Tagline */}
          <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide uppercase mb-6 animate-fade-in" style={{ animationDelay: "0.05s" }}>
            Data Analyst | Mathematics Education | Bekasi, Indonesia
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Where Mathematics{" "}
            <span className="text-primary">Meets Data</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Bringing Quality Control Precision to Data Analytics — Uncovering Insights with Accuracy You Can Trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" onClick={scrollToProjects} className="gap-2">
              View My Work
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}
