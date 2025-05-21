
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Map from '../components/Map';
import WeatherCard from '../components/WeatherCard';
import Footer from '../components/Footer';

const weatherData = [
  {
    temperature: "80.9",
    location: "Systems Atlanta",
    humidity: "81.5%",
    dewPoint: "71.9°F",
  },
  {
    temperature: "80.9",
    location: "Systems Atlanta",
    humidity: "81.5%",
    dewPoint: "71.9°F",
  },
  {
    temperature: "80.9",
    location: "Systems Atlanta",
    humidity: "81.5%",
    dewPoint: "71.9°F",
  },
  {
    temperature: "80.9",
    location: "Systems Atlanta",
    humidity: "81.5%",
    dewPoint: "71.9°F",
  },
];

const Index = () => {
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
    <div className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-black'} p-6 transition-colors duration-300`}>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        
        <h1 className={`${theme === 'light' ? 'text-gray-800' : 'text-white'} text-2xl font-bold mb-6 transition-colors duration-300`}>RadarOmega - Cams</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 h-[500px]">
            <Map />
          </div>
          
          <div className="lg:col-span-1">
            {weatherData.map((data, index) => (
              <WeatherCard
                key={index}
                temperature={data.temperature}
                location={data.location}
                humidity={data.humidity}
                dewPoint={data.dewPoint}
              />
            ))}
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
