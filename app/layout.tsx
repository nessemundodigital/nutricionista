import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amanda Vertaso - Nutricionista',
  description: 'Transforme sua vida através da alimentação saudável. Nutricionista especializada em atendimento personalizado.',
  keywords: 'nutricionista, alimentação saudável, dieta, emagrecimento, São Luís',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}