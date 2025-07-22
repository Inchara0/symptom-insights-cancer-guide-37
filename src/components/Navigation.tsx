import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Activity, 
  BookOpen, 
  MessageCircle, 
  Users, 
  Shield, 
  Phone,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { path: "/", label: "Home", icon: Heart },
    { path: "/assessment", label: "Risk Assessment", icon: Activity },
    { path: "/cancer-info", label: "Cancer Info", icon: BookOpen },
    { path: "/womens-health", label: "Women's Health", icon: Users },
    { path: "/prevention", label: "Prevention", icon: Shield },
    { path: "/chat", label: "AI Assistant", icon: MessageCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="cancer-gradient p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-gradient">
                CancerCare
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">Awareness & Support</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={active ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center space-x-2 ${
                      active ? "cancer-gradient text-white" : "hover:bg-muted/60"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Emergency Contact & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="hidden sm:flex text-destructive border-destructive/30">
              <Phone className="h-3 w-3 mr-1" />
              Emergency: 112 | 911
            </Badge>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-border/50 py-4"
            >
              <div className="space-y-2">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link 
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button
                          variant={active ? "default" : "ghost"}
                          size="sm"
                          className={`w-full justify-start space-x-3 ${
                            active ? "cancer-gradient text-white" : "hover:bg-muted/60"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{item.label}</span>
                        </Button>
                      </Link>
                    </motion.div>
                  );
                })}
                
                <div className="pt-3 border-t border-border/50">
                  <Badge variant="outline" className="w-full justify-center text-destructive border-destructive/30">
                    <Phone className="h-3 w-3 mr-1" />
                    Emergency: 112 | 911
                  </Badge>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navigation;