import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import faq from '../../assets/img/faq/faq.png'

const faqs = [
  {
    question: "Can I get a demo of LivetourPRO?",
    answer: (
      <>
        Yes, absolutely.{" "}
        <span className="text-blue-600 underline cursor-pointer">
          Please fill out this form
        </span>{" "}
        and our team will schedule a personalized demo at a time that works best for you.
      </>
    ),
  },
  {
    question: "Do I need to provide my credit card to start using LivetourPRO?",
    answer: "No, you can start a free trial without entering your credit card details.",
  },
  {
    question: "What support does the LivetourPRO team provide after purchase?",
    answer:
      "We offer onboarding, training, live chat support, and detailed help documentation to ensure your success.",
  },
  {
    question: "Is LivetourPRO suitable for both small and large tour operators?",
    answer:
      "Yes, LivetourPRO scales with your business—from solo operators to large agencies managing multiple tours.",
  },
  {
    question: "How can I make a payment for LivetourPRO?",
    answer:
      "We accept all major credit cards, UPI, PayPal, and direct bank transfers.",
  },
  {
    question: "Why switch from spreadsheets to LivetourPRO?",
    answer:
      "LivetourPRO helps automate bookings, manage itineraries, handle customer communication, and track payments in one place—much more efficiently than spreadsheets.",
  },
  {
    question: "Does LivetourPRO support multiple languages and currencies?",
    answer:
      "Yes, LivetourPRO supports multi-language content and multiple currencies to cater to international travelers.",
  },
  {
    question: "Can I integrate LivetourPRO with my existing website?",
    answer:
      "Absolutely! You can embed booking forms, tour details, and itineraries directly into your website using our widgets or API.",
  },
  {
    question: "Is there a mobile app for LivetourPRO?",
    answer:
      "Yes, LivetourPRO has a mobile-friendly interface, and a dedicated app is coming soon for both Android and iOS.",
  },
  {
    question: "Can I manage group bookings and custom itineraries?",
    answer:
      "Yes, LivetourPRO lets you handle group bookings, custom travel packages, and tailor itineraries for different customers with ease.",
  },
  {
    question: "How secure is my data on LivetourPRO?",
    answer:
      "We take security seriously. All data is encrypted and hosted on secure servers with regular backups.",
  },
  {
    question: "Can I generate reports and track performance?",
    answer:
      "Yes, LivetourPRO provides built-in analytics and reporting to track bookings, revenue, customer engagement, and more.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState([0]);

  const toggle = (i) => {
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((j) => j !== i) : [...prev, i]
    );
  };

  const toggleAll = () => {
    if (open.length === faqs.length) setOpen([]);
    else setOpen(faqs.map((_, i) => i));
  };

  return (
    <div className="bg-white mx-auto container flex gap-5 py-10 px-4 md:px-0 md:py-16">
      <div className="hidden md:block w-2xl h-fit py-20 p-10 rounded-3xl sticky top-10 bg-[#F79385]">
        <img src={faq}  className="object-contain w-96 h-96" alt="" />
      </div>
      <div className="w-full">
        <h2 className="text-center mb-5">Frequently Asked Questions</h2>

        {/* Expand/Collapse All */}
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleAll}
            className="bg-white border w-36 text-sm border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-100"
          >
            {open.length === faqs.length ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-2 md:gap-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white border-b border-gray-300 transition"
            >
              <button
                onClick={() => toggle(i)}
                className="flex cursor-pointer w-full gap-3 items-center px-5 py-4 text-left focus:outline-none"
              >
                <motion.span
                  className="flex justify-center items-center text-2xl"
                  animate={{ rotate: open.includes(i) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.span>
                <span className="text-base font-medium text-black">
                  {item.question}
                </span>
              </button>

              {/* Animate answer */}
              <AnimatePresence initial={false}>
                {open.includes(i) && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-12 pb-5 text-red-700 text-[15px] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
