
import { Lightbulb, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AISuggestionCardProps {
  title: string;
  suggestion: string;
}

export function AISuggestionCard({ title, suggestion }: AISuggestionCardProps) {
  const [applied, setApplied] = useState(false);
  const { toast } = useToast();
  
  const handleApply = () => {
    setApplied(true);
    toast({
      title: "Suggestion applied",
      description: "The AI suggestion has been applied to your content",
    });
  };
  
  return (
    <div className="p-3 border rounded-lg bg-primary/5 relative">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <Lightbulb className="h-4 w-4 text-amber-500" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground">{suggestion}</p>
        </div>
        {applied ? (
          <div className="flex items-center text-green-500 text-sm font-medium">
            <CheckCircle2 className="h-4 w-4 mr-1" />
            Applied
          </div>
        ) : (
          <Button size="sm" variant="outline" className="h-8" onClick={handleApply}>
            Apply
          </Button>
        )}
      </div>
    </div>
  );
}
