# Hoà Tuộc React Landing Page

Trang landing page bán hải sản của công ty Hoà Tuộc được xây dựng bằng React + Vite + Tailwind CSS.

## 🚀 Cách chạy dự án

### Yêu cầu
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt và chạy
```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Preview build
npm run preview
```

## 📦 Deploy lên GitHub Pages

Dự án đã được cấu hình sẵn GitHub Actions để tự động deploy lên GitHub Pages.

### Cách thiết lập:

1. **Push code lên GitHub repository**

2. **Bật GitHub Pages:**
   - Vào Settings của repository
   - Scroll xuống phần "Pages" 
   - Trong "Source", chọn "GitHub Actions"

3. **Cấu hình base path:**
   - File `vite.config.js` đã được cấu hình với base path `/ldh/`
   - Nếu repository có tên khác, hãy thay đổi `/ldh/` thành `/tên-repository/`

4. **Tự động deploy:**
   - Mỗi khi push code lên branch `master`, GitHub Actions sẽ tự động build và deploy
   - Có thể chạy thủ công từ tab "Actions" trong repository

### URL sau khi deploy:
```
https://username.github.io/ldh/
```

## 🛠️ Công nghệ sử dụng

- **React 18** - UI framework
- **Vite** - Build tool và dev server
- **Tailwind CSS** - CSS framework
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting

## 📁 Cấu trúc dự án

```
ldh/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/                     # Static assets
├── src/
│   ├── components/            # React components
│   ├── App.jsx               # Main App component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── package.json
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── README.md
```

## 🎨 Thiết kế

- Thiết kế hiện đại, tối giản với tông màu sáng
- Responsive design cho mobile và desktop
- Sử dụng font Poppins/Inter
- Color scheme chính: #1E3A8A, #38BDF8

## 📞 Thông tin liên hệ

- **Công ty:** Hoà Tuộc
- **Slogan:** "Không tươi, tôi không bán"
- **Hotline:** 1900 8668 08
- **Email:** info@hoatuoc.com
- **Facebook:** https://www.facebook.com/hoa.tuoc.971949
