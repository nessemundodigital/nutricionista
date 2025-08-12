'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StructuredData from '../components/StructuredData'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      
      {/* Hero Section */}
      <section className="hero-bg h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforme sua vida através da 
              <span className="text-primary-400"> alimentação saudável</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Sou Amanda Vertaso, nutricionista especializada em ajudar você a conquistar 
              seus objetivos de saúde e bem-estar de forma sustentável e prazerosa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/agendamento" 
                className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Agendar Consulta Gratuita
              </Link>
              <a 
                href="https://wa.me/5598912345678" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Conheça a Amanda Vertaso
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Com mais de 8 anos de experiência em nutrição clínica, tenho ajudado 
                centenas de pacientes a transformarem suas vidas através de uma alimentação 
                equilibrada e personalizada.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Acredito que cada pessoa é única e merece um plano nutricional que se adapte 
                ao seu estilo de vida, preferências e objetivos. Minha abordagem combina 
                ciência e praticidade para resultados duradouros.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">Pacientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">8+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
              </div>
              <Link 
                href="/agendamento" 
                className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-block"
              >
                Agendar Primeira Consulta
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://i.imgur.com/Kg5FYBe.jpeg"
                alt="Amanda Vertaso - Nutricionista"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meus Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofereco atendimento personalizado para ajudar você a alcançar seus objetivos de saúde
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-heart-line text-3xl text-primary-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consulta Presencial</h3>
              <p className="text-gray-600 mb-6">
                Atendimento completo no consultório com avaliação física, análise de exames 
                e orientação personalizada.
              </p>
              <Link href="/servicos" className="text-primary-600 font-semibold hover:text-primary-700">
                Saiba mais →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-vidicon-line text-3xl text-primary-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consulta Online</h3>
              <p className="text-gray-600 mb-6">
                Atendimento por videoconferência para sua comodidade, com a mesma qualidade 
                da consulta presencial.
              </p>
              <Link href="/servicos" className="text-primary-600 font-semibold hover:text-primary-700">
                Saiba mais →
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-list-3-line text-3xl text-primary-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Plano Alimentar</h3>
              <p className="text-gray-600 mb-6">
                Cardápio personalizado baseado em suas necessidades, preferências 
                e objetivos específicos.
              </p>
              <Link href="/servicos" className="text-primary-600 font-semibold hover:text-primary-700">
                Saiba mais →
              </Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/servicos" 
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que dizem meus pacientes
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de transformação e sucesso
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Maria Silva"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Maria Silva</div>
                  <div className="text-sm text-gray-600">Perdeu 15kg em 6 meses</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "A Amanda mudou completamente minha relação com a comida. Aprendi a comer 
                de forma saudável sem abrir mão do sabor. Recomendo para todos!"
              </p>
              <div className="flex text-yellow-400 mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80"
                  alt="João Santos"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">João Santos</div>
                  <div className="text-sm text-gray-600">Melhorou diabetes tipo 2</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Profissional excepcional! Com o acompanhamento da Amanda consegui 
                controlar minha diabetes e melhorar muito minha qualidade de vida."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Ana Costa"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Ana Costa</div>
                  <div className="text-sm text-gray-600">Ganhou massa muscular</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Atendimento personalizado e muito atencioso. A Amanda entende as 
                necessidades de cada pessoa e cria planos realmente eficazes."
              </p>
              <div className="flex text-yellow-400 mt-4">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/depoimentos" 
              className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
            >
              Ver Mais Depoimentos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Agende sua consulta gratuita e descubra como posso ajudar você a alcançar 
            seus objetivos de saúde e bem-estar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/agendamento" 
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Agendar Consulta Gratuita
            </Link>
            <a 
              href="https://wa.me/5598912345678" 
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              <i className="ri-whatsapp-line mr-2"></i>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}