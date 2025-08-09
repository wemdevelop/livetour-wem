import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// Assets
import illustration1 from "../../assets/clients/2007.i039.019_cyber_security_spyware_data_protection_isometric_set-16-removebg-preview (1).png";
import illustration2 from "../../assets/clients/crousal2.jpg";
import logo from "../../assets/main-logo.png";
import google from "../../assets/clients/google.png";
import facebook from "../../assets/clients/facebook.png";
import instagram from "../../assets/clients/instagram (1).png";
import twitter from "../../assets/clients/twitter (2).png";

const socialIcons = [
  { src: google, alt: "Google" },
  { src: facebook, alt: "Facebook" },
  { src: instagram, alt: "Instagram" },
  { src: twitter, alt: "Twitter" },
];

const illustrations = [illustration1, illustration2];

const carouselContent = [
  {
    heading: "Passwordless sign-in",
    paragraph:
      "Move away from risky passwords and experience one-tap access to LivetourPRO. Download and install OneAuth.",
  },
  {
    heading: "Secure & Fast Login",
    paragraph:
      "Access LivetourPRO quickly and securely using OTP-based login or your preferred social media account.",
  },
];

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [currentImage, setCurrentImage] = useState(0);

  const handleForgotPassword = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email to receive reset instructions.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Reset Email Sent",
      text: `A password reset link has been sent to ${email}`,
      confirmButtonColor: "#3085d6",
    });

    setEmail("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % illustrations.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(https://static.zohocdn.com/iam/v2/components/images/bg.49756b7c711696d95133fa95451f8e13.svg)`,
      }}
    >
      {/* Logo at Top Center */}
      <div className="absolute top-34 left-1/2 transform -translate-x-1/2 z-10">
        <Link to="/">
          <img
            src={logo}
            alt="LiveTour Logo"
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Main Box */}
      <div className="w-[899px] h-[536px] bg-white rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Side - Form */}

      <div className="   shadow-xl rounded-2xl p-10 md:p-24 w-full  max-w-md">
        <div className=" h-[30vh] w-[300px] md:mt-10 md:-ml-5">
        <h2 className="text-[28px] md:text-[32px] font-bold text-center text-gray-800 ">
          Forgot Password?
        </h2>
        <p className="text-center text-black text-[15px] md:text-[16px] mb-6">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        <form onSubmit={handleForgotPassword}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 mb-4"
            required
          />

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 cursor-pointer text-white font-semibold py-3 px-6 rounded-full transition duration-300"
            >
              Send Reset Link
            </button>
          </div>
        </form>

        <div className="text-center pt-1">
          <Link to="/signin" className="text-red-600 hover:underline text-sm">
            Back to Login
          </Link>
        </div>
        </div>
      </div>

        {/* Right Side - Carousel */}
        <div className="hidden md:flex items-center justify-center bg-gray-50 p-6 md:p-10 overflow-hidden">
          <div className="text-center transition-all duration-700 ease-in-out animate-fadeIn">
            <img
              src={illustrations[currentImage]}
              alt={`Illustration ${currentImage + 1}`}
              className="w-72 h-72 object-contain mx-auto mb-6"
            />
            <h3 className="text-lg font-semibold mb-2">
              {carouselContent[currentImage].heading}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {carouselContent[currentImage].paragraph}
            </p>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {illustrations.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentImage === idx ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-sm text-gray-500 text-center w-full">
        © 2025 LivetourPRO. All Rights Reserved.
      </div>
    </div>
  );
};

export default ForgotPassword;
