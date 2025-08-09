import React from "react";
import { Link } from "react-router-dom";

const SupportArticles = () => {
  const faqs = [
    "How do I add my logo and contact information?",
    "Can I create a database/library of my own places?",
    "How do I add a price and description to the itinerary?",
    "How do I add customer booking confirmations to my itinerary?",
    "How do I add my logo and contact information?",
    "Can I create a database/library of my own places?",
    "How do I add a price and description to the itinerary?",
    "How do I add customer booking confirmations to my itinerary?",
  ];

  return (
    <section className="bg-white text-black md:pb-20">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="mb-10">
          Popular support articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-10 text-left text-sm md:text-[18px] mb-10">
          {faqs.map((question, index) => (
            <p key={index} className="hover:underline cursor-pointer">
              {question}
            </p>
          ))}
        </div>
        <div className="flex justify-center xl:-ml-[70px] mt-6">
          <Link to='/knowmore'>
            <button className="btn-icon-hover-red">
              View All Faqs
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SupportArticles;
