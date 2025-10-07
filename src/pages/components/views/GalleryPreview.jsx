import { Link } from "react-router-dom"
import "./GalleryPreview.css"

const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg"
]

const GalleryPreview = () => {
  return (
    <section className="gallery-preview">
      <h2 className="gallery-title">Revive el SayaHalloween 🎃</h2>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <div key={i} className="gallery-item">
            <img src={src} alt={`Foto ${i + 1} SayaHalloween`} />
            <div className="overlay">
              {/* <span>👻 SayaHalloween</span> */}
            </div>
          </div>
        ))}
      </div>

      <div className="see-more">
        <Link to="/gallery">
        <button className="see-more-btn">
          Ver más fotos
        </button>
        </Link>
      </div>
    </section>
  )
}

export default GalleryPreview
