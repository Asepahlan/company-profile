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
<<<<<<< HEAD
  title: {
    default: 'AhlanDev — Web Developer & Portfolio Profesional',
    template: '%s | AhlanDev',
  },
  description: 'AhlanDev menyediakan jasa pembuatan website profesional, aplikasi web, dan solusi digital dengan teknologi terkini. Hasilkan website cepat, aman, dan SEO-friendly untuk bisnis Anda di Tasikmalaya dan sekitarnya.',
  applicationName: 'AhlanDev',
  referrer: 'origin-when-cross-origin',
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
  authors: [
    {
      name: 'Asep Muhammad Ahlan Selan',
      url: 'https://ahlan-profile.vercel.app/tentang-kami'
    }
  ],
  creator: 'Asep Muhammad Ahlan Selan',
  publisher: 'AhlanDev',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://ahlan-profile.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'id-ID': '/id',
    },
  },
  openGraph: {
    title: 'AhlanDev — Web Developer & Portfolio Profesional',
    description: 'Jasa pembuatan website profesional dengan teknologi terkini untuk bisnis Anda. Hasilkan website cepat, aman, dan SEO-friendly.',
    url: 'https://ahlan-profile.vercel.app',
=======
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
>>>>>>> fa5288eb9babb8436558af90498de2f306118662
    siteName: 'AhlanDev',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AhlanDev - Web Developer & Portfolio Profesional',

      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AhlanDev — Web Developer & Portfolio Profesional',
    description: 'Jasa pembuatan website profesional dengan teknologi terkini untuk bisnis Anda.',
    images: ['/images/og-image.jpg'],
    creator: '@ahlandev',
    site: '@ahlandev',
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
};

export const viewport: Viewport = {
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
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
};

// Preload critical assets
function PreloadResources() {
  return (
    <>
      <link
        rel="preload"
        href="/_next/static/media/Inter.var.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="id"
      className="scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
      suppressHydrationWarning
    >
      <head>
        <PreloadResources />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateOrganizationStructuredData(),
          }}
        />
        <meta name="google-site-verification" content="YOUR_GOOGLE_SITE_VERIFICATION_CODE" />
        <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" />
        <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" />
      </head>
      <body
        className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
        suppressHydrationWarning
      >
=======
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
>>>>>>> fa5288eb9babb8436558af90498de2f306118662
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
<<<<<<< HEAD
              storageKey="ahlan-theme"
            >
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                  {children}
                </main>
                <Footer />
              </div>
              <Toaster />

              {/* Global Site Tag (gtag.js) - Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `,
                }}
              />
=======
        >
          <Navbar />
              <main className="flex-grow pt-16">
                {children}
              </main>
              <Footer />
              <Toaster />
              {/* <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_ID || ''} /> */}
>>>>>>> fa5288eb9babb8436558af90498de2f306118662
            </ThemeProvider>
          </body>
        </html>
        );
}
