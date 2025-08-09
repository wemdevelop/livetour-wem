import React from "react";
import { ArrowRight } from "lucide-react";
import bgPattern from "../../assets/xdxfdc1.jpg";
import meetingImg from "../../assets/11677876-removebg-preview.png";

const industries = [
  "Adventure Tours",
  "Cultural Experiences",
  "Luxury Travel",
  "Solo Travelers",
  "Family Vacations",
  "Wildlife & Nature",
  "Group Travel",
  "Weekend Getaways",
  "Cruise Packages",
];

const Industries = () => {
  return (
    <>
      {/* Section 1: Travel Categories */}
      <div
        className="text-white pt-20 pb-12 sm:py-24 px-4 md:px-10 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgPattern})`, backgroundColor: "#0b1c3f" }}
      >
        <h2 className="text-[22px] sm:text-3xl md:text-5xl font-bold leading-snug mb-6">
          Deliver unforgettable travel{" "}
          <span className="text-blue-400">experiences across categories</span>
        </h2>

        <p className="text-white text-[15px] sm:text-base md:text-lg max-w-4xl mx-auto mb-8 leading-relaxed px-2">
          Every traveler is unique, with different expectations and dreams. LivetourPRO combines breathtaking destinations,
          seamless planning, and expert coordination to craft personalized adventures. Whether it's solo journeys,
          family escapes, or group explorations—we’ve got the perfect package for everyone.
        </p>

        {/* Industry Buttons (Larger and Responsive) */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto px-2 mb-12 sm:mb-16">
          {industries.map((item, index) => (
            <button
              key={index}
              className="flex items-center justify-center gap-2 bg-white text-black
                         px-6 py-3 sm:px-8 sm:py-3.5 w-full md:w-auto md:px-10 md:py-4
                         rounded-full text-[17px] sm:text-[17px] md:text-[18px]
                         font-semibold transition-all hover:bg-gray-100"
            >
              {item}
              <ArrowRight size={20} />
            </button>
          ))}
        </div>
      </div>

      {/* Section 2: Team Panel (tightened spacing for mobile) */}
      <div
        className="bg-cover bg-center pt-0 pb-24 px-3 md:px-3"
        style={{ backgroundImage: `url(${bgPattern})` }}
      >
        <div className="max-w-7xl mx-auto bg-[#fae1b6] rounded-2xl p-5 sm:p-10 md:p-16 grid grid-cols-1 lg:grid-cols-2 items-center relative overflow-hidden">
          {/* Text Block */}
          <div>
            <h2 className="mb-3">
              The ultimate platform for{" "}
              <span className="">your travel planning team</span>
            </h2>
            <p className="text-black text-sm sm:text-md md:text-[18px] leading-relaxed mb-9">
              Are you part of a team that crafts memorable travel experiences? LivetourPRO equips your planning team with
              the tools needed to manage bookings, coordinate itineraries, and deliver top-notch customer service. From
              itinerary creation to on-trip support, we simplify the journey for both planners and travelers.
            </p>
            {/*
            <div className="flex flex-wrap gap-4">
              {["For Tour Managers", "For Travel Agents"].map((role, index) => (
                <button
                  key={index}
                  className="flex items-center gap-2 bg-transparent border border-black
                             text-black hover:bg-black hover:text-white
                             px-5 py-2.5 rounded-full transition-all"
                >
                  {role}
                  <ArrowRight size={16} />
                </button>
              ))}
            </div> */}
          </div>

          {/* Image Block */}
          <div className="mt-10 lg:mt-0 flex justify-center items-center">
            <img
              src={meetingImg}
              alt="Livetour planning session"
              className="w-full max-w-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
