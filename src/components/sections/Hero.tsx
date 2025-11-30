import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <AnimateOnScroll direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Solusi Digital Inovatif untuk Bisnis Masa Kini
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll direction="up" delay={0.2}>
            <p className="text-xl mb-8 text-blue-100">
              Kami hadir membantu UMKM dan perusahaan besar bertransformasi digital dengan solusi teknologi terkini yang terukur dan berkelanjutan.
            </p>
          </AnimateOnScroll>
          
          <AnimateOnScroll direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontak" className="inline-block">
                <Button variant="primary" size="lg">
                  Konsultasi Gratis
                </Button>
              </Link>
              <Link href="/layanan" className="inline-block">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white hover:border-white/40 dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:hover:border-white/20"
                >
                  Lihat Portofolio
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <div className="w-16 h-16 bg-white/10 rounded-full -mb-8 transform translate-y-1/2"></div>
      </div>
    </section>
  );
}