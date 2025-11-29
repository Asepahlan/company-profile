import { Button } from '@/components/ui/Button';

export function CtaSection() {
  return (
    <section id="cta" className="section bg-gradient-to-r from-primary to-blue-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Siap Untuk Memulai Proyek Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Mari diskusikan bagaimana kami dapat membantu bisnis Anda tumbuh dengan solusi teknologi inovatif.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
<<<<<<< HEAD
            <Button 
              variant="primary" 
              size="lg" 
              className="bg-white text-blue-700 hover:bg-blue-50 dark:bg-white dark:text-blue-700 dark:hover:bg-blue-50"
            >
              Konsultasi Gratis
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 dark:border-white/70 dark:text-white dark:hover:bg-white/10"
            >
=======
            <Button variant="primary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Konsultasi Gratis
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
>>>>>>> fa5288eb9babb8436558af90498de2f306118662
              Lihat Harga
            </Button>
          </div>
          
          <div className="flex justify-center space-x-8 text-blue-100">
            <div className="text-center">
<<<<<<< HEAD
              <div className="text-3xl font-bold text-white dark:text-white/90 mb-1">500+</div>
=======
              <div className="text-3xl font-bold text-white mb-1">500+</div>
>>>>>>> fa5288eb9babb8436558af90498de2f306118662
              <div className="text-sm">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">300+</div>
              <div className="text-sm">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">13+</div>
              <div className="text-sm">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm">Dukungan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
