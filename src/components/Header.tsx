
import React from 'react';
import { Clock, User, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
    <header className="bg-white border-b border-gray-200 px-4 lg:px-8 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-bishop-red-600 to-bishop-red-700 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl lg:text-2xl font-display font-bold text-gray-900">
              Bishop <span className="text-gradient-red">Black</span>
            </h1>
          </div>
        </div>

        {/* Status e Horário */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 font-mono">
              {currentTime}
            </div>
            <div className="text-sm text-gray-600 capitalize">
              {currentDate}
            </div>
          </div>
          
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Online
          </Badge>
        </div>

        {/* Ações do usuário */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-bishop-red-500 rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Mobile time display */}
      <div className="md:hidden mt-3 text-center">
        <div className="text-xl font-bold text-gray-900 font-mono">
          {currentTime}
        </div>
        <div className="text-sm text-gray-600">
          {currentDate}
        </div>
      </div>
    </header>
  );
};

export default Header;
