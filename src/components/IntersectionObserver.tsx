
import { useEffect, useRef, ReactNode } from "react";

interface IntersectionObserverProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  animateOnce?: boolean;
  animateClass?: string;
  initialClass?: string;
}

export function IntersectionObserver({
  children,
  className,
  threshold = 0.1,
  rootMargin = "0px",
  animateOnce = true,
  animateClass = "animate-fade-up",
  initialClass = "opacity-0",
}: IntersectionObserverProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(initialClass);
          entry.target.classList.add(animateClass);
          
          if (animateOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!animateOnce) {
          entry.target.classList.remove(animateClass);
          entry.target.classList.add(initialClass);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, animateOnce, animateClass, initialClass]);

  return (
    <div ref={ref} className={`${initialClass} ${className || ""}`}>
      {children}
    </div>
  );
}
