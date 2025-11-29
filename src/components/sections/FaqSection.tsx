'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Berapa lama waktu pengerjaan proyek?',
    answer: 'Waktu pengerjaan tergantung pada kompleksitas proyek. Untuk website sederhana membutuhkan 2-4 minggu, aplikasi mobile 2-3 bulan, dan sistem enterprise 4-6 bulan. Kami akan memberikan timeline detail setelah diskusi awal.',
  },
  {
    question: 'Apakah ada garansi untuk layanan yang diberikan?',
    answer: 'Ya, kami memberikan garansi 3 bulan untuk bug fixing setelah proyek selesai. Selain itu, kami juga menyediakan paket maintenance untuk dukungan jangka panjang.',
  },
  {
    question: 'Bagaimana sistem pembayaran yang berlaku?',
    answer: 'Kami menggunakan sistem pembayaran bertahap: DP 30% di awal, 40% setelah milestone pertama, dan 30% setelah proyek selesai. Untuk proyek besar, bisa disesuaikan dengan kesepakatan bersama.',
  },
  {
    question: 'Apakah bisa konsultasi sebelum memutuskan?',
    answer: 'Tentu saja! Kami menyediakan konsultasi gratis selama 1 jam untuk mendiskusikan kebutuhan Anda dan memberikan solusi terbaik yang sesuai dengan budget dan timeline.',
  },
  {
    question: 'Apakah teknologi yang digunakan?',
    answer: 'Kami menggunakan teknologi terkini dan sudah terbukti: React/Next.js untuk frontend, Node.js/Python untuk backend, AWS/Google Cloud untuk infrastruktur, dan database seperti PostgreSQL atau MongoDB.',
  },
  {
    question: 'Bagaimana dengan keamanan data klien?',
    answer: 'Keamanan data adalah prioritas utama kami. Kami menggunakan enkripsi end-to-end, backup data otomatis, dan mengikuti standar keamanan internasional seperti ISO 27001.',
  },
  {
    question: 'Apakah menyediakan training untuk tim kami?',
    answer: 'Ya, kami menyediakan training untuk tim Anda agar bisa mengoperasikan sistem yang kami buat. Training bisa dilakukan onsite maupun online, dengan dokumentasi yang lengkap.',
  },
  {
    question: 'Bagaimana jika ada perubahan requirement di tengah proyek?',
    answer: 'Kami fleksibel dengan perubahan requirement. Setiap perubahan akan dievaluasi dampaknya terhadap timeline dan budget, kemudian disepakati bersama sebelum implementasi.',
  },
];

interface FaqSectionProps {
  showTitle?: boolean;
}

export function FaqSection({ showTitle = true }: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {showTitle && (
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-xl text-gray-600">
                Temukan jawaban untuk pertanyaan umum tentang layanan kami
              </p>
            </div>
          )}

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-transform ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-4 h-4 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Masih ada pertanyaan?
            </p>
            <a
              href="/kontak"
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Hubungi Kami
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
