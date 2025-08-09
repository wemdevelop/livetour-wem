// src/components/ui/Toast.jsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const toastVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 40 }
};

const Toast = ({ message, type = 'error', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={toastVariants}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-5 right-5 z-50 max-w-sm w-full px-6 py-4 rounded-md shadow-lg flex items-center justify-between text-sm font-medium
          ${type === 'error' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'}`}
      >
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 hover:opacity-80 transition">
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toast;
