import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FileText, 
  ShieldCheck, 
  Calculator, 
  CheckSquare, 
  Menu,
  X,
  Search,
  LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { logout } = useAuth();

  const navItems = [
    { name: "Home", path: "/", icon: LayoutDashboard },
    { name: "Examples", path: "/examples", icon: FileText },
    { name: "Financial", path: "/examples?category=Financial", icon: Calculator },
    { name: "Project Mgmt", path: "/project-management", icon: CheckSquare },
    { name: "Estimating", path: "/examples?category=Estimating", icon: FileText },
    { name: "Insurance", path: "/examples?category=Insurance", icon: ShieldCheck },
    { name: "Closeout", path: "/examples?category=Closeout", icon: CheckSquare },
  ];

  return (
    <div className="min-h-screen bg-background flex font-sans text-foreground">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-50 h-screen w-64 bg-sidebar text-sidebar-foreground transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static border-r border-sidebar-border",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo Area */}
          <div className="p-6 border-b border-sidebar-border flex flex-col items-center">
            <img src="/logo-white.png" alt="Moon River Academy" className="h-16 w-auto mb-3" />
            <h1 className="font-heading font-bold text-lg tracking-tight text-sidebar-foreground text-center leading-tight">
              MOON RIVER
              <span className="block text-xs font-normal text-sidebar-foreground/70 font-mono mt-1">ACADEMY</span>
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = location === item.path || (item.path !== "/" && location.startsWith(item.path));
              return (
                <Link key={item.path} href={item.path}>
                  <a
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                      isActive 
                        ? "bg-sidebar-accent text-sidebar-accent-foreground" 
                        : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className={cn("h-4 w-4", isActive ? "text-sidebar-primary" : "text-sidebar-foreground/60")} />
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border bg-sidebar/50 space-y-4">
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-3 text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground px-3"
              onClick={logout}
            >
              <LogOut className="h-4 w-4" />
              Log Out
            </Button>
            <div className="text-xs text-sidebar-foreground/50 font-mono px-3">
              v1.0.0 • Internal Use Only
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header (Mobile Only) */}
        <header className="lg:hidden h-16 border-b border-border bg-card flex items-center justify-between px-4 sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <img src="/logo-navy.png" alt="Logo" className="h-8 w-auto" />
            <div className="font-heading font-bold text-lg text-primary">MOON RIVER</div>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
