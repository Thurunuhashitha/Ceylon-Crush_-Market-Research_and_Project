
'use client';

import { useState, useEffect } from 'react';

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-3xl flex items-center justify-center z-10">
      <div className="text-center space-y-6">
        {/* Avatar Loading Icon */}
        <div className="relative">
          <div className="w-20 h-20 border-4 border-gray-200 rounded-full animate-spin">
            <div className="w-4 h-4 bg-green-500 rounded-full absolute top-2"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="ri-user-3-line text-2xl text-gray-400"></i>
          </div>
        </div>

        {/* Loading Text */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Generating Your Avatar</h3>
          <p className="text-sm text-gray-600">Applying measurements and clothing...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>Processing</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="space-y-2 text-xs text-gray-500">
          <div className={`flex items-center gap-2 ${progress > 20 ? 'text-green-600' : ''}`}>
            <i className={`ri-check-line ${progress > 20 ? 'block' : 'hidden'}`}></i>
            <i className={`ri-loader-line animate-spin ${progress <= 20 ? 'block' : 'hidden'}`}></i>
            Loading body measurements
          </div>
          <div className={`flex items-center gap-2 ${progress > 50 ? 'text-green-600' : ''}`}>
            <i className={`ri-check-line ${progress > 50 ? 'block' : 'hidden'}`}></i>
            <i className={`ri-loader-line animate-spin ${progress > 20 && progress <= 50 ? 'block' : 'hidden'}`}></i>
            Applying facial features
          </div>
          <div className={`flex items-center gap-2 ${progress > 80 ? 'text-green-600' : ''}`}>
            <i className={`ri-check-line ${progress > 80 ? 'block' : 'hidden'}`}></i>
            <i className={`ri-loader-line animate-spin ${progress > 50 && progress <= 80 ? 'block' : 'hidden'}`}></i>
            Fitting clothing item
          </div>
          <div className={`flex items-center gap-2 ${progress === 100 ? 'text-green-600' : ''}`}>
            <i className={`ri-check-line ${progress === 100 ? 'block' : 'hidden'}`}></i>
            <i className={`ri-loader-line animate-spin ${progress > 80 && progress < 100 ? 'block' : 'hidden'}`}></i>
            Final rendering
          </div>
        </div>
      </div>
    </div>
  );
}
