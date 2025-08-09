import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import deliveryPng from '../../assets/img/cycle/delivery.png'
import deliveryGif from '../../assets/img/cycle/delivery.gif'
import paymentPng from '../../assets/img/cycle/payment.png'
import paymentGif from '../../assets/img/cycle/payment.gif'
import inventoryPng from '../../assets/img/cycle/inventory.png'
import inventoryGif from '../../assets/img/cycle/Inventory.gif'
import productPng from '../../assets/img/cycle/order.png'
import productGif from '../../assets/img/cycle/order.gif'
import hpyCustomPng from '../../assets/img/cycle/hpycustomers.png'
import hpyCustomGif from '../../assets/img/cycle/hpyCustomers.gif'
import orderPng from '../../assets/img/cycle/order.png'
import orderGif from '../../assets/img/cycle/order.gif'

const steps = [
  {
    label: "Online Order",
    image1: deliveryPng,
    image2: deliveryGif,
  },
  {
    label: "Payment Received",
    image1: paymentPng,
    image2: paymentGif,
  },
  {
    label: "Inventory",
    image1: inventoryPng,
    image2: inventoryGif,
  },
  {
    label: "Product Shipped",
    image1: productPng,
    image2: productGif,
  },
  {
    label: "Product Delivery",
    image1: orderPng,
    image2: orderGif,
  },
  {
    label: "Happy Customer",
    image1: hpyCustomPng,
    image2: hpyCustomGif,
  },
];

const Cycle = () => {
  const labelRefs = useRef([]);
  const image1Refs = useRef([]);
  const image2Refs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    steps.forEach((_, index) => {
      tl.to({}, {
        duration: 0.5,
        onStart: () => {
          labelRefs.current.forEach((el, i) => {
            if (!el) return;
            el.classList.toggle("glow", i === index);
            el.style.opacity = i === index ? "1" : "0.5";
          });

          image1Refs.current.forEach((el, i) => {
            if (el) el.style.display = i === index ? "none" : "block";
          });

          image2Refs.current.forEach((el, i) => {
            if (el) el.style.display = i === index ? "block" : "none";
          });
        }
      });
      tl.to({}, { duration: 2 });
    });
  }, []);

  return (
    <div className="w-full h-56 mt-20 overflow-hidden flex flex-col items-center justify-center">
      <div className="relative w-full max-w-7xl px-4">
        <div className="flex justify-between relative z-10 mb-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2"
              style={{ width: "150px" }}
            >
              <div
                ref={(el) => (labelRefs.current[index] = el)}
                className="text-center flex justify-center items-center overflow-hidden text-sm bg-green-200 h-36 w-36  !rounded-full font-semibold transition-opacity duration-300"
                style={{ opacity: 0.5 }}
              >
                <img
                  ref={(el) => (image1Refs.current[index] = el)}
                  src={step.image1}
                  alt="default"
                  className="!h-40 !w-40 object-cover flex"
                />
                <img
                  ref={(el) => (image2Refs.current[index] = el)}
                  src={step.image2}
                  alt="active"
                  className="!h-40 !w-40 object-cover flex hidden"
                />
              </div>
              <div className="text-center text-sm font-semibold">
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Glow Style */}
      <style>
        {`
          .glow {
            border: 2px solid #2563eb;
            border-radius: 8px;
            padding: 2px;
            transition: box-shadow 0.3s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default Cycle;

