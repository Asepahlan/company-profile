'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiAward, 
  FiBarChart2, 
  FiCheck, 
  FiCheckCircle, 
  FiDollarSign, 
  FiEdit,
  FiGlobe, 
  FiLayers, 
  FiMail, 
  FiPieChart, 
  FiSearch, 
  FiShare2, 
  FiShoppingCart, 
  FiSmartphone, 
  FiTarget, 
  FiTrendingUp, 
  FiUsers, 
  FiZap,
  FiArrowRight,
  FiMonitor,
  FiImage,
  FiFilter,
  FiClock
} from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5 
    } 
  },
};

// Reusable Components
const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-16">
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
    <motion.p 
      className="text-lg text-gray-600 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {subtitle}
    </motion.p>
  </div>
);

const FeatureCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <motion.div 
    className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 h-full flex flex-col"
    variants={item}
    whileHover={{ y: -5 }}
  >
    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mt-2 flex-grow">{description}</p>
  </motion.div>
);

const ProcessStep = ({ step, index }: { step: any; index: number }) => (
  <motion.div 
    className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-transparent last:pb-0"
    variants={item}
  >
    <div className="absolute w-6 h-6 bg-blue-600 rounded-full -left-3 top-0 flex items-center justify-center">
      <span className="text-white font-bold text-sm">{index + 1}</span>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
    <p className="text-gray-600">{step.description}</p>
  </motion.div>
);

const PortfolioCard = ({ project }: { project: any }) => (
  <motion.div 
    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    variants={item}
    whileHover={{ y: -5 }}
  >
    <div className="relative h-48 bg-gray-200">
      <Image 
        src={project.image} 
        alt={project.title} 
        fill 
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <Link 
        href={`/portofolio/${project.id}`} 
        className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800"
      >
        Lihat Detail <FiArrowRight className="ml-1" />
      </Link>
    </div>
  </motion.div>
);

// Data Layanan Digital Marketing
const services = [
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Strategi dan manajemen media sosial untuk meningkatkan engagement dan brand awareness.',
    icon: <FiShare2 className="text-blue-600 text-2xl" />,
  },
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    description: 'Optimasi website untuk peringkat lebih tinggi di hasil pencarian Google.',
    icon: <FiSearch className="text-blue-600 text-2xl" />,
  },
  {
    id: 'sem',
    title: 'SEM / Google Ads',
    description: 'Kampanye iklan berbayar yang terukur dan efektif untuk hasil instan.',
    icon: <FiDollarSign className="text-blue-600 text-2xl" />,
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    description: 'Konten berkualitas tinggi untuk menarik dan mempertahankan pelanggan.',
    icon: <FiEdit className="text-blue-600 text-2xl" />,
  },
  {
    id: 'branding',
    title: 'Branding & Creative Strategy',
    description: 'Pengembangan identitas merek yang kuat dan konsisten di semua platform.',
    icon: <FiAward className="text-blue-600 text-2xl" />,
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing Automation',
    description: 'Strategi email otomatis untuk mempertahankan dan mengkonversi pelanggan.',
    icon: <FiMail className="text-blue-600 text-2xl" />,
  },
];

// Data Keunggulan
const features = [
  {
    title: 'Strategi Berbasis Data',
    description: 'Setiap keputusan didasarkan pada analisis data dan metrik yang akurat.',
    icon: <FiBarChart2 className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Targeting Iklan yang Tepat',
    description: 'Mencapai audiens yang paling relevan dengan strategi targeting yang canggih.',
    icon: <FiTarget className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Optimasi Konten Berkualitas',
    description: 'Konten yang menarik dan dioptimalkan untuk konversi maksimal.',
    icon: <FiEdit className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Laporan Performa Lengkap',
    description: 'Transparansi penuh dengan laporan kinerja yang mudah dipahami.',
    icon: <FiPieChart className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Tim Ahli & Berpengalaman',
    description: 'Dikelola oleh profesional dengan pengalaman di berbagai industri.',
    icon: <FiUsers className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Hasil yang Terukur',
    description: 'Fokus pada ROI dan metrik kinerja kunci untuk pertumbuhan bisnis.',
    icon: <FiTrendingUp className="text-blue-600 text-3xl" />,
  },
];

// Data Teknologi
const techStack = [
  { name: 'Google Analytics', icon: <FiBarChart2 className="text-blue-600 text-3xl" /> },
  { name: 'Meta Ads Manager', icon: <FiShare2 className="text-blue-600 text-3xl" /> },
  { name: 'Google Ads', icon: <FiDollarSign className="text-blue-600 text-3xl" /> },
  { name: 'Ahrefs / SEMrush', icon: <FiSearch className="text-blue-600 text-3xl" /> },
  { name: 'Mailchimp', icon: <FiMail className="text-blue-600 text-3xl" /> },
  { name: 'Figma', icon: <FiImage className="text-blue-600 text-3xl" /> },
];

// Data Proses Pemasaran
const processSteps = [
  {
    title: 'Analisis Bisnis & Riset Pasar',
    description: 'Memahami bisnis Anda dan menganalisis pasar serta pesaing.',
  },
  {
    title: 'Perencanaan Strategi Marketing',
    description: 'Menyusun strategi pemasaran digital yang sesuai dengan tujuan bisnis.',
  },
  {
    title: 'Pembuatan Konten',
    description: 'Mengembangkan konten berkualitas untuk berbagai platform digital.',
  },
  {
    title: 'Eksekusi Kampanye',
    description: 'Meluncurkan dan mengelola kampanye pemasaran digital.',
  },
  {
    title: 'Monitoring & Optimasi',
    description: 'Memantau kinerja dan melakukan optimasi berkelanjutan.',
  },
  {
    title: 'Laporan & Evaluasi',
    description: 'Menyajikan laporan kinerja dan rekomendasi pengembangan.',
  },
  {
    title: 'Scaling & Remarketing',
    description: 'Meningkatkan skala kampanye dan menjangkau kembali pengunjung.',
  },
];

// Data Portfolio
const portfolioItems = [
  {
    id: 1,
    title: 'Social Media Campaign Fashion Brand',
    description: 'Meningkatkan engagement sebesar 200% untuk brand fashion lokal.',
    image: '/images/portfolio/social-media-fashion.jpg',
  },
  {
    id: 2,
    title: 'Website SEO Optimization',
    description: 'Meningkatkan traffic organik sebesar 150% dalam 3 bulan.',
    image: '/images/portfolio/seo-optimization.jpg',
  },
  {
    id: 3,
    title: 'Google Ads Conversion Boost',
    description: 'Menurunkan biaya per konversi sebesar 40% dengan strategi yang tepat.',
    image: '/images/portfolio/google-ads.jpg',
  },
];

// Data Paket Harga
const pricingPlans = [
  {
    name: 'Basic Marketing Package',
    price: 'Rp 15.000.000',
    description: 'Cocok untuk bisnis kecil yang ingin memulai pemasaran digital',
    features: [
      'Strategi Media Sosial Dasar',
      'Optimasi SEO Dasar',
      '1 Platform Iklan',
      '2 Konten/minggu',
      'Laporan Bulanan',
      'Dukungan Email',
    ],
    popular: false,
  },
  {
    name: 'Growth Marketing Package',
    price: 'Rp 35.000.000',
    description: 'Solusi lengkap untuk pertumbuhan bisnis menengah',
    features: [
      'Strategi Digital Marketing Lengkap',
      'SEO & SEM',
      'Hingga 3 Platform Iklan',
      '5 Konten/minggu',
      'Laporan Mingguan',
      'Dukungan Prioritas',
    ],
    popular: true,
  },
  {
    name: 'Premium Scaling Package',
    price: 'Custom',
    description: 'Solusi kustom untuk bisnis dengan kebutuhan khusus',
    features: [
      'Strategi Enterprise',
      'SEO, SEM, & Content Marketing',
      'Multi-Platform Campaigns',
      'Konten Tidak Terbatas',
      'Laporan Real-time',
      'Dedicated Account Manager',
    ],
    popular: false,
  },
];

export default function DigitalMarketingPage() {
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
              Layanan Digital Marketing Profesional
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Strategi pemasaran digital lengkap untuk meningkatkan visibilitas, traffic, dan penjualan bisnis Anda.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/kontak">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg">
                  Hubungi Kami
                </Button>
              </Link>
              <Link href="#layanan">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg text-lg">
                  Lihat Layanan
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Jenis Layanan Digital Marketing" 
            subtitle="Solusi lengkap untuk pertumbuhan bisnis digital Anda" 
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <FeatureCard 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Keunggulan Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Keunggulan Kami" 
            subtitle="Mengapa memilih layanan digital marketing kami?" 
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Teknologi Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Teknologi & Tools" 
            subtitle="Kami menggunakan alat terbaik di industri untuk hasil maksimal" 
          />
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center border border-gray-100"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proses Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Alur Kerja Kami" 
            subtitle="Langkah-langkah strategis untuk kesuksesan pemasaran digital Anda" 
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="space-y-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <ProcessStep key={index} step={step} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Portofolio Kami" 
            subtitle="Beberapa proyek digital marketing yang telah kami kerjakan" 
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {portfolioItems.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/portofolio">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg">
                Lihat Semua Portofolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Harga Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Paket Harga" 
            subtitle="Pilih paket yang sesuai dengan kebutuhan bisnis Anda" 
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
                  plan.popular ? 'border-blue-600 transform scale-105' : 'border-transparent'
                }`}
                variants={item}
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 font-medium">
                    Paling Populer
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-gray-600">/bulan</span>}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FiCheck className="text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/kontak" 
                    className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    Mulai Sekarang
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Siap Meningkatkan Bisnis Anda dengan Digital Marketing?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tim profesional kami siap membantu Anda mencapai target pemasaran dan mengoptimalkan ROI.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/kontak">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg">
                Hubungi Kami
              </Button>
            </Link>
            <Link href="/layanan">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg text-lg">
                Pelajari Layanan
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
