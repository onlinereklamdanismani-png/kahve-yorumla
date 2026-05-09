import type { Metadata } from 'next';
import { siteConfig } from './site';

interface BuildMetadataParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  keywords?: string[];
}

const DEFAULT_OG_IMAGE = '/og-default.svg';

export function buildMetadata(params: BuildMetadataParams): Metadata {
  const {
    title,
    description,
    path = '/',
    image = DEFAULT_OG_IMAGE,
    type = 'website',
    publishedTime,
    modifiedTime,
    noIndex = false,
    keywords,
  } = params;

  const isHome = title === siteConfig.name;
  const fullTitle = isHome ? siteConfig.defaultTitle : `${title} — ${siteConfig.name}`;
  const url = `${siteConfig.url}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  return {
    title: isHome ? { absolute: siteConfig.defaultTitle } : { absolute: fullTitle },
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}

interface OrganizationLdParams {
  name?: string;
  url?: string;
}

export function organizationLd(params: OrganizationLdParams = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: params.name ?? siteConfig.name,
    url: params.url ?? siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'tr-TR',
  };
}

interface ArticleLdParams {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
}

export function articleLd(params: ArticleLdParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}${params.path}`,
    },
    datePublished: params.publishedAt,
    dateModified: params.updatedAt ?? params.publishedAt,
    author: {
      '@type': 'Organization',
      name: params.author ?? siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.svg`,
      },
    },
    inLanguage: 'tr-TR',
  };
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
