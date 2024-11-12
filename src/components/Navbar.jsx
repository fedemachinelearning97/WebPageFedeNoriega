// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black/95 text-white p-4 fixed w-full z-20 py-6 border-b-2 border-lime-400">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        <h1 className="text-2xl font-bold text-lime-400 hover:text-white hover:scale-105 transition duration-300"> ● Condor LAB</h1>
        </Link>
        <div>
          
          <Link to="/" className="px-4 py-2 hover:text-lime-400 hover:bg-neutral-900 transition duration-300">
            Inicio
          </Link>
          <Link to="/about" className="px-4 py-2 hover:text-lime-400 hover:bg-neutral-900  transition duration-300">
            Quienes Somos
          </Link>
          <Link to="/blog" className="px-4 py-2 hover:text-lime-400 hover:bg-neutral-900  transition duration-300">
            Blog
          </Link>


        </div>
        <div>
          
          <Link to="/contact" className="px-4 py-2 hover:text-lime-400 hover:bg-neutral-900  transition duration-300 bg-lime-500">
            Contacto
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
