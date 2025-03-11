
import { Button } from "@/components/ui/button";
import { CampaignList } from "@/components/CampaignList";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Campaigns() {
  const { toast } = useToast();
  
  const handleCreateCampaign = () => {
    toast({
      title: "Coming soon",
      description: "Campaign creation functionality will be available soon!",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Email Campaigns</h1>
        <Button onClick={handleCreateCampaign} className="gap-2">
          <PlusCircle size={18} />
          Create Campaign
        </Button>
      </div>
      <p className="text-muted-foreground mb-6">Manage your email campaigns and sequences</p>
      
      <CampaignList />
    </div>
  );
}
