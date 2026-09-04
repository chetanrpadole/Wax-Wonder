import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
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
        <span className="product-card__price">{product.price}</span>

        <div className="product-card__actions">
          <Link to={`/product/${product.id}`} className="btn btn--outline btn--sm">
            View
          </Link>
          <button className="btn btn--primary btn--sm" onClick={handleAddToCart}>
            <ShoppingBag size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
