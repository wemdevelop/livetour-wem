import { MoveRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

function Annual() {
  const pricingTiers = [
    {
      name: 'Billed Quarterly',
      price: 2750,
      original: null,
      billingText: '',
      userType: 'User/Month',
      badge: null,
      features: [
        'All core features',
        '3 user accounts',
        'Basic reporting',
        'Lead tracking',
        'Email integration'
      ],
    },
    {
      name: 'Half Yearly Plan',
      price: 2500,
      original: 550,
      billingText: '/user/month billed every 6 month',
      badge: null,
      features: [
        'All Quarterly features',
        'Priority support',
        'Advanced reporting',
        'Team collaboration tools',
        'Task automation',
        'Export reports to Excel'
      ],
    },
    {
      name: 'Annual Plan',
      price: 2000,
      original: 900,
      billingText: '/user/month',
      badge: 'MOST POPULAR',
      features: [
        'All Half Yearly features',
        'Unlimited pipelines',
        'Dedicated account manager',
        'Custom branding options',
        'AI-powered analytics',
        'Multi-language support',
        'Workflow automation',
        'Role-based access control',
        'Email & SMS integrations'
      ],
    },
  ];

  return (
    <>
    <div className="">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-black text-center text-3xl sm:text-4xl md:text-5xl font-semibold  leading-snug max-w-5xl mx-auto px-4">
          The world’s #1 CRM for travel agents and tour operators
        </h1>
        <div className="flex flex-wrap justify-center gap-4 text-base md:text-[20px] text-black font-medium mb-6">
          {[
            'Pro Itinerary Builder',
            'Agile Followup System',
            'Track Employees',
            'Manage Accounts',
            'Invoicing & Reservations',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-green-600 font-bold">✔</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pricingTiers.map((tier, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-6 shadow-md border border-gray-200 relative ${index === 0 ? 'mt-0' : ''
              }`}
          >
            {/* Badge */}
            {tier.badge && (
              <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold bg-green-600 text-white rounded-bl-xl">
                * {tier.badge}
              </div>
            )}

            <h3 className="text-center text-lg font-semibold">{tier.name}</h3>

            {tier.original ? (
              <p className="text-center text-sm text-black line-through mt-2">
                ₹{tier.original}
              </p>
            ) : (
              <div className="h-6 mt-2"></div> // Ensures button alignment
            )}

            <p className="text-center text-4xl font-bold mt-1">₹{tier.price}</p>
            <p className="text-center text-sm text-black">{tier.billingText}</p>
            <p className="text-center text-xs text-black  mb-4">{tier.userType}</p>


            {/* CTA Button */}
            <div className="flex justify-center mt-4">
              <Link to="/contactUs">
                <button className="group cursor-pointer bg-red-600 hover:bg-red-700 mb-5 text-white px-1 py-2 rounded-full flex items-center justify-center gap-1 sm:w-auto text-[15px] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
                  Get Free Demo
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
            </div>

            {/* Features */}
            <div className="text-[16px] text-black space-y-2">
              {tier.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✔</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Annual;
