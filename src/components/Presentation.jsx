// src/components/Presentation.jsx
import React from 'react';

import presentationImage from '../assets/wallhaven-8odvo2.jpg';

const Presentation = () => {
  return (
    <section
      id="presentation"
      className=" h-screen flex items-center justify-center bg-black text-white"
      
    >
      <div className="mx-auto flex flex-col md:flex-row items-center z-10" data-aos="fade-up">
        <div className="md:w-1/2 w-full text-center md:text-left md:mx-0 mx-auto z-10">
          <h1 className="md:text-7xl text-4xl font-bold md:mb-10 mb-16 md:ml-10 uppercase">
            Transformando Desafíos en Oportunidades
          </h1>
          <h2 className='mb-6 md:ml-10 md:text-2xl text-2xl mx-2  pb-2 border-b border-gray-300/70'> Optimización en Sistemas</h2>
          <p className="mt-4 md:ml-10 md:text-lg text-lg mx-3 md:m-0 text-left border-l-4 border-lime-400 pl-4 md:pl-0 md:border-none">
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
      <img
          src={presentationImage}
          alt="Presentación"
          className="absolute justify-start content-start h-screen object-cover block md:hidden z-0 opacity-40 blur-sm"
        />
    </section>
  );
};

export default Presentation;
