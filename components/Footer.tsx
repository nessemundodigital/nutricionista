import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                <i className="ri-leaf-line text-white text-xl"></i>
              </div>
              <div>
                <div className="font-pacifico text-xl text-primary-400">Amanda Vertaso</div>
                <div className="text-sm text-gray-400">Nutricionista</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformando vidas através da alimentação saudável e equilibrada. 
              Atendimento personalizado para seus objetivos de saúde e bem-estar.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/amandavertaso" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a 
                href="https://wa.me/5598912345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <i className="ri-whatsapp-line text-xl"></i>
              </a>
              <a 
                href="mailto:contato@amandavertaso.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <i className="ri-mail-line text-xl"></i>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/depoimentos" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link href="/agendamento" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Agendar Consulta
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-map-pin-line text-primary-400"></i>
                <span className="text-gray-300">São Luís, MA</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-primary-400"></i>
                <span className="text-gray-300">(98) 9 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-primary-400"></i>
                <span className="text-gray-300">contato@amandavertaso.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-global-line text-primary-400"></i>
                <span className="text-gray-300">amandavertaso.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Amanda Vertaso - Nutricionista. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            CRN: 12345 | Desenvolvido com ❤️ para sua saúde
          </p>
        </div>
      </div>
    </footer>
  )
}