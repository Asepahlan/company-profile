'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FiArrowRight, FiCheckCircle, FiCode, FiLayers, FiMonitor, FiSmartphone } from 'react-icons/fi';

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
    description: 'Website responsif dan aplikasi web yang dibuat khusus untuk kebutuhan bisnis Anda.',
    href: '/layanan/web-development',
  },
  {
    icon: <FiSmartphone className="w-8 h-8 text-blue-600" />,
    title: 'Mobile Apps',
    description: 'Aplikasi mobile yang powerful dan mudah digunakan untuk berbagai platform.',
    href: '/layanan/mobile-apps',
  },
  {
    icon: <FiMonitor className="w-8 h-8 text-blue-600" />,
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang indah dan pengalaman pengguna yang luar biasa.',
    href: '/layanan/ui-ux',
  },
  {
    icon: <FiLayers className="w-8 h-8 text-blue-600" />,
    title: 'Digital Marketing',
    description: 'Strategi pemasaran digital yang efektif untuk meningkatkan visibilitas online Anda.',
    href: '/layanan/digital-marketing',
  },
];

const features = [
  {
    icon: <FiCheckCircle className="w-6 h-6 text-green-500" />,
    title: 'Profesional',
    description: 'Tim ahli dengan pengalaman bertahun-tahun di industri teknologi.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6 text-green-500" />,
    title: 'Cepat & Efisien',
    description: 'Proyek selesai tepat waktu dengan hasil yang memuaskan.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6 text-green-500" />,
    title: 'Harga Kompetitif',
    description: 'Kualitas terbaik dengan harga yang terjangkau untuk semua kalangan.',
  },
  {
    icon: <FiCheckCircle className="w-6 h-6 text-green-500" />,
    title: 'Support 24/7',
    description: 'Tim support siap membantu kapan saja Anda membutuhkan.',
  },
];

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: '/images/projects/ecommerce.jpg',
    href: '/portfolio/ecommerce',
  },
  {
    title: 'Mobile Banking App',
    category: 'Mobile Apps',
    image: '/images/projects/banking.jpg',
    href: '/portfolio/banking-app',
  },
  {
    title: 'Corporate Website',
    category: 'Web Design',
    image: '/images/projects/corporate.jpg',
    href: '/portfolio/corporate-site',
  },
];

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO PT Maju Jaya',
    content: 'Pelayanan sangat memuaskan, tim profesional dan hasilnya melebihi ekspektasi.',
    avatar: '/images/testimonials/1.jpg',
  },
  {
    name: 'Siti Rahayu',
    role: 'Manajer Digital Marketing',
    content: 'Website yang dibuat sangat membantu meningkatkan penjualan bisnis kami secara signifikan.',
    avatar: '/images/testimonials/2.jpg',
  },
];

// Generate structured data for the homepage
function generateStructuredData() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AhlanDev - Web Developer & Portfolio",
    "description": "AhlanDev adalah penyedia jasa pembuatan website profesional menggunakan teknologi modern seperti Next.js, React, dan Tailwind CSS.",
    "url": "https://ahlan-profile.vercel.app/",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://ahlan-profile.vercel.app/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AhlanDev",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ahlan-profile.vercel.app/logo.png"
      }
    }
  });
}

export default function Home() {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-center"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Solusi Digital untuk <span className="text-yellow-400">Masa Depan Bisnis</span> Anda
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Kami membantu bisnis Anda tumbuh dengan layanan digital berkualitas tinggi dan inovatif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/layanan">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-4 text-lg">
                  Lihat Layanan Kami
                  <FiArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/kontak">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Hubungi Kami
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <div className="text-center">
                  <Link href={service.href} className="text-blue-600 font-medium hover:underline inline-flex items-center">
                    Selengkapnya <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Mengapa Memilih Kami?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Kami berkomitmen memberikan layanan terbaik dengan kualitas yang tidak perlu diragukan lagi.
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/Beranda/tim.jpg"
                  alt="Team Meeting"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tim Profesional</h3>
                  <p className="text-blue-100">Siap mewujudkan ide-ide brilian Anda</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Portofolio Kami</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className="group relative overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="inline-block bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/portfolio">
              <Button variant="outline" className="px-8 py-3 text-lg">
                Lihat Semua Proyek
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Apa Kata Klien Kami?</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
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
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Meningkatkan Bisnis Anda?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Mulai perjalanan digital Anda bersama kami hari ini dan rasakan perbedaannya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontak">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                  Hubungi Kami Sekarang
                </Button>
              </Link>
              <Link href="/layanan">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                  Pelajari Layanan Kami
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
