import React, { useState } from 'react';
import {
  Call02Icon,
  Mail02Icon,
  Location01Icon,
  PackageProcessIcon,
  Clock01Icon,
  WhatsappIcon
} from 'hugeicons-react';
import { COMPANY_INFO, PRODUCTS_LIST } from '../data/productsData';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: 'Wholesale Distributor',
    product: 'Chakki Atta',
    quantity: 'Bulk 25kg / 50kg Bags',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Sai Rohith Industries,
*Name:* ${formData.name || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}
*Business Type:* ${formData.businessType}
*Interested In:* ${formData.product}
*Quantity:* ${formData.quantity}
*Message:* ${formData.message || 'I would like to inquire about pricing and delivery.'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encoded}`, '_blank');
    setFormSubmitted(true);
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    const subject = `Inquiry: ${formData.product} - ${formData.businessType}`;
    const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0ABusiness Type: ${formData.businessType}%0D%0AProduct: ${formData.product}%0D%0AQuantity: ${formData.quantity}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Location01Icon size={16} />
            Connect With Us
          </span>
          <h2 className="section-title">Get In Touch & Visit Our Mill</h2>
          <p className="section-subtitle">
            Whether you are a retail customer, grocery wholesaler, bakery owner, or industrial buyer, we welcome inquiries for supply, distributorship, and plant visits.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Contact Information & Map */}
          <div className="contact-info-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '24px', color: 'var(--text-primary)' }}>
              Sai Rohith Industries
            </h3>

            {/* Address */}
            <div className="contact-item-row">
              <div className="contact-item-icon">
                <Location01Icon size={22} />
              </div>
              <div>
                <div className="contact-item-title">Mill Address</div>
                <div className="contact-item-value">
                  {COMPANY_INFO.address}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item-row">
              <div className="contact-item-icon">
                <Call02Icon size={22} />
              </div>
              <div>
                <div className="contact-item-title">Contact Numbers</div>
                <div className="contact-item-value">
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`}>{COMPANY_INFO.phone}</a>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Office Landline: <a href={`tel:${COMPANY_INFO.landline}`}>{COMPANY_INFO.landline}</a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item-row">
              <div className="contact-item-icon">
                <Mail02Icon size={22} />
              </div>
              <div>
                <div className="contact-item-title">Email Address</div>
                <div className="contact-item-value">
                  <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                </div>
              </div>
            </div>

            {/* FSSAI Certification */}
            <div className="contact-item-row">
              <div className="contact-item-icon">
                <PackageProcessIcon size={22} />
              </div>
              <div>
                <div className="contact-item-title">Food Safety & Licensing</div>
                <div className="contact-item-value">
                  FSSAI License No: <strong>{COMPANY_INFO.fssai}</strong>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="contact-item-row">
              <div className="contact-item-icon">
                <Clock01Icon size={22} />
              </div>
              <div>
                <div className="contact-item-title">Operating & Despatch Hours</div>
                <div className="contact-item-value">
                  Monday – Saturday: 8:00 AM – 7:30 PM<br />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sunday: Despatch by prior appointment</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="map-wrapper">
              <iframe
                src={COMPANY_INFO.mapsUrl}
                allowFullScreen=""
                loading="lazy"
                title="Sai Rohith Industries Mill Location"
              ></iframe>
            </div>

            <div style={{ marginTop: '14px', textAlign: 'right' }}>
              <a
                href={COMPANY_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Open in Google Maps App ↗
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Quick Inquiry Form */}
          <div className="contact-form-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
              Send an Inquiry or Request Quote
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
              Fill in your requirement below and we will get back to you with competitive mill rates and delivery schedules.
            </p>

            {formSubmitted && (
              <div style={{ background: '#E8F5E9', border: '1px solid #C8E6C9', padding: '12px 16px', borderRadius: 'var(--radius-sm)', color: '#2E7D32', marginBottom: '20px', fontSize: '0.9rem' }}>
                ✓ Inquiry window opened! Thank you for connecting with Sai Rohith Industries.
              </div>
            )}

            <form onSubmit={handleWhatsAppSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name / Contact Person *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Reddy"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 98765 43210"
                  required
                  className="form-input"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">You Are A</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Wholesale Distributor">Wholesale Distributor</option>
                    <option value="Retail Grocery Store">Retail Grocery Store</option>
                    <option value="Bakery / Sweet Maker">Bakery / Sweet Maker</option>
                    <option value="Hotel / Restaurant / Caterer">Hotel / Caterer</option>
                    <option value="Home Buyer / Household">Household Buyer</option>
                    <option value="Institutional Buyer">Institutional Buyer</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Primary Product</label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {PRODUCTS_LIST.map((p) => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Multiple Products / Complete Portfolio">Multiple Products</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Quantity Required</label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Sample / Trial Order">Sample / Trial Order</option>
                  <option value="Bulk 25kg / 50kg Bags (100 - 500 kg)">100 – 500 kg</option>
                  <option value="Commercial (1 – 5 Metric Tons)">1 – 5 Metric Tons</option>
                  <option value="Large Wholesale (> 5 Tons)">5+ Metric Tons</option>
                  <option value="Retail Packs for Supermarket">Retail Packs (1kg / 5kg / 10kg)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Specific Requirements / Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Tell us about your delivery location, packaging preference, or any special specifications..."
                  className="form-textarea"
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                <button
                  type="submit"
                  className="btn btn-whatsapp"
                  style={{ flex: 1 }}
                >
                  <WhatsappIcon size={18} />
                  Send via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleMailSubmit}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <Mail02Icon size={18} />
                  Send via Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
