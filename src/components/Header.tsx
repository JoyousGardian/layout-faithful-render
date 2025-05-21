
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, Moon, Sun } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const { toast } = useToast();

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('light-mode', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
    
    // Toggle class on document for theme styling
    document.documentElement.classList.toggle('light-mode', newTheme === 'light');
    
    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode enabled`,
      description: `Switched to ${newTheme} theme`,
    });
  };

  return (
    <div className={`flex items-center justify-between p-4 search-bar rounded-full mx-auto mb-8 ${theme === 'light' ? 'bg-white/90 shadow-sm' : 'bg-[#222]/80'}`}>
      <div className="flex items-center gap-4">
        <button className={`flex items-center justify-center rounded-full ${theme === 'light' ? 'bg-gray-200' : 'bg-[#222]'} p-3 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          <div className="grid grid-cols-2 gap-1">
            <div className={`w-2 h-2 ${theme === 'light' ? 'bg-gray-500/80' : 'bg-white/80'} rounded-sm`}></div>
            <div className={`w-2 h-2 ${theme === 'light' ? 'bg-gray-500/80' : 'bg-white/80'} rounded-sm`}></div>
            <div className={`w-2 h-2 ${theme === 'light' ? 'bg-gray-500/80' : 'bg-white/80'} rounded-sm`}></div>
            <div className={`w-2 h-2 ${theme === 'light' ? 'bg-gray-500/80' : 'bg-white/80'} rounded-sm`}></div>
          </div>
        </button>
        <div className={`flex items-center gap-2 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
          <ArrowLeft size={20} />
          <span className="text-xl">Map</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Search className={theme === 'light' ? 'text-gray-800' : 'text-white'} size={20} />
        <Toggle 
          pressed={theme === 'light'}
          onPressedChange={toggleTheme} 
          className={`flex items-center justify-center rounded-full ${theme === 'light' ? 'border border-gray-200' : 'border border-white/20'} p-1.5`}
        >
          {theme === 'light' ? (
            <Sun className="text-gray-800" size={16} />
          ) : (
            <Moon className="text-white" size={16} />
          )}
        </Toggle>
      </div>
    </div>
  );
};

export default Header;
