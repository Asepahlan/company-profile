"use client";

import Link from 'next/link';
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
  {
    id: 'mobile-apps',
    title: 'Aplikasi Mobile',
    description: 'Aplikasi iOS dan Android yang powerful dengan performa tinggi.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Native Performance',
      'Cross Platform',
      'Offline Support',
      'Push Notifications',
      'Secure Authentication'
    ],
    price: 'Mulai dari 10 Juta'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang indah dan pengalaman pengguna yang mulus.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Usability Testing',
      'Design System'
    ],
    price: 'Mulai dari 8 Juta'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Strategi pemasaran digital yang efektif untuk meningkatkan kehadiran online Anda.',
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    features: [
      'SEO & SEM',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Analytics & Reporting'
    ],
    price: 'Mulai dari 5 Juta/bulan'
  }
];

export default function Layanan() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Layanan Kami
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Solusi lengkap untuk kebutuhan digital bisnis Anda
          </p>
        </div>

        <div className="mt-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Fitur Utama:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="flex-shrink-0 h-5 w-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/layanan/${service.id === 'mobile-app' ? 'mobile-apps' : service.id}`}>
                        Pelajari Lebih Lanjut
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh Layanan Kustom?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Kami juga menyediakan solusi kustom sesuai kebutuhan spesifik bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/kontak">
                Diskusi Sekarang
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Download Brosur
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
