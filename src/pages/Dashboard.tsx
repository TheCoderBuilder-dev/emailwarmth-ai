
import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { StatsCard } from "@/components/StatsCard";
import { WarmupConfig } from "@/components/WarmupConfig";
import { CampaignList } from "@/components/CampaignList";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Mail, Zap, BarChart3, Settings } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();

  const handleCreateCampaign = () => {
    toast({
      title: "Feature coming soon",
      description: "Campaign creation will be available in the next update",
    });
  };

  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      
      <div className="flex-1 p-6 lg:p-8 pt-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">Manage your email campaigns and warm-up</p>
            </div>
            <Button onClick={handleCreateCampaign}>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </div>
          
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
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="grid grid-cols-3 sm:w-[400px]">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="warm-up">Warm-up</TabsTrigger>
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6 border border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Warm-up Status</h3>
                    <Settings className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Daily volume</span>
                      <span className="font-medium">24 emails/day</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Current phase</span>
                      <span className="font-medium">Ramp-up (Phase 2/4)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Inbox placement</span>
                      <span className="font-medium text-green-500">98.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Days remaining</span>
                      <span className="font-medium">5 days</span>
                    </div>
                    <Button variant="outline" className="w-full mt-2">View Details</Button>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6 border border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Recent Campaigns</h3>
                    <Button variant="ghost" size="sm" className="h-8 px-2">View All</Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-border/50">
                      <div>
                        <p className="font-medium">Product Introduction</p>
                        <p className="text-sm text-muted-foreground">32 recipients</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-green-500">38% open rate</p>
                        <p className="text-sm text-muted-foreground">Last sent 2d ago</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pb-2 border-b border-border/50">
                      <div>
                        <p className="font-medium">Follow-up Sequence</p>
                        <p className="text-sm text-muted-foreground">15 recipients</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-green-500">42% open rate</p>
                        <p className="text-sm text-muted-foreground">Last sent 5h ago</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-2" onClick={handleCreateCampaign}>Create Campaign</Button>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-xl p-6 border border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Email Performance</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm" className="h-8">Last 7 Days</Button>
                    <Button variant="ghost" size="sm" className="h-8">Last 30 Days</Button>
                  </div>
                </div>
                <div className="h-64 flex items-center justify-center text-muted-foreground border border-dashed rounded-lg">
                  <p>Chart visualization coming soon</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="warm-up" className="space-y-4">
              <WarmupConfig />
            </TabsContent>
            
            <TabsContent value="campaigns" className="space-y-4">
              <CampaignList />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
