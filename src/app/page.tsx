import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { products } from '@/data/products';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-br from-pink-50 via-pink-100 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply opacity-50 animate-blob"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute right-1/3 top-1/3 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex items-center justify-between h-full">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Kết nối sáng tạo,{' '}
                <span className="text-pink-600">dệt nên yêu thương</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Mỗi mũi kim là một câu chuyện, mỗi sản phẩm là một tác phẩm nghệ thuật.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="/products"
                  className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors font-medium flex items-center space-x-2"
                >
                  <span>Khám phá ngay</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="/products"
                  className="bg-white text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors font-medium border-2 border-pink-600"
                >
                  Xem bộ sưu tập
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex space-x-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-gray-900">100+</div>
                  <div className="text-sm text-gray-600">Sản phẩm handmade</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Khách hàng hài lòng</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600">Hỗ trợ khách hàng</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative w-1/2 h-full">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]">
                <div className="relative w-full h-full">
                  <Image
                    src="/sanpham1.jpg"
                    alt="Hero product"
                    fill
                    className="object-cover rounded-full shadow-2xl"
                  />
                  <div className="absolute -right-8 -bottom-8 w-48 h-48">
                    <Image
                      src="/sanpham2.jpg"
                      alt="Product 2"
                      fill
                      className="object-cover rounded-full shadow-xl"
                    />
                  </div>
                  <div className="absolute -left-12 -top-12 w-32 h-32">
                    <Image
                      src="/sanpham3.jpg"
                      alt="Product 3"
                      fill
                      className="object-cover rounded-full shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sản phẩm nổi bật</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Khám phá bộ sưu tập thú len handmade độc đáo và đáng yêu của chúng tôi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-float" style={{ animationDelay: `${product.id * 200}ms` }}>
                <div className="relative aspect-square overflow-hidden">
                  <Link
                    href={`/products/${product.id === 1 ? 'hoalenhong' : product.id === 2 ? 'thulentrang' : 'thulenheo'}`}
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
                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-pink-600 font-semibold mb-4">
                    {product.price.toLocaleString('vi-VN')}đ
                  </p>
                  <Link 
                    href={`/products/${product.id === 1 ? 'hoalenhong' : product.id === 2 ? 'thulentrang' : 'thulenheo'}`}
                    className="w-full bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-medium flex items-center justify-center space-x-2 group"
                  >
                    <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Xem chi tiết</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-float" style={{ animationDelay: '0ms' }}>
              <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full animate-pulse-ring bg-pink-600/30"></div>
                <svg className="w-8 h-8 text-white transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Handmade</h3>
              <p className="text-gray-700 text-center">Sản phẩm được làm thủ công tỉ mỉ với tình yêu và sự tận tâm</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-float" style={{ animationDelay: '200ms' }}>
              <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full animate-pulse-ring bg-pink-600/30"></div>
                <svg className="w-8 h-8 text-white transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Quà tặng độc đáo</h3>
              <p className="text-gray-700 text-center">Món quà ý nghĩa và độc đáo dành tặng người thân yêu</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden animate-float" style={{ animationDelay: '400ms' }}>
              <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="absolute inset-0 rounded-full animate-pulse-ring bg-pink-600/30"></div>
                <svg className="w-8 h-8 text-white transform group-hover:rotate-12 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Thiết kế dễ thương</h3>
              <p className="text-gray-700 text-center">Phong cách kawaii đáng yêu, mang lại niềm vui</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
