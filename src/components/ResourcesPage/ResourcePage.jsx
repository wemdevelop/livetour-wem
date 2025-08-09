import React from "react";
import { HandHelping, PlayCircle } from "lucide-react";
import { RiGuideFill, RiUserCommunityFill } from "react-icons/ri";
import { FaQuora } from "react-icons/fa6";
import getstarted from '../../assets/clock-cartoon-illustration-removebg-preview.png'
import { GiDetour, GiGiftOfKnowledge } from "react-icons/gi";
import { MdModelTraining } from "react-icons/md";
import fasttrack from '../../assets/recruitment-agency-searching-job-applicants.png'
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResourcePages = () => {
  return (
    <div className=" min-h-screen text-black">
      {/* Header */}
      {/* <div className="text-center py-8 bg-red-900 text-white md:py-16 px-4">
        <h2 className="">
          Hi, how can we help?
        </h2>
        <p className="banner_inner_text">
          Everything you want to know about Livetour
        </p>
      </div> */}

      {/* Getting Started & Help Guide Row */}
      <div className=" text-black px-4 sm:px-6 lg:px-12 pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Getting Started - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <a
                href="#"
                className="border border-gray-400 rounded-lg flex flex-col sm:flex-row p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 h-full"
              >
                <div className="w-full sm:w-1/2 flex justify-center items-center mb-4 sm:mb-0">
                  <img
                    src={getstarted}
                    alt="Livetour Guide"
                    className="h-24 sm:h-32 md:h-40 object-contain"
                  />
                </div>
                <div className="w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl md:text-[24px] font-semibold mb-2">
                    Getting Started with Livetour
                  </h2>
                  <p className="sm:text-base md:text-[18px] xl:text-[18px] text-black mb-3">
                    Explore Livetour’s core features and terminology with our beginner-friendly interactive guide.
                  </p>
                  <Link to='/contactUs'>
                    <span className="text-green-600 cursor-pointer font-semibold text-[16px]">Learn more →</span>
                  </Link>
                </div>
              </a>
            </div>

            {/* Help Guide - Takes 1 column on large screens */}
            <div className="lg:col-span-1">
              <a
                href="#"
                className="border border-gray-400 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="h-9 w-9 sm:h-12 sm:w-12 bg-[#fae1b6] inline-flex items-center justify-center p-2 rounded-full mb-4">
                  <RiGuideFill className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-[24px] font-semibold mb-2">
                  Livetour Help Center
                </h2>
                <p className="text-sm sm:text-base md:text-[18px] flex-grow">
                  Discover detailed guides and tutorials to effectively configure and manage your Livetour experience.
                </p>
                <Link to="/helpcenter"><span className="text-green-600 font-semibold mt-4 cursor-pointer inline-block text-[16px]">Learn more →</span></Link>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* FAQs & Videos Row */}
      <div className="bg-white text-black px-4 sm:px-6 lg:px-12 pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
            {/* FAQs Card - Takes 1 column */}
            <div className="lg:col-span-1">
              <a
                href="#"
                className="border border-gray-400 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
              >
                <div className="h-12 w-12 sm:h-12 sm:w-12 mb-4 bg-[#fae1b6] inline-flex items-center justify-center p-2 rounded-full">
                  <FaQuora className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold mb-4">FAQs</h2>
                <p className="text-sm sm:text-base md:text-[18px] leading-6 mb-4 flex-grow">
                  Browse the frequently asked questions and quickly resolve the most
                  common problems you face in Livetour.
                </p>
                <Link to="/pricing"> <span className="text-green-600 font-semibold text-[16px] ">
                  Learn more →
                </span>
                </Link>
              </a>
            </div>

            {/* Videos Card - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="rounded-lg p-4 sm:p-6 text-black bg-[#fae1b6] h-full">
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Text Section */}
                  <div className="w-full lg:w-1/2 lg:pr-6 flex flex-col justify-between mb-4 lg:mb-0">
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold mb-2">Videos</h2>
                      <p className="text-[18px] sm:text-base lg:text-lg text-black/90 leading-6">
                        Explore our extensive video library and watch our detailed
                        setup guides and feature walkthroughs.
                      </p>
                    </div>
                    <Link to="/videos">
                      <span className="text-green-500 font-semibold cursor-pointer text-[16px] mt-4 lg:mt-0">
                        Watch more videos →
                      </span>
                    </Link>
                  </div>

                  {/* Video Thumbnail Section */}
                  <div className="w-full lg:w-1/2 bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="relative">
                      <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt="Set up CRM video"
                          className="w-full h-32 sm:h-40 lg:h-44 object-cover"
                        />
                        <PlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-1 w-10 h-10 sm:w-12 sm:h-12" />
                      </a>
                      <span className="absolute bottom-1 right-2 text-xs bg-black text-white px-1 py-0.5 rounded">
                        00:51
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="text-md text-gray-500">Getting started</p>
                      <p className="text-md sm:text-base font-semibold leading-tight">
                        Set up your CRM in under 30 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Columns Row */}
      <div className="bg-white text-black px-4 sm:px-6 lg:px-12 pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Knowledge Base */}
          <a
            href="#"
            className="border border-gray-400 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="h-12 w-12 sm:h-14 sm:w-14 mb-4 bg-[#fae1b6] inline-flex items-center justify-center p-2 rounded-full">
              <GiGiftOfKnowledge className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-[24px] font-semibold mb-2">Knowledge Base</h3>
            <p className="text-sm sm:text-base lg:text-[18px] flex-grow">
              Explore detailed articles and solutions to common Livetour setup and usage questions.
            </p>
            <Link to="/blog">
              <span className="text-green-600 mt-4 cursor-pointer font-semibold inline-block text-[16px]">Browse articles →</span>
            </Link>
          </a>

          {/* Video Tutorials */}
          <a
            href="https://www.youtube.com/watch?v=04x3IvXub1A"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-400 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="h-12 w-12 sm:h-14 sm:w-14 mb-4 bg-[#fae1b6] inline-flex items-center justify-center p-2 rounded-full">
              <PlayCircle className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <h2 className="text-xl sm:text-2xl md:text-[24px] font-semibold mb-2">
              Video Tutorials
            </h2>

            <p className="text-sm sm:text-base md:text-[18px] flex-grow">
              Watch step-by-step Livetour video tutorials for easier onboarding and advanced tips.
            </p>

            <span className="text-green-600 mt-4 inline-block text-[16px] font-semibold">
              Watch videos →
            </span>
          </a>


          {/* Live Training */}
          <a
            href="#"
            className="border border-gray-400 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col sm:col-span-2 lg:col-span-1"
          >
            <div className="h-12 w-12 sm:h-14 sm:w-14 mb-4 bg-[#fae1b6] inline-flex items-center justify-center p-2 rounded-full">
              <MdModelTraining
                className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[24px] font-semibold mb-2">Livetour Features</h2>
            <p className="text-sm sm:text-base md:text-[18px] flex-grow">
              Discover the powerful features of Livetour including itinerary building, lead management, automated vouchers, and more.
            </p>
            <Link to="/features">
              <span className="text-green-600 mt-4 font-semibold inline-block text-[16px]">
                Explore features →
              </span>
            </Link>

          </a>
        </div>
      </div>



      {/* Developer Center + User Community Row */}
      <div className="bg-white text-black px-4 sm:px-6 lg:px-12 pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Developer Center - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <div className="border border-gray-400 rounded-lg p-4 sm:p-6 bg-white hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-12 w-12 sm:h-12 sm:w-12 bg-[#fae1b6] inline-flex items-center justify-center p-2 rounded-full flex-shrink-0">
                    <GiDetour className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold">Livetour Developer Center</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* API Documentation */}
                  <div className="md:pr-6 md:border-r-2 border-gray-300">
                    <h3 className="text-lg sm:text-xl md:text-[22px] font-semibold mb-2">API Documentation</h3>
                    <p className="text-sm sm:text-base lg:text-lg mb-4">
                      Integrate Livetour with your platform or tools using our comprehensive and easy-to-follow API docs.
                    </p>
                    <span className="text-green-600 text-[16px] font-semibold">Explore APIs →</span>
                  </div>

                  {/* Toppings Development */}
                  <div className="md:pl-6">
                    <h3 className="text-lg sm:text-xl md:text-[22px]  font-semibold mb-2">Toppings Development</h3>
                    <p className="text-sm sm:text-base md:text-[18px] mb-4">
                      Build and customize Toppings to enhance Livetour’s features. Share your Toppings in the Marketplace and monetize your creations.
                    </p>
                    <span className="text-green-600 font-semibold text-[16px]">Start building →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* User Community - Takes 1 column */}
            <div className="lg:col-span-1">
              <div className="rounded-lg p-4 sm:p-6 bg-orange-50 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-12 w-12 sm:h-12 sm:w-12 bg-[#fae1b6] inline-flex items-center justify-center p-2 rounded-full flex-shrink-0">
                    <RiUserCommunityFill className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold">Livetour Community</h2>
                </div>
                <p className="text-sm sm:text-base lg:text-lg mb-6 flex-grow">
                  Connect with other Livetour users, share insights, ask questions, and get support from our growing global community.
                </p>
                <Link to="/contactUs"><button className="bg-green-600 text-white cursor-pointer text-[16px] font-semibold px-4 py-2 rounded-full w-fit">
                  Join the Community →
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Final Row - All Set & Jumpstart */}
      <div className="bg-white text-black px-4 sm:px-6 lg:px-12 pt-6 md:pt-12 pb-6 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* All set with Livetour - Takes 1 column */}
            <div className="lg:col-span-1">
              <div className="border border-gray-400 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="h-12 w-12 sm:h-12 sm:w-12 bg-[#fae1b6] inline-flex items-center justify-center p-2 rounded-full flex-shrink-0">
                    <FaQuestion className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-[24px] font-bold">
                    All set with Livetour?<br />Here’s what’s next!
                  </h2>
                </div>
                <p className="text-[18px] mb-7 flex-grow">
                  Discover product updates, onboarding tips, advanced walkthroughs, and expert advice to get the most out of Livetour.
                </p>
                <span className="text-green-600 font-semibold text-[16px]">
                  Explore growth resources →
                </span>
              </div>
            </div>

            {/* Jumpstart Implementation Program - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="border border-gray-400 rounded-lg hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex flex-col sm:flex-row h-full">

                  {/* Image */}
                  <div className="w-full sm:w-1/2">
                    <img
                      src={fasttrack}
                      alt="Livetour Jumpstart Program"
                      className="w-full h-48 sm:h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                    />
                  </div>

                  {/* Text content */}
                  <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                    <h2 className="text-xl sm:text-2xl md:text-[24px] mb-4 font-bold">
                      Fast-Track Your Livetour Success
                    </h2>
                    <p className="text-[18px] mb-4">
                      Launch your Livetour experience with confidence. Our onboarding specialists will guide you through setup, customization, and best practices — all tailored to your business goals.
                    </p>
                    <span className="text-green-600 font-semibold text-[16px]">Get started now →</span>
                  </div>


                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default ResourcePages;