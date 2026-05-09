import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { symbols } from '@/data/symbols';
import { blogs } from '@/data/blogs';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date().toISOString();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/fal-yukle/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/sembol-sozlugu/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/kahve-fali-nedir/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/kahve-fali-nasil-bakilir/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/hakkimizda/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/iletisim/`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${base}/gizlilik-politikasi/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/kvkk/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cerez-politikasi/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/kullanim-kosullari/`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const symbolEntries: MetadataRoute.Sitemap = symbols.map((symbol) => ({
    url: `${base}/sembol-sozlugu/${symbol.slug}/`,
    lastModified: symbol.updatedAt,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogs.map((post) => ({
    url: `${base}/blog/${post.slug}/`,
    lastModified: post.updatedAt ?? post.publishedAt,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...symbolEntries, ...blogEntries];
}
