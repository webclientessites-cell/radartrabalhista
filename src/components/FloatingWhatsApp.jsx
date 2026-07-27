import React from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20do%20Radar%20Trabalhista." 
      target="_blank" 
      rel="noopener noreferrer"
      className="floating-whatsapp"
      title="Fale conosco no WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
      </svg>
      <span className="tooltip-text">Falar com Especialista</span>
    </a>
  );
};

export default FloatingWhatsApp;
