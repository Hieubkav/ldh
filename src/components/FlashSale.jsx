import React from 'react'

const FlashSale = () => {
  const flashProducts = [
    {
      id: 1,
      name: "Sò Điệp MIYAGI (6-8C/KG)",
      image: "/assets/images/so-diep.jpg",
      currentPrice: "240.000đ",
      originalPrice: "250.000đ",
      discount: "-4%",
      remaining: 7
    },
    {
      id: 2,
      name: "BÀO NGƯ HÀN QUỐC SỐNG",
      image: "/assets/images/bao-ngu.jpg",
      currentPrice: "722.000đ",
      originalPrice: "760.000đ",
      discount: "-5%",
      remaining: 29
    },
    {
      id: 3,
      name: "CUA HOÀNG ĐẾ – KINGCRAB",
      image: "/assets/images/cua-hoang-de.jpg",
      currentPrice: "1.370.800đ",
      originalPrice: "1.490.000đ",
      discount: "-8%",
      remaining: 8
    },
    {
      id: 4,
      name: "GHẸ XANH PHAN THIẾT",
      image: "/assets/images/ghe-xanh.jpg",
      currentPrice: "323.000đ",
      originalPrice: "340.000đ",
      discount: "-5%",
      remaining: 9
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white pulse-sale">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            ⚡ GIẢM GIÁ CHỚP NHOÁNG ⚡
          </h2>
          <p className="text-xl">Số lượng có hạn - Đặt ngay kẻo hết!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {flashProducts.map((product) => (
            <div key={product.id} className="bg-white text-gray-800 rounded-xl p-6 shadow-lg card-hover">
              <img 
                src={product.image}
                alt={product.name} 
                className="w-full h-40 object-cover rounded-lg mb-4" 
              />
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <span className="text-xl sm:text-2xl font-bold text-red-600 block">
                    {product.currentPrice}
                  </span>
                  <span className="text-sm sm:text-lg text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>
                <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold flex-shrink-0">
                  {product.discount}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Còn lại: <span className="font-semibold text-red-600">{product.remaining} sản phẩm</span>
              </p>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors">
                Mua Ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FlashSale
