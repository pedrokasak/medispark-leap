
import { cn } from "@/lib/utils";
import { Clock, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export interface AppointmentProps {
  id: string;
  patientName: string;
  patientAvatar?: string;
  time: string;
  duration: string;
  location: string;
  type: "checkup" | "consultation" | "emergency" | "followup";
  status: "scheduled" | "confirmed" | "completed" | "cancelled";
}

const statusClasses = {
  scheduled: "bg-blue-50 text-blue-700 border-blue-200",
  confirmed: "bg-green-50 text-green-700 border-green-200",
  completed: "bg-gray-50 text-gray-700 border-gray-200",
  cancelled: "bg-red-50 text-red-700 border-red-200",
};

const typeClasses = {
  checkup: "bg-purple-50 text-purple-700 border-purple-200",
  consultation: "bg-medical-accent-light text-medical-accent-dark border-medical-accent-light",
  emergency: "bg-red-50 text-red-700 border-red-200",
  followup: "bg-yellow-50 text-yellow-700 border-yellow-200",
};

export function AppointmentCard({ patientName, patientAvatar, time, duration, location, type, status }: AppointmentProps) {
  return (
    <div className="medical-card p-4 mb-3">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={patientAvatar} />
          <AvatarFallback className="bg-medical-light text-medical-dark">
            {patientName.split(' ').map(name => name[0]).join('').substring(0, 2)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 truncate">{patientName}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{time}</span>
            <span className="text-gray-300">•</span>
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{location}</span>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2">
          <Badge variant="outline" className={cn("text-xs", typeClasses[type])}>
            {type === "checkup" && "Check-up"}
            {type === "consultation" && "Consulta"}
            {type === "emergency" && "Emergência"}
            {type === "followup" && "Retorno"}
          </Badge>
          <Badge variant="outline" className={cn("text-xs", statusClasses[status])}>
            {status === "scheduled" && "Agendado"}
            {status === "confirmed" && "Confirmado"}
            {status === "completed" && "Concluído"}
            {status === "cancelled" && "Cancelado"}
          </Badge>
        </div>
      </div>
    </div>
  );
}
