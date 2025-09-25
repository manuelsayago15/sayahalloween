import Countdown from "./Countdown"

const HeroSection = () => {

    return (
        <section className="hero" id="home">
            <div className="overlay"></div>
                <div className="hero-content">
                    <h1>¡Bienvenidos a SayaHalloween 2025!</h1>
                    <p>La fiesta de disfraces más épica del año 🎃🕷️</p>
                    <h2>Viernes 31 de Octubre</h2>
                    
                    <Countdown />

                    <a href="#tickets" className="btn-primary">Comprar Entradas</a>
                </div>
        </section>
    )
}

export default HeroSection