import React from 'react'
import AllourPaid from '../components/Pricing/AllourPaid'
import FaqAccordion from '../components/Pricing/FaqAccordion '
import Annual from '../components/Pricing/Anuual'
import LogoSlider from '../components/Pricing/Logoslider'
import PricingPlans from '../components/Pricing/PricingPlans'

const Pricing = () => {
  return (
    <div>
      <PricingPlans />
      {/* <Annual/> */}
      <AllourPaid />
      <FaqAccordion />
      <LogoSlider />


    </div>
  )
}

export default Pricing
