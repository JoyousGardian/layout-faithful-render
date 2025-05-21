
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface LiveCamCardProps {
  imageUrl: string;
}

const LiveCamCard: React.FC<LiveCamCardProps> = ({ imageUrl }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-lg overflow-hidden h-full ${theme === 'light' ? 'border border-gray-200' : ''}`}>
      <div className="aspect-video w-full h-full">
        <img 
          src={imageUrl} 
          alt="Live Camera Feed" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default LiveCamCard;
