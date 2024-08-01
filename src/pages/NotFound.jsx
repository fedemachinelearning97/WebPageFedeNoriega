// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">404 - Página No Encontrada</h2>
        <p className='my-6'>Lo sentimos, la página que buscas está en desarrollo o no existe.</p>
        <Link to="/"
          className="bg-lime-500/80 text-white py-3 px-4 shadow-md transition duration-300 hover:bg-lime-500 my-5"
          title="Ir a la ventana Inicio"
        >
          Ir a Inicio
        </Link>
      </div>
      
    </div>
  );
};

export default NotFound;
