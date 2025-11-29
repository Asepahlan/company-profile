'use client';

import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang AhlanDev</h1>
          <p className="text-xl text-blue-100">
            Menjadi mitra terpercaya dalam transformasi digital bisnis Anda dengan solusi teknologi inovatif.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
