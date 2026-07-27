import React, { useEffect } from 'react';
import { Stethoscope, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Saude = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sector-page">
      <div className="sector-hero" style={{ background: 'linear-gradient(to bottom, #0a0d14, #131b2f)', padding: '120px 24px 80px', textAlign: 'center' }}>
        <Stethoscope size={64} style={{ color: '#ec4899', margin: '0 auto 24px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>
          Direitos na Área da <span className="text-gradient">Saúde</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
          Orientação especializada para enfermeiros, técnicos, médicos e cuidadores. Entenda como funciona a jornada 12x36 e a insalubridade de grau máximo.
        </p>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="content-grid" style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ec4899' }}>Insalubridade e Piso Salarial</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              O contato com agentes biológicos infecciosos pode garantir o adicional de insalubridade em grau máximo (40%). Além disso, a lei estabelece pisos salariais específicos para a enfermagem que muitas vezes são descumpridos pelas clínicas.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#ec4899" /> Falta de pagamento do Piso Nacional da Enfermagem.
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#ec4899" /> Pagamento de insalubridade em grau menor do que o devido.
              </li>
            </ul>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ec4899' }}>Jornada 12x36 e Horas Extras</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              A jornada de plantão 12x36 tem regras estritas. Se você for obrigado a emendar plantões, trabalhar em folgas ou se o seu intervalo de refeição for suprimido pelas demandas emergenciais do hospital, esses períodos devem ser pagos como horas extras.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ec4899' }}>Horas Extras Invisíveis no Plantão</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Na transição de turnos em hospitais e clínicas, é frequente que o profissional precise chegar mais cedo para pegar o plantão ou sair mais tarde para finalizar a passagem de pacientes (ou preenchimento de prontuários). Esse tempo além das 12h contratuais quase nunca é pago e gera passivos gigantescos de horas extras.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ec4899' }}>Sobrecarga e Acúmulo de Pacientes (Dano Moral)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Trabalhar cuidando de 20, 30 pacientes sozinho em uma ala hospitalar porque a empresa reduziu o quadro de funcionários é ilegal. Essa sobrecarga brutal coloca a vida dos pacientes em risco, destrói a saúde mental do profissional (Burnout) e pode resultar em indenizações por dano moral existencial contra o hospital ou a cooperativa.
            </p>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button className="btn-primary btn-large btn-pulse" onClick={() => {
              navigate('/');
              setTimeout(() => document.getElementById('avaliacao')?.scrollIntoView({ behavior: 'smooth' }), 100);
            }}>
              Fazer Triagem Gratuita <ChevronRight />
            </button>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Saude;
