// components/ScrollZoomIn.jsx
import { motion } from "framer-motion";

const zoomInVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ScrollZoomIn = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={zoomInVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollZoomIn;
