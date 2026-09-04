import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate WhatsApp forward for immediate response
    const text = `*New Contact Enquiry — Wrapped In Love*\n*From:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
    const url = `https://wa.me/917378670106?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    window.open(url, '_blank');
  };

  return (
    <div className="contact-page" id="contact-page">
      <div className="container">
        {/* Header */}
        <header className="contact-header">
          <span className="tag tag--gold" style={{ marginBottom: '0.5rem' }}>
            <Sparkles size={13} /> We&apos;d Love to Hear from You
          </span>
          <h1>Get In Touch</h1>
          <div className="divider" />
          <p>
            Questions about our candles, custom creations, or bulk gifting?
            Reach out to our Nagpur atelier and we will be delighted to assist you.
          </p>
        </header>

        <div className="contact-grid">
          {/* Info Panels */}
          <div className="contact-info-panel">
            <div className="contact-card">
              <div className="contact-card__icon">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="contact-card__title">Atelier Location</h3>
                <p className="contact-card__text">
                  Nagpur, Maharashtra, India<br />
                  Local hand-delivery in Nagpur & Pan-India courier available.
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="contact-card__title">Phone & WhatsApp</h3>
                <p className="contact-card__text">
                  <a href="tel:+917378670106" className="contact-card__link">
                    +91 7378670106
                  </a>
                  <br />
                  Quick answers for orders and custom queries.
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="contact-card__title">Email Us</h3>
                <p className="contact-card__text">
                  <a href="mailto:wrappedinlove.sv@gmail.com" className="contact-card__link">
                    wrappedinlove.sv@gmail.com
                  </a>
                  <br />
                  For corporate proposals and event inquiries.
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">
                <Instagram size={22} />
              </div>
              <div>
                <h3 className="contact-card__title">Follow on Instagram</h3>
                <p className="contact-card__text">
                  <a
                    href="https://instagram.com/wrappedinlove_sv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card__link"
                  >
                    @wrappedinlove_sv
                  </a>
                  <br />
                  DM us anytime for latest creations & BTS videos.
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">
                <Clock size={22} />
              </div>
              <div>
                <h3 className="contact-card__title">Operating Hours</h3>
                <p className="contact-card__text">
                  Monday – Saturday: 10:00 AM – 8:00 PM IST<br />
                  Sunday: Custom appointments & orders only.
                </p>
              </div>
            </div>

            {/* WhatsApp Highlight banner */}
            <div className="contact-whatsapp-card">
              <MessageCircle size={32} style={{ marginBottom: '0.5rem' }} />
              <h3>Need a Quick Response?</h3>
              <p>Chat directly with our artisan on WhatsApp for instant assistance.</p>
              <a
                href="https://wa.me/917378670106?text=Hi%20Wrapped%20In%20Love!%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-panel">
            <h2>Send Us a Message</h2>
            <p>Fill out the note below and we&apos;ll get back to you promptly.</p>

            {submitted && (
              <div className="contact-success" style={{ marginBottom: '1.5rem' }}>
                <CheckCircle size={18} />
                <span>Thank you! Your message has been prepared for WhatsApp chat.</span>
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  placeholder="e.g. Aditi Sharma"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  placeholder="e.g. aditi@example.com"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number (optional)</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  placeholder="e.g. +91 98765 43210"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject *</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="e.g. Bulk order for wedding favours"
                  className="form-control"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you are looking for..."
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary"
                style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                id="contact-submit-btn"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
