import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import imgOne from '../assets/img/credentials/bgsection.svg';
import caroOne from '../assets/clients/crousal1.png';
import caroTwo from '../assets/clients/crousal2.png';
import mainLog from '../assets/main-logo.png'


const carouselData = [
    {
        img: caroOne,
        title: 'Secure & Fast Login',
        desc: 'Access Livetour quickly and securely using OTP-based login or your preferred social media account.'
    },
    {
        img: caroTwo,
        title: 'Easy Tour Management',
        desc: 'Plan and manage your tours seamlessly with our intuitive dashboard and tools.'
    }
];

const CredentialsLayout = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % carouselData.length);
        }, 4000); // auto change every 4s
        return () => clearInterval(interval);
    }, []);

    return (
        <div
  className="h-fit w-full relative md:h-screen md:bg-[url('src/assets/img/credentials/bgsection.svg')] md:bg-cover md:bg-center"
>

            <div className="flex h-full mx-4 md:mx-auto md:py-0 py-5 flex-col justify-start items-start md:justify-center lg:items-center">
                <Link to={"/"} className="mb-5 md:w-4xl">
                    <img src={mainLog} className='w-36' alt="" />
                </Link>
                <div className="md:w-4xl mx-auto w-full flex border bg-white  md:h-[40rem] rounded-3xl  shadow-lg border-gray-300 overflow-hidden">
                    {/* Left Side */}
                    <div className="w-full p-5 md:p-10 flex flex-col gap-3 items-center justify-center">
                        <Outlet />
                    </div>

                    {/* Right Side with Framer Motion Carousel */}
                    <div className="w-full justify-center  bg-gray-50 border-l border-[#efefee] hidden md:flex flex-col items-center relative overflow-hidden">
                        <div className="md:min-h-60 w-full flex items-center justify-center p-10 pt-0 pb-0">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={carouselData[index].img}
                                    src={carouselData[index].img}
                                    alt=""
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    className="h-72 object-contain"
                                />
                            </AnimatePresence>
                        </div>

                        <div className="flex flex-col gap-2 p-5 text-center">
                            <motion.div
                                key={carouselData[index].title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                className="text-2xl font-semibold"
                            >
                                {carouselData[index].title}
                            </motion.div>
                            <motion.div
                                key={carouselData[index].desc}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="text-sm font-normal"
                            >
                                {carouselData[index].desc}
                            </motion.div>
                        </div>

                        {/* Dot Indicator */}
                        <div className="flex gap-2 ">
                            {carouselData.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-3 h-2.5 rounded-full transition-all duration-300 ${i === index ? 'bg-gray-800 scale-110 w-8' : 'bg-gray-400'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CredentialsLayout;
