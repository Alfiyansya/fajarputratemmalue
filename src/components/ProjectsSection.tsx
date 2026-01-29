import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileSpreadsheet, Database, Code2 } from "lucide-react";

const projects = [
  {
    title: "Sales Performance Dashboard",
    description: "Transformed raw sales data into actionable insights, identifying top-performing products and seasonal trends that drove strategic inventory decisions.",
    icon: FileSpreadsheet,
    tech: ["Excel", "Pivot Tables", "Data Visualization"],
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    title: "Customer Segmentation Analysis",
    description: "Segmented 10,000+ customer records to identify high-value demographics for targeted marketing strategies, resulting in improved campaign efficiency.",
    icon: Database,
    tech: ["SQL", "Data Analysis", "Segmentation"],
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Customer Churn Prediction",
    description: "Built a predictive model to identify at-risk customers, enabling proactive retention strategies and reducing potential revenue loss.",
    icon: Code2,
    tech: ["Python", "Machine Learning", "Pandas"],
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Portfolio projects from DQLab Bootcamp training, demonstrating practical data analysis skills
            </p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="bg-card border-border hover:border-primary/50 hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center mb-4`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2 text-primary hover:text-primary/80">
                    View Details
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
