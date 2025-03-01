
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Stage } from "@/lib/types";
import { StatusBadge } from "./StatusBadge";
import { Progress } from "@/components/ui/progress";
import { PhaseCard } from "./PhaseCard";
import { useState } from "react";

interface StageOverviewProps {
  stage: Stage;
  onPhaseStatusChange: (phaseId: string, status: "approved" | "rejected", comments?: string) => void;
}

export const StageOverview = ({ stage, onPhaseStatusChange }: StageOverviewProps) => {
  const [expandedPhaseId, setExpandedPhaseId] = useState<string | null>(null);
  
  const progressPercentage = (stage.completedPhases / stage.totalPhases) * 100;
  
  const toggleExpand = (phaseId: string) => {
    setExpandedPhaseId(expandedPhaseId === phaseId ? null : phaseId);
  };
  
  return (
    <Card className="overflow-hidden transition-all duration-300 shadow-subtle card-transition">
      <CardHeader className="bg-secondary/30 border-b">
        <div className="flex flex-col space-y-3 sm:flex-row sm:justify-between sm:space-y-0">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-medium">{stage.name}</h2>
              <StatusBadge status={stage.status} />
            </div>
            <p className="text-muted-foreground mt-1">{stage.objective}</p>
          </div>
          
          <div className="flex flex-col items-end justify-center">
            <div className="text-sm font-medium text-right">
              {stage.completedPhases} of {stage.totalPhases} phases complete
            </div>
            <div className="w-40 mt-2">
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-4">
          {stage.phases.map((phase) => (
            <PhaseCard
              key={phase.id}
              phase={phase}
              onStatusChange={onPhaseStatusChange}
              isExpanded={expandedPhaseId === phase.id}
              onToggleExpand={() => toggleExpand(phase.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
