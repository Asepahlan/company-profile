import Link from 'next/link';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaGithub,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

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
    <footer className="bg-[#0f172a] text-gray-300 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {/* Tentang Perusahaan */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Tentang Kami</h3>
            <p className="text-gray-400">
              Menyediakan solusi teknologi inovatif untuk membantu bisnis Anda tumbuh dan berkembang di era digital.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com/ahlandev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a 
                href="https://twitter.com/ahlandev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/ahlandev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/Asepahlan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Tautan Cepat */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Layanan */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Layanan Kami</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-block py-1"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FiMapPin className="text-blue-400 mt-1 mr-3 flex-shrink-0 text-xl" />
                <span className="text-gray-400">Jl. Contoh No. 123, Kel. Contoh, Kec. Contoh, Kota, Kode Pos 12345</span>
              </li>
              <li className="flex items-start">
                <div className="text-blue-400 mr-3 mt-1">
                  <FiPhone className="text-xl" />
                </div>
                <div className="space-y-1">
                  <a href="tel:+62211234567" className="text-gray-400 hover:text-white transition-colors block">(021) 123-4567</a>
                  <a href="https://wa.me/6281234567890" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <FaWhatsapp className="text-blue-400 mr-2" /> +62 812-3456-7890
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <FiMail className="text-blue-400 mt-1 mr-3 text-xl" />
                <div className="space-y-1">
                  <a href="mailto:info@ahlandev.com" className="text-gray-400 hover:text-white transition-colors block">info@ahlandev.com</a>
                  <a href="mailto:contact@ahlandev.com" className="text-gray-400 hover:text-white transition-colors block">contact@ahlandev.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <FiClock className="text-blue-400 mt-1 mr-3 text-xl" />
                <span className="text-gray-400">Senin - Jumat: 09.00 - 17.00 WIB</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and Links */}
        <div className="border-t border-gray-700/30 mt-16 pt-10">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} AhlanDev. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/kebijakan-privasi" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Kebijakan Privasi
              </Link>
              <span className="text-gray-600">•</span>
              <Link 
                href="/syarat-ketentuan" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
