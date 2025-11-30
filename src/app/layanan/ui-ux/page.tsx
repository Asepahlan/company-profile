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
  FiUsers,
  FiTrendingUp,
  FiCheck,
  FiCheckCircle,
  FiArrowRight,
  FiDollarSign,
  FiTarget,
  FiHeadphones,
  FiLayout,
  FiTablet,
  FiSmartphone,
  FiEye
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
      className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h2>
    <motion.p 
      className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
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
    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col"
    variants={item}
    whileHover={{ y: -5 }}
  >
    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">{description}</p>
  </motion.div>
);

const ProcessStep = ({ step, index }: { step: any; index: number }) => (
  <motion.div 
    className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-800 last:border-transparent last:pb-0"
    variants={item}
  >
    <div className="absolute w-6 h-6 bg-blue-600 dark:bg-blue-700 rounded-full -left-3 top-0 flex items-center justify-center">
      <span className="text-white font-bold text-sm">{index + 1}</span>
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
  </motion.div>
);

const PortfolioCard = ({ project }: { project: any }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    variants={item}
    whileHover={{ y: -5 }}
  >
    <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
      <Image 
        src={project.image} 
        alt={project.title} 
        fill 
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <Link 
        href={`/portofolio/${project.id}`} 
        className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
      >
        Lihat Detail <FiArrowRight className="ml-1" />
      </Link>
    </div>
  </motion.div>
);

// Data Layanan UI/UX
const services = [
  {
    id: 'research',
    title: 'UX Research & User Testing',
    description: 'Penelitian mendalam tentang kebutuhan pengguna untuk menciptakan solusi yang tepat sasaran.',
    icon: <FiSearch className="text-blue-600 text-2xl" />,
  },
  {
    id: 'wireframe',
    title: 'Wireframing & Information Architecture',
    description: 'Membuat kerangka dan struktur informasi yang logis dan mudah dinavigasi.',
    icon: <FiLayout className="text-blue-600 text-2xl" />,
  },
  {
    id: 'ui-design',
    title: 'High-Fidelity UI Design',
    description: 'Desain antarmuka yang indah dan konsisten dengan identitas merek Anda.',
    icon: <FiMonitor className="text-blue-600 text-2xl" />,
  },
  {
    id: 'prototype',
    title: 'Interactive Prototyping',
    description: 'Prototipe interaktif untuk menguji alur dan pengalaman pengguna sebelum pengembangan.',
    icon: <FiSmartphone className="text-blue-600 text-2xl" />,
  },
  {
    id: 'design-system',
    title: 'Design System Development',
    description: 'Membangun sistem desain yang konsisten untuk produk digital Anda.',
    icon: <FiLayers className="text-blue-600 text-2xl" />,
  },
  {
    id: 'testing',
    title: 'Usability Testing & Iteration',
    description: 'Pengujian dengan pengguna nyata untuk menyempurnakan pengalaman produk.',
    icon: <FiEye className="text-blue-600 text-2xl" />,
  },
];

// Data Keunggulan
const features = [
  {
    title: 'User-Centered Design',
    description: 'Setiap keputusan desain didasarkan pada kebutuhan dan perilaku pengguna sebenarnya.',
    icon: <FiUsers className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Menggunakan data dan metrik untuk menginformasikan setiap tahap proses desain.',
    icon: <FiTrendingUp className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Rapid Prototyping',
    description: 'Mengubah ide menjadi prototipe yang dapat diuji dengan cepat dan efisien.',
    icon: <FiTablet className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Consistency Across Platforms',
    description: 'Pengalaman yang mulus di seluruh perangkat dan platform yang berbeda.',
    icon: <FiLayers className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Accessibility-First Approach',
    description: 'Desain yang dapat diakses oleh semua pengguna, termasuk penyandang disabilitas.',
    icon: <FiCheckCircle className="text-blue-600 text-3xl" />,
  },
  {
    title: 'Scalable Component Library',
    description: 'Membangun sistem desain yang tumbuh seiring dengan produk Anda.',
    icon: <FiLayout className="text-blue-600 text-3xl" />,
  },
];

// Data Teknologi
const techStack = [
  { name: 'Figma', icon: <FiLayout className="text-blue-600 text-3xl" /> },
  { name: 'Adobe XD', icon: <FiMonitor className="text-blue-600 text-3xl" /> },
  { name: 'Miro', icon: <FiLayout className="text-blue-600 text-3xl" /> },
  { name: 'Zeplin', icon: <FiTablet className="text-blue-600 text-3xl" /> },
  { name: 'Framer', icon: <FiSmartphone className="text-blue-600 text-3xl" /> },
  { name: 'Hotjar', icon: <FiEye className="text-blue-600 text-3xl" /> },
];

// Data Proses Pengembangan
const processSteps = [
  {
    title: 'Empathize & Research',
    description: 'Memahami kebutuhan dan tantangan pengguna melalui penelitian mendalam.',
  },
  {
    title: 'Ideation & Wireframe',
    description: 'Membuat sketsa dan wireframe untuk memvisualisasikan solusi.',
  },
  {
    title: 'UI Design',
    description: 'Mengembangkan desain antarmuka yang menarik dan fungsional.',
  },
  {
    title: 'Prototype Interaction',
    description: 'Membuat prototipe interaktif untuk pengujian pengguna.',
  },
  {
    title: 'Usability Testing',
    description: 'Menguji desain dengan pengguna nyata dan mengumpulkan umpan balik.',
  },
  {
    title: 'Iteration & Refinement',
    description: 'Menyempurnakan desain berdasarkan hasil pengujian.',
  },
  {
    title: 'Developer Handoff',
    description: 'Menyiapkan aset dan dokumentasi untuk tim pengembang.',
  },
];

// Data Portfolio
const portfolioItems = [
  {
    id: 1,
    title: 'Mobile Banking UI Kit',
    description: 'Sistem desain lengkap untuk aplikasi perbankan mobile dengan fokus pada keamanan dan kemudahan penggunaan.',
    image: '/images/portfolio/mobile-banking.jpg',
  },
  {
    id: 2,
    title: 'E-Commerce Redesign',
    description: 'Redesain platform e-commerce dengan peningkatan konversi dan pengalaman pengguna yang lebih baik.',
    image: '/images/portfolio/ecommerce-redesign.jpg',
  },
  {
    id: 3,
    title: 'Dashboard & Admin UI',
    description: 'Antarmuka admin yang kuat dengan visualisasi data yang jelas dan mudah digunakan.',
    image: '/images/portfolio/admin-dashboard.jpg',
  },
];

// Data Paket Harga
const pricingPlans = [
  {
    name: 'Basic UI/UX Package',
    price: 'Rp 15.000.000',
    description: 'Cocok untuk proyek kecil atau startup',
    features: [
      '5 Halaman/Fitur',
      'Wireframing & UI Design',
      '1x Revisi Desain',
      'Prototipe Dasar',
      'Dukungan 1 Bulan',
      'Panduan Penggunaan',
    ],
    popular: false,
  },
  {
    name: 'Business UX Package',
    price: 'Rp 45.000.000',
    description: 'Solusi lengkap untuk bisnis menengah',
    features: [
      '15 Halaman/Fitur',
      'UX Research & Testing',
      '3x Revisi Desain',
      'Prototipe Interaktif',
      'Dukungan 3 Bulan',
      'Design System Dasar',
    ],
    popular: true,
  },
  {
    name: 'Premium Product Design',
    price: 'Custom',
    description: 'Solusi kustom untuk produk digital yang kompleks',
    features: [
      'Fitur Tanpa Batas',
      'UX Research Mendalam',
      'Revisi Tidak Terbatas',
      'Prototipe Lanjutan',
      'Dukungan Prioritas',
      'Design System Lengkap',
    ],
    popular: false,
  },
];

const UIXPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-900 dark:to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Layanan UI/UX Design Profesional
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Menciptakan desain yang elegan, intuitif, dan fokus pada pengalaman pengguna.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/kontak">
                <Button className="bg-white dark:bg-gray-800 text-blue-700 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
                  Hubungi Kami
                </Button>
              </Link>
              <Link href="#layanan">
                <Button variant="outline" className="border-blue-600 dark:border-white text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-white/10 font-medium py-3 px-8 rounded-lg text-lg transition-colors duration-200">
                  Lihat Layanan
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Layanan Section */}
      <section id="layanan" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Jenis Layanan UI/UX Design" 
            subtitle="Kami menawarkan layanan lengkap untuk menciptakan pengalaman pengguna yang luar biasa" 
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
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Keunggulan Kami" 
            subtitle="Mengapa memilih layanan UI/UX design kami?" 
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
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Teknologi Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Teknologi & Tools" 
            subtitle="Kami menggunakan alat terbaik di industri untuk menciptakan desain yang luar biasa" 
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
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center border border-gray-100 dark:border-gray-700"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Proses Section */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Proses Desain Kami" 
            subtitle="Langkah-langkah yang kami lakukan untuk menciptakan pengalaman pengguna yang luar biasa" 
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
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Portofolio Kami" 
            subtitle="Beberapa proyek UI/UX design yang telah kami kerjakan" 
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
              <Button className="bg-blue-600 dark:bg-blue-900 hover:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-lg">
                Lihat Semua Portofolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Harga Section */}
      <section className="py-20 bg-blue-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Paket Harga" 
            subtitle="Pilih paket yang sesuai dengan kebutuhan desain Anda" 
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
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border-2 ${
                  plan.popular ? 'border-blue-600 transform scale-105' : 'border-transparent'
                }`}
                variants={item}
                whileHover={{ y: -10 }}
              >
                {plan.popular && (
                  <div className="bg-blue-600 dark:bg-blue-900 text-white text-center py-2 font-medium">
                    Paling Populer
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-gray-500 dark:text-gray-400">/proyek</span>}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <FiCheck className="text-green-500 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/kontak" 
                    className={`block text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 dark:bg-blue-900 text-white hover:bg-blue-700 dark:hover:bg-blue-800' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
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
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-900 dark:to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Siap Memperkuat Desain Produk Anda?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tim UI/UX kami siap membantu menciptakan pengalaman pengguna yang luar biasa untuk produk digital Anda.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/kontak">
              <Button className="bg-white dark:bg-gray-800 text-blue-700 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-700 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-200">
                Hubungi Kami
              </Button>
            </Link>
            <Link href="/portofolio">
              <Button variant="outline" className="border-blue-600 dark:border-white text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-white/10 font-medium py-3 px-8 rounded-lg text-lg transition-colors duration-200">
                Lihat Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UIXPage;
