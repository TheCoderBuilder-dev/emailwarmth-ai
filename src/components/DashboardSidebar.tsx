
import { Link, useLocation } from "react-router-dom";
import { 
  AreaChart, 
  BarChart, 
  Clock, 
  Home,
  Mail, 
  MessageSquare, 
  Settings, 
  Users, 
  Zap,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps {
  collapsed: boolean;
  toggleSidebar: () => void;
}

export function DashboardSidebar({ collapsed, toggleSidebar }: SidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const navItems = [
    { 
      name: "Dashboard", 
      icon: Home, 
      path: "/dashboard" 
    },
    { 
      name: "Email Warm-up", 
      icon: Mail, 
      path: "/dashboard/warmup" 
    },
    { 
      name: "Campaigns", 
      icon: Zap, 
      path: "/dashboard/campaigns" 
    },
    { 
      name: "Analytics", 
      icon: AreaChart, 
      path: "/dashboard/analytics" 
    },
    { 
      name: "Contacts", 
      icon: Users, 
      path: "/dashboard/contacts" 
    },
    { 
      name: "Templates", 
      icon: MessageSquare, 
      path: "/dashboard/templates" 
    },
    { 
      name: "Schedule", 
      icon: Clock, 
      path: "/dashboard/schedule" 
    },
    { 
      name: "Email Performance", 
      icon: Activity, 
      path: "/dashboard/email-performance" 
    },
    { 
      name: "Settings", 
      icon: Settings, 
      path: "/dashboard/settings" 
    },
  ];

  return (
    <div 
      className={cn(
        "h-screen fixed top-0 left-0 z-30 transition-all duration-300 ease-in-out border-r border-border py-4 bg-background/90 backdrop-blur-sm",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="px-4 py-2 flex items-center justify-between mb-6">
          {!collapsed && (
            <Link to="/dashboard" className="flex items-center space-x-2">
              <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </span>
              <span className="font-display font-bold text-xl">EmailWarmth</span>
            </Link>
          )}
          
          {collapsed && (
            <Link to="/dashboard" className="mx-auto">
              <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </span>
            </Link>
          )}
          
          {!collapsed && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleSidebar}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <BarChart size={18} />
            </Button>
          )}
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <nav className="px-2 space-y-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              
              return collapsed ? (
                <TooltipProvider key={item.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link 
                        to={item.path} 
                        className={cn(
                          "flex items-center justify-center h-10 w-10 rounded-md mx-auto my-2", 
                          isActive 
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        )}
                      >
                        <item.icon size={18} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-md",
                    isActive 
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  )}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="mt-auto px-4">
          {collapsed ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="w-10 h-10 rounded-md mx-auto"
            >
              <BarChart size={18} />
            </Button>
          ) : (
            <div className="glass-card rounded-xl p-3 text-center text-sm">
              <p className="text-muted-foreground mb-2">Free Plan</p>
              <Button size="sm" variant="default" className="w-full text-xs">
                Upgrade
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
