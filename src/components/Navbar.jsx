import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#estilos', label: 'Estilos' },
    { href: '#atendimento', label: 'Cidades' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-darker/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#"
          className="font-display text-2xl tracking-wider text-brand-gold hover:text-brand-gold-light transition-colors duration-300"
        >
          ANA MACHADO
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-widest text-brand-muted hover:text-brand-light transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-brand-red hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              className="text-sm uppercase tracking-widest px-5 py-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300"
            >
              Agendar
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brand-light"
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 transition-transform duration-300" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0)' }}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-brand-darker/95 backdrop-blur-md border-t border-white/5 px-4 sm:px-6 overflow-hidden transition-all duration-500 ${
          open ? 'max-h-80 pb-6 pt-4 opacity-100' : 'max-h-0 pb-0 pt-0 opacity-0'
        }`}
      >
        <div className="space-y-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm uppercase tracking-widest text-brand-muted hover:text-brand-light transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="block text-sm uppercase tracking-widest px-5 py-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 text-center">
            Agendar
          </a>
        </div>
      </div>
    </nav>
  )
}
