
import { Document } from "@/lib/types";
import { File, FileText, Download, Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";

interface DocumentListProps {
  documents: Document[];
  emptyMessage?: string;
}

export const DocumentList = ({ documents, emptyMessage = "No documents uploaded yet" }: DocumentListProps) => {
  if (documents.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <FileText className="h-12 w-12 text-muted-foreground/40 mb-3" />
        <p className="text-muted-foreground">{emptyMessage}</p>
      </div>
    );
  }

  const getFileIcon = (fileType: string) => {
    if (fileType.includes("pdf")) {
      return <File className="h-5 w-5 text-rose-500" />;
    } else if (fileType.includes("spreadsheet") || fileType.includes("excel")) {
      return <File className="h-5 w-5 text-emerald-500" />;
    } else if (fileType.includes("document")) {
      return <File className="h-5 w-5 text-blue-500" />;
    } else {
      return <File className="h-5 w-5 text-slate-500" />;
    }
  };

  return (
    <div className="space-y-3">
      {documents.map((doc) => (
        <div 
          key={doc.id} 
          className="bg-white rounded-lg border p-3.5 flex items-center justify-between group card-hover"
        >
          <div className="flex items-center gap-3">
            {getFileIcon(doc.fileType)}
            <div>
              <h4 className="text-sm font-medium">{doc.name}</h4>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  {doc.uploadedBy}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {format(doc.uploadedAt, "MMM d, yyyy")}
                </span>
                <span>{doc.fileSize}</span>
              </div>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Download document"
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  );
};
