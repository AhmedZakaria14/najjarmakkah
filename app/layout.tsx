import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib/site-config';

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: `%s | ${siteConfig.businessShortName}`,
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.businessName,
  authors: [{ name: siteConfig.businessName }],
  generator: 'Next.js',
  keywords: [
    'نجار بمكة',
    'نجار مكة',
    'نجار بجدة',
    'نجار جدة',
    'نجار بالطائف',
    'نجار الطائف',
    'فك وتركيب غرف نوم',
    'تصليح اثاث',
    'تفصيل دواليب',
    'تركيب ابواب خشب',
    'نجار مطابخ',
    'تركيب اثاث ايكيا',
    'بديل الخشب',
  ],
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: `${siteConfig.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.businessName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={ibmPlexArabic.variable}>
      <body className={`${ibmPlexArabic.className} min-h-screen flex flex-col bg-warm-bg text-charcoal selection:bg-sand selection:text-charcoal`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

