import React, { useState } from "react";
import { ArrowRight, MoveRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import ModalCommon from "../ui/ModalCommon";

const AboutHeader = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-red-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="my-4">
          Personalized Travel Experiences
        </h2>

        <p className="text-sm md:text-base font-light text-white mt-4 my-6">
          Explore stunning destinations, book seamlessly, and embark on unforgettable
          adventures with LivetourPRO. We tailor your travel dreams into real-life
          experiences guided by local experts.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 sm:gap-7 justify-center items-center max-w-2xl mx-auto">
          <Link to="/contactUS">
            <button className="btn-icon-hover-red">
              Get Started For Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="btn-icon-hover-black"
          >
            Watch Overview
            <Play className="w-5 h-5" />
          </button>
        </div>
      </div>
      <ModalCommon
        isOpen={open}
        onClose={() => setOpen(false)}
        size="lg"
        closeOnOutsideClick={true} // true: close on outside click, false: don’t close
      >
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/04x3IvXub1A?autoplay=1"
          title="YouTube video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </ModalCommon>

    </div>
  );
};

export default AboutHeader;
