import React, { useState } from 'react';
import { Scale, Mail, Phone, MapPin, X } from 'lucide-react';
import './Footer.css';

const modalData = {
  rescisao_indireta: {
    title: "Rescisão Indireta",
    content: "A rescisão indireta é como se o funcionário desse uma 'justa causa' na empresa por descumprimento do contrato (ex: atraso de salários, assédio, ausência de FGTS). Você sai da empresa com TODOS os direitos de uma demissão sem justa causa."
  },
  horas_extras: {
    title: "Horas Extras não pagas",
    content: "O não pagamento de horas extras (inclusive tempo de troca de uniforme, tempo de espera de condução e trabalho em horário de almoço) é uma das maiores violações trabalhistas. Você pode ter direito ao pagamento de todas essas horas com acréscimo de 50% a 100%."
  },
  assedio: {
    title: "Assédio Moral no Trabalho",
    content: "Humilhações constantes, xingamentos, isolamento, metas inatingíveis ou cobranças abusivas na frente de outros configuram assédio moral. O trabalhador pode pedir indenização por danos morais e rescisão indireta."
  },
  doencas: {
    title: "Doenças Ocupacionais",
    content: "Se você adquiriu uma doença (física ou psicológica, como burnout e depressão) por causa das condições do seu trabalho, a empresa pode ser responsabilizada. Você pode ter direito a estabilidade, indenização e afastamento pago."
  },
  justa_causa: {
    title: "Reversão de Justa Causa",
    content: "Muitas empresas aplicam a justa causa de forma injusta ou exagerada apenas para não pagar as verbas rescisórias. É possível reverter isso na Justiça e receber todo o acerto (FGTS, aviso prévio, seguro-desemprego)."
  },
  direitos_demissao: {
    title: "Fui demitido, quais meus direitos?",
    content: "Na demissão sem justa causa, você deve receber: Saldo de salário, Aviso Prévio (trabalhado ou indenizado), 13º proporcional, Férias vencidas e proporcionais + 1/3, saque do FGTS com multa de 40% e guias do Seguro-Desemprego."
  },
  calcular_rescisao: {
    title: "Como calcular a rescisão?",
    content: "O cálculo exato depende do tempo de serviço, salário base, médias de comissões e horas extras. Muitas empresas 'esquecem' de incluir esses adicionais no cálculo. Uma análise profissional pode identificar se você recebeu menos do que deveria."
  },
  insalubridade: {
    title: "O que é adicional de insalubridade?",
    content: "É um valor extra (10%, 20% ou 40% do salário mínimo) pago a quem trabalha exposto a agentes nocivos à saúde, como ruído excessivo, calor extremo, produtos químicos, limpeza de banheiros públicos ou agentes biológicos (hospitais)."
  },
  fgts_atrasado: {
    title: "FGTS atrasado, o que fazer?",
    content: "A empresa é obrigada a depositar 8% do seu salário todos os meses na sua conta do FGTS. Se houver atrasos constantes ou falta de depósito, você pode pedir a Rescisão Indireta do contrato de trabalho imediatamente."
  },
  sem_carteira: {
    title: "Trabalho sem carteira assinada",
    content: "Trabalhar sem registro não tira seus direitos! Se você cumpre horário, tem chefe, não pode mandar outra pessoa no seu lugar e recebe salário, você tem o direito de ter a carteira assinada retroativamente e receber todo o FGTS, férias e 13º do período."
  }
};

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (e, key) => {
    e.preventDefault();
    setActiveModal(key);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const scrollToTop = () => {
    closeModal();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              <li><a href="#" onClick={(e) => openModal(e, 'rescisao_indireta')}>Rescisão Indireta</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'horas_extras')}>Horas Extras não pagas</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'assedio')}>Assédio Moral no Trabalho</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'doencas')}>Doenças Ocupacionais</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'justa_causa')}>Reversão de Justa Causa</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-heading">Dúvidas Frequentes</h4>
            <ul className="footer-links">
              <li><a href="#" onClick={(e) => openModal(e, 'direitos_demissao')}>Fui demitido, quais meus direitos?</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'calcular_rescisao')}>Como calcular a rescisão?</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'insalubridade')}>O que é adicional de insalubridade?</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'fgts_atrasado')}>FGTS atrasado, o que fazer?</a></li>
              <li><a href="#" onClick={(e) => openModal(e, 'sem_carteira')}>Trabalho sem carteira assinada</a></li>
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

      {activeModal && (
        <div className="footer-modal-overlay" onClick={closeModal}>
          <div className="footer-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="footer-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <h3 className="footer-modal-title">{modalData[activeModal].title}</h3>
            <p className="footer-modal-body">{modalData[activeModal].content}</p>
            <button className="footer-modal-btn" onClick={scrollToTop}>
              Avaliar meu caso gratuitamente
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
