
import React from 'react';
import { ArrowLeft, Search, Moon } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 search-bar rounded-full mx-auto mb-8">
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center rounded-full bg-[#222] p-3 text-white">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-2 h-2 bg-white/80 rounded-sm"></div>
            <div className="w-2 h-2 bg-white/80 rounded-sm"></div>
            <div className="w-2 h-2 bg-white/80 rounded-sm"></div>
            <div className="w-2 h-2 bg-white/80 rounded-sm"></div>
          </div>
        </button>
        <div className="flex items-center gap-2 text-white">
          <ArrowLeft size={20} />
          <span className="text-xl">Map</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Search className="text-white" size={20} />
        <button className="flex items-center justify-center rounded-full border border-white/20 p-1.5">
          <Moon className="text-white" size={16} />
        </button>
      </div>
    </div>
  );
};

export default Header;
