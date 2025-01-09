import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { products } from '@/data/products';

export default function Page() {
  const product = products.find(p => p.id === 6)!;

  return (
    <Layout>
      <div className="relative bg-gradient-to-b from-pink-50 via-white to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-64 -top-64 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
          <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute right-1/3 top-1/3 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 py-16 relative">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-pink-600">Trang chủ</Link>
              <span className="text-gray-400">/</span>
              <Link href="/products" className="text-gray-600 hover:text-pink-600">Sản phẩm</Link>
              <span className="text-gray-400">/</span>
              <span className="text-pink-600">{product.name}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="relative">
              <div className="sticky top-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-2xl font-semibold text-pink-600 mb-6">
                  {product.price.toLocaleString('vi-VN')}đ
                </p>
                <p className="text-gray-700 mb-8 text-lg">{product.description}</p>

                {/* Product Details */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Thông tin chi tiết</h2>
                  <div className="space-y-6">
                    <div>
                      <span className="font-medium text-gray-900">Kích thước:</span>
                      <span className="text-gray-700 ml-2">{product.details.size}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Chất liệu:</span>
                      <span className="text-gray-700 ml-2">{product.details.material}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Màu sắc:</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {product.details.colors.map((color, index) => (
                          <span 
                            key={index} 
                            className="px-4 py-2 bg-pink-50 rounded-full text-sm text-gray-700 hover:bg-pink-100 transition-colors duration-300"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Đặc điểm:</span>
                      <ul className="mt-3 space-y-3">
                        {product.details.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700 bg-pink-50/50 rounded-lg p-3 hover:bg-pink-50 transition-colors duration-300">
                            <svg className="w-5 h-5 text-pink-600 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Story */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Câu chuyện sản phẩm</h2>
                  <p className="text-gray-700 leading-relaxed">{product.story}</p>
                </div>

                {/* Care Instructions */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 mb-8">
                  <div className="flex items-center mb-4">
                    <svg className="w-6 h-6 text-pink-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h2 className="text-2xl font-semibold text-gray-900">Hướng dẫn bảo quản</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{product.care}</p>
                </div>

                {/* Order Button */}
                <a 
                  href="https://www.facebook.com/profile.php?id=61571769269643&is_tour_completed" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="w-full bg-pink-600 text-white py-4 rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl font-medium flex items-center justify-center space-x-3 group"
                >
                  <svg className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Đặt hàng qua Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 