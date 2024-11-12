// src/pages/About.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {
  const navigate = useNavigate();

  return (
    <div className="p-8 text-white pt-32 bg-black md:w-10/12 mx-auto space-y-12">
      <h1 className="text-5xl font-bold mb-8 text-center">Quiénes Somos</h1>

      <section className="flex flex-col md:flex-row items-center mb-12 space-y-6 md:space-y-0 md:space-x-8">
        <img src="https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg?" alt="Nuestro equipo" className="md:w-1/2 rounded-lg shadow-lg h-96 object-cover" />
        <div>
          <h2 className="text-4xl font-semibold mb-4">Transformando Desafíos en Oportunidades</h2>
          <p className="text-lg">
            En <span className="font-semibold">Condor LAB</span>, creemos que en el mundo acelerado de hoy, la eficiencia es esencial. Con un equipo de expertos en tecnología y análisis de datos, ayudamos a organizaciones a alcanzar sus metas optimizando cada proceso a través de soluciones personalizadas.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse items-center mb-12 space-y-6 md:space-y-0 md:space-x-8">
        <img src="https://images.pexels.com/photos/7958921/pexels-photo-7958921.jpeg?" alt="Optimización y eficiencia" className="md:w-1/2 rounded-lg shadow-lg h-96 object-cover" />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Nuestra Filosofía</h2>
          <ul className="list-disc ml-6 text-lg space-y-3">
            <li>Innovación Continua: Aprovechamos herramientas de vanguardia para optimizar procesos y resultados.</li>
            <li>Compromiso con la Sostenibilidad: Desarrollamos proyectos con un enfoque de bajo impacto ambiental.</li>
            <li>Resultados Tangibles y Escalables: Creamos soluciones que evolucionan junto con tu organización.</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center mb-12 space-y-6 md:space-y-0 md:space-x-8">
        <img src="https://images.pexels.com/photos/289927/pexels-photo-289927.jpeg?" alt="Sostenibilidad e impacto positivo" className="md:w-1/2 rounded-lg shadow-lg h-96 object-cover" />
        <div>
          <h2 className="text-3xl font-semibold mb-4">¿Por qué Elegir Condor LAB?</h2>
          <ul className="list-disc ml-6 text-lg space-y-3">
            <li>Experiencia en Optimización con resultados medibles.</li>
            <li>Enfoque en Eficiencia Real, con soluciones de automatización y predicción.</li>
            <li>Compromiso con el medio ambiente.</li>
          </ul>
        </div>
      </section>

      <div className="flex justify-center">
        <button
          onClick={() => navigate('/contact')}
          className="px-8 py-3 bg-lime-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-lime-400 transition duration-300"
        >
          Contáctanos Ahora
        </button>
      </div>
    </div>
  );
};

export default About;
