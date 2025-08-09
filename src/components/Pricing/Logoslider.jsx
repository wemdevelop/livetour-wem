import React from 'react';
import '../../styles/LogoSlider.css';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';
 // Ensure this CSS file contains animation keyframes

function LogoSlider() {
  const topImages = [
    '../../../src/assets/clients/andaman_triangle-removebg-preview.png',
    '../../../src/assets/clients/globe_travel-removebg-preview.png',
    '../../../src/assets/clients/star-dmc-removebg-preview.png',
    '../../../src/assets/clients/aston-trips-removebg-preview.png',
    '../../../src/assets/clients/celebrate-vacation-removebg-preview.png',
    '../../../src/assets/clients/aklavya-online-removebg-preview.png',
    '../../../src/assets/clients/myown-holidays-removebg-preview.png',
    '../../../src/assets/clients/reeya-signature-holidays-removebg-preview.png',
    '../../../src/assets/clients/spotlight-removebg-preview.png',
    '../../../src/assets/clients/brandSays5-removebg-preview.png',
  ];

  const bottomImages = [
    '../../../src/assets/clients/file-removebg-preview.png',
    '../../../src/assets/clients/brandSays1-removebg-preview.png',
     '../../../src/assets/clients/brandSays10-removebg-preview.png',
         '../../../src/assets/clients/brandSays11-removebg-preview.png',

       '../../../src/assets/clients/logo-rover-removebg-preview.png',
            '../../../src/assets/clients/bakkah-logo-removebg-preview.png',

                 '../../../src/assets/clients/mystical-logo-removebg-preview.png',

                      '../../../src/assets/clients/go-logo-removebg-preview.png',

                           '../../../src/assets/clients/trip-tailor-logo-removebg-preview.png',
     '../../../src/assets/clients/trinity-logo-removebg-preview.png',
     '../../../src/assets/clients/snowsun-logo-removebg-preview.png',


  ];

  const topDisplay = [...topImages, ...topImages, ...topImages, ...topImages];
  const bottomDisplay = [...bottomImages, ...bottomImages, ...bottomImages, ...bottomImages];

  return (
    <div className="w-full bg-white py-12">
      {/* Top Text Section */}
<div className="container mx-auto px-4 text-center mb-12">
  <h2 className="max-w-7xl mx-auto">
    Proudly powering the growth of <br className='hidden md:block' />
    <span className="text-red-600">30,000+ small businesses</span> across <span className="text-red-600">150+ countries.</span>
  </h2>


</div>


      {/* Top Slider */}
      <div className="container mx-auto px-4 md:mb-12 md:w-[60%]">
        <div className="w-full mt-4 overflow-hidden group">
          <div className="scroll-left-to-right flex w-max gap-8 group-hover:[animation-play-state:paused]">
            {topDisplay.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`top-slide-${idx}`}
                className="flex-none w-[150px] h-[105px] object-contain rounded"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Slider */}
      <div className="container mx-auto px-4 md:w-[60%]">
        <div className="container overflow-hidden group">
          <div className="scroll-right-to-left flex w-max gap-8 group-hover:[animation-play-state:paused]">
            {bottomDisplay.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`bottom-slide-${idx}`}
                className="flex-none w-[150px] h-[105px] object-contain rounded"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSlider;
