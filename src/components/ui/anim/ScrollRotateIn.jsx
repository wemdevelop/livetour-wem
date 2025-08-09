// components/ScrollRotateIn.jsx
import { motion } from "framer-motion";

const rotateInVariants = {
  hidden: { opacity: 0, rotate: -45, scale: 0.8 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

const ScrollRotateIn = ({ children, delay = 0 }) => {
  return (
    <motion.div
      variants={rotateInVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRotateIn;
