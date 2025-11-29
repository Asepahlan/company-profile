"use client";

import { useState } from 'react';

const testimonials = [
  {
    name: 'Budi Santoso',
    position: 'Direktur, PT Maju Jaya Abadi',
    content: 'Layanan pengembangan website mereka sangat memuaskan. Tim responsif dan hasilnya melebihi ekspektasi. Website kami sekarang lebih cepat dan mudah dikelola.',
    rating: 5,
    image: '/images/testimonial-1.svg',
  },
  {
    name: 'Dewi Lestari',
    position: 'Pemilik, Butik Dewi Collection',
    content: 'Aplikasi mobile yang dikembangkan untuk toko online kami sangat membantu meningkatkan penjualan hingga 70%. Desainnya modern dan mudah digunakan pelanggan.',
    rating: 5,
    image: '/images/testimonial-2.svg',
  },
  {
    name: 'Agus Setiawan',
    position: 'Manajer IT, PT Sejahtera Bersama',
    content: 'Sistem manajemen yang mereka buat benar-benar mengubah cara kerja kami. Proses bisnis menjadi lebih efisien dan terukur dengan baik.',
    rating: 5,
    image: '/images/testimonial-3.svg',
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimoni" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-200 font-semibold mb-2 block">Testimoni</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apa Kata Klien Kami</h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut beberapa testimoni dari mitra bisnis yang telah bekerja sama dengan kami.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  index === activeIndex ? 'opacity-100' : 'opacity-75 hover:opacity-90'
                }`}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-blue-500/30 flex items-center justify-center text-2xl font-bold text-white mr-4 border-2 border-blue-300">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                    <p className="text-blue-200 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
              aria-label="Testimonial sebelumnya"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
              aria-label="Testimonial berikutnya"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-blue-100 mb-6">Bergabunglah dengan ratusan klien yang telah mempercayai layanan kami</p>
          <a 
            href="/kontak" 
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
