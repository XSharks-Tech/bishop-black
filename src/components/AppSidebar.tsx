
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
  SidebarGroupLabel,
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
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(path);
  };

  const getNavClasses = (path: string) => {
    const baseClasses = "w-full justify-start transition-all duration-200 hover:bg-gray-100";
    const activeClasses = "bg-bishop-red-50 text-bishop-red-700 border-r-3 border-bishop-red-600 font-medium";
    const inactiveClasses = "text-gray-700 hover:text-gray-900";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <Sidebar className={`${collapsed ? 'w-16' : 'w-64'} border-r border-gray-200 bg-white`} collapsible>
      <SidebarContent className="py-6">
        <SidebarGroup>
          <SidebarGroupLabel className={`text-xs uppercase tracking-wider text-gray-500 font-semibold ${collapsed ? 'hidden' : 'px-6 mb-2'}`}>
            Navegação Principal
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-3">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-11">
                    <NavLink 
                      to={item.url} 
                      className={getNavClasses(item.url)}
                    >
                      <item.icon className={`h-5 w-5 ${collapsed ? 'mx-auto' : 'mr-3'} flex-shrink-0`} />
                      {!collapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                      {isActive(item.url) && !collapsed && (
                        <div className="ml-auto w-2 h-2 bg-bishop-red-600 rounded-full"></div>
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
