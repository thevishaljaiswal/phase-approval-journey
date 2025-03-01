
export type StatusType = "pending" | "in-progress" | "approved" | "rejected";

export interface Document {
  id: string;
  name: string;
  uploadedBy: string;
  uploadedAt: Date;
  fileSize: string;
  fileType: string;
  url: string;
}

export interface Phase {
  id: string;
  name: string;
  description: string;
  status: StatusType;
  documents: Document[];
  requiredDocuments?: string[];
  approver?: string;
  approvalDate?: Date;
  comments?: string;
}

export interface Stage {
  id: string;
  name: string;
  objective: string;
  phases: Phase[];
  status: StatusType;
  completedPhases: number;
  totalPhases: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  stages: Stage[];
  currentStage: number;
}
