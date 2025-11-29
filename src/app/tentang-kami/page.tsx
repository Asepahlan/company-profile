'use client';

/// <reference types="react" />

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FiAward, 
  FiClock, 
  FiDollarSign, 
  FiHeadphones, 
  FiShield, 
  FiTrendingUp, 
  FiUsers, 
  FiTarget, 
  FiCheckCircle,
  FiCode,
  FiSmartphone,
  FiLayers,
  FiGlobe,
  FiDatabase,
  FiServer,
  FiZap,
  FiUser,
  FiBriefcase,
  FiStar,
  FiUsers as FiTeam,
  FiMessageSquare,
  FiMail,
  FiArrowRight
} from 'react-icons/fi';
import { Button } from '@/components/ui/Button';

// Types
interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface ValueCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    github: string;
    [key: string]: string;
  };
}

interface TechStack {
  name: string;
  icon: React.ReactNode;
  color: string;
}

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Data
const values: ValueCard[] = [
  {
    icon: <FiShield className="w-6 h-6" />,
    title: 'Integritas',
    description: 'Kami selalu berpegang pada prinsip kejujuran dan transparansi dalam setiap aspek bisnis kami.'
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />,
    title: 'Inovasi',
    description: 'Terus berinovasi untuk memberikan solusi terbaik dan terkini bagi klien kami.'
  },
  {
    icon: <FiAward className="w-6 h-6" />,
    title: 'Profesionalitas',
    description: 'Menghasilkan karya terbaik dengan standar kualitas tertinggi dan tim yang ahli.'
  },
  {
    icon: <FiUsers className="w-6 h-6" />,
    title: 'Kolaborasi',
    description: 'Bekerja sama dengan klien untuk mencapai hasil yang optimal.'
  },
  {
    icon: <FiStar className="w-6 h-6" />,
    title: 'Pelayanan Terbaik',
    description: 'Memberikan pengalaman terbaik bagi setiap klien dengan layanan prima.'
  },
  {
    icon: <FiClock className="w-6 h-6" />,
    title: 'Komitmen Jangka Panjang',
    description: 'Membangun hubungan jangka panjang yang saling menguntungkan dengan klien.'
  }
];

const history: TimelineItem[] = [
  {
    year: '2019',
    title: 'Berdiri',
    description: 'Kami memulai perjalanan dengan tim kecil yang penuh semangat.'
  },
  {
    year: '2020',
    title: 'Mulai Layanan Web Development',
    description: 'Meluncurkan layanan pengembangan website untuk berbagai kebutuhan bisnis.'
  },
  {
    year: '2021',
    title: 'Ekspansi Mobile Apps',
    description: 'Berkembang ke pengembangan aplikasi mobile dengan teknologi terkini.'
  },
  {
    year: '2023',
    title: 'Portfolio Klien Bertambah',
    description: 'Telah melayani lebih dari 100 klien dari berbagai industri.'
  },
  {
    year: '2024',
    title: 'Layanan Digital Marketing',
    description: 'Meluncurkan layanan digital marketing untuk membantu bisnis berkembang online.'
  },
  {
    year: '2025',
    title: 'Transformasi AI & Automasi',
    description: 'Mengintegrasikan kecerdasan buatan dalam solusi digital kami.'
  }
];

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/images/team/team-1.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Jane Smith',
    role: 'Lead Developer',
    image: '/images/team/team-2.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Johnson',
    role: 'UI/UX Designer',
    image: '/images/team/team-3.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Specialist',
    image: '/images/team/team-4.jpg',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

const techStack: TechStack[] = [
  { name: 'React', icon: <FiCode className="w-6 h-6" />, color: 'text-blue-500' },
  { name: 'Next.js', icon: <FiLayers className="w-6 h-6" />, color: 'text-gray-800' },
  { name: 'Laravel', icon: <FiCode className="w-6 h-6" />, color: 'text-red-500' },
  { name: 'Flutter', icon: <FiSmartphone className="w-6 h-6" />, color: 'text-blue-400' },
  { name: 'Node.js', icon: <FiZap className="w-6 h-6" />, color: 'text-green-500' },
  { name: 'MySQL', icon: <FiDatabase className="w-6 h-6" />, color: 'text-blue-600' },
  { name: 'PostgreSQL', icon: <FiDatabase className="w-6 h-6" />, color: 'text-blue-700' },
  { name: 'AWS', icon: <FiServer className="w-6 h-6" />, color: 'text-yellow-600' },
  { name: 'Vercel', icon: <FiGlobe className="w-6 h-6" />, color: 'text-black' },
  { name: 'Firebase', icon: <FiZap className="w-6 h-6" />, color: 'text-yellow-500' }
];

// Reusable Components
const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
  </motion.div>
);

const ValueCard = ({ icon, title, description }: ValueCard) => (
  <motion.div 
    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
    variants={item}
    whileHover={{ y: -5 }}
  >
    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 flex-grow">{description}</p>
  </motion.div>
);

const TimelineItem = ({ year, title, description, isLast }: TimelineItem & { isLast?: boolean }) => (
  <div className="relative pl-8 pb-8 border-l-2 border-blue-100">
    {!isLast && <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600"></div>}
    <div className="absolute left-[-4px] top-0 w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-blue-100 transform -translate-x-1/2"></div>
    <div className="text-sm font-medium text-blue-600 mb-1">{year}</div>
    <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamCard = ({ name, role, image, social }: TeamMember) => (
  <motion.div 
    className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
    variants={item}
    whileHover={{ y: -5 }}
  >
    <div className="aspect-w-4 aspect-h-3">
      <Image 
        src={image} 
        alt={name}
        width={400}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-blue-600 mb-4">{role}</p>
      <div className="flex space-x-4">
        <a href={social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
          <span className="sr-only">LinkedIn</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href={social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
          <span className="sr-only">Twitter</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>
      </div>
    </div>
  </motion.div>
);

const TechCard = ({ name, icon, color }: TechStack) => (
  <motion.div 
    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    variants={item}
    whileHover={{ y: -2 }}
  >
    <div className={`w-10 h-10 rounded-lg bg-blue-50 ${color} flex items-center justify-center`}>
      {icon}
    </div>
    <span className="font-medium text-gray-900">{name}</span>
  </motion.div>
);

export default function TentangKami() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,transparent,white)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Membangun solusi digital inovatif dengan kualitas profesional.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Profil Perusahaan */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Profil Perusahaan" 
            subtitle="Mengenal lebih dekat tentang perusahaan dan nilai-nilai yang kami pegang teguh"
          />
          
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose max-w-none">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Siapa Kami</h3>
              <p className="text-lg text-gray-600 mb-8">
                Kami adalah perusahaan teknologi yang berdedikasi untuk memberikan solusi digital inovatif yang membantu bisnis tumbuh di era digital. Dengan tim yang berpengalaman dan berkomitmen, kami hadir untuk menjadi mitra strategis dalam transformasi digital bisnis Anda.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Apa yang Kami Kerjakan</h3>
              <p className="text-lg text-gray-600 mb-8">
                Kami menyediakan layanan lengkap dalam pengembangan web, aplikasi mobile, UI/UX design, dan digital marketing. Setiap solusi yang kami berikan dirancang khusus untuk memenuhi kebutuhan unik setiap klien, dengan fokus pada kualitas, keamanan, dan pengalaman pengguna yang luar biasa.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 text-blue-600">
                      <FiTarget className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Visi</h3>
                  </div>
                  <p className="text-gray-600">
                    Menjadi mitra terpercaya dalam transformasi digital yang membawa dampak positif bagi bisnis dan masyarakat melalui inovasi teknologi yang berkelanjutan.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 text-blue-600">
                      <FiCheckCircle className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Misi</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Memberikan solusi teknologi terbaik yang sesuai kebutuhan bisnis',
                      'Mengutamakan kepuasan pelanggan dalam setiap layanan',
                      'Terus berinovasi untuk menghadirkan produk yang relevan',
                      'Membangun tim yang kompeten dan profesional',
                      'Berkontribusi pada pengembangan ekosistem digital Indonesia'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-3 mt-1">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Nilai-Nilai Perusahaan */}
          <SectionTitle 
            title="Nilai-Nilai Perusahaan" 
            subtitle="Prinsip-prinsip yang menjadi pedoman kami dalam bekerja"
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <ValueCard key={index} {...value} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sejarah Perjalanan */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Sejarah Perjalanan" 
            subtitle="Perjalanan kami dari awal berdiri hingga menjadi yang terdepan di industri"
          />
          
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="grid grid-cols-6 gap-8">
                {history.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-full">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    {index < history.length - 1 && (
                      <div className="absolute top-1/2 right-0 w-4 h-0.5 bg-blue-200 transform translate-x-1/2"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Mobile Timeline */}
            <div className="md:hidden">
              <div className="relative pl-6 border-l-2 border-blue-100 space-y-12">
                {history.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-6"
                  >
                    <div className="absolute -left-2.5 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.year} - {item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tim Inti */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Tim Inti Perusahaan" 
            subtitle="Kenali tim profesional yang akan membantu mewujudkan visi bisnis Anda"
          />
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <TeamCard key={index} {...member} />
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/tim" className="flex items-center justify-center gap-2">
                Lihat Seluruh Tim <FiArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Teknologi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionTitle 
            title="Teknologi yang Kami Gunakan" 
            subtitle="Kami menggunakan teknologi terdepan untuk memberikan solusi terbaik"
          />
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {techStack.map((tech, index) => (
              <TechCard key={index} {...tech} />
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Statistik */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "250+", label: "Proyek Selesai" },
              { number: "150+", label: "Klien Puas" },
              { number: "7+", label: "Tahun Pengalaman" },
              { number: "99%", label: "Tingkat Kepuasan" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Siap Bekerja Dengan Tim Profesional Kami?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Konsultasikan kebutuhan bisnis Anda dengan tim ahli kami dan dapatkan solusi terbaik untuk pertumbuhan bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/kontak" className="flex items-center gap-2">
                  Hubungi Kami <FiMessageSquare className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Link href="/layanan" className="flex items-center gap-2">
                  Lihat Layanan <FiArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}