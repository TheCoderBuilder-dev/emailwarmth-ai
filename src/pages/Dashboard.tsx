
import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { useToast } from "@/hooks/use-toast";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardTabs } from "@/components/dashboard/DashboardTabs";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { toast } = useToast();

  const handleCreateCampaign = () => {
    toast({
      title: "Feature coming soon",
      description: "Campaign creation will be available in the next update",
    });
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      
      <div className="flex-1 p-6 lg:p-8 pt-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <DashboardHeader onCreateCampaign={handleCreateCampaign} />
          <DashboardStats />
          <DashboardTabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            onCreateCampaign={handleCreateCampaign} 
          />
        </div>
      </div>
    </div>
  );
}
