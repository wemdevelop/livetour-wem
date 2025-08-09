







import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

import Imageone from "../../assets/clients/screen-emp-timeline.png";
import Imagetwo from "../../assets/clients/screen-propertylist.png";
import Imagethree from "../../assets/clients/screen-propertymanager.png";
import bgSectionTwo from "../../assets/img/bg/bgSection4.png";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        [Imageone, Imagetwo, Imagethree].forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: section1Ref.current,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveImageIndex(0),
            onEnterBack: () => setActiveImageIndex(0),
        });

        ScrollTrigger.create({
            trigger: section2Ref.current,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveImageIndex(1),
            onEnterBack: () => setActiveImageIndex(1),
        });

        ScrollTrigger.create({
            trigger: section3Ref.current,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveImageIndex(2),
            onEnterBack: () => setActiveImageIndex(2),
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
            className="min-h-screen bg-cover bg-fixed bg-center hidden lg:block bg-[#fdf1dc]"
            style={{ backgroundImage: `url(${bgSectionTwo})` }}
        >
            <div className="container mx-auto flex flex-col items-center pt-20 text-center">
                <h2 className="text-white">ALL FEATURES</h2>
            </div>

            <div className="flex flex-col md:flex-row container mx-auto py-20 gap-10">


                {/* Right Side Scrollable Content */}
                <div className="w-full md:w-1/3 flex flex-col gap-10">
                    <div
                        ref={section1Ref}
                        className="p-8 bg-[#0F0E13] text-white backdrop-blur flex flex-col justify-center rounded-3xl shadow-md "
                    >
                        <h2 className="mb-2">Everything Live</h2>
                        <p className="text-base font-normal text-gray-200">
                            LivetourPRO record activities by each employee by their role and tasks. Understand how effective they are working for you.
                        </p>
                    </div>

                    <div
                        ref={section2Ref}
                        className="p-8 bg-[#0F0E13] text-white backdrop-blur flex flex-col justify-center rounded-3xl shadow-md "
                    >
                        <h2 className="mb-2">Manage Resources</h2>
                        <p className="text-base font-normal text-gray-200">
                            Manage properties, agents, airlines, houseboats and vehicle operators linked with your business. LivetourPRO give you complete transaction details of any resources any point of time.
                        </p>
                    </div>

                    <div
                        ref={section3Ref}
                        className="p-8 bg-[#0F0E13] text-white backdrop-blur flex flex-col justify-center rounded-3xl shadow-md "
                    >
                        <h2 className="mb-2">Rate Manager</h2>
                        <p className="text-base font-normal text-gray-200">
                            Manage rates of properties using multi season selector. Bulk rate updates also possible with LivetourPRO
                        </p>
                    </div>
                </div>

                {/* Sticky Left Image */}
                <div className="w-full md:w-2/3 sticky top-32 h-[60vh] flex justify-center items-center relative">
                    <AnimatePresence mode="wait">
                        {activeImageIndex === 0 && (
                            <motion.div
                                key="image-1"
                                alt="Dynamic 1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="max-h-full rounded-xl absolute"
                            >
                                <img src={Imageone} alt="Dynamic 1" className="w-full h-full object-cover rounded-xl" />
                            </motion.div>
                        )}

                        {activeImageIndex === 1 && (
                            <motion.img
                                key="image-2"
                                src={Imagetwo}
                                alt="Dynamic 2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="max-h-full rounded-xl absolute"
                            />
                        )}

                        {activeImageIndex === 2 && (
                            <motion.img
                                key="image-3"
                                src={Imagethree}
                                alt="Dynamic 3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="max-h-full rounded-xl absolute"
                            />
                        )}
                    </AnimatePresence>

                </div>


            </div>
        </div>
    );
};

export default FeaturesSection;
