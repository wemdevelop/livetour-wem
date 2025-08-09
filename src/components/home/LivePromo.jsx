import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MoveRight, MoveLeft, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import tm1 from '../../assets/img/testimonials/tm2.png';
import tm2 from '../../assets/img/testimonials/tm1.png';
import tm3 from '../../assets/img/testimonials/tm3.png';

const testimonials = [
  {
    name: 'Liji',
    role: 'Director, Country Travel Mart',
        quote: 'We are only a month now, since we started using livetour and our team is already in praise of this software. It actually reduces months of work into a single day. We have become a great team after using this software. Wonderful job, World e Mart!!!',
    img: tm1,
  },
  {
    name: 'Sandeep',
    role: 'Jaimy Joseph, Coco Kerala',
    quote: 'I spoke to a lot of people of what I needed and tried using the products that they gave me. None of the products could satisfy me. Later, through a friend of mine I came to know about World e Mart. They gave me livetour and I could accomplish what I really needed. Thank You World e Mart for livetour, couldn’t have asked for more. ',
    img: tm3,
  },
  {
    name: 'Anjali',
    role: 'Jaimy Joseph, Coco Kerala',
    quote: 'I spoke to a lot of people of what I needed and tried using the products that they gave me. None of the products could satisfy me. Later, through a friend of mine I came to know about World e Mart. They gave me livetour and I could accomplish what I really needed. Thank You World e Mart for livetour, couldn’t have asked for more. ',
    img: tm2,
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100, // less abrupt
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96], // smooth ease
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  }),
};


const LivePromo = () => {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = (newDirection) => {
    setIndex(([prev]) => {
      const newIndex = (prev + newDirection + testimonials.length) % testimonials.length;
      return [newIndex, newDirection];
    });
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => paginate(1), 5000);
    return () => clearInterval(interval);
  }, [index, isHovered]);

  const { name, role, quote, img } = testimonials[index];

  return (
    <div className=" overflow-hidden flex flex-col md:flex-row container mx-auto gap-10 md:gap-20 lg:my-20 px-4 md:px-0">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <p className="text-sm text-black">CUSTOMER SPOTLIGHT</p>
        <h2 className="">LivetourPRO</h2>
        <p className="text-base font-semibold text-gray-700">
          LivetourPRO organised our business more than we expected
        </p>
        <p className="text-sm md:text-base font-light text-black mt-4">
          75% of paper works and keeping N number of files are now an old story. Our business is more structured and our clients are getting timely updates through messages and emails even without our effort. We loved the intelligent followup and alert system of Livetour and we are enjoying 45% more conversions than the old method we followed. Big thanks to Livetour.
        </p>
        <Link
          to="/contactUs"
          className="btn-icon-hover-red w-fit"
        >
          Try LivetourPRO <ArrowRight className="" />
        </Link>
      </div>

      {/* Right Content */}
      <div
        className="w-full md:w-1/2 flex flex-col items-center gap-6 justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full ">
          <button
            onClick={() => paginate(-1)}
            className="p-2 absolute left-3 bottom-[50%] z-10 bg-gray-100/20 rounded-full hover:bg-white cursor-pointer transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-2 absolute right-3 bottom-[50%] z-10 bg-gray-100/20 rounded-full hover:bg-white cursor-pointer transition"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="flex flex-col lg:flex-row bg-red-600 relative text-white rounded-3xl overflow-hidden w-full"
            >
              <img src={img} alt={name} className="object-cover lg:w-52 w-full h-72 lg:rounded-l-3xl" />
              <div className="flex flex-col gap-4 p-6 justify-center pr-14">
                <div>
                  <p className="font-bold text-[15px] md:text-lg">{name}</p>
                  <p className="text-[13px] md:text-sm text-gray-200">{role}</p>
                </div>
                <p className="text-sm md:text-base font-medium leading-relaxed">
                  “{quote}”
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-4">
          
        </div>

        {/* Indicator Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-5 h-2 rounded-full transition-all duration-300 ${
                i === index ? 'bg-black' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LivePromo;
