import { Metadata } from 'next';

interface StructuredDataProps {
  type: 'Organization' | 'WebPage' | 'Article' | 'Service' | 'FAQPage' | 'BreadcrumbList';
  data?: Record<string, any>;
}

export function generateStructuredData({ type, data }: StructuredDataProps): string {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return JSON.stringify(baseData);
}

// Organization structured data
export function organizationStructuredData() {
  return generateStructuredData({
    type: 'Organization',
    data: {
      name: 'AhlanDev',
      url: 'https://ahlandev.com',
      logo: 'https://ahlandev.com/images/logo.png',
      description: 'AhlanDev - Solusi teknologi inovatif untuk transformasi digital bisnis Anda',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Contoh No. 123',
        addressLocality: 'Kota',
        addressRegion: 'Provinsi',
        postalCode: '12345',
        addressCountry: 'ID',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+62-21-1234567',
        contactType: 'customer service',
        availableLanguage: ['Indonesian', 'English'],
      },
      sameAs: [
        'https://facebook.com/ahlandev',
        'https://twitter.com/ahlandev',
        'https://linkedin.com/company/ahlandev',
        'https://instagram.com/ahlandev',
      ],
      foundingDate: '2010-01-01',
      employeeCount: '50-100',
    },
  });
}

// WebPage structured data
export function webPageStructuredData(title: string, description: string, url: string) {
  return generateStructuredData({
    type: 'WebPage',
    data: {
      name: title,
      description,
      url,
      dateModified: new Date().toISOString(),
      isPartOf: {
        '@type': 'WebSite',
        name: 'AhlanDev',
        url: 'https://ahlandev.com',
      },
    },
  });
}

// Service structured data
export function serviceStructuredData(serviceName: string, description: string) {
  return generateStructuredData({
    type: 'Service',
    data: {
      name: serviceName,
      description,
      provider: {
        '@type': 'Organization',
        name: 'AhlanDev',
        url: 'https://ahlandev.com',
      },
      serviceType: 'Digital Services',
      areaServed: 'Indonesia',
    },
  });
}

// FAQ structured data
export function faqStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return generateStructuredData({
    type: 'FAQPage',
    data: {
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  });
}

// Breadcrumb structured data
export function breadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  return generateStructuredData({
    type: 'BreadcrumbList',
    data: {
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url,
      })),
    },
  });
}
