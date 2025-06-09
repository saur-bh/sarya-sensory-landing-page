
import React, { useEffect, useState } from 'react';
import { ExternalLink, Clock, Pause, Smartphone, ArrowRight } from 'lucide-react';

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
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Logo */}
        <img 
          src="/lovable-uploads/cb010c0f-1c65-4673-bf7d-f3ea3609ac90.png"
          alt="Sarya Logo"
          className="w-24 h-24 mx-auto rounded-full shadow-lg"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800">
          Saras Sensory Store
        </h1>

        {/* Main Message */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">We're Going Digital!</h2>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            We are transitioning from physical sensory products to focus on our 
            <span className="font-bold text-blue-600"> Digital Solutions</span>. 
            Our new <span className="font-semibold text-green-600">Sarya ADL App</span> provides 
            better, more effective life skills training for children with special needs.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-blue-800 mb-3">Why Digital is Better:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                <span>Interactive & Engaging</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                <span>Accessible Anywhere</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                <span>Personalized Learning</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-4 h-4 mr-2" />
                <span>Regular Updates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Redirect Section */}
        <div className="bg-white rounded-xl p-6 shadow-lg max-w-md mx-auto">
          {isTimerActive ? (
            <>
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">Redirecting to Sarya App in</span>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold text-lg">
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
            <p className="text-gray-600 mb-4">Timer stopped. Ready when you are!</p>
          )}
          
          <button
            onClick={handleRedirect}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mx-auto w-full justify-center"
          >
            <span>Experience Sarya App</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Footer */}
        <footer className="pt-6 text-gray-500 text-sm">
          © 2025 Saras Sensory Store Pvt Ltd. Embracing the digital future.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
