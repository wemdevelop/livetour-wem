import React from "react";
import { Quote } from "lucide-react";
import travelmart from "../../../src/assets/clients/spotlight-removebg-preview.png";
import cocokerala from "../../../src/assets/clients/file-removebg-preview.png";
import holidaymango from "../../../src/assets/clients/hm-newlogo-removebg-preview (1).png";

const TestimonialGrid = () => {
  const slides = [
    {
      logo: travelmart,
      quote: `We are only a month now, since we started using LivetourPRO and our team is already in praise of this software. It actually reduces months of work into a single day. We have become a great team after using this software. Wonderful job, World e Mart!!!`,
      user: {
        name: "Liji Nobi",
        title: "Country Travel Mart",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      },
    },
    {
      logo: cocokerala,
      quote: `I spoke to a lot of people of what I needed and tried using the products that they gave me. None of the products could satisfy me. Later, through a friend of mine I came to know about World e Mart. They gave me livetour and I could accomplish what I really needed. Thank You World e Mart for livetour, couldn't have asked for more.`,
      user: {
        name: "Jaimy Joseph",
        title: "Managing Director & CEO",
        avatar: "../../../src/assets/clients/jaimy.png",
      },
    },
    {
      logo: holidaymango,
      quote: `We just found a software that simplifies a complicated process. Unlike many other products, LivetourPRO is professional looking and time saving. This is life saver software. Keep up the good work World e Mart.`,
      user: {
        name: "Anup Kumar",
        title: "Holiday Mango",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      },
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our innovative solutions have transformed businesses worldwide
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slides.map((slide, i) => (
            <article
              key={i}
              className="relative bg-white rounded-3xl p-8 hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col justify-between min-h-[580px] group overflow-hidden"
            >

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-red-50 to-red-600 rounded-full opacity-30 transform rotate-12"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-indigo-100 to-blue-100 rounded-full opacity-20"></div>
              </div>

              <div className="relative z-10 flex flex-col h-full">

                <div className="mb-6 flex justify-end">
                  <img
                    src={slide.logo}
                    alt={`${slide.user.title} Logo`}
                    className="h-40 w-40 object-contain max-w-[150px]"
                  />
                </div>

                <div className="mb-6">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center">
                    <Quote className="text-red-700 w-12 h-12" />
                  </div>
                </div>


                <blockquote className="text-gray-600 text-base leading-relaxed mb-8 flex-grow">
                  {slide.quote}
                </blockquote>

                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {slide.user.name}
                    </h3>
                    <p className="text-[15px] text-black">{slide.user.title}</p>
                  </div>
                  <div className="w-20 h-20 bg-blue-800 rounded-full overflow-hidden">
                    <img
                      src={slide.user.avatar}
                      alt={slide.user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
