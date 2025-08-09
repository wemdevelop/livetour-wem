import React, { useState } from 'react'
import getstarted from '../../assets/clock-cartoon-illustration-removebg-preview.png'
import fasttrack from '../../assets/recruitment-agency-searching-job-applicants.png'
import { ArrowRight, Play } from 'lucide-react'
import { RiGuideFill, RiUserCommunityFill } from 'react-icons/ri'
import { FaQuora } from 'react-icons/fa6'
import { GiGiftOfKnowledge } from 'react-icons/gi'
import { MdModelTraining, MdOutlineQueryStats } from 'react-icons/md'
import { Link } from 'react-router-dom'
import ModalCommon from '../ui/ModalCommon'
import slideone from '../../assets/img/about/1.png'
import ScrollFadeUp from '../ui/ScrollFadUp'
import ScrollSlideLeft from '../ui/ScrollSlideLeft'
import ScrollSlideRight from '../ui/ScrollSlideRight'


// import cardBg from '../../assets/img/'



const ResourceSection = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex flex-col gap-5'>
            <div className="text-center py-8 bg-red-900 text-white md:py-16 px-4">
                <h2 className="">
                    Hi, how can we help?
                </h2>
                <p className="banner_inner_text">
                    Everything you want to know about Livetour
                </p>
            </div>
            <div className="flex container mx-auto flex-col gap-5 my-5 md:my-20 px-4">
                <ScrollFadeUp>
                <div className="md:grid md:grid-cols-3 gap-5 flex flex-col">
                    
                    <div className="md:col-span-2 p-5 border border-gray-200 rounded-3xl flex md:flex-row flex-col gap-5">
                        <div className="w-full flex justify-center items-center">
                            <img src={getstarted} className='w-56' alt="" />
                        </div>
                        <div className="w-full  flex flex-col gap-5 justify-between">
                            <h3 className="">Getting Started with Livetour</h3>
                            <p className="caption_text ">Explore Livetour’s core features and terminology with our beginner-friendly interactive guide.</p>
                            <Link to='/contactUs' className="btn-icon-hover-red w-fit">Learn More <ArrowRight /></Link>
                        </div>
                    </div>
                    <div className=" border border-gray-200 p-5 flex gap-5 flex-col justify-between rounded-3xl">
                        <RiGuideFill className='size-12 rounded-full bg-red-900 text-white p-2' />
                        <h3>Livetour Help Center</h3>
                        <p className="caption_text ">Discover detailed guides and tutorials to effectively configure and manage your Livetour experience.</p>
                        <Link to='/helpcenter' className="btn-icon-hover-black w-fit">Learn More <ArrowRight /></Link>

                    </div>
                </div>
                </ScrollFadeUp>
                <ScrollSlideLeft>
                <div className="md:grid md:grid-cols-3 gap-5 flex flex-col gap-5">
                    <div className="border border-gray-200 p-5 flex gap-5 flex-col justify-between rounded-3xl">
                        <FaQuora className='size-12 rounded-full bg-red-900 text-white p-2' />
                        <h3>FAQ's</h3>
                        <p className="caption_text ">Browse the frequently asked questions and quickly resolve the most common problems you face in Livetour.</p>
                        <Link to={'/pricing'} className="btn-icon-hover-black w-fit">Learn More <ArrowRight /></Link>

                    </div>
                    <div className=" group md:col-span-2 w-full bg-[#efefee] border overflow-hidden border-gray-300 rounded-3xl md:flex-row flex-col flex gap-5">

                        <div className="w-full  flex flex-col py-5 px-4 md:p-10 gap-5 justify-between">
                            <h3 className="">Videos</h3>
                            <p className="caption_text ">Explore our extensive video library and watch our detailed setup guides and feature walkthroughs.</p>
                            <Link to={'/videos'} className="btn-icon-hover-red w-fit">Learn More <ArrowRight /></Link>
                        </div>
                        <div onClick={() => setOpen(true)} className="w-3xl relative cursor-pointer flex flex-col justify-between bg-white items-center">
                            <img src="https://img.youtube.com/vi/Scxs7L0vhZ4/hqdefault.jpg" className=' object-cover w-full h-52 md:h-fit' alt="" />
                            <div className="p-4 py-2 flex absolute bottom-0  group-hover:bg-[#efefee] transition-all duration-300 flex-col w-full ">
                                <div className="text-sm text-white group-hover:text-black ">Getting started</div>
                                <div className="text-base text-gray-200 font-medium group-hover:text-black">Set up your CRM in under 30 minutes</div>
                            </div>
                            <div className="absolute bg-white/50 group-hover:bg-white/80 p-3 top-[45%] z-10 left-[45%] rounded-full"><Play /></div>
                        </div>
                    </div>
                    
                </div>
                </ScrollSlideLeft>
                <ScrollSlideRight>
                <div className="md:grid md:grid-cols-3 gap-5 flex flex-col gap-5">
                    <div className="w-full border border-gray-200 p-5 flex gap-5 flex-col justify-between rounded-3xl">
                        <GiGiftOfKnowledge className='size-12 rounded-full bg-red-900 text-white p-2' />
                        <h3>Knowledge Base</h3>
                        <p className="caption_text ">Explore detailed articles and solutions to common Livetour setup and usage questions.</p>
                        <Link to="/blog" className="btn-icon-hover-black w-fit">Browse Articles <ArrowRight /></Link>

                    </div>
                    <div className="w-full border border-gray-200 p-5 flex gap-5 flex-col justify-between rounded-3xl">
                        <Play className='size-12 rounded-full bg-red-900 text-white p-2' />
                        <h3>Video Tutorials</h3>
                        <p className="caption_text ">Watch step-by-step Livetour video tutorials for easier onboarding and advanced tips.</p>
                        <div className="btn-icon-hover-black w-fit">Watch Videos <ArrowRight /></div>

                    </div>
                    <div className="w-full border border-gray-200 p-5 flex gap-5 flex-col justify-between rounded-3xl">
                        <MdModelTraining className='size-12 rounded-full bg-red-900 text-white p-2' />
                        <h3>Livetour Features</h3>
                        <p className="caption_text ">Discover the powerful features of Livetour including itinerary building, lead management, automated vouchers, and more.</p>
                        <Link to="/features" className="btn-icon-hover-black w-fit">Explore Features <ArrowRight /></Link >
                    </div>
                </div>
                </ScrollSlideRight>
                <ScrollSlideLeft>
                <div className="md:grid md:grid-cols-3 gap-5 flex flex-col gap-5">
                    <div className="w-full col-span-2 p-5 border border-gray-200 rounded-3xl">
                        <h3 className='text-center'>Livetour Developer Center</h3>
                        <div className="w-full md:flex gap-5">
                            <div className="w-full justify-between flex flex-col gap-5 mt-10 md:border-r border-gray-200">
                                <div className="flex flex-col gap-2">
                                    <h4 className="">API Documentation</h4>
                                    <div className="caption_text ">Integrate Livetour with your platform or tools using our comprehensive and easy-to-follow API docs.</div>
                                </div>
                                <div className="btn-icon-hover-red w-fit">Explore APIs <ArrowRight /></div>
                            </div>
                            <div className="w-full md:justify-end md:items-end flex flex-col text-end gap-5 mt-5 md:mt-10">
                                <div className="flex flex-col gap-2 text-start">
                                    <h4 className="">Toppings Development</h4>
                                    <div className="caption_text ">Build and customize Toppings to enhance Livetour’s features. Share your Toppings in the Marketplace and monetize your creations.</div>
                                </div>
                                <div className="btn-icon-hover-red w-fit ">Start Building <ArrowRight /></div>
                            </div>
                        </div>
                    </div>
                    <div className=" border border-gray-200 bg-[#efefee] group relative overflow-hidden p-5 flex gap-5 flex-col justify-between rounded-3xl">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 
                                           group-hover:grayscale transition-all blur-xs duration-500 rounded-3xl z-0"
                            style={{ backgroundImage: `url(${slideone})` }}
                        />
                        <RiUserCommunityFill className='size-12 z-10 relative rounded-full bg-red-900 text-white p-2' />
                        <h3 className='z-10 relative'>Livetour Community</h3>
                        <p className="caption_text z-10 relative">Connect with other Livetour users, share insights, ask questions, and get support from our growing global community.</p>
                        <Link to={'/contactUs'} className="btn-icon-hover-black w-fit z-10 relative">Join the Community <ArrowRight /></Link>
                    </div>
                </div>
                </ScrollSlideLeft>
                <ScrollSlideRight>
                <div className="md:grid md:grid-cols-3 gap-5 flex flex-col gap-5">
                    <div className="border border-gray-200 p-5 flex gap-5 flex-col justify-between rounded-3xl">
                        <MdOutlineQueryStats className='size-12 rounded-full bg-red-900 text-white p-2' />
                        <h3>All set with Livetour?
                            Here’s what’s next!</h3>
                        <p className="caption_text ">Discover product updates, onboarding tips, advanced walkthroughs, and expert advice to get the most out of Livetour.</p>
                        <div className="btn-icon-hover-black w-fit">Explore growth resources <ArrowRight /></div>
                    </div>
                    <div className="w-full flex-col md:col-span-2 p-5 border border-gray-200 rounded-3xl flex md:flex-row gap-5">
                        <div className="w-full flex justify-center items-center">
                            <img src={fasttrack} className='w-96' alt="" />
                        </div>
                        <div className="w-full  flex flex-col gap-5 justify-between">
                            <h3 className="">Fast-Track Your Livetour Success</h3>
                            <p className="caption_text ">Launch your Livetour experience with confidence. Our onboarding specialists will guide you through setup, customization, and best practices — all tailored to your business goals.</p>
                            <div className="btn-icon-hover-red w-fit">Get started now  <ArrowRight /></div>
                        </div>
                    </div>
                </div>
                </ScrollSlideRight>
            </div>
            <ModalCommon
                isOpen={open}
                onClose={() => setOpen(false)}
                size="lg"
                closeOnOutsideClick={true} // true: close on outside click, false: don’t close
            >
                <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/04x3IvXub1A?autoplay=1"
                    title="YouTube video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </ModalCommon>
        </div>
    )
}

export default ResourceSection
