import React from 'react'
import Header from './components/Header'
import NotificationBar from './components/NotificationBar'
import HeroSection from './components/HeroSection'
import WhyChooseUs from './components/WhyChooseUs'
import FlashSale from './components/FlashSale'
import FeaturedProducts from './components/FeaturedProducts'
import Recipes from './components/Recipes'
import Testimonials from './components/Testimonials'
import BrandStory from './components/BrandStory'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import PopupOffer from './components/PopupOffer'
import SpeedDial from './components/SpeedDial'

function App() {
  return (
    <div className="font-inter text-gray-800 bg-white">
      <NotificationBar />
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <FlashSale />
      <FeaturedProducts />
      <Recipes />
      <Testimonials />
      <BrandStory />
      <FinalCTA />
      <Footer />
      <PopupOffer />
      <SpeedDial />
    </div>
  )
}

export default App
