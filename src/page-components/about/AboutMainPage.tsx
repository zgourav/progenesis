import React from 'react'
import AboutMainBanner from './AboutMainBanner'
import OurStories from './OurStories'
import OurApproach from './OurAppoach'
import AboutNav from './AboutNav'
import WhyProgenesis from './WhyProgenesis'
import VisionMission from './VisionMission'
import FaQ from './FaQ'
import Impact from './Impact'
import JoinUs from './JoinUs'
import './AboutMain.css'


const AboutMainPage = () => {
  return (
    <div className='flex flex-col gap-6 md:gap-8 lg:gap-10'>
        <AboutMainBanner />
        <AboutNav />
        <OurStories />
        <OurApproach /> 
        <VisionMission />
        <WhyProgenesis />
        <JoinUs />
        <Impact />
        <FaQ />
    </div>
  )
}

export default AboutMainPage