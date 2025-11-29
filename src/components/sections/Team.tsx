'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    image: '/images/team/1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: '/images/team/2.jpg',
  },
  {
    name: 'Michael Johnson',
    role: 'Lead Developer',
    image: '/images/team/3.jpg',
  },
];

export function Team() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Tim Kami
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Kenali tim profesional di balik AhlanDev
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
