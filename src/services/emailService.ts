
import { supabase } from "@/integrations/supabase/client";

interface SendEmailParams {
  to: string;
  subject: string;
  content: string;
}

export const emailService = {
  async sendEmail({ to, subject, content }: SendEmailParams) {
    try {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      
      if (userError) {
        throw new Error("Authentication required");
      }
      
      const userId = userData.user.id;
      
      // Call the Supabase Edge Function
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabase.auth.getSession().then(({ data }) => data.session?.access_token)}`
        },
        body: JSON.stringify({
          to,
          subject,
          content,
          userId
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }
      
      const result = await response.json();
      
      // Log the successful email to the emails table
      const { error: insertError } = await supabase
        .from('emails')
        .insert({
          user_id: userId,
          recipient: to,
          subject: subject,
          content: content,
          status: 'pending'
        });
      
      if (insertError) {
        console.error("Failed to log email:", insertError);
      }
      
      return result;
    } catch (error) {
      console.error("Email service error:", error);
      throw error;
    }
  },
  
  async getEmails() {
    try {
      const { data, error } = await supabase
        .from('emails')
        .select('*')
        .order('sent_at', { ascending: false });
        
      if (error) {
        throw error;
      }
      
      return data;
    } catch (error) {
      console.error("Failed to fetch emails:", error);
      throw error;
    }
  }
};
