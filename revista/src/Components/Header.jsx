"use client"

import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <h1 className="text-2xl font-bold" style={{ color: "#15274b" }}>
            Revista Proa 2025
          </h1>
        <img
          src="../public/logo-header.png"
          alt=""
          className="w-15 h-7 rounded-lg object-cover"
        />
</div>




          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Juegos olimpicos
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Cocina
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Videojuegos
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              Entretenimiento
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-gray-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Juegos Olimpicos
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Cocina
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Videojuegos
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                Entretenimiento
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
