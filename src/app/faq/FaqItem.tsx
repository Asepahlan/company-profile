'use client';

import { useState } from 'react';

interface FaqItemProps {
  item: {
    id: number;
    question: string;
    answer: string;
  };
}

export function FaqItem({ item }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group">
      <div 
        className="flex items-start p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-4 mt-0.5">
          <span className="text-sm font-semibold">Q</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
        </div>
        <svg
          className={`h-5 w-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100 mt-4 mb-4' : 'max-h-0 opacity-0'
      }`}>
        <div className="flex p-6 pt-0">
          <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 mr-4">
            <span className="text-sm font-semibold">A</span>
          </div>
          <div className="text-gray-600">
            <p>{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}