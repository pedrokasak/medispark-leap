
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const appointmentDates = [
  new Date(2023, 9, 5),
  new Date(2023, 9, 7),
  new Date(2023, 9, 12),
  new Date(2023, 9, 15),
  new Date(2023, 9, 18),
  new Date(2023, 9, 22),
  new Date(2023, 9, 25),
  new Date(2023, 9, 29),
];

export function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Calendário</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            appointment: appointmentDates,
          }}
          modifiersClassNames={{
            appointment: "bg-medical-light text-medical-dark font-medium",
          }}
          components={{
            DayContent: ({ date, selectedDate }) => {
              const hasAppointment = appointmentDates.some(
                appointmentDate =>
                  appointmentDate.getDate() === date.getDate() &&
                  appointmentDate.getMonth() === date.getMonth() &&
                  appointmentDate.getFullYear() === date.getFullYear()
              );
              
              const isSelected = selectedDate && 
                selectedDate.getDate() === date.getDate() &&
                selectedDate.getMonth() === date.getMonth() &&
                selectedDate.getFullYear() === date.getFullYear();
              
              return (
                <div className="relative w-full h-full flex items-center justify-center">
                  {date.getDate()}
                  {hasAppointment && !isSelected && (
                    <div className="absolute bottom-1 w-1 h-1 rounded-full bg-medical-accent" />
                  )}
                </div>
              );
            },
          }}
        />
      </CardContent>
    </Card>
  );
}
