// components/StaggeredGroup.jsx
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const StaggeredGroup = ({ items }) => {
  return (
    <motion.div
      className="grid gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="bg-pink-100 p-8 rounded-xl text-center text-lg font-semibold shadow-md"
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredGroup;
