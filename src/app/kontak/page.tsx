'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheckCircle, FiSend, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// Types
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  subject: string;
  message: string;
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
  show: { opacity: 1, y: 0 },
};

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

const ContactInfoCard = ({ icon: Icon, title, children, className = '' }: { icon: any; title: string; children: React.ReactNode; className?: string }) => (
  <motion.div 
    className={`bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 ${className}`}
    variants={item}
  >
    <div className="flex items-start">
      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="text-gray-600 space-y-1">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);

const ContactForm = ({ onSubmit }: { onSubmit: (data: ContactFormData) => void }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nama Lengkap <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg"
            placeholder="Masukkan nama lengkap"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg"
            placeholder="nama@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Nomor Telepon <span className="text-red-500">*</span>
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg"
            placeholder="0812-3456-7890"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Nama Perusahaan <span className="text-gray-400">(opsional)</span>
          </label>
          <Input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg"
            placeholder="Nama perusahaan Anda"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subjek <span className="text-red-500">*</span>
        </label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full rounded-lg"
          placeholder="Apa yang bisa kami bantu?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Pesan <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full rounded-lg"
          placeholder="Tulis pesan Anda secara detail..."
        />
      </div>

      <div className="flex justify-end">
        <Button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg flex items-center gap-2"
        >
          Kirim Pesan <FiSend className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};

// Main Component
export default function ContactPage() {
  const handleSubmit = (data: ContactFormData) => {
    console.log("Form Submitted:", data);
    // TODO: Implement form submission logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Kontak Kami
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hubungi kami untuk konsultasi, penawaran, atau pertanyaan lainnya.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <ContactInfoCard 
                icon={FiPhone} 
                title="Telepon & WhatsApp"
              >
                <div className="flex flex-col space-y-1">
                  <a href="tel:+6281234567890" className="flex items-center hover:text-blue-600 transition-colors">
                    <FiPhone className="mr-2 text-blue-500" />
                    +62 812-3456-7890
                  </a>
                  <a href="https://wa.me/6281234567890" className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                    <span className="w-5 h-5 mr-2 flex items-center justify-center bg-green-100 rounded-full text-green-600">
                      <FiPhone className="w-3 h-3" />
                    </span>
                    +62 812-3456-7890 (WhatsApp)
                  </a>
                </div>
              </ContactInfoCard>

              <ContactInfoCard 
                icon={FiMail} 
                title="Email"
              >
                <a href="mailto:info@ahlandev.com" className="flex items-center hover:text-blue-600 transition-colors">
                  <FiMail className="mr-2 text-blue-500" />
                  info@ahlandev.com
                </a>
              </ContactInfoCard>

              <ContactInfoCard 
                icon={FiMapPin} 
                title="Alamat Kantor"
              >
                <div className="space-y-1">
                  <p>Jl. Contoh No. 123, Kel. Contoh</p>
                  <p>Kec. Contoh, Kota Contoh</p>
                  <p>Jawa Barat, Indonesia 12345</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-2"
                  >
                    Lihat di Peta <FiArrowRight className="ml-1" />
                  </a>
                </div>
              </ContactInfoCard>

              <ContactInfoCard 
                icon={FiClock} 
                title="Jam Operasional"
              >
                <div className="space-y-1">
                  <p className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span className="text-gray-900 font-medium">09:00 - 17:00 WIB</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sabtu</span>
                    <span className="text-gray-900 font-medium">09:00 - 14:00 WIB</span>
                  </p>
                  <p className="text-gray-900 font-medium">Minggu & Hari Libur: Tutup</p>
                </div>
              </ContactInfoCard>

              <motion.div 
                className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-2xl text-white"
                variants={item}
              >
                <h3 className="text-xl font-semibold mb-4">Mengapa Memilih Kami?</h3>
                <ul className="space-y-3">
                  {[
                    "Respon cepat dalam 1x24 jam",
                    "Konsultasi gratis tanpa biaya",
                    "Tim profesional & berpengalaman",
                    "Solusi terbaik untuk bisnis Anda"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheckCircle className="flex-shrink-0 w-5 h-5 text-green-300 mt-0.5 mr-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              variants={item}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Kirim Pesan</h2>
              <p className="text-gray-600 mb-8">
                Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.
              </p>
              
              <ContactForm onSubmit={handleSubmit} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Temukan Kami di Peta" 
            subtitle="Kunjungi kantor kami untuk bertemu langsung dengan tim profesional kami"
          />
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-w-16 aspect-h-9 w-full h-96 bg-gray-200">
              {/* Replace with actual map component or iframe */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <p className="text-gray-500">Peta Lokasi Kantor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Siap Memulai Proyek Anda?
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek digital Anda.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/layanan">
              <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg text-lg flex items-center">
                Lihat Layanan Kami
              </Button>
            </Link>
            <Link href="/portofolio">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg text-lg">
                Lihat Portofolio
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}