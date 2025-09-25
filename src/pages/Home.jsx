import { useEffect, useState } from 'react';
import './Home.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Tickets from './components/Tickets';
import Cards from './components/Cards';

const Home = () => {

  return (
    <div className="home-container">
      <Navbar />

      <HeroSection />

      <Tickets />

      <Cards />

      <footer className="footer">
        <p>© 2025 SayaHalloween. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
