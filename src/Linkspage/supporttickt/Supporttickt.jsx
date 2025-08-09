import React from "react";
import { PlayCircle, FileText, HelpCircle, Monitor, Zap, PhoneCall } from "lucide-react";

const supportData = [
  {
    title: "Getting Started",
    desc: "A step-by-step guide to get started with LivetourPRO.",
    icon: <FileText className=" text-black" />,
    button: "Go To Guide",
    href: "/contactUs",
  },
  {
    title: "Videos",
    desc: "Quick videos to walk through LivetourPRO features.",
    icon: <PlayCircle className=" text-black" />,
    button: "View Videos",
    href: "/videos",
  },
  {
    title: "FAQs",
    desc: "Helpful answers to the most common questions.",
    icon: <HelpCircle className=" text-black" />,
    button: "Explore Faqs",
    href: "/pricing",
  },
  {
    title: "Live Training",
    desc: "Join a webinar or live training session.",
    icon: <Monitor className=" text-black" />,
    button: "Reserve A Seat",
    href: "/contactUs",
  },
  {
    title: "Power Tips",
    desc: "Check out expert tips to take your itineraries and quotes further.",
    icon: <Zap className=" text-black" />,
    button: "Power Up",
    href: "/blog",
  },
  {
    title: "Contact",
    desc: "Contact us with questions.",
    icon: <PhoneCall className=" text-black" />,
    button: "Contact Us",
    href: "contactUs",
  },
];

export default function Supporttickt() {
  return (
    <div className=" bg-white px-4 md:px-0 py-15 flex justify-center">
      <div className="grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5  mx-auto">
        {supportData.map((item, idx) => (
          <div
            key={idx}
            className=" rounded-3xl flex flex-col gap-5 border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-200"

          >
            <div className="flex flex-col gap-3 h-full"><div className="flex justify-center">
              <div className="bg-[#fae1b6] rounded-full w-12 h-12 flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            <h4 className="">{item.title}</h4>
            <p className="text-sm">{item.desc}</p></div>
            <a
              href={item.href}
              className="btn-icon-hover-red flex justify-center"
            >
              {item.button}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
