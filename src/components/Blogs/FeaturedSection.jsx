import React from 'react';
import { TrendingUp, Users, Zap, Shield, MoveRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollSlideLeft from '../ui/ScrollSlideLeft';
import ScrollSlideRight from './../ui/ScrollSlideRight';

const FeaturedSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Real-time insights into customer behavior, booking patterns, and revenue optimization.",

    },
    {
      icon: Users,
      title: "Customer Management",
      description: "360-degree customer profiles with interaction history and personalized experiences.",
      // color: "bg-[#fae1b6]"
    },
    {
      icon: Zap,
      title: "Live Streaming",
      description: "Integrated live tour streaming with real-time chat and booking capabilities.",
      // color: "bg-[#fae1b6]"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with GDPR compliance and data protection protocols.",
      // color: "bg-[#fae1b6]"
    }
  ];

  return (
   
    <section className="py-16 sm:py-20 bg-white">
     
      <div className="container mx-auto px-4 md:px-0">
          <ScrollSlideLeft>
        {/* Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="">
            Why Choose TourCRM Pro?
          </h2>
          <p className="caption_text  text-center max-w-3xl mx-auto mb-10 mt-5">
            Our platform combines cutting-edge technology with industry expertise to deliver
            the most comprehensive tour management solution available.
          </p>
        </div>
        </ScrollSlideLeft>

        {/* Features Grid */}
          <ScrollSlideRight>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border p-6 rounded-3xl border-gray-400">
              <div className={`w-11 h-11 bg-gradient-to-br from-red-100 to-red-300 rounded-full flex items-center justify-center mb-4`}>
                <feature.icon className="" />
              </div>
              <h4 className="">{feature.title}</h4>
              <p className="text-sm mt-3 text-black">{feature.description}</p>
            </div>
          ))}
        </div>
        </ScrollSlideRight>

        {/* CTA Section */}
        <ScrollSlideLeft>
        <div className="mt-14 sm:mt-16 bg-red-900 text-white rounded-2xl px-6 py-10 sm:p-12 text-center">
          <h2 className="">
            Ready to Transform Your Tour Business?
          </h2>
          <p className="caption_text !text-white  text-center max-w-3xl mx-auto mb-10 mt-5">
            Join thousands of tour operators who have already revolutionized their operations with TourCRM Pro.
          </p>
          <div className="flex justify-center">
            <Link to="/contactUs">
              <button className="btn-icon-hover-red flex justify-center items-center mt-2">
                Start Free Trial
                <ArrowRight className="" />
              </button>
            </Link>
          </div>

        </div>
        </ScrollSlideLeft>
      </div>
    </section>
  );
};

export default FeaturedSection;
