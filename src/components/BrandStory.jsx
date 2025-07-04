import React from 'react'
import hoaTuocStoryImg from '/assets/images/hoa-tuoc-story.jpg'

const BrandStory = () => {
  const stats = [
    { number: "2", label: "Cơ sở" },
    { number: "15K+", label: "Khách hàng tin dùng" },
    { number: "100%", label: "Tươi sống" }
  ]

  return (
    <section id="about" className="py-16">
      <div className="container-responsive">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-8">
            Câu Chuyện Hoà Tuộc
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Được thành lập bởi ông Hoà, người bắt đầu với một quầy hàng nhỏ ở Cần Thơ,
                nhấn mạnh sự uy tín và chất lượng. Với khẩu hiệu "Không tươi, tôi không bán",
                Hoà Tuộc đã trở thành thương hiệu hải sản tươi sống số 1 Nam Bộ.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Hiện đã mở rộng với hai cơ sở tại Cần Thơ và TP. Hồ Chí Minh, chúng tôi cam kết
                mang đến hải sản tươi sống chất lượng cao nhất với dịch vụ khách hàng xuất sắc.
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-4 sm:space-x-8 flex-wrap gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-ocean-blue">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src={hoaTuocStoryImg}
                alt="Câu chuyện Hoà Tuộc"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
