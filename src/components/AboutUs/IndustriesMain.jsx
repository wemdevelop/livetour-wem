import React from 'react'
import slideone from '../../assets/img/about/1.png'
import slidetwo from '../../assets/img/about/2.png'


const IndustriesMain = () => {
    return (
        <div className='container mx-auto mb-20'>
            <div className="flex flex-row gap-5 ">
                <div className="w-full flex  bg-[#EFEFEE] rounded-3xl lg:gap-0 gap-5 overflow-hidden">
                    <div className=""><img src={slideone} className='object-cover w-4xl h-full' alt="" /></div>
                    <div className="w-full flex flex-col gap-5 p-10 justify-center">
                        <h2 className="!leading-12">Deliver unforgettable travel experiences across categories</h2>
                        <div className="font-light">Every traveler is unique, with different expectations and dreams. LivetourPRO combines breathtaking destinations, seamless planning, and expert coordination to craft personalized adventures. Whether it's solo journeys, family escapes, or group explorations—we’ve got the perfect package for everyone.</div>
                        <div className="flex gap-2 flex-wrap">
                            <div className="lt_v1_outline_bl_rd">Adventure Tours</div>
                            <div className="lt_v1_outline_bl_rd">Cultural Experiences</div>
                            <div className="lt_v1_outline_bl_rd">Luxury Travel</div>
                            <div className="lt_v1_outline_bl_rd">Solo Travelers</div>
                            <div className="lt_v1_outline_bl_rd">Family Vacations</div>
                            <div className="lt_v1_outline_bl_rd">Wildlife & Nature</div>
                            <div className="lt_v1_outline_bl_rd">Group Travel</div>
                            <div className="lt_v1_outline_bl_rd">Weekend Getaways</div>
                            <div className="lt_v1_outline_bl_rd">Cruise Packages</div>
                        </div>
                    </div>
                </div>
                <div
                    className="max-w-md p-10 justify-center text-base font-medium rounded-3xl flex flex-col gap-3 
                 bg-[#EFEFEE] relative overflow-hidden group transition-all duration-500"
                >
                    {/* Background Image on Hover */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 
                   group-hover:grayscale transition-all blur-xs duration-500 rounded-3xl z-0"
                        style={{ backgroundImage: `url(${slideone})` }}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="mb-4 font-normal">The ultimate platform for your travel planning team</h2>
                        <div className="text-base font-light">
                            Are you part of a team that crafts memorable travel experiences? LivetourPRO equips your planning team
                            with the tools needed to manage bookings, coordinate itineraries, and deliver top-notch customer
                            service. From itinerary creation to on-trip support, we simplify the journey for both planners and
                            travelers.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default IndustriesMain
