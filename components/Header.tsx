'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                            <i className="ri-leaf-line text-white text-xl"></i>
                        </div>
                        <div>
                            <div className="font-pacifico text-xl text-primary-700">Amanda Vertaso</div>
                            <div className="text-xs text-gray-600">Nutricionista</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
                            Início
                        </Link>
                        <a
                            href="#servicos"
                            className="text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Serviços
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                            onClick={(e) => e.preventDefault()}
                        >
                            Blog
                        </a>
                        <a
                            href="#depoimentos"
                            className="text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Depoimentos
                        </a>
                        <Link
                            href="/agendamento"
                            className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                        >
                            Agendar Consulta
                        </Link>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors">
                                Início
                            </Link>
                            <a
                                href="#servicos"
                                className="text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMenuOpen(false);
                                    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Serviços
                            </a>
                            <a
                                href="#"
                                className="text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                                onClick={(e) => e.preventDefault()}
                            >
                                Blog
                            </a>
                            <a
                                href="#depoimentos"
                                className="text-gray-700 hover:text-primary-600 transition-colors cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMenuOpen(false);
                                    document.getElementById('depoimentos')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Depoimentos
                            </a>
                            <Link
                                href="/agendamento"
                                className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors text-center"
                            >
                                Agendar Consulta
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}