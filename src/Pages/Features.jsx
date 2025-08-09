
import React from 'react'
import FeaturesSub from '../components/Features/FeaturesSub'
import { MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import FeaturesSection from '../components/Features/FeaturesSection'
import FeaturesHeroSection from '../components/Features/FeaturesHeroSection'

const Features = () => {
  return (
    <>
      <FeaturesHeroSection />
      {/* Features Section */}
      {/* <FeaturesSection /> */}
      <div className="w-full">
        <FeaturesSub />
      </div>
    </>
  )
}

export default Features;