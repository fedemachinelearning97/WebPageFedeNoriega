// src/components/ScrollToTopButton.jsx
import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={scrollToFirstSection}
        className="bg-black text-white/50 p-3 transition duration-300 hover:text-white hover:bg-gray-800 rounded-full shadow-lg"
        title="Volver al inicio"
      >
        <FaArrowUp className="text-2xl" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
