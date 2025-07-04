import React, { useState } from 'react'
import logoImg from '/assets/images/logo.png'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenu(false)
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-responsive py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src={logoImg}
              alt="Hoà Tuộc Logo"
              className="h-12 object-contain bg-ocean-blue px-3 py-1 rounded-lg"
            />
            <div>
              <h1 className="font-poppins font-bold text-xl text-ocean-blue">Hoà Tuộc</h1>
              <p className="text-xs text-gray-600">Hải sản tươi sống số 1 Nam Bộ</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-ocean-blue transition-colors text-sm lg:text-base"
            >
              Sản Phẩm
            </button>
            <button 
              onClick={() => scrollToSection('recipes')}
              className="text-gray-700 hover:text-ocean-blue transition-colors text-sm lg:text-base"
            >
              Bí Quyết Nấu Ăn
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-ocean-blue transition-colors text-sm lg:text-base"
            >
              Về Chúng Tôi
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-ocean-blue transition-colors text-sm lg:text-base"
            >
              Liên Hệ
            </button>
          </nav>

          {/* Contact & CTA */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <div className="text-right">
              <p className="text-xs lg:text-sm text-gray-600">Hotline 24/7</p>
              <a href="tel:190086680" className="font-bold text-ocean-blue text-sm lg:text-lg">
                1900 8668 08
              </a>
            </div>
            <button className="btn-primary px-3 lg:px-6 py-2 lg:py-3 text-sm lg:text-base">
              Đặt Hàng Ngay
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden mt-4 pb-4 fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-700 text-left"
              >
                Sản Phẩm
              </button>
              <button 
                onClick={() => scrollToSection('recipes')}
                className="text-gray-700 text-left"
              >
                Bí Quyết Nấu Ăn
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 text-left"
              >
                Về Chúng Tôi
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 text-left"
              >
                Liên Hệ
              </button>
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600">
                  Hotline: <a href="tel:190086680" className="font-bold text-ocean-blue">1900 8668 08</a>
                </p>
                <button className="w-full mt-2 btn-primary">
                  Đặt Hàng Ngay
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
