// src/components/Introduction.jsx
import React from 'react';

import introductionImage from '../assets/dotscolores.png'; // Asegúrate de tener esta imagen

const Introduction = () => {
  return (
    <section
      id="introduction"
      className="h-screen flex items-center justify-center bg-black text-white"
      
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:ml-16" data-aos="fade-up">
        <div className="text-center md:text-left mx-4 md:mx-none">
          <h2 className="md:text-6xl text-4xl font-bold mb-8 ml-4">Introducción</h2>
          <p className="mb-4">
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
          className="w-1/2 h-auto max-h-[85svh]"
        />
      </div>

    </section>
  );
};

export default Introduction;
