import React from 'react';
import { Link } from 'react-router-dom';
import {
  Plant01Icon,
  PackageProcessIcon,
  TickDouble04Icon,
  ContainerTruck02Icon,
  Award01Icon,
  WhatsappIcon
} from 'hugeicons-react';
import { COMPANY_INFO } from '../data/productsData';

function About() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Header Banner */}
      <div style={{ background: 'var(--bg-dark)', color: '#FFFFFF', padding: '70px 0 50px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow" style={{ background: 'rgba(232, 185, 89, 0.2)', color: '#E8B959' }}>
            <span>🌾</span>
            About Sai Rohith Industries
          </span>
          <h1 className="section-title light" style={{ fontSize: '3rem', marginBottom: '16px' }}>
            Rooted in Tradition, Powered by Precision
          </h1>
          <p className="section-subtitle" style={{ color: '#D3C9BD' }}>
            From our advanced milling plant in Guntakal, Andhra Pradesh, we bring the pure, unadulterated goodness of Indian grain fields to your table.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '60px' }}>
        {/* Story Section */}
        <div className="about-layout" style={{ marginBottom: '80px' }}>
          <div className="about-media-stack">
            <img
              src="https://i.imgur.com/2AywGtX.jpg"
              alt="Milling Plant and Grain Storage"
              className="about-main-img"
            />
            <div className="about-floating-card">
              <div className="about-floating-card-num">FSSAI</div>
              <div className="about-floating-card-text">
                Certified Food Facility (Lic: {COMPANY_INFO.fssai})
              </div>
            </div>
          </div>

          <div>
            <span className="section-eyebrow">
              <span>🏛️</span>
              Our Story
            </span>
            <h2 className="section-title">
              Purity In Every Grain, Health In Every Home
            </h2>
            <p className="about-paragraph">
              <strong>Sai Rohith Industries</strong> was established in the industrial heart of Guntakal (Plot No 13, APIIC Industrial Area) with a clear objective: to revolutionize the traditional flour milling industry by combining time-tested stone chakki grinding techniques with high-efficiency modern de-stoning, separation, and hygienic packaging lines.
            </p>
            <p className="about-paragraph">
              Marketed under our trusted flagship brand <strong>Sri Gold</strong>, every batch of Chakki Atta, Maida, Bombay Rava, Chiroti Rava, Bansi Rava, Besan, and Idli Rava represents our dedication to uncompromised purity.
            </p>

            <div style={{ background: 'var(--bg-white)', padding: '20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-gold)', marginTop: '24px' }}>
              <div style={{ fontWeight: '700', color: 'var(--primary-hover)', marginBottom: '8px' }}>
                🌟 Our Zero-Compromise Policy:
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <li>✓ Zero chemical whitening agents or synthetic bleaching.</li>
                <li>✓ Temperature-regulated stone chakki milling that prevents heat-damage to nutrients.</li>
                <li>✓ Multi-tier foreign particle removal with precision magnetic traps.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pillars of Excellence */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header">
            <span className="section-eyebrow">
              <Award01Icon size={16} />
              Core Principles
            </span>
            <h2 className="section-title">Why Sai Rohith Industries Stands Apart</h2>
          </div>

          <div className="advantages-grid">
            <div className="advantage-card">
              <div className="advantage-icon-wrapper">
                <Plant01Icon size={34} />
              </div>
              <span className="advantage-badge">Sourcing</span>
              <h3 className="advantage-title">Direct Harvest Sourcing</h3>
              <p className="advantage-desc">
                We select plump, high-protein grains directly from certified agricultural mandis, ensuring farmer-to-consumer authenticity.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-wrapper">
                <PackageProcessIcon size={34} />
              </div>
              <span className="advantage-badge">Milling</span>
              <h3 className="advantage-title">Nutrient-Lock Milling</h3>
              <p className="advantage-desc">
                Slow-rotation stone grinding preserves the essential wheat germ, dietary fiber, vitamins, and natural aroma in every grain.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-wrapper">
                <TickDouble04Icon size={34} />
              </div>
              <span className="advantage-badge">Compliance</span>
              <h3 className="advantage-title">Rigorous FSSAI Standards</h3>
              <p className="advantage-desc">
                From incoming raw wheat to outbound sealed bags, every lot is subjected to strict moisture, gluten, and purity inspections.
              </p>
            </div>

            <div className="advantage-card">
              <div className="advantage-icon-wrapper">
                <ContainerTruck02Icon size={34} />
              </div>
              <span className="advantage-badge">Distribution</span>
              <h3 className="advantage-title">Reliable Logistics Network</h3>
              <p className="advantage-desc">
                Serving bakery chains, retail outlets, caterers, and wholesale dealers across Andhra Pradesh and neighbouring regions.
              </p>
            </div>
          </div>
        </div>

        {/* Factory & Facility Details */}
        <div
          style={{
            background: 'var(--bg-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px',
            border: '1px solid var(--border-light)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '60px'
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-eyebrow">Facility & Operations</span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '16px' }}>
              APIIC Guntakal Plant
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '28px' }}>
              Our milling plant is situated at Plot No 13 in the APIIC Industrial Area of Guntakal, equipped with dedicated bulk storage silos, pneumatic conveyors, automated bag-stitching units, and dust-free packaging bays ensuring high food hygiene.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/myapp/contact" className="btn btn-primary">
                Visit or Schedule Plant Tour
              </Link>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20would%20like%20to%20discuss%20commercial%20orders.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <WhatsappIcon size={18} />
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
