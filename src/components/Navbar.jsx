// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        <h1 className="text-2xl font-bold text-lime-400 hover:text-white"> ● Condor LAB</h1>
        </Link>
        <div>
          {/* Usa Link en lugar de <a> para manejar las rutas */}
          <Link to="/" className="px-4 py-2 hover:text-lime-400">
            Home
          </Link>
          <Link to="/contact" className="px-4 py-2 hover:text-lime-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
