import useReveal from '../hooks/useReveal'

const styles = [
  {
    title: 'Old School',
    description: 'O clássico americano: linhas grossas, cores sólidas e designs icônicos como âncora, rosas, águias e corações. Tatuagens que nunca saem de moda.',
    highlight: true,
  },
  {
    title: 'Neo Traditional',
    description: 'Evolução do tradicional com mais detalhes, sombras e uma paleta de cores expandida. Mantendo a essência old school com um toque moderno.',
    highlight: false,
  },
  {
    title: 'Flash Tattoo',
    description: 'Designs prontos exclusivos, criados por mim. Perfeitos para quem quer algo único sem espera. Novos flashs toda semana!',
    highlight: false,
  },
]

export default function Styles() {
  const [titleRef, titleVisible] = useReveal(0.2)
  const [cardsRef, cardsVisible] = useReveal(0.15)

  return (
    <section id="estilos" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 reveal ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-4">Especialidades</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-brand-light mb-4">
            ESTILOS
          </h2>
          <div
            className="h-px bg-brand-red mx-auto transition-all duration-1000 ease-out"
            style={{ width: titleVisible ? '4rem' : '0' }}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6" ref={cardsRef}>
          {styles.map((s, i) => (
            <div
              key={s.title}
              className={`reveal-scale ${cardsVisible ? 'visible' : ''} stagger-${i + 1}`}
            >
              <div
                className={`p-5 sm:p-8 border transition-all duration-500 hover:translate-y-[-4px] h-full ${
                  s.highlight
                    ? 'border-brand-red/40 bg-brand-red/5 hover:border-brand-red/60 hover:bg-brand-red/10'
                    : 'border-white/5 bg-brand-gray/50 hover:border-white/10 hover:bg-brand-gray/80'
                }`}
              >
                {s.highlight && (
                  <span className="text-[10px] uppercase tracking-widest text-brand-red mb-4 block">
                    Especialidade
                  </span>
                )}
                <h3 className="font-display text-2xl tracking-wider text-brand-light mb-4">
                  {s.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
