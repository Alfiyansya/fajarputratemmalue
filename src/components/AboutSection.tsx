import { Card, CardContent } from "@/components/ui/card";
import { Target, TrendingUp, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              My journey from the manufacturing floor to data dashboards may seem unconventional, but it's precisely this path that makes me a uniquely qualified Data Analyst. Every day on the production line, I learned that <strong className="text-foreground">precision isn't optional—it's everything.</strong>
            </p>

            <p>
              As a Quality Control Inspector, I developed an obsessive attention to detail, learning to spot anomalies that others might miss. I maintained calibration logs, generated quality metrics, and applied statistical tolerance limits to minimize defects. These weren't just job duties—they were my first real lessons in <strong className="text-foreground">data-driven decision making.</strong>
            </p>

            <p>
              My Mathematics Education background provides the logical foundation that powers my analytical thinking. Combined with intensive training from the DQLab Bootcamp in Python, SQL, and Excel, I now translate raw data into actionable insights with the same rigor I once applied to ensuring product quality.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Precision-Driven</h3>
                <p className="text-sm text-muted-foreground">
                  QC experience built my eye for accuracy and data integrity
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Insight-Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Transforming raw numbers into business-ready insights
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <GraduationCap className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Always Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Currently completing B.Ed. Mathematics & DQLab Bootcamp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
