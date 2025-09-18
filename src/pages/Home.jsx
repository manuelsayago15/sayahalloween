import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Countdown placeholder
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Countdown
    const eventDate = new Date('2025-10-31T20:00:00'); // fecha de la fiesta
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;
      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">SayaHalloween</div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#entradas" onClick={() => setMenuOpen(false)}>Entradas</a></li>
          <li><a href="#actividades" onClick={() => setMenuOpen(false)}>Actividades</a></li>
          <li><a href="#faqs" onClick={() => setMenuOpen(false)}>FAQs</a></li>
        </ul>
        <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>
      </nav>

      {/* Hero section */}
      <section className="hero" id="inicio">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>¡Bienvenidos a SayaHalloween 2025!</h1>
          <p>La fiesta de disfraces más épica del año 🎃🕷️</p>

          {/* Countdown */}
          <div className="countdown">
            <span>{timeLeft.days}d</span> :
            <span>{timeLeft.hours}h</span> :
            <span>{timeLeft.minutes}m</span> :
            <span>{timeLeft.seconds}s</span>
          </div>

          <a href="#entradas" className="btn-primary">Comprar Entradas</a>
        </div>
      </section>

      {/* Entradas section */}
      <section className="entradas" id="entradas">
        <h2>Compra tus Entradas</h2>
        <p>Elige tu tipo de entrada y asegura tu lugar en la fiesta más épica del año.</p>

        <div className="entradas-cards">
          <div className="entrada-card">
            <h3>Preventa</h3>
            <p>Acceso al evento, entrada más barata + regalos exclusivos.</p>
            <a href="#" className="btn-primary">Comprar Ahora</a>
          </div>
          <div className="entrada-card">
            <h3>General</h3>
            <p>Acceso al evento, bebidas y pasapalos incluidos.</p>
            <a href="#" className="btn-primary">Comprar Ahora</a>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="cards-section" id="actividades">
        <h2>¿Qué te espera?</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Premios</h3>
            <p>Trofeos y reconocimientos para los mejores disfraces.</p>
          </div>
          <div className="card">
            <h3>Actividades</h3>
            <p>Concursos, trivias y eventos sorpresa toda la noche.</p>
          </div>
          <div className="card">
            <h3>FAQs</h3>
            <p>Resolvemos todas tus dudas antes del evento.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 SayaHalloween. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
