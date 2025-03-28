
import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { AppointmentCard, AppointmentProps } from "@/components/dashboard/AppointmentCard";
import { AppointmentCalendar } from "@/components/dashboard/Calendar";
import { PatientList } from "@/components/dashboard/PatientList";
import { Calendar, Users, Clock, TrendingUp } from "lucide-react";

// Sample data
const sampleAppointments: AppointmentProps[] = [
  {
    id: "1",
    patientName: "João Silva",
    time: "09:00",
    duration: "30 min",
    location: "Consultório 3",
    type: "checkup",
    status: "confirmed",
  },
  {
    id: "2",
    patientName: "Maria Oliveira",
    time: "10:30",
    duration: "45 min",
    location: "Consultório 2",
    type: "consultation",
    status: "scheduled",
  },
  {
    id: "3",
    patientName: "Carlos Santos",
    time: "13:15",
    duration: "30 min",
    location: "Consultório 1",
    type: "followup",
    status: "scheduled",
  },
];

const samplePatients = [
  {
    id: "1",
    name: "João Silva",
    lastVisit: "25/09/2023",
    condition: "Hipertensão",
    status: "stable" as const,
  },
  {
    id: "2",
    name: "Maria Oliveira",
    lastVisit: "18/09/2023",
    condition: "Diabetes Tipo 2",
    status: "improving" as const,
  },
  {
    id: "3",
    name: "Carlos Santos",
    lastVisit: "15/09/2023",
    condition: "Arritmia",
    status: "worsening" as const,
  },
  {
    id: "4",
    name: "Ana Pereira",
    lastVisit: "Primeira consulta",
    condition: "Avaliação Geral",
    status: "new" as const,
  },
];

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-medical-gray">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col min-h-screen ml-[70px] md:ml-64">
          <AppHeader />
          
          <main className="flex-1 p-4 md:p-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
              
              {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg h-32 animate-pulse-gentle"
                      />
                    ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <StatsCard
                    title="Consultas Hoje"
                    value="8"
                    icon={Calendar}
                    trend={{ value: 10, isPositive: true }}
                  />
                  <StatsCard
                    title="Total de Pacientes"
                    value="256"
                    icon={Users}
                    trend={{ value: 5, isPositive: true }}
                  />
                  <StatsCard
                    title="Tempo Médio"
                    value="32 min"
                    icon={Clock}
                    trend={{ value: 3, isPositive: false }}
                  />
                  <StatsCard
                    title="Taxa de Retorno"
                    value="85%"
                    icon={TrendingUp}
                    trend={{ value: 2, isPositive: true }}
                  />
                </div>
              )}
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="text-lg font-medium mb-4">Próximas Consultas</h2>
                    {loading ? (
                      <div className="space-y-3">
                        {Array(3)
                          .fill(0)
                          .map((_, i) => (
                            <div
                              key={i}
                              className="bg-gray-100 rounded-lg h-24 animate-pulse-gentle"
                            />
                          ))}
                      </div>
                    ) : (
                      <div>
                        {sampleAppointments.map((appointment) => (
                          <AppointmentCard key={appointment.id} {...appointment} />
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {!loading && (
                    <PatientList patients={samplePatients} />
                  )}
                </div>
                
                <div className="space-y-6">
                  {!loading && <AppointmentCalendar />}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
