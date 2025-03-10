
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash in the URL
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        // Wait a bit to ensure the DOM is fully loaded
        setTimeout(() => {
          const headerOffset = 100; // Offset for fixed header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    } else if (location.pathname === '/' && location.state?.scrollToTop) {
      // Scroll to top when navigating to home without hash
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [location]);
}
