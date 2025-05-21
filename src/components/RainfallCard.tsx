
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface RainfallCardProps {
  title: string;
  value: string;
}

const RainfallCard: React.FC<RainfallCardProps> = ({ title, value }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`p-3 rounded-lg ${theme === 'light' ? 'bg-white border border-gray-200' : 'bg-[#111]'}`}>
      <h3 className={`text-xs font-medium mb-1 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{title}</h3>
      <p className={`text-xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>{value}</p>
    </div>
  );
};

export default RainfallCard;
