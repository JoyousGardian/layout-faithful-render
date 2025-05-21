
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface TabSelectorProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ tabs, activeTab, onTabChange }) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex space-x-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-1 rounded-full text-sm ${
            activeTab === tab
              ? 'bg-blue-500 text-white'
              : theme === 'light'
                ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                : 'bg-[#222] text-gray-300 hover:bg-[#333]'
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabSelector;
