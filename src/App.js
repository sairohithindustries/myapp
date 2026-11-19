import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import Receipes from './pages/Receipes';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-main)' }}>
        {/* Sticky Professional Navbar */}
        <Navbar />

        {/* Dynamic Page Routes */}
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myapp" element={<Home />} />
            <Route path="/myapp/products" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/myapp/contact" element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/myapp/about" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/myapp/recipes" element={<Receipes />} />
            <Route path="/recipes" element={<Receipes />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Help Button */}
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
