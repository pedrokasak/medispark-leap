
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Calendar,
  Users,
  FileText,
  MessageSquare,
  Settings,
  Bell,
  LogOut,
  Menu,
} from "lucide-react";

export function AppSidebar() {
  const [open, setOpen] = useState(true);
  
  const menuItems = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },
    {
      title: "Agendamentos",
      url: "/appointments",
      icon: Calendar,
    },
    {
      title: "Pacientes",
      url: "/patients",
      icon: Users,
    },
    {
      title: "Prontuários",
      url: "/records",
      icon: FileText,
    },
    {
      title: "Mensagens",
      url: "/messages",
      icon: MessageSquare,
      notification: 5
    },
  ];

  const settingsItems = [
    {
      title: "Configurações",
      url: "/settings",
      icon: Settings,
    },
    {
      title: "Notificações",
      url: "/notifications",
      icon: Bell,
    },
  ];

  return (
    <Sidebar
      open={open}
      onOpenChange={setOpen}
      className="border-r bg-white h-screen fixed top-0 left-0"
    >
      <SidebarHeader className="py-4 px-2 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 px-2">
          <div className="rounded bg-gradient-to-br from-medical to-medical-accent w-8 h-8 flex items-center justify-center text-white font-bold">
            M
          </div>
          {open && (
            <span className="font-bold text-xl text-gray-900">MediSpark</span>
          )}
        </Link>
        <Button variant="ghost" size="icon" className="md:hidden">
          <SidebarTrigger>
            <Menu className="h-5 w-5" />
          </SidebarTrigger>
        </Button>
      </SidebarHeader>
      
      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <item.icon className="h-5 w-5 mr-3" />
                        <span>{item.title}</span>
                      </div>
                      {item.notification && (
                        <div className="h-5 w-5 rounded-full bg-medical-accent flex items-center justify-center text-xs text-white">
                          {item.notification}
                        </div>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup className="mt-6">
          <SidebarGroupLabel>Sistema</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon className="h-5 w-5 mr-3" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-medical">DR</AvatarFallback>
          </Avatar>
          
          {open && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Dr. Rafael Silva
              </p>
              <p className="text-xs text-gray-500 truncate">
                Cardiologista
              </p>
            </div>
          )}
          
          <Button variant="ghost" size="icon" className="text-gray-500" asChild>
            <Link to="/logout">
              <LogOut className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
