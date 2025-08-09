import React, { useState } from "react";

import { MoveRight, Play } from "lucide-react";
import arrowright from "../../assets/contacts/arrow-with-scribble__1_-removebg-preview.png";

import purpleImg from "../../assets/features/liverememebr_files/purple.png";
import blueImg from "../../assets/features/liverememebr_files/blue.png";
import growthImg from "../../assets/features/liverememebr_files/growthstatus.png";
import spinImage from "../../assets/clients/canvas-screen-crm-home-india.svg";
import { Link } from "react-router-dom";



const data = [
  {
    percent: "27%",
    title: "Increased productivity",
    subtitle: "Do more in less time",
    color: "bg-[#DAD0ED]",
    image: purpleImg,
  },
  {
    percent: "50%",
    title: "Faster implementation",
    subtitle: "Get started in no time",
    color: "bg-[#C9E8E7]",
    image: blueImg,
  },
  {
    percent: "71%",
    title: "Saved on licensing fees",
    subtitle: "Big savings for a lifetime",
    color: "bg-[#EDA295]",
    image: growthImg,
  },
];

const GrowthStats = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="bg-[#fdf1dc] min-h-screen flex flex-col mt-20">
      {/* Top Section */}
      <div className="flex-1 flex flex-col items-center justify-start pt-10 pb-0">
        <h2 className="">
          Unlock Your Business Potential
        </h2>
        <p className="text-[18px] sm:text-lg text-center mb-6 max-w-xl mx-auto px-4">
          See how our solutions help you increase productivity, save costs, and
          implement faster—real results backed by data.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4 justify-center items-center max-w-2xl mx-auto">
          <Link to="/contactUs">
            <button className="group bg-red-600 cursor-pointer hover:bg-red-700 text-white px-3 py-3 rounded-full flex items-center justify-center gap-1 sm:w-auto text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
              Get Started For Free
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>

          <Link to="/features">
            <button className="bg-gray-900 hover:bg-gray-800 cursor-pointer text-white px-4 py-3 rounded-full flex items-center justify-center sm:w-auto text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
              View All Features
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>

        {/* "Grow with Zoho" Text and Arrow */}
      </div>

      {/* Stats Section */}
      <div className="relative h-[60vh] md:block hidden md:h-[400px] sm:h-[500px] lg:h-[600px]  overflow-hidden">
        <div className="text-center md:w-[20vh] md:h-[20vh] md:mt-[2%] mb-8 md:ml-[35%]">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
            Grow with LivetourPRO
          </h3>
          <div className="flex justify-center">
            <div className="w-16 h-8 flex items-center justify-center">
              <img src={arrowright} alt="" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center px-4">
          {data.map((item, index) => {
            const sizes = {
              0: {
                width: "md:w-[220px] w-full sm:w-[320px] lg:w-[300px]",
                height: "h-[290px] sm:h-[320px] lg:h-[380px]",
              },
              1: {
                width: "md:w-[320px] w-full sm:w-[360px] lg:w-[300px]",
                height: "h-[320px] sm:h-[360px] lg:h-[490px]",
              },
              2: {
                width: "md:w-[360px] w-full sm:w-[400px] lg:w-[300px]",
                height: "h-[460px] sm:h-[400px] lg:h-[590px]",
              },
            };

            return (
              <div
                key={index}
                className={`
                  ${sizes[index].width} ${sizes[index].height}
                  ${item.color}
                  rounded-t-full
                  flex flex-col justify-start items-center
                  relative
                  -mx-4 sm:-mx-8 lg:-mx-0
                  pt-8 sm:pt-12 lg:pt-16
                `}
                style={{
                  marginBottom: index === 1 ? "-20px" : "0",
                  zIndex: index === 1 ? 10 : 1,
                }}
              >
                <div className="text-center px-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-2">
                    {item.percent}
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-1">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base text-gray-700">
                    {item.subtitle}
                  </p>
                </div>

                {/* Bottom Image */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                  {index === 0 && (
                    <div className="absolute top-[-190px]  left-1/2 transform -translate-x-1/2">
                      <div className="w-[33vh] rounded-lg  flex items-center justify-center">
                        <div className="image-inner-three   rounded overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-[230px] h-[40vh] top-[40px] object-contain"
                          />{" "}
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="absolute top-[-210px]  left-1/2 transform -translate-x-1/2">
                      <div className="w-[33vh] rounded-lg  flex items-center justify-center">
                        <div className="image-inner-three   rounded overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-[230px] h-[40vh] top-[40px] object-contain"
                          />{" "}
                        </div>
                      </div>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="absolute top-[-310px] left-1/2 transform -translate-x-1/2">
                      <div className="w-[33vh] rounded-lg flex items-center justify-center">
                        <div className="image-inner-three   rounded overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-[230px] h-[40vh] top-[40px] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex md:hidden flex-col  ">
        <div className="bg-[#DAD0ED] w-[50%] text-center  py-6 px-6  h-36 rounded-r-full flex flex-col">
          <div className="text-3xl text-center">27%</div>
          <div className="text-xl font-semibold leading-6">
            Increased Productvity
          </div>
          <div className="text-sm font-medium">Do more in less time</div>
        </div>
        <div className="bg-[#C9E8E7] w-[70%] text-center py-6 px-6  h-36 rounded-r-full flex flex-col">
          <div className="text-3xl text-center">27%</div>
          <div className="text-xl font-semibold">Increased Productvity</div>
          <div className="text-sm font-medium">Do more in less time</div>
        </div>
        <div className="bg-[#EDA295] w-[85%] text-center  py-6 px-6 h-36 rounded-r-full flex flex-col">
          <div className="text-3xl text-center">27%</div>
          <div className="text-xl font-semibold">Increased Productvity</div>
          <div className="text-sm font-medium">Do more in less time</div>
        </div>
      </div>

      {/* Take Us for a Spin Section */}
      <div className="w-full md:min-h-[80vh] flex flex-col items-center justify-between bg-gradient-to-br from-blue-100 via-purple-50 to-blue-200 px-4 pb-0 md:pb-0 py-12">
        <div className="w-full max-w-4xl flex gap-5 md:gap-0  flex-col items-center justify-center text-center mb-0 md:mb-0">
          <h2 className="text-blue-600">
            Take us for a spin!
          </h2>
        <button
  onClick={() => setShowVideo(true)}
  className="flex items-center  gap-2 cursor-pointer px-6 py-3 border border-red-500 text-red-500 hover:bg-red-50 rounded-full font-medium transition-all duration-200 text-sm sm:text-base"
>
  Watch Overview
  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
</button>

        </div>

        <div className="w-full md:max-w-6xl mx-auto">
          <div className="mt-10 rounded-2xl overflow-hidden  ">
            <img
              src={spinImage}
              alt="Take us for a spin"
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
  {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={() => setShowVideo(false)}
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50 hover:text-red-400"
          >
            ✕
          </button>

          {/* Video container */}
          <div className="w-[90vw] h-[90vh] relative">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/04x3IvXub1A?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GrowthStats;
