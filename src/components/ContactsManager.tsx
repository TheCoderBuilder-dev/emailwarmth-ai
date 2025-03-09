
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
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Search, 
  Upload, 
  UserPlus, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Mail, 
  Filter, 
  Download,
  X,
  Check,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface Contact {
  id: string;
  name: string;
  email: string;
  company: string;
  position: string;
  lastContacted: string | null;
  status: "active" | "unsubscribed" | "bounced";
}

export function ContactsManager() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const { toast } = useToast();
  
  // Mock data for contacts - this would come from your API
  const contacts: Contact[] = [
    {
      id: "1",
      name: "Alex Johnson",
      email: "alex.johnson@company.com",
      company: "TechCorp Inc.",
      position: "Marketing Director",
      lastContacted: "2 days ago",
      status: "active"
    },
    {
      id: "2",
      name: "Emma Williams",
      email: "emma.williams@startup.io",
      company: "StartUp.io",
      position: "CEO",
      lastContacted: "1 week ago",
      status: "active"
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@enterprise.net",
      company: "Enterprise Solutions",
      position: "CTO",
      lastContacted: null,
      status: "active"
    },
    {
      id: "4",
      name: "Sarah Davis",
      email: "sarah.davis@tech.co",
      company: "Tech.co",
      position: "Sales Manager",
      lastContacted: "3 days ago",
      status: "bounced"
    },
    {
      id: "5",
      name: "James Wilson",
      email: "james.wilson@company.org",
      company: "Nonprofit Org",
      position: "Director",
      lastContacted: "2 weeks ago",
      status: "unsubscribed"
    }
  ];
  
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleAddContact = () => {
    setSelectedContact(null);
    setSheetOpen(true);
  };
  
  const handleEditContact = (contact: Contact) => {
    setSelectedContact(contact);
    setSheetOpen(true);
  };
  
  const handleDeleteContact = (contactId: string) => {
    toast({
      title: "Contact deleted",
      description: "The contact has been deleted successfully",
    });
  };
  
  const handleImportContacts = () => {
    toast({
      title: "Import contacts",
      description: "Contact import feature will be available in the next update",
    });
  };
  
  const handleExportContacts = () => {
    toast({
      title: "Export contacts",
      description: "Contact export feature will be available in the next update",
    });
  };
  
  const handleSaveContact = () => {
    setSheetOpen(false);
    toast({
      title: selectedContact ? "Contact updated" : "Contact added",
      description: selectedContact 
        ? "The contact has been updated successfully" 
        : "The new contact has been added successfully",
    });
  };
  
  const getStatusBadge = (status: Contact["status"]) => {
    return (
      <div className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium",
        status === "active" && "bg-green-100 text-green-800",
        status === "unsubscribed" && "bg-amber-100 text-amber-800",
        status === "bounced" && "bg-red-100 text-red-800",
      )}>
        {status === "active" && <Check className="mr-1 h-3 w-3" />}
        {status === "unsubscribed" && <X className="mr-1 h-3 w-3" />}
        {status === "bounced" && <X className="mr-1 h-3 w-3" />}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </div>
    );
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search contacts..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={handleImportContacts}>
            <Upload className="mr-2 h-4 w-4" />
            Import
          </Button>
          <Button variant="outline" onClick={handleExportContacts}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={handleAddContact}>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Contact
          </Button>
        </div>
      </div>
      
      <Card className="border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Last Contacted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className="font-medium">{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.company}</TableCell>
                    <TableCell>{contact.position}</TableCell>
                    <TableCell>{contact.lastContacted || "Never"}</TableCell>
                    <TableCell>{getStatusBadge(contact.status)}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleEditContact(contact)}>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => toast({
                            title: "Email sent",
                            description: `Test email sent to ${contact.name}`,
                          })}>
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            onClick={() => handleDeleteContact(contact.id)}
                            className="text-red-500 focus:text-red-500"
                          >
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="py-6 text-center text-muted-foreground">
                    No contacts found. Add your first contact to get started.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
      
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{selectedContact ? "Edit Contact" : "Add New Contact"}</SheetTitle>
            <SheetDescription>
              {selectedContact 
                ? "Update the contact information below." 
                : "Fill in the details to add a new contact."}
            </SheetDescription>
          </SheetHeader>
          <div className="space-y-4 py-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input 
                id="name" 
                className="mt-1.5" 
                defaultValue={selectedContact?.name || ""} 
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                className="mt-1.5" 
                defaultValue={selectedContact?.email || ""} 
              />
            </div>
            <div>
              <label htmlFor="company" className="text-sm font-medium">
                Company
              </label>
              <Input 
                id="company" 
                className="mt-1.5" 
                defaultValue={selectedContact?.company || ""} 
              />
            </div>
            <div>
              <label htmlFor="position" className="text-sm font-medium">
                Position
              </label>
              <Input 
                id="position" 
                className="mt-1.5" 
                defaultValue={selectedContact?.position || ""} 
              />
            </div>
            <div className="pt-4">
              <Button onClick={handleSaveContact} className="w-full">
                {selectedContact ? "Update Contact" : "Add Contact"}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
