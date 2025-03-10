
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { WarmupFormValues } from "./types";

interface EmailConfigSectionProps {
  control: Control<WarmupFormValues>;
}

export function EmailConfigSection({ control }: EmailConfigSectionProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input placeholder="your@email.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="smtpHost"
        render={({ field }) => (
          <FormItem>
            <FormLabel>SMTP Host</FormLabel>
            <FormControl>
              <Input placeholder="smtp.gmail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="smtpPort"
        render={({ field }) => (
          <FormItem>
            <FormLabel>SMTP Port</FormLabel>
            <FormControl>
              <Input placeholder="587" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="smtpUsername"
        render={({ field }) => (
          <FormItem>
            <FormLabel>SMTP Username</FormLabel>
            <FormControl>
              <Input placeholder="your@email.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="smtpPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel>SMTP Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="••••••••" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
