import React, { useEffect } from 'react';
import { Wrench, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Servicos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sector-page">
      <div className="sector-hero" style={{ background: 'linear-gradient(to bottom, #0a0d14, #131b2f)', padding: '120px 24px 80px', textAlign: 'center' }}>
        <Wrench size={64} style={{ color: '#8b5cf6', margin: '0 auto 24px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>
          Direitos em <span className="text-gradient">Serviços Gerais</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
          Restaurantes, limpeza, segurança e telemarketing. Conheça as principais situações de violação de direitos nessas atividades essenciais.
        </p>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="content-grid" style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#8b5cf6' }}>Gorjetas, 10% e Adicional Noturno</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Em restaurantes e bares, a apropriação indevida de gorjetas pelo empregador é uma fraude comum. Além disso, as jornadas frequentemente adentram a noite sem o pagamento do adicional noturno correto.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#8b5cf6" /> Retenção ilícita da "taxa de serviço" (10%).
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#8b5cf6" /> Adicional noturno sobre as horas extras.
              </li>
            </ul>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#8b5cf6' }}>Limpeza e Segurança</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Trabalhadores da limpeza e higienização têm direito ao adicional de insalubridade, especialmente no manuseio de lixo ou limpeza de banheiros de grande circulação. Já na área de segurança e vigilância, o adicional de periculosidade é devido por lei.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#8b5cf6' }}>Desvio de Função (Faz-tudo)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Muitos profissionais são contratados como porteiros, vigias ou auxiliares de limpeza, mas acabam sendo obrigados a realizar serviços de jardinagem, manutenção elétrica ou segurança armada. Se você faz atividades além das combinadas no contrato original (ou mais complexas), tem direito ao pagamento de "plus salarial" por acúmulo ou desvio de função.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#8b5cf6' }}>Fraudes no Vale-Transporte e Refeição</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Obrigar o funcionário de limpeza ou restaurante a assumir os custos de deslocamento ou descontar valores absurdos de alimentação do contracheque são práticas comuns e puníveis. O que está na convenção coletiva do seu sindicato deve ser cumprido à risca, sob pena de multas gigantescas contra a empresa.
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

export default Servicos;
