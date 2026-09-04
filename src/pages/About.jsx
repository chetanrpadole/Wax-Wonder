import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Leaf, Award, CheckCircle, ArrowRight } from 'lucide-react';
import giftHamper from '../assets/images/gift-hamper.jpg';
import candleBouquet from '../assets/images/candle-bouquet.jpg';
import './About.css';

const values = [
  {
    icon: Heart,
    title: 'Poured with Devotion',
    desc: 'Each piece is hand-poured in small batches right here in Nagpur with immense love and meticulous craftsmanship.',
  },
  {
    icon: Leaf,
    title: 'Earth & Health Kind',
    desc: 'We strictly use 100% natural, biodegradable soy wax and lead-free cotton wicks for a clean, non-toxic burn.',
  },
  {
    icon: Sparkles,
    title: 'Bespoke Artistry',
    desc: 'From intimate birthday favors to grandeur wedding hampers, we tailor every detail to your personal story.',
  },
  {
    icon: Award,
    title: 'Aesthetic Packaging',
    desc: 'Unboxing is half the joy. We wrap every order in signature ribbons, elegant boxes, and personal greeting notes.',
  },
];

const About = () => {
  return (
    <div className="about-page" id="about-page">
      <div className="container">
        {/* Header */}
        <header className="about-header">
          <span className="tag tag--gold" style={{ marginBottom: '0.5rem' }}>
            <Sparkles size={13} /> Our Story & Atelier
          </span>
          <h1>About Wrapped In Love</h1>
          <div className="divider" />
          <p>
            Where artisan candle-making meets heartfelt gifting. Born in the heart of Nagpur.
          </p>
        </header>

        {/* Story */}
        <section className="about-story">
          <div className="about-story__content">
            <h2>Crafting Moments, One Flame at a Time</h2>
            <p>
              <strong>Wrapped In Love</strong> began with a simple belief: the most meaningful gifts 
              aren’t mass-produced — they are thoughtfully made, tenderly wrapped, and given with pure warmth.
            </p>
            <p>
              Based in Nagpur, Maharashtra, our studio transforms premium natural soy wax into whimsical 
              teddy bear candles, delicate flower blossoms, and luxurious gift hampers. What started as a 
              passion for artisanal craftsmanship has blossomed into a beloved gifting atelier cherished by 
              hundreds across India.
            </p>
            <p>
              Whether it is a milestone wedding, a birthday celebration, a festival, or a corporate token of gratitude, 
              we ensure that every package carries emotional resonance and unforgettable elegance.
            </p>
          </div>

          <div className="about-story__image-wrap">
            <img src={giftHamper} alt="Wrapped In Love curated gift hamper" />
          </div>
        </section>

        {/* Values */}
        <section className="about-values-section">
          <div className="container" style={{ padding: '0 1rem' }}>
            <div className="section-header">
              <h2>What Guides Us</h2>
              <div className="divider" />
              <p>Our commitment to purity, beauty, and authentic emotions</p>
            </div>

            <div className="about-values-grid">
              {values.map((val) => (
                <div className="about-value-card" key={val.title}>
                  <div className="about-value-card__icon">
                    <val.icon size={26} />
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Craft & Materials */}
        <section className="about-craft">
          <div className="about-craft__image-wrap">
            <img src={candleBouquet} alt="Handcrafted candle bouquet" />
          </div>

          <div className="about-craft__content">
            <h2>The Art Behind Every Creation</h2>
            <p>
              We believe quality is in the details you cannot always see. That is why our formulations are 
              crafted without shortcuts or harmful additives.
            </p>

            <div className="about-craft__list">
              <div className="about-craft__item">
                <CheckCircle size={22} />
                <div>
                  <h4>100% Pure Soy Wax</h4>
                  <p>Renewable, plant-based wax that burns up to 50% longer and cleaner than paraffin.</p>
                </div>
              </div>

              <div className="about-craft__item">
                <CheckCircle size={22} />
                <div>
                  <h4>Phthalate-Free Fragrances</h4>
                  <p>Artisanal fine scent oils infused with botanical extracts that gently scent your space.</p>
                </div>
              </div>

              <div className="about-craft__item">
                <CheckCircle size={22} />
                <div>
                  <h4>Pure Cotton Braided Wicks</h4>
                  <p>Smoke-free wicks selected specifically for even melt pools and zero lead residue.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/shop" className="btn btn--primary">
                Explore The Shop <ArrowRight size={16} />
              </Link>
              <Link to="/custom-gifts" className="btn btn--outline">
                Design A Custom Gift
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
