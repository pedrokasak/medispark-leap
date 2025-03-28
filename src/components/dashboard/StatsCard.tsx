
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatsCard({ title, value, icon: Icon, trend, className }: StatsCardProps) {
  return (
    <div className={cn("medical-card p-6 flex flex-col", className)}>
      <div className="flex justify-between items-start mb-4">
        <div className="stats-label">{title}</div>
        <Icon className="text-medical-accent h-5 w-5" />
      </div>
      <div className="stats-value">{value}</div>
      
      {trend && (
        <div className="mt-2 flex items-center gap-1 text-sm">
          <span className={trend.isPositive ? "text-medical-accent" : "text-destructive"}>
            {trend.isPositive ? "+" : "-"}{Math.abs(trend.value)}%
          </span>
          <span className="text-gray-500">vs. último mês</span>
        </div>
      )}
    </div>
  );
}
