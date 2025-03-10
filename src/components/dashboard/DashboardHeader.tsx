
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DashboardHeaderProps {
  onCreateCampaign: () => void;
}

export function DashboardHeader({ onCreateCampaign }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Manage your email campaigns and warm-up</p>
      </div>
      <Button onClick={onCreateCampaign}>
        <PlusCircle className="mr-2 h-4 w-4" />
        New Campaign
      </Button>
    </div>
  );
}
