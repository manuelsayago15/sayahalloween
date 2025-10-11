import { Link } from "react-router-dom"
import "./GalleryPreview.css"

const images = [
  "/images/galleryPreview/gallery1.jpg",
  "/images/galleryPreview/gallery2.jpg",
  "/images/galleryPreview/gallery3.jpg",
  "/images/galleryPreview/gallery4.jpg",
  "/images/galleryPreview/gallery5.jpg",
  "/images/galleryPreview/gallery6.jpg"
]

const GalleryPreview = () => {
  return (
    <section className="gp-section">
      <h2 className="gp-title">Revive el SayaHalloween 🎃</h2>

      <div className="gp-grid">
        {images.map((src, i) => (
          <div key={i} className="gp-item">
            <img src={src} alt={`Foto ${i + 1} SayaHalloween`} />
            <div className="gp-overlay">
              {/* <span>👻 SayaHalloween</span> */}
            </div>
          </div>
        ))}
      </div>

      <div className="gp-see-more">
        <Link to="/gallery">
        <button className="gp-see-more-btn">
          Ver más fotos
        </button>
        </Link>
      </div>
    </section>
  )
}

export default GalleryPreview
