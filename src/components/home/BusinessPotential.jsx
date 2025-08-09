import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import arrowright from "../../assets/contacts/arrowright.png";

import purpleImg from "../../assets/img/home/hand.png";
import blueImg from "../../assets/img/home/settings.png";
import growthImg from "../../assets/img/home/savings.png";
import CountUpAnimation from '../ui/CountUpAnimation';

const containerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const blockVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 80 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
       transition: {
  type: "spring",
  stiffness: 120,
  damping: 20,
},
    },
};


const BusinessPotential = () => {
    return (
        <div className='mt-5 md:pt-20 px-4 md:pb-0 pb-10 md:mt-20 bg-[#fdf1dc] pt-10'>
            <div className="container mx-auto flex flex-col gap-10 overflow-hidden">
                {/* Heading Section */}
                <div className="flex flex-col gap-2">
                    <h2 className='text-center'>Unlock Your Business Potential</h2>
                    <p className='caption_text text-center max-w-xl mx-auto mt-2'>
                        See how our solutions help you increase productivity, save costs, and implement faster—real results backed by data.
                    </p>
                </div>

                {/* Button Section */}
                <div className="flex flex-col gap-5 justify-center items-center">
                    <Link to="/contactUs">
                        <button className="btn-icon-hover-red">
                            Get Started For Free
                            <ArrowRight className="w-5 h-5 " />
                        </button>
                    </Link>
                    <Link to="/features">
                        <button className="btn-icon-hover-black">
                            View All Features
                            <ArrowRight className="w-5 h-5 " />
                        </button>
                    </Link>
                </div>

                {/* Desktop view with animated blocks */}
                <motion.div
                    className="relative lg:max-w-4xl lg:flex items-end w-full mx-auto hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    <div className="absolute top-0 left-20">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl max-w-xs text-center text-gray-900 leading-tight mb-2">
                            Grow with <span className="font-semibold">LivetourPRO</span>
                        </h3>
                        <div className="flex justify-center">
                            <div className="w-16 h-8 mt-2 flex items-center justify-center">
                                <img src={arrowright} alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Block 1 */}
                    <motion.div
                        className="w-full rounded-t-full pb-10 bg-[#DAD0ED] flex h-[380px] justify-between flex-col pt-16 text-center"
                        variants={blockVariants}
                    >
                        <div className="flex flex-col gap-2">
                            <div className="text-5xl font-semibold"><CountUpAnimation to={27} /></div>
                            <div className="text-2xl font-medium">Increased productivity</div>
                            <div className="text-sm text-gray-800">Do more in less time</div>
                        </div>
                        <div className="flex items-center w-full justify-center">
                            <img src={purpleImg} className='object-contain w-36' alt="" />
                        </div>
                    </motion.div>

                    {/* Block 2 */}
                    <motion.div
                        className="w-full rounded-t-full pb-10 bg-[#C9E8E7] h-[490px] flex flex-col justify-between pt-16 text-center"
                        variants={blockVariants}
                    >
                        <div className="flex flex-col gap-2">
                            <div className="text-5xl font-semibold"><CountUpAnimation to={50} /></div>
                            <div className="text-2xl font-medium">Faster implementation</div>
                            <div className="text-sm text-gray-800">Get started in no time</div>
                        </div>
                        <div className="flex items-center w-full justify-center">
                            <img src={blueImg} className='object-contain w-52' alt="" />
                        </div>
                    </motion.div>

                    {/* Block 3 */}
                    <motion.div
                        className="w-full rounded-t-full bg-[#EDA295] pb-0 h-[590px] flex flex-col justify-between items-center pt-16 text-center"
                        variants={blockVariants}
                    >
                        <div className="flex flex-col gap-2">
                            <div className="text-5xl font-semibold"><CountUpAnimation to={71} /></div>
                            <div className="text-2xl font-medium">Saved on licensing fees</div>
                            <div className="text-sm text-gray-800">Big savings for a lifetime</div>
                        </div>
                        <div>
                            <img src={growthImg} className='h-96' alt="" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default BusinessPotential;
