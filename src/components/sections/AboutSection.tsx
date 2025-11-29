import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold mb-2 block">Tentang Kami</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Siapa Kami?</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            AhlanDev adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif untuk membantu bisnis tumbuh di era digital. Sejak 2020, kami telah membantu berbagai klien dari berbagai sektor industri dalam melakukan transformasi digital.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-image.svg"
                alt="Tentang Perusahaan"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-bold">13+ Tahun</h3>
                <p>Pengalaman di industri teknologi</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mengapa Memilih Kami?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Kami percaya bahwa setiap bisnis unik dan membutuhkan solusi yang disesuaikan. Itulah mengapa kami tidak hanya menyediakan layanan standar, tetapi juga memberikan solusi yang dirancang khusus untuk memenuhi kebutuhan spesifik bisnis Anda.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Cepat & Efisien</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Proyek selesai tepat waktu dengan kualitas terjamin</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Aman</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Keamanan data terjamin</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Terpercaya</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Solusi yang dapat diandalkan</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">Garansi</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Dukungan penuh untuk kepuasan Anda</p>
                </div>
              </div>
            </div>
            
            <Button variant="primary" size="lg">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
