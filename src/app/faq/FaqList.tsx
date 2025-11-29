'use client';

import { useState } from 'react';
import { FaqItem } from './FaqItem';

const faqCategories = [
  { id: 'all', name: 'Semua' },
  { id: 'layanan', name: 'Layanan' },
  { id: 'pembayaran', name: 'Pembayaran' },
  { id: 'proses', name: 'Proses Kerja' },
  { id: 'teknis', name: 'Teknis' }
];

interface FaqItemType {
  id: number;
  question: string;
  answer: string;
  category: string;
}

interface FaqListProps {
  faqItems: FaqItemType[];
}

export function FaqList({ faqItems }: FaqListProps) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {faqCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            } transition-colors`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-6">
        {filteredItems.map((item) => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}