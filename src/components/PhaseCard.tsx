
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { DocumentList } from "./DocumentList";
import { StatusBadge } from "./StatusBadge";
import { ApprovalPanel } from "./ApprovalPanel";
import { Button } from "@/components/ui/button";
import { Phase } from "@/lib/types";
import { Upload, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { UploadModal } from "./UploadModal";
import { cn } from "@/lib/utils";

interface PhaseCardProps {
  phase: Phase;
  onStatusChange: (phaseId: string, status: "approved" | "rejected", comments?: string) => void;
  isExpanded?: boolean;
  onToggleExpand?: () => void;
}

export const PhaseCard = ({ 
  phase, 
  onStatusChange, 
  isExpanded = false, 
  onToggleExpand 
}: PhaseCardProps) => {
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // Show approval panel only if the phase is in-progress and has at least one document
  const showApprovalPanel = phase.status === "in-progress" && phase.documents.length > 0;
  
  return (
    <>
      <Card className={cn("transition-all duration-300 overflow-hidden", isExpanded ? "shadow-elevation" : "shadow-subtle")}>
        <CardHeader className="flex flex-row items-center justify-between py-4 space-y-0">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full"
              onClick={onToggleExpand}
            >
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
            <div>
              <h3 className="text-base font-medium">{phase.name}</h3>
              <p className="text-sm text-muted-foreground">{phase.description}</p>
            </div>
          </div>
          <StatusBadge status={phase.status} />
        </CardHeader>
        
        {isExpanded && (
          <CardContent className="animate-slide-up">
            <div className="space-y-4">
              {phase.requiredDocuments && phase.requiredDocuments.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Required Documents</h4>
                  <ul className="space-y-1">
                    {phase.requiredDocuments.map((doc, index) => (
                      <li key={index} className="text-sm flex items-center gap-1.5">
                        <Plus className="h-3.5 w-3.5 text-primary" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium">Documents</h4>
                  {phase.status !== "approved" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8 text-xs"
                      onClick={() => setIsUploadModalOpen(true)}
                    >
                      <Upload className="mr-1.5 h-3.5 w-3.5" />
                      Upload
                    </Button>
                  )}
                </div>
                <DocumentList documents={phase.documents} />
              </div>
              
              {showApprovalPanel && (
                <ApprovalPanel phase={phase} onStatusChange={onStatusChange} />
              )}
              
              {phase.status === "approved" && phase.approver && (
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 text-sm">
                  <p className="text-emerald-800">
                    Approved by <span className="font-medium">{phase.approver}</span> on{' '}
                    {phase.approvalDate?.toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                  {phase.comments && (
                    <p className="mt-1 text-emerald-700">{phase.comments}</p>
                  )}
                </div>
              )}
              
              {phase.status === "rejected" && (
                <div className="bg-rose-50 border border-rose-100 rounded-lg p-3 text-sm">
                  <p className="text-rose-800">
                    Rejected by <span className="font-medium">{phase.approver}</span> on{' '}
                    {phase.approvalDate?.toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </p>
                  {phase.comments && (
                    <p className="mt-1 text-rose-700">{phase.comments}</p>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        )}
        
        {!isExpanded && (
          <CardFooter className="py-3 text-xs text-muted-foreground">
            {phase.documents.length} document{phase.documents.length !== 1 ? 's' : ''}
          </CardFooter>
        )}
      </Card>
      
      <UploadModal
        open={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        phaseId={phase.id}
        phaseName={phase.name}
        onUploadComplete={() => {
          // In a real app, this would refresh the documents list
          console.log("Upload complete for phase", phase.id);
        }}
      />
    </>
  );
};
