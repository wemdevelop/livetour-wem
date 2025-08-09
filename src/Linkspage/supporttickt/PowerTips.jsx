import React from "react";
import { Sliders, FileText, RefreshCcw } from "lucide-react";


const tips = [
  {
    title: "Keyboard Shortcuts",
    icon: <Sliders className=" text-black" />,
    desc: "Check out simple keyboard shortcuts to build itineraries lightning fast.",
  },
  {
    title: "Library Tips",
    icon: <FileText className=" text-black" />,
    desc: "Checkout these tips and examples for clever ways to use the Library.",
  },
  {
    title: "Places Database",
    icon: <RefreshCcw className=" text-black" />,
    desc: "Auto-add phone numbers and addresses simply by typing the name of a place.",
  },
];

const PowerTips = () => {
  return (
    <section className="bg-white pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-2">Power tips</h2>
        <p className="text-base font-semibold text-gray-700">
          Check out these tips to gain super powers with your itineraries and quotes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {tips.map((tip, index) => (
            <div
              key={index}
              className=" rounded-3xl flex flex-col gap-5 border border-gray-200 p-8 text-center hover:shadow-xl transition-all duration-200"
            >
              <div className=" flex justify-center">
                <div className="bg-[#fae1b6] rounded-full w-12 h-12 flex items-center justify-center">
                  {tip.icon}
                </div>
              </div>

              <h4 className="h-full">{tip.title}</h4>
              <p className="text-black text-sm">{tip.desc}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PowerTips;
