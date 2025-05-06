import React from 'react';

function Hero() {
  return (
    <div className="w-full min-h-screen bg-blue-500 text-white flex items-center justify-center py-24 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Benvenuto nel mio Portfolio</h1>
          <p className="text-lg mb-6">Specializzato in sviluppo Front-End con React, TypeScript e altre tecnologie moderne</p>
          <a
            href="#tecnologie"
            className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-all"
          >
            Scopri le Tecnologie
          </a>
        </div>
      </div>
  );
}

export default Hero; 