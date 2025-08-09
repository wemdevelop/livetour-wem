import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dashboardImg from '../../assets/slider/dashboard.png';
import itineraryImg from '../../assets/clients/itenary (2).png';
import leadsImg from '../../assets/clients/leads.png';
import followupsImg from '../../assets/clients/home_4.png';
import vouchersImg from '../../assets/clients/home_5.png';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tabs = [
  {
    title: 'Dashboard',
    image: dashboardImg,
    content: 'Your business is live here. Everything updates in real-time — watch how your employees work for you.',
  },
  {
    title: 'Itinerary Builder',
    image: itineraryImg,
    content: 'Impressing your clients is crucial. Dont waste time typing emails — send beautiful itineraries, trip plans, and quotes instantly.',
  },
  {
    title: 'Leads Management',
    image: leadsImg,
    content: 'LivetourPRO captures enquiries from your website. You can also bulk upload enquiries and assign them to your executives.',
  },
  {
    title: 'Follow Ups',
    image: followupsImg,
    content: 'Everything in one place. You stay in control with our exceptional auto sales follow-up system.',
  },
  {
    title: 'Automated Voucher & Invoice',
    image: vouchersImg,
    content: 'Once a package is confirmed, LivetourPRO generates vouchers and invoices. It also handles reservations and driver allocations.',
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
    <>
    <div className="container mx-auto py-10 px-4 lg:px-0">
      <h2 className='mb-10 lg:mb-16 mt-3 text-center'>
        LivetourPRO Can Make Your Travel Business Smarter.
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap gap-2 lg:gap-4 justify-center mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 cursor-pointer font-semibold ${
              activeTab.title === tab.title
                ? 'btn-icon-hover-black '
                : 'btn-icon-hover-red '
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Animated Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 lg:gap-8 items-center min-h-[60vh] rounded-3xl bg-red-900 text-white p-4 lg:p-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.title + '_text'}
            variants={tabVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="space-y-4 col-span-8 lg:col-span-5 "
          >
            <h3 className="">{activeTab.title}</h3>
            <p className="text-sm lg:text-lg">{activeTab.content}</p>
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
            className="overflow-hidden col-span-7 rounded-xl shadow-lg"
          >
            <img
              src={activeTab.image}
              alt={activeTab.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 justify-center items-center mt-10">
        <Link to={'/contactUs'} className="btn-icon-hover-red">Get Started For Free <ArrowRight/></Link>
        <Link to={'/features'} className="btn-icon-hover-black">View All Features <ArrowRight/></Link>
      </div>
    </div>
    </>
  );
};

export default ProductViewSection;
