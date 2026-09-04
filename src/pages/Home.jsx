import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import './Home.css';

// Real collection images
import teddyCandle from '../assets/images/03_teddy_bear_candle.jpg';
import flowerCandle from '../assets/images/04_peony_candle.jpg';
import giftCandle from '../assets/images/02_bell_jar_candle.jpg';
import candleBouquet from '../assets/images/26_candle_bouquet.jpg';
import giftHamper from '../assets/images/18_hamper_bouquet.png';

// Curated collections data with original images
const collections = [
  { name: 'Teddy Candles', image: teddyCandle, link: '/shop?category=Teddy+Candles' },
  { name: 'Flower Candles', image: flowerCandle, link: '/shop?category=Flower+Candles' },
  { name: 'Gift Candles', image: giftCandle, link: '/shop?category=Gift+Candles' },
  { name: 'Candle Bouquets', image: candleBouquet, link: '/shop?category=Candle+Bouquets' },
  { name: 'Gift Hampers', image: giftHamper, link: '/shop?category=Gift+Hampers' },
];

// 4 featured products that have images, with original pricing
const featuredProducts = products.filter((p) => p.image).slice(0, 4);

const Home = () => {
  return (
    <div className="home-minimal" id="home-page">
      {/* ── Hero Section ── */}
      <section className="hero-minimal">
        <div className="hero-minimal__container">
          <div className="hero-minimal__content">
            <span className="hero-minimal__eyebrow">Handcrafted Luxury</span>
            <h1 className="hero-minimal__title">
              Artisan Candles,<br />
              <span>Wrapped In Love</span>
            </h1>
            <p className="hero-minimal__tagline">
              Delicately scented, slow-burning handcrafted candles made to bring warmth, serenity, and timeless elegance to your sanctuary.
            </p>
            <div className="hero-minimal__actions">
              <Link to="/shop" className="btn btn--primary hero-minimal__btn" id="hero-shop-now-btn">
                Shop Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="hero-minimal__media">
            <div className="hero-minimal__image-frame">
              <img
                src={teddyCandle}
                alt="Handcrafted luxury candle"
                className="hero-minimal__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Curated Collections ── */}
      <section className="collections-section" id="curated-collections">
        <div className="collections-container">
          <div className="collections-header">
            <h2 className="collections-title">Curated Collections</h2>
            <p className="collections-subtitle">Explore our handcrafted categories</p>
          </div>

          <div className="collections-grid">
            {collections.map((col) => (
              <Link
                to={col.link}
                className="collection-tile"
                key={col.name}
                id={`collection-${col.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <div className="collection-tile__media">
                  <img src={col.image} alt={col.name} className="collection-tile__img" />
                </div>
                <div className="collection-tile__overlay">
                  <h3 className="collection-tile__name">{col.name}</h3>
                  <span className="collection-tile__cta">
                    Shop Now <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="featured-section" id="featured-products">
        <div className="featured-container">
          <div className="featured-header">
            <h2 className="featured-title">Featured Candles</h2>
            <p className="featured-subtitle">Handcrafted favorites designed for gifting and peaceful moments</p>
          </div>

          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <div className="featured-card" key={product.id} id={`featured-product-${product.id}`}>
                <div className="featured-card__media">
                  <Link to={`/product/${product.id}`} className="featured-card__link">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="featured-card__img"
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="featured-card__details">
                  <h3 className="featured-card__name">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <span className="featured-card__price">
                    ₹{product.price}
                    {product.unit && <span className="featured-card__unit"> · {product.unit}</span>}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn--outline featured-card__btn"
                    id={`view-product-${product.id}`}
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
