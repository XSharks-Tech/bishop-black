
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import { Users, UserCheck, UserX, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const Equipe = () => {
  const teamMembers = [
    { name: 'Maria Santos', role: 'Designer', status: 'online', avatar: 'MS', lastSeen: '09:30' },
    { name: 'Pedro Costa', role: 'Desenvolvedor', status: 'offline', avatar: 'PC', lastSeen: '18:45' },
    { name: 'Ana Silva', role: 'Gerente', status: 'online', avatar: 'AS', lastSeen: '10:15' },
    { name: 'Carlos Lima', role: 'Analista', status: 'online', avatar: 'CL', lastSeen: '08:30' },
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
                  <Users className="w-8 h-8 text-bishop-red-600 mr-3" />
                  Minha Equipe
                </h1>
                <p className="text-lg text-gray-600">
                  Acompanhe o status e atividades da sua equipe
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-l-green-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                      <UserCheck className="w-4 h-4 mr-2" />
                      Presentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-700">3</div>
                    <p className="text-sm text-gray-500">de 4 membros</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                      <UserX className="w-4 h-4 mr-2" />
                      Ausentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-red-700">1</div>
                    <p className="text-sm text-gray-500">membro offline</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-bishop-red-500 shadow-lg">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Média de Horas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-bishop-red-700">8.2h</div>
                    <p className="text-sm text-gray-500">hoje</p>
                  </CardContent>
                </Card>
              </div>

              {/* Team Members */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Membros da Equipe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src="/placeholder.svg" alt={member.name} />
                          <AvatarFallback className="bg-bishop-red-100 text-bishop-red-700 font-semibold">
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.role}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={member.status === 'online' ? 'default' : 'secondary'}
                            className={member.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}
                          >
                            {member.status === 'online' ? 'Online' : 'Offline'}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{member.lastSeen}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Equipe;
