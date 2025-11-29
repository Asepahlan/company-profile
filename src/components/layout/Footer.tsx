import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Portofolio', href: '/portofolio' },
    { name: 'Tim', href: '/tim' },
    { name: 'Kontak', href: '/kontak' },
  ];

  const services = [
    { name: 'Web Development', href: '/layanan/web-development' },
    { name: 'Mobile Apps', href: '/layanan/mobile-apps' },
    { name: 'UI/UX Design', href: '/layanan/ui-ux-design' },
    { name: 'Digital Marketing', href: '/layanan/digital-marketing' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Tentang Perusahaan */}
          <div>
            <h3 className="text-xl font-bold mb-6">Tentang Kami</h3>
            <p className="text-gray-400 mb-6">
              Menyediakan solusi teknologi inovatif untuk membantu bisnis Anda tumbuh dan berkembang di era digital.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Tautan Cepat */}
          <div>
            <h3 className="text-xl font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Layanan */}
          <div>
            <h3 className="text-xl font-bold mb-6">Layanan Kami</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Kontak */}
          <div>
            <h3 className="text-xl font-bold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Jl. Contoh No. 123, Kel. Contoh, Kec. Contoh, Kota, Kode Pos 12345</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary mr-3" />
                <div className="flex flex-col">
                  <a href="tel:+62211234567" className="text-gray-400 hover:text-white transition-colors">(021) 123-4567</a>
                  <a href="https://wa.me/6281234567890" className="text-gray-400 hover:text-white transition-colors">+62 812-3456-7890 (WhatsApp)</a>
                </div>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <div className="flex flex-col">
                  <a href="mailto:info@perusahaan.com" className="text-gray-400 hover:text-white transition-colors">info@perusahaan.com</a>
                  <a href="mailto:marketing@perusahaan.com" className="text-gray-400 hover:text-white transition-colors">marketing@perusahaan.com</a>
                </div>
              </li>
              <li className="flex items-center">
                <FaClock className="text-primary mr-3" />
                <span className="text-gray-400">Senin - Jumat: 09.00 - 17.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Nama Perusahaan. Seluruh hak cipta dilindungi.</p>
          <div className="mt-2 text-sm">
            <Link href="/kebijakan-privasi" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <span className="mx-2">•</span>
            <Link href="/syarat-ketentuan" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
