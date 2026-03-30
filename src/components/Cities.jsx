import useReveal from '../hooks/useReveal'

const cities = [
  {
    city: 'Goiânia',
    state: 'GO',
    tag: 'Base fixa',
    description: 'Atendimento contínuo no estúdio. Agende sua sessão a qualquer momento.',
    highlight: true,
  },
  {
    city: 'São Paulo',
    state: 'SP',
    tag: 'Guest spot',
    description: 'Temporadas regulares na capital paulista. Fique de olho nas datas pelo Instagram.',
    highlight: false,
  },
  {
    city: 'Brasília',
    state: 'DF',
    tag: 'Guest spot',
    description: 'Passagens frequentes pela capital federal. Vagas limitadas — garanta a sua com antecedência.',
    highlight: false,
  },
]

export default function Cities() {
  const [titleRef, titleVisible] = useReveal(0.2)
  const [cardsRef, cardsVisible] = useReveal(0.15)

  return (
    <section id="atendimento" className="py-16 sm:py-24 px-4 sm:px-6 bg-brand-dark">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 reveal ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-4">Onde me encontrar</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-brand-light mb-4">
            CIDADES
          </h2>
          <div
            className="h-px bg-brand-red mx-auto transition-all duration-1000 ease-out"
            style={{ width: titleVisible ? '4rem' : '0' }}
          />
          <p className="text-brand-muted mt-6 max-w-lg mx-auto leading-relaxed">
            Atendo em Goiânia e viajo regularmente para São Paulo e Brasília.
            Acompanhe o Instagram para saber as próximas datas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6" ref={cardsRef}>
          {cities.map((c, i) => (
            <div
              key={c.city}
              className={`reveal-scale ${cardsVisible ? 'visible' : ''} stagger-${i + 1}`}
            >
              <div
                className={`p-5 sm:p-8 border transition-all duration-500 hover:translate-y-[-4px] h-full relative overflow-hidden ${
                  c.highlight
                    ? 'border-brand-gold/30 bg-brand-gold/5 hover:border-brand-gold/50'
                    : 'border-white/5 bg-brand-gray/50 hover:border-white/10 hover:bg-brand-gray/80'
                }`}
              >
                {/* Pin icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 mb-4 ${c.highlight ? 'text-brand-gold' : 'text-brand-muted'}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                <span className={`text-[10px] uppercase tracking-widest mb-3 block ${c.highlight ? 'text-brand-gold' : 'text-brand-red'}`}>
                  {c.tag}
                </span>

                <h3 className="font-display text-3xl tracking-wider text-brand-light mb-1">
                  {c.city}
                </h3>
                <p className="text-xs uppercase tracking-wider text-brand-muted mb-4">{c.state}</p>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {c.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-10 reveal ${cardsVisible ? 'visible' : ''}`} style={{ animationDelay: '0.6s' }}>
          <a
            href="https://www.instagram.com/anamachado.ttt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-brand-gold transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Acompanhe as próximas datas no @anamachado.ttt
          </a>
        </div>
      </div>
    </section>
  )
}
