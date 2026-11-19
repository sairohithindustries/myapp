import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Call02Icon,
  Location01Icon,
  Menu01Icon,
  Cancel01Icon,
  WhatsappIcon
} from 'hugeicons-react';
import { COMPANY_INFO } from '../data/productsData';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const isCurrent = (path) => {
    return location.pathname === path || (path === '/myapp' && location.pathname === '/');
  };

  return (
    <header className={`site-header-fixed ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Notification / Trust Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <div className="top-bar-item">
              <span className="fssai-pill">FSSAI: {COMPANY_INFO.fssai}</span>
            </div>
            <div className="top-bar-item">
              <Location01Icon size={14} color="#D89838" />
              <span>Guntakal, Anantapur Dist, AP</span>
            </div>
          </div>
          <div className="top-bar-right">
            <div className="top-bar-item">
              <Call02Icon size={14} color="#D89838" />
              <a href={`tel:${COMPANY_INFO.phoneRaw}`}>{COMPANY_INFO.phone}</a>
            </div>
            <div className="top-bar-item">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#25D366', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}
              >
                <WhatsappIcon size={14} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className="site-navbar">
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <Link to="/myapp" className="brand-logo" onClick={closeMenu} aria-label="Sai Rohith Industries Sri Gold Home">
            <img
              src={`${process.env.PUBLIC_URL}/logo-sri-gold.png`}
              alt="Sri Gold Logo"
              className="brand-logo-img"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            <li className="nav-link-item">
              <Link to="/myapp" className={isCurrent('/myapp') ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/myapp/products" className={isCurrent('/myapp/products') ? 'active' : ''}>
                Our Products
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/myapp/recipes" className={isCurrent('/myapp/recipes') ? 'active' : ''}>
                Recipes
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/myapp/about" className={isCurrent('/myapp/about') ? 'active' : ''}>
                About Us
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/myapp/contact" className={isCurrent('/myapp/contact') ? 'active' : ''}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Quick Actions */}
          <div className="navbar-actions">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20need%20a%20quotation%20for%20bulk%20supply.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              Get Bulk Quote
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <Cancel01Icon size={26} /> : <Menu01Icon size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <Link
            to="/myapp"
            className={isCurrent('/myapp') ? 'active' : ''}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/myapp/products"
            className={isCurrent('/myapp/products') ? 'active' : ''}
            onClick={closeMenu}
          >
            Our Products
          </Link>
          <Link
            to="/myapp/recipes"
            className={isCurrent('/myapp/recipes') ? 'active' : ''}
            onClick={closeMenu}
          >
            Recipes & Inspiration
          </Link>
          <Link
            to="/myapp/about"
            className={isCurrent('/myapp/about') ? 'active' : ''}
            onClick={closeMenu}
          >
            About Us & Milling Craft
          </Link>
          <Link
            to="/myapp/contact"
            className={isCurrent('/myapp/contact') ? 'active' : ''}
            onClick={closeMenu}
          >
            Contact & Location
          </Link>
          <div style={{ paddingTop: '10px', display: 'flex', gap: '10px', flexDirection: 'column' }}>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn btn-secondary btn-sm"
              onClick={closeMenu}
            >
              Call: {COMPANY_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
              onClick={closeMenu}
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-nav-backdrop" onClick={closeMenu}></div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
