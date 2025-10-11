import { useState } from "react";
import "./Gallery.css";

const images = [
  { src: "/images/gallery/photo1.jpg", alt: "Sayahalloween 2024" },
  { src: "/images/gallery/photo2.jpg", alt: "Decoración temática" },
  { src: "/images/gallery/photo3.jpg", alt: "Invitados con disfraces" },
  { src: "/images/gallery/photo4.jpg", alt: "Premiación concurso de disfraces" },
  { src: "/images/gallery/photo5.jpg", alt: "Zona de bebidas y tragos" },
  { src: "/images/gallery/photo6.jpg", alt: "Baile y música con DJ" },
  { src: "/images/gallery/photo7.jpg", alt: "Ambiente tenebroso" },
  { src: "/images/gallery/photo8.jpg", alt: "Premios y sorpresas" },
  { src: "/images/gallery/photo9.jpg", alt: "Decoración de calabazas" },
  { src: "/images/gallery/photo10.jpg", alt: "Bar temático con luces" },
  { src: "/images/gallery/photo11.jpg", alt: "Personajes clásicos de terror" },
  { src: "/images/gallery/photo12.jpg", alt: "Amigos celebrando Halloween" },
  { src: "/images/gallery/photo13.jpg", alt: "Selfies divertidas" },
  { src: "/images/gallery/photo14.jpg", alt: "Luces y efectos especiales" },
  { src: "/images/gallery/photo15.jpg", alt: "Equipo SayaHalloween" },
  { src: "/images/gallery/photo16.jpg", alt: "Decoración con humo y luces" },
  { src: "/images/gallery/photo17.jpg", alt: "Fiesta en su punto máximo" },
  { src: "/images/gallery/photo18.jpg", alt: "Tragos y copas" },
  { src: "/images/gallery/photo19.jpg", alt: "Disfraces creativos" },
  { src: "/images/gallery/photo20.jpg", alt: "Mesa de dulces" },
  { src: "/images/gallery/photo21.jpg", alt: "Decoración gótica" },
  { src: "/images/gallery/photo22.jpg", alt: "Misterio en la oscuridad" },
  { src: "/images/gallery/photo23.jpg", alt: "Luces moradas" },
  { src: "/images/gallery/photo24.jpg", alt: "Fotografía grupal" },
  { src: "/images/gallery/photo25.jpg", alt: "Show con el DJ" },
  { src: "/images/gallery/photo26.jpg", alt: "Parejas disfrazadas" },
  { src: "/images/gallery/photo27.jpg", alt: "Zombies y brujas" },
  { src: "/images/gallery/photo28.jpg", alt: "Baile en grupo" },
  { src: "/images/gallery/photo29.jpg", alt: "Premiación especial" },
  { src: "/images/gallery/photo30.jpg", alt: "Ambiente decorado" },
  { src: "/images/gallery/photo31.jpg", alt: "Luces cálidas" },
  { src: "/images/gallery/photo32.jpg", alt: "Amigos riendo" },
  { src: "/images/gallery/photo33.jpg", alt: "Fogatas y velas" },
  { src: "/images/gallery/photo34.jpg", alt: "Premio del mejor disfraz" },
  { src: "/images/gallery/photo35.jpg", alt: "Vista general del lugar" },
  { src: "/images/gallery/photo36.jpg", alt: "Sombras y luces" },
  { src: "/images/gallery/photo37.jpg", alt: "Cámara y acción" },
  { src: "/images/gallery/photo38.jpg", alt: "Disfraz aterrador" },
  { src: "/images/gallery/photo39.jpg", alt: "Detalles decorativos" },
  { src: "/images/gallery/photo19 - 2.jpg", alt: "Fin de la noche" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

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
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="gallery-img"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <p>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img
            src={selectedImage.src}
            alt={selectedImage.caption}
            className="modal-img"
          />
          <button
            className="modal-close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
