import React from "react";
import { ChevronDown } from "lucide-react";
import faqData from "../Data/faqData";

const FaqSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-base sm:text-lg">
          Everything you need to know about getting started with LivetourPRO.
        </p>
      </div>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex items-start gap-3">
              <ChevronDown className="w-5 h-5 mt-1 text-red-500" />
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
