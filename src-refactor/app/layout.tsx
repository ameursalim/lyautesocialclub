import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lyautey Social Club | Padel à Kénitra',
  description: 'Club de padel premium à Kénitra avec terrains professionnels, cours et location d\'équipement',
};

/**
 * Root layout component that wraps all pages
 * Includes font setup, metadata, and theme providers
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
