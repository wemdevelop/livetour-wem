import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfiniteScrollCards = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const cards = container.querySelectorAll(".card");
      const totalCards = cards.length;
      const totalWidth = container.scrollWidth;

      gsap.to(container, {
        x: () => `-${totalWidth / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${totalWidth / 2}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          snap: 1 / totalCards,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full h-screen overflow-hidden bg-gray-100"
    >
      <div className="h-full w-[200vw] flex items-center">
        <div ref={containerRef} className="flex gap-6 px-10">
          {/* First set of cards */}
          <div className="card w-72 h-96 rounded-3xl bg-red-400 shadow-lg flex-shrink-0" />
          <div className="card w-72 h-96 rounded-3xl bg-blue-400 shadow-lg flex-shrink-0" />
          <div className="card w-72 h-96 rounded-3xl bg-green-400 shadow-lg flex-shrink-0" />
          <div className="card w-72 h-96 rounded-3xl bg-yellow-400 shadow-lg flex-shrink-0" />
          <div className="card w-72 h-96 rounded-3xl bg-purple-400 shadow-lg flex-shrink-0" />

          {/* Duplicate set for infinite scroll effect */}
          <div className="card w-72 h-96 rounded-3xl bg-red-400 shadow-lg flex-shrink-0" />
          <div className="card w-72 h-96 rounded-3xl bg-blue-400 shadow-lg flex-shrink-0" />
          <div className="card w-72 h-96 rounded-3xl bg-green-400 shadow-lg flex-shrink-0" />
          <div className="card w-72 h-96 rounded-3xl bg-yellow-400 shadow-lg flex-shrink-0" />
          <div className="card w-72 h-96 rounded-3xl bg-purple-400 shadow-lg flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollCards;
