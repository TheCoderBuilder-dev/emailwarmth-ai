
import { Control } from "react-hook-form";
import { WarmupFormValues } from "./types";
import { WarmupSliderField } from "./WarmupSliderField";

interface WarmupSettingsSectionProps {
  control: Control<WarmupFormValues>;
  setWarmupDays: (days: number) => void;
}

export function WarmupSettingsSection({ control, setWarmupDays }: WarmupSettingsSectionProps) {
  return (
    <div className="space-y-4">
      <WarmupSliderField
        control={control}
        name="startEmails"
        label="Starting Emails per Day"
        min={5}
        max={50}
        step={1}
        tooltip="Start with a low number to avoid triggering spam filters."
      />
      
      <WarmupSliderField
        control={control}
        name="maxEmails"
        label="Maximum Emails per Day"
        min={10}
        max={200}
        step={5}
      />
      
      <WarmupSliderField
        control={control}
        name="warmupDays"
        label="Warm-up Duration"
        min={7}
        max={60}
        step={1}
        unit="days"
        onValueChange={setWarmupDays}
      />
    </div>
  );
}
