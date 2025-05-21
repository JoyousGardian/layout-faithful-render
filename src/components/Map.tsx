
import React from 'react';

const Map = () => {
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-black/50">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Placeholder map - in a real app this would be a Google Map or similar */}
            <img 
              src="/placeholder.svg" 
              alt="Map" 
              className="w-full h-full object-cover opacity-50"
            />
            
            {/* Map markers */}
            <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-transparent flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black/70 border-2 border-gray-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-transparent flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black/70 border-2 border-gray-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-transparent flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black/70 border-2 border-gray-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-transparent flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-black/70 border-2 border-gray-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
              </div>
            </div>
            
            {/* Google logo */}
            <div className="absolute bottom-2 left-2 opacity-50">
              <span className="text-white text-xs font-semibold">Google</span>
            </div>
            
            {/* Map data copyright */}
            <div className="absolute bottom-2 right-2 text-white/50 text-xs">
              Map data ©2024 Google Terms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
