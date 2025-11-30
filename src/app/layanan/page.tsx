"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  price?: string;
}

const services: Service[] = [
  {
    id: 'web-development',
    title: 'Pengembangan Web',
    description: 'Website modern dan responsif yang dioptimalkan untuk pengalaman pengguna terbaik.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Fast Loading',
      'CMS Integration',
      'E-commerce Ready'
    ],
    price: 'Mulai dari 5 Juta'
  },
  // ... other service items
];

export default function Layanan() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Layanan <span className="text-blue-600 dark:text-blue-400">Kami</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Solusi digital inovatif untuk mengembangkan bisnis Anda ke level berikutnya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                variants={item}
              >
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
                      {React.isValidElement(service.icon) && 
                        React.cloneElement(service.icon, { 
                          className: 'w-10 h-10 text-blue-600 dark:text-blue-400' 
                        } as React.HTMLAttributes<SVGElement>)
                      }
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Fitur Utama
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-3 text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {service.price}
                    </span>
                    <Link 
                      href={`/layanan/${service.id === 'mobile-app' ? 'mobile-apps' : service.id}`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Pelajari Lebih Lanjut
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 dark:bg-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Butuh Solusi Khusus untuk Bisnis Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Tim ahli kami siap membantu mewujudkan kebutuhan digital Anda
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50"
            >
              <Link href="/kontak">
                Konsultasi Gratis
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-blue-600"
            >
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}