
import React, { useState, useEffect } from 'react';

const Blog = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const phrases = [
    "Live Tour is Coming Soon...",
    "Experience Virtual Reality...",
    "Explore Like Never Before...",
    "Get Ready for Something Amazing..."
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < currentPhrase.length) {
        setDisplayText(currentPhrase.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(currentPhrase.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (!isDeleting && currentIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, phraseIndex, phrases]);

  return (
    <div className="min-h-screen bg-[#fae1b6] flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}


      <div className="text-center z-10 px-6">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-red mb-8 tracking-tight">LIVE TOUR
        </h1>

        {/* Typing Animation */}
        <div className="h-16 md:h-20 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-light text-red-800 min-h-[1.2em]">
            {displayText}
            <span className="animate-pulse text-black">|</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-12 leading-relaxed">
          We're crafting an incredible virtual tour experience that will revolutionize
          how you explore and discover new places. Stay tuned for something extraordinary!
        </p>

        {/* CTA Button */}
        <div className="space-y-6">
          <button className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Notify Me When Ready
          </button>


        </div>

        {/* Coming Soon Badge */}
        <div className="mt-16">
          <div className="inline-flex items-center px-6 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full border border-white border-opacity-20">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-black font-medium">Currently in Development</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}

    </div>
  );
};

export default Blog;
