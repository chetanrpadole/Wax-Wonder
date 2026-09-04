import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const location = useLocation();
  const itemCount = getItemCount();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__inner">
        {/* Brand */}
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-name">Wrapped In Love</span>
          <span className="navbar__brand-sub">Gifting Atelier</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                end={to === '/'}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar__actions">
          <Link to="/shop" className="navbar__icon-btn" aria-label="Search products" id="nav-search-btn">
            <Search size={20} />
          </Link>
          <Link to="/cart" className="navbar__icon-btn" aria-label="Shopping cart" id="nav-cart-btn">
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="navbar__cart-count">{itemCount}</span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            id="nav-hamburger"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`navbar__mobile-overlay ${menuOpen ? 'navbar__mobile-overlay--open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Panel */}
      <div className={`navbar__mobile-panel ${menuOpen ? 'navbar__mobile-panel--open' : ''}`}>
        <div className="navbar__mobile-header">
          <div className="navbar__brand">
            <span className="navbar__brand-name">Wrapped In Love</span>
            <span className="navbar__brand-sub">Gifting Atelier</span>
          </div>
          <button
            className="navbar__mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <ul className="navbar__mobile-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
                end={to === '/'}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              Cart {itemCount > 0 && <span className="navbar__mobile-cart-badge">{itemCount}</span>}
            </NavLink>
          </li>
        </ul>

        <div className="navbar__mobile-footer">
          <a
            href="https://wa.me/917378670106?text=Hi%20Wrapped%20In%20Love!%20I%20have%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-whatsapp"
          >
            Chat with Artisan on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
