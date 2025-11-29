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
    "url": "https://ahlandev.com",
    "logo": "/images/ahlan.JPG",
    "sameAs": [
      "https://facebook.com/ahlandev",
      "https://twitter.com/ahlandev",
      "https://instagram.com/ahlandev"
    ]
  });
}

export const metadata: Metadata = {
  title: 'AhlanDev - Solusi Teknologi Profesional',
  description: 'Menyediakan layanan pengembangan web dan aplikasi berkualitas tinggi untuk bisnis Anda',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  keywords: [
    'pengembangan web',
    'aplikasi mobile',
    'desain ui/ux',
    'digital marketing',
    'solusi teknologi',
    'pengembangan software',
    'jasa it',
    'ahlandev',
    'teknologi informasi',
    'jasa pembuatan website'
  ],
  authors: [{ name: 'AhlanDev' }],
  creator: 'AhlanDev',
  publisher: 'AhlanDev',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AhlanDev - Solusi Teknologi Profesional',
    description: 'Menyediakan layanan pengembangan web dan aplikasi berkualitas tinggi untuk bisnis Anda',
    url: 'https://ahlandev.com',
    siteName: 'AhlanDev',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AhlanDev - Solusi Teknologi Profesional',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AhlanDev - Solusi Teknologi Profesional',
    description: 'Menyediakan layanan pengembangan web dan aplikasi berkualitas tinggi untuk bisnis Anda',
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
