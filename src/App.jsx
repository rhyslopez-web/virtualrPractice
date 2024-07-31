import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <Pricing/>
    </>
  )
}

export default App