import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import './HeroSection.css';

const banners = [
  {
    title: <>Radar Trabalhista: <span className="text-gradient">Informação e Orientação</span> para o trabalhador.</>,
    subtitle: "Descubra como a legislação protege você. Entenda seus direitos sobre horas extras, FGTS, jornada e rescisão."
  },
  {
    title: <>Ficou com dúvidas após a sua <span className="text-gradient">rescisão?</span></>,
    subtitle: "A informação é o seu maior direito. Realize uma triagem inicial para entender se os cálculos da sua saída estão de acordo com a lei."
  },
  {
    title: <>Ambiente de trabalho, <span className="text-gradient">metas e saúde.</span></>,
    subtitle: "Tire suas dúvidas sobre jornada excessiva, acúmulo de funções, estabilidade e prevenção de acidentes de trabalho."
  }
];

const HeroSection = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 8000); // Aumentado para 8 segundos para dar tempo de ler
    return () => clearInterval(timer);
  }, []);

  const scrollToAvaliacao = () => {
    document.getElementById('avaliacao').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="hero-section">
      <div className="hero-glow"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheck size={18} className="text-gradient" />
            <span>Diagnóstico Online Gratuito</span>
          </div>
          
          <div className="banner-slider">
            {banners.map((banner, index) => (
              <div key={index} className={`banner-item ${index === currentBanner ? 'active' : ''}`}>
                <h1 className="hero-title">{banner.title}</h1>
                <p className="hero-subtitle">{banner.subtitle}</p>
              </div>
            ))}
          </div>
          
          <div className="hero-actions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <button className="btn-primary btn-pulse btn-large" onClick={scrollToAvaliacao}>
              <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>🔍</span> Iniciar Triagem Gratuita
            </button>
            
            <div className="opportunity-counter" style={{ background: 'rgba(27, 77, 137, 0.1)', border: '1px solid var(--accent-blue-light)', padding: '12px 24px', borderRadius: '8px', maxWidth: '500px', marginTop: '8px' }}>
              <p style={{ color: 'var(--accent-blue-light)', fontSize: '0.95rem', margin: 0, fontWeight: 500 }}>
                <strong>Informação Segura:</strong> Este é um canal informativo. O resultado desta triagem não substitui a consulta a um advogado devidamente inscrito na OAB.
              </p>
            </div>
          </div>
          
          <div className="hero-social-proof">
            <span className="social-proof-text" style={{ fontSize: '1rem', marginTop: '16px', display: 'block' }}>
              Descubra, de forma simples e sem compromisso, informações sobre o seu ambiente de trabalho.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
