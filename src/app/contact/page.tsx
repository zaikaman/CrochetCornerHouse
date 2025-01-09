import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-pink-50 via-pink-100 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-48 top-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply opacity-50 animate-blob"></div>
          <div className="absolute left-48 bottom-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Liên Hệ <span className="text-pink-600">Với Chúng Tôi</span>
            </h1>
            <p className="text-lg text-gray-700">
              Chúng tôi luôn sẵn sàng lắng nghe và phục vụ bạn
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Facebook Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
                Facebook Page Chính Thức
              </h2>

              <div className="text-center mb-8">
                <a 
                  href="https://www.facebook.com/crochetcorn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  @crochetcorn
                </a>
              </div>

              <div className="space-y-6 text-gray-700">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">Tại sao nên liên hệ qua Facebook?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Phản hồi nhanh chóng trong vòng 24h</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Xem trực tiếp hình ảnh và video sản phẩm mới nhất</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Tư vấn chi tiết về sản phẩm và đặt hàng dễ dàng</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Cập nhật thông tin về khuyến mãi và sản phẩm mới</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-pink-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">Thời Gian Hoạt Động</h3>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Thứ 2 - Thứ 6:</span> 9:00 - 21:00
                    </p>
                    <p>
                      <span className="font-medium">Thứ 7 & Chủ nhật:</span> 9:00 - 18:00
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      * Tin nhắn ngoài giờ sẽ được phản hồi vào ngày làm việc tiếp theo
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="font-semibold text-lg mb-3">Quy Trình Đặt Hàng</h3>
                  <ol className="space-y-3 list-decimal list-inside">
                    <li>Nhắn tin cho chúng tôi qua Facebook Messenger</li>
                    <li>Cung cấp thông tin về sản phẩm bạn quan tâm</li>
                    <li>Nhận tư vấn và báo giá chi tiết</li>
                    <li>Xác nhận đơn hàng và phương thức thanh toán</li>
                    <li>Nhận thông tin về thời gian giao hàng</li>
                  </ol>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a 
                  href="https://www.facebook.com/crochetcorn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Liên Hệ Ngay Qua Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 