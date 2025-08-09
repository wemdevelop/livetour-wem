// import React from 'react';
// import { FaMicrosoft, FaGoogle, FaShopify, FaMailchimp } from 'react-icons/fa';
// import { SiZapier } from 'react-icons/si';
// import { FaMicrosoft } from 'react-icons/fa';


// // Add more icons as needed...

// const IntegrationsSection = () => {
// const icons = [
//   { Icon: FaMicrosoft, name: 'Outlook' },
//   { Icon: FaUsers, name: 'Teams' },
//   { Icon: FaGoogle, name: 'Google' },
//   { Icon: FaMailchimp, name: 'Mailchimp' },
//   { Icon: FaShopify, name: 'Shopify' },
//   { Icon: SiZapier, name: 'Zapier' },
// ];


// return (
//     <div
//       className="w-full py-16 px-4 md:px-12 text-center text-black"
//       style={{
//         background:
//           'radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 10%, rgba(255, 0, 0, 0.3) 90%)',
//         backgroundColor: '#f27474',
//       }}
//     >
//       {/* Icons Row */}
//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         {icons.map(({ Icon, name }, index) => (
//           <div
//             key={index}
//             className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/50 flex items-center justify-center shadow-md"
//             title={name}
//           >
//             <Icon className="text-2xl md:text-3xl text-black" />
//           </div>
//         ))}
//       </div>

//       {/* Text Content */}
//       <h2 className="text-2xl md:text-4xl font-bold text-black">
//         Bigin integrates well with <br className="hidden md:block" /> all your favorite applications
//       </h2>
//       <p className="text-sm md:text-base text-black mt-4 max-w-xl mx-auto">
//         Connect Bigin with popular apps such as Microsoft Outlook, Teams, Google Workspace,
//         Mailchimp, Shopify, Zapier and more.
//       </p>

//       {/* Button */}
//       <button className="mt-6 px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-all text-sm md:text-base">
//         See All Integrations →
//       </button>
//     </div>
//   );
// };

// export default IntegrationsSection;

// import React, { useState } from "react";
// import twitter from "../assets/twitter2-removebg-preview.png";
// import linkedIn from "../assets/linkedin.png";
// import youtube from "../assets/youtube.png";
// import facebook from "../assets/communication.png";
// import instagram from "../assets/instagram.png";
// import { Mail, Phone } from "lucide-react";
// import emart from "../assets/wem-logo.png";

// const Footer = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const sections = [
//     { title: "Solutions", links: ["Features", "Pricing", "Clients", "Signup"] },
//     { title: "Resources", links: ["Help Center", "Support Ticket", "Videos"] },
//     {
//       title: "Company",
//       links: ["About", "Careers", "Blog", "Contact us", "Press"],
//     },
//     { title: "Partners", links: ["Become A Reseller", "Investors"] },
//     { title: "Connect with Us", links: [] }, // Icons will be used here
//   ];

//   const renderSection = (section, index) => {
//     const isOpen = openIndex === index;

//     return (
//       <div
//         key={index}
//         className="border-b border-gray-700 md:border-none pb-4 md:pb-0"
//       >
//         <div
//           className="flex justify-between items-center cursor-pointer md:cursor-default py-2"
//           onClick={() => {
//             if (window.innerWidth < 768) {
//               setOpenIndex(isOpen ? null : index);
//             }
//           }}
//         >
//           <h4 className="text-white font-bold text-base">{section.title}</h4>
//           <span className="text-white md:hidden">{isOpen ? "−" : "+"}</span>
//         </div>
//         <ul
//           className={`text-sm text-gray-300 space-y-2 ${
//             isOpen ? "block" : "hidden"
//           } md:block`}
//         >
//           {section.links.map((item, i) => (
//             <li key={i}>
//               <a
//                 href="#"
//                 className="group relative inline-flex items-center text-sm hover:underline hover:decoration-red-500 hover:decoration-2 transition"
//               >
//                 {item}
//                 <span className="ml-1 text-red-500 transform -translate-y-1 opacity-0 group-hover:opacity-100 transition duration-200">
//                   ↑
//                 </span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return (
//     <footer className="bg-black text-gray-300 pt-10 pb-6 text-md">
//       {/* Top Contact */}
//       <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
//         <div className=" border-b-1 h-[6vh] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white">
//           <div className="flex items-center gap-6">
//             <Phone className="text-red-500 w-4 h-4" />
//             <a
//               href="tel:+1234567890"
//               className="underline hover:text-red-400 transition"
//             >
//               +1 (234) 567-890
//             </a>
//             <Phone className="text-red-500 w-4 h-4" />
//             <a
//               href="tel:+1234567890"
//               className="underline hover:text-red-400 transition"
//             >
//               +1 (234) 567-890
//             </a>
//           </div>
//           <div className="flex items-center gap-2">
//             <Mail className="text-red-500 w-4 h-4" />
//             <a
//               href="mailto:support@livetourpro.com"
//               className="underline hover:text-red-400 transition"
//             >
//               support@livetourpro.com
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Grid */}
//       <div className="max-w-7xl bg-blue-300 mx-auto px-4 md:px-8 mt-8 flex flex-col md:flex-row items-start justify-between gap-x-10">
//         {/* Partner/Webinar Images */}
//         {/* Partner/Webinar + Connect Section */}
//         <div className="flex flex-col gap-6 bg-amber-100 ml-2">
//           <img
//             src="https://oweb.zohowebstatic.com/sites/oweb/images/zohobigin/images/partners-footer-banner-1x.webp"
//             alt="Partner Logo"
//             className="w-64"
//           />
//           <img
//             src="https://oweb.zohowebstatic.com/sites/oweb/images/zohobigin/webinar/master-craft-webinar-banner-1x.webp"
//             alt="Webinar Banner"
//             className="w-64"
//           />

//           {/* Connect with Us block with consistent spacing */}
//           <div className="text-left">
//             <h2 className="text-white font-bold mb-3">Connect with Us</h2>
//             <div className="flex gap-3">
//               <img
//                 src={twitter}
//                 alt="Twitter"
//                 className="w-6 h-6 object-contain"
//               />
//               <img
//                 src={linkedIn}
//                 alt="LinkedIn"
//                 className="w-6 h-6 object-contain"
//               />
//               <img
//                 src={youtube}
//                 alt="YouTube"
//                 className="w-6 h-6 object-contain"
//               />
//               <img
//                 src={facebook}
//                 alt="Facebook"
//                 className="w-6 h-6 object-contain"
//               />
//               <img
//                 src={instagram}
//                 alt="Instagram"
//                 className="w-6 h-6 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Link Sections */}
//         <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-6">
//           {sections.map((section, index) => renderSection(section, index))}
//         </div>

//         {/* Social Icons */}
//         {/* <div className="flex flex-col items-start md:items-end">
//     <h2 className="text-white font-bold mb-3">Connect with Us</h2>
//     <div className="flex gap-3">
//       <img src={twitter} alt="Twitter" className="w-6 h-6 object-contain" />
//       <img src={linkedIn} alt="LinkedIn" className="w-6 h-6 object-contain" />
//       <img src={youtube} alt="YouTube" className="w-6 h-6 object-contain" />
//       <img src={facebook} alt="Facebook" className="w-6 h-6 object-contain" />
//       <img src={instagram} alt="Instagram" className="w-6 h-6 object-contain" />
//     </div>
//   </div> */}
//       </div>

//       {/* Horizontal Line Separator */}

//       {/* Footer Links */}
//       <div className=" border-t mt-6 pt-4 pb-6 text-center text-xs text-white w-full max-w-7xl mx-auto">
//         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-3 sm:gap-4">
//           <a href="#" className="hover:underline">
//             Home
//           </a>
//           <span className="hidden sm:inline">|</span>
//           <a href="#" className="hover:underline">
//             Contact Us
//           </a>
//           <span className="hidden sm:inline">|</span>
//           <a href="#" className="hover:underline">
//             Security
//           </a>
//           <span className="hidden sm:inline">|</span>
//           <a href="#" className="hover:underline">
//             Terms of Service
//           </a>
//           <span className="hidden sm:inline">|</span>
//           <a href="#" className="hover:underline">
//             Privacy Policy
//           </a>
//           <span className="hidden sm:inline">|</span>
//           <a href="#" className="hover:underline">
//             Cookie Policy
//           </a>
//         </div>

//         {/* Copyright */}
//         <div className="mt-4 flex justify-center items-center gap-3 flex-wrap">
//           <span>
//             © {new Date().getFullYear()}, LivetourPro. All Rights Reserved.
//           </span>
//           <img src={emart} alt="Logo" className="w-10 h-auto" />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
