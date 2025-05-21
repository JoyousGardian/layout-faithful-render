
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface WindCardProps {
  speed: number;
  direction: number;
  directionLabel: string;
}

const WindCard: React.FC<WindCardProps> = ({ speed, direction, directionLabel }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-4 rounded-lg ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-[#111]'}`}>
      <h3 className={`text-lg font-semibold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
        Wind speed measurement
      </h3>
      
      <div className="flex items-center justify-between">
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 rounded-full border-2 border-gray-600 flex items-center justify-center">
            <div className="absolute w-1 h-1 bg-black rounded-full z-10"></div>
            <div 
              className="absolute w-12 h-1 bg-black rounded-full origin-center"
              style={{ transform: `rotate(${direction}deg)` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="grid grid-cols-1 gap-20 text-gray-500">
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">N</span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">S</span>
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">W</span>
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">E</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div>
            <h4 className={`text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>SUSTAINED</h4>
            <p className="text-2xl font-bold text-yellow-500">{speed} MPH</p>
          </div>
          
          <div className="mt-4">
            <h4 className={`text-sm font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>DIRECTION</h4>
            <p className={`text-2xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              {direction}° ({directionLabel})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindCard;
