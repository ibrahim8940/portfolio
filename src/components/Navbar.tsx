import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { navLinks } from '../data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setIsOpen(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(2,6,23,0.95)' : 'rgba(2,6,23,0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-semibold tracking-tight">
          Ibraheem<span className="gradient-text">Khan</span>
          <span className="text-red-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-500 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-red-600/20 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 right-0 bg-[#0f172a] border-t border-white/10 md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-slate-300 hover:text-white py-2 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-medium text-center mt-2"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  )
}