import { useState, useEffect } from "react";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  HardHat, 
  LayoutDashboard, 
  PenTool, 
  Truck, 
  Users,
  Presentation,
  Network,
  BrainCircuit,
  ChevronLeft,
  Maximize2,
  Play,
  Pause,
  X,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function ProjectManagement() {
  const [activeStep, setActiveStep] = useState("step1");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const totalSlides = 12; // Assuming 12 slides for now

  // Auto-play effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !isFullscreen) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 5000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, isFullscreen]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsPlaying(false); // Pause on manual interaction
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsPlaying(false); // Pause on manual interaction
  };

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const steps = [
    {
      id: "step1",
      title: "1. Estimating & Sales",
      icon: FileText,
      description: "Initial Contact, Site Survey, and Proposal",
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3>The Hand-Off</h3>
            <p>
              Every successful project starts with a clean hand-off from Sales to Project Management. 
              The <strong>Job Folder</strong> is the single source of truth.
            </p>
            
            <div className="bg-muted p-4 rounded-lg border-l-4 border-primary my-4">
              <h4 className="text-primary font-bold mt-0">Critical Checklist</h4>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Signed Contract or Purchase Order</li>
                <li>Approved Design Proofs</li>
                <li>Site Survey Photos & Measurements</li>
                <li>Deposit Check (if applicable)</li>
              </ul>
            </div>

            <h3>Setting Up the Job</h3>
            <p>
              Once the job is booked, the Project Manager (PM) creates the digital job folder on the server.
              Naming convention: <code>YY-MM-DD_ClientName_JobDescription</code>.
            </p>

            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Work Order (WO)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  The internal document that travels with the job through the shop. It contains all specs, colors, and deadlines.
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Schedule of Values (SOV)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  A detailed breakdown of your bid. This form enables the G.C. to approve your monthly billing based on percentage of work completed.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "step2",
      title: "2. Design & Approval",
      icon: PenTool,
      description: "Submittals, Shop Drawings, and Samples",
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3>The Submittal Process</h3>
            <p>
              This is the "Measure Twice, Cut Once" phase. You must obtain formal approval from the Architect and Owner before manufacturing begins.
            </p>

            <div className="grid gap-6 md:grid-cols-3 my-6">
              <div className="border rounded-lg p-4 text-center hover:bg-accent/50 transition-colors">
                <div className="font-bold text-lg mb-2">1. Shop Drawings</div>
                <p className="text-sm text-muted-foreground">Detailed technical drawings showing dimensions, materials, and mounting methods.</p>
              </div>
              <div className="border rounded-lg p-4 text-center hover:bg-accent/50 transition-colors">
                <div className="font-bold text-lg mb-2">2. Material Samples</div>
                <p className="text-sm text-muted-foreground">Physical samples of paint colors, vinyls, and metals for finish approval.</p>
              </div>
              <div className="border rounded-lg p-4 text-center hover:bg-accent/50 transition-colors">
                <div className="font-bold text-lg mb-2">3. Product Data</div>
                <p className="text-sm text-muted-foreground">Spec sheets for LEDs, power supplies, and other components.</p>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border-l-4 border-orange-500">
              <h4 className="text-orange-700 dark:text-orange-300 font-bold mt-0">Managing the Approval Loop</h4>
              <p className="text-sm mt-2">
                Expect revisions. When drawings are returned "Revise and Resubmit," prioritize the changes and turn them around quickly to avoid schedule delays. Only proceed to production when you receive a status of <strong>"Approved"</strong> or <strong>"Approved as Noted."</strong>
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "step3",
      title: "3. Production & Delivery",
      icon: Truck,
      description: "Fabrication, Quality Control, and Logistics",
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3>Releasing to Production</h3>
            <p>
              Once submittals are approved, formally release orders to manufacturers. Confirm production lead times immediately and update the General Contractor.
            </p>

            <h3>Logistics & Delivery</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Clear Instructions:</strong> Give the manufacturer the site superintendent's phone number for delivery coordination.</li>
              <li><strong>Receiving:</strong> Ensure a knowledgeable person is on-site to inspect deliveries. If the G.C. accepts damaged goods without noting it, you may be liable.</li>
              <li><strong>Direct Shipping:</strong> Whenever possible, ship directly to the job site to minimize handling damages.</li>
            </ul>

            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mt-6">
              <h4 className="font-bold flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                Quality Control Checklist
              </h4>
              <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                <div className="flex items-center gap-2"><input type="checkbox" disabled /> Correct Colors</div>
                <div className="flex items-center gap-2"><input type="checkbox" disabled /> Correct Dimensions</div>
                <div className="flex items-center gap-2"><input type="checkbox" disabled /> No Scratches/Dents</div>
                <div className="flex items-center gap-2"><input type="checkbox" disabled /> All Hardware Included</div>
                <div className="flex items-center gap-2"><input type="checkbox" disabled /> UL Labels Applied</div>
                <div className="flex items-center gap-2"><input type="checkbox" disabled /> Templates Included</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "step4",
      title: "4. Installation",
      icon: HardHat,
      description: "Site Prep, Safety, and Execution",
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3>Pre-Installation Coordination</h3>
            <p>
              One week before install, confirm site readiness. Are the walls painted? Is power available? Is the lift rental scheduled?
            </p>

            <div className="grid gap-4 md:grid-cols-2 my-6">
              <div className="bg-card border p-4 rounded-lg">
                <h4 className="font-bold mb-2">Safety First</h4>
                <p className="text-sm text-muted-foreground">
                  Every installer must have their PPE (Hard hat, vest, boots, glasses). Conduct a tailgate safety meeting before work begins.
                </p>
              </div>
              <div className="bg-card border p-4 rounded-lg">
                <h4 className="font-bold mb-2">Permits</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure the original permit is on-site. Inspectors can shut down a job if the permit isn't visible.
                </p>
              </div>
            </div>

            <h3>Closeout</h3>
            <p>
              After installation, take high-quality photos. Get the site superintendent to sign off on the work order.
              Submit the final invoice immediately with photos attached.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <div className="h-6 w-px bg-border" />
            <h1 className="text-xl font-bold text-foreground">Project Management Hub</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Master the Workflow</h2>
          <p className="text-xl text-muted-foreground">
            From the first estimate to the final install, precision is our product.
            Use this guide to navigate every stage of a Moon River project.
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="sop" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
            <TabsTrigger value="sop" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              SOP Manual
            </TabsTrigger>
            <TabsTrigger value="blueprint" className="flex items-center gap-2">
              <Presentation className="w-4 h-4" />
              Visual Blueprint
            </TabsTrigger>
            <TabsTrigger value="mindmap" className="flex items-center gap-2">
              <Network className="w-4 h-4" />
              Interactive Mind Map
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="flex items-center gap-2">
              <BrainCircuit className="w-4 h-4" />
              Knowledge Check
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: SOP MANUAL */}
          <TabsContent value="sop" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left Column: Navigation */}
              <div className="lg:col-span-4 space-y-4">
                <div className="sticky top-24">
                  <h2 className="text-lg font-semibold mb-4 px-2">Project Stages</h2>
                  <div className="space-y-3">
                    {steps.map((step) => {
                      const Icon = step.icon;
                      const isActive = activeStep === step.id;
                      return (
                        <div
                          key={step.id}
                          onClick={() => setActiveStep(step.id)}
                          className={cn(
                            "w-full text-left p-4 rounded-xl border transition-all duration-200 group relative overflow-hidden cursor-pointer",
                            isActive 
                              ? "bg-primary text-primary-foreground border-primary shadow-lg scale-[1.02]" 
                              : "bg-card hover:bg-accent hover:border-primary/50"
                          )}
                        >
                          <div className="flex items-start gap-4 relative z-10">
                            <div className={cn(
                              "p-2 rounded-lg transition-colors",
                              isActive ? "bg-primary-foreground/20" : "bg-muted group-hover:bg-background"
                            )}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="font-bold text-sm uppercase tracking-wide opacity-90 mb-1">
                                {step.title}
                              </div>
                              <div className={cn(
                                "text-xs",
                                isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                              )}>
                                {step.description}
                              </div>
                            </div>
                          </div>
                          
                          {/* Active Indicator Arrow */}
                          {isActive && (
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-primary"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="lg:col-span-8">
                <Card className="min-h-[600px] shadow-xl border-muted">
                  <CardHeader className="border-b bg-muted/30 pb-6">
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      In This Section
                    </div>
                    <CardTitle className="text-3xl flex items-center gap-3">
                      {steps.find(s => s.id === activeStep)?.icon && (
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {(() => {
                            const Icon = steps.find(s => s.id === activeStep)!.icon;
                            return <Icon className="w-8 h-8" />;
                          })()}
                        </div>
                      )}
                      {steps.find(s => s.id === activeStep)?.title.split(". ")[1]}
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {steps.find(s => s.id === activeStep)?.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <ScrollArea className="h-[600px] pr-6">
                      {steps.find(s => s.id === activeStep)?.content}
                    </ScrollArea>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: VISUAL BLUEPRINT */}
          <TabsContent value="blueprint" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Presentation className="w-6 h-6 text-primary" />
                    The Project Blueprint
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Visual guide to the D10 SOP workflow. Flip through the slides below.
                  </p>
                </div>
                <Button variant="outline" className="gap-2" asChild>
                  <a href="https://drive.google.com/file/d/1riniiwRHP5b_6XwAGZd9_h0Hi_AzK_i6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Open in Drive
                  </a>
                </Button>
              </div>

              {/* Google Drive Embed Container */}
              <div className="aspect-video w-full max-w-5xl mx-auto bg-neutral-100 rounded-xl overflow-hidden shadow-2xl border border-neutral-200">
                <iframe 
                  src="https://drive.google.com/file/d/1riniiwRHP5b_6XwAGZd9_h0Hi_AzK_i6/preview" 
                  width="100%" 
                  height="100%" 
                  allow="autoplay"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </TabsContent>

          {/* TAB 3: INTERACTIVE MIND MAP */}
          <TabsContent value="mindmap" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <Network className="w-6 h-6 text-primary" />
                    Process Mind Map
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Explore the connections between different departments and tasks.
                  </p>
                </div>
              </div>
              
              <div className="aspect-video w-full bg-muted/30 rounded-xl border-2 border-dashed border-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Network className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Interactive Mind Map Coming Soon</p>
                  <p className="text-sm">This feature is currently under development.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* TAB 4: KNOWLEDGE CHECK */}
          <TabsContent value="flashcards" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <BrainCircuit className="w-6 h-6 text-primary" />
                    Knowledge Check
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Test your understanding of the Moon River SOPs.
                  </p>
                </div>
              </div>

              <div className="aspect-video w-full bg-muted/30 rounded-xl border-2 border-dashed border-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BrainCircuit className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Flashcards Coming Soon</p>
                  <p className="text-sm">This feature is currently under development.</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
