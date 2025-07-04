import React from 'react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      ),
      title: "Không Tươi, Tôi Không Bán",
      description: "Cam kết chất lượng tuyệt đối, chỉ bán hải sản tươi sống 100%"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: "Uy Tín Từ Cần Thơ",
      description: "Được thành lập bởi ông Hoà, bắt đầu từ quầy hàng nhỏ với sự uy tín"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      title: "Giao Hàng Nhanh",
      description: "Phục vụ tại Cần Thơ và TP.HCM, giao hàng nhanh chóng"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      title: "Dịch Vụ Xuất Sắc",
      description: "Nhân viên thân thiện, dịch vụ khách hàng xuất sắc được khách khen ngợi"
    }
  ]

  return (
    <section className="py-16 bg-white mt-8">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Tại Sao Chọn Hoà Tuộc?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Từ quầy hàng nhỏ ở Cần Thơ đến thương hiệu uy tín, chúng tôi luôn đặt chất lượng lên hàng đầu
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group fade-in">
              <div className="w-16 h-16 bg-ocean-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
