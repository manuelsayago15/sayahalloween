import { useEffect, useState } from 'react';
import './Home.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Tickets from './components/Tickets';
import Cards from './components/cards/Cards';

const Home = () => {

  return (
    <>
      <HeroSection />

      <Tickets />

      <Cards />
    </>
  )
}

export default Home;
