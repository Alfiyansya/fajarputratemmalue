import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  FileSpreadsheet, 
  BarChart3, 
  Search,
  Brain,
  Lightbulb,
  MessageSquare,
  Presentation,
  GraduationCap,
  Award
} from "lucide-react";

const hardSkills = [
  { name: "Python", description: "Scripting & Analysis", icon: Code2 },
  { name: "SQL", description: "Database Querying", icon: Database },
  { name: "Excel", description: "Advanced Analytics", icon: FileSpreadsheet },
  { name: "Data Visualization", description: "Charts & Dashboards", icon: BarChart3 },
  { name: "EDA", description: "Exploratory Analysis", icon: Search },
];

const softSkills = [
  { name: "Logical Analysis", icon: Brain },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Data Storytelling", icon: Presentation },
  { name: "Communication", icon: MessageSquare },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills Dashboard
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hard Skills */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {hardSkills.map((skill) => (
                  <Card key={skill.name} className="bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <skill.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{skill.name}</h4>
                          <p className="text-xs text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Soft Skills
              </h3>
              <div className="space-y-3">
                {softSkills.map((skill) => (
                  <Card key={skill.name} className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <skill.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education & Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Bachelor of Mathematics Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">Expected Graduation: 2026</p>
                  <Badge variant="secondary" className="mt-2">In Progress</Badge>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    DQLab Bootcamp Certificate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">Data Analyst with Excel, SQL, & Python</p>
                  <Badge className="mt-2">Completed</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
