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
                    <h1>La fiesta de disfraces más épica del año 🎃👻</h1>
                    {/* <h2>Viernes 31 de Octubre</h2> */}
                    <h2>Fecha por confirmar</h2>
                    <h2>7:00 PM</h2>
                    
                    <Countdown />

                    <a href="#tickets" className="btn-primary">Comprar Entradas</a>


                </div>
                <img src={goDownIcon} alt="Bajar" className="go-down-icon" />
        </section>
    )
}

export default HeroSection