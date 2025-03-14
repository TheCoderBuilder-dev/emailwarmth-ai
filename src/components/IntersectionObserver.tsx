
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
          
          // Split animateClass by spaces and add each class separately
          const classes = animateClass.split(" ");
          classes.forEach(cls => {
            if (cls) entry.target.classList.add(cls);
          });
          
          if (animateOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!animateOnce) {
          // Split animateClass by spaces and remove each class separately
          const classes = animateClass.split(" ");
          classes.forEach(cls => {
            if (cls) entry.target.classList.remove(cls);
          });
          
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
