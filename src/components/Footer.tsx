
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-8 flex items-center justify-start text-white text-opacity-80">
      <div className="flex items-center gap-4">
        <span className="text-white opacity-70 uppercase text-sm">POWERED BY</span>
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
