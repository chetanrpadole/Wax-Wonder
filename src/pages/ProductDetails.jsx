import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ShoppingBag,
  MessageCircle,
  Sparkles,
  Check,
  ChevronRight,
  ShieldCheck,
  Truck,
  Heart
} from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div className="container" style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Product Not Found</h2>
        <p style={{ marginBottom: '2rem' }}>We could not find the creation you are looking for.</p>
        <Link to="/shop" className="btn btn--primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const whatsAppMessage = encodeURIComponent(
    `Hi Wrapped In Love! I would like to order: "${product.name}" (Qty: ${quantity}, Total: ₹${product.price * quantity}). Could you confirm availability and delivery?`
  );

  const whatsAppUrl = `https://wa.me/917378670106?text=${whatsAppMessage}`;

  // Find related products (same category, excluding current, up to 4 items)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If none from same category, fallback to others
  const displayRelated =
    relatedProducts.length > 0
      ? relatedProducts
      : products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="product-details" id="product-details-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/shop">Shop</Link>
          <ChevronRight size={14} />
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`}>
            {product.category}
          </Link>
          <ChevronRight size={14} />
          <span>{product.name}</span>
        </nav>

        {/* Main Product Layout */}
        <div className="product-details__layout">
          {/* Image */}
          <div className="product-details__image-box">
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="product-details__image"
              />
            ) : (
              <div className="product-details__placeholder">
                <span>{product.name}</span>
              </div>
            )}
            {product.badge && (
              <span
                className={`tag ${
                  product.badge === 'New' || product.badge === 'Seasonal'
                    ? 'tag--blush'
                    : 'tag--gold'
                } product-details__badge`}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="product-details__info">
            <span className="product-details__category">{product.category}</span>
            <h1 className="product-details__title">{product.name}</h1>
            <div className="product-details__price">
              {product.price}
              {product.unit && <span className="product-details__unit"> · {product.unit}</span>}
              <span className="product-details__tax-note">Inclusive of all taxes</span>
            </div>

            <p className="product-details__desc">{product.description}</p>

            {/* Occasions */}
            {product.occasion && product.occasion.length > 0 && (
              <div className="product-details__occasions">
                <span className="product-details__occasions-label">Recommended for:</span>
                <div className="product-details__tags">
                  {product.occasion.map((occ) => (
                    <Link
                      key={occ}
                      to={`/shop?occasion=${encodeURIComponent(occ)}`}
                      className="tag tag--gold"
                    >
                      {occ}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Highlights */}
            <div className="product-details__highlights">
              <div className="product-details__highlight-item">
                <Sparkles size={16} />
                <span>100% Natural Soy Wax</span>
              </div>
              <div className="product-details__highlight-item">
                <Heart size={16} />
                <span>Artisan Handcrafted</span>
              </div>
              <div className="product-details__highlight-item">
                <ShieldCheck size={16} />
                <span>Clean & Non-toxic Burn</span>
              </div>
              <div className="product-details__highlight-item">
                <Truck size={16} />
                <span>Nagpur Hand-delivery & Pan-India</span>
              </div>
            </div>

            {/* Purchase Controls */}
            <div className="product-details__purchase">
              <div className="product-details__qty-row">
                <span className="product-details__qty-label">Quantity:</span>
                <div className="quantity-control">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                {addedToast && (
                  <span className="product-details__toast">
                    <Check size={14} /> Added to Cart!
                  </span>
                )}
              </div>

              <div className="product-details__btn-group">
                <button
                  type="button"
                  className="btn btn--primary"
                  onClick={handleAddToCart}
                  id="add-to-cart-btn"
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>

                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--whatsapp"
                  id="whatsapp-order-btn"
                >
                  <MessageCircle size={18} />
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {displayRelated.length > 0 && (
          <section className="related-section">
            <h2>You May Also Adore</h2>
            <div className="divider" />
            <p>Thoughtfully paired handcrafted gifts for your loved ones</p>
            <div className="shop-grid">
              {displayRelated.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
