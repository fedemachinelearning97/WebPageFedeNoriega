// src/App.jsx
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About'; 
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <Router>
      <div className="bg-black text-white mx-none">
        <Navbar />
        <FloatingButton />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
