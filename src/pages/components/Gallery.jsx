import { useEffect, useRef, useState } from "react";
import "./Gallery.css";

const images = [
  { src: "/images/gallery/photo41.jpg", alt: "Trofeo 1er lugar Concurso de Disfraces 2025" },
  { src: "/images/gallery/photo42.jpg", alt: "Pirata Vampiro y Akaza en el photocall" },
  { src: "/images/gallery/photo43.jpg", alt: "Foto grupal de disfraces" },
  { src: "/images/gallery/photo44.jpg", alt: "Merlina, Akaza y look gótico" },
  { src: "/images/gallery/photo45.jpg", alt: "Pirata Vampiro y La Máscara" },
  { src: "/images/gallery/photo46.jpg", alt: "Spider-Man Miles Morales y Akaza" },
  { src: "/images/gallery/photo47.jpg", alt: "Foto grupal SayaHalloween 2025" },
  { src: "/images/gallery/photo48.jpg", alt: "Merlina disfrutando la fiesta" },
  { src: "/images/gallery/photo49.jpg", alt: "Toga romana con lentes SayaHalloween" },
  { src: "/images/gallery/photo50.jpg", alt: "Amigos al cierre de la noche" },
  { src: "/images/gallery/photo51.jpg", alt: "Pirata Vampiro y Akaza frente a la decoración" },
  { src: "/images/gallery/photo52.jpg", alt: "Leon y Ada de Resident Evil" },
  { src: "/images/gallery/photo53.jpg", alt: "Reze" },
  { src: "/images/gallery/photo54.jpg", alt: "Merlina y su fiel Dedos" },
  { src: "/images/gallery/photo55.jpg", alt: "Merlina y La Máscara" },
  { src: "/images/gallery/photo56.jpg", alt: "Tanjiro en pose de combate" },
  { src: "/images/gallery/photo57.jpg", alt: "Esqueleto con lentes SayaHalloween y dulces" },
  { src: "/images/gallery/photo58.jpg", alt: "Calavera decorativa" },
  { src: "/images/gallery/photo59.jpg", alt: "Entrega de premio a Tanjiro" },
  { src: "/images/gallery/photo60.jpg", alt: "Leon de Resident Evil y Akaza" },
  { src: "/images/gallery/photo1.jpg", alt: "Foto grupal de invitados disfrazados" },
  { src: "/images/gallery/photo2.jpg", alt: "El Saya con los lentes del SayaHalloween" },
  { src: "/images/gallery/photo3.jpg", alt: "Sombrerero Loco y la Reina de Corazones" },
  { src: "/images/gallery/photo4.jpg", alt: "Thor, Loki, la Reina de Corazones y el Sombrerero Loco" },
  { src: "/images/gallery/photo5.jpg", alt: "Los Locos Addams junto a la Reina de Corazones" },
  { src: "/images/gallery/photo6.jpg", alt: "Duelo entre un Helldiver y la Reina de Corazones" },
  { src: "/images/gallery/photo7.jpg", alt: "Maquillaje de Pinhead con clavos" },
  { src: "/images/gallery/photo8.jpg", alt: "Foto grupal con Heisenberg, Pinhead, Helldiver y el País de las Maravillas" },
  { src: "/images/gallery/photo9.jpg", alt: "Helldiver, Reina de Corazones y Sombrerero Loco en la pista" },
  { src: "/images/gallery/photo10.jpg", alt: "Conejos y Minion posando en el photocall" },
  { src: "/images/gallery/photo11.jpg", alt: "DJ con máscara de conejo y hada en la fiesta" },
  { src: "/images/gallery/photo12.jpg", alt: "Loki y Thor con las armas intercambiadas" },
  { src: "/images/gallery/photo13.jpg", alt: "Bob Ross con su paleta junto a un cuadro embrujado" },
  { src: "/images/gallery/photo14.jpg", alt: "Cleopatra y Helldiver bailando" },
  { src: "/images/gallery/photo15.jpg", alt: "Selfie en el espejo con Pinhead" },
  { src: "/images/gallery/photo16.jpg", alt: "Helldiver y hada" },
  { src: "/images/gallery/photo17.jpg", alt: "Daphne, Heisenberg y Helldiver" },
  { src: "/images/gallery/photo18.jpg", alt: "Cosplay de Helldiver en posición de ataque" },
  { src: "/images/gallery/photo19.jpg", alt: "Esqueletos y calaveras sobre un espejo" },
  { src: "/images/gallery/photo20.jpg", alt: "Calaveras, velas y timbre con ojo embrujado" },
  { src: "/images/gallery/photo21.jpg", alt: "Bruja, monja diabólica y Maléfica" },
  { src: "/images/gallery/photo22.jpg", alt: "Carnicero con cuchillo y monje budista" },
  { src: "/images/gallery/photo23.jpg", alt: "Joker, monje budista y amigo" },
  { src: "/images/gallery/photo24.jpg", alt: "Foto grupal con Luigi, Maléfica, V de Vendetta y una momia" },
  { src: "/images/gallery/photo25.jpg", alt: "Maléfica y monja diabólica" },
  { src: "/images/gallery/photo26.jpg", alt: "Selfie en el espejo: monja diabólica y V de Vendetta" },
  { src: "/images/gallery/photo27.jpg", alt: "Vampiro, vampiresa y diablo" },
  { src: "/images/gallery/photo28.jpg", alt: "Diablo, vampiresa, vampiro, monja diabólica y momia" },
  { src: "/images/gallery/photo29.jpg", alt: "Maquillaje en vivo antes de la fiesta" },
  { src: "/images/gallery/photo30.jpg", alt: "Maléfica sentada con su báculo" },
  { src: "/images/gallery/photo31.jpg", alt: "Maléfica con su capa al viento" },
  { src: "/images/gallery/photo32.jpg", alt: "Maléfica y monja diabólica junto a los globos" },
  { src: "/images/gallery/photo33.jpg", alt: "Maléfica, monje budista y personaje gótico" },
  { src: "/images/gallery/photo34.jpg", alt: "Monje budista y Maléfica" },
  { src: "/images/gallery/photo35.jpg", alt: "Diablo, Maléfica, monje, vampiresa y personaje gótico" },
  { src: "/images/gallery/photo36.jpg", alt: "Catrina y amigos con Spider-Man de fondo" },
  { src: "/images/gallery/photo37.jpg", alt: "Spider-Man sentado en el piso" },
  { src: "/images/gallery/photo38.jpg", alt: "Catrina y su pareja" },
  { src: "/images/gallery/photo39.jpg", alt: "Catrina sonriendo" },
  { src: "/images/gallery/photo40.jpg", alt: "Mesa de tragos con calabazas y mantel ensangrentado" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)
  const touchStartX = useRef(null)
  const isOpen = selectedIndex !== null

  const showPrev = () => setSelectedIndex((i) => (i - 1 + images.length) % images.length)
  const showNext = () => setSelectedIndex((i) => (i + 1) % images.length)
  const closeModal = () => setSelectedIndex(null)

  // Bloquea el scroll de fondo y habilita el teclado mientras el modal está abierto
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") setSelectedIndex((i) => (i - 1 + images.length) % images.length)
      if (e.key === "ArrowRight") setSelectedIndex((i) => (i + 1) % images.length)
      if (e.key === "Escape") setSelectedIndex(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const diff = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(diff) > 50) {
      diff < 0 ? showNext() : showPrev()
    }
    touchStartX.current = null
  }

  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Galería SayaHalloween</h2>
      <p className="gallery-subtitle">
        Revive los mejores momentos de nuestras fiestas más épicas 🎃🦇
      </p>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-card"
            onClick={() => setSelectedIndex(i)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-img"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <p>{img.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="gallery-modal"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            key={selectedIndex}
            src={images[selectedIndex].src}
            alt={images[selectedIndex].alt}
            className="gallery-modal-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="modal-close"
            onClick={closeModal}
          >
            ✕
          </button>
          <button
            className="gallery-modal-nav gallery-modal-prev"
            aria-label="Foto anterior"
            onClick={(e) => { e.stopPropagation(); showPrev() }}
          >
            ‹
          </button>
          <button
            className="gallery-modal-nav gallery-modal-next"
            aria-label="Foto siguiente"
            onClick={(e) => { e.stopPropagation(); showNext() }}
          >
            ›
          </button>
          <span className="gallery-modal-counter">
            {selectedIndex + 1} / {images.length}
          </span>
          <p className="gallery-modal-hint">← Desliza para ver más →</p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
