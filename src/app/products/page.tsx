import { products } from '@/data/products';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-pink-50 via-pink-100 to-white">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-48 top-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply opacity-50 animate-blob"></div>
          <div className="absolute left-48 bottom-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Bộ Sưu Tập <span className="text-pink-600">Handmade</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Khám phá những sản phẩm thủ công độc đáo, được tạo nên từ tình yêu và sự tỉ mỉ
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-6 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 transition-colors">
              Tất cả
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-pink-600 border-2 border-pink-600 hover:bg-pink-50 transition-colors">
              Hoa len
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-pink-600 border-2 border-pink-600 hover:bg-pink-50 transition-colors">
              Thú len
            </button>
            <button className="px-6 py-2 rounded-full bg-white text-pink-600 border-2 border-pink-600 hover:bg-pink-50 transition-colors">
              Phụ kiện
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Product Image */}
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
        </div>
      </section>

      {/* Follow Facebook Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Theo dõi chúng tôi trên Facebook
            </h2>
            <p className="text-gray-700 mb-8">
              Like Fanpage để cập nhật những sản phẩm mới nhất và nhận thông tin khuyến mãi hấp dẫn
            </p>
            <a 
              href="https://www.facebook.com/crochetcorn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors group"
            >
              <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Like Fanpage</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 