import Image from 'next/image';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { blogPosts } from '@/data/blog-posts';

export default function BlogPostPage() {
  const post = blogPosts[5]; // Bài viết thứ sáu
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <Layout>
      <div className="relative bg-gradient-to-b from-pink-50 via-white to-white">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Breadcrumb */}
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-sm">
                <Link href="/" className="text-gray-600 hover:text-pink-600">
                  Trang chủ
                </Link>
                <span className="text-gray-400">/</span>
                <Link href="/blog" className="text-gray-600 hover:text-pink-600">
                  Blog
                </Link>
                <span className="text-gray-400">/</span>
                <span className="text-pink-600">{post.title}</span>
              </div>
            </div>

            {/* Post Header */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="px-4 py-1.5 bg-pink-50 text-pink-600 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500">
                  {new Date(post.date).toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Featured Image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-12">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700">
                  {post.content}
                </div>
              </div>

              {/* Author */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.author}</div>
                    <div className="text-gray-500 text-sm">Tác giả</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Bài viết liên quan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id === 1 ? 'huong-dan-moc-len-co-ban' : 
                           relatedPost.id === 2 ? 'mau-thu-len-de-thuong' :
                           relatedPost.id === 3 ? 'cach-chon-len-phu-hop' :
                           relatedPost.id === 4 ? 'bi-quyet-moc-len-deu-tay' :
                           relatedPost.id === 5 ? 'cach-moc-hoa-len-hong' :
                           relatedPost.id === 6 ? 'mau-moc-len-hot-trend' :
                           relatedPost.id === 7 ? 'cach-phoi-mau-len' :
                           relatedPost.id === 8 ? 'cach-bao-quan-san-pham-len' :
                           relatedPost.id === 9 ? 'moc-len-giam-stress' : 'khoi-nghiep-nghe-moc-len'}`}
                    className="group"
                  >
                    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Post Image */}
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                        <Image
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      {/* Post Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm">
                            {relatedPost.category}
                          </span>
                          <span className="text-sm text-gray-500">
                            {new Date(relatedPost.date).toLocaleDateString('vi-VN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
} 