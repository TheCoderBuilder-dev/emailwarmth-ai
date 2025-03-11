
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, DotChart, LineChart, PieChart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics</h1>
      <p className="text-muted-foreground mb-6">Track and analyze your email performance metrics</p>
      
      <div className="flex gap-4 mb-6">
        <Button 
          variant={activeTab === "overview" ? "default" : "outline"} 
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </Button>
        <Button 
          variant={activeTab === "campaigns" ? "default" : "outline"}
          onClick={() => setActiveTab("campaigns")}
        >
          Campaigns
        </Button>
        <Button 
          variant={activeTab === "warmup" ? "default" : "outline"}
          onClick={() => setActiveTab("warmup")}
        >
          Warm-up
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart size={18} />
              Open Rates
            </CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Chart coming soon</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <LineChart size={18} />
              Reply Rates
            </CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Chart coming soon</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <PieChart size={18} />
              Deliverability
            </CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 w-full flex items-center justify-center border-2 border-dashed rounded-md">
              <p className="text-muted-foreground">Chart coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
