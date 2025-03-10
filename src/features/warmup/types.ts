
import { z } from "zod";

export const warmupFormSchema = z.object({
  startEmails: z.number().min(5).max(50),
  maxEmails: z.number().min(10).max(200),
  warmupDays: z.number().min(7).max(60),
  emailAddress: z.string().email(),
  smtpHost: z.string().min(1),
  smtpPort: z.string().min(1),
  smtpUsername: z.string().min(1),
  smtpPassword: z.string().min(1),
});

export type WarmupFormValues = z.infer<typeof warmupFormSchema>;
