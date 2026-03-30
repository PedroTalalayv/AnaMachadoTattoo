import useReveal from '../hooks/useReveal'

const tracks = [
  { title: 'Drag Path', artist: 'Twenty One Pilots', url: 'https://open.spotify.com/track/0TlcczkVTGpinpkGJpT81L', cover: 'https://i.scdn.co/image/ab67616d00001e02b5b991fd65053a3acb8c2db2' },
  { title: 'Doomed', artist: 'Bring Me The Horizon', url: 'https://open.spotify.com/track/3lPn81PFyKvXiyHhlkwkQ4', cover: 'https://i.scdn.co/image/ab67616d00001e0290b88187a9831d91f2438927' },
  { title: 'Everything Ends', artist: 'Architects', url: 'https://open.spotify.com/track/3yC1soClolbb2jFH7XIPqd', cover: 'https://i.scdn.co/image/ab67616d00001e02fa9cf0435132ff2a17ce9d86' },
  { title: 'Glass Houses', artist: 'Bad Omens', url: 'https://open.spotify.com/track/5isGPubntLfwqe1C8FYyrQ', cover: 'https://i.scdn.co/image/ab67616d00001e022c5d741251ae833b8c9d47d8' },
  { title: 'Better Off This Way', artist: 'A Day To Remember', url: 'https://open.spotify.com/track/5TtOrriDfiamVEKrls2GIT', cover: 'https://i.scdn.co/image/ab67616d00001e02d2477f14fcb48c2a3043afdb' },
  { title: 'Perfect World', artist: 'Simple Plan', url: 'https://open.spotify.com/track/7IDJONKGKDZVoLOGd5221L', cover: 'https://i.scdn.co/image/ab67616d00001e026cb8cbc645eebdfc0ebffa72' },
  { title: "Diamonds Aren't Forever", artist: 'Bring Me The Horizon', url: 'https://open.spotify.com/track/4S18jumfuq7s3UKZSYGxC6', cover: 'https://i.scdn.co/image/ab67616d00001e02a78c069031d4774b4eeba639' },
]

export default function Playlist() {
  const [titleRef, titleVisible] = useReveal(0.2)
  const [listRef, listVisible] = useReveal(0.1)

  return (
    <section id="playlist" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-12 sm:mb-16 reveal ${titleVisible ? 'visible' : ''}`} ref={titleRef}>
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold mb-4">Som do estúdio</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider text-brand-light mb-4">
            NA PLAYLIST
          </h2>
          <div
            className="h-px bg-brand-red mx-auto transition-all duration-1000 ease-out"
            style={{ width: titleVisible ? '4rem' : '0' }}
          />
          <p className="text-brand-muted mt-6 max-w-md mx-auto leading-relaxed text-sm sm:text-base">
            As músicas que tocam enquanto a agulha trabalha. Se você curte um som
            pesado, vai se sentir em casa.
          </p>
        </div>

        <div className="space-y-0 border border-white/5 overflow-hidden" ref={listRef}>
          {tracks.map((track, i) => (
            <div
              key={track.title}
              className={`reveal-scale ${listVisible ? 'visible' : ''} stagger-${i + 1}`}
            >
              <a href={track.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 sm:gap-5 px-4 sm:px-6 py-4 hover:bg-white/[0.03] transition-colors duration-300 border-b border-white/5 last:border-b-0 group no-underline">
                {/* Track number */}
                <span className="text-xs text-brand-muted font-mono w-5 shrink-0 text-right">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Album cover */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 overflow-hidden border border-white/5 group-hover:border-brand-red/30 transition-colors duration-300">
                  <img
                    src={track.cover}
                    alt={track.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Track info */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-brand-light truncate group-hover:text-white transition-colors duration-300">
                    {track.title}
                  </p>
                  <p className="text-xs text-brand-muted truncate">{track.artist}</p>
                </div>

                {/* Spotify icon */}
                <svg className="w-4 h-4 shrink-0 text-brand-muted group-hover:text-[#1db954] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
