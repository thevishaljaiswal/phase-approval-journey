
import { useState } from "react";
import { projectData } from "@/lib/data";
import { ProjectHeader } from "@/components/ProjectHeader";
import { StageOverview } from "@/components/StageOverview";
import { NavigationBar } from "@/components/NavigationBar";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [project, setProject] = useState(projectData);
  const { toast } = useToast();

  const handlePhaseStatusChange = (phaseId: string, status: "approved" | "rejected", comments?: string) => {
    // Create a deep copy of the project data
    const updatedProject = JSON.parse(JSON.stringify(project));
    
    // Find the stage and phase to update
    updatedProject.stages.forEach((stage: any) => {
      const phaseIndex = stage.phases.findIndex((phase: any) => phase.id === phaseId);
      
      if (phaseIndex !== -1) {
        // Update the phase
        stage.phases[phaseIndex].status = status;
        stage.phases[phaseIndex].comments = comments;
        stage.phases[phaseIndex].approver = "Sarah Johnson"; // In a real app, this would be the current user
        stage.phases[phaseIndex].approvalDate = new Date();
        
        // Update the stage progress
        const completedPhases = stage.phases.filter((phase: any) => phase.status === "approved").length;
        stage.completedPhases = completedPhases;
        
        // Update the stage status
        if (completedPhases === stage.totalPhases) {
          stage.status = "approved";
          
          toast({
            title: "Stage completed",
            description: `${stage.name} has been fully approved.`,
          });
        } else if (completedPhases > 0) {
          stage.status = "in-progress";
        }
      }
    });
    
    setProject(updatedProject);
  };

  return (
    <div className="min-h-screen bg-background antialiased page-transition">
      <NavigationBar />
      
      <main className="container py-8">
        <ProjectHeader project={project} />
        
        <div className="space-y-8">
          {project.stages.map((stage) => (
            <StageOverview 
              key={stage.id} 
              stage={stage} 
              onPhaseStatusChange={handlePhaseStatusChange} 
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
