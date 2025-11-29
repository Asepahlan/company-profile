'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { FaBars, FaTimes, FaChevronDown, FaTimesCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Animation variants
const menuVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: 'spring' as const,
      damping: 30,
      stiffness: 300
    }
  },
  exit: { 
    opacity: 0, 
    x: '100%',
    transition: {
      type: 'spring' as const,
      damping: 30,
      stiffness: 300
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3
    }
  })
};

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { 
    name: 'Layanan', 
    href: '/layanan',
    submenu: [
      { name: 'Web Development', href: '/layanan/web-development', description: 'Website modern dan responsif' },
      { name: 'Mobile Apps', href: '/layanan/mobile-apps', description: 'Aplikasi mobile untuk iOS & Android' },
      { name: 'UI/UX Design', href: '/layanan/ui-ux', description: 'Desain antarmuka pengguna yang menarik' },
      { name: 'Digital Marketing', href: '/layanan/digital-marketing', description: 'Strategi pemasaran digital' },
    ]
  },
  { name: 'Portofolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Tim', href: '/tim' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Kontak', href: '/kontak' }
];

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
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-md py-3' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold tracking-tight"
          >
            <span className="text-blue-600">Ahlan</span>
            <span className="dark:text-white">Dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <div key={item.name} className="relative group" onMouseEnter={() => setOpenSubmenu(item.name)}>
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={cn(
                        'px-4 py-2.5 rounded-lg font-medium flex items-center transition-colors',
                        'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary',
                        'focus:outline-none focus:ring-2 focus:ring-primary/50',
                        {
                          'text-primary dark:text-primary': pathname === item.href || 
                            item.submenu.some(sub => pathname === sub.href) ||
                            (item.href !== '/' && pathname.startsWith(item.href))
                        }
                      )}
                    >
                      {item.name}
                      <FaChevronDown className={cn(
                        'ml-1.5 text-xs transition-transform duration-200',
                        openSubmenu === item.name && 'transform rotate-180'
                      )} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {openSubmenu === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute left-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 overflow-hidden"
                          onMouseLeave={() => setOpenSubmenu(null)}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={cn(
                                'block px-5 py-3 text-sm transition-colors',
                                'hover:bg-gray-50 dark:hover:bg-gray-700/50',
                                'border-b border-gray-100 dark:border-gray-700 last:border-0',
                                {
                                  'bg-primary/5 text-primary dark:bg-primary/10': 
                                    pathname === subItem.href || pathname.startsWith(subItem.href)
                                }
                              )}
                            >
                              <div className="font-medium">{subItem.name}</div>
                              {subItem.description && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                  {subItem.description}
                                </div>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2.5 rounded-lg font-medium transition-colors',
                      'text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary',
                      {
                        'text-primary dark:text-primary': 
                          pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                      }
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="ml-2">
              <ThemeToggle />
            </div>
            
            <Link
              href="/kontak"
              className="ml-4 bg-primary text-white px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Hubungi Kami
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2.5 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary focus:outline-none"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <FaBars className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40 md:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
              >
                <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
                  <div className="text-2xl font-bold">
                    <span className="text-blue-600">Ahlan</span>
                    <span className="dark:text-white">Dev</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Close menu"
                  >
                    <FaTimesCircle className="h-6 w-6" />
                  </button>
                </div>
                
                <nav className="p-6 space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div 
                      key={item.name}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                    >
                      {item.submenu ? (
                        <div className="space-y-1">
                          <button
                            onClick={() => toggleSubmenu(item.name)}
                            className={`w-full flex justify-between items-center px-4 py-3 rounded-xl font-medium text-left ${
                              pathname === item.href || 
                              item.submenu.some(sub => pathname === sub.href) ||
                              (item.href !== '/' && pathname.startsWith(item.href))
                                ? 'bg-primary/10 text-primary'
                                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                            }`}
                          >
                            {item.name}
                            <FaChevronDown 
                              className={`transition-transform ${openSubmenu === item.name ? 'transform rotate-180' : ''}`} 
                            />
                          </button>
                          <AnimatePresence>
                            {openSubmenu === item.name && (
                              <motion.div 
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 space-y-1 overflow-hidden"
                              >
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className={`block px-4 py-2.5 text-sm rounded-lg ${
                                      pathname === subItem.href || pathname.startsWith(subItem.href)
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <div className="font-medium">{subItem.name}</div>
                                    {subItem.description && (
                                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                                        {subItem.description}
                                      </div>
                                    )}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block px-4 py-3 rounded-xl text-base font-medium ${
                            pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                              ? 'text-primary bg-primary/10'
                              : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    custom={navigation.length}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    className="pt-4"
                  >
                    <Link
                      href="/kontak"
                      className="block w-full text-center bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Hubungi Kami
                    </Link>
                  </motion.div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
