// components/ScrollFlipY.jsx
import { motion } from "framer-motion";

const flipYVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: { opacity: 1, rotateY: 0 },
};

const ScrollFlipY = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={flipYVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFlipY;
