// StickyScrollSection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StickyScrollSection = () => {
  const sectionsRef = useRef([]);
  const rightContentRef = useRef();

  useEffect(() => {
    sectionsRef.current.forEach((section, i) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex min-h-screen px-10 py-20 gap-10 bg-white">
      {/* Left Sticky Image */}
      <div className="w-1/2 sticky top-20 h-[80vh] flex justify-center items-center">
        <img
          src="/images/sample-image.jpg"
          alt="Sticky"
          className="max-h-full rounded-xl shadow-xl"
        />
      </div>

      {/* Right Scrollable Content */}
      <div className="w-1/2 space-y-20" ref={rightContentRef}>
        {["Section One", "Section Two", "Section Three", "Section Four"].map((text, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="p-10 bg-gray-100 rounded-xl shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4">{text}</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              magna id augue facilisis congue. Aliquam erat volutpat. Nulla
              facilisi. Etiam ut dignissim erat.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyScrollSection;
