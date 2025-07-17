
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import { FileText, Download, Calendar, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Relatorios = () => {
  const reports = [
    { title: 'Relatório Mensal', description: 'Horas trabalhadas no mês atual', icon: Calendar, color: 'bg-blue-500' },
    { title: 'Relatório Semanal', description: 'Resumo da semana de trabalho', icon: BarChart3, color: 'bg-green-500' },
    { title: 'Histórico de Pontos', description: 'Todos os registros de ponto', icon: FileText, color: 'bg-purple-500' },
    { title: 'Relatório de Produtividade', description: 'Análise de produtividade', icon: BarChart3, color: 'bg-orange-500' },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-4 lg:p-8 overflow-auto">
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Page Header */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2 flex items-center justify-center lg:justify-start">
                  <FileText className="w-8 h-8 text-bishop-red-600 mr-3" />
                  Relatórios
                </h1>
                <p className="text-lg text-gray-600">
                  Gere e visualize relatórios detalhados do seu trabalho
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="text-center shadow-lg">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-bishop-red-700">168h</div>
                    <p className="text-sm text-gray-600">Horas este mês</p>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-green-700">42h</div>
                    <p className="text-sm text-gray-600">Horas esta semana</p>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-blue-700">95%</div>
                    <p className="text-sm text-gray-600">Taxa de presença</p>
                  </CardContent>
                </Card>
                <Card className="text-center shadow-lg">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold text-purple-700">3</div>
                    <p className="text-sm text-gray-600">Horas extras</p>
                  </CardContent>
                </Card>
              </div>

              {/* Reports Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reports.map((report, index) => (
                  <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center text-gray-900">
                        <div className={`w-10 h-10 ${report.color} rounded-lg flex items-center justify-center mr-3`}>
                          <report.icon className="w-5 h-5 text-white" />
                        </div>
                        {report.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{report.description}</p>
                      <div className="flex space-x-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-bishop-red-200 text-bishop-red-700 hover:bg-bishop-red-50"
                        >
                          Visualizar
                        </Button>
                        <Button 
                          size="sm"
                          className="bg-bishop-red-600 hover:bg-bishop-red-700 text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Custom Report */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Relatório Personalizado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Crie um relatório personalizado com filtros específicos
                  </p>
                  <Button className="bg-bishop-red-600 hover:bg-bishop-red-700 text-white">
                    Criar Relatório
                  </Button>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Relatorios;
