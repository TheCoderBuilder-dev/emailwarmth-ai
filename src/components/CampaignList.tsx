
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Calendar, Users, BarChart, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";

export function CampaignList() {
  const { toast } = useToast();
  
  // Mock campaign data - in a real app, this would come from an API
  const campaigns = [
    {
      id: "1",
      name: "Welcome Sequence",
      status: "active",
      recipients: 45,
      openRate: 32,
      sentDate: "2 days ago",
      nextSend: "Today, 2:00 PM"
    },
    {
      id: "2",
      name: "Newsletter May",
      status: "paused",
      recipients: 126,
      openRate: 28,
      sentDate: "1 week ago",
      nextSend: "Not scheduled"
    }
  ];
  
  const handlePauseCampaign = (id: string) => {
    toast({
      title: "Campaign paused",
      description: "The campaign has been paused successfully."
    });
  };
  
  const handleResumeCampaign = (id: string) => {
    toast({
      title: "Campaign resumed",
      description: "The campaign is now active again."
    });
  };
  
  return (
    <div className="space-y-4">
      {campaigns.length > 0 ? (
        <div>
          {campaigns.map((campaign) => (
            <Card key={campaign.id} className="mb-4 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium">{campaign.name}</h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        campaign.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {campaign.status === 'active' ? 'Active' : 'Paused'}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 mt-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>{campaign.recipients} recipients</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <BarChart className="mr-2 h-4 w-4" />
                        <span>{campaign.openRate}% open rate</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Sent {campaign.sentDate}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>Next: {campaign.nextSend}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap md:flex-nowrap gap-2 self-end md:self-auto">
                    {campaign.status === 'active' ? (
                      <Button variant="outline" size="sm" onClick={() => handlePauseCampaign(campaign.id)}>
                        <Pause size={16} className="mr-2" />
                        Pause
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" onClick={() => handleResumeCampaign(campaign.id)}>
                        <Play size={16} className="mr-2" />
                        Resume
                      </Button>
                    )}
                    <Button asChild size="sm">
                      <Link to={`/dashboard/campaigns/${campaign.id}`}>
                        View Details
                        <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6">
            <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-md">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">No campaigns yet</p>
                <Button asChild variant="outline">
                  <Link to="/dashboard/create-campaign">Create your first campaign</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
