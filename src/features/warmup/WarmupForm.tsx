
import { useState } from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WarmupFormValues, warmupFormSchema } from "./types";
import { WarmupSettingsSection } from "./WarmupSettingsSection";
import { EmailConfigSection } from "./EmailConfigSection";

export function WarmupForm() {
  const [warmupDays, setWarmupDays] = useState(30);
  
  const form = useForm<WarmupFormValues>({
    resolver: zodResolver(warmupFormSchema),
    defaultValues: {
      startEmails: 5,
      maxEmails: 50,
      warmupDays: 30,
      emailAddress: "",
      smtpHost: "",
      smtpPort: "587",
      smtpUsername: "",
      smtpPassword: "",
    },
  });

  function onSubmit(values: WarmupFormValues) {
    console.log(values);
    // Implementation would connect to backend
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WarmupSettingsSection 
            control={form.control} 
            setWarmupDays={setWarmupDays} 
          />
          <EmailConfigSection control={form.control} />
        </div>
        
        <div className="pt-4">
          <Button type="submit" className="w-full md:w-auto">
            Start Warm-up Campaign
          </Button>
        </div>
      </form>
    </Form>
  );
}
