import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import './Collections.css';

import teddyCandle from '../assets/images/teddy-candle.jpg';
import flowerCandle from '../assets/images/flower-candle.jpg';
import giftCandle from '../assets/images/gift-candle.jpg';
import candleBouquet from '../assets/images/candle-bouquet.jpg';
import giftHamper from '../assets/images/gift-hamper.jpg';
import customGift from '../assets/images/custom-gift.jpg';

const collectionData = [
  {
    category: 'Teddy Candles',
    name: 'Teddy Candles',
    desc: 'Adorable, whimsical teddy bear candles handcrafted in comforting pastel shades. The most heartwarming gift for birthdays, babies, and loved ones.',
    image: teddyCandle,
  },
  {
    category: 'Flower Candles',
    name: 'Flower Candles',
    desc: 'Intricately molded roses, sunflowers, and floral blossoms crafted from pure botanical soy wax that bloom with soft fragrance.',
    image: flowerCandle,
  },
  {
    category: 'Gift Candles',
    name: 'Gift Candles',
    desc: 'Luxurious glass jars with golden accents, satin ribbons, and long-burning soy wax infused with French vanilla and golden amber.',
    image: giftCandle,
  },
  {
    category: 'Candle Bouquets',
    name: 'Candle Bouquets',
    desc: 'A permanent alternative to fresh flowers. Handcrafted candle blossoms wrapped in kraft paper, jute twine, and fine ribbons.',
    image: candleBouquet,
  },
  {
    category: 'Gift Hampers',
    name: 'Gift Hampers',
    desc: 'Bespoke gift boxes combining hand-poured candles, dried florals, gourmet treats, and personalized greeting messages.',
    image: giftHamper,
  },
  {
    category: 'Custom Gifts',
    name: 'Custom Gifts',
    desc: 'Tailored to your love story. Personalized names, custom colors, custom scents, and engraved keepsakes made to order.',
    image: customGift,
  },
  {
    category: 'Festival Collection',
    name: 'Festival Collection',
    desc: 'Festive decorative diyas, golden accents, and celebratory candle gift boxes for Diwali, Raksha Bandhan, and new beginnings.',
    image: giftCandle,
  },
  {
    category: 'Corporate Gifts',
    name: 'Corporate & Bulk Gifting',
    desc: 'Distinctive, refined gifts for teams, clients, and wedding favors with customizable branded packaging and bulk tier pricing.',
    image: giftHamper,
  },
];

const Collections = () => {
  return (
    <div className="collections-page" id="collections-page">
      <div className="container">
        {/* Header */}
        <header className="collections-header">
          <span className="tag tag--gold" style={{ marginBottom: '0.5rem' }}>
            <Sparkles size={13} /> Handcrafted Lines
          </span>
          <h1>Curated Collections</h1>
          <div className="divider" />
          <p>
            Explore our artisanal categories, each thoughtfully hand-poured and packaged with warmth in Nagpur.
          </p>
        </header>

        {/* Collections Grid */}
        <div className="collections-full-grid">
          {collectionData.map((col) => {
            const count = products.filter((p) => p.category === col.category).length;
            const targetUrl =
              col.category === 'Custom Gifts'
                ? '/custom-gifts'
                : `/shop?category=${encodeURIComponent(col.category)}`;

            return (
              <Link to={targetUrl} className="collection-item-card" key={col.name}>
                <div className="collection-item-card__img-wrap">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="collection-item-card__img"
                    loading="lazy"
                  />
                </div>
                <div className="collection-item-card__body">
                  <h2 className="collection-item-card__title">{col.name}</h2>
                  <p className="collection-item-card__desc">{col.desc}</p>
                  <div className="collection-item-card__footer">
                    <span className="collection-item-card__count">
                      {count > 0 ? `${count} Items` : 'Bespoke Orders'}
                    </span>
                    <span className="collection-item-card__cta">
                      Explore <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
