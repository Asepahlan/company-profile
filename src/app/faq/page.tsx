'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { FiChevronDown, FiChevronUp, FiMail, FiPhone } from 'react-icons/fi';

// Types
interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

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
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
  </motion.div>
);

// FAQ Item Component
const FAQItem = ({ faq, isOpen, onClick }: { faq: FAQItem; isOpen: boolean; onClick: () => void }) => (
  <motion.div 
    className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow"
    variants={item}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <button
      className={`w-full px-6 py-5 text-left flex justify-between items-center ${
        isOpen 
          ? 'bg-blue-50 dark:bg-blue-900/30' 
          : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
      } transition-colors duration-200`}
      onClick={onClick}
    >
      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
      {isOpen ? (
        <FiChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
      ) : (
        <FiChevronDown className="w-5 h-5 text-gray-400" />
      )}
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      className="overflow-hidden"
      transition={{ duration: 0.3 }}
    >
      <div className="px-6 pb-6 pt-2 text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800">
        {faq.answer}
      </div>
    </motion.div>
  </motion.div>
);

// FAQ Data
const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'Apa saja layanan yang tersedia di perusahaan Anda?',
    answer: 'Kami menyediakan berbagai layanan digital termasuk pengembangan website, aplikasi mobile, desain UI/UX, dan digital marketing. Setiap layanan dapat disesuaikan dengan kebutuhan spesifik bisnis Anda.',
    category: 'layanan'
  },
  {
    id: 2,
    question: 'Berapa biaya pembuatan website perusahaan?',
    answer: 'Harga bervariasi tergantung pada kompleksitas dan fitur yang dibutuhkan. Website AhlanDev sederhana dimulai dari Rp 10 juta, sementara website e-commerce atau sistem kustom bisa mencapai puluhan juta rupiah. Kami menyediakan penawaran harga yang kompetitif dan transparan.',
    category: 'pembayaran'
  },
  {
    id: 3,
    question: 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek?',
    answer: 'Waktu pengerjaan bervariasi tergantung pada kompleksitas proyek. Biasanya, website AhlanDev sederhana membutuhkan waktu 2-4 minggu, sementara proyek yang lebih kompleks seperti e-commerce atau aplikasi kustom bisa memakan waktu 2-6 bulan. Kami akan memberikan estimasi waktu yang lebih akurat setelah menganalisis kebutuhan proyek Anda.',
    category: 'proyek'
  },
  {
    id: 4,
    question: 'Apakah saya bisa meminta perubahan desain setelah proyek dimulai?',
    answer: 'Tentu saja! Kami memahami bahwa kebutuhan bisa berubah. Kami menyediakan beberapa putaran revisi selama fase desain. Setelah desain disetujui dan pengembangan dimulai, perubahan besar mungkin memerlukan biaya tambahan tergantung pada ruang lingkup perubahan tersebut.',
    category: 'proyek'
  },
  {
    id: 5,
    question: 'Teknologi apa yang digunakan untuk mengembangkan website?',
    answer: 'Kami menggunakan teknologi terbaru dan terpercaya seperti Next.js, React, TypeScript, dan Tailwind CSS untuk frontend. Untuk backend, kami menggunakan Node.js, Express, dan berbagai database seperti PostgreSQL atau MongoDB, disesuaikan dengan kebutuhan proyek.',
    category: 'teknologi'
  },
  {
    id: 6,
    question: 'Apakah website yang dibuat mobile-friendly?',
    answer: 'Ya, semua website yang kami kembangkan mengadopsi pendekatan mobile-first dan sepenuhnya responsif. Kami memastikan tampilan yang optimal di berbagai perangkat, mulai dari smartphone, tablet, hingga desktop.',
    category: 'teknologi'
  },
  {
    id: 7,
    question: 'Bagaimana dengan pemeliharaan setelah website diluncurkan?',
    answer: 'Kami menawarkan paket pemeliharaan bulanan yang mencakup pembaruan keamanan, pencadangan reguler, pemantauan, dan dukungan teknis. Anda juga dapat menghubungi tim dukungan kami kapan saja jika memerlukan bantuan.',
    category: 'layanan'
  },
  {
    id: 8,
    question: 'Apakah Anda menyediakan layanan hosting dan domain?',
    answer: 'Ya, kami menawarkan paket hosting yang dioptimalkan untuk performa dan keamanan. Kami juga dapat membantu Anda memilih dan mendaftarkan nama domain yang sesuai dengan merek Anda. Semua layanan hosting kami mencakup SSL gratis dan dukungan teknis 24/7.',
    category: 'layanan'
  },
  {
    id: 9,
    question: 'Bagaimana proses kerja sama dengan tim Anda?',
    answer: 'Proses kami dimulai dengan konsultasi untuk memahami kebutuhan Anda, diikuti dengan perencanaan, desain, pengembangan, pengujian, dan peluncuran. Kami menjaga komunikasi yang transparan di setiap tahap dan melibatkan Anda dalam proses pengambilan keputusan.',
    category: 'proyek'
  },
  {
    id: 10,
    question: 'Apakah Anda menawarkan jaminan untuk pekerjaan yang dilakukan?',
    answer: 'Ya, kami memberikan jaminan kualitas untuk semua pekerjaan kami. Jika ada bug atau masalah yang muncul setelah peluncuran yang disebabkan oleh kesalahan kami, kami akan memperbaikinya tanpa biaya tambahan. Detail jaminan akan dijelaskan dalam kontrak kerja sama.',
    category: 'layanan'
  },
  {
    id: 11,
    question: 'Bagaimana dengan keamanan website yang dibuat?',
    answer: 'Keamanan adalah prioritas utama kami. Kami menerapkan praktik keamanan terbaik seperti sanitasi input, proteksi terhadap SQL injection, XSS, CSRF, dan serangan umum lainnya. Semua website kami dilengkapi dengan SSL dan rekomendasi keamanan tambahan berdasarkan kebutuhan proyek.',
    category: 'teknologi'
  },
  {
    id: 12,
    question: 'Apakah saya bisa melihat perkembangan proyek selama pengerjaan?',
    answer: 'Tentu! Kami akan menyediakan akses ke lingkungan pengembangan/staging di mana Anda dapat melihat kemajuan proyek. Kami juga akan mengadakan pertemuan rutin untuk mendemonstrasikan fitur-fitur yang telah selesai dan meminta masukan Anda.',
    category: 'proyek'
  },
  {
    id: 13,
    question: 'Apakah Anda menyediakan layanan SEO untuk website?',
    answer: 'Ya, kami menawarkan layanan SEO on-page dasar sebagai bagian dari pengembangan website, termasuk optimasi kecepatan, struktur URL yang SEO-friendly, meta tag, dan markup schema. Kami juga menyediakan layanan SEO lengkap sebagai layanan tambahan.',
    category: 'layanan'
  },
  {
    id: 14,
    question: 'Bagaimana dengan pembaruan konten website?',
    answer: 'Kami akan melatih Anda atau tim Anda untuk mengelola konten menggunakan sistem manajemen konten (CMS) yang kami sediakan. Jika Anda lebih memilih, kami juga menawarkan layanan pemeliharaan konten bulanan dengan biaya tambahan.',
    category: 'layanan'
  },
  {
    id: 15,
    question: 'Apa saja metode pembayaran yang diterima?',
    answer: 'Kami menerima pembayaran melalui transfer bank, kartu kredit, atau dompet digital. Untuk proyek besar, kami biasanya menerapkan termin pembayaran yang dibagi menjadi beberapa tahap: 30% di awal, 40% setelah persetujuan desain, dan 30% saat proyek selesai.',
    category: 'pembayaran'
  }
];

// FAQ Categories
const categories = [
  { id: 'all', name: 'Semua Kategori' },
  { id: 'layanan', name: 'Layanan' },
  { id: 'pembayaran', name: 'Pembayaran' },
  { id: 'proyek', name: 'Proyek' },
  { id: 'teknologi', name: 'Teknologi' },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Temukan jawaban dari pertanyaan yang sering diajukan pelanggan kami.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                variants={item}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
          
          {/* FAQ List */}
          <motion.div 
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {filteredFaqs.map((faq) => (
              <FAQItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openFaq === faq.id}
                onClick={() => toggleFaq(faq.id)}
              />
            ))}
          </motion.div>
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
              Masih punya pertanyaan?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Tim dukungan kami siap membantu Anda 24/7
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/kontak">
                <Button className="bg-white dark:bg-gray-700 text-blue-700 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-600 font-semibold py-3 px-8 rounded-lg text-lg flex items-center">
                  <FiMail className="mr-2" /> Email Kami
                </Button>
              </Link>
              <a href="tel:+6281234567890">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg text-lg flex items-center">
                  <FiPhone className="mr-2" /> +62 812-3456-7890
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}