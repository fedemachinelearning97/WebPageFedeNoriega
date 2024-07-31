// src/pages/Contact.jsx
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Manejador de cambio para los campos del formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Formatear el mensaje para WhatsApp
    const whatsappMessage = `Hola, mi nombre es ${formData.name}. Mi correo es ${formData.email}.Me comunico por lo siguiente: ${formData.message}`;

    // Construir el enlace de WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=5492646761951&text=${encodeURIComponent(whatsappMessage)}`;

    // Abrir el enlace de WhatsApp en una nueva pestaña
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Contáctame</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white/90 text-black p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input 
              type="text" 
              id="name" 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea 
              id="message" 
              rows="4" 
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full flex items-center justify-center bg-lime-500 text-white p-2 font-bold rounded-md hover:bg-lime-400 transition duration-300"
          >
            <FaWhatsapp className="mr-2" />
            Enviar Mensaje por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
