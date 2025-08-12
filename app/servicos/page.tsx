'use client'

import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Servicos() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meus Serviços
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Atendimento personalizado e especializado para transformar sua relação 
              com a alimentação e alcançar seus objetivos de saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            
            {/* Consulta Presencial */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-user-heart-line text-3xl text-primary-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Consulta Presencial</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Atendimento completo no meu consultório em São Luís, com avaliação física 
                  detalhada, análise de exames laboratoriais e orientação nutricional personalizada.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Avaliação antropométrica completa</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Análise de composição corporal</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Interpretação de exames laboratoriais</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Plano alimentar personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Orientações sobre suplementação</span>
                  </li>
                </ul>
                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <div className="text-2xl font-bold text-primary-600 mb-2">R$ 150,00</div>
                  <div className="text-gray-600">Primeira consulta (90 minutos)</div>
                  <div className="text-sm text-gray-500 mt-2">Retornos: R$ 100,00 (60 minutos)</div>
                </div>
                <Link 
                  href="/agendamento" 
                  className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-block"
                >
                  Agendar Consulta Presencial
                </Link>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Consulta Presencial"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Consulta Online */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Consulta Online"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-vidicon-line text-3xl text-primary-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Consulta Online</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Atendimento por videoconferência com a mesma qualidade da consulta presencial. 
                  Ideal para quem tem agenda corrida ou mora longe do consultório.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Consulta por videochamada</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Análise de exames enviados por e-mail</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Plano alimentar digital personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Acompanhamento via WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Flexibilidade de horários</span>
                  </li>
                </ul>
                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <div className="text-2xl font-bold text-primary-600 mb-2">R$ 120,00</div>
                  <div className="text-gray-600">Primeira consulta (90 minutos)</div>
                  <div className="text-sm text-gray-500 mt-2">Retornos: R$ 80,00 (60 minutos)</div>
                </div>
                <Link 
                  href="/agendamento" 
                  className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-block"
                >
                  Agendar Consulta Online
                </Link>
              </div>
            </div>

            {/* Acompanhamento Nutricional */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-heart-pulse-line text-3xl text-primary-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Acompanhamento Nutricional</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Programa de acompanhamento mensal para garantir que você mantenha o foco 
                  e alcance seus objetivos de forma sustentável.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Consultas mensais de retorno</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Ajustes no plano alimentar</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Suporte via WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Receitas e dicas semanais</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Monitoramento de resultados</span>
                  </li>
                </ul>
                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <div className="text-2xl font-bold text-primary-600 mb-2">R$ 300,00</div>
                  <div className="text-gray-600">Pacote mensal (3 consultas)</div>
                  <div className="text-sm text-gray-500 mt-2">Economia de R$ 100,00</div>
                </div>
                <Link 
                  href="/agendamento" 
                  className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-block"
                >
                  Contratar Acompanhamento
                </Link>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Acompanhamento Nutricional"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/* Planos Alimentares */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Planos Alimentares"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-file-list-3-line text-3xl text-primary-600"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Planos Alimentares Personalizados</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Cardápios elaborados especificamente para suas necessidades, preferências 
                  alimentares e objetivos de saúde.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Cardápio semanal personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Lista de compras organizada</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Receitas saudáveis e práticas</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Opções para diferentes refeições</span>
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-primary-600 mr-3"></i>
                    <span>Adaptação para restrições alimentares</span>
                  </li>
                </ul>
                <div className="bg-primary-50 p-6 rounded-lg mb-6">
                  <div className="text-2xl font-bold text-primary-600 mb-2">R$ 80,00</div>
                  <div className="text-gray-600">Plano alimentar semanal</div>
                  <div className="text-sm text-gray-500 mt-2">Incluso na consulta inicial</div>
                </div>
                <Link 
                  href="/agendamento" 
                  className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors inline-block"
                >
                  Solicitar Plano Alimentar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre os serviços
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Qual a diferença entre consulta presencial e online?
              </h3>
              <p className="text-gray-600">
                A consulta online oferece a mesma qualidade de atendimento, porém por videoconferência. 
                A única diferença é que não é possível realizar medidas antropométricas presenciais, 
                mas você pode enviar suas medidas e fotos para análise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quanto tempo dura cada consulta?
              </h3>
              <p className="text-gray-600">
                A primeira consulta tem duração de 90 minutos para uma avaliação completa. 
                As consultas de retorno duram 60 minutos para acompanhamento e ajustes necessários.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Preciso levar exames na primeira consulta?
              </h3>
              <p className="text-gray-600">
                Não é obrigatório, mas é recomendado trazer exames recentes (até 6 meses) como 
                hemograma, glicemia, colesterol, triglicérides e outros que possam ser relevantes 
                para seu caso.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                O plano alimentar é muito restritivo?
              </h3>
              <p className="text-gray-600">
                Não! Minha abordagem é baseada em reeducação alimentar sustentável. O plano é 
                personalizado considerando suas preferências, rotina e objetivos, sempre priorizando 
                o prazer em comer de forma saudável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para começar sua transformação?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Escolha o serviço ideal para você e dê o primeiro passo rumo a uma vida mais saudável.
          </p>
          <Link 
            href="/agendamento" 
            className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Agendar Minha Consulta
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}