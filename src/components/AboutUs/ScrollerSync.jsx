import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

import Imageone from "../../assets/clients/screen-emp-timeline.png";
import Imagetwo from "../../assets/clients/screen-propertylist.png";
import Imagethree from "../../assets/clients/screen-propertymanager.png";
import bgSectionTwo from "../../assets/img/bg/bgSection4.png";

gsap.registerPlugin(ScrollTrigger);

const imageList = [Imageone, Imagetwo, Imagethree];

const contentList = [
  {
    title: "Everything Live",
    desc: "LivetourPRO record activities by each employee by their role and tasks. Understand how effective they are working for you.",
  },
  {
    title: "Manage Resources",
    desc: "Manage properties, agents, airlines, houseboats and vehicle operators linked with your business. LivetourPRO give you complete transaction details of any resources any point of time.",
  },
  {
    title: "Rate Manager",
    desc: "Manage rates of properties using multi season selector. Bulk rate updates also possible with LivetourPRO",
  },
];

const ScrollChangeSync = () => {
  const sectionsRef = useRef([]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveImageIndex(i),
        onEnterBack: () => setActiveImageIndex(i),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-fixed bg-center hidden lg:block bg-[#fdf1dc]"
      style={{ backgroundImage: `url(${bgSectionTwo})` }}
    >
      <div className="container mx-auto flex flex-col items-center pt-20 text-center">
        <h2 className="text-white">Live Events Capture System</h2>
        <p className="caption_text mt-2 !text-gray-200">
          Watch what's happening in your office realtime. LivetourPRO is recording complete activities of your employees.
        </p>
      </div>

      <div className="flex flex-col md:flex-row container mx-auto py-20 gap-10">
        {/* Sticky Left Image */}
        <div className="w-full md:w-2/3 sticky top-32 h-[60vh] flex justify-center items-center relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImageIndex}
              src={imageList[activeImageIndex]}
              alt="Dynamic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-h-full rounded-xl absolute"
            />
          </AnimatePresence>
        </div>

        {/* Right Side Scrollable Content */}
        <div className="w-full md:w-1/3 flex flex-col gap-10">
          {contentList.map((item, i) => (
            <div
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              className="p-8 bg-[#0F0E13] text-white backdrop-blur flex flex-col justify-center rounded-3xl shadow-md h-96"
            >
              <h2 className="mb-2">{item.title}</h2>
              <p className="text-base font-normal text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollChangeSync;
