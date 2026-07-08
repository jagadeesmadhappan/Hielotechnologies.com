import type { Metadata, Viewport } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { SmoothScroll } from '@/animations/SmoothScroll';
import { BRAND } from '@/lib/site-data';

/* Fonts exposed as CSS variables so Tailwind's font families can reference them. */
const inter = Inter({
  subsets: ['latin'], variable: '--font-inter',
  weight: ['200', '300', '400', '500', '600'], display: 'swap',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'], variable: '--font-mono',
  weight: ['300', '400', '500'], display: 'swap',
});

export const metadata: Metadata = {
  title: `${BRAND.company} — ${BRAND.tagline}`,
  description:
    'Premium AI quantitative research platform for discovering statistically repeatable market behaviour across financial markets.',
  keywords: ['quantitative research', 'AI research', 'pattern discovery', 'machine learning', 'data science', 'HIELO'],
  openGraph: {
    title: `${BRAND.company} — ${BRAND.product}`,
    description: BRAND.tagline,
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#ffffff' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
