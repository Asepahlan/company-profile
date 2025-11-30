import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

// ==========================
// ORGANIZATION STRUCTURED DATA
// ==========================
function generateOrganizationStructuredData() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AhlanDev",
    "url": "https://ahlan-profile.vercel.app/",
    "logo": "/logo.png",
    "description":
      "AhlanDev adalah penyedia jasa pembuatan website profesional menggunakan Next.js.",
    "sameAs": ["https://instagram.com/ahlan", "https://github.com/Asepahlan"],
  });
}

// ==========================
// SEO + METADATA
// ==========================
export const metadata: Metadata = {
  title: {
    default: "AhlanDev — Web Developer & Portfolio Profesional",
    template: "%s | AhlanDev",
  },
  description:
    "AhlanDev menyediakan jasa pembuatan website profesional, aplikasi web, dan solusi digital modern.",
  applicationName: "AhlanDev",
  metadataBase: new URL("https://ahlan-profile.vercel.app"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "AhlanDev",
    description:
      "Jasa pembuatan website profesional dengan teknologi modern dan SEO-friendly.",
    url: "https://ahlan-profile.vercel.app",
    siteName: "AhlanDev",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AhlanDev",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AhlanDev",
    description:
      "Jasa pembuatan website profesional dengan teknologi modern dan SEO-friendly.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

// ==========================
// VIEWPORT — FIX DARK MODE BUG
// ==========================
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#ffffff", // selalu light mode
  colorScheme: "light", // tidak mengikuti dark mode device
  userScalable: true,
  maximumScale: 5,
};

// ==========================
// PRELOAD FONT
// ==========================
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
    </>
  );
}

// ==========================
// ROOT LAYOUT
// ==========================
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <PreloadResources />

        {/* STRUCTURED DATA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateOrganizationStructuredData(),
          }}
        />
      </head>

      {/* FIX FLICKER DARK MODE */}
      <body
        className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
        suppressHydrationWarning
      >
        {/* THEME PROVIDER */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="ahlan-theme"
          disableTransitionOnChange
          forcedTheme={undefined}
        >
          <Navbar />

          <main className="flex-grow pt-16">{children}</main>

          <Footer />
          <Toaster />

          {/* GOOGLE ANALYTICS */}
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
        </ThemeProvider>
      </body>
    </html>
  );
}
