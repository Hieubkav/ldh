import React from 'react'
import logoImg from '/assets/images/logo.png'

const Footer = () => {
  const quickLinks = [
    "Hải Sản Chế Biến",
    "Hải Sản Đông Lạnh", 
    "Hải Sản Trong Nước",
    "Hải Sản Nhập Khẩu",
    "Bí Quyết Nấu Ăn"
  ]

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/hoa.tuoc.971949",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Zalo",
      href: "https://zalo.me/hoatuoc",
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652L4.017 24l4.69-2.506C9.694 21.827 10.821 22 12 22c6.627 0 12-4.975 12-11.111C24 4.975 18.627 0 12 0z"/>
        </svg>
      )
    }
  ]

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5 text-ocean-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
      content: (
        <div>
          <div className="text-gray-400">1900 8668 08</div>
          <div className="text-gray-400">(8:00-22:00 từ T2 đến CN)</div>
        </div>
      )
    },
    {
      icon: (
        <svg className="w-5 h-5 text-ocean-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      content: (
        <span className="text-gray-400 break-all text-sm">hoatuochaisantuoisong@gmail.com</span>
      )
    }
  ]

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container-responsive">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logoImg}
                alt="Hoà Tuộc Logo"
                className="h-10 object-contain bg-ocean-blue px-2 py-1 rounded"
              />
              <div>
                <h3 className="font-poppins font-bold text-xl">Hoà Tuộc</h3>
                <p className="text-sm text-gray-400">Hải sản tươi sống số 1 Nam Bộ</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              "Không tươi, tôi không bán." - Chuyên cung cấp hải sản tươi sống chất lượng cao từ Cần Thơ đến TP.HCM.
            </p>
            <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Danh Mục Sản Phẩm</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button className="text-gray-400 hover:text-white transition-colors text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liên Hệ Đặt Hàng</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {contact.icon}
                  {contact.content}
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Địa Chỉ Cửa Hàng</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <div>
                <h5 className="font-semibold text-white mb-1">Cần Thơ</h5>
                <p>333, Đường Nguyễn Văn Linh</p>
                <p>Phường An Khánh, Quận Ninh Kiều</p>
              </div>
              <div>
                <h5 className="font-semibold text-white mb-1">TP. Hồ Chí Minh</h5>
                <p>Đang cập nhật địa chỉ mới</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Hoà Tuộc. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
