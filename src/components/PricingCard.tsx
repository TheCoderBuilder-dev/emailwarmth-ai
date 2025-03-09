
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IntersectionObserver } from "./IntersectionObserver";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  ctaText: string;
  popular?: boolean;
  delay?: string;
}

export function PricingCard({ 
  title, 
  price, 
  description, 
  features, 
  ctaText, 
  popular = false,
  delay = "animate-delay-100"
}: PricingCardProps) {
  return (
    <IntersectionObserver className="flex-1 min-w-[300px]" animateClass={`animate-fade-up ${delay}`}>
      <div className={`relative h-full rounded-xl border ${popular ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'} overflow-hidden flex flex-col`}>
        {popular && (
          <div className="absolute top-0 right-0 bg-primary py-1 px-3 rounded-bl-lg text-xs font-medium text-primary-foreground">
            Most Popular
          </div>
        )}
        
        <div className="p-6 md:p-8 flex-grow">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="mb-3">
            <span className="text-3xl font-bold">{price}</span>
            {price !== "Free" && <span className="text-muted-foreground ml-1">/month</span>}
          </div>
          <p className="text-muted-foreground mb-6">{description}</p>
          
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className={`mr-2 mt-1 rounded-full p-0.5 ${feature.included ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  <CheckIcon size={14} />
                </span>
                <span className={feature.included ? '' : 'text-muted-foreground'}>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="px-6 pb-8 md:px-8">
          <Button 
            variant={popular ? "default" : "outline"} 
            className="w-full"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </IntersectionObserver>
  );
}
