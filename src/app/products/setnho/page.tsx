import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import { products } from '@/data/products';

export default function SetNhoPage() {
  const product = products.find(p => p.id === 4)!;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 via-pink-100 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-pink-600 font-semibold mb-6">
                {product.price.toLocaleString('vi-VN')}đ
              </p>
              <p className="text-gray-700 mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Đặc điểm sản phẩm</h2>
                <ul className="space-y-3">
                  {product.details.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-pink-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Colors */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Màu sắc</h2>
                <div className="flex flex-wrap gap-2">
                  {product.details.colors.map((color, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white rounded-full shadow-md text-gray-700 text-sm"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="https://www.facebook.com/crochetcorn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-pink-600 text-white py-4 rounded-full hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2 font-medium"
              >
                <span>Đặt hàng qua Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Product Story */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Câu Chuyện Sản Phẩm</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.story}
              </p>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Thông Số</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <span className="font-medium">Kích thước:</span> {product.details.size}
                  </li>
                  <li>
                    <span className="font-medium">Chất liệu:</span> {product.details.material}
                  </li>
                </ul>
              </div>

              <div className="bg-pink-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hướng Dẫn Bảo Quản</h3>
                <p className="text-gray-700">
                  {product.care}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 