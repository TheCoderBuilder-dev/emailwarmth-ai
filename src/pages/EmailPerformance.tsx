
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart, MailCheck, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmailPerformance() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Email Performance</h1>
      <p className="text-muted-foreground mb-6">View detailed metrics about your email's performance</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Open Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-2xl font-bold">24.8%</div>
              <div className="ml-2 text-sm text-green-500">+2.3%</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Click Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-2xl font-bold">3.6%</div>
              <div className="ml-2 text-sm text-green-500">+0.8%</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Bounce Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="text-2xl font-bold">0.2%</div>
              <div className="ml-2 text-sm text-green-500">-0.1%</div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart size={18} />
              Open Rate Over Time
            </CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Chart coming soon</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart size={18} />
              Email Delivery Performance
            </CardTitle>
            <CardDescription>By day of week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Chart coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart size={18} />
              Device Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-60 w-full flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Chart coming soon</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MailCheck size={18} />
              Top Performing Emails
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="p-2 border rounded-md">
                <p className="font-medium">Welcome Sequence #1</p>
                <p className="text-sm text-muted-foreground">32% open rate</p>
              </div>
              <div className="p-2 border rounded-md">
                <p className="font-medium">Follow-up Template</p>
                <p className="text-sm text-muted-foreground">28% open rate</p>
              </div>
              <div className="p-2 border rounded-md">
                <p className="font-medium">Newsletter May</p>
                <p className="text-sm text-muted-foreground">26% open rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell size={18} />
              Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-2 bg-primary/5 rounded-md">
                <p className="text-sm">Send emails on Tuesday for better open rates</p>
              </div>
              <div className="p-2 bg-primary/5 rounded-md">
                <p className="text-sm">Keep subject lines under 50 characters</p>
              </div>
              <div className="p-2 bg-primary/5 rounded-md">
                <p className="text-sm">Use more personalization in content</p>
              </div>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">View All Insights</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
