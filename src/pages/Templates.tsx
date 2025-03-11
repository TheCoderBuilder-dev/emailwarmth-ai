
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Templates() {
  const { toast } = useToast();
  
  const handleCreateTemplate = () => {
    toast({
      title: "Coming soon",
      description: "Template creation functionality will be available soon!",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Email Templates</h1>
        <Button onClick={handleCreateTemplate}>
          <PlusCircle size={18} className="mr-2" />
          Create Template
        </Button>
      </div>
      <p className="text-muted-foreground mb-6">Manage your email templates for campaigns and sequences</p>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input className="pl-10" placeholder="Search templates..." />
        </div>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-md">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">No templates yet</p>
              <Button variant="outline" onClick={handleCreateTemplate}>Create your first template</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
