import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amanda Vertaso - Nutricionista | Transforme sua vida através da alimentação saudável',
  description: 'Nutricionista especializada em atendimento personalizado em São Luís, MA. Consultas presenciais e online. Primeira consulta gratuita! Agende agora.',
  keywords: 'nutricionista, alimentação saudável, dieta, emagrecimento, São Luís, consulta nutricional, reeducação alimentar, Amanda Vertaso',
  authors: [{ name: 'Amanda Vertaso' }],
  creator: 'Amanda Vertaso',
  publisher: 'Amanda Vertaso',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://amandavertaso.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Amanda Vertaso - Nutricionista',
    description: 'Transforme sua vida através da alimentação saudável. Nutricionista especializada em atendimento personalizado.',
    url: 'https://amandavertaso.com',
    siteName: 'Amanda Vertaso - Nutricionista',
    images: [
      {
        url: '/logo-512.png',
        width: 512,
        height: 512,
        alt: 'Amanda Vertaso - Nutricionista',
      },
      {
        url: 'https://i.imgur.com/Kg5FYBe.jpeg',
        width: 1200,
        height: 630,
        alt: 'Amanda Vertaso - Nutricionista Profissional',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amanda Vertaso - Nutricionista',
    description: 'Transforme sua vida através da alimentação saudável. Primeira consulta gratuita!',
    images: ['/logo-512.png'],
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
  verification: {
    google: 'google-site-verification-code', // Substitua pelo código real do Google
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo-192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}