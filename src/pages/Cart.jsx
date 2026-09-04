import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  ArrowRight,
  MessageCircle,
  Sparkles,
  Truck
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotal, getItemCount } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('');
  const [note, setNote] = useState('');

  const total = getTotal();
  const itemCount = getItemCount();

  const handleWhatsAppCheckout = () => {
    let orderText = `*New Order from Wrapped In Love Website*\n`;
    if (customerName) orderText += `*Name:* ${customerName}\n`;
    if (deliveryArea) orderText += `*Delivery Location:* ${deliveryArea}\n`;
    if (note) orderText += `*Special Note:* ${note}\n`;
    orderText += `\n*Items Ordered (${itemCount}):*\n`;

    items.forEach((item, index) => {
      orderText += `${index + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });

    orderText += `\n*Total Amount:* ₹${total}\n\nPlease confirm availability and shipping details. Thank you!`;

    const encoded = encodeURIComponent(orderText);
    window.open(`https://wa.me/917378670106?text=${encoded}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page" id="cart-page">
        <div className="container">
          <div className="cart-empty">
            <div className="cart-empty__icon">
              <ShoppingBag size={34} />
            </div>
            <h2>Your Cart is Empty</h2>
            <p>
              Your basket is waiting to be filled with handcrafted warmth and affection.
              Explore our collections to find your perfect keepsake.
            </p>
            <Link to="/shop" className="btn btn--primary">
              Explore Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page" id="cart-page">
      <div className="container">
        {/* Header */}
        <header className="cart-header">
          <h1>Your Shopping Bag</h1>
          <div className="divider" />
          <p>
            You have {itemCount} handcrafted {itemCount === 1 ? 'item' : 'items'} ready for gifting.
          </p>
        </header>

        {/* Layout */}
        <div className="cart-layout">
          {/* Item List */}
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item__image">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <div className="cart-item__placeholder">{item.name}</div>
                  )}
                </div>

                <div className="cart-item__details">
                  <span className="cart-item__category">{item.category}</span>
                  <h3 className="cart-item__name">
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </h3>
                  <span className="cart-item__price">₹{item.price} each</span>
                </div>

                <div className="cart-item__actions">
                  <div className="quantity-control">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <span className="cart-item__subtotal">
                    ₹{item.price * item.quantity}
                  </span>

                  <button
                    type="button"
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <div className="cart-summary">
            <h2 className="cart-summary__title">Order Summary</h2>

            <div className="cart-summary__row">
              <span>Items Subtotal ({itemCount})</span>
              <span>₹{total}</span>
            </div>

            <div className="cart-summary__row">
              <span>Handcrafted Gift Packaging</span>
              <span style={{ color: 'var(--clr-gold-dark)' }}>Included</span>
            </div>

            <div className="cart-summary__row cart-summary__row--total">
              <span>Estimated Total</span>
              <span>₹{total}</span>
            </div>

            <div className="cart-summary__note">
              <Truck size={14} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '4px' }} />
              Direct delivery available in <strong>Nagpur</strong> & courier shipping across India.
            </div>

            {/* Optional Customer info for WhatsApp message */}
            <div className="cart-summary__form">
              <input
                type="text"
                className="cart-summary__input"
                placeholder="Your Name (optional)"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                aria-label="Your Name"
              />
              <input
                type="text"
                className="cart-summary__input"
                placeholder="City / Delivery Area (e.g. Nagpur)"
                value={deliveryArea}
                onChange={(e) => setDeliveryArea(e.target.value)}
                aria-label="Delivery Area"
              />
              <input
                type="text"
                className="cart-summary__input"
                placeholder="Gift message or note (optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                aria-label="Special instructions or message"
              />
            </div>

            <div className="cart-summary__actions">
              <button
                type="button"
                className="btn btn--whatsapp"
                style={{ width: '100%', padding: '0.9rem' }}
                onClick={handleWhatsAppCheckout}
                id="checkout-whatsapp-btn"
              >
                <MessageCircle size={18} />
                Order via WhatsApp
              </button>

              <Link
                to="/shop"
                className="btn btn--outline"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Continue Shopping
              </Link>
            </div>

            <div className="cart-summary__clear">
              <button type="button" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
