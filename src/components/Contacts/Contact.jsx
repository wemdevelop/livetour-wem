import React, { useState } from 'react';
import { Eye, EyeOff, Play, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LtContact = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally, validate or store form data here
    navigate('/thank-you');
  };

  return (
    <div className="w-full bg-[#fae1b6] py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between px-4 gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-[66px] font-bold text-gray-900 leading-tight mb-4">
            Let’s Connect and Explore Together
          </h1>
          <p className="text-[20px] mb-6">
            Close deals faster, reduce turnaround times, and automate your work with the easiest CRM solution for small businesses.
          </p>

          <button
            onClick={() => setShowVideo(true)}
            className="flex items-center gap-2 px-6 py-3 border border-red-500 text-red-500 hover:bg-red-50 rounded-full font-medium transition-all duration-200 text-sm sm:text-base"
          >
            Watch Overview
            <Play className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-[400px] p-6 rounded-xl">
          <p className="text-[19px] mb-4">15-day free trial. No credit card. No fuss.</p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 bg-white rounded-full"
              required
            />
            <input
              type="email"
              placeholder="Business Email"
              className="w-full bg-white px-4 py-3 rounded-full"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-full pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="flex space-x-2 items-center">
              <div className="relative w-1/3">
                <select className="appearance-none w-full px-4 py-3 bg-white border border-gray-300 rounded-full text-gray-700 cursor-pointer">
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+61">🇦🇺 +61</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-700">
                  ▼
                </div>
              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-2/3 px-4 py-3 bg-white border border-gray-300 rounded-full"
                required
              />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className="text-[14px] text-gray-600">
                I agree to the{' '}
                <a href="/termsservice" className="underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/PrivacyPolicy" className="underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-500 text-white px-9 py-3 rounded-full transition-colors duration-300"
              >
                Get a free demo
              </button>
            </div>
          </form>

          {/* Social Sign-in */}
          <div className="mt-4 text-center text-[15px]">
            or sign in using
            <div className="flex justify-center mt-2 gap-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
                className="w-5 h-5"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl h-[60vh]">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-[-40px] right-0 text-white text-3xl hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <div className="relative pt-[56.25%] h-full">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/04x3IvXub1A?autoplay=1"
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LtContact;
