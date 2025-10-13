import { useEffect, useState } from 'react';
import './Home.css';
import HeroSection from './components/HeroSection';
import Tickets from './components/Tickets';
import Cards from './components/cards/Cards';
import Organizers from './components/Organizers';

const Home = () => {

  return (
    <>
      <HeroSection />

      <Tickets />

      <Cards />

      <Organizers />
    </>
  )
}

export default Home;
