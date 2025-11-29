import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://namadomainanda.com';
  
  const routes = [
    '',
    'tentang',
    'layanan',
    'portofolio',
    'tim',
    'blog',
    'faq',
    'kontak'
  ].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Tambahkan halaman detail layanan
  const services = [
    'web-development',
    'mobile-apps',
    'ui-ux-design',
    'digital-marketing'
  ].map((service) => ({
    url: `${baseUrl}/layanan/${service}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Tambahkan halaman blog (jika ada)
  const blogPosts = [
    'cara-memilih-jasa-pembuatan-website',
    'tips-optimasi-seo-untuk-pemula',
    'pentingnya-mobile-responsive-untuk-website'
  ].map((post) => ({
    url: `${baseUrl}/blog/${post}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...services, ...blogPosts];
}
