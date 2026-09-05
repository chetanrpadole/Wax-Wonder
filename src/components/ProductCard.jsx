import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { items, addToCart, updateQuantity } = useCart();

  const cartItem = items.find((item) => item.id === product.id);
  const qty = cartItem ? cartItem.quantity : 0;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateQuantity(product.id, qty - 1);
  };

  return (
    <div className="product-card" id={`product-card-${product.id}`}>
      <div className="product-card__image-wrap">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="product-card__image"
            loading="lazy"
          />
        ) : (
          <div className="product-card__placeholder">
            {product.name}
          </div>
        )}
        {product.badge && (
          <span className={`tag ${product.badge === 'New' || product.badge === 'Seasonal' ? 'tag--blush' : 'tag--gold'} product-card__badge`}>
            {product.badge}
          </span>
        )}
      </div>

      <div className="product-card__body">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <span className="product-card__price">
          {product.price}
          {product.unit && <span className="product-card__unit"> · {product.unit}</span>}
        </span>

        <div className="product-card__actions">
          <Link to={`/product/${product.id}`} className="btn btn--outline btn--sm">
            View
          </Link>

          {qty === 0 ? (
            <button className="btn btn--primary btn--sm" onClick={handleAdd}>
              <ShoppingBag size={14} />
              Add
            </button>
          ) : (
            <div className="qty-stepper">
              <button
                className="qty-stepper__btn qty-stepper__btn--minus"
                onClick={handleDecrement}
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="qty-stepper__count">{qty}</span>
              <button
                className="qty-stepper__btn qty-stepper__btn--plus"
                onClick={handleIncrement}
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>

        {qty > 0 && (
          <Link to="/cart" className="product-card__view-cart">
            View Cart →
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

