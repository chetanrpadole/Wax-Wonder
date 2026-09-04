import React, { useState } from 'react';
import { Sparkles, MessageCircle, Heart, Palette, Gift, Image as ImageIcon } from 'lucide-react';
import './CustomGifts.css';

const CustomGifts = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: 'Birthday',
    productType: 'Teddy Candles',
    colorTheme: 'Warm Ivory & Gold',
    fragrance: 'French Vanilla',
    quantity: '1',
    budget: '',
    message: '',
    specialRequest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    let text = `*Custom Gift Request — Wrapped In Love*\n`;
    text += `*Name:* ${formData.name || 'Not provided'}\n`;
    text += `*Phone:* ${formData.phone || 'Not provided'}\n`;
    text += `*Occasion:* ${formData.occasion}\n`;
    text += `*Product Type:* ${formData.productType}\n`;
    text += `*Color Theme:* ${formData.colorTheme}\n`;
    text += `*Fragrance:* ${formData.fragrance}\n`;
    text += `*Quantity:* ${formData.quantity}\n`;
    if (formData.budget) text += `*Budget Range:* ₹${formData.budget}\n`;
    if (formData.message) text += `*Card / Engraving Message:* "${formData.message}"\n`;
    if (formData.specialRequest) text += `*Special Details:* ${formData.specialRequest}\n`;
    text += `\nI would love to discuss and finalize the design. Please share details!`;

    const url = `https://wa.me/917378670106?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="custom-gifts-page" id="custom-gifts-page">
      <div className="container">
        {/* Header */}
        <header className="custom-header">
          <span className="tag tag--gold" style={{ marginBottom: '0.5rem' }}>
            <Sparkles size={13} /> Bespoke Atelier
          </span>
          <h1>Personalized Creations</h1>
          <div className="divider" />
          <p>
            Every relationship is unique, and so should be your gift. Let us craft 
            custom candles, custom gift hampers, and tailored packaging for your memorable moments.
          </p>
        </header>

        {/* 3 Step Process */}
        <div className="custom-steps">
          <div className="custom-step">
            <div className="custom-step__number">1</div>
            <h3 className="custom-step__title">Share Your Vision</h3>
            <p className="custom-step__desc">
              Tell us the occasion, your preferred candle shapes, hues, fragrance, and any special message.
            </p>
          </div>

          <div className="custom-step">
            <div className="custom-step__number">2</div>
            <h3 className="custom-step__title">Handcrafted In Nagpur</h3>
            <p className="custom-step__desc">
              We hand-pour every candle using pure soy wax, premium fragrances, and custom packaging.
            </p>
          </div>

          <div className="custom-step">
            <div className="custom-step__number">3</div>
            <h3 className="custom-step__title">Wrapped In Love</h3>
            <p className="custom-step__desc">
              Delivered in aesthetic gift wrap with handwritten cards, ready to warm your loved one&apos;s heart.
            </p>
          </div>
        </div>

        {/* Custom Order Form */}
        <div className="custom-form-container">
          <h2 className="custom-form-title">Customize Your Gift</h2>
          <p className="custom-form-sub">
            Fill in your preferences below, and we will connect instantly on WhatsApp to finalize your design.
          </p>

          <form onSubmit={handleSendWhatsApp}>
            <div className="custom-form-grid">
              <div className="form-group">
                <label htmlFor="custom-name">Your Name *</label>
                <input
                  type="text"
                  id="custom-name"
                  name="name"
                  required
                  placeholder="e.g. Kaveri Deshmukh"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="custom-phone">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  id="custom-phone"
                  name="phone"
                  required
                  placeholder="e.g. +91 98765 43210"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="custom-occasion">Occasion</label>
                <select
                  id="custom-occasion"
                  name="occasion"
                  className="form-control"
                  value={formData.occasion}
                  onChange={handleChange}
                >
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Wedding / Engagement">Wedding / Engagement</option>
                  <option value="Festivals (Diwali, Rakhi, etc.)">Festivals</option>
                  <option value="Baby Shower / Welcome">Baby Shower</option>
                  <option value="Corporate / Bulk">Corporate / Bulk Gifting</option>
                  <option value="Personal Keepsake">Just Because / Keepsake</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="custom-product">Product Type</label>
                <select
                  id="custom-product"
                  name="productType"
                  className="form-control"
                  value={formData.productType}
                  onChange={handleChange}
                >
                  <option value="Teddy Candles">Teddy Bear Candle</option>
                  <option value="Flower Candle Bouquet">Flower Candle Bouquet</option>
                  <option value="Curated Luxury Hamper">Curated Luxury Gift Hamper</option>
                  <option value="Scented Jar Candle">Scented Glass Jar Candle</option>
                  <option value="Festival Diya & Candle Set">Festival Gift Box</option>
                  <option value="Bulk Event Favours">Event Favours (20+ pcs)</option>
                  <option value="Custom Assortment">Other / Custom Mix</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="custom-color">Color Theme</label>
                <select
                  id="custom-color"
                  name="colorTheme"
                  className="form-control"
                  value={formData.colorTheme}
                  onChange={handleChange}
                >
                  <option value="Warm Ivory & Champagne Gold">Warm Ivory & Champagne Gold</option>
                  <option value="Blush Pink & Rose">Blush Pink & Rose</option>
                  <option value="Pastel Lilac & Cream">Pastel Lilac & Cream</option>
                  <option value="Earthy Terracotta & Brown">Earthy Terracotta & Brown</option>
                  <option value="Custom Palette">Custom (I will describe)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="custom-scent">Fragrance Preference</label>
                <select
                  id="custom-scent"
                  name="fragrance"
                  className="form-control"
                  value={formData.fragrance}
                  onChange={handleChange}
                >
                  <option value="French Vanilla">Warm French Vanilla</option>
                  <option value="English Lavender">Calming English Lavender</option>
                  <option value="Fresh Rose Bouquet">Fresh Rose Petals</option>
                  <option value="Sandalwood & Amber">Sandalwood & Golden Amber</option>
                  <option value="Unscented (Pure Soy)">Unscented / Pure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="custom-qty">Quantity</label>
                <input
                  type="number"
                  id="custom-qty"
                  name="quantity"
                  min="1"
                  className="form-control"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="custom-budget">Budget Range (₹, optional)</label>
                <input
                  type="text"
                  id="custom-budget"
                  name="budget"
                  placeholder="e.g. ₹1000 - ₹2500"
                  className="form-control"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group form-group--full">
                <label htmlFor="custom-msg">Card Message / Name for Engraving (optional)</label>
                <input
                  type="text"
                  id="custom-msg"
                  name="message"
                  placeholder="e.g. Happy 25th Anniversary Mom & Dad! With love, Always."
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group form-group--full">
                <label htmlFor="custom-special">Additional Details / Special Requests</label>
                <textarea
                  id="custom-special"
                  name="specialRequest"
                  placeholder="Describe your design, ribbon color preference, or delivery timeline needed..."
                  className="form-control"
                  value={formData.specialRequest}
                  onChange={handleChange}
                />
              </div>

              <div className="form-photo-hint">
                <ImageIcon size={22} />
                <span>
                  <strong>Have a Pinterest or Instagram reference?</strong> You can share reference photos directly with us when we connect on WhatsApp!
                </span>
              </div>
            </div>

            <div className="custom-form-submit">
              <button type="submit" className="btn btn--whatsapp" id="submit-custom-btn">
                <MessageCircle size={20} />
                Send Request on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomGifts;
