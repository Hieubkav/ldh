import React, { useState, useEffect } from 'react'

const PopupOffer = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 10000) // Show after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setShowPopup(false)
  }

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-8 relative mx-4 fade-in">
        <button 
          onClick={closePopup}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="text-center">
          <div className="text-4xl mb-4">🦐</div>
          <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-2">
            Ưu Đãi Đặc Biệt!
          </h3>
          <p className="text-gray-600 mb-6">
            Giảm ngay 10% cho đơn hàng đầu tiên từ 300.000đ. 
            Liên hệ ngay để được tư vấn và đặt hàng!
          </p>

          {/* Contact Options */}
          <div className="bg-ocean-blue text-white rounded-lg p-3 sm:p-4 mb-6">
            <p className="text-xs sm:text-sm mb-2">Hotline 24/7:</p>
            <div className="text-sm sm:text-lg lg:text-xl font-bold break-all">
              1900 8668 08
            </div>
          </div>

          <div className="space-y-3">
            <a
              href="tel:190086680"
              className="block w-full btn-primary"
            >
              📞 Gọi Ngay
            </a>
            <button 
              onClick={closePopup}
              className="w-full text-gray-500 hover:text-gray-700 transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupOffer
