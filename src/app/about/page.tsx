import Layout from '@/components/layout/Layout';
import Image from 'next/image';

export default function AboutPage() {
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
              Câu Chuyện Về
              <span className="text-pink-600"> Những Mũi Len</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mỗi mũi len là một câu chuyện, mỗi sản phẩm là một tác phẩm nghệ thuật được dệt nên từ tình yêu và sự tận tâm.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-1.jpg"
                alt="Handmade crochet process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Khởi Nguồn Từ Niềm Đam Mê
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Crochet Corner House được sinh ra từ tình yêu với nghệ thuật móc len thủ công. Chúng tôi tin rằng mỗi mũi móc không chỉ đơn thuần là cách để tạo nên một sản phẩm, mà còn là cách để kể một câu chuyện, để gửi gắm tình cảm.
                </p>
                <p>
                  Từ những ngày đầu chỉ là một góc nhỏ với những cuộn len màu sắc, chúng tôi đã dần phát triển thành một không gian sáng tạo, nơi những ý tưởng được tự do bay bổng và hóa thành những sản phẩm độc đáo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Giá Trị Cốt Lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Handmade with Love */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                Thủ Công Với Tình Yêu
              </h3>
              <p className="text-gray-700 text-center">
                Mỗi sản phẩm được tạo ra đều chứa đựng tâm huyết và sự tỉ mỉ trong từng mũi móc.
              </p>
            </div>

            {/* Quality */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                Chất Lượng Hàng Đầu
              </h3>
              <p className="text-gray-700 text-center">
                Chúng tôi chỉ sử dụng những nguyên liệu tốt nhất để tạo nên những sản phẩm bền đẹp.
              </p>
            </div>

            {/* Creativity */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                Sáng Tạo Không Ngừng
              </h3>
              <p className="text-gray-700 text-center">
                Luôn tìm tòi và phát triển những ý tưởng mới để mang đến những sản phẩm độc đáo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Sứ Mệnh Của Chúng Tôi
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Chúng tôi không chỉ đơn thuần là một cửa hàng bán đồ len móc, mà còn là nơi lan tỏa niềm đam mê và tình yêu với nghệ thuật thủ công. Mỗi sản phẩm của chúng tôi đều mang trong mình một câu chuyện, một cảm xúc, và chúng tôi muốn chia sẻ những điều đó với bạn.
            </p>
            <div className="text-pink-600 font-medium">
              &ldquo;Dệt nên yêu thương, kết nối trái tim&rdquo;
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Hãy Cùng Chúng Tôi
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Mỗi sản phẩm từ Crochet Corner House không chỉ là một món đồ thủ công, mà còn là một phần của câu chuyện về tình yêu, sự sáng tạo và đam mê. Chúng tôi mời bạn trở thành một phần của câu chuyện này.
            </p>
            <a 
              href="https://www.facebook.com/crochetcorn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              <span>Theo dõi chúng tôi trên Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 