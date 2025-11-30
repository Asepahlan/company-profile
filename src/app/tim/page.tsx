'use client';

import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiChevronRight } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

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
  show: { opacity: 1, y: 0 },
};

// Types
interface SocialLinks {
  linkedin?: string;
  github?: string;
  instagram?: string;
  email?: string;
  behance?: string;
  dribbble?: string;
  gitlab?: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  social: SocialLinks;
}

// Reusable Components
const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <motion.div 
    className="text-center mb-16"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
  </motion.div>
);

const TeamCard = ({ member }: { member: TeamMember }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
    variants={item}
    whileHover={{ y: -5 }}
  >
    <div className="relative h-64 bg-gray-200 dark:bg-gray-700">
      <Image 
        src={member.image} 
        alt={member.name} 
        fill 
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</p>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{member.description}</p>
      <div className="flex space-x-4">
        {member.social.linkedin && (
          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FiLinkedin className="w-5 h-5" />
          </a>
        )}
        {member.social.github && (
          <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
            <FiGithub className="w-5 h-5" />
          </a>
        )}
        {member.social.instagram && (
          <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors">
            <FiInstagram className="w-5 h-5" />
          </a>
        )}
        {member.social.email && (
          <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-red-500 transition-colors">
            <FiMail className="w-5 h-5" />
          </a>
        )}
        {member.social.behance && (
          <a href={member.social.behance} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FiChevronRight className="w-5 h-5" />
          </a>
        )}
        {member.social.dribbble && (
          <a href={member.social.dribbble} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FiChevronRight className="w-5 h-5" />
          </a>
        )}
        {member.social.gitlab && (
          <a href={member.social.gitlab} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
            <FiChevronRight className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

// Team Data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Ahmad Fauzi',
    role: 'CEO & Founder',
    description: 'Memiliki pengalaman lebih dari 10 tahun di industri teknologi dan bisnis digital. Bertanggung jawab atas visi dan strategi perusahaan.',
    image: '/images/team/ceo.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      email: 'ahmad@ahlandev.com'
    }
  },
  {
    id: 2,
    name: 'Budi Santoso',
    role: 'CTO',
    description: 'Ahli teknologi dengan spesialisasi dalam arsitektur perangkat lunak dan pengembangan sistem terukur. Memimpin tim pengembangan produk.',
    image: '/images/team/cto.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'budi@ahlandev.com'
    }
  },
  {
    id: 3,
    name: 'Citra Dewi',
    role: 'Lead UI/UX Designer',
    description: 'Desainer kreatif dengan keahlian dalam menciptakan pengalaman pengguna yang menarik dan intuitif untuk produk digital.',
    image: '/images/team/designer.jpg',
    social: {
      behance: 'https://behance.com',
      dribbble: 'https://dribbble.com',
      email: 'citra@ahlandev.com'
    }
  },
  {
    id: 4,
    name: 'Dian Permata',
    role: 'Head of Digital Marketing',
    description: 'Pakar pemasaran digital dengan rekam jejak dalam mengembangkan strategi digital yang efektif untuk berbagai industri.',
    image: '/images/team/marketing.jpg',
    social: {
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com',
      email: 'dian@ahlandev.com'
    }
  },
  {
    id: 5,
    name: 'Eko Prasetyo',
    role: 'Senior Full-Stack Developer',
    description: 'Pengembang berpengalaman dengan keahlian dalam berbagai teknologi pengembangan web dan mobile.',
    image: '/images/team/developer1.jpg',
    social: {
      github: 'https://github.com',
      gitlab: 'https://gitlab.com',
      email: 'eko@ahlandev.com'
    }
  },
  {
    id: 6,
    name: 'Fitri Ayu',
    role: 'UI/UX Designer',
    description: 'Desainer berbakat yang berfokus pada menciptakan antarmuka yang indah dan fungsional untuk pengalaman pengguna yang optimal.',
    image: '/images/team/designer2.jpg',
    social: {
      behance: 'https://behance.com',
      dribbble: 'https://dribbble.com',
      email: 'fitri@ahlandev.com'
    }
  }
];

const whyUs = [
  {
    title: 'Berpengalaman',
    description: 'Tim kami terdiri dari profesional dengan pengalaman bertahun-tahun di industri teknologi.'
  },
  {
    title: 'Inovatif',
    description: 'Kami selalu mengikuti perkembangan teknologi terbaru untuk memberikan solusi terbaik.'
  },
  {
    title: 'Berdedikasi',
    description: 'Komitmen kami adalah memberikan hasil terbaik untuk setiap proyek yang kami kerjakan.'
  }
];

const values = [
  {
    title: 'Kolaboratif',
    description: 'Kami percaya kerja tim yang solid menghasilkan solusi terbaik untuk klien kami.',
    icon: '🤝'
  },
  {
    title: 'Inovatif',
    description: 'Terus berinovasi untuk memberikan solusi teknologi terkini dan efektif.',
    icon: '💡'
  },
  {
    title: 'Komunikatif',
    description: 'Komunikasi yang jelas dan transparan dengan tim dan klien adalah kunci kesuksesan proyek.',
    icon: '💬'
  },
  {
    title: 'Profesional',
    description: 'Menjaga standar profesionalisme tinggi dalam setiap aspek pekerjaan kami.',
    icon: '🎯'
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-800 dark:to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Tim Profesional Kami
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Kenali tim profesional yang akan membantu mewujudkan visi digital Anda
            </motion.p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Tim Inti Kami" 
            subtitle="Berikut adalah tim inti yang akan membantu mewujudkan proyek digital Anda"
          />
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Mengapa Memilih Tim Kami?" 
            subtitle="Kami berkomitmen memberikan yang terbaik untuk kesuksesan proyek Anda"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nilai-nilai Tim */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nilai-nilai Kami</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Misi Tim */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-50 dark:bg-blue-900 p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Misi Kami</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Kami berkomitmen untuk memberikan solusi digital terbaik dengan mengedepankan kualitas, inovasi, dan kepuasan pelanggan. Setiap anggota tim kami berdedikasi untuk memberikan yang terbaik dalam setiap proyek yang kami kerjakan.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Keberhasilan klien adalah kebanggaan dan motivasi terbesar kami.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-800 dark:to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ingin Bekerja Sama dengan Tim Kami?</h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
            Hubungi kami sekarang dan mari wujudkan ide digital Anda menjadi kenyataan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white dark:bg-gray-700 text-blue-700 dark:text-white hover:bg-blue-50 dark:hover:bg-gray-600">
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-700">
              <Link href="tel:+6281234567890">+62 812-3456-7890</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-blue-200">Atau kirim email ke: info@ahlandev.com</p>
        </div>
      </section>
    </div>
  );
}