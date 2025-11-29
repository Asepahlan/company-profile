import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AhlanDev — Web Developer & Portfolio Profesional',
  description: 'AhlanDev menyediakan jasa pembuatan website profesional, aplikasi web, dan solusi digital dengan teknologi terkini. Hasilkan website cepat, aman, dan SEO-friendly untuk bisnis Anda.',
  keywords: [
    'jasa pembuatan website',
    'web developer tasikmalaya',
    'pengembangan web profesional',
    'website company profile',
    'aplikasi web custom',
    'jasa website murah',
    'pembuatan toko online',
    'web developer indonesia',
    'frontend developer',
    'fullstack developer',
    'jasa seo',
    'pengembangan aplikasi',
    'desain website modern'
  ],
  openGraph: {
    title: 'AhlanDev — Web Developer & Portfolio Profesional',
    description: 'Jasa pembuatan website profesional dengan teknologi terkini untuk bisnis Anda. Hasilkan website cepat, aman, dan SEO-friendly.',
    url: 'https://ahlan-profile.vercel.app',
    siteName: 'AhlanDev',
    images: [
      {
        url: 'https://ahlan-profile.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AhlanDev - Web Developer & Portfolio Profesional'
      }
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AhlanDev — Web Developer & Portfolio Profesional',
    description: 'Jasa pembuatan website profesional dengan teknologi terkini untuk bisnis Anda.',
    images: ['https://ahlan-profile.vercel.app/og-image.jpg'],
  },
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
