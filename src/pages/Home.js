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
  CheckmarkCircle02Icon,
  HelpCircleIcon,
  ArrowDown01Icon
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
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      q: "Is Sri Gold Chakki Atta 100% whole wheat with zero maida?",
      a: "Yes. Sri Gold Whole Wheat Chakki Atta is 100% whole wheat with 0% maida and zero synthetic bleaches. Produced under FSSAI License 10117013000686, it retains the natural bran and germ to deliver 14.3g dietary fibre per 100g."
    },
    {
      q: "What are the certified nutritional values of Sri Gold Chakki Atta?",
      a: "According to certified laboratory packaging analysis per 100g: Energy: 363 kcal, Protein: 11.8g, Dietary Fibre: 14.3g, Carbohydrates: 75.1g, Iron: 3.3mg, Calcium: 63.3mg, Total Fat: 1.7g, Trans Fat: 0.0g, and Zero Cholesterol."
    },
    {
      q: "Does Sai Rohith Industries supply wholesale 50kg bulk bags for bakeries and caterers?",
      a: "Yes. We supply 25kg and 50kg commercial moisture-barrier woven bags of Sri Gold Chakki Atta, Premium Refined Maida, Bombay Rava, and Besan to commercial bakeries, hotels, caterers, and wholesale distributors across Andhra Pradesh, Karnataka, and Telangana with fast direct-from-mill dispatch."
    },
    {
      q: "Where is the Sri Gold manufacturing facility located?",
      a: "Our modern milling plant is located at Plot No. 13, APIIC Industrial Area, Gooty Road, Guntakal - 515801, Anantapur District, Andhra Pradesh. Contact our sales desk at +91 95153 19049 or srigoldgtl@gmail.com."
    },
    {
      q: "What other products are manufactured by Sai Rohith Industries?",
      a: "Under the Sri Gold brand, we manufacture 7+ grain products including Premium Refined Maida, Bombay Rava (Soji), Bansi Rava (Cracked Wheat), Pure Roasted Besan, and Chiroti Rava, available in both consumer retail packs and 50kg wholesale bags."
    },
    {
      q: "How can I request bulk supply rates or distribution dealership?",
      a: "You can click the 'Get Bulk Quote' button in the navbar, message our direct WhatsApp at +91 95153 19049, or call our sales desk at +91 95153 19049 / 08552226594 for tiered wholesale pricing and transportation schedules."
    }
  ];

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

        <div className="container hero-container">
          <div className="hero-grid">
            {/* Left Content Column */}
            <div className="hero-text-col">
              <div className="hero-pill">
                <img
                  src={`${process.env.PUBLIC_URL}/logo-sri-gold.png`}
                  alt="Sri Gold Logo"
                  style={{ height: '22px', width: 'auto', objectFit: 'contain' }}
                />
                <span>{COMPANY_INFO.name} • {COMPANY_INFO.brand}</span>
              </div>

              <h1 className="hero-title">
                {typedText}
                <span className="cursor-blink">|</span>
              </h1>

              <p className="hero-description">
                100% Whole Wheat Chakki Atta, Premium Maida & Golden Rava varieties. Cold stone-milled with zero chemical additives in Guntakal, AP.
              </p>

              {/* Action Buttons */}
              <div className="hero-ctas">
                <a href="#featured-products" className="btn btn-primary btn-lg">
                  Explore Products
                  <ArrowRight01Icon size={18} />
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20am%20interested%20in%20bulk%20supply.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <WhatsappIcon size={20} />
                  WhatsApp Inquiry
                </a>
              </div>

              {/* Sleek Trust Badge Grid */}
              <div className="hero-trust-grid">
                <div className="hero-trust-pill">
                  <span className="trust-check">✓</span>
                  <span>100% Atta, 0% Maida</span>
                </div>
                <div className="hero-trust-pill">
                  <span className="trust-check">✓</span>
                  <span>FSSAI Lic: {COMPANY_INFO.fssai}</span>
                </div>
                <div className="hero-trust-pill">
                  <span className="trust-check">✓</span>
                  <span>Butter-Soft Roties</span>
                </div>
                <div className="hero-trust-pill">
                  <span className="trust-check">✓</span>
                  <span>Retail & 50kg Bulk Bags</span>
                </div>
              </div>
            </div>

            {/* Right Product Visual Column */}
            <div className="hero-visual-col">
              <div className="hero-product-stage">
                <div className="hero-product-glow"></div>
                <img
                  src={`${process.env.PUBLIC_URL}/products/sri-gold-chakki-atta-transparent.png`}
                  alt="Sri Gold Whole Wheat Chakki Atta Pouch"
                  className="hero-pouch-img"
                />
                {/* Floating Highlights */}
                <div className="floating-badge badge-top">
                  <span style={{ fontSize: '1.1rem' }}>🌾</span>
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '0.78rem', color: '#FFFFFF', lineHeight: 1.1 }}>Special Wheat</div>
                    <div style={{ fontSize: '0.68rem', color: '#F3C367' }}>Direct From Farmer</div>
                  </div>
                </div>
                <div className="floating-badge badge-bottom">
                  <span style={{ fontSize: '1.2rem', fontWeight: '800', color: '#25D366' }}>14.3g</span>
                  <div style={{ fontSize: '0.72rem', color: '#FFFFFF', fontWeight: '600', lineHeight: 1.1 }}>
                    Dietary<br />Fibre
                  </div>
                </div>
              </div>
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

          <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', justifyContent: 'center' }}>
            <Link to="/myapp/products" className="btn btn-secondary btn-lg" style={{ maxWidth: '100%' }}>
              View Detailed Product Specs & Sizes
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

          <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
            <Link to="/myapp/recipes" className="btn btn-secondary btn-lg" style={{ maxWidth: '100%' }}>
              Explore All 14+ Recipes & Cooking Steps
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

      {/* 8. FREQUENTLY ASKED QUESTIONS (AEO & USER ASSURANCE) */}
      <section className="faq-section" id="faq">
        <div className="container" style={{ maxWidth: '920px' }}>
          <div className="section-header">
            <span className="section-eyebrow">
              <HelpCircleIcon size={16} />
              Verified Answers
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know about Sri Gold wheat flour quality, nutritional facts, wholesale supply, and factory operations in Guntakal.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                >
                  <button
                    className="faq-accordion-trigger"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <span className={`faq-icon ${isOpen ? 'rotated' : ''}`}>
                      <ArrowDown01Icon size={18} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-accordion-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-cta-box">
            <div>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Have a specific question or custom packaging requirement?
              </h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Speak directly with our milling specialists or sales desk in Guntakal.
              </p>
            </div>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20have%20a%20question%20regarding%20Sri%20Gold%20flour.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <WhatsappIcon size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 9. CONTACT US & LOCATION EMBED */}
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
