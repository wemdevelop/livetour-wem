import { ArrowRight, Facebook, FacebookIcon, Instagram, Quote, Share2, Twitter } from "lucide-react";
import React, { useState } from "react";
import { motion , AnimatePresence } from "framer-motion";


import cocoKeralaLogo from "../../assets/clients/brandSays6-removebg-preview.png";
import RoverHolidays from "../../assets/clients/logo-rover-removebg-preview.png";
import HOUSEBOATS from "../../assets/clients/brandSays1-removebg-preview.png";
import HolidayMango from "../../assets/clients/brandSays5-removebg-preview.png";
import JustTour from "../../assets/clients/brandSays11-removebg-preview.png";
import DelhiTourism from "../../assets/clients/brandSays10-removebg-preview.png";
import MystikalHolidays from "../../assets/clients/mystical-logo.png";
import CountrTravelMart from "../../assets/clients/brandSays4-removebg-preview.png";
import TripTailor from "../../assets/clients/trip-tailor-logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";


// Testimonial data
const testimonials = [
  {
    name: "Jaimy Joseph",
    position: "Coco Kerala",
    company: "Thy Grace International's cocokerala",
    message:
      " I spoke to a lot of people of what I needed and tried using the products that they gave me. None of the products could satisfy me. Later, through a friend of mine I came to know about World e Mart. They gave me LivetourPRO and I could accomplish what I really needed. Thank You World e Mart for LivetourPRO, couldn’t have asked for more.",
    logo: cocoKeralaLogo,
    facebook: 'https://facebook',
    instagram: 'https://instagram',
    twitterx: 'https://twitterx'
  },
  {
    name: "Paul",
    position: "Rover Holidays",
    company: "Rover Holidays",
    message:
      " Our team is super satisfied with LivetourPRO. It’s been a while since we started using this software. The features and functionalities of this software have helped us to ease our work. We are now more competent and productive than before and also a step above our customer’s expectations",
    logo: RoverHolidays,
    facebook: 'https://facebook',
    instagram: 'https://instagram',
    twitterx: 'https://twitterx'
  },
  {
    name: "James",
    position: "All Houseboats",
    company: "ALL HOUSEBOATS",
    message:
      "World e Mart has always been a part of our company, since the startup to the success. They are more like a family to us. Every time they come up with innovative ideas and technologies that are key factors to any new, small or big business. This time they have given us a new and effective method which by far is the best software I have used in a very long time. Not only does it make things easier and faster but also is less time consuming",
    logo: HOUSEBOATS,
    facebook: 'https://facebook',
    instagram: 'https://instagram',
    twitterx: 'https://twitterx'
  },
  {
    name: "Anup Kumar",
    position: "Holiday Mango",
    company: "Holiday Mango",
    message:
      "We just found a software that simplifies a complicated process. Unlike many other products, LivetourPRO is professional looking and time saving. This is life saver software. Keep up the good work World e Mart.",
    logo: HolidayMango,
    facebook: 'https://facebook',
    instagram: 'https://instagram',
    twitterx: 'https://twitterx'
  },
  {
    name: "Shahji Shakeel",
    position: "Just Tour",
    company: "Just Tour",
    message:
      "I have tested many different solutions including LivetourPRO. By far, LivetourPRO is the best and easy solution that I can offer to my team and my customers. I would recommend this software to all who are looking for something that will ease out their business. Highly appreciated for the perfection!!!",
    logo: JustTour,
    facebook: 'https://facebook',
    instagram: 'https://instagram',
    twitterx: 'https://twitterx'
  },
  {
    name: "Sheeja Nizar",
    position: "Delhi Tourism",
    company: "Delhi Tourism.org",
    message:
      " I have tested many different solutions including LivetourPRO. By far, LivetourPRO is the best and easy solution that I can offer to my team and my customers. I would recommend this software to all who are looking for something that will ease out their business. Highly appreciated for the perfection!!",
    logo: DelhiTourism,
    facebook: 'https://facebook',
    instagram: 'https://instagram',
    twitterx: 'https://twitterx'
  },
  {
    name: "Shailesh",
    position: "Mystikal Holidays",
    company: "Mystikal Holidays",
    message:
      "I cant thank enough “World e Mart” for developing such an amazing product. It is tailored to the needs of the industry. This product beats all other software’s that we have been using since a very long time. Thanks for convincing me to use LivetourPRO.",
    logo: MystikalHolidays,
    facebook: 'https://facebook',
    instagram: 'https://instagram',
    twitterx: 'https://twitterx'
  },
  {
    name: "Liji Nobi",
    position: "Country Travel Mart",
    company: "Country Travel Mart",
    message:
      " We are only a month now, since we started using Livetour and our team is already in praise of this software. It actually reduces months of work into a single day. We have become a great team after using this software. Wonderful job, World e Mart!!!",
    logo: CountrTravelMart,
    facebook: 'https://facebook',
    instagram: 'https://instagram',
    twitterx: 'https://twitterx'
  },
  {
    name: "Honey",
    position: "Trip Tailor",
    company: "Trip Tailor",
    message:
      "World e Mart is a highly scaled team. They are open and trusted. The proactive nature of work and professionalism convinced me to use their software LivetourPRO for my business. And I must say that I am very pleased and impressed. Highest work quality seen till now.",
    logo: TripTailor,
    facebook: 'https://facebook',
    instagram: 'https://instagram',
    twitterx: 'https://twitterx'
  },
];

const TestimonialSection = () => {
  const [isOpen, setIsOpen] = useState(null); // track index
  return (
    <section className="bg-[#fffbea] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-10 text-center">
          What our customers say about us.
        </h2>

        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white inline-block w-full border border-gray-200 break-inside-avoid p-6 rounded-3xl hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="text-red-700 h-6 w-6 absolute top-6 left-6" />

              {/* Logo */}
              <div className="flex justify-center items-center h-20 mb-4">
                {typeof item.logo === "string" && item.logo.startsWith("http") ? (
                  <img src={item.logo} alt={item.company} className="h-12 object-contain" />
                ) : typeof item.logo === "string" && item.logo.includes(".png") ? (
                  <img src={item.logo} alt={item.company} className="h-30 object-contain" />
                ) : (
                  <span className="text-2xl">{item.logo}</span>
                )}
              </div>

              {/* Message */}
              <p className="text-gray-800 text-sm leading-relaxed  mb-6">
                {item.message}
              </p>

              <div className="flex justify-between items-center mt-4 relative">
  <div className="relative">
    <button
      onClick={() => setIsOpen(isOpen === index ? null : index)} // toggle per item
      className="bg-red-600 text-white text-xs px-4 py-2 cursor-pointer rounded-full flex items-center gap-1 text-[12px] hover:bg-black transition-colors duration-200"
    >
      <Share2 className="h-4 w-4" />
    </button>

    {/* Social media dropdown */}
    <AnimatePresence>
      {isOpen === index && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute z-10 text-sm flex-col bg-white border border-gray-200 shadow-md rounded-md p-2 mt-2 flex gap-2"
        >
          <a
            href={item.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black flex items-center gap-2 px-2 hover:text-blue-800"
          >
            <FacebookIcon className="w-4 h-4" />Facebook
          </a>
          <a
            href={item.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black flex items-center gap-2 px-2 hover:text-pink-700"
          >
            <Instagram className="w-4 h-4" /> Instagram
          </a>
          <a
            href={item.twitterx}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black flex items-center gap-2 px-2 hover:text-sky-700"
          >
            <Twitter className="w-4 h-4" />  Twitter
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  </div>

  <div className="text-right text-sm">
    <p className="font-semibold text-base text-gray-800">
      {item.name}, {item.position}
    </p>
  </div>
</div>

              {/* Footer */}

            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link
          to="/contactUs"
          className="btn-icon-hover-red w-full flex justify-center md:w-auto"
        >
          Get a Free Demo
          <ArrowRight />
        </Link>
      </div>

    </section>
  );
};

export default TestimonialSection;
