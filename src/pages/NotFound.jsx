// src/pages/NotFound.jsx
import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">404 - Página No Encontrada</h2>
        <p>Lo sentimos, la página que buscas está en desarrollo o no existe.</p>
      </div>
    </div>
  );
};

export default NotFound;
