import {  ArrowRight, MoveRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const FeaturesHeroSection = () => {
    return (
        <div className=" flex flex-col items-center justify-center pb-10">
            {/* Hero Section */}
            <div className="w-full bg-red-900 text-white py-10 lg:py-16 lg:px-0 px-4">
                <div className="max-w-6xl  mx-auto text-center px-4">
                    <h2 className="">
                        Experience the World in Real Time
                    </h2>
                    <p className="text-sm md:text-base font-light text-white mt-4 my-6">
                        Join immersive LivetourPRO from anywhere in the world. Explore iconic landmarks, hidden gems, and cultural hotspots  guided by local experts in real-time. No travel needed, just curiosity.
                    </p>
                    <div className="mt-8 flex gap-4 flex-wrap justify-center">
                        <Link to="/contactUs"> <button className="btn-icon-hover-red flex justify-center items-center mt-2">
                            Start Your LivetourPRO
                            <ArrowRight />
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesHeroSection
