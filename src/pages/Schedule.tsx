
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Schedule() {
  const { toast } = useToast();
  
  const handleScheduleEmail = () => {
    toast({
      title: "Coming soon",
      description: "Email scheduling functionality will be available soon!",
    });
  };

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8 AM to 7 PM

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Schedule</h1>
        <Button onClick={handleScheduleEmail}>
          <PlusCircle size={18} className="mr-2" />
          Schedule Email
        </Button>
      </div>
      <p className="text-muted-foreground mb-6">Manage your scheduled emails and delivery times</p>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>May 2023</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Today</Button>
              <Button variant="outline" size="sm">Week</Button>
              <Button variant="outline" size="sm">Month</Button>
            </div>
          </div>
          
          <div className="overflow-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left"></th>
                  {days.map(day => (
                    <th key={day} className="border p-2 text-center">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hours.map(hour => (
                  <tr key={hour}>
                    <td className="border p-2 text-left text-sm">{hour % 12 || 12} {hour < 12 ? 'AM' : 'PM'}</td>
                    {days.map(day => (
                      <td key={`${day}-${hour}`} className="border p-2 h-12"></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-muted-foreground">No scheduled emails</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
