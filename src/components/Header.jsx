import React, { useState, useEffect } from 'react';
import { Scale, Menu, X, Info } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    // Se não estiver na home, vai pra home primeiro e depois pro rodapé
    navigate('/');
    setTimeout(() => {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="top-disclaimer-bar">
        <Info size={14} style={{ marginRight: '6px' }} />
        Portal de Informação e Triagem Trabalhista
      </div>
      <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <div className="logo-container">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', color: 'inherit' }}>
              <span className="logo-text">Radar<span className="text-gradient">Trabalhista</span></span>
            </Link>
          </div>
          
          <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/bancarios" onClick={() => setMobileMenuOpen(false)}>Bancários</Link>
            <Link to="/farmacia" onClick={() => setMobileMenuOpen(false)}>Farmácia</Link>
            <Link to="/acidentes" onClick={() => setMobileMenuOpen(false)}>Acidentes de Trabalho</Link>
            
            <button className="btn-primary header-btn" onClick={handleContactClick}>
              Solicitar Contato
            </button>
          </nav>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
