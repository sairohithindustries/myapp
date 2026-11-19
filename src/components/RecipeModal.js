import React from 'react';
import {
  Cancel01Icon,
  Clock01Icon,
  Restaurant01Icon,
  WhatsappIcon
} from 'hugeicons-react';
import { COMPANY_INFO } from '../data/productsData';

function RecipeModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="recipe-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '56px', height: '56px', borderRadius: '12px', objectFit: 'cover', border: '2px solid #E8B959' }}
            />
            <div>
              <span className="section-eyebrow" style={{ marginBottom: '4px', padding: '2px 10px', fontSize: '0.75rem' }}>
                {product.category}
              </span>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', color: 'var(--text-primary)', margin: 0 }}>
                {product.name} Recipes
              </h3>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <Cancel01Icon size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '16px', lineHeight: '1.5' }}>
            {product.description}
          </p>

          {product.nutrition && (
            <div style={{ marginBottom: '20px', padding: '10px 14px', background: 'var(--bg-cream-card)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)', fontSize: '0.8rem', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span>⚡ <strong>Energy:</strong> {product.nutrition.energy}</span>
              <span>🌾 <strong>Protein:</strong> {product.nutrition.protein}</span>
              <span>🥗 <strong>Fibre:</strong> {product.nutrition.dietaryFibre}</span>
              <span>🧈 <strong>Rotis:</strong> Butter-Soft</span>
            </div>
          )}

          <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '16px' }}>
            Featured Culinary Preparations
          </h4>

          {product.recipes && product.recipes.length > 0 ? (
            product.recipes.map((recipe, idx) => (
              <div key={idx} className="recipe-item-block">
                <div className="recipe-item-header">
                  <div className="recipe-item-title">
                    <span style={{ color: 'var(--primary)', marginRight: '8px' }}>#{idx + 1}</span>
                    {recipe.name}
                  </div>
                  <div className="recipe-meta-tags">
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
                <p className="recipe-prep-text">
                  <strong>Preparation:</strong> {recipe.prep || recipe.Preparation}
                </p>
              </div>
            ))
          ) : (
            <p>No recipes currently listed for this product.</p>
          )}

          {/* Quick Order Footer inside Modal */}
          <div style={{ marginTop: '24px', paddingTop: '18px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Available in: <strong>{product.packSizes ? product.packSizes.join(', ') : '500g, 1kg, 25kg, 50kg'}</strong>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20am%20interested%20in%20ordering%20${encodeURIComponent(product.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <WhatsappIcon size={16} />
              Inquire About {product.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
