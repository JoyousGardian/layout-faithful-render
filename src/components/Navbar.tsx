
import React from 'react';
import { Grid, Bell, MapPin, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center justify-between w-full px-4 py-3">
      <div className="flex items-center gap-4">
        <button className="bg-[#222] hover:bg-[#333] p-3 rounded-full">
          <Grid size={20} className="text-white" />
        </button>
        <button className="bg-[#222] hover:bg-[#333] p-3 rounded-full">
          <Bell size={20} className="text-white" />
        </button>
        <button className="bg-[#222] hover:bg-[#333] p-3 rounded-full">
          <MapPin size={20} className="text-white" />
        </button>
      </div>
      
      <div className="flex-1 max-w-xl mx-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search City"
            className="bg-[#222] text-white w-full py-2 pl-10 pr-4 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center bg-[#222] rounded-full p-1">
          <Switch 
            checked={theme === 'light'}
            onCheckedChange={toggleTheme}
            className="data-[state=checked]:bg-[#222]"
          />
          <div className="p-1 ml-1">
            {theme === 'dark' ? (
              <Moon className="h-5 w-5 text-white" />
            ) : (
              <Sun className="h-5 w-5 text-white" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
