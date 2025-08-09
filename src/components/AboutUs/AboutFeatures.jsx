import React from "react";
import { Link } from "react-router-dom";
import travelImg from "../../assets/Big_diverse_family_members-removebg-preview.png";

const AboutFeatures = () => {
  return (
    <div className="container mx-auto flex bg-white my-20">
      {/* Left Side */}
      <div className="bg-gradient-to-br w-2xl  rounded-3xl from-red-500 via-red-700 to-yellow-100 text-white flex flex-col justify-center p-6 sm:p-10 lg:p-16 relative overflow-hidden">
        {/* Background Circles */}
        {/* <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-20 h-20 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 border-4 border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border-4 border-white rounded-full"></div>
        </div> */}

        {/* Text Content */}
        <div className="relative z-10 max-w-3xl">
          <h2 className="!text-4xl !leading-12">
            The best platform
            for  &nbsp;
            <span className="border-b-4 border-white inline-block pb-1">
              tour companies
            </span>{" "}
            of &nbsp;
            <span className="border-b-4 border-white inline-block pb-1">
              all sizes
            </span>{" "}
            to
            <span className="border-b-4 border-white inline-block pb-1">
              grow & scale
            </span>
          </h2>
          <Link to="/contactUs">
            <button className="btn-white-outline mt-6">
              SIGN UP FOR FREE
            </button>
          </Link>
        </div>
      </div>
      {/* Right Side */}
      <div className="bg-white flex flex-col justify-between p-6 sm:p-10 lg:p-16 w-full">
        {/* Text Section */}
        <div className="mb-6 w-full max-w-full text-center lg:text-left">
          <p className="text-gray-700 text-lg font-medium leading-relaxed">
            LivetourPRO offers travel agencies and tour companies a powerful
            platform to organize, automate, and grow. From managing inquiries
            and bookings to building customer loyalty our tools are designed for
            travel businesses of all types and sizes.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-grow flex items-end">
          <img
            src={travelImg}
            alt="Livetour platform users"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

    </div>
  );
};

export default AboutFeatures;
