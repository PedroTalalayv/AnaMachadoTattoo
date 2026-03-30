import useReveal from '../hooks/useReveal'
import aboutVideo from '../assets/about-video.mp4'

export default function About() {
  const [sectionRef, sectionVisible] = useReveal(0.1)
  const [statsRef, statsVisible] = useReveal(0.3)

  return (
    <section id="sobre" className="py-16 sm:py-24 px-4 sm:px-6" ref={sectionRef}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image placeholder */}
        <div className={`reveal-left ${sectionVisible ? 'visible' : ''}`}>
          <div className="aspect-[3/4] bg-brand-gray border border-white/5 overflow-hidden hover:border-brand-red/20 transition-colors duration-500">
            <video
              src={aboutVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className={`reveal-right ${sectionVisible ? 'visible' : ''}`}>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-4">Sobre mim</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-brand-light mb-6">
            A ARTISTA
          </h2>
          <div
            className="h-px bg-brand-red mb-8 transition-all duration-1000 ease-out"
            style={{ width: sectionVisible ? '4rem' : '0' }}
          />
          <p className="text-brand-muted leading-relaxed mb-6">
            Sou Ana Machado, tatuadora apaixonada pelo estilo Old School. Meu trabalho
            é inspirado na tradição americana de tatuagem, com linhas fortes, cores
            vibrantes e designs que resistem ao tempo.
          </p>
          <p className="text-brand-muted leading-relaxed mb-6">
            Cada tattoo que faço é única e pensada especialmente para você. Acredito que
            a tatuagem é uma forma de arte que conta histórias e expressa quem você é.
          </p>
          <p className="text-brand-muted leading-relaxed mb-8">
            Fã de carteirinha de <span className="text-brand-light font-medium">Bring Me The Horizon</span> — a
            energia do som pesado é combustível pra criatividade. Tatuar ouvindo BMTH
            no último volume é o combo perfeito.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-6" ref={statsRef}>
            {[
              { value: '+500', label: 'Tattoos feitas' },
              { value: '5+', label: 'Anos de exp.' },
              { value: '100%', label: 'Dedicação' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal-scale ${statsVisible ? 'visible' : ''} stagger-${i + 1}`}
              >
                <p className="font-display text-2xl sm:text-3xl text-brand-gold">{stat.value}</p>
                <p className="text-xs uppercase tracking-wider text-brand-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
