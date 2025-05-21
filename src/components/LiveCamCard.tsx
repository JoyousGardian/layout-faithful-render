
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LiveCamCardProps {
  imageUrl: string;
}

const LiveCamCard: React.FC<LiveCamCardProps> = ({ imageUrl }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-lg overflow-hidden ${theme === 'light' ? 'border border-gray-200' : ''}`}>
      <img 
        src={imageUrl} 
        alt="Live Camera Feed" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default LiveCamCard;
