
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import LineChart from '@/components/LineChart';
import RainfallCard from '@/components/RainfallCard';
import SensorCard from '@/components/SensorCard';
import PressureCard from '@/components/PressureCard';
import WetBulbCard from '@/components/WetBulbCard';
import WindCard from '@/components/WindCard';
import LiveCamCard from '@/components/LiveCamCard';
import TabSelector from '@/components/TabSelector';

// Sample data
const windData = Array.from({ length: 20 }, (_, i) => ({ value: 10 + Math.random() * 20 }));
const tempData = Array.from({ length: 20 }, (_, i) => ({ value: 15 + Math.random() * 15 }));
const pressureData = Array.from({ length: 20 }, (_, i) => ({ value: 990 + Math.random() * 10 }));
const otherTempData = Array.from({ length: 20 }, (_, i) => ({ value: 5 + Math.random() * 30 }));
const flatLineData = Array.from({ length: 20 }, (_, i) => ({ value: 50 }));

const Index = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('Forecast');
  const [liveCamUrl, setLiveCamUrl] = useState('/placeholder.svg');
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' ? 'bg-gray-100' : 'bg-black'
    }`}>
      <Navbar />
      
      <div className="p-4 md:p-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Left column - First trend */}
          <div className="col-span-12 md:col-span-3">
            <h2 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              Measurement Trends
            </h2>
            <LineChart 
              data={windData} 
              color="#FFEB3B" 
              title="Measurement Trends" 
              yAxisLabel="Wind Speed MPH"
            />
          </div>
          
          {/* Middle column - Rainfall data */}
          <div className="col-span-12 md:col-span-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
                Rainfall Measurements
              </h2>
              <TabSelector
                tabs={['Forecast', 'Air Quality']}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <RainfallCard title="60 Minutes" value="0.00" />
              <RainfallCard title="Since Midnight" value="0.00" />
              <RainfallCard title="Last 24/HR" value="0.00" />
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <RainfallCard title="Last 7 Days" value="0.00" />
              <RainfallCard title="MTD" value="0.00" />
              <RainfallCard title="YTD" value="0.00" />
            </div>
            
            <WetBulbCard temperature={50} readingMinutes={5} readingValue={58.9} />
          </div>
          
          {/* Right column - Temperature trend */}
          <div className="col-span-12 md:col-span-3">
            <h2 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              Measurement Trends
            </h2>
            <LineChart 
              data={tempData} 
              color="#2196F3" 
              title="Measurement Trends" 
              yAxisLabel="Outdoor Temperature"
            />
          </div>
          
          {/* Second row */}
          <div className="col-span-12 md:col-span-3">
            <LineChart 
              data={otherTempData} 
              color="#4CAF50" 
              title="Measurement Trends" 
              yAxisLabel="Wind Speed MPH"
            />
          </div>
          
          <div className="col-span-12 md:col-span-3">
            <LineChart 
              data={flatLineData} 
              color="#2196F3" 
              title="Measurement Trends" 
            />
          </div>
          
          <div className="col-span-12 md:col-span-6 row-span-2">
            <LiveCamCard imageUrl={liveCamUrl} />
          </div>
          
          {/* Third row */}
          <div className="col-span-12 md:col-span-3">
            <LineChart 
              data={pressureData} 
              color="#9C27B0" 
              title="Measurement Trends" 
              yAxisLabel="Pressure (mb)"
            />
          </div>
          
          <div className="col-span-12 md:col-span-3">
            <PressureCard 
              title="Pressure Measurements" 
              pressure="990.6" 
              seaLevelPressure="990.6" 
            />
          </div>
          
          {/* Wind card spans 2 columns in the next row */}
          <div className="col-span-12 md:col-span-6">
            <WindCard 
              speed={6} 
              direction={0} 
              directionLabel="N" 
            />
          </div>
          
          {/* Fourth row - Sensor data */}
          <div className="col-span-12 md:col-span-6">
            <h2 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-800' : 'text-white'}`}>
              Primary Sensor Data
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SensorCard 
                title="Temperature" 
                value="10" 
                unit="°" 
                color="text-yellow-500" 
              />
              <SensorCard 
                title="Humidity" 
                value="10" 
                unit="%" 
                color="text-white" 
              />
              <SensorCard 
                title="Dew Point" 
                value="10" 
                unit="°" 
                color="text-blue-500" 
              />
              <SensorCard 
                title="Heat Index" 
                value="NA" 
                color="text-white" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
