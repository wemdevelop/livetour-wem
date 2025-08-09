import React from 'react'
import AboutHeader from '../components/AboutUs/AboutHeader'
import AboutFeatures from '../components/AboutUs/AboutFeatures'
import Industries from '../components/AboutUs/Industries'
import Testimonial from '../components/AboutUs/Testimonial'
import AboutFinalCTA from '../components/AboutUs/AboutFinalCTA'
import StickyScrollSection from '../components/AboutUs/Scroller'
import IndustriesMain from '../components/AboutUs/IndustriesMain'

const AboutUs = () => {
  return (
    <div>
        <AboutHeader />
        {/* <StickyScrollSection/> */}
        <AboutFeatures />
        <IndustriesMain/>
        {/* <Industries /> */}
        <Testimonial />
        <AboutFinalCTA />
      
    </div>
  )
}

export default AboutUs
