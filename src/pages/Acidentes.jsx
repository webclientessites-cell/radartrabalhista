import React, { useEffect } from 'react';
import { AlertTriangle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Acidentes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sector-page">
      <div className="sector-hero" style={{ background: 'linear-gradient(to bottom, #0a0d14, #131b2f)', padding: '120px 24px 80px', textAlign: 'center' }}>
        <AlertTriangle size={64} style={{ color: '#ef4444', margin: '0 auto 24px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>
          Acidente de <span className="text-gradient">Trabalho</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
          Informações essenciais sobre afastamento, CAT, estabilidade e indenizações para quem sofreu acidentes ou doenças ocupacionais.
        </p>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="content-grid" style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ef4444' }}>O que caracteriza acidente?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Além do acidente típico ocorrido no ambiente de trabalho, a lei também considera:
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#ef4444" /> Doenças Ocupacionais (L.E.R., Burnout, depressão adquirida pelo ambiente tóxico).
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#ef4444" /> Acidente de Trajeto (na ida ou volta para o trabalho).
              </li>
            </ul>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ef4444' }}>Seus Direitos Básicos</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Ao se afastar por mais de 15 dias pelo INSS (Auxílio-Doença Acidentário), você ganha <strong>12 meses de estabilidade</strong> no emprego ao retornar. Além disso, a empresa tem a obrigação de emitir a CAT (Comunicação de Acidente de Trabalho) imediatamente.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ef4444' }}>Indenizações (Danos Morais e Estéticos)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Além do tratamento médico, se o acidente ocorreu por negligência da empresa (falta de treinamento, equipamento defeituoso, pressão excessiva), você tem direito a receber indenizações financeiras por todo o sofrimento (dano moral) e pelas marcas físicas ou amputações (dano estético), que podem chegar a valores bastante elevados dependendo da gravidade.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#ef4444' }}>Acidente no Trajeto (Ida ou Volta)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Mesmo que a lei tenha mudado recentemente, o acidente sofrido no caminho de casa para o trabalho (ou vice-versa) ainda garante a estabilidade de 12 meses no emprego quando gera afastamento pelo INSS. E se você estiver em transporte fornecido pela empresa, a responsabilidade do patrão é integral.
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

export default Acidentes;
