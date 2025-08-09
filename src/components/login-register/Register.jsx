import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import bgImage from "../../assets/clients/stone-texture-background_-_Copy-removebg-preview.png";
import google from "../../assets/clients/google.png";
import linkedin from "../../assets/clients/linkedin (1).png";

const socialIcons = [
  { src: google, alt: "Google" },
  { src: linkedin, alt: "LinkedIn" },
];

const Register = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(https://static.zohocdn.com/iam/v2/components/images/bg.49756b7c711696d95133fa95451f8e13.svg)`,
      }}
    >
           <div className="absolute top-18 left-1/2 transform -translate-x-1/2 z-10">
                 <Link to="/">
                   <img
                     src="../../assets/main-logo.png"
                     alt="LiveTour Logo"
                     className="h-15 w-auto hover:scale-105 transition-transform duration-300"
                   />
                 </Link>
               </div>
      <div className="w-[594px] h-auto max-auto bg-white rounded-lg shadow-xl p-8 md:p-10">
        {/* Logo + Heading */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-1">Sign up</h2>
            <p className="text-gray-600">Start your 15-day free trial</p>
          </div>

        </div>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Business Email"
            className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="+91"
            className="w-full border px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            I agree to the{" "}
            <a href="/termsservice" className="text-blue-600 mx-1 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/PrivacyPolicy" className="text-blue-600 ml-1 hover:underline">
              Privacy Policy
            </a>
          </div>
          <Link to="/contactUs">
<button
  type="submit"
  className="w-[200px] bg-red-600 hover:bg-red-700 text-white py-3 text-sm rounded-full font-semibold mx-auto block"
>
 Get Started
</button>
</Link>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-4 text-sm text-gray-500">or sign up using</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Social icons */}
      <div className="flex justify-center gap-4 mb-6">
  {socialIcons.map((icon, idx) => (
    <img key={idx} src={icon.src} alt={icon.alt} className="w-7 h-7" />
  ))}
</div>


        {/* Sign in link */}
        <p className="text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>

        {/* Certifications */}

      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-sm text-gray-500 text-center w-full">
        © 2025 LivetourPRO Pvt. Ltd. All Rights Reserved.
      </div>
    </div>
  );
};

export default Register;
