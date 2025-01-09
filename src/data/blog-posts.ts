export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Hướng dẫn móc len cơ bản cho người mới bắt đầu",
    slug: "huong-dan-moc-len-co-ban",
    excerpt: "Khám phá những kỹ thuật móc len cơ bản và những điều cần biết khi bắt đầu hành trình móc len của bạn.",
    content: `
      Móc len là một trong những kỹ năng thủ công truyền thống được yêu thích nhất. Trong bài viết này, chúng ta sẽ tìm hiểu về:
      
      1. Các dụng cụ cần thiết để bắt đầu
      2. Cách cầm móc len và len đúng cách
      3. Các mũi móc cơ bản: mũi đơn, mũi đôi
      4. Cách đọc pattern móc len
      5. Những lỗi thường gặp và cách khắc phục
      
      Hãy cùng bắt đầu hành trình khám phá nghệ thuật móc len!
    `,
    image: "/blog/basic-crochet.jpg",
    category: "Hướng dẫn",
    date: "2024-01-15",
    author: "CrochetCorn"
  },
  {
    id: 2,
    title: "5 Mẫu thú len dễ thương cho người mới học",
    slug: "mau-thu-len-de-thuong",
    excerpt: "Tổng hợp những mẫu thú len đơn giản, dễ thực hiện nhưng vẫn cực kỳ đáng yêu cho người mới bắt đầu.",
    content: `
      Trong bài viết này, chúng mình sẽ hướng dẫn bạn cách móc 5 mẫu thú len dễ thương:
      
      1. Thỏ mini đáng yêu
      2. Gấu con ngái ngủ
      3. Mèo mập đáng yêu
      4. Chim cánh cụt nhỏ
      5. Cún con dễ thương
      
      Mỗi mẫu đều được thiết kế đơn giản, phù hợp cho người mới học móc len.
    `,
    image: "/blog/cute-amigurumi.jpg",
    category: "Mẫu móc len",
    date: "2024-01-20",
    author: "CrochetCorn"
  },
  {
    id: 3,
    title: "Cách chọn len phù hợp cho từng dự án",
    slug: "cach-chon-len-phu-hop",
    excerpt: "Hướng dẫn chi tiết cách chọn len phù hợp cho từng loại dự án móc len của bạn.",
    content: `
      Chọn đúng loại len sẽ quyết định 50% thành công của sản phẩm. Cùng tìm hiểu:
      
      1. Các loại len phổ biến trên thị trường
      2. Đặc điểm và công dụng của từng loại len
      3. Cách chọn len theo dự án
      4. Những lưu ý khi mua len
      5. Cách bảo quản len đúng cách
    `,
    image: "/blog/yarn-types.png",
    category: "Kiến thức",
    date: "2024-01-25",
    author: "CrochetCorn"
  },
  {
    id: 4,
    title: "Bí quyết móc len đều tay và đẹp",
    slug: "bi-quyet-moc-len-deu-tay",
    excerpt: "Những mẹo và kỹ thuật giúp bạn móc len đều tay hơn, tạo ra những sản phẩm chuyên nghiệp.",
    content: `
      Để móc len đều tay và đẹp, bạn cần chú ý những điểm sau:
      
      1. Giữ lực móc đều
      2. Cách đếm mũi móc chuẩn xác
      3. Kỹ thuật chuyển hàng không bị xoắn
      4. Cách xử lý các góc và cạnh
      5. Mẹo làm đều mũi móc
    `,
    image: "/blog/crochet-tips.jpg",
    category: "Mẹo vặt",
    date: "2024-01-30",
    author: "CrochetCorn"
  },
  {
    id: 5,
    title: "Cách móc hoa len hồng xinh xắn",
    slug: "cach-moc-hoa-len-hong",
    excerpt: "Hướng dẫn chi tiết cách móc hoa len hồng, từ cơ bản đến nâng cao.",
    content: `
      Hoa len hồng là một trong những mẫu móc được yêu thích nhất. Cùng học cách móc:
      
      1. Chuẩn bị dụng cụ và len
      2. Các bước móc cánh hoa
      3. Cách móc nhụy hoa
      4. Kỹ thuật lắp ráp các phần
      5. Mẹo tạo form hoa đẹp
    `,
    image: "/blog/rose-crochet.jpg",
    category: "Hướng dẫn",
    date: "2024-02-05",
    author: "CrochetCorn"
  },
  {
    id: 6,
    title: "10 Mẫu móc len hot trend 2024",
    slug: "mau-moc-len-hot-trend",
    excerpt: "Cập nhật những mẫu móc len đang được yêu thích nhất trong năm 2024.",
    content: `
      Cùng điểm qua những mẫu móc len đang làm mưa làm gió:
      
      1. Thú len tí hon
      2. Hoa len pastel
      3. Móc len kết hợp macrame
      4. Phụ kiện len vintage
      5. Và nhiều mẫu thú vị khác
    `,
    image: "/blog/trending-crochet.jpg",
    category: "Xu hướng",
    date: "2024-02-10",
    author: "CrochetCorn"
  },
  {
    id: 7,
    title: "Cách phối màu len trong móc len",
    slug: "cach-phoi-mau-len",
    excerpt: "Hướng dẫn cách phối màu len hài hòa để tạo ra những sản phẩm đẹp mắt.",
    content: `
      Phối màu len đúng cách sẽ tạo nên những sản phẩm độc đáo:
      
      1. Nguyên tắc phối màu cơ bản
      2. Các combo màu được ưa chuộng
      3. Cách chuyển màu len đẹp
      4. Kỹ thuật móc len nhiều màu
      5. Những lưu ý khi phối màu
    `,
    image: "/blog/color-combination.jpg",
    category: "Kiến thức",
    date: "2024-02-15",
    author: "CrochetCorn"
  },
  {
    id: 8,
    title: "Cách bảo quản sản phẩm len",
    slug: "cach-bao-quan-san-pham-len",
    excerpt: "Những mẹo hữu ích giúp bảo quản sản phẩm len bền đẹp theo thời gian.",
    content: `
      Để sản phẩm len luôn như mới, bạn cần:
      
      1. Cách giặt sản phẩm len đúng cách
      2. Phơi và sấy khô an toàn
      3. Cách cất giữ sản phẩm len
      4. Xử lý khi len bị xù
      5. Phòng tránh mối mọt
    `,
    image: "/blog/yarn-care.jpg",
    category: "Mẹo vặt",
    date: "2024-02-20",
    author: "CrochetCorn"
  },
  {
    id: 9,
    title: "Móc len - Liệu pháp giảm stress",
    slug: "moc-len-giam-stress",
    excerpt: "Khám phá những lợi ích tuyệt vời của móc len đối với sức khỏe tinh thần.",
    content: `
      Móc len không chỉ là sở thích mà còn là liệu pháp tốt cho tinh thần:
      
      1. Tác động của móc len đến não bộ
      2. Cách móc len giúp thư giãn
      3. Xây dựng thói quen móc len
      4. Tham gia cộng đồng móc len
      5. Chia sẻ niềm vui sáng tạo
    `,
    image: "/blog/crochet-therapy.jpg",
    category: "Sức khỏe",
    date: "2024-02-25",
    author: "CrochetCorn"
  },
  {
    id: 10,
    title: "Khởi nghiệp với nghề móc len",
    slug: "khoi-nghiep-nghe-moc-len",
    excerpt: "Chia sẻ kinh nghiệm và những điều cần biết khi bắt đầu kinh doanh sản phẩm len.",
    content: `
      Biến đam mê thành thu nhập với nghề móc len:
      
      1. Chuẩn bị những gì để bắt đầu
      2. Xây dựng thương hiệu
      3. Định giá sản phẩm
      4. Kênh bán hàng phù hợp
      5. Phát triển bền vững
    `,
    image: "/blog/crochet-business.jpg",
    category: "Kinh doanh",
    date: "2024-03-01",
    author: "CrochetCorn"
  }
]; 