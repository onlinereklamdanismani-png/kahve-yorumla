import Script from 'next/script';
import { siteConfig } from '@/lib/site';

const GA_ID =
  process.env.NEXT_PUBLIC_GA_ID || siteConfig.analytics.gaMeasurementId;

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'granted',
            wait_for_update: 500,
          });
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            transport_type: 'beacon',
          });
        `}
      </Script>
    </>
  );
}
