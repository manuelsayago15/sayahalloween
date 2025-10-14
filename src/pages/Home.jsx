import { useEffect, useState } from 'react';
import './Home.css';
import HeroSection from './components/HeroSection';
import Tickets from './components/Tickets';
import Cards from './components/cards/Cards';
import Organizers from './components/Organizers';
import CommentsSection from './components/CommentsSection';

const Home = () => {

  return (
    <>
      <HeroSection />

      <Tickets />

      <Cards />

      <Organizers />

      <CommentsSection />
    </>
  )
}

export default Home;
