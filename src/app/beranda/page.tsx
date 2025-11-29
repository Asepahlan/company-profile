'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCode, FiLayers, FiMonitor, FiSmartphone } from 'react-icons/fi';

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

// Mock data
const services = [
  {
    icon: <FiCode className="w-8 h-8 text-blue-600" />,
    title: 'Web Development',
    description: 'Website responsif dan aplikasi web kustom untuk bisnis Anda dengan teknologi terbaru.',
    href: '/layanan/web-development'
  },
  {
    icon: <FiSmartphone className="w-8 h-8 text-blue-600" />,
    title: 'Mobile Apps',
    description: 'Aplikasi mobile native atau cross-platform untuk iOS dan Android.',
    href: '/layanan/mobile-apps'
  },
  {
    icon: <FiLayers className="w-8 h-8 text-blue-600" />,
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang indah dan pengalaman pengguna yang optimal.',
    href: '/layanan/ui-ux'
  },
  {
    icon: <FiMonitor className="w-8 h-8 text-blue-600" />,
    title: 'Digital Marketing',
    description: 'Strategi pemasaran digital untuk meningkatkan visibilitas online bisnis Anda.',
    href: '/layanan/digital-marketing'
  }
];

const features = [
  {
    title: 'Tim Berpengalaman',
    description: 'Dikelola oleh profesional dengan pengalaman lebih dari 5 tahun di industri.',
    icon: '👨‍💻'
  },
  {
    title: 'Harga Kompetitif',
    description: 'Solusi berkualitas dengan harga yang terjangkau untuk berbagai skala bisnis.',
    icon: '💰'
  },
  {
    title: 'Garansi Kepuasan',
    description: 'Kami memberikan jaminan kepuasan untuk semua layanan yang kami berikan.',
    icon: '✅'
  }
];

const projects = [
  {
    title: 'Website E-commerce',
    description: 'Platform belanja online dengan fitur lengkap',
    image: '/images/projects/ecommerce.jpg'
  },
  {
    title: 'Aplikasi Mobile',
    description: 'Aplikasi manajemen keuangan pribadi',
    image: '/images/projects/mobile-app.jpg'
  },
  {
    title: 'Dashboard Admin',
    description: 'Panel administrasi untuk manajemen konten',
    image: '/images/projects/dashboard.jpg'
  }
];

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO PT Maju Jaya',
    content: 'Pelayanan sangat memuaskan, website perusahaan kami jadi lebih profesional.',
    avatar: '/images/testimonials/1.jpg'
  },
  {
    name: 'Siti Aisyah',
    role: 'Pemilik Bisnis',
    content: 'Tim yang responsif dan hasil kerja sangat rapi. Sangat direkomendasikan!',
    avatar: '/images/testimonials/2.jpg'
  }
];

export default function Beranda() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Solusi Digital untuk <span className="text-yellow-400">Masa Depan Bisnis</span> Anda</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">Kami membantu bisnis Anda tumbuh dengan layanan digital berkualitas tinggi dan inovatif.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/layanan">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
                >
                  Lihat Layanan
                </motion.div>
              </Link>
              <Link href="/kontak">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300"
                >
                  Hubungi Kami
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Layanan Utama */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk semua kebutuhan digital bisnis Anda
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
                <div className="mt-6 text-center">
                  <Link href={service.href} className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center">
                    Pelajari lebih lanjut <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Keunggulan Perusahaan */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Kami?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang membuat kami berbeda dari yang lain
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Singkat */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beberapa proyek terbaik yang telah kami kerjakan
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Lihat Detail <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Klien Kami?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimoni dari klien yang telah mempercayai layanan kami
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Meningkatkan Bisnis Anda?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Hubungi kami sekarang dan dapatkan konsultasi gratis untuk solusi digital bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontak">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
                >
                  Hubungi Kami Sekarang
                </motion.div>
              </Link>
              <Link href="/layanan">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300"
                >
                  Lihat Layanan Kami
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

      {/* Portfolio Singkat */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portfolio Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beberapa proyek terbaik yang telah kami kerjakan
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link href="/portfolio" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Lihat Detail <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Klien Kami?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimoni dari klien yang telah mempercayai layanan kami
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Meningkatkan Bisnis Anda?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Hubungi kami sekarang dan dapatkan konsultasi gratis untuk solusi digital bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontak">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
                >
                  Hubungi Kami Sekarang
                </motion.div>
              </Link>
              <Link href="/layanan">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block border-2 border-white text-white hover:bg-white/10 font-medium px-8 py-4 text-lg rounded-lg transition-all duration-300"
                >
                  Lihat Layanan Kami
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
