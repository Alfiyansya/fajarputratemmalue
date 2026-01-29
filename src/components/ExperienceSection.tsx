import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Quality Control Inspector",
    company: "PT. Citra Nugerah Karya",
    period: "Previous Role",
    type: "Quality Assurance",
    achievements: [
      "Ensured 100% product accuracy through systematic visual inspection and data-driven reporting",
      "Maintained calibration logs and generated quality metrics for continuous improvement initiatives",
      "Applied statistical tolerance limits to minimize defects and improve production efficiency",
    ],
  },
  {
    title: "Production Operator",
    company: "PT. Aisan Nasmoco / PT. Kasen",
    period: "Previous Role",
    type: "Manufacturing",
    achievements: [
      "Monitored production data and machine performance metrics in real-time",
      "Documented process deviations and contributed to root-cause analysis",
      "Maintained adherence to strict quality standards across high-volume production lines",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building analytical foundations through hands-on quality assurance and data-driven roles
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.title} className={`relative pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-auto md:right-0 top-6 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 md:translate-x-1/2" 
                       style={{ [index % 2 === 0 ? 'right' : 'left']: index % 2 === 0 ? '-1.5px' : 'auto' }} />

                  <Card className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <Briefcase className="h-4 w-4 text-primary" />
                            {exp.title}
                          </CardTitle>
                          <p className="text-primary font-medium mt-1">{exp.company}</p>
                        </div>
                        <Badge variant="secondary" className="shrink-0">{exp.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
