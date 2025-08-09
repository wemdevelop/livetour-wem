import React from 'react';
// import acfLogo from '../assets/acf-events-newlogo-removebg-preview.png';
// import lisbonLogo from '../assets/lisbonsintratours-removebg-preview.png';
// import cystercareLogo from '../assets/cystercare-removebg-preview.png';
// import edenridgeLogo from '../assets/edenridge-logo-2x-removebg-preview.png';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveRight } from 'lucide-react';

const Impact = () => {
  return (
    <div className="md:container md:mx-auto mt-5 mx-4 md:mt-20">
      {/* Heading */}
      <div className=" text-center mb-12">
        <h2 className="">
          Start seeing real impact. Just like our customers.
        </h2>
      </div>

      {/* Impact Cards without gap */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:gap-0 gap-6 md:grid-cols-4">
        {/* Card 1 */}
        <div
          className="rounded-xl p-6 flex flex-col justify-between xl:h-[200px] shadow-none"
          style={{ backgroundImage: 'linear-gradient(to bottom, white, #fae1b6)' }}
        >
          <div>
            <h3 className="">2x</h3>
            <p className="caption_text mt-4">
              Tour operator EcoTrails doubled its bookings using LiveTourPRO automation.
            </p>
          </div>
          {/* <img src={acfLogo} alt="EcoTrails Logo" className="w-24 h-auto mt-4" /> */}
        </div>

        {/* Card 2 */}
        <div
          className="rounded-xl p-6 flex flex-col justify-between xl:h-[200px] shadow-none"
          style={{ backgroundImage: 'linear-gradient(to bottom, #fae1b6, white)' }}
        >
          <div>
            <h3 className="">5 Hours</h3>
            <p className="caption_text mt-4">
              Lisbon City Tours saves 5 hours weekly by streamlining live bookings.
            </p>
          </div>
          {/* <img src={lisbonLogo} alt="Lisbon City Tours Logo" className="w-20 h-auto mt-4" /> */}
        </div>

        {/* Card 3 */}
        <div
          className="rounded-xl p-6 flex flex-col justify-between xl:h-[200px] shadow-none"
          style={{ backgroundImage: 'linear-gradient(to bottom, white, #fae1b6)' }}
        >
          <div>
            <h3 className="">+35%</h3>
            <p className="caption_text mt-4">
              AdventureHub increased livetourPRO conversions by 35%.
            </p>
          </div>
          {/* <img src={cystercareLogo} alt="AdventureHub Logo" className="w-28 h-auto mt-4" /> */}
        </div>

        {/* Card 4 */}
        <div
          className="rounded-xl p-6 flex flex-col justify-between xl:h-[200px] shadow-none"
          style={{ backgroundImage: 'linear-gradient(to bottom, #fae1b6, white)' }}
        >
          <div>
            <h3 className="">+20%</h3>
            <p className="caption_text mt-4">
              SafariX saw a 20% increase in tour package sales with LivetourPRO.
            </p>
          </div>
          {/* <img src={edenridgeLogo} alt="SafariX Logo" className="w-28 h-auto mt-4" /> */}
        </div>
      </div>


      {/* CTA Buttons */}
      <div className="max-w-6xl mx-auto mt-5 md:mt-16 flex flex-col items-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <Link to="/contactUs">
            <button className="btn-icon-hover-red">
              Get Started For Free
              <ArrowRight className="w-5 h-5 " />
            </button>
          </Link>

          <Link to="/pricing">
            <button className="btn-icon-hover-black">
              See our pricing
              <ArrowRight className="w-5 h-5 " />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Impact;
