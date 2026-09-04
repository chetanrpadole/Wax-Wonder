import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer__grid">
        {/* Brand */}
        <div className="footer__col">
          <h3 className="footer__brand-name">Wrapped In Love</h3>
          <span className="footer__brand-sub">Gifting Atelier</span>
          <p className="footer__brand-desc">
            Handcrafted candles, gift hampers, and personalized creations made with love in Nagpur.
            Every gift tells a story.
          </p>
          <div className="footer__social">
            <a
              href="https://instagram.com/wrappedinlove_sv"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="https://wa.me/917378670106"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="WhatsApp"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/shop" className="footer__link">Shop All</Link></li>
            <li><Link to="/collections" className="footer__link">Collections</Link></li>
            <li><Link to="/custom-gifts" className="footer__link">Custom Gifts</Link></li>
            <li><Link to="/about" className="footer__link">About Us</Link></li>
            <li><Link to="/contact" className="footer__link">Contact</Link></li>
          </ul>
        </div>

        {/* Collections */}
        <div className="footer__col">
          <h4 className="footer__title">Collections</h4>
          <ul className="footer__links">
            <li><Link to="/shop?category=Teddy+Candles" className="footer__link">Teddy Candles</Link></li>
            <li><Link to="/shop?category=Flower+Candles" className="footer__link">Flower Candles</Link></li>
            <li><Link to="/shop?category=Gift+Hampers" className="footer__link">Gift Hampers</Link></li>
            <li><Link to="/shop?category=Candle+Bouquets" className="footer__link">Candle Bouquets</Link></li>
            <li><Link to="/shop?category=Festival+Collection" className="footer__link">Festival Collection</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__col">
          <h4 className="footer__title">Get In Touch</h4>
          <div className="footer__contact-item">
            <MapPin size={16} />
            <span>Nagpur, Maharashtra, India</span>
          </div>
          <div className="footer__contact-item">
            <Phone size={16} />
            <a href="tel:+917378670106" className="footer__contact-link">+91 7378670106</a>
          </div>
          <div className="footer__contact-item">
            <Mail size={16} />
            <a href="mailto:wrappedinlove.sv@gmail.com" className="footer__contact-link">wrappedinlove.sv@gmail.com</a>
          </div>
          <div className="footer__contact-item">
            <InstagramIcon size={16} />
            <a href="https://instagram.com/wrappedinlove_sv" target="_blank" rel="noopener noreferrer" className="footer__contact-link">@wrappedinlove_sv</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} <span>Wrapped In Love</span>. Handcrafted with <Heart size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> in Nagpur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
