import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Imageone from '../../assets/clients/screen-emp-timeline.png';
import Imagetwo from '../../assets/clients/screen-propertylist.png';
import Imagethree from '../../assets/clients/screen-propertymanager.png';

const tabData = [
  {
    key: 'live',
    title: 'Live Tour',
    label: 'Everything Live',
    text: 'LivetourPRO record activities by each employee by their role and tasks. Understand how effective they are working for you.',
    image: Imageone,
  },
  {
    key: 'rate',
    title: 'Rate Manager',
    label: 'Manage Resources',
    text: 'Manage properties, agents, airlines, houseboats and vehicle operators linked with your business. LivetourPRO give you complete transaction details of any resources any point of time.',
    image: Imagetwo,
  },
  {
    key: 'management',
    title: 'Management Insights',
    label: 'Rate Manager',
    text: 'Manage rates of properties using multi season selector. Bulk rate updates also possible with LivetourPRO',
    image: Imagethree,
  },
];

const fadeVariant = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: 'easeInOut' }
};

const Bsnsneed = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [activeTab, setActiveTab] = useState('live');

  const activeContent = tabData.find((tab) => tab.key === activeTab);

  return (
    <div className="w-full xl:min-h-screen bg-white lg:hidden block px-4 md:px-0">
      {/* Header Section */}
      <div className="w-full flex justify-center">
        <div className="container mx-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 md:pt-0 py-10 sm:py-16 text-center">
          <h2 className="">
            Live Events Capture System
          </h2>
          <p className="caption_text mt-2">
            Watch whats happening in your office realtime. LivetourPRO is recording complete activities of your employees.
          </p>

          {/* Tabs */}
          <div className="mt-6 flex gap-4 flex-wrap justify-center">
            {tabData.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={` ${activeTab === tab.key
                  ? 'btn-icon-hover-red'
                  : 'btn-icon-hover-black'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Text with Animation */}
      <AnimatePresence mode="wait">
        <motion.p
          key={activeContent?.key + '-text'}
          variants={fadeVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={fadeVariant.transition}
          className="text-sm md:text-base font-normal max-w-2xl text-black text-center container mx-auto mb-5 md:mb-20"
        >
          {activeContent?.text}
        </motion.p>
      </AnimatePresence>

      {/* Image Section with background */}
      <div className="relative container mx-auto flex justify-center items-center py-8 sm:py-10">
        {/* Background Layer */}
        <div className="absolute inset-0 md:top-12 sm:top-16 md:top-20 lg:top-24 md:left-4  sm:left-6 lg:left-8 md:bg-red-900 mx-auto min-h-auto sm:min-h-auto md:min-h-[400px] lg:min-h-[480px] rounded-lg sm:rounded-xl lg:rounded-3xl z-0" />

        {/* Foreground Image with Animation */}
        <div className="relative z-10 w-full md:min-h-96 md:-mt-14 md:max-w-6xl flex flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeContent?.key + '-img'}
              variants={fadeVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={fadeVariant.transition}
              src={activeContent?.image}
              alt={activeContent?.title}
              className="xl:w-full h-auto object-contain rounded-lg sm:rounded-xl lg:rounded-3xl"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Modal for YouTube Video */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-4">
          <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 z-10 text-gray-700 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Responsive YouTube Embed */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://www.youtube.com/embed/3Gg8Z0tL9iA"
                title="CRM Overview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bsnsneed;





