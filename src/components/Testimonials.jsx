import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Thị Hương",
      role: "Khách hàng thân thiết",
      avatar: "/assets/images/customer-1.jpg",
      rating: 5,
      comment: "Hải sản tươi ngon, giao hàng nhanh. Gia đình tôi đặt hàng đều đặn mỗi tuần. Chất lượng luôn ổn định, giá cả hợp lý."
    },
    {
      id: 2,
      name: "Trần Văn Thành",
      role: "Khách hàng VIP",
      avatar: "/assets/images/customer-2.jpg",
      rating: 5,
      comment: "Hoà Tuộc luôn đảm bảo chất lượng tuyệt vời. Nhân viên thân thiện, dịch vụ khách hàng xuất sắc. Tôi rất hài lòng."
    },
    {
      id: 3,
      name: "Lê Thị Minh",
      role: "Khách hàng mới",
      avatar: "/assets/images/customer-3.jpg",
      rating: 5,
      comment: "Lần đầu đặt hàng online mua hải sản, lo lắng lắm. Nhưng Hoà Tuộc làm tôi yên tâm hoàn toàn. Sẽ giới thiệu cho bạn bè."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Khách Hàng Nói Gì Về Hoà Tuộc
          </h2>
          <p className="text-lg text-gray-600">
            Khách hàng khen ngợi sự tươi ngon, giao hàng nhanh và dịch vụ xuất sắc
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg card-hover">
              <div className="flex text-yellow-400 mb-4">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
