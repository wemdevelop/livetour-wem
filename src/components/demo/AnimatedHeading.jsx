



// ScrollHeadingAnimation.jsx
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedHeading = () => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, {
        once: false,
        margin: "-30% 0px -30% 0px",
    });

    return (
        <div className="min-h-[300vh] bg-white flex flex-col items-center justify-center space-y-40">
            <div className="h-screen flex items-center justify-center">
                <p className="text-xl text-gray-500">⬇ Scroll Down ⬇</p>
            </div>

            <motion.h2
                ref={headingRef}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={
                    isInView
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 50, scale: 0.95 }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-5xl font-extrabold text-center text-indigo-600"
            >
                Scroll-Triggered Heading ✨
            </motion.h2>

            <div className="h-screen flex items-center justify-center">
                <p className="text-xl text-gray-500">⬆ Scroll Up ⬆</p>
            </div>
        </div>
    );
};

export default AnimatedHeading;
