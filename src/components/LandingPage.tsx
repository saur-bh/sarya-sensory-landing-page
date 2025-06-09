
import React, { useEffect, useState } from 'react';
import { ExternalLink, Clock, Pause } from 'lucide-react';

const LandingPage = () => {
  const [countdown, setCountdown] = useState(5);
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    if (!isTimerActive) return;

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
  }, [isTimerActive]);

  const handleRedirect = () => {
    window.location.href = 'https://thesarya.com';
  };

  const stopTimer = () => {
    setIsTimerActive(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Logo */}
        <img 
          src="/lovable-uploads/cb010c0f-1c65-4673-bf7d-f3ea3609ac90.png"
          alt="Sarya Logo"
          className="w-24 h-24 mx-auto rounded-full shadow-lg"
        />

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Welcome to Saras Sensory Store Pvt Ltd
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed">
          We are dedicated to empowering children with special needs through sensory products and digital solutions. 
          Our latest initiative is the <span className="font-semibold text-blue-600">Sarya ADL App</span> — 
          an Indian life skills training app for children with Autism, ADHD, and other neurodiverse needs.
        </p>

        {/* Redirect Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
          {isTimerActive ? (
            <>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Redirecting in</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">
                  {countdown}s
                </span>
              </div>
              <button
                onClick={stopTimer}
                className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors mx-auto mb-4"
              >
                <Pause className="w-4 h-4" />
                <span>Stop Timer</span>
              </button>
            </>
          ) : (
            <p className="text-gray-600 mb-4">Timer stopped. Click below to visit Sarya app</p>
          )}
          
          <button
            onClick={handleRedirect}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mx-auto"
          >
            <span>Visit Sarya App</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Footer */}
        <footer className="pt-8 text-gray-500 text-sm">
          © 2025 Saras Sensory Store Pvt Ltd. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
