
import { Book, FileText, LayoutDashboard, Settings, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavItem {
  name: string;
  icon: React.ElementType;
  isActive: boolean;
  href: string;
}

export const NavigationBar = () => {
  const navItems: NavItem[] = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      isActive: false,
      href: "#"
    },
    {
      name: "DPR",
      icon: FileText,
      isActive: true,
      href: "#"
    },
    {
      name: "Team",
      icon: Users,
      isActive: false,
      href: "#"
    },
    {
      name: "Documentation",
      icon: Book,
      isActive: false,
      href: "#"
    },
    {
      name: "Settings",
      icon: Settings,
      isActive: false,
      href: "#"
    }
  ];

  return (
    <div className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-10 animate-fade-in">
      <div className="container flex h-16 items-center">
        <div className="font-bold text-xl mr-10">
          DPR Portal
        </div>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className={cn(
                "justify-start gap-2",
                item.isActive
                  ? "bg-secondary text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
              asChild
            >
              <a href={item.href}>
                <item.icon className="h-4 w-4" />
                {item.name}
              </a>
            </Button>
          ))}
        </nav>
      </div>
    </div>
  );
};
