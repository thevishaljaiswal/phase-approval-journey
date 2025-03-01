
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download, BarChart3 } from "lucide-react";

interface ProjectHeaderProps {
  project: Project;
}

export const ProjectHeader = ({ project }: ProjectHeaderProps) => {
  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <span>Projects</span>
            <ChevronRight className="h-4 w-4" />
            <span>Detailed Project Report</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">{project.name}</h1>
          <p className="text-muted-foreground mt-1">{project.description}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            View Reports
          </Button>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export DPR
          </Button>
        </div>
      </div>
    </div>
  );
};
