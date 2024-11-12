// src/pages/Home.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Presentation from '../components/Presentation';
import Introduction from '../components/Introduction';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <div>
      <Presentation />
      <Introduction />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
