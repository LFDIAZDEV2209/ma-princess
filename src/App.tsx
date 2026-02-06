import { useEffect, useState, useRef } from 'react'
import './App.css'

type Photo = string

interface VideoMemory {
  src: string
  title: string
  description: string
}

const photoGallery: Photo[] = [
  '/2FB6C194-1BA4-4925-9E41-DB74ECC5C12E.jpg',
  '/360AAF4C-C121-4C63-8F34-0EDE227520C4.jpg',
  '/385d67c6-5050-4a83-bdce-c0382307857e.jpg',
  '/4b632239-a55d-4dac-b35a-c51aaab8ea94.jpg',
  '/5261144F-DC5F-4EC3-BFB1-D72214855315.jpg',
  '/5c60f2de-dc67-47d3-ab5c-cc639cdcfe6d.jpg',
  '/953d3adb-f004-4310-86db-24b8279b3f8c.jpg',
  '/A4DE62FA-9B0E-4E21-803F-596E8EDA6B2A.jpg',
  '/bc687fae-dd26-4eb1-b918-2a847c85b96f.jpg',
  '/c655df11-683e-4352-8af0-3b0934045fd5.jpg',
  '/IMG_0626.jpeg',
  '/IMG_0627.jpeg',
  '/IMG_0628.jpeg',
  '/IMG_0629.jpeg',
  '/IMG_0630.jpeg',
  '/IMG_0631.jpeg',
  '/IMG_0632.jpeg',
  '/IMG_0633.jpeg',
  '/IMG_0634.jpeg',
  '/IMG_0635.jpeg',
  '/IMG_0636.jpeg',
  '/IMG_0637.jpeg',
  '/IMG_0638.jpeg',
  '/IMG_0639.jpeg',
  '/IMG_0640.jpeg',
  '/IMG_0641.jpeg',
  '/IMG_0642.jpeg',
  '/IMG_0643.jpeg',
  '/IMG_0644.jpeg',
  '/IMG_0645.jpeg',
  '/IMG_0646.jpeg',
  '/IMG_0647.jpeg',
  '/IMG_0648.jpeg',
  '/IMG_0649.jpeg',
  '/IMG_0650.jpeg',
  '/IMG_0651.jpeg',
  '/IMG_0652.jpeg',
  '/IMG_0653.jpeg',
  '/IMG_0654.jpeg',
  '/IMG_0655.jpeg',
  '/IMG_0656.jpeg',
  '/IMG_0657.jpeg',
  '/IMG_0658.jpeg',
  '/IMG_0659.jpeg',
  '/IMG_0746.jpeg',
  '/IMG_0747.jpeg',
  '/IMG_0753.JPG',
  '/IMG_0754.JPG',
  '/IMG_0755.JPG',
  '/IMG_0756.JPG',
  '/IMG_0757.JPG',
  '/IMG_0758.JPG',
  '/IMG_0759.JPG',
  '/IMG_0760.JPG',
  '/IMG_0761.JPG',
  '/IMG_0762.JPG',
  '/IMG_0763.JPG',
  '/IMG_0764.JPG',
  '/IMG_0765.JPG',
  '/IMG_0766.JPG',
  '/IMG_0767.JPG',
  '/IMG_0768.JPG',
  '/IMG_0769.JPG',
  '/IMG_0771.jpeg',
  '/IMG_1078.jpeg',
  '/IMG_1082.jpeg',
  '/IMG_1086.jpeg',
  '/IMG_1087.jpeg',
  '/IMG_1088.jpeg',
  '/IMG_1091.jpeg',
  '/IMG_1092.jpeg',
  '/IMG_1095.jpeg',
  '/IMG_1101.jpeg',
  '/IMG_1103.jpeg',
]

const videoMemories: VideoMemory[] = [
  {
    src: '/0f66d9fae7744b63a1dfb55208148d14.mov',
    title: 'Momentos contigo',
    description: 'Un pequeño instante que guardo en mi corazón.',
  },
  {
    src: '/2a6aa24f-6c94-4e53-846b-e8629da41e51.mp4',
    title: 'Tus risas',
    description: 'Tu sonrisa ilumina incluso la distancia.',
  },
  {
    src: '/4F11B244-F774-4A0F-A964-9D066FA1182A.mp4',
    title: 'Nosotros',
    description: 'Un recuerdo que siempre me hace extrañarte más.',
  },
  {
    src: '/9d4545203a5f4092998884a873a99cd1.mov',
    title: 'Tu esencia',
    description: 'Cada gesto tuyo me recuerda por qué te amo tanto.',
  },
  {
    src: '/ca81e5bc-3185-404c-85c0-ebfd868f0be3.mp4',
    title: '1st date',
    description: 'Para mi fue perfecta como todas.',
  },
  {
    src: '/d0abe149-9c7d-4faf-b41c-c35d46c9dc13.mp4',
    title: 'Como me tienes',
    description: 'Porque contigo vuelvo a nacer y ser niño de nuevo... Tu niño.',
  },
  {
    src: '/IMG_0770.MOV',
    title: 'Un momento especial',
    description: 'Las mejores fiestas son contigo.',
  },
  {
    src: '/v09044g40000ctddhi7og65hh0slbdv0.mp4',
    title: 'Señales',
    description: 'Vi este tik tok cuando estaba soltero y tenia razon.',
  }
]

const lovePhrases: string[] = [
  'La distancia entre Sincelejo y Barranquilla se hace pequeña cuando pienso en ti, mi princesita',
  'Todo lo que hago y lo que soy ahora es por ti, mi vida.',
  'Gracias por la oportunidad de permanecer a tu lado, incluso cuando el mapa dice que estamos lejos.',
  'Te amo. Solo a ti. Cerca, lejos, como sea.',
  'La distancia no significa nada cuando tú lo significas todo.',
  'Es asombroso lo lejos que estás y lo cerca que te siento.',
  'Cada kilómetro que nos separa se convierte en un lazo más fuerte que nos une.',
  'Nuestro amor es la prueba de que los sueños también pueden cruzar ciudades y abrazar corazones.',
  'Si cierro los ojos, ya no hay Barranquilla ni Sincelejo, solo tú y yo.',
  'Algún día, mirarás esta página conmigo al lado y diremos: lo logramos, mi princesa.',
]

const timelineMoments: { title: string; description: string }[] = [
  {
    title: 'Nuestro inicio',
    description:
      'El día en que decidimos apostar por nosotros, sin importar la distancia.',
  },
  {
    title: 'Tus sonrisas eternas',
    description:
      'Cada foto tuya es un recordatorio de que la felicidad tiene tu nombre.',
  },
  {
    title: 'Barranquilla ↔ Sincelejo',
    description:
      'Dos ciudades, un solo corazón. Cada viaje, cada llamada, cada mensaje nos acerca más.',
  },
  {
    title: 'Sueños a futuro',
    description:
      'Soñamos con despertar en la misma ciudad, en la misma casa, en la misma vida.',
  },
]

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [autoplayError, setAutoplayError] = useState(false)

  useEffect(() => {
    const audio = document.getElementById('love-audio') as HTMLAudioElement | null
    if (!audio) return

    audio
      .play()
      .then(() => {
        setIsPlaying(true)
        setAutoplayError(false)
      })
      .catch(() => {
        setAutoplayError(true)
      })
  }, [])

  const togglePlay = () => {
    const audio = document.getElementById('love-audio') as HTMLAudioElement | null
    if (!audio) return

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
          setAutoplayError(false)
        })
        .catch(() => {
          setAutoplayError(true)
        })
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="music-player">
      <audio
        id="love-audio"
        loop
        src="/quedate.mp3"
        preload="metadata"
        onError={(e) => {
          const audio = e.currentTarget
          // Si no encuentra el archivo local, intenta con un enlace alternativo
          // Nota: Descarga "Quedate" de Beéle y guárdalo como "quedate.mp3" en la carpeta public/
          console.warn(
            'No se encontró quedate.mp3 en public/. Por favor, descarga la canción y guárdala como public/quedate.mp3'
          )
        }}
      />
      <button className="music-button" type="button" onClick={togglePlay}>
        {isPlaying ? '⏸ Pausar música' : '▶ Reproducir música'}
      </button>
      {autoplayError && (
        <p className="music-hint">
          Algunos navegadores bloquean la reproducción automática. Toca el botón
          para empezar la música, mi princesa.
        </p>
      )}
    </div>
  )
}

function HeroSection() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="section hero-section" id="hero">
      <div className="hero-content">
        <p className="hero-pretitle fade-in">Desde Barranquilla hasta Sincelejo</p>
        <h1 className="hero-title fade-in-up delay-1">Para mi princesita Shey</h1>
        <p className="hero-subtitle fade-in-up delay-2">
          Esta página es un regalo para recordarte que, aunque la distancia nos
          separe, mi corazón siempre está a tu lado.
        </p>
        <div className="hero-actions fade-in-up delay-3">
          <button
            type="button"
            className="primary-button"
            onClick={() => scrollToId('memories')}
          >
            Ver nuestros recuerdos
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={() => scrollToId('phrases')}
          >
            Leer lo que siento por ti
          </button>
        </div>
        <div className="cities-row fade-in-up delay-4">
          <div className="city-card">
            <span className="city-label">Barranquilla</span>
            <span className="city-note">Donde te pienso cada día</span>
          </div>
          <div className="heart-connection">❤️</div>
          <div className="city-card">
            <span className="city-label">Sincelejo</span>
            <span className="city-note">Donde vive mi princesa</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function DistanceLoveSection() {
  return (
    <section className="section distance-section" id="story">
      <h2 className="section-title fade-in-up">Nuestra historia a distancia</h2>
      <p className="section-text fade-in-up">
        A veces, la vida pone kilómetros de por medio, pero contigo aprendí que
        el amor verdadero no mide distancias, sino ganas. Entre Barranquilla y
        Sincelejo hay rutas, carreteras y ciudades, pero también hay mensajes de
        buenos días, llamadas de madrugada y promesas susurradas.
      </p>
      <p className="section-text fade-in-up">
        Todo lo que hago y lo que soy ahora es por ti, mi vida. Gracias por
        permitirme caminar a tu lado, incluso cuando el camino parece largo.
        Gracias por tu paciencia, por tu ternura, por cada &quot;te amo&quot;
        que cruza el aire para llegar hasta mí.
      </p>
      <p className="section-text fade-in-up">
        Esta página es solo un pequeño reflejo de todo lo que siento por ti,
        mi princesita Shey. Cada foto, cada video y cada palabra que ves aquí
        está pensada para recordarte que eres mi lugar favorito, sin importar la
        ciudad.
      </p>
    </section>
  )
}

interface PhotoGalleryProps {
  photos: Photo[]
}

function LazyImage({
  src,
  alt,
  onClick,
}: {
  src: string
  alt: string
  onClick: () => void
}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: '50px' }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <button
      ref={imgRef}
      type="button"
      className="gallery-item"
      onClick={onClick}
      aria-label="Ver foto ampliada"
    >
      {!isInView && <div className="lazy-placeholder" />}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={isLoaded ? 'loaded' : 'loading'}
        />
      )}
    </button>
  )
}

function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openAt = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
  }

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length)
  }

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  return (
    <section className="section gallery-section" id="memories">
      <h2 className="section-title fade-in-up">Nuestros recuerdos en fotos</h2>
      <p className="section-text fade-in-up">
        Cada una de estas fotos guarda un momento, una risa, una mirada o un
        detalle que me hizo enamorarme aún más de ti.
      </p>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <LazyImage
            key={photo}
            src={photo}
            alt="Recuerdo con mi princesita Shey"
            onClick={() => openAt(index)}
          />
        ))}
      </div>

      {isOpen && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <div className="lightbox-backdrop" onClick={close} />
          <div className="lightbox-content">
            <img
              src={photos[currentIndex]}
              alt="Foto ampliada de un recuerdo con mi princesita Shey"
            />
            <div className="lightbox-controls">
              <button type="button" onClick={showPrev}>
                ⟵ Anterior
              </button>
              <button type="button" onClick={close}>
                Cerrar
              </button>
              <button type="button" onClick={showNext}>
                Siguiente ⟶
              </button>
            </div>
            <p className="lightbox-caption">
              Foto {currentIndex + 1} de {photos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

interface VideoMemoriesProps {
  videos: VideoMemory[]
}

function VideoMemories({ videos }: VideoMemoriesProps) {
  return (
    <section className="section video-section" id="videos">
      <h2 className="section-title fade-in-up">Momentos en movimiento</h2>
      <p className="section-text fade-in-up">
        A veces las palabras no alcanzan, y por eso existen estos videos: para
        volver a verte, escucharte y sentir que estás un poquito más cerca.
      </p>
      <div className="video-grid">
        {videos.map((video, idx) => (
          <article
            key={video.src}
            className="video-card fade-in-up"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <video
              src={video.src}
              controls
              preload="metadata"
              className="video-player"
            />
            <h3 className="video-title">{video.title}</h3>
            <p className="video-description">{video.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

interface LovePhrasesCarouselProps {
  phrases: string[]
}

function LovePhrasesCarousel({ phrases }: LovePhrasesCarouselProps) {
  const [index, setIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (phrases.length === 0) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length)
        setIsTransitioning(false)
      }, 300)
    }, 6000)

    return () => {
      clearInterval(interval)
    }
  }, [phrases.length])

  if (phrases.length === 0) {
    return null
  }

  return (
    <section className="section phrases-section" id="phrases">
      <h2 className="section-title fade-in-up">Lo que siento por ti</h2>
      <p className="section-text fade-in-up">
        Podría escribir mil páginas y aún así no sería suficiente para
        explicarte todo lo que significas para mí, pero lo intentaré con estas
        palabras.
      </p>
      <div className="phrases-carousel">
        <p
          key={index}
          className={`phrase-item ${isTransitioning ? 'fade-out' : 'fade-in'}`}
        >
          {phrases[index]}
        </p>
        <p className="phrase-indicator">
          {index + 1} / {phrases.length}
        </p>
      </div>
    </section>
  )
}

function TimelineMoments() {
  return (
    <section className="section timeline-section" id="timeline">
      <h2 className="section-title fade-in-up">Nuestra pequeña línea de tiempo</h2>
      <p className="section-text fade-in-up">
        Nuestro amor no se mide en días, meses o años, sino en todos los
        instantes en los que decidimos elegirnos a pesar de la distancia.
      </p>
      <div className="timeline">
        {timelineMoments.map((moment, idx) => (
          <div
            key={moment.title}
            className="timeline-item fade-in-up"
            style={{ animationDelay: `${idx * 0.15}s` }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3 className="timeline-title">{moment.title}</h3>
              <p className="timeline-description">{moment.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function FooterLove() {
  return (
    <footer className="footer">
      <p className="footer-main">
        Con amor, desde Barranquilla para mi princesita Shey en Sincelejo.
      </p>
      <p className="footer-sub">Forever yours. Always us. Always you.</p>
    </footer>
  )
}

function App() {
  return (
    <div className="app-root">
      <MusicPlayer />
      <HeroSection />
      <DistanceLoveSection />
      <PhotoGallery photos={photoGallery} />
      <VideoMemories videos={videoMemories} />
      <LovePhrasesCarousel phrases={lovePhrases} />
      <TimelineMoments />
      <FooterLove />
    </div>
  )
}

export default App
