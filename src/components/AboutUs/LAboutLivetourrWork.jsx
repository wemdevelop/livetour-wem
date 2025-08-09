import React from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import '../../styles/About.css';

const AboutWorks = () => {
  return (
    <div
      className="relative h-[1000px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1569949380643-6e746ecaa3bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Left overlay with angled background */}
      <div className="absolute inset-0 bg-[#001e5f]/90 clip-hero z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-6 lg:px-20 text-white max-w-4xl">
        <p className="text-sm text-teal-400 font-semibold mb-2">
          LivetourPRO presents
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          personalized <br />
          <span className="text-[#00c9a7]">TRAVEL EXPERIENCES</span> <br />
          To discover your
          dream destination.
        </h1>
        <p className="text-white/80 text-md mb-8 max-w-lg">
          Explore stunning destinations, book seamlessly, and embark on
          unforgettable adventures with LivetourPRO. We tailor your travel dreams into real-life experiences guided by local experts.
        </p>

        <div className="flex gap-6 flex-wrap items-center">
          <button className="bg-[#635bff] hover:bg-[#574ee6] text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition">
            Get Started <ArrowRight size={18} />
          </button>

          <button className="text-white font-medium flex items-center gap-2 hover:underline">
            <PlayCircle size={24} />
            View our tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutWorks;
