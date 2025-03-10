
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { IntersectionObserver } from "@/components/IntersectionObserver";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { useScrollToHash } from "@/hooks/use-scroll-to-hash";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight,
  LineChart, 
  Mail, 
  MessageSquare, 
  RotateCw, 
  Shield, 
  Sparkles, 
  Users, 
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  // Use the scroll to hash hook
  useScrollToHash();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar transparent />
      
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_60%)]" />
        
        <div style={{ transform: `translateY(${scrollY * 0.2}px)` }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/20 -z-10" />
        <div style={{ transform: `translateY(${scrollY * 0.1}px)` }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/20 -z-10" />
        <div style={{ transform: `translateY(${scrollY * 0.05}px)` }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary/20 -z-10" />
        
        <div className="container mx-auto px-6 md:px-12 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-fade-in">
              Introducing EmailWarmth AI
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in animate-delay-100">
              Boost Email Deliverability with AI-Powered Warm-Up
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 animate-fade-in animate-delay-200">
              Warm up your email accounts, optimize outreach, and increase conversions 
              with our smart AI platform—all without paid APIs or hidden costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
              <Button asChild size="lg" className="text-base">
                <Link to="/register">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="#features" onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  Learn More
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 px-6 md:px-12 scroll-mt-24">
        <div className="container mx-auto">
          <IntersectionObserver className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All the Tools You Need</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to warm up your emails and optimize your outreach campaigns
            </p>
          </IntersectionObserver>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard 
              icon={<Mail size={24} />}
              title="Smart Email Warm-Up"
              description="Gradually increase your sending volume with realistic email conversations that improve your sender reputation."
            />
            
            <FeatureCard 
              icon={<Sparkles size={24} />}
              title="AI Content Generation"
              description="Create personalized, high-converting email content using our free AI models trained on successful campaigns."
              delay="animate-delay-200"
            />
            
            <FeatureCard 
              icon={<LineChart size={24} />}
              title="Advanced Analytics"
              description="Track open rates, reply rates, and deliverability metrics to optimize your campaigns in real-time."
              delay="animate-delay-300"
            />
            
            <FeatureCard 
              icon={<Shield size={24} />}
              title="Spam Score Checker"
              description="Analyze your email content for spam triggers and get suggestions to improve deliverability."
              delay="animate-delay-100"
            />
            
            <FeatureCard 
              icon={<RotateCw size={24} />}
              title="Automatic Follow-Ups"
              description="Set up smart follow-up sequences that adapt based on recipient engagement and behavior."
              delay="animate-delay-200"
            />
            
            <FeatureCard 
              icon={<Users size={24} />}
              title="Contact Management"
              description="Organize your leads and contacts with easy CSV importing and custom segmentation tools."
              delay="animate-delay-300"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-primary/5">
        <div className="container mx-auto">
          <IntersectionObserver className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              Get started with EmailWarmth in just a few simple steps
            </p>
          </IntersectionObserver>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <IntersectionObserver animateClass="animate-fade-up">
              <Card className="bg-background border-border overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Connect Your Email</h3>
                  <p className="text-muted-foreground">
                    Link your email account using SMTP credentials from Gmail, Outlook, or any other provider.
                  </p>
                </div>
              </Card>
            </IntersectionObserver>
            
            <IntersectionObserver animateClass="animate-fade-up animate-delay-200">
              <Card className="bg-background border-border overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Configure Warm-Up</h3>
                  <p className="text-muted-foreground">
                    Set your warm-up preferences, including volume, pace, and desired reputation metrics.
                  </p>
                </div>
              </Card>
            </IntersectionObserver>
            
            <IntersectionObserver animateClass="animate-fade-up animate-delay-300">
              <Card className="bg-background border-border overflow-hidden">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Launch Campaigns</h3>
                  <p className="text-muted-foreground">
                    Start your email campaigns with high deliverability and track performance in real-time.
                  </p>
                </div>
              </Card>
            </IntersectionObserver>
          </div>
          
          <div className="text-center mt-12">
            <IntersectionObserver animateClass="animate-fade-up animate-delay-300">
              <Button asChild size="lg">
                <Link to="/register">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </IntersectionObserver>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 scroll-mt-24">
        <div className="container mx-auto">
          <IntersectionObserver className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that's right for you
            </p>
          </IntersectionObserver>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Free"
              price="Free"
              description="Perfect for trying out EmailWarmth"
              features={[
                { text: "50 warm-up emails per day", included: true },
                { text: "50 outreach emails per month", included: true },
                { text: "Basic AI email generation", included: true },
                { text: "Email deliverability reports", included: true },
                { text: "Single email account", included: true },
                { text: "Advanced campaign analytics", included: false },
                { text: "Priority support", included: false },
              ]}
              ctaText="Sign Up Free"
            />
            
            <PricingCard
              title="Pro"
              price="$39"
              description="For professionals and small businesses"
              popular
              delay="animate-delay-200"
              features={[
                { text: "Unlimited warm-up emails", included: true },
                { text: "1,000 outreach emails per month", included: true },
                { text: "Advanced AI personalization", included: true },
                { text: "Detailed deliverability reports", included: true },
                { text: "Up to 3 email accounts", included: true },
                { text: "Advanced campaign analytics", included: true },
                { text: "Priority support", included: true },
              ]}
              ctaText="Get Started"
            />
            
            <PricingCard
              title="Agency"
              price="$99"
              description="For teams and growing agencies"
              delay="animate-delay-300"
              features={[
                { text: "Unlimited warm-up emails", included: true },
                { text: "5,000 outreach emails per month", included: true },
                { text: "Advanced AI personalization", included: true },
                { text: "Detailed deliverability reports", included: true },
                { text: "Up to 10 email accounts", included: true },
                { text: "Advanced campaign analytics", included: true },
                { text: "Priority support + onboarding", included: true },
              ]}
              ctaText="Contact Sales"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 px-6 md:px-12 bg-primary/5 scroll-mt-24">
        <div className="container mx-auto">
          <IntersectionObserver className="max-w-xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about EmailWarmth
            </p>
          </IntersectionObserver>
          
          <div className="max-w-3xl mx-auto">
            <IntersectionObserver>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is email warm-up?</AccordionTrigger>
                  <AccordionContent>
                    Email warm-up is the process of gradually increasing your email sending volume to establish a positive sender reputation with email service providers. This helps improve deliverability and prevents your emails from landing in spam folders.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How long does email warm-up take?</AccordionTrigger>
                  <AccordionContent>
                    The email warm-up process typically takes 2-4 weeks, depending on your starting point and desired sending volume. Our AI algorithms adjust the pace based on your specific domain and email service provider requirements.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do I need technical knowledge to use EmailWarmth?</AccordionTrigger>
                  <AccordionContent>
                    No technical knowledge is required. Our intuitive interface guides you through the process of connecting your email accounts and setting up campaigns. You'll only need your SMTP credentials, which we explain how to obtain.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Does EmailWarmth work with my email provider?</AccordionTrigger>
                  <AccordionContent>
                    EmailWarmth works with all major email providers including Gmail, Outlook, Zoho, Yahoo, and custom domain emails. If your provider supports SMTP connections, it will work with our platform.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>How accurate is the AI email generation?</AccordionTrigger>
                  <AccordionContent>
                    Our AI email generation uses open-source models fine-tuned on high-performing email campaigns. While it produces high-quality, personalized content, we recommend reviewing and adjusting the generated emails for your specific needs and brand voice.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Can I upgrade or downgrade my plan?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will take effect at the start of the next billing cycle. When downgrading, you'll maintain access to your current plan until the end of the current billing period.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </IntersectionObserver>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="container mx-auto">
          <IntersectionObserver className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Improve Your Email Deliverability?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Start warming up your email accounts and optimizing your outreach campaigns with EmailWarmth today.
              </p>
              <Button asChild size="lg" className="text-base">
                <Link to="/register">Get Started Free</Link>
              </Button>
            </div>
          </IntersectionObserver>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 md:py-16 px-6 md:px-12 border-t border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">E</span>
                </span>
                <span className="font-display font-bold text-xl">EmailWarmth</span>
              </Link>
              <p className="text-muted-foreground text-sm">
                AI-powered email warm-up and outreach optimization platform.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link></li>
                <li><Link to="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link></li>
                <li><Link to="/#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Guides</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} EmailWarmth. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
