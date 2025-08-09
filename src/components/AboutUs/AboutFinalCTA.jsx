import React from "react";
import { Link } from "react-router-dom";
import ctaImg from "../../assets/download.png"; // Replace with your actual image path

const AboutFinalCTA = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h2 className=" text-red-700 mb-4">
            Ready to Explore the World with Us?
          </h2>
          <p className="text-black text-lg mb-6">
            Whether you're planning your first trip or your next adventure, LivetourPRO makes it seamless, special, and unforgettable. Let’s turn your dream into a journey.
          </p>
          <Link to="/contactUs">
            <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white py-3 px-8 rounded-full transition">
              Start Free Trial Now
            </button>
          </Link>
        </div>

        {/* Image Content */}
        <div>
          <img
            src={ctaImg}
            alt="LiveTour planning"
            className="rounded-xl  w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutFinalCTA;
