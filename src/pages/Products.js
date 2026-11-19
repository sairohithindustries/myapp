import React, { useState } from 'react';
import {
  Search01Icon,
  WhatsappIcon,
  BookOpen01Icon,
  Award01Icon,
  Call02Icon
} from 'hugeicons-react';
import { PRODUCTS_LIST, COMPANY_INFO } from '../data/productsData';
import RecipeModal from '../components/RecipeModal';

function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProductForModal, setSelectedProductForModal] = useState(null);
  const [expandedRecipes, setExpandedRecipes] = useState({});
  const [packViews, setPackViews] = useState({});

  const categories = ['All', 'Wheat Flours', 'Rava & Semolina', 'Specialty Flours'];

  const toggleInlineRecipe = (productId) => {
    setExpandedRecipes((prev) => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const filteredProducts = PRODUCTS_LIST.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ background: 'var(--bg-cream-card)', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Products Page Header */}
      <div style={{ background: 'var(--bg-main)', borderBottom: '1px solid var(--border-light)', padding: '60px 0 40px 0', textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">
            <span>🌾</span>
            Pure & Freshly Milled
          </span>
          <h1 className="section-title" style={{ fontSize: '3rem', marginBottom: '16px' }}>
            Our Product Portfolio
          </h1>
          <p className="section-subtitle">
            From traditional stone-ground Chakki Atta to crystalline Rava varieties and aromatic Besan — discover our complete range milled to perfection at Guntakal.
          </p>

          {/* Search & Filter Bar */}
          <div style={{ maxWidth: '640px', margin: '36px auto 0 auto', position: 'relative' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Search by product name (e.g. Atta, Rava, Besan, Maida)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 20px 14px 48px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-gold)',
                  background: 'var(--bg-white)',
                  fontSize: '1rem',
                  boxShadow: 'var(--shadow-sm)',
                  outline: 'none'
                }}
              />
              <div style={{ position: 'absolute', left: '16px', color: 'var(--primary)' }}>
                <Search01Icon size={20} />
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '16px', background: 'transparent', color: 'var(--text-muted)', fontSize: '0.9rem', cursor: 'pointer' }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="products-filter-bar" style={{ marginTop: '24px', marginBottom: '0' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product List Grid */}
      <div className="container" style={{ marginTop: '50px' }}>
        {filteredProducts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-light)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '8px' }}>No products found</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Try adjusting your search query or switching categories.</p>
            <button className="btn btn-primary" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} style={{ marginTop: '16px' }}>
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  background: 'var(--bg-white)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: '320px 1fr',
                  transition: 'all 0.3s ease'
                }}
                className="detailed-product-card"
              >
                {/* Product Image Column */}
                <div style={{ position: 'relative', overflow: 'hidden', minHeight: '300px', background: 'var(--bg-cream-card)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
                  <img
                    src={packViews[product.id] === 'back' && product.backImage ? product.backImage : product.image}
                    alt={product.name}
                    style={{ width: '100%', maxHeight: '280px', objectFit: 'contain', transition: 'transform 0.3s ease' }}
                  />
                  {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                  )}
                  {product.backImage && (
                    <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                      <button
                        type="button"
                        className={`btn btn-sm ${packViews[product.id] !== 'back' ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                        onClick={() => setPackViews((prev) => ({ ...prev, [product.id]: 'front' }))}
                      >
                        Front Pack
                      </button>
                      <button
                        type="button"
                        className={`btn btn-sm ${packViews[product.id] === 'back' ? 'btn-primary' : 'btn-secondary'}`}
                        style={{ fontSize: '0.75rem', padding: '4px 10px' }}
                        onClick={() => setPackViews((prev) => ({ ...prev, [product.id]: 'back' }))}
                      >
                        Nutrition (Back)
                      </button>
                    </div>
                  )}
                </div>

                {/* Product Details Column */}
                <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                      <span className="section-eyebrow" style={{ padding: '3px 10px', fontSize: '0.75rem', margin: 0 }}>
                        {product.category}
                      </span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        Shelf Life: <strong>{product.shelfLife}</strong>
                      </span>
                    </div>

                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {product.name}
                      {product.teluguName && (
                        <span style={{ fontSize: '1rem', fontWeight: 'normal', color: 'var(--primary)', marginLeft: '8px' }}>
                          ({product.teluguName})
                        </span>
                      )}
                    </h2>
                    <div style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem', marginBottom: '14px' }}>
                      {product.tagline}
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: '1.6', marginBottom: '18px' }}>
                      {product.description}
                    </p>

                    {/* Key Attributes */}
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      <div style={{ fontSize: '0.85rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>Grain Source: </span>
                        <strong>{product.grainType}</strong>
                      </div>
                      <div style={{ fontSize: '0.85rem' }}>
                        <span style={{ color: 'var(--text-muted)' }}>FSSAI Grade: </span>
                        <strong>100% Food Safe</strong>
                      </div>
                      {product.motto && (
                        <div style={{ fontSize: '0.85rem', color: 'var(--accent-green)', fontWeight: '600' }}>
                          🌱 {product.motto}
                        </div>
                      )}
                    </div>

                    {/* Nutrition Mini Grid if available */}
                    {product.nutrition && (
                      <div style={{ marginBottom: '18px', padding: '12px 16px', background: '#F8F6EC', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-gold)' }}>
                        <div style={{ fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary-hover)', marginBottom: '8px', letterSpacing: '0.5px' }}>
                          ⚡ Nutritional Facts (Per 100g Approx. Value)
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '8px', fontSize: '0.82rem' }}>
                          <div>Energy: <strong>{product.nutrition.energy}</strong></div>
                          <div>Protein: <strong>{product.nutrition.protein}</strong></div>
                          <div>Dietary Fibre: <strong>{product.nutrition.dietaryFibre}</strong></div>
                          <div>Carbs: <strong>{product.nutrition.carbohydrates}</strong></div>
                          <div>Calcium: <strong>{product.nutrition.calcium}</strong></div>
                          <div>Iron: <strong>{product.nutrition.iron}</strong></div>
                        </div>
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="product-highlights">
                      {product.highlights.map((h, i) => (
                        <span key={i} className="product-pill" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
                          ✓ {h}
                        </span>
                      ))}
                    </div>

                    {/* Pack Sizes */}
                    <div style={{ margin: '16px 0', padding: '12px 16px', background: 'var(--bg-cream-card)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-primary)', marginRight: '8px' }}>
                        Available Pack Sizes:
                      </span>
                      {product.packSizes.map((size, idx) => (
                        <span
                          key={idx}
                          style={{
                            display: 'inline-block',
                            background: 'var(--bg-white)',
                            padding: '3px 8px',
                            marginRight: '6px',
                            borderRadius: '4px',
                            fontSize: '0.8rem',
                            fontWeight: '600',
                            border: '1px solid var(--border-gold)',
                            color: 'var(--primary-hover)'
                          }}
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Recipe Toggle */}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => toggleInlineRecipe(product.id)}
                      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                    >
                      <BookOpen01Icon size={16} />
                      {expandedRecipes[product.id] ? 'Hide Recipes ▲' : `View Recipes (${product.recipes.length}) ▼`}
                    </button>

                    <button
                      className="btn btn-outline btn-sm"
                      style={{ color: 'var(--primary)', borderColor: 'var(--border-gold)' }}
                      onClick={() => setSelectedProductForModal(product)}
                    >
                      Full Recipe Card
                    </button>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20am%20interested%20in%20pricing%20for%20${encodeURIComponent(product.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-sm"
                      style={{ marginLeft: 'auto' }}
                    >
                      <WhatsappIcon size={16} />
                      Inquire on WhatsApp
                    </a>
                  </div>

                  {/* Inline Expanded Recipes */}
                  {expandedRecipes[product.id] && (
                    <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px dashed var(--border-gold)', animation: 'fadeIn 0.3s ease' }}>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', color: 'var(--primary-hover)', marginBottom: '12px' }}>
                        Popular Preparations with {product.name}:
                      </h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                        {product.recipes.map((rec, rIdx) => (
                          <div key={rIdx} className="recipe-item-block" style={{ margin: 0, padding: '14px' }}>
                            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                              🍽️ {rec.name}
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                              {rec.prep || rec.Preparation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bulk Wholesale Guarantee Card */}
        <div
          style={{
            marginTop: '60px',
            background: 'var(--bg-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            border: '2px dashed var(--border-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              <Award01Icon size={18} />
              B2B & Bulk Logistics Desk
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--text-primary)', marginTop: '4px', marginBottom: '8px' }}>
              Custom Milling & White Label Supply Available
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '0.95rem' }}>
              We support bulk dispatches in heavy-duty 25 kg and 50 kg moisture-locked PP bags for commercial bakeries, institutional caterers, and regional distributor networks.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="btn btn-secondary">
              <Call02Icon size={18} />
              Call Bulk Desk
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20would%20like%20to%20request%20wholesale%20bulk%20rates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Request Bulk Rates
            </a>
          </div>
        </div>
      </div>

      {/* Recipe Modal Component */}
      <RecipeModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
      />
    </div>
  );
}

export default Products;
