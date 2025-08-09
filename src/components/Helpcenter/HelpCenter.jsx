import React, { useState } from 'react';
import Swal from 'sweetalert2';
import faqIllustration from '../../assets/people-asking-questions-getting-instructions.png';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleQuestionMark } from 'lucide-react';

const faqs = [
  {
    question: "How do I book a LivetourPRO?",
    answer: "You can book a LivetourPRO by visiting our home page, selecting your destination, and following the simple booking steps."
  },
  {
    question: "Can I cancel or reschedule my LivetourPRO?",
    answer: "Yes, you can cancel or reschedule from your account dashboard under 'My Bookings'."
  },
  {
    question: "Do I need special equipment to join a LivetourPRO?",
    answer: "No, all you need is a stable internet connection and any device with a screen and audio."
  },
  {
    question: "Is support available 24/7?",
    answer: "Our support team is available from 9 AM to 9 PM IST. Feel free to contact us during those hours."
  },
  {
    question: "What should I do if my video or audio isn’t working during the tour?",
    answer: "Please check your internet connection, refresh the page, and ensure your microphone and camera permissions are enabled in your browser."
  },
  {
    question: "Can I request a private or customized LivetourPRO?",
    answer: "Yes, we offer private tours and custom experiences. Please contact our support team for personalized arrangements."
  },
  {
    question: "How do I pay for a LivetourPRO?",
    answer: "We accept payments via credit/debit cards, UPI, and net banking. All payments are securely processed."
  }
];

function HelpCenter() {

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };


  return (
    <div className="bg-[#f9fafb] min-h-screen">

      {/* Header */}
      <div className="bg-red-900 text-white py-16 px-4 text-center">
        <h2 className="">LivetourPRO Help Center</h2>
        <p className="text-sm md:text-base font-light text-white mt-4 my-6">
          Need help with your bookings, technical support, or general queries? You’re in the right place. Browse our FAQs or contact us directly.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-10 md:py-20  grid md:grid-cols-2 gap-5 md:gap-12 items-start">
        {/* Illustration */}
        <div className="flex md:flex-col gap-5 justify-center items-center h-full">
          <h2 className="">Frequently Asked Questions</h2>
          <MessageCircleQuestionMark className='size-14 md:size-36 stroke-1' />

          {/* <img
            src={faqIllustration}
            alt="FAQ Illustration"
            className="w-full h-auto max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
          /> */}
        </div>

        {/* FAQ List */}
        <div>
          <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 bg-white">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-gray-900 font-medium text-base">{faq.question}</span>
                  <span className="text-xl text-black">{openIndex === index ? '−' : '+'}</span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-6 pb-4 text-sm text-red-700 overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
      <div className="container mx-auto px-4 pb-10 md:py-20 grid md:grid-cols-2 gap-5 md:gap-12 items-start">
  {/* Right column: Icon and heading – show first on mobile */}
  <div className="flex md:flex-col gap-5 justify-between md:justify-center items-center h-full order-1 md:order-2">
    <h2 className="">Still have questions</h2>
    <MessageCircleQuestionMark className='size-14 md:size-36 stroke-1' />
  </div>

  {/* Left column: Form – show second on mobile */}
  <div className="order-2 md:order-1">
    <div className="flex flex-col md:p-10 p-5 gap-2 overflow-hidden rounded-3xl border bg-white border-gray-200">
      <h3 className="">Still have questions?</h3>
      <p className="text-sm text-gray-500">
        Can’t find the answer you’re looking for? Reach out to our team and we’ll get back to you shortly.
      </p>
      <div className="flex flex-col w-full gap-3 mt-5">
        <div className="flex flex-col md:flow-row w-full gap-3">
          <input
            type="text"
            placeholder='Enter Your Name'
            className='text-sm w-full focus:outline-none focus:border focus:border-red-600 rounded-lg border-gray-500 border p-2'
          />
          <input
            type="text"
            placeholder='Enter Email'
            className='text-sm w-full focus:outline-none focus:border focus:border-red-600 rounded-lg border-gray-500 border p-2'
          />
        </div>
        <textarea
          rows={'5'}
          placeholder='Describe your issue or question...'
          className='text-sm w-full focus:outline-none focus:border focus:border-red-600 p-2 border rounded-lg border-gray-500'
        ></textarea>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-between w-full items-center mt-5">
        <div className="text-sm text-gray-500">We usually respond within 1 business day.</div>
        <button className="btn-icon-hover-red w-full flex justify-center md:w-auto">Submit Query</button>
      </div>
    </div>
  </div>
</div>



    </div>
  );
}

export default HelpCenter;
