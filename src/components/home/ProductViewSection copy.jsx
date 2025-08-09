import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dashboardImg from '../../assets/slider/dashboard.png';
import itineraryImg from '../../assets/clients/itenary (2).png';
import leadsImg from '../../assets/clients/leads.png';
import followupsImg from '../../assets/clients/home_4.png';
import vouchersImg from '../../assets/clients/home_5.png';

const tabs = [
  {
    title: 'Dashboard',
    image: dashboardImg,
    content:
      'Your business is live here. Everything updates in real-time — watch how your employees work for you.',
  },
  {
    title: 'Itinerary Builder',
    image: itineraryImg,
    content: 'Easily craft travel plans with smart suggestions and tools.',
  },
  {
    title: 'Leads Management',
    image: leadsImg,
    content: 'Manage all your leads efficiently and boost conversions.',
  },
  {
    title: 'Follow Ups',
    image: followupsImg,
    content: 'Automate follow-ups to never miss a client again.',
  },
  {
    title: 'Automated Voucher & Invoice',
    image: vouchersImg,
    content: 'Generate and send invoices and vouchers automatically.',
  },
];

const tabVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const ProductViewSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="mb-16 mt-3 text-center text-3xl font-bold">
        LivetourPRO Can Make Your Travel Business Smarter.
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onMouseEnter={() => setActiveTab(tab)} // Hover instead of click
            className={`px-5 py-2 rounded-full border transition-all font-semibold ${
              activeTab.title === tab.title
                ? 'bg-black text-white'
                : 'bg-white text-black border-gray-300 hover:bg-gray-100'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.title + '_text'}
            variants={tabVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="space-y-4 col-span-12 md:col-span-5"
          >
            <h2 className="text-2xl font-semibold">{activeTab.title}</h2>
            <p className="text-gray-600 text-lg">{activeTab.content}</p>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.title + '_image'}
            variants={tabVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="overflow-hidden col-span-12 md:col-span-7 rounded-xl shadow-lg"
          >
            <img
              src={activeTab.image}
              alt={activeTab.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductViewSection;
