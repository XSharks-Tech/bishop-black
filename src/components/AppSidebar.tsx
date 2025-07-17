
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Clock,
  User,
  Users,
  FileText,
  MessageSquare,
  Bot,
  Home
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

const navigationItems = [
  {
    title: 'Dashboard',
    url: '/',
    icon: Home,
  },
  {
    title: 'Controle de Ponto',
    url: '/ponto',
    icon: Clock,
  },
  {
    title: 'Meu Perfil',
    url: '/perfil',
    icon: User,
  },
  {
    title: 'Minha Equipe',
    url: '/equipe',
    icon: Users,
  },
  {
    title: 'Relatórios',
    url: '/relatorios',
    icon: FileText,
  },
  {
    title: 'Solicitações',
    url: '/solicitacoes',
    icon: MessageSquare,
  },
  {
    title: 'Assistente Virtual',
    url: '/assistente',
    icon: Bot,
  },
];

export function AppSidebar() {
  const { state, setOpen } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === 'collapsed';

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const getNavClasses = (path: string) => {
    const baseClasses = "w-full justify-start transition-all duration-300 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground group relative";
    const activeClasses = "bg-bishop-red-500 text-white hover:bg-bishop-red-600 shadow-lg";
    const inactiveClasses = "text-sidebar-foreground";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  const handleItemClick = () => {
    // Sempre expandir quando um item for clicado
    setOpen(true);
  };

  return (
    <Sidebar 
      className="border-r border-sidebar-border bg-sidebar shadow-xl" 
      collapsible="icon"
      defaultOpen={false}
    >
      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 px-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="h-12 relative overflow-hidden"
                    tooltip={isCollapsed ? item.title : undefined}
                  >
                    <NavLink 
                      to={item.url} 
                      className={getNavClasses(item.url)}
                      onClick={handleItemClick}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0 z-10" />
                      {!isCollapsed && (
                        <span className="font-medium text-sm ml-3 z-10 transition-opacity duration-300">
                          {item.title}
                        </span>
                      )}
                      {isActive(item.url) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-bishop-red-500 to-bishop-red-600 opacity-90" />
                      )}
                      {isActive(item.url) && !isCollapsed && (
                        <div className="absolute right-2 w-2 h-2 bg-white rounded-full z-10" />
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
