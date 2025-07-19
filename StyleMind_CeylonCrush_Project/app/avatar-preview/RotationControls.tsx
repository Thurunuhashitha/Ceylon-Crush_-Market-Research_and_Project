
'use client';

import { useState } from 'react';

export default function RotationControls() {
  const [rotation, setRotation] = useState(0);
  const [isAutoRotate, setIsAutoRotate] = useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setRotation(value);
  };

  const rotateLeft = () => {
    setRotation(prev => (prev - 45 + 360) % 360);
  };

  const rotateRight = () => {
    setRotation(prev => (prev + 45) % 360);
  };

  const toggleAutoRotate = () => {
    setIsAutoRotate(!isAutoRotate);
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Rotation Slider */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">360° View</h3>
          <p className="text-sm text-gray-600">Drag to rotate your avatar</p>
        </div>
        
        <div className="relative">
          <input
            type="range"
            min="0"
            max="360"
            value={rotation}
            onChange={handleSliderChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>0°</span>
            <span>90°</span>
            <span>180°</span>
            <span>270°</span>
            <span>360°</span>
          </div>
        </div>
      </div>

      {/* Manual Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={rotateLeft}
          className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer"
        >
          <i className="ri-arrow-left-line text-xl text-gray-700"></i>
        </button>
        
        <div className="text-center px-4">
          <div className="text-2xl font-bold text-gray-800">{rotation}°</div>
          <div className="text-xs text-gray-500">Current Angle</div>
        </div>
        
        <button
          onClick={rotateRight}
          className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center transition-all cursor-pointer"
        >
          <i className="ri-arrow-right-line text-xl text-gray-700"></i>
        </button>
      </div>

      {/* Auto Rotate Toggle */}
      <div className="flex items-center justify-center">
        <button
          onClick={toggleAutoRotate}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
            isAutoRotate 
              ? 'bg-blue-500 text-white shadow-lg' 
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          <div className="flex items-center gap-2">
            <i className={`ri-refresh-line ${isAutoRotate ? 'animate-spin' : ''}`}></i>
            {isAutoRotate ? 'Stop Auto Rotate' : 'Auto Rotate'}
          </div>
        </button>
      </div>
    </div>
  );
}
