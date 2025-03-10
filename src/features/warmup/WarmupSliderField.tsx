
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { useId } from "react";
import { Control } from "react-hook-form";
import { WarmupFormValues } from "./types";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface WarmupSliderFieldProps {
  control: Control<WarmupFormValues>;
  name: "startEmails" | "maxEmails" | "warmupDays";
  label: string;
  min: number;
  max: number;
  step: number;
  tooltip?: string;
  onValueChange?: (value: number) => void;
  unit?: string;
}

export function WarmupSliderField({
  control,
  name,
  label,
  min,
  max,
  step,
  tooltip,
  onValueChange,
  unit = "emails/day"
}: WarmupSliderFieldProps) {
  const id = useId();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex justify-between items-center">
            <FormLabel>{label}</FormLabel>
            {tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <HelpCircle size={14} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-[200px] text-xs">{tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          <FormControl>
            <Slider
              id={id}
              min={min}
              max={max}
              step={step}
              defaultValue={[field.value]}
              onValueChange={(value) => {
                field.onChange(value[0]);
                if (onValueChange) {
                  onValueChange(value[0]);
                }
              }}
            />
          </FormControl>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{field.value} {unit}</span>
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
