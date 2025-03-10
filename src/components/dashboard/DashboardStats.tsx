
import { Mail, Zap, BarChart3, Users } from "lucide-react";
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
        className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200 dark:border-blue-800/30"
      />
      <StatsCard 
        title="Warm-up Progress" 
        value="76%" 
        description="15/20 days completed"
        icon={<Zap className="h-4 w-4" />}
        positive
        className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20 border-amber-200 dark:border-amber-800/30"
      />
      <StatsCard 
        title="Open Rate" 
        value="32.7%" 
        description="+5.2% from last week"
        icon={<BarChart3 className="h-4 w-4" />}
        positive
        className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border-green-200 dark:border-green-800/30"
      />
      <StatsCard 
        title="Active Subscribers" 
        value="854" 
        description="-1.2% from last week"
        icon={<Users className="h-4 w-4" />}
        positive={false}
        className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20 border-red-200 dark:border-red-800/30"
      />
    </div>
  );
}
