'use client';

import Link from 'next/link';
import { useState } from 'react';
import { products } from '@/data/products';
import Image from 'next/image';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const searchResults = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center md:space-x-12">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm8.486-.486a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-[var(--font-pacifico)] text-xl md:text-2xl text-pink-600 group-hover:text-pink-700 transition-colors leading-tight">
                  Crochet Corner
                </div>
                <div className="hidden md:block font-[var(--font-montserrat)] text-sm text-gray-700 tracking-wider uppercase">
                  House
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-pink-600">
                Trang chủ
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-pink-600 transition-colors">
                Sản phẩm
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 transition-colors">
                Về chúng tôi
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-pink-600 transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition-colors">
                Liên hệ
              </Link>
            </nav>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 md:space-x-6">
            {/* Search */}
            <div className="relative">
              <form onSubmit={handleSearch} className="relative">
                <input 
                  type="text" 
                  placeholder="Tìm kiếm..." 
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowResults(e.target.value.length > 0);
                  }}
                  onFocus={() => setShowResults(searchQuery.length > 0)}
                  className="bg-gray-100 rounded-full pl-3 pr-8 md:pl-4 md:pr-10 py-1.5 md:py-2 w-32 md:w-40 focus:outline-none focus:ring-2 focus:ring-pink-600 text-gray-700 placeholder-gray-500 text-sm"
                />
                <button 
                  type="submit"
                  className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-pink-600 transition-colors"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>

              {/* Search Results Dropdown */}
              {showResults && searchQuery && (
                <div className="absolute top-full right-0 mt-2 w-72 md:w-80 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  {searchResults.length > 0 ? (
                    <>
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.id === 1 ? 'hoalenhong' : product.id === 2 ? 'thulentrang' : 'thulenheo'}`}
                          className="flex items-center space-x-4 p-3 hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            setShowResults(false);
                            setSearchQuery('');
                          }}
                        >
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 truncate">{product.name}</h4>
                            <p className="text-sm text-gray-500 truncate">{product.description}</p>
                            <p className="text-sm font-medium text-pink-600">{product.price.toLocaleString('vi-VN')}đ</p>
                          </div>
                        </Link>
                      ))}
                    </>
                  ) : (
                    <div className="p-4 text-center text-gray-500">
                      Không tìm thấy sản phẩm nào
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Language Selector - Hidden on Mobile */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="w-6 h-4 relative">
                <div className="absolute inset-0 bg-red-600"></div>
                <div className="absolute inset-[30%] flex items-center justify-center">
                  <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700">VN</span>
            </div>

            {/* Facebook Link - Simplified on Mobile */}
            <a 
              href="https://www.facebook.com/profile.php?id=61571769269643&is_tour_completed" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-1 md:space-x-2 text-gray-700 hover:text-pink-600 transition-colors"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="hidden md:inline text-sm font-medium">Đặt hàng qua Facebook</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden p-1"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {showMobileMenu && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-pink-600 px-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Trang chủ
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-pink-600 px-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Sản phẩm
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-pink-600 px-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Về chúng tôi
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-pink-600 px-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-pink-600 px-2"
                onClick={() => setShowMobileMenu(false)}
              >
                Liên hệ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 