import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import twitter from '../assets/twitter2-removebg-preview.png';
import linkedIn from '../assets/linkedin.png';
import facebook from '../assets/communication.png';
import youtube from '../assets/youtube.png';
import instagrm from '../assets/instagram.png';
import emart from '../assets/wem-logo.png';
import email from '../assets/slider/communication__1_-removebg-preview.png';
import indian from '../assets/slider/world-removebg-preview.png';
import uae from '../assets/slider/world-flag-removebg-preview.png';

// ✅ Collapsible Footer Section Component
const FooterSection = ({ title, links, textSize = "text-sm" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    if (window.innerWidth < 768) setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-700 md:border-none pb-4 md:pb-0">
      <div
        className="flex justify-between items-center cursor-pointer md:cursor-default mb-2"
        onClick={toggleSection}
      >
        <h4 className="font-bold text-base">{title}</h4>
        <button className="text-white md:hidden text-lg">
          {isOpen ? '−' : '+'}
        </button>
      </div>

      <ul className={`space-y-1 ${textSize} ${isOpen ? 'block' : 'hidden'} md:block`}>
        {links.map((link, idx) => (
          <li key={idx}>
            {typeof link === 'string' ? (
              <a href="#" className="hover:underline">{link}</a>
            ) : (
              <Link to={link.path} className="hover:underline">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// ✅ Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-6">
      <div className="text-[20pxpx]">
        {/* Contact Top Row */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-700 pb-4">
            {/* Phone Numbers */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex items-center gap-2">
                <img src={indian} alt="India Flag" className="w-5 h-5" />
                <a href="tel:9895758254">+91 9895758254</a>
              </div>
              <div className="flex items-center gap-2">
                <img src={uae} alt="UAE Flag" className="w-5 h-5" />
                <a href="tel:564948046">+971 564948046</a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <img src={email} alt="Email Icon" className="w-5 h-5" />
              <a href="mailto:info@livetourpro.com" className="text-white hover:underline">
                info@livetourPRO.com
              </a>
            </div>


          </div>
        </div>

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 px-4 py-8">
          {/* Logos */}
          <div>
            <img
              src="https://oweb.zohowebstatic.com/sites/oweb/images/zohobigin/images/partners-footer-banner-1x.webp"
              alt="Partner Logo"
              className="w-40 sm:w-52"
            />
            <img
              src="https://oweb.zohowebstatic.com/sites/oweb/images/zohobigin/webinar/master-craft-webinar-banner-1x.webp"
              alt="Webinar"
              className="w-40 sm:w-52 mt-3"
            />
          </div>

          {/* Solutions */}
          <FooterSection
            title="Solutions"
            textSize="text-[17px]"
            links={[
              { label: 'Features', path: '/features' },
              { label: 'Pricing', path: '/pricing' },
              { label: 'Clients', path: '/clients' },
              { label: 'Signup', path: '/register' },
            ]}
          />

          {/* Resources */}
          <FooterSection
            title="Resources"
            textSize="text-[17px]"
            links={[
              { label: 'Help Center', path: '/helpcenter' },
              { label: 'Support Ticket', path: '/supertickt' },
              { label: 'Videos', path: '/videos' },
            ]}
          />

          {/* Company */}
          <FooterSection
            title="Company"
            textSize="text-[17px]"
            links={[
              { label: 'About', path: '/aboutus' },
              { label: 'Careers', path: '/career' },
              { label: 'Blog', path: '/blog' },
              { label: 'Contact Us', path: '/contactUs' },
            ]}
          />

          {/* Partners & Social */}
          <div>
            <FooterSection
              title="Partners"
              textSize="text-[17px]"
              links={[
                { label: 'Reseller', path: '/resellers' },
                { label: 'Investors', path: '/investor' }
              ]}
            />

            <h4 className="font-bold text-[18px] mb-2 mt-5">Follow Us On</h4>
            <div className="flex flex-wrap gap-3 mt-2">
              {[
                { icon: twitter, link: 'https://twitter.com/LivetourPro' },
                { icon: linkedIn, link: 'https://www.linkedin.com/company/LivetourPro' },
                { icon: youtube, link: 'https://www.youtube.com/@LivetourPro' },
                { icon: facebook, link: 'https://www.facebook.com/LivetourPro' },
                { icon: instagrm, link: 'https://www.instagram.com/LivetourPro' }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.icon} className="w-6 h-6" alt={`Social ${i}`} />
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-700 py-6 px-4">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex flex-wrap text-[18px] justify-center items-center gap-3 sm:gap-4 text-center text-xs">
              {[
                { label: 'Home', path: '/' },
                { label: 'Contact Us', path: '/contactUs' },

                { label: 'Terms of Service', path: '/termsservice' },
                { label: 'Privacy Policy', path: '/PrivacyPolicy' },

              ].map((item, i, arr) => (
                <React.Fragment key={i}>
                  <Link to={item.path} className="hover:underline">
                    {item.label}
                  </Link>
                  {i !== arr.length - 1 && <span className="hidden sm:inline">|</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Copyright */}
            <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 text-center text-[15px]">
              <span>© {new Date().getFullYear()} LivetourPRO. All Rights Reserved.</span>
              <Link to="https://www.worldemart.com/"><img src={emart} alt="Logo" className="w-10 h-auto" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
