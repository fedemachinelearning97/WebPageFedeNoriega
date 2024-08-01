// src/components/FloatingButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButton = () => {
  // Número de teléfono y mensaje predeterminado
  const phoneNumber = '+54 9 2646 76-1951';
  const defaultMessage = 'Hola, me gustaría ponerme en contacto contigo.';

  // URL de WhatsApp
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="z-20 fixed bottom-4 right-4 bg-lime-400 text-white p-4 rounded-full shadow-lg hover:bg-lime-500 transition duration-300"
      title="Contáctame por WhatsApp"
    >
      
      <FaWhatsapp className="text-3xl" />
      <span class="animate-ping fixed bottom-4 right-4 bg-green-500 p-3 rounded-full"></span>
    </a>
  );
};

export default FloatingButton;
