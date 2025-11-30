'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FiClock, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3
    }
  },
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
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
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
    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    variants={item}
    whileHover={{ y: -5 }}
  >
    <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
      <Image 
        src={blog.image} 
        alt={blog.title} 
        fill 
        className="object-cover"
      />
      <span className="absolute top-4 right-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium px-3 py-1 rounded-full">
        {blog.category}
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{blog.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{blog.description}</p>
      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        <span>{blog.date}</span>
        <span className="mx-2">•</span>
        <div className="flex items-center text-blue-600 dark:text-blue-400">
          <FiClock className="mr-1" />
          {blog.readTime}
        </div>
      </div>
      <Link 
        href={`/blog/${blog.id}`} 
        className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
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
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Filter posts by selected category
  const filteredPosts = selectedCategory === 'Semua' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  // Update current page if it's no longer valid after filtering
  if (currentPage > totalPages && totalPages > 0) {
    setCurrentPage(totalPages);
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-800 dark:to-indigo-900 text-white">
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
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Search Bar */}
      <section className="py-16 bg-white dark:bg-gray-800">
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
                className="w-full px-6 py-4 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4"
            variants={container}
            initial="show"
            animate="show"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1); // Reset to first page when changing category
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="show"
            animate="show"
          >
            {currentPosts.length > 0 ? (
              currentPosts.map((post) => (
                <BlogCard key={post.id} blog={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">Tidak ada artikel dalam kategori ini.</p>
              </div>
            )}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div 
              className="flex items-center justify-center gap-2 mt-12 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <button 
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`flex items-center px-4 py-2 rounded-lg border ${
                  currentPage === 1 
                    ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600' 
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                <FiChevronLeft className="mr-1" /> Sebelumnya
              </button>
              
              {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                // Show first, last, and current page with neighbors
                let pageNum;
                if (currentPage <= 2) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 1) {
                  pageNum = totalPages - 2 + i;
                } else {
                  pageNum = currentPage - 1 + i;
                }
                
                if (pageNum > totalPages) return null;
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    className={`px-4 py-2 rounded-lg ${
                      currentPage === pageNum 
                        ? 'bg-blue-600 text-white dark:bg-blue-700' 
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              {totalPages > 3 && currentPage < totalPages - 1 && (
                <span className="px-2 text-gray-500">...</span>
              )}
              
              {totalPages > 3 && currentPage < totalPages - 1 && (
                <button
                  onClick={() => paginate(totalPages)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === totalPages 
                      ? 'bg-blue-600 text-white dark:bg-blue-700' 
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {totalPages}
                </button>
              )}
              
              <button 
                onClick={nextPage}
                disabled={currentPage === totalPages || totalPages === 0}
                className={`flex items-center px-4 py-2 rounded-lg border ${
                  currentPage === totalPages || totalPages === 0
                    ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600' 
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                Berikutnya <FiChevronRight className="ml-1" />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-800 dark:to-indigo-900 text-white">
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