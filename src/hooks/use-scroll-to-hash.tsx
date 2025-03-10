
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
          window.scrollTo({
            top: element.offsetTop - 100, // Offset for the fixed header
            behavior: 'smooth'
          });
        }, 100);
      }
    } else if (location.pathname === '/') {
      // Scroll to top when navigating to home without hash
      window.scrollTo(0, 0);
    }
  }, [location]);
}
