// src/components/Introduction.jsx
import React from 'react';

import introductionImage from '../assets/dotscolores.png'; 

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="h-screen flex  bg-black text-white"  >



      <div className="container mx-auto flex flex-col md:flex-row items-center  justify-between" data-aos="fade-up">
        <div className="text-center md:text-left mx-4 md:mx-none">
          <h2 className="md:text-6xl text-4xl font-bold mb-8 ml-4">Introducción</h2>
          <p className="mb-4 text-lg">
            Nos dedicamos a la optimización avanzada y mejora de sistemas.
            Nuestra misión es ayudarte a transformar tu negocio, flujo de
            trabajo o industria mediante soluciones personalizadas que integren
            algoritmos de Machine Learning y Deep Learning para robustecer la
            eficiencia de su organización.
          </p>
        </div>
        <img
          src={introductionImage}
          alt="Introducción"
          className="md:w-1/2 w-2/3 h-auto max-h-[85svh] object-cover mx-auto"
        />
      </div>

    </section>
  );
};

export default Introduction;
