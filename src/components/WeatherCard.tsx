
import React, { useEffect, useState } from 'react';

interface WeatherCardProps {
  temperature: string;
  location: string;
  humidity: string;
  dewPoint: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ temperature, location, humidity, dewPoint }) => {
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
    
    // Custom event for theme changes in the same window
    const handleThemeChange = () => {
      updateTheme();
    };
    document.addEventListener('themeChanged', handleThemeChange);

    return () => {
      window.removeEventListener('storage', updateTheme);
      document.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);

  // Observe changes to DOM for theme class changes
  useEffect(() => {
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
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`flex mb-4 glass-card rounded-xl overflow-hidden ${theme === 'light' ? 'bg-white shadow-md' : ''}`}>
      <div className="flex-1 p-4 flex items-center justify-center">
        <div className="w-16 h-16 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={theme === 'light' ? 'text-gray-500 w-10 h-10' : 'text-gray-400 w-10 h-10'}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col justify-center">
        <div className="flex items-start">
          <span className="text-yellow-accent text-2xl font-bold">{temperature}</span>
          <span className="text-yellow-accent text-sm align-top">°</span>
        </div>
        <div className={theme === 'light' ? 'text-gray-800 text-sm' : 'text-white text-sm'}>{location}</div>
        <div className={theme === 'light' ? 'text-gray-600 text-xs' : 'text-gray-400 text-xs'}>Humidity: {humidity}</div>
        <div className={theme === 'light' ? 'text-gray-600 text-xs' : 'text-gray-400 text-xs'}>Dew Point: {dewPoint}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
