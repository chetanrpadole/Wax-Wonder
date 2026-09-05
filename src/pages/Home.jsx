import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

// Authentic category cover images
import flowerImg from '../assets/images/04_peony_candle.jpg';
import teddyImg from '../assets/images/03_teddy_bear_candle.jpg';
import giftImg from '../assets/images/02_bell_jar_candle.jpg';
import bouquetImg from '../assets/images/26_candle_bouquet.jpg';
import festivalImg from '../assets/images/11_peacock_urli_candle.jpg';
import hamperImg from '../assets/images/18_hamper_bouquet.png';

const categories = [
  { name: 'Flower Candles', image: flowerImg, link: '/shop?category=Flower+Candles' },
  { name: 'Teddy Candles', image: teddyImg, link: '/shop?category=Teddy+Candles' },
  { name: 'Gift Candles', image: giftImg, link: '/shop?category=Gift+Candles' },
  { name: 'Candle Bouquets', image: bouquetImg, link: '/shop?category=Candle+Bouquets' },
  { name: 'Festival Collection', image: festivalImg, link: '/shop?category=Festival+Collection' },
  { name: 'Gift Hampers', image: hamperImg, link: '/shop?category=Gift+Hampers' },
];

// Top 8 bestsellers
const bestSellers = products.filter((p) => p.badge === 'Bestseller').slice(0, 8);

const Home = () => {
  return (
    <div className="home-clean" id="home-page">
      {/* ── Minimal Hero Section ── */}
      <section className="hero-clean" id="hero-section">
        <div className="hero-clean__container">
          <h1 className="hero-clean__title">
            Artisan Candles & Handcrafted Gifts
          </h1>
          <p className="hero-clean__desc">
            100% natural botanical soy wax candles, delicately hand-poured in Nagpur for your sanctuary.
          </p>
          <div className="hero-clean__actions">
            <Link to="/shop" className="btn btn--primary hero-clean__btn" id="hero-shop-btn">
              Shop Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Product Categories ── */}
      <section className="home-categories" id="product-categories">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Shop by Category</h2>
          </div>

          <div className="categories-grid">
            {categories.map((cat) => (
              <Link
                to={cat.link}
                className="category-card"
                key={cat.name}
                id={`cat-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="category-card__media">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="category-card__img"
                    loading="lazy"
                  />
                  <div className="category-card__gradient" />
                </div>
                <div className="category-card__info">
                  <h3 className="category-card__name">{cat.name}</h3>
                  <span className="category-card__link">
                    Explore <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Sellers ── */}
      <section className="home-bestsellers" id="best-sellers">
        <div className="container">
          <div className="section-head section-head--between">
            <h2 className="section-title">Best Sellers</h2>
            <Link to="/shop" className="section-link" id="view-all-bestsellers">
              View All <ArrowRight size={15} />
            </Link>
          </div>

          <div className="bestsellers-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
