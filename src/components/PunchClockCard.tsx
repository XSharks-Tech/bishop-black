
import React, { useState } from 'react';
import { Clock, MapPin, Wifi, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

const PunchClockCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [lastPunch, setLastPunch] = useState<Date | null>(null);

  const handlePunchClock = async () => {
    setIsLoading(true);
    
    // Simular requisição
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const now = new Date();
    setLastPunch(now);
    setIsLoading(false);
    
    toast({
      title: "Ponto registrado com sucesso!",
      description: `Horário: ${now.toLocaleTimeString('pt-BR')}`,
      duration: 3000,
    });
  };

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <Card className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-display font-bold text-gray-900">
          Registrar Ponto
        </CardTitle>
        <div className="text-3xl font-mono font-bold text-gray-900 mt-2">
          {getCurrentTime()}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Status indicators */}
        <div className="flex justify-center space-x-6">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">Localização OK</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wifi className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">Conectado</span>
          </div>
        </div>

        {/* Punch button */}
        <div className="flex justify-center">
          <Button
            onClick={handlePunchClock}
            disabled={isLoading}
            className="relative w-32 h-32 rounded-full bg-gradient-to-br from-bishop-red-600 to-bishop-red-700 hover:from-bishop-red-700 hover:to-bishop-red-800 text-white shadow-xl transform transition-all duration-300 hover:scale-105 disabled:scale-100"
          >
            {isLoading ? (
              <div className="flex flex-col items-center space-y-2">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span className="text-xs">Registrando...</span>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-2">
                <Clock className="w-8 h-8" />
                <span className="text-sm font-medium">BATER PONTO</span>
              </div>
            )}
          </Button>
        </div>

        {/* Last punch info */}
        {lastPunch && (
          <div className="flex items-center justify-center space-x-2 p-3 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-sm text-green-800">
              Último registro: {lastPunch.toLocaleTimeString('pt-BR')}
            </span>
          </div>
        )}

        {/* Current status */}
        <div className="text-center">
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Expediente em andamento
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default PunchClockCard;
