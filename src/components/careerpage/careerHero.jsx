import React from 'react';
import carerImg from '../../assets/Untitled design (3).png'
import card1 from '../../assets/img/career/trip3.png'
import { Link } from 'react-router-dom';

const CareerDetails = () => {
  return (
    <div className="bg-white py-10 md:py-20 md:px-0 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center">
          Discover Infosys Live Tour: Experience Innovation in Action
        </h2>

        <div className="text-sm mb-7 mt-5">
          <p className='text-gray-800 text-base leading-relaxed mb-4'>
            Want to see where innovation truly lives? Join the Infosys Live Tour – your behind-the-scenes look at how we’re shaping the future with AI, cloud, and digital technologies. From cutting-edge workspaces to real-time solutions, this experience gives you a front-row seat to life at Infosys.
          </p>
          <p className='text-gray-800 text-base leading-relaxed mb-4'>
            Whether you're an aspiring techie or a future business leader, the Live Tour offers a unique opportunity to connect, learn, and get inspired. Discover how 250,000+ professionals thrive at Infosys – and imagine yourself in the story we’re building. This isn’t just a visit – it’s your first step into what's next.
          </p>
        </div>
        <div className="flex w-full bg-[#943332] my-10 rounded-3xl overflow-hidden">
          <div className="w-full  text-white p-5 md:p-10 flex flex-col gap-3">
            <h3 className="">#ThriveAtInfosys</h3>
            <div className="caption_text !text-white ">Everyone thrives when</div>
            <div className="text-base font-light">#WellnessMatters | #PotentialMatters | #BalanceMatters | #OpportunityMatters</div>
            <button className="btn-white-outline mt-3 md:mt-6 w-fit">Discover More</button>
          </div>
          <div className="w-full hidden md:block h-fit relative">
            <img src={card1} className='h-80 absolute -top-2 right-0' alt="" />
          </div>
        </div>
        {/* <div className=" hidden md:block h-[416px] mx-auto relative rounded-lg overflow-hidden">

          <img
            src={carerImg}
            alt="Career"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center px-10 text-white z-10">
            <h2 className="text-3xl font-bold mb-2">#ThriveAtInfosys</h2>
            <p className="text-[18px] font-semibold mb-3">Everyone thrives when</p>
            <p className="text-[18px] text-gray-200 mb-6">
              #WellnessMatters | #PotentialMatters | #BalanceMatters | #OpportunityMatters
            </p>
            <button className="border border-white rounded-full cursor-pointer px-4 py-2 w-42 text-[16px] hover:bg-white hover:text-red-950 transition">
              Discover More
            </button>
          </div>
        </div> */}
        <div className="w-full flex flex-col items-center justify-center text-center md:px-4 md:pt-10">

          <p className="text-gray-800 text-base leading-relaxed mb-4">
            We’re building something amazing — and so is this page! Our careers section is currently under development, but we’re excited to share new opportunities with you very soon.
          </p>
          <p className="text-gray-800 text-base leading-relaxed mb-4">
            Until then, stay connected and explore our vision, values, and what makes working with us truly unique.
          </p>
          <Link to='/'><button className="btn-icon-hover-red">
            Back to Home
          </button>
          </Link>
        </div>



      </div>
    </div>
  );
};

export default CareerDetails;
