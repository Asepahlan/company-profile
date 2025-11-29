// src/app/portofolio/page.tsx
'use client';

import { motion, MotionProps, Variants } from 'framer-motion';
import { HTMLMotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiChevronRight } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

// Animation variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
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

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const PortfolioCard = ({ project }: { project: Project }) => (
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
      <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
        {project.category}
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <Link 
        href={`/portofolio/${project.id}`} 
        className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800"
      >
        Lihat Proyek <FiArrowRight className="ml-1" />
      </Link>
    </div>
  </motion.div>
);

interface Testimonial {
  id?: number;
  name: string;
  role: string;
  content: string;
}

const TestimonialCard = ({ name, role, content, id }: Testimonial) => (
  <motion.div 
    className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
    variants={item}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
        {name.charAt(0)}
      </div>
      <div className="ml-4">
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">"{content}"</p>
  </motion.div>
);

// Portfolio Data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Fashion',
    category: 'Website',
    description: 'Platform e-commerce modern dengan sistem pembayaran dan dashboard produk.',
    image: '/images/portfolio/ecommerce-fashion.jpg',
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile Apps',
    description: 'Aplikasi mobile dengan fitur transaksi, monitoring saldo, dan keamanan biometrik.',
    image: '/images/portfolio/banking-app.jpg',
  },
  {
    id: 3,
    title: 'Dashboard Analitik',
    category: 'Web App',
    description: 'Dashboard analitik interaktif untuk perusahaan enterprise.',
    image: '/images/portfolio/analytics-dashboard.jpg',
  },
  {
    id: 4,
    title: 'Branding & Social Media',
    category: 'Digital Marketing',
    description: 'Kampanye sosial media dan branding untuk meningkatkan engagement.',
    image: '/images/portfolio/branding-social.jpg',
  },
  {
    id: 5,
    title: 'Aplikasi Manajemen Proyek AhlanDev',
    category: 'Mobile Apps',
    description: 'Aplikasi kolaborasi dengan fitur tasking, chat, dan notifikasi real-time.',
    image: '/images/portfolio/project-management.jpg',
  },
  {
    id: 6,
    title: 'Website AhlanDev',
    category: 'Website',
    description: 'Website profesional untuk meningkatkan kredibilitas bisnis.',
    image: '/images/portfolio/company-profile.jpg',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'CEO Fashion Store',
    content: 'Website kami sangat membantu bisnis berkembang!'
  },
  {
    id: 2,
    name: 'Dewi Lestari',
    role: 'Product Manager',
    content: 'Aplikasinya stabil dan cepat!'
  },
  {
    id: 3,
    name: 'Andi Pratama',
    role: 'Marketing Director',
    content: 'Strategi marketingnya sangat efektif!'
  }
];

const categories = ['Semua', 'Website', 'Mobile Apps', 'UI/UX Design', 'Branding', 'Digital Marketing'];

export default function PortfolioPage() {
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
              Portofolio Kami
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kumpulan proyek terbaik yang telah kami bangun untuk klien dari berbagai industri.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
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

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Testimoni Klien" 
            subtitle="Apa kata klien yang telah bekerjasama dengan kami" 
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                id={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
              />
            ))}
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
              Ingin Membuat Proyek Bersama Kami?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Mulai perjalanan digital Anda hari ini dan wujudkan ide-ide brilian Anda bersama tim profesional kami.
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