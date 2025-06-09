
import React, { useEffect, useState } from 'react';
import { ExternalLink, Clock, Pause, Heart, Users, BookOpen, Gamepad2 } from 'lucide-react';

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

  const features = [
    {
      icon: Heart,
      title: "Sensory Products",
      description: "Specialized tools and toys designed for sensory development"
    },
    {
      icon: BookOpen,
      title: "Life Skills Training",
      description: "Structured programs to develop essential daily living skills"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Professional guidance for parents, therapists, and educators"
    },
    {
      icon: Gamepad2,
      title: "Digital Solutions",
      description: "Interactive apps and tools for engaging learning experiences"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
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
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          We are dedicated to empowering children with special needs through sensory products and digital solutions. 
          Our latest initiative is the <span className="font-semibold text-blue-600">Sarya ADL App</span> — 
          an Indian life skills training app for children with Autism, ADHD, and other neurodiverse needs.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* What We Offer Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-blue-600 mb-2">For Children</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Interactive learning experiences</li>
                <li>• Sensory development tools</li>
                <li>• Life skills training modules</li>
                <li>• Engaging digital content</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-green-600 mb-2">For Families & Professionals</h3>
              <ul className="text-gray-600 space-y-1 text-sm">
                <li>• Expert guidance and support</li>
                <li>• Training programs</li>
                <li>• Assessment tools</li>
                <li>• Community resources</li>
              </ul>
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
