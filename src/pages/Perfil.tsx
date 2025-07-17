
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import { User, Mail, Phone, MapPin, Calendar, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const Perfil = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-4 lg:p-8 overflow-auto">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Page Header */}
              <div className="text-center lg:text-left">
                <h1 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-2 flex items-center justify-center lg:justify-start">
                  <User className="w-8 h-8 text-bishop-red-600 mr-3" />
                  Meu Perfil
                </h1>
                <p className="text-lg text-gray-600">
                  Gerencie suas informações pessoais e configurações
                </p>
              </div>

              {/* Profile Card */}
              <Card className="shadow-xl border-0 bg-gradient-to-r from-white to-gray-50">
                <CardHeader className="pb-6">
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <Avatar className="w-24 h-24 border-4 border-bishop-red-200">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback className="bg-bishop-red-100 text-bishop-red-700 text-2xl font-bold">
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                      <h2 className="text-2xl font-bold text-gray-900">João da Silva</h2>
                      <p className="text-lg text-gray-600">Desenvolvedor Frontend</p>
                      <p className="text-sm text-gray-500">ID: 12345</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="bg-bishop-red-600 hover:bg-bishop-red-700 text-white">
                    Editar Perfil
                  </Button>
                </CardContent>
              </Card>

              {/* Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-900">
                      <Mail className="w-5 h-5 text-bishop-red-600 mr-2" />
                      Informações de Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Email</label>
                      <p className="text-gray-900">joao.silva@empresa.com</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Telefone</label>
                      <p className="text-gray-900">(11) 99999-9999</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Endereço</label>
                      <p className="text-gray-900">São Paulo, SP</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-gray-900">
                      <Building className="w-5 h-5 text-bishop-red-600 mr-2" />
                      Informações Profissionais
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-600">Cargo</label>
                      <p className="text-gray-900">Desenvolvedor Frontend</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Departamento</label>
                      <p className="text-gray-900">Tecnologia</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-600">Data de Admissão</label>
                      <p className="text-gray-900">15/03/2023</p>
                    </div>
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

export default Perfil;
