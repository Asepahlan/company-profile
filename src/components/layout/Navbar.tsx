'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const navigation = [
  { name: 'Beranda', href: '/beranda' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { 
    name: 'Layanan', 
    href: '/layanan',
    submenu: [
      { name: 'Web Development', href: '/layanan/web-development' },
      { name: 'Mobile Apps', href: '/layanan/mobile-apps' },
      { name: 'UI/UX Design', href: '/layanan/ui-ux' },
      { name: 'Digital Marketing', href: '/layanan/digital-marketing' },
    ]
  },
  { name: 'Portofolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Tim', href: '/tim' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontak', href: '/kontak' }
    ]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            <span className="text-primary">Nama</span>Perusahaan
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={`px-4 py-2 rounded-lg font-medium flex items-center ${
                        pathname === item.href || 
                        item.submenu.some(sub => pathname === sub.href) ||
                        (item.href !== '/' && pathname.startsWith(item.href))
                          ? 'text-primary'
                          : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      {item.name}
                      <FaChevronDown className="ml-1 text-xs" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div 
                      className={`absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 ${
                        openSubmenu === item.name ? 'block' : 'hidden'
                      } group-hover:block transition-all duration-200`}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm ${
                            pathname === subItem.href || pathname.startsWith(subItem.href)
                              ? 'bg-primary/10 text-primary'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg font-medium ${
                      pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <ThemeToggle />
            <Link
              href="/kontak"
              className="ml-4 bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Hubungi Kami
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden mt-4 pb-4 transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={`w-full flex justify-between items-center px-4 py-3 rounded-lg font-medium ${
                        pathname === item.href || 
                        item.submenu.some(sub => pathname === sub.href) ||
                        (item.href !== '/' && pathname.startsWith(item.href))
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                      <FaChevronDown 
                        className={`transition-transform ${openSubmenu === item.name ? 'transform rotate-180' : ''}`} 
                      />
                    </button>
                    <div 
                      className={`pl-6 mt-1 space-y-1 ${
                        openSubmenu === item.name ? 'block' : 'hidden'
                      }`}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-4 py-2 text-sm rounded-lg ${
                            pathname === subItem.href || pathname.startsWith(subItem.href)
                              ? 'bg-primary/10 text-primary'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-base font-medium ${
                      pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/kontak"
              className="block text-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Kami
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
