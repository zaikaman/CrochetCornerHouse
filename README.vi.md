# Crochet Corner House - Nền tảng Thương mại Điện tử

<div align="center">
  <img src="/public/logo.png" alt="Crochet Corner House Logo" width="150" height="150"/>
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.1.4-black)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.1-38bdf8)](https://tailwindcss.com/)
  [![React](https://img.shields.io/badge/React-19.0-61dafb)](https://reactjs.org/)
  
  **Một nền tảng thương mại điện tử hiện đại cho các sản phẩm crochet thủ công**
  
  [🌐 Live Demo](https://webbandolenmoc.vercel.app) | [📧 Contact](#contact) | [🛍️ Shop Now](#features)
</div>

---

## 🎯 Tổng quan

Crochet Corner House là một nền tảng thương mại điện tử được thiết kế dành cho các sản phẩm crochet thủ công, cung cấp trải nghiệm mua sắm liền mạch cho khách hàng tìm kiếm các sản phẩm len móc độc đáo.

### ✨ Điểm nổi bật

- **🎨 Giao diện UI/UX đẹp mắt**: Thiết kế hiện đại, đáp ứng và hoạt hoạ mượt mà
- **🛍️ Thương mại điện tử đầy đủ**: Danh mục sản phẩm, tìm kiếm, trang chi tiết sản phẩm
- **📱 Di động tối ưu**: Tương thích tốt với mọi thiết bị và kích thước màn hình
- **🌐 SEO được tối ưu hóa**: Biết thị cho Next.js tốt cho hiệu suất tìm kiếm
- **⚡ Hiệu suất cao**: Render phía máy chủ và tối ưu ảnh
- **🎯 Tập trung người dùng**: Điều hướng trực quan và trải nghiệm người dùng mượt mà

---

## 🚀 Tính năng

### 🏪 Chức năng Thương mại điện tử
- **Danh mục sản phẩm**: Danh sách sản phẩm đầy đủ theo danh mục
- **Tìm kiếm nâng cao**: Tìm kiếm theo thời gian thực với gợi ý sản phẩm
- **Chi tiết sản phẩm**: Trang sản phẩm phong phú với thông số và cách chăm sóc
- **Thiết kế đáp ứng**: Trải nghiệm tuyệt vời trên mọi thiết bị
- **Tích hợp mạng xã hội**: Tích hợp đặt hàng trực tiếp từ Facebook

### 🎨 Thể loại Sản phẩm
- 🌸 **Hoa crochet**: Hoa trang trí handmade
- 🐾 **Amigurumi Animal**: Các thú nhồi bông đáng yêu
- 🧶 **Bộ dụng cụ handmade**: Bộ dụng cụ cho dự án crochet DIY
- 🖼️ **Bộ thêu**: Bộ dụng cụ thêu với hướng dẫn chi tiết
- 🎁 **Bộ quà tặng**: Những bộ sưu tập dành cho quà tặng

### 📚 Nội dung nổi bật
- **Blog**: Nội dung giáo dục về các kỹ thuật crochet
- **Trang giới thiệu**: Câu chuyện thương hiệu và quy trình thủ công
- **Tích hợp liên hệ**: Kênh liên lạc dễ dàng
- **Hướng dẫn chăm sóc**: Hướng dẫn bảo quản sản phẩm chi tiết

---

## 🛠️ Công nghệ

### Frontend
- **[Next.js 15.1.4](https://nextjs.org/)** - Framework React với SSR/SSG
- **[React 19.0](https://reactjs.org/)** - Thư viện UI
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript có kiểu
- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Framework CSS utility-first

### Công cụ Phát triển
- **[ESLint](https://eslint.org/)** - Lint và định dạng mã
- **[PostCSS](https://postcss.org/)** - Xử lý CSS
- **JavaScript Hiện đại (ES2020+)** - Các tính năng ngôn ngữ mới nhất

### Hiệu suất & SEO
- **Tối ưu hóa hình ảnh** - Tối ưu hình ảnh tự động của Next.js
- **Render phía máy chủ** - SEO tốt và tải trang nhanh
- **Tiêu chuẩn nâng cao (Progressive Enhancement)** - Hoạt động kể cả khi không có JavaScript
- **Thiết kế ưu tiên di động** - Phù hợp với mọi thiết bị

---

## 📁 Cấu trúc Dự án

```
webbandolenmoc/
├── public/                 # Tài sản tĩnh
│   ├── blog/              # Hình ảnh bài viết blog
│   ├── images/            # Ảnh chung
│   └── *.jpg/*.png        # Ảnh sản phẩm
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── about/         # Trang giới thiệu
│   │   ├── blog/          # Blog
│   │   ├── contact/       # Liên hệ
│   │   ├── products/      # Sản phẩm
│   │   └── layout.tsx     # Bố cục gốc
│   ├── components/        # Thành phần tái sử dụng
│   │   └── layout/        # Thành phần bố cục
│   └── data/              # Dữ liệu tĩnh
│       ├── blog-posts.ts  # Nội dung blog
│       └── products.ts    # Danh mục sản phẩm
├── tailwind.config.ts     # Cấu hình Tailwind
├── next.config.ts         # Cấu hình Next.js
└── package.json          # Phụ thuộc
```

---

## 🚀 Bắt đầu

### Tiền yêu cầu
- Node.js 18.0 trở lên
- npm hoặc yarn

### Cài đặt

1. **Clone kho lưu trữ**
   ```bash
   git clone https://github.com/zaikaman/webbandolenmoc.git
   cd webbandolenmoc
   ```

2. **Cài đặt phụ thuộc**
   ```bash
   npm install
   # hoặc
   yarn install
   ```

3. **Khởi chạymáy chủ phát triển**
   ```bash
   npm run dev
   # hoặc
   yarn dev
   ```

4. **Mở trong trình duyệt**
   ```bash
   http://localhost:3000
   ```

### Build cho Tình trạng Sản phẩm

```bash
# Build ứng dụng
npm run build

# Khởi động máy chủ sản phẩm
npm run start
```

---

## 📊 Hiệu suất

- **Điểm Lighthouse**: 95+ (Hiệu suất, Truy cập, Thực tiễn tốt, SEO)
- **Core Web Vitals**: Tối ưu cho trải nghiệm người dùng
- **Hiệu suất di động**: Tải nhanh trên mọi thiết bị
- **SEO được tối ưu**: Dữ liệu có cấu trúc và thẻ meta

---

## 🎨 Quy trình thiết kế

### Trải nghiệm người dùng
- **Điều hướng trực quan**: Giao diện dễ sử dụng cho mọi lứa tuổi
- **Tổ chức thị giác**: Trình bày sản phẩm và thông tin rõ ràng
- **Tiếp cận (Accessibility)**: Thiết kế phù hợp WCAG
- **Hiệu suất**: Tải nhanh và tương tác mượt

### Nhận diện Thương hiệu
- **Ấn tượng ấm áp, chào đón**: Bảng màu dịu, tôn vẻ thủ công
- **Chuyên nghiệp**: Thiết kế sạch, hiện đại để xây dựng niềm tin
- **Nghệ thuật**: Trình diễn vẻ đẹp và sự độc đáo của handmade

---

## 🔮 Kế hoạch cải tiến tương lai

### Các tính năng dự kiến
- [ ] **Giỏ hàng & Thanh toán**: Chức năng đầy đủ cho mua sắm
- [ ] **Tài khoản người dùng**: Đăng ký và lịch sử đơn hàng
- [ ] **Tích hợp thanh toán**: Lựa chọn thanh toán
- [ ] **Quản lý tồn kho**: Theo dõi số lượng trong kho
- [ ] **Đa ngôn ngữ**: Tiếng Việt và tiếng Anh
- [ ] **Lọc nâng cao**: Theo giá, danh mục, tính năng
- [ ] **Đánh giá khách hàng**: Hệ thống xếp hạng và đánh giá
- [ ] **Danh sách mong muốn**: Lưu sản phẩm yêu thích
- [ ] **Newsletter**: Tích hợp email marketing

---

## 📈 Tác động Kinh doanh

### Thị trường
- **Chú trọng ngách**: Chuyên về các sản phẩm crochet thủ công
- **Chất lượng cao**: Định vị premium với thông tin chi tiết
- **Giáo dục cho khách hàng**: Nội dung blog xây dựng cộng đồng
- **Thương mại xã hội**: Tích hợp mua hàng trực tiếp từ Facebook cho thị trường Việt Nam

### Khả năng mở rộng
- **Kiến trúc modular**: Dễ dàng thêm tính năng mới
- **Hiệu suất tối ưu**: Có thể xử lý lượng truy cập tăng
- **SEO**: Nền tảng tốt cho tăng trưởng tự nhiên

---

## 👥 Tham gia đóng góp

Chúng tôi hoan nghênh đóng góp để cải thiện Crochet Corner House! Vui lòng làm theo các bước sau:

1. Fork kho lưu trữ
2. Tạo một nhánh: `git checkout -b feature/amazing-feature`
3. Commit thay đổi: `git commit -m 'Add amazing feature'`
4. Push nhánh: `git push origin feature/amazing-feature`
5. Mở một Pull Request

### Hướng dẫn đóng góp
- Tuân thủ phong cách mã và quy ước hiện có
- Viết commit rõ ràng
- Thêm comment cho chức năng phức tạp
- Kiểm tra kỹ bản cập nhật
- Cập nhật tài liệu khi cần

---

## 📞 Liên hệ

**Dinh Phuc Thinh** - Lập trình viên Full Stack

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/%C4%91inh-ph%C3%BAc-th%E1%BB%8Bnh-2561b5274/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zaikaman)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:zaikaman123@gmail.com)

### Dự án Liên kết
- **Portfolio**: [GitHub Profile](https://github.com/zaikaman)
- **Trang web trực tiếp**: [Crochet Corner House](https://webbandolenmoc.vercel.app)
- **Kho lưu trữ**: [GitHub Repository](https://github.com/zaikaman/webbandolenmoc)

---

## 📝 Giấy phép

Dự án được cấp phép theo MIT - xem chi tiết trong tệp LICENSE

---

## 🙏 Đánh giá

- **Cảm ơn** các thành viên cộng đồng đã đóng góp và nguồn cảm hứng

---

<div align="center">
  
### 🌟 Nếu bạn thấy dự án hữu ích, hãy đánh dấu sao cho nó! 🌟

**Xây dựng với ❤️ bởi [Dinh Phuc Thinh](https://github.com/zaikaman)**

*Tạo trải nghiệm kỹ thuật số cho sự khuyết tật len thủ công*

</div>