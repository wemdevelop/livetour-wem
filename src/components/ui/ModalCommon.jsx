import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const modalSizes = {
  sm: 'w-[36rem] h-80',
  md: 'w-[32rem] h-[28rem]',
  lg: 'w-[48rem] h-[30rem]',
};

const backdropVariant = {
  hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
  visible: { opacity: 1, backdropFilter: 'blur(8px)' },
};

const modalVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const ModalCommon = ({ isOpen, onClose, children, size = '2xl', closeOnOutsideClick = true }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        closeOnOutsideClick &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, closeOnOutsideClick, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end lg:items-center justify-center bg-black/30 backdrop-blur-sm"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            ref={modalRef}
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`bg-transparent dark:bg-[#1E1E1E]  rounded-b-none md:rounded-b-3xl rounded-t-3xl md:rounded-3xl overflow-hidden shadow-xl  relative ${modalSizes[size]}`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
                            className="absolute top-3 bg-gray-400 hover:text-black cursor-pointer transition-all duration-300 right-3 p-1 z-50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"

            >
              <X size={20} />
            </button>

            {/* Modal Content */}
            <div className="h-full w-full overflow-auto">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalCommon;
