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
    path: "/documents/Schedule of Values (SOV) Affidavit_of_Subcontractor.docx"
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
    path: "/documents/Template ChangeOrder_Proposal.pdf"
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
    path: "/documents/Gemini FY25_US_COMPLETE_PRICING_GUIDE_R1.xlsx"
  },
  {
    id: "closeout-maintenance",
    title: "Closeout: Maintenance & Warranty",
    description: "Template for project closeout documentation including maintenance instructions and warranty terms.",
    category: "Closeout",
    type: "template",
    fileType: "docx",
    lastUpdated: "Dec 10, 2025",
    tags: ["closeout", "warranty", "maintenance", "handover"],
    icon: FileCheck,
    path: "/documents/Closeout Document_ Maintenance & Warranty Data.docx"
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
    path: "/documents/Creek_County_Sheriff_EOC_Phase_II_-_Signage_Takeoff (1).docx"
  },
  {
    id: "warranty-info",
    title: "Warranty & Maintenance Info",
    description: "Warranty documentation example from Francis Howell High School project.",
    category: "Closeout",
    type: "example",
    fileType: "docx",
    lastUpdated: "Dec 1, 2025",
    tags: ["warranty", "maintenance", "example"],
    icon: FileBadge,
    path: "/documents/FHHS WARRANTY AND MAINTENANCE INFORMATION.txt"
  },
  {
    id: "lien-waiver-unconditional",
    title: "Unconditional Sub Lien Waiver",
    description: "Standard form for unconditional lien waivers required with pay applications.",
    category: "Financial",
    type: "template",
    fileType: "docx",
    lastUpdated: "Nov 26, 2025",
    tags: ["lien-waiver", "legal", "pay-app"],
    icon: FileWarning,
    path: "/documents/Unconditional Sub lien waiver form.doc"
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
    path: "/documents/LCS Change Order CO 001.PDF"
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
    path: "/documents/Sample COI for Moon River.pdf"
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
    path: "/documents/Sample Lien Waiver Moon River & Manufacturers.pdf"
  },
  {
    id: "coi-requirements",
    title: "COI Requirements Template",
    description: "Template for extracting and documenting COI requirements from contracts.",
    category: "Insurance",
    type: "template",
    fileType: "docx",
    lastUpdated: "Nov 15, 2025",
    tags: ["insurance", "coi", "checklist"],
    icon: FileCheck,
    path: "/documents/COI Requirements Extracted from Takeoff Docs_Contract.txt"
  },
  {
    id: "sov-example",
    title: "Schedule of Values Example",
    description: "Example Schedule of Values for WIU Sallee Hall project showing job numbering format.",
    category: "Financial",
    type: "example",
    fileType: "docx",
    lastUpdated: "Nov 15, 2025",
    tags: ["sov", "finance", "example"],
    icon: FileSpreadsheet,
    path: "/documents/SCHEDULE_OF_VALUES_25-007-WIU.docx"
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
    path: "/documents/Trello_Project_Setup_Checklist.docx"
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
    path: "/documents/Latest 2027 Bid Doc.docx"
  },
  {
    id: "rfp-response",
    title: "RFP Response Example",
    description: "Example of a Request for Proposal response (Ponca City Music).",
    category: "Estimating",
    type: "example",
    fileType: "docx",
    lastUpdated: "Oct 30, 2025",
    tags: ["rfp", "proposal", "example"],
    icon: FileText,
    path: "/documents/RFP 09 Ponca City Music.doc"
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
