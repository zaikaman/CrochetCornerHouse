export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  details: {
    size: string;
    material: string;
    colors: string[];
    features: string[];
  };
  story: string;
  care: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Hoa len hồng',
    price: 30000,
    image: '/sanpham1.jpg',
    description: 'Bông hoa len hồng pastel đáng yêu, được đan tỉ mỉ từng mũi kim với chất liệu len mềm mại cao cấp. Kích thước nhỏ gọn phù hợp để trang trí hoặc làm quà tặng.',
    details: {
      size: '15cm x 10cm',
      material: 'Len nhập khẩu, bông gòn kháng khuẩn',
      colors: ['Hồng pastel', 'Trắng kem', 'Xám nhạt'],
      features: [
        'Đan thủ công 100%',
        'An toàn cho trẻ em',
        'Có thể giặt nhẹ nhàng',
        'Thích hợp làm quà tặng'
      ]
    },
    story: 'Bông hoa len hồng này được tạo ra với cảm hứng từ những buổi chiều ấm áp, nơi những sợi len được đan kết tỉ mỉ thành hình. Mỗi mũi kim là một câu chuyện về tình yêu và sự tận tâm, tạo nên một người bạn nhỏ đáng yêu sẽ mang lại niềm vui và những khoảnh khắc ấm áp cho người nhận.',
    care: 'Giặt tay nhẹ nhàng với nước lạnh, không vắt mạnh, phơi khô trong bóng râm.'
  },
  {
    id: 2,
    name: 'Thú len trắng',
    price: 30000,
    image: '/sanpham2.jpg',
    description: 'Chú cừu len trắng tinh khôi, được chế tác thủ công với những đường nét tỉ mỉ. Một món quà hoàn hảo cho những người yêu thích sự đơn giản và tinh tế.',
    details: {
      size: '18cm x 12cm',
      material: 'Len merino cao cấp, bông gòn kháng khuẩn',
      colors: ['Trắng tinh khôi', 'Kem nhạt', 'Xám bạc'],
      features: [
        'Len merino cao cấp',
        'Đan theo kỹ thuật Amigurumi',
        'Phù hợp làm quà tặng',
        'Độ bền cao'
      ]
    },
    story: 'Chú cừu trắng này được sinh ra từ ý tưởng về sự thuần khiết và đơn giản. Mỗi đường nét được chăm chút kỹ lưỡng, tạo nên một tác phẩm nghệ thuật nhỏ bé mang đến cảm giác bình yên và ấm áp.',
    care: 'Tránh tiếp xúc với nước trực tiếp, vệ sinh bằng khăn ẩm, bảo quản nơi khô ráo.'
  },
  {
    id: 3,
    name: 'Thú len heo',
    price: 30000,
    image: '/sanpham3.jpg',
    description: 'Chú heo len hồng nhỏ nhắn, xinh xắn với đôi má phúng phính đáng yêu. Được làm thủ công từ len organic, an toàn cho cả trẻ nhỏ.',
    details: {
      size: '12cm x 8cm',
      material: 'Len organic, bông gòn tự nhiên',
      colors: ['Hồng baby', 'Hồng đậm', 'Trắng sữa'],
      features: [
        'Len organic an toàn',
        'Thiết kế độc quyền',
        'Thích hợp làm quà tặng',
        'Dễ dàng vệ sinh'
      ]
    },
    story: 'Chú heo len này được tạo ra với mong muốn mang lại niềm vui và tiếng cười. Lấy cảm hứng từ những biểu cảm đáng yêu của loài heo, mỗi chi tiết nhỏ đều được chăm chút để tạo nên một người bạn nhỏ đáng yêu nhất.',
    care: 'Giặt nhẹ bằng tay với nước ấm, không sử dụng máy giặt, phơi khô tự nhiên.'
  }
]; 