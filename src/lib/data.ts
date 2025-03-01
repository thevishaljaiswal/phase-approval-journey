
import { Project, StatusType } from "./types";

export const projectData: Project = {
  id: "proj-001",
  name: "Urban Heights Development",
  description: "Premium residential complex with commercial spaces in downtown area.",
  stages: [
    {
      id: "stage-1",
      name: "Investment Committee",
      objective: "Obtain IC approval for land acquisition",
      phases: [
        {
          id: "phase-1-1",
          name: "Micro-market Dynamics",
          description: "Analysis of the micro-market conditions and potential.",
          status: "approved",
          documents: [
            {
              id: "doc-1-1-1",
              name: "Market Analysis Report.pdf",
              uploadedBy: "David Chen",
              uploadedAt: new Date("2024-09-20"),
              fileSize: "4.2 MB",
              fileType: "application/pdf",
              url: "#"
            }
          ],
          requiredDocuments: ["Market Analysis", "Competitor Assessment"],
          approver: "Sarah Johnson",
          approvalDate: new Date("2024-09-22"),
          comments: "Comprehensive analysis with solid projections."
        },
        {
          id: "phase-1-2",
          name: "Legal due diligence",
          description: "Preliminary legal guidance and assessment.",
          status: "approved",
          documents: [
            {
              id: "doc-1-2-1",
              name: "Legal Assessment.pdf",
              uploadedBy: "Michael Lee",
              uploadedAt: new Date("2024-09-23"),
              fileSize: "2.8 MB",
              fileType: "application/pdf",
              url: "#"
            }
          ],
          approver: "Sarah Johnson",
          approvalDate: new Date("2024-09-25")
        },
        {
          id: "phase-1-3",
          name: "Financial feasibility study",
          description: "Source of funds and impact on group-level cash flows.",
          status: "in-progress",
          documents: [
            {
              id: "doc-1-3-1",
              name: "Cash Flow Analysis.xlsx",
              uploadedBy: "Emma Watson",
              uploadedAt: new Date("2024-09-26"),
              fileSize: "1.6 MB",
              fileType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              url: "#"
            }
          ]
        },
        {
          id: "phase-1-4",
          name: "Indicative Product",
          description: "Initial product specifications and concepts.",
          status: "pending",
          documents: []
        },
        {
          id: "phase-1-5",
          name: "Sales Pricing and Velocity",
          description: "Pricing strategy and sales velocity projections.",
          status: "pending",
          documents: []
        },
        {
          id: "phase-1-6",
          name: "Tentative Cost and Project Duration",
          description: "Cost estimates and project timeline projections.",
          status: "pending",
          documents: []
        }
      ],
      status: "in-progress",
      completedPhases: 2,
      totalPhases: 6
    },
    {
      id: "stage-2",
      name: "IC Approval Secured & Deal Signed",
      objective: "Provide a management update on the project's vision",
      phases: [
        {
          id: "phase-2-1",
          name: "Land Acquisition Summary",
          description: "Finalized payment terms and definitive approvals schedule.",
          status: "pending",
          documents: []
        },
        {
          id: "phase-2-2",
          name: "Design & Project Overview",
          description: "Detailed Design Basis Report (DBR).",
          status: "pending",
          documents: []
        },
        {
          id: "phase-2-3",
          name: "Sales Strategy",
          description: "Pricing breakdown, payment plans, and marketing strategy.",
          status: "pending",
          documents: []
        },
        {
          id: "phase-2-4",
          name: "Construction Overview",
          description: "Cost estimate and integrated schedule with phasing plan.",
          status: "pending",
          documents: []
        },
        {
          id: "phase-2-5",
          name: "Financial Overview",
          description: "Funding sources, overheads, and pro forma projections.",
          status: "pending",
          documents: []
        }
      ],
      status: "pending",
      completedPhases: 0,
      totalPhases: 5
    },
    {
      id: "stage-3",
      name: "Plan Sanction Received",
      objective: "Secure final management approval before launch",
      phases: [
        {
          id: "phase-3-1",
          name: "Project Overview",
          description: "Final design package and sanctions & approvals.",
          status: "pending",
          documents: []
        },
        {
          id: "phase-3-2",
          name: "Detailed Integrated Schedule",
          description: "Comprehensive project timeline with dependencies.",
          status: "pending",
          documents: []
        },
        {
          id: "phase-3-3",
          name: "Sales Strategy",
          description: "Sales price movement across project phases.",
          status: "pending",
          documents: []
        },
        {
          id: "phase-3-4",
          name: "Construction Overview",
          description: "Detailed cost breakdown, phasing, logistics, and strategy.",
          status: "pending",
          documents: []
        },
        {
          id: "phase-3-5",
          name: "Financial Overview",
          description: "Projected financial outcomes & final feasibility.",
          status: "pending",
          documents: []
        },
        {
          id: "phase-3-6",
          name: "Risks & Mitigation",
          description: "Key regulatory, market, and financial risks with mitigation strategies.",
          status: "pending",
          documents: []
        }
      ],
      status: "pending",
      completedPhases: 0,
      totalPhases: 6
    }
  ],
  currentStage: 0
};

export const getStatusColor = (status: StatusType): string => {
  switch (status) {
    case "approved":
      return "bg-emerald-100 text-emerald-800 border-emerald-200";
    case "rejected":
      return "bg-rose-100 text-rose-800 border-rose-200";
    case "in-progress":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "pending":
    default:
      return "bg-slate-100 text-slate-800 border-slate-200";
  }
};

export const getStatusText = (status: StatusType): string => {
  switch (status) {
    case "approved":
      return "Approved";
    case "rejected":
      return "Rejected";
    case "in-progress":
      return "In Progress";
    case "pending":
    default:
      return "Pending";
  }
};
