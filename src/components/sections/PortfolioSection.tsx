import { Button } from '@/components/ui/Button';

const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur pembayaran terintegrasi',
    category: 'Web Development',
    image: '/images/portfolio-1.svg',
    link: '#',
  },
  {
    title: 'Mobile Banking App',
    description: 'Aplikasi perbankan mobile yang aman dan user-friendly',
    category: 'Mobile Apps',
    image: '/images/portfolio-2.svg',
    link: '#',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard analitik real-time untuk monitoring bisnis',
    category: 'UI/UX Design',
    image: '/images/portfolio-3.svg',
    link: '#',
  },
  {
    title: 'Sistem Manajemen',
    description: 'Sistem manajemen ERP untuk perusahaan',
    category: 'Software Development',
    image: '/images/portfolio-4.svg',
    link: '#',
  },
  {
    title: 'Social Media Campaign',
    description: 'Kampanye digital marketing untuk brand awareness',
    category: 'Digital Marketing',
    image: '/images/portfolio-5.svg',
    link: '#',
  },
  {
    title: 'AI Chatbot',
    description: 'Chatbot AI untuk customer service otomatis',
    category: 'AI & Machine Learning',
    image: '/images/portfolio-6.svg',
    link: '#',
  },
];

interface PortfolioSectionProps {
  showTitle?: boolean;
}

export function PortfolioSection({ showTitle = true }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="section bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {showTitle && (
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat beberapa proyek terbaik yang telah kami kerjakan untuk klien kami
          </p>
        </div>
      )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center">
                <span className="text-gray-400 text-lg">{item.category}</span>
              </div>
              
              <div className="p-6">
                <span className="text-sm text-primary font-semibold mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Lihat Detail
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="primary" size="lg">
            Lihat Semua Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
