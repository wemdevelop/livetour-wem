import React from "react";
import { Star } from "lucide-react";

import testimonialData from "../../Data/testimonialData";
import TestimonialCard from "../TestimonialCard";
 // adjust path as needed

const Testimonials = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-5 px-4 md:px-8">
          <h2 className="">
            What Our Customers Say
          </h2>
          <p className="caption_text text-center max-w-xl mx-auto mt-2 mb-5">
            Discover how Bigin CRM is transforming businesses worldwide with its powerful features and exceptional value
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm sm:text-base md:text-[15px] font-medium">
              4.9/5 from 2,000+ reviews
            </span>
          </div>
        </div>

        {/* Masonry layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {testimonialData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              className="break-inside-avoid mb-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
