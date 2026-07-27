import React, { useEffect } from 'react';
import { Factory, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Industria = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sector-page">
      <div className="sector-hero" style={{ background: 'linear-gradient(to bottom, #0a0d14, #131b2f)', padding: '120px 24px 80px', textAlign: 'center' }}>
        <Factory size={64} style={{ color: '#64748b', margin: '0 auto 24px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>
          Direitos na <span className="text-gradient">Indústria</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
          Orientação para trabalhadores de fábricas, logística e produção. Descubra os impactos de insalubridade, periculosidade e horas noturnas.
        </p>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="content-grid" style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#64748b' }}>Insalubridade e Periculosidade</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Trabalhar em ambientes com ruído alto, produtos químicos, calor excessivo ou em contato com máquinas perigosas muitas vezes garante adicionais que não são pagos corretamente.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#64748b" /> Adicional de Insalubridade (10%, 20% ou 40%).
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#64748b" /> Adicional de Periculosidade (30%) para riscos inflamáveis ou elétricos.
              </li>
            </ul>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#64748b' }}>Troca de Uniforme e Trajeto</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              O tempo gasto dentro da empresa trocando de uniforme ou aguardando transporte fornecido pela empresa (quando o local é de difícil acesso) deve ser contado como tempo de trabalho (horas extras).
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#64748b' }}>Doenças Relacionadas ao Trabalho (Ruído e Postura)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Trabalhadores da linha de produção são grandes vítimas de perda auditiva (PAIRO), problemas de coluna, tendinites e hérnias por carregamento de peso. Se você desenvolveu uma doença devido às condições da fábrica, a empresa tem a obrigação de pagar indenizações, custear tratamento médico e oferecer estabilidade no emprego.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#64748b' }}>Supressão do Horário de Almoço</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              É muito comum na indústria que o trabalhador tenha apenas 15 ou 30 minutos para engolir a comida e já voltar para o posto ou esteira de produção. A supressão do intervalo mínimo de 1 hora deve ser penalizada e o tempo suprimido precisa ser pago com acréscimo de 50%.
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

export default Industria;
