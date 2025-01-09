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
      Móc len là một trong những kỹ năng thủ công truyền thống được yêu thích nhất, mang đến niềm vui và sự sáng tạo vô tận. Trong bài viết này, chúng ta sẽ cùng nhau khám phá thế giới móc len từ những bước đầu tiên:

      1. Các dụng cụ cần thiết để bắt đầu:
         - Kim móc len các size phổ biến (2mm - 6mm)
         - Len cotton, len acrylic phù hợp cho người mới
         - Kéo, kim khâu và thước đo
         - Ghim đánh dấu mũi móc
         - Sổ tay ghi chép

      2. Cách cầm móc len và len đúng cách:
         - Tư thế cầm kim móc chuẩn để tránh mỏi tay
         - Kỹ thuật điều khiển sợi len
         - Bí quyết giữ độ căng len đều
         - Những lỗi cần tránh khi mới bắt đầu

      3. Các mũi móc cơ bản và cách thực hiện:
         - Mũi xích - nền tảng của mọi mẫu móc
         - Mũi đơn (single crochet) và biến thể
         - Mũi đôi (double crochet) và kỹ thuật
         - Mũi nửa kép và mũi ba
         - Cách kết hợp các mũi cơ bản

      4. Hướng dẫn đọc pattern móc len:
         - Các ký hiệu pattern phổ biến
         - Cách đọc và làm theo sơ đồ móc
         - Tips ghi nhớ pattern dễ dàng
         - Thực hành với pattern đơn giản

      5. Những lỗi thường gặp và giải pháp:
         - Mũi móc không đều
         - Len bị xoắn và rối
         - Đếm mũi sai
         - Móc quá chặt hoặc quá lỏng
         
      6. Dự án đầu tiên cho người mới:
         - Khăn quàng cổ đơn giản
         - Túi mini xinh xắn
         - Móc len bookmark dễ thương
         
      Hãy nhớ rằng, mọi chuyên gia đều từng là người mới bắt đầu. Với sự kiên nhẫn và thực hành đều đặn, bạn sẽ sớm thành thạo nghệ thuật móc len thú vị này!
      
      Đừng quên theo dõi các bài viết tiếp theo của chúng mình để học thêm nhiều kỹ thuật móc len nâng cao nhé!
    `,
    image: "/blog/basic-crochet.jpg",
    category: "Hướng dẫn",
    date: "2024-01-15",
    author: "Crochet Corner"
  },
  {
    id: 2,
    title: "5 Mẫu thú len dễ thương cho người mới học",
    slug: "mau-thu-len-de-thuong",
    excerpt: "Tổng hợp những mẫu thú len đơn giản, dễ thực hiện nhưng vẫn cực kỳ đáng yêu cho người mới bắt đầu.",
    content: `
      Trong bài viết này, chúng mình sẽ hướng dẫn bạn cách móc 5 mẫu thú len dễ thương, phù hợp cho người mới bắt đầu:

      1. Thỏ mini đáng yêu:
         - Kích thước: 10cm x 8cm
         - Dụng cụ: Kim móc 2.5mm, len cotton mềm
         - Độ khó: ★★☆☆☆
         - Thời gian hoàn thành: 2-3 giờ
         - Đặc điểm: Tai dài đáng yêu, thân tròn xinh xắn
         
      2. Gấu con ngái ngủ:
         - Kích thước: 12cm x 10cm  
         - Dụng cụ: Kim móc 3mm, len acrylic mềm
         - Độ khó: ★★☆☆☆
         - Thời gian hoàn thành: 3-4 giờ
         - Đặc điểm: Tư thế nằm ngủ dễ thương, mắt híp

      3. Mèo mập đáng yêu:
         - Kích thước: 15cm x 12cm
         - Dụng cụ: Kim móc 3.5mm, len cotton
         - Độ khó: ★★★☆☆
         - Thời gian hoàn thành: 4-5 giờ
         - Đặc điểm: Thân tròn mập mạp, tai nhọn tinh nghịch

      4. Chim cánh cụt nhỏ:
         - Kích thước: 12cm x 8cm
         - Dụng cụ: Kim móc 3mm, len acrylic
         - Độ khó: ★★☆☆☆
         - Thời gian hoàn thành: 3-4 giờ
         - Đặc điểm: Cánh nhỏ xinh, bụng tròn vo

      5. Cún con dễ thương:
         - Kích thước: 13cm x 10cm
         - Dụng cụ: Kim móc 3mm, len cotton mềm
         - Độ khó: ★★★☆☆
         - Thời gian hoàn thành: 4-5 giờ
         - Đặc điểm: Tai cụp xuống, đuôi ngắn xinh

      Mỗi mẫu đều được thiết kế đơn giản, sử dụng các mũi móc cơ bản như:
      - Mũi xích
      - Mũi đơn
      - Mũi tăng giảm
      - Mũi magic ring

      Bài viết sẽ hướng dẫn chi tiết từng bước:
      1. Chuẩn bị dụng cụ và vật liệu
      2. Hướng dẫn móc từng phần của thú
      3. Cách lắp ráp các bộ phận
      4. Mẹo trang trí và hoàn thiện
      5. Lưu ý khi móc và tips hữu ích

      Hãy cùng bắt tay vào thực hiện những chú thú len đáng yêu này nhé!
    `,
    image: "/blog/cute-amigurumi.jpg", 
    category: "Mẫu móc len",
    date: "2024-01-20",
    author: "Crochet Corner"
  },
  {
    id: 3,
    title: "Cách chọn len phù hợp cho từng dự án",
    slug: "cach-chon-len-phu-hop",
    excerpt: "Hướng dẫn chi tiết cách chọn len phù hợp cho từng loại dự án móc len của bạn.",
    content: `
      Chọn đúng loại len sẽ quyết định 50% thành công của sản phẩm. Cùng tìm hiểu chi tiết về cách chọn len phù hợp nhé!

      1. Các loại len phổ biến trên thị trường:
         - Len cotton: Mềm mại, thấm hút tốt, phù hợp làm đồ trẻ em
         - Len acrylic: Bền, giá rẻ, đa dạng màu sắc
         - Len len: Ấm áp, đàn hồi tốt, thích hợp làm áo len
         - Len merino: Cao cấp, mềm mịn, không gây ngứa
         - Len bamboo: Thoáng mát, kháng khuẩn tự nhiên

      2. Đặc điểm và công dụng của từng loại len:
         - Len cotton:
           + Ưu điểm: Thân thiện với da, dễ giặt, bền màu
           + Nhược điểm: Dễ giãn, kém đàn hồi
           + Phù hợp: Đồ trẻ em, khăn, áo mùa hè

         - Len acrylic:
           + Ưu điểm: Giá thành rẻ, nhiều màu, dễ chăm sóc
           + Nhược điểm: Không thấm hút, dễ xù
           + Phù hợp: Thú len, phụ kiện trang trí

         - Len len:
           + Ưu điểm: Giữ ấm tốt, đàn hồi cao
           + Nhược điểm: Dễ xù, khó giặt
           + Phù hợp: Áo len, mũ, khăn mùa đông

      3. Cách chọn len theo dự án:
         - Cho trẻ em: Chọn len cotton, mềm mại và an toàn
         - Thú len: Len acrylic hoặc len cotton blend
         - Áo len: Len len hoặc len merino cho độ ấm cao
         - Phụ kiện: Có thể dùng đa dạng loại len tùy mục đích

      4. Những lưu ý khi mua len:
         - Kiểm tra độ đàn hồi và độ xù của len
         - Đọc kỹ thông tin về thành phần và cách giặt
         - Mua cùng lô để đảm bảo màu sắc đồng đều
         - Tính toán số lượng len cần thiết trước khi mua
         - Chọn len phù hợp với size kim móc

      5. Cách bảo quản len đúng cách:
         - Bảo quản nơi khô ráo, thoáng mát
         - Tránh ánh nắng trực tiếp
         - Giặt theo hướng dẫn trên nhãn mác
         - Không vắt len khi giặt
         - Phơi khô trong bóng râm
         - Bảo quản len trong hộp kín hoặc túi zip

      Hy vọng những thông tin trên giúp bạn chọn được loại len phù hợp nhất cho dự án của mình!
    `,
    image: "/blog/yarn-types.png",
    category: "Kiến thức",
    date: "2024-01-25",
    author: "Crochet Corner"
  },
  {
    id: 4,
    title: "Bí quyết móc len đều tay và đẹp",
    slug: "bi-quyet-moc-len-deu-tay",
    excerpt: "Những mẹo và kỹ thuật giúp bạn móc len đều tay hơn, tạo ra những sản phẩm chuyên nghiệp.",
    content: `
      Để móc len đều tay và đẹp, bạn cần chú ý những điểm sau:

      1. Giữ lực móc đều:
         - Tập trung vào cảm giác khi móc để duy trì lực đều
         - Không móc quá chặt hoặc quá lỏng
         - Thường xuyên kiểm tra độ chặt của mũi móc
         - Nghỉ ngơi khi cảm thấy mỏi tay để tránh lực không đều
         
      2. Cách đếm mũi móc chuẩn xác:
         - Sử dụng ghim đánh dấu để đánh dấu điểm bắt đầu
         - Đếm và ghi chép số mũi móc mỗi hàng
         - Kiểm tra số mũi sau mỗi hàng hoàn thành
         - Dùng bảng ghi chép để theo dõi tiến độ
         
      3. Kỹ thuật chuyển hàng không bị xoắn:
         - Chú ý cách cầm móc khi chuyển hàng
         - Đảm bảo mũi xích đầu hàng có độ cao phù hợp
         - Tránh xoay len khi chuyển hàng
         - Giữ len thẳng và không bị xoắn
         
      4. Cách xử lý các góc và cạnh:
         - Học cách tăng giảm mũi đúng kỹ thuật
         - Đảm bảo các góc vuông vắn và cân đối
         - Sử dụng đúng số mũi tăng/giảm theo mẫu
         - Chú ý độ căng của len ở các góc
         
      5. Mẹo làm đều mũi móc:
         - Sử dụng đèn đủ sáng khi móc
         - Chọn kim móc phù hợp với size len
         - Thực hành với các mẫu đơn giản trước
         - Móc chậm và cẩn thận trong giai đoạn đầu
         
      6. Những lưu ý quan trọng:
         - Chọn không gian thoải mái để móc len
         - Giữ tư thế ngồi đúng để tránh mỏi
         - Thường xuyên kiểm tra thành phẩm
         - Học hỏi từ những người có kinh nghiệm
         
      7. Cách khắc phục lỗi thường gặp:
         - Mũi móc không đều: kiểm tra lại lực móc
         - Len bị xoắn: điều chỉnh cách cầm len
         - Góc không đẹp: làm lại với sự tập trung cao
         - Số mũi không đúng: đếm kỹ và đánh dấu thường xuyên

      Với những kỹ thuật và mẹo vặt trên, bạn sẽ dần cải thiện được kỹ năng móc len của mình. Hãy kiên nhẫn và thực hành thường xuyên để đạt được kết quả tốt nhất!
    `,
    image: "/blog/crochet-tips.jpg",
    category: "Mẹo vặt", 
    date: "2024-01-30",
    author: "Crochet Corner"
  },
  {
    id: 5,
    title: "Cách móc hoa len hồng xinh xắn",
    slug: "cach-moc-hoa-len-hong",
    excerpt: "Hướng dẫn chi tiết cách móc hoa len hồng, từ cơ bản đến nâng cao.",
    content: `
      Hoa len hồng là một trong những mẫu móc được yêu thích nhất. Cùng học cách móc hoa len hồng xinh xắn qua các bước chi tiết sau:

      1. Chuẩn bị dụng cụ và len:
         - Kim móc len size 2.5mm - 3.5mm
         - Len cotton hoặc len acrylic màu hồng cho cánh hoa
         - Len màu xanh lá cho lá và thân
         - Len màu vàng cho nhụy hoa
         - Kéo, kim khâu và chỉ
         - Bông gòn để độn form hoa

      2. Các bước móc cánh hoa:
         - Bắt đầu với vòng tròn ma thuật 6 mũi
         - Tăng đều thành 12 mũi ở vòng 2
         - Vòng 3-4: Móc 2 mũi kép vào 1 mũi để tạo độ xòe
         - Vòng 5: Móc 1 mũi đơn, 1 mũi kép xen kẽ
         - Tạo viền cánh bằng mũi đơn
         - Làm 5-7 cánh tùy kích thước mong muốn

      3. Cách móc nhụy hoa:
         - Tạo vòng tròn ma thuật với len màu vàng
         - Móc 12 mũi đơn vào vòng
         - Tăng mũi thành 24 mũi ở vòng 2
         - Móc thẳng 3-4 vòng không tăng giảm
         - Giảm dần về 12 mũi ở vòng cuối
         - Nhồi bông trước khi đóng

      4. Kỹ thuật lắp ráp các phần:
         - Xếp các cánh hoa theo hình tròn
         - Khâu cố định từng cánh vào nhụy
         - Tạo và gắn lá trang trí
         - Móc dây cuốn thân bằng len xanh
         - Kiểm tra và chỉnh sửa form hoa

      5. Mẹo tạo form hoa đẹp:
         - Hơ nhẹ cánh hoa để tạo độ cong tự nhiên
         - Chỉnh form cánh bằng hồ dán len
         - Tạo độ xếp ly cho cánh hoa
         - Nhồi bông vừa phải để hoa có độ phồng
         - Tỉa và chỉnh sửa các sợi len thừa

      6. Hoàn thiện và trang trí:
         - Thêm lá phụ và nụ hoa nhỏ
         - Tạo gân lá bằng mũi đơn
         - Phun xịt cố định form nếu cần
         - Thêm ruy băng hoặc nơ trang trí
         - Kiểm tra tổng thể và điều chỉnh cuối cùng

      Với hướng dẫn chi tiết trên, bạn có thể tự tay móc những bông hoa len hồng xinh xắn. Hãy kiên nhẫn thực hiện từng bước và điều chỉnh cho phù hợp với ý thích của mình nhé!
    `,
    image: "/blog/rose-crochet.jpg",
    category: "Hướng dẫn",
    date: "2024-02-05",
    author: "Crochet Corner"
  },
  {
    id: 6,
    title: "10 Mẫu móc len hot trend 2024",
    slug: "mau-moc-len-hot-trend",
    excerpt: "Cập nhật những mẫu móc len đang được yêu thích nhất trong năm 2024.",
    content: `
      Cùng điểm qua những mẫu móc len đang làm mưa làm gió trong năm 2024:

      1. Thú len tí hon:
         - Các mẫu thú nhỏ xinh dưới 5cm đang rất được ưa chuộng
         - Phổ biến nhất là gấu, mèo, thỏ mini
         - Thích hợp làm móc khóa, charm điện thoại
         - Sử dụng len 4 ply và kim 2.0-2.5mm
         - Kỹ thuật amigurumi cơ bản

      2. Hoa len pastel:
         - Xu hướng màu pastel nhẹ nhàng, thanh lịch
         - Hoa hồng, cúc, tulip là những mẫu được yêu thích
         - Kết hợp 2-3 tông màu pastel trong một bông hoa
         - Ứng dụng làm phụ kiện thời trang, trang trí
         - Kỹ thuật móc hoa 3D độc đáo

      3. Móc len kết hợp macrame:
         - Phong cách boho đang lên ngôi
         - Túi xách, giỏ đan kết hợp hai kỹ thuật
         - Trang trí tường nghệ thuật độc đáo
         - Sử dụng len cotton và dây macrame
         - Học cách thắt nút macrame cơ bản

      4. Phụ kiện len vintage:
         - Khăn choàng vai kiểu retro
         - Mũ len phong cách những năm 60-70
         - Găng tay ren vintage
         - Túi xách họa tiết cổ điển
         - Kết hợp len màu trầm ấm

      5. Áo len oversize:
         - Áo cardigan dáng rộng
         - Áo len crop top trendy
         - Họa tiết color block
         - Kỹ thuật móc C2C đang hot
         - Phối layer thời trang

      6. Đồ gia dụng handmade:
         - Thảm len hình học
         - Vỏ gối trang trí
         - Giỏ đựng đồ đan móc
         - Tấm lót ly, khăn trải bàn
         - Xu hướng trang trí nội thất

      7. Phụ kiện len bền vững:
         - Túi đi chợ thân thiện môi trường
         - Khăn, mũ từ len tái chế
         - Đồ dùng zero waste
         - Sử dụng len organic
         - Hướng đến lifestyle xanh

      8. Đồ chơi giáo dục:
         - Bộ số, chữ cái móc len
         - Đồ chơi sensory cho trẻ
         - Thú bông giáo dục
         - An toàn cho trẻ nhỏ
         - Phát triển kỹ năng

      9. Trang sức len:
         - Vòng cổ len đan móc
         - Hoa tai bohemian
         - Vòng tay layer
         - Kết hợp với hạt gỗ, đá
         - Phụ kiện thời trang độc đáo

      10. Xu hướng móc len sáng tạo:
          - Kết hợp len với vải
          - Ứng dụng công nghệ in 3D
          - Họa tiết pixel art
          - Tái chế sáng tạo
          - Fusion style độc đáo

      Trên đây là những xu hướng móc len nổi bật trong năm 2024. Hãy thử sức với những mẫu này và tạo nên phong cách riêng của bạn nhé!
    `,
    image: "/blog/trending-crochet.jpg", 
    category: "Xu hướng",
    date: "2024-02-10",
    author: "Crochet Corner"
  },
  {
    id: 7,
    title: "Cách phối màu len trong móc len",
    slug: "cach-phoi-mau-len",
    excerpt: "Hướng dẫn cách phối màu len hài hòa để tạo ra những sản phẩm đẹp mắt.",
    content: `
      Phối màu len đúng cách sẽ tạo nên những sản phẩm độc đáo và ấn tượng. Hãy cùng tìm hiểu những kiến thức quan trọng về phối màu len:

      1. Nguyên tắc phối màu cơ bản:
         - Hiểu về vòng màu và các màu bổ trợ
         - Phối màu tương phản và đồng điệu
         - Tỷ lệ vàng trong phối màu
         - Cách chọn màu chủ đạo
         - Tạo điểm nhấn bằng màu sắc

      2. Các combo màu được ưa chuộng:
         - Gam pastel nhẹ nhàng
         - Màu trung tính sang trọng
         - Bộ ba màu cổ điển
         - Phối màu theo mùa
         - Xu hướng màu sắc 2024

      3. Cách chuyển màu len đẹp:
         - Kỹ thuật chuyển màu mượt mà
         - Xử lý đường nối màu
         - Gradient màu tự nhiên
         - Phân chia màu hợp lý
         - Tránh lỗi khi đổi màu

      4. Kỹ thuật móc len nhiều màu:
         - Tapestry crochet cơ bản
         - Fair Isle trong móc len
         - Mosaic crochet độc đáo
         - Intarsia cho họa tiết phức tạp
         - Xử lý chỉ thừa gọn gàng

      5. Những lưu ý khi phối màu:
         - Chọn len cùng chất liệu
         - Tính toán số lượng len cần dùng
         - Test màu trước khi bắt đầu
         - Chụp ảnh kiểm tra tổng thể
         - Lưu ý về độ bền màu

      Ngoài ra, bạn nên:
      - Tạo bảng màu riêng cho dự án
      - Tham khảo phản hồi từ cộng đồng
      - Lưu lại công thức phối màu đẹp
      - Thử nghiệm với mẫu nhỏ
      - Điều chỉnh theo ý thích cá nhân

      Hãy nhớ rằng, không có quy tắc cứng nhắc trong phối màu. Quan trọng nhất là tạo ra tác phẩm bạn yêu thích và tự tin với lựa chọn của mình!
    `,
    image: "/blog/color-combination.jpg",
    category: "Kiến thức",
    date: "2024-02-15",
    author: "Crochet Corner"
  },
  {
    id: 8,
    title: "Cách bảo quản sản phẩm len",
    slug: "cach-bao-quan-san-pham-len",
    excerpt: "Những mẹo hữu ích giúp bảo quản sản phẩm len bền đẹp theo thời gian.",
    content: `
      Để sản phẩm len luôn như mới và bền đẹp theo thời gian, bạn cần chú ý những điểm sau:

      1. Cách giặt sản phẩm len đúng cách:
         - Giặt bằng nước lạnh hoặc nước ấm (30-40 độ C)
         - Sử dụng xà phòng trung tính dành cho len
         - Không vò mạnh, chỉ nhẹ nhàng xoa bóp
         - Tránh ngâm len quá lâu trong nước
         - Không giặt máy với chế độ mạnh

      2. Phơi và sấy khô an toàn:
         - Không vắt hoặc xoắn len khi ướt
         - Dùng khăn sạch thấm bớt nước
         - Phơi ngang trên giá phơi hoặc mặt phẳng
         - Tránh ánh nắng trực tiếp
         - Không sử dụng máy sấy nóng

      3. Cách cất giữ sản phẩm len:
         - Gấp gọn gàng, không treo móc
         - Dùng túi vải cotton hoặc hộp có lỗ thông khí
         - Đặt nơi khô ráo, thoáng mát
         - Thêm túi chống ẩm nếu cần
         - Kiểm tra định kỳ tình trạng sản phẩm

      4. Xử lý khi len bị xù:
         - Sử dụng lược chải len chuyên dụng
         - Cắt tỉa nhẹ nhàng phần xơ thừa
         - Dùng máy cắt xù mini
         - Chải theo một chiều nhất định
         - Tránh chải quá mạnh làm hỏng sợi

      5. Phòng tránh mối mọt:
         - Sử dụng túi thơm tự nhiên (oải hương, quế)
         - Thường xuyên lấy ra phơi nắng nhẹ
         - Kiểm tra dấu hiệu mối mọt
         - Bảo quản cùng lá nguyệt quế hoặc cam thảo
         - Tránh để gần nơi ẩm thấp

      Lưu ý thêm:
      - Đọc kỹ nhãn hướng dẫn giặt ủi
      - Test xử lý trên một phần nhỏ trước
      - Không mix len với quần áo thường
      - Giặt riêng các màu khác nhau
      - Bảo quản xa tầm tay trẻ em và thú cưng

      Với những chú ý này, sản phẩm len của bạn sẽ luôn giữ được vẻ đẹp và độ bền theo thời gian!
    `,
    image: "/blog/yarn-care.jpg",
    category: "Mẹo vặt",
    date: "2024-02-20",
    author: "Crochet Corner"
  },
  {
    id: 9,
    title: "Móc len - Liệu pháp giảm stress",
    slug: "moc-len-giam-stress",
    excerpt: "Khám phá những lợi ích tuyệt vời của móc len đối với sức khỏe tinh thần.",
    content: `
      Móc len không chỉ là sở thích mà còn là liệu pháp tốt cho tinh thần. Hãy cùng tìm hiểu những lợi ích tuyệt vời mà hoạt động này mang lại:

      1. Tác động của móc len đến não bộ:
         - Kích thích sản sinh hormone hạnh phúc serotonin
         - Tăng cường khả năng tập trung và ghi nhớ
         - Phát triển kỹ năng vận động tinh
         - Giảm nguy cơ sa sút trí tuệ ở người cao tuổi
         - Cải thiện khả năng giải quyết vấn đề

      2. Cách móc len giúp thư giãn:
         - Tạo trạng thái thiền định thông qua động tác lặp lại
         - Giảm căng thẳng và lo âu
         - Hạ huyết áp và nhịp tim
         - Cải thiện chất lượng giấc ngủ
         - Tăng cảm giác bình yên và tĩnh tâm

      3. Xây dựng thói quen móc len:
         - Bắt đầu với những dự án đơn giản
         - Dành thời gian cố định mỗi ngày
         - Tạo không gian móc len thoải mái
         - Kết hợp với các hoạt động thư giãn khác
         - Đặt mục tiêu phù hợp với bản thân

      4. Tham gia cộng đồng móc len:
         - Tìm kiếm nhóm móc len địa phương
         - Tham gia các diễn đàn trực tuyến
         - Chia sẻ kinh nghiệm và học hỏi
         - Tổ chức gặp gỡ định kỳ
         - Cùng nhau làm các dự án từ thiện

      5. Chia sẻ niềm vui sáng tạo:
         - Tặng quà handmade cho người thân
         - Truyền cảm hứng cho người khác
         - Ghi lại hành trình phát triển
         - Tổ chức workshop hướng dẫn
         - Lan tỏa những giá trị tích cực

      Lời khuyên để tận dụng tối đa lợi ích:
      - Chọn len và dụng cụ phù hợp với bản thân
      - Không đặt áp lực về tốc độ và kết quả
      - Tập trung vào cảm xúc và trải nghiệm
      - Kết hợp với các bài tập thở và thiền
      - Chia sẻ cảm xúc với cộng đồng

      Hãy để móc len trở thành người bạn đồng hành, giúp bạn vượt qua những khoảng thời gian căng thẳng và tìm thấy niềm vui trong cuộc sống!
    `,
    image: "/blog/crochet-therapy.jpg",
    category: "Sức khỏe", 
    date: "2024-02-25",
    author: "Crochet Corner"
  },
  {
    id: 10,
    title: "Khởi nghiệp với nghề móc len",
    slug: "khoi-nghiep-nghe-moc-len",
    excerpt: "Chia sẻ kinh nghiệm và những điều cần biết khi bắt đầu kinh doanh sản phẩm len.",
    content: `
      Biến đam mê thành thu nhập với nghề móc len:

      1. Chuẩn bị những gì để bắt đầu:
         - Trang bị kiến thức và kỹ năng móc len cơ bản
         - Đầu tư dụng cụ và nguyên liệu chất lượng
         - Nghiên cứu thị trường và đối tượng khách hàng
         - Lập kế hoạch kinh doanh chi tiết
         - Chuẩn bị vốn ban đầu và quản lý tài chính

      2. Xây dựng thương hiệu:
         - Chọn tên và logo ấn tượng
         - Xác định giá trị cốt lõi và định vị thương hiệu
         - Tạo câu chuyện thương hiệu độc đáo
         - Thiết kế bao bì và nhận diện thương hiệu
         - Xây dựng hình ảnh chuyên nghiệp trên mạng xã hội

      3. Định giá sản phẩm:
         - Tính toán chi phí nguyên vật liệu
         - Định giá thời gian và công sức
         - Nghiên cứu giá thị trường
         - Xác định biên lợi nhuận hợp lý
         - Có chiến lược giá linh hoạt theo mùa và dịp

      4. Kênh bán hàng phù hợp:
         - Xây dựng website bán hàng chuyên nghiệp
         - Tận dụng các sàn thương mại điện tử
         - Mở gian hàng tại các hội chợ thủ công
         - Liên kết với các cửa hàng bán lẻ
         - Marketing trên mạng xã hội hiệu quả

      5. Phát triển bền vững:
         - Không ngừng học hỏi và nâng cao tay nghề
         - Đa dạng hóa sản phẩm theo xu hướng
         - Xây dựng cộng đồng khách hàng trung thành
         - Quản lý thời gian và nguồn lực hiệu quả
         - Tạo mối quan hệ với các đối tác trong ngành

      Lời khuyên cho người mới bắt đầu:
      - Bắt đầu từ quy mô nhỏ và phát triển dần
      - Tập trung vào chất lượng sản phẩm
      - Lắng nghe phản hồi từ khách hàng
      - Kiên nhẫn và kiên trì với mục tiêu
      - Cân bằng giữa đam mê và lợi nhuận

      Hãy nhớ rằng: Thành công trong kinh doanh đến từ sự kết hợp giữa kỹ năng, sáng tạo và chiến lược kinh doanh đúng đắn!
    `,
    image: "/blog/crochet-business.jpg",
    category: "Kinh doanh",
    date: "2024-03-01",
    author: "Crochet Corner"
  }
]; 