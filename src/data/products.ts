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
  },
  {
    id: 6,
    name: 'Hoa len mẫu 1',
    price: 60000,
    image: '/hoalenmau1.jpg',
    description: 'Bông hoa len được thiết kế độc đáo với màu sắc tươi sáng, thích hợp làm quà tặng hoặc trang trí không gian sống. Mỗi bông hoa được móc thủ công tỉ mỉ từng chi tiết.',
    details: {
      size: '20cm x 15cm',
      material: 'Len cao cấp, bông gòn kháng khuẩn',
      colors: ['Hồng', 'Trắng', 'Xanh lá'],
      features: [
        'Thiết kế độc đáo',
        'Móc thủ công 100%',
        'Màu sắc tươi sáng',
        'Bền đẹp theo thời gian'
      ]
    },
    story: 'Mỗi bông hoa len là một tác phẩm nghệ thuật độc đáo, được tạo nên từ sự tỉ mỉ và tình yêu với nghề móc len. Chúng tôi chọn lọc những sợi len chất lượng nhất và kết hợp với kỹ thuật móc len truyền thống để tạo nên những bông hoa độc đáo.',
    care: 'Tránh tiếp xúc với nước, lau nhẹ bằng khăn ẩm, bảo quản nơi khô ráo thoáng mát.'
  },
  {
    id: 7,
    name: 'Hoa len mẫu 2',
    price: 60000,
    image: '/hoalenmau2.jpg',
    description: 'Bông hoa len phong cách hiện đại với thiết kế tinh tế, là món quà ý nghĩa cho người thân yêu. Sản phẩm được chế tác thủ công từ len cao cấp.',
    details: {
      size: '18cm x 12cm',
      material: 'Len nhập khẩu, bông gòn kháng khuẩn',
      colors: ['Vàng', 'Xanh', 'Hồng'],
      features: [
        'Thiết kế hiện đại',
        'Chất liệu cao cấp',
        'Màu sắc đa dạng',
        'Phù hợp làm quà tặng'
      ]
    },
    story: 'Lấy cảm hứng từ vẻ đẹp của những bông hoa trong tự nhiên, chúng tôi tạo nên những bông hoa len với thiết kế độc đáo và màu sắc tươi sáng. Mỗi bông hoa đều được chăm chút tỉ mỉ để mang đến niềm vui cho người nhận.',
    care: 'Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp, làm sạch bằng chổi lông mềm.'
  },
  {
    id: 8,
    name: 'Set 12 con giáp',
    price: 70000,
    image: '/set12congiap.jpg',
    description: 'Bộ nguyên liệu đầy đủ để tự móc 12 con giáp đáng yêu. Set bao gồm len, kim móc, bông nhồi và hướng dẫn chi tiết để bạn có thể tự tay tạo nên những chú thú nhỏ xinh.',
    details: {
      size: 'Set nguyên liệu đầy đủ',
      material: 'Len cotton, bông nhồi, kim móc',
      colors: ['Đa màu sắc'],
      features: [
        'Đầy đủ nguyên liệu',
        'Hướng dẫn chi tiết',
        'Thích hợp cho người mới',
        'Tạo ra 12 con giáp'
      ]
    },
    story: 'Set nguyên liệu 12 con giáp được thiết kế đặc biệt cho những người yêu thích móc len và muốn tự tay tạo ra bộ sưu tập thú len độc đáo của riêng mình. Mỗi con vật được thiết kế với tính cách riêng biệt, mang đến niềm vui và sự sáng tạo trong quá trình móc len.',
    care: 'Bảo quản nguyên liệu nơi khô ráo, tránh ánh nắng trực tiếp và ẩm mốc.'
  },
  {
    id: 9,
    name: 'Thú bông tự chọn',
    price: 60000,
    image: '/thubongmau.jpg',
    description: 'Những chú thú bông đáng yêu được móc thủ công với nhiều mẫu để lựa chọn. Bạn có thể chọn mẫu thú và màu sắc theo ý thích.',
    details: {
      size: '15cm x 10cm',
      material: 'Len cotton, bông nhồi kháng khuẩn',
      colors: ['Tùy chọn theo mẫu'],
      features: [
        'Đa dạng mẫu mã',
        'Tùy chọn màu sắc',
        'An toàn cho trẻ em',
        'Thích hợp làm quà tặng'
      ]
    },
    story: 'Mỗi chú thú bông là một tác phẩm nghệ thuật độc đáo, được tạo ra với tình yêu và sự tỉ mỉ. Chúng tôi luôn cập nhật các mẫu mới để mang đến nhiều sự lựa chọn cho khách hàng.',
    care: 'Giặt tay nhẹ nhàng với nước lạnh, không vắt mạnh, phơi khô trong bóng râm.'
  },
  {
    id: 10,
    name: 'Tranh tự thêu',
    price: 120000,
    image: '/tranhtutheu.jpg',
    description: 'Bộ tranh tự thêu với thiết kế độc đáo, bao gồm đầy đủ nguyên liệu và hướng dẫn chi tiết. Thích hợp cho người mới bắt đầu học thêu.',
    details: {
      size: '30cm x 40cm',
      material: 'Vải canvas, chỉ thêu, kim thêu',
      colors: ['Đa dạng màu sắc'],
      features: [
        'Thiết kế độc đáo',
        'Hướng dẫn chi tiết',
        'Đầy đủ nguyên liệu',
        'Phù hợp người mới'
      ]
    },
    story: 'Bộ tranh tự thêu được thiết kế với mong muốn mang đến niềm vui và sự sáng tạo trong nghệ thuật thêu. Mỗi mũi thêu là một nét vẽ, và bức tranh hoàn thiện sẽ là một tác phẩm nghệ thuật độc đáo của riêng bạn.',
    care: 'Bảo quản nơi khô ráo, tránh ánh nắng trực tiếp, có thể đóng khung để trưng bày.'
  }
]; 