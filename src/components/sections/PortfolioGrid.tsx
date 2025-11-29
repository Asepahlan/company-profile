'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'Website Perusahaan XYZ',
    category: 'Web Development',
    image: '/images/portfolio/1.jpg',
    url: '/portfolio/project-1',
  },
  {
    id: 2,
    title: 'Aplikasi Mobile ABC',
    category: 'Mobile App',
    image: '/images/portfolio/2.jpg',
    url: '/portfolio/project-2',
  },
  {
    id: 3,
    title: 'Sistem Manajemen',
    category: 'Web Application',
    image: '/images/portfolio/3.jpg',
    url: '/portfolio/project-3',
  },
  // Add more projects as needed
];

export function PortfolioGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Portfolio Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Beberapa proyek terbaik yang telah kami kerjakan
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                <Link
                  href={project.url}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Lihat Detail
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
