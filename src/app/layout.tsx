import React from 'react';
import type { Metadata } from 'next';
import MyApp from './app';
import './globals.css';

export const metadata: Metadata = {
  title: 'N. Florentino software — Todo el consultorio. Un solo sistema.',
  description:
    'Sistema de gestión para clínicas dentales: pacientes, doctores, citas, tratamientos y un odontograma interactivo, con bot de Telegram para que el paciente agende solo.',
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
