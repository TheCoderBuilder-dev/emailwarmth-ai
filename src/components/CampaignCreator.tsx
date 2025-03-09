
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { AISuggestionCard } from "@/components/AISuggestionCard";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { CalendarIcon, CheckIcon, Loader2, Save, SendIcon, Trash2 } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

export function CampaignCreator() {
  const [activeTab, setActiveTab] = useState("content");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [date, setDate] = useState<Date>();
  const { toast } = useToast();

  const handleGenerateAI = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setSubject("Introducing our new service that can help [Company] improve [Pain Point]");
      setEmailBody(`Hi [First Name],

I noticed that [Company] has been working on [Specific Detail], and thought you might be interested in how we've helped similar businesses improve their results by 30% on average.

Our [Product/Service] helps companies like yours to:
- Benefit 1
- Benefit 2
- Benefit 3

Would you be open to a quick 15-minute call next week to discuss how we might be able to help [Company] achieve similar results?

Best regards,
[Your Name]`);
      
      setIsGenerating(false);
      toast({
        title: "AI content generated",
        description: "Email content has been generated based on best practices",
      });
    }, 2500);
  };

  const handleSaveDraft = () => {
    toast({
      title: "Campaign saved",
      description: "Your campaign draft has been saved successfully",
    });
  };

  const handleSchedule = () => {
    if (!date) {
      toast({
        title: "Please select a date",
        description: "You need to select a date to schedule this campaign",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Campaign scheduled",
      description: `Your campaign has been scheduled for ${format(date, "PPP")}`,
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Campaign</CardTitle>
          <CardDescription>
            Create and customize your email outreach campaign
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="campaign-name">Campaign Name</Label>
              <Input 
                id="campaign-name" 
                placeholder="E.g., Q2 Product Launch Outreach" 
                className="mt-1.5" 
              />
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
              <TabsList className="grid grid-cols-4 w-full sm:w-[500px]">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="recipients">Recipients</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="subject">Email Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Enter your email subject" 
                      className="mt-1.5"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email-body">Email Body</Label>
                    <Textarea 
                      id="email-body" 
                      placeholder="Write your email content here... Use [First Name], [Company], etc. for personalization"
                      className="min-h-[200px] mt-1.5"
                      value={emailBody}
                      onChange={(e) => setEmailBody(e.target.value)}
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      onClick={handleGenerateAI}
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          AI Generate Content
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                
                {!isGenerating && subject && emailBody && (
                  <div className="pt-4">
                    <h3 className="text-sm font-medium mb-3">AI Suggestions</h3>
                    <div className="space-y-3">
                      <AISuggestionCard 
                        title="Improve your subject line" 
                        suggestion="Try 'Want to boost [Company]'s results by 30%?' for higher open rates."
                      />
                      <AISuggestionCard 
                        title="Add a stronger call-to-action" 
                        suggestion="End with a specific question that requires a response: 'Would Tuesday at 2pm or Wednesday at 10am work better for a quick call?'"
                      />
                    </div>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="recipients" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="p-6 border border-dashed rounded-lg text-center">
                    <p className="text-muted-foreground mb-4">Upload your contact list as a CSV file</p>
                    <Button variant="outline">Upload CSV</Button>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-medium">Test Mode</h4>
                      <p className="text-xs text-muted-foreground">Send a test email to yourself before sending to recipients</p>
                    </div>
                    <Switch id="test-mode" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="settings" className="space-y-4 pt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-medium">Track opens</h4>
                      <p className="text-xs text-muted-foreground">Track when recipients open your email</p>
                    </div>
                    <Switch id="track-opens" defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-medium">Track clicks</h4>
                      <p className="text-xs text-muted-foreground">Track when recipients click links in your email</p>
                    </div>
                    <Switch id="track-clicks" defaultChecked />
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <Label htmlFor="sender-name">Sender Name</Label>
                    <Input id="sender-name" placeholder="Your Name" className="mt-1.5" />
                  </div>
                  
                  <div>
                    <Label htmlFor="sender-email">Sender Email</Label>
                    <Input id="sender-email" placeholder="your@email.com" className="mt-1.5" />
                  </div>
                  
                  <div>
                    <Label>Schedule Send Time</Label>
                    <div className="mt-1.5">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="preview" className="space-y-4 pt-4">
                <div className="p-6 border rounded-lg">
                  {subject && emailBody ? (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                        <span>From:</span>
                        <span>Your Name &lt;your@email.com&gt;</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                        <span>To:</span>
                        <span>[Recipient] &lt;recipient@company.com&gt;</span>
                      </div>
                      <div className="font-medium text-lg mb-3">{subject}</div>
                      <div className="whitespace-pre-line">{emailBody}</div>
                    </div>
                  ) : (
                    <div className="text-center text-muted-foreground py-8">
                      <p>Complete the "Content" tab to see your email preview</p>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <Button variant="outline" size="sm" onClick={() => setActiveTab("content")}>
                    Edit Content
                  </Button>
                  <Button size="sm" onClick={() => toast({
                    title: "Test email sent",
                    description: "A test email has been sent to your address",
                  })}>
                    Send Test Email
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleSaveDraft}>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <div className="space-x-2">
            <Button variant="destructive" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button onClick={handleSchedule}>
              <SendIcon className="mr-2 h-4 w-4" />
              {date ? "Schedule Campaign" : "Send Campaign"}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
