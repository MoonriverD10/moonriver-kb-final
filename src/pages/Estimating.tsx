import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Presentation, Network, BrainCircuit, ArrowRight, FileText, Search, Calculator, FileSignature, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Estimating() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const stages = [
    {
      id: 1,
      title: "Intake",
      icon: FileText,
      shortDesc: "Gather initial project details and client requirements.",
      content: "The Intake phase is the foundation of a successful estimate. It involves collecting all necessary information from the client, including architectural drawings, specifications, site conditions, and timeline expectations. A thorough intake prevents costly revisions later."
    },
    {
      id: 2,
      title: "Scope Analysis",
      icon: Search,
      shortDesc: "Deconstruct the project to identify all material and labor needs.",
      content: "Scope Analysis requires a deep dive into the documents. You must identify every sign type, quantity, material specification, and installation method. This stage often involves RFI (Request for Information) generation to clarify ambiguities."
    },
    {
      id: 3,
      title: "Pricing",
      icon: Calculator,
      shortDesc: "Calculate raw costs, labor hours, and apply margins.",
      content: "Pricing is where the math happens. Using the takeoff data, calculate raw material costs and estimate labor hours for fabrication and installation. Apply the appropriate overhead and profit margins based on the project size and complexity."
    },
    {
      id: 4,
      title: "Proposal",
      icon: FileSignature,
      shortDesc: "Draft the formal quote with clear inclusions and exclusions.",
      content: "The Proposal is your sales document. It should clearly state what is included (scope of work) and, just as importantly, what is excluded (permits, electrical hookups, etc.). A well-written proposal protects the company and sets clear expectations."
    },
    {
      id: 5,
      title: "Follow-Up",
      icon: Phone,
      shortDesc: "Track the bid status and negotiate to close the deal.",
      content: "Sending the quote is not the end. The Follow-Up stage involves tracking the proposal, answering client questions, and negotiating terms. Consistent follow-up significantly increases win rates."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-600 rounded-lg">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Estimating Hub</h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Master the art of accurate bidding. From initial intake to the final proposal, follow this standard operating procedure to win more work at the right margins.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="sop" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <TabsTrigger value="sop" className="flex items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all">
              <BookOpen className="w-4 h-4" />
              <span className="font-medium">SOP Manual</span>
            </TabsTrigger>
            <TabsTrigger value="visuals" className="flex items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all">
              <Presentation className="w-4 h-4" />
              <span className="font-medium">Visual Blueprint</span>
            </TabsTrigger>
            <TabsTrigger value="mindmap" className="flex items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all">
              <Network className="w-4 h-4" />
              <span className="font-medium">Interactive Mind Map</span>
            </TabsTrigger>
            <TabsTrigger value="flashcards" className="flex items-center gap-2 py-3 data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg transition-all">
              <BrainCircuit className="w-4 h-4" />
              <span className="font-medium">Knowledge Check</span>
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: SOP MANUAL */}
          <TabsContent value="sop" className="space-y-8 animate-in fade-in-50 duration-500">
            {/* Infographic Navigation */}
            <Card className="border-slate-200 shadow-sm overflow-hidden">
              <CardHeader className="bg-slate-50 border-b border-slate-100 pb-8">
                <CardTitle className="text-2xl text-slate-800">The Estimating Lifecycle</CardTitle>
                <CardDescription>Click a stage below to jump to the detailed procedure.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative w-full bg-white p-8 overflow-x-auto">
                  {/* Infographic Image */}
                  <div className="min-w-[800px] mb-8 flex justify-center">
                     <img 
                      src="/images/estimating-infographic.png" 
                      alt="Estimating Workflow Infographic" 
                      className="w-full max-w-5xl rounded-lg shadow-sm border border-slate-100"
                    />
                  </div>

                  {/* Interactive Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
                    {stages.map((stage) => (
                      <motion.button
                        key={stage.id}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveStage(stage.id)}
                        className={`flex flex-col items-center text-center p-4 rounded-xl border transition-all duration-200 ${
                          activeStage === stage.id 
                            ? "bg-blue-50 border-blue-500 shadow-md ring-1 ring-blue-200" 
                            : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-sm"
                        }`}
                      >
                        <div className={`p-3 rounded-full mb-3 ${
                          activeStage === stage.id ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                        }`}>
                          <stage.icon className="w-6 h-6" />
                        </div>
                        <h3 className={`font-bold mb-1 ${activeStage === stage.id ? "text-blue-700" : "text-slate-800"}`}>
                          {stage.id}. {stage.title}
                        </h3>
                        <p className="text-xs text-slate-500 leading-tight">
                          {stage.shortDesc}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {activeStage ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={activeStage}
                  >
                    <Card className="border-l-4 border-l-blue-600 shadow-md">
                      <CardHeader>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
                            Stage {activeStage}
                          </span>
                          <h2 className="text-3xl font-bold text-slate-900">
                            {stages.find(s => s.id === activeStage)?.title}
                          </h2>
                        </div>
                      </CardHeader>
                      <CardContent className="prose prose-slate max-w-none p-8 pt-0">
                        <p className="text-lg leading-relaxed text-slate-700">
                          {stages.find(s => s.id === activeStage)?.content}
                        </p>
                        <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
                          <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                            Key Deliverables
                          </h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span className="text-slate-700">Detailed takeoff sheet</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span className="text-slate-700">Vendor quotes for outsourced items</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500" />
                              <span className="text-slate-700">Draft proposal in CRM</span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ) : (
                  <Card className="bg-slate-50 border-dashed border-2 border-slate-300 flex flex-col items-center justify-center py-24 text-center">
                    <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                      <ArrowRight className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-700 mb-2">Select a Stage</h3>
                    <p className="text-slate-500 max-w-md">
                      Click on any stage in the infographic above to view the detailed Standard Operating Procedures.
                    </p>
                  </Card>
                )}
              </div>

              {/* Sidebar Resources */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <div className="text-left">
                        <div className="font-medium">Estimating Checklist</div>
                        <div className="text-xs text-slate-500">PDF Download</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                      <Calculator className="w-4 h-4 text-green-600" />
                      <div className="text-left">
                        <div className="font-medium">Margin Calculator</div>
                        <div className="text-xs text-slate-500">Excel Template</div>
                      </div>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: VISUAL BLUEPRINT */}
          <TabsContent value="visuals" className="min-h-[500px]">
            <Card>
              <CardHeader>
                <CardTitle>Visual Blueprint</CardTitle>
                <CardDescription>Slideshow presentation of the Estimating workflow.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="p-6 bg-slate-100 rounded-full">
                  <Presentation className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-700">Content Coming Soon</h3>
                <p className="text-slate-500 max-w-md">
                  The visual slide deck for the Estimating track is currently being prepared. 
                  Please check back later or upload the presentation assets.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 3: MIND MAP */}
          <TabsContent value="mindmap" className="min-h-[500px]">
             <Card>
              <CardHeader>
                <CardTitle>Interactive Mind Map</CardTitle>
                <CardDescription>Explore the connections between estimating tasks.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="p-6 bg-slate-100 rounded-full">
                  <Network className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-700">Mind Map Coming Soon</h3>
                <p className="text-slate-500 max-w-md">
                  The interactive mind map for Estimating is under construction.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 4: FLASHCARDS */}
          <TabsContent value="flashcards" className="min-h-[500px]">
             <Card>
              <CardHeader>
                <CardTitle>Knowledge Check</CardTitle>
                <CardDescription>Test your understanding of the Estimating SOPs.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-20 text-center space-y-4">
                <div className="p-6 bg-slate-100 rounded-full">
                  <BrainCircuit className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-xl font-medium text-slate-700">Quiz Coming Soon</h3>
                <p className="text-slate-500 max-w-md">
                  Flashcards and quizzes for this section will be available shortly.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
