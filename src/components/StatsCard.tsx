
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  icon: ReactNode;
  label: string;
  value: string;
  change?: string;
  positive?: boolean;
  className?: string;
}

export function StatsCard({ 
  icon, 
  label, 
  value, 
  change, 
  positive = true,
  className 
}: StatsCardProps) {
  return (
    <div className={cn("glass-card rounded-xl p-6", className)}>
      <div className="flex justify-between items-start mb-4">
        <span className="text-muted-foreground text-sm font-medium">{label}</span>
        <div className="text-muted-foreground/60">
          {icon}
        </div>
      </div>
      
      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-semibold">{value}</span>
        {change && (
          <span className={`text-sm font-medium ${positive ? 'text-green-500' : 'text-red-500'}`}>
            {positive ? '+' : ''}{change}
          </span>
        )}
      </div>
    </div>
  );
}
