
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface PressureCardProps {
  title: string;
  pressure: string;
  seaLevelPressure: string;
}

const PressureCard: React.FC<PressureCardProps> = ({ title, pressure, seaLevelPressure }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-4 rounded-lg ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-[#111]'}`}>
      <h3 className={`text-lg font-semibold mb-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{title}</h3>
      
      <div className="mt-4">
        <h4 className={`text-sm font-medium uppercase mb-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          PRESSURE
        </h4>
        <p className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          {pressure} <span className="text-sm">mb</span>
        </p>
        <div className="w-full h-2 bg-gray-700 mt-2 mb-4">
          <div className="h-full bg-yellow-500" style={{ width: '75%' }}></div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className={`text-sm font-medium uppercase mb-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
          SEA LEVEL PRESSURE
        </h4>
        <p className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          {seaLevelPressure} <span className="text-sm">mb</span>
        </p>
        <div className="w-full h-2 bg-gray-700 mt-2">
          <div className="h-full bg-green-500" style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PressureCard;
