
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface SensorCardProps {
  title: string;
  value: string;
  unit?: string;
  color?: string;
}

const SensorCard: React.FC<SensorCardProps> = ({ title, value, unit, color = 'text-blue-500' }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-4 rounded-lg ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-[#111]'}`}>
      <h3 className={`text-sm font-medium uppercase mb-3 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
        {title}
      </h3>
      <p className={`text-3xl font-bold ${color}`}>
        {value}
        {unit && <span className="text-lg ml-1">{unit}</span>}
      </p>
    </div>
  );
};

export default SensorCard;
