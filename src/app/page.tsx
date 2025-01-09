import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-white opacity-90"></div>
          <div className="absolute -right-48 top-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply opacity-50 animate-blob"></div>
          <div className="absolute left-48 bottom-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Chào mừng đến với
              <span className="text-pink-600"> CrochetCorn</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Nơi những sợi len được đan dệt thành tình yêu và niềm vui. Khám phá bộ sưu tập độc đáo của chúng tôi ngay hôm nay!
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              Khám phá ngay
            </Link>
          </div>
        </div>
      </section>

      {/* TikTok Video Section */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              CrochetCorn Trên Facebook
            </h2>
            <p className="text-lg text-gray-700">
              Theo dõi chúng tôi để xem những video thú vị về móc len
            </p>
          </div>
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative aspect-[9/16] w-full">
              <video
                className="w-full h-full object-cover pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
                disablePictureInPicture
                disableRemotePlayback
              >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sản Phẩm Nổi Bật
            </h2>
            <p className="text-lg text-gray-700">
              Khám phá những sản phẩm được yêu thích nhất của chúng tôi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Link
                    href={`/products/${product.id === 1 ? 'hoalenhong' : 
                           product.id === 2 ? 'thulentrang' : 
                           product.id === 3 ? 'thulenheo' :
                           product.id === 4 ? 'setlennho' : 'setlenlon'}`}
                    className="block relative w-full h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </Link>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-pink-600 font-semibold">
                      {product.price.toLocaleString('vi-VN')}đ
                    </span>
                    <Link
                      href={`/products/${product.id === 1 ? 'hoalenhong' : product.id === 2 ? 'thulentrang' : 'thulenheo'}`}
                      className="text-pink-600 hover:text-pink-700 font-medium flex items-center space-x-1 group"
                    >
                      <span>Chi tiết</span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center justify-center space-x-2 bg-white text-pink-600 px-8 py-3 rounded-full border-2 border-pink-600 hover:bg-pink-50 transition-colors"
            >
              <span>Xem tất cả sản phẩm</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn CrochetCorn?
            </h2>
            <p className="text-lg text-gray-700">
              Chúng tôi cam kết mang đến những sản phẩm chất lượng nhất
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Handmade with Love */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Thủ Công Với Tình Yêu
              </h3>
              <p className="text-gray-700">
                Mỗi sản phẩm được tạo ra đều chứa đựng tâm huyết và sự tỉ mỉ trong từng mũi móc.
              </p>
            </div>

            {/* Quality Materials */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Chất Liệu Cao Cấp
              </h3>
              <p className="text-gray-700">
                Sử dụng len và phụ kiện chất lượng cao, đảm bảo độ bền và tính thẩm mỹ cho sản phẩm.
              </p>
            </div>

            {/* Unique Designs */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Thiết Kế Độc Đáo
              </h3>
              <p className="text-gray-700">
                Mỗi sản phẩm là một tác phẩm nghệ thuật độc đáo, được thiết kế riêng biệt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="py-16 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Tham Gia Cộng Đồng CrochetCorn
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Kết nối với những người yêu thích móc len, chia sẻ niềm đam mê và học hỏi những điều mới mẻ
            </p>
            <a 
              href="https://www.facebook.com/crochetcorn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Tham gia ngay</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
