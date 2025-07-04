import React from 'react'

const FinalCTA = () => {
  const contactOptions = [
    {
      type: "phone",
      label: "📞 Gọi: 1900 8668 08",
      href: "tel:190086680",
      bgColor: "bg-ocean-orange hover:bg-orange-600"
    },
    {
      type: "email",
      label: "✉️ Email Ngay",
      href: "mailto:hoatuochaisantuoisong@gmail.com",
      bgColor: "bg-green-500 hover:bg-green-600"
    },
    {
      type: "zalo",
      label: "💬 Chat Zalo",
      href: "https://zalo.me/hoatuoc",
      bgColor: "bg-blue-500 hover:bg-blue-600",
      target: "_blank"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-ocean-blue to-blue-800 text-white">
      <div className="container-responsive text-center">
        <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
          Liên Hệ Đặt Hàng Ngay
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          "Không tươi, tôi không bán" - Cam kết chất lượng từ Hoà Tuộc
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              target={option.target}
              className={`w-full sm:w-auto ${option.bgColor} text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg transition-colors text-center break-words`}
            >
              {option.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-blue-200 mt-6">
          Giờ mở cửa: Thứ Hai - Chủ Nhật: 10:00 - 22:00 (Mở cửa cả ngày lễ và cuối tuần)
        </p>
      </div>
    </section>
  )
}

export default FinalCTA
