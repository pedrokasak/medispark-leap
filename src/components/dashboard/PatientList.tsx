
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Patient {
  id: string;
  name: string;
  avatar?: string;
  lastVisit: string;
  condition: string;
  status: "stable" | "improving" | "worsening" | "critical" | "new";
}

const statusColors = {
  stable: "bg-blue-50 text-blue-700 border-blue-200",
  improving: "bg-green-50 text-green-700 border-green-200",
  worsening: "bg-yellow-50 text-yellow-700 border-yellow-200",
  critical: "bg-red-50 text-red-700 border-red-200",
  new: "bg-purple-50 text-purple-700 border-purple-200",
};

const statusLabels = {
  stable: "Estável",
  improving: "Melhorando",
  worsening: "Piorando",
  critical: "Crítico",
  new: "Novo",
};

interface PatientListProps {
  patients: Patient[];
}

export function PatientList({ patients }: PatientListProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Pacientes Recentes</CardTitle>
        <Button variant="link" size="sm" asChild>
          <Link to="/patients" className="text-medical-dark">
            Ver todos
          </Link>
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {patients.map((patient) => (
            <div key={patient.id} className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={patient.avatar} />
                  <AvatarFallback className="bg-medical-light text-medical-dark">
                    {patient.name.split(' ').map(name => name[0]).join('').substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{patient.name}</div>
                  <div className="text-sm text-gray-500">
                    {patient.condition}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className={statusColors[patient.status]}>
                  {statusLabels[patient.status]}
                </Badge>
                <Button variant="ghost" size="icon" asChild>
                  <Link to={`/patients/${patient.id}`}>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
