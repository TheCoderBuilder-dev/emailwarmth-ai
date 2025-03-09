
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  PlusCircle, 
  Search, 
  MoreVertical, 
  Play, 
  Pause, 
  Eye, 
  Edit, 
  Trash2, 
  ArrowUpDown, 
  CheckCircle2,
  Clock,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Campaign {
  id: string;
  name: string;
  status: "draft" | "scheduled" | "active" | "paused" | "completed";
  recipients: number;
  openRate: number;
  replyRate: number;
  lastUpdated: string;
}

export function CampaignList() {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  
  // Mock data for campaigns - this would come from your API
  const campaigns: Campaign[] = [
    {
      id: "1",
      name: "Initial Outreach - Product Demo",
      status: "active",
      recipients: 48,
      openRate: 37.5,
      replyRate: 12.5,
      lastUpdated: "2 hours ago"
    },
    {
      id: "2",
      name: "Follow-up Sequence - Q1 Prospects",
      status: "scheduled",
      recipients: 124,
      openRate: 0,
      replyRate: 0,
      lastUpdated: "Yesterday"
    },
    {
      id: "3",
      name: "Re-engagement Campaign",
      status: "draft",
      recipients: 85,
      openRate: 0,
      replyRate: 0,
      lastUpdated: "3 days ago"
    },
    {
      id: "4",
      name: "Webinar Invitation - April",
      status: "completed",
      recipients: 210,
      openRate: 42.8,
      replyRate: 15.2,
      lastUpdated: "2 weeks ago"
    },
    {
      id: "5",
      name: "Product Updates - Q2",
      status: "paused",
      recipients: 63,
      openRate: 28.6,
      replyRate: 7.9,
      lastUpdated: "4 days ago"
    }
  ];
  
  const filteredCampaigns = campaigns.filter(campaign => 
    campaign.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleAction = (action: string, campaignId: string) => {
    toast({
      title: `Campaign ${action}`,
      description: `Campaign ${action} action will be available in the next update`,
    });
  };
  
  const getStatusIcon = (status: Campaign["status"]) => {
    switch (status) {
      case "active":
        return <Play className="h-4 w-4 text-green-500" />;
      case "scheduled":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "draft":
        return <Edit className="h-4 w-4 text-amber-500" />;
      case "paused":
        return <Pause className="h-4 w-4 text-orange-500" />;
      case "completed":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
    }
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search campaigns..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          New Campaign
        </Button>
      </div>
      
      <Card className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left text-sm font-medium text-muted-foreground py-3 px-4">
                  <div className="flex items-center">
                    Campaign Name
                    <ArrowUpDown className="ml-2 h-3 w-3" />
                  </div>
                </th>
                <th className="text-center text-sm font-medium text-muted-foreground py-3 px-4">Status</th>
                <th className="text-center text-sm font-medium text-muted-foreground py-3 px-4">Recipients</th>
                <th className="text-center text-sm font-medium text-muted-foreground py-3 px-4">Open Rate</th>
                <th className="text-center text-sm font-medium text-muted-foreground py-3 px-4">Reply Rate</th>
                <th className="text-center text-sm font-medium text-muted-foreground py-3 px-4">Last Updated</th>
                <th className="text-right text-sm font-medium text-muted-foreground py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.length > 0 ? (
                filteredCampaigns.map((campaign) => (
                  <tr key={campaign.id} className="border-b border-border hover:bg-muted/30">
                    <td className="py-3 px-4 min-w-[200px]">
                      <div>
                        <p className="font-medium">{campaign.name}</p>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <div className="flex items-center justify-center space-x-1">
                        {getStatusIcon(campaign.status)}
                        <span className={cn(
                          "text-xs font-medium capitalize",
                          campaign.status === "active" && "text-green-500",
                          campaign.status === "scheduled" && "text-blue-500",
                          campaign.status === "draft" && "text-amber-500",
                          campaign.status === "paused" && "text-orange-500",
                          campaign.status === "completed" && "text-green-500",
                        )}>
                          {campaign.status}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">{campaign.recipients}</td>
                    <td className="py-3 px-4 text-center">
                      {campaign.status === "draft" || campaign.status === "scheduled" ? 
                        "—" : `${campaign.openRate.toFixed(1)}%`}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {campaign.status === "draft" || campaign.status === "scheduled" ? 
                        "—" : `${campaign.replyRate.toFixed(1)}%`}
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-muted-foreground">{campaign.lastUpdated}</td>
                    <td className="py-3 px-4 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleAction("view", campaign.id)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleAction("edit", campaign.id)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          {campaign.status === "active" ? (
                            <DropdownMenuItem onClick={() => handleAction("pause", campaign.id)}>
                              <Pause className="mr-2 h-4 w-4" />
                              Pause
                            </DropdownMenuItem>
                          ) : campaign.status === "paused" || campaign.status === "draft" || campaign.status === "scheduled" ? (
                            <DropdownMenuItem onClick={() => handleAction("activate", campaign.id)}>
                              <Play className="mr-2 h-4 w-4" />
                              Activate
                            </DropdownMenuItem>
                          ) : null}
                          <DropdownMenuItem 
                            onClick={() => handleAction("delete", campaign.id)}
                            className="text-red-500 focus:text-red-500"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-6 text-center text-muted-foreground">
                    No campaigns found. Create your first campaign to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
