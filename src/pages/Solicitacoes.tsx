
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import { MessageSquare, Plus, Clock, Check, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Solicitacoes = () => {
  const requests = [
    { id: 1, type: 'Abono', reason: 'Consulta médica', date: '15/12/2024', status: 'pending' },
    { id: 2, type: 'Horas Extras', reason: 'Projeto urgente', date: '14/12/2024', status: 'approved' },
    { id: 3, type: 'Ajuste de Ponto', reason: 'Esqueci de bater', date: '13/12/2024', status: 'rejected' },
    { id: 4, type: 'Férias', reason: 'Viagem em família', date: '12/12/2024', status: 'pending' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Aprovado</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">Rejeitado</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pendente</Badge>;
      default:
        return <Badge variant="secondary">Desconhecido</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <Check className="w-4 h-4 text-green-600" />;
      case 'rejected':
        return <X className="w-4 h-4 text-red-600" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-600" />;
      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-4 lg:p-8 overflow-auto">
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Page Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2 flex items-center">
                    <MessageSquare className="w-8 h-8 text-bishop-red-600 mr-3" />
                    Solicitações
                  </h1>
                  <p className="text-lg text-gray-600">
                    Gerencie suas solicitações de abono, férias e ajustes
                  </p>
                </div>
                <Button className="bg-bishop-red-600 hover:bg-bishop-red-700 text-white mt-4 lg:mt-0">
                  <Plus className="w-4 h-4 mr-2" />
                  Nova Solicitação
                </Button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-yellow-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Pendentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-yellow-700">2</div>
                    <p className="text-sm text-gray-500">aguardando aprovação</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                      <Check className="w-4 h-4 mr-2" />
                      Aprovadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-700">1</div>
                    <p className="text-sm text-gray-500">este mês</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                      <X className="w-4 h-4 mr-2" />
                      Rejeitadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-700">1</div>
                    <p className="text-sm text-gray-500">este mês</p>
                  </CardContent>
                </Card>
              </div>

              {/* Requests List */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Histórico de Solicitações
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {requests.map((request) => (
                      <div key={request.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex items-center space-x-4">
                          {getStatusIcon(request.status)}
                          <div>
                            <h3 className="font-semibold text-gray-900">{request.type}</h3>
                            <p className="text-sm text-gray-600">{request.reason}</p>
                            <p className="text-xs text-gray-500">Solicitado em {request.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getStatusBadge(request.status)}
                          <Button variant="outline" size="sm">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-bishop-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-bishop-red-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Abono</h3>
                    <p className="text-sm text-gray-600">Justificar ausências</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Plus className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horas Extras</h3>
                    <p className="text-sm text-gray-600">Solicitar horas extras</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ajuste de Ponto</h3>
                    <p className="text-sm text-gray-600">Corrigir registros</p>
                  </CardContent>
                </Card>

                <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <MessageSquare className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Férias</h3>
                    <p className="text-sm text-gray-600">Solicitar férias</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Solicitacoes;
