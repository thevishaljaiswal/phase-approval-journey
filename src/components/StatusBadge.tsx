
import { StatusType, getStatusColor, getStatusText } from "@/lib/data";
import { cn } from "@/lib/utils";
import { CheckCircle, Clock, AlertCircle, HourglassIcon } from "lucide-react";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const statusColor = getStatusColor(status);
  const statusText = getStatusText(status);
  
  const getStatusIcon = () => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-3.5 w-3.5" />;
      case "rejected":
        return <AlertCircle className="h-3.5 w-3.5" />;
      case "in-progress":
        return <Clock className="h-3.5 w-3.5" />;
      case "pending":
      default:
        return <HourglassIcon className="h-3.5 w-3.5" />;
    }
  };

  return (
    <span className={cn("status-badge", statusColor, className)}>
      {getStatusIcon()}
      {statusText}
    </span>
  );
};
