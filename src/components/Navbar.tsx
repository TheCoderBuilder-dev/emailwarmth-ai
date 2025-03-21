
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
  transparent?: boolean;
}

export function Navbar({ transparent = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation when on homepage
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        (scrolled || !transparent) ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">E</span>
          </span>
          <span className="font-display font-bold text-xl">EmailWarmth</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" className="font-medium">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 pt-6 px-6 md:hidden animate-fade-in">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-4">
              <NavLinks mobile onClick={() => setIsOpen(false)} />
            </div>
            <div className="flex flex-col space-y-3 pt-4">
              <Button asChild variant="outline" className="w-full">
                <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/register" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

function NavLinks({ mobile = false, onClick }: NavLinksProps) {
  const location = useLocation();
  const links = [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If we're already on the homepage
    if (location.pathname === '/') {
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      // Update URL without page reload
      window.history.pushState(null, '', href);
    } else {
      // Navigate to homepage with hash
      window.location.href = href;
    }
    
    // Call the original onClick if provided (for mobile menu closing)
    if (onClick) onClick();
  };

  return (
    <>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className={cn(
            "font-medium text-foreground/80 hover:text-foreground transition-colors",
            mobile && "text-lg py-2"
          )}
        >
          {link.label}
        </a>
      ))}
    </>
  );
}
