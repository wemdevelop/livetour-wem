import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import "../../styles/Features.css";
import slideone from '../../assets/img/about/1.png'
import card2 from '../../assets/img/features/bg1.jpg'
import cart1 from '../../assets/img/features/re.png'

import livetoureverythingImg from "../../assets/contacts/Untitled design.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  mockImages,
  features,
  liveDashboardData,
  agileSalesData,
  securityData,
  accountsData,
  resourceData,
  flexibilityData,
  rememberEverythingData,
  newsletterData,
} from "../../Data/FeaturesData";
import ScrollFadeUp from "../ui/ScrollFadUp";
import ScrollSlideLeft from "../ui/ScrollSlideLeft";
import ScrollSlideRight from "../ui/ScrollSlideRight";



const FeatureShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const sectionRefs = useRef([]);

  // Observe sections in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    setActiveIndex(index);
    setIsDropdownOpen(false);
  };

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
          {/* Sidebar Navigation */}
          <div className="lg:w-[20%] lg:flex-shrink-0 mx-4">
            {windowWidth < 1024 ? (
              // Mobile Dropdown
              <div className="relative w-full lg:mb-8">
                <button
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-300 hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="font-semibold text-lg text-red-600">
                    {features[activeIndex]}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {isDropdownOpen && (
                  <ul className="absolute top-full mt-2 w-full  rounded-xl shadow-xl bg-white z-50 max-h-80 overflow-y-auto">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className={`cursor-pointer px-6 py-4 font-medium border-b border-gray-600 last:border-b-0 transition-colors duration-200 ${activeIndex === index
                          ? "bg-red-50 text-red-600"
                          : " text-gray-700"
                          }`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              // Desktop Sidebar
               <div className="sticky top-20 self-start">
<ScrollSlideLeft>
             
                <div className="pb-11 pr-5 border-r border-gray-200">
                  <h3 className="mb-5">
                    ALL FEATURES
                  </h3>
                  <ul

                  >
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        onClick={() => scrollToSection(index)}

                        className={`relative cursor-pointer py-1.5 font-medium text-sm lg:text-base rounded-r-xl leading-6
                           ${activeIndex === index
                            ? "text-red-600 pl-3 text-sm lg:text-base scale-105"
                            : "text-black text-sm lg:text-base hover:text-red-600"}
                         `}
                      >
                        {/* Left indicator */}
                        {activeIndex === index && (
                          <div
                            layoutId="activeIndicator"
                            className="absolute h-6 border-2 left-0 border-red-600 rounded-r"

                          />
                        )}
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                   </ScrollSlideLeft>
              </div>
           
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0 mx-4 lg:mx-0">
            <div className="flex flex-col gap-10 lg:gap-16">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className="scroll-mt-24 p-0"
                >
                  {renderFeatureSection(feature, mockImages)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Feature section renderer
const renderFeatureSection = (feature, images) => {
  switch (feature) {
    case "Live Dashboard":
      return <LiveDashboardSection images={images} />;
    case "The Agile Sales Process":
      return <AgileSalesSection images={images} />;
    case "LivetourPRO Remember Everything":
      return <RememberEverythingSection images={images} />;
    case "Security and Productivity":
      return <SecuritySection images={images} />;
    case "Manage Accounts and Reports":
      return <AccountsSection images={images} />;
    case "Resource Management":
      return <ResourceSection images={images} />;
    case "Email Templates":
      return <EmailTemplatesSection images={images} />;
    case "LivetourPRO is More Flexible":
      return <FlexibilitySection images={images} />;
    default:
      return null;
  }
};

// Individual feature components
const LiveDashboardSection = ({ images }) => (
  <ScrollSlideRight>

    <div className="  border-gray-200 flex flex-col gap-3 lg:gap-5  ">
      <h3 className="">
        Live Dashboard
      </h3>
      <p className="text-sm lg:text-lg max-w-5xl">
        Wherever you are, your business is with you. Check real-time what's
        happening in your business and how your employees are working for you.
      </p>

      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4 gap-5">
        {liveDashboardData.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="w-full bg-white flex flex-col gap-2 border p-4 rounded-3xl border-gray-200 hover:border-gray-400 justify-between  group  duration-300">


            <div className="flex flex-col gap-2">
              <div className="w-fit p-3 mb-4 bg-gradient-to-br from-red-100 to-red-300 rounded-full flex items-center justify-center ">
                <div className="group-hover:scale-110 transition-transform duration-300"><Icon className="size-8 " /></div>
              </div>
              <h4 className="">
                {title}
              </h4>

              <p className="text-sm lg:text-base">
                {description}
              </p>
            </div>

            <Link
              to="/comingson"
              className="btn-icon-hover-red flex justify-center items-center mt-2"
            >
              Learn more
              <ArrowRight className="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </ScrollSlideRight>
);

const AgileSalesSection = ({ images }) => (
  <ScrollSlideLeft>

    <div className="  md:pt-0" >
      <div className="   border-gray-200 flex flex-col gap-3 lg:gap-5  ">
        <h3 className=" ">
          The Agile Sales Process
        </h3>
        <p className="text-sm lg:text-lg max-w-5xl">
          LivetourPRO streamlines your sales process by capturing leads and assigning
          them to tour executives. Track every enquiry and its status in real
          time—all from one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {agileSalesData.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="w-full bg-white flex flex-col gap-2 border p-4 rounded-3xl border-gray-200 hover:border-gray-400 justify-between  group  duration-300"
            >
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-red-100 to-red-300 rounded-full flex items-center justify-center">
                <div className="group-hover:scale-110 transition-transform duration-300"><Icon className="size-8 " /></div>
              </div>
              <h4 className="">
                {title}
              </h4>
              <p className="text-sm lg:text-base">
                {description}
              </p>
              <Link
                to="/comingson"
                className="btn-icon-hover-red flex justify-center items-center mt-2"
              >
                Learn more
                <ArrowRight className="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ScrollSlideLeft>
);

const RememberEverythingSection = ({ images }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <ScrollSlideRight>
      <div className=" flex flex-col gap-3 lg:gap-5 ">
        {/* Heading Section */}

        <h3 className="">
          LivetourPRO Remember Everything
        </h3>
        <p className="text-sm lg:text-lg max-w-5xl">
          LivetourPRO acts as your business brain—tracking arrivals, departures,
          ongoing tours, cut-off dates, aged payments, receivables, and more for
          smooth operations.
        </p>


        {/* Background Section */}
        <div
          className=" rounded-3xl overflow-hidden"
          style={{ backgroundImage: `url(${''})` }}
        >
          <div
            ref={sectionRef}
            className=""
          >
            {/* LEFT COLUMN - Cards */}
            <div className="flex-col lg:flex-row grid-cols-1 p-6 lg:p-12 overflow-hidden bg-red-900 rounded-3xl flex gap-4 ">
              {rememberEverythingData.map(({ icon: Icon, title, description }, index) => (
                <div key={index} className="w-full relative group bg-white flex flex-col gap-2 p-4 rounded-3xl  hover:border-gray-400 justify-between  group  duration-300">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 
                                  group-hover:grayscale transition-all blur-xs duration-500 rounded-3xl z-0"
                    style={{ backgroundImage: `url(${slideone})` }}
                  />
                  <div className="w-16 h-16 z-20 relative bg-gradient-to-br from-red-100 to-red-300 rounded-full flex items-center justify-center">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      <Icon className="size-8 " />
                    </div>
                  </div>
                  <h4 className="relative z-20">
                    {title}
                  </h4>
                  <p className="relative z-20">
                    {description}
                  </p>
                  <Link
                    to="/comingson"
                    className="btn-icon-hover-red flex w-full lg:w-fit justify-center items-center mt-2 relative z-20"
                  >
                    Learn more
                    <ArrowRight className="" />
                  </Link>
                </div>
              ))}
            </div>
            {/* <div className="absolute bottom-0 text-white right-0">
  <img src={cart1} alt="" className="w-96" />
</div> */}
            {/* RIGHT COLUMN (empty for layout balance) */}

          </div>
        </div>
      </div>
    </ScrollSlideRight>
  );
};

const SecuritySection = ({ images }) => (
  <ScrollSlideLeft>
    <div className=" flex flex-col gap-3 lg:gap-5 ">

      <h3 className="">
        Security & Productivity
      </h3>
      <p className="text-sm lg:text-lg max-w-5xl">
        We know travel is a sensitive and competitive industry. That's why
        LivetourPRO is built with security and productivity in mind—giving clients
        the confidence and control to run their business smoothly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {securityData.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="w-full bg-white flex flex-col gap-2 border p-4 rounded-3xl border-gray-200 hover:border-gray-400 justify-between  group  duration-300">
            <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center ">
              <div className="group-hover:scale-110 transition-transform duration-300">
                <Icon className="size-8" />
              </div>
            </div>
            <h4 className="">
              {title}
            </h4>
            <p className="text-sm lg:text-base">
              {description}
            </p>

            <Link
              to="/comingson"
              className="btn-icon-hover-red flex justify-center items-center mt-2"
            >
              Learn more
              <ArrowRight className="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  </ScrollSlideLeft>
);

const AccountsSection = ({ images }) => (
  <ScrollSlideRight>
    <div className=" lg:px-0 xl:px-0  ">
      <div className=" flex flex-col gap-3 lg:gap-5 ">
        <h3 className="">
          Manage Accounts and Reports
        </h3>
        <p className="text-sm lg:text-lg max-w-5xl">
          LivetourPRO goes beyond CRM—handle accounts, salaries, and expenses
          effortlessly, with smart visual reports for clear business insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {accountsData.map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="w-full bg-white flex flex-col gap-2 border p-4 rounded-3xl border-gray-200 hover:border-gray-400 justify-between  group  duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <Icon className="size-8" />
                </div>
              </div>
              <h4 className="">
                {title}
              </h4>
              <p className="text-sm lg:text-base">
                {description}
              </p>

              <Link
                to="/comingson"
                className="btn-icon-hover-red flex justify-center items-center mt-2"
              >
                Learn more
                <ArrowRight className="" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  </ScrollSlideRight>
);

const ResourceSection = ({ images }) => (
  <ScrollSlideLeft>
    <div className="text-left ">
      <div className=" flex flex-col gap-3 lg:gap-5">

        <h3 className="">
          Resource Management
        </h3>
        <p className="text-sm lg:text-lg max-w-5xl">
          With LivetourPRO, centralize all your business resources—properties,
          vehicles, agents, and more. Manage seasonal pricing and equip your
          team with accurate, approved data to ensure smooth, error-free
          operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {resourceData.map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="w-full bg-white flex flex-col gap-2 border p-4 rounded-3xl border-gray-200 hover:border-gray-400 justify-between  group  duration-300">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <Icon className="size-8" />
                </div>
              </div>
              <h4 className="">
                {title}
              </h4>
              <p className="text-sm lg:text-base">
                {description}
              </p>

              <Link
                to="/comingson"
                className="btn-icon-hover-red flex justify-center items-center mt-2"
              >
                Learn more
                <ArrowRight className="" />
              </Link>
            </div>
          ))}
        </div>
        <div className="bg-red-900  p-8 sm:p-12 md:p-16 rounded-3xl">
          <img
            src={images.resoucesManagement}
            alt="Resource Visual"
            className="w-full rounded-3xl h-auto object-contain mx-auto  "
          />
        </div>
      </div>


    </div>
  </ScrollSlideLeft>
);

const EmailTemplatesSection = ({ images }) => (
  <ScrollSlideRight>
    <div className="text-left">
      <div className=" flex flex-col gap-3 lg:gap-5">
        <h3 className="">
          Email Templates
        </h3>
        <p className="text-sm lg:text-lg max-w-5xl">
          A polished email leaves a lasting impression. LivetourPRO delivers
          itineraries through beautifully designed templates. Want something
          custom or multiple styles? We've got you covered.
        </p>
        <div className="bg-red-900 overflow-hidden rounded-3xl">
          <div className="grid grid-cols-1  lg:grid-cols-2 items-center">
            <div className="md:p-12 p-4 border-b lg:border-r border-gray-300">
              <div className="w-full bg-white flex flex-col gap-2 p-4 rounded-3xl justify-between  group  duration-300">
                <div className="w-full bg-white flex flex-col gap-2 rounded-3xl border-gray-200 hover:border-gray-400 justify-between  group  duration-300">
                  <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center">
                    <img
                      src={images[newsletterData.icon]}
                      alt={newsletterData.title}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <h4 className="">
                    {newsletterData.title}
                  </h4>
                  <p className="text-sm lg:text-base">
                    {newsletterData.description}
                  </p>
                  <Link
                    to="/comingson"
                    className="btn-icon-hover-red flex justify-center items-center mt-2 w-fit"
                  >
                    Learn more
                    <ArrowRight className="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center  items-center p-0 h-full ">
              <img
                src={images.emailTemps}
                alt="Email Illustration"
                className="w-[500px]  object-contain rounded-2xl p-5"
              />
            </div>
          </div>
        </div>
      </div>


    </div>
  </ScrollSlideRight>
);

const FlexibilitySection = ({ images }) => (
  <ScrollSlideLeft>
    <div className=" flex flex-col gap-3 lg:gap-5 mb-10 lg:mb-20">

      <h3 className="">
        LivetourPRO is More Flexible
      </h3>
      <p className="text-sm lg:text-lg max-w-5xl">
        LivetourPRO adapts to your business—manage seasonal pricing, integrate
        third-party tools, or build custom platforms. Its modular design offers
        full flexibility to shape the system around your workflow.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {flexibilityData.map((item, idx) => (
          <div key={idx} className="w-full bg-white flex flex-col gap-2 border p-4 rounded-3xl border-gray-200 hover:border-gray-400 justify-between  group  duration-300">
            <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-red-100 to-red-300 flex items-center justify-center">
              <div className=" group-hover:scale-110 transition-transform duration-300"> <img
                src={images[item.icon]}
                alt={item.title}
                className="w-8 h-8 rounded-full object-cover"
              />
              </div>
            </div>
            <h4 className="">
              {item.title}
            </h4>
            <p className="text-sm lg:text-base">
              {item.description}
            </p>
            <Link
              to="/comingson"
              className="btn-icon-hover-red flex justify-center items-center mt-2"
            >
              Learn more
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        ))}
      </div>

    </div>
  </ScrollSlideLeft>
);

export default FeatureShowcase;