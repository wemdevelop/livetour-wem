import React from "react";
import { motion } from "framer-motion";

// Sample logo URLs (replace these with your actual logo image paths)
const logos = [
  { name: "Toyota", src: "../../../src/assets/clients/andaman_triangle-removebg-preview.png", bg: "bg-red-50" },
  { name: "FedEx", src: "../../../src/assets/clients/globe_travel-removebg-preview.png", bg: "bg-green-50" },
  { name: "Philips", src: "../../../src/assets/clients/star-dmc-removebg-preview.png", bg: "bg-gray-100" },
  { name: "Amazon", src: "../../../src/assets/clients/aston-trips-removebg-preview.png", bg: "bg-yellow-50" },
  { name: "Suzuki", src: "../../../src/assets/clients/celebrate-vacation-removebg-preview.png", bg: "bg-blue-50" },
  { name: "Essilor", src: "../../../src/assets/clients/aklavya-online-removebg-preview.png", bg: "bg-gray-50" },
  { name: "Mercedes", src: "../../../src/assets/clients/myown-holidays-removebg-preview.png", bg: "bg-yellow-50" },
  { name: "Shiji", src: "../../../src/assets/clients/reeya-signature-holidays-removebg-preview.png", bg: "bg-pink-50" },
  { name: "Puma", src: "../../../src/assets/clients/brandSays4-removebg-preview.png", bg: "bg-cyan-50" },
  { name: "Daikin", src: "../../../src/assets/clients/brandSays10-removebg-preview.png", bg: "bg-blue-50" },
  { name: "Stanford", src: "../../../src/assets/clients/brandSays6-removebg-preview.png", bg: "bg-green-50" },
  { name: "Deloitte", src:"../../../src/assets/clients/brandSays1-removebg-preview.png", bg: "bg-blue-50" },
  { name: "SVT", src: "../../../src/assets/clients/brandSays10-removebg-preview.png", bg: "bg-gray-100" },
  { name: "KPMG", src: "../../../src/assets/clients/brandSays11-removebg-preview.png", bg: "bg-yellow-50" },
  { name: "IFFCO", src: "../../../src/assets/clients/logo-rover-removebg-preview.png", bg: "bg-pink-50" },
  { name: "Toyota", src: "../../../src/assets/clients/bakkah-logo-removebg-preview.png", bg: "bg-red-50" },
  { name: "Toyota", src: "../../../src/assets/clients/mystical-logo-removebg-preview.png", bg: "bg-pink-50" },
  { name: "Toyota", src: "../../../src/assets/clients/go-logo-removebg-preview.png", bg: "bg-gray-50" },
  { name: "Toyota", src: "../../../src/assets/clients/trip-tailor-logo-removebg-preview.png", bg: "bg-red-50" },
  { name: "Toyota", src: "../../../src/assets/clients/aleta-logo-removebg-preview.png", bg: "bg-cyan-50" },
  { name: "Toyota", src: "../../../src/assets/clients/trinity-logo-removebg-preview.png", bg: "bg-red-50" },
  { name: "Toyota", src: "../../../src/assets/clients/snowsun-logo-removebg-preview.png", bg: "bg-blue-50" },
];

const BrandGrid = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex justify-center mb-10">
          Trusted by the most respected brands
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className={`group ${logo.bg} flex items-center justify-center h-40 rounded-2xl border border-gray-100`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-20 object-contain transition-all duration-300 group-hover:h-24"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;
