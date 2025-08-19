import { useState } from "react"
import "./Navbar.css"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "#", icon: "🧪", text: "Portada" },
    { href: "#", icon: "⚽", text: "Juegos Olímpicos" },
    { href: "#", icon: "🍳", text: "Ciencia en Cocina" },
    { href: "#", icon: "🤖", text: "Tecnología" },
    { href: "#", icon: "🌱", text: "Ecología" },
    { href: "#", icon: "🧠", text: "Neurociencia" },
    { href: "#", icon: "🛰️", text: "Espacio" },
  ]

  return (
    <nav className="labNav">
      {/* Mobile hamburger button */}
      <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
        <span className={`hamburger ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Navigation items */}
      <div className={`nav-items ${isMenuOpen ? "mobile-open" : ""}`}>
        {navItems.map((item, index) => (
          <a key={index} href={item.href} onClick={() => setIsMenuOpen(false)}>
            <span>{item.icon}</span> {item.text}
          </a>
        ))}
      </div>
    </nav>
  )
}
