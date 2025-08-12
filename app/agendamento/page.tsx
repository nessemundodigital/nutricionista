'use client'

import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Agendamento() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipoConsulta: 'presencial',
    objetivo: '',
    mensagem: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode integrar com um serviço de agendamento
    console.log('Dados do formulário:', formData)
    alert('Agendamento enviado! Entraremos em contato em breve.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agende sua Consulta
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dê o primeiro passo rumo a uma vida mais saudável. Preencha o formulário 
              abaixo e entraremos em contato para confirmar seu horário.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Formulário */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informações para Agendamento
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="(98) 9 1234-5678"
                  />
                </div>

                <div>
                  <label htmlFor="tipoConsulta" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Consulta *
                  </label>
                  <select
                    id="tipoConsulta"
                    name="tipoConsulta"
                    required
                    value={formData.tipoConsulta}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="presencial">Consulta Presencial</option>
                    <option value="online">Consulta Online</option>
                    <option value="acompanhamento">Acompanhamento Nutricional</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="objetivo" className="block text-sm font-medium text-gray-700 mb-2">
                    Principal Objetivo
                  </label>
                  <input
                    type="text"
                    id="objetivo"
                    name="objetivo"
                    value={formData.objetivo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Ex: Emagrecimento, ganho de massa muscular, melhora da saúde..."
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem Adicional
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Conte um pouco sobre sua rotina, restrições alimentares ou outras informações importantes..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Enviar Solicitação de Agendamento
                </button>
              </form>
            </div>

            {/* Informações Laterais */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informações Importantes
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-time-line text-primary-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Horários de Atendimento</h4>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-map-pin-line text-primary-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Localização</h4>
                      <p className="text-gray-600">São Luís, MA<br />Endereço será informado na confirmação</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="ri-phone-line text-primary-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Contato Direto</h4>
                      <p className="text-gray-600">(98) 9 1234-5678<br />contato@amandavertaso.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Primeira Consulta Gratuita!
                </h3>
                <p className="text-gray-600 mb-4">
                  Sua primeira consulta é por nossa conta! Uma oportunidade para nos conhecermos 
                  e você entender como posso ajudar em sua jornada.
                </p>
                <div className="flex items-center space-x-2 text-primary-600">
                  <i className="ri-gift-line text-xl"></i>
                  <span className="font-semibold">Sem compromisso, sem custo!</span>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  O que levar na consulta?
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-primary-600"></i>
                    <span>Exames recentes (se tiver)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-primary-600"></i>
                    <span>Lista de medicamentos em uso</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-primary-600"></i>
                    <span>Histórico de dietas anteriores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <i className="ri-check-line text-primary-600"></i>
                    <span>Suas dúvidas e objetivos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Alternativo */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prefere falar diretamente?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp para um atendimento mais rápido e personalizado.
          </p>
          <a 
            href="https://wa.me/5598912345678?text=Olá! Gostaria de agendar uma consulta nutricional." 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <i className="ri-whatsapp-line text-2xl"></i>
            <span>Chamar no WhatsApp</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}