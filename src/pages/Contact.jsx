// src/pages/Contact.jsx
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import fondoverde from '../assets/fondoverde.jpg'; 
import imgLogo from '../assets/favicon.png';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const whatsappMessage = `Hola, mi nombre es ${formData.name}. Mi correo es ${formData.email}. Me comunico por lo siguiente: ${formData.message}`;

    
    const whatsappURL = `https://api.whatsapp.com/send?phone=5492646761951&text=${encodeURIComponent(whatsappMessage)}`;

    
    window.open(whatsappURL, '_blank');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white "
      style={{
        backgroundImage: `url(${fondoverde})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no repeat',
      }}
    >
      <div className="container mx-auto text-center justify-center py-16">

        <img src={imgLogo} alt="imagen logo" className='h-24 mx-auto my-4' />

        <h2 className="text-5xl font-bold mb-6 text-black/90">Contactanos</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md  bg-black/95 text-black p-8 rounded-lg shadow-md md:mx-auto mx-2"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-base font-medium text-gray-200 ">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-1"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-base font-medium text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-1"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-base font-medium text-gray-200">
              Mensaje
            </label>
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
            className="w-full flex items-center justify-center bg-lime-500 text-white p-2 font-bold rounded-md hover:bg-lime-400 transition duration-300 "
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
