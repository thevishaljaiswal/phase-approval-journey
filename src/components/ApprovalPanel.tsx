
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Phase } from "@/lib/types";
import { useState } from "react";
import { Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ApprovalPanelProps {
  phase: Phase;
  onStatusChange: (phaseId: string, status: "approved" | "rejected", comments?: string) => void;
}

export const ApprovalPanel = ({ phase, onStatusChange }: ApprovalPanelProps) => {
  const [comments, setComments] = useState(phase.comments || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleApprove = () => {
    setIsSubmitting(true);
    
    // Simulate approval process
    setTimeout(() => {
      onStatusChange(phase.id, "approved", comments);
      setIsSubmitting(false);
      
      toast({
        title: "Phase approved",
        description: `${phase.name} has been approved successfully.`,
      });
    }, 800);
  };

  const handleReject = () => {
    if (!comments.trim()) {
      toast({
        title: "Comments required",
        description: "Please provide comments explaining the rejection.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate rejection process
    setTimeout(() => {
      onStatusChange(phase.id, "rejected", comments);
      setIsSubmitting(false);
      
      toast({
        title: "Phase rejected",
        description: `${phase.name} has been rejected.`,
      });
    }, 800);
  };

  return (
    <div className="bg-secondary/50 rounded-lg p-4 border animate-fade-in">
      <h3 className="text-sm font-medium mb-3">Approval Decision</h3>
      
      <div className="space-y-3">
        <div>
          <label htmlFor="comments" className="text-sm text-muted-foreground mb-1.5 block">
            Comments (required for rejection)
          </label>
          <Textarea
            id="comments"
            placeholder="Enter your comments or feedback..."
            className="resize-none"
            rows={3}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            className="flex-1"
            variant="outline"
            onClick={handleReject}
            disabled={isSubmitting}
          >
            <X className="mr-2 h-4 w-4" />
            Reject
          </Button>
          <Button
            className="flex-1"
            onClick={handleApprove}
            disabled={isSubmitting}
          >
            <Check className="mr-2 h-4 w-4" />
            Approve
          </Button>
        </div>
      </div>
    </div>
  );
};
