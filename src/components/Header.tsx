
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, Moon, Sun } from 'lucide-react';
import { Toggle } from "@/components/ui/toggle";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";

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
    <div className="flex items-center justify-between px-4 py-2 bg-[#121212] mx-auto mb-8">
      <div className="flex items-center gap-6">
        <button className="flex items-center justify-center rounded-full bg-[#252525] p-2.5">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-white/70 rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-white/70 rounded-sm"></div>
            <div className="w-1.5 h-1.5 bg-white/70 rounded-sm"></div>
          </div>
        </button>
        <div className="flex items-center gap-3 text-white">
          <ArrowLeft size={24} strokeWidth={2} />
          <span className="text-lg font-medium">Map</span>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Search className="text-white" size={24} strokeWidth={2} />
        <div className="bg-[#252525] rounded-full px-1 py-1 flex items-center">
          <div className={`p-0.5 rounded-full transition-all duration-150 ${theme === 'light' ? 'bg-white' : 'bg-transparent'}`}>
            <Sun className={theme === 'light' ? 'text-black' : 'text-white/70'} size={20} />
          </div>
          <Switch 
            checked={theme === 'light'} 
            onCheckedChange={toggleTheme} 
            className="mx-0.5 data-[state=checked]:bg-transparent data-[state=unchecked]:bg-transparent border-0"
          />
          <div className={`p-0.5 rounded-full transition-all duration-150 ${theme === 'dark' ? 'bg-[#555]' : 'bg-transparent'}`}>
            <Moon className={theme === 'dark' ? 'text-white' : 'text-white/70'} size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
