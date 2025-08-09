import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupSchema } from '../../schema/validationSchema';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';

const steps = [
    {
        title: "Dashboard",
        desc: "Your business is live here. Everything updates in real-time — watch how your employees work for you.",
    },
    {
        title: "Itinerary Builder",
        desc: "Impressing your clients is crucial. Don't waste time typing emails — send beautiful itineraries, trip plans, and quotes instantly.",
    },
    {
        title: "Leads Management",
        desc: "LivetourPRO captures enquiries from your website. You can also bulk upload enquiries and assign them to your executives.",
    },
    {
        title: "Follow Ups",
        desc: "Everything in one place. You stay in control with our exceptional auto sales follow-up system.",
    },
    {
        title: "Automated Voucher & Invoice",
        desc: "Once a package is confirmed, LivetourPRO generates vouchers and invoices. It also handles reservations and driver allocations.",
    },
];
const HomePageLog = () => {
    // animation slider 
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % steps.length);
        }, 5000); // 1 second

        return () => clearInterval(timer);
    }, []);
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(prev => !prev);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signupSchema),
    });

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <div className="bg-red-900 text-white  pt-10 lg:pt-0 px-4 lg:px-0">
            <div className='container mx-auto flex flex-col lg:flex-row gap-10'>
                <div className="w-full flex flex-col gap-5 md:pt-10  lg:py-20 items-center justify-center">
                    {/* <img src="/src/assets/main-logo.png" className='object-contain w-36' alt="" /> */}
                    <h2 className="">LivetourPRO Can Make Your Travel Business Smarter.</h2>
                    <div className="flex flex-col items-start gap-6 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-3 mt-3 h-24 lg:h-28"
                            >
                                <button className="w-fit text-2xl lg:text-3xl font-semibold">{steps[index].title}</button>
                                <p className='text-sm lg:text-lg text-gray-300'>{steps[index].desc}</p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Indicators */}
                        <div className="flex gap-2 mt-2">
                            {steps.map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-2 w-3 rounded-full ${i === index ? 'w-5 bg-white transition-all duration-300' : 'bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:pt-20 pb-20 lg:pb-0">
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="h-full w-full lg:w-[25rem] mx-auto gap-2 flex flex-col bg-white rounded-t-4xl text-black p-7 rounded-b-4xl lg:rounded-b-none"
                    >
                        <div className="text-gray-500 text-xs font-medium">LET'S GET YOU STARTED</div>
                        <div className="text-lg font-medium">15-day free trial. No credit card. No fuss.</div>
                        <div className="flex mt-2 flex-col gap-4 text-black">

                            <div className="input_inner relative">
                                <input
                                    type="text"
                                    id="username"
                                    {...register('username')}
                                    className="custom-input peer"
                                    placeholder="Type inside me"
                                />
                                <label htmlFor="username" className="custom-label">Name</label>
                                {errors.username && <p className="text-red-600 text-xs">{errors.username.message}</p>}
                            </div>

                            <div className="input_inner relative">
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email')}
                                    className="custom-input peer"
                                    placeholder="Type inside me"
                                />
                                <label htmlFor="email" className="custom-label">Email</label>
                                {errors.email && <p className="text-red-600 text-xs">{errors.email.message}</p>}
                            </div>

                            <div className="input_inner relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    {...register('password')}
                                    className="custom-input peer pr-10" // give space for icon
                                    placeholder=" "
                                />
                                <label htmlFor="password" className="custom-label">Password</label>

                                {/* Toggle icon */}
                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    className="absolute right-3 top-3 text-gray-600 text-sm"
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>

                                {errors.password && <p className="text-red-600 text-xs">{errors.password.message}</p>}
                            </div>

                            <div className="input_inner relative">
                                <input
                                    type="number"
                                    id="number"
                                    {...register('number')}
                                    className="!pl-10 custom-input peer"
                                    placeholder="Type inside me"
                                />
                                <label htmlFor="number" className="lt_v1_num_input custom-label">Phone Number</label>
                                <div className="absolute top-2 pl-2">+91</div>
                                {errors.number && <p className="text-red-600 text-xs">{errors.number.message}</p>}
                            </div>

                            <button type="submit" className="btn-primary">Get Started</button>
                            <div className="relative my-2">
                                <hr className='text-gray-300' />
                                <div className="absolute left-[45%] bg-white px-2 top-[-14px]">or</div>
                            </div>
                            {/* Optional placeholders */}
                            <div className='flex gap-2 justify-center items-center'>
                                <button type='button' className="btn-aut-outline">  <img src="src\assets\img\auth\apple.png" className='w-7' alt="" /></button>
                                <button type='button' className="btn-aut-outline"> <img src="src\assets\img\auth\google.png" className='w-7' alt="" /></button>
                            </div>

                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default HomePageLog;
