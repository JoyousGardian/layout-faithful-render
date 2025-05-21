
import React from 'react';
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
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-screen-xl mx-auto">
        <Header />
        
        <h1 className="text-white text-2xl font-bold mb-6">RadarOmega - Cams</h1>
        
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
