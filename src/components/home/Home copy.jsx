import React, { useState } from 'react';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tabData } from '../../Data/Home1Data';


const TabCarousel = () => {
  const [activeTab, setActiveTab] = useState(tabData[0].name);

  const activeTabData = tabData.find((tab) => tab.name === activeTab);

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">

        {/* Title */}
        <div className="text-center mb-10 mt-10 md:mt-0 sm:mb-14 md:mb-16 px-4">
          <h2 className="">
            LivetourPRO Can Make Your Travel Business Smarter.
          </h2>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-8 sm:mb-12 md:mb-16 px-2 sm:px-4 text-sm sm:text-base">
          {tabData.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-2 sm:px-6 sm:py-3 cursor-pointer rounded-full font-medium transition-all duration-300
                ${activeTab === tab.name
                  ? 'bg-gray-900 text-white shadow-lg scale-105'
                  : 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:scale-105'
                }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mb-16 bg-[#fae1b6] rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-[1.5fr_2.5fr] gap-0 min-h-[600px]">
            {/* Text */}
            <div className="flex items-center p-6 sm:p-8 lg:p-10">
              <div className="w-full">
                <h2 className="text-black font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 leading-tight">
                  {activeTabData.title}
                </h2>
                <p className="text-black text-base sm:text-lg leading-relaxed">
                  {activeTabData.description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center p-4 sm:p-6 lg:p-8">
              <img
                src={activeTabData.image}
                alt={activeTabData.name}
                className="w-full h-auto max-h-[500px] object-contain rounded-2xl shadow-xl transition-all duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Link to="/contactUs">
              <button
                className="group cursor-pointer bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Get Started For Free
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
            <Link to="/features">
              <button
                className="group cursor-pointer bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                View All Features
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>



    </div>
  );
};

export default TabCarousel;
