'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiArrowRight, 
  FiAward, 
  FiCheck, 
  FiCode, 
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
  FiClock,
  FiTrendingUp,
  FiCheckCircle
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
    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
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

const ProjectCard = ({ project }: { project: any }) => (
  <motion.div 
    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
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

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <motion.div 
    className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col"
    variants={item}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
        <Image 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          width={48} 
          height={48}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
      </div>
    </div>
    <p className="text-gray-600 italic flex-grow">"{testimonial.comment}"</p>
  </motion.div>
);

// Data Layanan Utama
const services = [
  {
    id: 'web-dev',
    title: 'Website Perusahaan',
    description: 'Website profesional untuk memperkenalkan bisnis Anda dengan desain modern dan responsif.',
    icon: <FiGlobe className="text-blue-600" />,
  },
  {
    id: 'ecommerce',
    title: 'Toko Online',
    description: 'Platform e-commerce lengkap dengan manajemen produk dan pembayaran online.',
    icon: <FiShoppingCart className="text-blue-600" />,
  },
  {
    id: 'landing-page',
    title: 'Landing Page',
    description: 'Halaman penjualan yang dirancang khusus untuk meningkatkan konversi penjualan produk/jasa Anda.',
    icon: <FiMonitor className="text-blue-600" />,
  },
  {
    id: 'cms',
    title: 'Sistem Manajemen Konten',
    description: 'Website dengan CMS yang mudah dikelola, memungkinkan Anda memperbarui konten dengan mudah.',
    icon: <FiLayers className="text-blue-600" />,
  },
  {
    id: 'web-app',
    title: 'Aplikasi Web Kustom',
    description: 'Aplikasi berbasis web yang dikembangkan khusus untuk kebutuhan bisnis unik Anda.',
    icon: <FiServer className="text-blue-600" />,
  },
  {
    id: 'seo',
    title: 'Optimasi SEO',
    description: 'Layanan optimasi mesin pencari untuk meningkatkan peringkat website Anda di Google.',
    icon: <FiSearch className="text-blue-600" />,
  },
];

// Data Keunggulan
const features = [
  {
    title: 'Desain Modern & Responsif',
    description: 'Website yang menakjubkan dengan tampilan yang sempurna di semua perangkat.',
    icon: <FiMonitor className="text-blue-600" />,
  },
  {
    title: 'Optimalisasi SEO',
    description: 'Dibangun dengan kode bersih dan struktur yang ramah mesin pencari.',
    icon: <FiSearch className="text-blue-600" />,
  },
  {
    title: 'Keamanan Terjamin',
    description: 'Proteksi keamanan tingkat tinggi untuk melindungi data dan pengguna Anda.',
    icon: <FiShield className="text-blue-600" />,
  },
  {
    title: 'Dukungan 24/7',
    description: 'Tim dukungan kami siap membantu Anda kapan saja dibutuhkan.',
    icon: <FiSettings className="text-blue-600" />,
  },
];

// Data Teknologi
const techStack = [
  { name: 'Next.js', icon: <FiCode className="text-blue-600" /> },
  { name: 'React', icon: <FiCode className="text-blue-600" /> },
  { name: 'TypeScript', icon: <FiCode className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <FiCode className="text-blue-600" /> },
  { name: 'Node.js', icon: <FiCode className="text-blue-600" /> },
  { name: 'MongoDB', icon: <FiServer className="text-blue-600" /> },
];

// Data Proses Pengembangan
const processSteps = [
  {
    title: 'Konsultasi & Analisis Kebutuhan',
    description: 'Kami mendengarkan kebutuhan Anda dan menganalisis solusi terbaik untuk bisnis Anda.',
  },
  {
    title: 'Perencanaan & Wireframing',
    description: 'Membuat struktur dan tata letak website yang sesuai dengan kebutuhan Anda.',
  },
  {
    title: 'Desain UI/UX',
    description: 'Mendesain antarmuka yang menarik dan mudah digunakan oleh pengguna.',
  },
  {
    title: 'Pengembangan',
    description: 'Mengembangkan website dengan teknologi terbaru dan kode berkualitas tinggi.',
  },
  {
    title: 'Pengujian & Revisi',
    description: 'Melakukan pengujian menyeluruh dan revisi sesuai masukan Anda.',
  },
  {
    title: 'Peluncuran & Pemeliharaan',
    description: 'Meluncurkan website dan memberikan dukungan berkelanjutan.',
  },
];

// Data Paket Harga
const pricingPlans = [
  {
    name: 'Basic',
    price: 'Rp 5.000.000',
    description: 'Cocok untuk usaha kecil',
    features: [
      'Halaman Utama',
      'Halaman Tentang',
      'Halaman Layanan',
      'Halaman Kontak',
      'Responsif Mobile',
      'Form Kontak',
    ],
    popular: false,
  },
  {
    name: 'Business',
    price: 'Rp 15.000.000',
    description: 'Cocok untuk bisnis menengah',
    features: [
      'Semua fitur Basic',
      'Hingga 10 Halaman',
      'Integrasi Media Sosial',
      'Blog System',
      'SEO Dasar',
      'Dukungan 3 Bulan',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Solusi kustom untuk kebutuhan khusus',
    features: [
      'Semua fitur Business',
      'Halaman Tanpa Batas',
      'Sistem Kustom',
      'Integrasi API',
      'SEO Lengkap',
      'Dukungan Prioritas',
    ],
    popular: false,
  },
];

// Data Portfolio
const portfolioItems = [
  {
    id: 1,
    title: 'Website Perusahaan Konstruksi',
    description: 'Website perusahaan konstruksi dengan portofolio proyek dan sistem permintaan penawaran.',
    image: '/images/projects/construction.jpg',
    tags: ['Web Development', 'UI/UX Design'],
  },
  {
    id: 2,
    title: 'Toko Online Fashion',
    description: 'Platform e-commerce untuk toko fashion dengan manajemen produk dan pembayaran online.',
    image: '/images/projects/fashion.jpg',
    tags: ['E-commerce', 'Web Development'],
  },
  {
    id: 3,
    title: 'Website Restoran',
    description: 'Website menu online dengan pemesanan meja dan pengiriman makanan.',
    image: '/images/projects/restaurant.jpg',
    tags: ['Web Development', 'UI/UX Design'],
  },
];

// Data Testimoni
const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    position: 'CEO PT Maju Jaya',
    comment: 'Website yang dibuat sangat profesional dan membantu meningkatkan kredibilitas perusahaan kami.',
    avatar: '/images/testimonials/1.jpg',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    position: 'Pemilik Butik Siti',
    comment: 'Toko online kami sekarang lebih mudah dikelola dan penjualan meningkat pesat berkat website baru ini.',
    avatar: '/images/testimonials/2.jpg',
  },
  {
    id: 3,
    name: 'Andi Wijaya',
    position: 'Manajer Marketing',
    comment: 'Tim pengembang sangat responsif dan profesional. Hasil kerja melebihi ekspektasi kami.',
    avatar: '/images/testimonials/3.jpg',
  },
];

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Layanan Web Development Profesional
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Bangun website impian Anda dengan teknologi terkini dan desain yang memukau untuk mengembangkan bisnis online Anda.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/kontak">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg flex items-center gap-2">
                  Mulai Sekarang <FiArrowRight />
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
            title="Layanan Web Development Kami" 
            subtitle="Kami menawarkan berbagai layanan web development yang dapat disesuaikan dengan kebutuhan bisnis Anda" 
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
            title="Mengapa Memilih Kami?" 
            subtitle="Kami memberikan solusi web development terbaik dengan kualitas dan pelayanan terpercaya" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiAward className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Berkualitas Tinggi</h3>
              <p className="text-gray-600">Website berkualitas premium dengan performa optimal</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiClock className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tepat Waktu</h3>
              <p className="text-gray-600">Proyek selesai sesuai jadwal yang disepakati</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiShield className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aman & Terpercaya</h3>
              <p className="text-gray-600">Keamanan data dan website Anda adalah prioritas kami</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiSettings className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Dukungan 24/7</h3>
              <p className="text-gray-600">Tim support kami siap membantu kapan saja</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teknologi Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Teknologi yang Kami Gunakan" 
            subtitle="Kami menggunakan teknologi terbaru dan terpercaya untuk membangun website berkualitas tinggi" 
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
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
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
            title="Proses Pengembangan Website" 
            subtitle="Kami mengikuti proses yang terstruktur untuk memastikan kualitas dan kepuasan pelanggan" 
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

      {/* Harga Section */}
      <section id="harga" className="py-20 bg-white">
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
                    {plan.name !== 'Enterprise' && <span className="text-gray-500">/proyek</span>}
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

      {/* Portfolio Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Portofolio Kami" 
            subtitle="Beberapa proyek terbaik yang telah kami kerjakan untuk klien-klien kami" 
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {portfolioItems.map((project) => (
              <ProjectCard key={project.id} project={project} />
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

      {/* Testimoni Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Apa Kata Klien Kami" 
            subtitle="Testimoni dari klien yang telah menggunakan layanan web development kami" 
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
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
            Siap Meningkatkan Bisnis Anda dengan Website Profesional?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Mulai proyek website Anda hari ini dan dapatkan konsultasi gratis dari tim ahli kami.
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
                Hubungi Kami Sekarang
              </Button>
            </Link>
            <Link href="#" className="flex items-center justify-center text-white hover:text-blue-200 font-medium">
              Lihat Portofolio <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;