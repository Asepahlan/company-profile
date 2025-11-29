'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiAward, 
  FiClock, 
  FiCode, 
  FiCpu, 
  FiFeather, 
  FiGlobe, 
  FiLayers, 
  FiMonitor, 
  FiSearch, 
  FiServer, 
  FiSettings, 
  FiShield, 
  FiShoppingCart,
  FiSmartphone,
  FiUsers,
  FiTrendingUp,
  FiCheck,
  FiCheckCircle,
  FiArrowRight,
  FiDollarSign,
  FiTarget,
  FiHeadphones
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
  <div className="text-center mb-12">
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
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-gray-100"
    variants={item}
    whileHover={{ y: -5 }}
  >
    <div className="text-blue-600 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </motion.div>
);

const ProcessStep = ({ step, index }: { step: any; index: number }) => (
  <motion.div 
    className="relative pl-8 pb-8 border-l-2 border-blue-200 last:border-0 last:pb-0"
    variants={item}
  >
    <div className="absolute w-6 h-6 bg-blue-600 rounded-full -left-3 flex items-center justify-center">
      <span className="text-white font-semibold text-sm">{index + 1}</span>
    </div>
    <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
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

// Data Layanan Mobile Apps
const services = [
  {
    id: 'android',
    title: 'Aplikasi Android',
    description: 'Pengembangan aplikasi native Android dengan performa optimal dan UI/UX yang memukau.',
    icon: <FiSmartphone className="text-blue-600" />,
  },
  {
    id: 'ios',
    title: 'Aplikasi iOS',
    description: 'Aplikasi iOS yang elegan dengan performa tinggi dan desain yang mengikuti panduan Apple.',
    icon: <FiSmartphone className="text-blue-600" />,
  },
  {
    id: 'hybrid',
    title: 'Aplikasi Hybrid',
    description: 'Solusi hemat biaya dengan React Native/Flutter untuk kedua platform sekaligus.',
    icon: <FiCode className="text-blue-600" />,
  },
  {
    id: 'enterprise',
    title: 'Aplikasi Enterprise',
    description: 'Solusi mobile untuk kebutuhan bisnis korporat dengan keamanan tingkat tinggi.',
    icon: <FiServer className="text-blue-600" />,
  },
  {
    id: 'maintenance',
    title: 'App Maintenance',
    description: 'Layanan pemeliharaan dan update untuk aplikasi yang sudah berjalan.',
    icon: <FiSettings className="text-blue-600" />,
  },
  {
    id: 'uiux',
    title: 'UI/UX for Mobile',
    description: 'Desain antarmuka yang menarik dan pengalaman pengguna yang optimal.',
    icon: <FiFeather className="text-blue-600" />,
  },
];

// Data Keunggulan
const features = [
  {
    title: 'Performa Cepat dan Stabil',
    description: 'Aplikasi dioptimalkan untuk kecepatan dan stabilitas maksimal pada berbagai perangkat.',
    icon: <FiTrendingUp className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Keamanan Tingkat Tinggi',
    description: 'Proteksi data dan keamanan aplikasi menjadi prioritas utama kami.',
    icon: <FiShield className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Desain Modern & User Friendly',
    description: 'Antarmuka yang intuitif dan menarik untuk pengalaman pengguna terbaik.',
    icon: <FiMonitor className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Dukungan Penuh dan Maintenance',
    description: 'Tim support siap membantu kapan saja untuk memastikan aplikasi berjalan optimal.',
    icon: <FiHeadphones className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Skalabilitas Tinggi',
    description: 'Arsitektur yang dirancang untuk tumbuh seiring dengan perkembangan bisnis Anda.',
    icon: <FiTarget className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Integrasi API & Sistem Lain',
    description: 'Kemudahan integrasi dengan berbagai layanan dan sistem yang sudah ada.',
    icon: <FiLayers className="text-blue-600 text-3xl" />,
  },
];

// Data Teknologi
const techStack = [
  { name: 'React Native', icon: <FiCode className="text-blue-600 text-3xl" /> },
  { name: 'Flutter', icon: <FiCode className="text-blue-600 text-3xl" /> },
  { name: 'Kotlin', icon: <FiCode className="text-blue-600 text-3xl" /> },
  { name: 'Swift', icon: <FiCode className="text-blue-600 text-3xl" /> },
  { name: 'Firebase', icon: <FiServer className="text-blue-600 text-3xl" /> },
  { name: 'Node.js', icon: <FiCode className="text-blue-600 text-3xl" /> },
];

// Data Proses Pengembangan
const processSteps = [
  {
    title: 'Konsultasi & Analisa Kebutuhan',
    description: 'Diskusi mendalam untuk memahami kebutuhan dan tujuan aplikasi Anda.',
  },
  {
    title: 'Wireframe & UI/UX Design',
    description: 'Membuat rancangan antarmuka yang menarik dan mudah digunakan.',
  },
  {
    title: 'Development',
    description: 'Proses pengkodean dengan teknologi terbaru dan praktik terbaik.',
  },
  {
    title: 'Integrasi API',
    description: 'Menghubungkan aplikasi dengan layanan dan sistem yang diperlukan.',
  },
  {
    title: 'Testing',
    description: 'Pengujian menyeluruh untuk memastikan kualitas dan performa optimal.',
  },
  {
    title: 'Deployment',
    description: 'Peluncuran aplikasi ke App Store dan Google Play Store.',
  },
  {
    title: 'Maintenance & Support',
    description: 'Dukungan berkelanjutan dan pembaruan untuk aplikasi Anda.',
  },
];

// Data Portfolio
const portfolioItems = [
  {
    id: 1,
    title: 'Aplikasi E-Commerce',
    description: 'Aplikasi belanja online dengan fitur lengkap dan pembayaran terintegrasi.',
    image: '/images/portfolio/mobile-ecommerce.jpg',
  },
  {
    id: 2,
    title: 'Aplikasi Keuangan',
    description: 'Solusi mobile untuk manajemen keuangan pribadi dan bisnis.',
    image: '/images/portfolio/mobile-finance.jpg',
  },
  {
    id: 3,
    title: 'Aplikasi Kesehatan',
    description: 'Platform kesehatan digital dengan fitur konsultasi dokter online.',
    image: '/images/portfolio/mobile-health.jpg',
  },
];

// Data Paket Harga
const pricingPlans = [
  {
    name: 'Basic App',
    price: 'Rp 25.000.000',
    description: 'Cocok untuk MVP atau aplikasi sederhana',
    features: [
      'Hingga 5 Halaman/Fitur',
      'Desain Sederhana',
      'Integrasi Dasar',
      'Dukungan 1 Bulan',
      '1x Revisi Desain',
      'Panduan Penggunaan',
    ],
    popular: false,
  },
  {
    name: 'Business App',
    price: 'Rp 75.000.000',
    description: 'Solusi lengkap untuk bisnis menengah',
    features: [
      'Hingga 15 Halaman/Fitur',
      'Desain Kustom',
      'Integrasi API',
      'Dukungan 3 Bulan',
      '3x Revisi Desain',
      'Analytics & Laporan',
    ],
    popular: true,
  },
  {
    name: 'Enterprise App',
    price: 'Custom',
    description: 'Solusi kustom untuk kebutuhan kompleks',
    features: [
      'Fitur Tanpa Batas',
      'Desain Premium',
      'Integrasi Sistem',
      'Dukungan Prioritas',
      'Revisi Tidak Terbatas',
      'Tim Dedicated',
    ],
    popular: false,
  },
];

const MobileAppsPage = () => {
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
              Layanan Mobile Apps Profesional
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Solusi pengembangan aplikasi mobile modern, cepat, aman, dan scalable.
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
            title="Jenis Layanan Mobile Apps" 
            subtitle="Kami menawarkan berbagai layanan pengembangan aplikasi mobile yang dapat disesuaikan dengan kebutuhan bisnis Anda" 
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
            title="Keunggulan Utama" 
            subtitle="Mengapa memilih layanan pengembangan aplikasi mobile kami?" 
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
            title="Teknologi yang Kami Gunakan" 
            subtitle="Kami menggunakan teknologi terbaru dan terpercaya untuk membangun aplikasi mobile berkualitas tinggi" 
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
            title="Proses Pengembangan Aplikasi" 
            subtitle="Langkah-langkah yang kami lakukan untuk mewujudkan aplikasi mobile impian Anda" 
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
            subtitle="Beberapa proyek aplikasi mobile yang telah kami kerjakan" 
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
                key={plan.name}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 ${
                  plan.popular ? 'border-blue-600 transform scale-105' : 'border-transparent'
                }`}
                variants={item}
                whileHover={{ y: -5 }}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 font-medium">
                    Paling Populer
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.name !== 'Enterprise App' && <span className="text-gray-500">/proyek</span>}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FiCheckCircle className="text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontak">
                    <Button 
                      className={`w-full py-3 font-medium rounded-lg ${
                        plan.popular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      }`}
                    >
                      Pesan Sekarang
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 mb-4">Butuh solusi kustom untuk bisnis Anda?</p>
            <Link href="/kontak">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 font-medium">
                Konsultasi Gratis
              </Button>
            </Link>
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
            Siap Membangun Aplikasi Mobile Impian Anda?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Mulai proyek aplikasi mobile Anda hari ini dan dapatkan konsultasi gratis dari tim ahli kami.
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
            <Link href="#layanan">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg text-lg">
                Lihat Layanan
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppsPage;
