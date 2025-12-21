import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutDashboard, 
  FileText, 
  Image as ImageIcon, 
  UploadCloud, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Search
} from "lucide-react";
import Layout from "@/components/Layout";

// Mock Data for Client Projects
const MOCK_PROJECTS = [
  {
    id: "PRJ-2025-001",
    name: "O'Fallon CASTLE Phase 2",
    status: "In Production",
    progress: 65,
    nextMilestone: "Installation (Jan 15)",
    documents: 12,
    photos: 45
  },
  {
    id: "PRJ-2025-004",
    name: "Creek County Sheriff EOC",
    status: "Design Review",
    progress: 25,
    nextMilestone: "Proof Approval (Dec 28)",
    documents: 4,
    photos: 8
  }
];

export default function ClientPortal() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 max-w-7xl animate-in fade-in duration-500">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Client Portal
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back, Wright Construction Services. Track your active projects and uploads.
            </p>
          </div>
          <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
            <UploadCloud className="w-4 h-4" /> Upload New Files
          </Button>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="dashboard" className="space-y-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 max-w-[600px] bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <TabsTrigger value="dashboard" className="gap-2">
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </TabsTrigger>
            <TabsTrigger value="documents" className="gap-2">
              <FileText className="w-4 h-4" /> Documents
            </TabsTrigger>
            <TabsTrigger value="photos" className="gap-2">
              <ImageIcon className="w-4 h-4" /> Site Photos
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: DASHBOARD */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Active Projects Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {MOCK_PROJECTS.map((project) => (
                <Card key={project.id} className="hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <Badge variant="outline" className="mb-2 text-slate-500 border-slate-200">
                          {project.id}
                        </Badge>
                        <CardTitle className="text-xl">{project.name}</CardTitle>
                      </div>
                      <Badge className={`${
                        project.status === "In Production" ? "bg-blue-100 text-blue-700 hover:bg-blue-200" : 
                        "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                      }`}>
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4 mt-4">
                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm font-medium">
                          <span>Completion</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-600 rounded-full transition-all duration-1000" 
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock className="w-4 h-4 text-slate-400" />
                          <span>Next: <strong>{project.nextMilestone}</strong></span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <FileText className="w-4 h-4 text-slate-400" />
                          <span>{project.documents} Docs / {project.photos} Photos</span>
                        </div>
                      </div>

                      <div className="pt-2 flex gap-2">
                        <Button variant="outline" size="sm" className="w-full">View Details</Button>
                        <Button variant="outline" size="sm" className="w-full">Uploads</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity / Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4 items-start pb-4 border-b last:border-0 last:pb-0">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Contract Signed</p>
                      <p className="text-xs text-muted-foreground">O'Fallon CASTLE Phase 2 - Subcontract Agreement executed.</p>
                      <p className="text-xs text-slate-400 mt-1">Today at 9:41 AM</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start pb-4 border-b last:border-0 last:pb-0">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <UploadCloud className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">New Files Uploaded</p>
                      <p className="text-xs text-muted-foreground">Site photos uploaded for Creek County Sheriff EOC.</p>
                      <p className="text-xs text-slate-400 mt-1">Yesterday at 2:15 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start pb-4 border-b last:border-0 last:pb-0">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <AlertCircle className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Action Required: Color Proof Approval</p>
                      <p className="text-xs text-muted-foreground">Please review the updated proofs for the Lobby Sign.</p>
                      <p className="text-xs text-slate-400 mt-1">Dec 18 at 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* TAB 2: DOCUMENTS */}
          <TabsContent value="documents">
            <Card className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-dashed border-2">
              <div className="bg-slate-50 p-4 rounded-full mb-4">
                <Search className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium">Document Library</h3>
              <p className="text-muted-foreground max-w-sm mb-6">
                Search and filter contracts, change orders, and submittals across all your projects.
              </p>
              <Button variant="outline">Browse All Documents</Button>
            </Card>
          </TabsContent>

          {/* TAB 3: PHOTOS */}
          <TabsContent value="photos">
            <Card className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-dashed border-2">
              <div className="bg-slate-50 p-4 rounded-full mb-4">
                <ImageIcon className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-medium">Site Photo Gallery</h3>
              <p className="text-muted-foreground max-w-sm mb-6">
                View installation progress photos and site survey images.
              </p>
              <Button variant="outline">View Photo Gallery</Button>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </Layout>
  );
}
