import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  BookOpen, 
  Calculator, 
  CheckSquare, 
  FileText, 
  ShieldCheck,
  ArrowRight,
  Users,
  Lightbulb
} from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const departments = [
    {
      title: "Estimating",
      description: "Learn how to scope projects, calculate costs, and prepare winning bids.",
      icon: FileText,
      href: "/examples?category=Estimating",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    {
      title: "Project Management",
      description: "Master the workflows for scheduling, coordination, and execution.",
      icon: CheckSquare,
      href: "/examples?category=Project%20Management",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100"
    },
    {
      title: "Financial",
      description: "Understand billing, pay apps, and financial reporting standards.",
      icon: Calculator,
      href: "/examples?category=Financial",
      color: "text-violet-600",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-100"
    },
    {
      title: "Insurance & Compliance",
      description: "Navigate COIs, lien waivers, and safety requirements.",
      icon: ShieldCheck,
      href: "/examples?category=Insurance",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100"
    }
  ];

  return (
    <Layout>
      <div className="space-y-10 animate-in fade-in duration-500">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 lg:p-16">
          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium backdrop-blur-sm border border-primary-foreground/20">
              <GraduationCap className="h-4 w-4" />
              <span>Moon River Academy</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Master the Art of <br/>Signage Operations
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Welcome to your central training hub. Access standard operating procedures, 
              study real-world examples, and learn the Moon River way of doing business.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/examples" className="inline-flex">
                <Button size="lg" variant="secondary" className="font-semibold gap-2 h-12 px-6 w-full">
                  <BookOpen className="h-5 w-5" />
                  Browse Training Library
                </Button>
              </Link>
              <Link href="/examples?type=template" className="inline-flex">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary/10 hover:text-primary-foreground font-semibold gap-2 h-12 px-6 w-full">
                  <FileText className="h-5 w-5" />
                  View Templates
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Abstract Background Pattern */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="absolute right-0 top-0 h-full w-1/2 text-white" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 0 L100 0 L100 100 L50 100 Z" fill="currentColor" />
            </svg>
          </div>
        </section>

        {/* Learning Tracks */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-heading font-bold flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              Learning Tracks
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <Link key={dept.title} href={dept.href} className="block h-full group">
                  <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 ${dept.borderColor} bg-card`}>
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl ${dept.bgColor} ${dept.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <dept.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="font-heading text-xl">{dept.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">
                        {dept.description}
                      </CardDescription>
                      <div className={`flex items-center text-sm font-medium ${dept.color} opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300`}>
                        Start Learning <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Quick Resources */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2 bg-slate-900 text-slate-50 border-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                New Employee Onboarding
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 mb-6">
                Just joined the team? Start here to understand our core values, 
                communication standards, and basic operational tools.
              </p>
              <Button variant="secondary" className="w-full sm:w-auto">
                Start Onboarding Module
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Can't find what you're looking for? Contact the training coordinator.
              </p>
              <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10 text-primary">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
}
