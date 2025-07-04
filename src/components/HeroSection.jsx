import React, { useState, useEffect } from 'react'

// Import ảnh như modules
import hero1Img from '/assets/images/hero-1.jpg'
import hero2Img from '/assets/images/hero-2.jpg'
import hero3Img from '/assets/images/hero-3.jpg'
import menuSetImg from '/assets/images/menu-set.jpg'
import caNguImg from '/assets/images/ca-ngu.jpg'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: hero1Img,
      alt: 'Soup Hoàng Gia'
    },
    {
      image: hero2Img,
      alt: 'Hải sản tươi sống'
    },
    {
      image: hero3Img,
      alt: 'Đặc sản biển'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="w-full bg-slate-50 py-6 md:py-8 lg:py-10 mb-8 relative z-0">
      <div className="container-responsive">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 relative z-0">
          {/* Main Slideshow - 3 columns */}
          <div className="col-span-3 relative group">
            <div className="relative w-full h-80 lg:h-96 xl:h-[420px] bg-white rounded-2xl overflow-hidden shadow-xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-6 left-6 flex space-x-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 bg-white'
                        : 'w-3 bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white text-slate-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white text-slate-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Side Images - 2 columns, stacked */}
          <div className="col-span-2 flex flex-col gap-6">
            {/* Top Image */}
            <div className="h-40 lg:h-48 xl:h-52 group">
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={menuSetImg}
                  alt="Menu Set Đặc Biệt"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">Menu Set Đặc Biệt</h3>
                  <p className="text-sm text-white/90">Combo tiết kiệm</p>
                </div>
              </div>
            </div>

            {/* Bottom Image */}
            <div className="h-40 lg:h-48 xl:h-52 group">
              <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={caNguImg}
                  alt="Cá Ngừ Tươi Sống"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">Cá Ngừ Tươi Sống</h3>
                  <p className="text-sm text-white/90">Chất lượng cao</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden md:grid-cols-3 gap-4 relative z-0">
          {/* Main Slideshow - 2 columns */}
          <div className="col-span-2 relative group">
            <div className="relative w-full h-80 md:h-96 bg-white rounded-xl overflow-hidden shadow-lg">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-6 bg-white'
                        : 'w-2 bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-slate-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-slate-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Side Images - 1 column, stacked */}
          <div className="flex flex-col gap-3">
            <div className="h-40 md:h-48 group">
              <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={menuSetImg}
                  alt="Menu Set Đặc Biệt"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            <div className="h-40 md:h-48 group">
              <div className="relative w-full h-full bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={caNguImg}
                  alt="Cá Ngừ Tươi Sống"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative z-0">
          <div className="relative group">
            <div className="relative w-full h-80 bg-white rounded-xl overflow-hidden shadow-lg">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent"></div>
                </div>
              ))}

              {/* Navigation Dots */}
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-6 bg-white'
                        : 'w-2 bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Arrow Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-slate-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white text-slate-700 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-md"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Side Images */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="group">
              <div className="relative w-full h-32 bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={menuSetImg}
                  alt="Menu Set Đặc Biệt"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>

            <div className="group">
              <div className="relative w-full h-32 bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={caNguImg}
                  alt="Cá Ngừ Tươi Sống"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
