import React from 'react'
import HeroSection from './HeroSection'
import TestSeries from './testSeries/TestSeries'
import Testimonial from '../components/testimonials/Testimonial'
import ContactUs from './ContactUs'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <TestSeries />
        <Testimonial />
        <ContactUs />
    </div>
  )
}

export default Home