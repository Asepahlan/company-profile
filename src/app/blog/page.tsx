'use client';

import { motion } from 'framer-motion';
import { FiClock, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

// Reusable Components
const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
  </motion.div>
);

interface BlogCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
}

const BlogCard = ({ blog }: { blog: BlogCardProps }) => (
  <motion.div 
    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    variants={item}
    whileHover={{ y: -5 }}
  >
    <div className="relative h-48 bg-gray-200">
      <Image 
        src={blog.image} 
        alt={blog.title} 
        fill 
        className="object-cover"
      />
      <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
        {blog.category}
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
      <p className="text-gray-600 mb-4">{blog.description}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>{blog.date}</span>
        <span className="mx-2">•</span>
        <div className="flex items-center text-blue-600">
          <FiClock className="mr-1" />
          {blog.readTime}
        </div>
      </div>
      <Link 
        href={`/blog/${blog.id}`} 
        className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800"
      >
        Baca Selengkapnya
        <FiChevronRight className="ml-1" />
      </Link>
    </div>
  </motion.div>
);

// Blog Data
const blogPosts: BlogCardProps[] = [
  {
    id: 1,
    title: 'Panduan Membuat Website Profesional di 2025',
    category: 'Web Development',
    description: 'Tips lengkap untuk membangun website modern dan cepat dengan teknologi terbaru.',
    date: '5 Jan 2025',
    readTime: '6 menit baca',
    image: '/images/blog/web-dev-2025.jpg',
  },
  {
    id: 2,
    title: 'Tren UI/UX yang Wajib Diikuti Tahun 2025',
    category: 'UI/UX Design',
    description: 'Wawasan tentang desain modern, minimalis, dan responsif untuk pengalaman pengguna terbaik.',
    date: '10 Jan 2025',
    readTime: '4 menit baca',
    image: '/images/blog/ui-ux-trends-2025.jpg',
  },
  {
    id: 3,
    title: 'Cara Membuat Aplikasi Mobile Lebih Cepat & Stabil',
    category: 'Mobile Apps',
    description: 'Teknik dan tools terbaru untuk mengoptimalkan performa aplikasi Android dan iOS.',
    date: '8 Jan 2025',
    readTime: '7 menit baca',
    image: '/images/blog/mobile-optimization.jpg',
  },
  {
    id: 4,
    title: 'Strategi Digital Marketing untuk Bisnis Kecil',
    category: 'Digital Marketing',
    description: 'Langkah-langkah praktis meningkatkan penjualan online untuk bisnis kecil dan menengah.',
    date: '2 Jan 2025',
    readTime: '5 menit baca',
    image: '/images/blog/digital-marketing.jpg',
  },
  {
    id: 5,
    title: 'Teknologi Terbaru untuk Pengembangan Aplikasi Web',
    category: 'Web Development',
    description: 'Framework dan tools terbaru untuk pengembangan web yang lebih efisien dan powerful.',
    date: '28 Des 2024',
    readTime: '8 menit baca',
    image: '/images/blog/web-tech-2025.jpg',
  },
  {
    id: 6,
    title: 'Tips Meningkatkan Engagement di Media Sosial',
    category: 'Digital Marketing',
    description: 'Strategi jitu meningkatkan interaksi dan engagement di berbagai platform media sosial.',
    date: '25 Des 2024',
    readTime: '5 menit baca',
    image: '/images/blog/social-media-engagement.jpg',
  },
];

const categories = ['Semua', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing', 'Tips Bisnis'];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Artikel & Wawasan Terbaru
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Temukan berbagai artikel menarik seputar teknologi, bisnis digital, desain, dan pengembangan aplikasi.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-2xl mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Cari artikel…"
                className="w-full px-6 py-4 pr-12 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                variants={item}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {blogPosts.map((post) => (
              <BlogCard key={post.id} blog={post} />
            ))}
          </motion.div>

          {/* Pagination */}
          <motion.div 
            className="flex justify-center items-center mt-16 gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button className="flex items-center px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
              <FiChevronLeft className="mr-1" /> Sebelumnya
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium">1</button>
            <button className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">2</button>
            <button className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">3</button>
            <button className="flex items-center px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
              Berikutnya <FiChevronRight className="ml-1" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ingin Membaca Lebih Banyak Konten?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Kami terus memperbarui blog dengan artikel terbaru seputar teknologi dan bisnis digital.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/kontak">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg">
                  Hubungi Kami
                </Button>
              </Link>
              <Link href="/layanan">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg text-lg">
                  Lihat Layanan
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}