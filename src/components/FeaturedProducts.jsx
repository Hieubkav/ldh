import React, { useState } from 'react'

// Import ảnh sản phẩm
import soDoSashimiImg from '/assets/images/so-do-sashimi.jpg'
import ocVoiVoiImg from '/assets/images/oc-voi-voi.jpg'
import chaoBaoNguImg from '/assets/images/chao-bao-ngu.jpg'
import gheXanhImg from '/assets/images/ghe-xanh.jpg'
import soDiepImg from '/assets/images/so-diep.jpg'
import baoNguImg from '/assets/images/bao-ngu.jpg'

const FeaturedProducts = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'Tất Cả' },
    { id: 'processed', name: 'Hải Sản Chế Biến' },
    { id: 'frozen', name: 'Hải Sản Đông Lạnh' },
    { id: 'domestic', name: 'Hải Sản Trong Nước' },
    { id: 'imported', name: 'Hải Sản Nhập Khẩu' }
  ]

  const products = [
    {
      id: 1,
      name: "SÒ ĐỎ SASHIMI (100gr)",
      category: "processed",
      image: soDoSashimiImg,
      price: "189.000đ",
      unit: "/100gr",
      rating: 5,
      reviews: 127,
      badge: "Mang Về",
      badgeColor: "bg-blue-500",
      description: "Áp dụng mang về, tươi ngon chất lượng cao"
    },
    {
      id: 2,
      name: "Ốc Vòi Voi Sashimi",
      category: "processed",
      image: ocVoiVoiImg,
      price: "800.000đ",
      unit: "/phần",
      rating: 5,
      reviews: 89,
      badge: "Đặc Biệt",
      badgeColor: "bg-green-500",
      description: "Sashimi cao cấp, thịt ngọt tự nhiên"
    },
    {
      id: 3,
      name: "CHÁO BÀO NGƯ ĐẶC BIỆT",
      category: "imported",
      image: chaoBaoNguImg,
      price: "299.000đ",
      unit: "/tô",
      rating: 5,
      reviews: 234,
      badge: "Đặc Biệt",
      badgeColor: "bg-purple-500",
      description: "Cháo bào ngư thơm ngon, bổ dưỡng"
    },
    {
      id: 4,
      name: "GHẸ XANH PHAN THIẾT",
      category: "domestic",
      image: gheXanhImg,
      price: "323.000đ",
      originalPrice: "340.000đ",
      unit: "/kg",
      rating: 5,
      reviews: 156,
      badge: "-5%",
      badgeColor: "bg-ocean-red",
      description: "Size 6-8c/kg, tươi sống từ Phan Thiết"
    },
    {
      id: 5,
      name: "Sò Điệp MIYAGI",
      category: "domestic",
      image: soDiepImg,
      price: "240.000đ",
      originalPrice: "250.000đ",
      unit: "/kg",
      rating: 5,
      reviews: 198,
      badge: "-4%",
      badgeColor: "bg-ocean-red",
      description: "Size 6-8C/KG, tươi ngon chất lượng"
    },
    {
      id: 6,
      name: "BÀO NGƯ HÀN QUỐC SỐNG",
      category: "imported",
      image: baoNguImg,
      price: "722.000đ",
      originalPrice: "760.000đ",
      unit: "/kg",
      rating: 5,
      reviews: 312,
      badge: "-5%",
      badgeColor: "bg-ocean-red",
      description: "Size 14-16 con/kg, nhập khẩu Hàn Quốc"
    }
  ]

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter)

  return (
    <section id="products" className="py-16">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Danh Mục Sản Phẩm
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Hải sản tươi sống chất lượng cao từ Hoà Tuộc
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-8 px-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 sm:px-4 lg:px-6 py-2 rounded-full font-medium transition-colors text-xs sm:text-sm lg:text-base ${
                  activeFilter === filter.id
                    ? 'bg-ocean-blue text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card fade-in">
              <div className="relative">
                <img 
                  src={product.image}
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {product.badge}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-ocean-red">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through ml-2">{product.originalPrice}</span>
                    )}
                    <p className="text-sm text-gray-600">{product.unit}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {'⭐'.repeat(product.rating)} 
                    <span className="text-gray-600 ml-1">({product.reviews})</span>
                  </div>
                </div>
                <button className="w-full btn-primary">
                  🛒 Thêm Vào Giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
