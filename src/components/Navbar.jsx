import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import logo from '../../src/assets/main-logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const links = [
    { label: "About Us", href: "/aboutus" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", hasDropdown: true },
    { label: "Resources", href: "/resources" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Marketplace", href: "https://livetour-rt.vercel.app/" },
    { label: "Sign in", href: "/signin" },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setContactDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setContactDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Mobile Top Logo */}
      <Link to={'/'} className="left-0 w-full bg-white justify-start z-40 lg:hidden px-3 sm:px-4 py-2 sm:py-3 shadow-sm flex items-center md:justify-center">
        <img
          src={logo}
          alt="Logo"
          className="h-10 sm:h-8 md:h-10 object-contain"
        />
      </Link>

      {/* Desktop Navbar */}
      <nav className="w-full h-12 sm:h-14 lg:h-16 font-semibold bg-white hidden lg:flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 relative z-50 ">
        {/* Left Nav Links */}
        <div className="flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
          {links.slice(0, 3).map((link) => (
            <div key={link.label} className="relative">
              {link.hasDropdown ? (
                <div
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="relative group"
                >
                  <button className="hover:text-black font-semibold flex items-center gap-1 py-2 text-gray-700 text-sm lg:text-base transition-colors">
                    {link.label}
                    <span className="text-xs">▼</span>
                  </button>
                  {contactDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 lg:p-6 flex flex-col sm:flex-row gap-4 lg:gap-4 items-center min-w-[280px] lg:h-fit sm:min-w-[320px] lg:min-w-fit">
                      <div className="w-28 rounded-2xl p-2 border-2 border-red-600">
                        <img
                          src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://wa.me/919895758254"
                          alt="WhatsApp QR"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      {/* Contact Options */}
                      <div className="flex flex-col space-y-2 sm:space-y-3">
                        <div

                          className="flex flex-col gap-1 text-nowrap"
                        >
                          <Link
                            to="/contactUs"
                            className="w-full bg-red-600 py-2 text-xs px-3 no-underline hover:no-underline rounded-lg font-medium text-gray-100 text-center"
                          >
                            Contact Us
                          </Link>
                          <button className="w-full  bg-red-600 py-2 text-xs px-3 rounded-lg font-medium text-gray-100">Become a Partner</button>
                          <button className="w-full  bg-red-600 py-2 text-xs px-3 rounded-lg font-medium text-gray-100">Watch Demo</button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.href}
                  className="hover:text-black text-gray-700 text-sm lg:text-base transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Center Logo */}
        <Link to="/">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="h-8 sm:h-10 lg:h-12 w-32 sm:w-40 lg:w-44 xl:w-48 flex items-start justify-center text-sm font-bold -mt-6 sm:-mt-4">
              <img
                src={logo}
                alt="Logo"
                className="h-8 sm:h-10 lg:h-15 md:-mt-4 object-contain"
              />
            </div>

          </div>
        </Link>

        {/* Right Nav Links */}
        <div className="flex items-center space-x-3 lg:space-x-4 xl:space-x-6">
          {links.slice(3, -1).map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={
                link.label === "Marketplace"
                  ? "text-red-600 hover:text-red-700 text-sm lg:text-base transition-colors"
                  : "hover:text-black text-gray-700 text-sm lg:text-base transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={links[links.length - 1].href}
            className="bg-red-500 text-white font-semibold px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full hover:bg-red-600 transition-colors text-xs sm:text-sm lg:text-base"
          >
            {links[links.length - 1].label}
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Bar with Menu and Signup */}
      <div className="fixed bottom-0 left-0 right-0 w-full z-50 lg:hidden flex items-center justify-between px-3 sm:px-4 bg-white shadow-lg border-t border-gray-200">
        <button
          onClick={() => setMenuOpen(true)}
          className="text-black text-lg sm:text-xl font-bold py-3 sm:py-4 px-2 sm:px-3 hover:bg-gray-50 rounded transition-colors"
        >
          ☰
        </button>
        <Link
          to="/signup"
          className="bg-red-600 text-white text-xs sm:text-sm md:text-base w-full font-semibold px-3 sm:px-4 py-3 sm:py-4 hover:bg-red-700 transition-colors text-center ml-2 sm:ml-4 rounded-sm"
        >
          Sign up for free
        </Link>
      </div>

      {/* Mobile Slide-Out Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-start items-end sm:items-start lg:hidden">
          {/* Blurred Background */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Slide-Out Menu */}
          <div className="relative z-20 bottom-12 sm:bottom-16 md:bottom-20 left-2 sm:left-3 md:left-4 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-2xl bg-white w-[calc(100vw-2rem)] sm:w-80 md:w-96 max-w-sm max-h-[75vh] sm:max-h-[80vh] md:max-h-[85vh] overflow-y-auto">
            <div className="min-h-32 sm:min-h-36">
              <div className="absolute right-3 sm:right-4 top-3 sm:top-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-black hover:bg-gray-100 p-1 rounded-full transition-colors"
                >
                  <X className="stroke-2 w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <h2 className="pl-2">Menu</h2>
              <div className="space-y-1 sm:space-y-2">
                {links.map((link) => (
                  <div key={link.label} className="w-full">
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setContactDropdownOpen(!contactDropdownOpen)
                          }
                          className="text-black text-sm sm:text-base hover:text-gray-800 flex items-center gap-2 w-full text-left py-2 px-2 hover:bg-gray-50 rounded transition-colors"
                        >
                          {link.label}
                          <span
                            className={`text-xs transition-transform ${contactDropdownOpen ? "rotate-180" : ""
                              }`}
                          >
                            <ChevronDown className="size-5"/>
                          </span>
                        </button>
                        {contactDropdownOpen && (
                          <div className="ml-2 sm:ml-4 mt-2 space-y-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border border-gray-300 rounded p-1">
                              <img
                                src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://wa.me/919895758254"
                                alt="WhatsApp QR"
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="space-y-2">
                              <Link
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="block text-gray-700 text-xs sm:text-sm hover:text-black py-1 hover:bg-white px-2 rounded transition-colors"
                              >
                                Become a Partner
                              </Link>
                              <Link
                                to="/demo"
                                onClick={() => setMenuOpen(false)}
                                className="block text-gray-700 text-xs sm:text-sm hover:text-black py-1 hover:bg-white px-2 rounded transition-colors"
                              >
                                Watch Demo
                              </Link>
                              <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors">
                                Call Us
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block text-sm sm:text-base my-1 sm:my-2 py-2 px-2 rounded hover:bg-gray-50 transition-colors ${link.label === "Marketplace"
                            ? "text-red-600 font-semibold"
                            : "text-black hover:text-gray-800"
                          }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;