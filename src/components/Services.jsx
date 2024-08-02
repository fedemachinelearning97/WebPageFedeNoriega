// src/components/Services.jsx
import React from 'react';

import serviceImage1 from '../assets//wallhaven-3zke7ymitad.png';
import serviceImage2 from '../assets/wallhaven-3zke7ymitad.png';
import serviceImage3 from '../assets/wallhaven-3zke7ymitad.png';

const Services = ({ scrollToNextSection }) => {
  return (
    <section className='md:h-screen mx-4 md:mx-none flex-col flex justify-center space-y-10'>
        <h2 className='text-4xl md:text-5xl font-bold text-white text-center w-full flex-row mb-8'>Servicios</h2>
    
    <section
      id="services"
      className=" bg-black text-white flex items-center justify-center mx-4" >
     
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 " >
        <div className="bg-white text-black p-6 shadow-md flex flex-col items-center" data-aos="fade-up">
          <img
            src={serviceImage1}
            alt="Servicio 1"
            className="w-full md:h-48 h-32  object-cover mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">
            Captando tus datos y generando información valiosa
          </h3>
          <p>
            Aprovechamos cada dato de su organización para hacer combustible de
            productividad. Utilizamos metodología de limpieza y extracción y
            transformación. Implementamos sensores adecuados a su industria.
          </p>
        </div>
        <div className="bg-white text-black p-6 shadow-md flex flex-col items-center" data-aos="fade-up">
          <img
            src={serviceImage2}
            alt="Servicio 2"
            className="w-full md:h-48 h-32 object-cover mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">
            Simulación de resultados y escalabilidad
          </h3>
          <p>
            Generamos modelos de inteligencia artificial para simular distintos
            escenarios y predecir con fiabilidad. Si obtenemos buenos
            resultados, construimos agentes inteligentes que automatizan y
            optimizan tus procesos.
          </p>
        </div>
        <div className="bg-white text-black p-6 shadow-md flex flex-col items-center" data-aos="fade-up">
          <img
            src={serviceImage3}
            alt="Servicio 3"
            className="w-full md:h-48 h-32 object-cover mb-4"
          />
          <h3 className="text-2xl font-bold mb-2">
            Promoviendo el impacto ambiental positivo
          </h3>
          <p>
            Enfocamos nuestros esfuerzos en mejorar la sostenibilidad y reducir
            el impacto ambiental.
          </p>
        </div>
      </div>
      </section>
    </section>
  );
};

export default Services;
