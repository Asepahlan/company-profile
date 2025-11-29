import { Button } from '@/components/ui/Button';

const blogPosts = [
  {
    title: 'Tren Teknologi 2024: AI dan Machine Learning',
    excerpt: 'Pelajari bagaimana AI dan Machine Learning mengubah landscape bisnis di tahun 2024.',
    category: 'Teknologi',
    date: '15 November 2024',
    readTime: '5 min read',
    image: '/images/blog-1.svg',
    link: '#',
  },
  {
    title: 'Tips Memilih Platform E-Commerce untuk Bisnis',
    excerpt: 'Panduan lengkap untuk memilih platform e-commerce yang tepat untuk kebutuhan bisnis Anda.',
    category: 'Business',
    date: '10 November 2024',
    readTime: '7 min read',
    image: '/images/blog-2.svg',
    link: '#',
  },
  {
    title: 'Keamanan Siber: Melindungi Data Pelanggan',
    excerpt: 'Langkah-langkah penting yang harus diambil untuk melindungi data pelanggan dari ancaman siber.',
    category: 'Security',
    date: '5 November 2024',
    readTime: '6 min read',
    image: '/images/blog-3.svg',
    link: '#',
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="section bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Blog & Insight
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dapatkan informasi terbaru tentang teknologi, tips bisnis, dan insight dari tim kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">{post.category}</span>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time>{post.date}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <a
                    href={post.link}
                    className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                  >
                    Baca Selengkapnya
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" size="lg">
              Lihat Semua Artikel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
