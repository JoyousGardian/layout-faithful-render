
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface WetBulbCardProps {
  temperature: number;
  readingMinutes: number;
  readingValue: number;
}

const WetBulbCard: React.FC<WetBulbCardProps> = ({ temperature, readingMinutes, readingValue }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-4 rounded-lg ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-[#111]'}`}>
      <div className="flex justify-between mb-4">
        <h3 className={`text-lg font-semibold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>WetBulb Globe Assessment</h3>
        <div>
          <h4 className={`text-sm font-medium text-right ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Threat Level</h4>
          <div className="w-16 h-3 bg-gray-700 mt-1"></div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <span className="text-6xl font-bold text-green-500">{temperature}°</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex space-x-2">
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
              {readingMinutes} min : {readingValue}
            </div>
            <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
              {readingMinutes} min : {readingValue}
            </div>
          </div>
          
          <div className="bg-green-500 text-white text-sm px-4 py-1 rounded text-center">
            Low Risk
          </div>
        </div>
      </div>
    </div>
  );
};

export default WetBulbCard;
