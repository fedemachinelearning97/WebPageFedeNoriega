// src/components/Services.jsx
import React from 'react';

const Services = ({ scrollToNextSection }) => {
  
  const servicesData = [
    {
      id: 1,
      title: "Captando tus datos y generando información valiosa",
      description:
        "Aprovechamos cada dato de su organización para hacer combustible de productividad. Utilizamos metodologías de limpieza, extracción y transformación. Implementamos sensores adecuados a su industria.",
      image:
        "https://images.pexels.com/photos/6424586/pexels-photo-6424586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Simulación de resultados y escalabilidad",
      description:
        "Generamos modelos de inteligencia artificial para simular distintos escenarios y predecir con fiabilidad. Si obtenemos buenos resultados, construimos agentes inteligentes que automatizan y optimizan tus procesos.",
      image:
        "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Promoviendo el impacto ambiental positivo",
      description:
        "Enfocamos nuestros esfuerzos en mejorar la sostenibilidad y reducir el impacto ambiental.",
      image:
        "https://images.pexels.com/photos/3861976/pexels-photo-3861976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="md:h-screen mx-4 md:mx-none flex flex-col justify-center space-y-10" id="services">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center w-full mb-8">
        Servicios
      </h2>

      <div className="bg-black text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white text-black p-6 shadow-md flex flex-col items-center space-y-6 justify-between"
              data-aos="fade-up"
            >
              <div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:h-48 h-32 object-cover mb-4"
              />
             

              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="">{service.description}</p>
              </div>

              
              <div>
              <button
                onClick={() => scrollToNextSection('contact')}
                className="mt-4 text-lime-600 font-semibold hover:text-lime-400 transition duration-300  "
              >
                Contáctanos
              </button>
              </div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
