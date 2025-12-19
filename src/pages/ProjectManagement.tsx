import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, AlertCircle, FileText, Truck, HardHat, ClipboardCheck, PenTool, ShieldCheck, CheckSquare } from "lucide-react";

export default function ProjectManagement() {
  const [activeStep, setActiveStep] = useState("step1");

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
                Submit your final Pay Application (often AIA G702/G703) for the remaining balance, including Retainage (usually 10%). Ensure all lien waivers are submitted to release payment.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];



  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-heading font-bold text-primary">Project Management Workflow</h1>
        <p className="text-muted-foreground text-lg">
          The Moon River Standard Operating Procedure (SOP) for executing signage projects.
        </p>
      </div>

      {/* Interactive Infographic Section */}
      <Card className="overflow-hidden border-2 border-primary/10 shadow-lg bg-white dark:bg-slate-950">
        <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] bg-slate-50 dark:bg-slate-900">
          {/* The Infographic Image */}
          <img 
            src="/documents/previews/D10PMInfographicv2.png" 
            alt="Project Management Workflow" 
            className="w-full h-full object-contain"
          />
          
          {/* Clickable Hotspots - Overlay Grid */}
          <div className="absolute inset-0 grid grid-cols-5 h-full w-full">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={cn(
                  "h-full w-full transition-all duration-200 focus:outline-none group relative",
                  activeStep === step.id 
                    ? "bg-primary/10 ring-2 ring-inset ring-primary" 
                    : "hover:bg-primary/5"
                )}
              >
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 p-2 text-xs font-bold bg-primary/90 text-white opacity-0 transition-opacity",
                  activeStep === step.id ? "opacity-100" : "group-hover:opacity-100"
                )}>
                  View Details
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="p-4 bg-muted/30 border-t text-center text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <PenTool className="h-4 w-4 animate-bounce" />
            Click on any stage in the diagram above to view the detailed SOP procedures below.
          </span>
        </div>
      </Card>

      {/* Detailed Content Section */}
      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation (Desktop) */}
        <div className="hidden lg:block space-y-2">
          <h3 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4 px-2">Workflow Stages</h3>
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={cn(
                "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3",
                activeStep === step.id 
                  ? "bg-primary text-primary-foreground shadow-md" 
                  : "hover:bg-accent text-muted-foreground hover:text-foreground"
              )}
            >
              <step.icon className="h-4 w-4" />
              {step.title}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3">
          <Card className="min-h-[500px] border-l-4 border-l-primary">
            <CardHeader className="border-b bg-muted/10 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  {(() => {
                    const Icon = steps.find(s => s.id === activeStep)?.icon;
                    return Icon ? <Icon className="h-6 w-6" /> : null;
                  })()}
                </div>
                <CardTitle className="text-2xl">
                  {steps.find(s => s.id === activeStep)?.title}
                </CardTitle>
              </div>
              <CardDescription className="text-base ml-14">
                {steps.find(s => s.id === activeStep)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                {steps.find(s => s.id === activeStep)?.content}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
