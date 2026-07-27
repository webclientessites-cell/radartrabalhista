import React, { useEffect } from 'react';
import { Pill, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Farmacia = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sector-page">
      <div className="sector-hero" style={{ background: 'linear-gradient(to bottom, #0a0d14, #131b2f)', padding: '120px 24px 80px', textAlign: 'center' }}>
        <Pill size={64} style={{ color: '#10b981', margin: '0 auto 24px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>
          Direitos no Setor de <span className="text-gradient">Farmácias</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
          Orientação voltada para balconistas, gerentes e farmacêuticos. Saiba como a lei trata acúmulo de função, domingos e feriados.
        </p>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="content-grid" style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#10b981' }}>Acúmulo e Desvio de Função</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Muitos profissionais são contratados como balconistas ou atendentes, mas são obrigados a realizar atividades que fogem do seu contrato inicial, sem remuneração adicional.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#10b981" /> Aplicação de injeções (sem adicional de insalubridade).
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#10b981" /> Limpeza pesada da loja ou banheiro.
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#10b981" /> Fechamento de caixa e transporte de valores.
              </li>
            </ul>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#10b981' }}>Jornadas Exaustivas e Feriados</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              O trabalho em domingos e feriados possui regras estritas de revezamento e folga compensatória. A supressão de intervalos de descanso (almoço/jantar) para atender balcão é uma irregularidade comum.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#10b981' }}>Trabalho em Feriados e Dobras</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              É extremamente comum o trabalho em feriados nacionais, municipais e estaduais no setor farmacêutico. A legislação determina que se você trabalha em um feriado, ele deve ser pago em dobro (100%) ou compensado com folga em outro dia. Apenas folgar no seu dia normal da escala não substitui o feriado.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#10b981' }}>Furtos de Clientes e Quebra de Caixa</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Muitos gerentes e balconistas sofrem descontos no salário quando há furto de mercadorias na loja (balanço negativo) ou faltas no caixa. Esses descontos são ilegais se a empresa não pagar a verba de "quebra de caixa" mensalmente para compensar esses riscos. O risco do negócio pertence ao patrão, não ao funcionário.
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

export default Farmacia;
