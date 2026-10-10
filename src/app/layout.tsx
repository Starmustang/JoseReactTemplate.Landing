import React from 'react';
import type { Metadata } from 'next';
import MyApp from './app';
import './globals.css';

const siteUrl = 'https://starmustang.github.io/JoseReactTemplate.Landing';
// The Spanish copy is the canonical metadata (meta.es in locales.ts).
const title = 'N. Florentino software — Menos teléfono, más tiempo con sus pacientes';
const description =
  'Agenda, fichas de pacientes y odontograma en un solo lugar para su consultorio dental. Sus pacientes reservan, cambian o cancelan su cita por Telegram, a cualquier hora y sin llamar.';

export const metadata: Metadata = {
  // Next composes this path with relative metadata URLs, so the GitHub Pages
  // subpath lands in og:image/og:url without hardcoding it twice.
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'N. Florentino software',
    title,
    description,
    locale: 'es_ES',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'N. Florentino software — sistema de gestión para clínicas dentales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <MyApp>{children}</MyApp>
      </body>
    </html>
  );
}
