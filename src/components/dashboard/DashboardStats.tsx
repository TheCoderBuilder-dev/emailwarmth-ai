
import { Mail, Zap, BarChart3 } from "lucide-react";
import { StatsCard } from "@/components/StatsCard";

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard 
        title="Total Emails Sent" 
        value="1,234" 
        description="+12% from last month"
        icon={<Mail className="h-4 w-4" />}
        positive
      />
      <StatsCard 
        title="Warm-up Progress" 
        value="76%" 
        description="15/20 days completed"
        icon={<Zap className="h-4 w-4" />}
        positive
      />
      <StatsCard 
        title="Open Rate" 
        value="32.7%" 
        description="+5.2% from last week"
        icon={<BarChart3 className="h-4 w-4" />}
        positive
      />
      <StatsCard 
        title="Reply Rate" 
        value="8.3%" 
        description="-1.2% from last week"
        icon={<Mail className="h-4 w-4" />}
        positive={false}
      />
    </div>
  );
}
