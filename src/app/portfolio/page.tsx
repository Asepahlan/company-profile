// src/app/portofolio/page.tsx
'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiArrowRight, FiCheck, FiChevronRight } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

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

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const PortfolioCard = ({ project }: { project: Project }) => (
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
      <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
        {project.category}
      </span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
      <Link 
        href={`/portofolio/${project.id}`} 
        className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
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
    className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    variants={item}
  >
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl font-bold">
        {name.charAt(0)}
      </div>
      <div className="ml-4">
        <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300 italic">"{content}"</p>
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
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const filteredProjects = selectedCategory === 'Semua' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
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
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white dark:bg-gray-800">
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
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
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

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="show"
            animate="show"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">Tidak ada proyek dalam kategori ini.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
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
              Ingin Membuat Proyek Bersama Kami?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-blue-100/90 dark:text-blue-50/90 mb-8 max-w-2xl mx-auto"
            >
              Mulai perjalanan digital Anda hari ini dan wujudkan ide-ide brilian Anda bersama tim profesional kami.
            </motion.div>
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
                <Button variant="outline" className="border-white text-white hover:bg-white/10 dark:hover:bg-white/20 font-medium py-3 px-8 rounded-lg text-lg">
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