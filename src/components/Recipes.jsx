import React from 'react'

// Import ảnh như modules để Vite tự động xử lý đường dẫn
import phatNhayTuongImg from '/assets/images/phat-nhay-tuong.jpg'
import cuaNauHapImg from '/assets/images/cua-nau-hap.jpg'
import cuaHoangDeNuongImg from '/assets/images/cua-hoang-de-nuong.jpg'

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Phật Nhảy Tường",
      description: "Món Ngon Làm Phật Cũng \"Nhảy\" Qua Hàng Rào",
      image: phatNhayTuongImg,
      date: "01/04/2025"
    },
    {
      id: 2,
      title: "Cua Nâu Hấp Rượu Vang",
      description: "Ngon Đẳng Cấp Châu Âu",
      image: cuaNauHapImg,
      date: "01/04/2025"
    },
    {
      id: 3,
      title: "Cua Hoàng Đế Nướng Bơ Tỏi",
      description: "Ngon Sang Chảnh Từ Alaska",
      image: cuaHoangDeNuongImg,
      date: "01/04/2025"
    }
  ]

  return (
    <section id="recipes" className="py-16 bg-gray-50">
      <div className="container-responsive">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
            Bí Quyết Nấu Ăn
          </h2>
          <p className="text-lg text-gray-600">
            Những món ngon từ hải sản tươi sống Hoà Tuộc
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover">
              <img 
                src={recipe.image}
                alt={recipe.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl mb-2">{recipe.title}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{recipe.date}</span>
                  <button className="text-ocean-blue hover:text-blue-800 font-semibold transition-colors">
                    Xem Công Thức →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recipes
