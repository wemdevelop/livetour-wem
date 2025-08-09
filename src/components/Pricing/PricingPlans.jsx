import { ArrowRight, Check, Crown } from 'lucide-react'
import { motion } from 'framer-motion';
import React from 'react'
import ScrollFadeUp from '../ui/ScrollFadUp'

const PricingPlans = () => {
    return (
        <div className="bg-[#ffffff]">
            <div className='container  mx-auto py-5 md:py-20'>
                <div className="flex flex-col gap-5 w-full text-center justify-center items-center">
                    <h2 className='text-center max-w-4xl'>The world’s #1 CRM for travel agents and tour operators</h2>
                    <div className="flex md:flex-row flex-wrap justify-center text-lg font-semibold items-center gap-5">
                        <div className="flex gap-2 items-center justify-center text-sm font-medium">
                            <Check className='p-1.5 size-8 stroke-3 bg-red-200 text-red-900 rounded-full' />
                            Pro Itinerary Builder
                        </div>
                        <div className="flex gap-2 items-center justify-center text-sm font-medium">
                            <Check className='p-1.5 size-8 stroke-3 bg-red-200 text-red-900 rounded-full' />
                            Agile Followup System
                        </div>
                        <div className="flex gap-2 items-center justify-center text-sm font-medium">
                            <Check className='p-1.5 size-8 stroke-3 bg-red-200 text-red-900 rounded-full' />
                            Track Employees
                        </div>
                        <div className="flex gap-2 items-center justify-center text-sm font-medium">
                            <Check className='p-1.5 size-8 stroke-3 bg-red-200 text-red-900 rounded-full' />
                            Manage Accounts
                        </div>
                        <div className="flex gap-2 items-center justify-center text-sm font-medium">
                            <Check className='p-1.5 size-8 stroke-3 bg-red-200 text-red-900 rounded-full' />
                            Invoicing & Reservations
                        </div>
                    </div>
                    <div className="flex md:flex-row px-4 flex-col w-full gap-5 max-w-6xl mt-10 justify-center items-end">

                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0 }}
                            className="flex flex-col w-full justify-between gap-5 bg-white/50 hover:border-[#0B0641] transition-all duration-300 border border-gray-300 rounded-3xl"
                        >
                            <div className="bg-[#0B0641] text-white  flex justify-center items-start rounded-3xl p-5 pt-8 ">
                                <div className="flex flex-col gap-5 w-full justify-center items-center text-center">
                                    <div className="flex flex-col gap-1">
                                        <h4 className='!font-medium'>Billed Quarterly</h4>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="!font-semibold">₹2750</h4>
                                        <p className='text-sm'>User/Month</p>

                                    </div>
                                    <button className="btn-icon-hover-pricing w-full justify-center ">Get Free Demo <ArrowRight /></button>
                                </div>

                            </div>
                            <div className="flex flex-col gap-3 p-5 w-full justify-start items-start">
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    All core features
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    3 user accounts
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Basic reporting
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Lead tracking
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Email integration
                                </div>
                            </div>


                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col w-full bg-white/50 justify-between gap-5 hover:border-[#0B0641] transition-all duration-300 rounded-3xl border border-gray-300">
                            <div className="bg-[#0B0641] text-white flex justify-center items-start rounded-3xl p-5 pt-8">
                                <div className="flex flex-col gap-5 w-full justify-center items-center text-center">
                                    <div className="flex flex-col gap-1">
                                        <h4 className='!font-medium'>Half Yearly Plan</h4>
                                        <div className="line-through font-medium text-gray-300">₹900</div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="!font-semibold">₹2000</h4>
                                        <p className='text-sm'>/user/month</p>

                                    </div>
                                    <button className="btn-icon-hover-pricing w-full justify-center ">Get Free Demo <ArrowRight /></button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 p-5 w-full justify-start items-start">

                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    All Quarterly features
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Priority support
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Advanced reporting
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Team collaboration tools
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Task automation
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Export reports to Excel
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-col bg-white/50 w-full group gap-5 border rounded-3xl hover:border-[#0B0641] transition-all duration-300 border-gray-300">
                            <div className="bg-[#0B0641] text-white   flex justify-center items-start overflow-hidden rounded-3xl p-5 pt-8 h-fit relative">
                                <div className="absolute -right-1 top-0 p-2 text-xs bg-amber-300 rounded-bl-2xl overflow-hidden font-semibold flex gap-2 justify-center items-center text-red-600"> <Crown className='size-4 text-red-600 ' /> Most Popular</div>
                                <div className="flex flex-col gap-5 w-full justify-center items-center text-center">
                                    <div className="flex flex-col gap-1">
                                        <h4 className='!font-medium'>Annual Plan</h4>
                                        <div className="line-through font-medium text-gray-300">₹550</div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="!font-semibold">₹2500</h4>
                                        <p className='text-sm'>/user/month billed every 6 month</p>

                                    </div>
                                    <button className="btn-icon-hover-pricing w-full justify-center ">Get Free Demo <ArrowRight /></button>
                                </div>

                            </div>
                            <div className="flex flex-col gap-3 p-5 w-full justify-start items-start">
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    All Half Yearly features
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Unlimited pipelines
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Dedicated account manager
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Custom branding options
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    AI-powered analytics
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Multi-language support
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Workflow automation
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Role-based access control
                                </div>
                                <div className="flex gap-2 items-center justify-center text-sm font-medium">
                                    <Check className='p-1.5 size-8 stroke-3 bg-[#0B0641] text-white rounded-full' />
                                    Email & SMS integrations
                                </div>
                            </div>

                        </motion.div>
                        {/* <div className="bg-red-200 min-h-96">1</div> */}
                    </div>


                </div>

            </div>
        </div>
    )
}

export default PricingPlans
