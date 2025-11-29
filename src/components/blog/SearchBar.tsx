'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FiSearch, FiX } from 'react-icons/fi';

interface SearchBarProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
}

export function SearchBar({ 
  placeholder = 'Cari artikel...',
  className = '',
  value = '',
  onChange,
  defaultValue = ''
}: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(defaultValue || value || '');
  
  // Update internal state if value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setQuery(value);
    }
  }, [value]);

  // Update query from URL on initial load
  useEffect(() => {
    const searchQuery = searchParams.get('q');
    if (searchQuery) {
      setQuery(decodeURIComponent(searchQuery));
    } else if (defaultValue) {
      setQuery(defaultValue);
    } else {
      setQuery('');
    }
  }, [searchParams, defaultValue]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onChange) {
      onChange(query);
    } else if (query.trim()) {
      router.push(`/blog?q=${encodeURIComponent(query)}`);
    } else {
      router.push('/blog');
    }
  };

  const clearSearch = () => {
    setQuery('');
    router.push('/blog');
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Hapus pencarian"
          >
            <FiX className="h-5 w-5" />
          </button>
        )}
      </div>
      <button
        type="submit"
        className="mt-3 w-full md:w-auto px-6 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
      >
        Cari
      </button>
    </form>
  );
}
