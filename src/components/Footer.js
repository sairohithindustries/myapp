import React from 'react';
import { Link } from 'react-router-dom';
import {
  Call02Icon,
  Mail02Icon,
  Location01Icon,
  Award01Icon,
  WhatsappIcon,
  Globe02Icon
} from 'hugeicons-react';
import { COMPANY_INFO, PRODUCTS_LIST, DEVELOPER_INFO } from '../data/productsData';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Top Inquiry Banner */}
        <div className="footer-top-banner">
          <div>
            <h3 className="footer-banner-title">Looking for Bulk or Wholesale Supply?</h3>
            <p className="footer-banner-desc">
              We cater to commercial bakeries, supermarkets, food manufacturers, caterers, and wholesale distributors with customized packaging (25kg & 50kg bags).
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20would%20like%20to%20discuss%20bulk%20supply%20rates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsappIcon size={18} />
              Inquire on WhatsApp
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn btn-dark"
            >
              <Call02Icon size={18} />
              Call Sales Desk
            </a>
          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Company Profile */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div className="footer-logo-badge">
                <img
                  src={`${process.env.PUBLIC_URL}/logo-sri-gold.png`}
                  alt="Sri Gold Logo"
                  style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
              <div>
                <h4 style={{ color: '#FFFFFF', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', margin: 0 }}>
                  {COMPANY_INFO.name}
                </h4>
                <span style={{ color: '#E8B959', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px' }}>
                  {COMPANY_INFO.brand} • FROM FIELD TO FLOUR
                </span>
              </div>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Dedicated to delivering the purest, chemical-free chakki atta, premium refined maida, golden rava varieties, and roasted besan. Direct from farm harvests to your kitchen table.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#E8B959', fontSize: '0.85rem' }}>
              <Award01Icon size={18} />
              <span><strong>FSSAI Lic. No:</strong> {COMPANY_INFO.fssai}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="footer-col-title">Navigation</h5>
            <ul className="footer-links">
              <li><Link to="/myapp">Home</Link></li>
              <li><Link to="/myapp/products">Our Flours & Rava</Link></li>
              <li><Link to="/myapp/recipes">Authentic Recipes</Link></li>
              <li><Link to="/myapp/about">About Sai Rohith Industries</Link></li>
              <li><Link to="/myapp/contact">Contact Us & Location</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h5 className="footer-col-title">Our Products</h5>
            <ul className="footer-links">
              {PRODUCTS_LIST.map((prod) => (
                <li key={prod.id}>
                  <Link to="/myapp/products">
                    {prod.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Factory & Contact */}
          <div>
            <h5 className="footer-col-title">Factory & Office</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Location01Icon size={18} color="#E8B959" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Call02Icon size={18} color="#E8B959" style={{ flexShrink: 0 }} />
                <div>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} style={{ display: 'block' }}>{COMPANY_INFO.phone}</a>
                  <a href={`tel:${COMPANY_INFO.landline}`} style={{ fontSize: '0.85rem', opacity: 0.8 }}>Landline: {COMPANY_INFO.landline}</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail02Icon size={18} color="#E8B959" style={{ flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>FSSAI License: {COMPANY_INFO.fssai}</span>
            <span>•</span>
            <span>Guntakal, Andhra Pradesh</span>
          </div>
        </div>

        {/* Developer Credentials Bar */}
        <div className="footer-dev-bar">
          <div className="footer-dev-left">
            <span>Designed & Developed by</span>
            <a
              href={DEVELOPER_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="dev-company-link"
            >
              {DEVELOPER_INFO.name}
            </a>
          </div>

          <div className="footer-dev-links">
            <a
              href={DEVELOPER_INFO.website}
              target="_blank"
              rel="noopener noreferrer"
              className="dev-link-pill"
              title="Visit Quick Developers Website"
            >
              <Globe02Icon size={14} />
              <span>{DEVELOPER_INFO.displayWebsite}</span>
            </a>

            <a
              href={`tel:${DEVELOPER_INFO.phoneRaw}`}
              className="dev-link-pill"
              title="Call Quick Developers"
            >
              <Call02Icon size={14} />
              <span>{DEVELOPER_INFO.phone}</span>
            </a>

            <a
              href={DEVELOPER_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dev-link-pill dev-link-whatsapp"
              title="Chat with Quick Developers on WhatsApp"
            >
              <WhatsappIcon size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
