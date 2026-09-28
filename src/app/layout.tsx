import React from 'react';
import type { Metadata } from 'next';
import MyApp from './app';
import './globals.css';

const siteUrl = 'https://starmustang.github.io/JoseReactTemplate.Landing';
const title = 'N. Florentino software — Todo el consultorio. Un solo sistema.';
const description =
  'Sistema de gestión para clínicas dentales: pacientes, doctores, citas, tratamientos y un odontograma interactivo, con bot de Telegram para que el paciente agende solo.';

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
