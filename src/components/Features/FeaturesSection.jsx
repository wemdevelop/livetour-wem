// FeaturesSectionManual.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const scrollToSection = (index) => {
  const target = sectionRefs.current[index];
  if (target) {
    const topOffset = target.getBoundingClientRect().top + window.scrollY - 10;
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth',
    });
  }
};


  return (
    <div className="flex container mx-auto px-4 py-10">
      {/* Left Sticky Buttons */}
      <div className="w-1/4 sticky top-20 h-screen flex flex-col gap-4 pr-4">
        <button
          onClick={() => scrollToSection(0)}
          className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === 0 ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 hover:bg-blue-100'
          }`}
        >
          Live Dashboard
        </button>
        <button
          onClick={() => scrollToSection(1)}
          className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === 1 ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 hover:bg-blue-100'
          }`}
        >
          The Agile Sales Process
        </button>
        <button
          onClick={() => scrollToSection(2)}
          className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === 2 ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 hover:bg-blue-100'
          }`}
        >
          LivetourPRO Remember Everything
        </button>
        <button
          onClick={() => scrollToSection(3)}
          className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === 3 ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 hover:bg-blue-100'
          }`}
        >
          LivetourPRO Remember Everything
        </button>
        <button
          onClick={() => scrollToSection(4)}
          className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === 3 ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 hover:bg-blue-100'
          }`}
        >
          Security and Productivity
        </button>
        <button
          onClick={() => scrollToSection(5)}
          className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === 3 ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 hover:bg-blue-100'
          }`}
        >
          Manage Accounts and Reports
        </button>
        <button
          onClick={() => scrollToSection(6)}
          className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === 3 ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 hover:bg-blue-100'
          }`}
        >
          Resource Management
        </button>
        <button
          onClick={() => scrollToSection(7)}
          className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === 3 ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 hover:bg-blue-100'
          }`}
        >
          Email Templates
        </button>
        <button
          onClick={() => scrollToSection(8)}
          className={`text-left px-4 py-2 rounded-lg transition-all duration-300 ${
            activeIndex === 3 ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 hover:bg-blue-100'
          }`}
        >
          LivetourPRO is More Flexible
        </button>
        
      </div>

      {/* Right Scrollable Content */}
      <div className="w-3/4 flex flex-col gap-20">
        {/* Section 0 */}
        <motion.div
          ref={(el) => (sectionRefs.current[0] = el)}
          data-index="0"
          className=" p-8  bg-white rounded-xl shadow"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-5">
            <h2 className="">Live Dashboard</h2>
            <div className="">Wherever you are, your business is with you. Check real-time what's happening in your business and how your employees are working for you.</div>
            <div className="grid grid-cols-4">
              <div className="flex flex-col gap-2">
                <div className="">1</div>
                <div className="">1</div>
                <div className="">1</div>
                <div className="">1</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="">1</div>
                <div className="">1</div>
                <div className="">1</div>
                <div className="">1</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="">1</div>
                <div className="">1</div>
                <div className="">1</div>
                <div className="">1</div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="">1</div>
                <div className="">1</div>
                <div className="">1</div>
                <div className="">1</div>
              </div>
              
            </div>
          </div>
        </motion.div>

        {/* Section 1 */}
        <motion.div
          ref={(el) => (sectionRefs.current[1] = el)}
          data-index="1"
          className=" p-8 bg-white rounded-xl shadow"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">The Agile Sales Process</h2>
          <p className="text-lg text-gray-700">
            ⚡ Our Agile Sales Process helps teams close faster.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          ref={(el) => (sectionRefs.current[2] = el)}
          data-index="2"
          className="min-h-[80vh] p-8 bg-white rounded-xl shadow"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">LivetourPRO Remember Everything</h2>
          <p className="text-lg text-gray-700">
            🧠 LivetourPRO remembers your last actions, even offline.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          ref={(el) => (sectionRefs.current[3] = el)}
          data-index="3"
          className="min-h-[80vh] p-8 bg-white rounded-xl shadow"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Smart Reporting</h2>
          <p className="text-lg text-gray-700">
            📈 Generate smart reports with a single click.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;
