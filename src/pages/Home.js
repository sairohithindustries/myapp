import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Plant01Icon,
  PackageProcessIcon,
  TickDouble04Icon,
  ContainerTruck02Icon,
  Call02Icon,
  WhatsappIcon,
  Award01Icon,
  ArrowRight01Icon,
  StarIcon,
  CheckmarkCircle02Icon
} from 'hugeicons-react';
import {
  COMPANY_INFO,
  ADVANTAGES_DATA,
  PRODUCTS_LIST,
  PROCESS_STEPS,
  TESTIMONIALS
} from '../data/productsData';
import RecipeModal from '../components/RecipeModal';
import Contact from './Contact';

function Home() {
  const fullText = "FROM FIELD TO FLOUR";
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProductForRecipe, setSelectedProductForRecipe] = useState(null);

  // Typewriter effect
  useEffect(() => {
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText((prev) => prev + fullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      }, 90);
      return () => clearTimeout(timer);
    }
  }, [charIndex, fullText]);

  // Categories
  const categories = ["All", "Wheat Flours", "Rava & Semolina", "Specialty Flours"];

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS_LIST
    : PRODUCTS_LIST.filter((p) => p.category === activeCategory);

  const getAdvantageIcon = (iconName) => {
    switch (iconName) {
      case 'Plant01Icon': return <Plant01Icon size={34} />;
      case 'PackageProcessIcon': return <PackageProcessIcon size={34} />;
      case 'TickDouble04Icon': return <TickDouble04Icon size={34} />;
      case 'ContainerTruck02Icon': return <ContainerTruck02Icon size={34} />;
      default: return <Plant01Icon size={34} />;
    }
  };

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="https://i.imgur.com/2AywGtX.jpg"
            alt="Golden wheat harvest and fresh flour milling"
          />
        </div>
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-pill" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={`${process.env.PUBLIC_URL}/logo-sri-gold.png`}
              alt="Sri Gold"
              style={{ height: '24px', width: 'auto', objectFit: 'contain' }}
            />
            <span>{COMPANY_INFO.name} • {COMPANY_INFO.brand}</span>
          </div>

          <h1 className="hero-title">
            {typedText}
            <span className="cursor-blink">|</span>
          </h1>

          <p className="hero-description">
            Nourishing families and culinary businesses with farm-selected grains, cold stone chakki milling, and pure, chemical-free Chakki Atta, Maida, Besan, and Rava varieties.
          </p>

          <div className="hero-ctas">
            <a href="#featured-products" className="btn btn-primary btn-lg">
              Explore Our Products
              <ArrowRight01Icon size={18} />
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20am%20interested%20in%20bulk%20supply.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <WhatsappIcon size={20} />
              Instant WhatsApp Inquiry
            </a>
            <a href="#about-story" className="btn btn-outline btn-lg">
              Our Milling Craft
            </a>
          </div>

          {/* Quick Floating Trust Stats */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <div className="hero-stat-number">100%</div>
              <div className="hero-stat-label">Natural & Pure Grains</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">7+</div>
              <div className="hero-stat-label">Flour & Rava Varieties</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">FSSAI</div>
              <div className="hero-stat-label">Certified Facility</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">B2B & Retail</div>
              <div className="hero-stat-label">Bulk 50kg & Consumer Packs</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADVANTAGES SECTION */}
      <section className="advantages-section" id="advantages">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <Award01Icon size={16} />
              Why Choose Sri Gold
            </span>
            <h2 className="section-title">The Sai Rohith Promise</h2>
            <p className="section-subtitle">
              We uphold uncompromising standards of hygiene, seed selection, and precision milling to deliver farm-fresh goodness to your kitchen.
            </p>
          </div>

          <div className="advantages-grid">
            {ADVANTAGES_DATA.map((item) => (
              <div key={item.id} className="advantage-card">
                <div className="advantage-icon-wrapper">
                  {getAdvantageIcon(item.icon)}
                </div>
                <span className="advantage-badge">{item.badge}</span>
                <h3 className="advantage-title">{item.title}</h3>
                <p className="advantage-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SHOWCASE SECTION */}
      <section className="products-section" id="featured-products">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <span>🌾</span>
              Farm-Fresh Offerings
            </span>
            <h2 className="section-title">Our Premium Products</h2>
            <p className="section-subtitle">
              Every grain is sorted, cleaned, and milled to culinary perfection. Click any product to explore authentic recipes or inquire for bulk orders.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="products-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-img-wrap">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  {product.badge && (
                    <span className="product-badge">{product.badge}</span>
                  )}
                </div>

                <div className="product-card-body">
                  <span className="product-category-tag">{product.category}</span>
                  <h3 className="product-card-title">{product.name}</h3>
                  <p className="product-card-desc">{product.description}</p>

                  <div className="product-highlights">
                    {product.highlights && product.highlights.map((h, i) => (
                      <span key={i} className="product-pill">✓ {h}</span>
                    ))}
                  </div>

                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                    Available packs: <strong>{product.packSizes.slice(0, 3).join(', ')}...</strong>
                  </div>

                  <div className="product-card-footer">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedProductForRecipe(product)}
                    >
                      View Recipes ({product.recipes ? product.recipes.length : 0})
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20would%20like%20to%20order/inquire%20about%20${encodeURIComponent(product.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/myapp/products" className="btn btn-secondary btn-lg">
              View Detailed Product Specs & Packaging Sizes
              <ArrowRight01Icon size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. THE MILLING PROCESS (FROM FIELD TO FLOUR) */}
      <section className="process-section" id="process">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow" style={{ background: 'rgba(232, 185, 89, 0.15)', color: '#E8B959' }}>
              <span>⚙️</span>
              Milling Excellence
            </span>
            <h2 className="section-title light">The Journey From Field to Flour</h2>
            <p className="section-subtitle" style={{ color: '#D3C9BD' }}>
              How we transform raw agricultural harvests into wholesome, aromatic flours that delight millions of meals.
            </p>
          </div>

          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} className="process-card">
                <div className="process-step-num">{step.step}</div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRAND STORY & ABOUT US PREVIEW */}
      <section className="about-section" id="about-story">
        <div className="container">
          <div className="about-layout">
            <div className="about-media-stack">
              <img
                src="https://i.imgur.com/2AywGtX.jpg"
                alt="Sai Rohith Industries Facility and Grain Storage"
                className="about-main-img"
              />
              <div className="about-floating-card">
                <div className="about-floating-card-num">FSSAI</div>
                <div className="about-floating-card-text">
                  Licensed & Hygienically Certified (Lic: {COMPANY_INFO.fssai})
                </div>
              </div>
            </div>

            <div className="about-text-content">
              <span className="section-eyebrow">
                <span>🌾</span>
                Our Heritage & Roots
              </span>
              <h2 className="section-title">
                Milling Purity in Guntakal Since Inception
              </h2>
              <p className="about-paragraph">
                Located strategically at the APIIC Industrial Area in Guntakal, Andhra Pradesh, <strong>Sai Rohith Industries</strong> was founded on a simple, timeless mission: to bridge fertile grain farms with modern families and culinary entrepreneurs who value uncompromised flour quality.
              </p>
              <p className="about-paragraph">
                Under our flagship brand <strong>Sri Gold</strong>, we utilize advanced stone chakki units and multistage cleaning lines that retain vital wheat germ and dietary fiber. We never use chemical whiteners or synthetic additives.
              </p>

              <ul className="about-checklist">
                <li className="about-check-item">
                  <CheckmarkCircle02Icon size={20} className="about-check-icon" />
                  <span>100% Unadulterated Grains</span>
                </li>
                <li className="about-check-item">
                  <CheckmarkCircle02Icon size={20} className="about-check-icon" />
                  <span>Cold Stone-Chakki Process</span>
                </li>
                <li className="about-check-item">
                  <CheckmarkCircle02Icon size={20} className="about-check-icon" />
                  <span>Custom B2B Bulk Packing (50kg)</span>
                </li>
                <li className="about-check-item">
                  <CheckmarkCircle02Icon size={20} className="about-check-icon" />
                  <span>Reliable Rayalaseema Delivery</span>
                </li>
              </ul>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/myapp/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="btn btn-secondary"
                >
                  <Call02Icon size={18} />
                  Speak with Plant Manager
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RECIPE INSPIRATION PREVIEW */}
      <section className="recipes-section" id="recipes">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <span>🍲</span>
              Culinary Delights
            </span>
            <h2 className="section-title">What Can You Make With Sri Gold?</h2>
            <p className="section-subtitle">
              From everyday soft phulkas to festive Mysore Pak, crispy rava dosas, and fluffy idlis — our flours bring authentic regional flavors to life.
            </p>
          </div>

          <div className="recipes-grid">
            <div className="recipe-feature-card">
              <span className="recipe-feature-product">Chakki Atta</span>
              <h3 className="recipe-feature-name">Soft Phulkas & Rotis</h3>
              <p className="recipe-feature-snippet">
                Our stone-ground atta locks in natural moisture, creating chapatis and phulkas that balloon effortlessly on the flame and stay soft even when packed in lunchboxes.
              </p>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedProductForRecipe(PRODUCTS_LIST[0])}
              >
                View Full Recipe
              </button>
            </div>

            <div className="recipe-feature-card">
              <span className="recipe-feature-product">Bombay Rava</span>
              <h3 className="recipe-feature-name">Crispy Golden Rava Dosa</h3>
              <p className="recipe-feature-snippet">
                With perfectly calibrated semolina granules, get that delicate, golden lacy texture with cumin, green chillies, and freshly grated coconut.
              </p>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedProductForRecipe(PRODUCTS_LIST[2])}
              >
                View Full Recipe
              </button>
            </div>

            <div className="recipe-feature-card">
              <span className="recipe-feature-product">Besan Flour</span>
              <h3 className="recipe-feature-name">Desi Ghee Besan Ladoo</h3>
              <p className="recipe-feature-snippet">
                100% pure roasted Bengal gram flour creates fragrant, melt-in-the-mouth ladoos infused with pure ghee, sugar, and cardamom powder.
              </p>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setSelectedProductForRecipe(PRODUCTS_LIST[5])}
              >
                View Full Recipe
              </button>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/myapp/recipes" className="btn btn-secondary btn-lg">
              Explore All 14+ Recipes & Cooking Instructions
              <ArrowRight01Icon size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER & DISTRIBUTOR TESTIMONIALS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">
              <StarIcon size={16} />
              Voices of Trust
            </span>
            <h2 className="section-title">Trusted by Bakers, Chefs & Distributors</h2>
            <p className="section-subtitle">
              Here is why businesses and families choose Sri Gold flours week after week.
            </p>
          </div>

          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{t.text}"</p>
                </div>
                <div>
                  <div className="testimonial-author-name">{t.name}</div>
                  <div className="testimonial-author-role">{t.role} • {t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT US & LOCATION EMBED */}
      <div id="contact-section">
        <Contact />
      </div>

      {/* Recipe Modal Component */}
      <RecipeModal
        product={selectedProductForRecipe}
        onClose={() => setSelectedProductForRecipe(null)}
      />
    </>
  );
}

export default Home;
