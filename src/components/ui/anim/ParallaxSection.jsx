// components/ParallaxSection.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxSection = ({ image, heading, content }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // scroll from bottom to top
  });

  // Image moves slower (parallax)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  // Text moves at normal speed
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} className="relative h-[100vh] overflow-hidden flex items-center justify-center bg-gray-100">
      <motion.img
        src={image}
        alt=""
        style={{ y: imageY }}
        className="absolute w-full h-full object-cover opacity-60"
      />
      <motion.div
        style={{ y: textY }}
        className="relative z-10 bg-white/80 backdrop-blur-lg px-10 py-16 rounded-xl shadow-xl max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-lg text-gray-700">{content}</p>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
