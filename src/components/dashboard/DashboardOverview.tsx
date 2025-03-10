
import { Settings, ExternalLink, BarChart3, Calendar, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardOverviewProps {
  onCreateCampaign: () => void;
}

export function DashboardOverview({ onCreateCampaign }: DashboardOverviewProps) {
  // Mock warm-up data
  const warmupProgress = 76;
  const warmupPhase = "Ramp-up";
  const currentDay = 15;
  const totalDays = 20;
  const daysRemaining = totalDays - currentDay;
  const inboxPlacement = 98.2;
  
  // Mock campaign performance data
  const campaigns = [
    {
      id: "1",
      name: "Product Introduction",
      recipients: 32,
      openRate: 38,
      lastSent: "2d ago",
    },
    {
      id: "2",
      name: "Follow-up Sequence",
      recipients: 15,
      openRate: 42,
      lastSent: "5h ago",
    },
  ];
  
  // Mock upcoming scheduled emails
  const upcomingEmails = [
    {
      id: "1",
      campaign: "Follow-up Sequence",
      recipients: 8,
      scheduledFor: "Tomorrow, 9:00 AM",
    },
    {
      id: "2",
      campaign: "Monthly Newsletter",
      recipients: 124,
      scheduledFor: "Apr 15, 10:30 AM",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Warm-up Status</CardTitle>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
            <CardDescription>Current progress of your email warm-up</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress ({currentDay}/{totalDays} days)</span>
                <span className="font-medium">{warmupProgress}%</span>
              </div>
              <Progress value={warmupProgress} className="h-2" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Current phase</p>
                <p className="font-medium">{warmupPhase} (Phase 2/4)</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Daily volume</p>
                <p className="font-medium">24 emails/day</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Inbox placement</p>
                <p className="font-medium text-green-500">{inboxPlacement}%</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Days remaining</p>
                <p className="font-medium">{daysRemaining} days</p>
              </div>
            </div>
            
            <Button variant="outline" className="w-full mt-2">
              View Detailed Reports
              <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Recent Campaigns</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                View All
              </Button>
            </div>
            <CardDescription>Performance of your latest email campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between pb-3 border-b border-border/50 last:border-0 last:pb-0">
                <div>
                  <p className="font-medium">{campaign.name}</p>
                  <p className="text-sm text-muted-foreground">{campaign.recipients} recipients</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-green-500">{campaign.openRate}% open rate</p>
                  <p className="text-sm text-muted-foreground">Last sent {campaign.lastSent}</p>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full" onClick={onCreateCampaign}>
              Create New Campaign
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-sm lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Email Performance</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="h-8">Last 7 Days</Button>
                <Button variant="ghost" size="sm" className="h-8">Last 30 Days</Button>
              </div>
            </div>
            <CardDescription>Track your overall email performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground border border-dashed rounded-lg">
              <div className="text-center">
                <BarChart3 className="h-10 w-10 mx-auto mb-3 text-muted-foreground/50" />
                <p>Performance chart visualization coming soon</p>
                <p className="text-sm text-muted-foreground mt-1">We're working on this feature</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle>Upcoming Emails</CardTitle>
            <CardDescription>Scheduled emails in your campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEmails.map((email) => (
              <div key={email.id} className="space-y-2 pb-3 border-b border-border/50 last:border-0 last:pb-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium">{email.campaign}</p>
                    <p className="text-sm text-muted-foreground">{email.recipients} recipients</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{email.scheduledFor}</span>
                </div>
              </div>
            ))}
            
            {upcomingEmails.length === 0 && (
              <div className="py-6 text-center text-muted-foreground">
                <Mail className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
                <p>No upcoming emails scheduled</p>
                <Button variant="link" className="mt-2" onClick={onCreateCampaign}>
                  Schedule a new campaign
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
