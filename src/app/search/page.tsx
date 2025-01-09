import { products } from '@/data/products';
import Layout from '@/components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  searchParams?: {
    q?: string;
  };
};

export default function SearchPage({ searchParams = { q: '' } }: Props) {
  const query = searchParams.q?.toLowerCase() || '';
  
  const searchResults = products.filter(product => 
    product.name.toLowerCase().includes(query) || 
    product.description.toLowerCase().includes(query)
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 bg-gradient-to-br from-pink-50 via-pink-100 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-48 top-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply opacity-50 animate-blob"></div>
          <div className="absolute left-48 bottom-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kết Quả Tìm Kiếm: <span className="text-pink-600">&ldquo;{query}&rdquo;</span>
            </h1>
            <p className="text-lg text-gray-700">
              Tìm thấy {searchResults.length} sản phẩm
            </p>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchResults.map((product) => (
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
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Không tìm thấy sản phẩm</h2>
              <p className="text-gray-600 mb-8">Vui lòng thử lại với từ khóa khác</p>
              <Link 
                href="/products"
                className="inline-flex items-center justify-center space-x-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
              >
                <span>Xem tất cả sản phẩm</span>
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
} 