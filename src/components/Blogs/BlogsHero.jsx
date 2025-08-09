import React, { useState } from 'react';
import { ArrowRight, MoveRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import ModalCommon from '../ui/ModalCommon';

const BlogHero = () => {
  const [showVideo, setShowVideo] = useState(false);
      const [open, setOpen] = useState(false);
  

  return (
    <section className="text-center py-8 bg-red-900 text-white md:py-16 px-4">
      {/* Background Dots */}
      {/* <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div> */}
<ModalCommon
                isOpen={open}
                onClose={() => setOpen(false)}
                size="lg"
                closeOnOutsideClick={true} // true: close on outside click, false: don’t close
            >
                <iframe
              className="w-full h-full aspect-video"
              src="https://www.youtube.com/embed/04x3IvXub1A?autoplay=1"
              title="Watch Demo"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            </ModalCommon>
      {/* Video Modal */}
   

      {/* Hero Content */}
      <div className="max-w-6xl  mx-auto text-center px-4">
        <div className="text-center">
          <h2 className="mb-4">
            LivetourPRO CRM Revolution
          </h2>

          <p className="text-sm md:text-base font-light text-white mt-4 my-6">
            Transform your tour business with real-time customer management,
            live streaming capabilities, and advanced analytics that drive
            growth and customer satisfaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contactUs">
              <button className="btn-icon-hover-red flex justify-center items-center mt-2"
                       
              >
                Start Free Trial
                <ArrowRight className="" />
              </button>
            </Link>

            <button
               onClick={() => setOpen(true)}
              className="btn-icon-hover-black flex justify-center items-center mt-2"
            >
              Watch Demo
              <Play className="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogHero;