
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import PunchClockCard from '@/components/PunchClockCard';
import TimeRecordsCard from '@/components/TimeRecordsCard';
import { Clock, MapPin, Wifi } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Ponto = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-4 lg:p-8 overflow-auto">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Page Header */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2 flex items-center justify-center lg:justify-start">
                  <Clock className="w-8 h-8 text-bishop-red-600 mr-3" />
                  Controle de Ponto
                </h1>
                <p className="text-lg text-gray-600">
                  Registre seu ponto e acompanhe seus horários de trabalho
                </p>
              </div>

              {/* Status Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-green-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                      <Wifi className="w-4 h-4 mr-2" />
                      Status da Conexão
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-lg font-semibold text-green-700">Online</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      Localização
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-lg font-semibold text-blue-700">Verificada</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-bishop-red-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600">
                      Último Registro
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="text-lg font-semibold text-bishop-red-700">08:30</span>
                    <p className="text-sm text-gray-500">Entrada</p>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Punch Clock - Maior destaque */}
                <div className="lg:col-span-1">
                  <PunchClockCard />
                </div>
                
                {/* Time Records */}
                <div className="lg:col-span-2">
                  <TimeRecordsCard />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Ponto;
