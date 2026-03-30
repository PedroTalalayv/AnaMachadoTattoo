import useReveal from '../hooks/useReveal'

const allImages = Object.values(
  import.meta.glob('../assets/gallery/*.jpeg', { eager: true, import: 'default' })
)

const row1 = allImages.slice(0, 8)
const row2 = allImages.slice(8, 15)
const row3 = allImages.slice(15)

function MarqueeRow({ images, direction = 'left', duration = 30 }) {
  const doubled = [...images, ...images]
  const animName = direction === 'left' ? 'marquee-left' : 'marquee-right'

  return (
    <div className="overflow-hidden">
      <div
        className="flex gap-2 sm:gap-4 w-max"
        style={{
          animation: `${animName} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 shrink-0 overflow-hidden border border-white/5 group hover:border-brand-red/30 transition-colors duration-500"
          >
            <img
              src={src}
              alt={`Tattoo ${(i % images.length) + 1}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  const [titleRef, titleVisible] = useReveal(0.2)
  const [gridRef, gridVisible] = useReveal(0.05)

  return (
    <section id="galeria" className="py-16 sm:py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 reveal ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-4">Portfólio</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-brand-light mb-4">
            MEUS TRABALHOS
          </h2>
          <div
            className="h-px bg-brand-red mx-auto transition-all duration-1000 ease-out"
            style={{ width: titleVisible ? '4rem' : '0' }}
          />
        </div>
      </div>

      <div
        ref={gridRef}
        className={`space-y-2 sm:space-y-4 reveal ${gridVisible ? 'visible' : ''}`}
      >
        <MarqueeRow images={row1} direction="left" duration={35} />
        <MarqueeRow images={row2} direction="right" duration={30} />
        <MarqueeRow images={row3} direction="left" duration={32} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mt-8 sm:mt-12 reveal ${gridVisible ? 'visible' : ''}`} style={{ animationDelay: '0.4s' }}>
          <a
            href="https://www.instagram.com/anamachado.ttt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 border border-brand-muted text-brand-muted uppercase text-sm tracking-widest hover:border-brand-light hover:text-brand-light hover:scale-105 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
