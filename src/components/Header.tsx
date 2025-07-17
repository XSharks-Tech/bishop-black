
import React from 'react';
import { Clock, User, Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Header = () => {
  const currentTime = new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4 shadow-lg backdrop-blur-sm bg-white/95">
      <div className="flex items-center justify-between">
        {/* Logo and Sidebar Trigger */}
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="lg:hidden" />
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-bishop-red-600 to-bishop-red-700 rounded-xl flex items-center justify-center shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-display font-bold text-gray-900">
                Bishop <span className="text-gradient-red">Black</span>
              </h1>
              <p className="text-xs text-gray-500 hidden lg:block">Controle de Ponto Premium</p>
            </div>
          </div>
        </div>

        {/* Status e Horário */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-gray-900 font-mono tracking-tight">
              {currentTime}
            </div>
            <div className="text-sm text-gray-600 capitalize font-medium">
              {currentDate}
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Badge 
              variant="outline" 
              className="bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200 shadow-sm px-3 py-1"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Online
            </Badge>
          </div>
        </div>

        {/* Ações do usuário */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative hover:bg-gray-100 rounded-xl transition-all duration-200"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-bishop-red-500 rounded-full border-2 border-white"></span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="hover:bg-gray-100 rounded-xl transition-all duration-200"
          >
            <User className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>

      {/* Mobile time display */}
      <div className="md:hidden mt-4 text-center bg-gray-50 rounded-lg p-3">
        <div className="text-xl font-bold text-gray-900 font-mono">
          {currentTime}
        </div>
        <div className="text-sm text-gray-600 flex items-center justify-center mt-1">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Online • {currentDate}
        </div>
      </div>
    </header>
  );
};

export default Header;
