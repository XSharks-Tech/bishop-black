
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import Header from '@/components/Header';
import { Bot, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Assistente = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, text: 'Olá! Sou o Assistente Virtual Bishop Black. Como posso ajudá-lo hoje?', isBot: true, time: '14:30' },
    { id: 2, text: 'Oi! Gostaria de saber sobre meus registros de ponto desta semana.', isBot: false, time: '14:31' },
    { id: 3, text: 'Claro! Esta semana você registrou 40 horas de trabalho. Suas entradas foram pontuais e você tem 2 horas extras acumuladas. Gostaria de ver mais detalhes?', isBot: true, time: '14:31' },
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        isBot: false,
        time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simular resposta do bot
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: 'Entendi sua solicitação. Deixe-me verificar essas informações para você...',
          isBot: true,
          time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const quickActions = [
    'Como ver meus registros de ponto?',
    'Solicitar abono de falta',
    'Consultar saldo de horas',
    'Agendar férias',
    'Reportar problema no sistema',
    'Ver relatório mensal'
  ];

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
                  <Bot className="w-8 h-8 text-bishop-red-600 mr-3" />
                  Assistente Virtual
                </h1>
                <p className="text-lg text-gray-600">
                  Tire suas dúvidas e obtenha ajuda instantânea
                </p>
              </div>

              {/* Chat Interface */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-900">
                    <MessageCircle className="w-5 h-5 text-bishop-red-600 mr-2" />
                    Conversa com o Assistente
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Messages */}
                  <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.isBot 
                            ? 'bg-gray-100 text-gray-800' 
                            : 'bg-bishop-red-600 text-white'
                        }`}>
                          <p className="text-sm">{msg.text}</p>
                          <p className={`text-xs mt-1 ${msg.isBot ? 'text-gray-500' : 'text-bishop-red-100'}`}>
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="flex space-x-2">
                    <Input
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Digite sua mensagem..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      className="bg-bishop-red-600 hover:bg-bishop-red-700 text-white"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Perguntas Frequentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="text-left justify-start h-auto p-3 border-gray-200 hover:border-bishop-red-300 hover:bg-bishop-red-50"
                        onClick={() => setMessage(action)}
                      >
                        {action}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Help Tips */}
              <Card className="shadow-lg bg-gradient-to-r from-bishop-red-50 to-bishop-red-100 border-bishop-red-200">
                <CardContent className="p-6">
                  <h3 className="font-bold text-bishop-red-800 mb-2">💡 Dicas de Uso</h3>
                  <ul className="text-sm text-bishop-red-700 space-y-1">
                    <li>• Use frases claras e diretas para obter melhores respostas</li>
                    <li>• Clique nas perguntas frequentes para usar como exemplo</li>
                    <li>• O assistente pode ajudar com dúvidas sobre ponto, relatórios e solicitações</li>
                    <li>• Para problemas técnicos, descreva detalhadamente o que aconteceu</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Assistente;
