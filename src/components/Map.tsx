
import React, { useEffect, useState } from 'react';

const Map = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const updateTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme as 'dark' | 'light');
      }
    };

    // Initial check
    updateTheme();

    // Set up event listener for theme changes
    window.addEventListener('storage', updateTheme);
    
    // Observe changes to DOM for theme class changes
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const hasLightMode = document.documentElement.classList.contains('light-mode');
          setTheme(hasLightMode ? 'light' : 'dark');
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      window.removeEventListener('storage', updateTheme);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`relative w-full h-full rounded-lg overflow-hidden ${theme === 'light' ? 'border border-gray-200' : ''}`}>
      <div className={`absolute inset-0 ${theme === 'light' ? 'bg-gray-100/70' : 'bg-black/50'}`}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Placeholder map - in a real app this would be a Google Map or similar */}
            <img 
              src="/placeholder.svg" 
              alt="Map" 
              className={`w-full h-full object-cover ${theme === 'light' ? 'opacity-70' : 'opacity-50'}`}
            />
            
            {/* Map markers */}
            <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-transparent flex items-center justify-center">
                <div className={`w-6 h-6 rounded-full ${theme === 'light' ? 'bg-white/90 border-2 border-gray-400' : 'bg-black/70 border-2 border-gray-600'} flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-transparent flex items-center justify-center">
                <div className={`w-6 h-6 rounded-full ${theme === 'light' ? 'bg-white/90 border-2 border-gray-400' : 'bg-black/70 border-2 border-gray-600'} flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-transparent flex items-center justify-center">
                <div className={`w-6 h-6 rounded-full ${theme === 'light' ? 'bg-white/90 border-2 border-gray-400' : 'bg-black/70 border-2 border-gray-600'} flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-transparent flex items-center justify-center">
                <div className={`w-6 h-6 rounded-full ${theme === 'light' ? 'bg-white/90 border-2 border-gray-400' : 'bg-black/70 border-2 border-gray-600'} flex items-center justify-center`}>
                  <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-gray-400' : 'bg-gray-600'}`}></div>
                </div>
              </div>
            </div>
            
            {/* Google logo */}
            <div className="absolute bottom-2 left-2 opacity-50">
              <span className={theme === 'light' ? 'text-gray-800 text-xs font-semibold' : 'text-white text-xs font-semibold'}>Google</span>
            </div>
            
            {/* Map data copyright */}
            <div className={`absolute bottom-2 right-2 ${theme === 'light' ? 'text-gray-600/70' : 'text-white/50'} text-xs`}>
              Map data ©2024 Google Terms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
