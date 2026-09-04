import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Gift, Cake, Star, Users, Sparkles,
  Palette, Package, Award, ArrowRight
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import { products, reviews } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

// Images for hero
import teddyCandle from '../assets/images/teddy-candle.jpg';
import flowerCandle from '../assets/images/flower-candle.jpg';
import giftHamper from '../assets/images/gift-hamper.jpg';
import candleBouquet from '../assets/images/candle-bouquet.jpg';
import giftCandle from '../assets/images/gift-candle.jpg';


const occasions = [
  { name: 'Birthday', icon: Cake, link: '/shop?occasion=Birthday+Gifts' },
  { name: 'Anniversary', icon: Heart, link: '/shop?occasion=Anniversary+Gifts' },
  { name: 'Wedding', icon: Sparkles, link: '/shop?occasion=Wedding+Favours' },
  { name: 'Festivals', icon: Star, link: '/shop?occasion=Festival+Gifts' },
  { name: 'Corporate', icon: Users, link: '/shop?occasion=Corporate+Gifts' },
  { name: 'Personalized', icon: Palette, link: '/shop?occasion=Personalized+Gifts' },
];

const collections = [
  { name: 'Teddy Candles', image: teddyCandle, count: 2, link: '/shop?category=Teddy+Candles' },
  { name: 'Flower Candles', image: flowerCandle, count: 3, link: '/shop?category=Flower+Candles' },
  { name: 'Gift Candles', image: giftCandle, count: 3, link: '/shop?category=Gift+Candles' },
  { name: 'Candle Bouquets', image: candleBouquet, count: 2, link: '/shop?category=Candle+Bouquets' },
  { name: 'Gift Hampers', image: giftHamper, count: 2, link: '/shop?category=Gift+Hampers' },
];

const whyItems = [
  { icon: Heart, title: 'Handmade with Love', desc: 'Every product is handcrafted with care and attention to detail.' },
  { icon: Award, title: 'Premium Quality', desc: 'We use only the finest materials — premium wax, natural wicks, and eco-friendly packaging.' },
  { icon: Palette, title: 'Fully Customizable', desc: 'Choose colors, scents, messages, and packaging to create your perfect gift.' },
  { icon: Package, title: 'Gift-Ready Packaging', desc: 'Beautiful packaging included — ready to gift straight out of the box.' },
  { icon: Gift, title: 'Perfect for Gifting', desc: 'From birthdays to corporate events, we have something for every occasion.' },
  { icon: Users, title: 'Bulk & Corporate', desc: 'Special pricing for bulk orders, corporate events, and wedding favours.' },
];

const bestSellers = products.filter(p => p.badge === 'Bestseller').slice(0, 4);

// Use available product images for Instagram grid
const instaImages = [teddyCandle, flowerCandle, giftHamper, candleBouquet];

const Home = () => {
  return (
    <div className="home" id="home-page">
      {/* ── 1. Hero ── */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__label">
              <Sparkles size={14} />
              Handcrafted in Nagpur
            </span>
            <h1 className="hero__title">
              Handcrafted Gifts<br />
              <span>Wrapped In Love</span>
            </h1>
            <p className="hero__desc">
              Beautiful handmade candles, gift hampers, and personalized creations 
              for your most special moments. Every gift tells a story.
            </p>
            <div className="hero__cta">
              <Link to="/shop" className="btn btn--primary">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/collections" className="btn btn--outline">
                Our Collections
              </Link>
            </div>
          </div>

          <div className="hero__images">
            <div className="hero__img-card">
              <img src={teddyCandle} alt="Handmade teddy candle" />
            </div>
            <div className="hero__img-card">
              <img src={flowerCandle} alt="Handmade flower candle" />
            </div>
            <div className="hero__img-card">
              <img src={giftHamper} alt="Premium gift hamper" />
            </div>
            <div className="hero__img-card">
              <img src={candleBouquet} alt="Candle bouquet" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Shop By Occasion ── */}
      <section className="section" id="shop-by-occasion">
        <div className="container">
          <div className="section-header">
            <h2>Shop By Occasion</h2>
            <div className="divider" />
            <p>Find the perfect gift for every celebration</p>
          </div>
          <div className="occasions-grid">
            {occasions.map((item) => (
              <Link to={item.link} className="occasion-card" key={item.name}>
                <div className="occasion-card__icon">
                  <item.icon size={24} />
                </div>
                <span className="occasion-card__name">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Featured Collections ── */}
      <section className="section section--alt" id="featured-collections">
        <div className="container">
          <div className="section-header">
            <h2>Our Collections</h2>
            <div className="divider" />
            <p>Explore our handcrafted categories</p>
          </div>
          <div className="collections-grid">
            {collections.map((col) => (
              <Link to={col.link} className="collection-card" key={col.name}>
                {col.image ? (
                  <img src={col.image} alt={col.name} className="collection-card__image" />
                ) : (
                  <div className="collection-card__placeholder">{col.name}</div>
                )}
                <div className="collection-card__overlay">
                  <h3 className="collection-card__name">{col.name}</h3>
                  <span className="collection-card__count">{col.count} Products</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Best Sellers ── */}
      <section className="section" id="best-sellers">
        <div className="container">
          <div className="section-header">
            <h2>Best Sellers</h2>
            <div className="divider" />
            <p>Our customers&apos; most loved creations</p>
          </div>
          <div className="bestsellers-grid">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link to="/shop" className="btn btn--outline" style={{ marginTop: '2.5rem', display: 'inline-flex' }}>
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose Us ── */}
      <section className="section section--alt" id="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
            <div className="divider" />
            <p>What makes Wrapped In Love special</p>
          </div>
          <div className="why-grid">
            {whyItems.map((item) => (
              <div className="why-card" key={item.title}>
                <div className="why-card__icon">
                  <item.icon size={26} />
                </div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── 8. Instagram ── */}
      <section className="section" id="instagram-section">
        <div className="container">
          <div className="section-header">
            <h2>Follow Us on Instagram</h2>
            <div className="divider" />
            <p>@wrappedinlove_sv — See our latest creations</p>
          </div>
          <div className="insta-grid">
            {instaImages.map((img, i) => (
              <a
                href="https://instagram.com/wrappedinlove_sv"
                target="_blank"
                rel="noopener noreferrer"
                className="insta-grid__item"
                key={i}
              >
                <img src={img} alt={`Instagram post ${i + 1}`} />
              </a>
            ))}
          </div>
          <div className="insta-cta">
            <a
              href="https://instagram.com/wrappedinlove_sv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              <InstagramIcon size={16} />
              Follow @wrappedinlove_sv
            </a>
          </div>
        </div>
      </section>

      {/* ── 9. Reviews ── */}
      <section className="section section--alt" id="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Customers Say</h2>
            <div className="divider" />
            <p>Real stories from happy gift-givers</p>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="review-card__stars">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="review-card__text">&ldquo;{review.text}&rdquo;</p>
                <div className="review-card__author">
                  <div className="review-card__avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="review-card__name">{review.name}</div>
                    <div className="review-card__occasion">{review.occasion}</div>
                  </div>
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
