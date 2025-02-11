import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <Pricing/>
      <Reviews/>
      <Footer/>
    </>
  )
}

export default App