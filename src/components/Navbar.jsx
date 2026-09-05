import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Check } from 'lucide-react';
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
  const { getItemCount, lastAddedItem, clearLastAddedItem } = useCart();
  const location = useLocation();
  const itemCount = getItemCount();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu and dismiss cart preview on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setMenuOpen(false);
    if (lastAddedItem) {
      clearLastAddedItem();
    }
  }

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Auto-dismiss preview after 4.5 seconds
  useEffect(() => {
    if (!lastAddedItem) return;

    const timer = setTimeout(() => {
      clearLastAddedItem();
    }, 4500);

    return () => clearTimeout(timer);
  }, [lastAddedItem, clearLastAddedItem]);

  // Bump badge animation when cart count changes
  const [prevCount, setPrevCount] = useState(itemCount);
  const [bumpBadge, setBumpBadge] = useState(false);

  if (itemCount !== prevCount) {
    setPrevCount(itemCount);
    setBumpBadge(true);
  }

  useEffect(() => {
    if (!bumpBadge) return;
    const timer = setTimeout(() => setBumpBadge(false), 400);
    return () => clearTimeout(timer);
  }, [bumpBadge]);

  const handleClosePreview = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    clearLastAddedItem();
  };

  return (
    <>
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

          {/* Cart Icon with Counter & Live Added-to-Cart Preview */}
          <div className="navbar__cart-wrap" id="nav-cart-wrapper">
            <Link
              to="/cart"
              className={`navbar__icon-btn ${bumpBadge ? 'navbar__icon-btn--bump' : ''}`}
              aria-label="Shopping cart"
              id="nav-cart-btn"
              onClick={clearLastAddedItem}
            >
              <ShoppingBag size={20} />
              {itemCount > 0 && (
                <span className={`navbar__cart-count ${bumpBadge ? 'navbar__cart-count--pop' : ''}`} id="nav-cart-counter">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Added to Cart Preview Popup */}
            {lastAddedItem && (
              <div className="cart-preview" id="cart-added-preview">
                <div className="cart-preview__arrow" />
                <div className="cart-preview__header">
                  <span className="cart-preview__status">
                    <Check size={14} className="cart-preview__check" /> Added to Cart
                  </span>
                  <button
                    type="button"
                    className="cart-preview__close"
                    onClick={handleClosePreview}
                    aria-label="Close cart preview"
                  >
                    <X size={14} />
                  </button>
                </div>

                <Link
                  to="/cart"
                  className="cart-preview__item"
                  id="cart-preview-link"
                  onClick={clearLastAddedItem}
                >
                  <div className="cart-preview__img-wrap">
                    {lastAddedItem.image ? (
                      <img
                        src={lastAddedItem.image}
                        alt={lastAddedItem.name}
                        className="cart-preview__img"
                      />
                    ) : (
                      <div className="cart-preview__placeholder">
                        <ShoppingBag size={16} />
                      </div>
                    )}
                  </div>

                  <div className="cart-preview__info">
                    <h4 className="cart-preview__title">{lastAddedItem.name}</h4>
                    <div className="cart-preview__meta">
                      <span className="cart-preview__qty">
                        Qty: <strong>{lastAddedItem.addedQuantity || 1}</strong>
                        {lastAddedItem.totalQuantity > 1 && (
                          <span className="cart-preview__total-qty"> ({lastAddedItem.totalQuantity} in bag)</span>
                        )}
                      </span>
                      <span className="cart-preview__price">₹{lastAddedItem.price}</span>
                    </div>
                  </div>
                </Link>

                <div className="cart-preview__footer">
                  <Link
                    to="/cart"
                    className="cart-preview__btn btn btn--primary btn--sm"
                    onClick={clearLastAddedItem}
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            )}
          </div>

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

    </nav>

      {/* Mobile Overlay & Panel — rendered via portal to avoid fixed-in-sticky stacking context bug */}
      {ReactDOM.createPortal(
        <>
          <div
            className={`navbar__mobile-overlay ${menuOpen ? 'navbar__mobile-overlay--open' : ''}`}
            onClick={() => setMenuOpen(false)}
          />

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
        </>,
        document.body
      )}
    </>
  );
};

export default Navbar;
