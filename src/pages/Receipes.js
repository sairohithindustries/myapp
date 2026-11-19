import React, { useState } from 'react';
import {
  Clock01Icon,
  Restaurant01Icon,
  WhatsappIcon
} from 'hugeicons-react';
import { PRODUCTS_LIST, COMPANY_INFO } from '../data/productsData';

function Receipes() {
  const [selectedProduct, setSelectedProduct] = useState('All');

  const filteredProducts = selectedProduct === 'All'
    ? PRODUCTS_LIST
    : PRODUCTS_LIST.filter((p) => p.name === selectedProduct);

  return (
    <div style={{ background: 'var(--bg-cream-card)', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Page Header */}
      <div style={{ background: 'var(--bg-main)', borderBottom: '1px solid var(--border-light)', padding: '60px 0 40px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">
            <span>🍲</span>
            Kitchen Companion
          </span>
          <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '16px' }}>
            Recipes & Culinary Inspiration
          </h1>
          <p className="section-subtitle">
            Authentic, comforting home dishes and festive sweets crafted to perfection with Sri Gold flours and ravas.
          </p>

          {/* Product Filter Tabs */}
          <div className="products-filter-bar" style={{ marginTop: '30px', marginBottom: 0 }}>
            <button
              className={`filter-btn ${selectedProduct === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedProduct('All')}
            >
              All Recipes
            </button>
            {PRODUCTS_LIST.map((p) => (
              <button
                key={p.id}
                className={`filter-btn ${selectedProduct === p.name ? 'active' : ''}`}
                onClick={() => setSelectedProduct(p.name)}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recipes Showcase Grid */}
      <div className="container" style={{ marginTop: '50px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                background: 'var(--bg-white)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--border-light)',
                padding: '36px',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              {/* Product Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingBottom: '24px', borderBottom: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: '64px', height: '64px', borderRadius: '14px', objectFit: 'cover', border: '2px solid var(--border-gold)' }}
                  />
                  <div>
                    <span className="section-eyebrow" style={{ padding: '2px 8px', fontSize: '0.72rem', margin: 0 }}>
                      {product.category}
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--text-primary)', margin: '4px 0 0 0' }}>
                      {product.name}
                    </h2>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20for%20cooking.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <WhatsappIcon size={16} />
                  Order {product.name} Pack
                </a>
              </div>

              {/* Recipe Cards under this product */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '28px' }}>
                {product.recipes.map((recipe, rIdx) => (
                  <div
                    key={rIdx}
                    style={{
                      background: 'var(--bg-cream-soft)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', color: 'var(--primary-hover)', margin: 0 }}>
                          🍽️ {recipe.name}
                        </h3>
                        <div style={{ display: 'flex', gap: '6px' }}>
                          {recipe.time && (
                            <span className="recipe-meta-tag" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Clock01Icon size={12} />
                              {recipe.time}
                            </span>
                          )}
                          {recipe.serves && (
                            <span className="recipe-meta-tag" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <Restaurant01Icon size={12} />
                              Serves {recipe.serves}
                            </span>
                          )}
                        </div>
                      </div>

                      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '16px' }}>
                        <strong>Step-by-step preparation:</strong><br />
                        {recipe.prep || recipe.Preparation}
                      </p>
                    </div>

                    <div style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600', paddingTop: '10px', borderTop: '1px dashed var(--border-light)' }}>
                      Best made with authentic {product.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Receipes;
