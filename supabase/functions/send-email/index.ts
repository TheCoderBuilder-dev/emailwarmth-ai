
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { corsHeaders } from "../_shared/cors.ts";

interface EmailRequest {
  to: string;
  subject: string;
  content: string;
  userId: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { to, subject, content, userId } = await req.json() as EmailRequest;

    // Validate request
    if (!to || !subject || !content || !userId) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Here you would typically integrate with an email service like Resend or SendGrid
    // For now, we'll just log the attempt and return a mock success response
    console.log(`Email sent to: ${to}, Subject: ${subject}, Content length: ${content.length}`);

    // In a real implementation, you would store the email in the database
    // For now, we'll just return a successful response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Email queued successfully",
        emailId: crypto.randomUUID()
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An unknown error occurred" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
