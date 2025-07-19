
'use client';

import { useState, useEffect } from 'react';

export default function AvatarDisplay() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleRotationChange = (newRotation: number) => {
    setRotation(newRotation);
  };

  return (
    <div className="relative w-full h-96 lg:h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* 3D Avatar Container */}
      <div 
        className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-white relative"
        style={{ transform: `rotateY(${rotation}deg)`, transformStyle: 'preserve-3d' }}
      >
        {/* Avatar Placeholder with realistic styling */}
        <div className="relative w-64 h-80 lg:w-80 lg:h-96">
          {/* Avatar Base */}
          <img
            src="https://readdy.ai/api/search-image?query=Realistic%203D%20human%20avatar%20model%20standing%20in%20neutral%20pose%2C%20wearing%20elegant%20formal%20clothing%2C%20professional%20lighting%20setup%20with%20soft%20shadows%2C%20clean%20minimal%20white%20studio%20background%2C%20high%20quality%20rendering%2C%20fashion%20tech%20style%2C%20modern%20digital%20avatar&width=400&height=500&seq=avatar-base-001&orientation=portrait"
            alt="3D Avatar"
            className="w-full h-full object-cover object-top rounded-2xl"
            style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' }}
          />
          
          {/* Lighting Effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 rounded-2xl"></div>
          <div className="absolute -inset-4 bg-gradient-radial from-white/20 to-transparent blur-xl opacity-50"></div>
        </div>

        {/* Avatar Info Overlay */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-xs font-medium text-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Live Preview
          </div>
        </div>
      </div>

      {/* Reflection Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100/50 to-transparent pointer-events-none"></div>
    </div>
  );
}
