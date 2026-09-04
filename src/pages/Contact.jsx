import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import './Contact.css';

const Contact = () => {
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

        <div className="contact-container">
          <div className="contact-cards-grid">
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
                <InstagramIcon size={22} />
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

            <div className="contact-card contact-card--full">
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
      </div>
    </div>
  );
};

export default Contact;
