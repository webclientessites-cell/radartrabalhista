import React, { useEffect } from 'react';
import { Tractor, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Agro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sector-page">
      <div className="sector-hero" style={{ background: 'linear-gradient(to bottom, #0a0d14, #131b2f)', padding: '120px 24px 80px', textAlign: 'center' }}>
        <Tractor size={64} style={{ color: '#84cc16', margin: '0 auto 24px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>
          Direitos no <span className="text-gradient">Agronegócio</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
          Orientação para trabalhadores rurais, safreiros e motoristas. Entenda regras sobre moradia, jornada no campo e adicionais de insalubridade.
        </p>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="content-grid" style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#84cc16' }}>Jornada Rural e Pausas</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Trabalhadores rurais possuem direito a horas extras e, especialmente, pausas obrigatórias devido ao esforço físico e exposição ao sol, que muitas vezes não são respeitadas.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#84cc16" /> Intervalo intrajornada obrigatório.
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#84cc16" /> Adicional noturno maior que o urbano (a partir das 21h ou 20h dependendo da atividade).
              </li>
            </ul>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#84cc16' }}>Insalubridade e Agrotóxicos</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              O contato ou a proximidade com defensores agrícolas e produtos químicos no campo pode dar direito à insalubridade em grau máximo. Falta de EPIs agrava ainda mais a situação do trabalhador.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#84cc16' }}>Tempo de Deslocamento (Horas in Itinere)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Muitas fazendas e usinas ficam em locais de difícil acesso, sem transporte público, obrigando o trabalhador rural a usar o ônibus da empresa. Dependendo do contrato e da situação, as horas gastas dentro desse transporte podem ser consideradas como tempo à disposição do patrão, gerando milhares de reais em horas extras retroativas.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#84cc16' }}>Falta de Estrutura e Condições Sanitárias</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Trabalhar no campo sem acesso a banheiros limpos, água potável gelada, local coberto para refeição e sem os Equipamentos de Proteção Individual (EPI) corretos gera indenizações massivas por Dano Moral. A humilhação diária por falta de estrutura básica é punida severamente pela justiça do trabalho.
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

export default Agro;
