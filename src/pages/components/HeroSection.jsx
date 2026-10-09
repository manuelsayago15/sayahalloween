import Countdown from "./Countdown"
import goDownIcon from '../../../src/assets/images/go-down-icon.png'

const HeroSection = () => {

    return (
        <section className="hero" id="home">
            <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="hero-video"
                >
                {/* Versión móvil */}
                <source 
                    src="/videos/hero-video-mobile.mp4" 
                    type="video/mp4" 
                    media="(max-width: 767px)" 
                />
                {/* Versión desktop */}
                <source 
                    src="/videos/hero-video.mp4" 
                    type="video/mp4" 
                    media="(min-width: 768px)" 
                />
                Tu navegador no soporta el tag de video.
            </video>
            <div className="overlay"></div>
                <div className="hero-content">
                    <h1>La fiesta más esperada del año 🎃👻</h1>
                    <h2>Viernes 30 de Octubre</h2>
                    <h2>6:30 PM</h2>
                    
                    <Countdown />

                    <a href="#tickets" className="btn-primary">Compra tus entradas aquí</a>


                </div>
                <img src={goDownIcon} alt="Bajar" className="go-down-icon" />
        </section>
    )
}

export default HeroSection