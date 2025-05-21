
import React, { useState, useEffect } from 'react';

const Footer = () => {
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
    <div className={`mt-8 flex items-center justify-start ${theme === 'light' ? 'text-gray-800' : 'text-white'} ${theme === 'light' ? 'text-opacity-90' : 'text-opacity-80'}`}>
      <div className="flex items-center gap-4">
        <span className={`${theme === 'light' ? 'text-gray-700' : 'text-white'} ${theme === 'light' ? 'opacity-80' : 'opacity-70'} uppercase text-sm`}>POWERED BY</span>
        <div className="flex items-center">
          <div className="rounded-full w-10 h-10 border-2 border-blue-500 flex items-center justify-center overflow-hidden">
            <div className="rounded-full w-8 h-8 border-4 border-transparent border-t-blue-500 border-l-blue-500"></div>
          </div>
          <span className="text-blue-500 font-bold text-2xl ml-2">cyclonePort</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
