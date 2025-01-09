import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { blogPosts } from '@/data/blog-posts';

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <Layout>
      <div className="relative bg-gradient-to-b from-pink-50 via-white to-white">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Blog Crochet Corner
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Khám phá thế giới móc len qua những bài viết hữu ích và thú vị
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-pink-50 border border-gray-200 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.id === 1 ? 'huong-dan-moc-len-co-ban' : 
                         post.id === 2 ? 'mau-thu-len-de-thuong' :
                         post.id === 3 ? 'cach-chon-len-phu-hop' :
                         post.id === 4 ? 'bi-quyet-moc-len-deu-tay' :
                         post.id === 5 ? 'cach-moc-hoa-len-hong' :
                         post.id === 6 ? 'mau-moc-len-hot-trend' :
                         post.id === 7 ? 'cach-phoi-mau-len' :
                         post.id === 8 ? 'cach-bao-quan-san-pham-len' :
                         post.id === 9 ? 'moc-len-giam-stress' : 'khoi-nghiep-nghe-moc-len'}`}
                  className="group"
                >
                  <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    {/* Post Image */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>

                    {/* Post Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(post.date).toLocaleDateString('vi-VN', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
} 