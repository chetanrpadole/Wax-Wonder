import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917378670106?text=Hi%20Wrapped%20In%20Love!%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      id="whatsapp-btn"
    >
      <MessageCircle size={26} />
      <span className="whatsapp-float__tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
