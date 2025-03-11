
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusCircle, Upload, Download, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contacts() {
  const { toast } = useToast();
  
  const handleCreateContact = () => {
    toast({
      title: "Coming soon",
      description: "Contact creation functionality will be available soon!",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Contacts</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload size={18} className="mr-2" />
            Import
          </Button>
          <Button variant="outline">
            <Download size={18} className="mr-2" />
            Export
          </Button>
          <Button onClick={handleCreateContact}>
            <PlusCircle size={18} className="mr-2" />
            Add Contact
          </Button>
        </div>
      </div>
      <p className="text-muted-foreground mb-6">Manage your contacts and mailing lists</p>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Filter size={18} />
              <span>Filter</span>
            </div>
            <p className="text-sm text-muted-foreground">0 contacts</p>
          </div>
          
          <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-md">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">No contacts yet</p>
              <Button variant="outline" onClick={handleCreateContact}>Add your first contact</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
