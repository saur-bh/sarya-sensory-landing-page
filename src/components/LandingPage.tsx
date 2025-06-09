
import React, { useEffect, useState } from 'react';
import { ExternalLink, Clock } from 'lucide-react';

const LandingPage = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = 'https://thesarya.com';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    window.location.href = 'https://thesarya.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/cb010c0f-1c65-4673-bf7d-f3ea3609ac90.png"
              alt="Sarya Logo"
              className="w-32 h-32 mx-auto rounded-full shadow-lg bg-white p-4 hover:scale-105 transition-transform duration-300"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-green-500 bg-clip-text text-transparent">
                Saras Sensory Store Pvt Ltd
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We are dedicated to empowering children with special needs through sensory products and digital solutions. 
              Our latest initiative is the{' '}
              <span className="font-semibold text-purple-600">Sarya ADL App</span>{' '}
              — an Indian life skills training app for children with Autism, ADHD, and other neurodiverse needs.
            </p>
          </div>

          {/* Redirect Notice */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 max-w-lg mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Clock className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-600">Redirecting in</span>
              <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm font-bold">
                {countdown}s
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              You will be automatically redirected to our Sarya app
            </p>
            <button
              onClick={handleRedirect}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Visit Sarya App Now</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Sensory Products</h3>
              <p className="text-gray-600 text-sm">Specialized tools and toys designed for sensory development</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Digital Solutions</h3>
              <p className="text-gray-600 text-sm">Innovative apps and digital tools for learning and development</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Life Skills Training</h3>
              <p className="text-gray-600 text-sm">Comprehensive ADL training through our Sarya app</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50 py-6">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Saras Sensory Store Pvt Ltd. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Empowering every child with care
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
