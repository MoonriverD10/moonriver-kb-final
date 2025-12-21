import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  DollarSign, 
  Calendar, 
  Building,
  Search,
  Scale
} from "lucide-react";
import Layout from "@/components/Layout";

export default function CastleCaseStudy() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 max-w-6xl animate-in fade-in duration-500">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
            <span className="bg-blue-100 px-2 py-1 rounded-md">Real-World Scenario</span>
            <span className="text-muted-foreground">/</span>
            <span>Bid-to-Contract Analysis</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            The CASTLE Project
          </h1>
          <p className="text-xl text-muted-foreground mt-2 max-w-3xl">
            A deep dive into the "O’Fallon Center for Advanced Skills Training in Law Enforcement" project. 
            See how a $71,800 bid becomes a binding contract.
          </p>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <TabsTrigger value="overview" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <Building className="w-4 h-4 mr-2" /> Project Overview
            </TabsTrigger>
            <TabsTrigger value="bid" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <FileText className="w-4 h-4 mr-2" /> The Bid Proposal
            </TabsTrigger>
            <TabsTrigger value="contract" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <Scale className="w-4 h-4 mr-2" /> The Contract
            </TabsTrigger>
            <TabsTrigger value="analysis" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              <Search className="w-4 h-4 mr-2" /> Critical Analysis
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: OVERVIEW */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="md:col-span-2 border-l-4 border-l-blue-500 shadow-md">
                <CardHeader>
                  <CardTitle>Project Snapshot</CardTitle>
                  <CardDescription>Key details extracted from source documents</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Project Name</p>
                      <p className="font-semibold text-lg">CASTLE Phase 2</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Location</p>
                      <p className="font-semibold">O'Fallon, MO</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Client</p>
                      <p className="font-semibold">Wright Construction Services</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Owner</p>
                      <p className="font-semibold">City of O'Fallon</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-3 rounded-lg border border-green-100">
                      <p className="text-sm font-medium text-green-800 flex items-center gap-1">
                        <DollarSign className="w-4 h-4" /> Total Value
                      </p>
                      <p className="text-2xl font-bold text-green-700">$71,800.00</p>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <p className="text-sm font-medium text-slate-800 flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> Timeline
                      </p>
                      <p className="text-sm mt-1"><strong>Bid:</strong> July 15, 2025</p>
                      <p className="text-sm"><strong>Contract:</strong> Dec 16, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 text-white border-none shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    Why This Matters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-300 text-sm leading-relaxed">
                    This project represents a perfect "clean" workflow. The contract amount matches the bid exactly, meaning the scope was clearly defined and accepted without major value engineering or cuts.
                  </p>
                  <div className="bg-white/10 p-3 rounded-lg">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Key Lesson</p>
                    <p className="font-medium text-sm">
                      Always verify the contract amount against your original bid before signing. A penny difference matters.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* TAB 2: THE BID */}
          <TabsContent value="bid" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>The Proposal (Bid)</CardTitle>
                    <CardDescription>Submitted July 15, 2025</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Valid for 30 Days
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Scope Breakdown */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-500" />
                      Scope of Work Breakdown
                    </h3>
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full text-sm text-left">
                        <thead className="bg-slate-50 border-b">
                          <tr>
                            <th className="p-3 font-medium text-slate-600">Item Code</th>
                            <th className="p-3 font-medium text-slate-600">Description</th>
                            <th className="p-3 font-medium text-slate-600">Details</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-3 font-mono text-xs text-slate-500">101400</td>
                            <td className="p-3 font-medium">Interior Signs</td>
                            <td className="p-3 text-muted-foreground">
                              Room IDs, Tactile Exits, Restroom Signs (APCO Accord 15)
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-3 font-mono text-xs text-slate-500">101416</td>
                            <td className="p-3 font-medium">Dedication Plaque</td>
                            <td className="p-3 text-muted-foreground">
                              24"x36" Cast Bronze, Pebble Texture, Black Background
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50/50">
                            <td className="p-3 font-mono text-xs text-slate-500">101419</td>
                            <td className="p-3 font-medium">Dimensional Letters</td>
                            <td className="p-3 text-muted-foreground">
                              (2) Sets of 24" Cast Aluminum Letters (Brushed Satin)
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Financial Breakdown */}
                  <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <h3 className="text-lg font-semibold mb-4">Financial Breakdown</h3>
                    <div className="space-y-3 max-w-md ml-auto">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Materials (Tax Exempt)</span>
                        <span className="font-mono">$56,900.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Installation & Mobilization</span>
                        <span className="font-mono">$14,900.00</span>
                      </div>
                      <div className="h-px bg-slate-300 my-2"></div>
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total Bid Amount</span>
                        <span className="text-blue-700">$71,800.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 3: THE CONTRACT */}
          <TabsContent value="contract" className="space-y-6">
            <Card className="border-green-200 shadow-sm">
              <CardHeader className="bg-green-50/50 border-b border-green-100">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-green-900">The Subcontract Agreement</CardTitle>
                    <CardDescription>Executed December 16, 2025</CardDescription>
                  </div>
                  <Badge className="bg-green-600 hover:bg-green-700">Signed & Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                      Verification Checklist
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span><strong>Contract Amount:</strong> Matches Bid exactly ($71,800.00)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span><strong>Retainage:</strong> 5% withheld (Standard)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span><strong>Scope Description:</strong> "Signage Plaques Dimension Letter Signage Exterior Panel"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                        <span><strong>Tax Status:</strong> Confirmed Tax Exempt</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border rounded-lg p-4 shadow-inner">
                    <p className="text-xs font-mono text-muted-foreground mb-2">Excerpt from Page 1</p>
                    <div className="font-serif text-sm leading-relaxed text-slate-700">
                      "This Subcontract, entered into this 16th day of December, 2025...<br/><br/>
                      <strong>Contract Amount:</strong> $71,800.00<br/>
                      <strong>Retainage Withheld:</strong> 5%<br/>
                      <strong>Description of Work:</strong> Signage Plaques Dimension Letter Signage Exterior Panel"
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 4: ANALYSIS */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>What We Did Right</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-green-100 p-2 rounded-full h-fit">
                        <CheckCircle2 className="w-4 h-4 text-green-700" />
                      </div>
                      <div>
                        <p className="font-medium">Clear Scope Inclusions</p>
                        <p className="text-sm text-muted-foreground">
                          The bid explicitly listed quantities (e.g., "Qty (47) 24 inch tall cast aluminum letters"). This prevents "scope creep" later.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-green-100 p-2 rounded-full h-fit">
                        <CheckCircle2 className="w-4 h-4 text-green-700" />
                      </div>
                      <div>
                        <p className="font-medium">Installation Separation</p>
                        <p className="text-sm text-muted-foreground">
                          Separating Installation ($14,900) from Materials ($56,900) helps with billing and tax exemption clarity.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Watch Out For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-yellow-100 p-2 rounded-full h-fit">
                        <AlertTriangle className="w-4 h-4 text-yellow-700" />
                      </div>
                      <div>
                        <p className="font-medium">The 5-Month Gap</p>
                        <p className="text-sm text-muted-foreground">
                          Bid in July, Contract in December. Material costs could have risen. Always check if your quote is still valid (usually 30 days).
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <div className="bg-yellow-100 p-2 rounded-full h-fit">
                        <AlertTriangle className="w-4 h-4 text-yellow-700" />
                      </div>
                      <div>
                        <p className="font-medium">Retainage Cash Flow</p>
                        <p className="text-sm text-muted-foreground">
                          5% of $71,800 is $3,590. You won't see that money until the very end of the project (Closeout). Plan accordingly.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 flex justify-center">
          <Button size="lg" className="gap-2">
            Start Next Module <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Layout>
  );
}
