
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WarmupConfig } from "@/components/WarmupConfig";
import { CampaignList } from "@/components/CampaignList";
import { DashboardOverview } from "./DashboardOverview";

interface DashboardTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  onCreateCampaign: () => void;
}

export function DashboardTabs({ activeTab, setActiveTab, onCreateCampaign }: DashboardTabsProps) {
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
      <TabsList className="grid grid-cols-3 sm:w-[400px]">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="warm-up">Warm-up</TabsTrigger>
        <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <DashboardOverview onCreateCampaign={onCreateCampaign} />
      </TabsContent>
      
      <TabsContent value="warm-up" className="space-y-4">
        <WarmupConfig />
      </TabsContent>
      
      <TabsContent value="campaigns" className="space-y-4">
        <CampaignList />
      </TabsContent>
    </Tabs>
  );
}
