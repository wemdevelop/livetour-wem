import React from 'react'
import TabCarousel from '../components/home/Home'
import LivePromo from '../components/home/LivePromo'
import Bsnsneed from '../components/home/Bsnsneed'
import Impact from '../components/home/Impact'
import Testimonials from '../components/home/TestimonialsSection'
import GrowthStats from '../components/home/GrowthStats'
import Cycle from '../components/home/Cycle'
import HomePageLog from '../components/home/HomePageLog'
import ProductViewSection from '../components/home/ProductViewSection'
import BusinessPotential from '../components/home/BusinessPotential'
import SvgMorph from '../components/animation/ScrollFadeUp'
import AnimatedTabs from '../components/animation/ScrollFadeUp'
import ScrollChangeSync from '../components/AboutUs/ScrollerSync'
import InfiniteScrollCards from '../components/demo/InfiniteScrollCards'
import AnimatedHeading from '../components/demo/AnimatedHeading'




const HomePage = () => {
    return (
        <>
            {/* <AnimatedHeading/>
            <InfiniteScrollCards/> */}

            <div className='w-full'>
                <HomePageLog />
                <ProductViewSection />
                {/* <TabCarousel /> */}
                <LivePromo />
                <ScrollChangeSync />
                <Bsnsneed />
                <Impact />
                {/* <AnimatedTabs /> */}
                {/* <Cycle /> */}
                <BusinessPotential />
                {/* <GrowthStats /> */}
                <Testimonials />
            </div>
        </>
    )
}

export default HomePage
