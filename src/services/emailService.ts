
import { supabase } from "@/integrations/supabase/client";

export interface SendEmailParams {
  to: string;
  subject: string;
  content: string;
  userId: string;
}

export const sendEmail = async (params: SendEmailParams) => {
  try {
    const { data, error } = await supabase.functions.invoke('send-email', {
      body: params,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error(error.message || "Failed to send email");
    }

    return data;
  } catch (error: any) {
    console.error("Error in sendEmail service:", error);
    throw new Error(error.message || "An unknown error occurred");
  }
};

export const getEmailStats = async (userId: string) => {
  try {
    // In a real implementation, this would fetch email statistics from the database
    // For now, we'll return mock data
    return {
      sent: 152,
      delivered: 149,
      opened: 87,
      clicked: 34,
      replied: 12,
      bounced: 3,
      openRate: 58.4,
      clickRate: 22.8,
      replyRate: 8.1,
    };
  } catch (error: any) {
    console.error("Error in getEmailStats service:", error);
    throw new Error(error.message || "Failed to fetch email statistics");
  }
};
