// src/components/Presentation.jsx
import React from 'react';

import presentationImage from '../assets/wallhaven-8odvo2.jpg';

const Presentation = () => {
  return (
    <section
      id="presentation"
      className="h-screen flex items-center justify-center bg-black text-white"
      
    >
      <div className="mx-auto flex flex-col md:flex-row items-center" data-aos="fade-up">
        <div className="text-center md:text-left mx-4 md:mx-none">
          <h1 className="md:text-7xl text-4xl font-bold mb-8 md:ml-10">
            Transformando Desafíos en Oportunidades
          </h1>
          <p className="mb-4 md:ml-10 md:text-l text-lg">
            En el mundo acelerado de hoy, la eficiencia no es solo una ventaja,
            sino una necesidad. Con herramientas de estadística y de tecnología
            ofrecemos soluciones basadas en el uso de datos.
          </p>
        </div>
        <img
          src={presentationImage}
          alt="Presentación"
          className="md:w-1/2 md:min-h-screen hidden md:block "
        />
      </div>

    </section>
  );
};

export default Presentation;
