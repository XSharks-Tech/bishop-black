
import React from 'react';
import { Clock, Calendar, TrendingUp, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DashboardStats = () => {
  const stats = [
    {
      title: 'Horas Hoje',
      value: '7h 32m',
      icon: Clock,
      color: 'text-bishop-red-600',
      bgColor: 'bg-bishop-red-50',
      change: '+15min',
      changeType: 'positive'
    },
    {
      title: 'Horas da Semana',
      value: '38h 45m',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '2h restantes',
      changeType: 'neutral'
    },
    {
      title: 'Produtividade',
      value: '94%',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      change: '+3%',
      changeType: 'positive'
    },
    {
      title: 'Pontuação',
      value: '847pts',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: '+12pts',
      changeType: 'positive'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </p>
                <p className={`text-xs font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 
                  stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                }`}>
                  {stat.change}
                </p>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
