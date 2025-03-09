
import { ReactNode } from "react";
import { IntersectionObserver } from "./IntersectionObserver";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: string;
}

export function FeatureCard({ icon, title, description, delay = "animate-delay-100" }: FeatureCardProps) {
  return (
    <IntersectionObserver className="flex-1 min-w-[280px]" animateClass={`animate-fade-up ${delay}`}>
      <div className="glass-card h-full rounded-xl p-6 flex flex-col">
        <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </IntersectionObserver>
  );
}
