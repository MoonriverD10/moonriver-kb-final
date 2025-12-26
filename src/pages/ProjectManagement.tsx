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
  ExternalLink,
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export default function ProjectManagement() {
  const [activeStep, setActiveStep] = useState("step1");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const totalSlides = 15; // Updated to 15 slides based on conversion

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

  const scrollToContent = () => {
    const contentElement = document.getElementById('main-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-6 w-6 text-primary" />
              <h1 className="text-xl font-bold">Project Management Hub</h1>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="blueprint" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-[600px] mx-auto">
            <TabsTrigger value="blueprint" className="gap-2">
              <Network className="h-4 w-4" />
              Visual Blueprint
            </TabsTrigger>
            <TabsTrigger value="manual" className="gap-2">
              <BookOpen className="h-4 w-4" />
              SOP Manual
            </TabsTrigger>
            <TabsTrigger value="mindmap" className="gap-2">
              <BrainCircuit className="h-4 w-4" />
              Interactive Mind Map
            </TabsTrigger>
          </TabsList>

          {/* Visual Blueprint Tab */}
          <TabsContent value="blueprint" className="space-y-8">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl font-bold mb-4">Project Management Workflow</h2>
              <p className="text-muted-foreground text-lg">
                A comprehensive visual guide to the Moon River project lifecycle, from contract award to final closeout.
              </p>
            </div>

            {/* 5-Panel Infographic Series */}
            <div className="space-y-12">
              {/* Panel 1 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <h3 className="text-2xl font-bold">Contract & Setup</h3>
                </div>
                <div className="rounded-xl overflow-hidden border shadow-lg bg-card">
                  <img 
                    src="/images/pm-workflow-panel-1-roadmap.png" 
                    alt="Panel 1: Chapters 1-3 Road Map" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-muted-foreground italic">
                  Follow the Road: Start at Contract Award, proceed through Review & Execution, and complete Start-up Docs before moving to Design.
                </p>
              </div>

              {/* Panel 2 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <h3 className="text-2xl font-bold">Design & Submittals</h3>
                </div>
                <div className="rounded-xl overflow-hidden border shadow-lg bg-card">
                  <img 
                    src="/images/pm-workflow-panel-2.png" 
                    alt="Panel 2: Design & Submittals Workflow" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-muted-foreground italic">
                  Key Steps: Shop Drawings, Material Samples, Engineering, Approval Loop.
                </p>
              </div>

              {/* Panel 3 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <h3 className="text-2xl font-bold">Production</h3>
                </div>
                <div className="rounded-xl overflow-hidden border shadow-lg bg-card">
                  <img 
                    src="/images/pm-workflow-panel-3.png" 
                    alt="Panel 3: Production Workflow" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-muted-foreground italic">
                  Key Steps: Release to Production, Material Ordering, Fabrication, Assembly, Paint, QC.
                </p>
              </div>

              {/* Panel 4 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                  <h3 className="text-2xl font-bold">Logistics & Installation</h3>
                </div>
                <div className="rounded-xl overflow-hidden border shadow-lg bg-card">
                  <img 
                    src="/images/pm-workflow-panel-4.png" 
                    alt="Panel 4: Logistics & Installation Workflow" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-muted-foreground italic">
                  Key Steps: Shipping, Site Prep, Safety, Installation, Field Adjustments.
                </p>
              </div>

              {/* Panel 5 */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">5</div>
                  <h3 className="text-2xl font-bold">Closeout</h3>
                </div>
                <div className="rounded-xl overflow-hidden border shadow-lg bg-card">
                  <img 
                    src="/images/pm-workflow-panel-5.png" 
                    alt="Panel 5: Closeout Workflow" 
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-muted-foreground italic">
                  Key Steps: Punch List, Final Billing, Warranties, Handover, Rinse & Repeat.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* SOP Manual Tab */}
          <TabsContent value="manual">
            <div className="grid lg:grid-cols-[300px_1fr] gap-8">
              {/* Sidebar Navigation */}
              <div className="space-y-4">
                <div className="sticky top-24 space-y-2">
                  <h3 className="font-bold text-lg px-2 mb-4">Quick Navigation</h3>
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => {
                        setActiveStep(step.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3",
                        activeStep === step.id 
                          ? "bg-primary text-primary-foreground shadow-md" 
                          : "hover:bg-accent text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <step.icon className="h-5 w-5 shrink-0" />
                      <div className="line-clamp-1 font-medium">{step.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="space-y-8">
                {steps.map((step) => (
                  <div 
                    key={step.id} 
                    className={cn(
                      "scroll-mt-24 transition-all duration-500",
                      activeStep === step.id ? "opacity-100" : "hidden"
                    )}
                  >
                    <Card className="border-2 shadow-lg">
                      <CardHeader className="border-b bg-muted/30 pb-8">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-primary/10 rounded-xl">
                            <step.icon className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-3xl">{step.title}</CardTitle>
                            <CardDescription className="text-lg mt-1">
                              {step.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-8">
                        {step.content}
                      </CardContent>
                    </Card>

                    {/* Navigation Footer */}
                    <div className="flex justify-between mt-8">
                      <Button
                        variant="outline"
                        disabled={activeStep === "step1"}
                        onClick={() => {
                          const currentIndex = steps.findIndex(s => s.id === activeStep);
                          if (currentIndex > 0) {
                            setActiveStep(steps[currentIndex - 1].id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                      >
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Previous Chapter
                      </Button>
                      <Button
                        disabled={activeStep === steps[steps.length - 1].id}
                        onClick={() => {
                          const currentIndex = steps.findIndex(s => s.id === activeStep);
                          if (currentIndex < steps.length - 1) {
                            setActiveStep(steps[currentIndex + 1].id);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                      >
                        Next Chapter
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Interactive Mind Map Tab */}
          <TabsContent value="mindmap">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Workflow Map</CardTitle>
                <CardDescription>
                  Explore the interconnected relationships between departments and processes.
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[600px] flex items-center justify-center bg-muted/20">
                <div className="text-center space-y-4">
                  <BrainCircuit className="h-16 w-16 text-muted-foreground mx-auto opacity-50" />
                  <p className="text-muted-foreground">Interactive Mind Map module coming soon...</p>
                  <Button variant="outline" onClick={() => setActiveStep("step1")}>
                    View SOP Manual Instead
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
