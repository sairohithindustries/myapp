import React from 'react';
import { WhatsappIcon } from 'hugeicons-react';
import { COMPANY_INFO } from '../data/productsData';

function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Sai%20Rohith%20Industries,%20I%20have%20an%20inquiry%20regarding%20your%20products.`}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp with Sai Rohith Industries"
    >
      <WhatsappIcon size={32} />
      <span className="floating-whatsapp-tooltip">Chat with Sri Gold</span>
    </a>
  );
}

export default FloatingWhatsApp;
