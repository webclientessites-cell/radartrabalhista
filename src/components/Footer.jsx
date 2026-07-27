import React from 'react';
import { Scale, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contato" className="footer">
      <div className="container">
        <div className="footer-grid">
          
          <div className="footer-col brand-col">
            <div className="logo-container" style={{ marginBottom: '16px' }}>
              <span className="logo-text" style={{ fontSize: '1.25rem' }}>Radar<span className="text-gradient">Trabalhista</span></span>
            </div>
            <p className="footer-desc" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              O Radar Trabalhista é um portal nacional de informação, orientação inicial e triagem.
              <br /><br />
              <strong>Aviso Legal:</strong> Não somos um escritório de advocacia, não prestamos serviços jurídicos, nem garantimos resultados de processos judiciais. Nosso objetivo é democratizar a informação.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Áreas de Atuação</h4>
            <ul className="footer-links">
              <li><a href="#">Rescisão Indireta</a></li>
              <li><a href="#">Horas Extras não pagas</a></li>
              <li><a href="#">Assédio Moral no Trabalho</a></li>
              <li><a href="#">Doenças Ocupacionais</a></li>
              <li><a href="#">Reversão de Justa Causa</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Dúvidas Frequentes</h4>
            <ul className="footer-links">
              <li><a href="#">Fui demitido, quais meus direitos?</a></li>
              <li><a href="#">Como calcular a rescisão?</a></li>
              <li><a href="#">O que é adicional de insalubridade?</a></li>
              <li><a href="#">FGTS atrasado, o que fazer?</a></li>
              <li><a href="#">Trabalho sem carteira assinada</a></li>
            </ul>
          </div>
          
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Fale com um Especialista</h4>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '0.9rem' }}>
              Tire suas dúvidas ou envie seus documentos para uma análise preliminar gratuita e 100% sigilosa.
            </p>
            
            <a 
              href="https://wa.me/5511999999999?text=Ol%C3%A1%2C%20estou%20no%20site%20Radar%20Trabalhista%20e%20gostaria%20de%20falar%20com%20um%20especialista." 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-whatsapp-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
              </svg>
              Chamar no WhatsApp
            </a>

            <div className="contact-item" style={{ marginTop: '24px' }}>
              <Mail size={18} className="text-gradient" />
              <span>contato@radartrabalhista.com.br</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} className="text-gradient" />
              <span>Atendimento Online para todo o Brasil</span>
            </div>
          </div>
          
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Radar Trabalhista. Todos os direitos reservados.</p>
          <div className="legal-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
