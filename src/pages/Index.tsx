
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import PunchClockCard from '@/components/PunchClockCard';
import TimeRecordsCard from '@/components/TimeRecordsCard';
import DashboardStats from '@/components/DashboardStats';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-4 lg:p-8 overflow-auto">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Welcome Section */}
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2">
                  Bem-vindo de volta!
                </h2>
                <p className="text-lg text-gray-600">
                  Gerencie seu controle de ponto de forma simples e eficiente
                </p>
              </div>

              {/* Dashboard Stats */}
              <DashboardStats />

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

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-bishop-red-600">
                <h3 className="text-lg font-display font-semibold text-gray-900 mb-4">
                  Ações Rápidas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left">
                    <h4 className="font-medium text-gray-900 mb-1">Solicitar Abono</h4>
                    <p className="text-sm text-gray-600">Justificar ausências ou atrasos</p>
                  </button>
                  <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left">
                    <h4 className="font-medium text-gray-900 mb-1">Relatório Mensal</h4>
                    <p className="text-sm text-gray-600">Visualizar horas trabalhadas</p>
                  </button>
                  <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-left">
                    <h4 className="font-medium text-gray-900 mb-1">Configurações</h4>
                    <p className="text-sm text-gray-600">Ajustar preferências</p>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
