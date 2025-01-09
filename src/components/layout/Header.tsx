import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-12">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <svg 
                  className="w-6 h-6 text-white" 
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
                <div className="font-[var(--font-pacifico)] text-2xl text-pink-600 group-hover:text-pink-700 transition-colors leading-tight">
                  Crochet Corner
                </div>
                <div className="font-[var(--font-montserrat)] text-sm text-gray-700 tracking-wider uppercase">
                  House
                </div>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-pink-600">
                Trang chủ
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-pink-600">
                Sản phẩm
              </Link>
              <Link href="/blindbox" className="text-gray-700 hover:text-pink-600">
                Blind Box
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-pink-600">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600">
                Liên hệ
              </Link>
            </nav>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <input 
                type="text" 
                placeholder="Hirono" 
                className="bg-gray-100 rounded-full pl-4 pr-10 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-pink-600 text-gray-700 placeholder-gray-500"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-1">
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

            {/* Sign in / Register */}
            <div className="flex items-center space-x-1">
              <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Sign in / Register</span>
            </div>

            {/* Support */}
            <button className="text-gray-700 hover:text-pink-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>

            {/* Wishlist */}
            <button className="text-gray-700 hover:text-pink-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Cart */}
            <Link href="/cart" className="flex items-center space-x-1">
              <div className="relative">
                <svg className="w-6 h-6 text-gray-700 hover:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 