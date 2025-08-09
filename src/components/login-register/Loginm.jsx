import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

// Assets
import illustration1 from "../../assets/clients/crousal1.jpg";
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
      "Access Livetour quickly and securely using OTP-based login or your preferred social media account.",
    button: "Get started",
  },
];

const Login = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % illustrations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    if (!input.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Input Required",
        text: "Please enter your email or mobile number.",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Login Info Received",
      text: `You entered: ${input}`,
      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(https://static.zohocdn.com/iam/v2/components/images/bg.49756b7c711696d95133fa95451f8e13.svg)`,
      }}
    >
      {/* Logo at Top Center */}
      <div className="absolute top-31 left-1/2 transform -translate-x-1/2 z-10">
        <Link to="/">
          <img
            src={logo}
            alt="LiveTour Logo"
            className="h-15 w-auto hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      <div className="w-[894px] h-[536px] bg-white rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* Left Side - Form */}
        <div className="p-8 md:p-10 flex flex-col items-center justify-center">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-1 text-center">Sign in</h2>
            <p className="text-gray-600 mb-6 text-center">to access LivetourPRO</p>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Email address or mobile number"
              className="w-full border border-gray-300 rounded-full px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-full px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <div className="w-full text-right mb-4">
              <Link to="/Forgotpassword" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </Link>
            </div>


          <div className="flex justify-center">
   <Link to="/"> <button
    type="button"
    onClick={handleLogin}
    className="bg-red-600 cursor-pointer hover:bg-red-700 text-white py-3 px-10 text-[15px] rounded-full font-semibold"
  >
    Next
  </button>

            </Link>
</div>


            <p className="text-gray-600 text-center my-4">Sign in using</p>
            <div className="flex justify-center gap-3 mb-6">
              {socialIcons.map((icon, idx) => (
                <div
                  key={idx}
                  className="w-11 h-11 rounded-md bg-gray-100 cursor-pointer flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                >
                  <img src={icon.src} alt={icon.alt} className="w-5 h-5" />
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 text-center">
              Don't have a LivetourPRO account?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Sign up now
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="hidden md:flex items-center justify-center bg-gray-50 p-6 md:p-10 overflow-hidden">
          <div
            key={currentImage}
            className="text-center transition-all duration-700 ease-in-out animate-fadeIn"
          >
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

export default Login;