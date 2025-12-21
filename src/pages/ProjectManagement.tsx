import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import projectManagementInfographic from "@/assets/project-management-infographic-clean.png";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, AlertCircle, FileText, Truck, HardHat, ClipboardCheck, PenTool, ShieldCheck, CheckSquare, Play, Pause, Maximize2, X, ChevronLeft, ChevronRight, Presentation, Network, BrainCircuit } from "lucide-react";
import { MindMap } from "@/components/MindMap";
import { Flashcards } from "@/components/Flashcards";

export default function ProjectManagement() {
  const [activeStep, setActiveStep] = useState("step1");
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [currentSlide]);

  // Slideshow logic
  const totalSlides = 11;
  const slideDuration = 5000; // 5 seconds per slide

  // Auto-play effect
  useState(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, slideDuration);
    }
    return () => clearInterval(interval);
  });

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsPlaying(false); // Pause on manual interaction
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsPlaying(false); // Pause on manual interaction
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const steps = [
    {
      id: "step1",
      title: "1. Contract & Setup",
      icon: FileText,
      description: "Review, Execute, and Initialize",
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3>Chapter 1: Awarded Contract/Purchase Order</h3>
            <p>
              Starting a project on a positive note is crucial for success. Thoroughly examine the Contract or Purchase Order immediately upon receipt.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 my-4">
              <h4 className="text-blue-700 dark:text-blue-300 font-bold flex items-center gap-2 mt-0">
                <AlertCircle className="h-5 w-5" />
                Critical Review Elements
              </h4>
              <ul className="mt-2 space-y-1 text-sm">
                <li><strong>Contract Amount:</strong> Ensure it matches your original bid exactly.</li>
                <li><strong>Scope of Work:</strong> Compare listed Signage Work/Scope to your bid.</li>
                <li><strong>Project Details:</strong> Verify project name, location, and job number.</li>
                <li><strong>Installation Responsibilities:</strong> Check material, labor, supervision, and equipment needs.</li>
              </ul>
            </div>

            <h3>Chapter 2: Execute Contract</h3>
            <p>
              After completing due diligence, sign the contract (including all initials) and email it to the General Contractor's project manager.
            </p>
            <p className="italic text-muted-foreground">
              "A handshake may seal intent, but signatures seal destiny."
            </p>

            <h3>Chapter 3: Start-up Documents</h3>
            <div className="grid gap-4 md:grid-cols-2 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Certificate of Insurance (COI)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Required with every Contract. Proof of General Liability, Auto, and Workers' Comp coverage.
                  <br/><br/>
                  <strong>Pro Tip:</strong> Ensure "stored materials" are covered if you are billing for them before installation.
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
              Installation is where the rubber meets the road. Success depends on coordination <em>before</em> the truck leaves the shop.
            </p>

            <div className="grid gap-4 md:grid-cols-2 my-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-bold mb-2">Site Readiness</h4>
                <p className="text-sm text-muted-foreground">Confirm with the Superintendent: Is the wall ready? Is the power run? Is the ground level for the lift?</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-bold mb-2">Equipment & Access</h4>
                <p className="text-sm text-muted-foreground">Determine if you need a crane, boom truck, or scissor lift. Verify site access for heavy equipment.</p>
              </div>
            </div>

            <h3>Safety Plan</h3>
            <p>
              A comprehensive safety plan adhering to OSHA standards is often required. For signage, this can usually be a simple one-page outline, but it must be on file.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500 mt-4">
              <h4 className="text-yellow-700 dark:text-yellow-300 font-bold mt-0">Permits & Licenses</h4>
              <p className="text-sm mt-2">
                <strong>Don't get stopped on install day!</strong> Confirm all signage and electrical permits are pulled and posted on site. If the G.C. hasn't pulled them, you must handle it.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "step5",
      title: "5. Closeout & Payment",
      icon: ClipboardCheck,
      description: "Warranties, Retainage, and Final Invoice",
      content: (
        <div className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h3>The Finish Line</h3>
            <p>
              The job isn't done until the paperwork is submitted and the final check clears.
            </p>

            <h3>Required Closeout Documents</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-3 p-3 bg-card rounded-md border">
                <FileText className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <strong>As-Built Drawings:</strong>
                  <p className="text-sm text-muted-foreground">Final drawings showing exactly how the signs were built and installed, noting any field changes.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-card rounded-md border">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <strong>Warranty Documents:</strong>
                  <p className="text-sm text-muted-foreground">Standard 1-year warranty on labor/materials, plus manufacturer warranties on LEDs/power supplies.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-card rounded-md border">
                <CheckSquare className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <strong>Maintenance Manual:</strong>
                  <p className="text-sm text-muted-foreground">Instructions for cleaning and servicing the signage.</p>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <h3>Final Payment & Retainage</h3>
              <p>
                Submit your final invoice (G702/G703) for the remaining balance, including the 5-10% retainage held throughout the project.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4 max-w-7xl">
      <div className="mb-12 space-y-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Project Management Hub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Your interactive guide to the Moon River Sign Company project lifecycle. Master the workflow from contract award to final closeout.
          </p>
        </div>

        {/* 5-Stage Isometric Infographic with HTML Overlay */}
        <div className="w-full bg-white rounded-xl shadow-sm border p-4 overflow-hidden relative group">
          {/* The Clean Illustration */}
          <img 
            src={projectManagementInfographic} 
            alt="Project Management Workflow" 
            className="w-full h-auto object-cover rounded-lg mb-8"
          />
          
          {/* HTML Text Overlay - Responsive Grid */}
          <div className="grid grid-cols-5 gap-2 text-center mb-12 px-2">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-primary text-sm md:text-base lg:text-lg uppercase tracking-tight">Stage 1</h3>
              <p className="text-xs md:text-sm font-semibold text-slate-700 uppercase leading-tight">Contract & Setup</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-primary text-sm md:text-base lg:text-lg uppercase tracking-tight">Stage 2</h3>
              <p className="text-xs md:text-sm font-semibold text-slate-700 uppercase leading-tight">Design & Approval</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-primary text-sm md:text-base lg:text-lg uppercase tracking-tight">Stage 3</h3>
              <p className="text-xs md:text-sm font-semibold text-slate-700 uppercase leading-tight">Production & Delivery</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-primary text-sm md:text-base lg:text-lg uppercase tracking-tight">Stage 4</h3>
              <p className="text-xs md:text-sm font-semibold text-slate-700 uppercase leading-tight">Installation</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-primary text-sm md:text-base lg:text-lg uppercase tracking-tight">Stage 5</h3>
              <p className="text-xs md:text-sm font-semibold text-slate-700 uppercase leading-tight">Closeout</p>
            </div>
          </div>

          {/* Scroll Indicator - Centered at the bottom */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center">
            <div 
              onClick={() => document.getElementById('project-stages-content')?.scrollIntoView({ behavior: 'smooth' })}
              className="animate-bounce bg-white border shadow-md px-6 py-2 rounded-full text-sm font-medium text-primary flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 rotate-90" />
              Scroll for Details
            </div>
          </div>
        </div>
      </div>

      <div id="project-stages-content" className="flex items-center gap-2 mb-4 text-muted-foreground pt-4">
        <div className="h-px bg-border flex-1"></div>
        <span className="text-sm font-medium uppercase tracking-wider">Detailed Workflow Below</span>
        <div className="h-px bg-border flex-1"></div>
      </div>

      <Tabs defaultValue="sop" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8 max-w-[800px]">
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
              <div className="sticky top-6">
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
                  Visual guide to the D10 SOP workflow. Watch the overview to understand the big picture.
                </p>
              </div>
            </div>

            {/* Slideshow Container */}
            <div className={cn(
              "relative bg-black rounded-xl overflow-hidden shadow-2xl transition-all duration-500",
              isFullscreen ? "fixed inset-0 z-50 rounded-none" : "aspect-video w-full max-w-5xl mx-auto"
            )}>
              {/* Close Fullscreen Button */}
              {isFullscreen && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                  onClick={toggleFullscreen}
                >
                  <X className="w-8 h-8" />
                </Button>
              )}

              {/* Main Slide Image */}
              <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
                {!imgError ? (
                  <img 
                    src={`/images/slide-${String(currentSlide + 1).padStart(2, '0')}.png`}
                    alt={`Slide ${currentSlide + 1}`}
                    className="max-h-full max-w-full object-contain"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="text-white/50 flex flex-col items-center">
                    <p className="text-4xl font-bold mb-4">Image Not Found</p>
                    <p>slide-{String(currentSlide + 1).padStart(2, '0')}.png</p>
                  </div>
                )}
              </div>

              {/* Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-between">
                
                {/* Left Controls */}
                <div className="flex items-center gap-4">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/20"
                    onClick={togglePlay}
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </Button>
                  
                  <div className="text-white/90 font-medium font-mono">
                    {currentSlide + 1} / {totalSlides}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="flex-1 mx-6 h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300 ease-linear"
                    style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                  />
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={prevSlide}>
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={nextSlide}>
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                  <div className="w-px h-6 bg-white/20 mx-2" />
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleFullscreen}>
                    <Maximize2 className="w-5 h-5" />
                  </Button>
                </div>
              </div>
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
                  Explore the connections between different project stages. Drag to pan, scroll to zoom, and click nodes for details.
                </p>
              </div>
            </div>
            
            <MindMap />
          </div>
        </TabsContent>

        {/* TAB 4: FLASHCARDS */}
        <TabsContent value="flashcards" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <BrainCircuit className="w-6 h-6 text-primary" />
                  Workflow Flashcards
                </h2>
                <p className="text-muted-foreground mt-1">
                  Test your knowledge of the D10 SOP. Click cards to flip and reveal the answer.
                </p>
              </div>
            </div>
            
            <Flashcards />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
