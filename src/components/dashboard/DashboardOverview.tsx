
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DashboardOverviewProps {
  onCreateCampaign: () => void;
}

export function DashboardOverview({ onCreateCampaign }: DashboardOverviewProps) {
  return (
    <div className="space-y-4">
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
            <Button variant="outline" className="w-full mt-2" onClick={onCreateCampaign}>Create Campaign</Button>
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
    </div>
  );
}
