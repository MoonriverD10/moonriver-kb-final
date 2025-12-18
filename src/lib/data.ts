import { FileText, FileSpreadsheet, FileCheck, FilePen, FileWarning, FileBadge, File } from "lucide-react";

export interface Document {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "template" | "example" | "guide";
  fileType: "docx" | "pdf" | "xlsx" | "doc";
  lastUpdated: string;
  tags: string[];
  icon: any;
  path: string; // Added path field
}

export const documents: Document[] = [
  {
    id: "sov-affidavit",
    title: "Schedule of Values (SOV) Affidavit",
    description: "Template for Appendix C forms with proper cost breakdown format (APCO, Gemini, Moon River line items).",
    category: "Financial",
    type: "template",
    fileType: "docx",
    lastUpdated: "Dec 16, 2025",
    tags: ["sov", "affidavit", "pay-app", "finance"],
    icon: FileSpreadsheet,
    path: "/documents/Affidavit_of_SubcontractorSOV_CASTLE.docx"
  },
  {
    id: "affidavit-pdf",
    title: "Affidavit of Subcontractor (PDF)",
    description: "Original PDF form for Affidavit of Subcontractor (Appendix C).",
    category: "Financial",
    type: "template",
    fileType: "pdf",
    lastUpdated: "Dec 16, 2025",
    tags: ["affidavit", "form", "legal"],
    icon: FileText,
    path: "/documents/AffidavitofSbucontractorAppC_CASTLE_Mo.pdf"
  },
  {
    id: "bid-doc-castle",
    title: "Bid Document - CASTLE",
    description: "Bid document for O'Fallon Center for Advanced Skills in Law Enforcement Training Center.",
    category: "Estimating",
    type: "example",
    fileType: "docx",
    lastUpdated: "Dec 18, 2025",
    tags: ["bid", "proposal", "example"],
    icon: FilePen,
    path: "/documents/Bid-OfallonCenterforAdvancedSkillsinLawEnforcementTrainingCenter.docx"
  },
  {
    id: "contract-castle",
    title: "Contract - CASTLE (Signed)",
    description: "Signed contract for O'Fallon CASTLE project with DocuSign.",
    category: "Project Management",
    type: "example",
    fileType: "pdf",
    lastUpdated: "Dec 18, 2025",
    tags: ["contract", "signed", "legal"],
    icon: FileBadge,
    path: "/documents/Complete_with_DocuSign_25010110126_CASTLE_Mo.pdf"
  },
  // Placeholders for other files not yet uploaded
  {
    id: "change-order-proposal",
    title: "Change Order Proposal Template",
    description: "Standard template for submitting change order proposals to General Contractors.",
    category: "Project Management",
    type: "template",
    fileType: "pdf",
    lastUpdated: "Dec 15, 2025",
    tags: ["change-order", "proposal", "contract"],
    icon: FilePen,
    path: "#"
  },
  {
    id: "gemini-pricing",
    title: "Gemini FY25 Pricing Guide",
    description: "Complete pricing guide for Gemini products (plaques, letters) for estimating.",
    category: "Estimating",
    type: "guide",
    fileType: "xlsx",
    lastUpdated: "Dec 13, 2025",
    tags: ["pricing", "gemini", "estimating", "catalog"],
    icon: FileText,
    path: "#"
  },
  {
    id: "closeout-maintenance",
    title: "Closeout: Maintenance & Warranty",
    description: "Template for project closeout documentation including maintenance instructions and warranty terms.",
    category: "Closeout",
    type: "template",
    fileType: "doc",
    lastUpdated: "Dec 10, 2025",
    tags: ["closeout", "warranty", "maintenance", "handover"],
    icon: FileCheck,
    path: "#"
  },
  {
    id: "signage-takeoff",
    title: "Signage Takeoff Example",
    description: "Example of a completed signage takeoff for reference (Creek County Sheriff EOC).",
    category: "Estimating",
    type: "example",
    fileType: "docx",
    lastUpdated: "Dec 9, 2025",
    tags: ["takeoff", "estimating", "example"],
    icon: FileText,
    path: "#"
  },
  {
    id: "warranty-info",
    title: "Warranty & Maintenance Info",
    description: "Warranty documentation example from Francis Howell High School project.",
    category: "Closeout",
    type: "example",
    fileType: "doc",
    lastUpdated: "Dec 1, 2025",
    tags: ["warranty", "maintenance", "example"],
    icon: FileBadge,
    path: "#"
  },
  {
    id: "lien-waiver-unconditional",
    title: "Unconditional Sub Lien Waiver",
    description: "Standard form for unconditional lien waivers required with pay applications.",
    category: "Financial",
    type: "template",
    fileType: "doc",
    lastUpdated: "Nov 26, 2025",
    tags: ["lien-waiver", "legal", "pay-app"],
    icon: FileWarning,
    path: "#"
  },
  {
    id: "change-order-example",
    title: "Change Order Example (LCS)",
    description: "Real-world example of a completed change order for reference.",
    category: "Project Management",
    type: "example",
    fileType: "pdf",
    lastUpdated: "Nov 25, 2025",
    tags: ["change-order", "example", "contract"],
    icon: FileText,
    path: "#"
  },
  {
    id: "coi-sample",
    title: "Sample COI for Moon River",
    description: "Example Certificate of Insurance showing standard coverage limits.",
    category: "Insurance",
    type: "example",
    fileType: "pdf",
    lastUpdated: "Nov 21, 2025",
    tags: ["insurance", "coi", "legal"],
    icon: FileBadge,
    path: "#"
  },
  {
    id: "lien-waiver-combined",
    title: "Combined Lien Waiver Sample",
    description: "Comprehensive example of lien waivers including both Moon River and manufacturer waivers.",
    category: "Financial",
    type: "example",
    fileType: "pdf",
    lastUpdated: "Nov 21, 2025",
    tags: ["lien-waiver", "legal", "example"],
    icon: FileText,
    path: "#"
  },
  {
    id: "coi-requirements",
    title: "COI Requirements Template",
    description: "Template for extracting and documenting COI requirements from contracts.",
    category: "Insurance",
    type: "template",
    fileType: "doc",
    lastUpdated: "Nov 15, 2025",
    tags: ["insurance", "coi", "checklist"],
    icon: FileCheck,
    path: "#"
  },
  {
    id: "sov-example",
    title: "Schedule of Values Example",
    description: "Example Schedule of Values for WIU Sallee Hall project showing job numbering format.",
    category: "Financial",
    type: "example",
    fileType: "doc",
    lastUpdated: "Nov 15, 2025",
    tags: ["sov", "finance", "example"],
    icon: FileSpreadsheet,
    path: "#"
  },
  {
    id: "trello-checklist",
    title: "Trello Project Setup Checklist",
    description: "Standardized checklist for setting up new projects in Trello.",
    category: "Project Management",
    type: "template",
    fileType: "docx",
    lastUpdated: "Nov 15, 2025",
    tags: ["trello", "checklist", "setup", "pm"],
    icon: FileCheck,
    path: "#"
  },
  {
    id: "bid-doc-template",
    title: "Latest Bid Document Template",
    description: "Current standard bid document template for Moon River Sign Company.",
    category: "Estimating",
    type: "template",
    fileType: "docx",
    lastUpdated: "Nov 14, 2025",
    tags: ["bid", "proposal", "template"],
    icon: FilePen,
    path: "#"
  },
  {
    id: "rfp-response",
    title: "RFP Response Example",
    description: "Example of a Request for Proposal response (Ponca City Music).",
    category: "Estimating",
    type: "example",
    fileType: "doc",
    lastUpdated: "Oct 30, 2025",
    tags: ["rfp", "proposal", "example"],
    icon: FileText,
    path: "#"
  }
];

export const categories = [
  "All",
  "Financial",
  "Project Management",
  "Estimating",
  "Closeout",
  "Insurance"
];
