import React, { useEffect } from 'react';
import { Building2, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Bancarios = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="sector-page">
      <div className="sector-hero" style={{ background: 'linear-gradient(to bottom, #0a0d14, #131b2f)', padding: '120px 24px 80px', textAlign: 'center' }}>
        <Building2 size={64} style={{ color: '#D4AF37', margin: '0 auto 24px' }} />
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>
          Direitos dos <span className="text-gradient">Bancários</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
          Informações exclusivas para funcionários e ex-funcionários de instituições financeiras. Entenda sobre jornada, metas e cargos de confiança.
        </p>
      </div>

      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="content-grid" style={{ display: 'grid', gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          
          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#D4AF37' }}>Jornada e Horas Extras</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              A jornada padrão do bancário é de 6 horas diárias (30 horas semanais). A 7ª e 8ª horas trabalhadas frequentemente geram direito a recebimento como horas extras se o cargo não tiver real fidúcia (poder de mando).
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#10b981" /> Cargo de confiança sem poder de gestão real (ex: gerentes de relacionamento).
              </li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#10b981" /> Participação em cursos obrigatórios fora do horário.
              </li>
            </ul>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#D4AF37' }}>Cobrança de Metas e Assédio</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              A pressão desproporcional, cobrança de metas inatingíveis, ranqueamento vexatório (exposição de quem vendeu menos) e ameaças constantes de demissão configuram assédio moral, passível de indenização e reparação.
            </p>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#D4AF37' }}>Equiparação Salarial</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
              Muitos bancos criam nomes de cargos diferentes (Analista Júnior, Pleno, Sênior) para pessoas que, na prática, fazem exatamente as mesmas tarefas, com a mesma produtividade e perfeição técnica. 
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={20} color="#10b981" /> Se você faz o mesmo que um colega, mas recebe menos, pode ter direito à diferença salarial retroativa.
              </li>
            </ul>
          </div>

          <div className="info-card glass-panel" style={{ padding: '32px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#D4AF37' }}>Doenças Ocupacionais (Burnout e LER)</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              A pressão extrema por resultados frequentemente desencadeia a Síndrome de Burnout (esgotamento mental). Já o excesso de digitação causa LER/DORT. O banco pode ser responsabilizado por essas doenças geradas pelo ambiente tóxico ou repetitivo, resultando em indenizações severas.
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

export default Bancarios;
