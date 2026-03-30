import { useEffect, useState } from 'react'
import heroBg from '../assets/hero-bg.mp4'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        src={heroBg}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-brand-darker z-[5]" />

      {/* Red glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(196,30,58,0.15)_0%,_transparent_70%)] transition-opacity duration-[2000ms]"
        style={{ opacity: loaded ? 1 : 0, animation: loaded ? 'pulse-glow 4s ease-in-out infinite' : 'none' }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <p
          className="text-sm uppercase tracking-[0.4em] text-brand-gold mb-6 transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
          }}
        >
          Tattoo Artist
        </p>

        <h1
          className="font-display text-5xl sm:text-7xl md:text-9xl leading-none tracking-wider text-brand-light mb-4 transition-all duration-1000"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
            transitionDelay: '200ms',
          }}
        >
          ANA MACHADO
        </h1>

        <div
          className="h-px bg-brand-red mx-auto my-8 transition-all duration-1000 ease-out"
          style={{
            width: loaded ? '6rem' : '0',
            transitionDelay: '600ms',
          }}
        />

        <p
          className="text-lg sm:text-xl md:text-2xl font-display tracking-widest text-brand-muted uppercase transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '800ms',
          }}
        >
          Tatuagem Old School
        </p>

        <p
          className="mt-6 text-sm sm:text-base text-brand-muted max-w-lg mx-auto leading-relaxed transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1000ms',
          }}
        >
          Arte na pele com o estilo clássico e atemporal do tradicional americano.
          Cada traço carrega história, cor e personalidade.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1200ms',
          }}
        >
          <a
            href="#contato"
            className="px-8 py-3 bg-brand-red text-white uppercase text-sm tracking-widest hover:bg-brand-red-dark hover:scale-105 transition-all duration-300"
          >
            Agende sua Tattoo
          </a>
          <a
            href="#galeria"
            className="px-8 py-3 border border-brand-muted text-brand-muted uppercase text-sm tracking-widest hover:border-brand-light hover:text-brand-light hover:scale-105 transition-all duration-300"
          >
            Ver Trabalhos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0, transitionDelay: '1600ms' }}
      >
        <span
          className="text-xs uppercase tracking-widest text-brand-light font-medium px-3 py-1 border border-white/20 backdrop-blur-sm bg-white/5 rounded-full"
          style={{ animation: 'scroll-bounce 2s ease-in-out infinite' }}
        >
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-brand-light/50 to-transparent" />
      </div>
    </section>
  )
}
