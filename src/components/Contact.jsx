// src/components/Contact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';
import contactImage from '../assets/dotscolores.png'; // Asegúrate de tener una imagen en la carpeta assets

const Contact = () => {
  // Función para desplazar al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Función para desplazar a la sección de contacto
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      className="h-screen flex items-center justify-center bg-black text-white"
    >
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-4">Contáctame</h2>
        <p className="mb-4 w-10/12 mx-auto">
          Solo un mensaje y te contaremos cómo nuestras soluciones pueden
          transformar tu negocio y llevarlo al siguiente nivel de eficiencia y
          eficacia.
        </p>
        <img
          src={contactImage}
          alt="Imagen de contacto"
          className="h-48 mx-auto mb-4"
        />
        <Link to="/contact"
          onClick={scrollToContact}
          className="bg-lime-500 text-white p-3 rounded-full shadow-md transition duration-300 hover:bg-lime-600"
          title="Ir a la ventana de contacto"
        >
          Ir a Contacto
        </Link>

        <h3 className="text-2xl font-bold mt-4">
          Visita nuestro blog de divulgación de inteligencia artificial
        </h3>
        
      </div>

      {/* Botón flotante de navegación */}
      <div className="hidden md:flex flex-col absolute left-4 items-center">
        <button
          onClick={scrollToTop}
          className="bg-black text-white/50 p-3 transition duration-300 hover:text-white"
          title="Ir al comienzo"
        >
          <FaArrowUp className="text-4xl" />
          <span className="block text-xs mt-1">Inicio</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
