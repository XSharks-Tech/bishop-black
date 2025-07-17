
import React from 'react';
import { Calendar, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimeRecord {
  date: string;
  dayOfWeek: string;
  entry: string;
  exit: string;
  totalHours: string;
  status: 'complete' | 'partial' | 'pending';
}

const TimeRecordsCard = () => {
  const records: TimeRecord[] = [
    {
      date: '17/07/2025',
      dayOfWeek: 'Quinta-feira',
      entry: '08:00',
      exit: '18:00',
      totalHours: '09:00',
      status: 'complete'
    },
    {
      date: '16/07/2025',
      dayOfWeek: 'Quarta-feira',
      entry: '08:15',
      exit: '17:45',
      totalHours: '08:30',
      status: 'complete'
    },
    {
      date: '15/07/2025',
      dayOfWeek: 'Terça-feira',
      entry: '08:00',
      exit: '18:30',
      totalHours: '09:30',
      status: 'complete'
    },
    {
      date: '14/07/2025',
      dayOfWeek: 'Segunda-feira',
      entry: '08:30',
      exit: '—',
      totalHours: '—',
      status: 'partial'
    }
  ];

  const getStatusBadge = (status: TimeRecord['status']) => {
    switch (status) {
      case 'complete':
        return <Badge className="bg-green-100 text-green-800 border-green-200">Completo</Badge>;
      case 'partial':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Parcial</Badge>;
      case 'pending':
        return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Pendente</Badge>;
    }
  };

  return (
    <Card className="bg-white border-0 shadow-lg">
      <CardHeader className="border-b border-gray-100">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-display font-bold text-gray-900 flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-bishop-red-600" />
            <span>Registros Recentes</span>
          </CardTitle>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <TrendingUp className="w-4 h-4" />
            <span>Últimos 7 dias</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100">
          {records.map((record, index) => (
            <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <div className="text-sm font-medium text-gray-900">
                      {record.date}
                    </div>
                    <div className="text-sm text-gray-500">
                      {record.dayOfWeek}
                    </div>
                    {getStatusBadge(record.status)}
                  </div>
                  
                  <div className="flex items-center space-x-6 mt-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-600">Entrada:</span>
                      <span className="text-sm font-mono font-medium text-gray-900">
                        {record.entry}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span className="text-sm text-gray-600">Saída:</span>
                      <span className="text-sm font-mono font-medium text-gray-900">
                        {record.exit}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600">Total:</span>
                      <span className="text-sm font-mono font-medium text-bishop-red-700">
                        {record.totalHours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-100 bg-gray-50">
          <button className="w-full text-sm text-bishop-red-600 hover:text-bishop-red-700 font-medium transition-colors">
            Ver todos os registros →
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeRecordsCard;
