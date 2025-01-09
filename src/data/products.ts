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
  },
  {
    id: 4,
    name: 'Set móc len nhỏ',
    price: 70000,
    image: '/setnho.jpg',
    description: 'Set móc len nhỏ gồm 4 cuộn len LILIARGE, kèm theo đầy đủ phụ kiện: 2 móc khóa, 10 mắt thú, kim móc len, kim khâu, ghim đánh dấu và gòn bi. Bộ dụng cụ hoàn hảo để bắt đầu hành trình móc len của bạn.',
    details: {
      size: 'Set 4 cuộn len',
      material: 'Len LILIARGE cao cấp',
      colors: ['Vàng', 'Xanh dương', 'Trắng', 'Hồng'],
      features: [
        'Đầy đủ phụ kiện cơ bản',
        'Len mềm mại, dễ đan',
        'Phù hợp cho người mới bắt đầu',
        'Có hướng dẫn cơ bản',
        'Bao gồm: 4 cuộn len, 2 móc khóa, 10 mắt thú, kim móc len, kim khâu, ghim đánh dấu, gòn bi'
      ]
    },
    story: 'Set móc len nhỏ được thiết kế đặc biệt cho những người mới bắt đầu tìm hiểu về nghệ thuật móc len. Mỗi thành phần trong bộ sản phẩm đều được chọn lọc kỹ càng để đảm bảo trải nghiệm móc len đầu tiên của bạn thật tuyệt vời.',
    care: 'Bảo quản len ở nơi khô ráo, tránh ánh nắng trực tiếp. Giặt sản phẩm hoàn thiện bằng tay với nước lạnh.'
  },
  {
    id: 5,
    name: 'Set móc len lớn',
    price: 120000,
    image: '/setlon.jpg',
    description: 'Set móc len lớn gồm 8 cuộn len LILIARGE đa dạng màu sắc, đi kèm đầy đủ phụ kiện cao cấp: 5 móc khóa, 20 mắt thú, kim móc len, kim khâu, ghim đánh dấu và gòn bi. Bộ sản phẩm hoàn hảo cho những dự án móc len đa dạng.',
    details: {
      size: 'Set 8 cuộn len',
      material: 'Len LILIARGE cao cấp',
      colors: ['Vàng', 'Xanh dương', 'Trắng', 'Hồng', 'Xanh lá', 'Nâu', 'Xanh mint', 'Tím'],
      features: [
        'Bộ len đa dạng màu sắc',
        'Phụ kiện cao cấp đầy đủ',
        'Thích hợp cho nhiều dự án',
        'Chất lượng len cao cấp',
        'Bao gồm: 8 cuộn len, 5 móc khóa, 20 mắt thú, kim móc len, kim khâu, ghim đánh dấu, gòn bi'
      ]
    },
    story: 'Set móc len lớn là sự lựa chọn hoàn hảo cho những người yêu thích nghệ thuật móc len và muốn thử sức với nhiều dự án đa dạng. Với đầy đủ màu sắc và phụ kiện, bộ sản phẩm này sẽ giúp bạn thỏa sức sáng tạo và tạo nên những tác phẩm độc đáo.',
    care: 'Bảo quản len ở nơi khô ráo, tránh ánh nắng trực tiếp. Giặt sản phẩm hoàn thiện bằng tay với nước lạnh.'
  }
]; 