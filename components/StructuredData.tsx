import React from 'react'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Amanda Vertaso - Nutricionista",
    "description": "Nutricionista especializada em atendimento personalizado e transformação de vidas através da alimentação saudável.",
    "url": "https://amandavertaso.com",
    "logo": "https://amandavertaso.com/logo-512.png",
    "image": "https://i.imgur.com/Kg5FYBe.jpeg",
    "telephone": "+55-98-91234-5678",
    "email": "contato@amandavertaso.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Luís",
      "addressRegion": "MA",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-2.5307",
      "longitude": "-44.3068"
    },
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 08:00-12:00"
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Debit Card, PIX",
    "currenciesAccepted": "BRL",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Nutricionais",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consulta Presencial",
            "description": "Atendimento completo no consultório com avaliação física e orientação personalizada"
          },
          "price": "150.00",
          "priceCurrency": "BRL"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consulta Online",
            "description": "Atendimento por videoconferência com a mesma qualidade da consulta presencial"
          },
          "price": "120.00",
          "priceCurrency": "BRL"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Acompanhamento Nutricional",
            "description": "Programa mensal de acompanhamento para resultados sustentáveis"
          },
          "price": "300.00",
          "priceCurrency": "BRL"
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Amanda Vertaso",
      "jobTitle": "Nutricionista",
      "description": "Nutricionista com mais de 8 anos de experiência em nutrição clínica",
      "image": "https://i.imgur.com/Kg5FYBe.jpeg"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Maria Silva"
        },
        "reviewBody": "A Amanda mudou completamente minha relação com a comida. Aprendi a comer de forma saudável sem abrir mão do sabor."
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}