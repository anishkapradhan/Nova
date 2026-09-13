import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { CadetSessionProvider } from '@/lib/session/CadetSessionContext';

export const metadata: Metadata = {
  title: 'Nova: AstroSpace Hub | Pre-College Aerospace & Astrophysics',
  description:
    'Bridging high school students into collegiate aerospace engineering, observational astronomy, and astrophysics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0b0d17] text-[#f0f2f5]">
        <CadetSessionProvider>{children}</CadetSessionProvider>
      </body>
    </html>
  );
}
