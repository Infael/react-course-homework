import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '🚗 🚗 🚗',
  description: 'Velocity Vault or something...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="flex flex-col items-center p-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
