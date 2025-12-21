import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, FileText, CheckCircle2, Truck, HardHat, ClipboardCheck, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Node Data Structure
const nodes = [
  {
    id: "root",
    label: "D10 Project Management SOP",
    x: 50,
    y: 300,
    type: "root",
    description: "The central nervous system of Moon River Sign Company operations."
  },
  {
    id: "contract",
    label: "Awarded Contract / Purchase Order",
    x: 400,
    y: 50,
    type: "phase",
    icon: FileText,
    description: "Critical first step: Review scope, verify amounts, and identify key contacts.",
    details: [
      "Verify Contract Amount matches Bid",
      "Check Scope of Work for discrepancies",
      "Identify Project Manager & Superintendent",
      "Confirm Installation responsibilities"
    ]
  },
  {
    id: "execute",
    label: "Execute Contract",
    x: 400,
    y: 150,
    type: "phase",
    icon: CheckCircle2,
    description: "Formalizing the agreement. Signatures seal destiny.",
    details: [
      "Sign and initial all pages",
      "Return to GC immediately",
      "Request fully executed copy",
      "Do not start work without a signed contract"
    ]
  },
  {
    id: "startup",
    label: "Start-up Documentation",
    x: 400,
    y: 250,
    type: "phase",
    icon: ClipboardCheck,
    description: "Getting the paperwork in order to get paid and stay protected.",
    details: [
      "Submit Certificate of Insurance (COI)",
      "Submit Schedule of Values (SOV)",
      "Submit W-9 Form",
      "Submit Project Participation Form"
    ]
  },
  {
    id: "system",
    label: "Project Management System",
    x: 400,
    y: 350,
    type: "phase",
    icon: FileText,
    description: "Digital organization. If it's not in the system, it doesn't exist.",
    details: [
      "Create Job Folder (Physical & Digital)",
      "Enter into Trello/PM Software",
      "Enter into QuickBooks",
      "Upload all contract docs"
    ]
  },
  {
    id: "submittal",
    label: "Submittal Process",
    x: 400,
    y: 450,
    type: "phase",
    icon: FileText,
    description: "The approval loop. Measure twice, cut once.",
    details: [
      "Submit Shop Drawings",
      "Submit Material Samples",
      "Submit Product Data",
      "Wait for 'Approved' or 'Approved as Noted'"
    ]
  },
  {
    id: "production",
    label: "Production and Logistics",
    x: 400,
    y: 550,
    type: "phase",
    icon: Truck,
    description: "Making it real and getting it there.",
    details: [
      "Release orders to manufacturers",
      "Confirm lead times",
      "Coordinate delivery with Site Super",
      "Inspect goods upon arrival"
    ]
  },
  {
    id: "install",
    label: "Installation Coordination",
    x: 400,
    y: 650,
    type: "phase",
    icon: HardHat,
    description: "Site readiness is key to a smooth install.",
    details: [
      "Verify site readiness (walls, power)",
      "Confirm equipment needs (lifts, cranes)",
      "Ensure safety plan is on file",
      "Coordinate with installer 1 week prior"
    ]
  },
  {
    id: "closeout",
    label: "Invoicing and Close-out",
    x: 400,
    y: 750,
    type: "phase",
    icon: ClipboardCheck,
    description: "Finishing strong and getting the final check.",
    details: [
      "Submit As-Built Drawings",
      "Submit Warranty Documents",
      "Submit Maintenance Manuals",
      "Bill for Retainage (Final Payment)"
    ]
  }
];

export const MindMap = () => {
  const [selectedNode, setSelectedNode] = useState<any>(null);

  return (
    <div className="relative w-full h-[600px] border rounded-xl overflow-hidden bg-slate-50 dark:bg-slate-900/50 shadow-inner">
      
      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <div className="bg-background/80 backdrop-blur p-1 rounded-lg border shadow-sm">
          <p className="text-xs font-medium text-center px-2 py-1 text-muted-foreground">
            Interactive Canvas
          </p>
        </div>
      </div>

      <TransformWrapper
        initialScale={0.8}
        initialPositionX={100}
        initialPositionY={50}
        minScale={0.5}
        maxScale={2}
        centerOnInit={true}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="absolute bottom-4 left-4 z-10 flex gap-2">
              <Button variant="secondary" size="icon" onClick={() => zoomIn()} title="Zoom In">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" onClick={() => zoomOut()} title="Zoom Out">
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button variant="secondary" size="icon" onClick={() => resetTransform()} title="Reset View">
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            <TransformComponent wrapperClass="w-full h-full" contentClass="w-full h-full">
              <div className="relative w-[1000px] h-[900px] bg-grid-slate-200 dark:bg-grid-slate-800/50 [mask-image:linear-gradient(to_bottom,white,transparent)]">
                
                {/* Connecting Lines (SVG) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                  {nodes.filter(n => n.id !== 'root').map((node) => (
                    <path
                      key={node.id}
                      d={`M ${nodes[0].x + 200} ${nodes[0].y + 40} C ${nodes[0].x + 300} ${nodes[0].y + 40}, ${node.x - 100} ${node.y + 30}, ${node.x} ${node.y + 30}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-300 dark:text-slate-700"
                    />
                  ))}
                </svg>

                {/* Nodes */}
                {nodes.map((node) => (
                  <motion.div
                    key={node.id}
                    className={`absolute cursor-pointer group`}
                    style={{ left: node.x, top: node.y }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedNode(node)}
                  >
                    {node.type === 'root' ? (
                      <div className="w-[200px] p-4 bg-slate-800 text-white rounded-lg shadow-xl border-2 border-slate-600 flex items-center justify-center text-center font-bold text-sm">
                        {node.label}
                      </div>
                    ) : (
                      <div className={`
                        flex items-center gap-3 p-3 pr-6 rounded-lg shadow-md border transition-all duration-200 w-[280px]
                        ${selectedNode?.id === node.id 
                          ? 'bg-primary text-primary-foreground border-primary ring-2 ring-primary/30' 
                          : 'bg-card hover:bg-accent border-muted'
                        }
                      `}>
                        <div className={`p-2 rounded-md ${selectedNode?.id === node.id ? 'bg-white/20' : 'bg-muted'}`}>
                          {node.icon && <node.icon className="w-5 h-5" />}
                        </div>
                        <span className="font-medium text-sm">{node.label}</span>
                        <ChevronRight className={`w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity ${selectedNode?.id === node.id ? 'text-white' : 'text-muted-foreground'}`} />
                      </div>
                    )}
                  </motion.div>
                ))}

              </div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>

      {/* Detail Panel (Slide Over) */}
      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 h-full w-[350px] bg-background border-l shadow-2xl z-20 flex flex-col"
          >
            <div className="p-4 border-b flex items-center justify-between bg-muted/30">
              <h3 className="font-bold text-lg">Node Details</h3>
              <Button variant="ghost" size="icon" onClick={() => setSelectedNode(null)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-primary mb-2">{selectedNode.label}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedNode.description}
                  </p>
                </div>

                {selectedNode.details && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Key Actions</h4>
                    <ul className="space-y-2">
                      {selectedNode.details.map((detail: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm p-2 rounded-md bg-muted/50">
                          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button className="w-full mt-4" onClick={() => {
                  // Logic to jump to specific SOP section could go here
                  const element = document.getElementById('step1'); // Placeholder
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Go to SOP Section
                </Button>
              </div>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
