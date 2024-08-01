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
      className="h-[90vh] flex items-center justify-center bg-black text-white mx-4 md:mx-0"
    >
      <div className="container mx-auto text-center" data-aos="fade-up">
        <h2 className="md:text-5xl text-4xl font-bold mb-6">Contáctame</h2>
        <p className="mb-4 w-11/12 md:w-8/12 mx-auto text-lg">
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
          className="bg-lime-500/80 text-white py-3 px-4 shadow-md transition duration-300 hover:bg-lime-500"
          title="Ir a la ventana de contacto"
        >
          Ir a Contacto
        </Link>

        <h4 className="text-xl font-bold my-6">
          Visita nuestro blog de divulgación de inteligencia artificial
        </h4>

        <Link to="/blog-ia"
          className="bg-white/65 text-black py-2 px-4 shadow-md transition duration-300 hover:bg-white"
          title="Ir a la ventana de blog ia"
        >
          Ir a Blog
        </Link>
        
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
