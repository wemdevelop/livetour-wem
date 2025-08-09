import React from 'react'
import freeTrial from '../../assets/img/footer/trial-org.svg'
import pricing from '../../assets/img/footer/plans-pricing.svg'
import demoOrganization from '../../assets/img/footer/demo-org.svg'
import knowledgeBase from '../../assets/img/footer/webinar.svg'

const FooterCards = () => {
    return (
        <div className="border-b border-gray-800 mb-5">
            <div className='container mx-auto grid lg:grid-cols-4 gap-5'>
                <div className="flex flex-col border-r border-gray-800 gap-3 p-6 py-6 lg:py-14 items-center text-center">
                    <img src={freeTrial} className='w-6 object-contain' alt="" />
                    <div className="text-2xl font-semibold">Start a free trial</div>
                    <div className="text-md">Start with a 14-day free trial to experience effortless accounting.</div>
                    <button className="btn-ft-outline mt-3">Start Trial</button>
                </div>
                <div className="flex flex-col border-r border-gray-800 gap-3 p-6 py-6 lg:py-14 items-center text-center">
                    <img src={pricing} className='w-6 object-contain' alt="" />
                    <div className="text-2xl font-semibold">Pricing</div>
                    <div className="">Compare plans and features and find the best fit for your needs!</div>
                    <button className="btn-ft-outline mt-3">Explore Demo Account</button>
                </div>
                <div className="flex flex-col border-r border-gray-800 gap-3 p-6 py-6 lg:py-14 items-center text-center">
                    <img src={demoOrganization} className='w-6 object-contain' alt="" />
                    <div className="text-2xl font-semibold">Demo Organization</div>
                    <div className="">Explore LiveTour PRO features without using your real business data.</div>
                    <button className="btn-ft-outline mt-3">View All Plans</button>
                </div>
                <div className="flex flex-col  border-gray-800 gap-3 p-6 py-6 lg:py-14 items-center text-center">
                    <img src={knowledgeBase} className='w-6 object-contain' alt="" />
                    <div className="text-2xl font-semibold">Knowledge Base</div>
                    <div className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, earum!</div>
                    <button className="btn-ft-outline mt-3">Show All Webinars</button>
                </div>

            </div>
        </div>
    )
}

export default FooterCards
