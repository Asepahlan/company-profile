import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

// Generate organization structured data
function generateOrganizationStructuredData() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AhlanDev",
    "url": "https://ahlan-profile.vercel.app/",
    "logo": "/logo.png",
    "description": "AhlanDev adalah penyedia jasa pembuatan website profesional menggunakan Next.js.",
    "sameAs": [
      "https://instagram.com/ahlan",
      "https://github.com/Asepahlan"
    ]
  });
}

export const metadata: Metadata = {
  title: 'AhlanDev | Professional Web Developer & Company Profile',
  description: 'Website resmi AhlanDev yang menyediakan jasa pengembangan website modern, elegan, dan cepat. Dibangun menggunakan Next.js. Kunjungi: https://ahlan-profile.vercel.app/',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  keywords: [
    'AhlanDev',
    'Ahlan Profile',
    'Ahlan Developer',
    'Web Developer Tasikmalaya',
    'Jasa Pembuatan Website',
    'Company Profile Ahlan',
    'pengembangan web',
    'aplikasi mobile',
    'desain ui/ux',
    'digital marketing',
    'solusi teknologi',
    'pengembangan software',
    'jasa it',
    'teknologi informasi',
    'jasa pembuatan website'
  ],
  authors: [{ name: 'Asep Muhammad Ahlan Selan' }],
  creator: 'AhlanDev',
  publisher: 'AhlanDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AhlanDev',
    description: 'Website resmi AhlanDev penyedia jasa pembuatan website profesional.',
    url: 'https://ahlan-profile.vercel.app/',
    siteName: 'AhlanDev',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AhlanDev - Professional Web Developer & Company Profile',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AhlanDev',
    description: 'Website resmi AhlanDev.',
    images: ['/images/og-image.jpg'],
    creator: '@ahlandev',
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
  // Hapus verifikasi jika tidak digunakan
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  // },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateOrganizationStructuredData() }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
          <Toaster />
          {/* <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID || ''} /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
