// components/ScrollSlideLeft.jsx
import { motion } from "framer-motion";

const slideLeftVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const ScrollSlideRight = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={slideLeftVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSlideRight;
