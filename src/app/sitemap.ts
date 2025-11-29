import { MetadataRoute } from 'next'

type SitemapEntry = {
  url: string;
  lastModified: Date | string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ahlan-profile.vercel.app';
  
  return [
    { 
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0
    },
    { 
      url: `${baseUrl}/tentang`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/layanan`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/portofolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/tim`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7 
    },
    { 
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7 
    },
    { 
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6 
    },
    { 
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6 
    }
  ];
}
